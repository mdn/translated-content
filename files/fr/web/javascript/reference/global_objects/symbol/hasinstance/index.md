---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/hasInstance
---
<div>{{JSRef}}</div>

<p>Le symbole « connu » <strong><code>Symbol.hasInstance</code></strong> est utilisé afin de déterminer si un objet constructeur reconnaît un objet comme une de ses instances. On peut donc adapter/personnaliser le comportement de l'opérateur {{jsxref("Opérateurs/instanceof", "instanceof")}} grâce à ce symbole.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}</div>



<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Exemples">Exemples</h2>

<p>On peut implémenter un comportement différent pour <code>instanceof</code> de cette façon :</p>

<pre class="brush: js">class MonArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MonArray); // true</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-symbol.hasinstance', 'Symbol.hasInstance')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol.hasinstance', 'Symbol.hasInstance')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Symbol.hasInstance")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Opérateurs/instanceof", "instanceof")}}</li>
</ul>
