---
title: tabs.printPreview()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/printPreview
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

打开活动标签页的打印预览。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。扩展可以通过监听 [afterprint](/zh-CN/docs/Web/API/Window/afterprint_event) 事件来检测打印预览是否已关闭：

```js
window.addEventListener("afterprint", resumeFunction, false);
```

## 语法

```js-nolint
let openingPreview = browser.tabs.printPreview()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当预览页面打开时其会被兑现且不带有参数。

## 示例

在这个示例中，后台脚本监听[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2)按钮点击事件，然后为当前活动标签页打开打印预览：

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.printPreview().then(() => {
    console.log("进入打印预览");
  });
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
