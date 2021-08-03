---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setTime
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setTime
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>setTime()</strong></code> met l'objet {{jsxref("Date")}} à jour par rapport au nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.</p>

<div>{{EmbedInteractiveExample("pages/js/date-settime.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.setTime(valeurTemps)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurTemps</code></dt>
 <dd>Un entier représentant le nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit, UTC et la date mise à jour (ce qui correspond à la valeur de l'argument).</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>setTime()</code> est utilisée afin d'assigner une date à un autre objet {{jsxref("Date")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_setTime()">Utiliser <code>setTime()</code></h3>

<pre class="brush: js">var leGrandJour = new Date("July 1, 1999");
var pareilQueGrandJour = new Date();
pareilQueGrandJour.setTime(leGrandJour.getTime());
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.5.27', 'Date.prototype.setTime')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.settime', 'Date.prototype.setTime')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.settime', 'Date.prototype.setTime')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.setTime")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getTime()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCHours()")}}</li>
</ul>
