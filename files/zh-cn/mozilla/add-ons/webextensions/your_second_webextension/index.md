---
title: 你的第二个扩展
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

如果你已经阅读了文章[你的第一个扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)，那么你现在已经知道如何编写扩展了。在这篇文章，我们将写一个稍微复杂一点点的扩展来为你展示更多的 API。

这个扩展会将一个新按钮添加到 Firefox 的工具栏。在用户点击该按钮时，我们会显示一个弹出框（popup）来让他们选择一种动物。在他们选择之后，我们会将当前页面替换为所选动物的图片。

要实现这点，我们将：

- **定义一个用于给 Firefox 的工具栏附加按钮的[浏览器动作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)**。对于该按钮，我们将提供：
  - 一个名为“beasts-32.png”的图标
  - 按钮被按下时要打开的弹出框。该弹出框将包含 HTML、CSS 和 JavaScript。

- **为扩展定义一个图标**，叫做“beasts-48.png”。这个将会在附加组件管理器中显示。
- **写一个内容脚本“beastify.js”，用于注入到网页中**。这是用来实际修改页面的代码。
- **打包一些动物的图像，用以替换网页中的图像**。我们让图像成为“Web 可访问资源”，以便页面可以引用它们。

你可以想象这样的扩展的整体结构：

![manifest.json 文件包含了图标、浏览器动作、弹出式窗口和 Web 可访问资源。Javascript 脚本在 beastify 脚本里调用选择动物的弹出框资源。](untitled-1.png)

这是一个非常简单的扩展，但也展示了 Web 扩展 API 的许多基本概念：

- 将按钮添加到工具栏
- 定义一个将使用 HTML、CSS 和 JavaScript 的弹出框
- 将内容脚本注入到网页
- 内容脚本与扩展的其他部分之间的通信
- 打包你的扩展的资源，使其可被网页所用

你可以[在 GitHub 上找到该扩展的完整的源代码](https://github.com/mdn/webextensions-examples/tree/main/beastify)。

## 编写扩展

创建一个新目录，并导航到该目录：

```bash
mkdir beastify
cd beastify
```

### manifest.json

现在创建一个名为“manifest.json”的文件，并写入以下内容：

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "在工具栏添加一个动作图标。点击按钮选择一个动物。当前活动的标签页的内容会被替换成被选择动物的图片。参见 https://developer.mozilla.org/zh-CN/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]
}
```

- 前三个键：[`manifest_version`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) 和 [`version`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) 是必须的，包含有扩展的基本元数据。
- [`description`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) 和 [`homepage_url`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) 是可选的，但建议使用：因为它们提供关于扩展的有用信息。
- [`icons`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) 也是可选的，但同样推荐使用：它允许你给扩展指定一个图标，将显示在附加组件管理器中。
- [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 列出了扩展所需要的权限。在这里我们仅需要 [`activeTab` 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。
- [`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 指定了工具栏按钮。我们在这里提供了三个信息片段：
  - `default_icon` 是必须的，指定了按钮的图标
  - `default_title` 是可选的，用于按钮的提示
  - `default_popup` 在你想要当用户点击按钮时显示出一个弹出框时使用。而在这里，我们需要，所以我们列入这个键并将其指向扩展中包括的一个 HTML 文件。

- [`web_accessible_resources`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) 列出了网页可访问的资源。由于当前扩展会将页面中的内容替换为我们随扩展打包的图像，因此我们需要使这些图像可供页面访问。

需要注意，所有路径是相对于 manifest.json 的。

### 图标

扩展应该有一个图标。这将显示在附加组件管理器的扩展列表中（你可以通过访问 URL“about:addons”打开）。我们的 manifest.json 保证了会有一个用于工具栏的图标“icons/border-48.png”。

创建“icons”文件夹，并将图标命名为“beasts-48.png”。你可以使用[我们示例中的图标](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-48.png)，它是从 [Aha-Soft 的免费 Retina 图标集](https://www.aha-soft.com/free-icons/free-retina-icon-set/)获取的，并根据其许可条款使用。

如果你选择使用自己的图标，它也应该是 48×48 像素的。你也可以为高分辨率显示器提供一个 96x96 的像素图标，在 manifest.json 的 `icons` 对象中添加 `96` 属性即可：

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### 工具栏按钮

工具栏按钮也需要一个图标，并且我们的 manifest.json 保证我们会在“icons/beasts-32.png”处放置工具栏的图标。

将一个图标命名为“beasts-32.png”并保存到“icons”文件夹。你可以使用[我们示例中的图片](https://raw.githubusercontent.com/mdn/webextensions-examples/main/beastify/icons/beasts-32.png)，它是取自 [IconBeast Lite 图标集](https://www.iconbeast.com/free/)并按其[许可协议](https://www.iconbeast.com/faq/)授权使用。

如果你没有弹出框，用户点击按钮的点击事件会直接分派到你的插件中。如果你提供了弹出框，点击事件不会分派，而是会打开弹出框。我们需要弹出框，因此我们下面开始创建它。

### 弹出框

该弹出框的功能是让用户选择三种动物的其中一种。

在扩展的根目录下创建“popup”文件夹。其用于存放弹出框的代码。弹出框由三个文件组成：

- **`choose_beast.html`** 定义了面板的内容
- **`choose_beast.css`** 为内容添加样式
- **`choose_beast.js`** 通过在当前活动的标签页中运行内容脚本处理用户的选择

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

HTML 文件就像这样：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <button>Frog</button>
      <button>Turtle</button>
      <button>Snake</button>
      <button type="reset">Reset</button>
    </div>
    <div id="error-content" class="hidden">
      <p>Can't beastify this web page.</p>
      <p>Try a different page.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

我们有一个 ID 为 `"popup-content"` 的 [`<div>`](/zh-CN/docs/Web/HTML/Reference/Elements/div) 元素包含了每个动物选择。我们还有另外一个 `<div>` 元素，它的 ID 为 `"error-content"`，class 为 `"hidden"`。如果初始化弹出框时出现问题，我们将使用它。

注意我们引入了 CSS 和 JS 文件，就像网页一样。

#### choose_beast.css

CSS 固定了弹出框的大小，确保 3 个选择填充满空间，并为它们提供了基本的样式。同时隐藏了 `class="hidden"` 的元素：这意味着我们的 `<div id="error-content"...` 将会被默认隐藏。

```css
html,
body {
  width: 100px;
}

.hidden {
  display: none;
}

button {
  border: none;
  width: 100%;
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
  background-color: #e5f2f2;
}

button:hover {
  background-color: #cff2f2;
}

button[type="reset"] {
  background-color: #fbfbc9;
}

button[type="reset"]:hover {
  background-color: #eaea9d;
}
```

#### choose_beast.js

这里是弹出框的 JavaScript：

```js
/**
 * 用于隐藏页面上所有内容（除了具有 "beastify-image" 类的元素）的 CSS。
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * 监听按钮上的点击事件，并向页面中的内容脚本发送适当的信息。
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * 给定动物的名称，获取对应图像的 URL。
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Frog":
          return browser.runtime.getURL("beasts/frog.jpg");
        case "Snake":
          return browser.runtime.getURL("beasts/snake.jpg");
        case "Turtle":
          return browser.runtime.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * 将隐藏页面的 CSS 插入到活动标签页中，然后获取动物图片的
     * URL，并向活动标签页中的内容脚本发送“beastify”消息。
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({ code: hidePage }).then(() => {
        const url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url,
        });
      });
    }

    /**
     * 移除活动标签页中隐藏页面的 CSS，并向活动标签页中的内容脚本发送“reset”消息。
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * 仅将错误记录到控制台。
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    /**
     * 获取活动标签页，然后根据需要调用“beastify()”或“reset()”。
     */
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      // 当点击的是不在 <div id="popup-content"> 内的按钮时，忽略它。
      return;
    }
    if (e.target.type === "reset") {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(reset)
        .catch(reportError);
    } else {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
        .catch(reportError);
    }
  });
}

/**
 * 脚本执行过程中出现错误。显示弹出框的错误信息，并隐藏正常的 UI。
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * 当弹出框加载时，将内容脚本注入到活动标签页中，并添加点击处理器。
 * 如果我们无法注入脚本，则处理错误。
 */
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

从 99 行开始。只要弹出窗加载完，弹出框的脚本就会使用 [`browser.tabs.executeScript()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API 在活动的标签页执行内容脚本。如果内容脚本执行成功，页面会一直保持内容脚本，直到标签被关闭或者用户导航到其他页面。

`browser.tabs.executeScript()` 调用失败的常见原因是你不能在所有页面执行内容脚本。例如，你不能在（像 about:debugging 这样的）特权浏览器页面执行，你也不能在 [addons.mozilla.org](https://addons.mozilla.org/) 域的页面中执行。如果调用失败，`reportExecuteScriptError()` 会隐藏 `<div id="popup-content">` 元素，并展示 `<div id="error-content"...` 元素，然后在[控制台](https://extensionworkshop.com/documentation/develop/debugging/)中打印错误。

如果成功执行内容脚本，我们会调用 `listenForClicks()`。它监听了弹出框的点击事件。

- 如果点击不在弹出框的按钮上，我们会忽略它且不做任何事情。
- 如果点击有 `class="reset"` 的按钮，将会调用 `reset()`。
- 如果点击有 `class="beast"`的按钮（即动物按钮），将会调用 `beastify()`。

`beastify()` 函数做了三件事：

- 将被点击的按钮映射到一个指向特定动物图片的 URL
- 通过 [`browser.tabs.insertCSS()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API 向页面注入一些 CSS 来隐藏整个页面的内容
- 通过 [`browser.tabs.sendMessage()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API 向内容脚本发送“beastify”消息，要求其展示动物页面，同时向其传递一个指向动物图片的 URL。

`reset()` 函数实际上就是撤销动物展示：

- 通过 [`browser.tabs.removeCSS()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API 移除我们添加的 CSS
- 向内容脚本发送“reset”消息要求其重置页面。

### 内容脚本

在扩展的根目录下创建一个新的文件夹，叫做“content_scripts”，然后在里面新建一个新的名为“beastify.js”的文件，内容如下：

```js
(() => {
  /**
   * 检查并设置全局哨兵变量。如果这个内容脚本再次被注入到同一页面，它将不再执行任何操作。
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * 给定一个指向动物图片的 URL，移除所有现有的动物，
   * 然后创建并设置一个指向该图片的 IMG 节点，并将该节点插入到文档中。
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    const beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * 移除页面中的每个动物。
   */
  function removeExistingBeasts() {
    const existingBeasts = document.querySelectorAll(".beastify-image");
    for (const beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * 监听来自背景脚本的消息。调用“insertBeast()”或“removeExistingBeasts()”。
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
```

内容脚本做的第一件事是检查全局变量 `window.hasRun`：如果它被设置了，脚本直接返回，否则设置 `window.hasRun` 并继续。原因是每次用户打开弹出框，弹出框就会在活动页面执行一次内容脚本，所以我们可能会在单个页面运行多个脚本实例。如果是这样的话，我们需要保证只有一个实例在做所有事情。

然后，从第 40 行开始，内容脚本使用 [`browser.runtime.onMessage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API 监听来自弹出框的消息。在上面我们看到弹出框脚本能够发送两种不同的消息：“beastify”和“reset”。

- 如果消息是“beastify”，我们期待它包含一个指向动物图片的 URL。我们移除先前调用添加的动物图片，然后构造并添加一个 src 属性被设置动物图片 URL 的 [`<img>`](/zh-CN/docs/Web/HTML/Reference/Elements/img) 元素。
- 如果消息是“reset”，我们只需要移除所有被添加的动物图片。

### 动物

最后，我们要加入包含动物的图像。

创建“beasts”文件夹，之后将图片放入并命名。你可以从 [GitHub 仓库](https://github.com/mdn/webextensions-examples/tree/main/beastify/beasts)或这里下载图片：

![一只棕色青蛙。](frog.jpg)

![一条有白色条纹的翡翠树蚺。](snake.jpg)

![一只巴西龟。](turtle.jpg)

## 测试

首先，请仔细检查你是否已将正确的文件放在正确的位置：

```plain
beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json
```

现在，以临时附加组件的形式加载扩展。在 Firefox 中打开“about:debugging”，单击“临时加载附加组件”，然后选择你的 manifest.json 文件。然后你应该可以在 Firefox 的工具栏中看到扩展的图标：

![Firefox 工具栏上的 beastify 扩展图标](beastify_icon.png)

打开一个网页，然后点击图标，选择一个动物，然后观察网页的变化：

![被替换成乌龟图像的页面。](beastify_page.png)

## 用命令行开发

你可以通过使用 [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) 工具来将临时安装的工作自动化。试试这个：

```bash
cd beastify
web-ext run
```

## 下一步

你已经创建了一个更加高级的 Firefox Web 扩展，接下来可以：

- [阅读更多关于扩展的内容](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [探索扩展的示例](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [了解开发、测试和发布扩展需要的知识](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [进一步学习](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next#继续你的学习经历)。
