---
title: 技能测试：表格
slug: Learn_web_development/Core/Styling_basics/Tables_tasks
---

{{LearnSidebar}}

此任务的目的是为了帮助你检测在[样式化表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)课程中学到的技巧的理解。

> [!NOTE]
> You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

## 任务

在之前的课程中，我们以一种杀马特的方式样式化了一个表格。在这个任务中，我们打算样式化同样的表格，但是使用一些在外部文章[Web 排版：设计可读而不是可看的表格](https://alistapart.com/article/web-typography-tables/)概述的表格设计良好实践。

我们要完成的表格如下图所示。完成这个任务有许多方法，但是我建议你使用和向导中所用的相似的模式来完成以下的事情。

- 把标题和包含数字的列数据右对齐
- 把标题和包含文本的列数据左对齐
- 添加顶部和底部边框，以及页脚上方的边框
- 将主表的所有奇数行条纹化

![A table with striped rows.](mdn-table-bands.png)

```html live-sample___table
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If the kids are united</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2" scope="row">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

```css hidden live-sample___table
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
  font-size: 80%;
}
```

```css live-sample___table
/* Add styles here */
```

{{EmbedLiveSample("table", "", "400px")}}

> [!NOTE]
> For assessment or further work purposes, [download the starting point for this task](https://github.com/mdn/css-examples/blob/master/learn/tasks/tables/table-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors mentioned above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:

   - A descriptive title such as "Assessment wanted for tables skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
