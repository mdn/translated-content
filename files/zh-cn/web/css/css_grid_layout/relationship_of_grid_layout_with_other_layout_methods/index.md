---
title: 网格布局和其他布局方法的联系
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
---

{{CSSRef}}

CSS 网格布局作为实现布局的一个完整系统，其设计使之和 CSS 其他部分能协同合作。在这个指南中，我会向你解释网格布局是如何与你正在使用的其他技巧协同合作的。

## 网格和弹性盒

CSS **网格布局**和**弹性盒布局**的主要区别在于 [CSS 弹性盒布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)是为一维布局服务的（沿横向或纵向的），而网格布局是为二维布局服务的（同时沿着横向和纵向）。这两个规格有一些相同的特性。如果你已经掌握如何使用弹性盒布局的话，你可能会想知道这些相似之处怎样在能帮助你掌握网格布局。

### 一维布局 vs. 二维布局

一个简单的示例可以说明一维和二维布局的区别。

这个示例中我用弹性盒布置了一些盒子。容器中有 5 个元素，它们被设置了伸缩属性，在 150px 基准上伸缩。

我还设置了 {{cssxref("flex-wrap")}} 属性为 `wrap`，从而当容器变得太窄时，元素会换到新的一行。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 150px;
}
```

{{ EmbedLiveSample('一维布局 vs. 二维布局', '500', '230') }}

你可以看到有两个元素被换到了新行。这两个元素共享了这行的可用空间，并没有与上一行的元素对齐。这是因为当你允许弹性元素换行时，每个新行都变成了一个新的弹性容器。空间分布只在行内进行。

从而产生了一个常见问题：如何能让这些元素对齐？这时你需要一种二维布局的方法，你希望通过行和列来控制对齐，是时候该网格登场了。

### 用 CSS 网格达成同样布局

下例中我用网格创建同样的布局。这次我们有 3 个 `1fr` 的列轨道。我们并不需要给这些子元素设置任何属性，它们会自动按顺序填充到网格的单元格中。你可以看到它们按网格规整的排列，行与行、列与列对齐。当有 5 个子元素时，第二行的尾部会留出一个空隙。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

{{ EmbedLiveSample('用 CSS 网格达成同样布局', '300', '170') }}

当抉择该用网格还是弹性盒时，你可以问自己一个简单的问题：

- 我只需要按行或者列控制布局？那就用弹性盒子
- 我需要同时按行和列控制布局？那就用网格

### 从内容出发还是从布局入手？

除了一维和二维布局之间的区别，还有一种办法决定该使用弹性盒还是网格来布局。弹性盒从内容出发。一个使用弹性盒的理想情形是你有一组元素，希望它们能平均地分布在容器中。你让内容的大小决定每个元素占据多少空间。如果元素换到了新的一行，它们会根据新行的可用空间决定它们自己的大小。

网格则从布局入手。当使用 CSS 网格时，你先创建网格，然后再把元素放入网格中，或者让自动放置规则根据把元素按照网格排列。我们能创建根据内容改变大小的网格轨道，但整个轨道的大小都会随之改变。

当你使用弹性盒，并发现自己禁用了一些弹性特性，那你可能需要的是 CSS 网格布局。例如，你给一个弹性元素设置百分比宽度来使它和上一行的元素对齐。这种情况下，网格很可能是一个更好的选择。

### 盒对齐

对于很多人来说，弹性盒特性最让人激动的一点是我们第一次拥有了正当的对齐能力。这让一个盒子在页面里中心对齐变得简单。弹性元素还可以使自己延伸到和容器等高，意味我们能实现等高列。长久以来，我们都想实现这些行为，并一直在用一些所谓“技巧”去达到起码的视觉效果。

弹性盒特性已经被加入到新的规范 [Box Alignment Level 3](https://drafts.csswg.org/css-align/)。意味它们能被用在包括网格布局的其他规范中。它们未来也可能被用在其他的布局方法中。

本系列后续的指南中我会正式介绍盒对齐（Box Alignment）和它在网格布局中是如何工作的。不过现在我们先看一个比较弹性盒和网格的简单示例。

在这第一个示例中，我使用了弹性盒，一个容器内有三个元素。wrapper 设定了 {{cssxref("min-height")}}，确定了弹性容器的高度。我还在弹性容器中设定 {{cssxref("align-items")}} 为 `flex-end`，因此子元素会从弹性容器尾部开始排列。我还在 `box1` 上设定了 {{cssxref("align-self")}} 属性，这会覆盖默认值，使它延长至容器的高度，而 `box2` 则与弹性容器的起点对齐。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
```

{{ EmbedLiveSample('盒对齐', '300', '230') }}

### CSS 网格中的对齐

这个第二个示例使用了网格创建一个同样的布局。这次我们使用了应用于网格布局的盒对齐属性。因此我们是相对网格而不是弹性盒的起始对齐。对于网格来说，我们是让元素在它们各自的网格区域中对齐。在本例中就是一个单元格，但它也可能是多个单元格组成的一个区域。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
```

{{ EmbedLiveSample('CSS 网格中的对齐', '200', '310') }}

### `fr` 单位和 `flex-basis` 属性

我们已经看到了 `fr` 单元如何在网格容器中分配一定比例的可用空间到我们的网格轨道。当与 {{cssxref("minmax", "minmax()")}} 函数结合使用时，`fr` 单元可以给我们与弹性盒中的 `flex` 属性非常相似的行为——同时仍然可以创建二维布局。

之前我们通过示例验证了一维布局和二维布局的差异，可以发现这两种布局方式对响应式的处理存在着不同。对于弹性布局，当我们拖拽以改变浏览器大小时，弹性盒会根据可用空间适当的调整行中元素的个数。当有足够的空间时，全部的 5 个元素全部在一行展示，当容器变的过窄时，每行则只能展示一个元素。

相较而言，网格布局则始终保持 3 列轨道。轨道会自动拉伸，但始终会保持我们定义网格时的轨道数量，也就是 3 个。

#### 自动填充网格轨道

我们可以通过使用 `repeat` 方法，配合 `auto-fill` 和 `auto-fit` 属性，创建类似弹性盒的效果，同时保证内容严格按照行和列的固定规则排列。

在接下来的示例中，在 `repeat` 方法中使用 `auto-fill` 属性替换整数值，并且设置轨道的宽度为 200px。这意味着网格布局将会根据容器的宽度创建最多的宽度为 200px 的列轨道。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{ EmbedLiveSample('自动填充网格轨道', '500', '170') }}

### 灵活的轨道数量

到这为止就和弹性盒布局不太一样了。在弹性盒布局示例中，子元素在被包裹起来之前大于基准的 200px。我们可以用使用网格布局中的 `auto-fill` 和 {{cssxref("minmax", "minmax()")}} 函数实现同样的功能。在这个示例中，我创建了一个用 `minmax` 自动填充的轨道。我想要这个轨道的元素最小有 200px，最大 `1fr` 的宽度。一旦浏览器计算出有多少个 200px 会填充到这个容器里面，并算好网格间距，那么，浏览器就会把剩余的空间等分成以最大 `1fr` 单位计算的区域给其他元素。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

{{ EmbedLiveSample('灵活的轨道数量', '500', '170') }}

我们现在创建了具有灵活的轨道数量的网格，但可以看到网格中的元素同时按行和列对齐。

## 网格和绝对定位元素

网格可以与绝对定位的元素进行交互，如果要将某个元素放置在网格或网格区域内，这可能很有用。该规范定义了当网格容器是包含块并且网格容器是绝对定位的元素的父级时的行为。

### 作为包含块的网格容器

要使网格容器成为一个包含块，需要为容器增加 `position` 属性，并把它的值设置为 `relative`，就像为任何其他绝对定位的元素创建一个包含块一样。接下来，如果再把一个网格元素设置为 `position: absolute`，那么网格容器就成为包含块，或者如果该元素具有网格定位的属性，那么被放置的网格就成为包含块。

在下面的示例中，一个容器中包含了四个子项。第三项是绝对定位的，并且使用基于行定位的方式把自己放置在网格中。网格容器具有 `position: relative` 属性，因此网格就成为该元素的定位上下文。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    This block is absolutely positioned. In this example the grid container is
    the containing block and so the absolute positioning offset values are
    calculated in from the outer edges of the area it has been placed into.
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{ EmbedLiveSample('作为包含块的网格容器', '500', '330') }}

可以看到该元素占据的区域是纵向的第 2 条线到第 4 条线，横向起于第 1 条线。然后使用 `top` 和 `left` 属性在该区域中进行偏移。就像通常绝对定位的元素会脱离标准文档流一样，该元素也脱离了文档流，被自动定位规则定位在包含块中。因为该元素脱离了文档流，所以不会再创建一个跨越纵向第 3 条线的轨道。

你可以试试看，如果把规则 `position: absolute` 从 `.box3` 的样式中移除掉，没有定位的元素会如何显示。

### 作为父级的网格容器

如果具有绝对定位的子元素的父级是网格容器，即使网格容器没有被设置为新的定位上下文，该子元素仍会脱离文档流。定位是基于定位上下文的，和这其他布局方式没有区别。在我们的示例中，如果把容器的 `position: relative` 属性移除掉，定位上下文就变成了当前视口，像下图中显示的那样。

![包含父级的网格容器的图像](2_abspos_example.png)

此外，该元素不再被视为网格布局的一部分，当网格中其他元素调整尺寸或自动布局时，都与该元素无关。

### 以网格区域作为父级

如果绝对定位的元素嵌套在网格区域内，该区域则成为该元素的参照语境。在下面的示例中，网格和上例相同，但是这次我们在网格 `.box3` 里嵌套了一个元素。

`.box3` 被设置了 `position: relative` 属性，其子元素设置了定位的偏移属性。此时，子元素的定位的参照语境就变成了网格区域。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
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
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    Three
    <div class="abspos">
      This block is absolutely positioned. In this example the grid area is the
      containing block and so the absolute positioning offset values are
      calculated in from the outer edges of the grid area.
    </div>
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #000;
  padding: 10px;
}
```

{{ EmbedLiveSample('以网格区域作为父级', '500', '460') }}

## 网格和 display: contents

最后一个值得关注的与其他布局规范的交互是 CSS 网格布局与 `display: contents` 之间的交互。`display` 属性的 `contents` 值是[显示规范](https://drafts.csswg.org/css-display/#box-generation)中描述的新值，如下所示：

> “元素本身不会生成任何盒子，但其子元素和伪元素仍然会像平常一样生成盒子。（用户代理）为了生成盒子和布局，必须将元素视为已在文档树中被其子元素和伪元素替换。“

如果将元素设置为 `display: contents`，通常自身的盒子会消失，子元素的盒子仍显示，就像子元素在文档树中上升了一层。这意味着一个网格元素的子元素可以成为网格元素。听起来很奇怪？下面是一个简单的示例。

### 网格布局与子元素嵌套

在下面的网格中，第一个元素设置为跨越三个列轨道，它包含三个嵌套的元素，由于这些元素不是直接子元素，因此它们不会成为网格布局的一部分，因此使用常规的块布局进行显示。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{ EmbedLiveSample('网格布局与子元素嵌套', '400', '440') }}

### 使用 display: contents

现在如果将 `display：contents` 添加到 `box1` 的样式规则中，则该元素的盒子将消失，子元素成为网格元素，并且应用自动定位规则放置在网格中。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{ EmbedLiveSample('使用 display: contents', '400', '330') }}

这可以让元素嵌套到网格中，就好像它们是网格的一部分一样，并且可以用它解决 `subgrid` 值尚未实现时要解决的一些问题。也可以在弹性盒布局中用类似的方法通过 `display: contents` 使嵌套的元素成为弹性元素。

正如本文中所述，CSS 网格布局只是你的工具包的一部分。不要害怕在布局时将它与其他布局方法混用，大胆用它获得你想要的效果吧。

## 参见

- [弹性盒子指南](/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
- [多列布局指南](/zh-CN/docs/Web/CSS/CSS_multicol_layout)
