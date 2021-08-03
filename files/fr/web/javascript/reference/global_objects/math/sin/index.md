---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sin
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/sin
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.sin()</strong></code> renvoie le sinus d'un nombre.</p>

<div>{{EmbedInteractiveExample("pages/js/math-sin.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.sin(<var>x</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre (qui exprime un angle en radians).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le sinus de la valeur passée en argument (qui correspond à un angle en radians).</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>sin()</code> renvoie une valeur numérique comprise (au sens large) entre 1 et -1 et qui représente le sinus d'un angle donné en radians.</p>

<p><code>sin()</code> est une méthode statique de <code>Math</code>, elle doit être utilisée avec la syntaxe <code>Math.sin()</code>, elle ne doit pas être utilisée comme une méthode d'un objet qui aurait été créé (<code>Math</code> n'est pas un constructeur).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1</pre>

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
   <td>{{SpecName('ES5.1', '#sec-15.8.2.16', 'Math.sin')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-math.sin', 'Math.sin')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.sin', 'Math.sin')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.sin")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.acos()")}}</li>
 <li>{{jsxref("Math.asin()")}}</li>
 <li>{{jsxref("Math.atan()")}}</li>
 <li>{{jsxref("Math.atan2()")}}</li>
 <li>{{jsxref("Math.cos()")}}</li>
 <li>{{jsxref("Math.tan()")}}</li>
</ul>
