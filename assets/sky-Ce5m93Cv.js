import{S as i,a4 as a,d as c}from"./three.module-BblPRNwT.js";const v=`
  float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + 1.7; a *= .5; } return s / .97; }`,n="varying vec3 wp; void main(){ vec4 w = modelMatrix * vec4(position, 1.); wp = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }";function l(e,t){const o=r=>new c(r);return new i({uniforms:{time:{value:0},sunDir:{value:t},top:{value:o(e.skyTop)},mid:{value:o(e.skyMid)},hor:{value:o(e.hor)},cDark:{value:o(e.cloudDark)},cLight:{value:o(e.cloudLight)},glow:{value:o(e.glow)},sun:{value:o(e.key[0])}},vertexShader:n,fragmentShader:`uniform float time; uniform vec3 sunDir, top, mid, hor, cDark, cLight, glow, sun; varying vec3 wp; ${v}
      void main(){
        vec3 d = normalize(wp - cameraPosition); float e = d.y, sd = max(dot(d, sunDir), 0.);
        vec2 uv = d.xz / (max(e, 0.) + 0.12) * 3.6 + vec2(time * 0.006, time * 0.003);
        float n = fbm(uv), n2 = fbm(uv * 2.4 + 5.3);
        vec3 cl = mix(cLight, cDark, smoothstep(0.38, 0.72, n * 0.6 + n2 * 0.5));
        cl = mix(cl, mix(cLight, sun, 0.5), pow(sd, 3.) * smoothstep(0.5, 0.3, n) * 0.8);     // sunlit cloud edges
        cl = mix(mix(cLight, glow, 0.75), cl, smoothstep(0.2, 0.36, n - pow(sd, 4.) * 0.18)); // breaks, wider near the sun
        cl = mix(cl, top, smoothstep(0.5, 1.0, e) * 0.35);
        vec3 col = mix(hor, mix(mid, cl, 0.88), smoothstep(-0.02, 0.3, e));
        col += sun * pow(sd, 30.) * 0.5;
        gl_FragColor = vec4(col, 1.);
      }`,side:a,depthWrite:!1})}const m=()=>new i({uniforms:{scale:{value:400}},vertexShader:`attribute float size; attribute vec3 color; uniform float scale; varying vec3 vC;
    void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size > 0. ? max(2., size * scale / -mv.z) : 0.; gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying vec3 vC; void main(){ vec2 d = gl_PointCoord - .5; float r = dot(d, d); if (r > .25) discard; gl_FragColor = vec4(vC * (r > .13 ? .65 : 1.), 1.); }"});export{m as d,l as s};
