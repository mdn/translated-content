---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
tags:
  - Date
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toGMTString
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>La méthode <code><strong>toGMTString()</strong></code> convertit une date en une chaîne de caractères, en utilisant les conventions Internet pour GMT. Le format exact de la valeur renvoyée par <code>toGMTString()</code> varie en fonction de la plateforme et du navigateur web. En général, le texte produit est formaté pour être lisible par un humain.</p>

<div class="note">
<p><strong>Note :</strong> <code>toGMTString()</code> est obsolète et ne doit plus être utilisé. Il existe encore uniquementpour des questions de compatibilité. La méthode {{jsxref("Date.prototype.toUTCString", "toUTCString()")}} doit être utilisée à la place.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.toGMTString()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant la date indiquée selon la convention internet pour GMT (<em>Greenwich Mean Time</em>).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toGMTString()">Utiliser <code>toGMTString()</code></h3>

<p>Dans cet exemple, la méthode <code>toGMTString()</code> convertit la date vers GMT (UTC) en utilisant la différence avec le fuseau horaire du système d'exploitation. Elle renvoie une chaîne de caractères similaire à celle de l'exemple. La forme exacte de cette chaîne de caractères dépend de la plateforme.</p>

<pre class="brush: js">var aujourdhui = new Date();
var str = aujourdhui.toGMTString();  // Obsolète ! Utilisez toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
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
   <td>Définition initiale et déjà déclarée comme dépréciée. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-B.2.6', 'Date.prototype.toGMTString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définie dans l'annexe informative sur la compatibilité.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définie dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définie dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.toGMTString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toUTCString()")}}</li>
</ul>
