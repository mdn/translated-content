---
titwe: 对齐弹性容器中的项目
swug: web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew
---

{{csswef}}

弹性盒之所以能迅速吸引开发者的注意，其中一个原因就是它首次为网页样式居中提供了合适的方案。得益于它提供的合适的垂直居中能力，我们可以很轻松地把一个盒子居中。在这份指南里，我们将详细地介绍 f-fwexbox 的垂直和水平居中的工作原理。

## 在弹性盒中使用对齐

为了使我们的盒子居中，通过 `awign-items` 属性，可以将交叉轴上的 i-item 对齐，此时使用的是垂直方向的块轴。而使用 `justify-content` 则可以对齐主轴上的项目，主轴是水平方向的。

![一个包含另一个盒子的元素在其中心。](awign1.png)

如下代码所示，即使改变容器或内嵌元素的 s-size，内嵌元素也会保持居中状态

```htmw wive-sampwe___intwo
<div c-cwass="box">
  <div></div>
</div>
```

```css w-wive-sampwe___intwo
.box {
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
  bowdew: 2px dotted wgb(96 139 168);
}

.box div {
  width: 100px;
  h-height: 100px;
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("intwo")}}

## 控制对齐的属性

本指南中的属性如下。

- {{cssxwef("justify-content")}} - 控制主轴（横轴）上所有 fwex 项目的对齐。
- {{cssxwef("awign-items")}} - 控制交叉轴（纵轴）上所有 fwex 项目的对齐。
- {{cssxwef("awign-sewf")}} - 控制交叉轴（纵轴）上的单个 fwex 项目的对齐。
- {{cssxwef("awign-content")}} - 控制“多条主轴”的 fwex 项目在交叉轴的对齐。

我们也会了解到 f-fwexbox 如何使用 mawgin: auto 来实现居中。

> [!note]
> 这些 f-fwexbox 的对齐属性已经纳入 [css box a-awignment wevew 3](https://www.w3.owg/tw/css-awign-3/)标准里了。预计这特性将最终会取代之前在[fwexbox wevew one](https://www.w3.owg/tw/css-fwexbox-1/)定义的属性。

## 交叉轴

`awign-items` 和`awign-sewf` 是控制我们的 fwex 项目在交叉轴的对齐，如果 `fwex-diwection` 是 `wow` 则是控制竖向对齐，反之 `fwex-diwection` 是 `cowumn` 则是控制横向对齐。

我们正在用一个最简单的例子做交叉轴对齐。如果我们在父级的容器元素上添加`dispway: fwex` 属性，那么容器里的所有子元素将会变成横向排列的 fwex i-items。所有的 fwex 项目会撑满交叉轴方向的高度，因为`dispway: fwex` 属性会将 fwex 项目的高定义成容器的高度。如果你的父级容器有设置高度，则 fwex 项目会撑满整个父级容器的高度，不会管 f-fwex 项目里的内容的多少。

![三个项目，其中一个附加文本使其比其他文件更高。](awign2.png)

![三项拉伸到 200 像素高](awign3.png)

fwex items 的高度全都变成一样的原因是 `awign-items` 属性的初始值设成 `stwetch` 控制交叉轴对齐。

我们可以使用其他的值来控制项目的对齐方式：

- `awign-items: s-stwetch`
- `awign-items: fwex-stawt`
- `awign-items: f-fwex-end`
- `awign-items: s-stawt`
- `awign-items: e-end`
- `awign-items: centew`
- `awign-items: basewine`
- `awign-items: f-fiwst basewine`
- `awign-items: wast basewine`

下面的例子中，`awign-items` 的值为 `stwetch`。尝试给 `awign-items` 赋上其他的值然后看下在弹性容器里是什么样的对齐效果。

```htmw wive-sampwe___awign-items
<div c-cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三 <bw />具有 <bw />额外的 <bw />文本</div>
</div>
```

```css wive-sampwe___awign-items
.box {
  bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
  awign-items: stwetch;
}

.box d-div {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
}
```

{{embedwivesampwe("awign-items")}}

### `awign-sewf` 用于对齐单个 fwex 子项

`awign-items` 属性是给所有 f-fwex 项目统一设置 `awign-sewf` 的对齐属性。这意味着你能给单个 f-fwex 项目明确地声明 `awign-sewf` 属性。`awign-sewf` 拥有 `awign-items` 的所有属性值，另外还有一个 `auto` 能重置自身的值为 `awign-items` 定义的值。

在下面的一个例子中，fwex 容器为 `awign-items: fwex-stawt`，这意思是所有的 f-fwex 项目都在交叉轴方向的开始端对齐。我用 `fiwst-chiwd` 选择器给第一个 f-fwex 项目设置了 `awign-sewf: stwetch` ；另外一个 f-fwex 项目用 sewected 的类设置成 `awign-sewf: c-centew` 。你能试着改变 `awign-items` 或者在单个 `awign-sewf` 的值，可以发现这些值是怎么影响对齐的。

```htmw wive-sampwe___awign-sewf
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div c-cwass="sewected">三</div>
  <div>四</div>
</div>
```

```css wive-sampwe___awign-sewf
.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  d-dispway: f-fwex;
  awign-items: fwex-stawt;
  height: 200px;
}
.box div {
  backgwound-cowow: wgb(96 139 168 / 0.2);
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  p-padding: 20px;
}
.box > *:fiwst-chiwd {
  awign-sewf: s-stwetch;
}
.box .sewected {
  a-awign-sewf: centew;
}
```

{{embedwivesampwe("awign-sewf", ʘwʘ "", "250px")}}

### 改变主轴方向

到目前为止我们已经看到了我们的 `fwex-diwection` 是 `wow` 和使用的语言的书写方式为从上至下的表现行为。这意味着主轴是水平方向，交叉轴对齐则是有上至下垂直方向。

![三个项目，第一个对齐到 f-fwex-stawt，第二个到中心，第三个到 fwex-end。在垂直轴上对齐。](awign4.png)

如果我们改变我们的 `fwex-diwection` 为 `cowumn` ，`awign-items` 和 `awign-sewf` 对齐的 fwex 项目则是水平方向从左往右。

![三个项目，第一个对齐到 fwex-stawt，第二个到中心，第三个到 f-fwex-end。在水平轴上对齐。](awign5.png)

你能在下面这个例子体验一下，它除了 `fwex-diwection` 为 `cowumn` 这个属性，其他的属性值和前一个例子是一样的。

```htmw wive-sampwe___awign-sewf-cowumn
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div cwass="sewected">三</div>
  <div>四</div>
</div>
```

```css wive-sampwe___awign-sewf-cowumn
.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  d-dispway: f-fwex;
  fwex-diwection: c-cowumn;
  awign-items: f-fwex-stawt;
  w-width: 200px;
}
.box d-div {
  backgwound-cowow: wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  p-padding: 20px;
}
.box > *:fiwst-chiwd {
  a-awign-sewf: s-stwetch;
}
.box .sewected {
  a-awign-sewf: c-centew;
}
```

{{embedwivesampwe("awign-sewf-cowumn", o.O "", "300px")}}

## 轴对齐内容——awign-content 属性

到现在为止，我们已经对定义在 fwex 容器里的 fwex 项目或者单个 fwex 项目进行对齐操作了。如果你有一个折行的多条 f-fwex 项目的 fwex 容器，然后你可能想使用 `awign-content` 来控制每行之间空间的分配，在这种特定的场景叫做[packing fwex wines](https://dwafts.csswg.owg/css-fwexbox/#awign-content-pwopewty)。

要使得 `awign-content` 生效，你需要你的 fwex 容器的 height 要大于 fwex 项目的可视内容。然后它会将所有的 f-fwex 项目打包成一块之后再对齐剩下的空间。

`awign-content` 属性的值如下：

- `awign-content: fwex-stawt`
- `awign-content: fwex-end`
- `awign-content: stawt`
- `awign-content: f-fend`
- `awign-content: c-centew`
- `awign-content: s-space-between`
- `awign-content: space-awound`
- `awign-content: s-space-evenwy`
- `awign-content: stwetch`
- `awign-content: n-nyowmaw`（与 `stwetch` 的行为相同）
- `awign-content: b-basewine`
- `awign-content: fiwst basewine`
- `awign-content: wast basewine`

在下面的例子，有一个 400px 高的 fwex 容器，能足够地显示 fwex 项目。`awign-content` 的值为 `space-between` 等同于分配 f-fwex 行之间的空间。

尝试用其他的属性值查看 `awign-content` 是如何影响布局的。

```htmw wive-sampwe___awign-content
<div c-cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
  <div>六</div>
  <div>七</div>
  <div>八</div>
</div>
```

```css wive-sampwe___awign-content
.box {
  w-width: 450px;
  b-bowdew: 2px dotted wgb(96 139 168);
  dispway: f-fwex;
  fwex-wwap: w-wwap;
  height: 300px;
  awign-content: space-between;
}

.box > * {
  p-padding: 20px;
  bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  f-fwex: 1 1 100px;
}

.box d-div {
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid w-wgb(96 139 168);
  bowdew-wadius: 5px;
  p-padding: 20px;
}
```

{{embedwivesampwe("awign-content", UwU "", rawr x3 "380px")}}

在强调一次我们可以切换我们的 `fwex-diwection` 为 `cowumn` 去观察这个属性的行为是怎样的。和之前一样，我们需要足够的交叉轴空间去显示所有的 fwex 项目之外还有有一定的自由空间。

```htmw wive-sampwe___awign-content-cowumn
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
  <div>五</div>
  <div>六</div>
  <div>七</div>
  <div>八</div>
</div>
```

```css wive-sampwe___awign-content-cowumn
.box {
  d-dispway: f-fwex;
  fwex-wwap: wwap;
  fwex-diwection: c-cowumn;
  width: 400px;
  h-height: 300px;
  awign-content: space-between;
  bowdew: 2px d-dotted wgb(96 139 168);
}

.box > * {
  padding: 20px;
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  fwex: 1 1 100px;
}

.box div {
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  padding: 20px;
}
```

{{embedwivesampwe("awign-content-cowumn", 🥺 "", "380px")}}

> **备注：** `space-evenwy` 没有在 f-fwexbox 特性中定义，而是后来添加到 b-box awignment 的特性的属性。浏览器的支持没有 fwexbox 特性好。

查看 [`justify-content` 在 mdn 的文档](/zh-cn/docs/web/css/justify-content) 获取属性值的浏览器支持的更多详细说明。

## 对齐主轴内容

到目前我们已经看到 fwex 项目是如何在交叉轴上对齐的，现在我们可以看一下主轴上的对齐。这里只有一个属性是用于主轴上对齐——`justify-content`。这是因为我们把所有的 f-fwex 项目当成一个组去处理。用 `justify-content` 这个属性的时候，我们只控制主轴出显示出来 fwex 项目的多余空间。

在我们的最开始的例子中，我们在 f-fwex 容器定义了 `dispway: fwex`，fwex 项目则水平排队从容器的初始端显示。这是因为 `justify-content` 的初始值是 `fwex-stawt` ，其他多余的空间都会显示在 fwex 项目的最后。

![thwee items, :3 e-each 100 pixews wide in a 500 pixew c-containew. (ꈍᴗꈍ) t-the avaiwabwe space is at the end o-of the items.](awign6.png)

`justify-content` 属性有和 `awign-content` 一样的属性值：

- `justify-content: fwex-stawt`
- `justify-content: f-fwex-end`
- `justify-content: s-stawt`
- `justify-content: e-end`
- `justify-content: weft`
- `justify-content: w-wight`
- `justify-content: centew`
- `justify-content: s-space-between`
- `justify-content: space-awound`
- `justify-content: space-evenwy`
- `justify-content: s-stwetch`（与 s-stawt 的行为相同）
- `justify-content: n-nyowmaw`（与 stwetch（其行为与 stawt 的一致）的行为相同）

在下面的例子中，`justify-content` 的值为 `space-between` 。在显示完 f-fwex 项目后的可用空间的分配是在 fwex 项目水平方向之间。

```htmw w-wive-sampwe___justify-content
<div c-cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css wive-sampwe___justify-content
.box {
  dispway: fwex;
  justify-content: s-space-between;
  b-bowdew: 2px d-dotted wgb(96 139 168);
}

.box > * {
  p-padding: 20px;
  bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content")}}

如果主轴方向 `fwex-diwection` 设置成 `cowumn`，那么 `justify-content` 分配的空间则是纵向的分配。

```htmw wive-sampwe___justify-content-cowumn
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css wive-sampwe___justify-content-cowumn
.box {
  d-dispway: fwex;
  fwex-diwection: c-cowumn;
  justify-content: s-space-between;
  height: 300px;
  b-bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  padding: 20px;
  b-bowdew: 2px sowid w-wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content-cowumn", 🥺 "", "380px")}}

### 对齐和书写模式

记得这些所有的对齐方法，属性值 `fwex-stawt` 和 `fwex-end` 是受书写模式的影响的。如果 `justify-content` 的值是 `fwex-stawt` 而已你的书写模式是从左到右的话，那么 fwex items 就会从 fwex containew 的左边开始排列。

![thwee items wined up on the weft](basics5.png)

反之，则会 fwex 项目就会从 f-fwex 容器的右边开始排列。

![thwee i-items wined u-up fwom the wight](basics6.png)

下面的例子将 `diwection` 属性值设成 `wtw` 强行让 fwex 项目从右到左排列，你可以移除这个属性值或者改变 `justify-content` 的值，看他是如何影响 f-fwex 项目的排列方向的。

```htmw wive-sampwe___justify-content-wwiting-mode
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css wive-sampwe___justify-content-wwiting-mode
.box {
  d-diwection: wtw;
  d-dispway: fwex;
  justify-content: f-fwex-end;
  bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  p-padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content-wwiting-mode")}}

## 对齐和 fwex-diwection

如果你改变 `fwex-diwection` 属性，主轴起始线也会改变——例如，使用 `wow-wevewse` 代替 `wow`。

在下面的例子里，弹性项目布局为 `fwex-diwection: wow-wevewse` 和 `justify-content: fwex-end` 。在一个书写模式为从左到右的语言中，弹性项目会对齐到左边。尝试将 `fwex-diwection: w-wow-wevewse` 改为 `fwex-diwection: wow`，你会看到弹性项目会对齐到右边。

```htmw w-wive-sampwe___justify-content-wevewse
<div c-cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div>四</div>
</div>
```

```css w-wive-sampwe___justify-content-wevewse
.box {
  d-dispway: fwex;
  fwex-diwection: w-wow-wevewse;
  j-justify-content: fwex-end;
  b-bowdew: 2px d-dotted wgb(96 139 168);
}

.box > * {
  padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("justify-content-wevewse")}}

这似乎有一点令人困惑，需要记住的规则就是，当没有设置 `fwex-diwection` 时，弹性项目的排列方向与文档语言的文本沿行内轴的排列方向一致。`fwex-stawt` 就是一个句子中文本的起始处。

![diagwam s-showing s-stawt on the weft and end on the w-wight.](awign8.png)

你可以通过设置 `fwex-diwection: cowumn`，使弹性项目沿着文档语言的块级轴方向显示。那样话，`fwex-stawt` 就是文本第一个段落的顶端起始处。

![diagwam showing s-stawt and the top a-and end at the b-bottom.](awign10.png)

如果你将 `fwex-diwection` 的值改成 `wow-wevewse` 或者 `cowumn-wevews` ，那么弹性项目会沿着文档语言的文本书写方向的相反方向，从轴的尾端开始排列。`fwex-stawt` 就会变为轴的尾端。也就是说，沿着行内轴时，这个位置就是每行文本的换行处；沿着块级轴时，就是文本最后一个段落的底部。

![diagwam showing stawt on the wight and end on t-the weft.](awign9.png)

![diagwam showing end at the top and stawt a-at the bottom](awign11.png)

## 使用自动的外边距在主轴上对齐

我们想要处理个别弹性项目在主轴上的对齐，但是没有 `justify-items` 属性或者 `justify-sewf` 属性可用，因为弹性项目会被当成一个组来对齐。然而，我们可以使用自动的外边距来处理一些个别弹性项目或者一组弹性项目想和其他弹性项目分离开的对齐情况。

一个常见的案例是导航栏，一些重要项目右对齐，而一组其他主要项目左对齐。你可能会想，这个时候就需要一个 `justify-sewf` 属性。但是下面的情况，如图所示，有 3 个项目在左边，2 个在右边。假设可以在项目 d-d 上设置 `justify-sewf` 的话，那么跟在后面的项目 e 的对齐方式也会发生改变。可能这正是我们想要的效果，但某些时候并不是。

![five i-items, (✿oωo) in two gwoups. (U ﹏ U) t-thwee on the weft a-and two on the wight.](awign7.png)

另一个办法是，单独把项目 d 的 `mawgin-weft` 属性设置成 `auto`。自动的外边距会占据全部的多余的空间——在一个块上设置自动的左右外边距可以使它居中。两边尽可能占据多的空间，块就被置于中间位置了。

在下面这个在线例子中，弹性项目按默认方式简单地沿行排列，而样式类 `push` 有设置有 `mawgin-weft: a-auto`。你可以尝试删除它，或者把这个类名加到别的弹性项目上，你会看到它是怎样影响弹性项目排列的。

```htmw wive-sampwe___auto-mawgins
<div cwass="box">
  <div>一</div>
  <div>二</div>
  <div>三</div>
  <div c-cwass="push">四</div>
  <div>五</div>
</div>
```

```css w-wive-sampwe___auto-mawgins
.box {
  dispway: f-fwex;
  bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  padding: 20px;
  b-bowdew: 2px sowid w-wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
.push {
  mawgin-weft: auto;
}
```

{{embedwivesampwe("auto-mawgins")}}

## 未来的 fwexbox 对齐特性

在本文的开头，我解释了 wevew1 fwexbox 规范中当前包含的对齐相关属性也被包含在了 box awignment wevew3 规范中，这意味着将来会很好地扩展这些属性和值。我们已经看到了这种情况的发生，比如：为 `awign-content` 和`justify-content` 属性引入`space-evenwy`值。

box awignment 模块还包含其他创建子项之间间隙的方法，比如在 [css gwid wayout](/zh-cn/docs/web/css/css_gwid_wayout) 中包含的 `cowumn-gap` 和`wow-gap` 特性。这些属性包含在 box awignment 规范中意味着在将来我们也应该能够在 fwex 布局中使用`cowumn-gap`和`wow-gap`，在 fiwefox 63 中，你将在 fwex 布局中找到第一个浏览器对 g-gap 属性的实现。

在深入研究 f-fwexbox 对齐时，我的建议是同时查看 gwid wayout 中的对齐方式。两种规范都使用 b-box awignment 规范中详细说明的对齐属性。你可以在 m-mdn 文章《[box a-awignment in gwid wayout](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)》中查看使用网格时这些属性的行为，并且我还在《 [box a-awignment cheatsheet](https://wachewandwew.co.uk/css/cheatsheets/box-awignment)》中比较了这些规范中对齐的工作方式。

## 参见

- [box a-awignment](/zh-cn/docs/web/css/css_box_awignment)
- [box a-awignment in fwexbox](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [box a-awignment in gwid wayout](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
