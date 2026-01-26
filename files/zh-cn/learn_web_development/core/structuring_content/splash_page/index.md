---
title: Mozilla 欢迎页面
slug: Learn_web_development/Core/Structuring_content/Splash_page
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}

在本测验中，我们将测试你对于本模块文章所介绍的技术的掌握程度。你需要将一些有关于 Mozilla 的图片和视频添加到一个漂亮的页面上！

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        在开始这个测验之前，你应该已经学过本模块的其他文章。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        测试对这些知识的掌握程度：在页面中嵌入图片和视频、框架，以及 HTML 响应式图片技术。
      </td>
    </tr>
  </tbody>
</table>

## 起点

要开始本测试，你需要获取 [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) GitHub 目录中的 HTML 文件和所有可用的图片。将 [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) 的内容保存在本地磁盘上的一个名为 `index.html` 的文件中，并且将其放在一个新目录中。然后将 [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) 保存在同一目录中（右键单击图像后选择保存选项）。

以同样的方式访问 [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) 目录中的多个图片，并将它们保存下来；你需要将它们保存在不同的目录中，因为你需要在使用之前使用图形编辑器对其中一些图片进行处理。

或者，你可以使用在线编辑器，如 [CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)。

> [!NOTE]
> 示例 HTML 文件包含大量 CSS，用于为页面设置样式。你不需要修改 CSS，只需修改 {{htmlelement("body")}} 元素内的 HTML 即可。只要插入正确的标记，样式就会使其显示正确。
>
> 如果你遇到困难，可以在我们的[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)中联系我们。

## 项目概要

在本测试中，我们为你呈现了一个基本完成的 Mozilla 欢迎页面，其旨在积极有趣地描绘 Mozilla 的价值观，同时提供一些更进一步的资源的链接。不幸的是，页面上还没有添加任何图片或视频，这就是你要完成的任务！你需要添加一些媒体元素，使页面更加美观且更容易理解。下面的小节详细说明了你需要做的事情：

### 准备图片

使用你最爱的图片编辑器，创建下面几张图片的 400px 宽和 120px 宽的版本：

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

给它们取些有意义的名字，例如 `firefoxlogo400.png` 和 `firefoxlogo120.png`。

这些图片将与 `mdn.svg` 一起，作为链接到其他资源的图标，放在 `further-info` 区域内。你还需要在站点头部中链接 Firefox 标志。你应将所有这些图片的副本保存在与 `index.html` 相同的目录中。

接下来，创建一个宽度为 1200 像素的横向版 `red-panda.jpg`，以及一个宽度为 600 像素的纵向版，展示更近距离的熊猫照片。再次，给它们取一个合理的名称，以便你能够轻松识别它们。你应将这两张图片的副本保存在与 `index.html` 相同的目录中。

> [!NOTE]
> 你应该优化你的 JPG 和 PNG 图像，使它们尽可能小，同时保持良好的质量。[tinypng.com](https://tinypng.com/) 是一个很好的在线服务，可以轻松完成这项工作。

### 为 header 添加一个图标

在 {{htmlelement("header")}} 元素中添加一个 {{htmlelement("img")}} 元素，嵌入一个小尺寸版本的火狐图标。

### 为主 article 添加一个视频

在 {{htmlelement("article")}} 元素中（贴靠开放标签下侧），嵌入一个 Bilibili 视频（<https://www.bilibili.com/video/BV1rs411d7hC?p=2>），使用 Bilibili 生成嵌入代码。视频的宽度应该是 400px。

### 为 further info 的链接添加响应式图片

在 `further-info` 类的 {{htmlelement("div")}} 里你会看到四个 {{htmlelement("a")}} 元素，每个都指向一个有趣的、关于 Mozilla 的页面。为了完成这一部分，你需要在每个 {{htmlelement("a")}} 元素里插入一个 {{htmlelement("img")}} 元素，{{htmlelement("img")}} 元素需要包含合适的 [`src`](/zh-CN/docs/Web/HTML/Reference/Elements/img#src)、[`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt)、[`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 和 [`sizes`](/zh-CN/docs/Web/HTML/Reference/Elements/img#sizes) 属性。

我们希望每张图片（除了某个本身就是响应式的）在浏览器的视口的宽度小于等于 500px 时使用的 120px 宽的图片，其他情况下选择 400px 宽的版本。

确保每个链接匹配了正确的图片！

> [!NOTE]
> 为了正确地测试 `srcset`/`sizes` 示例，你需要把你的网站上传到服务器（使用 [Github pages](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) 是一个简单免费的方法），之后你就可以使用浏览器开发者工具（如 Firefox [网络监视器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)）来测试它们是否正常工作。

### 一张美术设计后的小熊猫照片

在 `red-panda` 类的 {{htmlelement("div")}} 中，我们希望插入一个 {{htmlelement("picture")}} 元素，并且希望在视口宽度小于等于 600px 时使用那张比较小的纵向的熊猫图片，在其他情况下则使用大的横向的图片。

## 提示和技巧

- 你可以使用 [W3C Nu HTML 检查器](https://validator.w3.org/nu/)来检查你的 HTML 代码中的错误。
- 要完成此测试，你不需要了解任何 CSS；你只需要我们提供的 HTML 文件。CSS 部分我们已经为你完成。
- 我们提供的 HTML（包括 CSS 样式）已经为你完成了大部分工作，因此你只需要专注于媒体嵌入部分。

## 示例

以下屏幕截图显示了欢迎页的外观。

![宽屏下示例欢迎页面的截图](wide-shot.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}
