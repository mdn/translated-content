---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCSeconds
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>getUTCSeconds()</code></strong> renvoie les secondes de la date renseignée, d'après UTC.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getutcseconds.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">dateObj.getUTCSeconds()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un entier entre 0 et 59 correspondant au nombre de secondes écoulées pour la date indiquée selon le temps universel.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_getUTCSeconds()">Utiliser <code>getUTCSeconds()</code></h3>

<p>L'exemple suivant assigne les secondes de la date actuelle à la variable <code>secondes</code>.</p>

<pre class="brush: js">var aujourdhui = new Date();
var secondes = aujourdhui.getUTCSeconds();
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.23', 'Date.prototype.getUTCSeconds')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.getUTCSeconds")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getSeconds()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCSeconds()")}}</li>
</ul>
