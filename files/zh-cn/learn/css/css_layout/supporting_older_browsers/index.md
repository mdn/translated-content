---
title: 支持旧浏览器
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

本文中，我们推荐使用弹性盒和网格作为你的设计的主要布局方式。但是，你的网站的访客会有人使用旧浏览器，或者是不支持你已经使用的方式。这总是 Web 上存在的情况，因为新的特性被开发出来，不同的浏览器会优先支持不同的特性。本文解释了如何使用现代的 Web 技术，而无需让采用旧技术的用户被拒之门外。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        HTML 基础（学习<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 介绍</a
        >），了解 CSS 工作的原理（学习<a
          href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >CSS 介绍</a
        >和<a href="/zh-CN/docs/Learn/CSS/Styling_boxes">样式化盒子</a>）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        理解怎么让你的布局为旧有的、不支持你想要使用的特性的浏览器提供支持。
      </td>
    </tr>
  </tbody>
</table>

## 对于你的站点来说，浏览器生态是怎样的？

每个网站论目标用户都是不同的，在决定采用哪种方式之前，你需要查明使用旧浏览器浏览你的站点的用户的数量。如果你有一个已有的网站，你想要润色或者替换它，这是一件直截了当的事情，因为你很可能有了可用的、可以告诉你人们使用的技术的分析。如果你没有分析，或者这是一个全新的网站，那么例如[Statcounter](http://gs.statcounter.com/)之类的站点可以提供以位置分类的数据。

你应该同样考虑设备的类型和人们使用你的网站的方式。譬如，你可能更想有超出平均数量的移动设备的访问。无障碍和使用辅助性技术的人总应当被考虑，对于一些站点，这问题可能更加重要。以我的经验，开发者经常担心 1% 的使用旧版 IE 的用户的体验，而不去照顾多得多的有无障碍需求的用户。

## 对你想使用的特性的支持如何？

一旦你知道了会访问你的网站的浏览器，你就可以在任何你想使用的技术，与该技术受到的支持以及为不能使用该技术的访客提供一个替代方案的难易度之间做权衡。在 MDN 上，我们在尽力让这个流程变得容易——在每个详述 CSS 属性的页面上提供浏览器的兼容性信息。例如，看一下{{cssxref("grid-template-columns")}}页面。在这个页面底部有一个表格，列出了主流的浏览器，还有它们开始支持这个属性的版本。

![](browser-table.png)

另一个流行的查明一个特性有多受到支持的方式是[Can I Use](https://caniuse.com/)网站。这个网站列出了主流的 Web 平台特性，附有它们的浏览器支持信息。你可以按位置查看使用数据——在你致力于一个用户大多数是世界上的某个区域的网站的时候会有用。你甚至可以链接你的 Google Analytics 账户，得到基于你的用户的信息。

理解你的用户拥有的技术，以及支持你可能想要使用的东西，这样你就可以很好地作出你的所有决定，知道最多能多好地支持所有用户。

## 支持不意味着“看起来一样”

一个网站可能不会在所有浏览器上看起来都一样，因为你的一些用户将会是在一部手机上，而另一些用户是在桌面大屏幕上浏览你的网站；类似地，你的一些用户会是使用旧版浏览器的，而另外一些是最新版；你的一些用户可能是在聆听由屏幕阅读器朗读的你的内容，或者已经放大了页面来读到内容。支持所有人意味着提供保守设计版本的你的内容，这样在现代浏览器上，它会看起来很棒，而对于旧浏览器用户而言仍然以最低限度可用。

基本级别的支持来源于良好地组织你的内容，从而让你的页面的正常布局流有意义。一个使用非常局限的功能手机的用户可能不怎么会体验到你的 CSS，但是内容会以让阅读容易的方式流过。因而你应该总是从一个良好组织的 HTML 文档开始。_如果你移除掉你的样式表，你的内容还能被理解吗？_

一个选项是，把站点的这种原始视图作为回滚，用在使用很老旧或者受局限的浏览器的用户身上。如果你没有多少来到站点的人是使用这些浏览器的，将时间花在尝试给予他们和使用现代浏览器类似的体验上可能没有商业价值。将时间花在让站点具备更多无障碍的事情上，以服务远远更多的用户，可能会是更好的做法。这样的做法在纯 HTML 页面和花里胡哨之间是有余地的，CSS 事实上让建立这些回滚变得简明。

## 在 CSS 中构建回滚

CSS 规范包含了在一个物件上同时应用两种布局的时候，解释浏览器如何反应的信息。例如，规范定义如果一个浮动元素同时又是用 CSS 网格布局实现的网格元素（Grid Item）的时候会发生什么。结合浏览器会忽略掉它不会理解的 CSS 的特点组合起来，你就得到了使用我们已经提到的[传统技术](/zh-CN/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)构建简单布局的方法，在可以理解你的网格布局的现代浏览器中，传统布局方法会被网格布局覆写掉。

在下面的示例中，我们已经浮动了三个`<div>`，所以它们显示在了一行中。任何使用不支持[CSS 网格布局](/zh-CN/docs/Learn/CSS/CSS_layout/Grids)的浏览器的人将会看到以浮动布局实现的一列盒子。一个成为了网格物件的浮动物件失去了浮动的动作，就是说通过把 wrapper 变成网格容器，浮动物件变成了网格物件。如果浏览器器支持网格布局，它会显示网格视图，否则它会忽略`display: grid`相关的属性，使用浮动布局。

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{ EmbedLiveSample('在 CSS 中构建回滚', '100%', '200') }}

> **备注：**{{cssxref("clear")}}属性也在被清除的物件变为网格物件的时候失效，所以你应该在一个会变成网格布局的布局上，加上被清除的尾部。

### 回滚方式

有很多布局方式，它们同这个浮动示例使用的方式是类似的。你可以选择能够与你需要建立的布局范式符合得最好的那个。

- 浮动和**清除**
  - : 如上所示，如果浮动和清除的物件变成了弹性或网格物件，浮动和清除属性不再影响布局。
- display: inline-block
  - : 这种方式能被用来建立列布局，如果一个物件被设为`display: inline-block`，但是之后变成了弹性或者网格物件，inline-block 行为将会被忽略。
- display: table
  - : 这种在这几节课的[介绍](/zh-CN/docs/Learn/CSS/CSS_layout/Introduction)中描述的建立 CSS 表格的方式可以被用作回滚。被设为 CSS 表格布局的物件将会在它们变为弹性或者网格物件的时候不再表现出这种行为。重要的是，被建立起来用于修复表格结构的匿名盒子没有被建立起来。
- Multiple-column Layout
  - : 对于某些布局，你能用[multi-col](/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)作为回滚。如果你的容器有任何一个`column-*`属性被定义，之后变成了网格容器，那么多列行为不会实现。
- 作为网格的回滚的弹性盒
  - : [弹性盒](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)由于受到了 IE10 和 IE11 的支持，比网格有着更好的浏览器支持。不过，在这节课的稍后部分，你一定要看下旧浏览器对弹性盒相当参差不齐而且令人困惑的支持的相关信息。如果你把弹性容器做成了网格容器，任何应用到子元素的`flex`属性都会被忽略。

对于许多在旧浏览器中微调的布局来说，你可能会发现你能用这种方式使用 CSS，给访客亲切的体验。我们加入了一个更简单的基于旧的和受到良好支持技术的布局，然后用新一些的 CSS 建立一个可以由 90% 的用户看到的布局。但是存在这样的情况：回滚代码会需要包含新浏览器也能理解的东西；举例来说就是，我们要往我们的浮动物件中加入百分数宽度，从而让列看起来更像网格，拉伸以充满容器。

在浮动布局中，百分数是依照容器计算的——33.333% 是容器宽度的三分之一。但在网格中，这 33.333% 是根据物件所在的网格区域计算的，所以只要网格布局引入进来，物件的大小实际上变成了我们想要的大小的三分之一。

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
  width: 33.333%;
}
```

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{ EmbedLiveSample('回滚方式', '100%', '200') }}

为了处理这种问题，我们需要有能够探测网格是否受到支持的方法，也就是探测它是否会覆写宽度的方法。CSS 在这里为我们提供了一个解决方法。

## 特性查询

特性查询允许你测试一个浏览器是否支持任何特定的一个 CSS 特性。这就是说，你可以写一些面向不支持某项特性的浏览器的 CSS，然后检查以了解浏览器是否支持，如果支持的话就可以加进你的复杂布局了。

如果我们向上面的示例中加入了一条特征查询，要是我们知道网格受到支持的话，我们可以用它把我们的物件宽度设定回`auto`。

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
    width: auto;
  }
}
```

```html
<div class="wrapper">
  <div class="item">Item One</div>
  <div class="item">Item Two</div>
  <div class="item">Item Three</div>
</div>
```

{{ EmbedLiveSample('特性查询', '100%', '200') }}

对特性查询的支持，在各现代浏览器中都是很好的。但是你应该注意那些既不支持 CSS 网格，也不支持特征查询的浏览器。这就是说在上面详细介绍的一种方式，对这些浏览器而言，会表现得很好。我们要做的是，先在任何特性查询以外，编写我们的旧 CSS。不支持网格也不支持特性查询的浏览器会使用这部分它们可以理解的布局信息，将其他东西全都忽略掉。支持特性查询和 CSS 网格等的浏览器会运行网格代码和特性查询之内的代码。

对于特性查询的规范，也包含了测试浏览器是否支持某个特性的能力——这只在浏览器支持特性查询的时候有用。未来，一种检测支持的缺失的方式将会实现，同时不支持特性查询的浏览器也将退出历史舞台。但是现在，你要使用这种编写旧 CSS 的方式，然后覆写它，以求最广泛的支持。

## 弹性盒的旧版本

在旧版浏览器中，你可以找到弹性盒规范的旧有修订版本。在编写这篇文章的时候，这大多数是 IE10 的问题，它在弹性盒上使用了`-ms-`前缀。这也意味着现在还存在着一些过时的文章和教程，[这篇有用的指导](https://css-tricks.com/old-flexbox-and-new-flexbox/)帮助你分辨你看到的信息；如果你需要在很旧的浏览器中需要 flex 支持的话，它也会帮到你。

## IE10 和 IE11 的带前缀版的网格

CSS 网格规范最初成形于 IE10，也就是说尽管 IE10 和 IE11 不支持*现代的*网格，虽然这种网格和本站记载的现代布局不同，它们还是有一个很堪用的网格布局版本。IE10 和 IE11 的实现是以`-ms-`为前缀的，也就是说你可以给这两个浏览器用，而在非微软浏览器上，这种属性会被忽略。不过 Edge 仍然能理解旧语法，所以小心点，让每个东西都安全地在你的现代网格 CSS 中覆写。

[网格布局渐进增强](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)指导能帮你理解 IE 版的网格，我们在这节课的末尾加入了一些额外的有用的链接。不过，除非你有很多使用旧版 IE 的访客，你可能发现专注于建立一个由所有不支持的浏览器共用的回滚版本是一个更好的选择。

## 测试旧浏览器

由于大多数浏览器都支持弹性盒和网格，测试旧浏览器想想就很难。一种方式是使用在线的测试工具，例如 Sauce Labs，在[跨浏览器测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)模块里有详细说明。

你也可以下载安装虚拟机，在你的电脑的容器环境中运行旧版浏览器。能够使用旧版 IE 是很有用的，为此，微软已经制作了[一些可以免费下载的虚拟机](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)。这些对 Mac、Windows 和 Linux 操作系统都是可以用的，所以即使你没有 Windows 电脑，这也是一个测试旧的和现代 Windows 浏览器的绝佳办法。

## 小结

你现在有了自信地使用例如网格和弹性盒技术、建立面向旧浏览器的回滚以及利用任何可能会在未来出现的 新技术所需的知识。

## 参见

- [在 CSS 中使用媒体查询](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
- [弹性盒的后向兼容性](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Backwards_compatibility_of_flexbox)
- [CSS 网格布局和渐进优化](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
- [使用 CSS 网格：支持没有网格的浏览器](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/)
- [使用 IE10 和 IE11 版网格的教程](https://24ways.org/2012/css3-grid-layout/)
- [我应该尽力使用 IE10 的网格布局实现吗？](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/)
- [有特性查询的层叠式 Web 设计](https://24ways.org/2017/cascading-web-design/)
- [使用特性查询（视频）](https://gridbyexample.com/learn/2016/12/24/learning-grid-day24/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
