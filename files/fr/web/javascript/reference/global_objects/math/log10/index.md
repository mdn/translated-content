---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log10
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/log10
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.log10()</strong></code> renvoie le logarithme en base 10 d'un nombre, donné par la formule :</p>

<p><math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique  </mtext><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x &gt; 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log10.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.log10(<var>x</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le logarithme en base 10 du nombre passé en argument. Si cette valeur est négative, c'est {{jsxref("NaN")}} qui sera renvoyé.</p>

<h2 id="Description">Description</h2>

<p>Si la valeur de l'argument est strictement inférieure à 0, la valeur renvoyée à {{jsxref("NaN")}}.</p>

<p><code>log10()</code> étant une méthode statique de <code>Math</code>, il faut utiliser <code>Math.<code>log10</code>()</code>et non pas la méthode d'un autre objet qui aurait été créé (<code>Math</code> n'est pas un constructeur). Cette fonction est équivalente à la fonction donnée par <code>Math.log(x) / Math.log(10)</code>.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="Utiliser_Math.log10()">Utiliser <code>Math.log10()</code></h3>

<pre class="brush:js">Math.log10(2);      // 0.3010299956639812
Math.log10(1);      // 0
Math.log10(0);      // -Infinity
Math.log10(-2);     // NaN
Math.log10(100000); // 5
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Il est possible d'avoir un résultat approximatif avec la fonction suivante :</p>

<pre class="brush: js">Math.log10 = Math.log10 || function(x) {
  return Math.log(x) * Math.LOG10E;
};
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
   <td>{{SpecName('ES2015', '#sec-math.log10', 'Math.log10')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.log10', 'Math.log10')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.log10")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log1p()")}}</li>
 <li>{{jsxref("Math.log2()")}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
</ul>
