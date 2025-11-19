---
title: HTMLElement：lang 属性
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} 接口的 **`lang`** 属性表示元素属性值和文本内容的基础语言，其格式为 {{glossary("BCP 47 language tag" , "BCP 47 语言标签")}}。它反映元素的 [`lang`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang) 属性；`xml:lang` 属性不会影响此属性的值。

请注意，如果未指定 `lang` 属性，元素本身仍可能从其父元素继承语言。但是，这种继承的语言不会反映在此属性的值中。

## 值

一个字符串。常见示例包括“en”表示英语、“ja”表示日语、“es”表示西班牙语等。如果未指定，该值为空字符串。

## 示例

```js
// 此代码片段用于比较基础语言，并根据语言将用户重定向到另一个 URL。
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
