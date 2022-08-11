---
title: 단항 부정 (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
tags:
- JavaScript
- Language feature
- Operator
- Reference
browser-compat: javascript.operators.unary_negation
---
<div>{{jsSidebar("Operators")}}</div>

<p>단항 부정 연산자(<code>-</code>)는 피연산자 앞에 위치하며, 피연산자의 부호를 부정합니다. 즉 양수는 음수로, 음수는 양수로 바꿉니다.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}</div>


<h2 id="Syntax">구문</h2>

<pre class="brush: js">-<var>x</var>
</pre>

<h2 id="Examples">예제</h2>

<h3 id="Negating_numbers">숫자 부정하기</h3>

<pre class="brush: js">const x = 3;
const y = -x;

// y = -3
// x = 3
</pre>

<h3 id="Negating_non-numbers">숫자가 아닌 값을 부정하기</h3>

<p>단항 부정 연산자는 숫자가 아닌 값을 숫자로 변환할 수 있습니다.</p>

<pre class="brush: js">const x = "4";
const y = -x;

// y = -4
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Addition">더하기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Subtraction">빼기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Division">나누기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Multiplication">곱하기 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Remainder">나머지 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation">지수 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Increment">증가 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Decrement">감소 연산자</a></li>
  <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus">단항 더하기 연산자</a></li>
</ul>
