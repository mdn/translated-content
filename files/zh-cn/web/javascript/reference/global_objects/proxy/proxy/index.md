---
title: Proxy() 构造器
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
---

{{JSRef}}**`Proxy()`** 构造器用来创建 {{jsxref("Proxy")}} 对象。

## 语法

```plain
new Proxy(target, handler)
```

### 参数

- `target`
  - : `Proxy` 会对 target 对象进行包装。它可以是任何类型的对象，包括内置的数组，函数甚至是另一个代理对象。
- `handler`
  - : 它是一个对象，它的属性提供了某些操作发生时所对应的处理函数。

## 描述

我们可以使用 `Proxy()` 构造器来创建一个新的 `Proxy` 对象。构造器接收两个主要参数：

- `target` 被代理的对象
- `handler` 被代理对象上的自定义行为

一个空的 `handler` 参数将会创建一个与被代理对象行为几乎完全相同的代理对象。通过在 `handler` 对象上定义一组处理函数，你可以自定义被代理对象的一些特定行为。例如，通过定义 `get()` 你就可以自定义被代理对象的[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)。

### 处理函数

本节列出了所有你可以自定义的处理函数。处理函数有时候也被成为“劫持”（traps），这是由于它们会对底层被代理对象的调用进行劫持。

- {{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
  - : 函数调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
  - : {{JSxRef("Operators/new", "new")}} 操作符劫持
- {{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : {{JSxRef("Object.defineProperty")}}调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : {{JSxRef("Operators/delete", "delete")}} 操作符劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
  - : 获取属性值劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : {{JSxRef("Object.getOwnPropertyDescriptor")}} 调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : {{JSxRef("Object.getPrototypeOf")}}调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
  - : {{JSxRef("Operators/in", "in")}} 操作符劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : {{JSxRef("Object.isExtensible")}}调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : {{JSxRef("Object.getOwnPropertyNames")}} 和{{JSxRef("Object.getOwnPropertySymbols")}}调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : {{JSxRef("Object.preventExtensions")}}调用劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
  - : 设置属性值劫持。
- {{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : {{JSxRef("Object.setPrototypeOf")}}调用劫持。

## 示例

### 选择性代理属性访问器

本例中，被代理对象有两个属性： `notProxied` 和 `proxied` 。我们定义了一个处理函数，它为 `proxied` 属性返回一个不同的值，而其他属性返回原值。

```js
const target = {
  notProxied: "original value",
  proxied: "original value",
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied); // "replaced value"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`Proxy` and `Reflect` in the JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide/Meta_programming)
- {{jsxref("Global_Objects/Reflect", "Reflect")}}
