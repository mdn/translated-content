---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
tags:
  - JavaScript
  - Math
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/LOG10E
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>Math.LOG10E</strong></code> fournit la valeur du logarithme en base 10 de e, environ 0.434 :</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log10e.html")}}</div>



<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Description">Description</h2>

<p><code>LOG10E</code> étant une propriété statique de <code>Math</code>, elle doit toujours être utilisée avec la syntaxe <code>Math.LOG10E</code> et ne pas être appelée comme propriété d'un autre objet qui aurait été créé (<code>Math</code> n'est pas un constructeur).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.LOG10E">Utiliser <code>Math.LOG10E</code></h3>

<p>La fonction suivante renvoie le logarithme en base 10 de e :</p>

<pre class="brush:js">function getLog10e() {
   return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.8.1.5', 'Math.LOG10E')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-math.log10e', 'Math.LOG10E')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.log10e', 'Math.LOG10E')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.LOG10E")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log10()")}}</li>
</ul>
