---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
---

**`handler.setPrototypeOf()`** 方法主要用来拦截 {{jsxref("Object.setPrototypeOf()")}}.

## 语法

```js
var p = new Proxy(target, {
  setPrototypeOf: function (target, prototype) {},
});
```

### 参数

以下参数传递给 `setPrototypeOf` 方法。

- `target`
  - : 被拦截目标对象。
- `prototype`
  - : 对象新原型或为`null`.

### 返回值

如果成功修改了`[[Prototype]]`, `setPrototypeOf` 方法返回 `true`,否则返回 `false`.

## 描述

这个 **`handler.setPrototypeOf`** 方法用于拦截 {{jsxref("Object.setPrototypeOf()")}}.

### 拦截

这个方法可以拦截以下操作：

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

### 不变量

如果违反了下列规则，则 proxy 将抛出一个 {{jsxref("TypeError")}}：

- `如果 target` 不可扩展，原型参数必须与 `Object.getPrototypeOf(target)` 的值相同。

## 示例

如果你不想为你的对象设置一个新的原型，你的 handler 的 `setPrototypeOf` 方法可以返回 false，也可以抛出异常。

前一种做法意味着，那些在修改失败时会抛出异常的操作必须自己创建这个异常。例如，{{jsxref("Object.setPrototypeOf()")}} 会自行创建并抛出 `TypeError`。如果这次修改是由通常不会在失败时抛出异常的操作执行的，例如 {{jsxref("Reflect.setPrototypeOf()")}}，那么不会抛出任何异常。

```js
var handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

var newProto = {},
  target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

后一种做法会让_任何_尝试修改的操作都抛出异常。如果你希望即使是不抛出异常的操作在失败时也能抛出异常，或者你想抛出自定义的异常值，就必须采用这种做法。

```js
var handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

var newProto = {},
  target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
- {{jsxref("Proxy/Proxy", "handler")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
