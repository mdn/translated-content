---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
---

{{JSRef}}

**`handler.get()`** 方法用于拦截对象的读取属性操作。

## 语法

```js
var p = new Proxy(target, {
  get: function (target, property, receiver) {},
});
```

### 参数

以下是传递给 get 方法的参数，`this 上下文绑定在`handler 对象上。

- `target`
  - : 目标对象。
- `property`
  - : 被获取的属性名。
- `receiver`
  - : Proxy 或者继承 Proxy 的对象

### 返回值

get 方法可以返回任何值。

## 描述

**`handler.get`** 方法用于拦截对象的读取属性操作。

### 拦截

该方法会拦截目标对象的以下操作：

- 访问属性：`proxy[foo] 和` `proxy.bar`
- 访问原型链上的属性：`Object.create(proxy)[foo]`
- {{jsxref("Reflect.get()")}}

### 约束

如果违背了以下的约束，proxy 会抛出 {{jsxref("TypeError")}}:

- 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
- 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。

## 示例

以下代码演示如何拦截属性值的读取操作。

```js
var p = new Proxy(
  {},
  {
    get: function (target, prop, receiver) {
      console.log("called: " + prop);
      return 10;
    },
  },
);

console.log(p.a); // "called: a"; ouptut 10
```

以下代码演示违反约束的情况。

```js
var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

var p = new Proxy(obj, {
  get: function (target, prop) {
    return 20;
  },
});

p.a; //会抛出 TypeError
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.get()")}}
