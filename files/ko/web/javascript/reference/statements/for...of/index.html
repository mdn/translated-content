---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/for...of
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>for...of</code> 명령문</strong>은 <a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable">반복가능한 객체</a> ({{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, <a href="/ko/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a> 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-forof.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">for (<em>variable</em> of <em>iterable</em>) {
  <em>statement
</em>}
</pre>

<dl>
 <dt><code>variable</code></dt>
 <dd>각 반복에 서로 다른 속성값이 <em>variable</em>에 할당됩니다.</dd>
 <dt><code>iterable</code></dt>
 <dd>반복되는 열거가능(enumerable)한 속성이 있는 객체.</dd>
</dl>

<h2 id="예제">예제</h2>

<h3 id="jsxrefArray에_대해_반복">{{jsxref("Array")}}에 대해 반복:</h3>

<pre class="brush:js">let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
</pre>

<p><a href="/ko/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> 대신 <a href="/ko/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a>도 사용할 수 있습니다, 블록 내부 변수를 수정하지 않는 경우.</p>

<pre class="brush:js">let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
</pre>

<h3 id="jsxrefString에_대해_반복">{{jsxref("String")}}에 대해 반복:</h3>

<pre class="brush:js">let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
</pre>

<h3 id="jsxrefTypedArray에_대해_반복">{{jsxref("TypedArray")}}에 대해 반복:</h3>

<pre class="brush:js">let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
</pre>

<h3 id="jsxrefMap에_대해_반복">{{jsxref("Map")}}에 대해 반복:</h3>

<pre class="brush:js">let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
</pre>

<h3 id="jsxrefSet에_대해_반복">{{jsxref("Set")}}에 대해 반복:</h3>

<pre class="brush:js">let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
</pre>

<h3 id="DOM_컬렉션에_대해_반복">DOM 컬렉션에 대해 반복</h3>

<p>{{domxref("NodeList")}} 같은 DOM 컬렉션에 대해 반복: 다음 예는 article의 직계 자손인 paragraph에 <code>read</code> 클래스를 추가합니다:</p>

<pre class="brush:js">// 주의: 이는 NodeList.prototype[Symbol.iterator]가
// 구현된 플랫폼에서만 작동합니다
let articleParagraphs = document.querySelectorAll("article &gt; p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
</pre>

<h3 id="생성기에_대해_반복">생성기에 대해 반복</h3>

<p><a href="/ko/docs/Web/JavaScript/Reference/Statements/function*">생성기</a>에 대해서도 반복할 수 있습니다:</p>

<pre class="brush:js">function* fibonacci() { // 생성기 함수
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // 1000에서 수열을 자름
  if (n &gt;= 1000) {
    break;
  }
}
</pre>

<h3 id="다른_반복가능_객체에_대해_반복">다른 반복가능 객체에 대해 반복</h3>

<p><a href="/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable">iterable</a> 프로토콜을 명시해서 구현하는 객체에 대해서도 반복할 수 있습니다:</p>

<pre class="brush:js">var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i &lt; 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
</pre>

<h3 id="for...of와_for...in의_차이"><code>for...of</code>와 <code>for...in</code>의 차이</h3>

<p><code><a href="/ko/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> 루프는 객체의 모든 열거가능한 속성에 대해 반복합니다.</p>

<p><code>for...of</code> 구문은 <strong>컬렉션</strong> 전용입니다. 모든 객체보다는, <code>[Symbol.iterator]</code> 속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복합니다.</p>

<p>다음 예는 <code>for...of</code> 루프와 <code>for...in</code> 루프의 차이를 보입니다.</p>

<pre class="brush:js">Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.statements.for_of")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Statements/for_each...in">for each...in</a> - 비슷한 문이지만, 속성 이름 자체보다는 객체의 속성값을 반복합니다 (사라짐).</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">Map.prototype.forEach()</a></li>
</ul>
