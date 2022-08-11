---
title: 나머지 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
- JavaScript
- Language feature
- Operator
- Reference
translation_of: Web/JavaScript/Reference/Operators/Remainder
browser-compat: javascript.operators.remainder
---
<div>{{jsSidebar("Operators")}}</div>

<p>나머지 연산자(<code>%</code>)는 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지를 구합니다. 부호는 항상 왼쪽 피연산자의 부호를 따릅니다.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}</div>

<h2 id="syntax">구문</h2>

<pre class="brush: js">x % y</pre>

<h2 id="examples">예제</h2>

<h3 id="remainder_with_positive_dividend">양의 피제수의 나머지</h3>

<pre class="brush: js">
 12 % 5  //  2
  1 % -2 //  1
  1 % 2  //  1
  2 % 3  //  2
5.5 % 2  // 1.5
</pre>

<h3 id="remainder_with_negative_dividend">음의 피제수의 나머지</h3>

<pre class="brush: js">
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
</pre>

<h3 id="remainder_with_nan">NaN의 나머지</h3>

<pre class="brush: js">NaN % 2 // NaN</pre>

<h3 id="Remainder_with_Infinity">Infinity의 나머지</h3>

<pre class="brush: js">
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
</pre>

<h2 id="specifications">명세</h2>

{{Specifications}}

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="see_also">같이 보기</h2>

<ul>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Addition">더하기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Subtraction">빼기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Division">나누기 연산자</a></li>
  <li><a
    href="/ko/docs/Web/JavaScript/Reference/Operators/Multiplication">곱하기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation">거듭제곱 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Increment">증가 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Decrement">감소 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation">단항 부정 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus">단항 플러스 연산자</a></li>
</ul>
