---
title: Hello GLSL
slug: Web/API/WebGL_API/By_example/Hello_GLSL
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Hello_GLSL
---
<div>{{IncludeSubnav("/fr/Apprendre")}}</div>

<p>{{PreviousNext("Apprendre/WebGL/Par_exemple/Une_pluie_de_rectangle","Apprendre/WebGL/Par_exemple/Introduction_aux_attributs_vertex")}}</p>

<p>Dans cet article, on décrit un programme de manipulation de <em>shaders</em> qui dessine un carré de couleur.</p>

<div class="note">
<p><strong>Note :</strong> Cet exemple devrait fonctionner pour l'ensemble des navigateurs récents. Cependant, pour les versions anciennes ou mobiles, il peut y avoir des dysfonctionnements. Si le canevas reste blanc, vous pouvez vérifier le résultat avec l'exemple suivant qui dessine exactement la même chose. Assurez-vous de bien lire les explications et le code présent sur cette page avant de passer à la suivante.</p>
</div>

<p>{{EmbedLiveSample("Hello_World_en_GLSL",660,425)}}</p>

<h3 id="Hello_World_en_GLSL"><em>Hello World</em> en GLSL</h3>

<p>Voici un exemple de premier programme qu'on peut écrire pour manipuler des <em>shaders</em>.</p>

<pre class="brush: html hidden">&lt;p&gt;Hello World! Hello GLSL!&lt;/p&gt;
&lt;canvas&gt;Votre navigateur semble ne pas
    supporter l'élément HTML5.&lt;/canvas&gt;
</pre>

<pre class="brush: css hidden">body {
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
</pre>

<pre class="brush: html">&lt;script type="x-shader/x-vertex" id="vertex-shader"&gt;
#version 100
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 64.0;
}
&lt;/script&gt;
</pre>

<pre class="brush: html">&lt;script type="x-shader/x-fragment" id="fragment-shader"&gt;
#version 100
void main() {
  gl_FragColor = vec4(0.18, 0.54, 0.34, 1.0);
}
&lt;/script&gt;
</pre>

<pre class="brush: js hidden">;(function(){
</pre>

<pre class="brush: js">"use strict"
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
      "La liaison du programme a échoué."
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
  gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
}

function cleanup() {
gl.useProgram(null);
if (buffer)
  gl.deleteBuffer(buffer);
if (program)
  gl.deleteProgram(program);
}
</pre>

<pre class="brush: js hidden">function getRenderingContext() {
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
</pre>

<pre class="brush: js hidden">})();
</pre>

<p>Le code source de cet exemple est également disponible sur <a href="https://github.com/idofilin/webgl-by-example/tree/master/hello-glsl">GitHub</a>.</p>

<p>{{PreviousNext("Apprendre/WebGL/Par_exemple/Une_pluie_de_rectangle","Apprendre/WebGL/Par_exemple/Introduction_aux_attributs_vertex")}}</p>
