---
title: 继承与原型链
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
---

{{jsSidebar("Advanced")}}

对于使用过基于类的语言 (如 Java 或 C++) 的开发者们来说，JavaScript 实在是有些令人困惑 —— JavaScript 是动态的，本身不提供一个 `class` 的实现。即便是在 ES2015/ES6 中引入了 `class` 关键字，但那也只是语法糖，JavaScript 仍然是基于原型的。

当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（object）都有一个私有属性（称之为 \_\_proto\_\_）指向它的构造函数的原型对象（**prototype**）。该原型对象也有一个自己的原型对象（\_\_proto\_\_），层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个**原型链**中的最后一个环节。

几乎所有 JavaScript 中的对象都是位于原型链顶端的 {{jsxref("Object")}} 的实例。

尽管这种原型继承通常被认为是 JavaScript 的弱点之一，但是原型继承模型本身实际上比经典模型更强大。例如，在原型模型的基础上构建经典模型相当简单。

## 基于原型链的继承

### 继承属性

JavaScript 对象是动态的属性“包”（指其自己的属性）。JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

> **备注：** 遵循 ECMAScript 标准，`someObject.[[Prototype]]` 符号是用于指向 `someObject` 的原型。从 ECMAScript 6 开始，`[[Prototype]]` 可以通过 {{jsxref("Object.getPrototypeOf()")}} 和 {{jsxref("Object.setPrototypeOf()")}} 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 `__proto__`。但它不应该与构造函数 `func` 的 `prototype` 属性相混淆。被构造函数创建的实例对象的 `[[Prototype]]` 指向 `func` 的 `prototype` 属性。**`Object.prototype` **属性表示 {{jsxref("Object")}} 的原型对象。

这里演示当尝试访问属性时会发生什么：

```js
// 让我们从一个函数里创建一个对象 o，它自身拥有属性 a 和 b 的：
let f = function () {
   this.a = 1;
   this.b = 2;
}
/* 这么写也一样
function f() {
  this.a = 1;
  this.b = 2;
}
*/
let o = new f(); // {a: 1, b: 2}

// 在 f 函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;

// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链
// o.[[Prototype]] 有属性 b 和 c
//  (其实就是 o.__proto__ 或者 o.constructor.prototype)
// o.[[Prototype]].[[Prototype]] 是 Object.prototype.
// 最后 o.[[Prototype]].[[Prototype]].[[Prototype]] 是 null
// 这就是原型链的末尾，即 null，
// 根据定义，null 就是没有 [[Prototype]]。

// 综上，整个原型链如下：

// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null

console.log(o.a); // 1
// a 是 o 的自身属性吗？是的，该属性的值为 1

console.log(o.b); // 2
// b 是 o 的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"

console.log(o.c); // 4
// c 是 o 的自身属性吗？不是，那看看它的原型上有没有
// c 是 o.[[Prototype]] 的属性吗？是的，该属性的值为 4

console.log(o.d); // undefined
// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
// 找不到 d 属性，返回 undefined
```

代码来源链接：<https://repl.it/@khaled_hossain_code/prototype>

给对象设置属性会创建自有属性。获取和设置行为规则的唯一例外是当继承的属性带有 [getter 或 setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) 时。

### 继承方法

JavaScript 并没有其他基于类的语言所定义的“方法”。在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别，包括上面的“属性遮蔽”（这种情况相当于其他语言的方法重写）。

当继承的函数被调用时，[this](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 指向的是当前继承的对象，而不是继承的函数所在的原型对象。

```js
var o = {
  a: 2,
  m: function(){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// 当调用 o.m 时，'this' 指向了 o.

var p = Object.create(o);
// p 是一个继承自 o 的对象

p.a = 4; // 创建 p 的自身属性 'a'
console.log(p.m()); // 5
// 调用 p.m 时，'this' 指向了 p
// 又因为 p 继承了 o 的 m 函数
// 所以，此时的 'this.a' 即 p.a，就是 p 的自身属性 'a'
```

## 在 JavaScript 中使用原型

接下去，来仔细分析一下这些应用场景下，JavaScript 在背后做了哪些事情。

正如之前提到的，在 JavaScript 中，函数（function）是允许拥有属性的。所有的函数会有一个特别的属性 —— `prototype` 。请注意，以下的代码是独立的（出于严谨，假定页面没有其他的 JavaScript 代码）。为了最佳的学习体验，我们强烈建议阁下打开浏览器的控制台（在 Chrome 和火狐浏览器中，按 Ctrl+Shift+I 即可），进入“console”选项卡，然后把如下的 JavaScript 代码复制粘贴到窗口中，最后通过按下回车键运行代码。

```js
function doSomething(){}
console.log( doSomething.prototype );
// 和声明函数的方式无关，
// JavaScript 中的函数永远有一个默认原型属性。
var doSomething = function(){};
console.log( doSomething.prototype );
```

在控制台显示的 JavaScript 代码块中，我们可以看到 doSomething 函数的一个默认属性 prototype。而这段代码运行之后，控制台应该显示类似如下的结果：

```js
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

我们可以给 doSomething 函数的原型对象添加新属性，如下：

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
```

可以看到运行后的结果如下：

```js
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

现在我们可以通过 new 操作符来创建基于这个原型对象的 doSomething 实例。使用 new 操作符，只需在调用 doSomething 函数语句之前添加 new。这样，便可以获得这个函数的一个实例对象。一些属性就可以添加到该原型对象中。

请尝试运行以下代码：

```js
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
```

运行的结果类似于以下的语句。

```js
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

如上所示， `doSomeInstancing` 中的`__proto__`是 `doSomething.prototype`. 但这是做什么的呢？当你访问`doSomeInstancing` 中的一个属性，浏览器首先会查看`doSomeInstancing` 中是否存在这个属性。

如果 `doSomeInstancing` 不包含属性信息，那么浏览器会在 `doSomeInstancing` 的 `__proto__` 中进行查找 (同 doSomething.prototype). 如属性在 `doSomeInstancing` 的 `__proto__` 中查找到，则使用 `doSomeInstancing` 中 `__proto__` 的属性。

否则，如果 `doSomeInstancing` 中 `__proto__` 不具有该属性，则检查`doSomeInstancing` 的 `__proto__` 的 `__proto__` 是否具有该属性。默认情况下，任何函数的原型属性 `__proto__` 都是 `window.Object.prototype.` 因此，通过 `doSomeInstancing` 的 `__proto__` 的 `__proto__` ( 同 doSomething.prototype 的 `__proto__` (同 `Object.prototype`)) 来查找要搜索的属性。

如果属性不存在 `doSomeInstancing` 的 `__proto__` 的 `__proto__` 中，那么就会在`doSomeInstancing` 的 `__proto__` 的 `__proto__` 的 `__proto__` 中查找。然而，这里存在个问题：`doSomeInstancing` 的 `__proto__` 的 `__proto__` 的 `__proto__` 其实不存在。因此，只有这样，在 `__proto__` 的整个原型链被查看之后，这里没有更多的 `__proto__` ，浏览器断言该属性不存在，并给出属性值为 `undefined` 的结论。

让我们在控制台窗口中输入更多的代码，如下：

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
```

结果如下：

```js
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## 使用不同的方法来创建对象和生成原型链

### 使用语法结构创建的对象

```js
var o = {a: 1};

// o 这个对象继承了 Object.prototype 上面的所有属性
// o 自身没有名为 hasOwnProperty 的属性
// hasOwnProperty 是 Object.prototype 的属性
// 因此 o 继承了 Object.prototype 的 hasOwnProperty
// Object.prototype 的原型为 null
// 原型链如下：
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 数组都继承于 Array.prototype
// (Array.prototype 中包含 indexOf, forEach 等方法)
// 原型链如下：
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// 函数都继承于 Function.prototype
// (Function.prototype 中包含 call, bind 等方法)
// 原型链如下：
// f ---> Function.prototype ---> Object.prototype ---> null
```

### 使用构造器创建的对象

在 JavaScript 中，构造器其实就是一个普通的函数。当使用 [new 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 来作用这个函数时，它就可以被称为构造方法（构造函数）。

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
// 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。
```

### 使用 `Object.create` 创建的对象

ECMAScript 5 中引入了一个新方法：{{jsxref("Object.create()")}}。可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数：

```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined，因为 d 没有继承 Object.prototype
```

### 使用 `class` 关键字创建的对象

ECMAScript6 引入了一套新的关键字用来实现 [class](/zh-CN/docs/Web/JavaScript/Reference/Classes)。使用基于类语言的开发人员会对这些结构感到熟悉，但它们是不同的。JavaScript 仍然基于原型。这些新的关键字包括 {{jsxref("Statements/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}，{{jsxref("Classes/static", "static")}}，{{jsxref("Classes/extends", "extends")}} 和 {{jsxref("Operators/super", "super")}}。

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

### 性能

在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻的情况下很重要。另外，试图访问不存在的属性时会遍历整个原型链。

遍历对象的属性时，原型链上的**每个**可枚举属性都会被枚举出来。要检查对象是否具有自己定义的属性，而不是其原型链上的某个属性，则必须使用所有对象从 `Object.prototype` 继承的 [`hasOwnProperty`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 方法。下面给出一个具体的例子来说明它：

```js
console.log(g.hasOwnProperty('vertices'));
// true

console.log(g.hasOwnProperty('nope'));
// false

console.log(g.hasOwnProperty('addVertex'));
// false

console.log(g.__proto__.hasOwnProperty('addVertex'));
// true
```

[`hasOwnProperty`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 是 JavaScript 中唯一一个处理属性并且**不会**遍历原型链的方法。（译者注：原文如此。另一种这样的方法：[`Object.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)）

注意：检查属性是否为 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 是**不能够**检查其是否存在的。该属性可能已存在，但其值恰好被设置成了 `undefined`。

### 错误实践：扩展原生对象的原型

经常使用的一个错误实践是扩展 `Object.prototype` 或其他内置原型。

这种技术被称为猴子补丁并且会破坏封装。尽管一些流行的框架（如 Prototype.js）在使用该技术，但仍然没有足够好的理由使用附加的非标准方法来混入内置原型。

扩展内置原型的**唯一**理由是支持 JavaScript 引擎的新特性，如 `Array.forEach`。

## `prototype` 和 `Object.getPrototypeOf`

对于从 Java 或 C++ 转过来的开发人员来说，JavaScript 会有点让人困惑，因为它完全是动态的，都是运行时，而且不存在类（class）。所有的都是实例（对象）。即使我们模拟出的“类”，也只是一个函数对象。

你可能已经注意到我们的 function A 有一个叫做 `prototype` 的特殊属性。该特殊属性可与 JavaScript 的 `new` 操作符一起使用。对原型对象的引用被复制到新实例的内部 `[[Prototype]]` 属性。例如，当执行 `var a1 = new A();` 时，JavaScript（在内存中创建对象之后，和在运行函数 `A()` 把 `this` 指向对象之前）设置 `a1.[[Prototype]] = A.prototype;`。然后当您访问实例的属性时，JavaScript 首先会检查它们是否直接存在于该对象上，如果不存在，则会 `[[Prototype]]` 中查找。这意味着你在 `prototype` 中定义的所有内容都可以由所有实例有效地共享，你甚至可以稍后更改部分 `prototype`，并在所有现有实例中显示更改（如果有必要的话）。

像上面的例子中，如果你执行 `var a1 = new A(); var a2 = new A();` 那么 `a1.doSomething` 事实上会指向 `Object.getPrototypeOf(a1).doSomething`，它就是你在 `A.prototype.doSomething` 中定义的内容。也就是说：`Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething`（补充：实际上，执行 `a1.doSomething()` 相当于执行 `Object.getPrototypeOf(a1).doSomething.call(a1)==A.prototype.doSomething.call(a1)`）

简而言之， `prototype` 是用于类的，而 `Object.getPrototypeOf()` 是用于实例的（instances），两者功能一致。

`[[Prototype]]` 看起来就像**递归**引用，如 `a1.doSomething`、`Object.getPrototypeOf(a1).doSomething`、`Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` 等等等，直到它被找到或 `Object.getPrototypeOf` 返回 `null`。

因此，当你执行：

```js
var o = new Foo();
```

JavaScript 实际上执行的是：

```js
var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);
```

（或者类似上面这样的），然后，当你执行：

```js
o.someProp;
```

它检查 o 是否具有 `someProp` 属性。如果没有，它会查找 `Object.getPrototypeOf(o).someProp`，如果仍旧没有，它会继续查找 `Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp`。

## 结论

在使用原型继承编写复杂代码之前，理解原型继承模型是**至关重要**的。此外，请注意代码中原型链的长度，并在必要时将其分解，以避免可能的性能问题。此外，原生原型**不应该**被扩展，除非它是为了与新的 JavaScript 特性兼容。

> **备注：** 在英文原版中，以下内容已被移除。保留仅作参考。

## 示例

`B` 继承自 `A`：

```js
function A(a){
  this.varA = a;
}

// 以上函数 A 的定义中，既然 A.prototype.varA 总是会被 this.varA 遮蔽，
// 那么将 varA 加入到原型（prototype）中的目的是什么？
A.prototype = {
  varA : null,
/*
既然它没有任何作用，干嘛不将 varA 从原型（prototype）去掉 ?
也许作为一种在隐藏类中优化分配空间的考虑 ?
https://developers.google.com/speed/articles/optimizing-javascript
如果 varA 并不是在每个实例中都被初始化，那这样做将是有效果的。
*/
  doSomething : function(){
    // ...
  }
}

function B(a, b){
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB : {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true
  },
  doSomething : {
    value: function(){ // override
      A.prototype.doSomething.apply(this, arguments);
      // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

最重要的部分是：

- 类型被定义在 `.prototype` 中
- 用 `Object.create()` 来继承
