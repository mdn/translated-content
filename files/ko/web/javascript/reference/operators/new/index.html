---
title: new operator
slug: Web/JavaScript/Reference/Operators/new
tags:
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/new
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong><code>new</code> 연산자</strong>는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.</p>

<p>{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}</p>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">new <em>constructor</em>[([<em>arguments</em>])]</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>constructor</code></dt>
 <dd>객체 인스턴스의 타입을 기술(명세)하는 함수</dd>
</dl>

<dl>
 <dt><code>arguments</code></dt>
 <dd><code>constructor</code>와 함께 호출될 값 목록</dd>
</dl>

<h2 id="설명">설명</h2>

<p>사용자 정의 객체를 생성에는 두 단계가 필요하다:</p>

<ol>
 <li>함수를 작성하여 객체 타입을 정의한다.</li>
 <li><code>new</code> 연산자로 객체의 인스턴스를 생성한다.</li>
</ol>

<p>객체의 타입을 정의하기 위해, 객체의 이름과 속성을 명세하는 함수를 만든다. 객체는 그 자체가 또 다른 객체인 속성을 가질 수 있다. 아래의 예를 본다.</p>

<p>코드 <code>new Foo(...)</code>가 실행될 때 다음과 같은 일이 발생한다:</p>

<ol>
 <li><code>Foo.prototype</code>을 상속하는 새로운 객체가 하나 생성된다.</li>
 <li>명시된 인자 그리고 새롭게 생성된 객체에 바인드된 this와 함께 생성자 함수 <code>Foo</code>가 호출된다.<code>new Foo</code>는 <code>new Foo()</code>와 동일하다. 즉 인자가 명시되지 않은 경우, 인자 없이 <code>Foo</code>가 호출된다.</li>
 <li>생성자 함수에 의해 리턴된 객체는 전체 <code>new</code> 호출 결과가 된다. 만약 생성자 함수가 명시적으로 객체를 리턴하지 않는 경우, 첫 번째 단계에서 생성된 객체가 대신 사용된다.(일반적으로 생성자는 값을 리턴하지 않는다. 그러나 일반적인 객체 생성을 재정의(override)하기 원한다면 그렇게 하도록 선택할 수 있다.)</li>
</ol>

<p>언제든 이전에 정의된 객체에 속성을 추가할 수 있다. 예를 들면, <code>car1.color = "black"</code> 구문은 <code>color</code> 속성을 <code>car1</code>에 추가하고 해당 속성에 "<code>black</code>"이란 값을 할당한다. 그러나, 이것이 다른 객체들에게는 영향을 주지 않는다. 동일한 타입의 모든 객체들에게 새로운 속성을 추가하려면, <code>Car</code> 객체 타입의 정의에 이 속성을 추가해야한다.</p>

<p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype">Function.prototype</a></code> 속성을 사용하여 이전에 정의된 객체 타입에 공유 속성을 추가할 수 있다. 이것은 객체 타입의 인스턴스 하나에만 적용되는 것이 아니라 이 함수로 생성하는 모든 객체와 공유하는 속성을 정의한다.</p>

<p>다음의 코드는 <code>car</code> 타입의 모든 객체에 "<code>original color</code>" 값을 갖는 color 속성을 추가한다. 그리고 <code>car1</code> 객체 인스턴스에서만 이 값을 문자열 "<code>black</code>"으로 덮어쓴다. 더 많은 정보는 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype">prototype</a>을 참조한다.</p>

<pre class="brush: js">function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = "original color";
console.log(car1.color);    // original color

car1.color = 'black';
console.log(car1.color);   // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color)  // black
console.log(car2.color) // original color
</pre>

<h2 id="예제">예제</h2>

<h3 id="객체_타입과_객체_인스턴스">객체 타입과 객체 인스턴스</h3>

<p>cars를 위한 객체 타입을 생성하기 원한다고 가정해 보자. 이 객체 타입이 <code>car</code>로 불리기 원하고, make, model, 그리고 year 속성을 갖게 하고 싶다. 이렇게 하기 위해서 다음과 같은 함수를 작성할 것이다:</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>이제 다음과 같이, <code>mycar</code>로 불리는 객체를 생성할 수 있다:</p>

<pre class="brush: js">var mycar = new Car("Eagle", "Talon TSi", 1993);
</pre>

<p>이 구문은 <code>mycar</code> 를 생성하고 명시한 값을 속성값으로 설정한다. 그래서 <code>mycar.make</code>의 값은 문자열 "Eagle"이고, <code>mycar.year</code>는 정수 1993이며 나머지도 마찬가지이다.</p>

<p><code>new</code>를 호출해서 얼마든지 <code>car</code> 객체를 생성할 수 있다. 예를 들면:</p>

<pre class="brush: js">var kenscar = new Car("Nissan", "300ZX", 1992);
</pre>

<h3 id="속성_그_자신이_다른_객체인_객체의_속성">속성 그 자신이 다른 객체인 객체의 속성</h3>

<p><code>person</code>이라고 불리는 객체를 다음과 같이 정의한다고 가정해보자:</p>

<pre class="brush: js">function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
</pre>

<p>그리고 다음과 같이 두 개의 <code>person</code> 객체 인스턴스를 새롭게 생성한다:</p>

<pre class="brush: js">var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
</pre>

<p>그런 다음 <code>owner</code> 속성을 포함하는 <code>car</code>의 정의를 다시 쓸 수 있다. 이 owner 속성은 다음과 같은 person 객체를 취한다:</p>

<pre class="brush: js">function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
</pre>

<p>새로운 객체의 인스턴스를 생성하기 위해 다음과 같이 사용한다:</p>

<pre class="brush: js">var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
</pre>

<p>새로운 객체를 생성할 때 문자열이나 숫자 값을 넘겨주는 대신에, 위의 구문은 owner를 위한 매개변수로 <code>rand</code>와 <code>ken</code> 객체를 넘겨준다. <code>car2</code>의 owner name을 확인해보기 위해서, 다음의 속성에 접근할 수 있다:</p>

<pre class="brush: js">car2.owner.name
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.operators.new")}}</p>

<h2 id="관련_문서">관련 문서</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
 <li>{{jsxref("Object.prototype")}}</li>
</ul>
