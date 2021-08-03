---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCDate
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>setUTCDate()</strong></code> définit le jour du mois pour la date, selon UTC.</p>

<div>{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.setUTCDate(valeurJour)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurJour</code></dt>
 <dd>Un entier de 1 à 31, représentant un jour dans le mois.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.</p>

<h2 id="Description">Description</h2>

<p>Si le paramètre renseigné est en dehors des limites attendues, <code>setUTCDate()</code> tentera de mettre à jour la date en conséquence. Par exemple, si on utilise la valeur 40 pour <code>valeurJour</code>, et que le mois de la date est juin, le jour sera changé en 10 et le mois passera à juillet.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_setUTCDate()">Utiliser <code>setUTCDate()</code></h3>

<pre class="brush: js">var leGrandJour = new Date();
leGrandJour.setUTCDate(20);
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.37', 'Date.prototype.setUTCDate')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.setUTCDate")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCDate()")}}</li>
 <li>{{jsxref("Date.prototype.setDate()")}}</li>
</ul>
