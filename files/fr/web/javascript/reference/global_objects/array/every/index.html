---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/every
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/every
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>every()</strong></code> permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.</p>

<div class="note">
<p><strong>Note :</strong> Cette méthode renvoie <code>true</code> pour n'importe quelle condition utilisée sur un tableau vide.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/array-every.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.every(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction sur laquelle on souhaite tester chaque élément du tableau. Elle prend en compte trois arguments :
 <dl>
  <dt><code>currentValue</code></dt>
  <dd>La valeur de l'élément à traiter.</dd>
  <dt><code>index</code>{{Optional_inline}}</dt>
  <dd>L'indice de l'élément du tableau à tester.</dd>
  <dt><code>array</code>{{Optional_inline}}</dt>
  <dd>Le tableau sur lequel on a appelé la méthode <code>every</code>.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code>{{Optional_inline}}</dt>
 <dd>Paramètre optionnel. La valeur à utiliser pour <code>this</code> lors de l'exécution de la fonction.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la fonction de rappel obtient une valeur équivalente à vrai (<em>truthy</em>) pour chaque élément du tableau et <code>false</code> sinon.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>every</code> exécute la fonction <code>callback</code> fournie sur chacun des éléments contenus dans le tableau jusqu'à ce qu'un élément pour lequel la fonction <code>callback</code> renvoie une valeur fausse (<em>falsy value</em>) soit trouvé. Si un tel élément est trouvé, la méthode <code>every</code> renvoie directement <code>false</code>. Sinon, si la fonction <code>callback</code> a renvoyé une valeur vraie pour tous les éléments, la méthode <code>every</code> renverra <code>true</code>. La fonction <code>callback</code> n'est appelée que pour les indices du tableau pour lesquels il existe des valeurs affectées. Elle n'est pas appelée pour les indices supprimés ou ceux qui n'ont jamais reçu de valeur.</p>

<p><code>callback</code> est appelée avec trois arguments : la valeur de l'élément en cours de traitement, l'indice de l'élément dans le tableau et le tableau qui est parcouru.</p>

<p>Si un paramètre <code>thisArg</code> est fourni à la méthode <code>every</code>, ce sera la valeur <code>this</code> de la fonction <code>callback</code>. Si ce paramètre n'est pas fourni, la valeur <code>undefined</code> sera utilisée comme valeur pour <code>this</code>. La valeur <code>this</code> « définitivement » utilisée par la fonction <code>callback</code> est déterminée selon <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this">les règles usuelles de détermination de <code>this</code></a>.</p>

<p><code>every</code> ne modifie pas le tableau sur lequel elle a été appelée.</p>

<p>Les éléments traités par la méthode <code>every</code> sont définis lors du premier appel à <code>callback</code>. Les éléments ajoutés au tableau après que l'appel à <code>every</code> ait commencé ne seront pas traités par la fonction <code>callback</code>. Si des éléments du tableau sont modifiés, la valeur passée à la fonction <code>callback</code> sera celle qu'ils ont au moment où <code>every</code> les traitera. Les éléments qui sont supprimés ne sont pas traités par la fonction <code>every</code>.</p>

<p><code>every</code> agit de la même façon que le quantificateur mathématiques « pour tous », notamment pour le cas au limite d'un tableau vide pour lequel elle renvoie <code>true</code> (on dit qu'il est trivialement vrai que tous les éléments d'un <a href="https://fr.wikipedia.org/wiki/Ensemble_vide#Difficult.C3.A9s_de_la_notion_d.27ensemble_vide">ensemble vide</a> respectent n'importe quelle condition).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Tester_la_valeur_des_éléments_d'un_tableau">Tester la valeur des éléments d'un tableau</h3>

<p>Dans l'exemple suivant, on teste si tous les éléments du tableau sont supérieurs à 10.</p>

<pre class="brush: js">function estAssezGrand(element, index, array) {
  return element &gt;= 10;
}
[12, 5, 8, 130, 44].every(estAssezGrand);   // false
[12, 54, 18, 130, 44].every(estAssezGrand); // true
</pre>

<h3 id="Utiliser_les_fonctions_fléchées_avec_every">Utiliser les fonctions fléchées avec <code>every</code></h3>

<p>{{jsxref("Fonctions/Fonctions_fl%C3%A9ch%C3%A9es","Les fonctions fléchées","","1")}} permettent d'utiliser une syntaxe plus concise pour effectuer le même test.</p>

<pre class="brush: js">[12, 5, 8, 130, 44].every(elem =&gt; elem &gt;= 10); // false
[12, 54, 18, 130, 44].every(elem =&gt; elem &gt;= 10); // true
[{a:1, b:2}, {a:1, b:3}].every(elem =&gt; elem.a === 1); // true
[{a:2, b:2}, {a:1, b:3}].every(elem =&gt; elem.a === 1); // false
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p><code>every</code> fut ajouté avec la cinquième édition du standard ECMA-262. Pour cette raison, il n'est pas nécessairement présent dans les différentes implémentations de ce standard. Afin de faire fonctionner du code dans un environnement qui ne possède pas cette fonctionnalité, on pourra utiliser le fragment de code suivant au début des scripts. Cet algorithme correspond exactement à celui défini dans la cinquième édition du standard ECMA-262. On prend l'hypothèse que <code>Object</code> et <code>TypeError</code> ont leurs valeurs originales (n'ont pas été modifiés) et que <code>callbackfn.call</code> correspond bien à la valeur originale de {{jsxref("Function.prototype.call")}}</p>

<pre class="brush: js">if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this vaut null ou n est pas défini');
    }

    // 1. Soit O le résultat de l'appel à ToObject auquel on a
    // passé this comme argument
    var O = Object(this);

    // 2. Soit lenValue le résultat de l'appel de la méthode interne
    //   Get sur O avec l'argument "length".
    // 3. Soit len le résultat de ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. Si IsCallable(callbackfn) est faux, on lève une exception
    // TypeError.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. Si thisArg a été fourni : soit T cette valeur thisArg, undefined sinon.
    if (arguments.length &gt; 1) {
      T = thisArg;
    }

    // 6. Soit k égal à 0.
    k = 0;

    // 7. On répète tant que k &lt; len
    while (k &lt; len) {

      var kValue;

      // a. Soit Pk la valeur de ToString(k).
      //   (ce qui est implicite pour les opérandes gauche de in)
      // b. Soit kPresent le résultat de l'appel de la méthode
      //    interne de O avec l'argument Pk.
      //    Cette étape peut être combinée avec l'étape c
      // c. Si kPresent vaut true, alors
      if (k in O) {

        // i. Soit kValue le résultat de l'appel de la méthode
        //    interne Get de O avec l'argument Pk.
        kValue = O[k];

        // ii. Soit testResult le résultat de l'appel de la méthode
        //     interne Call de callbackfn avec T comme valeur this et
        //     la liste d'argument contenant kValue, k, et O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. Si ToBoolean(testResult) vaut false, on renvoie false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
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
   <td>{{SpecName('ES5.1', '#sec-15.4.4.16', 'Array.prototype.every')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.every', 'Array.prototype.every')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.every', 'Array.prototype.every')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.every")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
</ul>
