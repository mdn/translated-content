---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - NumberFormat
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat/formatToParts
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Intl.Numberformat.prototype.formatToParts()</code></strong> permet de produire des fragments de chaînes à partir d'un nombre pour le mettre en forme avec des formateurs <code>NumberTimeFormat</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Intl.NumberFormat.prototype.formatToParts(nombre)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>nombre</code> {{optional_inline}}</dt>
 <dd>Le nombre qu'on souhaite mettre en forme.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau {{jsxref("Array")}} contenant des objets correspondants aux différents fragments du nombres.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>formatToParts()</code> est peut être utilisée lorsqu'on met en forme des chaînes de caractères représentant des valeurs numériques. Cette méthode renvoie un tableau ({{jsxref("Array")}}) d'objets qui sont les différents fragments spécifiques aux locales et qui permettent de construire des chaînes dans un format spécifiques tout en conservant les parties liées à la locale. <code>formatToParts()</code> renvoie une structure analogue à :</p>

<pre class="brush: js">[
  { type: "integer", value: "3" }
  { type: "group", value: "." }
  { type: "integer", value: "500" }
]</pre>

<p>Les valeurs possibles pour l'attribut <code>type</code> sont :</p>

<dl>
 <dt><code>currency</code></dt>
 <dd>Le suffixe associé à la devise. Ce peut être le symbole "$", "€" ou bien le nom de la devise "Dollar", "Euro" selon la façon dont <code>currencyDisplay</code>  est indiquée.</dd>
 <dt><code>decimal</code></dt>
 <dd>Le séparateur décimal utilisé (".").</dd>
 <dt><code>fraction</code></dt>
 <dd>La partie fractionnaire du nombre.</dd>
 <dt><code>group</code></dt>
 <dd>La chaîne de caractères utilisée pour indiquer un groupe (",").</dd>
 <dt><code>infinity</code></dt>
 <dd>La chaîne de caractères qui représente la valeur {{jsxref("Infinity")}} ("∞").</dd>
 <dt><code>integer</code></dt>
 <dd>La partie entière du nombre.</dd>
 <dt><code>literal</code></dt>
 <dd>Toute chaîne de caractères littérale ou blanc utilisée dans le nombre mis en forme.</dd>
 <dt><code>minusSign</code></dt>
 <dd>La chaîne de caractères utilisée pour le signe moins ("-").</dd>
 <dt><code>nan</code></dt>
 <dd>La chaîne de caractères utilisée pour représenter la valeur {{jsxref("NaN")}} ("NaN").</dd>
 <dt><code>plusSign</code></dt>
 <dd>La chaîne de caractères utilisée pour le signe plus ("+").</dd>
 <dt><code>percentSign</code></dt>
 <dd>La châine de caractères utilisée pour le symbole pourcent ("%").</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p><code>NumberFormat</code> produit une chaîne localisée opaque qui ne peut pas être manipulée directement :</p>

<pre class="brush: js">var number = 3500;

var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

formatter.format(number);
// "3.500,00 €"
</pre>

<p>Toutefois, pour certaines applications, on souhaite adapter la mise en forme de cette chaîne de caractères. La méthode <code>formatToParts</code> permet d'obtenir cette flexibilité tout en conservant les différents fragments produits par <code>NumberFormat</code> :</p>

<pre class="brush: js">formatter.formatToParts(number);

// return value:
[
  { type: "integer",  value: "3"   }
  { type: "group",    value: "."   }
  { type: "integer",  value: "500" }
  { type: "decimal",  value: ","   }
  { type: "fraction", value: "00"  }
  { type: "literal",  value: " "   }
  { type: "currency", value: "€"   }
]
</pre>

<p>Maintenant que la chaîne est décomposée, on peut la réassembler d'une façon spécifique. On peut, par exemple utiliser {{jsxref("Array.prototype.map()")}}, <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">une fonction fléchée</a>, une <a href="/fr/docs/Web/JavaScript/Reference/Instructions/switch">instruction <code>switch</code></a>, <a href="/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits">des littéraux de gabarits</a> et {{jsxref("Array.prototype.reduce()")}}.</p>

<pre class="brush: js">var numberString = formatter.formatToParts(number).map(({type, value}) =&gt; {
  switch (type) {
    case 'currency': return `&lt;strong&gt;${value}&lt;/strong&gt;`;
    default : return value;
  }
}).reduce((string, part) =&gt; string + part);
</pre>

<p>Grâce à cette fonction, on pourra mettre en gras le suffixe associé à la devise :</p>

<pre class="brush: js">console.log(numberString);
// "3.500,00 &lt;strong&gt;€&lt;/strong&gt;"</pre>

<h2 id="Prothèse_démulation_polyfill">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Une prothèse pour cette fonctionnalité est disponible <a href="https://github.com/zbraniecki/proposal-intl-formatToParts">dans le dépôt associé à la proposition</a>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.prototype.formatToParts', 'Intl.NumberFormat.prototype.formatToParts')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Intl.NumberFormat.formatToParts")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("NumberFormat", "Intl.NumberFormat")}}</li>
 <li>{{jsxref("NumberFormat.format", "Intl.NumberFormat.prototype.format")}}</li>
 <li>Formater des dates : {{jsxref("DateTimeFormat.formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}</li>
</ul>
