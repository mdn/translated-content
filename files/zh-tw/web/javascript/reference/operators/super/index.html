---
title: super
slug: Web/JavaScript/Reference/Operators/super
translation_of: Web/JavaScript/Reference/Operators/super
---
<div>{{jsSidebar("Operators")}}</div>

<p>super 關鍵字被使用於通過函式存取父層</p>

<p> <code>super.prop</code> 與 <code>super[expr]</code> 表達有效在 <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method definition</a> 與 <a href="/en-US/docs/Web/JavaScript/Reference/Classes">classes</a> 與 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object literals</a>.</p>

<h2 id="語法">語法</h2>

<pre class="syntaxbox">super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
</pre>

<h2 id="描述">描述</h2>

<p>當使用建構子，<code>super</code> 關鍵字必須出現在<code>this</code> 關鍵字之前使用，<code>super</code> 關鍵字也可以使用在呼叫函式與父對象</p>

<h2 id="範例">範例</h2>

<h3 id="在類別中使用_super">在類別中使用 <code>super</code> </h3>

<p>這個程式碼片段從 <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">classes sample</a> (<a href="https://googlechrome.github.io/samples/classes-es6/index.html">live demo</a>). 這裏的 <code>super()</code> 被呼叫去避免複製到建構子的 <code>Rectangle</code> 與 <code>Square</code> 的共通部分。</p>

<pre class="brush: js">class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}</pre>

<h3 id="Super-calling_靜態方法">Super-calling 靜態方法</h3>

<p>你也可以使用在<a href="/en-US/docs/Web/JavaScript/Reference/Classes/static">靜態</a>方法.</p>

<pre class="brush: js">class Rectangle {
  constructor() {}
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
</pre>

<h3 id="刪除_super_屬性將拋出錯誤">刪除 super 屬性將拋出錯誤</h3>

<p>你不能使用 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete operator</a> 以及 <code>super.prop</code> 以及 <code>super[expr]</code> 去刪除父層的類別屬性, 不然他會丟出一個錯誤 {{jsxref("ReferenceError")}}.</p>

<pre class="brush: js">class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'. </pre>

<h3 id="super.prop_不能複寫在不能複寫的屬性"><code>super.prop</code> 不能複寫在不能複寫的屬性</h3>

<p>當定義不可寫屬性，例如 {{jsxref("Object.defineProperty")}}, <code>super</code> 不能複寫這個屬性的值.</p>

<pre class="brush: js">class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // Cannot overwrite the value.
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
</pre>

<h3 id="使用_super.prop_在對象符號">使用 <code>super.prop</code> 在對象符號</h3>

<p>Super 可以使用在 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer / literal</a> 符號. 在這個範例, 有兩個對象定義在一個方法. 在第二個對象裡面, <code>super</code> 呼叫了第一個對象的方法. 這個動作幫助 {{jsxref("Object.setPrototypeOf()")}} 讓我們可以設定原型 <code>obj2</code> to <code>obj1</code>, 所以 <code>super</code> 可以發現 <code>method1</code> 在 <code>obj1</code>裡被找到.</p>

<pre class="brush: js">var obj1 = {
  method1() {
    console.log('method 1');
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

<h2 id="規格">規格</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("javascript.operators.super")}}</p>

<h2 id="參考">參考</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
 <li><a href="https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420">Anurag Majumdar - Super &amp; Extends in JavaScript</a></li>
</ul>
