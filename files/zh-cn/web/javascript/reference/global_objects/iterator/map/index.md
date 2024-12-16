---
title: Iterator.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`map()`** 方法返回一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#%e8%bf%ad%e4%bb%a3%e5%99%a8%e8%be%85%e5%8a%a9%e6%96%b9%e6%b3%95)，该方法生成由映射函数转换后的迭代器的元素。

## 语法

```js-nolint
map(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器中的每个元素执行的函数。其返回值将由迭代器辅助方法生成。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 正在处理的当前元素的索引。

### 返回值

一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#%e8%bf%ad%e4%bb%a3%e5%99%a8%e8%be%85%e5%8a%a9%e6%96%b9%e6%b3%95)。每当迭代器辅助方法的 `next()` 方法被调用时，它从底层迭代器中获取下一个元素，调用 `callbackFn`，并产生返回值。当底层迭代器完成时，迭代器辅助方法也会完成（`next()` 方法产生 `{ value: undefined, done: true }`）。

## 描述

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`map()` 允许你创建一个新的迭代器，该迭代器在迭代时产生经过转换的元素。

## 示例

### 使用 map()

下面的示例创建了一个生成斐波那契数列中的项的迭代器，并将其转换为每个项的平方的新迭代器，然后读取前几个项：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().map((x) => x ** 2);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 4
```

### 在 for...of 循环中使用 map()

当你不想手动迭代迭代器时，`map()` 是最方便的。因为迭代器也是可迭代的，所以你可以用 {{jsxref("Statements/for...of", "for...of")}} 循环来迭代返回的辅助方法：

```js
for (const n of fibonacci().map((x) => x ** 2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// 输出：
// 1
// 1
// 4
// 9
// 25
// 64
```

等价于：

```js
for (const n of fibonacci()) {
  const n2 = n ** 2;
  console.log(n2);
  if (n2 > 30) {
    break;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.map` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
