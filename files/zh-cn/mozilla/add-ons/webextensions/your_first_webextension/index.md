---
title: 你的第一个扩展
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

> [!NOTE]
> 如果你熟悉浏览器扩展的基本概念，你可以跳过这一章节，去阅读[如何把扩展文件组合在一起](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)。然后，借助[参考文档](/zh-CN/docs/Mozilla/Add-ons/WebExtensions#参考资料)以构建你的扩展。访问 [Firefox 扩展工作站](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension)，以了解有关 Firefox 测试、发布和扩展的更多工作流程。

在这篇文章中，我们将为 Firefox 创建一个扩展。这个扩展只是给从 `mozilla.org` 或其任意子域名加载的任何页面添加一个红色边框。

该示例的源代码位于 GitHub：<https://github.com/mdn/webextensions-examples/tree/main/borderify>。

## 编写扩展

在合适的位置，例如在 `Documents` 目录下，创建一个名为 `borderify` 的新目录，并导航到该目录。你可以使用计算机的文件资源管理器，或者使用[命令行终端](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)。了解如何使用命令行终端是一个很有用的技能，因为它有助于你进行更高级的扩展开发。使用终端，你可以这样创建目录：

```bash
mkdir borderify
cd borderify
```

### manifest.json

使用合适的[文本编辑器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)，在“borderify”目录下直接创建一个名为“manifest.json”的新文件。写入以下内容：

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "给所有匹配 mozilla.org 的网页添加红色边框。",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- 前三个键：[`manifest_version`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) 和 [`version`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) 是必须的，包含有扩展的基本元数据。
- [`description`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) 是可选的，但建议使用：该描述将显示在附加组件管理器中。
- [`icons`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) 是可选的，但建议使用：它允许你给扩展指定一个图标，将显示在附加组件管理器中。

这里最有意思的键是 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)，它告诉 Firefox 加载脚本到其 URL 匹配特定模式的网页中。本例中，我们要求 Firefox 加载脚本“borderify.js”到任何来自“mozilla.org”或其子域的 HTTP 或 HTTPS 页面。

- [进一步了解内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [进一步了解模式匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

> [!WARNING]
> [某些情况下，你需要给你的扩展指定一个 ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id)。如果你需要指定一个附加组件 ID，请在 `manifest.json` 中添加 [`browser_specific_settings`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键，并设置其 `gecko.id` 属性：
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

扩展应该有一个图标。这将显示在附加组件管理器的扩展列表中。我们的 manifest.json 保证了会有一个图标“icons/border-48.png”。

在“borderify”目录下直接创建“icons”目录，并在“icons”目录下保存一个名为“border-48.png”的图标。你可以使用[我们示例](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png)中的图标，来自谷歌的质感设计的图标库，遵循[署名—相同方式共享](https://creativecommons.org/licenses/by-sa/3.0/deed.zh-hans)协议。

如果你选择使用自己的图标，它也应该是 48×48 像素的。你也可以为高分辨率显示器提供一个 96x96 的像素图标，在 manifest.json 的 `icons` 对象中添加 `96` 属性即可：

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

或者，也可以在这里提供一个 SVG 文件，它会被正确地缩放。（不过：如果你正在使用 SVG 并且你的图标包含文字，你可能需要使用 SVG 编辑器的“转换为路径”工具来使文字扁平化，这样图标会以一个恒定的大小或位置来缩放。）

- [了解更多关于指定图标的内容。](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

最后，在“borderify”目录下直接创建“borderify.js”文件。写入下面的内容：

```js
document.body.style.border = "5px solid red";
```

该脚本将加载到与 manifest.json 文件中的 `content_scripts` 键给出的模式相匹配的页面中。该脚本可以直接访问文档，就像页面自身加载的脚本一样。

- [了解更多关于内容脚本的内容。](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## 尝试一下

首先，仔细检查文件是否在正确的位置：

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### 安装

打开 Firefox 的 [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) 页面，点击“此 Firefox”，点击“临时加载附加组件”按钮，并选择你的扩展所在的目录：

附加组件将会被安装，直到下次重启浏览器失效。

或者，你可以通过 [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) 工具通过命令行来运行扩展。

### 测试

> [!NOTE]
> 默认情况下[扩展在隐私浏览模式中不起作用](https://support.mozilla.org/zh-CN/kb/隐私浏览窗口中的扩展)。如果你想在隐私浏览模式中测试扩展，请打开 `about:addons`，点击拓展，然后选择在隐私窗口中运行的“允许”单选按钮。

现在尝试访问 `https://www.mozilla.org/en-US/` 下的页面，你将看到页面上有个红色的边框。

![mozilla.org 上显示的边框](border_on_mozilla_org.png)

> [!NOTE]
> 不要在 `addons.mozilla.org` 上尝试！内容脚本目前在那个域名下是被限制的。

不妨做些实验。编辑内容脚本，更改边框颜色，或者对页面内容进行其他修改。保存内容脚本，然后点击 `about:debugging` 中的“重新加载”按钮，重新加载扩展程序的文件。你可以立即看到更改。

- [了解更多关于加载扩展的信息](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## 打包和发布

为了给其他人使用你的插件，你需要打包，并将其提交给 Mozilla 进行签名。要了解更多有关，请参考[“发布你的扩展”](https://extensionworkshop.com/documentation/publish/package-your-extension/)。

## 下一步

现在，你已经在开发 Firefox 的 Web 扩展的过程中得到了一些想法，尝试：

- [写一个更加复杂的扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [阅读更多关于扩展的内容](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [探索扩展的示例](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [了解开发、测试和发布扩展需要的知识](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [进一步学习](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next#继续你的学习经历)
