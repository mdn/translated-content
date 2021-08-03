---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/asinh
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/asinh
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.asinh()</strong></code> renvoie l'arc sinus hyperbolique d'un nombre :</p>

<p><math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> le seul </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-asinh.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.asinh(<var>x</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'arc sinus hyperbolique du nombre passé en argument.</p>

<h2 id="Description">Description</h2>

<p><code>asinh()</code> étant une méthode statique de <code>Math</code>, elle doit toujours être utilisée avec la syntaxe <code>Math.asinh()</code> et ne doit pas être appelée depuis un autre objet qui aurait été créé (Math n'est pas un constructeur).</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="Utiliser_Math.asinh()">Utiliser <code>Math.asinh()</code></h3>

<pre class="brush: js">Math.asinh = Math.asinh || function(x) {
  if (x === -Infinity) {
    return x;
  } else {
    return Math.log(x + Math.sqrt(x * x + 1));
  }
};
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
   <td>{{SpecName('ES6', '#sec-math.asinh', 'Math.asinh')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.asinh', 'Math.asinh')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.asinh")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.acosh()")}}</li>
 <li>{{jsxref("Math.atanh()")}}</li>
 <li>{{jsxref("Math.cosh()")}}</li>
 <li>{{jsxref("Math.sinh()")}}</li>
 <li>{{jsxref("Math.tanh()")}}</li>
</ul>
