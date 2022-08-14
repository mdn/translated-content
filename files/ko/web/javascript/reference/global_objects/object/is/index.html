---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/is
---
<div>{{JSRef}}</div>

<p><code><strong>Object.is()</strong></code> 메서드는 두 값이 <a href="/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness">같은 값</a>인지 결정합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code>Object.is(<var>value1</var>, <var>value2</var>);</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>value1</code></dt>
 <dd>비교할 첫 번째 값.</dd>
 <dt><code>value2</code></dt>
 <dd>비교할 두 번째 값.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>두 인수가 같은 값인지 여부를 나타내는 {{jsxref("Boolean")}}.</p>

<h2 id="설명">설명</h2>

<p><code>Object.is()</code>는 두 값이 <a href="/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness">같은 값</a>인지 결정합니다. 다음 중 하나를 만족하면 두 값은 같습니다.</p>

<ul>
 <li>둘 다 {{jsxref("undefined")}}</li>
 <li>둘 다 {{jsxref("null")}}</li>
 <li>둘 다 <code>true</code> 또는 둘 다 <code>false</code></li>
 <li>둘 다 같은 문자에 같은 길이인 문자열</li>
 <li>둘 다 같은 객체</li>
 <li>둘 다 숫자이며
  <ul>
   <li>둘 다 <code>+0</code></li>
   <li>둘 다 <code>-0</code></li>
   <li>둘 다 {{jsxref("NaN")}}</li>
   <li>둘 다 0이나 {{jsxref("NaN")}}이 아니고 같은 값을 지님</li>
  </ul>
 </li>
</ul>

<p>이는 {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 연산자에 따른 같음과 같지 <em>않습니다</em>. {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 연산자는 같음을 테스트하기 전에 양 쪽(이 같은 형이 아니라면)에 다양한 강제(coercion)를 적용하지만(<code>"" == false</code>가 <code>true</code>가 되는 그런 행동을 초래), <code>Object.is</code>는 어느 값도 강제하지 않습니다.</p>

<p>이는 {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} 연산자에 따른 같음과도 같지 <em>않습니다</em>. {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} 연산자(와 {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 연산자 역시)는 숫자값 <code>-0</code>과 <code>+0</code>을 같게 {{jsxref("Number.NaN")}}은 {{jsxref("NaN")}}과 같지 않게 여깁니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// 특별한 경우
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
</pre>

<h2 id="폴리필">폴리필</h2>

<pre class="brush: js">if (!Object.is) {
  Object.is = function(x, y) {
   // SameValue 알고리즘
    if (x === y) { // Steps 1-5, 7-10
     // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
   } else {
     // Step 6.a: NaN == NaN
     return x !== x &amp;&amp; y !== y;
   }
  };
}
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Object.is")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness">같음 비교 및 똑같음</a> — 똑같음 내장 기능 3가지 모두 비교</li>
</ul>
