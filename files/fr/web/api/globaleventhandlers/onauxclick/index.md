---
title: GlobalEventHandlers.onauxclick
slug: Web/API/GlobalEventHandlers/onauxclick
tags:
  - API
  - Expérimentale
  - Propriété
  - Reference
translation_of: Web/API/GlobalEventHandlers/onauxclick
---
<div>{{ApiRef("HTML DOM")}} {{SeeCompatTable}}</div>

<p>La propriété <code><strong>onauxclick</strong></code> du mixin {{domxref("GlobalEventHandlers")}} est un {{event("Event_handlers", "event handler")}} pour le traitement des événements {{event("auxclick")}}.</p>

<p>L'événement <code>auxclick</code> est déclenché lorsqu'un bouton non principal a été enfoncé sur un périphérique d'entrée (par exemple, la molette de la souris). Il se déclenche après les événements {{event("mousedown")}} et {{event("mouseup")}}, dans cet ordre.</p>

<div class="note">
<p><strong>Note :</strong> Les fournisseurs de navigateurs implémentent cette propriété dans le cadre d'un plan visant à améliorer la compatibilité en ce qui concerne le comportement des boutons. Plus précisément, le comportement des événements est mis à jour afin que {{Event ("click")}} ne se déclenche que pour les clics sur le bouton principal (par exemple, le bouton gauche de la souris), tandis que {{Event ("auxclick")}} se déclenche pour le bouton non principal. Historiquement, {{Event("click")}} s'est généralement déclenché pour le clic de n'importe quel bouton d'entrée de périphérique, bien que le comportement du navigateur soit quelque peu incohérent.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>target</var>.onauxclick = <var>functionRe<em>f</em></var>;
</pre>

<h3 id="Valeur">Valeur</h3>

<p><code>functionRef</code> est un nom de fonction ou une <a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function expression</a>. La fonction reçoit un objet {{domxref("MouseEvent")}} comme seul argument. Dans la fonction, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">this</a></code> sera l'élément sur lequel l'événement a été déclenché.</p>

<p>Un seul gestionnaire <code>onauxclick</code> peut être affecté à un objet à la fois. Vous pouvez préférer utiliser la méthode {{domxref("EventTarget.addEventListener()")}} à la place, car elle est plus flexible.</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, nous définissons des fonctions pour deux gestionnaires d'événements — {{domxref("GlobalEventHandlers.onclick", "onclick")}} et <code>onauxclick</code>. Le premier modifie la couleur de l'arrière-plan du bouton, tandis que le second modifie la couleur de premier plan (texte) du bouton. Vous pouvez voir les deux fonctions en action en essayant la démo avec une souris à plusieurs boutons (<a href="https://mdn.github.io/dom-examples/auxclick/">voir en direct sur GitHub</a>; également <a href="https://github.com/mdn/dom-examples/blob/master/auxclick/index.html">voir le code source</a>).</p>

<pre class="brush: js">var button = document.querySelector('button');
var html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

button.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  button.style.backgroundColor = rndCol;
};

button.onauxclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  button.style.color = rndCol;
}</pre>

<div class="note">
<p><strong>Note :</strong> Si vous utilisez une souris à trois boutons, vous remarquerez que le gestionnaire<code> onauxclick</code> est exécuté lorsque l'un des boutons non gauche de la souris est cliqué.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events','#event-type-auxclick','onauxclick')}}</td>
   <td>{{Spec2('UI Events')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.GlobalEventHandlers.onauxclick")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{event("auxclick")}} event</li>
 <li>Related event handlers
  <ul>
   <li>{{domxref("GlobalEventHandlers.onclick")}}</li>
   <li>{{domxref("GlobalEventHandlers.ondblclick")}}</li>
  </ul>
 </li>
</ul>
