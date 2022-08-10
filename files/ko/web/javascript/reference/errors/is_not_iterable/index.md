---
title: 'TypeError: ''x'' is not iterable'
slug: Web/JavaScript/Reference/Errors/is_not_iterable
tags:
  - JavaScript
  - 레퍼런스
  - 에러
  - 타입에러
translation_of: Web/JavaScript/Reference/Errors/is_not_iterable
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="무엇이_문제인가요">무엇이 문제인가요?</h2>

<p>{{jsxref("Promise.all")}} 또는 {{jsxref("TypedArray.from")}} 과 같은 함수의 아규먼트 또는 <a href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of</a> 의 right hand-side 로 주어진 값이 <a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols">iterable 객체</a>가 아닙니다. iterable 은 {{jsxref("Array")}}, {{jsxref("String")}} 또는 {{jsxref("Map")}}, 생성자 결과, 또는 <a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable protocol</a> 구현 객체와 같은 내장 iterable 타입이 될 수 있습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="모든_객체_프로퍼티_iterating">모든 객체 프로퍼티 iterating</h3>

<p>JavaScript 에서 <a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable protocol</a> 을 구현하지 않은 {{jsxref("Object")}} 는 iterable 이 아닙니다.<br>
 그러므로, 객체의 프로퍼티를 반복하기 위해 <a href="/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of</a> 를 사용하면 안됩니다.</p>

<pre class="brush: js example-bad">var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}
</pre>

<p>객체의 모든 항목 또는 프로퍼티를 반복하려면 대신 {{jsxref("Object.keys")}} 또는 {{jsxref("Object.entries")}} 를 사용해야 합니다.</p>

<pre class="brush: js example-good">var obj = { 'France': 'Paris', 'England': 'London' };
// 모든 프로퍼티 이름을 iterate:
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
    console.log(country, capital);


</pre>

<p>이 유즈 케이스에 대한 다른 옵션은 {{jsxref("Map")}} 을 사용하는 것입니다.</p>

<pre class="brush: js example-good">var map = new Map;
map.set('France', 'Paris');
map.set('England', 'London');
// 모든 프로퍼티 이름 iterate
for (let country of map.keys()) {
    let capital = map[country];
    console.log(country, capital);
}

for (let capital of map.values())
    console.log(capital);

for (const [country, capital] of map.entries())
    console.log(country, capital);
</pre>

<h3 id="Generator_iterating">Generator iterating</h3>

<p><a href="/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators">Generators</a> 는 iterable 객체를 생성하기 위해 호출하는 함수입니다.</p>

<pre class="brush: js example-bad">function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
    console.log(x);
</pre>

<p>generator 가 호출되지 않으면, generator 에 해당하는 {{jsxref("Function")}} 객체를 호출할수는 있지만 interable 하지는 않습니다. generator 호출은 generator 실행동안 yield 된 모든 값을 iterate 하는 iterable 객체를 생성합니다.</p>

<pre class="brush: js example-good">function* generate(a, b) {
    yield a;
    yield b;
}

for (let x of generate(1,2))
    console.log(x);
</pre>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable protocol</a></li>
 <li>{{jsxref("Object.keys")}}</li>
 <li>{{jsxref("Object.entries")}}</li>
 <li>{{jsxref("Map")}}</li>
 <li><a href="/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators">generators</a></li>
 <li><a href="/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of</a></li>
</ul>
