---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
tags:
  - API
  - Canevas
  - CanvasRenderingContext2D
  - Méthode
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/measureText
---
<div>{{APIRef}}</div>

<p>La méthode <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.measureText()</code></strong> renvoie un objet {{domxref ("TextMetrics")}} qui contient des informations sur le texte mesuré (telle que sa largeur, par exemple).</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><var><em>ctx</em></var>.measureText(texte);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>texte</dt>
 <dd>Le texte à mesurer.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Un objet {{domxref("TextMetrics")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Étant donné cet élément {{HTMLElement("canvas")}} :</p>

<pre class="brush: html">&lt;canvas id="canevas"&gt;&lt;/canvas&gt;
</pre>

<p>vous pouvez obtenir un objet {{domxref("TextMetrics")}} en utilisant le code suivant :</p>

<pre class="brush: js">var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

var texte = ctx.measureText('foo'); // objet TextMetrics
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
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-measuretext", "CanvasRenderingContext2D.measureText")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CanvasRenderingContext2D.measureText")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}.</li>
 <li>{{domxref("TextMetrics")}}</li>
</ul>
