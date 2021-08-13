---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Intl.DateTimeFormat</code></strong> est un constructeur d'objets permettant de formatter des dates et des heures selon une langue.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Intl.DateTimeFormat([<var>locales</var>[, <var>options</var>]])
Intl.DateTimeFormat.call(<var>this</var>[, <var>locales</var>[, <var>options</var>]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locales</code>{{optional_inline}}</dt>
 <dd>
 <p>Ce paramètre optionnel est une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour utiliser la locale par défaut du navigateur, on pourra omettre cet argument (ou passer la valeur <code>undefined</code>). Pour le format général et l'interprétation de l'argument <code>locales</code>, voir la page {{jsxref("Objets_globaux/Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}. Les clefs d'extensions Unicode suivantes sont autorisées :</p>

 <dl>
  <dt>nu</dt>
  <dd>Système de numérotation. Les valeurs possibles incluent : <code>"arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt"</code>.</dd>
  <dt>ca</dt>
  <dd>Calendrier. Les valeurs possibles incluent : <code>"buddhist", "chinese", "coptic", "ethiopia", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamicc", "iso8601", "japanese", "persian", "roc"</code>.</dd>
  <dt><code>hc</code></dt>
  <dd>Le type de cycle horaire à utiliser. Les valeurs possibles sont <code>"h11"</code>, <code>"h12"</code>, <code>"h23"</code>, <code>"h24"</code>.</dd>
 </dl>
 </dd>
 <dt><code>options</code></dt>
 <dd>
 <p>Un objet avec certaines ou toutes les propriétés suivantes :</p>

 <dl>
  <dt><code>localeMatcher</code></dt>
  <dd>L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont <code>"lookup"</code> et <code>"best fit"</code> ; le défaut est <code>"best fit"</code>. Pour des informations sur cette option, voir la page {{jsxref("Objets_globaux/Intl","Intl","##Choix_de_la_locale")}}</dd>
  <dt><code>timeZone</code></dt>
  <dd>Le fuseau horaire à utiliser. La seule valeur que doivent reconnaitre les implémentations est "UTC" ; la valeur par défaut est le fuseau horaire du moteur JavaScript. Les implémentations peuvent aussi reconnaitre les noms de fuseau horaire de la <a href="https://www.iana.org/time-zones">base de données IANA de fuseaux horaires</a>, tel que <code>"Asia/Shanghai"</code>, <code>"Asia/Kolkata"</code>, <code>"America/New_York"</code>.</dd>
  <dt><code>hour12</code></dt>
  <dd>S'il faut utiliser le format horaire sur 12 heures (au lieu de celui-ci sur 24 heures). Les valeurs possibles sont <code>true</code> et <code>false</code> ; la valeur par défaut dépend de la locale. Cette option surcharge l'étiquette <code>hc</code> et/ou l'option <code>hourCycle</code>.</dd>
  <dt><code>hourCycle</code></dt>
  <dd>Le cycle horaire à utiliser. Les valeurs possibles sont <code>"h11"</code>, <code>"h12"</code>, <code>"h23"</code>, <code>"h24"</code>. Cette option surcharge l'étiquette <code>hc</code> mais sera remplacée par <code>hour12</code> si cette dernière est présente.</dd>
  <dt><code>formatMatcher</code></dt>
  <dd>L'algorithme de correspondance à utiliser pour le formattage. Les valeurs possibles sont <code>"basic"</code> et <code>"best fit"</code> ; par défaut <code>"best fit"</code>. Voir les paragraphes suivants pour des informations concernant l'usage de cette propriété.</dd>
 </dl>

 <p>Les propriétés suivantes décrivent les composants date-heure à utiliser pour le formattage de la sortie.  Les implémentations ont pour obligation de supporter au minimum les ensembles suivants :</p>

 <ul>
  <li><code>weekday, year, month, day, hour, minute, second</code></li>
  <li><code>weekday, year, month, day</code></li>
  <li><code>year, month, day</code></li>
  <li><code>year, month</code></li>
  <li><code>month, day</code></li>
  <li><code>hour, minute, second</code></li>
  <li><code>hour, minute</code></li>
 </ul>

 <p>Les implémentations peuvent supporter d'autres sous-ensembles, et les demandes seront évaluées face à toutes les combinaisons de sous-ensembles disponibles pour trouver la meilleure correspondance. Deux algorithmes sont disponibles pour cette évaluation et choisis par la propriété <code>formatMatcher</code> : un <a href="https://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher">algorithme "basic" complètement spécifié</a> et un algorithme <code>"best fit"</code> dépendant de l'implémentation.</p>

 <dl>
  <dt><code>weekday</code></dt>
  <dd>La représentation du jour de la semaine. Les valeurs possibles sont :
  <ul>
   <li><code>"long"</code> (par exemple <code>Thursday</code>)</li>
   <li><code>"short"</code> (par exemple <code>Thu</code>)</li>
   <li><code>"narrow"</code> (par exemple <code>T</code>). Deux jours de la semaines pourront partager la même représentation dans certaines locales (par exemple, en anglais <code>Tuesday</code> sera également représenté avec <code>T</code> en notation étroite).</li>
  </ul>
  </dd>
  <dt><code>era</code></dt>
  <dd>La représentation de l'ère. Les valeurs possibles sont :
  <ul>
   <li><code>"long"</code> (par exemple <code>Anno Domini</code>)</li>
   <li><code>"short"</code> (par exemple <code>AD</code>)</li>
   <li><code>"narrow"</code> (par exemple <code>A</code>)</li>
  </ul>
  </dd>
  <dt><code>year</code></dt>
  <dd>La représentation de l'année. Les valeurs possibles sont :
  <ul>
   <li><code>"numeric"</code> (par exemple <code>2012</code>)</li>
   <li><code>"2-digit"</code> (par exemple <code>12</code>)</li>
  </ul>
  </dd>
  <dt><code>month</code></dt>
  <dd>La représentation du mois. Les valeurs possibles sont :
  <ul>
   <li><code>"numeric"</code> (par exemple <code>2</code>)</li>
   <li><code>"2-digit"</code> (par exemple <code>02</code>)</li>
   <li><code>"long"</code> (par exemple <code>March</code>)</li>
   <li><code>"short"</code> (par exemple <code>Mar</code>)</li>
   <li><code>"narrow"</code> (par exemple <code>M</code>). Dans certaines locales, deux mois pourront partager la même représentation avec le style étroit (par exemple, <code>May</code> en anglais, sera également représenté avec <code>M</code>).</li>
  </ul>
  </dd>
  <dt><code>day</code></dt>
  <dd>La représentation du jour. Les valeurs possibles sont :
  <ul>
   <li><code>"numeric"</code> (par exemple <code>1</code>)</li>
   <li><code>"2-digit"</code> (par exemple <code>01</code>)</li>
  </ul>
  </dd>
  <dt><code>hour</code></dt>
  <dd>La représentation de l'heure. Les valeurs possibles sont :
  <ul>
   <li><code>"numeric"</code> (par exemple <code>1</code>)</li>
   <li><code>"2-digit"</code> (par exemple <code>01</code>)</li>
  </ul>
  </dd>
  <dt><code>minute</code></dt>
  <dd>La représentation des minutes. Les valeurs possibles sont :
  <ul>
   <li><code>"numeric"</code> (par exemple <code>1</code>)</li>
   <li><code>"2-digit"</code> (par exemple <code>01</code>)</li>
  </ul>
  </dd>
  <dt><code>second</code></dt>
  <dd>La représentation des secondes. Les valeurs possibles sont :
  <ul>
   <li><code>"numeric"</code> (par exemple <code>1</code>)</li>
   <li><code>"2-digit"</code> (par exemple <code>01</code>)</li>
  </ul>
  </dd>
  <dt><code>timeZoneName</code></dt>
  <dd>La représentation du fuseau horaire. Les valeurs possibles sont :
  <ul>
   <li><code>"long"</code> (par exemple <code>British Summer Time</code>)</li>
   <li><code>"short"</code> (par exemple <code>GMT+1</code>)</li>
  </ul>
  </dd>
 </dl>

 <p>La valeur par défaut pour chaque composante est {{jsxref("undefined")}}, mais si toutes les composantes valent <code>undefined</code>, alors <code>year</code>, <code>month</code>, et <code>day</code> seront considérés comme <code>"numeric"</code>.</p>
 </dd>
</dl>

<h2 id="Description">Description</h2>

<h3 id="Propriétés">Propriétés</h3>

<dl>
 <dt>{{jsxref("DateTimeFormat.prototype", "Intl.DateTimeFormat.prototype")}}</dt>
 <dd>Permet l'ajout de propriétés à tous les objets.</dd>
</dl>

<h3 id="Méthodes">Méthodes</h3>

<dl>
 <dt>{{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}</dt>
 <dd>Renvoie un tableau contenant les locales supportées parmis les locales fournies, sans qu'il soit nécessaire de recourir à la locale par défaut de l'implémentation.</dd>
</dl>

<h2 id="Instances_de_DateTimeFormat">Instances de<code> DateTimeFormat</code></h2>

<h3 id="Propriétés_2">Propriétés</h3>

<p>Les instances de<code> DateTimeFormat()</code> héritent des propriétés suivantes depuis leur prototype :</p>

<div>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat/prototype','Properties')}}</div>

<h3 id="Méthodes_2">Méthodes</h3>

<div>
<p>Les instances de<code> DateTimeFormat()</code> héritent des propriétés suivantes depuis leur prototype :</p>
{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat/prototype','Méthodes')}}</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_DateTimeFormat">Utiliser <code>DateTimeFormat()</code></h3>

<p>Dans une utilisation basique sans préciser de locale, <code>DateTimeFormat()</code> utilise la locale et les options par défaut</p>

<pre class="brush:js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// DateTimeFormat sans arguments dépend de l'implémentation,
// la locale par défaut, et le fuseau horaire par défaut
console.log(new Intl.DateTimeFormat().format(date));
// → "20/12/2012" avec une locale fr-Fr et un fuseau horaire CEST</pre>

<h3 id="Utiliser_locales">Utiliser <code>locales</code></h3>

<p>Cet exemple montre quelques variations de formattage pour les dates et les heures localisées. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument <code>locales</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(new Intl.DateTimeFormat("en-US").format(date));
// → "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// → "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// → "2012. 12. 20."

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢</span>"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// → "24/12/20"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// → "20/12/2012"
</pre>

<h3 id="Utiliser_options">Utiliser <code>options</code></h3>

<p>Les formats de la date et de l'heure peuvent être personnalisés en utilisant l'argument <code>options</code> :</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longue
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → "Thursday, December 20, 2012, GMT"

// parfois, vous voulez être précis
options = {hour: "numeric", minute: "numeric", second: "numeric",
           timeZoneName: "short"};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00 pm AEDT"

// parfois, même les USA ont besoin d'afficher une heure sur 24h
options = {year: "numeric", month: "numeric", day: "numeric",
           hour: "numeric", minute: "numeric", second: "numeric",
           hour12: false};
console.log(new Intl.DateTimeFormat("en-US", options));
// → "12/19/2012, 19:00:00"

// pour utiliser la locale par défaut du navigateur :
console.log(new Intl.DateTimeFormat('default', options).format(date));
// → "12/19/2012, 19:00:00" (peut varier selon la locale du navigateur)
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
   <td>{{SpecName('ES Int 1.0', '#sec-12.1', 'Intl.DateTimeFormat')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Première définition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-12.1', 'Intl.DateTimeFormat')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#datetimeformat-objects', 'Intl.DateTimeFormat')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.DateTimeFormat")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl', 'Voir_aussi')}}</div>
