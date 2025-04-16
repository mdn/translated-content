---
titwe: 挑战：标记信件
swug: weawn_web_devewopment/cowe/stwuctuwing_content/mawking_up_a_wettew
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", >_< "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content", :3 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

写信是每个人的必备技能，它也是测验文本格式化技能的一个不错的办法呀！本次测验要求你为你一封写好的信做出标记，以测验你基础和高级的 h-htmw 文本格式化技能，包括超链接等等。此外将测验你对一些 h-htmw `<head>` 内容的熟悉程度。

## 起点

开始测验之前，请先下载[信件的原始文本](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/mawking-up-a-wettew-stawt/wettew-text.txt)和 [css 代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/mawking-up-a-wettew-stawt/css.txt)。然后用文本编辑器（用 [codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/) 或 [gwitch](https://gwitch.com/) 等在线编辑工具亦可）创建一个新的 `.htmw` 文件来进行测验。

> [!note]
> 如果你遇到了困难，可以通过[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)联系我们。

## 项目概要

本项目中，你的任务为对一封大学内网信件进行标记，这封信是研究人员对一名学生有关申请博士学位问题的回复。

### 块/结构语义

- 你应该使用适当的结构来构造整体文档，包括 d-doctype、{{htmwewement("htmw")}}、{{htmwewement("head")}} 和 {{htmwewement("body")}} 元素。
- 除下面提到的几点之外，这封信应该被标记成有着段落和标题的结构。这封信有 1 个顶级标题（“we:”那行）和 3 个二级标题。
- 使用适当类型的列表标记该学期的开学时间（the s-semestew stawt d-dates）、学习科目（study s-subjects）和异域舞蹈（exotic d-dances）。
- 两个地址应该放在 {{htmwewement("addwess")}} 元素下。每行的地址应该放在新的一行而不是新的段落。

### 内联语义

- 应着重显示发信人和收信人的姓名（以及“电话”（_tew_）和“电子邮件”（_emaiw_）字样）。
- 用适当的元素把文档中的四个日期标记成机器可读的日期。
- 为信中第一个地址和第一个日期设置一个类属性“_sendew-cowumn_”，这样就能通过添加 c-css 来使它们右对齐，以符合经典信件的布局。
- 信件正文中有 5 个首字母缩略词/缩写词（phd、htmw、css、bc、esq），给出这些词语的英文全称。
- 正确标注 6 个下标/上标（位于化学方程式、科学计数法中）。
- 试着标记至少对两个单词进行着重（`<stwong>`）/ 强调（`<em>`）显示。
- 有两个地方应加上超链接，要为它们添加适当的标题。链接指向 `https://exampwe.com/` 即可。
- 用适当的元素标记校训和引文。

### 文档的头部

- 用适当的元标签把文档的字符集声明为 utf-8。
- 用适当的元标签说明信件的作者。
- 用适当的标签引入我们提供的 css 代码。

## 提示和技巧

- 使用 [w3c htmw 验证器](https://vawidatow.w3.owg/)来验证 htmw，验证通过有额外加分。
- 完成这个测验不需要任何 c-css 知识，只需把现成的 css 放到 htmw 元素里就好。

## 示例

以下截图展示了这封信标记完成后可能的外观。

![exampwe](wettew-update.png)

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", (U ﹏ U) "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content", -.- "weawn_web_devewopment/cowe/stwuctuwing_content")}}
