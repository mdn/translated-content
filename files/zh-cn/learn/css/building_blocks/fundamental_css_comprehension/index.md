---
title: 基本的 CSS 理解
slug: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

你已经在这个模块中了解到了很多内容，所以当你达到这个模块的最后一篇文章的时候，感觉一定非常不错吧！在你继续之前的最后一步，就是完成对于这个模块的测验。本次测验涉及到几个相关的练习，你必须按顺序完成，这样你才能设计出最终的成品：一张名片/游戏玩家卡片/社交媒体的简介。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>在尝试这个测验之前，你应该已经完成了这个模块中所有文章的学习。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>来测试对 CSS 理论、语法、功能性的基本理解。</td>
    </tr>
  </tbody>
</table>

## 起点

在开始测验之前，你应该：

- 将 [HTML file for the exercise](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/index.html), 和 [associated image file](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/chris.jpg),拷贝到你的本地环境中。如果你想使用自己的图片文件以及把你的名字写进资料里面的话，也没有问题，不过需要保证你提供的图像是正方形的。
- 下载 [CSS resources text file](https://github.com/mdn/learning-area/blob/main/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) 到你的本地环境，这个文件包含了一组原始选择器和规则集。你需要学习并将他们组合，这是测验的一部分。

> [!NOTE]
> 另外，你可以使用一个网站比如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 来做你的测验。你可以复制 HTML 和 CSS 到其中一个在线编辑器中，以及使用这个 [this URL](http://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) 来让 `<img>` 显示图片。如果你使用的在线编辑器无法让你链接 CSS 文件 (没有单独的 CSS 面板)，你也可以将 CSS 直接放入`<style>` 元素中。

## 项目概要

我们已经为你提供了一些原始的 HTML 和一张图片，然后需要编写必要的 CSS 来让其成为一个漂亮的网上小名片，可能大小是游戏玩家卡片或社交媒体简介的两倍。下面的段落描述了你需要做的事情。

基本设置：

- 首先，在你放 HTML 文件和图像文件的目录下，创建一个新的文件，把它命名为类似`style.css`。
- 通过 `<link>` 元素来将你的 CSS 链接到 HTML 文件中。
- 我们为你提供的 CSS 资源文本文件中，前两项规则集是我们设置好的，你可以直接使用，所以将他们复制粘贴到你的新 CSS 文件的顶部。同时也可以将这个作为测验，用来确认你是否正确链接了你的 CSS 文件到 HTML 中。
- 在以上的两条规则中添加一条 CSS 注释，注释中要包含一些文本来表明这是整体页面的一般样式。你可以在 CSS 文件底部添加 3 个或以上的注释，来明确地表明该样式是应用到卡片的容器，应用到标题和页脚的样式，和名片主要内容的样式。从现在开始，随后在样式表添加的样式都应该有组织地放置在合适的地方。

关注我们为你提供的选择器和规则集：

- 接下来，我们希望你观察四个选择器，并计算每一个的专用性。将它们写在稍后可以找到的地方，例如在 CSS 顶部的注释中。
- 现在是时候把正确的选择器放在正确的规则集上了！你的 CSS 资源中有四对选择器和规则集需要匹配，现在就开始匹配，并将它们添加到你的 CSS 文件。你需要：

  - 为整体卡片的容器提供一个固定的宽/高，背景颜色，边框，以及边框圆角等等。
  - 为 header 提供一个渐变的背景颜色，从更暗到更亮，加上圆角，配合在卡片容器上设置的圆角。
  - 为 footer 提供一个渐变的背景颜色，从更亮到更暗，加上圆角，配合在卡片容器上设置的圆角。
  - 将图像向右浮动，使其粘贴在名片主要内容的右边，然后把它的 max-height 设置为 100% (一个聪明的技巧，来确保它将放大/缩小，与父容器保持同样的高度，不管它变成什么高度。)

- 注意！提供的规则集中有两个错误。使用你知道的任何技术找到这些错误并修复，然后再继续。

你需要写的新规则：

- 编写一个同时面向 card head 和 card footer 的规则集，使它们计算的总高度为 50px（包括 30px 的内容高度和 10px 的 padding）但用 `em` 来表示。
- 浏览器会为`<h2>` 和 `<p>`元素应用默认的 margin，这会影响我们的设计，所以编写一个规则集：margin 设置为 0。
- 为了阻止图像溢出名片的主要内容 ( `<article>` 元素)，我们需要给它设置一个明确的高度。设置 `<article>`的高度为 120px，但是使用 `em`来表示。还要给它一个半透明黑色的背景颜色，产生一个稍暗一点的阴影，能让红色的背景稍微透过。
- 编写一个规则集，使 `<h2>` 有效的字体大小为 20px (使用 `em`表达) 以及一个适当的行高将其放置在标题的内容框的中央。回想起来，内容框高度应该是 30px，你所有需要的数字都已经给你了，所以可以计算出行高。
- 为页脚中的 `<p>` 编写一个规则集，使它的有效字体大小为 15px (使用 `em`表达) 以及一个适当的行高将其放置在页面的内容框的中央。回想起来，内容框高度应该是 30px，你所有需要的数字都已经给你了，所以可以计算出行高。
- 最为最后一步，为 `<article>` 中的段落设置一个合适的 padding 值，让它和 `<h2>` 以及页脚的段落左边缘对齐，并将其颜色设置得便于阅读。

> [!NOTE]
> 记住第二条规则集会将 `font-size: 10px;` 设置在 `<html>` 元素上 — 这意味着 `<html>` 的任何后代中，一个 em 将会等于 10px 而不是默认的 16px。(这是当然的，如果在层次结构中，有不同的 `font-size` 设置于其上，问题中的后代没有任何的祖先位于 em 元素和 `<html>` 之间。这可能会影响你所需要的值，尽管在这个简单的示例中，这不是问题。)

其他事情要考虑：

- 如果你编写的 CSS 有比较好的可读性，并在每行上单独声明，你将得到奖励。
- 你应该在所有规则的选择器中都用 `.card` 作为开头，这样的好处是：如果将名片放在带有其他内容的页面的情况下，这些规则不会干扰其他元素的样式。

## 注意和提示

- 你不需要以任何方式编辑 HTML，除了将 CSS 应用于你的 HTML。
- 当使用 `em` 值代表一些你需要的像素长度的时候，想想 (`<html>`) 元素的基本字体大小，以及需要乘以什么才能获得所需的值。这将给你 em 的值，至少在这样一个简单的情况下。

## 示例

完成的设计应如下图所示：

![A view of the finished business card, show a reader header and footer, and a darker center panel containing the main details and image.](business-card.png)

## 评估

如果你将此评估作为有组织的课程的一部分，你应该能够将你的工作交给你的老师/导师进行打分。如果你是自学的，那么你可以通过询问 [Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294), 或在 [#mdn](irc://irc.mozilla.org/mdn)的 IRC 频道 [Mozilla IRC](https://wiki.mozilla.org/IRC) 中轻松获得打分指南。首先尝试练习 - 作弊学不到什么！

{{PreviousMenuNext("Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}
