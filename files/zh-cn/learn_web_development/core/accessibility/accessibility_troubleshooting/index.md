---
title: 挑战：无障碍疑难解答
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

在本模块的测验环节中，我们将呈现一个含有若干无障碍问题的简单网站，你需要对它进行诊断并修复这些问题。

## 开始之前

在开始本测验之前，你需要在[这里](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip)获取包含组成这个例子的 ZIP 压缩文件。将它们解压到一个本地的新文件夹中。

或者，你可以使用 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 完成你的测验。你可以将 HTML、CSS 和 JavaScript 代码粘贴到这些在线编辑器之一。如果你使用的在线编辑器没有分开的 CSS/JS 面板，则可将它们放置在适当的 `<style>`、`<script>` 元素之下。

最终完成的网页应该类似于这样：

![Screenshot of the finished assessment site with good color contrast. The search input has placeholder text and a submit button that reads go, but no visible label.](assessment-site-finished.png)

你会看到评估的起始状态的显示有一些差异/问题——这主要是由于标记的不同，这反过来又导致一些样式问题，因为 CSS 没有被正确应用。不要担心——你将在接下来的章节中解决这些问题！

> [!NOTE]
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 项目简要

在这个项目中，你会看到一个虚构的自然网站，展示一篇关于熊的“事实”文章。就目前的情况来看，它有一些无障碍的问题。你的任务是探索现有的网站，并尽可能解决这些问题，回答下面的问题。

### 颜色

目前的配色方案会导致文字难以阅读。你能不能对当前的颜色对比（文字或背景）做一个测试，报告测试结果，然后通过改变指定的颜色来解决这个问题？

### HTML 语义

1. 内容还不够无障碍——试试用屏幕阅读器阅读页面，看看会发生什么。
2. 你能不能更新文章的文字，让屏幕阅读器的使用者更容易浏览？
3. 网站的导航菜单部分（被包裹在 `<div class="nav"></div>` 中）可以通过把它放在一个适当的 HTML 语义元素中而变得更容易访问。它应该被更新为哪一个？请进行更新。

> [!NOTE]
> 你需要更新 CSS 规则选择器，将标签的样式改为语义标题的适当等价表示形式。一旦添加了段落元素，就会注意到样式看起来好一些了。

### 图片

图片目前对屏幕阅读器用户不可访问，你能修复它吗？

### 音频播放器

1. `<audio>` 播放器对听障人士（聋人）不可访问，你能为这些用户添加无障碍替代品吗？
2. `<audio>` 播放器对不支持 HTML 音频的旧式浏览器不可访问，如何让这些浏览器用户也可以访问到音频资源？

### 表单

1. 顶部的搜索表单中的 `<input>` 元素可以做一个标签，但我们不想添加一个可见的文本标签，这有可能会破坏设计，而且视力正常的用户并不真正需要。怎样才能添加一个只有屏幕阅读器才能访问的标签呢？
2. 评论表单中的两个 `<input>` 元素有可见的文本标签，但它们没有明确地与它们的标签相关联，如何实现这一点？请注意，你也需要更新一些 CSS 规则。

### 显示/隐藏评论控制

显示/隐藏评论控制按钮目前不可由键盘访问。你能让它成为键盘可访问的吗，既可以用 Tab 键聚焦，也可以用回车键激活它？

### 表格

数据表目前还不是很方便——屏幕阅读器用户很难将数据行和列联系在一起，而且该表也没有任何类型的摘要，以使其明确所显示的内容。你能在你的 HTML 中添加一些功能来解决这个问题吗？

### 其他考虑

你能再列举两个能使网站无障碍体验更佳的改进意见吗？

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
