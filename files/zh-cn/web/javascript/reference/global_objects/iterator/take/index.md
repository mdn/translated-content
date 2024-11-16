---
title: Iterator.prototype.take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 2ce8f6f9d08cd6f10b77c4853ef5494c690b56b1
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`take()`** 方法返回一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)，该迭代器辅助方法生成此迭代器中给定数量的元素，然后终止。

## 语法

```js-nolint
take(limit)
```

### 参数

- `limit`
  - : 要从迭代器的开头获取的元素数量。

### 返回值

一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)。返回的迭代器辅助方法逐个生成原始迭代器中的元素，并在生成 `limit` 个元素后（或原始迭代器耗尽时）完成（`next()` 方法产生 `{ value: undefined, done: true }`）。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `limit` [转换为整数后](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)变成 {{jsxref("NaN")}} 或负数，则抛出该异常。

## 示例

### 使用 take()

下面的示例创建了一个生成斐波那契数列中的项的迭代器，然后打印前三个项：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().take(3);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // undefined
```

### 在 for...of 循环中使用 take()

当你不想手动快进迭代器时，`take()` 是最方便的。因为迭代器也是可迭代的，所以你可以用 {{jsxref("Statements/for...of", "for...of")}} 循环来迭代返回的辅助方法。

```js
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// 输出：
// 1
// 1
// 2
// 3
// 5
```

因为 `fibonacci()` 是一个无限迭代器，你无法直接使用 `for` 循环来迭代它。

### 将 drop() 与 take() 结合使用

你可以将 `take()` 与 {{jsxref("Iterator.prototype.drop()")}} 结合使用来获取迭代器的切片：

```js
for (const n of fibonacci().drop(2).take(5)) {
  // 丢弃第一个元素，然后取接下来的五个元素
  console.log(n);
}
// 输出：
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // 取前五个元素，然后丢弃其中的前两个元素
  console.log(n);
}
// 输出：
// 2
// 3
// 5
```

### 获取元素数量的下限和上限

当 `limit` 为负数或 {{jsxref("NaN")}} 时，会抛出 {{jsxref("RangeError")}} 异常：

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

当 `limit` 大于该迭代器可生成的元素总数时（比如 {{jsxref("Infinity")}}），返回的迭代器辅助方法的行为与原始迭代器基本相同：

```js
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// 输出：
// 1
// 2
// 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.take` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.drop()")}}
