---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCDay
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>getUTCDay()</code></strong> renvoie le jour de la semaine pour la date renseignée d'après UTC. La numérotation commence à 0, et dimanche est considéré comme le premier jour de la semaine.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">dateObj.getUTCDay()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur renvoyée par <code>getUTCDay()</code> est un entier correspondant au jour de la semaine de la date indiquée selon le temps universel (0 pour dimanche, 1 pour lundi, 2 pour mardi, et ainsi de suite).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_getUTCDay()">Utiliser <code>getUTCDay()</code></h3>

<p>L'exemple suivant assigne le jour de la semaine de la date actuelle à la variable <code>jourSemaine</code>.</p>

<pre class="brush: js">var aujourdhui = new Date()
var jourSemaine = aujourdhui.getUTCDay()
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.17', 'Date.prototype.getUTCDay')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.getUTCDay")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCDate()")}}</li>
 <li>{{jsxref("Date.prototype.getDay()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCDate()")}}</li>
</ul>
