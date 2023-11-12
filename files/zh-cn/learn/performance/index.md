---
title: Web 性能
slug: Learn/Performance
---

{{LearnSidebar}}

构建一个网站需要 HTML、CSS 和 JavaScript。为了构建人们需要的、能吸引和留住用户的网站和应用，你需要创建一个良好的用户体验。良好用户体验的一部分是确保内容能够快速加载并响应用户交互。这就是所谓的 **web 性能**，在这个模块中，你将会学到构建性能良好的网站所需要的知识。

我们的初学者学习材料的其余部分尽量坚持网络最佳实践，如性能和[无障碍](/zh-CN/docs/Learn/Accessibility)，然而，专门关注此类主题也是不错的，并确保你熟悉它们。

## 学习途径

虽然了解 HTML、CSS 和 Javascript 是实现许多网页性能提升建议的必要条件，但了解如何构建应用却不是理解和衡量网页性能的必要先决条件。然而，我们建议你在学习本模块之前，至少通过学习我们的 [web 入门](/zh-CN/docs/Learn/Getting_started_with_the_web)模块，获得一个网络开发的基本概念。

更深入进行以下主题也很有必要，这些模块包括：

- [HTML 入门](/zh-CN/docs/Learn/HTML/Introduction_to_HTML)
- [CSS 初步](/zh-CN/docs/Learn/CSS/First_steps)
- [JavaScript 初步](/zh-CN/docs/Learn/JavaScript/First_steps)

一旦你完成了这个模块的学习，你可能会对深入研究网络性能感到兴奋——你可以在我们的 [MDN 网络主要性能部分](/zh-CN/docs/Web/Performance)找到很多进一步的教学内容，包括性能 API 的概述、测试和分析工具，以及性能瓶颈问题。

## 指南

本专题包含以下指南。以下是建议的学习顺序；你肯定应该从第一个开始。

- [为什么要提升 web 性能](/zh-CN/docs/Learn/Performance/why_web_performance)
  - : 本文讨论了为什么网络性能对无障碍、用户体验和你的商业目标很重要。
- [什么是 web 性能？](/zh-CN/docs/Learn/Performance/What_is_web_performance)
  - : 你知道网络性能很重要，但什么构成了网络性能？本文介绍了性能的组成部分，从网页的加载和渲染，包括你的内容如何进入用户的浏览器被浏览，到我们在考虑性能时需要考虑哪些群体的问题。
- [用户如何感知性能？](/zh-CN/docs/Learn/Performance/Perceived_performance)
  - : 比你的网站有多快（以毫秒为单位）更重要的是你的用户认为你的网站有多快。这些感知受到实际页面加载时间、空闲、对用户互动的响应能力、滚动和其他动画的流畅度的影响。在这篇文章中，我们将讨论各种加载指标、动画和响应性指标，以及改善用户感知的最佳做法，如果不是实际时间的话。
- [性能的衡量](/zh-CN/docs/Learn/Performance/Measuring_performance)
  - : 现在你已经了解了一些性能指标，我们将深入了解性能工具、指标和 API，以及我们如何使性能成为 Web 开发工作流程的一部分。
- [多媒体：图片](/zh-CN/docs/Learn/Performance/Multimedia)
  - : 最容易提升网络性能的方式往往是媒体优化。根据每个用户代理的能力、尺寸和像素密度来提供不同的媒体文件是可能的。在这篇文章中，我们讨论了图像对性能的影响，以及减少每张图像发送字节数的方法。
- [多媒体：视频](/zh-CN/docs/Learn/Performance/video)
  - : 最容易提升网络性能的方式往往是媒体优化。在这篇文章中，我们讨论了视频内容对性能的影响，并涵盖了从背景视频中删除音轨等技巧，可以提高性能。
- [JavaScript 性能最佳实践](/zh-CN/docs/Learn/Performance/JavaScript)
  - : 如果使用得当，JavaScript 可以实现交互式和沉浸式的网络体验——反之则可能显著增加下载时间、渲染时间并损害应用性能、电池寿命和用户体验。本文概述了一些应该考虑的 JavaScript 最佳实践，以确保即使是复杂的内容也能尽可能地执行。
- [HTML 性能特性](/zh-CN/docs/Learn/Performance/HTML)
  - : 一些属性和你的标记的源顺序会影响你的网站的性能。通过尽量减少 DOM 节点的数量，确保使用最佳的顺序和属性来包括样式、脚本、媒体和第三方脚本等内容，你可以大幅提高用户体验。这篇文章详细研究了如何使用 HTML 来确保最大的性能。
- [CSS 性能特性](/zh-CN/docs/Learn/Performance/CSS)
  - : 在提高性能方面，CSS 可能是一个不太重要的优化重点，但有一些 CSS 特性对性能的影响比其他的更大。在这篇文章中，我们看看一些影响性能的 CSS 属性，以及处理样式的建议方法，以确保性能不受负面影响。
- [字体与性能](/zh-CN/docs/Learn/Performance/Fonts)
  - : 看看你是否需要引入外部字体，如果需要，如何以对网站性能影响最小的方式引入你的设计所需的字体。
- [移动端性能](/zh-CN/docs/Learn/Performance/Mobile)
  - : 随着移动设备上的网络访问普及，所有的移动平台都有成熟的网络浏览器，但可能存在带宽、CPU 和电池寿命受限等问题，因此必须考虑在这些平台上提供的 Web 内容的性能。本文探讨了针对移动设备的性能考虑。
- [web 性能的商业案例](/zh-CN/docs/Learn/Performance/business_case_for_performance)
  - : 开发人员可以采取许多措施来提高系统的性能，但是什么样的速度才算快？如何说服管理层重视这些努力？一旦优化完成，如何确保系统不会再次出现性能问题？本文将探讨如何说服管理层、如何培养性能文化和制定性能预算，并介绍确保系统不会出现性能回退的方法。

## 参见

- [Web 性能资源](/zh-CN/docs/Learn/Performance/Web_Performance_Basics)
  - : 除了 HTML、CSS、JavaScript 和媒体文件等前端组件外，还有一些可以使应用程序变慢的功能和可以使应用程序在主观和客观上变快的功能。有许多与网络性能有关的 API、开发者工具、最佳实践和不良实践。在这里，我们将介绍许多这些功能的基本水平，并提供更深入的链接，以提高每个主题的性能。
- [响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : 在这篇文章中，我们将了解响应式图像的概念，并看看 HTML 提供了哪些工具来帮助实现它们。响应式图像是在屏幕尺寸、分辨率和其他类似特征差别很大的设备上能很好地工作的图像。这有助于提高不同设备的性能。响应式图像只是[响应式设计](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)的一部分，这是你未来要学习的一个 CSS 主题。
- [MDN 上主要的 web 性能页面](/zh-CN/docs/Web/Performance)
  - : 我们主要的网络性能部分。在这里你会发现更多关于网络性能的细节，包括性能 API 的概述，测试和分析工具，以及性能瓶颈的问题。
