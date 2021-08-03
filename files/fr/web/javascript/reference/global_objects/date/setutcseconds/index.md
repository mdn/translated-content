---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCSeconds
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>setUTCSeconds()</strong></code> définit les secondes pour la date, selon UTC.</p>

<div>{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.setUTCSeconds(valeurSecondes[, valeurMs]) </pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurSecondes</code></dt>
 <dd>Un entier entre 0 et 59.</dd>
 <dt><code>valeurMs</code></dt>
 <dd>Paramètre optionnel, un nombre entre 0 et 999, représentant les millièmes de secondes.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.</p>

<h2 id="Description">Description</h2>

<p>Si le paramètre <code>valeurMs</code> n'est pas utilisée, la valeur renvoyée par la méthode {{jsxref("Date.prototype.getUTCMilliseconds", "getUTCMilliseconds()")}} sera utilisée.</p>

<p>Si un paramètre renseigné est en dehors de l'intervalle attendu, <code>setUTCSeconds()</code> tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 100 pour <code>valeurSecondes</code>, les minutes de la date seront incrémentées de 1, et 40 sera utilisé pour les secondes.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_setUTCSeconds()">Utiliser <code>setUTCSeconds()</code></h3>

<pre class="brush: js">var leGrandJour = new Date();
leGrandJour.setUTCSeconds(20);
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.31', 'Date.prototype.setUTCSeconds')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.setUTCSeconds")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCSeconds()")}}</li>
 <li>{{jsxref("Date.prototype.setSeconds()")}}</li>
</ul>
