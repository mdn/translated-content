---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

**`propertyIsEnumerable()`** 方法返回一个布尔值，表示指定的属性是否是对象的[可枚举自有](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性。

{{InteractiveExample("JavaScript Demo: Object.prototype.propertyIsEnumerable()", "taller")}}

```js interactive-example
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable("property1"));
// Expected output: true

console.log(array1.propertyIsEnumerable(0));
// Expected output: true

console.log(array1.propertyIsEnumerable("length"));
// Expected output: false
```

## 语法

```js-nolint
propertyIsEnumerable(prop)
```

### 参数

- `prop`
  - : 需要测试的属性名，可以是字符串或 {{jsxref("Symbol")}}。

### 返回值

一个布尔值，指示指定的属性是否可枚举并且是对象自有的属性。

## 描述

所有继承自 `Object.prototype`（即除了 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)之外的所有对象）都继承了 `propertyIsEnumerable()` 方法。该方法判断指定的属性（字符串或 symbol 值）是否是对象的可枚举自有属性。如果对象没有指定的属性，则该方法返回 `false`。

此方法等价于 [`Object.getOwnPropertyDescriptor(obj, prop)?.enumerable ?? false`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)。

## 示例

### 使用 propertyIsEnumerable()

以下示例演示了在对象和数组上使用 `propertyIsEnumerable()`。

```js
const o = {};
const a = [];
o.prop = "是可枚举的";
a[0] = "是可枚举的";

o.propertyIsEnumerable("prop"); // true
a.propertyIsEnumerable(0); // true
```

### 用户自定义对象和内置对象

大多数内置属性默认情况下是不可枚举的，而用户创建的对象属性通常是可枚举的，除非明确指定为不可枚举。

```js
const a = ["是可枚举的"];

a.propertyIsEnumerable(0); // true
a.propertyIsEnumerable("length"); // false

Math.propertyIsEnumerable("random"); // false
globalThis.propertyIsEnumerable("Math"); // false
```

### 自有属性和继承属性

只有可枚举自有属性会令 `propertyIsEnumerable()` 返回 `true`，尽管 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环会访问所有可枚举属性，包括继承的属性。

```js
const o1 = {
  enumerableInherited: "是可枚举的",
};
Object.defineProperty(o1, "nonEnumerableInherited", {
  value: "是不可枚举的",
  enumerable: false,
});
const o2 = {
  // o1 是 o2 的原型
  __proto__: o1,
  enumerableOwn: "是可枚举的",
};
Object.defineProperty(o2, "nonEnumerableOwn", {
  value: "是不可枚举的",
  enumerable: false,
});

o2.propertyIsEnumerable("enumerableInherited"); // false
o2.propertyIsEnumerable("nonEnumerableInherited"); // false
o2.propertyIsEnumerable("enumerableOwn"); // true
o2.propertyIsEnumerable("nonEnumerableOwn"); // false
```

### 测试 Symbol 属性

`propertyIsEnumerable()` 也支持 {{jsxref("Symbol")}} 属性。请注意，大多数枚举方法只访问字符串属性；当使用 {{jsxref("Object.assign()")}} 或[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)时，symbol 属性的可枚举性才有用。更多信息，请参见[属性的枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。

```js
const sym = Symbol("可枚举的");
const sym2 = Symbol("不可枚举的");
const o = {
  [sym]: "是可枚举的",
};
Object.defineProperty(o, sym2, {
  value: "是不可枚举的",
  enumerable: false,
});

o.propertyIsEnumerable(sym); // true
o.propertyIsEnumerable(sym2); // false
```

### 在 null 原型对象上使用

由于 `null` 原型对象不从 `Object.prototype` 继承，它们不会继承 `propertyIsEnumerable()` 方法。你必须使用该对象作为 `this` 来调用 `Object.prototype.propertyIsEnumerable`。

```js
const o = {
  __proto__: null,
  enumerableOwn: "是可枚举的",
};

o.propertyIsEnumerable("enumerableOwn"); // TypeError: o.propertyIsEnumerable is not a function
Object.prototype.propertyIsEnumerable.call(o, "enumerableOwn"); // true
```

或者，你也可以使用 {{jsxref("Object.getOwnPropertyDescriptor()")}}，它也有助于区分不存在的属性和实际上不可枚举的属性。

```js
const o = {
  __proto__: null,
  enumerableOwn: "是可枚举的",
};

Object.getOwnPropertyDescriptor(o, "enumerableOwn")?.enumerable; // true
Object.getOwnPropertyDescriptor(o, "nonExistent")?.enumerable; // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
