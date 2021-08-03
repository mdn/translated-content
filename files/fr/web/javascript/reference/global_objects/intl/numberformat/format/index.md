---
title: Intl.NumberFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - NumberFormat
  - Propriété
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat/format
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Intl.NumberFormat.prototype.format()</strong></code> formate un nombre en fonction des options de locales et de formats définis dans l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}} correspondant.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>numberFormat</var>.format(<var>nombre</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>nombre</code></dt>
 <dd>Le nombre qu'on souhaite formater.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>La fonction d'accesseur <code>format</code> permet de formater un nombre donné en une chaîne de caractères selon les options de locale et de format de l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_format">Utiliser <code>format()</code></h3>

<p>On peut utiliser la fonction renvoyée par <code>format</code> pour formater une valeur monétaire selon la locale russe :</p>

<pre class="brush: js">var options = {style: "currency", currency: "RUB"};
var numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."</pre>

<h3 id="Utiliser_format_avec_map">Utiliser <code>format()</code> avec <code>map()</code></h3>

<p>On peut également utiliser la fonction <code>format</code> pour formater les nombres contenus dans un tableau. On notera que la fonction est liée à l'objet <code>NumberFormat</code> dont elle provient, on peut donc directement l'utiliser avec {{jsxref("Array.prototype.map")}}.</p>

<pre class="brush: js">var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat("es-ES");
var formatted = a.map(numberFormat.format);
console.log(formatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.prototype.format', 'Intl.NumberFormat.prototype.format')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.NumberFormat.format")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("NumberFormat", "Intl.NumberFormat")}}</li>
 <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
</ul>
