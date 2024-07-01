---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
---

{{JSRef}}

**`handler.preventExtensions()`** 方法用于设置对{{jsxref("Object.preventExtensions()")}}的拦截

{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}

## 语法

```js
var p = new Proxy(target, {
  preventExtensions: function (target) {},
});
```

### 参数

以下参数传递给 `preventExtensions` 方法。它会绑定到这个 handler.

- `target`
  - : 所要拦截的目标对象。

### 返回值

`preventExtensions` 方法返回一个布尔值。

## 描述

**`handler.preventExtensions()`** 拦截 {{jsxref("Object.preventExtensions()")}}返回一个布尔值。

### 拦截

这个 trap 可以拦截这些操作：

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}

### 约束

如果违反了下列规则，proxy 则会抛出一个 {{jsxref("TypeError")}}:

- 如果目标对象是可扩展的，那么只能返回 `false`

## 示例

以下代码演示了如何拦截{{jsxref("Object.preventExtensions()")}}。

```js
var p = new Proxy(
  {},
  {
    preventExtensions: function (target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p)); // "called"; outputs false
```

以下代码违反了约束。

```js
var p = new Proxy(
  {},
  {
    preventExtensions: function (target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // 抛出类型错误
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
