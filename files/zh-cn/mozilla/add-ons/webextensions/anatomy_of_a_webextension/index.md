---
title: 扩展剖析
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

扩展是指一个包含若干文件的安装包，可直接分发至用户。本文中，我们快速地介绍一遍安装包内可能出现的文件。

## manifest.json

这是唯一一个在每个扩展里面必须存在的文件。它包含了关于这个扩展插件基本的元数据（metadata），比如它的名字、版本和所需权限。并且，它也对扩展中其他文件进行了链接。

这个 manifest 文件还可以指向其他一些类型的文件：

- [后台脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#后台脚本): 执行一个长时间运行的逻辑。
- 图标：用于扩展插件和任何它可能定义的按钮儿。
- [侧边栏，弹出窗口，选项页](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#侧边栏，弹出窗口，选项页面): 为各式各样用户界面组件提供内容的 HTML 文件。
- [内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#内容脚本): 扩展中包含的 JavaScript，你可以注入它们到网页中。
- [网络可访问资源](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#网络可访问资源): 使打包好的内容可用于网页与内容脚本中。

![Web 扩展的组件。manifest.JSON 是所有扩展里都必须存在的。它提供指向后台页面、内容脚本、浏览器动作、页面动作、选项页和 web 可访问资源的引用。后台页面由 HTML 和 JS 组成。内容脚本由 JS 和 CSS 组成。用户单击扩展图标能够触发浏览器动作和页面动作，由此产生的弹出窗口由 HTML、CSS 和 JS 组成。选项页由 HTML、CSS 和 JS 组成。](webextension-anatomy.png)

参见 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 参考页以了解详情。

除了这些 manifest 中已经列举的项之外，扩展也可以携带额外的 [Extension pages](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) 和支持的文件。

## 后台脚本

扩展常常需要独立于任何浏览器窗口或特定网页来维持一种长期的状态或者执行长期的操作。这就是后台脚本（background scripts）的职责。

后台脚本将在扩展加载完毕后开始运行，直到扩展被禁用或卸载。只要获得了相应的[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)，你就可以在脚本中使用任何 [WebExtension API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API)。

### 指定后台脚本

你可以通过在 manifest.json 中添加关键字 `background` 来引入后台脚本：

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

可以添加多份后台脚本。而且，就像同一个网页中的多个脚本一样，它们将会运行在同一上下文环境中。

与此同时，你也可以先引入一个后台页面，再在后台页面中引入脚本。这样做能为后台脚本添加 ES 6 模块支持，算是一个优势。

**manifest.json**

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

**background-page.html**

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <script type="module" src="background-script.js"></script>
  </head>
</html>
```

### 后台脚本的运行环境

#### DOM API

后台脚本在一个被称为后台页面的特殊页面的上下文环境中运行。此环境为其提供了全局变量 [`window`](/zh-CN/docs/Web/API/Window) ，也提供了所有的标准 DOM API。

> **警告：** 在 Firefox 浏览器中，后台页面不支持使用 [`alert()`](/zh-CN/docs/Web/API/Window/alert), [`confirm()`](/zh-CN/docs/Web/API/Window/alert)和 [`prompt()`](/zh-CN/docs/Web/API/Window/alert)

#### WebExtension API

只要扩展获得了必要的[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)，后台脚本就可以使用所有的 [WebExtension API](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API)。

#### 跨域访问

后台脚本可以向任何拥有[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#%E4%B8%BB%E6%9C%BA%E6%9D%83%E9%99%90)的主机发送 XHR 请求。

#### 网页内容

后台脚本没有直接访问页面的权限。不过，他们可以在页面中加载[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)（content scripts），并且可以[通过 message-passing API 与内容脚本通信](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#后台脚本通信)。

#### 内容安全策略

根据一个内容安全策略（Content Security Policy），后台脚本不能执行一些可能有危险的操作，例如使用 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)。

详情请参考[内容安全策略](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)。

## 侧边栏，弹出窗口，选项页面

您的扩展程序可以包含各种用户界面组件，其内容通过 HTML 文件来定义：

- [侧边栏](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)是一个面板，它被显示在浏览器窗口左侧，就在网页旁边。
- [弹出窗口](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)是一个对话框，可以在用户单击[工具栏按钮](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)或[地址栏按钮](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)时显示该对话框。
- [选项页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)是当用户访问扩展管理器内置的扩展选项页面时，内嵌显示的页面。

对于这些组件，你可以创建一个 HTML 文件，并使用 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 中的特定属性指向它。HTML 文件可以引用 CSS 和 JavaScript 文件，就像普通的网页一样。

所有这些都是[扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)的一种，与普通网页不同的是，你可以在 JavaScript 中像在后台脚本那样，拥有一样的权限去使用 WebExtension API。

## 扩展页面

您也可以在扩展中包含 HTML 文档，这些文档不附加到某个预定义的用户界面组件。与您可能为侧边栏，弹出窗口或选项页面提供的文档不同，它们在 manifest.json 中没有条目。但是，他们也可以像在后台脚本那样拥有一样的权限去使用 WebExtension API。

你通常可以使用 {{WebExtAPIRef("windows.create()")}} 或 {{WebExtAPIRef("tabs.create()")}}加载一个页面。

若想了解更多，请参考 [扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)。

## 内容脚本

一般使用内容脚本来访问和操作页面。内容脚本会被加载到页面中并运行在页面的特定环境下。

内容脚本是由扩展提供的脚本，与页面本身的脚本以及 {{HTMLElement("script")}} 标签中的脚本是不同的。

内容脚本可以像普通脚本一样获取、操作页面的 DOM。

与普通的页面内脚本不同，Content scripts 可以：

- 执行跨域访问
- 使用 [WebExtension APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API) 中的一小部分
- [通过与后台脚本交换信息](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts)的方式，间接地使用所有 WebExtension API

内容脚本无法直接访问普通网页中的脚本，但是可以通过 [`window.postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) API 来与之传递信息。

通常情况下，当我们讨论内容脚本时，我们通常指的是 JavaScript，但是你也可以用同样的机制来注入 CSS 样式。

若想了解更多，请参考[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)。

## 网络可访问资源

网络可访问资源指的是像图片、HTML、CSS 和 JavaScript 一类在扩展中包含的资源文件，并且你可以在内容脚本和页面脚本中访问。这些网络可访问资源可以在页面脚本和内容脚本中通过使用特定的 URI 方案来引用。
举个例子来说，如果一个内容脚本想要把一些图片插入网页，你可以在扩展中引入它们并且使他们成为网络可访问资源。接下来，内容脚本就可以创建并追加包含 `src` 属性的 [img](/zh-CN/docs/Web/HTML/Element/img) 标签了。

若想了解更多，请参考 manifest.json 中相关条目的文档：[web_accessible_resources](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)。
