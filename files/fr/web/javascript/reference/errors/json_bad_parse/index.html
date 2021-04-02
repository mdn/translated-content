---
title: 'SyntaxError: JSON.parse: bad parsing'
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
tags:
  - Erreurs
  - JSON
  - JavaScript
  - NeedsExample
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/JSON_bad_parse
original_slug: Web/JavaScript/Reference/Erreurs/JSON_bad_parse
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: JSON.parse: unterminated string literal
SyntaxError: JSON.parse: bad control character in string literal
SyntaxError: JSON.parse: bad character in string literal
SyntaxError: JSON.parse: bad Unicode escape
SyntaxError: JSON.parse: bad escape character
SyntaxError: JSON.parse: unterminated string
SyntaxError: JSON.parse: no number after minus sign
SyntaxError: JSON.parse: unexpected non-digit
SyntaxError: JSON.parse: missing digits after decimal point
SyntaxError: JSON.parse: unterminated fractional number
SyntaxError: JSON.parse: missing digits after exponent indicator
SyntaxError: JSON.parse: missing digits after exponent sign
SyntaxError: JSON.parse: exponent part is missing a number
SyntaxError: JSON.parse: unexpected end of data
SyntaxError: JSON.parse: unexpected keyword
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: end of data while reading object contents
SyntaxError: JSON.parse: expected property name or '}'
SyntaxError: JSON.parse: end of data when ',' or ']' was expected
SyntaxError: JSON.parse: expected ',' or ']' after array element
SyntaxError: JSON.parse: end of data when property name was expected
SyntaxError: JSON.parse: expected double-quoted property name
SyntaxError: JSON.parse: end of data after property name when ':' was expected
SyntaxError: JSON.parse: expected ':' after property name in object
SyntaxError: JSON.parse: end of data after property value in object
SyntaxError: JSON.parse: expected ',' or '}' after property value in object
SyntaxError: JSON.parse: expected ',' or '}' after property-value pair in object literal
SyntaxError: JSON.parse: property names must be double-quoted strings
SyntaxError: JSON.parse: expected property name or '}'
SyntaxError: JSON.parse: unexpected character
SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data
SyntaxError: JSON.parse Error: Invalid character at position {0} (Edge)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Lorsque la méthode {{jsxref("JSON.parse()")}} analyse (<em>parse</em>) une chaîne de caractères en JSON, cette chaîne doit être du JSON valide et une exception sera levée si la syntaxe est incorrecte.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="JSON.parse()_n'accepte_pas_les_virgules_en_fin_de_tableau"><code>JSON.parse()</code> n'accepte pas les virgules en fin de tableau</h3>

<p>Les deux lignes qui suivent déclencheront une exception <code>SyntaxError</code> :</p>

<pre class="brush: js example-bad">JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
</pre>

<p>Pour que la méthode puisse analyser le JSON correctement, on évitera les virgules en fin de tableau :</p>

<pre class="brush: js example-good">JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');</pre>

<h3 id="Les_noms_des_propriétés_doivent_être_entre_double_quotes">Les noms des propriétés doivent être entre double quotes</h3>

<p>On ne peut pas utiliser de quotes simples pour indiquer le nom d'une propriété (ex. <code>'toto'</code>).</p>

<pre class="brush: js example-bad">JSON.parse("{'toto' : 1 }");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data</pre>

<p>À la place, on écrira <code>"toto"</code> :</p>

<pre class="brush: js example-good">JSON.parse('{"toto" : 1 }');</pre>

<h3 id="Zéros_en_début_de_nombres_et_points_décimaux">Zéros en début de nombres et points décimaux</h3>

<p>On ne peut pas utiliser de zéros en début de nombre (ex. 01). Par ailleurs, les nombres décimaux doivent avoir une partie décimale, on ne peut pas terminer un nombre par un point.</p>

<pre class="brush: js example-bad">JSON.parse('{"toto" : 01 }');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"toto" : 1. }');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
</pre>

<p>Pour que cela fonctionne, on écrira simplement 1 sans 0 devant et au moins un chiffre après le séparateur décimal :</p>

<pre class="brush: js example-good">JSON.parse('{"toto" : 1 }');
JSON.parse('{"toto" : 1.0 }');
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("JSON")}}</li>
 <li>{{jsxref("JSON.parse()")}}</li>
 <li>{{jsxref("JSON.stringify()")}}</li>
</ul>
