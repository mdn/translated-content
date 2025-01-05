---
title: 作业：构建行星数据
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
original_slug: Learn/HTML/Tables/Structuring_planet_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

在我们的表格评定中，我们为你提供有关太阳系中行星的一些数据，并让你将其结构化成 HTML 表。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>在尝试这个评定之前，你应该已经把这个模块的所有文章都学习完成了。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>检测对 HTML 表格及相关功能的理解。</td>
    </tr>
  </tbody>
</table>

## 起点

要进行本测验，将 [blank-template.html](https://github.com/roy-tian/learning-area/blob/master/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/roy-tian/learning-area/blob/master/html/tables/assessment-start/minimal-table.css) 和 [planets-data.txt](https://github.com/roy-tian/learning-area/blob/master/html/tables/assessment-start/planets-data.txt) 拷贝到本地。

> [!NOTE]
> 另外，你可以使用 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 来做你的测验。你可以把 HTML, CSS 和 JavaScript 粘贴到其中一个网上编辑器里。如果你使用的网上编辑器不支持 JavaScript/CSS 文件链接到 HTML 中使用，那么也可以使用 `<script>`/`<style>` 元素将它们直接写在你的 HTML 页面里。

## 项目概要

你在学校工作; 目前，你的学生正在学习太阳系的行星，然后你想为他们提供一份简单的易于追踪的数据集合，来查找有关行星的数字和情况。一张 HTML 数据表将是理想的，你需要先获得可用的数据，然后把它变成一张表格，跟着下面的步骤。

完成后的表格看上去应该是这样的：

![](assessment-table.png)

你也可以 [在线查看](https://roy-tian.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (不要偷看源代码，不要作弊哦 !)

## 要完成的步骤

下面的步骤描述了：为了完成这个示例的表格，你所要做的事情。所有你需要的数据都包含在`planets-data.txt` 文件中。如果你在获得这些数据时遇到了问题，也看看上面的实例，或者尝试绘制一个图。

1. 打开在你本地环境中的 `blank-template.html`副本，提供一个外部容器来初始化表格，一个表格 header，一个表格 body。在这个例子中，你不需要表格 footer。
2. 为你的表格添加我们提供的标题。
3. 在表格的 header 中添加一行，用来包括所有列的标题。
4. 在表格的 body 部分创建所有内容行，记住要让所有是行标题的单元格语义化。
5. 确保所有内容都插入了正确的单元格，在原始数据中，每行行星数据都显示在其相关行星的旁边。
6. 添加一些属性，让行标题和列标题更加明确地与和它们有关的单元格进行关联，使用 rowgroups 让子标题和父标题也进行关联。
7. 为包含所有行星标题的行标题的那一列数据，添加一个黑色边框

## 要点和提示

- 标题行的第一个单元格需要是空白的，然后宽度为 2 个单元格。
- 行的主标题 (e.g. _Jovian planets_) 以及放置在行星名称行左侧的标题 (e.g. _Saturn_) 整理出来有点麻烦， — 你需要确保每个单元格都有正确的高度和宽度。(即横跨正确的行数和列数)
- 将标题与其行/列相关联的一种方法比其他方法容易得多。

## 评定

如果你将此评估作为有组织的课程的一部分，你应该能够将你的工作交给你的老师/导师进行评改。如果你是自学习的，那么你可以通过询问 [Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294), 或在 [#mdn](irc://irc.mozilla.org/mdn)的 IRC 频道 [Mozilla IRC](https://wiki.mozilla.org/IRC) 中轻松获得标记指南。首先尝试练习 - 作弊对你没有益处！

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
