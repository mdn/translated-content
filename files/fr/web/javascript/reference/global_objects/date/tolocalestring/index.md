---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
tags:
  - Date
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleString()</strong></code> renvoie une chaine de caractères représentant la date selon une locale. Les arguments <code>locales</code> et <code>options</code> permettent aux applications de définir le langage à utiliser pour les conventions de format et permettent de personnaliser le comportement de la fonction. Les anciennes implémentations ignorent ces arguments, la locale utilisée et le format de la chaine dépendent uniquement de l'implémentation.</p>

<div>{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>dateObj.toLocaleString([locales [, options]])</var></pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Voir le tableau de <a href="#compat" title="#Compatibilit.C3.A9_des_navigateurs">compatibilité des navigateurs</a> afin de déterminer quels navigateurs respectent les arguments <code>locales</code> et <code>options</code> ainsi que l'exemple <a href="#check">Vérifier le support des arguments <code>locales</code> et <code>options</code></a> qui permet de détecter cette fonctionnalité.</p>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat','Paramètres')}}</p>

<p>La valeur par défaut de chacun des composants de la date-heure vaut {{jsxref("undefined")}}, mais si les propriétés <code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code> sont toutes {{jsxref("undefined")}},  alors  <code>weekday</code>, <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code> et <code>second</code> sont supposés être "numeric".</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant la date indiquée selon des conventions de locales spécifiques.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toLocaleString()">Utiliser <code>toLocaleString()</code></h3>

<p>Voici un usage simple qui ne définit pas de locale : une chaine de caractères dans une locale et avec des options par défaut est renvoyée.</p>

<pre class="brush:js">var date = new Date(Date.UTC(2014, 11, 21, 3, 0, 0));

// toLocaleString() sans argument, on utilise donc
// les valeurs par défaut (de l'implémentation)
// pour la locale, et le fuseau horaire
date.toLocaleString();
// → "21/12/2014 04:00:00" si exécuté dans une locale fr et le fuseau horaire CEST</pre>

<h3 id="Vérifier_le_support_des_arguments_locales_et_options">Vérifier le support des arguments <code>locales</code> et <code>options</code></h3>

<p>Les arguments <code>locales</code> et <code>options</code> ne sont pas encore supportés par tous les navigateurs. Afin de vérifier si l'implementation utilisée les supporte, vous pouvez utiliser le pré-requis suivant : les locales incorrectes sont rejetées avec une exception {{jsxref("RangeError")}} :</p>

<pre class="brush: js">function toLocaleStringSupportsLocales() {
    try {
        new Date().toLocaleString("i");
    } catch (e) {
        return e​ instanceof RangeError;
    }
    return false;
}
</pre>

<h3 id="Utiliser_locales">Utiliser <code>locales</code></h3>

<p>Cet exemple montre quelques variations dues aux formats de dates localisés. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument <code>locales</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

l'anglais américain utilise l'ordre mois-jour-année
console.log(date.toLocaleString("en-US"));
// → "12/20/2012, 4:00:00 AM"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 04:00:00"

// le coréen utilise l'ordre année-mois-jour
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오전 4:00:00"

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "24/12/20 4:00:00"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 04.00.00"
</pre>

<h3 id="Utiliser_options">Utiliser <code>options</code></h3>

<p>Les résultats fournis par <code>toLocaleString()</code> peuvent être personnalisés grâce à l'argument <code>options</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// obtenir le jour de la semaine avec une date longue
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// parfois, même les USA ont besoin d'avoir une heure sur 24h
console.log(date.toLocaleString("en-US", {hour12: false}));
// → "12/19/2012, 19:00:00"
</pre>

<h3 id="Comparaison_des_dates_formatées_et_des_valeurs_statiques">Comparaison des dates formatées et des valeurs statiques</h3>

<p>La plupart du temps, le format renvoyé par <code>toLocaleString()</code> est cohérent. Toutefois, cela peut évoluer à l'avenir et n'est pas garanti pour l'ensemble des langues (de telles variations sont souhaitables et permises par la spécification). Ainsi, IE et Edge ajoutent des caractères de contrôle bidirectionnels autour des dates afin que le texte produit ait une directionalité cohérente avec le texte avec lequel elles seront concaténées.</p>

<p>Aussi, mieux vaut ne pas comparer un résultat fourni par <code>format()</code> avec une valeur statique :</p>

<pre class="brush: js; example-bad">"1.1.2019, 01:00:00" === new Date("2019-01-01T00:00:00.000000Z").toLocaleString();
// true pour Firefox et les autres
// false pour IE et Edge
</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Voir aussi ce fil <a href="https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results">StackOverflow</a> pour plus de détails et d'exemples.</p>
</div>

<h2 id="Performance">Performance</h2>

<p>Quand vous formatez d'importants volumes de dates, il est préférable de créer un objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} et d'utiliser la fonction fournie via la propriété {{jsxref("DateTimeFormat.prototype.format", "format")}}.</p>

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
   <td>{{SpecName('ES5.1', '#sec-15.9.5.5', 'Date.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition des arguments <code>locales</code> et <code>options</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleString', 'Date.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Date.toLocaleString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
