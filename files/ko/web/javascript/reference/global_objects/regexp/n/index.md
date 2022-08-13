---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/n
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>비표준 <strong>$1, $2, $3, $4, $5, $6, $7, $8, $9 </strong>속성들은 정적이며, 괄호로 묶인 하위 문자열 match들을 포함하는 정규 표현식의 읽기 전용 속성들입니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code><var>RegExp</var>.$1
RegExp.$2</code>
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9
</pre>

<h2 id="Description">Description</h2>

<p>$1, ..., $9 properties are static, they are not a property of an individual regular expression object. Instead, you always use them as <code>RegExp.$1</code>, ..., <code>RegExp.$9</code>.</p>

<p>The values of these properties are read-only and modified whenever successful matches are made.</p>

<p>The number of possible parenthesized substrings is unlimited, but the <code>RegExp</code> object can only hold the first nine. You can access all parenthesized substrings through the returned array's indexes.</p>

<p>These properties can be used in the replacement text for the {{jsxref("String.replace")}} method. When used this way, do not prepend them with <code>RegExp</code>. The example below illustrates this. When parentheses are not included in the regular expression, the script interprets <code>$n</code>'s literally (where <code>n</code> is a positive integer).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_n_with_String.replace">Using <code>$n</code> with <code>String.replace</code></h3>

<p>아래의 script는 first last 포맷의 이름과 매치하기 위해 {{jsxref("String")}} 인스턴스의 {{jsxref("String.prototype.replace()", "replace()")}} 메소드를 사용하고 그것을 last, first 포맷으로 출력한다. 대체 텍스트에서, 이 script는 정규 표현식 패턴에서 매칭되는 괄호들에 해당하는 결과들을 나타내는 <code>$1</code> 과 <code>$2</code> 를 사용한다.</p>

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Non-standard. Not part of any current specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("javascript.builtins.RegExp.n")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}</li>
</ul>
