---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

{{jsxref("Function")}} 实例的 **`name`** 数据属性表示函数在创建时指定的名称，或者如果函数是匿名函数，则名称可以是 `anonymous` 或 `''`（空字符串）。

{{InteractiveExample("JavaScript Demo: Function.name")}}

```js interactive-example
const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// Expected output: "func1"

console.log(object.func2.name);
// Expected output: "func2"
```

## 值

一个字符串。

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> 在非标准的、ES2015 之前的实现中，`configurable` 属性也是 `false`。

## 描述

函数的 `name` 属性可用于在调试工具或错误消息中标识该函数。它对语言本身没有任何意义。

`name` 属性是只读的，不能用赋值运算符修改：

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

想要改变它，请使用 {{jsxref("Object.defineProperty()")}}。

`name` 属性通常是从函数的定义方式推断出来的。在下面的部分中，我们将描述推断它的各种方法。

### 函数声明

`name` 属性会返回函数声明的名称。

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### 默认导出的函数声明

一个 [`export default`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 声明将函数作为声明导出，而不是表达式。如果声明是匿名的，则名称为 `"default"`。

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### 构造函数

使用 [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) 构造函数创建的函数的名称是“anonymous”。

```js
new Function().name; // "anonymous"
```

### 函数表达式

如果函数表达式被命名，则该名称将用作 `name` 属性的值。

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

使用关键字 `function` 或箭头函数创建的匿名函数表达式将以 `""`（空字符串）作为名称。

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

然而，这种情况很少见——通常，为了在其他地方引用表达式，函数表达式在创建时会附加到一个标识符上（例如在变量声明中）。在这种情况下，名称可以被推断出来，正如下面的几个小节所示。

一个实际情况是，从另一个函数返回的函数无法推断其名称：

```js
function getFoo() {
  return () => {};
}
getFoo().name; // ""
```

### 变量声明和方法

变量和方法可以从其语法位置推断出匿名函数的名称。

```js
const f = function () {};
const object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

这同样适用于赋值：

```js
let f;
f = () => {};
f.name; // "f"
```

### 初始化器和默认值

在[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#默认值)、[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)等的初始化器（默认值）中的函数，将继承绑定标识符的名称作为它们的 `name`。

```js
const [f = () => {}] = [];
f.name; // "f"

const { someMethod: m = () => {} } = {};
m.name; // "m"

function foo(f = () => {}) {
  console.log(f.name);
}
foo(); // "f"

class Foo {
  static someMethod = () => {};
}
Foo.someMethod.name; // someMethod
```

### 简写方法

```js
const o = {
  foo() {},
};
o.foo.name; // "foo";
```

### 绑定函数

{{jsxref("Function.prototype.bind()")}} 所创建的函数将会在函数的名称前加上“bound”。

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### getter 和 setter

当使用 [`get`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 访问器属性时，函数名称中将出现“get”或“set”。

```js
const o = {
  get foo() {},
  set foo(x) {},
};

const descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### 类

类的名称遵循与函数声明和表达式相同的算法。

```js
class Foo {}
Foo.name; // "Foo"
```

> [!WARNING]
> JavaScript 只会在函数没有自有的 `name` 属性时才设置函数的 `name` 属性。然而，类的[静态成员](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)将被设置为类构造函数的自有属性，从而阻止内置的 `name` 属性生效。请参阅下面的示例。

### 以 Symbol 为函数名称

如果使用一个 {{jsxref("Symbol")}} 作为函数名，并且该 symbol 有一个描述，那么该方法的名称将是方括号中的描述。

```js
const sym1 = Symbol("foo");
const sym2 = Symbol();

const o = {
  [sym1]() {},
  [sym2]() {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // "[]"
```

### 私有属性

私有字段和私有方法的名称中包含哈希符号（`#`）。

```js
class Foo {
  #field = () => {};
  #method() {}
  getNames() {
    console.log(this.#field.name);
    console.log(this.#method.name);
  }
}

new Foo().getNames();
// "#field"
// "#method"
```

## 示例

### 获取对象的构造函数名称

你可以使用 `obj.constructor.name` 来检查对象的“类”名。

```js
function Foo() {} // 或：class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

然而，由于静态成员将成为类的自有属性，我们几乎无法获取具有静态方法属性 `name()` 的任何类的类名：

```js
class Foo {
  constructor() {}
  static name() {}
}
```

使用 `static name()` 方法后，`Foo.name` 不再保存实际的类名，而是一个对 `name()` 函数对象的引用。尝试通过 `fooInstance.constructor.name` 获取 `fooInstance` 的类名将无法得到类名，而是得到一个对静态类方法的引用。示例：

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

由于静态字段的存在，`name` 也可能不是一个函数。

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

如果类有一个静态属性名为 `name`，它也将变为*可写的*。在没有自定义静态定义的情况下，内置定义是*只读的*:

```js
Foo.name = "Hello";
console.log(Foo.name); // 如果 Foo 类有一个静态的“name”属性，则为“Hello”；但如果没有，则为“Foo”。
```

因此，你可能不会依赖内置的 `name` 属性来始终保存类的名称。

### JavaScript 压缩器和缩小器

> [!WARNING]
> 在使用 JavaScript 压缩器（缩小器）或混淆器等源码转换工具时，要小心使用 `name` 属性。这些工具通常作为 JavaScript 构建流程的一部分使用，以减小程序在部署到生产环境之前的大小。此类转换通常会在构建时更改函数的名称。

例如有这样的一段源码：

```js
function Foo() {}
const foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("“foo”是“Foo”一个的实例");
} else {
  console.log("Oops!");
}
```

可以压缩为：

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("“foo”是“Foo”一个的实例");
} else {
  console.log("Oops!");
}
```

在未压缩的版本中，程序进入了真值分支并打印了 "“foo”是“Foo”一个的实例"。而在压缩后的版本中，它的行为不同，并进入了 else 分支。如果你依赖于 `name` 属性，就像上面的示例一样，请确保你的构建流程不会更改函数名称，或者不要假设函数具有特定的名称。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Function: name` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function")}}
