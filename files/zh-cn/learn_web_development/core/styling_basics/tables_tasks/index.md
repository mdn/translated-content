---
title: 技能测试：表格
slug: Learn_web_development/Core/Styling_basics/Tables_tasks
---

{{LearnSidebar}}

此任务的目的是为了帮助你检测在[样式化表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)课程中学到的技巧的理解。

> [!NOTE]
> 你可以在下面的交互式编辑器中尝试解决方案，但是下载代码并使用诸如[CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/) 之类的在线工具来完成任务可能会更加有所帮助。
>
> 如果你遇到了困难，可以在我们的[讨论频道](/zh-CN/docs/MDN/Community/Communication_channels)寻求帮助。

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

<details>
<summary>Click here to show the solution</summary>

The below is a sample of how the end result could be achieved, using similar techniques to the lesson. However there are a number of ways that would be perfectly correct, perhaps slightly more verbose.

```css
table {
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  border-collapse: collapse;
}

th,
td {
  vertical-align: top;
  padding: 0.3em;
}

tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
}

tbody tr:nth-child(odd) {
  background-color: #eee;
}

tfoot {
  border-top: 1px solid #999;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

For the bonus question, you can make the table layout more predictable by adding {{cssxref("table-layout")}} with a value of [`fixed`](/zh-CN/docs/Web/CSS/table-layout#fixed) and an explicit `width`:

```css
table {
  table-layout: fixed;
  width: 100%;
}
```

</details>
