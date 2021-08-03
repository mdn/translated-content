---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/parseFloat
original_slug: Web/JavaScript/Reference/Objets_globaux/parseFloat
---
<div>{{jsSidebar("Objects")}}</div>

<p>La fonction <code><strong>parseFloat()</strong></code> permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (<em>parsing</em>).</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">parseFloat(<var>string</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>string</code></dt>
 <dd>Une chaîne de caractères la valeur qu'on souhaite analyser et transformer en un nombre flottant.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet pas d'obtenir un nombre, ce sera la valeur {{jsxref("NaN")}} qui sera renvoyée.</p>

<h2 id="Description">Description</h2>

<p><code>parseFloat</code> est une fonction non associée à un objet, disponible au plus haut niveau de l'environnement JavaScript.</p>

<p><code>parseFloat</code> analyse l'argument fourni sous la forme d'une chaîne de caractères et renvoie un nombre flottant correspondant. L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas +,-, un chiffre, un point ou un exposant. Ce caractère, ainsi que les suivants, seront ignorés. Les blancs en début et en fin de chaîne sont autorisés.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Si on souhaite avoir un outil de conversion plus strict, on pourra utiliser {{jsxref("Number", "Number(<em>valeur</em>)")}} qui utilise une analyse plus stricte et qui fournit {{jsxref("NaN")}} pour les valeurs qui contiennent des caractères invalides, quelle que soit leur position.</p>
</div>

<p>Si le premier caractère de la chaîne ne peut pas être converti en un nombre, <code>parseFloat()</code> renverra <code>NaN</code>.</p>

<p>Pour des raisons arithmétiques, la valeur <code>NaN</code> n'est jamais un nombre, quelle que soit la base considérée. On peut utiliser la méthode {{jsxref("isNaN")}} afin de déterminer si le résultat obtenu par <code>parseFloat()</code> est <code>NaN</code>. Si <code>NaN</code> est passé comme valeur lors d'opérations arithmétiques, ces opérations renverront également <code>NaN</code> comme résultat.</p>

<p><code>parseFloat()</code> peut également analyser et renvoyer la valeur {{jsxref("Infinity")}} qui représente l'infini numérique. Ici, on pourra utiliser la fonction {{jsxref("isFinite()")}} afin de déterminer si le résultat obtenu est un nombre fini (c'est-à-dire qui n'est ni <code>Infinity</code>, ni <code>-Infinity</code>, ni <code>NaN</code>).</p>

<p><code>parseFloat()</code> peut également analyser un objet si celui-ci implémente la méthode <code>toString()</code> ou <code>valueOf()</code>. La valeur renvoyée par <code>parseFloat()</code> le résultat de <code>parseFloat()</code> appliqué à la valeur renvoyée par <code>toString()</code> ou <code>valueOf()</code> .</p>

<p><code>parseFloat()</code> convertit une valeur {{jsxref("BigInt")}} en une valeur {{jsxref("Number")}} et perd ainsi en précision car toutes les valeurs <code>BigInt</code> ne sont pas représentables en <code>Number</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_parseFloat()_pour_renvoyer_un_nombre">Utiliser <code>parseFloat()</code> pour renvoyer un nombre</h3>

<p>Les instructions suivantes renvoient toutes la valeur <strong>3.14</strong> :</p>

<pre class="brush:js">parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14d'autres caractères non numériques");

var titi = Object.create(null);
titi.valueOf = function () { return "3.14"; };
parseFloat(titi);​​​​​
</pre>

<h3 id="Utiliser_parseFloat()_pour_renvoyer_NaN">Utiliser <code>parseFloat()</code> pour renvoyer <code>NaN</code></h3>

<p>Dans cet exemple, le résultat obtenu est {{jsxref("<code>NaN</code>")}} :</p>

<pre class="brush: js">parseFloat("FF2");
</pre>

<h3 id="parseFloat_et_BigInt"><code>parseFloat</code> et <code>BigInt</code></h3>

<pre class="brush: js">parseFloat(900719925474099267n);
// 900719925474099300</pre>

<h3 id="Une_fonction_plus_stricte">Une fonction plus stricte</h3>

<p>Si on souhaite éviter de convertir des chaînes qui contiennent des caractères non numériques, on pourra utiliser une expression rationnelle pour filtrer ces valeurs (et obtenir une fonction plus stricte que <code>parseFloat()</code>) :</p>

<pre class="brush: js">var filterFloat = function (value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

console.log(filterFloat('421'));               // 421
console.log(filterFloat('-421'));              // -421
console.log(filterFloat('+421'));              // 421
console.log(filterFloat('Infinity'));          // Infinity
console.log(filterFloat('1.61803398875'));     // 1.61803398875
console.log(filterFloat('421e+0'));            // NaN
console.log(filterFloat('421hop'));            // NaN
console.log(filterFloat('hop1.61803398875'));  // NaN

</pre>

<p>Attention : ce code n'est qu'un exemple et renverra <code>NaN</code> pour des valeurs pourtant valides comme <code>1.</code> ou <code>.5</code>.</p>

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
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.2.3', 'parseFloat')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-parsefloat-string', 'parseFloat')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-parsefloat-string', 'parseFloat')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.parseFloat")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("parseInt", "parseInt()")}}</li>
 <li>{{jsxref("Number.parseFloat()")}}</li>
 <li>{{jsxref("Number.parseInt()")}}</li>
 <li>{{jsxref("Number.toFixed()")}}</li>
 <li>{{jsxref("isNaN", "isNaN()")}}</li>
</ul>
