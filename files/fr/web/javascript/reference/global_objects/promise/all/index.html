---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/all
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/all
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Promise.all()</strong></code> renvoie une promesse ({{jsxref("Promise")}}) qui est résolue lorsque l'ensemble des promesses contenues dans l'itérable passé en argument ont été résolues ou qui échoue avec la raison de la première promesse qui échoue au sein de l'itérable.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-all.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Promise.all(<var>iterable</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>Un objet <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»">itérable</a> (tel qu'un tableau ({{jsxref("Array")}})) contenant des promesses.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{jsxref("Promise")}} qui est</p>

<ul>
 <li>résolue immédiatement si l'itérable passé en argument est vide</li>
 <li>résolue de façon asynchrone si l'itérable passé en argument ne contient aucune promesse (Chrome 58 renvoie immédiatement une promesse résolue dans ce cas)</li>
 <li>en attente de résolution asynchrone dans les autres cas.</li>
</ul>

<h2 id="Description">Description</h2>

<p>Cette méthode peut être utile lorsqu'on souhaite agréger le résultat de plusieurs promesses.</p>

<dl>
 <dt>Valeur de résolution</dt>
 <dd>Si toutes les promesses de l'itérable sont tenues, <code>Promise.all</code> est tenue et la valeur de résolution est un tableau qui contient les valeurs de résolution respectives des promesses de l'itérable (dans le même ordre). Si l'argument utilisé est un tableau vide, la méthode résoud la promesse immédiatement et de façon synchrone.</dd>
 <dt>Valeur d'échec</dt>
 <dd>Si l'une des promesses de l'itérable échoue, <code>Promise.all</code> échoue immédiatement et utilise la raison de l'échec (que les autres promesses aient été résolues ou non).</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Promise.all()">Utiliser <code>Promise.all()</code></h3>

<p><code>Promise.all()</code> attend que l'ensemble des promesses soient tenues ou qu'une promesse soit rompue :</p>

<pre class="brush: js">var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values =&gt; {
  console.log(values); // [3, 1337, "foo"]
});</pre>

<h3 id="Promise.all()_un_échec_rapide"><code>Promise.all()</code>, un échec rapide</h3>

<p>La promesse créée par <code>Promise.all()</code> échoue immédiatement si l'une des promesses échoue. Dans l'exemple suivant, on fournit quatre promesses qui sont résolues après une certaine durée et une autre promesse qui est rompue immédiatement : on peut alors voir que la promesse créée par <code>Promise.all()</code> est rompue immédiatement.</p>

<pre class="brush: js">var p1 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 1000, 'un');
});
var p2 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 2000, 'deux');
});
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 3000, 'trois');
});
var p4 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 4000, 'quatre');
});
var p5 = new Promise((resolve, reject) =&gt; {
  reject('rejet');
});

Promise.all([p1, p2, p3, p4, p5]).then(values =&gt; {
  console.log(values);
}, reason =&gt; {
  console.log(reason)
});

// Dans la console :
// "rejet"

//On peut aussi employer .catch
Promise.all([p1, p2, p3, p4, p5]).then(values =&gt; {
  console.log(values);
}).catch(reason =&gt; {
  console.log(reason)
});

// Dans la console :
// "rejet"

</pre>

<p>Il est possible de modifier ce comportement en gérant les éventuels échecs :</p>

<pre class="brush: js">var p1 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 1000, 'p1_resolution_retardee');
});

var p2 = new Promise((resolve, reject) =&gt; {
  reject(new Error('p2_rejet_immediat'));
});

Promise.all([
  p1.catch(error =&gt; { return error }),
  p2.catch(error =&gt; { return error }),
]).then(values =&gt; {
  console.log(values[0]); // "p1_resolution_retardee"
  console.log(values[1]); // "Error: p2_rejet_immediat"
})
</pre>

<h3 id="Caractère_asynchrone_de_Promise.all()">Caractère asynchrone de <code>Promise.all()</code></h3>

<p>Dans l'exemple qui suit, on illustre le caractère asynchrone de <code>Promise.all()</code> (et son caractère synchrone quand l'itérable passé en argument est vide) :</p>

<pre class="brush: js">// On passe un tableau de promesses déjà résolues
// afin de déclencher Promise.all dès que possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// on affiche la valeur de p dans la console
console.log(p);

// on utilise la méthode setTimeout pour exécuter
// du code dès que la pile est vide
setTimeout(function() {
    console.log('La pile est vide');
    console.log(p);
});

// Cela affichera dans la console (et dans cet ordre) :
// Promise { &lt;state&gt;: "pending" }
// La pile est vide
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[2] }
</pre>

<p>On aura le même comportement si <code>Promise.all</code> produit une promesse rompue :</p>

<pre class="brush: js">var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
    console.log('La pile est vide');
    console.log(p);
});

// Affichera :
// Promise { &lt;state&gt;: "pending" }
// La pile est vide
// Promise { &lt;state&gt;: "rejected", &lt;reason&gt;: 44 }
</pre>

<p>En revanche, <code>Promise.all</code> produit une promesse résolue de façon synchrone si et seulement si l'itérable est vide :</p>

<pre class="brush: js">var p = Promise.all([]); // immédiatement résolue

// les valeurs qui ne sont pas des promesses
// seront ignorées mais l'évaluation sera effectuée
// de façon asynchrone
var p2 = Promise.all([1337, "hi"]);
console.log(p);
console.log(p2)
setTimeout(function() {
    console.log('La pile est vide');
    console.log(p2);
});

// Affichera :
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[0] }
// Promise { &lt;state&gt;: "pending" }
// La pile est vide
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[2] }
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES2015', '#sec-promise.all', 'Promise.all')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale dans un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.all', 'Promise.all')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.all")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.race()")}}</li>
</ul>
