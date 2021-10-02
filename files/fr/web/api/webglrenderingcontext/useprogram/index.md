---
title: WebGLRenderingContext.useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/useProgram
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode <strong><code>WebGLRenderingContext.useProgram()</code></strong> de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> définit le {{domxref("WebGLProgram")}} spécifié comme faisant partie de l'état de rendu en cours.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var>gl</var>.useProgram(<var>programme</var>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>programme</dt>
 <dd>Un {{domxref("WebGLProgram")}} à utiliser.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var programme = gl.createProgram();

// Attacher les shaders pré-existants
gl.attachShader(programme, vertexShader);
gl.attachShader(programme, fragmentShader);

gl.linkProgram(programme);
gl.useProgram(programme);
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
   <td>{{SpecName('WebGL', "#5.14.9", "useProgram")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glUseProgram.xml", "glUseProgram")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>Page man de l'API OpenGL.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibilité_des_navigateurs">Browser compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.useProgram")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.createProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.linkProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.validateProgram()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getProgramParameter()")}}</li>
 <li>{{domxref("WebGLRenderingContext.getProgramInfoLog()")}}</li>
</ul>
