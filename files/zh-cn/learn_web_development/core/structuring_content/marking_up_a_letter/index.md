---
title: 挑战：标记信件
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

写信是每个人的必备技能，它也是测验文本格式化技能的一个不错的办法呀！本次测验要求你为你一封写好的信做出标记，以测验你基础和高级的 HTML 文本格式化技能，包括超链接等等。此外将测验你对一些 HTML `<head>` 内容的熟悉程度。

## 起点

开始测验之前，请先下载[信件的原始文本](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt)和 [CSS 代码](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt)。然后用文本编辑器（用 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/) 等在线编辑工具亦可）创建一个新的 `.html` 文件来进行测验。

> [!NOTE]
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 项目概要

本项目中，你的任务为对一封大学内网信件进行标记，这封信是研究人员对一名学生有关申请博士学位问题的回复。

### 块/结构语义

- 你应该使用适当的结构来构造整体文档，包括 doctype、{{htmlelement("html")}}、{{htmlelement("head")}} 和 {{htmlelement("body")}} 元素。
- 除下面提到的几点之外，这封信应该被标记成有着段落和标题的结构。这封信有 1 个顶级标题（“Re:”那行）和 3 个二级标题。
- 使用适当类型的列表标记该学期的开学时间（the semester start dates）、学习科目（study subjects）和异域舞蹈（exotic dances）。
- 两个地址应该放在 {{htmlelement("address")}} 元素下。每行的地址应该放在新的一行而不是新的段落。

### 内联语义

- 应着重显示发信人和收信人的姓名（以及“电话”（_Tel_）和“电子邮件”（_Email_）字样）。
- 用适当的元素把文档中的四个日期标记成机器可读的日期。
- 为信中第一个地址和第一个日期设置一个类属性“_sender-column_”，这样就能通过添加 CSS 来使它们右对齐，以符合经典信件的布局。
- 信件正文中有 5 个首字母缩略词/缩写词（PhD、HTML、CSS、BC、Esq），给出这些词语的英文全称。
- 正确标注 6 个下标/上标（位于化学方程式、科学计数法中）。
- 试着标记至少对两个单词进行着重（`<strong>`）/ 强调（`<em>`）显示。
- 有两个地方应加上超链接，要为它们添加适当的标题。链接指向 `https://example.com/` 即可。
- 用适当的元素标记校训和引文。

### 文档的头部

- 用适当的元标签把文档的字符集声明为 utf-8。
- 用适当的元标签说明信件的作者。
- 用适当的标签引入我们提供的 CSS 代码。

## 提示和技巧

- 使用 [W3C HTML 验证器](https://validator.w3.org/)来验证 HTML，验证通过有额外加分。
- 完成这个测验不需要任何 CSS 知识，只需把现成的 CSS 放到 HTML 元素里就好。

## 示例

以下截图展示了这封信标记完成后可能的外观。

![Example](letter-update.png)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
