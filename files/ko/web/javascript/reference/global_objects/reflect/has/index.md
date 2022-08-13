---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/has
---
<div>{{JSRef}}</div>

<p><code><strong>Reflect</strong></code><strong><code>.has()</code></strong> 정적 메서드는 <a href="/ko/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 연산자</a>의 함수판입니다.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-has.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">Reflect.has(<em>target</em>, <em>propertyKey</em>)
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>속성을 탐색할 객체.</dd>
 <dt><code>propertyKey</code></dt>
 <dd>탐색할 속성의 이름.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>객체가 속성을 가지고 있는지 나타내는 {{jsxref("Boolean")}}.</p>

<h3 id="예외">예외</h3>

<p><code>target</code>이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.</p>

<h2 id="설명">설명</h2>

<p><code>Reflect.has()</code> 메서드는 객체에 속성이 존재하는지 판별할 수 있습니다. <a href="/ko/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 연산자</a>처럼 동작합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="Reflect.has()_사용하기"><code>Reflect.has()</code> 사용하기</h3>

<pre class="brush: js">Reflect.has({x: 0}, 'x'); // true
Reflect.has({x: 0}, 'y'); // false

// 프로토타입 체인에 존재하는 속성도 true 반환
Reflect.has({x: 0}, 'toString');

// .has() 처리기 메서드를 가진 Proxy
obj = new Proxy({}, {
  has(t, k) { return k.startsWith('door'); }
});
Reflect.has(obj, 'doorbell'); // true
Reflect.has(obj, 'dormitory'); // false
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Reflect.has")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 연산자</a></li>
</ul>
