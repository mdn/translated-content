---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/valueOF
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>valueOf()</code></strong> renvoie la valeur primitive d'un objet {{jsxref("Date")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/date-valueof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>date</var>.valueOf()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre de millisecondes écoulées entre le premier janvier 1970, minuit UTC et la date indiquée.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>valueOf()</code> renvoie la valeur primitive d'un objet <code>Date</code> sous forme d'un nombre. Ce nombre correspond au nombre de millisecondes écoulées depuis le 1 janvier 1970 00h00 GMT.</p>

<p>D'un point de vue fonctionnel, cette méthode est équivalente à {{jsxref("Date.prototype.getTime()")}}.</p>

<p>Cette méthode est souvent appelée en interne par le moteur JavaScript et n'est pas utilisée de façon explicite dans des scripts.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_valueOf()">Utiliser <code>valueOf()</code></h3>

<pre class="brush:js">var x = new Date(56, 6, 17);
var maVar = x.valueOf();      // maVar vaut -424713600000
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
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.5.8', 'Date.prototype.valueOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.valueof', 'Date.prototype.valueOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.valueOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
 <li>{{jsxref("Date.prototype.getTime()")}}</li>
</ul>
