---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/MIN_VALUE
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>Number.MIN_VALUE</strong></code> représente la plus petite valeur numérique positive qu'il est possible de représenter en JavaScript.</p>

<div>{{EmbedInteractiveExample("pages/js/number-min-value.html")}}</div>



<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Description">Description</h2>

<p>La propriété <code>MIN_VALUE</code> représente le nombre positif le plus proche de 0 et non pas le nombre négatif minimal qu'il est possible de représenter en JavaScript.</p>

<p><code>MIN_VALUE</code> vaut environ 5e-324. Les valeurs inférieures à <code>MIN_VALUE</code> sont converties en 0.</p>

<p><code>MIN_VALUE</code> est une propriété statique de {{jsxref("Number")}} et doit donc être utilisée avec la syntaxe <code>Number.MIN_VALUE</code>, et non pas via la propriété d'un objet <code>Number</code> qui aurait été instancié.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code qui suit effectue la division de deux nombres. Si le résultat obtenu est supérieur ou égal à <code>MIN_VALUE</code>, la fonction <code>func1</code> sera appelée, sinon la fonction <code>func2</code> sera utilisée.</p>

<pre class="brush:js">if (num1 / num2 &gt;= Number.MIN_VALUE) {
    func1();
} else {
    func2();
}</pre>

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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.7.3.3', 'Number.MIN_VALUE')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number.min_value', 'Number.MIN_VALUE')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.min_value', 'Number.MIN_VALUE')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.MIN_VALUE")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Number.MAX_VALUE")}}</li>
</ul>
