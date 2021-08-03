---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setHours
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setHours
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>setHours()</strong></code> définit les heures pour une date donnée, selon l'heure locale, et renvoie le nombre de millièmes de secondes écoulées entre le 1er janvier 1970 00:00:00 UTC et la nouvelle date mise à jour.</p>

<div>{{EmbedInteractiveExample("pages/js/date-sethours.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">dateObj.setHours(valeurHeures[, valeurMinutes[, valeurSecondes[, valeurMs]]])
</pre>

<h3 id="Versions_antérieures_à_JavaScript_1.3">Versions antérieures à JavaScript 1.3</h3>

<pre class="syntaxbox">dateObj.setHours(valeurHeures)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurHeures</code></dt>
 <dd>Un entier normalement compris entre 0 et 23, représentant l'heure. Si la valeur est supérieure à 23, la valeur de l'heure sera incrémentée d'autant d'heures supplémentaires.</dd>
 <dt><code>valeurMinutes</code></dt>
 <dd>Paramètre optionnel, un entier normalement compris entre 0 et 59, représentant les minutes. Si la valeur est supérieure à 59, la valeur de l'heure sera incrémentée d'autant de minutes supplémentaires.</dd>
 <dt><code>valeurSecondes</code></dt>
 <dd>Paramètre optionnel, un entier normalement compris entre 0 et 59, représentant les secondes. Si vous indiquez le paramètre <code>valeurSecondes</code>, vous devez aussi renseigner <code>valeurMinutes</code>. Si la valeur est supérieure à 59, l'heure sera incrémentée d'autant de secondes supplémentaires.</dd>
 <dt><code>valeurMs</code></dt>
 <dd>Paramètre optionnel, un entier normalement compris entre 0 et 999, représentant les millièmes de secondes. Si vous indiquez <code>valeurMs</code>, vous devez aussi renseigner <code>valeurMinutes</code> et <code>valeurSecondes</code>. Si la valeur fournie est supérieure à 999, l'heure sera incrémentée d'autant de millisecondes supplémentaires.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit, UTC et la date mise à jour.</p>

<h2 id="Description">Description</h2>

<p>Si vous ne renseignez pas <code>valeurMinutes</code>, <code>valeurSecondes</code> et <code>valeurMs</code>, les valeurs renvoyées par les méthodes {{jsxref("Date.getMinutes", "getMinutes()")}}, {{jsxref("Date.getSeconds", "getSeconds()")}}, et {{jsxref("Date.getMilliseconds", "getMilliseconds()")}} seront utilisées.</p>

<p>Si un des paramètres que vous renseignez est en dehors des limites attendues, <code>setHours()</code> tentera de mettre à jour la date en conséquence. Par exemple, si vous utilisez 100 pour <code>valeurSecondes</code>, les minutes seront incrémentées de 1 (min + 1), et 40 sera utilisé pour les secondes.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_setHours()">Utiliser <code>setHours()</code></h3>

<pre class="brush:js">var leGrandJour = new Date();
leGrandJour.setHours(7);
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
   <td>Définition initiale. Implémentée avec JavaScript 1.0</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.5.34', 'Date.prototype.setHours')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.setHours")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getHours()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCHours()")}}</li>
</ul>
