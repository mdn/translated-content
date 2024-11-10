---
title: tabs.print()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/print
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

调用此函数以打印当前活动标签页的内容。如果调用了此函数，用户将会看到来自底层平台的打印对话框，可以更改打印设置，然后打印当前活动的标签页。

## 语法

```js-nolint
browser.tabs.print()
```

### 参数

无。

### 返回值

无。

## 示例

在这个示例中，一个后台脚本监听[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2)按钮点击事件，然后尝试打印当前活动的标签页：

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.print();
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
