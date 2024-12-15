---
title: omnibox.onInputStarted
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputStarted
l10n:
  sourceCommit: 
---

{{AddonSidebar}}

当用户开始与扩展交互（在地址栏输入关键词以及一个空格）时触发。

这个事件将在任何 {{WebExtAPIRef("omnibox.onInputChanged")}} 事件之前发送。

## 语法

```js-nolint
browser.omnibox.onInputStarted.addListener(listener)
browser.omnibox.onInputStarted.removeListener(listener)
browser.omnibox.onInputStarted.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 添加一个监听器到这个事件。
- `removeListener(listener)`
  - : 停止监听这个事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到这个事件。若在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当这个事件发生时调用的函数。该函数不接收任何参数。

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
> 该 API 基于 Chromium 的 [`chrome.omnibox`](https://developer.chrome.google.cn/docs/extensions/reference/api/omnibox) API。
