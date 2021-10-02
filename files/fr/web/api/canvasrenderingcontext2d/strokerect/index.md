---
title: CanvasRenderingContext2D.strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Méthode
  - Référence(2)
translation_of: Web/API/CanvasRenderingContext2D/strokeRect
---
<div>{{APIRef}}</div>

<p>La méthode <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.strokeRect()</code></strong> de l'API 2D des Canvas dessine le contour d'un rectangle aux coordonnées de l'angle haut gauche <em>(x, y)</em> et aux dimensions déterminées par <em>largeur</em> et <em>hauteur</em> dans la balise canvas, et en utilisant l'actuel <code>strokeStyle</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">void <var><em>ctx</em>.strokeRect(x, y, largeur, hauteur);</var>
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>L'abcisse <em>x</em> des coordonnées du point de départ du rectangle.</dd>
 <dt><code>y</code></dt>
 <dd>L'ordonnée <em>y</em> des coordonnées du point de départ du rectangle.</dd>
 <dt>largeur</dt>
 <dd>La largeur du rectangle.</dd>
 <dt><code>hauteur</code></dt>
 <dd>La hauteur de rectangle.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_strokeRect">Utilisation de la méthode <code>strokeRect</code></h3>

<p>Ceci est juste un extrait de code qui utilise la méthode <code>strokeRect</code>.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);
</pre>

<p>Éditez le code suivant pour voir les changements en direct dans la balise canvas:</p>

<h4 id="code_jouable">Code jouable</h4>

<pre class="brush: html hidden">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);&lt;/textarea&gt;
</pre>

<pre class="brush: js hidden">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
</pre>

<p>{{ EmbedLiveSample('code_jouable', 700, 360) }}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-strokerect", "CanvasRenderingContext2D.strokeRect")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.CanvasRenderingContext2D.strokeRect")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>l'interface qui la définit, {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.strokeStyle")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.clearRect()")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.fillRect()")}}</li>
</ul>
