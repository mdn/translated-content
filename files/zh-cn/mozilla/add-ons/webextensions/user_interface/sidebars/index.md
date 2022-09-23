---
title: 侧边栏
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
original_slug: Mozilla/Add-ons/WebExtensions/user_interface/侧边栏
---

{{AddonSidebar}}

A sidebar is a pane that is displayed at the side of the browser window, next to the web page. The browser provides a UI that enables the user to see the currently available sidebars and to select a sidebar to display. For example, Firefox has a "View > Sidebar" menu. Only one sidebar can be shown at a time, and that sidebar will be displayed for all tabs and all browser windows.

The browser may include a number of built-in sidebars. For example, Firefox includes a sidebar for interacting with bookmarks:

![](bookmarks-sidebar.png)Using the `sidebar_action` manifest.json key, an extension can add its own sidebar to the browser. It will be listed alongside the built-in sidebars, and the user will be able to open it using the same mechanism as for the built-in sidebars.

就像浏览器的弹出页面，侧边栏也是一个 HTML 文档。当用户打开侧边栏时，HTML 文档载入打开的浏览器窗口。每个窗口有一个该文档的实例。打开一个新窗口时，该窗口获得自己的文档实例

可以使用函数{{WebExtAPIRef("sidebarAction.setPanel()")}}指定侧边栏仅用于指定的某个标签，使用{{WebExtAPIRef("windows.getCurrent()")}} 侧边栏知道自己属于哪一个标签。

```js
// sidebar.js
browser.windows.getCurrent({populate: true}).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

不同的窗口使用不同的侧边栏是非常有用的，这是一个实例，见["annotate-page" example](https://github.com/mdn/webextensions-examples/tree/master/annotate-page).

侧边栏俱有和后台程序以及弹出窗口相同的 API 权限，在非隐藏模式下，侧边栏使用 API {{WebExtAPIRef("runtime.getBackgroundPage()")}} 可以直接访问后台页面，使用 API 如{{WebExtAPIRef("tabs.sendMessage()")}} 与 content scripts 交互，使用 API 如 {{WebExtAPIRef("runtime.sendNativeMessage()")}} 与原生应用交互。

关闭窗口或关闭侧边栏时，侧边栏文档退出。这意味着和后台页面不同，侧边栏文档不是一直住留，也不像弹出窗口，只要用户与页面交互，它就一直存在。

使用侧边栏的扩展载入时，侧边栏自动打开。这是为了帮助用户知道扩展俱有侧边栏。注意不能通过编程的方式打开侧边栏：侧边栏只能由用户打开。

## 声明侧边栏

声明侧边栏，只需在 manifest.json 中指 定关键字 [`sidebar_action`](/zh-CN/Add-ons/WebExtensions/manifest.json/sidebar_action) 并同时指定 title 和 icon:

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

使用 API {{WebExtAPIRef("sidebarAction")}} ，你可以用编程的方式修改 title panel icon。

浏览器提供的显示侧边栏的 UI 中，title 和 icon 显示给用户，如 Firefox 菜单栏的"View > Sidebar"

## Sidebar design

For details on how to design your sidebar's web page to match the style of Firefox, see the [Photon Design System](https://design.firefox.com/photon/index.html) documentation.

## Example

The [webextensions-examples](https://github.com/mdn/webextensions-examples) repository on GitHub includes the [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page) example which implements a sidebar.
