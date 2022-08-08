---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---
<div>{{JSRef}}</div>

<p><code><strong>hasOwnProperty()</strong></code> 메소드는 객체가 특정 프로퍼티를 가지고 있는지를  나타내는 불리언 값을 반환한다.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>obj</var>.hasOwnProperty(<var>prop</var>)</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>테스트하려는 프로퍼티의 명칭</dd>
</dl>

<h2 id="설명">설명</h2>

<p>모든 객체는 <code>hasOwnProperty</code> 를 상속하는 {{jsxref("Object")}}의 자식이다. 이 메소드는 객체가 특정 프로퍼티를 자기만의 직접적인 프로퍼티로서 소유하고 있는지를 판단하는데 사용된다.  {{jsxref("Operators/in", "in")}} 연산과는 다르게, 이 메소드는 객체의 프로토타입 체인을 확인하지는 않는다.</p>

<h2 id="예제">예제</h2>

<h3 id="프로퍼티의_존재_여부를_테스트하기_위한_hasOwnProperty의_사용">프로퍼티의 존재 여부를 테스트하기 위한 <code>hasOwnProperty</code>의 사용</h3>

<p>다음은 o 객체가 prop라는 명칭을 지닌 프로퍼티를 포함하는지를 판단하는 예제이다.</p>

<pre class="brush: js">o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // returns true
changeO();
o.hasOwnProperty('prop');   // returns false
</pre>

<h3 id="직접_프로퍼티와_상속된_프로퍼티의_비교">직접 프로퍼티와 상속된 프로퍼티의 비교</h3>

<p>다음은 직접 프로퍼티와 프로토타입 체인에서 상속된 프로퍼티 간의 차이점을 비교하는 예제이다.</p>

<pre class="brush: js">o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // returns true
o.hasOwnProperty('toString');         // returns false
o.hasOwnProperty('hasOwnProperty');   // returns false
</pre>

<h3 id="객체의_프로퍼티들을_순환하기">객체의 프로퍼티들을 순환하기</h3>

<p>The following example shows how to iterate over the properties of an object without executing on inherit properties. Note that the {{jsxref("Statements/for...in", "for...in")}} loop is already only iterating enumerable items, so one should not assume based on the lack of non-enumerable properties shown in the loop that <code>hasOwnProperty</code> itself is confined strictly to enumerable items (as with {{jsxref("Object.getOwnPropertyNames()")}}).</p>

<pre class="brush: js">var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
</pre>

<h3 id="프로퍼티의_명칭으로서_hasOwnProperty_를_사용하기">프로퍼티의 명칭으로서 <code>hasOwnProperty </code>를 사용하기</h3>

<p>자바스크립트는 프로퍼티 명칭으로서 <code>hasOwnProperty</code>를 보호하지 않습니다. 그러므로, 이 명칭을 사용하는 프로퍼티를 가지는 객체가 존재하려면,  올바른 결과들을 얻기 위해서는 외부 <code>hasOwnProperty</code> 를 사용해야합니다.</p>

<pre class="brush: js">var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use the hasOwnProperty property from the Object prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
</pre>

<p>Note that in the last case there are no newly created objects.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Object.hasOwnProperty")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Statements/for...in", "for...in")}}</li>
 <li>{{jsxref("Operators/in", "in")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Inheritance_Revisited">JavaScript Guide: Inheritance revisited</a></li>
</ul>
