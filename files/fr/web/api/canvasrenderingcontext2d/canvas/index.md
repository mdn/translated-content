---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Propriété
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/canvas
---
<div>{{APIRef}}</div>

<p>La propriété <code><strong>CanvasRenderingContext2D.canvas</strong></code> est une référence à l'objet {{domxref("HTMLCanvasElement")}} qui est associé au contexte. Il peut être {{jsxref("null")}} s'il n'est pas associé à un élément {{HTMLElement("canvas")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var><em>ctx</em></var>.canvas;</pre>

<h2 id="Exemples">Exemples</h2>

<p>Soit cet élément {{HTMLElement("canvas")}}:</p>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<p>Vous pouvez obtenir la référence à l'élément <code>canvas</code> grâce à <code>CanvasRenderingContext2D</code> en utilisant la propriété <code>canvas</code> :</p>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas // HTMLCanvasElement
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
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-canvas", "CanvasRenderingContext2D.canvas")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CanvasRenderingContext2D.canvas")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("CanvasRenderingContext2D")}}</li>
</ul>
