---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.getOwnPropertyNames
---
<div>{{JSRef}}</div>

<p><strong><code>Object.getOwnPropertyNames()</code></strong> 메서드는 전달된 객체의 모든 속성 (심볼을 사용하는 속성을 제외한 열거할 수 없는 속성 포함) 들을 배열로 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}</div>

<h2 id="Syntax">구문</h2>

<pre class="brush: js">Object.getOwnPropertyNames(<var>obj</var>)</pre>

<h3 id="Parameters">매개변수</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>반환 받을 열거형 속성과 열거형이 아닌 속성을 가진 객체</dd>
</dl>

<h3 id="Return_value">반환 값</h3>

<p>전달된 객체에 있는 속성들의 문자열 배열을 반환합니다.</p>

<h2 id="Description">설명</h2>

<p><code>Object.getOwnPropertyNames()</code> 는 전달된 객체(<code><var>obj</var></code>)의 열거형 및 열거할 수 없는 속성들을 문자열 배열로 반환합니다.
    배열의 열거할 수 있는 속성들의 순서는 {{jsxref("Statements/for...in", "for...in")}} 반복문 (또는 {{jsxref("Object.keys()")}})이 처리되는 순서와 일치합니다.
    ES6 문법에 따라, 객체의 정수형 키 (열거형 및 비-열거형 포함)가 먼저 배열에 오름차순으로 추가된 다음 문자열 키를 삽입하는 순서로 추가됩니다.</p>
<p>ES5에서는 인수(<code><var>obj</var></code>)가 객체가 아닌 경우 (원시 타입) {{jsxref("TypeError")}} 가 발생합니다.
ES2015에서는, 객체가 아닌 인수를 객체 타입으로 강제 형변환합니다.
</p>

<pre class="brush: js">Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)
</pre>

<h2 id="Examples">예시</h2>

<h3 id="Using_Object.getOwnPropertyNames">Using Object.getOwnPropertyNames()</h3>

<pre class="brush: js">var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() 는 배열 메서드입니다.
// logs ["0", "1", "2", "length"]

// 배열형 객체
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() 는 배열 메서드입니다.
// logs ["0", "1", "2"]

// 속성 명과 속성 값을 Array.forEach 메서드를 사용하여 로깅합니다.
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
    console.log(val + ' -&gt; ' + obj[val]);
  }
);
// logs
// 0 -&gt; a
// 1 -&gt; b
// 2 -&gt; c

// 열거할 수 없는 속성
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// logs ["foo", "getFoo"]
</pre>

<p>만약 열거 가능한 속성만 사용한다면, {{jsxref("Object.keys()")}} 또는 {{jsxref("Statements/for...in", "for...in")}} 반복문을 사용하는걸 권장합니다.
    (이는 객체의 프로토타입 체인을 먼저 사용하여 열거 가능한 속성을 반환합니다. 단, 후자는{{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}에 필터 됩니다.)
</p>

<p>프로토타입 체인에 있는 요소들은 나열되지 않음:</p>

<pre class="brush: js">function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
);
</pre>

<h3 id="Get_non-enumerable_properties_only">열거할 수 없는 속성만 가져오기</h3>

<p>이 방법은 {{jsxref("Array.prototype.filter()")}} 함수를 사용해 (<code>Object.getOwnPropertyNames()</code> 을 통해 얻은) 모든 키 중 ({{jsxref("Object.keys()")}} 을 통해 얻은) 열거 가능한 키들을 제거하여 열거할 수 없는 키들만 출력합니다.</p>

<pre class="brush: js">var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // enum_only 에 키 값이 없다는 것은
    // 그 키가 열거할 수 없는 키 임을 의미합니다.
    // 그래서 이 필터에서 true를 반환합니다.
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
 <li><code>Object.getOwnPropertyNames</code> 의 폴리필 코드는 아래에서 확인 할 수 있습니다. <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Array.forEach()")}}</li>
</ul>
