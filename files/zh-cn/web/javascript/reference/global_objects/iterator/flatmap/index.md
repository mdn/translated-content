---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{SeeCompatTable}}

{{jsxref("Iterator")}} 实例的 **`flatMap()`** 方法返回一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)，该迭代器辅助方法将原始迭代器中的每个元素映射到一个函数中，并生成由映射函数返回的元素（这些元素包含在另一个迭代器或可迭代对象中）。

## 语法

```js-nolint
flatMap(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器产生的每个元素执行的函数。其应该返回一个迭代器或可迭代对象，该对象生成的元素将被 `flatMap()` 所产生，或者单个非迭代器/可迭代对象值，该值将被 `flatMap()` 所产生。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

一个新的[迭代器辅助方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#迭代器辅助方法)。当该迭代器辅助方法的 `next()` 方法第一次被调用时，该辅助方法会在底层迭代器产生的第一个元素调用 `callbackFn`，其返回值应该是一个迭代器或可迭代对象，并将被迭代器辅助方法逐个产生（类似 {{jsxref("Operators/yield*", "yield*")}}）。当 `callbackFn` 返回的上一个元素完成时，将从底层迭代器中获取下一个元素。当底层迭代器完成时，迭代器辅助方法也完成（`next()` 方法产生 `{ value: undefined, done: true }`）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `callbackFn` 返回一个非迭代器/可迭代对象值或字符串原始值，则抛出该异常。

## 描述

`flatMap` 接受 `callbackFn` 两种类型的返回值：迭代器或可迭代对象。它们与 {{jsxref("Iterator.from()")}} 处理方式相同：如果返回值是可迭代的，则调用 `[Symbol.iterator]()` 方法，并使用其返回值；否则，将返回值视为一个迭代器，并调用其 `next()` 方法。

```js
[1, 2, 3]
  .values()
  .flatMap((x) => {
    let itDone = false;
    const it = {
      next() {
        if (itDone) {
          return { value: undefined, done: true };
        }
        itDone = true;
        return { value: x, done: false };
      },
    };
    switch (x) {
      case 1:
        // 不是迭代器的可迭代对象
        return { [Symbol.iterator]: () => it };
      case 2:
        // 不是可迭代对象的迭代器
        return it;
      case 3:
        // 可迭代的迭代器视为可迭代对象
        return {
          ...it,
          [Symbol.iterator]() {
            console.log("[Symbol.iterator]() 被调用了");
            return it;
          },
        };
    }
  })
  .toArray();
// 输出“[Symbol.iterator]() 被调用了”
// 返回 [1, 2, 3]
```

## 示例

### 合并 map

以下示例将两个 {{jsxref("Map")}} 对象合并为一个：

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const map2 = new Map([
  ["d", 4],
  ["e", 5],
  ["f", 6],
]);

const merged = new Map([map1, map2].values().flatMap((x) => x));
console.log(merged.get("a")); // 1
console.log(merged.get("e")); // 5
```

这避免了创建 map 内容的临时拷贝。请注意，必须先将数组 `[map1, map2]` 转换为迭代器（通过 {{jsxref("Array.prototype.values()")}}），因为 {{jsxref("Array.prototype.flatMap()")}} 只能展开数组，而不是可迭代对象。

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### 返回字符串

虽然字符串是可迭代对象，但 `flatMap()` 明确拒绝从 `callbackFn` 返回的字符串原始值，因为按码位迭代的行为通常不是你想要的。

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

你可以想要将其包装在数组中，以便整个字符串作为一个值被生成。

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

或者，如果你想要按码位迭代，你可以使用 {{jsxref("Iterator.from()")}} 将其转换为一个合适的迭代器：

```js
[1, 2, 3]
  .values()
  .flatMap((x) => Iterator.from(String(x * 10)))
  .toArray();
// ['1', '0', '2', '0', '3', '0']
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.prototype.flatMap` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
