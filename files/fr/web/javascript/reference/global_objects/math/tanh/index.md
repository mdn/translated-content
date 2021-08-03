---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/tanh
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/tanh
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.tanh()</strong></code> renvoie la tangente hyperbolique d'un nombre définie par :</p>

<p><math><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo><mi>x</mi></mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>-</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}} {e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-tanh.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.tanh(<var>x</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La tangente hyperbolique du nombre fourni en argument.</p>

<h2 id="Description">Description</h2>

<p><code>tanh()</code> est une méthode statique de l'objet <code>Math</code>, elle doit toujours être utilisée avec la syntaxe <code>Math.tanh()</code>, elle ne doit pas être utilisée comme une méthode d'un objet <code>Math</code> qui aurait été instancié (<code>Math</code> n'est pas une constructeur).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.tanh()">Utiliser <code>Math.tanh()</code></h3>

<pre class="brush:js">Math.tanh(0);        // 0
Math.tanh(Infinity); // 1
Math.tanh(1);        // 0.7615941559557649</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Cette méthode peut être émulée grâce à la fonction {{jsxref("Objets_globaux/Math/exp", "Math.exp()")}} :</p>

<pre class="brush: js">Math.tanh = Math.tanh || function(x){
  var a = Math.exp(+x), b = Math.exp(-x);
  return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
}</pre>

<p>et si on souhaite n'utiliser qu'un seul appel à {{jsxref("Objets_globaux/Math/exp", "Math.exp()")}}<code> :</code></p>

<pre class="brush: js">Math.tanhx = Math.tanhx || function(x) {
  if(x === Infinity) {
    return 1;
  } else if(x === -Infinity) {
    return -1;
  } else {
    var y = Math.exp(2 * x);
    return (y - 1) / (y + 1);
  }
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-math.tanh', 'Math.tanh')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.tanh', 'Math.tanh')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.tanh")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.acosh()")}}</li>
 <li>{{jsxref("Math.asinh()")}}</li>
 <li>{{jsxref("Math.atanh()")}}</li>
 <li>{{jsxref("Math.cosh()")}}</li>
 <li>{{jsxref("Math.sinh()")}}</li>
</ul>
