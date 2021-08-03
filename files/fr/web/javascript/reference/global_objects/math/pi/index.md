---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
tags:
  - JavaScript
  - Math
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/PI
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/PI
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>Math.PI</strong></code> représente le ratio entre le périmètre d'un cercle et son diamètre. Elle vaut environ 3.14159:</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-pi.html")}}</div>



<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Description">Description</h2>

<p><code>PI</code> est une propriété statique de l'objet <code>Math</code> et doit toujours être utilisée avec la syntaxe <code>Math.PI</code> plutôt que d'être appelée comme la propriété d'un autre objet qui aurait été crée (<code>Math</code> n'est pas un constructeur).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.PI">Utiliser <code>Math.PI</code></h3>

<p>La fonction suivante utilise <code>Math.PI</code> afin de calculer le périmètre d'un cercle à partir du rayon passé en argument.</p>

<pre class="brush:js">function calculPérimètre(rayon) {
  return 2 * Math.PI * rayon;
}

calculPérimètre(1);  // 6.283185307179586</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.8.1.6', 'Math.PI')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-math.pi', 'Math.PI')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.pi', 'Math.PI')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.PI")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math")}}</li>
</ul>
