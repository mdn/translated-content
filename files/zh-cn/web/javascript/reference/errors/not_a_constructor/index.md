---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
---

{{jsSidebar("Errors")}}

## 信息

```plain
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

是因为尝试将不是构造器的对象或者变量来作为构造器使用。参考 {{Glossary("constructor")}} 或者 [`new` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 来了解什么是构造器。

有很多的全局对象比如 {{jsxref("String")}}、{{jsxref("Array")}} 等等都是可以使用 `new` 操作符的构造器。但是有一些全局对象并不是，且其属性和方法都是[静态](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>) 的。下面的 JavaScript 标准内置对象都不是构造器：{{jsxref("Math")}}，{{jsxref("JSON")}}，{{jsxref("Symbol")}}，{{jsxref("Reflect")}}，{{jsxref("Intl")}}，{{jsxref("SIMD")}}，{{jsxref("Atomics")}}。

[Generator functions](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*) 也不能作为构造器来使用。

## 示例

### 无效的

```js example-bad
var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {}
var obj = new f();
// TypeError: f is not a constructor
```

### 一个构造器

假设你想为汽车创建一个对象类型。你希望此类型的对象被称为 `car`，并且您希望它具有 make，model 和 year 属性。为此，你编写以下函数：

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

现在你可以创建一个名为 `mycar` 的对象，如下所示：

```js
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

### 关于 Promises

当返回了一个 immediately-resolved 或者 immediately-rejected Promise 的时候，你根本不需要去创建、操作一个新的 Promise 对象。

这是不合法的（[Promise constructor](/zh-CN/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor) 被错误的调用了）且会抛出一个 错误 `TypeError: this is not a constructor` exception:

```js example-bad
return new Promise.resolve(true);
```

使用 [Promise.resolve()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) 或者 [Promise.reject()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) 静态方法来代替：

```js
// 这是合法的，但是没必要这么长：
return new Promise((resolve, reject) => {
  resolve(true);
});

// 用静态方法来代替：
return Promise.resolve(true);
return Promise.reject(false);
```

## 相关链接

- {{Glossary("constructor")}}
- [`new` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
