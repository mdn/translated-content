---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - NumberFormat
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat/resolvedOptions
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Intl.NumberFormat.prototype.resolvedOptions()</strong></code> renvoie un nouvel objet dont les propriétés correspondent aux options de locales et de format calculées à l'initialisation de l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>numberFormat</var>.resolvedOptions()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet dont les propriétés correspondent aux options de locale et de format calculées lors de l'initialisation de l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}}.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode renvoie un objet composé des propriétés suivantes :</p>

<dl>
 <dt><code>locale</code></dt>
 <dd>La balise de langue BCP 47 qui est utilisée. Si des extensions Unicode avaient été rajoutées à la balise BCP 47 demandée, les paires de clés-valeurs qui ont été demandées et qui sont supportées sont inscrites dans <code>locale</code>.</dd>
 <dt><code>numberingSystem</code></dt>
 <dd>La valeur requise via l'extension Unicode <code>"nu"</code> ou celle qui est utilisée par défaut.</dd>
 <dt><code>style</code>, <code>useGrouping</code></dt>
 <dd>Les valeurs fournies pour ces propriétés via l'argument <code>options</code> ou bien les valeurs par défaut.</dd>
 <dt><code>currency</code>, <code>currencyDisplay</code></dt>
 <dd>Les valeurs fournies pour ces propriétés via l'argument <code>options</code> ou bien les valeurs par défaut. Ces valeurs sont présentes uniquement si <code>style</code> vaut <code>"currency"</code>.</dd>
</dl>

<p>Un seul des deux groupes suivants est inclus dans les propriétés :</p>

<dl>
 <dt><code>minimumIntegerDigits</code>,<code>minimumFractionDigits</code>, <code>maximumFractionDigits</code></dt>
 <dd>Les valeurs fournies pour ces propriétés via l'argument <code>options</code> ou bien les valeurs par défaut. Ces propriétés ne sont présentes que si <code>minimumSignificantDigits</code> ou <code>maximumSignificantDigits</code> n'ont pas été fournies à l'argument <code>options</code>.</dd>
 <dt><code>minimumSignificantDigits</code>,<code>maximumSignificantDigits</code></dt>
 <dd>Les valeurs fournies pour ces propriétés via l'argument <code>options</code> ou bien les valeurs par défaut. Ces propriétés sont présentes si au moins une d'entre elles a été fournie via l'argument <code>options</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_la_méthode_resolvedOptions">Utiliser la méthode <code>resolvedOptions()</code></h3>

<pre class="brush: js">var de = new Intl.NumberFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.numberingSystem;       // "latn"
usedOption.style;                  // "decimal"
usedOptions.minimumIntegerDigits;  // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping;           // true</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-11.3.3', 'Intl.NumberFormat.prototype.resolvedOptions')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-11.3.3', 'Intl.NumberFormat.prototype.resolvedOptions')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.prototype.resolvedOptions', 'Intl.NumberFormat.prototype.resolvedOptions')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.NumberFormat.resolvedOptions")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("NumberFormat", "Intl.NumberFormat")}}</li>
</ul>
