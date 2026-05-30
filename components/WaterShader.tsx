'use client'
import { useEffect, useRef } from 'react'

// Real-time fragment shader rendering caustic water on a fullscreen quad.
// Uses OGL — no Three.js, no geometry, no Roblox risk.
// Falls back gracefully to a CSS gradient if WebGL is unavailable.
export function WaterShader({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (typeof window === 'undefined') return
    let mounted = true
    let raf = 0
    let cleanup: (() => void) | undefined

    const load = async () => {
      try {
        const { Renderer, Program, Mesh, Triangle } = await import('ogl')
        if (!mounted || !ref.current) return

        const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) })
        const gl = renderer.gl
        gl.canvas.style.position = 'absolute'
        gl.canvas.style.inset = '0'
        gl.canvas.style.width = '100%'
        gl.canvas.style.height = '100%'
        ref.current.appendChild(gl.canvas)

        const geometry = new Triangle(gl)

        const program = new Program(gl, {
          vertex: `
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
              vUv = position * 0.5 + 0.5;
              gl_Position = vec4(position, 0.0, 1.0);
            }
          `,
          fragment: `
            precision highp float;
            uniform float uTime;
            uniform vec2 uResolution;
            varying vec2 vUv;

            // Pool palette
            const vec3 deepBlue = vec3(0.04, 0.12, 0.22);
            const vec3 midBlue = vec3(0.055, 0.31, 0.48);
            const vec3 brightBlue = vec3(0.11, 0.62, 0.85);
            const vec3 highlight = vec3(0.65, 0.92, 1.0);

            // Cheap noise
            float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              vec2 u = f * f * (3.0 - 2.0 * f);
              return mix(mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
                         mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
            }

            void main() {
              vec2 uv = gl_FragCoord.xy / uResolution.xy;
              vec2 p = uv;
              p.x *= uResolution.x / uResolution.y;

              float t = uTime * 0.18;

              // Layered noise for caustic-like depth
              float n1 = noise(p * 3.0 + vec2(t, t * 0.7));
              float n2 = noise(p * 5.5 - vec2(t * 0.8, t * 0.5));
              float n3 = noise(p * 9.0 + vec2(t * 0.3, -t * 0.9));

              float caustics = pow(n1 * 0.6 + n2 * 0.3 + n3 * 0.1, 1.8);

              // Vertical gradient (deeper at top, lighter toward bottom)
              float vGrad = smoothstep(-0.1, 1.2, uv.y);

              vec3 color = mix(deepBlue, midBlue, vGrad);
              color = mix(color, brightBlue, caustics * 0.55);

              // Sparse highlights
              float spec = smoothstep(0.78, 0.92, caustics);
              color = mix(color, highlight, spec * 0.4);

              // Vignette
              float v = 1.0 - smoothstep(0.4, 1.1, distance(uv, vec2(0.5, 0.55)));
              color *= 0.65 + 0.45 * v;

              gl_FragColor = vec4(color, 1.0);
            }
          `,
          uniforms: {
            uTime: { value: 0 },
            uResolution: { value: [window.innerWidth, window.innerHeight] },
          },
        })

        const mesh = new Mesh(gl, { geometry, program })

        const resize = () => {
          if (!ref.current) return
          const w = ref.current.clientWidth || window.innerWidth
          const h = ref.current.clientHeight || window.innerHeight
          renderer.setSize(w, h)
          program.uniforms.uResolution.value = [w, h]
        }
        resize()
        window.addEventListener('resize', resize)

        const loop = (t: number) => {
          program.uniforms.uTime.value = t * 0.001
          renderer.render({ scene: mesh })
          raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)

        cleanup = () => {
          cancelAnimationFrame(raf)
          window.removeEventListener('resize', resize)
          try { gl.canvas.remove() } catch (e) {}
        }
      } catch (e) {
        // OGL/WebGL unavailable — CSS fallback remains visible
      }
    }
    load()

    return () => {
      mounted = false
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`hero-bg-fallback absolute inset-0 ${className}`}
      aria-hidden
    />
  )
}
