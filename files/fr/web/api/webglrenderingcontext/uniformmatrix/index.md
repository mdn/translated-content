---
title: 'WebGLRenderingContext.uniformMatrix[234]fv()'
slug: Web/API/WebGLRenderingContext/uniformMatrix
tags:
  - API
  - Matrice
  - Reference
  - Uniforms
  - Variables Uniform
  - WebGL
  - WebGLAPI
  - WebGLRenderingContext
  - matrices
  - uniformMatrix2fv
  - uniformMatrix3fv
  - uniformMatrix4fv
translation_of: Web/API/WebGLRenderingContext/uniformMatrix
---
<div>{{APIRef("WebGL")}}</div>

<p>Les méthodes <strong><code>WebGLRenderingContext.uniformMatrix[234]fv()</code></strong> de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> définissent des valeurs matricielles pour les variables uniform.</p>

<p>Les trois versions de cette méthode (<code>uniformMatrix2fv()</code>, <code>uniformMatrix3fv()</code> et <code>unifomMatrix4fv()</code>) prennent comme valeur d'entrée des vecteurs à 2, 3 et 4 composantes, respectivement.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>WebGLRenderingContext</em>.uniformMatrix2fv(<em>emplacement</em>, <em>transposer</em>, <em>valeur</em>);
<em>WebGLRenderingContext</em>.uniformMatrix3fv(<em>emplacement</em>, <em>transposer</em>, <em>valeur</em>);
<em>WebGLRenderingContext</em>.uniformMatrix4fv(<em>emplacement</em>, <em>transposer</em>, <em>valeur</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>emplacement</code></dt>
 <dd>Un objet {{domxref("WebGLUniformLocation")}} contenant l'emplacement de l'attribut uniform à modifier. L'emplacement est obtenu en utilisant {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.</dd>
 <dt><code>transposer</code></dt>
 <dd>Un {{domxref("GLboolean")}} indiquant si la matrice doit être transposée. Doit être <code>false</code>.</dd>
 <dt><code>valeur</code></dt>
 <dd>
 <p>Un {{jsxref("Float32Array")}} ou une suite de valeurs <code>GLfloat</code>.</p>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p><code>undefined</code></p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">gl.uniformMatrix2fv(loc, false, [2.1, 2.2]);</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.14.10", "uniformMatrix")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>
    <p>Définition initiale.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glUniform.xml", "glUniform")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>
    <p>Page man de l’API OpenGL.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.uniformMatrix2fv")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.uniform()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.uniformMatrix()")}} – versions WebGL 2 de ces méthodes.</li>
</ul>
