---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---
<div>{{JSRef}}</div>

<p><code><strong>Object.defineProperty()</strong></code> 정적 메서드는 객체에 직접 새로운 속성을 정의하거나 이미 존재하는 속성을 수정한 후, 그 객체를 반환합니다.</p>

<div class="blockIndicator note">
<p><strong>참고:</strong> <code>defineProperty</code>는 {{jsxref("Object")}} 인스턴스가 아니라 생성자에서 바로 호출해야 합니다.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code>Object.defineProperty(<var>obj</var>, <var>prop</var>, <var>descriptor</var>)</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>속성을 정의할 객체.</dd>
 <dt><code>prop</code></dt>
 <dd>새로 정의하거나 수정하려는 속성의 이름 또는 {{jsxref("Symbol")}}.</dd>
 <dt><code>descriptor</code></dt>
 <dd>새로 정의하거나 수정하려는 속성을 기술하는 객체.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>주어진 대상 <code>obj</code>.</p>

<h2 id="설명">설명</h2>

<p><code>defineProperty</code>는 객체의 속성을 정교하게 추가하거나 수정할 수 있습니다. 할당을 통해 속성을 추가하는 일반적인 방법을 사용하면 속성 열거({{jsxref("Statements/for...in", "for...in")}} 반복문이나 {{jsxref("Object.keys")}} 메서드)를 통해 노출되어 값을 변경하거나 {{jsxref("Operators/delete", "delete")}} 연산자로 삭제할 수 있습니다. <code>defineProperty</code>를 사용하면 이런 부분을 상세하게 조절할 수 있습니다. <code>Object.defineProperty()</code>로 추가한 속성은 기본적으로 불변합니다.</p>

<p>속성 서술자는 객체로 나타내며 데이터 서술자(data descriptors)와 접근자 서술자(accessor descriptors)의 두 가지 유형을 갖습니다. 데이터 서술자는 값을 가지는 속성으로, 덮어쓰거나 쓸 수 없습니다. 접근자 서술자는 접근자(getter)-설정자(setter) 한 쌍을 가지는 속성입니다. 서술자는 두 유형 중 하나여야 하며, 동시에 두 유형일 수는 없습니다.</p>

<p>데이터 서술자와 접근자 서술자 모두 객체이며 다음과 같은 키를 공유합니다.</p>

<dl>
 <dt><code>configurable</code></dt>
 <dd>이 속성의 값을 변경할 수 있고, 대상 객체에서 삭제할 수도 있다면 <code>true</code>.<br>
 기본값은<strong> </strong><code>false</code>.</dd>
 <dt><code>enumerable</code></dt>
 <dd>이 속성이 대상 객체의 속성 열거 시 노출된다면 <code>true</code>.<br>
 기본값은<strong> </strong><code>false</code>.</dd>
</dl>

<p>데이터 서술자는 다음 키를 선택사항으로 가집니다.</p>

<dl>
 <dt><code>value</code></dt>
 <dd>속성에 연관된 값. 아무 유효한 JavaScript 값(숫자, 객체, 함수 등)이나 가능합니다.<br>
 기본값은 {{jsxref("undefined")}}</dd>
 <dt><code>writable</code></dt>
 <dd>{{jsxref("Operators/Assignment_Operators", "할당 연산자", "", 1)}}로 속성의 값을 바꿀 수 있다면 <code>true</code>.<br>
 기본값은<strong> </strong><code>false</code>.</dd>
</dl>

<p>접근자 서술자는 다음 키를 선택사항으로 가집니다.</p>

<dl>
 <dt><code>get</code></dt>
 <dd>속성 접근자로 사용할 함수, 접근자가 없다면 {{jsxref("undefined")}}. 속성에 접근하면 이 함수를 매개변수 없이 호출하고, 그 반환값이 속성의 값이 됩니다. 이 때 <code>this</code> 값은 이 속성을 가진 객체(상속으로 인해 원래 정의한 객체가 아닐 수 있음)입니다.<br>
 기본값은 {{jsxref("undefined")}}.</dd>
 <dt><code>set</code></dt>
 <dd>속성 설정자로 사용할 함수, 설정자가 없다면 {{jsxref("undefined")}}. 속성에 값을 할당하면 이 함수를 하나의 매개변수(할당하려는 값)로 호출합니다. 이 때 <code>this</code> 값은 이 속성을 가진 객체입니다.<br>
 기본값은 {{jsxref("undefined")}}.</dd>
</dl>

<p>서술자가 <code>value</code>, <code>writable</code>, <code>get</code>, <code>set</code> 키를 모두 지니고 있지 않으면 데이터 서술자로 간주합니다. 반면 <code>value</code> 또는 <code>writable</code>과 동시에 <code>get</code> 또는 <code>set</code> 키를 함께 가지고 있으면 오류가 발생합니다.</p>

<p>각 설정값이 서술자 스스로의 속성일 필요는 없습니다. 따라서 서술자가 상속받은 값도 영향을 줍니다. 기본 설정값을 확실하게 보존하려면 {{jsxref("Object.prototype")}}을 먼저 동결하거나, 모든 속성을 명시적으로 지정하거나, {{jsxref("Object.create", "Object.create(null)")}}로 {{jsxref("null")}}을 가리키세요.</p>

<pre class="brush: js">// __proto__ 사용
var obj = {};
var descriptor = Object.create(null); // 상속받은 속성 없음
// 기본으로 열거 불가, 설정 불가, 변경 불가
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// 명시적
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// 같은 객체를 재활용하기
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}
Object.defineProperty(obj, 'key', withValue('static'));

// Object.freeze가 존재하면
// 속성의 추가/제거 방지
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
</pre>

<h2 id="예제">예제</h2>

<p>이진 플래그 형태로 <code>defineProperty</code>를 사용하는 예제는 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples">additional examples</a>에 있습니다.</p>

<h3 id="속성_생성하기">속성 생성하기</h3>

<p><code>Object.defineProperty()</code>는 지정한 속성이 객체에 존재하지 않으면 주어진 서술자를 사용해 새로 생성합니다. 서술자의 일부 항목은 생략 가능하며, 생략한 항목은 기본값을 대신 사용합니다.</p>

<pre class="brush: js">var o = {}; // 새로운 객체 생성

// 데이터 속성 서술자와 defineProperty로
// 새로운 속성을 추가하는 예시
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a' 속성이 o 객체에 존재하고 값은 37

// 접근자 속성 기술자와 defineProperty로
// 새로운 속성을 추가하는 예시
var bValue = 38;
Object.defineProperty(o, 'b', {
  // ES2015 단축 메서드명 사용
  // 아래 코드와 같음
  // get: function() { return bValue; }
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' 속성이 o 객체에 존재하고 값은 38
// o.b를 재정의하지 않는 이상
// o.b의 값은 항상 bValue와 동일함

// 두 가지를 혼용할 수 없음
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get: function() { return 0xdeadbeef; }
});
// TypeError 발생
// value는 데이터 서술자에만,
// get은 접근자 서술자에만 나타날 수 있음</pre>

<h3 id="속성_수정하기">속성 수정하기</h3>

<p><code>ObjectdefineProperty()</code>는 지정한 속성이 객체에 이미 존재하면 주어진 서술자와 객체의 기존 설정을 사용해 속성의 수정을 시도합니다. 기존 속성 서술자의 <code>configurable</code>이 <code>false</code>이면 속성이 "설정 불가능"하다고 말하고, 이 속성의 어떤 특성도 수정할 수 없습니다. 다만 쓰기 가능한 데이터 속성의 경우 값을 바꾸거나 <code>writable</code> 특성을 <code>true</code>에서 <code>false</code>로 바꾸는건 가능합니다. 속성이 설정 불가능한 경우 속성의 유형을 데이터에서 접근자, 또는 접근자에서 데이터로 바꿀 수 없습니다.</p>

<p>설정 불가능한 속성의 특성을 바꾸려고 시도하면 {{jsxref("TypeError")}}가 발생합니다. 단, 기존 값과 신규 값이 같은 경우, 혹은 쓰기 가능한 속성의 <code>value</code>와 <code>writable</code>은 수정할 수 있습니다.</p>

<h4 id="writable_특성"><code>writable</code> 특성</h4>

<p>속성의 <code>writable</code> 특성이 <code>false</code>인 경우는 "쓰기 불가능"하여 다시 할당할 수 없습니다.</p>

<pre class="brush: js">var o = {}; // 새로운 객체 생성

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // 37 기록
o.a = 25; // 오류 발생하지 않음
// 엄격 모드에서는 값이 같더라도
// 오류가 발생함
console.log(o.a); // 37 기록, 할당하지 못했음

// 엄격 모드
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // TypeError: "b" is read-only
  return o.b; // 윗줄이 없다면 2 반환
}());
</pre>

<p>위의 예제가 보이듯, 비엄격 모드에서는 쓰기 불가능한 속성의 값에 쓰려고 시도하면 값이 바뀌지 않고, 오류도 발생하지도 않습니다.</p>

<h4 id="Enumerable_속성">Enumerable 속성</h4>

<p><code>enumerable</code>은 해당 속성이 {{jsxref("Statements/for...in", "for...in")}} 루프나 {{jsxref("Object.keys()")}} 에서 노출될지 말지를 정의한다.</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true
         // when creating a property by setting it
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
</pre>

<h4 id="Configurable_속성">Configurable 속성</h4>

<p><code>configurable</code> 은 객체에서 해당키가 제거될 수 있는지와 (<code>writable</code>을 제외한)기술속성을 변경할 수 있는지에 대한 여부를 동시에 통제한다.</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {}
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12
}); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
</pre>

<p>o.a의 configurable 가 true라면, 위의 예외는 발생하지 않고 속성은 마지막에 제거되었을 것이다.</p>

<h3 id="속성에_기본값_추가하기">속성에 기본값 추가하기</h3>

<p>속성을 정의할 때 기본값을 제공하는 방식은 중요하다. 간단히 점구문을 이용해 할당한 값과 <code>Object.defineProperty</code>를 사용한 경우는 꽤 다르다. 아래 예를 보자.</p>

<pre class="brush: js">var o = {};

o.a = 1;
// 위의 표현은 아래와 같다:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});


// 만약 다음과 같이 표현한다면,
Object.defineProperty(o, 'a', { value: 1 });
// 아래의 의미를 지니게 된다:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});
</pre>

<h3 id="사용자_정의_Setters_와_Getters">사용자 정의 Setters 와 Getters</h3>

<p>아래의 예는 어떻게 스스로 변화를 기록해두는 객체를 만드는지 보여준다. <code>temperature</code> 속성의 값을 바꾸면 <code>archive</code> 배열에도 로그가 쌓인다.</p>

<pre class="brush: js">function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
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
   <td>{{SpecName('ES5.1', '#sec-15.2.3.6', 'Object.defineProperty')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Initial definition. Implemented in JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.defineproperty', 'Object.defineProperty')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.defineproperty', 'Object.defineProperty')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("javascript.builtins.Object.defineProperty")}}</p>

<h2 id="호환성_참고사항">호환성 참고사항</h2>

<h3 id="Redefining_the_length_property_of_an_Array_object">Redefining the <code>length</code> property of an <code>Array</code> object</h3>

<p>It is possible to redefine the {{jsxref("Array.length", "length")}} property of arrays, subject to the usual redefinition restrictions. (The {{jsxref("Array.length", "length")}} property is initially non-configurable, non-enumerable, and writable. Thus on an unaltered array it is possible to change the {{jsxref("Array.length", "length")}} property's value, or to make it non-writable. It is not allowed to change its enumerability or configurability, or if it is non-writable to change its value or writability.) However, not all browsers permit this redefinition.</p>

<p>Firefox 4 through 22 will throw a {{jsxref("Global_Objects/TypeError", "TypeError")}} on any attempt whatsoever (whether permitted or not) to redefine the {{jsxref("Array.length", "length")}} property of an array.</p>

<p>Versions of Chrome which implement <code>Object.defineProperty()</code> in some circumstances ignore a length value different from the array's current {{jsxref("Array.length", "length")}} property. In some circumstances changing writability seems to silently not work (and not throw an exception). Also, relatedly, some array-mutating methods like {{jsxref("Array.prototype.push")}} don't respect a non-writable length.</p>

<p>Versions of Safari which implement <code>Object.defineProperty()</code> ignore a <code>length</code> value different from the array's current {{jsxref("Array.length", "length")}} property, and attempts to change writability execute without error but do not actually change the property's writability.</p>

<p>Only Internet Explorer 9 and later, and Firefox 23 and later, appear to fully and correctly implement redefinition of the {{jsxref("Array.length", "length")}} property of arrays. For now, don't rely on redefining the {{jsxref("Array.length", "length")}} property of an array to either work, or to work in a particular manner. And even when you <em>can</em> rely on it, <a href="http://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/">there's really no good reason to do so</a>.</p>

<h3 id="Internet_Explorer_8_specific_notes">Internet Explorer 8 specific notes</h3>

<p>Internet Explorer 8 implemented a <code>Object.defineProperty()</code> method that could <a class="external" href="http://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx">only be used on DOM objects</a>. A few things need to be noted:</p>

<ul>
 <li>Trying to use <code>Object.defineProperty()</code> on native objects throws an error.</li>
 <li>Property attributes must be set to some values. <code>Configurable</code>, <code>enumerable</code> and <code>writable</code> attributes should all be set to <code>true</code> for data descriptor and <code>true</code> for <code>configurable</code>, <code>false</code> for <code>enumerable</code> for accessor descriptor.(?) Any attempt to provide other value(?) will result in an error being thrown.</li>
 <li>Reconfiguring a property requires first deleting the property. If the property isn't deleted, it stays as it was before the reconfiguration attempt.</li>
</ul>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li>{{jsxref("Object.defineProperties()")}}</li>
 <li>{{jsxref("Object.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Object.prototype.watch()")}}</li>
 <li>{{jsxref("Object.prototype.unwatch()")}}</li>
 <li>{{jsxref("Operators/get", "get")}}</li>
 <li>{{jsxref("Operators/set", "set")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples">Additional <code>Object.defineProperty</code> examples</a></li>
</ul>
