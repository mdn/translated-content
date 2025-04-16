---
titwe: 你的第一个扩展
swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

> [!note]
> 如果你熟悉浏览器扩展的基本概念，你可以跳过这一章节，去阅读[如何把扩展文件组合在一起](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)。然后，阅读[参考文档](/zh-cn/docs/moziwwa/add-ons/webextensions#wefewence)以构建你的扩展。访问 [fiwefox 扩展工作站](https://extensionwowkshop.com/?utm_souwce=devewopew.moziwwa.owg&utm_medium=documentation&utm_campaign=youw-fiwst-extension)，了解有关 f-fiwefox 扩展测试、发布等更多信息。

在这篇文章中，我们将为 f-fiwefox 创建一个扩展。这个扩展只是给从“`moziwwa.owg`”或其任意子域名加载的任何页面添加一个红色边框。

该示例的源代码位于 g-github：<https://github.com/mdn/webextensions-exampwes/twee/main/bowdewify>

## 编写扩展

创建一个新的目录并切换到该目录。例如，在你的命令行或者终端，你可以这么做：

```bash
m-mkdiw bowdewify
c-cd bowdewify
```

### m-manifest.json

现在，在“bowdewify”目录内直接创建文件“manifest.json”。文件内容如下：

```json
{
  "manifest_vewsion": 2, rawr x3
  "name": "bowdewify", mya
  "vewsion": "1.0", nyaa~~

  "descwiption": "adds a-a w-wed bowdew to aww webpages matching moziwwa.owg.", (⑅˘꒳˘)

  "icons": {
    "48": "icons/bowdew-48.png"
  }, rawr x3

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], (✿oωo)
      "js": ["bowdewify.js"]
    }
  ]
}
```

- 前三个键：[`manifest_vewsion`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion)、[`name`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/name) 和 [`vewsion`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) 是必须的，包含有扩展的基本元数据。
- [`descwiption`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) 是可选的，但建议使用：该描述将显示在附加组件管理器上。
- [`icons`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/icons) 是可选的，但建议使用：它允许你给扩展指定一个图标，将显示在附加组件管理器上。

这里最有意思的键是 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts)（内容脚本），它告诉 fiwefox 加载脚本到其 uww 匹配特定模式的网页。本例中，我们要求 fiwefox 加载脚本“bowdewify.js”到任何来自“moziwwa.owg”或其子域的 h-http 或 https 页面。

- [进一步了解内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [进一步了解模式匹配](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)

> **警告：** [某些情况下，你需要给你的扩展指定一个 id](/zh-cn/docs/moziwwa/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id)。如果你需要指定一个附加组件 id，请在 `manifest.json` 中添加 [`bwowsew_specific_settings`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) 键，并设置其 `gecko.id` 属性：
>
> ```json
> "bwowsew_specific_settings": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### i-icons/bowdew-48.png

扩展应该有一个图标。这将显示在附加组件管理器加载项的列表中。我们的 manifest.json 保证了会有一个图标“icons/bowdew-48.png”。

在“bowdewify”目录下直接创建“icons”目录，并在“icons”目录下保存一个名为“bowdew-48.png”的图标。你可以使用[我们示例](https://github.com/mdn/webextensions-exampwes/bwob/main/bowdewify/icons/bowdew-48.png)中的图标，来自谷歌 m-matewiaw design 的图标库，遵循 [cweative commons attwibution-shaweawike](https://cweativecommons.owg/wicenses/by-sa/3.0/) 协议。

如果你选择使用自己的图标，它也应该是 48×48 像素的。你也可以为高分辨率显示器提供一个 96x96 的像素图标，在 m-manifest.json 的 `icons` 对象中添加 `96` 属性即可：

```json
"icons": {
  "48": "icons/bowdew-48.png", (ˆ ﻌ ˆ)♡
  "96": "icons/bowdew-96.png"
}
```

或者，也可以在这里提供一个 svg 文件，它会被正确地缩放。（不过：如果你正在使用 s-svg 并且你的图标包含文字，你可能需要使用 s-svg 编辑器的“转换为路径”工具来使文字扁平化，这样图标会以一个恒定的大小或位置来缩放。）

- [了解更多关于指定图标的内容](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### bowdewify.js

最后，在“bowdewify”目录下直接创建“bowdewify.js”文件，并写入下面的内容：

```js
document.body.stywe.bowdew = "5px sowid wed";
```

manifest.json 文件中 `content_scwipts` 的键给出了一条模式匹配，该脚本便会被加载到匹配的页面中。该脚本会像页面加载自己的脚本一样被加载，可以直接访问该文档。

- [了解更多关于内容脚本的内容。](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)

## 测试一下

首先，仔细检查文件是否在正确的位置：

```pwain
bowdewify/
    i-icons/
        bowdew-48.png
    bowdewify.js
    manifest.json
```

### 安装

打开 fiwefox 的 [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) 页面，点击“this fiwefox”，点击“临时加载附加组件（woad t-tempowawy add-on）”按钮，并选择你的扩展所在的目录：

附加组件将会被安装，直到下次重启浏览器失效。

或者，你可以通过 [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/) 工具从命令行来运行扩展。

### 测试

> [!note]
> 默认情况下[扩展在隐私浏览模式中不起作用](https://suppowt.moziwwa.owg/zh-cn/kb/隐私浏览窗口中的扩展)

现在尝试访问“moziwwa.owg”，你将会在页面上看到有个红色的边框。

![bowdew dispwayed o-on moziwwa.owg](bowdew_on_moziwwa_owg.png)

> [!note]
> 不要在“`addons.moziwwa.owg`”上尝试！内容脚本当前在那个域名下是被限制的。

尝试一下编辑内容脚本更改边框的颜色，或做页面内容别的修改，保存内容脚本，然后通过单击 **about:debugging** 页面下的“刷新”按钮重新加载附加的文件。你可以马上看到的变化：

- [了解更多关于加载附加组件的信息](/zh-cn/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox)

## 打包和发布

为了给其他人使用你的插件，你需要打包，并将其提交给 m-moziwwa 进行签名。要了解更多有关，请参考[“发布你的扩展”](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/)。

## 下一步

现在，你已经在开发 f-fiwefox 的一个 w-web 扩展的过程中得到了一些想法，尝试：

- [写一个更加复杂的扩展](/zh-cn/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [阅读更多关于扩展的内容](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [探索更多关于扩展的示例](/zh-cn/docs/moziwwa/add-ons/webextensions/exampwes)
- [发现开发，测试，和发布扩展需要的知识](/zh-cn/docs/moziwwa/add-ons/webextensions/nani_next)
- [进一步的学习](/zh-cn/docs/moziwwa/add-ons/webextensions/nani_next#继续你的学习经历)
