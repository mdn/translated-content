---
title: 多媒体与嵌入
slug: Learn/HTML/Multimedia_and_embedding
tags:
  - 图像
  - 多媒体
translation_of: Learn/HTML/Multimedia_and_embedding
---
{{LearnSidebar}}

在这份教程中，到目前为止我们已经看到了许多的文字了。真的很多文字。但是网页除了文本之外什么都没有，真的非常无聊，所以，让我们开始看看怎样让网页动起来。用更多有趣的内容！本模块要探索怎样用 HTML 来让你的网页包含多媒体，包括可以包含图像的不同方式，以及怎样嵌入视频，甚至是整个其他的网页。

## 预备知识

在你开始本模块之前，你应该已经拥有了关于 HTML 基础的合理知识，就是之前在[HTML 介绍](/zh-CN/docs/learn/HTML/Introduction_to_HTML)中所述。如果你还没有看过那个模块（或者类似的），先去看看，然后再回来吧！

> **备注：** 如果你在电脑/平板电脑/其他设备上不能创建你自己的代码文件，你可以尝试在在线代码编辑网站例如[JSBin](https://jsbin.com/)或者[Glitch](https://glitch.com/)来运行（大部分的）代码示例。

## 指南

本模块包含以下的文章，它们将会让你了解所有在网页上关于嵌入多媒体的基础方面。

- [HTML 中的图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : 还有其他类型的多媒体要考虑，但是从低调的 {{htmlelement("img")}} 元素开始是符合逻辑的，它常常被用来在网页中嵌入一个简单的图片。在这篇文章中，我们要看看怎样更深入的使用它，包括基础，用标题注解 {{htmlelement("figure")}}，以及怎样把它关联到 CSS 背景图片。
- [视频和音频内容](/zh_CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : 接下来，我们将看看怎样在我们的页面上用 HTML5 的 {{htmlelement("video")}} 和{{htmlelement("audio")}}元素来嵌入视频和音频；包括基础，提供向不同的浏览器提供不同文件格式的访问方式，增加标题和副标题，以及增加对过时的浏览器的兼容。
- [从 \<object> 到 \<iframe> — 其他嵌入技术](/zh_CN/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : 在这一节，我们将来了解一些另辟蹊径的内容，看一组元素，它们可以让你在页面中嵌入许多不同类型的内容： {{htmlelement("iframe")}}, {{htmlelement("embed")}} 和 {{htmlelement("object")}} 元素。 `<iframe> 用来嵌入其他网页，而另外两者可以帮助你嵌入` PDF, SVG, 甚至是 Flash — 一种逐渐退出历史舞台的技术，不过也许你还是能时不时的看到它。
- [在页面中添加矢量图像](/zh_CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : 矢量图像在一些特定场景中非常有用。不同于常见的格式，比如 PNG/JPG, 它们不会在放大的时候变得扭曲或者显示出像素格——它们可以在缩放时保持光滑。本文将为你介绍什么是矢量图像，以及如何在网页中添加流行的 {{glossary("SVG")}} 格式图像。
- [响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : 现在有许多不同的设备类型能够浏览网络 - 从手机到台式电脑 - 在现代网络世界中掌握的一个基本概念就是响应式设计。这是指创建可以自动更改其功能以适应不同屏幕尺寸，分辨率等的网页。稍后将在 CSS 模块中详细介绍这一点，但是现在我们将看看 HTML 可用于创建响应式图像的工具，包括{{htmlelement("picture")}}元素。

## 评估

以下评估将测试您对上述指南中涵盖的 HTML 基础知识的理解：

- [Mozilla 启动页面](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : 在这个评估中，我们将测试您对本模块文章中讨论的一些技巧的了解，让您将一些图像和视频添加到一个关于 Mozilla 的时髦的页面！

## 参见

- [在图像的顶部添加一个点阵图](/zh-CN/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : 图像映射提供了一种机制，使图像的不同部分链接到不同的地方（想想地图，链接到有关您点击的每个不同国家的更多信息。）这种技术有时可能是有用的。
- [网络素质基础 2](https://teach.mozilla.org/activities/web-lit-basics-two/)
  - : 一个优秀的 Mozilla 基础课程，探讨并测试了多媒体和嵌入模块中谈到的一些技巧。深入了解撰写网页的基础知识，设计可访问性，共享资源，使用在线媒体和开放工作。
