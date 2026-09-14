---
title: Reflect.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.has()`** 静态方法的作用类似于 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符，但它以函数的形式实现。

{{InteractiveExample("JavaScript 演示：Reflect.has()")}}

```js interactive-example
const object = {
  property1: 42,
};

console.log(Reflect.has(object, "property1"));
// 期望输出：true

console.log(Reflect.has(object, "property2"));
// 期望输出：false

console.log(Reflect.has(object, "toString"));
// 期望输出：true
```

## 语法

```js-nolint
Reflect.has(target, propertyKey)
```

### 参数

- `target`
  - : 要查找该属性的目标对象。
- `propertyKey`
  - : 要检测的属性名称。

### 返回值

{{jsxref("Boolean")}}，表示 `target` 是否具有该属性。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `target` 不是对象，则抛出此异常。

## 描述

`Reflect.has()` 提供了一种用于检查属性是否存在于对象中的反射语义。也就是说，`Reflect.has(target, propertyKey)` 在语义上等价于：

```js
propertyKey in target;
```

`Reflect.has()` 会调用 `target` 的 `[[HasProperty]]` [对象内部方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#对象内部方法)。

## 示例

### 使用 Reflect.has()

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// 对原型链上的属性也会返回 true
Reflect.has({ x: 0 }, "toString");

// 带有 .has() 处理器方法的 Proxy
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

`Reflect.has` 会对任何继承的属性返回 `true`，这一点与 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符相同：

```js
const a = { foo: 123 };
const b = { __proto__: a };
const c = { __proto__: b };
// 原型链为：c -> b -> a
Reflect.has(c, "foo"); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`中 `Reflect.has` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)
- [`handler.has()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
