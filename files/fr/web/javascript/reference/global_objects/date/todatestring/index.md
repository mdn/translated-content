---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toDateString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toDateString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toDateString()</strong></code> renvoie la date contenue dans un objet {{jsxref("Date")}} sous la forme d'une chaîne de caractères lisible par un humain, en anglais américain et au format suivant :</p>

<ol>
 <li>Les trois premières lettre indiquent le jour</li>
 <li>Les trois lettres suivantes indiquent le mois</li>
 <li>Les deux chiffres suivants indiquent le jour du mois (et sont complétés avec un 0 devant si besoin)</li>
 <li>Les quatre chiffres restants indiquent l'année (si besoin complétées avec des 0 comme préfixe)</li>
</ol>

<div>{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.toDateString()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente la date indiquée, dans un format anglais américain.</p>

<h2 id="Description">Description</h2>

<p>Les instances de {{jsxref("Date")}} représentent un point précis dans le temps. Appeler {{jsxref("Date.prototype.toString", "toString")}} retournera la date formatée sous une forme lisible par un humain, en anglais américain. Pour le moteur JavaScript <a href="/fr/docs/SpiderMonkey">SpiderMonkey</a>, ceci consiste en : la partie « date » (jour, mois et année) suivie de la partie « heure » (heures, minutes, secondes et fuseau horaire). Il est parfois préférable d'obtenir uniquement la partie « date » ; ceci est possible grâce à la méthode <code>toDateString()</code>.</p>

<p>La méthode <code>toDateString()</code> est particulièrement utile car, pour les moteurs implémentant fidèlement <a href="/fr/docs/JavaScript/Language_Resources">ECMA-262</a>, il peut y avoir certaines différences dans la chaîne de caractères produite par <code>toString()</code> sur les objets <code>Date</code>. Le format dépend de l'implémentation et les techniques simples de découpage de texte peuvent ne pas produire un résultat cohérent à travers les différents moteurs.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_simplement_toDateString()">Utiliser simplement <code>toDateString()</code></h3>

<pre class="brush:js">var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // écrit Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // écrit Wed Jul 28 1993</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.5.3', 'Date.prototype.toDateString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.toDateString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
