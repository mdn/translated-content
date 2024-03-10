---
title: 多媒体与嵌入
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}

我们在这门课程中已经见到了很多文本，但是如果只使用文本，网页就会变得非常无聊。让我们开始学习如何在网页中添加更有趣的内容吧！这个模块将探讨如何用 HTML 在网页中包含多媒体，包括不同的图片插入方式，以及如何嵌入视频、音频，甚至整个网页。

## 预备知识

在你开始本模块之前，你应该已经掌握了 HTML 的基础知识，也就是之前在 [HTML 简介](/zh-CN/docs/learn/HTML/Introduction_to_HTML)中所述内容。如果你还没有看过那个模块（或者类似的），先去看看，然后再回来吧！

> **备注：** 如果你使用的是电脑/平板/其他设备，没有办法创建自己的文件，你可以在线上编程平台上尝试（大部分）代码示例，例如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/)。

## 指南

本模块包含以下文章，将带你了解在网页上嵌入多媒体所需的所有基础知识。

- [HTML 中的图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : 虽然还有很多其他类型的多媒体要考虑，但是从简单的 {{htmlelement("img")}} 元素开始比较符合逻辑，它常常被用来在网页中嵌入简单的图片。在这篇文章中，我们将学习怎样更深入的使用它，包括基础知识，使用 {{htmlelement("figure")}} 来为图片增加说明，以及它如何关联到 CSS 背景图片。
- [视频和音频内容](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : 接下来，我们将学习怎样在我们的页面上用 HTML 的 {{htmlelement("video")}} 和{{htmlelement("audio")}} 元素来嵌入视频和音频；包括基础知识，向不同的浏览器提供不同文件格式的访问方式，增加标题和副标题，以及增加对过时的浏览器的兼容。
- [从 \<object> 到 \<iframe>——其他嵌入技术](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : 在这一节，我们将来了解一些另辟蹊径的内容，学习一组特殊的元素，你可以用它们在页面中嵌入许多不同类型的内容：{{htmlelement("iframe")}}、{{htmlelement("embed")}} 和 {{htmlelement("object")}} 元素。`<iframe>` 用来嵌入其他网页，而另外两者可以帮助你嵌入外部资源（例如 PDF 文件）。
- [在页面中添加矢量图像](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : 矢量图像在一些特定场景下非常有用。不同于常见的格式（比如 PNG/JPG），它们不会在放大的时候变得扭曲或者显示出像素格——它们可以在缩放时保持光滑。本文将为你介绍矢量图像，以及如何在网页中添加流行的 {{glossary("SVG")}} 格式图像。
- [响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : 在这篇文章中，我们将学习响应式图片的概念（即能够适应不同屏幕尺寸、分辨率和其他特性的图片），并且了解 HTML 提供了哪些工具来实现它们。这有助于提高不同设备上的性能。响应式图片只是[响应式设计](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)的一部分，你会在之后学习到相关 CSS 主题的内容。

## 测验

以下测验将测试你对上述指南中涵盖的 HTML 基础知识的理解：

- [Mozilla 启动页面](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : 在这个测验中，我们将测试你对本模块文章中讨论的一些技巧的了解，让你将一些图像和视频添加到一个关于 Mozilla 的时髦的页面！

## 参见

- [在图像的顶部添加点阵图](/zh-CN/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : 图像映射提供了一种机制，使图像的不同部分链接到不同的地方（想想地图，链接到有关你点击的每个不同国家的更多信息。）这种技术有时可能是有用的。
- [网络素质基础 2](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : 这是一门优秀的 Mozilla 基金会课程，它探索和测试了本*多媒体和嵌入*模块中讨论的一些技能。深入了解编写网页、设计无障碍、共享资源、使用在线媒体和开放工作（意味着你的内容可以自由地被其他人获取和分享）的基础知识。
