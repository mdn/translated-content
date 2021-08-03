---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/language
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>Intl.Locale.prototype.language</code></strong> est une propriété fournie via un accesseur qui renvoie la langue associée à la locale.</p>

<h2 id="Description">Description</h2>

<p>La langue est l'une des caractéristiques majeurs d'une locale. La spécification Unicode indique que l'identifiant de la langue d'une locale est composée de l'identifiant canonique de la langue et de l'identifiant de la réponse (on pourra ainsi distinguer l'anglais britannique de l'anglais américain). Toutefois, la propriété <code>language</code> de {{jsxref("Locale", "Locale")}} renvoie uniquement la composante relative à la langue.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Indiquer_la_langue_via_la_chaîne_décrivant_la_locale">Indiquer la langue via la chaîne décrivant la locale</h3>

<p>Afin de pouvoir représenter une locale Unicode correctement, une chaîne doit commencer par un identifiant de langue. Le principal argument du constructeur {{jsxref("Locale", "Locale")}} doit être un identifiant valide et doit donc contenir la composante liée à la langue.</p>

<pre class="brush: js">let langStr = new Intl.Locale("en-Latn-US");

console.log(langStr.language); // Affichera "en" dans la console</pre>

<h3 id="Surcharger_la_langue_via_lobjet_de_configuration">Surcharger la langue via l'objet de configuration</h3>

<p>Bien que la composante de la langue doive être indiquée dans le premier paramètre, le constructeur {{jsxref("Locale", "Locale")}} prend comme deuxième argument un objet de configuration qui permet de surcharger cette composante.</p>

<pre class="brush: js">let langObj = new Intl.Locale("en-Latn-US", {language: "es"});

console.log(langObj.language); // Affichera "es" dans la console</pre>

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
   <td><a href="https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.language">Proposition pour <code>Intl.Locale.prototype.language</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.language")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Locale", "Locale")}}</li>
 <li><a href="https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity">Spécification des extensions Unicode</a></li>
</ul>
