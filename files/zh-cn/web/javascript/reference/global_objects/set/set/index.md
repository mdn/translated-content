---
title: Set() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
---

**`Set()`** 构造函数创建 {{jsxref("Set")}} 对象。

{{InteractiveExample("JavaScript Demo: Set.prototype Constructor")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## 语法

```js-nolint
new Set()
new Set(iterable)
```

> [!NOTE]
> `Set()` 只能用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构建。试图在没有 `new` 的情况下调用它，会抛出 {{jsxref("TypeError")}}。

### 参数

- `iterable` {{optional_inline}}
  - : 如果传入一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)，它的所有元素将不重复地被添加到新的 `Set` 中。如果不指定此参数或其值为 `null`，则新的 `Set` 为空。

### 返回值

一个新的 `Set` 对象。

## 示例

### 使用 `Set` 对象

```js
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Set` 的 polyfill](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
