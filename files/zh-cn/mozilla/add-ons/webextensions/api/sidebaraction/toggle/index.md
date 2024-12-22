---
title: sidebarAction.toggle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

如果当前的侧边栏是扩展的，则将切换活动窗口中侧边栏的可见性。

你只能在[用户操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_actions)的处理程序内部调用此函数。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
browser.sidebarAction.toggle()
```

### 参数

无。

### 返回值

一个不以任何参数兑现的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 浏览器兼容性

{{Compat}}

## 示例

当用户从上下文菜单中选择一个项目时，切换侧边栏的显示状态。

```js
browser.menus.create({
  id: "toggle-sidebar",
  title: "切换侧边栏",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.toggle();
});
```

{{WebExtExamples}}
