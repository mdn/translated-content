---
title: i18n.getSystemUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getSystemUILanguage
l10n:
  sourceCommit: 44f564a6c7918d7db234b8e7126472161a407591
---

{{AddonSidebar}}

返回操作系统的当前 UI 区域设置。这与 {{WebExtAPIRef('i18n.getUILanguage')}} 不同，后者返回的是 Web 浏览器的 UI 区域设置。

## 语法

```js-nolint
let systemUILanguage = await browser.i18n.getSystemUILanguage()
```

### 参数

无。

## 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，兑现为 {{WebExtAPIRef("i18n.LanguageCode")}}。

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
