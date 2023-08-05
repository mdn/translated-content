---
title: 修改 web 页面
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
---

{{AddonSidebar}}

浏览器附加组件 ( add-on ) 常被用于修改网页。例如更改页面的样式，隐藏特定的 DOM 节点或把 DOM 节点注入到页面中。

使用 WebExtensions 有两种方式：

- 声明方式：定义一个网址格式，用来匹配特定的网址，然后加载脚本到对应的网页中。
- 编程方式：使用 JavaScript 接口，将脚本加载到一个指定标签页所承载的页面中

无论使用上面何种方式，它们都被称为内容脚本，与其他脚本的区别：

- 只能使用一部分的 webextension API。
- 能读取加载了内容脚本的网页。
- 通过使用消息 API 与其他的 webextension 通信。

在本文中，我们将看下加载脚本的两种方式。

## 修改匹配 URL 的页面

首先，创建一个名为“modify-page”的文件夹，并在目录下创建“manifest.json”文件，内容如下：

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]
}
```

"content_scripts"指出符合 URL 格式的页面地址，然后让浏览器加载脚本 (“page-eater.js“) 到匹配的 URL 页面 ([https://developer.mozilla.org/](/) )。

> **备注：** 由于 `content_scripts` 的 `"js"` 属性是一个数组，因此可以使用它将多个脚本注入匹配的页面。如果这样做，页面将按照数组中列出的顺序加载多个脚本。

> **备注：** `content_scripts` 键还具有一个 `"css"` 属性，可以使用它来注入 CSS 样式表。

在 "modify-page" 文件夹下创建“page-eater.js”文件，内容如下：

```js
document.body.textContent = "";

var header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

现在安装这个[WebExtension](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), 然后浏览 [https://developer.mozilla.org/](/)：

{{EmbedYouTube("lxf2Tkg6U1M")}}

> **备注：** 请注意，虽然此视频显示在 [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) 工作的 content scripts，但目前该网站已禁止 content scripts。

## 通过程序修改页面

如何修改程序使其在用户要求时才吞页面。现在修改上面的例子，在点击右键菜单项时才注入内容脚本。

修改 "manifest.json" 内容如下：

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": ["activeTab", "contextMenus"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

这里我们要移除"`content_scripts`"键值，并添加两个键：

- [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions):要向页面中注入脚本，就需要拥有修改页面对应的权限。[`activeTab`](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission)可以临时获得修改当前活动标签所加载的页面的权限。另外还通过 contextmenus 来获取添加右键菜单项的权限。
- [`background`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): 加载名为 "background.js" 的 ["background script"](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) （长期有效的后台脚本），在该脚本中，我们将设置注入右键菜单的内容脚本。

在 "modify-page" 文件夹下创建名为 "background.js"的新文件，内容如下：

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });
  }
});
```

在该脚本中我们创建了一个右键菜单项，给了它一个具体的 id 和标题 (将在菜单中显示的文本)。然后又设置了一个事件侦听器，当用户点击菜单项时，检查该菜单项是否就是我们的吞页菜单项。如果是，就通过[`tabs.executeScript()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) 接口，把"page-eater.js" 注入到活动标签页中。这个接口用标签 ID 做为参数：如果省略标签 ID 参数，就默认把脚本注入当前活动标签。

现在，附加组件看起来像这样：

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

重新加载[WebExtension](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on), 打开页面 (这次可以是任何一个页面) 激活右键菜单，然后选择 "Eat this page"：

{{EmbedYouTube("zX4Bcv8VctA")}}

> **备注：** 请注意，虽然此视频显示在 [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) 工作的 content scripts，但目前该网站已禁止 content scripts。

## 消息

内容脚本和后台脚本不能直接相互访问，但可以通过发送消息进行通信。当一端设置一个消息侦听器时，另一个端就可以发送消息了。下面的表格总结了通信时的 api 接口：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">在内容脚本中</th>
      <th scope="col">在后台脚本中</th>
    </tr>
    <tr>
      <th scope="row">发送消息</th>
      <td>
        <code
          ><a href="/zh-CN/Add-ons/WebExtensions/API/runtime#sendMessage()"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/zh-CN/Add-ons/WebExtensions/API/Tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">接收消息</th>
      <td>
        <code
          ><a href="/zh-CN/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a href="/zh-CN/Add-ons/WebExtensions/API/runtime#onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </thead>
</table>

修改上面的示例，使得可以通过后台脚本来发送消息。

首先，修改 "background.js" 如下：

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the add-on!",
  });
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });

    var querying = browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    querying.then(messageTab);
  }
});
```

注入 "page-eater.js"后，通过使用 [`tabs.query()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) 获取当前活动标签页，然后使用[`tabs.sendMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) 将消息发送到该标签页中的内容脚本。该消息的内容 `{replacement: "Message from the add-on!"}`。

接下来，修改 "page-eater.js" 如下：

```js
function eatPage(request, sender, sendResponse) {
  document.body.textContent = "";

  var header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}

browser.runtime.onMessage.addListener(eatPage);
```

现在，不再立即执行吞页，内容脚本将先通过使用 [`runtime.onMessage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)来监听消息。当监听到消息时，内容脚本才开始运作，除了来自`request.replacement`的替换文本不一样以外，其他的脚本运作本质上与之前的相同。

如果我们想将消息从内容脚本发送到后台页面，除了在内容脚本中使用 [`runtime.sendMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) ，其他与上面的过程相反。

> **备注：** 这些例子注入的都是 JavaScript; 想注入 CSS 可以使用 [`tabs.insertCSS()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) 函数。

## 了解更多

- [Content scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) 指南
- [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest key
- [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest key
- [`tabs.executeScript()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- 使用`content_scripts`的例子：

  - [borderify](https://github.com/mdn/webextensions-examples/tree/main/borderify)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/main/page-to-extension-messaging)

- 使用`tabs.executeScript()`的例子：

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types)
