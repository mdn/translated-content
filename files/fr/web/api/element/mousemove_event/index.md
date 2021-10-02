---
title: 'Element : évènement mousemove'
slug: Web/API/Element/mousemove_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - events
  - mousemove
translation_of: Web/API/Element/mousemove_event
---
<div>{{APIRef}}</div>

<p>L'évènement <code>mousemove</code> est déclenché à partir d'un élément lorsqu'un dispositif de pointage (ex. une souris) est déplacé lorsque le curseur est à l'intérieur de l'élément.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Se propage/remonte dans le DOM</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("MouseEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété pour la gestion d'évènement</th>
   <td>{{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on utilise les évènements <code><a href="/fr/docs/Web/API/Element/mousedown_event">mousedown</a></code>, <code><a href="/fr/docs/Web/API/Element/mousemove_event">mousemove</a></code> et <code><a href="/fr/docs/Web/API/Element/mouseup_event">mouseup</a></code> pour permettre à l'utilisateur de dessiner sur un <a href="/fr/docs/Web/API/Canvas_API">canevas</a> HTML (le dessin est simple : une ligne dont l'épaisseur vaut 1 et dont la couleur est toujours noire).</p>

<p>Lors du chargement de la page, les constantes <code>myPics</code> et <code>context</code> sont créées comme références au canevas et au contexte 2D qui seront utilisés pour le dessin. Enfin, la constante <code>rect</code> permet de stocker les coordonnées relatives du canevas par rapport à la page.</p>

<p>Le dessin commence quand l'évènement <code>mousedown</code> est déclenché. On stocke les coordonnées du pointeur dans les variables <code>x</code> et <code>y</code> puis on passe la variable <code>isDrawing</code> à <code>true</code> pour indiquer qu'un dessin est en cours.</p>

<p>Lorsque le pointeur se déplace sur la page, l'évènement <code>mousemove</code> est déclenché. Si <code>isDrawing</code> vaut <code>true</code>, le gestionnaire d'évènement appelle la fonction <code>drawLine()</code> afin de dessiner une ligne entre le point de coordonnées <code>x</code> et <code>y</code> (stockées dans ces variables) et la position actuelle (N.B. les coordonnées <code>x</code> et <code>y</code> sont "corrigées" avec la constante <code>rect</code> pour tenir compte du décalage entre le canevas et la page).</p>

<p>Lorsque la fonction <code>drawLine()</code> a fini son exécution, on ajuste les coordonnées courante en les stockant dans <code>x</code> et <code>y</code>.</p>

<p>Lorsque l'évènement <code>mouseup</code> est déclenché, on dessine le segment final du dessin en cours, on passe <code>x</code> et <code>y</code> à <code>0</code> puis on arrête le dessin en passant <code>isDrawing</code> à <code>false</code>.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;h1&gt;Dessiner grâce aux évènements de souris&lt;/h1&gt;
&lt;canvas id="myPics" width="560" height="360"&gt;&lt;/canvas&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
// la souris entraîne un dessin sur le canevas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
const rect = myPics.getBoundingClientRect();

// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
// et mouseup
myPics.addEventListener('mousedown', e =&gt; {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e =&gt; {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener('mouseup', e =&gt; {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 640, 450)}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events', '#event-type-mousemove', 'mousemove')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-mousemove', 'mousemove')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.mousemove_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements">Une introduction aux évènements</a></li>
 <li>D'autres évènements connexes
  <ul>
   <li><a href="/fr/docs/Web/API/Element/mouseup_event"><code>mouseup</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mousedown_event"><code>mousedown</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/click_event"><code>click</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/dblclick_event"><code>dblclick</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseout_event"><code>mouseout</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseover_event"><code>mouseover</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseenter_event"><code>mouseenter</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseleave_event"><code>mouseleave</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/contextmenu_event"><code>contextmenu</code></a></li>
  </ul>
 </li>
</ul>
