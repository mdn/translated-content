---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
tags:
  - Espace de noms
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Intl</code></strong> est l'espace de noms pour l'API d'Internationalisation d'ECMAScript. Elle fournit des outils de comparaison de chaînes de caractères, de formatage des nombres, de dates et de l'heure selon les langues. <code>Intl</code> donne accès à plusieurs constructeurs et fonctionnalités communs aux constructeurs destinés à l'internationalion et à d'autres fonctions dépendantes des langues.</p>

<h2 id="Propriétés_constructrices">Propriétés constructrices</h2>

<dl>
 <dt>{{jsxref("Objets_globaux/Collator", "Intl.Collator")}}</dt>
 <dd>Le constructeur pour les ordonnanceurs (<em>collators</em> en anglais) et les objets qui permettent la comparaison de chaînes de caractères selon les règles spécifiques d'une langue.</dd>
 <dt>{{jsxref("Objets_globaux/DateTimeFormat", "Intl.DateTimeFormat")}}</dt>
 <dd>Le constructeur pour les objets qui permettent le formatage des dates et de l'heure selon les règles spécifiques d'une langue.</dd>
 <dt>{{jsxref("Global_Objects/Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}</dt>
 <dd>Le constructeur pour les objets qui permettent de fournir des traductions constantes de noms de langues, régions et systèmes d'écriture.</dd>
 <dt>{{jsxref("Objets_globaux/ListFormat", "Intl.ListFormat")}}</dt>
 <dd>Le constructeur pour les objets qui permettent le formatage des listes selon les règles spécifiques d'une langue.</dd>
 <dt>{{jsxref("Global_Objects/Intl/Locale/Locale", "Intl.Locale()")}}</dt>
 <dd>Le constructeur pour les objets qui représentent un identifiant de langue Unicode.</dd>
 <dt>{{jsxref("Objets_globaux/NumberFormat", "Intl.NumberFormat")}}</dt>
 <dd>Le constructeur pour les objets qui permettent le formatage des nombres selon les règles spécifiques d'une langue.</dd>
 <dt>{{jsxref("Objets_globaux/PluralRules","Intl.PluralRules")}}</dt>
 <dd>Le constructeur pour les objets qui permettent le formatage prenant en compte le pluriel et les règles de pluriel spécifiques d'une langue.</dd>
 <dt>{{jsxref("Objets_globaux/RelativeTimeFormat","Intl.RelativeTimeFormat")}}</dt>
 <dd>Le constructeur pour les objets qui permettent le formatage d'intervalles de temps spécifiques d'une langue.</dd>
</dl>

<h2 id="Méthodes_statiques">Méthodes statiques</h2>

<dl>
 <dt>{{jsxref("Intl.getCanonicalLocales()")}}</dt>
 <dd>Méthode renvoyant les noms canoniques des locales.</dd>
</dl>

<h2 id="Identification_et_choix_de_la_locale">Identification et choix de la locale</h2>

<p>Les constructeurs d'internationalisation, ainsi que plusieurs autres méthodes spécifiques à une langue dans d'autres constructeurs (voir ci-dessous {{anch("See_also", "Voir aussi")}}), utilisent un schéma commun pour identifier les locales et déterminer celle qu'ils utiliseront effectivement : ils acceptent tous les arguments <code>locales</code> et <code>options</code>, et ils négocient les locales demandées face aux locales qu'ils supportent, en utilisant un algorithme spécifié dans la propriété <code>options.localeMatcher</code>.</p>

<h3 id="Argument_locales">Argument <code>locales</code></h3>

<p>L'argument <code>locales</code> peut être soit une chaîne de caractères comportant une <a href="http://tools.ietf.org/html/rfc5646">balise de langue BCP 47</a>, soit un tableau de telles balises. Si l'argument n'est pas fourni ou est indéfini, la locale par défaut de l'environnement d'exécution est utilisée.</p>

<p>Une balise de langue BCP 47 définit un langage et contient au minimum un code de langue principale. Dans sa forme la plus fréquente, elle peut contenir, dans l'ordre : un code de langue, un code de script et un code de pays ou de région, tous séparés par des tirets. Bien que la balise ne soit sensible à la casse, il est recommandé d'utiliser des initiales majuscules pour le code de script, des majuscules pour les codes de pays et de région, et des minuscules pour tout le reste.</p>

<p>Exemples :</p>

<ul>
 <li><code>"hi"</code> : Hindi (langue principale).</li>
 <li><code>"de-AT"</code> : Allemand tel qu'utilisé en Autriche (langue principale avec un code pays).</li>
 <li><code>"zh-Hans-CN"</code> : Le chinois écrit en caractères simplifiés tel qu'utilisé en Chine (langue principale avec des codes de script et de pays).</li>
</ul>

<p>Les sous balises identifiant les langues, les scripts, les pays (régions) et les variantes (rarement utilisées) dans les balises de langue BCP 47 peuvent être trouvées dans le <a href="http://www.iana.org/assignments/language-subtag-registry">registre IANA des Sous balises de Langues</a></p>

<p>La BCP 47 permet également des extensions. Les fonctions d'internalisation de JavaScript utilisent l'extension "u" (Unicode), qui peut utilisée pour demander une personnalisation supplémentaire des objets {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, ou {{jsxref("DateTimeFormat")}}. Exemples :</p>

<ul>
 <li><code>"de-DE-u-co-phonebk"</code> : utiliser la variante annuaire de l'ordre de tri allemand, qui décompose les voyelles infléchies (à umlaut) en paires de caractères : ä → ae, ö → oe, ü → ue.</li>
 <li><code>"th-TH-u-nu-thai"</code> : utiliser les chiffres thaïs (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) dans le formatage des nombres.</li>
 <li><code>"ja-JP-u-ca-japanese"</code> : utiliser le calendrier japonais dans le formatage des dates et des heures, de sorte que 2013 soit exprimé comme l'an 25 de l'ère Heisei, ou 平成25.</li>
 <li><code>"en-GB-u-ca-islamic"</code> : utiliser l'anglais britannique avec le calendrier islamique (Hijri), où la date grégorienne 14 octobre 2017 est la date de l'ère de l'Hégire 24 Muharram,1439.</li>
</ul>

<h3 id="Négociation_de_la_locale">Négociation de la locale</h3>

<p>L'argument <code>locales</code>, après retrait de toutes les extensions Unicode, est interprété comme une requête classée par priorité émanant de l'application. L'environnement d'exécution le compare aux locales dont il dispose et choisit la meilleure disponible. Il existe deux algorithmes d'association : l'apparieur "lookup" suit l'algorithme Lookup spécifié dans <a href="http://tools.ietf.org/html/rfc4647#section-3.4">BCP 47</a>; l'apparieur "meilleure correspondance" laisse l'environnement d'exécution fournir une locale qui est au moins aussi, mais possiblement mieux, adaptée à la demande que le résultat de l'algorithme Lookup. Si l'application ne fournit pas d'argument <code>locales</code> ou que l'environnement d'exécution ne dispose pas d'une locale qui corresponde à la requête, alors la locale par défaut de l'environnement d'exécution est utilisée. L'apparieur peut être choisi en utilisant une propriété de l'argument <code>options</code> (voir ci-dessous).</p>

<p>Si la balise de la langue choisie comporte une sous chaîne d'extension Unicode, cette extension est maintenant utilisée pour personnaliser l'objet construit ou le comportement de la fonction. Chaque constructeur ou fonction ne supporte qu'un sous-ensemble des clés définies pour le extension Unicode, et les valeurs supportées dépendent souvent de la balise de langue. Par exemple, la clé "co" (collation) n'est supportée que par le constructeur {{jsxref("Collator")}}, et sa valeur "phonebk" n'est supportée que pour l'allemand.</p>

<h3 id="Argument_options">Argument <code>options</code></h3>

<p>L'argument <code>options</code> doit être un objet ayant des propriétés qui varient suivant qu'il s'agit des constructeurs ou des fonctions. Si l'argument <code>options</code> n'est pas fourni ou est indéfini, des valeurs par défaut seront utilisées pour toutes les propriétés.</p>

<p>Une propriété est supportée par tous les constructeurs et toutes les fonctions fondés sur les locales : la propriété <code>localeMatcher</code>, dont la valeur doit être la chaîne <code>"lookup"</code> ou <code>"best fit"</code>, et qui sélectionne l'un des algorithmes d'appariement décrits ci-dessus.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Formater_des_dates_et_nombres">Formater des dates et nombres</h3>

<p>Vous pouvez utiliser Intl pour formater des dates et nombres dans un format qui est conventionnel pour une langue et une région spécifiques :</p>

<pre class="brush: js notranslate">const compte = 26254.39;
const date = new Date("2012-05-24");

function afficher (langue) {
  console.log(
    `${new Intl.DateTimeFormat(langue).format(date)} ${new Intl.NumberFormat(langue).format(compte)}`
  );
}

afficher("en-US");
// résultat attendu : 5/24/2012 26,254.39

afficher("de-DE");
// résultat attendu : 24.5.2012 26.254,39</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-8', 'Intl')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-8', 'Intl')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#intl-object', 'Intl')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td>Ajout de <code>Intl.getCanonicalLocales</code> dans la 4e édition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Introduction : <a href="http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html">'The ECMAScript Internationalisation API</a></li>
 <li>Constructeurs
  <ul>
   <li>{{jsxref("Collator", "Intl.Collator")}}</li>
   <li>{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}</li>
   <li>{{jsxref("ListFormat", "Intl.ListFormat")}}</li>
   <li>{{jsxref("NumberFormat", "Intl.NumberFormat")}}</li>
   <li>{{jsxref("PluralRules", "Intl.PluralRules")}}</li>
   <li>{{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}</li>
   <li>{{jsxref("Locale", "Intl.Locale")}}</li>
  </ul>
 </li>
 <li>Méthodes
  <ul>
   <li>{{jsxref("String.prototype.localeCompare()")}}</li>
   <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
   <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
   <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
   <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
  </ul>
 </li>
</ul>
