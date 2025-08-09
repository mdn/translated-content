---
title: sidebarAction.open()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

在活动窗口中打开侧边栏。

只能在[用户操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_actions)的处理程序中调用此函数。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.sidebarAction.open()
```

### 参数

无。

### 返回值

将会不使用任何参数兑现的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 浏览器兼容性

{{Compat}}

## 示例

在用户选择上下文菜单项时打开侧边栏：

```js
browser.menus.create({
  id: "open-sidebar",
  title: "打开侧边栏",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.open();
});
```

{{WebExtExamples}}
