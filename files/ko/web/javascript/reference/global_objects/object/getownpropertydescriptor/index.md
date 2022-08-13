---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
tags:
  - ECMAScript5
  - JavaScript
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<p><code><strong>Object.getOwnPropertyDescriptor()</strong></code> 메서드는 주어진 객체 <dfn>자신의 속성</dfn>(즉, 객체에 직접 제공하는 속성, 객체의 프로토타입 체인을 따라 존재하는 덕택에 제공하는 게 아닌)에 대한 속성 설명자(descriptor)를 반환합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code>Object.getOwnPropertyDescriptor(<var>obj</var>, <var>prop</var>)</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>속성을 찾을 대상 객체.</dd>
 <dt><code>prop</code></dt>
 <dd>설명이 검색될 속성명.</dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>객체에 존재하는 경우 주어진 속성의 속성 설명자, 없으면 {{jsxref("undefined")}}.</p>

<h2 id="설명">설명</h2>

<p>이 메서드는 정확한 속성 설명의 검사를 허용합니다. JavaScript에서 <dfn>속성</dfn>은 문자열 값인 이름과 속성 설명자로 구성됩니다. 속성 설명자 유형과 attribute에 관한 자세한 정보는 {{jsxref("Object.defineProperty()")}}에서 찾을 수 있습니다.</p>

<p><dfn>속성 설명자</dfn>는 다음 attribute 중 일부의 기록입니다:</p>

<dl>
 <dt><code>value</code></dt>
 <dd>속성과 관련된 값 (데이터 설명자만).</dd>
 <dt><code><strong>writable</strong></code></dt>
 <dd>속성과 관련된 값이 변경될 수 있는 경우에만 <code>true</code> (데이터 설명자만).</dd>
 <dt><code>get</code></dt>
 <dd>속성에 대해 getter로서 제공하는 함수 또는 getter가 없는 경우 {{jsxref("undefined")}} (접근자 설명자만).</dd>
 <dt><code>set</code></dt>
 <dd>속성에 대해 setter로서 제공하는 함수 또는 setter가 없는 경우 {{jsxref("undefined")}} (접근자 설명자만).</dd>
 <dt><code>configurable</code></dt>
 <dd>이 속성 설명자의 유형이 바뀔 수 있는 경우에만 그리고 속성이 해당 객체에서 삭제될 수 있는 경우 <code>true</code>.</dd>
 <dt><code>enumerable</code></dt>
 <dd>이 속성이 해당 객체의 속성 열거 중에 나타나는 경우에만 <code>true</code>.</dd>
</dl>

<h2 id="예">예</h2>

<pre class="brush: js">var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d는 { configurable: true, enumerable: true, get: /* getter 함수 */, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, 'bar');
// d는 { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, 'baz', { value: 8675309, writable: false, enumerable: false });
d = Object.getOwnPropertyDescriptor(o, 'baz');
// d는 { value: 8675309, writable: false, enumerable: false, configurable: false }
</pre>

<h2 id="주의">주의</h2>

<p>ES5에서, 이 메서드의 첫 번째 인수가 비객체(원시형)인 경우, 그러면 {{jsxref("TypeError")}}가 발생합니다. ES6에서, 비객체 첫 번째 인수는 먼저 객체로 강제됩니다.</p>

<pre class="brush: js">Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo"는 객체가 아닙니다  // ES5 코드

Object.getOwnPropertyDescriptor("foo", 0);
// {configurable:false, enumerable:true, value:"f", writable:false}  // ES6 코드
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("javascript.builtins.Object.getOwnPropertyDescriptor")}}

<h2 id="참조">참조</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>
