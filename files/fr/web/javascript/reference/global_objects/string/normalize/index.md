---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/normalize
original_slug: Web/JavaScript/Reference/Objets_globaux/String/normalize
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>normalize()</strong></code> permet de renvoyer la forme normalisée Unicode d'une chaîne de caractères (si la valeur n'est pas une chaîne de caractères, elle sera convertie).</p>

<div>{{EmbedInteractiveExample("pages/js/string-normalize.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.normalize([<var>form</var>]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>form</code></dt>
 <dd>Paramètre optionnel. Une chaîne parmi "NFC", "NFD", "NFKC", ou "NFKD", définissant la forme de normalisation Unicode à utiliser. Si le paramètre n'est pas précisé ou vaut {{jsxref("undefined")}}, la valeur par défaut utilisée sera "<code>NFC</code>".
 <ul>
  <li><code>NFC</code> - Normalization Form Canonical Composition.</li>
  <li><code>NFD</code> - Normalization Form Canonical Decomposition.</li>
  <li><code>NFKC</code> - Normalization Form Compatibility Composition.</li>
  <li><code>NFKD</code> - Normalization Form Compatibility Decomposition.</li>
 </ul>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui est le forme Unicode normalisée de la chaîne appelante.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd>Une exception <code>RangeError</code> est envoyée si le paramètre <code>form</code> n'est pas une des valeurs définies ci-avant.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>La méthode <code>normalize()</code> renvoie la forme normalisée Unicode de la chaîne de caractères. Elle n'affecte pas la valeur de la chaîne.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js;">// Chaîne initiale

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
var str = "\u1E9B\u0323";


// Forme canonique composée (Canonically-composed form) (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
str.normalize("NFC"); // "\u1E9B\u0323"
str.normalize(); // la même chaîne que précédemment


// Forme canonique décomposée (Canonically-decomposed form) (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFD"); // "\u017F\u0323\u0307"


// Forme composée compatible (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
str.normalize("NFKC"); // "\u1E69"


// Forme décomposée compatible (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
str.normalize("NFKD"); // "\u0073\u0323\u0307"
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
   <td>{{SpecName('ES2015', '#sec-string.prototype.normalize', 'String.prototype.normalize')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.normalize', 'String.prototype.normalize')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.normalize")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://www.unicode.org/reports/tr15/">Formes de normalisation Unicode, Annexe n°15 du standard Unicode</a></li>
 <li><a href="https://en.wikipedia.org/wiki/Unicode_equivalence">Équivalence Unicode</a></li>
</ul>
