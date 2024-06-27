---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

隐藏一个或多个标签页。

隐藏的标签页将不再显示在浏览器的标签栏中。隐藏的标签页不会被自动[丢弃](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard)，它们中运行的代码仍然会继续执行。当你隐藏标签页时，你可以显式地丢弃它们，尽管这并不适用于所有情况，但可以帮助减少浏览器使用的资源。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

并非所有的标签页都能够被隐藏：

- 固定的标签页无法被隐藏。
- 正在共享屏幕、麦克风或摄像头的标签页无法被隐藏。
- 当前活动的标签页无法被隐藏。
- 正在关闭过程中的标签页无法被隐藏。

第一次扩展程序隐藏标签页时，浏览器会告知用户该标签页正在被隐藏，展示用户如何访问隐藏的标签页，并提供禁用扩展程序的选项。

要使用此 API，你必须拥有“tabHide”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 语法

```js-nolint
let hiding = browser.tabs.hide(
  tabIds          // 整数或整数数组
)
```

### 参数

- `tabIds`

  - : `integer` 或 `integer` 数组。要隐藏的一个或多个标签页的 ID。

    如果其中任何标签页不符合隐藏条件，则它们将不会被隐藏，但调用仍然会成功，并且符合条件的标签页仍将被隐藏。例如，如果传递 `[1, 3]`，而 `1` 是当前活动标签页，则只有 `3` 会被隐藏。

    但是，如果任何标签页 ID 无效，则调用将失败，并且没有标签页会被隐藏。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含被隐藏标签页 ID 的数组。如果发生任何错误，promise 将会被拒绝并返回错误信息。

## 示例

隐藏单个标签页：

```js
function onHidden() {
  console.log(`已隐藏`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.tabs.hide(2).then(onHidden, onError);
```

隐藏多个标签页：

```js
function onHidden() {
  console.log(`已隐藏`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.tabs.hide([15, 14, 1]).then(onHidden, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
