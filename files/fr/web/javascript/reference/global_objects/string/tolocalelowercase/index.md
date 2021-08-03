---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
tags:
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
original_slug: Web/JavaScript/Reference/Objets_globaux/String/toLocaleLowerCase
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleLowerCase()</strong></code> renvoie la chaîne de caractères qui appelle la méthode en une chaîne de caractères représentées en minuscules, en tenant compte des correspondances de caractères propres aux différentes locales.</p>

<div>{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.toLocaleLowerCase()
<var>str</var>.toLocaleLowerCase(locale)
<var>str</var>.toLocaleLowerCase([locale, locale, ...])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locale</code> {{optional_inline}}</dt>
 <dd>Ce paramètre indique la locale dans laquelle convertir la chaîne en minuscules en utilisant les correspondances de cette locale. Si plusieurs locales sont fournies au sein d'un tableau, c'est la meilleure locale disponible qui est utilisée. La locale par défaut est celle utilisée par le système hôte.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères obtenue à partir de la chaîne appelante, convertie en minuscules en tenant compte de la locale.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever les exceptions suivantes :</p>

<ul>
 <li>{{jsxref("RangeError")}} ("invalid language tag: xx_yy") si l'argument <code>locale</code> ne correspond pas à une balise de langue valide.</li>
 <li>{{jsxref("TypeError")}} ("invalid element in locales argument") si un des éléments du tableau passé en argument n'est pas une chaîne de caractères.</li>
</ul>

<h2 id="Description">Description</h2>

<p>La méthode <code>toLocaleLowerCase()</code> renvoie la valeur de la chaîne de caractères, convertie en minuscules selon les correspondances propres à la la locale. <code>toLocaleLowerCase()</code> ne modifie pas la chaîne d'origine. Dans la plupart des cas, cette méthode produira le même résultat que {{jsxref("String.toLowerCase", "toLowerCase()")}}. En revanche, pour certaines locales, par exemple les locales turques dont les correspondances entre les caractères ne sont pas celles par défaut, prévues par Unicode, cette méthode pourra produire un résultat différent.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">"ALPHABET".toLocaleLowerCase(); // "alphabet"

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false
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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.5.4.17', 'String.prototype.toLocaleLowerCase')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td>Ajout du paramètre <code>locale</code> dans ES Intl 2017</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.toLocaleLowerCase")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.toLocaleUpperCase()")}}</li>
 <li>{{jsxref("String.prototype.toLowerCase()")}}</li>
 <li>{{jsxref("String.prototype.toUpperCase()")}}</li>
</ul>
