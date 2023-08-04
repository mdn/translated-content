---
title: 图像、媒体和表单元素
slug: Learn/CSS/Building_blocks/Images_media_form_elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

在这节课里，我们来看一下，CSS 是如何处理某些特殊元素的。图像、其他媒体和表格元素的表现和普通的盒子有些不同，这取决于你使用 CSS 格式化它们的能力。理解什么可能做到，什么不可能做到能够省些力气，本节课将会聚焦于一些你需要知道的主要的事情上。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        计算机基础知识、<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装基础软件</a
        >、<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基本知识、HTML 基础（学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 介绍</a
        >）和对 CSS 工作原理的大致理解（学习
        <a href="/zh-CN/docs/Learn/CSS/First_steps">CSS 第一步</a>）
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>理解某些元素经 CSS 样式化后的非常规表现。</td>
    </tr>
  </tbody>
</table>

## 替换元素

图像和视频被描述为**[替换元素](/zh-CN/docs/Web/CSS/Replaced_element)**。这意味着 CSS 不能影响它们的内部布局——而仅影响它们在页面上相对于其他元素的位置。但是，正如我们将看到的，CSS 可以对图像执行多种操作。

某些替换元素（例如图像和视频）也具有**宽高比**。这意味着它在水平（x）和垂直（y）方向上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。

## 调整图像大小

正如你从之前的几节课中所学到的那样，CSS 中万物皆盒。如果你把一张图片放在一个盒子里，而这张图片的原始长和宽比盒子的小或大，那么这张图要么缩在盒子里，要么就从盒子里面溢出。你需要决定如何处理这样的溢出。

下面的示例中有两个盒子，长宽均为 200 像素：

- 一个包含了一张小于 200 像素的图像，它比盒子小，并且不会自动拉伸来充满盒子。
- 另一张图像大于 200 像素，溢出了盒子。

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

那么该如何处理溢出问题呢？

正如我们在[之前的课程](/zh-CN/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) 所学的那样，一个常用的方法是将一张图片的 {{cssxref("max-width")}} 设为 100%。这将会使图片的尺寸小于等于盒子。这个技术也会对其他替换元素（例如 [`<video>`](/zh-CN/docs/Web/HTML/Element/video)，或者 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe) 起作用。

**尝试向上面的示例中的 `<img>` 元素加入 `max-width: 100%`，你会看到，左边那张小的图像没有变化，而大的图像变小了，恰好装在了盒子里。**

你可以选择对容器内的图像作其他方式的处理。例如，你可能想把一张图像调整到能够完全盖住一个盒子的大小。

{{cssxref("object-fit")}} 属性可以在这里帮助你。当使用 `object-fit` 时，替换元素可以以多种方式被调整到合乎盒子的大小。

下面的示例中我们使用了值 `cover` 来缩小图像，同时维持了图像的原始比例。这样图像就可以充满盒子。但由于比例保持不变，图像多余的一部分将会被盒子裁切掉。

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

如果我们使用值 `contain`，图像就会被缩放到足以完整地放到盒子里面的大小。如果它和盒子的比例不同，将会出现“开天窗”的结果。

你可能也想试试 `fill` 值，它可以让图像充满盒子，但是不会维持比例。

## 布局中的替换元素

在对替换元素使用各种 CSS 布局时，你可能会发现他们的表现方式与其他元素有一些细节上的差异。例如，flex 或者 grid 布局中，默认情况下元素会被拉伸到充满整块区域。但是图像不会被拉伸，而会对齐到网格区域或者弹性容器的起始处。

你可以在下面的示例中看到这一现象。该示例有一个两列两行的网格容器，里面有四个物件。所有的 `<div>` 元素有自己的背景色，被拉伸到充满了行和列。但是，图像并没有被拉伸。

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

如果你是按序阅读这些课程的，那么你可能还没有看到布局的部分。不过没关系，只要记住替换元素在成为网格或者弹性布局的一部分时，有不同的默认行为就好了。这一默认行为很有必要，因为它避免了替换元素被布局拉伸成奇怪的样子。

为了强制图像拉伸，以充满其所在的网格单元，你必须做类似于下面的事情：

```css
img {
  width: 100%;
  height: 100%;
}
```

这将会无条件地拉伸图像，所以很可能不会是你想要的。

## form 元素

用 CSS 格式化表单元素是一个需要技巧的工作，[HTML 表单指南](/zh-CN/docs/Learn/HTML/Forms)包含了详细的格式化表单元素的指导，我不会在这里复述。本节需要介绍的是一些值得关注的关键基础内容。

很多表单控件是通过 [`<input>`](/zh-CN/docs/Web/HTML/Element/input) 元素添加到网页上的。该元素定义了简单的表单区域，例如文字输入。更进一步还有 HTML5 新加入的更加复杂的区域，例如颜色和日期撷取器。另外还有一些其他元素，例如用于多行文本输入的 [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea)，以及那些用来包含和标记表单特定部分的元素，例如 [`<fieldset>`](/zh-CN/docs/Web/HTML/Element/fieldset) 和 [`<legend>`](/zh-CN/docs/Web/HTML/Element/legend) 。

HTML5 还包含了允许 Web 开发者指定必填区域的特性，甚至还能检验填入内容的类型。如果用户输入了一些不符合要求的内容，或者未填写必填区域，浏览器会显示错误提示。不同的浏览器在给此类元素样式化和自定义方面不尽相同。

### 样式化文本输入元素

允许文本输入的元素有很多，例如 `<input type="text">`，及其指定特定类型的元素，如 `<input type="email">` 以及 `<textarea>` 元素，这些都是相当容易样式化的，它们和页面上其他盒子的表现相同。只不过在不同的操作系统和浏览器上访问时这些元素默认的样式化方式可能不同。

在下面的示例中，我们已经将一些文本输入元素用 CSS 样式化了。可以看到，边框、内外边距之类的东西都如期生效了。现在，我们使用属性选择器来指向不同的输入类型，尝试通过改变边框、添加输入区域背景色、改变字体和内边距的方式来改变表单的外观。

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> **警告：** 你应该谨慎改变表单样式，确保用户仍然能轻松辨认表单元素。原则上，你可以创建一个没有边框和背景的，几乎无法与周围的内容区分开来的输入表单，但这会使辨认和填写变得非常困难。

正如在本教程的 HTML 部分的[样式化表单](/zh-CN/docs/Learn/HTML/Forms/Styling_HTML_forms)里解释的那样，许多更加复杂的输入类型是由操作系统渲染的，无法进行样式化。因而你应该总是留意到表单在不同的用户看来差异很大，并在许多浏览器上测试复杂的表单。

### 继承和表单元素

在一些浏览器中，表单元素默认不会继承字体样式，因此如果你想要确保你的表单填入区域使用 body 中或者一个父元素中定义的字体，你需要向你的 CSS 中加入这条规则。

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### form 元素与 box-sizing

跨浏览器的 form 元素对于不同的挂件使用不同的盒子约束规则。你已经在我们的[盒模型课](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)中学习了 `box-sizing` 属性，在样式化表单时候，你可以使用这一知识，确保在给 form 元素设定宽度和高度时可以有统一的体验。

为了保证统一，最好将所有元素的内外边距都设为 `0`，然后在单独进行样式化控制的时候将这些加回来。

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### 其他有用的设置

除了上面提到的规则以外，你也应该在 `<textarea>` 上设置 `overflow: auto` 以避免 IE 在不需要滚动条的时候显示滚动条：

```css
textarea {
  overflow: auto;
}
```

### 将一切都放在一起“重置”

作为最后一步，我们可以将上面讨论过的各式属性包起来，成为以下的“表单重置”，以提供一个统一的在其上继续进行工作的地基，这包含了前三节提到的所有东西：

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> **备注：** 通用样式表被许多开发者用作所有项目的一系列基础样式，典型就是那些做了和以上提到相似的事情的那些，在你开始自己的 CSS 作业前，它确保了跨浏览器的任何事情都被默认设定为统一样式。它们不像以往那么重要了，因为浏览器显著地要比以往更加统一。但是，如果你想要看一个例子，可以看看这个[Normalize.css](http://necolas.github.io/normalize.css/)，它被许多项目用作基础，是非常流行的样式表。

至于样式化表单的更加深入的信息，可以看下这些教程的 HTML 一节的这两篇文章：

- [Styling HTML Forms](/zh-CN/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Advanced Styling for HTML Forms](/zh-CN/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)

## 测试你的技能

我们在本文中介绍了很多内容，但是您记住最重要的内容了么？在继续之前，您可以通过一些其他测试来验证您是否真正学习到了这些知识，参见[技能测试](/zh-CN/docs/Learn/CSS/Building_blocks/Images_tasks)

## 小结

这节课致力于说明在你用 CSS 处理图像、媒体和其他不普通的元素时，你会遇到的不同之处。在下篇文章中，我们将会了解一些在你样式化 HTMl 表格时有用的技巧。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
