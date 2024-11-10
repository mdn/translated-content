---
title: Proxy() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`Proxy()`** 构造函数用于创建 {{jsxref("Proxy")}} 对象。

## 语法

```js-nolint
new Proxy(target, handler)
```

> **备注：** `Proxy()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 关键字来调用。如果不使用 `new` 关键字调用，则会抛出 {{jsxref("TypeError")}}。

### 参数

- `target`
  - : `Proxy` 会对目标（target）对象进行包装。它可以是任何类型的对象，包括原生的数组、函数甚至是另一个代理对象。
- `handler`
  - : 一个对象，其属性是定义了在对代理执行操作时的行为的函数。

## 描述

可以使用 `Proxy()` 构造函数来创建一个新的 `Proxy` 对象。构造函数接收两个必须的参数：

- `target` 是要创建代理的对象
- `handler` 是定义了代理的自定义行为的对象

一个空的处理器（handler）将会创建一个与被代理对象行为几乎完全相同的代理对象。通过在 `handler` 对象上定义一组函数，你可以自定义被代理对象的一些特定行为。例如，通过定义 `get()` 你就可以自定义被代理对象的[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)。

### 处理器函数

本节列出了所有你可以自定义的处理函数。处理器函数有时候也被称为*劫持*（trap），这是由于它们会对底层被代理对象的调用进行劫持。

- {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
  - : 函数调用劫持。
- {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
  - : {{JSxRef("Operators/new", "new")}} 运算符劫持。
- {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : {{JSxRef("Object.defineProperty")}} 调用劫持。
- {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : {{JSxRef("Operators/delete", "delete")}} 运算符劫持。
- {{jsxref("Proxy/Proxy/get", "handler.get()")}}
  - : 获取属性值劫持。
- {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : {{JSxRef("Object.getOwnPropertyDescriptor")}} 调用劫持。
- {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : {{JSxRef("Object.getPrototypeOf")}} 调用劫持。
- {{jsxref("Proxy/Proxy/has", "handler.has()")}}
  - : {{JSxRef("Operators/in", "in")}} 运算符劫持。
- {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : {{JSxRef("Object.isExtensible")}} 调用劫持。
- {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : {{JSxRef("Object.getOwnPropertyNames")}} 和{{JSxRef("Object.getOwnPropertySymbols")}} 调用劫持。
- {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : {{JSxRef("Object.preventExtensions")}} 调用劫持。
- {{jsxref("Proxy/Proxy/set", "handler.set()")}}
  - : 设置属性值劫持。
- {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : {{JSxRef("Object.setPrototypeOf")}} 调用劫持。

## 示例

### 选择性代理属性访问器

本示例中，被代理对象有两个属性：`notProxied` 和 `proxied`。我们定义了一个处理器，它为 `proxied` 属性返回一个不同的值，而其他属性则通过目标获取。

```js
const target = {
  notProxied: "原始值",
  proxied: "原始值",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "替换值";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "原始值"
console.log(proxy.proxied); // "替换值"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [元编程](/zh-CN/docs/Web/JavaScript/Guide/Meta_programming)指南
- {{jsxref("Reflect")}}
