---
title: 挑战：构建网页内容
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

构建页面内容是一项重要技能，页面构建清晰才能顺利交付进行 CSS 布局。本测验将测试你是否能构思出页面的最终外观，以及是否会选用适当的结构语义。

## 起点

开始测验前，请先下载 [assets.zip](https://raw.githubusercontent.com/roy-tian/learning-area/master/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip)。其中包含：

- 需要补充结构标记的 HTML 文件。
- 给标记添加样式的 CSS 文件。
- 页面中使用的图片。

可在电脑上创建示例，也可以用 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 等网站来完成测验。

## 项目简介

本项目的任务是为“观鸟网”的主页添加结构化的元素，使其可以进行布局设计。需要添加的有：

- 页眉（`<header>`），应充满页面宽度，并包含网站主标题、网站 logo 和导航栏菜单。样式生效后标题和 logo 应显示在在两边，导航栏在它们下方。
- 主内容区域（`<main>`），应有两栏，其中主区域显示欢迎信息，侧边栏包含一些缩略图。
- 页脚（`<footer>`），包含版权信息和鸣谢。

你应该为以下内容添加合适的标签：

- 页眉
- 导航菜单
- 主要内容
- 欢迎语
- 图片侧边栏
- 页脚

还应：

- 添加一个 {{htmlelement("link")}} 元素把现成的 CSS 文件引入页面。

## 提示

- 可用 [W3C HTML 验证器](https://validator.w3.org/) 来验证 HTML；验证通过有额外加分。(有两行包含“googleapis”的 `<link>` 元素用于从 Google Fonts 服务引入自定义字体到页面；它们不会被验证，所以不用担心。)
- 本测验不需要任何 CSS 知识；只需用 HTML 元素添加现成的 CSS 即可。
- 现成的 CSS 已经设计好布局，使用正确的结构元素，页面就会渲染成绿色。
- 如果你遇到困难不知道应该把添加元素到哪里，通常一个好的做法是：画一个简单的页面布局模块图，然后为每个块记录下恰当的元素。

## 示例

以下截图展示了添加标记后主页可能的外观：（可 [在线查看](https://roy-tian.github.io/learning-area/html/introduction-to-html/structuring-a-page-of-content-finished/)）

![测试示例。一个简单的“观鸟网”主页，由页眉、页脚、欢迎信息、收藏照片等部分组成。](example-page.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
