---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---
<div>{{JSRef}}</div>

<p><code><strong>Reflect</strong></code><strong><code>.construct()</code></strong> 정적 메서드는 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> 연산자</a>처럼 동작하는 함수입니다. <code>new target(...args)</code>를 호출하는 것과 같습니다. 추가 기능으로 다른 프로토타입을 지정할 수도 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">Reflect.construct(<em>target</em>, <em>argumentsList</em>[, <em>newTarget</em>])
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>호출할 대상 함수.</dd>
 <dt><code>argumentsList</code></dt>
 <dd><code>target</code>의 매개변수로 전달할 배열형 객체.</dd>
 <dt><code>newTarget</code> {{optional_inline}}</dt>
 <dd>프로토타입으로 사용할 생성자. <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code> 연산자도 확인하세요. <code>newTarget</code>이 주어지지 않았을 땐 <code>target</code>을 사용합니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p><code>target</code>을 생성자로 하고 주어진 매개변수를 전달해 생성한 <code>target</code>(또는, 지정했다면 <code>newTarget</code>)의 새로운 인스턴스.</p>

<h3 id="예외">예외</h3>

<p><code>target</code> 또는 <code>newTarget</code>이 생성자가 아니면 {{jsxref("TypeError")}}.</p>

<h2 id="설명">설명</h2>

<p><code>Reflect.construct()</code>는 생성자를 가변 길이의 매개변수로 호출할 수 있습니다. (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> 연산자</a>와 <a href="/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax">전개 구문</a>을 사용해도 가능합니다)</p>

<pre class="brush: js">var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args);
</pre>

<h3 id="Reflect.construct()_vs_Object.create()"><code>Reflect.construct()</code> vs <code>Object.create()</code></h3>

<p><code>Reflect</code>의 도입 이전에는 임의의 생성자와 프로토타입에 {{jsxref("Object.create()")}}를 사용해 객체를 생성할 수 있었습니다.</p>

<pre class="brush: js">function OneClass() {
    this.name = 'one';
}

function OtherClass() {
    this.name = 'other';
}

// Calling this:
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
</pre>

<p>그러나, 결과는 동일하더라도 과정에는 중요한 차이가 하나 존재합니다. <code>Object.create()</code>와 {{jsxref("Function.prototype.apply()")}}를 사용할 땐, 객체 생성에 <code>new</code> 키워드가 관여하지 않으므로 <code>new.target</code> 연산자가 <code>undefined</code>를 가리킵니다.</p>

<p>반면 <code>Reflect.construct()</code>를 호출하면, <code>newTarget</code>이 존재하면 <code>new.target</code> 연산자가 <code>newTarget</code>을, 아니면 <code>target</code>을 가리킵니다.</p>

<pre class="brush: js">function OneClass() {
    console.log('OneClass');
    console.log(new.target);
}
function OtherClass() {
    console.log('OtherClass');
    console.log(new.target);
}

var obj1 = Reflect.construct(OneClass, args);
// Output:
//     OneClass
//     function OneClass { ... }

var obj2 = Reflect.construct(OneClass, args, OtherClass);
// Output:
//     OneClass
//     function OtherClass { ... }

var obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
</pre>

<h2 id="예제">예제</h2>

<h3 id="Reflect.construct()_사용하기"><code>Reflect.construct()</code> 사용하기</h3>

<pre class="brush: js">var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Reflect.construct")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code></li>
</ul>
