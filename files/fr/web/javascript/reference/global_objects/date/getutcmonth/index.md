---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCMonth
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>getUTCMonth()</code></strong> renvoie le mois de la date renseignée, d'après UTC. La numérotation des mois commence à 0 pour le premier mois de l'année.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">dateObj.getUTCMonth()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un entier entre 0 et 11 correspondant au mois dans l'année de la date indiquée selon le temps universel (0 pour janvier, 1 pour février, 2 pour mars, et ainsi de suite…).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_getUTCMonth()">Utiliser <code>getUTCMonth()</code></h3>

<p>L'exemple suivant assigne le mois de la date actuelle à la variable <code>mois</code>.</p>

<pre class="brush: js">var aujourdhui = new Date();
var mois = aujourdhui.getUTCMonth();
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.13', 'Date.prototype.getUTCMonth')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.getUTCMonth")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMonth()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMonth()")}}</li>
</ul>
