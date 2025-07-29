---
title: i18n.getPreferredSystemLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getPreferredSystemLanguages
l10n:
  sourceCommit: 44f564a6c7918d7db234b8e7126472161a407591
---

{{AddonSidebar}}

返回操作系统的首选语言环境。这与浏览器中设置的语言环境不同；要获取浏览器的语言环境，请使用 {{WebExtAPIRef('i18n.getAcceptLanguages')}}。

## 语法

```js-nolint
let preferredSystemLanguages = await browser.i18n.getPreferredSystemLanguages()
```

### 参数

无。

## 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，兑现为一个包含 {{WebExtAPIRef("i18n.LanguageCode")}} 字符串的数组。

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
