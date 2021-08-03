---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCFullYear
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>setUTCFullYear()</strong></code> définit l'année complête pour la date, selon UTC.</p>

<div>{{EmbedInteractiveExample("pages/js/date-setutcfullyear.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.setUTCFullYear(valeurAnnée[, valeurMois[, valeurJour]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurAnnée</code></dt>
 <dd>Un entier indiquant la valeur numérique d'une année, par exemple, 1995.</dd>
 <dt><code>valeurMois</code></dt>
 <dd>Paramètre optionnel, un entier entre 0 et 11 représentant les mois de janvier à décembre.</dd>
 <dt><code>valeurJour</code></dt>
 <dd>Paramètre optionnel, un entier entre 1 et 31 représentant le jour du mois. Si le paramètre <code>valeurJour</code> est utilisé, il est également nécessaire d'indiquer <code>valeurMois</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.</p>

<h2 id="Description">Description</h2>

<p>Si les paramètres <code>valeurMois</code> et <code>valeurJour</code> ne sont pas utilisés, les valeurs renvoyées par les méthodes {{jsxref("Objets_globaux/Date/getUTCMonth", "getUTCMonth()")}} et {{jsxref("Objets_globaux/Date/getUTCDate", "getUTCDate()")}} seront utilisées.</p>

<p>Si un des paramètres indiqué est en dehors des limites attendues, <code>setUTCFullYear()</code> tentera de mettre à jour la date en conséquence. Ainsi si on utilise la valeur 15 pour <code>valeurMois</code>, l'année sera incrémentée de 1 (année + 1), et 3 sera utilisé pour le mois.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_setUTCFullYear()">Utiliser <code>setUTCFullYear()</code></h3>

<pre class="brush: js">var leGrandJour = new Date();
leGrandJour.setUTCFullYear(1997);
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.41', 'Date.prototype.setUTCFullYear')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.setUTCFullYear")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCFullYear()")}}</li>
 <li>{{jsxref("Date.prototype.setFullYear()")}}</li>
</ul>
