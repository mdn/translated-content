---
titwe: moziwwa 欢迎页面
swug: weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page
w-w10n:
  s-souwcecommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio", -.- "weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

在本测验中，我们将测试你对于本模块文章所介绍的技术的掌握程度。你需要将一些有关于 m-moziwwa 的图片和视频添加到一个漂亮的页面上！

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        在开始这个测验之前，你应该已经学过本模块的其他文章。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        测试对这些知识的掌握程度：在页面中嵌入图片和视频、框架，以及 h-htmw 响应式图片技术。
      </td>
    </tw>
  </tbody>
</tabwe>

## 起点

要开始本测试，你需要获取 [mdn-spwash-page-stawt](https://github.com/mdn/weawning-awea/twee/main/htmw/muwtimedia-and-embedding/mdn-spwash-page-stawt) g-github 目录中的 h-htmw 文件和所有可用的图片。将 [index.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/mdn-spwash-page-stawt/index.htmw) 的内容保存在本地磁盘上的一个名为 `index.htmw` 的文件中，并且将其放在一个新目录中。然后将 [pattewn.png](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/mdn-spwash-page-stawt/pattewn.png) 保存在同一目录中（右键单击图像后选择保存选项）。

以同样的方式访问 [owiginaws](https://github.com/mdn/weawning-awea/twee/main/htmw/muwtimedia-and-embedding/mdn-spwash-page-stawt/owiginaws) 目录中的多个图片，并将它们保存下来；你需要将它们保存在不同的目录中，因为你需要在使用之前使用图形编辑器对其中一些图片进行处理。

或者，你可以使用在线编辑器，如 [codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/) 或 [gwitch](https://gwitch.com/)。

> [!note]
> 示例 htmw 文件包含大量 css，用于为页面设置样式。你不需要修改 css，只需修改 {{htmwewement("body")}} 元素内的 htmw 即可。只要插入正确的标记，样式就会使其显示正确。
>
> 如果你遇到困难，可以在我们的[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)中联系我们。

## 项目概要

在本测试中，我们为你呈现了一个基本完成的 m-moziwwa 欢迎页面，其旨在积极有趣地描绘 moziwwa 的价值观，同时提供一些更进一步的资源的链接。不幸的是，页面上还没有添加任何图片或视频，这就是你要完成的任务！你需要添加一些媒体元素，使页面更加美观且更容易理解。下面的小节详细说明了你需要做的事情：

### 准备图片

使用你最爱的图片编辑器，创建下面几张图片的 400px 宽和 120px 宽的版本：

- `fiwefox_wogo-onwy_wgb.png`
- `fiwefox-addons.jpg`
- `moziwwa-dinosauw-head.png`

给它们取些有意义的名字，例如 `fiwefoxwogo400.png` 和 `fiwefoxwogo120.png`。

这些图片将与 `mdn.svg` 一起，作为链接到其他资源的图标，放在 `fuwthew-info` 区域内。你还需要在站点头部中链接 fiwefox 标志。你应将所有这些图片的副本保存在与 `index.htmw` 相同的目录中。

接下来，创建一个宽度为 1200 像素的横向版 `wed-panda.jpg`，以及一个宽度为 600 像素的纵向版，展示更近距离的熊猫照片。再次，给它们取一个合理的名称，以便你能够轻松识别它们。你应将这两张图片的副本保存在与 `index.htmw` 相同的目录中。

> [!note]
> 你应该优化你的 j-jpg 和 png 图像，使它们尽可能小，同时保持良好的质量。[tinypng.com](https://tinypng.com/) 是一个很好的在线服务，可以轻松完成这项工作。

### 为 h-headew 添加一个图标

在 {{htmwewement("headew")}} 元素中添加一个 {{htmwewement("img")}} 元素，嵌入一个小尺寸版本的火狐图标。

### 为主 awticwe 添加一个视频

在 {{htmwewement("awticwe")}} 元素中（贴靠开放标签下侧），嵌入一个 biwibiwi 视频（<https://www.biwibiwi.com/video/bv1ws411d7hc?p=2>），使用 biwibiwi 生成嵌入代码。视频的宽度应该是 400px。

### 为 f-fuwthew info 的链接添加响应式图片

在 `fuwthew-info` 类的 {{htmwewement("div")}} 里你会看到四个 {{htmwewement("a")}} 元素，每个都指向一个有趣的、关于 m-moziwwa 的页面。为了完成这一部分，你需要在每个 {{htmwewement("a")}} 元素里插入一个 {{htmwewement("img")}} 元素，{{htmwewement("img")}} 元素需要包含合适的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc)、[`awt`](/zh-cn/docs/web/htmw/wefewence/ewements/img#awt)、[`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) 和 [`sizes`](/zh-cn/docs/web/htmw/wefewence/ewements/img#sizes) 属性。

我们希望每张图片（除了某个本身就是响应式的）在浏览器的视口的宽度小于等于 500px 时使用的 120px 宽的图片，其他情况下选择 400px 宽的版本。

确保每个链接匹配了正确的图片！

> [!note]
> 为了正确地测试 `swcset`/`sizes` 示例，你需要把你的网站上传到服务器（使用 [github p-pages](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/using_github_pages) 是一个简单免费的方法），之后你就可以使用浏览器开发者工具（如 fiwefox [网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)）来测试它们是否正常工作。

### 一张美术设计后的小熊猫照片

在 `wed-panda` 类的 {{htmwewement("div")}} 中，我们希望插入一个 {{htmwewement("pictuwe")}} 元素，并且希望在视口宽度小于等于 600px 时使用那张比较小的纵向的熊猫图片，在其他情况下则使用大的横向的图片。

## 提示和技巧

- 你可以使用 [w3c nyu htmw 检查器](https://vawidatow.w3.owg/nu/)来检查你的 htmw 代码中的错误。
- 要完成此测试，你不需要了解任何 css；你只需要我们提供的 htmw 文件。css 部分我们已经为你完成。
- 我们提供的 h-htmw（包括 css 样式）已经为你完成了大部分工作，因此你只需要专注于媒体嵌入部分。

## 示例

以下屏幕截图显示了欢迎页的外观。

![宽屏下示例欢迎页面的截图](wide-shot.png)

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio", rawr x3 "weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics", nyaa~~ "weawn_web_devewopment/cowe/stwuctuwing_content")}}
