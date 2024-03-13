---
title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
---

{{JSRef}}

**`Intl.Segmenter()`** 构造函数会创建一个 [`Intl.Segmenter`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) 对象，该对象支持语言敏感的文本分割。

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## 语法

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> **备注：** `Intl.Segmenter()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符来构建。如果尝试不使用 `new` 操作符来构建，将会抛出一个 {{jsxref("TypeError")}} 错误。

### 参数

- `locales` {{optional_inline}}
  - : 带有 BCP 47 语言区域标记的一个字符串，或者一个这样的字符串数组。对于 `locales` 参数的一般形式和解释，参见[语言区域识别和判定](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#语言区域识别和判定)。
- `options` {{optional_inline}}
  - : 带有部分或全部以下属性的一个对象：
    - `granularity` {{optional_inline}}
      - : 字符串。可选值如下：
        - `"grapheme"`（默认）
          - : 根据语言区域，将输入值按字（用户可以感知的字符）划分边界。
        - `"word"`
          - : 根据语言区域，将输入值按词划分边界。
        - `"sentence"`
          - : 根据语言区域，将输入值按句划分边界。
    - `localeMatcher` {{optional_inline}}
      - : 将要使用的语言区域匹配算法。可选值如下：
        - `"best fit"`（默认）
          - : 运行时可能会选择一个可能比查找算法的结果更加合适的语言区域。
        - `"lookup"`
          - : 使用 [BCP 47 查找算法](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4)来从 `locales` 参数中选择语言区域。对于 `locales` 参数中的每一个语言区域，会返回第一个运行时支持的语言区域（有可能会移除用于限制区域的子标记，来找到一个支持的语言区域。换句话说，如果运行时支持 `"de"` 但不支持 `"de-CH"`，用户传入的 `"de-CH"` 可能就会以 `"de"` 为结果进行使用）。

### 返回值

一个新的 [`Intl.Segmenter`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) 实例。

## 示例

### 基础用法

下面的例子展示了如何计算在一个日语字符串中使用了多少个词汇（使用 `String` 提供的分割方法将得到错误的结果）。

```js
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// 8，文本将会分割为 '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
