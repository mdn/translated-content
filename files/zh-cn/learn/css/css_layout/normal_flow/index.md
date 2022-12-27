---
title: 正常布局流
slug: Learn/CSS/CSS_layout/Normal_Flow
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

这篇文章介绍正常的流布局，或者说，在你没有改变默认布局规则情况下的页面元素布局方式。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        HTML 基础 (study
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), 和了解 CSS 如何工作的 (study
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>在做出改动之前，能够解释浏览器默认的布局方式。</td>
    </tr>
  </tbody>
</table>

如上小节对布局的介绍，如果你未曾应用任何 CSS 规则来改变它们的展现方式，网页上的元素将会按照正常布局流来组织。同样的，开始探索前，你可以通过调整元素位置，或者完全的移除元素来改变它们的表现效果。从一副简单的、结构良好并且在正常布局流下仍然易读的文档开始，是上手任何页面的最佳方式（译者注：几乎没有很简单的 CSS，标签组织符合一般用法）。这样确保了你的内容的易读性，即便用户使用受限的浏览器或者屏幕阅读设备（译者注：比如有些老旧浏览器对某些 CSS 特性的支持不理想，或者有用户自定义 CSS 样式）。此外，由于正常布局流的设计初衷在于构建易读、合理的文档，遵循这样的指引原则，你在对布局做出改动时应该是与文档协同，而不是与之对抗。

在深入探索不同的布局方式之前，你最好回顾下在之前模块学习到的关于正常布局流的知识点（译者注：比如 position display float table flex-box grid-layout）.

## 默认情况下，元素是如何布局的？

首先，取得元素的内容来放在一个独立的元素盒子中，然后在其周边加上内边距、边框和外边距 --- 就是我们之前看到的盒子模型。

默认的，一个[块级元素](/zh-CN/docs/Web/HTML/Block-level_elements)的内容宽度是其父元素的 100%，其高度与其内容高度一致。[内联元素](/zh-CN/docs/Web/HTML/Inline_elements)的 height width 与内容一致。你无法设置内联元素的 height width --- 它们就那样置于块级元素的内容里。如果你想控制内联元素的尺寸，你需要为元素设置`display: block;` （或者，`display: inline-block;` inline-block 混合了 inline 和 block 的特性。)

这样解释了独立元素的布局，但是元素之间又是如何相互影响的呢？正常布局流（在布局介绍里提到过）是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的[书写顺序](/zh-CN/docs/Web/CSS/writing-mode)(_默认值：_ horizontal-tb) 的*块流动方向 (block flow direction)*放置 --- 每个块级元素会在上一个元素下面另起一行，它们会被设置好的 margin 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。

内联元素的表现有所不同 --- 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容（或者被包裹的）被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。

如果两个相邻的元素都设置了 margin 并且两个 margin 有重叠，那么更大的设置会被保留，小的则会消失 --- 这被称为外边距叠加，我们之前见到过。

我们来看一个对全部这些做出解释的简单例子：

```html
<h1>Basic document flow</h1>

<p>I am a basic block level element. My adjacent block level elements sit on new lines below me.</p>

<p>By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.</p>

<p>We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.</p>

<p>inline elements <span>like this one</span> and <span>this one</span> sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements will <span>wrap onto a new line if possible (like this one containing text)</span>, or just go on to a new line if not, much like this image will do: <img src="https://mdn.mozillademos.org/files/13360/long.jpg"></p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255,84,104,0.3);
  border: 2px solid rgb(255,84,104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('默认情况下，元素是如何布局的？', '100%', 500) }}

## 小结

现在你对正常布局流有所了解，知晓浏览器默认怎么组织元素，继续下一节，学习如何改变默认布局以产出符合你的设计的布局。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

## 在这个模块中

- [CSS 介绍](/zh-CN/docs/Learn/CSS/CSS_layout/Introduction)
- [正常布局流（Normal Flow）](/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [弹性盒子（Flexbox）](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
- [网格（Grid）](/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
- [浮动（Floats）](/zh-CN/docs/Learn/CSS/CSS_layout/Floats)
- [位置（Positioning）](/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)
- [多列布局（Multiple-column Layout）](/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [响应式设计](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [媒体查询入门指南](/zh-CN/docs/Learn/CSS/CSS_layout/Media_queries)
- [传统的布局实现（Legacy Layout Methods）](/zh-CN/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [支持旧有浏览器（Supporting older browsers）](/zh-CN/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [评估你对布局的理解](/zh-CN/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
