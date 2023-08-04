---
title: 伪类和伪元素
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

下一组我们将了解的选择器被称为**伪类**和**伪元素**。这一类选择器的数量众多，通常用于很明确的目的。一旦你了解了如何使用它们，你便可以通过查阅列表来寻找合适的那一项以完成你想要的选择。与之前一样，每个选择器相关的 MDN 页面都将帮助你了解各浏览器的支持情况。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        基础电脑知识，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了基本的软件</a
        >，<a href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基本知识，HTML 基础（学习<a
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
      <td>了解伪类和伪元素选择器</td>
    </tr>
  </tbody>
</table>

## 什么是伪类？

伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。它们表现得会像是你向你的文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。

伪类就是开头为冒号的关键字：

```plain
:pseudo-class-name
```

### 简单伪类示例

让我们看下一个简单的示例。如果我们想要让一篇文章中的第一段变大加粗，可为此段加上一个类，然后为那个类添加 CSS，正如下面的示例展示的这样：

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

不过，这在维护的时候可能会很恼人——要是文档的头部又加上一段的话呢？我们会需要把这个类挪到新加的这段上。假如我们不加类，我们可以使用{{cssxref(":first-child")}}伪类选择器——这将*一直*选中文章中的第一个子元素，我们将不再需要编辑 HTML（编辑 HTML 并不总是可行，也许是因为它是由一个 CMS 生成的）。

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

所有的伪类以同样的方式实现。它们选中你的文档中处于某种状态的那部分，表现得就像是你已经向你的 HTML 加入类一样。看下 MDN 上的另外几个示例：

- [`:last-child`](/zh-CN/docs/Web/CSS/:last-child)
- [`:only-child`](/zh-CN/docs/Web/CSS/:only-child)
- [`:invalid`](/zh-Cn/docs/Web/CSS/:invalid)

### 用户行为伪类

一些伪类只会在用户以某种方式和文档交互的时候应用。这些**用户行为伪类**，有时叫做**动态伪类**，表现得就像是一个类在用户和元素交互的时候加到了元素上一样。案例包括：

- [`:hover`](/zh-CN/docs/Web/CSS/:hover)——上面提到过，只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
- [`:focus`](/zh-CN/docs/Web/CSS/:focus)——只会在用户使用键盘控制，选定元素的时候激活。

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## 伪元素是啥？

伪元素以类似方式表现，不过表现得是像你往标记文本中加入全新的 HTML 元素一样，而不是向现有的元素上应用类。伪元素开头为双冒号`::`。

```plain
::pseudo-element-name
```

> **备注：** 一些早期的伪元素曾使用单冒号的语法，所以你可能会在代码或者示例中看到。现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。

例如，如果你想选中一段的第一行，你可以把它用一个`<span>`元素包起来，然后使用元素选择器；不过，如果包起来的单词/字符数目长于或者短于父元素的宽度，这样做会失败。由于我们一般不会知道一行能放下多少单词/字符——因为屏幕宽度或者字体大小改变的时候这也会变——通过改变 HTML 的方式来可预测地这么做是不可能的。

`::first-line`伪元素选择器会值得信赖地做到这件事——即使单词/字符的数目改变，它也只会选中第一行。

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

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

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

从 CSS 插入文本字符串，我们并不会在 Web 浏览器上经常这么做，因为对于一些屏幕阅读器来说，文本是不可见的，而且对于未来别人的查找和编辑也不是很方便。

这些伪元素的更推荐的用法是插入一个图标，例如下面的示例加入的一个小箭头，作为一个视觉性的提示，而且我们并不希望屏幕阅读器读出它。

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

这些伪元素经常用于插入空字符串，其后可以像页面上的其他元素被样式化。

下个示例，我们已经用 `::before`伪元素加入了个空字符串。我们把它设为了`display: block`，以让它可以用 width 和 height 进行样式化。然后我们可以用 CSS 像任何元素那样样式化。你可以摆弄 CSS，改变它的外观和行为。

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

`::before`和`::after`伪元素与`content`属性的共同使用，在 CSS 中被叫做“生成内容”，而且你会见到这种技术被用于完成各种任务。[CSS Arrow Please](http://www.cssarrowplease.com/)网站就是一个著名的示例，它帮你用 CSS 生成一个箭头。在你创建你的箭头的时候看下 CSS，你将会看到实际使用的{{cssxref("::before")}}和{{cssxref("::after")}}伪元素。无论什么时候你看到了这些选择器，都要看下{{cssxref("content")}}属性，以了解文档中添加了什么。

## 参考节

有很多伪类和伪元素，所以有一个用于参考的列表会有用。下面是列出它们的表格，链接到了 MDN 上它们的参考页。把这作为参考，看看你能选中什么。

### 伪类

| 选择器                              | 描述                                                                                                                                                                                                      |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ Cssxref(":active") }}            | 在用户激活（例如点击）元素的时候匹配。                                                                                                                                                                    |
| {{ Cssxref(":any-link") }}          | 匹配一个链接的`:link`和`:visited`状态。                                                                                                                                                                   |
| {{ Cssxref(":blank") }}             | 匹配空输入值的[`<input>`元素](/zh-CN/docs/Web/HTML/Element/input)。                                                                                                                                       |
| {{ Cssxref(":checked") }}           | 匹配处于选中状态的单选或者复选框。                                                                                                                                                                        |
| {{ Cssxref(":current") }}           | 匹配正在展示的元素，或者其上级元素。                                                                                                                                                                      |
| {{ Cssxref(":default") }}           | 匹配一组相似的元素中默认的一个或者更多的 UI 元素。                                                                                                                                                        |
| {{ Cssxref(":dir") }}               | 基于其方向性（HTML[`dir`](/zh-CN/docs/Web/HTML/Global_attributes/dir)属性或者 CSS[`direction`](/zh-CN/docs/Web/CSS/direction)属性的值）匹配一个元素。                                                     |
| {{ Cssxref(":disabled") }}          | 匹配处于关闭状态的用户界面元素                                                                                                                                                                            |
| {{ Cssxref(":empty") }}             | 匹配除了可能存在的空格外，没有子元素的元素。                                                                                                                                                              |
| {{ Cssxref(":enabled") }}           | 匹配处于开启状态的用户界面元素。                                                                                                                                                                          |
| {{ Cssxref(":first") }}             | 匹配[分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)的第一页。                                                                                                                                             |
| {{ Cssxref(":first-child") }}       | 匹配兄弟元素中的第一个元素。                                                                                                                                                                              |
| {{ Cssxref(":first-of-type") }}     | 匹配兄弟元素中第一个某种类型的元素。                                                                                                                                                                      |
| {{ Cssxref(":focus") }}             | 当一个元素有焦点的时候匹配。                                                                                                                                                                              |
| {{ Cssxref(":focus-visible")}}      | 当元素有焦点，且焦点对用户可见的时候匹配。                                                                                                                                                                |
| {{ Cssxref(":focus-within") }}      | 匹配有焦点的元素，以及子代元素有焦点的元素。                                                                                                                                                              |
| {{ Cssxref(":future") }}            | 匹配当前元素之后的元素。                                                                                                                                                                                  |
| {{ Cssxref(":hover") }}             | 当用户悬浮到一个元素之上的时候匹配。                                                                                                                                                                      |
| {{ Cssxref(":indeterminate") }}     | 匹配未定态值的 UI 元素，通常为[复选框](/zh-CN/docs/Web/HTML/Element/input/checkbox)。                                                                                                                     |
| {{ Cssxref(":in-range") }}          | 用一个区间匹配元素，当值处于区间之内时匹配。                                                                                                                                                              |
| {{ Cssxref(":invalid") }}           | 匹配诸如`<input>`的位于不可用状态的元素。                                                                                                                                                                 |
| {{ Cssxref(":lang") }}              | 基于语言（HTML[lang](/zh-CN/docs/Web/HTML/Global_attributes/lang)属性的值）匹配元素。                                                                                                                     |
| {{ Cssxref(":last-child") }}        | 匹配兄弟元素中最末的那个元素。                                                                                                                                                                            |
| {{ Cssxref(":last-of-type") }}      | 匹配兄弟元素中最后一个某种类型的元素。                                                                                                                                                                    |
| {{ Cssxref(":left") }}              | 在[分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)中，匹配左手边的页。                                                                                                                                     |
| {{ Cssxref(":link")}}               | 匹配未曾访问的链接。                                                                                                                                                                                      |
| {{ Cssxref(":local-link")}}         | 匹配指向和当前文档同一网站页面的链接。                                                                                                                                                                    |
| {{ Cssxref(":is", ":is()")}}        | 匹配传入的选择器列表中的任何选择器。                                                                                                                                                                      |
| {{ Cssxref(":not") }}               | 匹配作为值传入自身的选择器未匹配的物件。                                                                                                                                                                  |
| {{ Cssxref(":nth-child") }}         | 匹配一列兄弟元素中的元素——兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。                                                                                      |
| {{ Cssxref(":nth-of-type") }}       | 匹配某种类型的一列兄弟元素（比如，`<p>`元素）——兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。                                                                 |
| {{ Cssxref(":nth-last-child") }}    | 匹配一列兄弟元素，从后往前倒数。兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。                              |
| {{ Cssxref(":nth-last-of-type") }}  | 匹配某种类型的一列兄弟元素（比如，`<p>`元素），从后往前倒数。兄弟元素按照*an+b*形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。 |
| {{ Cssxref(":only-child") }}        | 匹配没有兄弟元素的元素。                                                                                                                                                                                  |
| {{ Cssxref(":only-of-type") }}      | 匹配兄弟元素中某类型仅有的元素。                                                                                                                                                                          |
| {{ Cssxref(":optional") }}          | 匹配不是必填的 form 元素。                                                                                                                                                                                |
| {{ Cssxref(":out-of-range") }}      | 按区间匹配元素，当值不在区间内的的时候匹配。                                                                                                                                                              |
| {{ Cssxref(":past") }}              | 匹配当前元素之前的元素。                                                                                                                                                                                  |
| {{ Cssxref(":placeholder-shown") }} | 匹配显示占位文字的 input 元素。                                                                                                                                                                           |
| {{ Cssxref(":playing") }}           | 匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“播放”的元素。                                                                                                                              |
| {{ Cssxref(":paused") }}            | 匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“暂停”的元素。                                                                                                                              |
| {{ Cssxref(":read-only") }}         | 匹配用户不可更改的元素。                                                                                                                                                                                  |
| {{ Cssxref(":read-write") }}        | 匹配用户可更改的元素。                                                                                                                                                                                    |
| {{ Cssxref(":required") }}          | 匹配必填的 form 元素。                                                                                                                                                                                    |
| {{ Cssxref(":right") }}             | 在[分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)中，匹配右手边的页。                                                                                                                                     |
| {{ Cssxref(":root") }}              | 匹配文档的根元素。                                                                                                                                                                                        |
| {{ Cssxref(":scope") }}             | 匹配任何为参考点元素的的元素。                                                                                                                                                                            |
| {{ Cssxref(":valid") }}             | 匹配诸如`<input>`元素的处于可用状态的元素。                                                                                                                                                               |
| {{ Cssxref(":target") }}            | 匹配当前 URL 目标的元素（例如如果它有一个匹配当前[URL 分段](https://en.wikipedia.org/wiki/Fragment_identifier)的元素）。                                                                                  |
| {{ Cssxref(":visited") }}           | 匹配已访问链接。                                                                                                                                                                                          |

### 伪元素

| 选择器                            | 描述                                                 |
| --------------------------------- | ---------------------------------------------------- |
| {{ Cssxref("::after") }}          | 匹配出现在原有元素的实际内容之后的一个可样式化元素。 |
| {{ Cssxref("::before") }}         | 匹配出现在原有元素的实际内容之前的一个可样式化元素。 |
| {{ Cssxref("::first-letter") }}   | 匹配元素的第一个字母。                               |
| {{ Cssxref("::first-line") }}     | 匹配包含此伪元素的元素的第一行。                     |
| {{ Cssxref("::grammar-error") }}  | 匹配文档中包含了浏览器标记的语法错误的那部分。       |
| {{ Cssxref("::selection") }}      | 匹配文档中被选择的那部分。                           |
| {{ Cssxref("::spelling-error") }} | 匹配文档中包含了浏览器标记的拼写错误的那部分。       |

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
