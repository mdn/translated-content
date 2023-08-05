---
title: Toolbar button
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
---

{{AddonSidebar}}

常说的 [浏览器动作（browser action）](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), 指通过在工具栏上上添加新按钮，提供用户互动选项，用户可点击按钮与你的扩展进行互动。
![](browser-action.png)

工具栏按钮（browser action）与地址栏按钮（page action）极为相似。区分其不同点及使用，请参看 [Page actions and browser actions](/zh-CN/Add-ons/WebExtensions/user_interface/Page_actions#Page_actions_and_browser_actions).

## 指定浏览器动作

通过 manifest.json 里的关键字[`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 来定义浏览器动作的属性：

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

必须定义的键是 `default_icon`.

有两种方法来指定浏览器动作：带弹出框（[popup](/zh-CN/Add-ons/WebExtensions/Popups)）和不带弹出框（[popup](/zh-CN/Add-ons/WebExtensions/Popups)）。

如果不指定弹出框，当用户点击按钮时，点击事件将被发送至扩展，而扩展可用以下函数来捕获 [`browserAction.onClicked`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/BrowserAction/onClicked):

```js
browser.browserAction.onClicked.addListener(handleClick);
```

如果指定了弹出框，当用户点击按钮时，点击事件将不会被发送，而是显示出弹出框。用户能够通过弹出框进行互动，并且点击框外区域时弹出框会自动关闭。请参看文章 [Popup](/zh-CN/Add-ons/WebExtensions/Popups) 来了解更多关于创建和管理弹出框的细节。

注意一个扩展只能指定一个浏览器动作。

可通过[`browserAction`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API 在程序里更改你的浏览器动作的属性。

## 图标

想了解更多关于如何创建浏览器动作图标信息，请参看[Photon Design System](https://design.firefox.com/photon/index.html) 文档里的 [Iconography](https://design.firefox.com/photon/visuals/iconography.html) 部分。

## 范例

在 Github 上的扩展范例库 [webextensions-examples](https://github.com/mdn/webextensions-examples) 中有两个实现浏览器动作的例子：

- [bookmark-it](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/)没有使用 popup 实现了浏览器动作。
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)使用 popup 实现了浏览器动作。
