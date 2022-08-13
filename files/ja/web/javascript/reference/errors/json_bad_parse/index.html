---
title: 'SyntaxError: JSON.parse: bad parsing'
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
tags:
- Error
- Errors
- JSON
- JavaScript
- SyntaxError
translation_of: Web/JavaScript/Reference/Errors/JSON_bad_parse
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外で、 {{jsxref("JSON.parse()")}} が文字列を JSON として解釈するのに失敗した場合に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">SyntaxError: JSON.parse: unterminated string literal
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
SyntaxError: JSON.parse Error: Invalid character at position {0} (Edge)</pre>

<h2 id="Error_type">エラー種別</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>{{jsxref("JSON.parse()")}} は文字列を JSON として解釈します。この文字列は妥当な JSON であるべきであり、不正確な構文に出会った場合、このエラーが発生します。</p>

<h2 id="Examples">例</h2>

<h3 id="JSON.parse_does_not_allow_trailing_commas"><code>JSON.parse()</code> は末尾のカンマを許容しない</h3>

<p>どちらの行でも SyntaxError が発生します。</p>

<pre class="brush: js example-bad">JSON.parse('[1, 2, 3, 4,]');
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
</pre>

<p>末尾のカンマを省略すると、正しく JSON として解釈します。</p>

<pre class="brush: js example-good">JSON.parse('[1, 2, 3, 4]');
JSON.parse('{"foo": 1}');</pre>

<h3 id="Property_names_must_be_double-quoted_strings">プロパティ名は二重引用符で囲んだ文字列でなければならない</h3>

<p>プロパティを囲むのに、たとえば 'foo' のように単一引用符を使用してはいけません。</p>

<pre class="brush: js example-bad">JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data</pre>

<p>代わりに "foo" と書いてください。</p>

<pre class="brush: js example-good">JSON.parse('{"foo": 1}');</pre>

<h3 id="Leading_zeros_and_decimal_points">先頭のゼロと小数点</h3>

<p>01 のような先頭の 0 は使用できません。また、小数点の後には少なくとも 1 桁以上が続かなければなりません。</p>

<pre class="brush: js example-bad">JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
</pre>

<p>0 を除いて 1 だけを書いてください。また、小数点の後には少なくとも 1 桁の数字を置いてください。</p>

<pre class="brush: js example-good">JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("JSON")}}</li>
  <li>{{jsxref("JSON.parse()")}}</li>
  <li>{{jsxref("JSON.stringify()")}}</li>
</ul>
