---
title: 媒体类型和格式指南：图片、音频和视频内容
slug: Web/Media/Guides/Formats
---

几乎从一开始，Web 就包含了对某种形式的视觉媒体呈现的支持。最初，这些功能是有限的，但是不同的浏览器厂商扩展了这些功能，并且找到了自己的解决方案来解决网络上的静态和视频图像等问题。现代 Web 具有强大的功能来支持媒体的呈现和操作，多个与媒体相关的 API 支持各种类型的内容。通常，浏览器支持的媒体格式完全取决于浏览器的创建者，这可能会使 Web 开发人员的工作复杂化。

本指南概述了组成 web 中使用的媒体的媒体文件类型、{{Glossary("codec", "编解码器")}}以及算法。本指南还提供了浏览器对这些格式的各种组合的支持信息、格式优先级建议，以及哪些格式擅长于特定类型的内容。

## 参考

### 图片

- [图片文件类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats/Image_types)
  - : 互联网上使用的主要图像文件类型和内容格式指南。其中包括对浏览器支持、优点和限制的高度概述，以及最佳实践指南，以帮助网页设计人员为特定类型的内容选择正确的图像文件格式。

### 媒体文件格式和编解码器

- [媒体容器（文件类型）](/zh-CN/docs/Web/Media/Guides/Formats/Containers)
  - : 包含媒体数据的文件类型指南。其中一些是音频专用文件，而另一些既可用于音频，也可用于电影等综合视听内容。包括主要 web 浏览器支持的每种文件类型的概述，以及浏览器支持信息和支持的特性。
- [Web 音频编解码器指南](/zh-CN/docs/Web/Media/Guides/Formats/Audio_codecs)
  - : 常用媒体容器和主要浏览器允许使用的音频编解码器指南。包括优点、限制、主要规范和功能以及使用案例。还包括各浏览器对在特定容器中使用编解码器的支持。
- [Web 视频编解码器指南](/zh-CN/docs/Web/Media/Guides/Formats/Video_codecs)
  - : 本文提供了有关主要浏览器支持的视频编解码器的基本信息，以及一些不常支持但仍可能遇到的编解码器。文章还介绍了编解码器的功能、优点、限制以及浏览器支持级别和限制。
- [不同媒体类型的编解码器](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)
  - : 在指定描述媒体格式的 MIME 类型时，可以使用作为类型字符串一部分的 `codecs` 参数提供详细信息。本指南介绍常见媒体类型的 `codecs` 参数的格式和可能的值。
- [WebRTC 使用的编解码器](/zh-CN/docs/Web/Media/Guides/Formats/WebRTC_codecs)
  - : [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 不使用容器，而是使用 {{domxref("MediaStreamTrack")}} 对象在点对点之间流式传输编码媒体本身，以表示每个音频或视频音轨。本指南将讨论 WebRTC 常用的编解码器。

## 指南

### 概念

- [数字音频概念](/zh-CN/docs/Web/Media/Guides/Formats/Audio_concepts)
  - : 介绍如何将音频转换成数字形式并存储起来供计算机使用。它解释了音频采样的基本概念，以及采样率、音频帧和音频压缩等概念。
- [数字视频概念](/zh-CN/docs/Web/Media/Guides/Formats/Video_concepts)
  - : Web 数字视频基本概念指南，包括色彩格式、色度二次抽样、人类感知如何影响视频编码等基础知识。

### 教程

- [学习区：视频和音频内容](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : 本教程介绍了在 web 上使用媒体的方法和细节。
- [处理 web 内容的媒体支持问题](/zh-CN/docs/Web/Media/Guides/Formats/Support_issues)
  - : 在本指南中，我们将探讨如何通过明智地选择媒体格式，并在有帮助的地方提供回退和替代格式，在提供尽可能广泛的兼容性的同时，最大限度地提高网页内容的质量或性能。

## 其他主题

- [媒体能力 API](/zh-CN/docs/Web/API/Media_Capabilities_API)
  - : 媒体能力 API 可让你发现应用程序或网站所运行设备的编码和解码能力。这样，你就可以实时决定何时使用何种格式。
