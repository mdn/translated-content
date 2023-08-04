---
title: 响应式设计
slug: Learn/CSS/CSS_layout/Responsive_Design
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

早年设计 Web 时，页面是以适配特定的屏幕大小为考量创建的。如果用户正在使用比设计者考虑到的更小或者更大的屏幕，那么结果从多余的滚动条，到过长的行和没有被合理利用的空间，不一而足。随着人们使用的屏幕尺寸的种类越来越多，出现了响应式网页设计的概念（_responsive web design，RWD_），RWD 指的是允许 Web 页面适应不同屏幕宽度因素等，进行布局和外观的调整的一系列实践。这是改变我们设计多设备网页的方式的思想，在这篇文章里，我们将会帮你理解掌握它时所需知道的主要技能。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        HTML 基础（学习<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >），以及对 CSS 工作方式的理解（学习<a
          href="/zh-CN/docs/Learn/CSS/First_steps"
          >CSS first steps</a
        >和<a href="/zh-CN/docs/Learn/CSS/Building_blocks"
          >CSS building blocks</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解响应式设计的基础概念以及历史</td>
    </tr>
  </tbody>
</table>

## 历史上的网站布局

在历史上的某个时刻，设计网站时，你有两个选择：

- 你可以创建一个“液态”站点，它会拉伸以充满整个浏览器视窗；
- 或者是一个“固定宽度”站点，它有一个以像素计的固定尺寸。

这两种途径会倾向于导致它的表现只有在设计者的屏幕上才是最佳的！液态站点导致了小屏幕上的设计会挤成一团（如下所示），以及大屏幕上难以阅读的很长的行长度。

![A layout with two columns squashed into a mobile size viewport.](mdn-rwd-liquid.png)

> **备注：** 看一下这个简单的流式布局：[示例](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html)，[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/liquid-width.html)。当查看示例时，来回拖拽你的浏览器窗口，改变其大小，看下不同尺寸下的显示情况。

固定宽度站点的一个可能的后果是，在比站点更窄的屏幕上会出现一个水平滚动条（如下所示），在大屏幕上的设计边缘还会有许多空白。

![A layout with a horizontal scrollbar in a mobile viewport.](mdn-rwd-fixed.png)

> **备注：** 看下这个简单的固定宽度布局：[示例](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html)，[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/fixed-width.html)，重新观察一下你调整浏览器窗口大小后的结果。

> **备注：** 上面的截屏是在火狐开发者工具的[响应式设计模式](/zh-CN/docs/Tools/Responsive_Design_Mode)中截取的。

随着移动 Web 在早期的功能手机上开始成为现实，希望拥抱移动端的公司普遍希望为他们的网站创建一个有着不同的网址的移动版本（大多是像*m.example.com*或者*example.mobi*这类）。这意味着一个网站需要开发两个分开的版本，而且要保持时效性。

除此以外，这些移动网站的体验经常缩水。由于移动设备变得更加强大，足以显示完整的网站，对于那些被困在移动版网站的移动端用户来说，这是很折磨人的，他们因此也没法获取他们知道在支持所有功能的桌面版网站上能找到的信息。

## 响应式设计之前的灵活布局

人们开发了许多方式，尽力解决建设网站时使用液态和固定宽度的方式所带来的弊端。2004 年，Cameron Adams 写了一篇题为《[Resolution dependent layout](http://www.themaninblue.com/writing/perspective/2004/09/21/)》的帖子，描述了一种可以创造适应多种屏幕分辨率的设计的方式。这种方式需要 JavaScript 来探测屏幕的分辨率，载入恰当的 CSS。

Zoe Mickley Gillenwater 深刻影响了[她的著作](http://zomigi.com/blog/voices-that-matter-slides-available/)，在里面描述并标准化了可变站点建立的不同方式，试图在充满屏幕和完全保持固定尺寸之间找到最佳平衡。

## 响应式设计

“响应式设计”这个词是[Ethan Marcotte 在 2010 年首度提出的](https://alistapart.com/article/responsive-web-design/)，他将其描述为三种技术的混合使用。

1. 第一个是液态网格，这早先已由 Gillenwater 进行探讨，可以在 Marcotte 的文章《[Fluid Grids](https://alistapart.com/article/fluidgrids/)》（出版于 2009 年的《A List Apart》上）中读到。
2. 第二个是[液态图像](http://unstoppablerobotninja.com/entry/fluid-images)的理念。通过使用相当简单的将设置`max-width`属性设置为`100%`的技术，图像可以在包含它们的列变得比图像原始尺寸窄的时候，缩放得更小，但总不会变得更大。这使得图像可以被缩放，以被放到一个灵活尺寸的列，而不是溢出出去，同时也不会在列宽于图像的时候，使图像变得太大以至于画质变得粗糙。
3. 第三个关键的组件是[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)。媒体查询使以往 Cameron Adams 探讨过的、由 JavaScript 实现的布局类型切换，可以只使用 CSS 实现。和所有尺寸的屏幕都使用一种布局不同的是，布局是可以改变的：侧栏可以在小屏幕上重新布局，而替代用的导航栏也可以显示出来。

需要你理解的很重要的一点是**响应式 Web 设计不是单独的技术**，它是描述 Web 设计的一种方式、或者是一组最佳实践的一个词，它是用来建立可以**响应**查看内容的设备的样式的一个词。在 Marcotte's 原来的探索中，这意味着灵活网格（使用 float）和媒体查询，但是在这篇文章写就的几乎十年以后，Web 的响应式工作已经成为了默认做法。现代的 CSS 布局方式基本上就是响应式的，而且我们在 Web 平台上内置了新的东西，使得设计响应式站点变得容易。

这篇文章的余下部分会为你指出，在建立响应式站点的时候，你可能会用到的各式 Web 平台的特色功能。

## 媒介查询

响应式设计仅仅是因为媒介查询才新兴起来的。媒介查询第三级规范已经在 2009 年成为了候选推荐，这意味着它可视为准备好在浏览器中开始支持了。媒介查询允许我们运行一系列测试，例如用户的屏幕是否大于某个宽度或者某个分辨率，并将 CSS 选择性地适应用户的需要应用在样式化页面上。

例如，下面的媒体查询进行测试，以知晓当前的 Web 页面是否被展示为屏幕媒体（也就是说不是印刷文档），且视口至少有 800 像素宽。用于`.container`选择器的 CSS 将只会在这两件前提存在的情况下应用。

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

你可以在一张样式表上加入多条媒体查询，调整整个页面或者部分页面以达到适应各式屏幕尺寸的最佳效果。媒体查询，以及样式改变时的点，被叫做*断点*（breakpoints）。

使用媒体查询时的一种通用方式是，为窄屏设备（例如移动设备）创建一个简单的单栏布局，然后检查是否是大些的屏幕，在你知道你有足够容纳的屏幕宽度的时候，开始采用一种多栏的布局。这经常被描述为**移动优先**设计。

在 MDN 文档中的[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)中了解更多

## 灵活网格

响应式站点不只是在断点之间改变它们的布局，它们是建立在灵活网格上的。一个灵活网格意味着你不需要适配每个可能使用的设备尺寸，然后为其建立一个精确到像素级的适配布局。那种方式在现存有如此多种不同大小设备的前提下是不可能实现的，比如至少在台式机上，人们并不总是让他们的浏览器窗口最大化的。

使用灵活网格，你只需要加进去一个断点，在内容看起来不齐整的时候改变设计。例如如果一行随着屏幕大小增加而增长得不可读的长，或者是一个盒子在变窄时把每行的两个单词挤到一起。

早年间进行响应式设计的时候，我们唯一的实现布局的选项是使用[float](/zh-CN/docs/Learn/CSS/CSS_layout/Floats)。灵活浮动布局是这样实现的，让每个元素都有一个作为宽度的百分数，而且确保整个布局的和不会超过 100%。在他对于液态网格文章的原文中，Marcotte 详细描述了一种布局的法则，通过使用像素并把布局转化为百分数的方式设计。

```plain
target / context = result
```

例如如果我们的预期栏尺寸为 60 像素，而且它所在的上下文（或者容器）为 960 像素，我们在将零点二的空间移动到右边以后，用 960 去除 60，得到我们能够使用在我们的 CSS 上的值。

```css
.col {
  width: 6.25%; /* 60 / 960 = 0.0625 */
}
```

这种方式将会在今天整个 Web 上的许多地方上看到，而且它被我们的[Legacy layout methods](/zh-CN/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)一文中的布局一节中记载。可能你将会在工作中遇到使用这种方式的站点，所以有必要理解它，即使是在你不用建立一个使用浮动基础的灵活网格的情况下。

下面的例子阐释了一个使用媒体查询和灵活网格的简单响应式设计。在窄屏幕上，布局将盒子堆叠在另一个的上面：

![A mobile view of the layout with boxes stacked on top of each other vertically.](mdn-rwd-mobile.png)

在宽些的屏幕上，它们变成了两列：

![A desktop view of a layout with two columns.](mdn-rwd-desktop.png)

> **备注：** 你可以在 GitHub 上找到此示例的[实时示例](https://mdn.github.io/css-examples/learn/rwd/float-based-rwd.html)和[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/float-based-rwd.html)。

## 现代布局技术

现代布局方式，例如[多栏布局](/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)、[伸缩盒](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)和[网格](/zh-CN/docs/Learn/CSS/CSS_layout/Grids)默认是响应式的。它们都假设你在尽力创建一个可伸缩网格，而且给了你更容易这样做的方式。

### 多个列

这些布局方式中最老的一个是多个列，即当你指定一个`column-count`的时候，这意指你希望把你的内容分成多少列。浏览器之后会算出这些列的大小，这是一个随着屏幕尺寸变化的尺寸。

```css
.container {
  column-count: 3;
}
```

如果你却去指定`column-width`的话，你是在指定一个*最小*宽度。浏览器会尽可能多数量地创建这一宽度的列，只要它们可以恰当地放进容器里面，然后将所有列之间的剩余空间共享出去。因而列的数量会随着空间的多少而改变。

```css
.container {
  column-width: 10em;
}
```

### 伸缩盒

在伸缩盒中，初始的行为是，弹性的物件将参照容器里面的空间的大小，缩小和分布物件之间的空间。通过更改`flex-grow`和 `flex-shrink`的值，你可以指示在物件遇到周围有更多或者更少的空间的情况下，你所期望的物件表现。

在下面的示例中，和布局专题的[Flexbox: Flexible sizing of flex items](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox#Flexible_sizing_of_flex_items)中所描述的那样，使用了`flex: 1`的简写，可伸缩物件每个将会占据一份可伸缩容器中相等大小的空间。

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> **备注：** 作为一个示例，我们已经重构了上面的简单响应式布局，这次我们用了伸缩盒。你可以看看我们是怎么样才不再需要使用奇怪的百分数值来计算列的尺寸的：[示例](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html)、[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/flex-based-rwd.html)。

### CSS 网格

在 CSS 网格布局中，`fr`单位许可了跨网格轨道可用空间的分布。下面的示例创建了一个有着 3 个大小为`1fr`的轨道的网格容器。这会创建三个列轨道，每个占据了容器中可用空间的一部分。你可以在[Flexible grids with the fr unit](/zh-CN/docs/Learn/CSS/CSS_layout/Grids#Flexible_grids_with_the_fr_unit)下的学习布局网格专题了解更多和这一方式相关的信息。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> **备注：** 网格布局版本的代码要更简单，因为我们可以在.wrapper 上定义列[：示例](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html)，[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/grid-based-rwd.html)。

## 响应式图像

最简单的处理响应式图像的方式是在 Marcotte 的早年的关于响应式设计的文章上所描述的那样。基本来说，你可以用一张有着所需最大尺寸的图像。然后缩放它。这仍然是今日所使用的一种方式，而且在大多数样式表里面，你在某些地方可以找到下面的 CSS：

```css
img {
  max-width: 100%;
}
```

这种方式有显然的弊端。图像有可能会显示得比它的原始尺寸小很多，以至于浪费带宽——一个移动端用户会下载几倍于他们在浏览器窗口中实际看到的大小的图像。此外，你可能不想在移动端和桌面端有相同的图像宽高比例。例如，在移动端，方形图像的表现会很好，但是在桌面端显示同样的内容则应用宽图像。或者，认识到移动端更小尺寸的图像的你也许会希望同时展示一张不同的图像，一张在小一点的屏幕上更容易理解的图像。这些东西不能简单通过缩放图像解决。

响应式图像，使用了{{htmlelement("picture")}}元素和{{htmlelement("img")}} `srcset`和`sizes` 特性，解决了这两个问题。你可以提供附带着“提示”（描述图像最适合的屏幕尺寸和分辨率的元数据）的多种尺寸，浏览器将会选择对设备最合适的图像，以确保用户下载尺寸适合他们使用的设备的图像。

你也可以给用于不同尺寸的图像做“艺术指导”，为不同的屏幕尺寸提供不同的图像裁切或者完全不同的图像。

你可以在 MDN 这里的学习 HTML 一节中找到详细的[响应式图像指南](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)。

## 响应式排版

在早期的工作没有考虑的一个响应式设计的元素是响应式排版的理念。本质上讲，这描述了根据屏幕真实使用范围的多少，在媒体查询的同时改变字体大小。

在本例子中，我们想讲我们的一级标题设置为`4rem`，也就是说它将会有我们的基础字体的四倍大。这真的是个很大的标题！我们只想在大些的屏幕上有这么个超大的标题，那我们先弄个小点的标题，再使用媒体查询，在我们知道用户使用至少`1200px`的屏幕的时候，拿大些的尺寸覆写它。

```css
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

我们已经编辑了我们在上面的响应式网格示例，让它同时包含了使用了圈出方式的响应式类型。你也可以看下随着布局变为两栏，标题是怎样转换大小的。

移动端，标题变小了：

![A stacked layout with a small heading size.](mdn-rwd-font-mobile.png)

但在桌面端，我们看到了大点的标题：

![A two column layout with a large heading.](mdn-rwd-font-desktop.png)

> **备注：** 查看这个编排好的示例：[示例](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html)，[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-rwd.html)。

正如这种排版方式展示的这样，你不需要让媒介查询只能改变页面的布局。它们也能用来调节每个元素，让它们在别的大小的屏幕上更加可用或者更具吸引力。

### 使用视口单位实现响应式排版

一个有趣的方式是使用视口单位`vw`来实现响应式排版。`1vw`等同于视口宽度的百分之一，即如果你用`vw`来设定字体大小的话，字体的大小将总是随视口的大小进行改变。

```css
h1 {
  font-size: 6vw;
}
```

问题在于，当做上面的事情的时候，因为文本总是随着视口的大小改变大小，用户失去了放缩任何使用`vw`单位的文本的能力。**所以你永远都不要只用 viewport 单位设定文本。**

这里有一个解决方法，它使用了[`calc()`](/zh-CN/docs/Web/CSS/calc)，如果你将`vw`单位加到了使用固定大小（例如`em`或者`rem`）的值组，那么文本仍然是可放缩的。基本来说，是`vw`加在了放缩后的值上。

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

这就是说，我们只需要指定标题的字体大小一次，而不是为移动端设定它，然后再在媒介查询中重新定义它。字体会在你增加视口大小的时候逐渐增大。

> **备注：** 查看这种情况的一个编排好的示例： [示例](https://mdn.github.io/css-examples/learn/rwd/type-vw.html)，[源代码](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-vw.html)。

## 视口元标签

如果你看看一张响应式页面的 HTML 源代码，你通常将会在文档的`<head>`看到下面的{{htmlelement("meta")}}标签。

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

这个元标签告诉移动端浏览器，它们应该将视口宽度设定为设备的宽度，将文档放大到其预期大小的 100%，在移动端以你所希望的为移动优化的大小展示文档。

为何需要这个？因为移动端浏览器倾向于在它们的视口宽度上说谎。

这个元标签的存在，是由于原来 iPhone 发布以后，人们开始在小的手机屏幕上阅览网页，而大多数站点未对移动端做优化的缘故。移动端浏览器因此会把视口宽度设为 960 像素，并以这个宽度渲染页面，结果展示的是桌面布局的缩放版本。其他的移动端浏览器（例如谷歌安卓上的）也是这么做的。用户可以在站点中放大、移动，查看他们感兴趣的那部分，但是这看起来很不舒服。如果你不幸遇到了一个没有响应式设计的网站，今天你还会看到这种情况。

麻烦的是，你的带断点和媒介查询的响应式设计不会在移动端浏览器上像预期那样工作。如果你有个窄屏布局，在 480 像素及以下的视口宽度下生效，但是视口是按 960 像素设定的，你将不会在移动端看到你的窄屏布局。通过设定`width=device-width`，你用设备的实际宽度覆写了苹果默认的`width=960px`，然后你的媒介查询就会像预期那样生效。

**所以你应该在你的文档头部*总是*包含上面那行 HTML。**

和视口元标签一起，你可以使用另外几个设定，但大体说来，上面那行就是你想要使用的。

- `initial-scale`：设定了页面的初始缩放，我们设定为 1。
- `height`：特别为视口设定一个高度。
- `minimum-scale`：设定最小缩放级别。
- `maximum-scale`：设定最大缩放级别。
- `user-scalable`：如果设为`no`的话阻止缩放。

你应该避免使用`minimum-scale`、`maximum-scale`，尤其是将`user-scalable`设为`no`。用户应该有权力尽可能大或小地进行缩放，阻止这种做法会引起访问性问题。

## 小结

响应式设计指的是一个响应浏览环境的网页或者应用设计。它涵盖了很多 CSS 和 HTML 的功能和技术，现在基本上就是我们默认建设网站的方式。想一下你在手机上访问的网站，遇到一个缩放的桌面版网站，或者你需要向侧边滚动来寻找东西的网站可能是相当不寻常的。这是因为 Web 已经迁移到了这种响应式设计的方式上。

在这些课里学到的布局方式的帮助下，实现响应式设计也变得愈加简单。如果你今天新近了解 Web 开发，那么你与响应式设计早期相比，手边有多得多的工具。因而，你有必要检查下你所引用的任何材料的年纪。尽管历史上的文章仍然有用，现代的 CSS 和 HTML 的使用让创建一个优雅且实用的设计变得远远更加容易，且无论你的访客使用什么设备浏览网站。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
