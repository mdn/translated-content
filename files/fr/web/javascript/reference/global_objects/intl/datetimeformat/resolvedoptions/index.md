---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/resolvedOptions
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Intl.DateTimeFormat.prototype.resolvedOptions()</strong></code> renvoie un nouvel objet dont les propriétés reflètent les options de format et de locale pour les heures et dates, calculées pendant l'initialisation de l'objet <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"><code>Intl.DateTimeFormat</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">resolvedOptions()</pre>

<h3 id="return_value">Valeur de retour</h3>

<p>Un nouvel objet dont les propriétés reflètent les options de format et de locale pour les heures et dates, calculées pendant l'initialisation de l'objet <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"><code>Intl.DateTimeFormat</code></a>.</p>

<h2 id="description">Description</h2>

<p>La valeur renvoyée par cette méthode contient les propriétés suivantes :</p>

<dl>
 <dt><code>locale</code></dt>
 <dd>La balise de langue BCP 47 qui est réellement utilisée. Si des extensions Unicode étaient fournies avec la balise d'origine et sont supportées pour la locale utilisée, les paires de clés-valeurs seront incluses dans <code>locale</code>.</dd>
 <dt><code>calendar</code></dt>
 <dd>Le calendrier utilisé (ex. <code>"gregory"</code> pour le calendrier grégorien).</dd>
 <dt><code>numberingSystem</code></dt>
 <dd>Les valeurs demandées pour les extensions Unicode <code>"ca"</code> et <code>"nu"</code> ou leurs valeurs par défaut.</dd>
 <dt><code>timeZone</code></dt>
 <dd>La valeur fournie par l'argument <code>options</code> pour cette propriété ou <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> (qui représente le fuseau horaire de l'environnement) si aucune valeur n'a été fournie. Les applications ne doivent pas s'appuyer sur ce dernier cas. En effet, de futures versions pourraient renvoyer une chaîne de caractères représentant le fuseau horaire de l'environnement et non pas <code>undefined</code>.</dd>
 <dt><code>hour12</code></dt>
 <dd>La valeur fournie pour cette propriété dans l'argument <code>options</code>.</dd>
 <dt><code>weekday</code>, <code>era</code>, <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>, <code>minute</code>, <code>second</code>, <code>timeZoneName</code></dt>
 <dd>Les valeurs qui correspondent entre les propriétés de l'argument <code>options</code> et les combinaisons disponibles dans l'environnement pour les formats de date et d'heure pour la locale. Certaines de ces propriétés peuvent ne pas être présentes, cela indique que les composants indiqués ne seront pas représentés.</dd>
</dl>

<h2 id="examples">Exemples</h2>

<h3 id="using_the_resolvedoptions_method">Utiliser la méthode resolvedOptions()</h3>
<pre class="brush: js">var germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
var usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale;          // "de"
usedOptions.calendar;        // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone;        // "UTC"
usedOptions.month;           // "numeric"</pre>

<h2 id="specifications">Spécifications</h2>

{{Specifications}}

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<div>{{Compat}}</div>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"><code>Intl.DateTimeFormat</code></a></li>
</ul>
