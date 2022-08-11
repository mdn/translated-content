---
title: 그룹 연산자
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - JavaScript
  - Operator
  - Primary Expressions
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Grouping
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>그룹 연산자 <code>()</code></strong>는 표현식 내에서 평가의 우선순위를 제어합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"> ( )</pre>

<h2 id="설명">설명</h2>

<p>그룹 연산자는 표현식이나 중첩 표현식 주위를 감싸는 한 쌍의 괄호로 이루어진 연산자로, 감싸인 식이 더 높은 우선순위를 갖도록 일반적인 <a href="/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">연산자 우선순위</a>를 재정의합니다. 이름 그대로, 그룹 연산자는 괄호 안의 내용을 묶습니다.</p>

<h2 id="예제">예제</h2>

<p>다음 예제에서는 곱셈과 나눗셈 이후 덧셈과 뺄셈을 사용하는 일반적인 연산 순서를 그룹 연산자를 사용해 바꿉니다.</p>

<pre class="brush:js">var a = 1;
var b = 2;
var c = 3;

// 기본 우선순위
a + b * c     // 7
// 이것과 같음
a + (b * c)   // 7

// 더하기를 곱하기보다 먼저 하도록
// 우선순위 변경
(a + b) * c   // 9

// 이것과 같음
a * c + b * c // 9
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.operators.grouping")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">연산자 우선순위</a></li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Operators/typeof", "typeof")}}</li>
</ul>
