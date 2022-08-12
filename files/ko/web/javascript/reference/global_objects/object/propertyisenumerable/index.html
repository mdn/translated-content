---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---
<div>{{JSRef}}</div>

<p><code><strong>propertyIsEnumerable()</strong></code> 메서드는 특정 속성이 열거가능한지 여부를 나타내는 불리언 값을 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code><var>obj</var>.propertyIsEnumerable(<var>prop</var>)</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>테스트 할 속성의 이름.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>특정 속성이 열거가능한지 여부를 나타내는 {{jsxref("Boolean")}}.</p>

<h2 id="설명">설명</h2>

<p>모든 객체는 <code>propertyIsEnumerable</code> 메소드를 가지고 있습니다. 이 메소드는 프로토타입 체인을 통해 상속된 특성을 제외하고 개체에 지정된 속성을 {{jsxref("Statements/for...in", "for...in")}} 루프로 열거할 수 있는지 여부를 확인할 수 있습니다. 개체에 지정된 속성이 없으면 이 메소드는 <code>false</code>를 반환합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="A_basic_use_of_propertyIsEnumerable">A basic use of <code>propertyIsEnumerable</code></h3>

<p>The following example shows the use of <code>propertyIsEnumerable</code> on objects and arrays:</p>

<pre class="brush: js">var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop');   // returns true
a.propertyIsEnumerable(0);        // returns true
</pre>

<h3 id="User-defined_versus_built-in_objects">User-defined versus built-in objects</h3>

<p>The following example demonstrates the enumerability of user-defined versus built-in properties:</p>

<pre class="brush: js">var a = ['is enumerable'];

a.propertyIsEnumerable(0);          // returns true
a.propertyIsEnumerable('length');   // returns false

Math.propertyIsEnumerable('random');   // returns false
this.propertyIsEnumerable('Math');     // returns false
</pre>

<h3 id="Direct_versus_inherited_properties">Direct versus inherited properties</h3>

<pre class="brush: js">var a = [];
a.propertyIsEnumerable('constructor');         // returns false

function firstConstructor() {
  this.property = 'is not enumerable';
}

firstConstructor.prototype.firstMethod = function() {};

function secondConstructor() {
  this.method = function method() { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = 'is enumerable';

o.propertyIsEnumerable('arbitraryProperty');   // returns true
o.propertyIsEnumerable('method');              // returns true
o.propertyIsEnumerable('property');            // returns false

o.property = 'is enumerable';

o.propertyIsEnumerable('property');            // returns true

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iteratable with for-in)
o.propertyIsEnumerable('prototype');   // returns false (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable('constructor'); // returns false
o.propertyIsEnumerable('firstMethod'); // returns false
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Object.propertyIsEnumerable")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li>{{jsxref("Statements/for...in", "for...in")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
