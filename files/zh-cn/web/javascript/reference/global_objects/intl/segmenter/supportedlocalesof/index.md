---
title: Intl.Segmenter.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.Segmenter.supportedLocalesOf()`** 静态方法返回一个数组，其中包含在分割操作中受支持的、无需回退到运行时默认区域设置的区域设置。

{{InteractiveExample("JavaScript演示：Intl.Segmenter.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup", granularity: "string" };

console.log(Intl.Segmenter.supportedLocalesOf(locales, options));
// 期望输出：Array ["id-u-co-pinyin", "de-ID"]
//（注意：确切的输出可能取决于浏览器）
```

## 语法

```js-nolint
Intl.Segmenter.supportedLocalesOf(locales)
Intl.Segmenter.supportedLocalesOf(locales, options)
```

### 参数

- `locales`
  - : 带有 {{glossary("BCP 47 language tag", "BCP 47 语言标记")}}的字符串，或此类字符串的数组。关于 `locales` 参数的一般形式和解释，参见 [`Intl` 主页上的参数描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_参数)。
- `options` {{optional_inline}}
  - : 一个可能具有以下属性的对象：
    - `localeMatcher`
      - : 要使用的区域设置匹配算法。可选的值为 `"lookup"` 和 `"best fit"`；默认值为 `"best fit"`。关于此选项的更多信息，参见 {{jsxref("Intl", "Intl", "#语言区域识别和判定", 1)}} 页面。

### 返回值

一个字符串数组，表示给定区域设置标签中的一组子集，这些标签在分割操作中受支持，且无需回退到运行时的默认区域设置。

## 示例

### 使用 supportedLocalesOf()

假设运行时支持印尼语和德语的分割功能，但不支持巴厘语，`supportedLocalesOf` 会返回印尼语和德语的语言标记而不做更改，即使 `pinyin` 排序规则与分割无关且不用于印尼语，而且针对印度尼西亚的专用德语也不太可能被支持。请注意这里指定了 `"lookup"` 算法——`"best fit"` 匹配器可能会认为印尼语是巴厘语的合适匹配，因为大多数巴厘语使用者也懂印尼语，因此也会返回巴厘语的语言标记。

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl.Segmenter")}}
