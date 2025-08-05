---
title: sidebarAction.close()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

如果侧边栏是扩展自己的侧边栏，则关闭活动窗口中的侧边栏。

你只能在[用户操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_actions)的处理程序内部调用此函数。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.sidebarAction.close()
```

### 参数

无。

### 返回值

一个不以任何参数兑现的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 浏览器兼容性

{{Compat}}

## 示例

当用户选择上下文菜单项时关闭侧边栏：

```js
browser.menus.create({
  id: "close-sidebar",
  title: "关闭侧边栏",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.close();
});
```

{{WebExtExamples}}
