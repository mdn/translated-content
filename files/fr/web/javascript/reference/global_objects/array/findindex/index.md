---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
tags:
  - Array
  - ECMAScript6
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/findIndex
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/findIndex
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>findIndex()</strong></code> renvoie l'<strong>indice</strong> du <strong>premier élément</strong> du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.</p>

<div>{{EmbedInteractiveExample("pages/js/array-findindex.html")}}</div>



<p>Voir également la méthode {{jsxref("Array.find", "find()")}} qui renvoie la <strong>valeur</strong> (et non l'indice) d'un des éléments trouvés.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.findIndex(<var>callback</var>(element[, index[, tableau]])[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Une fonction à exécuter sur chaque valeur du tableau jusqu'à ce que celle-ci renvoie <code>true</code>. Cette fonction prend trois arguments :
 <dl>
  <dt><code>élément</code></dt>
  <dd>L'élément du tableau qui doit être traité.</dd>
  <dt><code>indice</code>{{optional_inline}}</dt>
  <dd>L'indice de l'élément du tableau en cours de traitement.</dd>
  <dt><code>tableau</code>{{optional_inline}}</dt>
  <dd>Le tableau sur lequel a été appelé <code>findIndex</code>.</dd>
 </dl>
 </dd>
 <dt><code>argumentThis</code>{{optional_inline}}</dt>
 <dd>L'objet à utiliser comme contexte <code>this</code> lorsque le <code>callback</code> est exécuté.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un indice d'un élément du tableau qui réussit le test décrit, -1 sinon.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>findIndex</code> exécute la fonction <code>callback</code> une fois pour chaque élément présent dans le tableau (le tableau est parcouru entre les indices <code>0</code> et <code>length-1</code> compris) jusqu'à ce que <code>callback</code> renvoie une valeur vraie.</p>

<p>S'il existe un tel élément, <code>findIndex</code> renverra immédiatement l'indice de l'élément concerné. Sinon, <code>findIndex</code> renverra -1. À la différence des autres méthodes liées aux tableaux comme <code>some()</code>, <code>callback</code> est également appelée pour les indices du tableau pour lesquels aucun élément n'est défini.</p>

<p><code>callback</code> possède trois arguments : la valeur de l'élément, l'indice de l'élément et l'objet Array qui est parcouru</p>

<p>Si l'argument <code>argumentThis</code> est fourni à la méthode <code>findIndex</code>, il sera utilisé comme « contexte » <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">this</a></code> pour chaque appel de <code>callback</code>. S'il n'est pas fourni, {{jsxref("undefined")}} sera utilisé.</p>

<p><code>findIndex</code> ne modifie pas le tableau sur laquelle elle est appelée. Les éléments qui seront traités par <code>findIndex</code> sont « récoltés » avant le premier appel de <code>callback</code>. Tout élément qui sera ajouté au tableau après l'appel de <code>findIndex</code> ne sera pas utilisé avec <code>callback</code>. Si un élément existant, pas encore visité, est modifié par <code>callback</code>, la valeur qui sera passé au <code>callback</code> pour cet élément modifié sera celle que <code>findIndex</code> utilise lorsqu'elle utilise l'indice de l'élément en question. Les éléments supprimés sont bien parcourus.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Trouver_l'indice_d'un_nombre_premier_dans_un_tableau">Trouver l'indice d'un nombre premier dans un tableau</h3>

<p>L'exemple qui suit illustre comment trouver l'indice d'un élément qui est un nombre premier dans un tableau (ou qui renvoie -1 s'il n'y a pas de nombre premier).</p>

<pre class="brush: js">function estPremier(élément, index, array) {
  var début = 2;
  while (début &lt;= Math.sqrt(élément)) {
    if (élément % début &lt; 1) {
      return false;
    } else {
      début++;
    }
  }
  return élément &gt; 1;
}

console.log([4, 6, 8, 12].findIndex(estPremier)); // -1, aucun trouvé
console.log([4, 6, 7, 12].findIndex(estPremier)); // 2</pre>

<h3 id="Trouver_un_indice_avec_une_fonction_fléchée">Trouver un indice avec une fonction fléchée</h3>

<p>Dans cet exemple, on utilise <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">une fonction fléchée</a> pour trouver l'indice d'un élément :</p>

<pre class="brush: js">const fruits = ["pomme", "banane", "melon", "fraise", "raisin"];

const indice = fruits.findIndex(fruit =&gt; fruit === "fraise");
console.log(indice); // 3
console.log(fruits[indice]); // fraise </pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}</pre>

<p>S'il est vraiment nécessaire de prendre en charge les moteurs JavaScript qui ne prennent pas en charge {{jsxref("Object.defineProperty()")}}, mieux vaut ne pas ajouter de prothèse aux méthodes d'<code>Array.prototype</code> car on ne peut pas les rendre non-énumérables.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-array.prototype.findindex', 'Array.prototype.findIndex')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.findIndex', 'Array.prototype.findIndex')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.findIndex")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
