---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
translation_of: Web/JavaScript/Reference/Errors/Deprecated_octal
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
SyntaxError:
"0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the "0o" prefix instead
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>{{jsxref("SyntaxError")}} <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> 내에서만.</p>

<h2 id="무엇이_잘_못_되었을까">무엇이 잘 못 되었을까?</h2>

<p>8진 리터럴과 8진수 이스케이프 시퀀스는 더 이상 사용하지 않으며, 엄격 모드(strict mode) 내에서는 {{jsxref("SyntaxError")}} 에러를 던질 것입니다. ECMAScript 2015와 이 후의 버전의 표준화된 구문은 0을 맨 앞자리에 두고 그 뒤를 대문자 또는 소문자의 라틴 문자 "O" 를 사용하도록 합니다. (<code>0o</code> 또는 <code>0O)</code></p>

<h2 id="예제">예제</h2>

<h3 id="0이_접두인_8진_리터럴">"0"이 접두인 8진 리터럴</h3>

<pre class="brush: js example-bad">"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated (0으로 시작하는 8진수와 8진 이스케이프 시퀀스는 더 이상 사용되지 않습니다. )
</pre>

<h3 id="8진수_이스케이프_시퀀스">8진수 이스케이프 시퀀스</h3>

<pre class="brush: js example-bad">"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated (0으로 시작하는 8진수와 8진 이스케이프 시퀀스는 더 이상 사용되지 않습니다. )
</pre>

<h3 id="유효한_8진_수들">유효한 8진 수들</h3>

<p>0뒤에 "o" 또는 "O"를 사용합니다. :</p>

<pre class="brush: js example-good">0o3;
</pre>

<p>8진수 이스케이프 시퀀스 대신 16진수 이스케이프 시퀀스를 사용할 수도 있습니다. :</p>

<pre class="brush: js example-good">'\xA9';</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Octal">Lexical grammar</a></li>
 <li>
  <p><a href="/en-US/docs/Web/JavaScript/Reference/Errors/Bad_octal">Warning: 08/09 is not a legal ECMA-262 octal constant</a></p>
 </li>
</ul>
