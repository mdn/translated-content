---
title: X.prototype.y called on incompatible type
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Method Set.prototype.add called on incompatible receiver undefined (Chrome)
TypeError: Bind must be called on a function (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

当这个错误被抛出时，属于某个对象的函数被调用，但是没有提供给 `this` 与其所期望的函数类型一致的参数。

在调用 {{jsxref("Function.prototype.call()")}} 或{{jsxref("Function.prototype.apply()")}} 方法，但是为 `this` 提供的绑定对象与预期的不匹配时，这个问题就会出现。

该问题还会出现于将一个（存储在一个对象中的）函数提供给另外一个函数作为参数时。在这种情况下，函数所在的对象并非该函数的 `this` 绑定的目标对象。为了解决这个问题，你或者为其提供一个 lambda 表达式，该表达式完成函数要完成的任务，或者调用 {{jsxref("Function.prototype.bind()")}} 函数为 `this` 强制绑定期望的对象。

## 示例

### 错误示例

```js example-bad
var mySet = new Set();
["bar", "baz"].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

var myFun = function () {};
["bar", "baz"].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.
```

### 正确示例

```js example-good
var mySet = new Set();
["bar", "baz"].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

var myFun = function () {};
["bar", "baz"].forEach((x) => myFun.bind(x));
// This works using the "bind" function. It creates a lambda forwarding the argument.
```

## 相关内容

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
