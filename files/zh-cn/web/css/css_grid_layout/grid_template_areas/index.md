---
title: 网格模板区域
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
---

{{CSSRef}}

在[上一篇指南](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)中我们着眼于网格线以及如何依赖网格线定位项目。在使用 CSS 网格布局时，因为离不开网格线，所以最直接的方式就是使用网格线来定位项目。不过，还有另一种替代方法用于定位项目，你可以独立使用它，也可把它和基于网格线的定位结合起来。这个方法采用对模板区域命名的方式来定位项目，接下来我们就来弄清如何使用它。很快你就会知道为什么我们有时把这种方法称为网格布局的 ASCII 艺术方法！

## 命名网格区域

我们已经接触过 {{cssxref("grid-area")}} 属性了，它把网格线的 4 个属性值合为 1 个值，用于定位一个网格区域。

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

在用网格线定义网格区域时，我们是通过指定围绕网格区域的四条线来定义的。

![The Grid Area defined by lines](4_area.png)

我们也可以先给一个区域命名，然后在 {{cssxref("grid-template-areas")}} 属性值中指定这个区域的位置。你可以随意为区域命名，比如，如果我要创建下面的布局，我可以先划分出 4 个主要的区域：

- 头部（header）
- 尾部（footer）
- 侧边栏（sidebar)
- 主要内容（content）

![An image showing a simple two column layout with header and footer](4_layout.png)

通过 {{cssxref("grid-area")}} 属性为这些区域各分配一个名字，这不会影响布局。我们现在已经有了用于布局的命名过的区域了。

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

有了这些名字，接下来就可以创建布局了。此前我们是通过在项目自身上指定线序号来定位项目，而现在，则要把完整的布局都写在网格容器中。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('命名网格区域', '300', '330') }}

用这种方法，我们不需要为任何网格项目单独指定属性，所有的定义都在网格容器中。请仔细观察在 {{cssxref("grid-template-areas")}} 属性中是怎样描述布局的。

## 留出空白的网格单元

在上面的例子中，已经实现了用区域填充网格，不留空余空间，不过你也可以用这种布局方法留出空的网格单元。留出空单元的方法是使用句点符，“`.`”。假如想把尾部区域仅显示在主要内容的下方，就应该让侧边栏下面的三个单元格为空。

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    ".  .  .  ft   ft   ft   ft   ft   ft";
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('留出空白的网格单元', '300', '330') }}

为了让布局更整齐，可以使用多个“`.`”符号，如果在多个句点符号之间没有空格，那它们就会被计为一个单元格。用多个句点表示一个单元格的好处是对于复杂的布局来说很容易让行列对齐，这意味着你在 CSS 中看到的，就像是实际布局看起来那样。

## 跨越多个网格单元

在上面的例子中，每个区域都跨越了多个网格单元，为了实现这个效果，要把区域名字在它的区域内重复写多次，中间用空格分隔。你也可以在 `grid-template-areas` 中添加额外的空格以便让列对齐。你可以看到我把 `hd` 和 `ft` 都跟 `main` 对齐了。

用区域名连接起来的区域必须是矩形的，目前还不能创建 L 形的区域，尽管规范中指出未来的版本可能会提供这项功能。你可以像跨列那样实现跨行，举个例子，要让侧边栏向下跨到底部，只需要用 sd 标识替换掉 '.' 符号就可以了。

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('跨越多个网格单元', '300', '330') }}

{{cssxref("grid-template-areas")}} 的值必须是一个完整的网格，否则无效（即这个属性会被忽略掉），这意味着你应该让每一行都有相同数量的单元格，如果出现句点符就表示这个单元格将被留空。如果创建的区域不是矩形，也是无效的网格。

## 用媒体查询重新定义网格

现在我们的布局已经成为了 CSS 的一部分，（通过媒体查询）在 CSS 的多个不同地方修改它也非常容易。你可以重新定义网格、重新定位网格中的项目、甚至完全改变它。

若要（通过媒体查询）重新定义网格，应该把区域名称定义在媒体查询之外，在这种情况下，主要内容区域就总是会被称为 main，不管它被（媒体查询语句）定位在网格中的什么位置。

对于上面的例子，我们可能希望在较窄的宽度下使用非常简单的布局，网格只定义一个列，所有的项目从上到下排列。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}

.wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

把目前的布局放到媒体查询里，并且调整为当空间变得足够宽时，把目前两列的布局改为三列的布局。注意对于宽布局仍保留 9 列轨道，而只是在 `grid-template-areas` 里重新定义了项目的位置。

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 700px) {
  .wrapper {
    grid-template-areas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('用媒体查询重新定义网格', '550', '330') }}

## 在 UI 元素上使用 `grid-template-areas`

许多网上流传的网格例子都假定使用网格来做页面的整体布局，实际上网格对于小元素一样有用。使用 {{cssxref("grid-template-areas")}} 能令人特别愉快，因为你在代码里就能直观地看到的这些元素的布局效果。

### 媒体对象示例

下面我们举一个非常简单的例子，来创建一个“媒体对象”。这个组件由一侧的图片或其他媒体以及另一侧的内容组成，图片将显示在盒子的右边或左边。

![Images showing an example media object design](4_media_objects.png)

定义一个两个列轨道的网格，图片列的尺寸是 `1fr`，文本列的尺寸是 `3fr`。如果你想让图片区域占据固定的宽度，就可以把图片列的尺寸设定一个像素值，把文本区域的尺寸设定为 `1fr`。只有一个 `1fr` 的列轨道的意思是让它占据剩余的空间。

把图片区域命名为 `img`，把文本区域命名为 `content`，然后把它们摆放在 `grid-template-areas` 属性中。

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('媒体对象示例', '300', '200') }}

### 把图片显示在盒子的另一侧

你也许习惯于把图片显示在盒子的另一侧，为了实现这个效果，只需要把网格的 `1fr` 轨道放到后边，把 {{cssxref("grid-template-areas")}} 里的值简单地调换个位置即可。

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media.flipped {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content img";
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media flipped">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('把图片显示在盒子的另一侧', '300', '200') }}

## 网格定义的简写规则

至此我们已经演示了多种定位网格中项目的方法，而且有多个属性用于定义网格，现在我们来学习两个简写方式，它们可以把定义网格及与网格有关的很多内容写在一行 CSS 语句里，非常强大。

这两个简写方式会让别的开发者甚至未来的你自己在阅读你的代码时的感到困难。因为这是规范的一部分，所以你在看示例或者读别人写的代码时偶然会遇到它们，即使你自己选择不使用它们。

在使用难以记忆的简写方式之前，你要知道，简写方式不仅能够一口气把多个属性缩写成一行，它们还会把一些你没有设置过的值、或不能在简写中设置的值**重置成初始值**。所以如果要用简写方式，一定要意识到它可能会把你在别处已经设置过的值给重置了。

这两个用于网格容器的简写方式，分别是显式网格简写 `grid-template`，和网格定义简写 `grid`。

### `grid-template`

{{cssxref("grid-template")}} 属性可同时设置以下属性：

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

这个属性之所以被称为显式网格简写，是因为它设置的都是在定义显式网格时要用到的属性，而不是那些与创建隐式的行或列轨道相关的属性。

下面的代码使用 {{cssxref("grid-template-areas")}} 创建了一个布局，效果与本文前面创建的布局是一样的。

```css
.wrapper {
  display: grid;
  grid-template:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

第一个值是 `grid-template-areas` 的值，并且在每一行的末尾声明了行的大小，也就是 `minmax(100px, auto)` 的作用。

在 `grid-template-areas` 之后用一个左斜杠分隔，再之后是一个详细的列轨道清单。

### `grid`

{{cssxref("grid")}} 简写方式更进一步，它包含了与隐式网格相关的属性，所以通过它可以同时设置以下属性：

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

这个属性会把 {{cssxref("grid-gap")}} 属性的值重置为 `0`，而且你还不能在简写中设置间距值。

你可以像使用 {{cssxref("grid-template")}} 一样使用这个语法，不过要注意的是当它执行时，它会重置一些其他值。

```css
.wrapper {
  display: grid;
  grid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

在读过本指南后面的自动定位和 grid-auto-flow 属性之后，我们会回过头来再看看这个属性提供的其他功能。

如果你通过阅读本指南前面的几篇文章已经开始上手了，那么你应该是用基于线的定位方式或用命名区域的方式来创建网格布局的。花费一些时间用网格去创建常见的布局模式，虽然还有很多的术语要学习，不过语法是非常一目了然的。在你练习开发的过程中可能会遭遇到一些问题，并且用我们没有讲过的方法去解决它们。在本指南后面的文章中，我们将着眼于更多规范中的细节 —— 目标是让你能用它创建出更加复杂的布局。
