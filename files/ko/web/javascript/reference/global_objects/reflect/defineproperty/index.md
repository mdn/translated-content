---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
---
<div>{{JSRef}}</div>

<p><code><strong>Reflect</strong></code><strong><code>.defineProperty()</code></strong> 정적 메서드는 {{jsxref("Object.defineProperty()")}}와 같은 동작을 하지만 {{jsxref("Boolean")}}을 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">Reflect.defineProperty(<em>target</em>, <em>propertyKey</em>, <em>attributes</em>)
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>속성을 정의할 대상 객체.</dd>
 <dt><code>propertyKey</code></dt>
 <dd>정의하거나 수정할 속성의 이름.</dd>
 <dt><code>attributes</code></dt>
 <dd>정의하거나 수정하는 속성을 기술하는 객체.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>속성이 성공적으로 정의됐는지 나타내는 {{jsxref("Boolean")}}.</p>

<h3 id="예외">예외</h3>

<p><code>target</code>이 {{jsxref("Object")}}가 아니면 {{jsxref("TypeError")}}.</p>

<h2 id="설명">설명</h2>

<p><code>Reflect.defineProperty</code> 메서드는 객체에 속성을 정교하게 추가하거나 수정할 수 있습니다. 자세한 내용은 유사한 메서드인 {{jsxref("Object.defineProperty")}}를 참고하세요. <code>Object.defineProperty</code>는 성공 시 대상 객체를 반환하고 실패하면 {{jsxref("TypeError")}}를 던지지만, <code>Reflect.defineProperty</code>는 성공 여부를 나타내는 {{jsxref("Boolean")}}을 반환합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="Reflect.defineProperty()_사용하기"><code>Reflect.defineProperty()</code> 사용하기</h3>

<pre class="brush: js">var obj = {};
Reflect.defineProperty(obj, 'x', {value: 7}); // true
obj.x; // 7
</pre>

<h3 id="속성_정의의_성공_여부_알아내기">속성 정의의 성공 여부 알아내기</h3>

<p>{{jsxref("Object.defineProperty")}}는 성공 시 객체를 반환하고, 실패 시 {{jsxref("TypeError")}}를 던지므로 속성 정의 과정에 발생할 수 있는 오류를 <code><a href="/ko/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code> 블록으로 잡아야 합니다. 반면 <code>Reflect.defineProperty</code>는 성공 여부를 나타내는 {{jsxref("Boolean")}}을 반환하므로, 간단하게 <code><a href="/ko/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code> 블록만 사용하면 됩니다.</p>

<pre class="brush: js">if (Reflect.defineProperty(target, property, attributes)) {
  // 성공
} else {
  // 실패
}</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Reflect.defineProperty")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
