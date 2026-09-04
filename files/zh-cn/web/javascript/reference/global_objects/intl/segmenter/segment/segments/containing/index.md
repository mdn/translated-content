---
title: Segments.prototype.containing()
short-title: containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

[`Segments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 实例的 **`containing()`** 方法返回一个描述字符串中包含指定索引处的码元片段的对象。

{{InteractiveExample("JavaScript 演示：Segments.prototype.containing()")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const segments = segmenterFr.segment(string);

console.log(segments.containing(5));
// 期望输出：
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## 语法

```js-nolint
containing(codeUnitIndex)
```

### 参数

- `codeUnitIndex` {{optional_inline}}
  - : 指定原始输入字符串中代码单元索引的数字。如果省略该值，默认为 `0`。

### 返回值

一个（具有以下属性的）描述原始字符串片段的对象，如果提供的索引值超出范围则返回 `undefined`。

- `segment`
  - : 包含从原始输入字符串中提取的片段的字符串。
- `index`
  - : 原始输入字符串中片段开始处的代码单元索引。
- `input`
  - : 被分割的完整输入字符串。
- `isWordLike`
  - : 仅当 `granularity` 为 `"word"` 时为布尔值；否则为 `undefined`。如果 `granularity` 为 `"word"`，则当片段是类似词语的（即由字母、数字、表意文字等组成）时，`isWordLike` 为 `true`；否则为 `false`。

## 示例

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← 代码单元索引
// ┃A l l o n s┃-┃y┃!┃   ← 代码单元
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);

let current = segments.containing();
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl.Segmenter")}}
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
