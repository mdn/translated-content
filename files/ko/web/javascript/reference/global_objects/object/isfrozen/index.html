---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---
<div>{{JSRef}}</div>

<p><code><strong>Object.isFrozen()</strong></code>은 객체가 {{jsxref("Object.freeze()", "동결", "", 1)}}됐는지 판별합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code>Object.isFrozen(<var>obj</var>)</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>판별할 객체.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>객체의 동결 여부를 나타내는 {{jsxref("Boolean")}}.</p>

<h2 id="설명">설명</h2>

<p>객체는 {{jsxref("Object.isExtensible()", "확장 불가", "", 1)}}이며 모든 속성이 설정 불가 및 모든 데이터 속성(즉, getter 또는 setter 요소가 있는 접근자 속성이 아닌 속성)이 쓰기 불가인 경우에만 동결됩니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">// 새로운 객체는 확장 가능해서 동결되지 않습니다.
Object.isFrozen({}); // === false

// 확장 불가인 빈 객체는 빈 채로 동결됩니다.
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // === true

// 속성이 하나 있는 새 객체도 확장 가능하므로 동결되지 않습니다.
var oneProp = { p: 42 };
Object.isFrozen(oneProp); // === false

// 객체 확장을 막아도 여전히 동결되지 않습니다,
// 속성이 여전히 설정 가능(및 쓰기 가능)하기에.
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // === false

// ...그렇지만 그 속성 삭제는 객체를 빈 채로 동결되게 합니다.
delete oneProp.p;
Object.isFrozen(oneProp); // === true

// 쓰기 불가지만 여전히 설정 가능한 속성이 있는 확장 불가 객체는 동결되지 않습니다.
var nonWritable = { e: 'plep' };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, 'e', { writable: false }); // 쓰기 불가로 함
Object.isFrozen(nonWritable); // === false

// 그 속성을 설정 불가로 바꾸면 객체를 동결되게 합니다.
Object.defineProperty(nonWritable, 'e', { configurable: false }); // 설정 불가로 함
Object.isFrozen(nonWritable); // === true

// 설정 불가지만 여전히 쓰기 가능 속성이 있는 확장 불가 객체도 동결되지 않습니다.
var nonConfigurable = { release: 'the kraken!' };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, 'release', { configurable: false });
Object.isFrozen(nonConfigurable); // === false

// 그 속성을 쓰기 불가로 바꾸면 객체를 동결되게 합니다.
Object.defineProperty(nonConfigurable, 'release', { writable: false });
Object.isFrozen(nonConfigurable); // === true

// 설정 가능 접근자 속성이 있는 확장 불가 객체는 동결되지 않습니다.
var accessor = { get food() { return 'yum'; } };
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // === false

// ...하지만 그 속성을 설정 불가로 하면 동결됩니다.
Object.defineProperty(accessor, 'food', { configurable: false });
Object.isFrozen(accessor); // === true

// 하지만 동결되는 객체를 위한 가장 쉬운 방법은 객체에 Object.freeze가 호출된 경우입니다.
var frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true

// 정의에 의해, 동결된 객체는 확장 불가입니다.
Object.isExtensible(frozen); // === false

// 또한 정의에 의해, 동결된 객체는 봉인됩니다.
Object.isSealed(frozen); // === true
</pre>

<h2 id="주의">주의</h2>

<p>ES5에서, 이 메서드의 인수가 비객체(원시형)인 경우, 그러면 {{jsxref("TypeError")}}가 발생합니다. ES6에서, 비객체 인수는 마치 동결된 보통 객체였던 것처럼 취급됩니다, 그저 <code>true</code>를 반환하는.</p>

<pre class="brush: js">Object.isFrozen(1);
// TypeError: 1은 객체가 아닙니다 (ES5 코드)

Object.isFrozen(1);
// true                          (ES6 코드)
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Object.isFrozen")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
</ul>
