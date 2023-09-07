---
title: HTML 表格高级特性和无障碍
slug: Learn/HTML/Tables/Advanced
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

这个模块的第二篇文章中，我们来看一下 HTML 表格更高级的功能，比如表格的标题、摘要，以及将你表格中的各行分组成表头、表体、表尾三部分，以及为视力受损的用户提高表格的无障碍性。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        HTML 的基础知识（参见
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 简介</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习 HTML 表格进一步的功能，以及表格的无障碍访问性。</td>
    </tr>
  </tbody>
</table>

## 使用 \<caption> 为你的表格增加一个标题

你可以通过 {{htmlelement("caption")}} 元素为你的表格增加一个标题，再把 {{htmlelement("caption")}} 元素放入 {{htmlelement("table")}} 元素中。你应该把它放在 `<table>` 开始标签的下面。

```html
<table>
  <caption>
    侏罗纪时期的恐龙
  </caption>

  …
</table>
```

从上面简单的例子可以推断，标题意味着包含对于表格内容的描述，这对那些希望可以快速浏览网页中的表格对他们是否有帮助的读者们来说，是非常好的功能。特别是盲人用户，不需要让屏幕阅读设备读出很多单元格的内容，来让用户了解这张表格讲的是什么，而是可以依靠标题的内容，来决定是否需要了解更详细的内容。

标题就放在 `<table>` 标签的下面。

> **备注：** [`summary`](/zh-CN/docs/Web/HTML/Element/table#summary) 属性也可以在 `<table>` 元素中使用，用来提供一段描述，同样可以被屏幕阅读设备阅读。我们推荐使用 `<caption>` 元素来代替，因为 `summary` 已经废弃了，且不能被视力正常的用户阅读（它不会出现在页面上）。

### 动手练习：添加一个标题

我们来试试看吧，回顾一下我们在之前的文章中第一次遇到的例子。.

1. 打开你的语言老师的学校时间表，就是 [HTML 表格基础](/zh-CN/docs/Learn/HTML/Tables/Basics#动手练习：colgroup_and_col) 结尾中的例子，或者把 [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) 文件复制到本地。
2. 为表格添加一个合适的标题。
3. 保存你的代码，然后用浏览器打开，看看你的表格是什么样的。

> **备注：** 你也可以在 GitHub 上找到我们的版本 [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html)（[查看在线运行版本](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)）。

## 添加 \<thead>、\<tfoot> 和 \<tbody> 结构

由于你的表格在结构上有点复杂，如果把它们定义得更加结构化，那会帮助我们更能了解结构。一个明确的方法是使用 {{htmlelement("thead")}}、{{htmlelement("tfoot")}} 和 {{htmlelement("tbody")}}，这些元素允许你把表格中的部分标记为表头、表尾、表体三部分。

这些元素不会使表格更易于屏幕阅读器用户访问，也不会造成任何视觉上的改变。然而，它们在应用样式和布局上会起到作用，可以更好地让 CSS 应用到表格上。给你一些有趣的例子，在长表格的情况下，你可以在每个打印页面上使表格页眉和页脚重复，你也可以让表格的正文部分显示在一个单独的页面上，并通过上下滚动来获得内容。

试着使用它们：

- `<thead>` 元素必须包住表格中作为表头的部分。一般是第一行，往往都是每列的标题，但是不是每种情况都是这样的。如果你使用了 {{htmlelement("col")}}/{{htmlelement("colgroup")}} 元素，那么 `<thead>` 元素就需要放在它们的下面。
- `<tfoot>` 元素需要包住表格中作为表脚的部分。一般是最后一行，往往是对前面所有行的总结，比如，你可以按照预想的方式将`<tfoot>`放在表格的底部，或者就放在 `<thead>` 的下面。(浏览器仍将它呈现在表格的底部)
- `<tbody>` 元素需要包住表格内容中不在表头或表尾的其他部分。它可以出现在表头的下方，或者有时出现在表脚下方，这取决于你如何安排它。

> **备注：** `<tbody>` 总是包含在每个表中，如果你没有在代码中指定它，那就是隐式的。可以来验证一下，打开一个你之前没有包含 `<tbody>` 的例子，然后在你的[浏览器开发者工具](/zh-CN/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)中观察你的代码，你会看到浏览器为你添加了这个标签。你也许会想问，为什么你应该在所有表中都需要这个元素，因为它可以让你更好地控制表格结构和样式。

### 动手练习：添加表格结构

让我们动手使用这些新元素。

1. 首先，把 [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) 复制到你的本地环境。
2. 尝试在浏览器中打开它，你会发现看起来不错，但是它可以被改善得更好。“SUM”行包含了已经使用的金额的总和，不过它出现在了错误的位置，以及代码中还遗失了一些细节。
3. 将明显的标题行改为使用 `<thead>` 元素，“SUM”行使用 `<tfoot>` 元素，剩余的内容使用 `<tbody>` 元素。
4. 先保存，再刷新。你会看到，添加了 `<tfoot>` 元素后，“SUM”行跑到了表格的底部。
5. 接着，添加一个 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#colspan) 属性，使“SUM”单元格占 4 个单元格的位置，所以实际数字是显示在“Cost”列的底部。
6. 让我们为表格添加一些简单的额外属性，能够让你理解这些属性是如何帮助更好地让表格应用 CSS 的。在你的 HTML 文件的 head 标签部分，你会看到一个空的 {{htmlelement("style")}} 元素。在 style 元素中添加下列 CSS 代码：

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }
   tfoot {
     font-weight: bold;
   }
   ```

7. 先保存，再刷新，然后观察一下结果。如果没有 `<tbody>` 和 `<tfoot>` 元素，你也许会写更加复杂的选择器或规则来应用同样的样式。

> **备注：** 我们并不期望你现在就能完全理解 CSS。在你阅读我们的 CSS 模块时，你会学到更多这方面的知识（[CSS 介绍](/zh-CN/docs/Learn/CSS/First_steps)是一个好的起点；文章[样式化表格](/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)也专门讲述了如何对表格添加样式）。

你完成的表格应该如下所示：

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My spending record</title>
    <style>
      html {
        font-family: sans-serif;
      }

      table {
        border-collapse: collapse;
        border: 4px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
      }

      td,
      th {
        border: 2px solid rgb(190, 190, 190);
        padding: 10px 20px;
      }

      th {
        background-color: rgb(235, 235, 235);
      }

      td {
        text-align: center;
      }

      tr:nth-child(even) td {
        background-color: rgb(250, 250, 250);
      }

      tr:nth-child(odd) td {
        background-color: rgb(245, 245, 245);
      }

      caption {
        padding: 10px;
      }

      tbody {
        font-size: 90%;
        font-style: italic;
      }

      tfoot {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>
        How I chose to spend my money
      </caption>
      <thead>
        <tr>
          <th>Purchase</th>
          <th>Location</th>
          <th>Date</th>
          <th>Evaluation</th>
          <th>Cost (€)</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="4">SUM</td>
          <td>118</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Haircut</td>
          <td>Hairdresser</td>
          <td>12/09</td>
          <td>Great idea</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Lasagna</td>
          <td>Restaurant</td>
          <td>12/09</td>
          <td>Regrets</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Shoes</td>
          <td>Shoeshop</td>
          <td>13/09</td>
          <td>Big regrets</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Toothpaste</td>
          <td>Supermarket</td>
          <td>13/09</td>
          <td>Good</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

{{ EmbedLiveSample('动手练习：添加表格结构', '100%', 300) }}

> **备注：** 你也可以在 GitHub 上找到 [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html)（[查看在线运行版本](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)）。

## 嵌套表格

在一个表格中嵌套另外一个表格是可能的，只要你包含完整的结构，包括 `<table>` 元素。这样通常是不建议的，因为这种做法会使标记看上去很难理解，对使用屏幕阅读的用户来说，无障碍性也降低了。以及在很多情况下，也许你只需要插入额外的单元格、行、列到已有的表格中。然而有时候是必要的，比如你想要从其他资源中更简单地导入内容。

下面的代码演示了一个简单的嵌套表格：

```html
<table id="table1">
  <tr>
    <th>标题 1</th>
    <th>标题 2</th>
    <th>标题 3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>单元格 1</td>
          <td>单元格 2</td>
          <td>单元格 3</td>
        </tr>
      </table>
    </td>
    <td>单元格 2</td>
    <td>单元格 3</td>
  </tr>
  <tr>
    <td>单元格 4</td>
    <td>单元格 5</td>
    <td>单元格 6</td>
  </tr>
</table>
```

输出看起来是这样的：

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

{{EmbedLiveSample("嵌套表格")}}

## 对于视力受损的用户的表格

让我们简要回顾一下如何使用数据表。一个表格可以是一个便利的工具，或者让我们快速访问数据，并允许我们查找不同的值。比如，你只需要稍微看一眼下列的表格，你就能得知 2016 年 8 月份在 Gent 出售了多少个戒指。为了理解信息，我们让数据与列标题或行标题之间建立视觉联系。

<table>
  <caption>
    2016 年 8 月出售的物品
  </caption>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <th colspan="3" scope="colgroup">衣物</th>
      <th colspan="2" scope="colgroup">饰品</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <th scope="col">长裤</th>
      <th scope="col">衬衫</th>
      <th scope="col">裙子</th>
      <th scope="col">手镯</th>
      <th scope="col">戒指</th>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">比利时</th>
      <th scope="row">Antwerp</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussels</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">荷兰</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

但假设你无法通过视觉关联这些数据呢？那么你应该如何阅读上述的表格？视力受损的用户经常使用一个屏幕阅读设备来为他们读出网页上的信息。对于盲人来说，阅读简单的文字没有什么问题，但是要理解一张表格的内容，这就有一些难度了。然而，通过适当的标记，我们可以用程序化的关联来取代视觉关联。

> **备注：** 根据[世界卫生组织 2017 年的数据](http://www.who.int/zh/news-room/fact-sheets/detail/blindness-and-visual-impairment)，大约有 2.53 亿人患有视觉障碍。

本篇文章提供了更一步的技术来使表格的无障碍性尽可能地提高。

### 使用列和行的标题

屏幕阅读设备会识别所有的标题，然后在它们和它们所关联的单元格之间产生程序关联。列和行标题的组合将标识和解释每个单元格中的数据，以便屏幕阅读器用户可以类似于视力正常的用户的操作来理解表格。

我们之前的文章就提到过这一点，可见[使用 \<th> 元素添加标题](/zh-CN/docs/Learn/HTML/Tables/Basics#使用_th_元素添加标题)。

### scope 属性

本篇文章的一个新话题是 [`scope`](/zh-CN/docs/Web/HTML/Element/th#scope) 属性，可以添加在 `<th>` 元素中，以告诉屏幕阅读器该表头的类型——它是所在行的表头，还是所在列的表头。回想一下我们前面的消费记录例子，你可以像这样明确地把表头定义为所在列的头部：

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

而每一行都可以有一个像这样定义的标题（如果我们把行的标题和列的标题都加上）：

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

屏幕阅读器会识别这种结构化的标记，并一次读出整列或整行。

`scope` 还有两个可选的值： `colgroup` 和 `rowgroup`。这些用于位于多个列或行的顶部的标题。如果你回顾这部分文章开始部分的“2016 年 8 月出售的物品”表格，你会看到“衣物”单元格在“长裤”、“衬衫”和“裙子”单元格的上面。这几个单元格都应该被标记为表头（`<th>`），但是“衣物”是一个位于顶部且定义了其他三个子标题的表头。因此“衣物”应该有一个 `scope="colgroup"` 属性，而另外三个子标题应该有 `scope="col"` 属性。

### id 和标题属性

如果要替代 `scope` 属性，可以使用 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 和 [`headers`](/zh-CN/docs/Web/HTML/Element/td#headers) 属性来创建标题与单元格之间的联系。使用方法如下：

1. 为每个 `<th>` 元素添加一个唯一的 `id` 。
2. 为每个 `<td>` 元素添加一个 `headers` 属性。每个单元格的 `headers` 属性需要包含它从属于的所有标题的 id，之间用空格分隔开。

这会给你的 HTML 表格中每个单元格的位置一个明确的定义。像一个电子表格一样，通过 headers 属性来定义属于哪些行或列。为了让它工作良好，表格同时需要列和行标题。

回到我们的花费成本示例，前两个片段可以重写为：

```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Haircut</th>
    <td headers="location haircut">Hairdresser</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Great idea</td>
    <td headers="cost haircut">30</td>
  </tr>

  …
</tbody>
```

> **备注：** 这种方法在标题和数据单元格之间建立了非常精确的关联，但是它使用了**非常多**的标记，而且没有留下任何错误的空间。对于大多数表格来说，`scope` 方法通常就足够了。

### 动手练习：使用 scope 和 headers

1. 对于这个最后的练习，首先把 [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) 复制到你的本地环境。
2. 现在尝试添加适当的 `scope` 属性来让表格变得更加恰当。
3. 最后，尝试把未添加 `scope` 属性的源文件再复制一份。这次使用 `id` 和 `headers` 属性让表格变得更加恰当。

> **备注：** 你可以根据我们完成的例子检查你的工作，请看 [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([also see this live](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) 和 [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html)（[查看在线运行版本](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)）。

## 总结

关于 HTML 表格你还可以学习其他一些东西，但是我们目前已经把大部分你需要知道的内容都告诉你了。接下来，你可以在 [HTML 表格测评](/zh-CN/docs/Learn/HTML/Tables/Structuring_planet_data)中测试自己的水平了，祝你玩得开心！

如果你已经在学习 CSS，并且在评估中表现良好，你就可以继续学习 HTML 表格的样式，参见[样式化表格](/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)。

如果你想要入门 CSS，请前往 [CSS 学习区](/zh-CN/docs/Learn/CSS)！

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
