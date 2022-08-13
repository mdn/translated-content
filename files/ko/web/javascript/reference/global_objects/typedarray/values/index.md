---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
tags:
  - ECMAScript6
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/values
browser-compat: javascript.builtins.TypedArray.values
---
<div>{{JSRef}}</div>

<p><strong><code>values()</code></strong> 메서드는 배열 내 각 인덱스에 대한 값을 포함하는 새로운 <code>Array Iterator</code> 객체를 반환합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code><var>arr</var>.values()</code></pre>

<h2 id="예">예</h2>

<h3 id="for...of_루프를_사용한_반복"><code>for...of</code> 루프를 사용한 반복</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.values();
// 브라우저가 for..of 루프 및 for 루프에서
// let 스코프인 변수를 지원해야 합니다
for (let n of eArray) {
  console.log(n);
}
</pre>

<h3 id="대안_반복">대안 반복</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.values();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Typed_arrays">JavaScript 형식화 배열</a></li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("TypedArray.prototype.entries()")}}</li>
 <li>{{jsxref("TypedArray.prototype.keys()")}}</li>
 <li>{{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}</li>
</ul>
