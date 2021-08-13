---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
  - ECMAScript6
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/hypot
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/hypot
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.hypot()</strong></code> renvoie la racine carrée de la somme des carrés de ses arguments. On peut également la définir avec la formule suivante :</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-hypot.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.hypot([valeur<var>1</var>[,<var>valeur2</var>, ...]]) </pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur1, valeur2, ...</code></dt>
 <dd>Des nombres.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La racine carrée de la somme des carrés des arguments. S'il existe un des arguments qui ne peut pas être converti en un nombre, c'est la valeur {{jsxref("NaN")}} qui sera renvoyée.</p>

<h2 id="Description">Description</h2>

<p><code>hypot()</code> étant une méthode statique de <code>Math</code>, il faut utiliser <code>Math.<code>hypot</code>()</code>et non pas la méthode d'un autre objet qui aurait été créé (<code>Math</code> n'est pas un constructeur).</p>

<p>Si aucun argument n'est donné, le résultat sera +0.Si, parmi les arguments, au moins un ne peut pas être converti en un nombre, le résultat sera {{jsxref("NaN")}}.Si cette fonction est utilisée avec un argument : <code>Math.hypot(x)</code> sera équivalente à <code>Math.abs(x)</code>.</p>

<p>Cette fonction permet entre autres de gérer certains cas où, pour les grands nombres, l'utilisation de {{jsxref("Math.sqrt()")}} aurait renvoyé {{jsxref("Infinity")}} à cause des calculs intermédiaires.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.hypot()">Utiliser <code>Math.hypot()</code></h3>

<pre class="brush:js">Math.hypot(3, 4)        // 5
Math.hypot(3, 4, 5)     // 7.0710678118654755
Math.hypot()            // 0
Math.hypot(NaN)         // NaN
Math.hypot(3, 4, "toto") // NaN, +"toto" =&gt; NaN
Math.hypot(3, 4, "5")   // 7.0710678118654755, +"5" =&gt; 5
Math.hypot(-3)          // 3, the same as Math.abs(-3)
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Si elle n'est pas disponible, cette fonction peut être émulée de la façon suivante :</p>

<pre class="brush: js">Math.hypot =  Math.hypot || function() {
    var y = 0;
    var length = arguments.length;

    for (var i = 0; i &lt; length; i++) {
      if(arguments[i] === Infinity || arguments[i] === -Infinity) {
        return Infinity;
      }
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
};
</pre>

<p>Voici une seconde version qui évite les dépassements :</p>

<pre class="brush: js">Math.hypot = function (x, y) {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
  var max = 0;
  var s = 0;
  for (var i = 0; i &lt; arguments.length; i += 1) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg &gt; max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 &amp;&amp; max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
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
   <td>{{SpecName('ES2015', '#sec-math.hypot', 'Math.hypot')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.hypot', 'Math.hypot')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.hypot")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
 <li>{{jsxref("Math.sqrt()")}}</li>
</ul>
