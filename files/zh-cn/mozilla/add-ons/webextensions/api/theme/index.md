---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
l10n:
  sourceCommit: bb1cd85823386888b85d7286376ed497d427995d
---

使浏览器扩展能够获取浏览器主题的详细信息并更新主题。

你可以使用此 API 在扩展中包含一个主题，该主题定义为 {{WebExtAPIRef("theme.Theme")}} 并通过 {{WebExtAPIRef("theme.update()")}} 应用。你不能在扩展中包含静态主题，静态主题是用[“theme”](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)清单键定义的。清单键“theme”仅用于定义静态主题。有关更多信息，请参见 Extension Workshop 上的 [Themes](https://extensionworkshop.com/documentation/themes/)。

## 类型

- {{WebExtAPIRef("theme.Theme")}}
  - : 代表一个主题的内容。

## 函数

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : 获取当前浏览器主题。
- {{WebExtAPIRef("theme.update()")}}
  - : 更新浏览器的主题。
- {{WebExtAPIRef("theme.reset()")}}
  - : 移除通过调用 {{WebExtAPIRef("theme.update()")}} 所做的任何主题更新。

## 事件

- {{WebExtAPIRef("theme.onUpdated")}}
  - : 当浏览器主题改变时触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
