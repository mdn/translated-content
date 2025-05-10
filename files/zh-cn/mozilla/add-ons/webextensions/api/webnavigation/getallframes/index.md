---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

给定一个标签页 ID，检索其包含的所有框架的信息。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingFrames = browser.webNavigation.getAllFrames(
  details                // object
)
```

### 参数

- `details`

  - : `object`。关于要从中检索所有框架的标签页的信息。

    - `tabId`
      - : `integer`。标签页的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其将被解析为一个对象数组，每个对象具有以下属性：

- `errorOccurred`
  - : `boolean`。如果此框架中的最后一次导航因错误中断（即触发了 {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} 事件），则为 true。
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`。此值在现代浏览器中未设置。当设置时，它表示运行此标签页渲染器的进程 ID。
- `frameId`
  - : `integer`。框架的 ID。如果这是主框架，则 `frameId` 为零。
- `parentFrameId`
  - : `integer`。此框架父框架的 ID。如果没有父框架（即此框架是标签页中的顶级浏览上下文），则为 -1。
- `url`
  - : `string`。当前与此框架关联的 URL。

如果标签页被丢弃，Promise 将解析为 `null` 值。如果找不到指定的标签页或发生其他错误，Promise 将被拒绝并返回错误消息。

## 浏览器兼容性

{{Compat}}

## 示例

以下代码在用户点击浏览器操作时，记录活动标签页中所有框架的 URL：

```js
function logFrameInfo(framesInfo) {
  for (const frameInfo of framesInfo) {
    console.log(frameInfo);
  }
}

function onError(error) {
  console.error(`错误：${error}`);
}

function logAllFrames(tabs) {
  browser.webNavigation
    .getAllFrames({
      tabId: tabs[0].id,
    })
    .then(logFrameInfo, onError);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(logAllFrames, onError);
});
```

{{WebExtExamples}}

> [! 注意]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#method-getAllFrames) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。
