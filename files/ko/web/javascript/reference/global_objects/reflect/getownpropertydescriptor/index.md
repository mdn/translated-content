---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<p><code><strong>Reflect</strong></code><strong><code>.getOwnPropertyDescriptor()</code></strong> 정적 메서드는 객체에 주어진 속성이 존재하면, 해당 속성의 서술자를 반환합니다. {{jsxref("Object.getOwnPropertyDescriptor()")}}와 유사합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-getownpropertydescriptor.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">Reflect.getOwnPropertyDescriptor(<em>target</em>, <em>propertyKey</em>)
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>속성을 탐색할 객체.</dd>
 <dt><code>propertyKey</code></dt>
 <dd>자체 속성 서술자를 가져올 속성의 이름.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>대상 속성이 객체에 존재하면, 그 속성의 서술자. 존재하지 않으면 {{jsxref("undefined")}}.</p>

<h3 id="예제">예제</h3>

<p><code>target</code>이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.</p>

<h2 id="설명">설명</h2>

<p><code>Reflect.getOwnPropertyDescriptor</code> 메서드는 객체 속성의 서술자를 반환합니다. 만약 존재하지 않는 속성이라면 {{jsxref("undefined")}}를 대신 반환합니다. {{jsxref("Object.getOwnPropertyDescriptor()")}}와의 유일한 차이는 객체가 아닌 대상의 처리 방법입니다.</p>

<h2 id="예제_2">예제</h2>

<h3 id="Reflect.getOwnPropertyDescriptor()_사용하기"><code>Reflect.getOwnPropertyDescriptor()</code> 사용하기</h3>

<pre class="brush: js">Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'x');
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'y');
// undefined

Reflect.getOwnPropertyDescriptor([], 'length');
// {value: 0, writable: true, enumerable: false, configurable: false}
</pre>

<h3 id="Object.getOwnPropertyDescriptor()와의_차이점"><code>Object.getOwnPropertyDescriptor()</code>와의 차이점</h3>

<p><code>Reflect.getOwnPropertyDescriptor()</code>의 첫 번째 매개변수가 객체가 아니고 {{glossary("Primitive", "원시값")}}이라면 {{jsxref("TypeError")}}가 발생합니다. 반면 {{jsxref("Object.getOwnPropertyDescriptor()")}}는 같은 상황에서 값을 우선 객체로 변환합니다.</p>

<pre class="brush: js">Reflect.getOwnPropertyDescriptor('foo', 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor('foo', 0);
// { value: "f", writable: false, enumerable: true, configurable: false }</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Reflect.getOwnPropertyDescriptor")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
</ul>
