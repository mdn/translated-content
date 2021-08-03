---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Date
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleDateString()</strong></code> renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui correspond à la date : jour, mois, année) exprimée selon une locale. Les arguments <code>locales</code> et <code>options</code> permettent aux applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj</var>.toLocaleDateString([locales [, options]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Voir le tableau de <a href="#compat">compatibilité des navigateurs</a> afin de déterminer quels navigateurs respectent les arguments <code>locales</code> et <code>options</code> ainsi que l'exemple <a href="#check">Vérifier le support des arguments locales et options</a> qui permet de détecter cette fonctionnalité.</p>

<p>{{page('fr/docs/JavaScript/Reference/Objets_globaux/DateTimeFormat','Paramètres')}}</p>

<p>La valeur par défaut de chacun des composants de la date vaut {{jsxref("undefined")}}, si les propriétés <code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code> sont toutes <code>undefined</code>, on suppose alors que <code>year</code>, <code>month</code>, et <code>day</code> sont « numériques ».</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente le jour de la date indiquée selon des options de locales.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toLocaleDateString()">Utiliser <code>toLocaleDateString()</code></h3>

<p>Voici un usage simple qui ne définit pas de locale : une chaine de caractères dans une locale et avec des options par défaut est renvoyée.</p>

<pre class="brush:js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
date.toLocaleDateString();
// → "12/12/2012" si exécuté dans une locale fr et le fuseau horaire CEST</pre>

<h3 id="Vérifier_le_support_des_arguments_locales_et_options">Vérifier le support des arguments <code>locales</code> et <code>options</code></h3>

<p>Les arguments <code>locales</code> et <code>options</code> ne sont pas encore supportés par tous les navigateurs. Afin de vérifier si l'implementation utilisée les supporte, vous pouvez utiliser le pré-requis suivant : les locales incorrectes sont rejetées avec une exception<code> RangeError</code> :</p>

<pre class="brush: js">function toLocaleDateStringSupportsLocales() {
    try {
        new Date().toLocaleDateString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
</pre>

<h3 id="Utiliser_l'argument_locales">Utiliser l'argument <code>locales</code></h3>

<p>Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument <code>locales</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
alert(date.toLocaleDateString("en-US"));
// → "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
alert(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
alert(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
alert(date.toLocaleDateString("ar-EG"));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢</span>"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
alert(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
alert(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
</pre>

<h3 id="Utiliser_l'argument_options">Utiliser l'argument <code>options</code></h3>

<p>Les résultats fournis par <code>toLocaleDateString()</code> peuvent être personnalisés grâce à l'argument <code>options</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longe
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
alert(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser
// UTC et l'afficher
options.timeZone = "UTC";
options.timeZoneName = "short";
alert(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, GMT"
</pre>

<h2 id="Performance">Performance</h2>

<p>Lorsque des grands nombres ou de grandes dates sont formatés, il est préférable de créer un objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} et d'utiliser la fonction fournie par sa propriété {{jsxref("DateTimeFormat.prototype.format", "format")}}.</p>

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
   <td>{{SpecName('ES5.1', 'sec-15.9.5.6', 'Date.prototype.toLocaleDateString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.tolocaledatestring', 'Date.prototype.toLocaleDateString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tolocaledatestring', 'Date.prototype.toLocaleDateString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-13.3.2', 'Date.prototype.toLocaleDateString')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition des arguments <code>locales</code> et <code>options</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-13.3.2', 'Date.prototype.toLocaleDateString')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleDateString', 'Date.prototype.toLocaleDateString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.toLocaleDateString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
