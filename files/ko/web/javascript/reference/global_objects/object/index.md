---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Constructor
  - JavaScript
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object
---
<div>{{JSRef}}</div>

<p><strong><code>Object</code></strong> 생성자는 객체 래퍼(wrapper)를 생성합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">// 객체 초기자 또는 리터럴
{ [ <var>nameValuePair1</var>[, <var>nameValuePair2</var>[, ...<var>nameValuePairN</var>] ] ] }

// 생성자
new Object([<var>value</var>])</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>nameValuePair1, nameValuePair2, ... nameValuePair<em>N</em></code></dt>
 <dd>콜론으로 나뉘어져 있는 키(문자열)와 값(어떤 값이나 가능)의 쌍.</dd>
 <dt><code>value</code></dt>
 <dd>아무 값.</dd>
</dl>

<h2 id="설명">설명</h2>

<p><code>Object</code> 생성자는 주어진 값의 객체 래퍼를 생성합니다. 주어진 값이 {{jsxref("null")}}이거나 {{jsxref("undefined")}}면 빈 객체를 생성해 반환하고, 그렇지 않으면 값에 맞는 자료형의 객체를 반환합니다. 만약 값이 이미 객체이면 그 값을 그대로 반환합니다.</p>

<p>생성자가 아닌 맥락에서 호출하면 <code>Object</code>는 <code>new Object()</code>와 동일하게 동작합니다.</p>

<p><a href="/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer">객체 초기자(리터럴 구문)</a>도 참고하세요.</p>

<h2 id="Object_생성자의_속성"><code>Object</code> 생성자의 속성</h2>

<dl>
 <dt><code>Object.length</code></dt>
 <dd>1의 값을 가집니다.</dd>
</dl>

<dl>
 <dt>{{jsxref("Object.prototype")}}</dt>
 <dd><code>Object</code> 형의 모든 객체에 속성을 추가할 수 있습니다.</dd>
</dl>

<h2 id="Object_생성자의_메서드"><code>Object</code> 생성자의 메서드</h2>

<dl>
 <dt>{{jsxref("Object.assign()")}}</dt>
 <dd>하나 이상의 원본 객체들로부터 모든 열거가능한 속성들을 대상 객체로 복사합니다.</dd>
 <dt>{{jsxref("Object.create()")}}</dt>
 <dd>주어진 프로토타입(prototype)의 객체와 속성들을 갖고 있는 새 객체를 생성합니다.</dd>
 <dt>{{jsxref("Object.defineProperty()")}}</dt>
 <dd>주어진 기술자(descriptor)에 의해 기술된(described) 이름붙은 속성을 객체에 추가합니다.</dd>
 <dt>{{jsxref("Object.defineProperties()")}}</dt>
 <dd>주어진 기술자들에 맞는 이름붙은 속성들을 객체에 추가합니다.</dd>
 <dt>{{jsxref("Object.freeze()")}}</dt>
 <dd>객체를 프리징(freeze)합니다. 즉, 다른 곳의 코드에서 객체의 속성을 지우거나 바꿀 수 없습니다.</dd>
 <dt>{{jsxref("Object.getOwnPropertyDescriptor()")}}</dt>
 <dd>객체의 이름붙은 속성의 기술자를 반환합니다.</dd>
 <dt>{{jsxref("Object.getOwnPropertyNames()")}}</dt>
 <dd>주어진 객체 <strong>자신만의</strong> 열거가능하거나 열거불가능한 속성들의 이름을 포함하는 배열(array)을 반환합니다.</dd>
 <dt>{{jsxref("Object.getOwnPropertySymbols()")}}</dt>
 <dd>주어진 객체에서 바로 찾을 수 있는 모든 심볼 속성을 배열로 반환합니다.</dd>
 <dt>{{jsxref("Object.getPrototypeOf()")}}</dt>
 <dd>명시된 객체의 프로토타입을 반환.</dd>
 <dt>{{jsxref("Object.is()")}}</dt>
 <dd>두 값이 같은지를 비교합니다. 모든 NaN 값은 같다고 처리됩니다.(다른 추상적 또는 엄격한 등호 비교에서는 다르게 처리됩니다)</dd>
 <dt>{{jsxref("Object.isExtensible()")}}</dt>
 <dd>객체의 확장이 가능한지 확인합니다.</dd>
 <dt>{{jsxref("Object.isFrozen()")}}</dt>
 <dd>객체가 프리징 되었는지 확인합니다.</dd>
 <dt>{{jsxref("Object.isSealed()")}}</dt>
 <dd>객체가 실링(seal) 되었는지 확인합니다.</dd>
 <dt>{{jsxref("Object.keys()")}}</dt>
 <dd>주어진 객체 <strong>자신의 </strong>열거가능한 속성들의 이름의 배열을 반환합니다.</dd>
 <dt>{{jsxref("Object.preventExtensions()")}}</dt>
 <dd>객체가 확장되는 것을 못하도록 합니다.</dd>
 <dt>{{jsxref("Object.seal()")}}</dt>
 <dd>다른 코드가 객체의 속성을 삭제하지 못하도록 합니다.</dd>
 <dt>{{jsxref("Object.setPrototypeOf()")}}</dt>
 <dd>프로토타입(즉, 내부의 <code>[[Prototype]]</code> 속성)을 설정합니다.</dd>
</dl>

<dl>
 <dt>{{jsxref("Object.values()")}}</dt>
 <dd>주어진 객체의 열거가능한 모든 스트링 속성들의 값들을 포함하고 있는 배열을 반환합니다.</dd>
</dl>

<h2 id="Object_instances"><code>Object</code> 인스턴스와 <code>Object</code> 프로토타입 객체</h2>

<p>JavaScript에서 모든 객체들은 <code>Object</code>의 자손입니다. 모든 객체는 {{jsxref("Object.prototype")}}으로부터 메서드와 속성을 상속하는데, 나중에 덮어 쓸 수도 있습니다. 예를 들어, 다른 생성자의 프로토타입은 그 <code>constructor</code> 속성을 덮어쓰고 자신의 <code>toString()</code> 메소드들을 제공합니다. <code>Object</code> 프로토타입 객체에 대한 변경 내용은  그 변경 내용에 영향을 받는 속성들과 메소드들이 프로토타입 체인(chain)을 따라 더이상 무시되지 않는한,  모든 객체들로 전달됩니다.</p>

<h3 id="속성">속성</h3>

<div>{{page('/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', '속성') }}</div>

<h3 id="메서드">메서드</h3>

<div>{{page('/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', '메서드') }}</div>

<h2 id="Examples">예제</h2>

<h3 id="Example.3A_Using_Object_given_undefined_and_null_types"><code>undefined</code>와 <code>null</code>을 지정</h3>

<p>다음 예제는 변수 <code>o</code>에 빈 <code>Object</code> 객체를 저장합니다.</p>

<pre class="brush: js">var o = new Object();
</pre>

<pre class="brush: js">var o = new Object(undefined);
</pre>

<pre class="brush: js">var o = new Object(null);
</pre>

<h3 id="Object로_Boolean_객체_생성하기"><code>Object</code>로 <code>Boolean</code> 객체 생성하기</h3>

<p>다음 예제는 변수 <code>o</code>에 {{jsxref("Boolean")}} 객체를 저장합니다.</p>

<pre class="brush: js">// o = new Boolean(true)과 같음
var o = new Object(true);
</pre>

<pre class="brush: js">// o = new Boolean(false)과 같음
var o = new Object(Boolean());
</pre>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Initial definition. Implemented in JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2', 'Object')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object-objects', 'Object')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Added Object.assign, Object.getOwnPropertySymbols, Object.setPrototypeOf, Object.is</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-objects', 'Object')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Added Object.entries, Object.values and Object.getOwnPropertyDescriptors.</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("javascript.builtins.Object")}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
