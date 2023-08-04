---
title: 类型、类和 ID 选择器
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

本节课中，我们看下可用的最简单的选择器，在你的工作中，它们很有可能会是最常用到的。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        基本电脑知识，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了基础的软件</a
        >，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基础知识，HTML 基础（学习<a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 介绍</a
        >），以及对 CSS 工作原理的理解（学习<a
          href="/zh-CN/docs/Learn/CSS/First_steps"
          >CSS 初步</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习不同的 CSS 选择器，通过它们将 CSS 应用到文档中。</td>
    </tr>
  </tbody>
</table>

## 类型选择器

**类型选择器**有时也叫做“标签名选择器*”*或者是”元素选择器“，因为它在文档中选择了一个 HTML 标签/元素的缘故。在下面的示例中，我们已经用了 span、em 和 strong 选择器，`<span>`、`<em>`和`<strong>`元素的所有实例这样就都被样式化了。

**试着加上一条 CSS 规则，选择`<h1>`元素，把它的颜色变为蓝色。**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## 全局选择器

全局选择器，是由一个星号（`*`）代指的，它选中了文档中的所有内容（或者是父元素中的所有内容，比如，它紧随在其他元素以及邻代运算符之后的时候）。下面的示例中，我们已经用全局选择器，移去了所有元素上的外边距。这就是说，和浏览器以外边距隔开标题和段的方式默认加上的样式不同的是，每个物件都紧紧地挨在一起，我们不能那么容易就看清楚不同的段。

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

这种行为有时能在“重置样式表”中看到，其中所有浏览器所做的样式化都会被忽略。这些一度很受欢迎，但是把所有的样式化忽略掉的话，通常就是指，你必须做把这些样式带回来的工作！因此我们应小心使用全局选择器，以处理诸如下面所述之类的很特殊的情况。

### 使用全局选择器，让选择器更易读

全局选择器的一种用法是让选择器更易读，更明显地表明它们的作用。例如，如果我想选中任何`<article>`元素的第一子元素，不论它是什么元素，都给它加粗，我可以将{{cssxref(":first-child")}}选择器（我们将会在[伪类和伪元素](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)课中进一步了解）用作`<article>`元素选择器的一个后代选择器：

```css
article :first-child {
}
```

但是这会和`article:first-child`混淆，而后者选择了作为其他元素的第一子元素的`<article>`元素。

为了避免这种混淆，我们可以向`:first-child`选择器加入全局选择器，这样选择器所做的事情很容易就能看懂。选择器正选中`<article>`元素的*任何*第一子元素：

```css
article *:first-child {
}
```

## 类选择器

类选择器以一个句点（`.`）开头，会选择文档中应用了这个类的所有物件。在下面的实时示例中，我们已经建立了一个名为`.highlight`的类，把它应用到了我的文档中的几个地方。所有包含此类的元素都被高亮了。

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### 指向特定元素的类

你能建立一个指向应用一个类的特定元素。在下一个示例里面，我们将会用不同方式高亮一个带有`highlight`类的`<span>`和带有 `highlight`类的`<h1>`标题。我们通过使用附加了类的欲选元素的选择器做到这点，其间没有空格。

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

这种方式使 CSS 没那么可复用，因为类现在只会应用到那个特定元素，在认为规则也该应用到其他元素的时候，你会需要另外加上一个选择器。

### 多个类被应用的时候指向一个元素

你能对一个元素应用多个类，然后分别指向它们，或者仅仅在选择器中存在所有这些类的时候选择这一元素。在你的站点上，构建可以以不同方式组合起来的组件的时候，这会有用。

在下面的示例中，有一个包含了一条笔记的`<div>`。灰色的边框在盒子带有`notebox`类的时候应用。如果它还有一个`warning`或是`danger`类，我们改变{{cssxref("border-color")}}。

为了告诉浏览器我们只想匹配带有所有这些类的元素，我们可以将这些类不加空格地连成一串。

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID 选择器

ID 选择器开头为`#`而非句点，不过基本上和类选择器是同种用法。可是在一篇文档中，一个 ID 只会用到一次。它能选中设定了`id`的元素，你可以在 ID 前面加上类型选择器，只指向元素和 ID 都匹配的类。在下面的示例里，你可以看看这两种用法。

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **备注：**正如我们在和特定性相关的课里面学到的那样，ID 所指特定，会优先于大多数其他选择器。所以很难处理它们。大多数情况下，给一个元素加个类，而不是使用 ID，会更好。不过要是 ID 是唯一一种指定这个元素的方式的话——也许是因为你没法访问标记标记因此不能编辑——这种方式可行。

## 下一篇

来看[属性选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)，继续探索选择器。

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
