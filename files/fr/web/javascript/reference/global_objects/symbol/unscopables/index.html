---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/unscopables
---
<div>{{JSRef}}</div>

<p>Le symbole connu <strong><code>Symbol.unscopables</code></strong> est utilisé afin de définir les noms des propriétés propres et héritées qui sont exclues de l'objet lors de l'utilisation de <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/with">with</a></code> sur l'objet en question.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}</div>



<h2 id="Description">Description</h2>

<p>Le symbole <code>@@unscopables</code> (<code>Symbol.unscopables</code>) peut être défini sur n'importe quel objet afin de ne pas exposer certaines propriétés lors des liaisons lexicales avec <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/with">with</a></code>. Note : en mode strict, l'instruction <code>with</code> n'est pas disponible et ce symbole est donc probablement moins nécessaire.</p>

<p>En définissant une propriété comme <code>true</code> dans un objet <code>unscopables</code>, cela exclura la propriété de la portée lexicale. En définissant une propriété comme <code>false</code>, celle-ci pourra faire partie de la portée lexicale et être manipulée dans un bloc <code>with</code>.</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code qui suit fonctionne bien pour ES5 et les versions antérieures. En revanche, pour ECMAScript 2015 (ES6) et les versions ultérieures où la méthode  {{jsxref("Array.prototype.keys()")}} existe, lorsqu'on utilise un environnement créé avec <code>with</code>, <code>"keys"</code> serait désormais la méthode et non la variable. C'est là que le symbole natif <code>@@unscopables</code> <code>Array.prototype[@@unscopables]</code> intervient et empêche d'explorer ces méthodes avec <code>with</code>.</p>

<pre class="brush: js">var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]</pre>

<p>On peut également manipuler <code>unscopables</code> sur ses propres objets :</p>

<pre class="brush: js">var obj = {
  toto: 1,
  truc: 2
};

obj[Symbol.unscopables] = {
  toto: false,
  truc: true
};

with(obj) {
  console.log(toto); // 1
  console.log(truc); // ReferenceError: truc is not defined
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
   <td>{{SpecName('ES2015', '#sec-symbol.unscopables', 'Symbol.unscopables')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol.unscopables', 'Symbol.unscopables')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Symbol.unscopables")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Instructions/with">L'instruction <code>with</code></a> (qui n'est pas disponible <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">en mode strict</a>)</li>
</ul>
