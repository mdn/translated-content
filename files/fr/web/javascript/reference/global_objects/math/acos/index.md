---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/acos
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/acos
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.acos()</strong></code> renvoie l'arc cosinus d'une valeur exprimée en radians. Cela est défini par :</p>

<p><math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> le seul  </mtext><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-acos.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.acos(<em>x</em>) </pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre (représentant un angle exprimé en radians).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'arc cosinus du nombre passé en argument si celui est compris entre -1 et 1. La méthode renvoie {{jsxref("NaN")}} sinon.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>acos</code> renvoie une valeur numérique comprise entre 0 et Pi pour x compris entre -1 et 1. Si la valeur de <code>x</code> est hors de cet intervalle, la méthode renverra {{jsxref("NaN")}}.</p>

<p><code>acos</code> est une méhode statique de <code>Math</code> et doit toujours être utilisée avec la syntaxe <code>Math.acos()</code>, elle ne doit pas être appelée depuis un autre objet qui aurait été créé (<code>Math</code> n'est pas un constructeur).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.acos()">Utiliser <code>Math.acos()</code></h3>

<pre class="brush:js">Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
</pre>

<p>Pour les valeurs (strictement) inférieures à -1 ou supérieures à 1, <code>Math.acos</code> renvoie <code>NaN</code>.</p>

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
   <td>{{SpecName('ES5.1', '#sec-15.8.2.2', 'Math.acos')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-math.acos', 'Math.acos')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.acos', 'Math.acos')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.acos")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.asin()")}}</li>
 <li>{{jsxref("Math.atan()")}}</li>
 <li>{{jsxref("Math.atan2()")}}</li>
 <li>{{jsxref("Math.cos()")}}</li>
 <li>{{jsxref("Math.sin()")}}</li>
 <li>{{jsxref("Math.tan()")}}</li>
</ul>
