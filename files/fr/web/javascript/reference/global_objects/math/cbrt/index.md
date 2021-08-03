---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/cbrt
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/cbrt
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.cbrt()</strong></code> renvoie la racine cubique (le nom anglais étant <em>cubic root</em>) d'un nombre :</p>

<p><math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>le seul</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique} \; y \; \text{such that} \; y^3 = x</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.cbrt(<var>x</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La racine cubique du nombre passé en argument.</p>

<h2 id="Description">Description</h2>

<p><code>cbrt()</code> étant une méthode statique de <code>Math</code>, il faut utiliser <code>Math.cbrt()</code>, et non pas la méthode d'un autre objet créé (<code>Math</code> n'est pas un constructeur).</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="Utiliser_Math.cbrt()">Utiliser <code>Math.cbrt()</code></h3>

<pre class="brush:js">Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2);  // 1.2599210498948732</pre>

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
   <td>{{SpecName('ES6', '#sec-math.cbrt', 'Math.cbrt')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.cbrt', 'Math.cbrt')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.cbrt")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.pow()")}}</li>
 <li>{{jsxref("Math.sqrt()")}}</li>
</ul>
