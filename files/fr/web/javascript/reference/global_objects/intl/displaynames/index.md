---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
tags:
  - Class
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Intl.DisplayNames</code></strong> est un constructeur d'objets qui permettent de fournir des traductions des noms de langues, régions et systèmes d'écriture.</p>

<div>{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}</div>



<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames"><code>Intl.DisplayNames()</code></a></dt>
 <dd>Crée un nouvel objet <code>Intl.DisplayNames</code>.</dd>
</dl>

<h2 id="Méthodes_statiques">Méthodes statiques</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf"><code>Intl.DisplayNames.supportedLocalesOf()</code></a></dt>
 <dd>Retourne un tableau contenant les langues fournies qui sont supportées sans avoir à se rabattre sur la langue locale par défaut au moment de l'exécution.</dd>
</dl>

<h2 id="Méthodes_des_instances">Méthodes des instances</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of"><code>Intl.DisplayNames.prototype.of()</code></a></dt>
 <dd>Cette méthodes reçoit un <code>code</code> et retourne une chaine à partir sur la langue et les options fournies lors de l'instanciation de <a href="#"><code>Intl.DisplayNames</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions"><code>Intl.DisplayNames.prototype.resolvedOptions()</code></a></dt>
 <dd>Retourne un nouvel objet dont les propriété feflètent la langue et les options de formattage calculées lors de l'initialisation de l'objet.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Affichage_des_noms_de_régions">Affichage des noms de régions</h3>

<p>Pour créer un objet <code>Intl.DisplayNames</code> pour une langue et obtenir le nom correspondant à un code de région dans cette langue.</p>

<pre class="brush: js notranslate">// Obtenir le nom d'une région en anglais
let nomsRégions = new Intl.DisplayNames(['en'], {type: 'region'});
nomsRégions.of('419'); // "Latin America"
nomsRégions.of('BZ');  // "Belize"
nomsRégions.of('US');  // "United States"
nomsRégions.of('BA');  // "Bosnia &amp; Herzegovina"
nomsRégions.of('MM');  // "Myanmar (Burma)"

// Obtenir le nom d'une région en chinois traditionnel
nomsRégions = new Intl.DisplayNames(['zh-Hant'], {type: 'region'});
nomsRégions.of('419'; // "拉丁美洲"
nomsRégions.of('BZ'); // "貝里斯"
nomsRégions.of('US'); // "美國"
nomsRégions.of('BA'); // "波士尼亞與赫塞哥維納"
nomsRégions.of('MM'); // "緬甸"</pre>

<h3 id="Affichage_des_noms_de_langues">Affichage des noms de langues</h3>

<p>Pour créer un objet <code>Intl.DisplayNames</code> pour une langue et obtenir le nom correspondant à un code de langue (possiblement suivi d'un code de système d'écriture ou de région) dans cette langue.</p>

<pre class="brush: js notranslate">// Obtenir le nom d'une langue en anglais
let nomsLangues= new Intl.DisplayNames(['en'], {type: 'language'});
nomsLangues.of('fr');      // "French"
nomsLangues.of('de');      // "German"
nomsLangues.of('fr-CA');   // "Canadian French"
nomsLangues.of('zh-Hant'); // "Traditional Chinese"
nomsLangues.of('en-US');   // "American English"
nomsLangues.of('zh-TW');   // "Chinese (Taiwan)"

// Obtenir le nom d'une langue en chinois traditionnel
nomsLangues = new Intl.DisplayNames(['zh-Hant'], {type: 'language'});
nomsLangues.of('fr'); // "法文"
nomsLangues.of('zh'); // "中文"
nomsLangues.of('de'); // "德文"</pre>

<h3 id="Affichage_des_noms_de_systèmes_décriture">Affichage des noms de systèmes d'écriture</h3>

<p>To create an <code>Intl.DisplayNames</code> for a locale and get the display name for a script code.</p>

<p>Pour créer un objet <code>Intl.DisplayNames</code> pour une langue et obtenir le nom correspondant à un code de système d'écriture dans cette langue.</p>

<pre class="brush: js notranslate">// Obtenir le nom d'un système d'écriture en anglais
let nomsSystèmes = new Intl.DisplayNames(['en'], {type: 'script'});
nomsSystèmes.of('Latn'); // "Latin"
nomsSystèmes.of('Arab'); // "Arabic"
nomsSystèmes.of('Kana'); // "Katakana"

// Obtenir le nom d'un système d'écriture en chinois traditionnel
nomsSystèmes = new Intl.DisplayNames(['zh-Hant'], {type: 'script'});
nomsSystèmes.of('Latn'); // "拉丁文"
nomsSystèmes.of('Arab'); // "阿拉伯文"
nomsSystèmes.of('Kana'); // "片假名"</pre>

<h3 id="Affichage_des_noms_de_devises">Affichage des noms de devises</h3>

<p>Pour créer un objet <code>Intl.DisplayNames</code> pour une langue et obtenir le nom correspondant au code d'une devise.</p>

<pre class="brush: js notranslate">// Obtenir le nom d'une devise in English
let nomsDevises = new Intl.DisplayNames(['en'], {type: 'currency'});
nomsDevises.of('USD'); // "US Dollar"
nomsDevises.of('EUR'); // "Euro"
nomsDevises.of('TWD'); // "New Taiwan Dollar"
nomsDevises.of('CNY'); // "Chinese Yuan"

// Obtenir le nom d'une devise in Traditional Chinese
nomsDevises = new Intl.DisplayNames(['zh-Hant'], {type: 'currency'});
nomsDevises.of('USD'); // "美元"
nomsDevises.of('EUR'); // "歐元"
nomsDevises.of('TWD'); // "新台幣"
nomsDevises.of('CNY'); // "人民幣"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Intl.DisplayNames', '#intl-displaynames-objects', 'DisplayNames')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.DisplayNames")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Intl")}}</li>
</ul>
