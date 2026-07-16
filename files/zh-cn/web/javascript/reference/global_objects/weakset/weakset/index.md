---
title: WeakSet() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
---

**`WeakSet()`** 构造函数创建 {{jsxref("WeakSet")}} 对象。

## 语法

```js-nolint
new WeakSet()
new WeakSet(iterable)
```

> [!NOTE]
> `WeakSet()` 构造函数只能使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用。不使用 `new` 而直接调用会抛出 {{jsxref("TypeError")}}。

### 参数

- `iterable` {{optional_inline}}
  - : 如果传入了一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)，这个对象的所有元素都会被添加到新的 `WeakSet` 对象中。`null` 会被视为 `undefined`。

## 示例

### 使用 WeakSet 对象

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // 将 foo 从集合中移除
ws.has(foo); // false，foo 已经被移除
ws.has(bar); // true，bar 被保留
```

请注意 `foo !== bar`。它们是相似的对象，_但它们**不是同一个对象**_。因此，它们都会被添加到集合中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `WeakSet` 的 polyfill](https://github.com/zloirock/core-js#weakset)
- {{jsxref("WeakSet")}}
