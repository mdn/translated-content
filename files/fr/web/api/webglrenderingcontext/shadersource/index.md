---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/shaderSource
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode <strong><code>WebGLRenderingContext.shaderSource()</code></strong> de l'<a href="/en-US/docs/Web/API/WebGL_API">API WebGL</a> définit le code source d'un {{domxref("WebGLShader")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var>gl</var>.shaderSource(<var>shader</var>, <var>source</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt>shader</dt>
 <dd>Un objet {{domxref("WebGLShader")}} dans lequel définir le code source.</dd>
 <dt>source</dt>
 <dd>Une {{domxref("DOMString")}} contenant le code source GLSL à définir.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.14.9", "shaderSource")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glShaderSource.xml", "glShaderSource")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>Page man de l'API OpenGL (similaire).</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.shaderSource")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.createShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteShader()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getShaderSource()")}}</li>
</ul>
