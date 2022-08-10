---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
translation_of: Web/JavaScript/Reference/Errors/Not_a_codepoint
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
</pre>

<h2 id="에러_형식">에러 형식</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>{{jsxref("String.fromCodePoint()")}} 메소드는 유효한 코드 포인트(<a href="https://en.wikipedia.org/wiki/Code_point">code point</a>)만을 받아들입니다.</p>

<p><a href="https://en.wikipedia.org/wiki/Code_point">code point</a>는 유니코드의 코드 스페이스 값으로, <code>0</code>부터 <code>0x10FFFF</code>까지의 정수 범위입니다.</p>

<p>{{jsxref("NaN")}}을 사용하는 값, 음수 (<code>-1</code>),  정수가 아닌 수(3.14), 또는 <code>0x10FFFF</code> (<code>1114111</code>) 보다 큰 값은 이 함수에 적용될 수 없습니다.</p>

<h2 id="예">예</h2>

<h3 id="유효하지_않은_경우">유효하지 않은 경우</h3>

<pre class="brush: js example-bad">String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError</pre>

<h3 id="유효한_경우">유효한 경우</h3>

<pre class="brush: js example-good">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
</pre>

<h2 id="참조">참조</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
</ul>
