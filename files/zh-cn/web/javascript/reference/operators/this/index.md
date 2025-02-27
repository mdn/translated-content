---
title: this
slug: Web/JavaScript/Reference/Operators/this
---

{{jsSidebar("Operators")}}

与其他语言相比，**函数的 `this` 关键字**在 JavaScript 中的表现略有不同，此外，在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)和非严格模式之间也会有一些差别。

在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）。`this` 不能在执行期间被赋值，并且在每次函数被调用时 `this` 的值也可能会不同。ES5 引入了 [bind](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 方法来设置函数的 `this` 值，而不用考虑函数如何被调用的。ES2015 引入了[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，箭头函数不提供自身的 this 绑定（`this` 的值将保持为闭合词法上下文的值）。

{{InteractiveExample("JavaScript Demo: Expressions - this")}}

```js interactive-example
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
```

## 语法

```plain
this
```

### 值

在非严格模式下，`this` 总是指向一个对象，在严格模式下可以是任意值。有关如何确定该值的更多信息，请参阅下面的描述。

## 描述

`this` 的值取决于它出现的上下文：函数、类或全局。

### 函数上下文

在函数内部，`this` 的值取决于函数如何被调用。可以将 `this` 看作是函数的一个隐藏参数（就像函数定义中声明的参数一样），`this` 是语言在函数体被执行时为你创建的绑定。

对于典型的函数，`this` 的值是函数被访问的对象。换句话说，如果函数调用的形式是 `obj.f()`，那么 `this` 就指向 `obj`。例如：

```js
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```

注意，虽然函数是相同的，但是根据其调用的方式，`this` 的值是不同的。这与函数参数的工作方式类似。

`this` 的值不是拥有此函数作为自己属性的对象，而是用于调用此函数的对象。你可以通过调用对象在[原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)中的方法来证明这一点。

```js
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```

`this` 的值总是根据调用函数的方式而改变，即使函数是在创建对象时定义的：

```js
const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
```

如果方法被访问的值是一个原始值，`this` 也将是一个原始值——但只有当函数处于严格模式下会如此。

```js
function getThisStrict() {
  "use strict"; // 进入严格模式
  return this;
}

// 仅用于演示——你不应该改变内置的原型对象
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

如果函数在没有被任何东西访问的情况下被调用，`this` 将是 `undefined`——但只有在函数处于严格模式下会如此。

```js
console.log(typeof getThisStrict()); // "undefined"
```

在非严格模式下，一个特殊的过程称为 [`this` 替换](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#非_this_替换)确保 `this` 的值总是一个对象。这意味着：

- 如果一个函数被调用时 `this` 被设置为 `undefined` 或 `null`，`this` 会被替换为 {{jsxref("globalThis")}}。
- 如果函数被调用时 `this `被设置为一个原始值，`this` 会被替换为原始值的包装对象。

```js
function getThis() {
  return this;
}

// 仅用于演示——你不应该修改内置的原型对象
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

在典型的函数调用中，`this` 是通过函数的前缀（点之前的部分）隐式传递的，就像一个参数。你也可以使用 {{jsxref("Function.prototype.call()")}}、{{jsxref("Function.prototype.apply()")}} 或 {{jsxref("Reflect.apply()")}} 方法显式设置 `this` 的值。使用 {{jsxref("Function.prototype.bind()")}}，你可以创建一个新的函数，无论函数如何被调用，其 `this` 的值都不会改变。当使用这些方法时，如果函数是在非严格模式下，上述 `this` 替换规则仍然适用。

#### 回调

当一个函数作为回调函数传递时，`this` 的值取决于如何调用回调，这由 API 的实现者决定。回调函数通常以 `undefined` 作为 `this` 的值被调用（直接调用，而不附加到任何对象上），这意味着如果函数是在非严格模式，`this` 的值会是全局对象（{{jsxref("globalThis")}}）。这在[迭代数组方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)、[`Promise()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 构造函数等例子中都是适用的。

```js
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined、undefined、undefined
```

一些 API 允许你为回调函数的调用设置一个 `this` 值。例如，所有的迭代数组方法和相关的方法，如{{jsxref("Set.prototype.forEach()")}}，都接受一个可选的 `thisArg` 参数。

```js
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

偶尔，回调函数会以一个非 `undefined` 的 `this` 值被调用。例如，{{jsxref("JSON.parse()")}} 的 `reviver` 参数和 {{jsxref("JSON.stringify()")}} 的 `replacer` 参数都会把 `this` 设置为正在被解析/序列化的属性所属的对象。

#### 箭头函数

在[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中，`this` 保留了闭合词法上下文的 `this` 值。换句话说，当对箭头函数求值时，语言不会创建一个新的 `this` 绑定。

例如，在全局代码中，无论是否在严格模式下，由于[全局上下文](#全局上下文)绑定，`this` 值总是 `globalThis`。

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

箭头函数在其周围的作用域上创建一个 `this` 值的[闭包](/zh-CN/docs/Web/JavaScript/Closures)，这意味着箭头函数的行为就像它们是“自动绑定”的——无论如何调用，`this` 都绑定到函数创建时的值（在上面的例子中，是全局对象）。在其他函数内部创建的箭头函数也是如此：它们的 `this` 值保持为闭合词法上下文的 `this`。[参见下面的例子](#箭头函数中的_this)。

此外，当使用 `call()`、`bind()` 或 `apply()` 调用箭头函数时，`thisArg` 参数会被忽略。不过，你仍然可以使用这些方法传递其他参数。

```js
const obj = { name: "obj" };

// 尝试使用 call 设置 this
console.log(foo.call(obj) === globalObject); // true

// 尝试使用 bind 设置 this
const boundFoo = foo.bind(obj);
console.log(boundFoo() === globalObject); // true
```

#### 构造函数

当一个函数被用作构造函数（使用 {{jsxref("Operators/new", "new")}} 关键字）时，无论构造函数是在哪个对象上被访问的，其 `this` 都会被绑定到正在构造的新对象上。除非构造函数返回另一个非原始值，不然 `this` 的值会成为 `new` 表达式的值。

```js
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```

在第二个例子（`C2`）中，因为在构造过程中返回了一个对象，`this` 被绑定的新对象被丢弃。（这基本上使得语句 `this.a = 37;` 成为了死代码。它并不完全是死代码，因为它被执行了，但是它可以被消除而不产生任何外部效果。）

#### super

当一个函数以 `super.method()` 的形式被调用时，`method` 函数内的 `this` 与 `super.method()` 调用周围的 `this` 值相同，通常不等于 `super` 所指向的对象。这是因为 `super.method` 不是像上面的对象成员访问——它是一种特殊的语法，有不同的绑定规则。有关示例，请参见 [`super` 参考](/zh-CN/docs/Web/JavaScript/Reference/Operators/super#通过_super_调用方法)。

### 类上下文

一个[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)可以被分为两个上下文：静态和实例。[构造函数](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)、方法和实例字段初始化器（[公有](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)或[私有](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)）属于实例上下文。[静态](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)方法、静态字段初始化器和[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)属于静态上下文。`this` 值在每个上下文中都是不同的。

类构造函数总是通过 `new` 调用，所以它们的行为与[构造函数](#构造函数)相同：`this` 值是正在创建的新实例。类方法的行为像对象字面量中的方法——`this` 值是方法被访问的对象。如果方法没有转移到另一个对象，`this` 通常是类的一个实例。

静态方法不是 `this` 的属性。它们是类本身的属性。因此，它们通常在类上访问，`this` 是类（或子类）的值。静态初始化块也是在 `this` 设置为当前类的情况下进行求值的。

字段初始化器也在类的上下文中执行。实例字段是在 `this` 被设置为正在构造的实例的情况下被初始化的。静态字段是在 `this` 被设置为当前类的情况下被初始化的。这就是为什么字段初始化器中的箭头函数[对于实例字段绑定到实例，对于静态字段绑定到类](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#不能用作方法)。

```js
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```

#### 派生类构造函数

与基类构造函数不同，派生构造函数没有初始的 `this` 绑定。调用 {{jsxref("Operators/super", "super()")}} 在构造函数中创建一个 `this` 绑定，基本上和求值以下代码的效果类似，其中 `Base` 是基类：

```js-nolint
this = new Base();
```

> [!WARNING]
> 在调用 `super()` 之前引用 `this` 将抛出错误。

派生类在调用 `super()` 之前不能有返回，除非构造函数返回一个对象（这样 `this` 值就会被覆盖）或者类根本没有构造函数。

```js
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

### 全局上下文

在全局执行上下文中（在任何函数或类之外；可能在全局范围内定义的[块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)或[箭头函数](#箭头函数)内部），`this` 值取决于脚本运行的执行上下文。像[回调](#回调)一样，`this` 值由运行时环境（调用者）确定。

在脚本的顶层，无论是否在严格模式下，`this` 会指向{{jsxref("globalThis")}}。这通常与全局对象相同——例如，如果源代码放在 HTML 的 [`<script>`](/zh-CN/docs/Web/HTML/Element/script) 元素内并作为脚本执行，`this === window`。

> **备注：** `globalThis` 通常与全局对象的概念相同（即向 `globalThis` 添加属性会使它们成为全局变量）——这对于浏览器和 Node 是这样的——但主机可以为 `globalThis` 提供与全局对象无关的不同值。

```js
// 在网页浏览器中，window 对象也是全局对象：
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

如果源代码作为[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)加载（对于 HTML，这意味着在 `<script>` 标签中添加 `type="module"`），在顶层，`this` 总是 `undefined`。

如果源代码使用 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 执行，`this` 与[直接调用 eval](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#直接和间接调用_eval) 的闭合上下文相同，或者与间接调用 eval 的 `globalThis`（就像它在单独的全局脚本中运行一样）相同。

```js
function test() {
  // 直接调用 eval
  console.log(eval("this") === this);
  // 间接调用 eval，非严格模式
  console.log(eval?.("this") === globalThis);
  // 间接调用 eval，严格模式
  console.log(eval?.("'use strict'; this") === globalThis);
}

test.call({ name: "obj" }); // 输出 3 个 "true"
```

请注意，某些源代码虽然看起来像全局作用域，但在执行时实际上被包装在一个函数中。例如，Node.js CommonJS 模块被包装在一个函数中，并且 `this` 值设置为 `module.exports`。[事件处理器属性](#内联事件处理器中的_this)执行时，`this` 设置为它们附加到的元素。

对象字面量不创建 `this` 作用域——只有在对象内定义的函数（方法）才会这样做。在对象字面量中使用 `this` 会从周围的作用域继承值。

```js
const obj = {
  a: this,
};

console.log(obj.a === window); // true
```

## 示例

### 函数上下文中的 this

`this` 参数的值取决于函数如何被调用，而不是它如何被定义。

```js
// 对象可以作为第一个参数传递给 'call' 或 'apply'，
// 并且 'this' 将被绑定到它。
const obj = { a: "Custom" };

// 使用 var 声明的变量成为 'globalThis' 的属性。
var a = "Global";

function whatsThis() {
  return this.a; // 'this' 取决于函数如何被调用
}

whatsThis(); // 'Global'; 在非严格模式下，'this' 参数默认为 'globalThis'
obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom'; 'this' 参数被绑定到 obj
```

使用 `call()` 和 `apply()`，你可以对 `this` 进行传值，就像它是一个显式参数。

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

// 第一个参数被绑定到隐式的 'this' 参数；
// 剩余的参数被绑定到命名参数。
add.call(o, 5, 7); // 16

// 第一个参数被绑定到隐式的 'this' 参数；
// 第二个参数是一个数组，其成员被绑定到命名参数。
add.apply(o, [10, 20]); // 34
```

### this 和对象转换

在非严格模式下，如果一个函数被调用时其 `this` 值不是一个对象，那么 `this` 值会被替换为一个对象。`null` 和 `undefined` 会变成 `globalThis`。像 `7` 或 `'foo'` 这样的原始值会使用相关的构造函数转换为对象，所以原始数值 `7` 会被转换为一个 {{jsxref("Number")}} 包装类，字符串 `'foo'` 会被转换为一个 {{jsxref("String")}} 包装类。

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [object String]
bar.call(undefined); // [object Window]
```

### bind() 方法

调用 [`f.bind(someObject)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 会创建一个新函数，这个新函数具有与 `f` 相同的函数体和作用域，但 `this` 的值永久绑定到 `bind` 的第一个参数，无论函数如何被调用。

```js
function f() {
  return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" }); // bind 只能生效一次！
console.log(h()); // azerty

const o = { a: 37, f, g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37 37 azerty azerty
```

### 箭头函数中的 this

箭头函数在闭合执行上下文中创建了 `this` 值的闭包。在下面的例子中，我们创建了一个对象 `obj`，它有一个方法 `getThisGetter`，该方法返回一个函数，这个函数返回 `this` 的值。返回的函数是作为箭头函数的形式创建的，所以它的 `this` 永久地绑定到其执行上下文中的 `this`。`getThisGetter` 内部的 `this` 值可以在调用中设置，这反过来又设置了返回函数的返回值。我们假设 `getThisGetter` 是一个非严格函数，这意味着它包含在一个非严格模式的脚本中，并且没有进一步嵌套在类或严格模式的函数中。

```js
const obj = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};
```

我们可以作为 `obj` 的方法调用 `getThisGetter`，这将在其主体内部将 `this` 绑定到 `obj`。返回的函数被赋值给一个变量 `fn`。现在，当调用 `fn` 时，返回的 `this` 值仍然是通过调用 `getThisGetter` 设置的值，即 `obj`。如果返回的函数不是箭头函数，那么这样的调用会导致 `this` 值为 `globalThis`，因为 `getThisGetter` 是非严格模式的。

```js
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

但是，如果你解绑 `obj` 的方法而不调用它，需要小心，因为 `getThisGetter` 仍然是一个方法，它有一个可变的 `this` 值。在下面的例子中，调用 `fn2()()` 将返回 `globalThis`，因为它遵循 `fn2()` 的 `this`，由于它没有附加到任何对象上进行调用，所以是 `globalThis`。

```js
const fn2 = obj.getThisGetter;
console.log(fn2()() === globalThis); // 在非严格模式下为 true
```

这种行为在定义回调时非常有用。通常，每个函数表达式都创建自己的 `this` 绑定，这会遮蔽上层作用域的 `this` 值。现在，如果你不关心 `this` 值，你可以将函数定义为箭头函数，并且只在你需要的地方创建 `this` 绑定（例如，在类方法中）。参见 [`setTimeout()` 的示例](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#使用_call、bind_和_apply)。

### getter 或 setter 中的 this

在 getter 和 setter 中，`this` 是基于访问属性的对象，而不是定义属性的对象。用作 getter 或 setter 的函数会将其 `this` 绑定到正在设置或获取属性的对象。

```js
function sum() {
  return this.a + this.b + this.c;
}

const o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(o.average, o.sum); // 2 6
```

### DOM 事件处理器中的 this

当一个函数被用作事件处理器时，它的 `this` 参数绑定到放置监听器的 DOM 元素上（一些浏览器对于使用 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 以外的方法动态添加的监听器并不遵循这个约定）。

```js
// 当作为监听器调用时，将相关元素变为蓝色
function bluify(e) {
  // 总是为 true
  console.log(this === e.currentTarget);
  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 获取文档中的每一个元素
const elements = document.getElementsByTagName("*");

// 添加 bluify 作为点击监听器，所以当元素被点击时，它会变蓝
for (const element of elements) {
  element.addEventListener("click", bluify, false);
}
```

### 内联事件处理器中的 this

当代码从内联[事件处理器属性](/zh-CN/docs/Web/HTML/Attributes#event_handler_attributes)调用时，它的 `this` 绑定到放置监听器的 DOM 元素上：

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

上面的 alert 会显示 `button`。注意只有外层代码中的 `this` 是这样设置的：

```html
<button onclick="alert((function(){return this})());">Show inner this</button>
```

在这种情况下，内部函数的 `this` 指向 `globalThis` 对象（即非严格模式下，调用的函数未设置 `this` 时指向的默认对象）。

### 类中的绑定方法

和其他普通函数一样，方法中的 `this` 值取决于它们如何被调用。有时，改写这个行为，让类中的 `this` 值总是指向这个类实例会很有用。为了做到这一点，可在构造函数中绑定类方法：

```js
class Car {
  constructor() {
    // 绑定 sayBye 而不是 sayHi 来展示差异
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

// 方法中 'this' 的值取决于它们的调用者
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// 对于绑定方法，'this' 不依赖于调用者
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
```

> [!NOTE]
> 类总是在严格模式下。如果一个方法试图访问 `this` 上的属性，使用未定义的 `this` 值调用该方法将会抛出错误。
>
> ```js example-bad
> const carSayHi = car.sayHi;
> carSayHi(); // TypeError because the 'sayHi' method tries to access 'this.name', but 'this' is undefined in strict mode.
> ```

然而，请注意，自动绑定的方法遭受的问题与[使用箭头函数作为类属性](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#不能用作方法)相同：类的每个实例都会有其方法的自己的副本，这会增加内存使用。只在绝对必要的地方使用它。你也可以模仿 [`Intl.NumberFormat.prototype.format()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#将_format_与_map_一起使用) 的实现：定义属性作为一个 getter，当访问时返回一个绑定函数并保存它，这样函数只创建一次，并且只会在必要时创建。

### with 语句中的 this

尽管 [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 语句已被弃用，并且在严格模式下不可用，但它们仍然是正常 `this` 绑定规则的一个例外。如果在 `with` 语句中调用了一个函数，并且该函数是作用域对象的属性，那么 `this` 值会绑定到作用域对象，就好像存在 `obj1.` 前缀一样。

```js
const obj1 = {
  foo() {
    return this;
  },
};

with (obj1) {
  console.log(foo() === obj1); // true
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("globalThis")}}
