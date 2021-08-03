---
title: Intl.DateTimeFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/format
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Intl.DateTimeFormat.prototype.format()</code></strong> est un accesseur formate une date selon les options de locale et de format de l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateTimeFormat</var>.format(<var>date</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>date</code></dt>
 <dd>La date à formater.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'accesseur <code>format</code> permet de formater une date en une chaîne de caractères en fonction des options de locale et de format définies pour l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_format">Utiliser <code>format</code></h3>

<p>On peut utiliser la fonction renvoyée par l'accesseur <code>format</code> pour formater une date. Par exemple selon la locale serbe :</p>

<pre class="brush: js">var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
var dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// → "недеља, 7. април 2013."</pre>

<h3 id="Utiliser_format_avec_map">Utiliser <code>format</code> avec <code>map()</code></h3>

<p>On peut également utiliser la fonction renvoyée par l'accesseur <code>format</code> pour formater toutes les dates d'un tableau. On observe que la fonction est liée à l'objet <code>DateTimeFormat</code> dont elle provient, on peut donc la passer directement à {{jsxref("Array.prototype.map()")}}.</p>

<pre class="brush: js">var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
var options = {year: "numeric", month: "long"};
var dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
var formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// → "setembro de 2012; dezembro de 2012; abril de 2012"</pre>

<h3 id="Comparaison_des_dates_formatées_et_des_valeurs_statiques">Comparaison des dates formatées et des valeurs statiques</h3>

<p>La plupart du temps, le format renvoyé par <code>format()</code> est cohérent. Toutefois, cela peut évoluer à l'avenir et n'est pas garanti pour l'ensemble des langues (de telles variations sont souhaitables et permises par la spécification). Ainsi, IE et Edge ajoutent des caractères de contrôle bidirectionnels autour des dates afin que le texte produit ait une directionalité cohérente avec le texte avec lequel elles seront concaténées.</p>

<p>Aussi, mieux vaut ne pas comparer un résultat fourni par <code>format()</code> avec une valeur statique :</p>

<pre class="brush: js; example-bad">let d = new Date("2019-01-01T00:00:00.000000Z");
let formattedDate = Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(d);

"1.1.2019, 01:00:00" === formattedDate;
// true pour Firefox et les autres
// false pour IE et Edge
</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Voir aussi ce fil <a href="https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results">StackOverflow</a> pour plus de détails et d'exemples.</p>
</div>

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
   <td>{{SpecName('ES Int 1.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.format', 'Intl.DateTimeFormat.format')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.DateTimeFormat.format")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString")}}</li>
</ul>
