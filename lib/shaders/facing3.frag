precision highp float;
uniform mat4 camMat;
uniform mat4 camMatInverse;
varying vec3 wNormal;
uniform vec3 Color1;
uniform vec3 Color2;
uniform vec3 Color3;
varying vec2 vUv;
uniform sampler2D textureColor;
uniform sampler2D textureAlpha;
uniform float offset;
uniform float offsetMult;
uniform float fade;
uniform float power;
uniform float repeat;
void main(void) {
  float fader = pow((.5+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-.5))*1.0,power)*2.;
  vec4 texA = texture2D(textureAlpha, vUv);
  vec4 tex = texture2D(textureColor, vec2(texA.a,0.0)*.1+vec2(vUv.x*(repeat*.01)+offset*(offsetMult*.01),vUv.y));
  vec3 col1 = Color1*tex.r;
  vec3 col2 = Color2*tex.g;
  vec3 col3 = Color3*tex.b;
  vec3 col = col1+col2+col3;
  vec4 camNorm = vec4(vec3(wNormal),0.) * viewMatrix;
  gl_FragColor = vec4(vec3(min(1.0,max(0.0,min(1.0,abs(pow(camNorm.z,3.))))))*col*col*texA.a*fader, 1.0);
}
