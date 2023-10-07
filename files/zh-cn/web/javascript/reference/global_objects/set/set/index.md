---
title: Set() constructor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
---

{{JSRef}}

**`Set` 构造函数**能让你创建 `Set` 对象，其可以存储任意类型的唯一值，无论是[基本类型](/zh-CN/docs/Glossary/Primitive)或者对象引用。

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## 语法

```js-nolint
new Set()
new Set(iterable)
```

> **备注：** `Set()` 只能用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构建。试图在没有 `new` 的情况下调用它，会抛出 {{jsxref("TypeError")}}。

### 参数

- `iterable` {{optional_inline}}
  - : 如果传递一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)，它的所有元素将不重复地被添加到新的 `Set` 中。如果不指定此参数或其值为 `null`，则新的 `Set` 为空。

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

- [Polyfill of `Set` in `core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
