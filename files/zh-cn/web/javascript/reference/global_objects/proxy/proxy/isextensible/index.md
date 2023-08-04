---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
---

{{JSRef}}
**handler.isExtensible()** 方法用于拦截对对象的 Object.isExtensible()。

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## 语法

```js
var p = new Proxy(target, {
  isExtensible: function (target) {},
});
```

### 参数

下列参数将会被传递给 `isExtensible`方法。this 绑定在 handler 对象上。

- `target`
  - : 目标对象。

### 返回值

`isExtensible`方法必须返回一个 Boolean 值或可转换成 Boolean 的值。

## 描述

handler.isExtensible() 用于拦截对对象的 Object.isExtensible()。

### 拦截

该方法会拦截目标对象的以下操作：

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

### 约束

如果违背了以下的约束，proxy 会抛出 TypeError:

- `Object.isExtensible(proxy)` 必须同 `Object.isExtensible(target)` 返回相同值。

## 示例

以下代码演示{{jsxref("Object.isExtensible()")}}.

```js
var p = new Proxy(
  {},
  {
    isExtensible: function (target) {
      console.log("called");
      return true; // 也可以 return 1; 等表示为 true 的值
    },
  },
);

console.log(Object.isExtensible(p)); // "called"; outputs true
```

以下代码演示违反约束的情况。

```js
var p = new Proxy(
  {},
  {
    isExtensible: function (target) {
      return false; // return 0; return NaN 等都会报错
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
