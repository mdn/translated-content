---
title: 关系选择器
slug: Learn/CSS/Building_blocks/Selectors/Combinators
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

我们要了解的最后一种选择器被命名为关系选择器（Combinator），这是因为它们在其他选择器之间和其他选择器与文档内容的位置之间建立了一种有用的关系的缘故。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        基础电脑知识、<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了基本的软件</a
        >、<a href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理</a>基本知识、HTML 基础（学习 <a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 介绍</a
        >），以及对 CSS 工作原理的了解（学习<a
          href="/zh-CN/docs/Learn/CSS/First_steps"
          >CSS 初步</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解 CSS 里面可用的不同关系选择器。</td>
    </tr>
  </tbody>
</table>

## 后代选择器

后代选择器——典型用单个空格（" "）字符——组合两个选择器，比如，第二个选择器匹配的元素被选择，如果他们有一个祖先（父亲，父亲的父亲，父亲的父亲的父亲，等等）元素匹配第一个选择器。选择器利用后代组合符被称作后代选择器。

```css
body article p
```

下面的示例中，我们只会匹配处于带有`.box`类的元素里面的`<p>`元素。

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## 子代关系选择器

子代关系选择器是个大于号（`>`），只会在选择器选中直接子元素的时候匹配。继承关系上更远的后代则不会匹配。例如，只选中作为`<article>`的直接子元素的`<p>`元素：

```css
article > p
```

下个示例中，我们弄了个有序列表，内嵌于另一个无序列表里面。我用子代关系选择器，只选中为`<ul>`的直接子元素的`<li>`元素，给了它们一个顶端边框。

如果你移去指定子代选择器的`>`的话，你最后得到的是后代选择器，所有的`<li>`会有个红色的边框。

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## 邻接兄弟

邻接兄弟选择器（`+`）用来选中恰好处于另一个在继承关系上同级的元素旁边的物件。例如，选中所有紧随`<p>`元素之后的`<img>`元素：

```css
p + img
```

常见的使用场景是，改变紧跟着一个标题的段的某些表现方面，就像是我下面的示例那样。这里我们寻找一个紧挨`<h1>`的段，然后样式化它。

如果你往`<h1>`和`<p>`之间插入其他的某个元素，例如`<h2>`，你将会发现，段落不再与选择器匹配，因而不会应用元素邻接时的前景和背景色。

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## 通用兄弟

如果你想选中一个元素的兄弟元素，即使它们不直接相邻，你还是可以使用通用兄弟关系选择器（`~`）。要选中所有的`<p>`元素后*任何地方*的`<img>`元素，我们会这样做：

```css
p ~ img
```

在下面的示例中，我们选中了所有的 `<h1>`之后的`<p>`元素，虽然文档中还有个 `<div>`，其后的`<p>`还是被选中了。

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## 使用关系选择器

你能用关系选择器，将任何在我们前面的学习过程中学到的选择器组合起来，选出你的文档中的一部分。例如如果我们想选中为`<ul>`的直接子元素的带有“a”类的列表项的话，我可以用下面的代码。

```css
ul > li[class="a"] {
}
```

不过，建立一长列选中你的文档中很明确的部分的选择器的时候，小心一些。这些 CSS 规则难以复用，因为你让选择器在表示标记文本中的元素的相对位置上过于明确。

建立简单的一个类，然后把它应用到有需求的元素上，经常会是更好的做法。不过话说回来，如果你需要让你的文档变换一下样式，但是没法编辑 HTML（也许是因为它由 CMS 生成）的话，你的关系选择器的知识会派上用场。

## 小试牛刀！

我们已经在这篇文章里讲了许多内容，不过你能记住最重要的信息吗？你可以找些更深入的测试，在继续下去之前，验证你是否已经获取了这些信息——见[小试牛刀：选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks)。

## 继续学习

这是我们选择器这节课的最后一节了。下面我们将会继续前进，学习 CSS 的另一个重要部分——[CSS 盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
