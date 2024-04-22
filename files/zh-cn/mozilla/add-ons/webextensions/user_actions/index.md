---
title: 用户操作
slug: Mozilla/Add-ons/WebExtensions/User_actions
---

{{AddonSidebar}}

一些 WebExtension API 执行的功能通常是由于用户操作而执行的。例如：

- 带有弹出窗口的浏览器操作会在用户单击时显示弹出窗口，但还有一个 {{WebExtAPIRef("browserAction.openPopup")}} API 允许扩展程序以编程方式打开弹出窗口。
- 如果扩展程序添加了侧边栏，用户通常通过浏览器内置的用户界面的某些部分（例如“视图/侧边栏”菜单）打开它。但还有一个 {{WebExtAPIRef("sidebarAction.open")}} API 允许扩展程序以编程方式打开其侧边栏。

为了遵循“没有意外”的原则，这类 API 只能从用户操作的处理器内部调用。用户操作包括以下内容：

- 点击扩展程序的浏览器操作或页面操作。
- 选择扩展定义的上下文菜单项。
- 激活扩展定义的键盘快捷键（仅从 Firefox 63 开始，被视为用户操作）。
- 点击与扩展程序捆绑在一起的页面中的按钮。

例如：

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

注意，普通网页中的用户操作不被视为用于此目的的用户操作。例如，如果用户单击普通网页中的按钮，并且内容脚本已为该按钮添加点击的处理器，并且在该处理器中向扩展的后台页面发送消息，那么后台页面的消息处理器不被视为正在处理用户操作。

此外，如果用户输入的处理器等待 [promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，那么它作为用户输入处理器的状态将会丢失。例如：

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // 这将失败，因为处理器丢失了其“用户操作处理器”状态
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
