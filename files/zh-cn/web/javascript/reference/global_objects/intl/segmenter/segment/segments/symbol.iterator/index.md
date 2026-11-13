---
title: Segments.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

[`Segments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 实例的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)，允许 `Segments` 对象被大多数期望可迭代对象的语法所使用，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 {{jsxref("Statements/for...of", "for...of")}} 循环。它返回一个会生成有关每个片段的数据的[片段迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

{{InteractiveExample("JavaScript 演示：Segments.prototype[Symbol.iterator]()")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

for (const segment of iterator) {
  if (segment.segment.length > 4) {
    console.log(segment.segment);
  }
}

// 期望输出："demeure"
```

## 语法

```js-nolint
segments[Symbol.iterator]()
```

### 参数

无。

### 返回值

一个新的会生成有关每个片段数据的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。每个生成的对象与 [`containing()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing) 方法返回的对象具有相同的属性。

## 示例

### 使用 for...of 循环进行迭代

请注意，你很少需要直接调用此方法。`[Symbol.iterator]()` 方法的存在使得 `Segments` 对象是[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)的，而像 `for...of` 循环这样的迭代语法会自动调用此方法来获取用于循环的迭代器。

```js
const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });
const input = "你好，世界！我爱编程。";

for (const value of segmenter.segment(input)) {
  console.log(value);
}

/*
{segment: '你好', index: 0, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '，', index: 2, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '世界', index: 3, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '！', index: 5, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '我', index: 6, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '爱', index: 7, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '编', index: 8, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '程', index: 9, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '。', index: 10, input: '你好，世界！我爱编程。', isWordLike: false}
*/
```

### 手动使用迭代器

你仍然可以手动调用返回的迭代器对象的 `next()` 方法来实现对迭代过程的最大控制。

```js
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);
const iterator = segments[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

/*
{segment: 'Moi', index: 0, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 3, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 4, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: ' ', index: 5, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: "N'est", index: 6, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: '-', index: 11, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'ce', index: 12, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 14, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'pas', index: 15, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 18, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 19, input: "Moi ? N'est-ce pas ?", isWordLike: false}
*/
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl.Segmenter")}}
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
- {{jsxref("Symbol.iterator")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
