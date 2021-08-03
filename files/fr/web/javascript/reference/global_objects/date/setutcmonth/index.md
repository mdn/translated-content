---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCMonth
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>setUTCMonth()</strong></code> définit le mois de la date, selon UTC.</p>

<div>{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.setUTCMonth(valeurMois[, valeurJour]) </pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurMois</code></dt>
 <dd>Un entier entre 0 et 11, représentant les mois de Janvier à Décembre.</dd>
 <dt><code>valeurJour</code></dt>
 <dd>Paramètre optionnel, un entier entre 1 et 31, représentant le jour du mois.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.</p>

<h2 id="Description">Description</h2>

<p>Si le paramètre <code>valeurJour</code> n'est pas utilisé, la valeur renvoyée par la méthode {{jsxref("Date.prototype.getUTCDate", "getUTCDate()")}} sera utilisée.</p>

<p>Si un paramètre renseigné n'est pas dans l'intervalle attendues, <code>setUTCMonth()</code> tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 15 pour <code>valeurMois</code>, l'année sera incrémentée de 1 (année + 1), et 3 sera utilisé pour le mois.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_setUTCMonth()">Utiliser <code>setUTCMonth()</code></h3>

<pre class="brush: js">var leGrandJour = new Date();
leGrandJour.setUTCMonth(11);
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
   <td>Définition initiale. Implémentée avec JavaScript 1.3.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.5.39', 'Date.prototype.setUTCMonth')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.setUTCMonth")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCMonth()")}}</li>
 <li>{{jsxref("Date.prototype.setMonth()")}}</li>
</ul>
