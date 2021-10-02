---
title: WebGLRenderingContext.activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/activeTexture
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode <strong><code>WebGLRenderingContext.activeTexture()</code></strong> de l'<a href="/fr-FR/docs/Web/API/WebGL_API">API WebGL</a> indique quelle unité de texture doit être rendue active.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var><em>void gl</em>.activeTexture</var><var>(texture);</var>
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>texture</code></dt>
 <dd>L'unité de texture à rendre active. La valueur est une <code>gl.TEXTURE<em>I</em></code> où <em>I</em> est dans la plage de 0 à<code>gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1</code>.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Si <em>texture</em> n'est pas l'une des <code>gl.TEXTURE<em>I</em></code>, où <em>I</em> est dans la plage de 0 à<code>gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1</code>, une erreur <code>gl.INVALID_ENUM</code> est déclenchée.</p>

<h2 id="Exemples">Exemples</h2>

<p>L'appel suivant choisit <code>gl.TEXTURE1</code> comme texture en cours. Les appels suivants qui modifient l'état de la texture affecteront cette texture.</p>

<pre class="brush: js">gl.activeTexture(gl.TEXTURE1);
</pre>

<p>Le nombre d'unités de texture dépend de l'implémentation, vous pouvez obtenir ce nombre à l'aide de la constante <code>MAX_COMBINED_TEXTURE_IMAGE_UNITS</code>. Il est, de par la spécification, d'au moins 8.</p>

<pre class="brush: js">gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
</pre>

<p>Pour obtenir la texture en cours, faire une requête sur la constante <code>ACTIVE_TEXTURE</code>.</p>

<pre class="brush: js">gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// retourne "33984" (0x84C0, valeur enum pour gl.TEXTURE0)
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statué</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#5.14.3", "activeTexture")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glActiveTexture.xml", "glActiveTexture")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>Page man de l'API OpenGL.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.activeTexture")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.getParameter()")}}</li>
</ul>
