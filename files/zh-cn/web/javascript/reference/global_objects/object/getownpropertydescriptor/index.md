---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
---

{{JSRef}}

**`Object.getOwnPropertyDescriptor()`** 静态方法返回一个对象，该对象描述给定对象上特定属性（即直接存在于对象上而不在对象的原型链中的属性）的配置。返回的对象是可变的，但对其进行更改不会影响原始属性的配置。

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyDescriptor()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");

console.log(descriptor1.configurable);
// Expected output: true

console.log(descriptor1.value);
// Expected output: 42
```

## 语法

```js-nolint
Object.getOwnPropertyDescriptor(obj, prop)
```

### 参数

- `obj`
  - : 要查找其属性的对象。
- `prop`
  - : 要检索其描述的属性的名称或 {{jsxref("Symbol")}}。

### 返回值

如果指定的属性存在于对象上，则返回其属性描述符，否则返回 {{jsxref("undefined")}}。

## 描述

该方法允许查看属性的精确描述。在 JavaScript 中，一个*属性*由一个字符串值的名称或一个 {{jsxref("Symbol")}} 和一个属性描述符组成。关于属性描述符类型及其特性的更多信息可以在 {{jsxref("Object.defineProperty()")}} 中找到。

一个*属性描述符*是一个记录，具有以下一些特性：

- `value`
  - : 与属性关联的值（仅限数据描述符）。
- `writable`
  - : 当且仅当与属性关联的值可以更改时，为 `true`（仅限数据描述符）。
- `get`
  - : 作为属性 getter 的函数，如果没有 getter 则为 {{jsxref("undefined")}}（仅限访问器描述符）。
- `set`
  - : 作为属性 setter 的函数，如果没有 setter 则为 {{jsxref("undefined")}}（仅限访问器描述符）。
- `configurable`
  - : 当且仅当此属性描述符的类型可以更改且该属性可以从相应对象中删除时，为 `true`。
- `enumerable`
  - : 当且仅当此属性在相应对象的属性枚举中出现时，为 `true`。

## 示例

### 使用 Object.getOwnPropertyDescriptor()

```js
let o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   get: [Function: get foo],
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for("baz")]: 73 };
d = Object.getOwnPropertyDescriptor(o, Symbol.for("baz"));
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, "qux", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "qux");
console.log(d);
// {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

## 非对象强制转换

在 ES5 中，如果该方法的第一个参数不是对象（而是一个基本类型值），则会导致 {{jsxref("TypeError")}}。在 ES2015 中，首先会将非对象的第一个参数强制转换为对象。

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor("foo", 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
