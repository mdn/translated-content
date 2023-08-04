---
title: HTML 表格基础
slug: Learn/HTML/Tables/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

本文将从 HTML 表格开始，介绍一些基本的内容，如行和单元格、标题、使单元格跨越多个列和行，以及如何将列中的所有单元组合在一起进行样式化。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前置知识：</th>
      <td>
        HTML 基本概念（参见<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 介绍</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解熟悉 HTML 表格基本知识。</td>
    </tr>
  </tbody>
</table>

## 什么是表格？

表格是由行和列组成的结构化数据集（表格数据），它让你快速简单地查找某个表示不同类型数据之间的某种关系的值。比如说，某个人和他的年龄，一天或是一周，当地游泳池的时间表。

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![A swimming timetable showing a sample data table](swimming-timetable.png)

表格在人类社会中很常见，而且已经存在很长时间了，下面这张 1800 年的美国人口普查文件中就可以证明：

![A very old parchment document; the data is not easily readable, but it clearly shows a data table being used.](1800-census.jpg)

因此，HTML 的创建者们提供了一种方法来构建和呈现 web 上的表格数据，这也就不足为奇了。

### 表格如何工作？

表格的一个特点就是严格。通过在行和列的标题之间进行视觉关联的方法，就可以让信息能够很简单地被解读出来。观察下面的示例表格，然后找一个单数人称代词，这个单数人称代词是用于第三人称的，用于女性的，用作句子中的对象。你可以把相应的行和列的标题关联起来，找到答案。

人称代词

<table>
  <tbody>
    <tr>
      <th colspan="3"></th>
      <th scope="col">Subject</th>
      <th scope="col">Object</th>
    </tr>
    <tr>
      <th rowspan="5" scope="rowgroup">单数</th>
      <th colspan="2" scope="row">第一人称</th>
      <td>I</td>
      <td>me</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">第二人称</th>
      <td>you</td>
      <td>you</td>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">第三人称</th>
      <th class="symbol" scope="row">♂</th>
      <td>he</td>
      <td>him</td>
    </tr>
    <tr>
      <th class="symbol" scope="row">♀</th>
      <td>she</td>
      <td>her</td>
    </tr>
    <tr>
      <th class="symbol" scope="row">o</th>
      <td>it</td>
      <td>it</td>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">复数</th>
      <th colspan="2" scope="row">第一人称</th>
      <td>we</td>
      <td>us</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">第二人称</th>
      <td>you</td>
      <td>you</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">第三人称</th>
      <td>they</td>
      <td>them</td>
    </tr>
  </tbody>
</table>

正确完成后，即使是盲人也可以解析 HTML 表格中的数据，一个成功的 HTML 表格应该做到无论用户是视力正常还是视力受损，都能提高用户的体验。

### 表格风格

你可以在 GitHub 上找到上面表格的 [HTML 源码](https://github.com/mdn/learning-area/blob/main/html/tables/basic/personal-pronouns.html)；先去看看，当然也可以[看看这个在线示例](http://mdn.github.io/learning-area/html/tables/basic/personal-pronouns.html)！你也许会注意到一件事情，那就是这个表格看上去可读性不是很好，那是因为现在这个页面上面的那个表格通过 MDN 站点添加了一些样式，而 GitHub 上面的并没有添加。

不要幻想；为了能够让表格在网页上有效，你需要提供一些 CSS 的样式信息，以及尽可能好的 HTML 固定结构。在这个模块中，我们将专注于 HTML 部分；在你完成这里的内容之后，你可以浏览 [样式化表格](/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables) 来了解 CSS 的部分。

虽然在这个模块中我们不会专注于 CSS，但是我们提供了一个较小的 CSS 样式表让你使用，和默认的没有采用任何 CSS 样式的表相比，表格会更加可读。你可以在[这里](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css)获取样式表，以及在 [HTML template](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) 获取 HTML 文件来应用样式表，这些会让你在“测试 HTML 表格”中有一个好的起点。

> **备注：** 也可以看下 [personal_pronouns table with this styling applied](http://mdn.github.io/learning-area/html/tables/basic/personal-pronouns-styled.html) 这个版本，这个是应用了 CSS 以后表格看上去的样子。

### 什么时候你不应该使用 HTML 表格？

HTML 表格应该用于表格数据，这正是 HTML 表格设计出来的用途。不幸的是，许多人习惯用 HTML 表格来实现网页布局，例如：一行包含头部，一行包含几列内容，一行包含尾部。你可以在我们的[无障碍学习模块](/zh-CN/docs/Learn/Accessibility)中的[页面布局](/zh-CN/docs/Learn/Accessibility/HTML#页面布局)章节获得更多细节内容和一个示例。这种做法以前是很常见的，因为以前 CSS 在不同浏览器上的兼容性比较糟糕；表格布局现在不太普遍，但您可能仍然会在网络的某些角落看到它们。

简单来说，使用表格布局而不使用 [CSS 布局技巧](/zh-CN/docs/Learn/CSS/CSS_layout) 是很糟糕的。主要的理由有以下几个：

1. **表格布局减少了视觉受损的用户的无障碍**: 盲人所使用的[屏幕阅读器](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#屏幕阅读器)会解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具，使用的标记比使用 CSS 布局技术更复杂，所以屏幕阅读器的输出会让他们的用户感到困惑。
2. **表格会产生很多标签**: 正如刚才提到的，表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试。
3. **表格不能自动响应**: 当你使用正确的布局容器（比如 {{htmlelement("header")}}、{{htmlelement("section")}}、{{htmlelement("article")}} 或是 {{htmlelement("div")}}）时，它们的默认宽度是父元素的 100%；而表格的的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。

## 动手练习：创建你的第一个表格

对于表格的理论知识，我们已经说了很多了，所以，让我们来看一个使用的例子，并建立一个简单的表格。

1. 首先，将 [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) 文件拷贝到你的本地环境上。
2. 每一个表格的内容都包含在这两个标签中：**[`<table></table>`](/zh-CN/docs/Web/HTML/Element/table)**。在你的 HTML 的 {{htmlelement("body")}} 中添加这些内容。
3. 在表格中，最小的内容容器是单元格，是通过 **[`<td>`](/zh-CN/docs/Web/HTML/Element/td)** 元素创建的（其中“td”代表“table data”）。把下面的内容添加到你的表格标签中：

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. 如果我们想要一行四个单元格，我们需要把这组标签拷贝三次，更新你表中的内容，让它看起来是这样的：

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

你会看到，单元格不会放置在彼此的下方，而是自动与同一行上的其他单元格对齐。每个 `<td>` 元素 创建一个单独单元格，它们共同组成了第一行。我们添加的每个单元格都使行的长度变长。

如果想让这一行停止增加，并让单元格从第二行开始，我们需要使用 **[`<tr>`](/zh-CN/docs/Web/HTML/Element/tr)** 元素（其中“tr”代表“table row”）。让我们现在来证实一下。

1. 把你已经创建好的 4 个单元格放入 `<tr>` 标签，就像这样：

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. 现在你已经实现了一行，可以继续增加至两行、三行。每一行都需要一个额外的 `<tr>` 元素来包装，每个单元格的内容都应该写在 `<td>`中。

### 结果

这样会产生一个如下所示的表：

```html hidden
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
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

> **备注：** 你也可以在 GitHub 中查看 [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## 使用 \<th> 元素添加标题

现在，让我们把注意力转向表格标题，表格中的标题是特殊的单元格，通常在行或列的开始处，定义行或列包含的数据类型（举个例子，看到本篇文章中第一个示例中的 "单数" 或者 "Object"）。为了说明它们为什么这么有用，来看下面这个例子，首先是源代码：

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

这是表格实际呈现的效果：

{{EmbedLiveSample("使用_th_元素添加标题", "", "250")}}

这里的问题是：虽然你可以弄清楚发生了什么，但是尽可能的交叉参考数据并不容易。如果列和行的标题以某种方式出现，那将会更好。

### 动手练习：表格标题

让我们来改进这个表格。

1. 首先，把 [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) 文件保存到你的本地环境，HTML 文件包含上文你看到的几种狗的数据。
2. 为了将表格的标题在视觉上和语义上都能被识别为标题，你可以使用 **[`<th>`](/zh-CN/docs/Web/HTML/Element/th)** 元素（其中 'th' 代表 'table header'），用法和 `<td>`是一样的，除了它表示为标题，不是普通的单元格以外。进入你的 HTML 文件，将表格中应该是标题的 `<td>` 元素标记的内容，都改为用 `<th>` 元素标记。
3. 保存你的 HTML 文件，然后在浏览器中加载，然后你应该会看到，现在的标题更像标题了。

> **备注：** 你可以在 GitHub 中找到完成的版本 [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html))。

### 为什么标题是有用的？

我们已经给出了部分答案，当标题明显突出的时候，你可以更加简单地找到你想找的数据，设计上也会看起来更好。

> **备注：** 即使你不给表格添加你自己的样式，表格标题也会带有一些默认样式：加粗和居中，让标题可以突出显示。

表格标题也有额外的好处，随着 `scope` 属性 (我们将在下一篇文章中了解到)，这个属性允许你让表格变得更加无障碍，每个标题与相同行或列中的所有数据相关联。屏幕阅读设备能一次读出一列或一行的数据，这是非常有帮助的。

## 允许单元格跨越多行和列

有时我们希望单元格跨越多行或多列。以下是一个简单的例子，显示了一些常见动物的名字。在某些情况下，我们要显示动物名称旁边的男性和女性的名字。有时候我们又不需要，那不需要的情况下，我们希望写着动物的名字的单元格的宽度可以是两个单元格的宽度 (因为写着名字的行会有两列，而没有写名字的行只有一列，行的宽度是不一样的)。

一开始的标记写法是这样的：

```html
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
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

我们需要一个方法，让 "Animals"、"Hippopotamus" 和 "Crocodile" 的单元格的宽度变为两个单元格， "Horse" 和 "Chicken" 的高度变为两行 (因为要拥有一个男性名字和女性名字，可以先看效果图)。幸好，表格中的标题和单元格有 `colspan` 和 `rowspan` 属性，这两个属性可以帮助我们实现这些效果。这两个属性接受一个没有单位的数字值，数字决定了它们的宽度或高度是几个单元格。比如，`colspan="2"` 使一个单元格的宽度是两个单元格。

让我们使用 `colspan` 和 `rowspan` 来改进现有的表格。

1. 首先，把 [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) 和 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) 文件复制到你的本地环境，HTML 文件中包含了你刚才看到的动物示例的数据。
2. 接着，使用 `colspan` 让 "Animals"、"Hippopotamus" 和 "Crocodile" 占 2 个单元格的宽度。
3. 最后，使用 `rowspan` 让 "Horse" 和 "Chicken" 占 2 个单元格的高度。
4. 保存后，用浏览器打开你写的 HTML 文件，看看改进的地方。

> **备注：** 你也可以在 GitHub 上找到完成的版本 [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([see it live also](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## 为表格中的列提供共同的样式

### 不对 \<col> 应用样式

在我们继续介绍之前，我们将介绍本文中的最后一个功能。HTML 有一种方法可以定义整列数据的样式信息：就是 **[`<col>`](/zh-CN/docs/Web/HTML/Element/col)** 和 **[`<colgroup>`](/zh-CN/docs/Web/HTML/Element/colgroup)** 元素。它们存在是因为如果你想让一列中的每个数据的样式都一样，那么你就要为每个数据都添加一个样式，这样的做法是令人厌烦和低效的。你通常需要在列中的每个 `<td>` 或 `<th>` 上定义样式，或者使用一个复杂的选择器，比如 {{cssxref(":nth-child()")}}。

下面是一个简单的示例：

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

下面就是上述代码的结果：

{{EmbedLiveSample("不对_col_应用样式", "", "200")}}

这样不太理想，因为我们不得不在列中的每个单元格中重复那些样式信息（在真实的项目中，我们或许会设置一个 `class` 包含那三个单元格，然后在一个单独的样式表中定义样式）。为了舍弃这种做法，我们可以只定义一次，在 `<col>` 元素中。`<col>` 元素被规定包含在 `<colgroup>` 容器中，而 `<colgroup>`就在 `<table>` 标签的下方。我们可以通过如下的做法来创建与上面相同的效果：

### 对 \<col> 应用样式

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

我们使用了两个 `<col>` 来定义“列的样式”，每一个 `<col>` 都会指定每列的样式，对于第一列，我们没有采取任何样式，但是我们仍然需要添加一个空的 `<col>` 元素，如果不这样做，那么我们的样式就会应用到第一列上，这和我们预想的不一样。

如果你想把这种样式信息应用到每一列，我们可以只使用一个 `<col>` 元素，不过需要包含 span 属性，像这样：

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

就像 `colspan` 和 `rowspan` 一样，`span` 需要一个无单位的数字值，用来指定让这个样式应用到表格中多少列。

### 动手练习：colgroup and col

又到了需要你自己独立完成的时间了。

下面你可以看到一位语言老师的时间表。星期五，她有一个新的课程，全天教荷兰语，但是在星期二和星期四的几个时间点，她也教德语。她想把那些包含她教学的日子的列高亮显示。

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}

通过下面这些步骤来重构这个表格。

1. 首先，把 [timetable.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable.html) 文件复制到你的本地环境。这个 HTML 文件包含你在上文中看到的表格，不过是减去样式信息的。
2. 在 table 的顶部添加一个 `<colgroup>` 元素，就放在 `<table>` 标签下面，`<colgroup>`可以添加 `<col>` 元素 (继续看下面剩余的步骤)。
3. 第一列和第二列不需要应用样式。
4. 为第三列添加一个背景颜色。`style` 属性是 `background-color:#97DB9A;`
5. 为第四列设置一个独立的宽度，`style` 属性是 `width: 42px;`
6. 为第五列添加一个背景颜色。`style` 属性是 `background-color: #97DB9A;`
7. 为第六列添加不同的背景颜色和边框，表示这是一个特殊的日子，表示她正在教一个新的课。 `style` 属性是 `background-color:#DCC48E; border:4px solid #C1437A;`
8. 最后两天是休息日，所以只需将它们设置为无背景颜色，但需要设置宽度；`style` 属性是 `width: 42px;`

看看你是否能完成这个示例，如果你遇到了困难，或想要核对你完成的作品，你可以在 GitHub 上找到完成的版本 [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) ([也可以查看在线示例](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html))。

## 小结

本章节仅仅包含了 HTML 表格的基础。在下一篇文章中，我们将介绍一些稍微更高级的表格功能，并开始考虑方便视力障碍的人士的访问。

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
