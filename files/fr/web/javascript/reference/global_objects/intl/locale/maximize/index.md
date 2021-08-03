---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/maximize
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Intl.Locale.prototype.maximize()</code></strong> permet d'obtenir les valeurs les plus vraisemblantes pour la langue, le script et la région de la locale en fonction des valeurs existantes.</p>

<p>{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><code><em>locale</em>.maximize()</code></pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une instance {{jsxref("Locale", "Locale")}} dont la propriété <code>baseName</code> renvoie le résultat de l'algorithme de <a href="https://www.unicode.org/reports/tr35/#Likely_Subtags">vraisemblance des composantes</a> lancé sur <code><em>{{jsxref("Locale/baseName", "locale.baseName")}}</em></code>.</p>

<h2 id="Description">Description</h2>

<p>Il est parfois utile d'identifier les composantes les plus probables d'une locale en fonction d'un identifiant incomplet. Cette méthode utilise un algorithme qui permet de déduire les composantes restantes les plus probables. Par exemple, si on fournit la langue <code>"en"</code>, l'algorithme renverra <code>"en-Latn-US"</code>, car l'anglais ne s'écrit qu'avec l'alphabet latin et est le plus largement parlé aux États-Unis. La méthode <code>maximize()</code> n'opère que sur les composantes principales (langue, script, région) et pas sur les extensions éventuellement indiquées après <code>"-u"</code> (dont <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale/hourCycle" title="The Intl.Locale.prototype.hourCycle property is an accessor property that returns the time keeping format convention used by the locale."><code>Locale.hourCycle</code></a>, <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale/calendar" title="The Intl.Locale.prototype.calendar property is an accessor property which returns the type of calendar used in the Locale."><code>Locale.calendar</code></a> et <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale/numeric" title="The Intl.Locale.prototype.numeric property is an accessor property that returns whether the locale has special collation handling for numeric characters."><code>Locale.numeric</code></a> entre autres).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">let maLocale = new Intl.Locale("fr", {hourCycle: "h24", calendar: "gregory"});
console.log(maLocale.baseName); // Affiche "fr"
console.log(maLocale.toString()); // Affiche "fr-u-ca-gregory-hc-h24"
let maLocMaximized = maLocale.maximize();

// Affiche "fr-Latn-FR". Les composantes "Latn" et "FR" ont été ajoutées
// car le français ne s'écrit qu'avec l'alphabet latin et est plus probablement parlé en France.
console.log(maLocMaximized.baseName);

// Affiche "fr-Latn-FR-u-ca-gregory-hc-h24".
// On notera que les extensions (après "-u") restent inchangées.
console.log(myLocMaximized.toString()); </pre>

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
   <td><a href="https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.maximize">Proposition pour <code>Intl.Locale.prototype.maximize()</code></a></td>
   <td></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.Locale.maximize")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
 <li>{{jsxref("Locale/baseName", "Locale.baseName")}}</li>
 <li><a href="https://www.unicode.org/reports/tr35/#Likely_Subtags">Spécification Unicode sur la vraisemblance entre composantes</a></li>
</ul>
