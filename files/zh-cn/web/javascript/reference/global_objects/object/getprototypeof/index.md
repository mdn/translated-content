---
title: Object.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.getPrototypeOf()`** 静态方法返回指定对象的原型（即内部 `[[Prototype]]` 属性的值）。

{{InteractiveExample("JavaScript 演示：Object.getPrototypeOf()", "shorter")}}

```js interactive-example
const prototype = {};
const object = Object.create(prototype);

console.log(Object.getPrototypeOf(object) === prototype);
// 预期输出：true
```

## 语法

```js-nolint
Object.getPrototypeOf(obj)
```

### 参数

- `obj`
  - : 要返回其原型的对象。

### 返回值

给定对象的原型，可能是 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 示例

### 使用 getPrototypeOf

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### 非对象强制类型转换

在 ES5 中，如果 `obj` 参数不是对象，则会抛出 {{jsxref("TypeError")}} 异常。在 ES2015 中，该参数将被强制转换为 {{jsxref("Object")}}。

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object（ES5 代码）
Object.getPrototypeOf("foo");
// String.prototype（ES2015 代码）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.getPrototypeOf` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.getPrototypeOf` 的 es-shims polyfill 实现](https://www.npmjs.com/package/object.getprototypeof)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- John Resig 撰写的 [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/)（2008）
