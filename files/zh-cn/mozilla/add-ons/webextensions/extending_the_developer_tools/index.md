---
title: 扩展开发人员工具
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
---

{{AddonSidebar}}

> **备注：** 本页介绍了火狐 Firefox 55 中存在的开发工具接口（dectools APIs)。虽然该接口 Api 基于 Chrome 开发工具 Api，仍有许多功能尚未实现在火狐中实现，因此未记录在本页内容中。产看当前缺失的功能，请参阅链接[开发工具 Api 的限制。](/zh-CN/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs)

您可以使用 WebExtensions API 扩展浏览器的内置开发人员工具。要创建 devtools 扩展，请在 manifest.json 中包含“devtools_page”键：

```json
"devtools_page": "devtools/devtools-page.html"
```

此项的值是指向与您的扩展程序捆绑在一起的 HTML 文件的 URL。该 URL 应相对于 manifest.json 文件本身。

HTML 文件在扩展中定义了一个特殊页面，称为 devtools 页面。

## devtools 页面

当打开浏览器 devtools 时，将加载 devtools 页面，并在关闭浏览器时将其卸载。请注意，由于 devtools 窗口与单个选项卡相关联，因此很可能同时存在多个 devtools 窗口 - 因此有多个 devtools 页面。

devtools 页面没有任何可见的 DOM，但可以包含使用\<script>标记的 JavaScript 源。源必须与扩展本身捆绑在一起。来源可以访问：:

- 可通过全局窗口对象访问的普通 DOM API
- 与内容脚本中相同的 WebExtension API
- The devtools APIs:

  - [`devtools.inspectedWindow`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow)
  - [`devtools.network`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools.network)
  - [`devtools.panels`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels)

请注意，devtools 页面无法访问任何其他 WebExtension API，并且后台页面无法访问 devtools API。相反，devtools 页面和后台页面必须使用运行时消息传递 API 进行通信。这是一个例子：

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script src="devtools.js"></script>
  </body>
</html>
```

devtools.js 文件将保存创建您的 dev 工具扩展的实际代码。

## 创建面板

devtools 窗口中包含许多单独的工具-JavaScript 调试器，网络监视器等。顶部的一排标签可让用户在不同的工具之间切换。承载每个工具的用户界面的窗口称为“面板”

使用 devtools.panels.create（）API，可以在 devtools 窗口中创建自己的面板：

```js
browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(initialisePanel);
    newPanel.onHidden.addListener(unInitialisePanel);
  });
```

这需要三个必选参数：面板的标题，图标和内容。它返回一个 Promise，该 Promise 解析为代表新面板的 devtools.panels.ExtensionPanel 对象。

## 与目标窗口互动

开发人员工具始终附加到特定的浏览器选项卡。这称为开发人员工具的“目标”或“检查的窗口”。您可以使用 devtools.inspectedWindow API 与检查的窗口进行交互。

### Running code in the target window

devtools.inspectedWindow\.eval（）提供了一种在检查的窗口中运行代码的方法。

这有点像使用{{WebExtAPIRef("tabs.executeScript()")}}注入内容脚本，但有一个重要区别：

- 与内容脚本不同，使用 devtools.inspectedWindow\.eval（）加载的脚本不会获得“DOM 的清晰视图”：也就是说，它们可以看到页面脚本对页面所做的更改。

> **备注：** 请注意，DOM 的清晰视图是一项安全功能，旨在通过重新定义本机 DOM 功能的行为来帮助防止恶意页面欺骗扩展。这意味着您需要非常小心地使用 eval（），并应尽可能使用普通的内容脚本。

devtools.inspectedWindow\.eval（）加载的脚本也看不到内容脚本定义的任何 JavaScript 变量。

### Working with content scripts

devtools 文档无法直接访问{{WebExtAPIRef("tabs.executeScript()")}}，因此，如果需要注入内容脚本，devtools 文档必须向后台脚本发送一条消息，要求其注入剧本。devtools.inspectedWindow\.tabId 提供目标选项卡的 ID：devtools 文档可以将其传递给后台脚本，而后台脚本又可以将其传递给{{WebExtAPIRef("tabs.executeScript()")}}：

```js
// devtools-panel.js

const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

window.addEventListener("click", () => {
  browser.runtime.sendMessage({
    tabId: browser.devtools.inspectedWindow.tabId,
    script: scriptToAttach,
  });
});
```

```js
// background.js

function handleMessage(request, sender, sendResponse) {
  browser.tabs.executeScript(request.tabId, {
    code: request.script,
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

如果您需要在目标窗口中运行的内容脚本和 devtools 文档之间交换消息，则最好使用{{WebExtAPIRef("runtime.connect()")}}和{{WebExtAPIRef("runtime.onConnect()")}}，以在后台页面和 devtools 文档之间建立连接。然后，后台页面可以维护选项卡 ID 和{{WebExtAPIRef("runtime.Port")}}对象之间的映射，并使用此映射在两个作用域之间路由消息。

![](devtools-content-scripts.png)

## devtools API 的局限性

这些 API 基于 Chrome devtools API，但与 Chrome 相比，许多功能仍缺失。本节列出了从 Firefox 54 开始尚未实现的功能。请注意，devtools API 正在积极开发中，我们希望在将来的版本中增加对其中大多数功能的支持。

### devtools.inspectedWindow

The following are not supported:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

None of the options to `inspectedWindow.eval()` are supported.

使用 inspectedWindow\.eval（）注入的脚本不能使用控制台的所有命令行帮助器功能，但是都支持$ 0 和 inspect（...）（从 Firefox 55 开始）。

### devtools.panels

The following are not supported:

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## Examples

The [webextensions-examples](https://github.com/mdn/webextensions-examples) repo on GitHub, contains several examples of extensions that use devtools panels:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) use devtools panels:
