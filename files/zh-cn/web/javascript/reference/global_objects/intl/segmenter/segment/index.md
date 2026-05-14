---
title: Intl.Segmenter.prototype.segment()
short-title: segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Intl.Segmenter")}} 实例的 **`segment()`** 方法根据此 `Intl.Segmenter` 对象的语言环境和粒度对字符串进行分割。

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.segment()")}}

```js interactive-example
const string1 = "Que ma joie demeure";

const segmenterFrGrapheme = new Intl.Segmenter("fr", {
  granularity: "grapheme",
});
const graphemeSegments = segmenterFrGrapheme.segment(string1);

console.log(Array.from(graphemeSegments)[0]);
// 期望输出：
// Object {segment: 'Q', index: 0, input: 'Que ma joie demeure'}
```

## 语法

```js-nolint
segment(input)
```

### 参数

- `input`
  - : 要分割的文本，为字符串类型。

### 返回值

一个新的可迭代的 [`Segments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 对象，包含使用分割器的语言环境和粒度生成的输入字符串的片段。

## 示例

```js
// 创建一个特定语言环境的分词器
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// 使用它获取字符串片段的迭代器
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// 使用迭代器进行分割
for (const { segment, index, isWordLike } of segments) {
  console.log(
    "segment at code units [%d, %d]: «%s»%s",
    index,
    index + segment.length,
    segment,
    isWordLike ? " (word-like)" : "",
  );
}
// segment at code units [0, 3]: «Moi» (word-like)
// segment at code units [3, 4]: « »
// segment at code units [4, 5]: «?»
// segment at code units [5, 6]: « »
// segment at code units [6, 11]: «N'est» (word-like)
// segment at code units [11, 12]: «-»
// segment at code units [12, 14]: «ce» (word-like)
// segment at code units [14, 15]: « »
// segment at code units [15, 18]: «pas» (word-like)
// segment at code units [18, 19]: « »
// segment at code units [19, 20]: «?»
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
