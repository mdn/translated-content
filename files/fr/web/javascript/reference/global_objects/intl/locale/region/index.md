---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/region
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>Intl.Locale.prototype.region</code></strong> est fournie par un accesseur qui renvoie la région du monde (il s'agit généralement d'un pays) associée à la locale courante.</p>

<h2 id="Description">Description</h2>

<p>La région est un fragment majeur de l'identifiant de la locale car il situe la locale dans une zone donnée du monde. Connaître la région associée à la locale est crucial pour identifier les différences entre les locales. Ainsi, on parle anglais aux États-Unis et au Royaume-Uni mais il existe certaines différences d'orthographe entre ces pays. Connaître la région d'une locale peut permettre aux développeurs d'adapter leurs sites et applications selon la région depuis laquelle ils sont consultés.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Définir_la_région_avec_la_chaîne_de_caractères_décrivant_la_locale">Définir la région avec la chaîne de caractères décrivant la locale</h3>

<p>La région est la troisième composante d'une chaîne représentant un identifiant de langue Unicode. Cette chaîne de caractères est généralement passée au constructeur {{jsxref("Locale", "Locale")}}.</p>

<pre class="brush: js">let regionStr = new Intl.Locale("en-Latn-US");

console.log(regionStr.region);
// Affichera "US" dans la console</pre>

<h3 id="Définir_la_région_via_lobjet_de_configuration_du_constructeur">Définir la région via l'objet de configuration du constructeur</h3>

<p>Le constructeur {{jsxref("Locale", "Locale")}} prend comme second argument un objet de paramétrage dont chacune des propriétés permet de définir une extension ou une composante de la locale.</p>

<pre class="brush: js">let regionObj = new Intl.Locale("fr-Latn", {region: "FR"});

console.log(regionObj.region);
// Affichera "FR" dans la console</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.region">Proposition pour <code>Intl.Locale.prototype.region</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.region")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
 <li><a href="https://www.unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html">Tableau Unicode des régions</a></li>
</ul>
