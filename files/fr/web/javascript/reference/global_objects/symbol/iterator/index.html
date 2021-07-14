---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/iterator
---
<div>{{JSRef}}</div>

<p>Le symbole <code><strong>Symbol.iterator</strong></code> définit l'itérateur par défaut d'un objet. C'est l'itérateur qui sera utilisé par <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of"><code>for...of</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}</div>



<h2 id="Description">Description</h2>

<p>Lorsqu'on doit itérer sur un objet (par exemple avec une boucle <code>for..of</code>), sa méthode <code>@@iterator</code> est appelée sans argument et l'itérateur renvoyé par la méthode est utilisé pour récupérer les valeurs sur lesquelles itérer.</p>

<p>Certains types natifs possèdent un comportement par défaut pour l'itération, d'autres types (tels qu'{{jsxref("Object")}}) n'ont pas de tel comportement. Les types natifs qui disposent d'une méthode <code>@@iterator</code> sont :</p>

<ul>
 <li>{{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}</li>
</ul>

<p>Pour plus d'informations, voir aussi <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">la page sur les protocoles d'itération</a>.</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Itérables_définis_par_l'utilisateur">Itérables définis par l'utilisateur</h3>

<p>Il est possible de construire un itérable de la façon suivante :</p>

<pre class="brush: js">var monItérable = {}
monItérable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...monItérable] // [1, 2, 3]
</pre>

<p>On peut également définir ces itérables via des propriétés calculées dans des déclarations de classe ou dans des littéraux objets :</p>

<pre class="brush: js">class Toto {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const monObj = {
  *[Symbol.iterator] () {
    yield "a";
    yield "b";
  }
}

[... new Toto] // [1, 2, 3]
[... monObj]   // ["a", "b"]
</pre>

<h3 id="Itérables_mal-formés">Itérables mal-formés</h3>

<p>Si la méthode <code>@@iterator</code> d'un itérable ne renvoie pas un itérateur, on dira que c'est un itérable mal-formé. Utiliser un tel itérable peut provoquer des erreurs lors de l'exécution :</p>

<pre class="brush: js">var itérableMalFormé = {}
itérableMalFormé[Symbol.iterator] = () =&gt; 1
[...itérableMalFormé] // TypeError: [] is not a function
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
   <td>{{SpecName('ES2015', '#sec-symbol.iterator', 'Symbol.iterator')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol.iterator', 'Symbol.iterator')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Symbol.iterator")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">Les protocoles d'itération</a></li>
 <li>{{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}</li>
</ul>
