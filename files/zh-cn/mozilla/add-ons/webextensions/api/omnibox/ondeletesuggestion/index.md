---
title: omnibox.onDeleteSuggestion
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onDeleteSuggestion
l10n:
  sourceCommit: 873e38320b7f7dbe0492f96a02e7e6503ac8c3b3
---

{{AddonSidebar}}

当用户删除一个建议的时候触发。如果 {{WebExtAPIRef("omnibox.SuggestResult","SuggestResult")}} 的属性 `deletable` 值为 `true` 时，该建议可以被删除。

## 语法

```js-nolint
browser.omnibox.onDeleteSuggestion.addListener(listener)
browser.omnibox.onDeleteSuggestion.removeListener(listener)
browser.omnibox.onDeleteSuggestion.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。若正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `text`
  - : `string`。关于被删除建议的描述信息。

## 示例

下述示例打印被删除的建议到控制台中：

```js
function logDeletedSuggestion(text) {
  console.log(`用户删除了：${text}`);
}

browser.omnibox.onDeleteSuggestion.addListener(logDeletedSuggestion);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
