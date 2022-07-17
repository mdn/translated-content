---
title: 你的第一个拓展
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
tags:
  - WebExtentions
  - 指南
translation_of: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---
{{AddonSidebar}}

在这篇文章中，我们将为 Firefox 创建一个扩展。这个扩展只是给从 "firefox.org" 或其任意子域名加载的任何页面添加一个红色边框。

该示例的源代码位于 GitHub：<https://github.com/mdn/webextensions-examples/tree/master/borderify>

首先，你需要 Firefox 45 或更高版本。

## 编写扩展

创建一个新的目录并切换到该目录。例如，在你的命令行/终端，你可以这么做：

```bash
mkdir borderify
cd borderify
```

### manifest.json

现在，在 "borderify" 目录内直接创建文件 "manifest.json"。文件内容如下：

```json
{

  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

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

- 前三个键：[`manifest_version`](/zh-CN/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/zh-CN/Add-ons/WebExtensions/manifest.json/name) 和 [`version`](/zh-CN/Add-ons/WebExtensions/manifest.json/version) 是强制的，包含有扩展的基本元数据。
- [`description`](/zh-CN/Add-ons/WebExtensions/manifest.json/description) 是可选的，但建议使用「该描述将显示在附加组件管理器上」.
- [`icons`](/zh-CN/Add-ons/WebExtensions/manifest.json/icons) 是可选的，但建议使用「它允许你给扩展指定一个图标，将显示在附加组件管理器上」.

这里最有意思的键是 [`content_scripts`](/zh-CN/Add-ons/WebExtensions/manifest.json/content_scripts)，它告诉 Firefox 加载脚本到其 URL 匹配特定模式的网页。本例中，我们要求 Firefox 加载脚本 "borderify.js" 到任何来自 "mozilla.org" 或其子域的 HTTP 或 HTTPS 页面。

- [进一步了解内容脚本 content script](/zh-CN/Add-ons/WebExtensions/Content_scripts)
- [进一步了解模式匹配 pattern matching](/zh-CN/Add-ons/WebExtensions/Match_patterns)

> **警告：** [某些情况下，你需要给你的扩展指定一个 ID](/zh-CN/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID)。如果你需要指定一个附加组件 ID，请在 `manifest.json` 中添加 [`browser_specific_settings`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键，并设置其 `gecko.id` 属性：
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

扩展应该有一个图标。这将显示在附加组件管理器加载项的列表中。我们的 manifest.json 保证了会有一个图标 "icons/border-48.png"。

在 "borderify" 目录下直接创建 "icons" 目录，并在 "icons" 目录下保存一个名为 "border-48.png"的图标。你可以使用[我们的示例](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png)中的，来自谷歌材料设计语言 (Material Design) 中的图标，遵循 [Creative Commons Attribution-ShareAlike](http://creativecommons.org/licenses/by-sa/3.0/) 协议。

如果您选择使用自己的图标，它也应该是 48×48 像素。你也可以为高分辨率显示器提供一个 96x96 的像素图标，在 manifest.json 的 `icons` 对象中添加 `96` 属性即可：

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

或者，也可以在这里提供一个 SVG 文件，它会被正确地缩放。(不过：如果你正在使用 SVG 并且你的图标包含文字，有可能想要用你的 SVG 编辑器的“转换为路径”工具来拼和文字，这样图标会以一个恒定的大小/位置来缩放。）

- [了解更多关于指定图标的内容](/zh-CN/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

最后，在 "borderify" 目录下直接创建 "borderify.js" 文件，并写入下面的内容：

```js
document.body.style.border = "5px solid red";
```

manifest.json 文件中 `content_scripts` 的键给出了一条模式匹配，该脚本便会被加载到匹配的页面中。该脚本会像页面加载自己的脚本一样被加载，可以直接访问该文档。

- [了解更多关于内容脚本的内容。](/zh-CN/Add-ons/WebExtensions/Content_scripts)

## 测试一下

首先，仔细检查文件是否在正确的位置：

    borderify/
        icons/
            border-48.png
        borderify.js
        manifest.json

### 安装

打开 Firefox 的 [about:debugging](/zh-CN/docs/Tools/about:debugging) 页面，点击”This Firefox" (在新版本的 Firefox 里），点击 "临时加载附加组件（Load Temporary Add-on）" 按钮，并选择你的附加组件目录：

{{EmbedYouTube("cer9EUKegG4")}}

附加组件将会被安装，直到下次重启浏览器失效。

或者，你可以通过 [web-ext](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext) 工具从命令行来运行扩展。

### 测试

现在尝试访问"mozilla.org", 你将会在页面上看到有个红色的边框

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **备注：** 不要在 addons.mozilla.org 上尝试！内容脚本（Content Script) 当前在那个域名下是被限制的。

尝试一下编辑内容脚本更改边框的颜色，或做页面内容别的修改，保存内容脚本，然后通过单击 **about:debugging** 页面下的 “刷新”按钮重新加载附加的文件。你可以马上看到的变化：

{{EmbedYouTube("NuajE60jfGY")}}

- [学习更多关于加载附加组件](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## 打包和发布

为了给其他人使用你的插件，您需要打包，并将其提交给 Mozilla 进行签名。要了解更多有关，请参考 ["发布你的扩展"](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)。

## 下一步

现在，你已经在开发 Firefox 的一个 Web 扩展的过程中得到了一些想法，尝试：

- [写一个更加复杂的 WebExtension](/zh-CN/Add-ons/WebExtensions/Your_second_WebExtension)
- [阅读更多关于 WebExtensions 的剖析](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [探索更多关于扩展的示例](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [发现开发，测试，和发布扩展需要的东西](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next_)
- [进一步的学习](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next_#Continue_your_learning_experience)
