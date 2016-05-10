(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


exports.simpleVert =
  "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );\n}\n";

exports.simpleFrag =
  "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );\n}\n";

exports.facingVert =
  "varying vec2 vUv;\nvarying vec3 wNormal;\nuniform float switcher;\nuniform float offset;\nuniform float warp;\nuniform float warpSpeed;\nvoid main() {\n  vUv = uv;\n  wNormal = mat3(modelMatrix[0].xyz,modelMatrix[1].xyz,modelMatrix[2].xyz)*normal;\n  wNormal = normalize(wNormal);\n  gl_Position = projectionMatrix *\n  modelViewMatrix * vec4(position+vec3(cos((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,sin((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,0), 1.0 );\n}\n";

exports.facingFrag2 =
  "precision highp float;\nuniform mat4 camMat;\nuniform mat4 camMatInverse;\nvarying vec3 wNormal;\nvarying vec2 vUv;\nuniform sampler2D textureColor;\nuniform sampler2D textureAlpha;\nuniform float offset;\nuniform float fade;\nuniform float power;\nvoid main(void) {\n  float fader = pow((1.0+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-1.0))*.5,power)*2.;\n  vec4 texB = texture2D(textureColor, vUv);\n  vec4 tex = texture2D(textureColor, (texB.rg*.021)+vec2(vUv.x*.4+offset,vUv.y));\n  vec4 texA = texture2D(textureAlpha, vUv+(.05-tex.rg*.1));\n  vec4 camNorm = vec4(vec3(wNormal),0.) * camMat;\n  gl_FragColor = vec4(vec3(min(1.0,max(0.0,pow(camNorm.z,1.5))))*tex.rgb*texA.a*tex.a*fader, 1.0);\n}\n";

exports.facingFrag3 =
  "precision highp float;\nuniform mat4 camMat;\nuniform mat4 camMatInverse;\nvarying vec3 wNormal;\nuniform vec3 Color1;\nuniform vec3 Color2;\nuniform vec3 Color3;\nvarying vec2 vUv;\nuniform sampler2D textureColor;\nuniform sampler2D textureAlpha;\nuniform float offset;\nuniform float offsetMult;\nuniform float fade;\nuniform float power;\nuniform float repeat;\nvoid main(void) {\n  float fader = pow((.5+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-.5))*1.0,power)*2.;\n  vec4 texA = texture2D(textureAlpha, vUv);\n  vec4 tex = texture2D(textureColor, vec2(texA.a,0.0)*.1+vec2(vUv.x*(repeat*.01)+offset*(offsetMult*.01),vUv.y));\n  vec3 col1 = Color1*tex.r;\n  vec3 col2 = Color2*tex.g;\n  vec3 col3 = Color3*tex.b;\n  vec3 col = col1+col2+col3;\n  vec4 camNorm = vec4(vec3(wNormal),0.) * viewMatrix;\n  gl_FragColor = vec4(vec3(min(1.0,max(0.0,min(1.0,abs(pow(camNorm.z,3.))))))*col*col*texA.a*fader, 1.0);\n}\n";

exports.facingVertTunnel =
  "varying vec2 vUv;\nuniform float switcher;\nuniform float offset;\nuniform float warp;\nuniform float warpSpeed;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix *\n  modelViewMatrix * vec4(position+vec3(cos((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,sin((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,0), 1.0 );\n}\n";

exports.facingFragtunnel =
  "precision highp float;\nuniform vec3 Color1;\nuniform vec3 Color2;\nuniform vec3 Color3;\nvarying vec2 vUv;\nuniform sampler2D textureColor;\nuniform sampler2D textureAlpha;\nuniform float offset;\nuniform float fade;\nuniform float power;\nuniform float repeat;\nvoid main(void) {\n  float fader = pow((.5+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-.5))*1.0,power)*4.;\n  vec4 texA = texture2D(textureAlpha, vUv);\n  vec4 tex = texture2D(textureColor, vec2(texA.a,0.0)*.1+vec2(vUv.x*(repeat*.01)+offset,vUv.y));\n  vec3 col1 = Color1*tex.r;\n  vec3 col2 = Color2*tex.g;\n  vec3 col3 = Color3*tex.b;\n  vec3 col = col1+col2+col3;\n  gl_FragColor = vec4(col*col*texA.a*fader, 1.0);\n}\n";

},{}]},{},[1]);
