---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/resolve
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/resolve
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Promise.resolve(valeur)</strong></code> renvoie un objet {{jsxref("Promise")}} qui est résolu avec la valeur donnée. Si cette valeur est une promesse, la promesse est renvoyée, si la valeur possède une méthode {{jsxref("Promise.then","then")}}, la promesse renvoyée « suivra » cette méthode et prendra son état ; sinon, la promesse renvoyée sera tenue avec la valeur.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}</div>

<div class="warning">
<p><strong>Attention :</strong> <code>Promise.resolve()</code> ne doit pas être appelée sur un objet <em>thenable</em> qui se résout en lui-même. Cela provoquera une récursion infinie et <code>resolve()</code> tentera d'aplatir ce qui ressemble à une promesse imbriquée à l'infini.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>Promise.resolve(valeur)</var>;
Promise.resolve(promesse);
Promise.resolve(suivant);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>L'argument qu'on souhaite résoudre avec cette promesse (<code>Promise</code>). Cet argument peut être un objet <code>Promise</code> ou un objet avec une méthode <code>then</code> à résoudre à la suite.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}) qui est résolue avec la valeur indiquée en argument ou la promesse passée en argument si celui-ci est une promesse.</p>

<h2 id="Description">Description</h2>

<p>La fonction statique <code>Promise.resolve</code> renvoie un objet <code>Promise</code> qui est résolu.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_statique_Promise.resolve">Utilisation de la méthode statique <code>Promise.resolve</code></h3>

<pre class="brush: js">Promise.resolve("Succès").then(function(valeur) {
  console.log(valeur); // "Succès"
}, function(valeur) {
  // n'est pas appelée
});
</pre>

<h3 id="Résoudre_un_tableau">Résoudre un tableau</h3>

<pre class="brush: js">var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
</pre>

<h3 id="Résoudre_une_autre_Promise">Résoudre une autre <code>Promise</code></h3>

<pre class="brush: js">var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log("value: " + value);
});
console.log("original === cast ? " + (original === cast));

// affiche ceci dans la console (dans cet ordre) :
// original === cast ? true
// value: 33
</pre>

<p>L'ordre des traces dans la console est dû au fait que les gestionnaires <code>then()</code> sont appelés de façon asynchrone (plus de détails sur <code>then</code> <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then#Valeur_de_retour">dans cet article</a>).</p>

<h3 id="Résoudre_des_objets_avec_then_et_renvoyer_des_erreurs">Résoudre des objets avec <code>then</code> et renvoyer des erreurs</h3>

<pre class="brush: js">// Résoudre un objet avec then
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill("tenue !"); }
});
console.log(p1 instanceof Promise) // true, l'objet est transformée en une Promise

p1.then(function(v) {
    console.log(v); // "tenue !"
  }, function(e) {
    // n'est pas appelée
});

// L'objet avec then renvoie une erreur avant le callback
// La promesse n'est pas tenue
var thenable = { then: function(resolve) {
  throw new TypeError("Renvoi d'erreur");
  resolve("Résolution ");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // n'est pas appelée
}, function(e) {
  console.log(e); // TypeError : Renvoi d'erreur
});

// L'objet avec then renvoie une erreur après le callback
// La promesse est tenue
var thenable = { then: function(resolve) {
  resolve("Résolue");
  throw new TypeError("Erreur");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // "Résolue"
}, function(e) {
  // n'est pas appelée
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-promise.reject', 'Promise.reject')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.resolve', 'Promise.resolve')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.resolve")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
</ul>
