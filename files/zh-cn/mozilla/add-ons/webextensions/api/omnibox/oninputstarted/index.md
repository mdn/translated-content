---
title: omnibox.onInputStarted
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputStarted
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

当用户开始与扩展交互（在地址栏输入扩展的关键词以及一个空格）时触发。

这个事件将在任何 {{WebExtAPIRef("omnibox.onInputChanged")}} 事件之前发送。

## 语法

```js-nolint
browser.omnibox.onInputStarted.addListener(listener)
browser.omnibox.onInputStarted.removeListener(listener)
browser.omnibox.onInputStarted.hasListener(listener)
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

- `listener`
  - : 当此事件发生时调用的函数。该函数不需要传递任何参数。

## 浏览器兼容性

{{Compat}}

## 示例

```js
browser.omnibox.onInputStarted.addListener(() => {
  console.log("用户已经开始交互");
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
