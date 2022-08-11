---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
  - Classes
  - JavaScript
  - Left-hand-side expressions
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/super
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>super</strong> 키워드는 부모 오브젝트의 함수를 호출할 때 사용됩니다.</p>

<p><code>super.prop</code> 와 <code>super[expr]</code> 표현식은 <a href="/ko/docs/Web/JavaScript/Reference/Classes">클래스</a> 와 <a href="/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer">객체리터럴</a>의 어떠한 <a href="/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions">메서드 정의</a> 방법에서도 유효합니다.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">super([arguments]); // 부모 생성자 호출
super.functionOnParent([arguments]);
</pre>

<h2 id="설명">설명</h2>

<p>생성자에서는 <code>super</code> 키워드 하나만 사용되거나 <code>this</code> 키워드가 사용되기 전에 호출되어야 합니다. 또한 <code>super</code> 키워드는 부모 객체의 함수를 호출하는데 사용될 수 있습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="클래스에서_super_사용하기">클래스에서 <code>super</code> 사용하기</h3>

<p>이 예제는 옆의 링크에서 발췌하였습니다. <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">classes sample</a> (<a href="https://googlechrome.github.io/samples/classes-es6/index.html">live demo</a>).</p>

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // 참조오류가 발생합니다. super가 먼저 호출되어야 합니다.

    // 여기서, 부모클래스의 생성자함수를 호출하여 높이값을 넘겨줍니다.
    // Polygon의 길이와 높이를 넘겨줍니다.
    super(length, length);

    // 참고: 파생 클래스에서 super() 함수가 먼저 호출되어야
    // 'this' 키워드를 사용할 수 있습니다. 그렇지 않을 경우 참조오류가 발생합니다.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}</pre>

<h3 id="정적_메서드에서_Super_호출">정적 메서드에서 Super 호출</h3>

<p><a href="/ko/docs/Web/JavaScript/Reference/Classes/static">static</a> 메서드에서도 super를 호출할 수 있습니다.</p>

<pre class="brush: js">class Human {
  constructor() {}
  static ping() {
    return 'ping';
  }
}

class Computer extends Human {
  constructor() {}
  static pingpong() {
    return super.ping() + ' pong';
  }
}
Computer.pingpong(); // 'ping pong'
</pre>

<h3 id="super의_속성_삭제">super의 속성 삭제</h3>

<p><a href="/ko/docs/Web/JavaScript/Reference/Operators/delete">delete 연산자</a>를 사용할 수 없으며 <code>super.prop</code> 또는 <code>super[expr]</code> 표현식을 사용하여 부모 클래스의 속성을 삭제할 경우 {{jsxref("ReferenceError")}} 오류가 발생합니다.</p>

<pre class="brush: js">class Base {
  constructor() {}
  foo() {}
}
class Derived {
  constructor() {}
  delete() {
    delete super.foo;
  }
}

new Derived().delete(); // 참조오류: 'super'완 관련된 삭제가 유효하지 않습니다. </pre>

<h3 id="Super.prop은_non-writable_속성을_덮어_쓸_수_없습니다"><code>Super.prop</code>은 non-writable 속성을 덮어 쓸 수 없습니다</h3>

<p>예를 들어 {{jsxref("Object.defineProperty")}}로 속성을 정의할 때, <code>super</code>의 속성 값을 덮어 쓸 수 없습니다.</p>

<pre class="brush: js">class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1
    });
  }
  f() {
    super.prop = 2;
  }
}

var x = new X();
x.f();
console.log(x.prop); // 1
</pre>

<h3 id="객체_리터럴에서_super.prop_사용하기">객체 리터럴에서 <code>super.prop</code> 사용하기</h3>

<p>Super는 <a href="/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer / literal</a> 표기법에서 사용할 수 있습니다. 아래의 예제에서, 두개의 객체는 메서드를 정의합니다. 두번째 객체에서, <code>super</code>는  첫번째 객체의 메서드를 호출합니다. 이 예제는 {{jsxref("Object.setPrototypeOf()")}}를 이용하여  obj2 prototype에 obj1을 세팅하여, <code>super</code>가 obj1의 method1을 찾을 수 있도록 합니다.</p>

<pre class="brush: js">var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.operators.super")}}</p>

<h2 id="참고">참고</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
