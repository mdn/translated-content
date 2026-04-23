---
title: HTML 表格基础
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

本文将从 HTML 表格开始，介绍一些基本的内容，如行和单元格、标题、使单元格跨越多个列和行，以及如何将列中的所有单元组合在一起进行样式化。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        HTML 基本概念（参见
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML 介绍</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解熟悉 HTML 表格基本知识。</td>
    </tr>
  </tbody>
</table>

## 什么是表格？

表格是由行和列（**表格数据**）组成的结构化数据集，它让你快速简单地查找某个表示不同类型数据之间的某种关系的值。比如说，某个人和他的年龄，一天或是一周，当地游泳池的时间表。

![示例表格显示了一些人的姓名和年龄：Chris 38 岁、Dennis 45 岁、Sarah 29 岁、Karen 47 岁。](numbers-table.png)

![显示了游泳时间表的示例数据表格](swimming-timetable.png)

表格在人类社会中很常见，而且已经存在很长时间了，下面这张 1800 年的美国人口普查文件中就可以证明：

![一份非常古老的羊皮纸文件；上面的数据不易读，但它清楚地显示了正在使用的数据表。](1800-census.jpg)

因此，HTML 的创建者们提供了一种方法来构建和呈现 web 上的表格数据，这也就不足为奇了。

### 表格如何工作？

表格的一个特点就是固定不变。通过在行标题和列标题之间建立视觉关联，信息可以容易地被解读。例如，请看下表，找到一个拥有 62 颗卫星的类木气态巨行星。可以通过关联相关行标题和列标题找到答案。

```html hidden
<table>
  <caption>
    关于太阳系行星的数据（来源：<a
      href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >NASA 的行星概况表 - 公制单位</a
    >）
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">名称</th>
      <th scope="col">质量（10<sup>24</sup>kg）</th>
      <th scope="col">直径（km）</th>
      <th scope="col">密度（kg/m<sup>3</sup>）</th>
      <th scope="col">重力（m/s<sup>2</sup>）</th>
      <th scope="col">昼夜长度（小时）</th>
      <th scope="col">与太阳的距离（10<sup>6</sup>km）</th>
      <th scope="col">平均温度（°C）</th>
      <th scope="col">卫星数量</th>
      <th scope="col">备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">类地行星</th>
      <th scope="row">水星</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>最靠近太阳</td>
    </tr>
    <tr>
      <th scope="row">金星</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">地球</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>我们的世界</td>
    </tr>
    <tr>
      <th scope="row">火星</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>红色行星</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">类木行星</th>
      <th rowspan="2" scope="rowgroup">气态巨行星</th>
      <th scope="row">木星</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>最大的行星</td>
    </tr>
    <tr>
      <th scope="row">土星</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">冰巨行星</th>
      <th scope="row">天王星</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">海王星</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">矮行星</th>
      <th scope="row">冥王星</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        于 2006 年从行星除名，但这<a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >仍然存在争议</a
        >
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("表格如何工作？", 100, 560)}}

正确使用时，HTML 表格可以很好地通过屏幕阅读器等辅助工具进行处理，因此一个成功的 HTML 表格应该能为视力正常和视力受损的用户带来更好的体验。

### 表格风格

可以在 GitHub 上[查看这个在线示例](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)！你会注意到，这里的表格看起来可读性更好，这是因为你在本页上面看到的表格只使用了最少的样式，而 GitHub 版本则使用了更多的 CSS。

不要幻想；为了能够让表格在 web 上有效，你需要用 CSS 提供一些样式信息，以及尽可能好的 HTML 固定结构。在本模块中，我们将专注于 HTML 部分；在你完成这里的内容之后，你可以浏览[样式化表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)来了解 CSS 的部分。

虽然在本模块中我们不会专注于 CSS，但是我们提供了一个较小的 CSS 样式表让你使用，和默认的没有采用任何 CSS 样式的表相比，表格会更加可读。你可以在[这里](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)获取样式表，还可以找到一个应用样式表的 [HTML 模板](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html)，它们将为你提供一个尝试使用 HTML 表格的良好起点。

### 什么时候你不应该使用 HTML 表格？

HTML 表格应该用于表格数据，这正是 HTML 表格设计出来的用途。不幸的是，许多人习惯用 HTML 表格来实现网页布局，例如：一行包含头部，一行包含几列内容，一行包含尾部。你可以在我们的[无障碍学习模块](/zh-CN/docs/Learn_web_development/Core/Accessibility)中的[页面布局](/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#页面布局)章节获得更多细节内容和一个示例。这种做法以前是很常见的，因为以前 CSS 在不同浏览器上的兼容性比较糟糕；表格布局现在不太普遍，但你可能仍然会在网络的某些角落看到它们。

简单来说，使用表格布局而不使用 [CSS 布局技巧](/zh-CN/docs/Learn_web_development/Core/CSS_layout)是很糟糕的。主要的理由有以下几个：

1. **表格布局减少了视觉受损的用户的无障碍**: 盲人所使用的[屏幕阅读器](/zh-CN/docs/Learn_web_development/Core/Accessibility/Tooling#屏幕阅读器)会解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具，使用的标记比使用 CSS 布局技术更复杂，所以屏幕阅读器的输出会让他们的用户感到困惑。
2. **表格会产生很多标签**: 正如刚才提到的，表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试。
3. **表格不能自动响应**: 当你使用正确的布局容器（比如 {{htmlelement("header")}}、{{htmlelement("section")}}、{{htmlelement("article")}} 或是 {{htmlelement("div")}}）时，它们的默认宽度是父元素的 100%；而表格的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。

## 动手练习：创建你的第一个表格

对于表格的理论知识，我们已经说了很多了，所以，让我们来看一个使用的例子，并建立一个简单的表格。

1. 首先，将 [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) 文件拷贝到你的本地环境上。
2. 每一个表格的内容都包含在这两个标签中：**[`<table></table>`](/zh-CN/docs/Web/HTML/Reference/Elements/table)**。在你的 HTML 的 {{htmlelement("body")}} 中添加这些内容。
3. 在表格中，最小的内容容器是单元格，是通过 **[`<td>`](/zh-CN/docs/Web/HTML/Reference/Elements/td)** 元素创建的（其中“td”代表“table data”）。把下面的内容添加到你的表格标签中：

   ```html
   <td>我是第一个单元格</td>
   ```

4. 如果我们想要一行四个单元格，我们需要把这组标签拷贝三次，更新你表中的内容，让它看起来是这样的：

   ```html
   <td>我是第一个单元格</td>
   <td>我是第二个单元格</td>
   <td>我是第三个单元格</td>
   <td>我是第四个单元格</td>
   ```

你会看到，单元格不会放置在彼此的下方，而是自动与同一行上的其他单元格对齐。每个 `<td>` 元素 创建一个单独单元格，它们共同组成了第一行。我们添加的每个单元格都使行的长度变长。

如果想让这一行停止增加，并让单元格从第二行开始，我们需要使用 **[`<tr>`](/zh-CN/docs/Web/HTML/Reference/Elements/tr)** 元素（其中“tr”代表“table row”）。让我们现在来证实一下。

1. 把你已经创建好的 4 个单元格放入 `<tr>` 标签，就像这样：

   ```html
   <tr>
     <td>我是第一个单元格</td>
     <td>我是第二个单元格</td>
     <td>我是第三个单元格</td>
     <td>我是第四个单元格</td>
   </tr>
   ```

2. 现在你已经实现了一行，可以继续增加至两行、三行。每一行都需要一个额外的 `<tr>` 元素来包装，每个单元格的内容都应该写在 `<td>` 中。

### 结果

这样会产生一个如下所示的表：

```html hidden
<table>
  <tr>
    <td>我是第一个单元格</td>
    <td>我是第二个单元格</td>
    <td>我是第三个单元格</td>
    <td>我是第四个单元格</td>
  </tr>

  <tr>
    <td>第二行，第一个单元格</td>
    <td>单元格 2</td>
    <td>单元格 3</td>
    <td>单元格 4</td>
  </tr>
</table>
```

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

{{EmbedLiveSample("结果")}}

> [!NOTE]
> 你也可以在 GitHub 中查看 [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)）。

## 使用 \<th> 元素添加标题

现在，让我们把注意力转向表格标题，位于行或列开头的特殊单元格，定义了行或列包含的数据类型（例如，本文第一个示例中的“人员”和“年龄”单元格）。为了说明它们为什么这么有用，来看下面这个例子，首先是源代码：

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>诺基</td>
    <td>弗洛尔</td>
    <td>艾拉</td>
    <td>胡安</td>
  </tr>
  <tr>
    <td>品种</td>
    <td>杰克罗斯犬</td>
    <td>贵宾犬</td>
    <td>流浪犬</td>
    <td>可卡犬</td>
  </tr>
  <tr>
    <td>年龄</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>主人</td>
    <td>岳母</td>
    <td>我</td>
    <td>我</td>
    <td>嫂子</td>
  </tr>
  <tr>
    <td>饮食习惯</td>
    <td>吃掉所有人的剩菜</td>
    <td>啃咬食物</td>
    <td>吃得多</td>
    <td>吃到爆炸为止</td>
  </tr>
</table>
```

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

这是表格实际呈现的效果：

{{EmbedLiveSample("使用_th_元素添加标题", "", "250")}}

这里的问题是：虽然你可以弄清楚发生了什么，但是尽可能的交叉参考数据并不容易。如果列和行的标题以某种方式出现，那将会更好。

### 动手练习：表格标题

让我们来改进这个表格。

1. 首先，把 [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) 文件保存到你的本地环境，HTML 文件包含上文你看到的几种狗的数据。
2. 为了将表格的标题在视觉上和语义上都能被识别为标题，你可以使用 **[`<th>`](/zh-CN/docs/Web/HTML/Reference/Elements/th)** 元素（其中“th”代表“table header”），用法和 `<td>`是一样的，除了它表示为标题，不是普通的单元格以外。进入你的 HTML 文件，将表格中应该是标题的 `<td>` 元素标记的内容，都改为用 `<th>` 元素标记。
3. 保存你的 HTML 文件，然后在浏览器中加载，然后你应该会看到，现在的标题更像标题了。

> [!NOTE]
> 你可以在 GitHub 中找到完成的版本 [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)）。

### 为什么标题是有用的？

我们已经给出了部分答案，当标题明显突出的时候，你可以更加简单地找到你想找的数据，设计上也会看起来更好。

> [!NOTE]
> 即使你不给表格添加你自己的样式，表格标题也会带有一些默认样式：加粗和居中，让标题可以突出显示。

表格标题也有额外的好处，随着 `scope` 属性（我们将在下一篇文章中了解到），这个属性允许你让表格变得更加无障碍，每个标题与相同行或列中的所有数据相关联。屏幕阅读设备能一次读出一列或一行的数据，这是非常有帮助的。

## 允许单元格跨越多行和列

有时候希望单元格跨越多行或多列。下面是一个显示常见动物名字的简单示例。在某些情况下，希望在动物名称旁边显示雄性和雌性的名称。有时候又不需要，这种情况下，只希望动物名称横跨整个表格。

一开始的标记写法是这样的：

```html
<table>
  <tr>
    <th>动物</th>
  </tr>
  <tr>
    <th>河马</th>
  </tr>
  <tr>
    <th>马</th>
    <td>公马</td>
  </tr>
  <tr>
    <td>母马</td>
  </tr>
  <tr>
    <th>鳄鱼</th>
  </tr>
  <tr>
    <th>鸡</th>
    <td>母鸡</td>
  </tr>
  <tr>
    <td>公鸡</td>
  </tr>
</table>
```

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

但是输出的结果不是我们想要的：

{{EmbedLiveSample("允许单元格跨越多行和列", "", "350")}}

需要一个方法，让“动物”、“河马”和“鳄鱼”横跨两列，让“马”和“鸡”竖跨两行。幸好，表格中的标题和单元格有 `colspan` 和 `rowspan` 属性，可以实现这些效果。这两个属性接受一个没有单位的数字值，数字决定了它们的宽度或高度是几个单元格。比如，`colspan="2"` 会使单元格横跨两列。

让我们使用 `colspan` 和 `rowspan` 来改进现有的表格。

1. 首先，把 [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) 文件复制到你的本地环境，HTML 文件中包含了你刚才看到的动物示例的数据。
2. 接着，使用 `colspan` 让“动物”、“河马”和“鳄鱼”横跨两列。
3. 最后，使用 `rowspan` 让“马”和“鸡”竖跨两行。
4. 保存后，用浏览器打开你写的 HTML 文件，看看改进的地方。

> [!NOTE]
> 你也可以在 GitHub 上找到完成的版本 [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)）。

## 为表格中的列提供共同的样式

### 不使用 \<col> 应用样式

在继续阅读之前，我们将在本文介绍最后一个特性。HTML 有一种为整列数据的定义样式信息的方法：就是 **[`<col>`](/zh-CN/docs/Web/HTML/Reference/Elements/col)** 和 **[`<colgroup>`](/zh-CN/docs/Web/HTML/Reference/Elements/colgroup)** 元素。它们存在是因为如果你想让一列中的每个数据的样式都一样，那么你就要为每个数据都添加一个样式，这样的做法是令人厌烦和低效的。你通常需要在列中的每个 `<td>` 或 `<th>` 上定义样式，或者使用一个复杂的选择器，比如 {{cssxref(":nth-child()")}}。

> [!NOTE]
> 这样设计列的样式[仅限于几个属性](https://www.w3.org/TR/CSS22/tables.html#columns)：[`border`](/zh-CN/docs/Web/CSS/Reference/Properties/border)、[`background`](/zh-CN/docs/Web/CSS/Reference/Properties/background)、[`width`](/zh-CN/docs/Web/CSS/Reference/Properties/width) 和 [`visibility`](/zh-CN/docs/Web/CSS/Reference/Properties/visibility)。要设置其他属性，必须对列中的每个 `<td>` 或 `<th>` 进行样式设置，或者使用复杂的选择器，如 {{cssxref(":nth-child")}}。

下面是一个简单的示例：

```html
<table>
  <tr>
    <th>数据 1</th>
    <th style="background-color: yellow">数据 2</th>
  </tr>
  <tr>
    <td>加尔各答</td>
    <td style="background-color: yellow">橙汁</td>
  </tr>
  <tr>
    <td>机器人</td>
    <td style="background-color: yellow">爵士乐</td>
  </tr>
</table>
```

下面就是上述代码的结果：

{{EmbedLiveSample("不使用_col_应用样式", "", "200")}}

这并不理想，因为必须在列中的所有三个单元格中重复样式信息（在实际项目中，可能会在所有单元格中设置一个 `class`，并在单独的样式表中指定样式）。

### 使用 \<col> 应用样式

可以在 `<col>` 元素上一次性指定信息，而不是像上面这样做。`<colgroup>` 容器就在开始标记 `<table>` 下面，`<col>` 元素在 `<colgroup>` 容器内指定。可以通过如下方式指定表格，来创建与上述相同的效果：

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>数据 1</th>
    <th>数据 2</th>
  </tr>
  <tr>
    <td>加尔各答</td>
    <td>橙汁</td>
  </tr>
  <tr>
    <td>机器人</td>
    <td>爵士乐</td>
  </tr>
</table>
```

定义了两个“样式列”，其中一个为第二列每列指定样式信息。没有为第一列设计样式，但仍必须包含一个空白的 `<col>` 元素，否则样式将只应用于第一列。

如果想将样式信息应用于两列，只需包含一个带有 `span` 属性的 `<col>` 元素即可，就像这样：

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

就像 `colspan` 和 `rowspan` 一样，`span` 需要一个无单位的数字值，用来指定让这个样式应用到表格中多少列。

> [!NOTE]
> 如果表格、列和列中的单元格都是单独样式化的，那么应用于单元格的样式将绘制在列样式之上，而列样式将绘制在表格之上。这是因为先渲染表格层，然后渲染列层，[单元格层渲染在所有其他表格层之上](/zh-CN/docs/Web/HTML/Reference/Elements/table#table_layers_and_transparency)。

### 动手练习：colgroup 和 col

又到了需要你自己独立完成的时间了。

下面是一位语言教师的课程表。星期五，她有一门新的课程，全天教授荷兰语，但她也在周二和周四教授几节德语课。她希望突出显示包含她授课天数的栏目。

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 350)}}

通过下面这些步骤来重构这个表格。

1. 首先，把 [timetable.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable.html) 文件复制到你的本地环境。这个 HTML 文件包含你在上文中看到的表格，不过是减去样式信息的。
2. 在表格的顶部添加一个 `<colgroup>` 元素，就放在 `<table>` 标签下面，`<colgroup>`可以添加 `<col>` 元素（继续看下面剩余的步骤）。
3. 第一列和第二列不需要应用样式。
4. 为第三列添加一个背景颜色。`style` 属性是 `background-color:#97DB9A;`
5. 为第四列设置一个独立的宽度，`style` 属性是 `width: 100px;`
6. 为第五列添加一个背景颜色。`style` 属性是 `background-color: #97DB9A;`
7. 为第六列添加不同的背景颜色和边框，表示这是一个特殊的日子，她要教一门新课。`style` 属性是 `background-color:#DCC48E; border:4px solid #C1437A;`
8. 最后两天是休息日，所以只需将它们设置为无背景颜色，但需要设置宽度；`style` 属性是 `width: 100px;`

看看你是否能完成这个示例，如果你遇到了困难，或想要核对你完成的作品，你可以在 GitHub 上找到完成的版本 [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html)（[也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html)）。

## 总结

本章节仅仅包含了 HTML 表格的基础。在下一篇文章中，我们将介绍一些[表格进阶特性](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)，并开始考虑方便视力障碍的人士的访问。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
