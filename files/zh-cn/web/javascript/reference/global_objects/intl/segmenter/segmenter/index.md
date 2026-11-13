---
title: Intl.Segmenter() 构造函数
short-title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.Segmenter()`** 构造函数创建 {{jsxref("Intl.Segmenter")}} 对象。

{{InteractiveExample("JavaScript 演示：Intl.Segmenter() 构造函数")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// 期望输出："Que"

console.log(iterator.next().value.segment);
// 期望输出：" "
```

## 语法

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> [!NOTE]
> `Intl.Segmenter()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 来构造。尝试在没有 `new` 的情况下调用会抛出 {{jsxref("TypeError")}}。

### 参数

- `locales` {{optional_inline}}
  - : 带有 {{glossary("BCP 47 language tag", "BCP 47 语言标记")}}的字符串，或 {{jsxref("Intl.Locale")}} 实例，或这些类型的区域设置标识符组成的数组。当传入 `undefined` 或所有指定的区域设置标识符均不被支持时，将使用运行时的默认区域设置。关于 `locales` 参数的一般形式和解释，参见 [`Intl` 主页上的参数描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_参数)。
- `options` {{optional_inline}}
  - : 包含以下属性的对象，按获取顺序排列（所有属性都是可选的）：
    - `localeMatcher`
      - : 要使用的区域设置匹配算法。可选的值为 `"lookup"` 和 `"best fit"`；默认值为 `"best fit"`。关于此选项的更多信息，参见[语言区域识别和判定](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#语言区域识别和判定)。
    - `granularity`
      - : 输入应该按多细的粒度进行分割。可选的值为：
        - `"grapheme"`（默认）
          - : 根据区域设置，按字素簇（用户感知的字符）边界分割输入。
        - `"word"`
          - : 根据区域设置，按词边界分割输入。
        - `"sentence"`
          - : 根据区域设置，按句子边界分割输入。

### 返回值

一个新的 {{jsxref("Intl.Segmenter")}} 实例。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `locales` 或 `options` 包含无效的值，则抛出此异常。

## 示例

### 基础用法

下面的例子展示了如何计算一个日语字符串中的词汇数量（使用 `String` 方法分割将得到错误的结果）。

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
