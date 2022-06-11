---
title: Générer des textures avec du code
slug: Web/API/WebGL_API/By_example/Textures_from_code
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Textures_from_code
original_slug: Web/API/WebGL_API/By_example/Générer_des_textures_avec_du_code
---
{{PreviousNext("Apprendre/WebGL/Par_exemple/Introduction_aux_attributs_vertex","Apprendre/WebGL/Par_exemple/Les_textures_vidéos")}}

Dans cet article, on illustre simplement comment générer des textures procédurales avec des fragments de _shaders_.

{{EmbedLiveSample("Dessiner_des_textures_avec_du_code",660,350)}}

### Dessiner des textures avec du code

Il est possible d'appliquer des textures en effectuant des calculs pour chaque pixel du fragment de _shader_.

```html hidden
<p>Génération d'une texture à partir de code. Simple demonstration
    de la génération de textures procédurale</p>
<canvas>Il semblerait que votre navigateur ne supporte
    pas l'élément canvas.</canvas>
```

```css hidden
body {
  text-align : center;
}
canvas {
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
```

```html
<script type="x-shader/x-vertex" id="vertex-shader">
#version 100
precision highp float;
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 128.0;
}
</script>
```

```html
<script type="x-shader/x-fragment" id="fragment-shader">
#version 100
precision mediump float;
// On définit une variation radiale (à partir du centre)
void main() {
  vec2 fragmentPosition = 2.0*gl_PointCoord - 1.0;
  float distance = length(fragmentPosition);
  float distanceSqrd = distance * distance;
  gl_FragColor = vec4(
    0.2/distanceSqrd,
    0.1/distanceSqrd,
    0.0, 1.0 );
}
</script>
```

```js hidden
;(function(){
```

```js
"use strict"
window.addEventListener("load", setupWebGL, false);
var gl,
  program;
function setupWebGL (evt) {
  window.removeEventListener(evt.type, setupWebGL, false);
  if (!(gl = getRenderingContext()))
    return;

  var source = document.querySelector("#vertex-shader").innerHTML;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader,source);
  gl.compileShader(vertexShader);
  source = document.querySelector("#fragment-shader").innerHTML
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,source);
  gl.compileShader(fragmentShader);
  program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var linkErrLog = gl.getProgramInfoLog(program);
    cleanup();
    document.querySelector("p").innerHTML =
      "La liaison du programme de shader a échoué. "
      + "Journal d'erreur : " + linkErrLog;
    return;
  }
  initializeAttributes();
  gl.useProgram(program);
  gl.drawArrays(gl.POINTS, 0, 1);
  cleanup();
}

var buffer;
function initializeAttributes() {
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
}

function cleanup() {
gl.useProgram(null);
if (buffer)
  gl.deleteBuffer(buffer);
if (program)
  gl.deleteProgram(program);
}
```

```js hidden
function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML = "Échec de l'obtention du contexte"
      + " WebGL. Votre navigateur ne supporte peut-être"
      + " pas WebGL.";
    return null;
  }
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
})();
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/textures-from-code).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Introduction_aux_attributs_vertex","Apprendre/WebGL/Par_exemple/Les_textures_vidéos")}}
