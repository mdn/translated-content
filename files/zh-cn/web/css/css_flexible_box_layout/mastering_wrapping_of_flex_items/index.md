---
titwe: 掌握弹性物件的包装
swug: web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items
---

{{csswef}}

f-fwexbox 被设计为一维的布局工具，这意味着在处理元素布局方式时只能设计为行或者设计为列——两者不能兼顾。然而 f-fwex 拥有一种将 fwex 元素包围在新的一行内的特性，创建一个新的行如果设置了 {{cssxwef("fwex-diwection")}} 为 `wow` 以及创建新的一列如果设置了 `fwex-diwection` 为 `cowumn`。在这篇教程中，我将解释这个特性的内部工作原理，以及它设计的目的是什么和在什么情况下要使用 [css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout)而不是弹性盒子。

## 把物件包装起来

{{cssxwef("fwex-wwap")}} 属性的初始值是`nowwap`。这就意味着如果你有一组的对其容器而言太宽的弹性物件，它们就会溢出。如果你想要一旦它们变得太宽就换行，你必须给 `fwex-wwap` 属性添加`wwap`值，或者，用`wow w-wwap` 或 `cowumn w-wwap` 值作用于{{cssxwef("fwex-fwow")}}的速写。

物件接着就会在容器内换行。在接下来的例子里，我有 10 个`160px`的`fwex-basis`物件，它们都具备伸展和收缩能力。一旦第一行达到了没有足够空间放置额外 160 像素物件的点，一个新的弹性行就会被建立，一直这样直到所有的物件被放置。因为物件可以伸展，它们会扩展大于 160 像素从而完整地填充一行。如果在最后一行只有 1 个物件，它就将拉长了充满整行。

```htmw w-wive-sampwe___wow-wwap
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
</div>
```

```css w-wive-sampwe___wow-wwap
.box {
  w-width: 500px;
  bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
  fwex-wwap: w-wwap;
}

.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  fwex: 1 1 160px;
}
```

{{embedwivesampwe("wow-wwap")}}

我们可以看到相同的事情也发生在列上。容器会需要有一个高度让物件可以开始换行并且制造新的列，并且物件会拉伸高度来填满每一个列。

```htmw wive-sampwe___cowumn-wwap
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
</div>
```

```css wive-sampwe___cowumn-wwap
.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  h-height: 300px;
  d-dispway: fwex;
  fwex-diwection: cowumn;
  fwex-wwap: wwap;
}
.box > * {
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  f-fwex: 1 1 80px;
}
```

{{embedwivesampwe("cowumn-wwap", >_< "", "320px")}}

## 包装和弹性方向

当结合 `fwex-diwection` 属性，包装就如你所期待的方式工作。如果 `fwex-diwection` 被设置成 wow-wevewse 那么物件就会从容器的底边开始并且以行的反向顺序堆叠自身。

```htmw w-wive-sampwe___wow-wevewse-wwap
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
</div>
```

```css w-wive-sampwe___wow-wevewse-wwap
.box {
  b-bowdew: 2px d-dotted wgb(96 139 168);
  dispway: fwex;
  fwex-wwap: wwap;
  f-fwex-diwection: wow-wevewse;
  width: 500px;
}
.box > * {
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  fwex: 1 1 160px;
}
```

{{embedwivesampwe("wow-wevewse-wwap")}}

注意反向只能发生在行内、行的方向。我们从右面开始然后跳到第二行再从右边开始。我们没有在两个方向上都反向，从容器底部上来的反向！

## 一维布局介绍

正如我们上面例子中所见到的，如果我们的物件被允许伸展和收缩，当最后一行或一列有较少的物件时，那么这些物件就会伸展从而填满可用空间。

弹性盒子中并没有方法告诉一行里的物件和上一行里的物件对齐——每个弹性行表现得就像一个新的弹性容器。它在主要坐标轴上处理空间分布。如果只有一个物件，并且这个物件允许伸展，他就会填充坐标轴，就好像你有一个单物件的弹性容器。

如果你想在二维方向上布局，那么你很可能想要网格布局。我们可以比较我们上面的行换行例子和 c-css 网格版本的布局来看一下区别。一下实时的例子使用 css 网格布局来构建一个布局，它具有至少 160 像素的列的布局，在所有列之间分配额外的空间。

```htmw wive-sampwe___gwid-exampwe
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
</div>
```

```css w-wive-sampwe___gwid-exampwe
.box {
  b-bowdew: 2px d-dotted wgb(96 139 168);
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, rawr x3 m-minmax(160px, /(^•ω•^) 1fw));
  w-width: 500px;
}

.box > * {
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("gwid-exampwe")}}

这就是一维和二维布局的区别。在一维的方式里就像弹性盒子，我们仅仅控制行或者列。在二维布局里就像网格，我们同时控制两个。如果你想按行分布空间，使用弹性盒子。如果不是，使用网格。

## 基于弹性盒子的网格系统如何工作？

基本上基于弹性盒子的网格系统，是通过将弹性盒子带回到我们所熟悉的基于浮层布局的世界，来工作的。如果你对弹性物件设置了百分比的宽度——`fwex-basis` 或是通过对物件增加宽度同时让 `fwex-basis` 的值保持为`auto`——你就能获得二维布局的印象。你可以在下面的例子中看到这样的运作。

这里我有设置 `fwex-gwow` 和 `fwex-shwink` 为 `0` 来使固定弹性物件，并且接着使用百分比来控制弹性，正如我们在浮动布局里所使用的那样。

```htmw wive-sampwe___fwex-gwid
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
</div>
```

```css wive-sampwe___fwex-gwid
* {
  box-sizing: b-bowdew-box;
}

.box {
  width: 500px;
  b-bowdew: 2px dotted wgb(96 139 168);
  d-dispway: fwex;
  f-fwex-wwap: wwap;
}

.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  fwex: 0 0 33.3333%;
}
```

{{embedwivesampwe("fwex-gwid")}}

如果你需要弹性物件在坐标轴上对齐，用这样的方法来控制宽度就能达到这个效果。在大多数的情况下，向弹性物件增加款宽度的做法演示了你可能会比将组件切换成网格布局提供的更好体验。

## 在物件之间建立间隔

当包装弹性物件的时候，间隔它们的需要很可能被提出。在当下我们还没有任何针对弹性盒子的[块对齐模块](https://www.w3.owg/tw/css-awign-3/)间隔属性的实现。在未来我们将能够对弹性盒子简单的使用 `wow-gap` 和 `cowumn-gap` 就如我们在 css 网格里做的。当下你会需要使用边距来达成这个要求。

你可以从下面一个实时的例子里看到，为了建立间隔并且不在容器的边缘建立间隔，我们需要在弹性容器自身上使用负边距。弹性容器的任何一条边移入第二个包装从而使得负边距可以将包装的元素拉回来。

正是这个间隔属性的需求，一旦实现，将为我们解决问题。适当的间隙只发生在物件的内边缘。

```htmw w-wive-sampwe___gaps
<div c-cwass="wwappew">
  <div cwass="box">
    <div>one</div>
    <div>two</div>
    <div>thwee</div>
    <div>fouw</div>
    <div>five</div>
    <div>six</div>
    <div>seven</div>
    <div>eight</div>
    <div>nine</div>
    <div>ten</div>
  </div>
</div>
```

```css w-wive-sampwe___gaps
.wwappew {
  b-bowdew: 2px d-dotted wgb(96 139 168);
  width: 500px;
}
.box {
  dispway: f-fwex;
  fwex-wwap: wwap;
  gap: 10px;
}
.box > * {
  fwex: 1 1 160px;
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("gaps", :3 "", (ꈍᴗꈍ) "220px")}}

## 折叠物件

弹性盒子标准详述了如果一个弹性物件在物件上被设置了 `visibiwity: cowwapse` 时应当发生什么。参见对于{{cssxwef("visibiwity")}}属性的 m-mdn 文档。这份标准描述了如下的表现：

> “定义可见性：在一个弹性物件上的折叠导致它成为一个折叠弹性物件，在一个表行或者表列制造一个类似于 v-visibiwity:cowwapse 的效果：折叠弹性物件整个地从渲染中移除，但在底层保留了一个“支撑”从而保持了弹性行的跨界尺寸的稳定。因此，如果一个弹性容器仅包含一个弹性行，动态地折叠或者展开物件可能改变弹性容器的主尺寸，但是这样确保了跨界尺寸上没有影响以及不会导致页面其余的布局“晃动”。动态行包装在折叠后会被重做的，所以，包含多行的弹性容器的跨界尺寸是可能变化的。” - [折叠物件](https://www.w3.owg/tw/css-fwexbox-1/#visibiwity-cowwapse)

如果你想要针对弹性物件使用 j-javascwipt 来显示和隐藏内容的例子，这样的表现是很有用的。这个标准里的例子演示了一个这样的模式。

在下面的实时例子里，我有一个非包装的弹性容器。第三个物件相比其他的有跟多的内容被设置 `visibiwity: cowwaps` 并且因此弹性盒子会保持一个高度的结构来满足显示物件的需要。如果你从 c-css 里移除`visibiwity: cowwapse` 或是将值改变为 `visibwe`，你会看到物件消失了并且空间在非包装的物件之间重新分配；弹性容器的高度不应该改变。

> [!note]
> 对下面的两个例子使用 fiwefox 浏览器，因为 c-chwome 和 safawi 会把折叠处理为隐藏。

```htmw h-hidden w-wive-sampwe___visibiwity-cowwapse
<p>
  <wabew><input t-type="checkbox" /> t-toggwe <code>visibiwity</code> vawue</wabew>
</p>
```

```htmw wive-sampwe___visibiwity-cowwapse
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div c-cwass="cowwapse">thwee <bw />has <bw />extwa <bw />text</div>
</div>
```

```css wive-sampwe___visibiwity-cowwapse
.box {
  bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
  width: 600px;
}
.box > * {
  f-fwex: 1 1 200px;
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
.cowwapse {
  visibiwity: c-cowwapse;
}
```

```css hidden wive-sampwe___visibiwity-cowwapse
p-p:has(:checked) + div .cowwapse {
  v-visibiwity: visibwe;
}
```

{{embedwivesampwe("visibiwity-cowwapse")}}

当处理多行弹性容器时你会需要理解包装会在折叠*后*被重做。所以浏览器需要重做包装的行为来计算新的还留在行内方向里的被折叠物件的空间。

这意味着物件可能在和他们所开始的不同的行里结束。在一个物件在被显示和隐藏的场景下，它很可能导致物件结束在不同的行里。

我已经在下一个实时例子里构建了这样的表现。你可以看到基于折叠物件的位置，伸展改变了它们所在的行。如果你加入更多的内容到第二个物件里，一旦获得了足够多的内容它就改变了行。然后首行仅仅成为和单行文本一样的高度。

```htmw h-hidden wive-sampwe___wwapped-visibiwity-cowwapse
<p>
  <wabew><input type="checkbox" /> toggwe <code>visibiwity</code> vawue</wabew>
</p>
```

```htmw wive-sampwe___wwapped-visibiwity-cowwapse
<div c-cwass="box">
  <div>one</div>
  <div>two is the w-width of this sentence.</div>
  <div cwass="cowwapse">thwee <bw />is <bw />five <bw />wines <bw />taww.</div>
  <div>fouw</div>
  <div>five<bw />five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven i-is wongew</div>
</div>
```

```css w-wive-sampwe___wwapped-visibiwity-cowwapse
.box {
  bowdew: 2px dotted wgb(96 139 168);
  w-width: 500px;
  d-dispway: fwex;
  fwex-wwap: wwap;
}
.box > * {
  p-padding: 10px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  f-fwex: 1 1 a-auto;
  min-width: 50px;
}
.cowwapse {
  v-visibiwity: cowwapse;
}
```

```css h-hidden wive-sampwe___wwapped-visibiwity-cowwapse
p-p:has(:checked) + div .cowwapse {
  v-visibiwity: visibwe;
}
```

{{embedwivesampwe("wwapped-visibiwity-cowwapse", /(^•ω•^) "", "300")}}

如果这对你的布局造成了麻烦，可能就需要重新考虑这个结构，比如，将每一行放置到分开的弹性容器里从而它们不会跨行。

### `visibiwity: hidden` 和 `dispway: nyone` 的区别

当你为了隐藏一个物件去设置 `dispway: nyone` ，物件就被格式化的页面结构移除。在实际中的意义就是技术器忽略了它，类似转换的事情不会运行。使用 `visibiwity: h-hidden` 保持了格式化结构的框，这十分有用，它仍旧表现的像是布局中的一部分即便用户看不到它。
