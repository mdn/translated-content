---
title: Iterator.prototype.drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`drop()`** 方法返回一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)，该迭代器辅助方法会跳过此迭代器的开头的给定数量的元素。

## 语法

```js-nolint
drop(limit)
```

### 参数

- `limit`
  - : 要从迭代器的开头丢弃的元素数量。

### 返回值

一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)。第一次调用返回的迭代器辅助方法的 `next()` 方法时，当前迭代器立即前进 `limit` 个元素，然后生成下一个元素（即第 `limit+1` 个元素）。然后，迭代器辅助方法会逐一生成剩余元素。如果当前迭代器的元素数量少于 `limit` 个，那么新生成的迭代器辅助方法会在 `next()` 方法第一次调用时立即完成。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `limit` [转换为整数后](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)变成 {{jsxref("NaN")}} 或负数，则抛出该异常。

## 示例

### 使用 drop()

下面的示例创建一个生成斐波那契数列的迭代器，其丢弃前两个元素，并从第 3 个元素之后的元素开始：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().drop(2);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
```

等价于：

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### 在 for...of 循环中使用 drop()

当你不想手动快进迭代器时，`drop()` 是最方便的。因为迭代器也是可迭代的，所以你可以用 {{jsxref("Statements/for...of", "for...of")}} 循环来迭代返回的辅助方法。

```js
for (const n of fibonacci().drop(2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// 输出：
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### 将 drop() 与 take() 结合使用

你可以将 `drop()` 与 {{jsxref("Iterator.prototype.take()")}} 结合使用来获取迭代器的切片：

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

### 丢弃元素数量的下限和上限

当 `limit` 为负数或 {{jsxref("NaN")}} 时，会抛出 {{jsxref("RangeError")}} 异常：

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

当 `limit` 大于该迭代器可生成的元素总数时（比如 {{jsxref("Infinity")}}），返回的迭代器辅助方法会立即丢弃所有元素，并在第一次调用 `next()` 时完成。如果当前迭代器是无限的，则返回的迭代器辅助方法永远不会完成。

```js
fibonacci().drop(Infinity).next(); // 永远不会结束
new Set([1, 2, 3]).values().drop(Infinity).next(); // { value: undefined, done: true }
new Set([1, 2, 3]).values().drop(4).next(); // { value: undefined, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.drop` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.take()")}}
