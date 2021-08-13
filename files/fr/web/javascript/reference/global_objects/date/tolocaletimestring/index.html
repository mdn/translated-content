---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
  - Date
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleTimeString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleTimeString()</strong></code> renvoie une chaine de caractères correspondant à l'heure dans la date, exprimée selon une locale. Les arguments <code>locales</code> et <code>options</code> permettent aux applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.toLocaleTimeString([locales [, options]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Voir le tableau de <a href="#compat" title="#Compatibilit.C3.A9_des_navigateurs">compatibilité des navigateurs</a> afin de déterminer quels navigateurs respectent les arguments <code>locales</code> et <code>options</code> ainsi que l'exemple <a href="#check">Vérifier le support des arguments <code>locales</code> et <code>options</code></a> qui permet de détecter cette fonctionnalité.</p>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat','Param.C3.A8tres')}}</p>

<p>La valeur par défaut de chacun des composants de la date vaut {{jsxref("undefined")}}, si les propriétés <code>hour</code>, <code>minute</code>, <code>second</code> sont toutes <code>undefined</code>, on suppose alors que <code>hour</code>, <code>minute</code>, et <code>second</code> sont "numeric".</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente l'heure de la date indiquée selon des conventions de locales spécifiques.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toLocaleTimeString()">Utiliser <code>toLocaleTimeString()</code></h3>

<p>Voici un usage simple qui ne définit pas de locale : une chaine de caractères dans une locale et avec des options par défaut est renvoyée.</p>

<pre class="brush:js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
console.log(date.toLocaleTimeString());
// → "04:00:00" si exécuté dans une locale fr et le fuseau horaire CEST</pre>

<h3 id="Vérifier_le_support_des_arguments_locales_et_options">Vérifier le support des arguments <code>locales</code> et <code>options</code></h3>

<p>Les arguments <code>locales</code> et <code>options</code> ne sont pas encore supportés par tous les navigateurs. Afin de vérifier si l'implementation utilisée les supporte, vous pouvez utiliser le pré-requis suivant : les locales incorrectes sont rejetées avec une exception<code> RangeError</code> :</p>

<pre class="brush: js">function toLocaleTimeStringSupportsLocales() {
    try {
        new Date().toLocaleTimeString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
</pre>

<h3 id="Utiliser_locales">Utiliser <code>locales</code></h3>

<p>Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument <code>locales</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise une heure sur 12h avec AM/PM
console.log(date.toLocaleTimeString("en-US"));
// → "4:00:00 AM"

// l'anglais britanique utilise une heure sur 24h
console.log(date.toLocaleTimeString("en-GB"));
// → "04:00:00"

// le coréen  utilise une heure sur 12h avec AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// → "오전 4:00:00"

/ l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleTimeString("ar-EG"));
// → "٤:٠٠:٠٠ ص"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "4.00.00"
</pre>

<h3 id="Utiliser_options">Utiliser <code>options</code></h3>

<p>Les résultats fournis par <code>toLocaleTimeString()</code> peuvent être personnalisés grâce à l'argument <code>options</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// une application peut vouloir utiliser UTC et le montrer
var options = {timeZone: "UTC", timeZoneName: "short"};
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// parfois, même les USA ont besoin du format sur 24h
console.log(date.toLocaleTimeString("en-US", {hour12: false}));
// → "19:00:00"
</pre>

<h2 id="Performance">Performance</h2>

<p>Pour formater de nombreuses dates, il est préférable de créer un objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} et d'utiliser la fonction fournie par sa propriété {{jsxref("DateTimeFormat.prototype.format", "format")}}.</p>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.9.5.7', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-13.3.3', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition des arguments <code>locales</code> et <code>options</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-13.3.3', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleTimeString', 'Date.prototype.toLocaleTimeString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.toLocaleTimeString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
