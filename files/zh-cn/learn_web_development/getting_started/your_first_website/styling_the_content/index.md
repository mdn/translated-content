---
title: CSS 基础
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS（层叠样式表）是为 web 内容添加样式的代码。*CSS 基础*将介绍 CSS 入门知识。我们会解答像这样的问题：怎样将文本设置为红色？怎样将内容显示在屏幕的特定位置？怎样用背景图片或颜色来装饰网页？

## 什么是 CSS？

和 HTML 类似，CSS 不是编程语言。它也不是标记语言，**而是一门样式表语言**。CSS 用于选择性地为 HTML 元素添加样式。例如，下列的 CSS 代码选择了所有的段落文本，并将它们设置为红色。

```css
p {
  color: red;
}
```

让我们来试一试！使用文本编辑器，在新文件中粘贴上面的三行 CSS 代码。在 `styles` 文件夹中将文件保存为 `style.css`。

为了使代码发挥作用，我们仍需要将上面的 CSS 应用到 HTML 文档中。否则，这些样式不会改变 HTML 的外观。（如果你没有完成前几节的实践，请复习[处理文件](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)和 [HTML 基础](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)。）

1. 打开 `index.html` 文件，在文档头部（也就是 {{HTMLElement("head")}} 和 `</head>` 标签之间）粘贴这行代码。

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. 保存 `index.html` 文件，并用浏览器打开。你应该看到类似的内容：

![一个 Mozilla 标志和一些段落，段落文字通过 css 设置为红色](website-screenshot-styled.png)

如果段落文本变红，那么祝贺你！CSS 样式已经生效了。

### CSS 规则集详解

让我们来剖析一下红色段落文字的 CSS 代码，了解它是如何工作的：

![CSS p 声明，其中 color 为 red](css-declaration-small.png)

整个结构称为**规则集**（*规则集*通常简称为*规则*），注意各个部分的名称：

- 选择器（Selector）
  - : HTML 元素名位于规则集的开头。它定义了需要添加样式的元素（本例中就是 {{HTMLElement("p")}} 元素）。要给不同的元素添加样式，只需要更改选择器。
- 声明（Declaration）
  - : 它是一条单独的规则（如 `color: red;`）。用来指定为元素的哪个**属性**添加样式。
- 属性（Properties）
  - : 它是为 HTML 元素添加样式的方式（本例中 `color` 就是 {{htmlelement("p")}} 元素的属性）。在 CSS 中，你可以选择要在规则中影响的属性。
- 属性值（Property value）
  - : 位于属性的右边，冒号后面即**属性值**。它从指定属性的可选值中选择一个值（例如，我们除了 `red` 之外还有很多属性值可以用于 `color`）。

注意其他重要的语法：

- 除了选择器部分，每个规则集都应该包含在成对的大括号里（`{}`）。
- 在每个声明里要用冒号（`:`）将属性与属性值分隔开。
- 在每个规则集里要用分号（`;`）将各个声明分隔开。

如果要在规则集中同时修改多个属性，只需要将它们用分号隔开，就像这样：

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### 选择多个元素

也可以选择多个元素并为它们添加单个规则集，多个选择器之间用逗号分隔。例如：

```css
p,
li,
h1 {
  color: red;
}
```

### 不同类型的选择器

选择器有许多不同的类型。上面只介绍了**元素选择器**，用来选择所有指定类型的元素。但是选择操作可以更加具体。下面是一些更常用的选择器类型：

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">选择器名称</th>
      <th scope="col">选择的内容</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>元素选择器（也称作标签或类型选择器）</td>
      <td>所有指定类型的 HTML 元素</td>
      <td><code>p</code><br />选择 <code>&#x3C;p></code></td>
    </tr>
    <tr>
      <td>ID 选择器</td>
      <td>
        具有特定 ID 的元素。单一 HTML 页面中，每个 ID 只对应一个元素，一个元素只对应一个 ID
      </td>
      <td>
        <code>#my-id</code><br />选择 <code>&#x3C;p id="my-id"></code> 或
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>类选择器</td>
      <td>
        具有特定类的元素。单一页面中，一个类可以有多个实例
      </td>
      <td>
        <code>.my-class</code><br />选择
        <code>&#x3C;p class="my-class"></code> 和
        <code>&#x3C;a class="my-class"></code>
      </td>
    </tr>
    <tr>
      <td>属性选择器</td>
      <td>拥有特定属性的元素</td>
      <td>
        <code>img[src]</code><br />选择
        <code>&#x3C;img src="myimage.png"></code> 但不是
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>伪类选择器</td>
      <td>
        特定状态下的特定元素（比如鼠标指针悬停在链接上时）
      </td>
      <td>
        <code>a:hover</code><br />选择仅在鼠标指针悬停在链接上时的 <code>&#x3C;a></code> 元素
      </td>
    </tr>
  </tbody>
</table>

选择器的种类远不止这些，更多信息请参阅 MDN 的[选择器指南](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)。

## 字体和文本

在探索了一些 CSS 基础后，让我们在 `style.css` 中添加更多的规则和信息，从而让示例更美观。

1. 第一步，找到之前在[你的网站会是什么样子？](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)中保存的 [Google Fonts 输出的地址](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#字体)。在 `index.html` 文档头部（{{HTMLElement("head")}} 和 `</head>` 之间的任意位置）添加 {{htmlelement("link")}} 元素。代码如下：

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   这段代码将你的页面链接到一个样式表，该样式表将 Open Sans 字体家族与你的网页一起加载。

2. 接下来，删除 `style.css` 文件中已有的规则。虽然测试是成功的，但是红字看起来并不太舒服。
3. 添加下列几行代码（如下文所示），用你在[你的网站会是什么样子？](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#字体)中选择的 `font-family` 替换 `font-family`。`font-family` 属性是指为文本设置的字体。这个规则为整个页面定义了全局的基础字体和基础字号。由于 {{HTMLElement("html")}} 是整个页面的父元素，它里面的所有元素都继承相同的 `font-size` 和 `font-family`。

   ```css
   html {
     font-size: 10px; /* px 表示“像素（pixel）”: 基础字号为 10 像素 */
     font-family:
       "Open Sans", sans-serif; /* 这应该是你从 Google Fonts 得到的其余输出。 */
   }
   ```

   > [!NOTE]
   > CSS 文档中所有位于 `/*` 和 `*/` 之间的内容都是 **CSS 注释**。浏览器在渲染代码时会忽略注释。CSS 注释是一种让你写下关于你的代码或逻辑的有用注解的方式。

4. 接下来为 HTML 主体内的元素（{{htmlelement("Heading_Elements", "h1")}}、{{htmlelement("li")}} 和 {{htmlelement("p")}}）设置字号。我们也将标题居中显示。最后，扩充下方的第二个规则集，为正文设置行高和字间距，从而提高页面的可读性。

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

可以随时调整这些 `px` 值来获得满意的结果，以下是大体效果：

![一个 Mozilla 标志和一些段落，设置了 sans-serif 字体，字号、行高和字间距已经调整，主页的标题已经居中](website-screenshot-font-small.png)

## CSS：一切皆盒子

编写 CSS 时你会发现，所有的一切都与盒子相关——设置尺寸、颜色、位置，等等。页面上大部分 HTML 元素都可以被看作若干堆叠的盒子。

![一大堆箱子堆在一起](boxes.jpg)

照片来自 [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) ，[Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/) 版权所有

CSS 布局主要是基于*盒子模型*。每个在页面上占用空间的盒子都有类似的属性：

- `padding`（内边距）：是指内容周围的空间。在下面的例子中，它是段落文本周围的空间。
- `border`（边框）：是紧接着内边距的实线。
- `margin`（外边距）：是围绕元素边框外侧的空间。

![有三个彼此包含的盒子。从外到内，它们被标记为 margin、border 和 padding](box-model.png)

这里还使用了：

- `width`：元素的宽度。
- `background-color`：元素内容和内边距底下的颜色。
- `color`：元素内容（通常是文本）的颜色。
- `text-shadow`：为元素内的文本设置阴影。
- `display`：设置元素的显示模式（继续阅读文章以了解更多细节）。

开始在页面中添加更多 CSS 吧！大胆将这些新规则都添加到 `style.css` 的底部，而不要纠结改变属性值会带来什么结果。

### 更改页面颜色

```css
html {
  background-color: #00539f;
}
```

这条规则为整个页面设置了背景颜色。将颜色代码修改为[在“我的网站将会是什么样子？”中所选择的颜色](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#主题颜色)。

### 文档体样式

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

这里有几条 {{htmlelement("body")}} 元素的声明，我们来逐条查看：

- `width: 600px;` 强制文档体永远保持 600 像素宽。
- `margin: 0 auto;` 当你在 `margin` 或 `padding` 这样的属性上设置两个值时，第一个值影响元素的*上下*方向（在这个例子中设置为 `0`）；第二个值影响*左右*方向。（这里，`auto` 是一个特殊的值，它将可用的水平空间平均分配给左边和右边）。如 [margin 语法](/zh-CN/docs/Web/CSS/Reference/Properties/margin#语法)中所记载的那样，你也可以使用一个、两个、三个或四个值。
- `background-color: #FF9500;` 如前文所述，指定元素的背景颜色。我们给 body 用了一种略微偏红的橘色以与深蓝色的 {{htmlelement("html")}} 元素形成反差，你也可以尝试其他颜色。
- `padding: 0 20px 20px 20px;` 我们给内边距设置了四个值，目的是给内容四周留出一点空间。这一次我们不设置 body 上方的内边距，设置右边、下方、左边的内边距为 20 像素。值以上、右、下、左的顺序排列。与 `margin` 一样，你也可以像 [padding 语法](/zh-CN/docs/Web/CSS/Reference/Properties/padding#语法)中所记载的那样，使用一个、两个、三个或四个值。
- `border: 5px solid black;` 这是为边框的宽度、样式和颜色设置的值。在本例中，是 body 四周的一个 5 像素宽的纯黑色边框。

### 定位页面主标题并添加样式

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

你可能已经注意到，在正文的顶部有一个难看的间隙。这是因为浏览器对 {{htmlelement("Heading_Elements", "h1")}} 元素（以及其他元素）应用了默认样式。这可能看起来是个坏主意，但其目的是为没有样式的页面提供基本的可读性。为了消除这种间隙，我们设置 `margin: 0;` 覆盖浏览器的默认样式。

接下来，我们将标题的上下内边距设置为 20 像素。

之后，我们将标题文本的背景颜色设置为和 HTML 的背景颜色一样的颜色。

最后，`text-shadow` 对元素的文本内容施加阴影。它的四个值是：

- 第一个像素值设置阴影与文本的**水平偏移量**：阴影水平方向移动的距离（译者注：向右为正值）。
- 第二个像素值设置阴影与文本的**垂直偏移量**：阴影垂直方向移动的距离（译者注：向下为正值）。
- 第三个像素值设置阴影的**模糊半径**。值越大产生的阴影越模糊。
- 第四个值设置阴影的基色。

试着用不同的值进行试验，看看它是如何改变外观的。

### 图像居中

```css
img {
  display: block;
  margin: 0 auto;
}
```

最后，我们把图像居中让页面更美观一些。可以复用 body 的 `margin: 0 auto`，但有一些差异，需要额外的设置来使 CSS 发挥作用。

{{htmlelement("body")}} 元素是**块级**元素，意味着它占据页面上的空间。页面上的其他元素会尊重为块级元素设置的外边距。而图片是**行级**元素，所以为了使图像有外边距，我们必须使用 `display: block` 给予其块级行为。

> [!NOTE]
> 上面的做法假定所选图片小于 body 的宽度（600 像素）。超过 600 像素的图片会溢出 body 并占据页面的其他位置。要解决这个问题，可以：1）使用[图片编辑器](https://zh.wikipedia.org/wiki/點陣圖圖像編輯器) 减小图片宽度；2）用 CSS 限制图片大小，将 `<img>` 元素 {{cssxref("width")}} 属性的值设置为小于 600 像素的值。

> [!NOTE]
> 如果你暂时不能理解 `display: block`、块级元素和行级元素之间的差别也没关系；随着你对 CSS 学习的深入，你将明白这个问题。在 [display 参考页面](/zh-CN/docs/Web/CSS/Reference/Properties/display)能找到更多有关不同的 display 值的信息。

## 总结

如果你一直跟着这篇文章里的指导做的话，你应该完成了一个像下面这样的页面：

![一个居中的 Mozilla 的标志，还有一个页眉和段落。现在它看起来很有风格，整个页面的背景是蓝色的，居中的主要内容条是橙色的背景](website-screenshot-final.png)

（你可以[在这里查看我们的版本](https://mdn.github.io/beginner-html-site-styled/)。）如果你遇到困难，你可以将 [Github 上的完整示例代码](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css)与你的文件进行比较。

在这里，我们只是介绍了 CSS 的表面。想学习更多，参见[学习使用 CSS 为 HTML 添加样式](/zh-CN/docs/Learn_web_development/Core/Styling_basics)。

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
