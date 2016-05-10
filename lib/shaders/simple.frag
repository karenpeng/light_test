precision highp float;
varying vec3 vecNormal;
uniform float offset;
varying vec2 vUv;
uniform sampler2D map;
uniform sampler2D map2;
void main(void) {
  vec4 lgts = vec4(vec3(0.0),1.0);
  vec4 tex = texture2D(map, vUv*7.);
  vec4 tex2 = texture2D(map2, vec2(offset,0)+vUv);
  gl_FragColor = vec4((tex2.b*vec3(.08,.0,.15))+pow(tex2.r,2.)*tex.rgb*9.*vec3(.3,.5,.9), 1.0);
}
