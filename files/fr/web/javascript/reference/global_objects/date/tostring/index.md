---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toString()</strong></code> renvoie une chaîne de caractères représentant l'objet {{jsxref("Date")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/date-tostring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.toString()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant la date indiquée.</p>

<h2 id="Description">Description</h2>

<p>L'objet {{jsxref("Date")}} remplace la méthode <code>toString()</code> de l'objet {{jsxref("Object")}} ; il n'hérite pas de {{jsxref("Object.prototype.toString()")}}. Pour les objets {{jsxref("Date")}}, la méthode <code>toString()</code> renvoie une représentation textuelle de l'objet.</p>

<p>La méthode <code>toString()</code> renvoie toujours une chaîne de caractères représentant une date en anglais américain. Ce format a été standardisé avec ES2018 et peut être décrit de la façon suivante :</p>

<ul>
 <li>Le jour de la semaine avec les trois premières lettres du jour en anglais (ex. « Sat »)</li>
 <li>Un espace</li>
 <li>Le mois avec les trois premières lettres du mois en anglais (ex. « Sep »)</li>
 <li>Un espace</li>
 <li>La date du jour dans le mois sur deux chiffres (ex. « 01 »)</li>
 <li>Un espace</li>
 <li>L'année sur 4 chiffres (ex. « 2018 »)</li>
 <li>Un espace</li>
 <li>L'heure sur deux chiffres (ex. « 14 »)</li>
 <li>Un deux-points (:)</li>
 <li>Les minutes sur deux chiffres (ex. « 53 »)</li>
 <li>Un deux-points (:)</li>
 <li>Les secondes sur deux chiffres (ex. « 26 »)</li>
 <li>Un espace</li>
 <li>La chaîne de caractères « GMT »</li>
 <li>Le signe du décalage horaire par rapport à GMT :
  <ul>
   <li>La chaîne "+" pour les décalages positifs (0 ou plus)</li>
   <li>La chaîne "-" pour les décalages strictement négatifs</li>
  </ul>
 </li>
 <li>L'heure de décalage sur deux chiffres</li>
 <li>Les minutes de décalage sur deux chiffres</li>
 <li>Et, éventuellement, le nom du fuseau horaire avec
  <ul>
   <li>Un espace</li>
   <li>Une parenthèse ouvrante (« ( »)</li>
   <li>Une chaîne de caractères, pouvant varier selon l'implémentation, qui désigne le fuseau horaire. Ce peut être une abréviation ou un nom complet.</li>
   <li>Une parenthèse fermante (« ) »)</li>
  </ul>
 </li>
</ul>

<p>Avant ES2018, le format de la chaîne de caractères renvoyé pouvait varier selon l'implémentation.</p>

<p>JavaScript appelle la méthode <code>toString()</code> automatiquement quand une date doit être representée sous forme d'un texte ou quand une date est référencée lors d'une concatenation de chaînes de caractères.</p>

<p><code>toString()</code> est une méthode générique. Si <code>this</code> n'est pas une instance de {{jsxref("Date")}}, elle renverra "Invalid Date".</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toString()">Utiliser <code>toString()</code></h3>

<p>L'exemple suivant assigne la valeur de <code>toString()</code> de l'objet <code>Date</code> à <code>maVar</code> :</p>

<pre class="brush:js">var x = new Date();
var maVar = x.toString(); // assigne une valeur à maVar similaire à :
// Mon Sep 28 1998 14:36:22 GMT-0700 (PDT)
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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.2', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.tostring', 'Date.prototype.toString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES2018', '#sec-date.prototype.tostring', 'Date.prototype.toString')}}</td>
   <td>{{Spec2('ES2018')}}</td>
   <td>Standardisation du format produit par <code>Date.prototype.toString()</code></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tostring', 'Date.prototype.toString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.toString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
 <li>{{jsxref("Date.prototype.toDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
</ul>
