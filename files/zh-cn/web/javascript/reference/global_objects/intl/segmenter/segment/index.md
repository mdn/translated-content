---
title: Intl.Segmenter.prototype.segment()
short-title: segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Intl.Segmenter")}} 实例的 **`segment()`** 方法根据当前 `Intl.Segmenter` 对象的区域设置和粒度对字符串进行分割。

{{InteractiveExample("JavaScript 演示：Intl.Segmenter.prototype.segment()")}}

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

一个新的可迭代的 [`Segments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 对象，其中包含根据当前分割器的区域设置和粒度对输入字符串分割后生成的片段。

## 示例

```js
// 创建一个特定区域设置的分词器
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// 使用它获取字符串片段的迭代器
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// 使用迭代器进行分割
for (const { segment, index, isWordLike } of segments) {
  console.log(
    "对码元进行分割 [%d, %d]：«%s»%s",
    index,
    index + segment.length,
    segment,
    isWordLike ? " (word-like)" : "",
  );
}
// 对码元进行分割 [0, 3]:«Moi»（类似单词）
// 对码元进行分割 [3, 4]：« »
// 对码元进行分割 [4, 5]：«?»
// 对码元进行分割 [5, 6]：« »
// 对码元进行分割 [6, 11]：«N'est»（类似单词）
// 对码元进行分割 [11, 12]：«-»
// 对码元进行分割 [12, 14]：«ce»（类似单词）
// 对码元进行分割 [14, 15]：« »
// 对码元进行分割 [15, 18]：«pas»（类似单词）
// 对码元进行分割 [18, 19]：« »
// 对码元进行分割 [19, 20]：«?»
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
