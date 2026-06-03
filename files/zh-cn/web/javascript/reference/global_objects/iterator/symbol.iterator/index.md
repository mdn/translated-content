---
title: Iterator.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jsxref("Iterator")}} 实例的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)，并允许内置迭代器被大多数期望可迭代对象的语法所消费，如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 {{jsxref("Statements/for...of", "for...of")}} 循环。它返回 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值，即迭代器对象本身。

## 语法

```js-nolint
iterator[Symbol.iterator]()
```

### 参数

无。

### 返回值

[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的值，即迭代器对象本身。

## 示例

### 使用 for...of 循环进行迭代

请注意，你很少需要直接调用这个方法。`[Symbol.iterator]()` 方法的存在使内置迭代器成为[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)对象，而像 `for...of` 循环这样的迭代语法会自动调用这个方法来获取用于进行循环的迭代器。

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// 输出：1、2、3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Iterator")}}
- {{jsxref("Symbol.iterator")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
