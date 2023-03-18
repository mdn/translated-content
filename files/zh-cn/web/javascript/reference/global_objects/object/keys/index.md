---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

{{JSRef}}

**`Object.keys()`** 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## 语法

```js
Object.keys(obj)
```

### 参数

- `obj`
  - : 要返回其枚举自身属性的对象。

### 返回值

一个表示给定对象的所有可枚举属性的字符串数组。

## 描述

`Object.keys()` 返回一个所有元素为字符串的数组，其元素来自给定的 `object` 上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。

## 示例

```js
// 简单数组
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 类数组对象
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 具有随机键顺序的类数组对象
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo 是一个不可枚举的属性
const myObj = Object.create({}, {
  getFoo: {
    value() { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

如果你想获取一个对象的所有属性，甚至包括不可枚举的，请查看 {{jsxref("Object.getOwnPropertyNames")}}。

## 注意

在 ES5 里，如果此方法的参数不是对象（而是一个原始值），那么它会抛出 {{jsxref("TypeError")}}。

在 ES2015 中，非对象的参数将被强制转换为一个对象。

```js
// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Polyfill of `Object.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
