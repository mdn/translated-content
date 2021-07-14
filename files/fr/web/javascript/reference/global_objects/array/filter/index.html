---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/filter
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/filter
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>filter()</strong></code> crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction <code>callback</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/array-filter.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.filter(<var>callback)</var>; // callback(elementCourant[, index[, tableauEntier]])
var nouveauTableau = arr.filter(callback, <var>thisArg</var>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction de test (ou <em>prédicat</em>) à appliquer à chaque élément du tableau. Cette fonction est appelée avec les arguments suivants :
 <dl>
  <dt><code>elementCourant</code></dt>
  <dd>L'élément à traiter</dd>
  <dt><code>index</code></dt>
  <dd>Son indice.</dd>
  <dt><code>array</code></dt>
  <dd>Le tableau complet</dd>
 </dl>
 Cette fonction renvoie <code>true</code> — ou une valeur équivalente — si l'élément doit être conservé pour le tableau résultat et <code>false</code> dans le cas contraire.</dd>
 <dt><code>thisArg</code> {{optional_inline}}</dt>
 <dd>Objet à utiliser en tant que <code>this</code> quand la fonction <code>callback</code> est exécutée.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau contenant les éléments qui respectent la condition du filtre. Si aucun élément ne respecte la condition, c'est un tableau vide qui est renvoyé.</p>

<h2 id="Description">Description</h2>

<p><code>filter()</code> appelle la fonction <code>callback</code> fournie pour chacun des éléments d'un tableau, et construit un nouveau tableau contenant tous les éléments pour lesquels l'appel de <code>callback</code> retourne <code>true</code> ou une valeur équivalente à <code>true</code> dans un contexte booléen. La fonction <code>callback</code> n'est utilisée que pour les éléments du tableau ayant une valeur assignée — les index supprimés ou pour lesquels il n'y a jamais eu de valeur ne sont pas pris en compte. Les éléments du tableau qui ne passent pas le test effectué par la fonction <code>callback</code> sont ignorés, ils ne sont pas inclus dans le nouveau tableau.</p>

<p>La fonction <code>callback</code> est appelée avec trois arguments :</p>

<ol>
 <li>la valeur de l'élément courant,</li>
 <li>l'index de l'élément courant,</li>
 <li>l'objet <code>Array</code> parcouru.</li>
</ol>

<p>Si le paramètre <code>thisArg</code> est fourni, il sera utilisé comme valeur <code>this</code> lors de l'appel de la fonction <code>callback</code>. S'il n'est pas fourni, la valeur <code>undefined</code> sera utilisée à la place. La valeur de <code>this</code> qui est finalement utilisée par la fonction <code>callback</code> est déterminée selon <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">les règles usuelles pour déterminer la valeur <code>this</code> au sein d'une fonction</a>.</p>

<p>Noter que <code>filter()</code> ne modifie pas le tableau d'origine.</p>

<p>La liste des éléments parcourus par <code>filter()</code> est définie avant la première invocation de la fonction <code>callback</code>. Les éléments qui sont ajoutés à la liste après le début de l'appel de <code>filter()</code> (grâce à la fonction <code>callback</code> par exemple) ne seront pas concernés par le filtre. Si des éléments de la liste sont modifiés ou supprimés au cours du traitement, la valeur fournie à la fonction <code>callback</code> sera la valeur de ces éléments au moment où <code>filter()</code> les traite — les éléments supprimés ne seront pas traités par la fonction.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Filtrer_les_petites_valeurs">Filtrer les petites valeurs</h3>

<p>L'exemple suivant utilise <code>filter</code> pour créer une nouvelle liste où tous les éléments dont la valeur est inférieure à 10 ont été retirés.</p>

<pre class="brush: js">function suffisammentGrand(element) {
  return element &gt;= 10;
}
var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
// filtre vaut [12, 130, 44]
</pre>

<h3 id="Filtrer_des_éléments_JSON_invalides_et_les_trier_en_fonction_d'un_identifiant_avec_filter()">Filtrer des éléments JSON invalides et les trier en fonction d'un identifiant avec <code>filter()</code></h3>

<p>Dans l'exemple qui suit, on utilise <code>filter()</code> pour créer un objet JSON qui contient des éléments dont l'<code>id</code> est un entier.</p>

<pre class="brush: js">var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var elementsInvalides = 0;

function filtrerParID(obj) {
  // Si c'est un nombre
  if (obj.id !== undefined &amp;&amp; typeof(obj.id) === 'number' &amp;&amp; !isNaN(obj.id)) {
    return true;
  } else {
    elementsInvalides++;
    return false;
  }
}

var arrByID = arr.filter(filtrerParID);

console.log('Tableau filtré\n', arrByID);
// Le tableau filtré est :
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Nombre d\'éléments invalides = ', elementsInvalides);
// Nombre d'éléments invalides 4</pre>

<h3 id="Recherche_dans_un_tableau">Recherche dans un tableau</h3>

<p>Dans l'exemple qui suit, on utilise <code>filter()</code> pour filtrer le contenu d'un tableau selon un critère donné.</p>

<pre class="brush: js">var fruits = ['pomme', 'banane', 'raisin', 'mangue'];

function filtreTexte(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
  })
}

console.log(filtreTexte(fruits, 'an')); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, 'm')); // ['pomme', 'mangue'];
</pre>

<h3 id="Implémentation_avec_la_syntaxe_ECMAScript_2015_(ES6)">Implémentation avec la syntaxe ECMAScript 2015 (ES6)</h3>

<p>L'exemple suivant utilise <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">les fonctions fléchées</a>, et le mot clé <a href="/fr/docs/Web/JavaScript/Reference/Instructions/const"><code>const</code> </a>disponible en ES6.</p>

<pre class="brush: js">const fruits = ['pomme', 'banane', 'raisin', 'mangue'];

const filtreTexte = (arr, requete) =&gt; {
  return arr.filter(el =&gt;  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
}

console.log(filtreTexte(fruits, 'an')); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, 'm')); // ['pomme', 'mangue'];</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p><code>Array.prototype.filter()</code> a été ajoutée avec la cinquième édition du standard ECMA-262 — ainsi elle pourrait ne pas être présente dans toutes les implémentations du standard. Ce problème peut être contourné en ajoutant le code suivant au début des scripts et permettra d'utiliser <code>filter</code> au sein d'implémentations qui n'en bénéficient pas nativement. Cet algorithme est strictement celui spécifié par la cinquième édition d'ECMA-262, en considérant que <code>callbackfn.call</code> est évaluée avec la valeur d'origine de {{jsxref("Function.prototype.call")}} et que {{jsxref("Array.prototype.push")}} a sa valeur d'origine.</p>

<pre class="brush: js">if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') &amp;&amp; this) )
        throw new TypeError();

    var len = this.length &gt;&gt;&gt; 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.20', 'Array.prototype.filter')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-array.prototype.filter', 'Array.prototype.filter')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.filter', 'Array.prototype.filter')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.filter")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
