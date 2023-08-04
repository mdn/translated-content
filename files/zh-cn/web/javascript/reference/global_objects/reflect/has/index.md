---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
---

{{JSRef}}

静态方法 **`Reflect.has()`** 作用与 [`in` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 相同。

## 句法

```plain
Reflect.has(target, propertyKey)
```

### 参数

- `target`
  - : 目标对象。
- `propertyKey`
  - : 属性名，需要检查目标对象是否存在此属性。

### 返回值

一个 {{jsxref("Boolean")}} 类型的对象指示是否存在此属性。

### 异常

如果目标对象并非{{jsxref("Object")}} 类型，抛出{{jsxref("TypeError")}}。

## 描述

`Reflect.has` 用于检查一个对象是否拥有某个属性，相当于[`in` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 。

## 示例

### 使用 `Reflect.has()`

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// 如果该属性存在于原型链中，返回 true
Reflect.has({ x: 0 }, "toString");

// Proxy 对象的 .has() 句柄方法
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关连接

- {{jsxref("Reflect")}}
- [`in` operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)
