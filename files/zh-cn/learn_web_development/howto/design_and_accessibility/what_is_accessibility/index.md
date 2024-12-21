---
title: 何为无障碍？
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
original_slug: Learn/Common_questions/Design_and_accessibility/What_is_accessibility
---

{{QuicklinksWithSubPages("/zh-CN/docs/Learn/Common_questions")}}

本文介绍了 Web 无障碍背后的一些基本概念。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习无障碍，了解其重要性。</td>
    </tr>
  </tbody>
</table>

## 概述

由于身体或技术上的限制，你的访客也许无法以像你期望的方式体验网站。本文中，我们给出了无障碍的一般原则，并解释了其中的一些规则。

## 主动学习

_还没有可用的资料，[请考虑贡献一个](/zh-CN/docs/MDN/Community/Contributing/Getting_started)。_

## 深入探索

### 无障碍：一般原则

一开始，我们可能会把无障碍与负面限制联系在一起。这座建筑必须是无障碍的，因此它必须遵守门的宽度、厕所的大小和电梯的位置等规定。

这是对无障碍环境的狭隘理解。应将其视为增强人们能力、服务更多客户的绝佳方式。巴西人能用你的英文网站做什么？使用智能手机的人能够浏览专为大型台式机显示器和无限带宽设计的笨重、杂乱的网站吗？他们会去别的地方。总的来说，_我们必须从所有目标客户的角度来考虑我们的产品_，并做出相应的调整。

### Web 无障碍

在特定的 web 环境中，无障碍意味着任何人都能从你的内容中受益，无论其是否残疾、身处何地、是否有技术限制或其他情况如何。

我们考虑一个视频：

- 听力障碍

  - : 听障人士如何从视频中受益？你需要提供字幕，或者更好的是全文转录。

    此外，还要确保人们可以调节音量，以满足他们的独特需求。

- 视觉障碍
  - : 同样，提供用户无需播放视频就能查阅的文字说明和音频描述（描述视频中发生的事情的画外音）。
- 暂停能力
  - : 用户在理解视频中的某人时可能会遇到困难。让他们暂停视频，阅读字幕或处理信息。
- 键盘能力
  - : 让用户以标签方式进入/退出视频、播放视频和暂停视频，而不会被困在视频中。

#### Web 无障碍基础

基本的 Web 无障碍性包括以下几个必要条件：

- 无论何时，只要网站需要图片来表达意思，就应为有视觉障碍或连接速度慢的用户提供替代文字。
- 确保所有用户都能仅通过键盘（如制表键（tab）和回车键）操作图形界面（如展开菜单）。
- 提供明确指定内容语言的属性，以便屏幕阅读器正确阅读文本。
- 确保用户可以只用键盘导航到页面上的所有部件，而不会被困住。（至少让他们可以通过制表键导航）。

而这只是个开始。

### 无障碍的拥护者

自 1999 年以来，{{Glossary("W3C")}} 一直在运作一个名为 {{Glossary("WAI", "Web Accessibility Initiative")}}（WAI）的工作组，通过指南、辅助材料和国际资源来促进无障碍访问。

## 更多细节

请参见：

- 关于无障碍的[维基百科文章](https://zh.wikipedia.org/wiki/無障礙環境)
- [WAI（万维网联盟的网络无障碍倡议）](https://www.w3.org/WAI/)

## 下一步

无障碍会影响网站的设计和技术结构。

- 从设计角度来看，我们建议学习[为所有类型的用户设计](/zh-CN/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users)。
- 如果对技术方面更感兴趣，可以学习如何[在网页中嵌入图像](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_images)。
