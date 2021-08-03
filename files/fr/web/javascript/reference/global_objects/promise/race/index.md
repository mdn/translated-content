---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/race
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/race
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Promise.race()</strong></code> renvoie une promesse qui est résolue ou rejetée dès qu'une des promesses de l'itérable passé en argument est résolue ou rejetée. La valeur (dans le cas de la résolution) ou la raison (dans le cas d'un échec) utilisée est celle de la promesse de l'itérable qui est resolue/qui échoue.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-race.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Promise.race(<var>itérable</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>itérable</code></dt>
 <dd>Un objet itérable, par exemple un {{jsxref("Array")}}. Voir la page <a href="/fr/docs/Web/JavaScript/Guide/iterable">itérable</a>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}) à résoudre qui est résolue de façon asynchrone dès que l'une des promesses de l'itérable est tenue ou rompue.</p>

<h2 id="Description">Description</h2>

<p>La fonction <code>race</code> renvoie une <code>Promise</code> qui est résolue/rejetée de la même façon que la première promesse de l'itérable à être résolue/rejetée.</p>

<p>Si l'itérable passé en argument est vide, la promesse sera continuellement en attente.</p>

<p>Si l'itérable contient une ou plusieurs valeurs qui ne sont pas des promesses ou une promesse déjà résolue, <code>Promise.race</code> fournira une promesse résolue avec la première de ces valeurs trouvées dans l'itérable.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Caractère_asynchrone_de_Promise.race()">Caractère asynchrone de <code>Promise.race()</code></h3>

<p>L'exemple qui suit illuste le caractère asynchrone de <code>Promise.race:</code></p>

<pre class="brush: js">// On passe un tableau de promesses déjà résolues
// en argument afin de déclencher Promise.race
// dès que possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// On affiche immédiatement la valeur p dans la console
console.log(p);

// Avec setTimeout on peut exécuter du code
// une fois que la pile est vide
setTimeout(function(){
    console.log('La pile est désormais vide');
    console.log(p);
});

// affichera, dans cet ordre :
// Promise { &lt;state&gt;: "pending" }
// La pile est désormais vide
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: 33 }</pre>

<p>Un itérable vide renverra une promesse qui restera en attente :</p>

<pre class="brush: js">var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('La pile est désormais vide');
    console.log(foreverPendingPromise);
});

// affichera, dans cet ordre :
// Promise { &lt;state&gt;: "pending" }
// La pile est désormais vide
// Promise { &lt;state&gt;: "pending" }
</pre>

<p>Si l'itérable contient une ou plusieurs valeurs qui ne sont pas des promesses ou des promesses déjà résolues, <code>Promise.race</code> considèrera la première valeur ainsi trouvée dans l'itérable :</p>

<pre class="brush: js">var foreverPendingPromise = Promise.race([]);
var alreadyResolvedProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyResolvedProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
    console.log(p2);
});

// affichera dans l'ordre :
// Promise { &lt;state&gt;: "pending" }
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: 666 }
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: "non-Promise value" }
</pre>

<h3 id="Utilisation_de_Promise.race_–_exemples_avec_setTimeout">Utilisation de <code>Promise.race</code> – exemples avec <code>setTimeout</code></h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "un");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "deux");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "deux"
  // Les deux promesses sont résolues mais p2 est plus rapide
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "trois");
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, "quatre");
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "trois"
  // p3 est plus rapide et entraîne la résolution de la promesse de compétition
}, function(reason) {
  // N'est pas appelée
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "cinq");
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // N'est pas appelée
}, function(reason) {
  console.log(reason); // "six"
  // p6 est plus rapide et rejète la promesse de compétition
});
</pre>

<div class="note">
<p><strong>Note :</strong> voir la documentation sur <a href="/fr/docs/Web/API/WindowTimers/setTimeout"><code>setTimeout</code>.</a></p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-promise.race', 'Promise.race')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.race', 'Promise.race')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.race")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.all()")}}</li>
</ul>
