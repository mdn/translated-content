---
title: 'SyntaxError: identifier starts immediately after numeric literal'
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
tags:
  - 구문 에러
  - 변수 이름
  - 식별자
  - 자바스크립트
translation_of: Web/JavaScript/Reference/Errors/Identifier_after_number
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="메세지">메세지</h2>

<pre class="syntaxbox">SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>{{Glossary("식별자", "식별자")}}라고 불리는 변수의 이름은 반드시 지켜야 하는 특정 규칙을 따라야 합니다.</p>

<p>자바스크립트의 식별자는 반드시 문자, 언더스코어(_), 또는 달러 표시($)로 시작돼야 합니다. 숫자로 시작될 수 없습니다. 글자 뒤에만 숫자(0-9)가 올 수 있습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="숫자로_시작하는_변수_이름">숫자로 시작하는 변수 이름</h3>

<p>자바스크립트에서 변수 이름은 숫자로 시작될 수 없습니다. 아래 예제는 에러가 발생합니다:</p>

<pre class="brush: js example-bad">var 1life = 'foo';
// SyntaxError: identifier starts immediately after numeric literal

var foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
</pre>

<p>숫자가 뒤에 오도록 변수 이름을 변경해야 합니다.</p>

<pre class="brush: js example-good">var life1 = 'foo';
var foo = life1;
</pre>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar">문법</a></li>
 <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#%EB%B3%80%EC%88%98">변수</a>(<a href="/en-US/docs/Web/JavaScript/Guide">JavaScript Guide</a>)</li>
</ul>
