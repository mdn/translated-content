---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

**`Object.defineProperties()`** 静态方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

{{InteractiveExample("JavaScript Demo: Object.defineProperties()")}}

```js interactive-example
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
```

## 语法

```js-nolint
Object.defineProperties(obj, props)
```

### 参数

- `obj`
  - : 在其上定义或修改属性的对象。
- `props`
  - : 一个对象，其中每个键表示要定义或修改的属性的名称，每个值是描述该属性的对象。在 `props` 中的每个值必须是且只能是数据描述符或访问器描述符之一；不能同时为两者（更多详细信息，请参见{{jsxref("Object.defineProperty()")}}）。

    数据描述符和访问器描述符可以包含以下可选键：
    - `configurable`
      - : 如果此属性描述符的类型可以更改并且属性可以从相应的对象中删除，则为 `true`。**默认为 `false`。**
    - `enumerable`
      - : 如果此属性在枚举相应对象的属性时应显示出来，则为 `true`。**默认为 `false`。**

    数据描述符还具有以下可选键：
    - `value`
      - : 与属性关联的值。可以是任何有效的 JavaScript 值（数字、对象、函数等）。**默认为 {{jsxref("undefined")}}。**
    - `writable`
      - : 如果与属性关联的值可以使用{{jsxref("Operators#赋值运算符", "赋值运算符", "", 1)}}更改，则为 `true`。**默认为 `false`。**

    访问器描述符还具有以下可选键：
    - `get`
      - : 作为该属性的 getter 函数，如果没有 getter 则为 {{jsxref("undefined")}}。函数返回值将被用作属性的值。**默认为 {{jsxref("undefined")}}。**
    - `set`
      - : 作为该属性的 setter 函数，如果没有 setter 则为 {{jsxref("undefined")}}。该函数将只接收一个参数，即被分配给属性的新值。**默认为 {{jsxref("undefined")}}。**

    如果一个属性描述符没有 `value`、`writable`、`get`、`set` 键中的任何一个，那么它被视为一个数据描述符。如果一个属性描述符同时具有 `value` 或 `writable` 和 `get` 或 `set` 键中的任意一个组合，就会抛出异常。

### 返回值

传递给函数的对象。

## 示例

### 使用 Object.defineProperties

```js
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // 等等……
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.defineProperties` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
