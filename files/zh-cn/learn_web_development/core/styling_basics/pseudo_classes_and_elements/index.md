---
title: 伪类和伪元素
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
original_slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

下一组我们将了解的选择器被称为**伪类**和**伪元素**。这一类选择器的数量众多，通常用于很明确的目的。一旦你了解了如何使用它们，你便可以通过查阅列表来寻找合适的那一项以完成你想要的选择。与之前一样，每个选择器相关的 MDN 页面都将帮助你了解各浏览器的支持情况。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基础电脑知识，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >安装了基本的软件</a
        >，<a href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >处理文件</a
        >的基本知识，HTML 基础（学习 <a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 介绍</a
        >），以及对 CSS 工作原理的了解（学习 <a
          href="/zh-CN/docs/Learn_web_development/Core/Styling_basics"
          >CSS 入门概述</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解伪类和伪元素选择器</td>
    </tr>
  </tbody>
</table>

## 什么是伪类？

伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。它们表现得会像是你向你的文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。

伪类就是开头为冒号的关键字。例如，`:hover` 就是一个伪类。

### 简单伪类示例

让我们看下一个简单的示例。如果我们想要让一篇文章中的第一段变大加粗，可为此段加上一个类，然后为那个类添加 CSS，正如下面的示例展示的这样：

```html live-sample___first-child
<article>
  <p class="first">
    蔬菜对你有好处，所以你需要多吃大头菜、大葱、白萝卜、苋菜、番茄酱、甜瓜、红豆、大蒜。
  </p>

  <p>
    秋葵浓汤、甜菜叶、玉米、鸡冠菜、菊苣、秋葵浓汤、葫芦。欧芹、葱、西葫芦、塌棵菜、豌豆芽、蚕豆、羽衣甘蓝、蒲公英、秋葵、裙带菜、番茄。蒲公英、黄瓜、花生、豌豆、花生、鸡冠菜、西葫芦。
  </p>
</article>
```

```css live-sample___first-child
.first {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child")}}

不过，这在维护的时候可能会很恼人——要是文档的头部又加上一段的话呢？我们会需要把这个类挪到新加的这段上。假如我们不加类，我们可以使用{{cssxref(":first-child")}}伪类选择器——这将*一直*选中文章中的第一个子元素，我们将不再需要编辑 HTML（编辑 HTML 并不总是可行，也许是因为它是由一个 CMS 生成的）。

```html live-sample___first-child2
<article>
  <p>
    蔬菜对你有好处，所以你需要多吃大头菜、大葱、白萝卜、苋菜、番茄酱、甜瓜、红豆、大蒜。
  </p>

  <p>
    秋葵浓汤、甜菜叶、玉米、鸡冠菜、菊苣、秋葵浓汤、葫芦。欧芹、葱、西葫芦、塌棵菜、豌豆芽、蚕豆、羽衣甘蓝、蒲公英、秋葵、裙带菜、番茄。蒲公英、黄瓜、花生、豌豆、花生、鸡冠菜、西葫芦。
  </p>
</article>
```

```css live-sample___first-child2
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child2")}}

所有的伪类以同样的方式实现。它们选中你的文档中处于某种状态的那部分，表现得就像是你已经向你的 HTML 加入类一样。看下 MDN 上的另外几个示例：

- [`:last-child`](/zh-CN/docs/Web/CSS/:last-child)
- [`:only-child`](/zh-CN/docs/Web/CSS/:only-child)
- [`:invalid`](/zh-CN/docs/Web/CSS/:invalid)

### 用户行为伪类

一些伪类只会在用户以某种方式和文档交互的时候应用。这些**用户行为伪类**，有时叫做**动态伪类**，表现得就像是一个类在用户和元素交互的时候加到了元素上一样。案例包括：

- [`:hover`](/zh-CN/docs/Web/CSS/:hover)——上面提到过，只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
- [`:focus`](/zh-CN/docs/Web/CSS/:focus)——只会在用户使用键盘控制，选定元素的时候激活。

```html live-sample___hover
<p><a href="">悬停在我上方</a></p>
```

```css live-sample___hover
a:link,
a:visited {
  color: rebeccapurple;
  font-weight: bold;
}

a:hover {
  color: hotpink;
}
```

{{EmbedLiveSample("hover")}}

## 伪元素是啥？

伪元素以类似方式表现。不过表现得是像你往标记文本中加入全新的 HTML 元素一样，而不是向现有的元素上应用类。

伪元素开头为双冒号 `::`。比如，`::before` 就是一个伪元素的示例。

> [!NOTE]
> 一些早期的伪元素曾使用单冒号的语法，所以你可能会在代码或者示例中看到。现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。

例如，如果你想选中一段的第一行，你可以把它用一个`<span>`元素包起来，然后使用元素选择器；不过，如果包起来的单词/字符数目长于或者短于父元素的宽度，这样做会失败。由于我们一般不会知道一行能放下多少单词/字符——因为屏幕宽度或者字体大小改变的时候这也会变——通过改变 HTML 的方式来可预测地这么做是不可能的。

`::first-line`伪元素选择器会值得信赖地做到这件事——即使单词/字符的数目改变，它也只会选中第一行。

```html live-sample___first-line
<article>
  <p>
    蔬菜对你有好处，所以你需要多吃大头菜、大葱、白萝卜、苋菜、番茄酱、甜瓜、红豆、大蒜。
  </p>

  <p>
    秋葵浓汤、甜菜叶、玉米、鸡冠菜、菊苣、秋葵浓汤、葫芦。欧芹、葱、西葫芦、塌棵菜、豌豆芽、蚕豆、羽衣甘蓝、蒲公英、秋葵、裙带菜、番茄。蒲公英、黄瓜、花生、豌豆、花生、鸡冠菜、西葫芦。
  </p>
</article>
```

```css live-sample___first-line
article p::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-line")}}

这表现得就像是`<span>`神奇地包在第一个被格式化的行一样，每当行长改变的时候还会更新。

你可以看到它把两段的第一行都选中了。

## 把伪类和伪元素组合起来

如果你想让第一段的第一行加粗，你需要把`:first-child`和`::first-line`选择器放到一起。试着编辑前面的实时示例，让它使用下面的 CSS。这里的意思是，我们想选择一个`<article>`元素里面的第一个`<p>`元素的第一行。

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## 生成带有::before 和::after 的内容

有一组特别的伪元素，它们和[`content`](/zh-CN/docs/Web/CSS/content)属性一同使用，使用 CSS 将内容插入到你的文档中中。

你能用这些插入一个文本字符串，和在下面的实时示例里那样。试着改变{{cssxref("content")}}属性的文本值，看看输出是怎么改变的。你也能改变`::before`伪元素为`::after`，看到这段文本插入到了元素的末尾而不是开头。

```html live-sample___before
<p class="box">我的 HTML 页面的盒子中的内容。</p>
```

```css live-sample___before
.box::before {
  content: "这应该显示在其他内容之前。";
}
```

{{EmbedLiveSample("before")}}

从 CSS 插入文本字符串，我们并不会在 Web 浏览器上经常这么做，因为对于一些屏幕阅读器来说，文本是不可见的，而且对于未来别人的查找和编辑也不是很方便。

这些伪元素的更推荐的用法是插入一个图标，例如下面的示例加入的一个小箭头，作为一个视觉性的提示，而且我们并不希望屏幕阅读器读出它。

```html live-sample___after-icon
<p class="box">我的 HTML 页面的盒子中的内容。</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

这些伪元素经常用于插入空字符串，其后可以像页面上的其他元素被样式化。

下个示例，我们已经用 `::before`伪元素加入了个空字符串。我们把它设为了`display: block`，以让它可以用 width 和 height 进行样式化。然后我们可以用 CSS 像任何元素那样样式化。你可以摆弄 CSS，改变它的外观和行为。

```html live-sample___before-styled
<p class="box">我的 HTML 页面的盒子中的内容。</p>
```

```css live-sample___before-styled
.box::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border: 1px solid black;
}
```

{{EmbedLiveSample("before-styled")}}

`::before` 和 `::after` 伪元素与 `content` 属性的共同使用，在 CSS 中被叫做“生成内容”，而且你会见到这种技术被用于完成各种任务。[CSS Arrow Please](https://cssarrowplease.com/) 网站就是一个著名的示例，它帮你用 CSS 生成一个箭头。在你创建你的箭头的时候看下 CSS，你将会看到实际使用的 {{cssxref("::before")}} 和 {{cssxref("::after")}} 伪元素。无论什么时候你看到了这些选择器，都要看下 {{cssxref("content")}} 属性，以了解 HTML 元素中添加了什么。

## 总结

本文中，我们介绍了特殊的类型选择器——CSS 伪类和伪元素。

伪类使得你可以将处于特定状态的元素作为目标，就像你已向 DOM 添加了该状态的类一样。伪元素的作用就像是你已向 DOM 添加了全新的元素，并允许你为其设置样式。`::before` 和 `::after` 伪元素让你可以使用 CSS 将内容插入文档。

在下一篇文章中，我们将会学习[关系选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Combinators)。

## 参见

- [伪类参考](/zh-CN/docs/Web/CSS/Pseudo-classes)
- [伪元素参考](/zh-CN/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
