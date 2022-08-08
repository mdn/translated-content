---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
tags:
  - ECMAScript 2015
  - Generators
  - Iterable
  - Iterator
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/yield*
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong><code>yield*</code> 표현식</strong>은 다른 {{jsxref("Statements/function*", "generator")}} 또는 이터러블(iterable) 객체에 yield를 위임할 때 사용됩니다.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">yield* [[<em>expression</em>]];</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>이터러블(iterable) 객체를 반환하는 표현식.</dd>
</dl>

<h2 id="설명">설명</h2>

<p>yield* 표현은 피연산자를 반복하고 반환되는 값을 yield합니다.</p>

<p>yield* 표현 자체의 값은 반복자(iterator)가 종료될 때 반환되는 값입니다. (i.e., done이 true일 때)</p>

<h2 id="예제">예제</h2>

<h3 id="다른_생성기(generator)에_위임하기">다른 생성기(generator)에 위임하기</h3>

<p>다음 코드는, next() 호출을 통해 g1()으로부터 yield 되는 값을 g2()에서 yield 되는 것처럼 만듭니다.</p>

<pre class="brush: js">function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

<h3 id="다른_이터러블(iterable)_객체">다른 이터러블(iterable) 객체</h3>

<p>생성기 객체 말고도, yield*는 다른 반복 가능한 객체도 yield 할 수 있습니다. e.g. 배열, 문자열 또는 arguments 객체</p>

<pre class="brush: js">function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
</pre>

<h3 id="yield*_표현_자체의_값"><code>yield*</code> 표현 자체의 값</h3>

<p><code>yield*</code> 는 구문이 아닌 표현입니다. 따라서 값으로 평가됩니다.</p>

<pre class="brush: js">function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
                              // g4() 는 여기서 { value: "foo", done: true }를 반환합니다

console.log(result);          // "foo"
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.operators.yield_star")}}</p>

<h2 id="Firefox에_한정된_내용">Firefox에 한정된 내용</h2>

<ul>
 <li>Gecko 33 {{geckoRelease(33)}} 부터, yield 표현 구문 분석이 최신 ES6 표준에 맞추도록 업데이트 되었습니다 ({{bug(981599)}}):
  <ul>
   <li>개행 제한이 이제 구현되었습니다. 개행이 없는 "yield" 와 "*"만 인정됩니다. 다음과 같은 코드는 {{jsxref("SyntaxError")}}를 발생시킵니다:
    <pre class="brush: js">function* foo() {
  yield
  *[];
}</pre>
   </li>
  </ul>
 </li>
</ul>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">The Iterator protocol</a></li>
 <li>{{jsxref("Statements/function*", "function*")}}</li>
 <li>{{jsxref("Operators/function*", "function* expression")}}</li>
 <li>{{jsxref("Operators/yield", "yield")}}</li>
</ul>
