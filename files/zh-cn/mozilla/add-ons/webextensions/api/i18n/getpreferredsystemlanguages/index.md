---
title: i18n.getPreferredSystemLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getPreferredSystemLanguages
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

返回操作系统的首选区域设置。这与浏览器中设置的区域设置不同；若要获取浏览器的区域设置，请使用 {{WebExtAPIRef('i18n.getAcceptLanguages')}}。

## 语法

```js-nolint
let preferredSystemLanguages = await browser.i18n.getPreferredSystemLanguages()
```

### 参数

无。

## 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其将兑现为包含 {{WebExtAPIRef("i18n.LanguageCode")}} 字符串的数组。

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
