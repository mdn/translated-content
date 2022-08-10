---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - for...in 구문
  - 구문 에러
  - 배열 반복
  - 자바스크립트
  - 초기화
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메세지">메세지</h2>

<pre class="syntaxbox">SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>엄격(Strict) 모드에서의 {{jsxref("SyntaxError")}}.</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> 반복문의 선언부에 초기화 구문이 포함되어 있습니다. 즉, |<code>for (var i = 0 in obj)</code>| 구문을 통해 변수가 정의되고 값이 할당된 것을 말합니다. 비엄격 모드(non-strict) 모드에서는 이 초기화 구문이 무시되어 <code>|for (var i in obj)|</code> 처럼 동작합니다. 하지만 엄격 모드에서는 <code>SyntaxError</code> 가 발생합니다.</p>

<h2 id="예제">예제</h2>

<p>이 예제는 <code>SyntaxError</code>를 발생시킵니다.</p>

<pre class="brush: js example-bad">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
</pre>

<h3 id="올바른_for-in_반복문">올바른 for-in 반복문</h3>

<p>for-in 반복문의 선언부에서 초기화 구문(<code>i = 0</code>)을 삭제합니다.</p>

<pre class="brush: js example-good">"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
</pre>

<h3 id="배열_반복">배열 반복</h3>

<p>for...in 반복문은 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in">배열을 반복하는데에는 사용하지 않습니다</a>. 배열({{jsxref("Array")}})을 반복하기 위해 <code>for-in</code> 반복문 대신에 <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> 반복문을 사용하려고 한 적이 있습니까? <code>for</code> 반복문은 선언부에서 초기화도 할 수 있습니다:</p>

<pre class="brush: js example-good">var arr = [ "a", "b", "c" ]

for (var i = 2; i &lt; arr.length; i++) {
  console.log(arr[i]);
}

// "c"</pre>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code> – 엄격 모드와 비엄격 모드에서 모두 초기화를 허용하지 않습니다.</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for">for</a></code> – 배열 반복에 적합하고 초기화도 가능합니다.</li>
</ul>
