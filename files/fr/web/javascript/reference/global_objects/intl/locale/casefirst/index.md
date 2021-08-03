---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/caseFirst
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>Intl.Locale.prototype.caseFirst</code></strong> est une propriété (via un accesseur) qui renvoie si la casse est prise en compte par la locale pour ses règles de collation (celles qui permettent d'ordonner des chaînes de caractères entre elles).</p>

<h2 id="Description">Description</h2>

<p>Les règles de collation des locales sont utilisées afin de déterminer la façon dont les chaînes sont ordonnées pour cette locale. Certaines locales utilisent la casse (minuscule ou majuscule) dans ce processus de collation. Cette règle peut être exprimée via la propriété <code>caseFirst</code> d'une instance <code>Locale</code>.</p>

<p>Cette propriété peut avoir une des 3 valeurs suivantes :</p>

<table class="standard-table">
 <caption>Valeurs pour <code>caseFirst</code></caption>
 <thead>
  <tr>
   <th scope="col">Valeur</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>upper</code></td>
   <td>Les majuscules devraient être triées avant les minuscules.</td>
  </tr>
  <tr>
   <td><code>lower</code></td>
   <td>Les minuscules devraient être triées avant les majuscules.</td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td>La casse n'a pas d'importance pour le tri des chaînes.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="Définir_caseFirst_grâce_à_la_chaîne_de_description_de_la_locale">Définir <code>caseFirst</code> grâce à la chaîne de description de la locale</h3>

<p>Le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale" title="The Intl.Locale constructor is a standard built-in property of the Intl object."><code>Intl.Locale</code></a> prend comme premier argument une chaîne de caractères qui décrit la locale. On peut allonger cette chaîne avec certaines valeurs afin de l'affiner.</p>

<p>Dans la <a href="https://www.unicode.org/reports/tr35/">spécification Unicode sur les clés des extensions</a>, <code>caseFirst</code> correspond à la clé<code> kf</code>. <code>kf</code>. Il est possible d'ajouter des extensions à la chaîne identifiant la locale en la concaténant à <code>-u</code> puis en concaténant la clé de l'extension qu'on souhaite préciser (ici <code>-kf</code>) puis en ajoutant enfin la valeur pour cette extension (ici <code>upper</code>) :</p>

<pre class="brush: js">let caseFirstStr = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(caseFirstStr.caseFirst); // Prints "upper"</pre>

<h3 id="Définir_caseFirst_via_lobjet_de_configuration">Définir <code>caseFirst</code> via l'objet de configuration</h3>

<p>Le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale" title="The Intl.Locale constructor is a standard built-in property of the Intl object."><code>Intl.Locale</code></a> permet d'utiliser un objet de configuration comme deuxième argument. Les propriétés de cet objet seront autant d'extensions Unicode à utiliser pour la locale. Ici, on peut utiliser un objet avec la propriété <code>caseFirst</code> pour indiquer l'impact de la casse sur la collation de cette locale :</p>

<pre class="brush: js">let caseFirstObj= new Intl.Locale("en-Latn-US", {caseFirst: "lower"});
console.log(us12hour.caseFirst); // affichera "lower" dans la console.</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.caseFirst">Proposition pour <code>Intl.Locale</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.caseFirst")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
 <li><a href="https://github.com/unicode-org/cldr/blob/master/common/bcp47/collation.xml#L49">Spécification Unicode pour la collation selon la casse</a></li>
</ul>
