---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getSeconds
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>getSeconds()</code></strong> renvoie les secondes pour la date renseignée d'après l'heure locale.</p>

<div>{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">dateObj.getSeconds()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur renvoyée par <code>getSeconds()</code> est un entier entre 0 et 59 correspondant au nombre de secondes pour la date donnée selon l'heure locale.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_getSeconds()">Utiliser <code>getSeconds()</code></h3>

<p>La seconde instruction ci-dessous assigne la valeur 30 à la variable <code>secondes</code>, selon la valeur de l'objet {{jsxref("Date")}} <code>noel95</code>.</p>

<pre class="brush: js">var noel95 = new Date("December 25, 1995 23:15:30");
var secondes = noel95.getSeconds();

console.log(secondes); //30
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.22', 'Date.prototype.getSeconds')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.getSeconds")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.getUTCSeconds()")}}</li>
 <li>{{jsxref("Date.prototype.setSeconds()")}}</li>
</ul>
