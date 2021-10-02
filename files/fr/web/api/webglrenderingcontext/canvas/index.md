---
title: WebGLRenderingContext.canvas
slug: Web/API/WebGLRenderingContext/canvas
tags:
  - Propriété
  - WebGL
  - WebGLRenderingContext
  - lecture seule
translation_of: Web/API/WebGLRenderingContext/canvas
original_slug: Web/API/WebGLRenderingContext/canevas
---
<div>{{APIRef("WebGL")}}</div>

<p>La propriété <code>WebGLRenderingContext.canvas</code> est une référence en lecture seule à l'objet {{domxref("HTMLCanvasElement")}} ou {{domxref("OffscreenCanvas")}} associé au contexte. Il peut s'agir de {{jsxref("null")}} s'il n'est pas associé à un élément {{HTMLElement("canvas")}} ou à un objet {{domxref("OffscreenCanvas")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var><em>gl</em></var>.canvas;</pre>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Soit un objet {{domxref("HTMLCanvasElement")}} ou {{domxref("OffscreenCanvas")}}, soit {{jsxref("null")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Élément_canevas">Élément canevas</h3>

<p>Étant donné cet élément {{HTMLElement("canvas")}} :</p>

<pre class="brush: html">&lt;canvas id="canevas"&gt;&lt;/canvas&gt;
</pre>

<p>Vous pouvez en récupérer une référence à partir du <code>WebGLRenderingContext</code> en utilisant la propriété <code>canvas</code> :</p>

<pre class="brush: js">var canevas = document.getElementById('canevas');
var gl = canevas.getContext('webgl');
gl.canvas; // HTMLCanvasElement
</pre>

<h3 id="Canevas_hors_écran">Canevas hors écran</h3>

<p>Exemple d'utilisation de l'objet expérimental {{domxref("OffscreenCanvas")}}.</p>

<pre class="brush: js">var horsEcran = new OffscreenCanvas(256, 256);
var gl = horsEcran.getContext('webgl');
gl.canvas; // OffscreenCanvas</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('WebGL', "#DOM-WebGLRenderingContext-canvas", "WebGLRenderingContext.canvas")}}</td>
   <td>{{Spec2('WebGL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WebGLRenderingContext.canvas")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("CanvasRenderingContext2D.canvas")}}</li>
 <li>{{domxref("OffscreenCanvas")}}</li>
</ul>
