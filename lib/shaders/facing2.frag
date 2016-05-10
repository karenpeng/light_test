precision highp float;
uniform mat4 camMat;
uniform mat4 camMatInverse;
varying vec3 wNormal;
varying vec2 vUv;
uniform sampler2D textureColor;
uniform sampler2D textureAlpha;
uniform float offset;
uniform float fade;
uniform float power;
void main(void) {
  float fader = pow((1.0+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-1.0))*.5,power)*2.;
  vec4 texB = texture2D(textureColor, vUv);
  vec4 tex = texture2D(textureColor, (texB.rg*.021)+vec2(vUv.x*.4+offset,vUv.y));
  vec4 texA = texture2D(textureAlpha, vUv+(.05-tex.rg*.1));
  vec4 camNorm = vec4(vec3(wNormal),0.) * camMat;
  gl_FragColor = vec4(vec3(min(1.0,max(0.0,pow(camNorm.z,1.5))))*tex.rgb*texA.a*tex.a*fader, 1.0);
}
