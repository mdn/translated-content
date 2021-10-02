---
title: TextMetrics.width
slug: Web/API/TextMetrics/width
tags:
  - API
  - Canevas
  - Propriété
  - Référence(2)
  - TextMetrics
translation_of: Web/API/TextMetrics/width
---
<div>{{APIRef("Canvas API")}}</div>

<p>La propriété en lecture seule <strong>TextMetrics.width</strong> contient en pixels CSS la largeur d'avance du texte (la largeur de la boîte de ligne).</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>readonly <em>metrics</em></var>.width;</pre>

<h2 id="Exemples">Exemples</h2>

<p>Étant donné cet élément {{HTMLElement("canvas")}} :</p>

<pre class="brush: html">&lt;canvas id="canevas"&gt;&lt;/canvas&gt;
</pre>

<p>vous pouvez obtenir un objet {{domxref("TextMetrics")}} en utilisant le code suivant :</p>

<pre class="brush: js">var canvas = document.getElementById("canevas");
var ctx = canvas.getContext("2d");

var texte = ctx.measureText("foo"); // objet TextMetrics
texte.width; // 16;
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
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-textmetrics-width", "TextMetrics.width")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.TextMetrics.width")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("TextMetrics")}}</li>
</ul>
