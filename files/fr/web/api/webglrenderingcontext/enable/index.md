---
title: WebGLRenderingContext.enable()
slug: Web/API/WebGLRenderingContext/enable
tags:
  - API
  - Méthode
  - Reference
  - WebGL
  - WebGLRenderingContext
translation_of: Web/API/WebGLRenderingContext/enable
original_slug: Web/API/WebGLRenderingContext/activer
---
<div>{{APIRef("WebGL")}}</div>

<p>La méthode <code>WebGLRenderingContext.enable()</code> de l'API WebGL active des fonctionnalités WebGL particulières pour ce contexte.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var>gl</var>.enable(<em>fon</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>fon</code></dt>
 <dd><p>Un {{domxref("GLenum")}} indiquant quelle fonctionnalité WebGL activer. Valeurs possibles :</p>
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Constante</th>
    <th scope="col">Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>gl.BLEND</code></td>
    <td>Active le mélange des valeurs de couleur de fragment calculées. Voir {{domxref("WebGLRenderingContext.blendFunc()")}}.</td>
   </tr>
   <tr>
    <td><code>gl.CULL_FACE</code></td>
    <td>Active le masquage des polygones. Voir {{domxref("WebGLRenderingContext.cullFace()")}}.</td>
   </tr>
   <tr>
    <td><code>gl.DEPTH_TEST</code></td>
    <td>Active les comparaisons et les mises à jour dans le tampon de profondeur. Voir {{domxref("WebGLRenderingContext.depthFunc()")}}.</td>
   </tr>
   <tr>
    <td><code>gl.DITHER</code></td>
    <td>Active le tramage des composantes de couleur avant qu'elles ne soient écrites dans le tampon de couleur.</td>
   </tr>
   <tr>
    <td><code>gl.POLYGON_OFFSET_FILL</code></td>
    <td>Active l'ajout d'un décalage aux valeurs de profondeur des fragments de polygone. Voir {{domxref("WebGLRenderingContext.polygonOffset()")}}.</td>
   </tr>
   <tr>
    <td><code>gl.SAMPLE_ALPHA_TO_COVERAGE</code></td>
    <td>Active le calcul d'une valeur de couverture temporaire déterminée par la valeur alpha.</td>
   </tr>
   <tr>
    <td><code>gl.SAMPLE_COVERAGE</code></td>
    <td>Active le ET de la couverture des fragments avec la valeur de couverture temporaire. Voir {{domxref("WebGLRenderingContext.sampleCoverage()")}}.</td>
   </tr>
   <tr>
    <td><code>gl.SCISSOR_TEST</code></td>
    <td>Active le test de détourage qui supprime les fragments se trouvant en dehors du rectangle de détourage. Voir {{domxref("WebGLRenderingContext.scissor()")}}.</td>
   </tr>
   <tr>
    <td><code>gl.STENCIL_TEST</code></td>
    <td>Active le test et les mises à jour stencil dans le stencil buffer. Voir {{domxref("WebGLRenderingContext.stencilFunc()")}}.</td>
   </tr>
  </tbody>
 </table>
 <p>Lors de l'utilisation d'un {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, les valeurs suivantes sont en outre disponibles :</p>
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Constante</th>
    <th scope="col">Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>gl.RASTERIZER_DISCARD</code></td>
    <td>Les primitives sont supprimées immédiatement après l'étape de rastérisation, mais après l'étape de renvoi de transformation optionnelle. Les commandes <code>gl.clear()</code> sont ignorées.</td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Aucune.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">gl.enable(gl.DITHER);
</pre>

<p>Pour vérifier que cette fonctionnalité est activée, utilisez la méthode {{domxref("WebGLRenderingContext.isEnabled()")}} :</p>

<pre class="brush: js">gl.isEnabled(gl.DITHER);
// true
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
   <td>{{SpecName('WebGL', "#5.14.3", "enable")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale pour WebGL.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 2.0', "glEnable.xml", "glEnable")}}</td>
   <td>{{Spec2('OpenGL ES 2.0')}}</td>
   <td>Page man de l'API OpenGL ES 2.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('OpenGL ES 3.0', "glEnable.xhtml", "glEnable")}}</td>
   <td>{{Spec2('OpenGL ES 3.0')}}</td>
   <td>Page man de l'API OpenGL ES 3.0 API.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.enable")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.disable()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isEnabled()")}}</li>
</ul>
