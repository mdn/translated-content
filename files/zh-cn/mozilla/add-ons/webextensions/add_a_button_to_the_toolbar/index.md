---
title: Add a button to the toolbar
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
---

{{AddonSidebar}}工具栏按钮是 webextensions 的一种主要 UI 组件，它在浏览器的工具栏中作为图标显示。当用户点击图标时，就会发生下面两种事件中的一样：

- 如果按钮有弹出菜单，则显示该弹出。弹出菜单是一个临时对话，它必须使用 HTML，CSS，JavaScript 语言表示。
- 如果没有弹出菜单，则生成一个单击事件，你可以在代码中监听该事件并执行其他响应。

在 WebExtensions 中这种按钮被称为浏览器行为按钮，它们可以像下面这样生成：

- manifest.json 文件中的键 [`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 被用来定义按钮。
- JavaScript 接口 [`browserAction`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) 被用来监听单击和更改按钮，或通过代码执行操作。

## 一个简单的按钮

在这一节中我们将创建一个工具栏按钮的 WebExtension。当用户单击按钮时，会打开一个<https://developer.mozilla.org> 的新标签页。

首先，新建名为 "button"的文件夹，在该文件夹下创建名为"manifest.json" 的文件，内容如下：

```json
{
  "description": "Demonstrating toolbar buttons",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

上面内容显示有一个名为“background.js”后台脚本，以及在“icons”文件夹下的浏览器行为按钮图标。

These icons are from the [bitsies!](https://www.iconfinder.com/iconsets/bitsies) iconset created by Recep Kütük.

接下来，在"buttons" 文件夹下创建 "icons" 文件夹，在该文件夹下存放下面的图标文件：

- "page-16.png" (![](page-16.png))
- "page-32.png" (![](page-32.png)).

我们有两个图标，大图标用于在高分辨率状态下显示。浏览器会自动选择合适的图标。

接着，在附加组件的根目录下创建 "background.js"文件 , 内容如下：

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

该文件用来监听浏览器单击事件。当单击事件发生时运行 `openPage()` 函数，这个函数通过使用[`tabs`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs) 接口加载指定的页面。

现在完整的附加组件看上去应该像下面这样：

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

安装这个[WebExtension](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) ，然后单击按钮：

{{EmbedYouTube("kwwTowgT-Ys")}}

## 添加一个弹出菜单

尝试在按钮上添加一个弹出菜单。修改 "manifest.json"如下：

```json
{
  "description": "Demonstrating toolbar buttons",
  "manifest_version": 2,
  "name": "button-demo",
  "version": "1.0",

  "browser_action": {
    "browser_style": true,
    "default_popup": "popup/choose_page.html",
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

我们把原文件做了三处改变：

- 我们不需要引用“background.js”文件，因为会在弹出菜单的脚本中处理该行为 (你也可以使用“background.js“来运行一个弹出窗口，只是现在我们不需要这么做).
- 我们添加了`"browser_style": true`, 使弹出样式看上去更像是浏览器的一部分。
- 最后，我们添加 `"default_popup": "popup/choose_page.html"`, 告诉浏览器按钮被单击时弹出菜单，菜单的内容则在"popup/choose_page.html"页面中。

现在我们要创建弹出菜单。新建名为 "popup" 的文件夹，然后在文件夹内创建"choose_page.html" 文件，该文件内容如下：

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_page.css" />
  </head>

  <body>
    <div class="page-choice">developer.mozilla.org</div>
    <div class="page-choice">support.mozilla.org</div>
    <div class="page-choice">addons.mozilla.org</div>
    <script src="choose_page.js"></script>
  </body>
</html>
```

你会发现这是一个普通的 HTML 页面，它包含三个 {{htmlelement("div")}}元素，在每个元素中有一个 Mozilla 页面地址。另外还包括一个 CSS 文件和一个 JavaScript 文件，我们会在后面添加它们。

在 "popup" 文件夹下，创建名为 "choose_page.css" 的文件，内容如下：

```css
html,
body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}

.page-choice:hover {
  background-color: #cff2f2;
}
```

这是我们弹出菜单的部分样式。

接着，在 "popup" 文件夹下，创建名为 "choose_page.js" 的文件，内容如下：

```js
document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = "https://" + e.target.textContent;
  browser.tabs.create({
    url: chosenPage,
  });
});
```

在我们的脚本中，我们会监听单击的弹出项。首先检查单击的对象是否在给出的页面选择项中，如果不在，则不做任何处理；如果在，则从单击的页面选择项中获取 URL 地址，然后打开一个对应页面的新标签页。注意：我们在弹出脚本中使用 WebExtension 接口，和在后台脚本中使用接口一样。

附加组件的结构最后看上去应该像下面这样：

```
button/
    icons/
        page-16.png
        page-32.png
    popup/
        choose_page.css
        choose_page.html
        choose_page.js
    manifest.json
```

重新加载附加组件，再次单击按钮，并尝试在弹出菜单中单击某个选择项：

{{EmbedYouTube("QPEh1L1xq0Y")}}

## 页面行为

页面行为[（Page actions）](/zh-CN/Add-ons/WebExtensions/User_interface_components#Page_actions) 类似浏览器行为，只是页面行为仅针对特定页面，而浏览器行为则全局有效。

由于浏览器行为总是发生，而页面行为只在特定页面显示。所以页面行为按钮在 URL 地址栏中显示，而浏览器行为按钮则在浏览器工具栏中显示。

## 了解更多

- [`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key
- [`browserAction`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Browser action examples:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
  - [inpage-toolbar-ui](https://github.com/mdn/webextensions-examples/tree/main/inpage-toolbar-ui)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/main/open-my-page-button)

- [`page_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key
- [`pageAction`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Page action examples:

  - [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)
