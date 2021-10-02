---
title: WebGLProgram
slug: Web/API/WebGLProgram
tags:
  - WebGL
  - WebGLProgram
translation_of: Web/API/WebGLProgram
---
<div>{{APIRef("WebGL")}}</div>

<p>Le <strong>WebGLProgram</strong> fait partie de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> et il est une combinaison de deux {{domxref ("WebGLShader")}} compilés constitués d'un shader de sommet et d'un shader de fragment (tous deux écrits en GLSL). Ces dernier sont ensuite liés dans un programme utilisable.</p>

<pre class="brush: js">var programme = gl.createProgram();

// Lier les shaders préexistants
gl.attachShader(programme, shaderDeSommet);
gl.attachShader(programme, shaderDeFragment);

gl.linkProgram(programme);

if ( !gl.getProgramParameter( programme, gl.LINK_STATUS) ) {
  var info = gl.getProgramInfoLog(programme);
  throw 'Impossible de compiler le program WebGL.\n\n' + info;
}
</pre>

<p>Voir {{domxref("WebGLShader")}} pour des informations sur la création de <code>shaderDeSommet</code> et de <code>shaderDeFragment</code> dans le programme ci-dessus.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_du_programme">Utilisation du programme</h3>

<p>Les étapes pour travailler effectivement avec le programme impliquent d'indiquer à la GPU d'utiliser le programme, de lier les données et les options de configuration appropriées, et enfin, de dessiner quelque chose à l'écran.</p>

<pre class="brush: js">// Utiliser le programme
gl.useProgram(programme);

// Lier les données d'attribut existantes
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Dessiner un unique triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
</pre>

<h3 id="Suppression_du_programme">Suppression du programme</h3>

<p>S'il y a une erreur lors de l'édition de liens du programme, ou si vous voulez supprimer un programme existant, alors c'est tout simple, il suffit d'exécuter {{domxref ("WebGLRenderingContext.deleteProgram()")}}. Cela libère la mémoire du programme lié.</p>

<pre class="brush: js">gl.deleteProgram(programme);
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.6", "WebGLProgram")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLProgram")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLShader")}}</li>
 <li>{{domxref("WebGLRenderingContext.attachShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.compileShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.createProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.createShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.detachShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getAttachedShaders()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getProgramParameter()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getProgramInfoLog()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getShaderParameter()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getShaderInfoLog()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getShaderSource()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.linkProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.shaderSource()")}}</li>
 <li>{{domxref("WebGLRenderingContext.useProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.validateProgram()")}}</li>
</ul>
