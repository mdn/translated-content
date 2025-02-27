---
title: Web 性能
slug: Learn_web_development/Extensions/Performance
original_slug: Learn/Performance
l10n:
  sourceCommit: 5085525b3452de07dbac7fa700aaaf5ff5360a2f
---

{{LearnSidebar}}

构建网站需要 HTML、CSS 和 JavaScript。要构建人们想要使用、吸引并留住用户的网站和应用程序，你需要创造良好的用户体验。良好用户体验的一部分是确保内容能够快速加载并响应用户交互。这就是所谓的 **Web 性能**，在本模块中，你将专注于创建高性能网站的基础知识。

我们初学者的学习材料的其他部分尽可能地坚持 Web 最佳实践，如性能和[无障碍](/zh-CN/docs/Learn_web_development/Core/Accessibility)，然而，专门专注于这些主题并确保你熟悉它们也很好。

## 学习路径

虽然了解 HTML、CSS 和 JavaScript 对于实施许多 Web 性能改进建议是必要的，但知道如何构建应用程序并不是理解并测量 Web 性能的必要前提。然而，我们建议你在学习本模块之前，至少通过我们的 [Web 入门](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website)模块对 Web 开发有一个基本的了解。

深入了解这些主题也会有所帮助，例如：

- [HTML 简介](/zh-CN/docs/Learn_web_development/Core/Structuring_content)
- [CSS 第一步](/zh-CN/docs/Learn_web_development/Core/Styling_basics)
- [JavaScript 第一步](/zh-CN/docs/Learn_web_development/Core/Scripting)

一旦你完成了本模块的学习，你可能会对深入研究 Web 性能感到兴奋——你可以在我们[主要的 MDN Web 性能部分](/zh-CN/docs/Web/Performance)找到许多进一步的教学内容，包括性能 API 的概述、测试和分析工具，以及性能瓶颈的陷阱。

## 指南

本主题包含以下指南。以下是建议的学习顺序；你绝对应该从第一个开始。

- [Web 性能的重要性](/zh-CN/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : 这篇文章讨论了 Web 性能对于无障碍、用户体验和你的业务目标的重要性。
- [什么是 Web 性能？](/zh-CN/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : 你知道 Web 性能很重要，但什么是 Web 性能？这篇文章介绍了性能的组成部分，从网页加载和渲染（包括你的内容如何进入用户的浏览器以供查看），到我们在考虑性能时需要考虑的人群。
- [用户如何感知性能？](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : 比你的网站以毫秒为单位的加载速度更重要的是用户感知到的网站速度。这些感知受到实际页面加载时间、空闲时间、响应用户交互的速度以及滚动和其他动画的平滑度的影响。在这篇文章中，我们讨论了各种加载指标、动画和响应性指标，以及改进用户感知（即使不是实际时间）的最佳实践。
- [性能的衡量](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : 现在你已经了解了一些性能指标，接下来我们将深入探讨性能工具、指标和 API，以及如何将性能作为 Web 开发工作流程的一部分。
- [多媒体：图像](/zh-CN/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : 最容易提升 Web 性能的方式通常是媒体优化。根据每个用户代理的能力、尺寸和像素密度提供不同的媒体文件是可能的。在这篇文章中，我们讨论了图像对性能的影响，以及减少每个图像发送的字节数的方法。
- [多媒体：视频](/zh-CN/docs/Learn_web_development/Extensions/Performance/video)
  - : 最容易提升 Web 性能的方式通常是媒体优化。在这篇文章中，我们讨论了视频内容对性能的影响，并提供了一些技巧，如从背景视频中删除音轨可以提高性能。
- [JavaScript 性能优化](/zh-CN/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript，如果使用得当，可以实现交互式和沉浸式的 Web 体验——反之则可能会显著损害下载时间、渲染时间、应用程序性能、电池寿命和用户体验。这篇文章概述了一些应考虑的 JavaScript 最佳实践，以确保即使复杂的内容也能尽可能高效。
- [HTML 性能优化](/zh-CN/docs/Learn_web_development/Extensions/Performance/HTML)
  - : 某些属性和标记的源顺序可能会影响你网站的性能。通过最小化 DOM 节点的数量，确保为包含的内容（如样式、脚本、媒体和第三方脚本）使用最佳顺序和属性，你可以显著改善用户体验。这篇文章详细介绍了如何使用 HTML 来确保最佳性能。
- [CSS 性能优化](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS 可能不是改进性能的重要优化关注点，但有些 CSS 特性对性能的影响比其他的更大。在这篇文章中，我们介绍了一些影响性能的 CSS 属性，并提出了一些有关处理样式的方法的建议，以确保性能不受负面影响。
- [字体和性能](/zh-CN/docs/Learn/Performance/Fonts)
  - : 这篇文章探讨了你是否需要包含外部字体，如果需要，如何以对网站性能影响最小的方式包含设计所需的字体。
- [移动端性能](/zh-CN/docs/Learn/Performance/Mobile)
  - : 由于在移动设备上访问 Web 非常流行，并且所有移动平台都有功能齐全的 Web 浏览器，但可能存在带宽、CPU 和电池寿命的限制，因此考虑这些平台上 Web 内容的性能非常重要。这篇文章探讨了移动设备特有的性能考虑因素。
- [Web 性能的商业案例](/zh-CN/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : 开发人员可以采取许多措施来提高系统的性能，但是什么样的速度才算快？如何说服管理层重视这些努力？一旦优化完成，如何确保系统不会再次出现性能问题？这篇文章将探讨如何说服管理层、如何培养性能文化和制定性能预算，并介绍确保系统不会出现性能回退的方法。

## 参见

- [Web 性能资源](/zh-CN/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : 除了 HTML、CSS、JavaScript 和媒体文件的前端组件外，还有可以使应用程序变慢的特性和可以使应用程序在主观和客观上都变快的特性。有许多与 Web 性能相关的 API、开发者工具、最佳实践和不良实践。在这里，我们将介绍这些特性的基本知识，并针对每个主题都提供了更深入地提升性能的链接。
- [响应式图像](/zh-CN/docs/Web/HTML/Responsive_images)
  - : 在这篇文章中，我们将学习响应式图像的概念——在屏幕尺寸、分辨率和其他特征差异很大的设备上表现良好的图像——并了解 HTML 提供的帮助实现它们的工具。这有助于提高不同设备的性能。响应式图像只是[响应式设计](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)的一部分，这是你未来要学习的 CSS 主题。
- [MDN 上主要的 Web 性能部分](/zh-CN/docs/Web/Performance)
  - : 我们主要的 Web 性能部分——在这里，你将找到更多关于 Web 性能的详细信息，包括性能 API 的概述、测试和分析工具，以及性能瓶颈的陷阱。
