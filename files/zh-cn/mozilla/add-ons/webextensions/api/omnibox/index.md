---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

允许扩展实现当用户在浏览器的地址栏输入时的自定义行为。

当用户聚焦地址栏并开始输入时，浏览器会显示一个下拉菜单，其中包含基于用户输入的建议页面。这使用户可以快速访问，例如，他们的历史记录或书签中的页面。

当用户输入扩展定义的关键字时，omnibox API 为扩展提供了一种自定义显示在下拉菜单中的建议的方法。它是这样工作的：

1. 首先，扩展必须在其 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中包含[“omnibox”](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)键，其用于定义一个关键字。
2. 当用户聚焦地址栏，输入扩展定义的关键字以及一个空格后，扩展会收到一个 {{WebExtAPIRef("omnibox.onInputStarted")}} 事件。
3. 可选地，扩展可以调用 {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} 来定义显示在地址栏下拉菜单中的第一个建议。
4. 当用户继续输入字符时，扩展将收到 {{WebExtAPIRef("omnibox.onInputChanged")}} 事件。事件监听器将传入用户输入的值，并可以使用建议填充地址栏下拉菜单。如果扩展使用 {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} 设置了默认建议，则该建议将显示在下拉菜单中的第一项处。
5. 当用户接受建议时，扩展将收到一个 {{WebExtAPIRef("omnibox.onInputEntered")}} 事件。事件监听器将传入接受的建议。
6. 当用户删除建议时，扩展将收到一个 {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} 事件。
7. 当用户关闭下拉菜单时，扩展将收到一个 {{WebExtAPIRef("omnibox.onInputCancelled")}} 事件。

## 类型

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : 描述用于处理选中的建议的推荐的方法：在当前标签页中打开，在一个新的前台标签页中打开，还是在一个新的后台标签页中打开。
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : 表示要添加到地址栏下拉菜单中的建议的对象。

### 函数

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : 定义用户输入扩展定义的关键字以及一个空格时显示在下拉菜单中的第一个建议。

## 事件

- {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}
  - : 当用户删除建议时触发。
- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : 当用户聚焦地址栏，输入扩展定义的关键字以及一个空格时触发。
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : 当用户聚焦地址栏，输入扩展关键字和一个空格后，输入内容发生变化时触发。
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : 当用户接受扩展建议时触发。
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : 当用户在聚焦地址栏、输入扩展关键字和一个空格后关闭地址栏下拉菜单时触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
