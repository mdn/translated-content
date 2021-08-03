---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
tags:
  - Constructeur
  - Intl
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale
---
<div>{{JSRef}}{{SeeCompatTable}}</div>

<p>Le constructeur <strong><code>Intl.Locale</code></strong> est une propriété native de l'objet <code>Intl</code> représentant l'identifiant d'une locale Unicode.</p>

<p>{{EmbedInteractiveExample("pages/js/intl-locale.html")}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Intl.Locale([<var>tag</var>[, <var>options</var>]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>tag</code></dt>
 <dd>La chaîne de caractère représentant l'identifiant d'une locale Unicode.</dd>
 <dt><code>options</code></dt>
 <dd>Un objet contenant la configuration pour la locale. Les clés (noms des propriétés) de cet objets sont des balises Unicode et les valeurs de ces propriétés doivent être des valeurs de balises Unicode valides.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'objet <code>Intl.locale</code> a été conçu afin de manipuler des locales Unicode. Les locales Unicode sont représentées par une chaîne de caractères qu'on appelle « identifiant de locale ». L'identifant de locale se compose d'un identifiant de langue et d'extensions. Les identifiants de langue sont la composante principale d'une locale et contiennent une langue, un système d'écriture et des extensions régionales. Les informations complémentaires sont stockées via les extensions. Ces extensions peuvent fournir des informations quant au type de calendrier utilisé, le format d'heure utilisé ou la numération utilisée.</p>

<p>L'objet <code>Intl.Locale</code> possède les propriétés et méthodes suivantes.</p>

<h3 id="Propriétés">Propriétés</h3>

<dl>
 <dt>{{jsxref("Locale.prototype","Intl.Locale.prototype")}}</dt>
 <dd>Le prototype pour le constructeur <code>Locale</code>.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/proposal-intl-locale/#locale-objects">Proposition pour <code>Intl.Locale</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.Locale")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://github.com/zbraniecki/Intl.js/tree/intllocale">La prothèse d'émulation (<em>polyfill</em>) pour <code>Intl.Locale</code></a></li>
 <li><a href="https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers">La spécification Unicode pour les identifiants de locale</a></li>
</ul>
