---
title: 'SyntaxError: JSON.parse: bad parsing'
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/JSON_bad_parse
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

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
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>{{jsxref("JSON.parse()")}} обрабатывает (парсит) строку в формате JSON. Это строка должна соответствовать формату, иначе будет выведена ошибка, что был нарушен синтаксис.</p>

<h2 id="Examples">Examples</h2>

<h3 id="JSON.parse()_не_допускает_запятые"><code>JSON.parse()</code> не допускает запятые</h3>

<p>Метод JSON.parse() не разрешает использование, так называемых, trailling запятых.</p>

<p>Обе строки выдадут ошибку типа SyntaxError:</p>

<pre class="brush: js example-bad">JSON.parse('[1, 2, 3, 4,]');
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
</pre>

<p>Необходимо убрать последние запятые в строках и тогда ошибки не будет:</p>

<pre class="brush: js example-good">JSON.parse('[1, 2, 3, 4]');
JSON.parse('{"foo": 1}');</pre>

<h3 id="Названия_свойств_должны_быть_в_двойных_кавычках">Названия свойств должны быть в двойных кавычках</h3>

<p>Вы не можете использовать одинарные кавычки в именах свойств. Например, 'foo'.</p>

<pre class="brush: js example-bad">JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data</pre>

<p>Вместо этого необходимо написать "foo":</p>

<pre class="brush: js example-good">JSON.parse('{"foo": 1}');</pre>

<h3 id="Незначащие_нули_или_плавающая_точка_без_последующей_цифры">Незначащие нули или плавающая точка без последующей цифры</h3>

<p>Вы не можете использовать незначащие нули, например, 01. Плавающая точка должна всегда сопровождаться хотя бы одной цифрой после неё.</p>

<pre class="brush: js example-bad">JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
</pre>

<p>Вместо этого напишите просто 1 без нуля и используйте хотя бы одну цифру после точки:</p>

<pre class="brush: js example-good">JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("JSON")}}</li>
 <li>{{jsxref("JSON.parse()")}}</li>
 <li>{{jsxref("JSON.stringify()")}}</li>
</ul>
