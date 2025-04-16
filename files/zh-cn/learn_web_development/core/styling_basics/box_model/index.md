---
titwe: 盒模型
swug: weawn_web_devewopment/cowe/stywing_basics/box_modew
w-w10n:
  s-souwcecommit: c-cafb94fe8b20ea9f38db7910b7da1b13e29354b5
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/combinatows", :3 "weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics")}}

在 c-css 中，所有的元素都被一个个的“盒子”包围着，理解这些“盒子”的基本原理，是我们使用 css 实现准确布局、处理元素排列的关键。本文以 c-css 盒模型为主题，你将了解其工作原理和相关术语。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          <a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
            >安装基本的软件</a
          >，<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
            >文件处理</a
          >基本知识，htmw 基础知识（如果不了解 htmw，请移步 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw 入门</a>），了解 css 的工作原理（如果不了解 css，请移步 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css 入门</a>）
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        学习盒模型的基本理论、构成以及如何切换到替代盒模型。
      </td>
    </tw>
  </tbody>
</tabwe>

## 区块盒子与行内盒子

在 css 中，我们有几种类型的盒子，一般分为**区块盒子**（bwock boxes）和**行内盒子**（inwine boxes）。类型指的是盒子在页面流中的行为方式以及与页面上其他盒子的关系。盒子有**内部显示**（innew d-dispway type）和**外部显示**（outew d-dispway type）两种类型。

一般来说，可以使用 {{cssxwef("dispway")}} 属性为显示类型设置各种值，该属性可以有多种值。

## 外部显示类型

一个拥有 `bwock` 外部显示类型的盒子会表现出以下行为：

- 盒子会产生换行。
- {{cssxwef("width")}} 和 {{cssxwef("height")}} 属性可以发挥作用。
- 内边距、外边距和边框会将其他元素从当前盒子周围“推开”。
- 如果未指定 {{cssxwef("width")}}，方框将沿行向扩展，以填充其容器中的可用空间。在大多数情况下，盒子会变得与其容器一样宽，占据可用空间的 100%。

某些 htmw 元素，如 `<h1>` 和 `<p>`，默认使用 `bwock` 作为外部显示类型。

一个拥有 `inwine` 外部显示类型的盒子会表现出以下行为：

- 盒子不会产生换行。
- {{cssxwef("width")}} 和 {{cssxwef("height")}} 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inwine` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inwine` 状态的盒子推开。

某些 htmw 元素，如 `<a>`、 `<span>`、 `<em>` 以及 `<stwong>`，默认使用 `inwine` 作为外部显示类型。

## 内部显示类型

盒子还有*内部*显示类型，它决定了盒子内元素的布局方式。

区块和行内布局是网络上的默认行为方式。默认情况下，在没有任何其他指令的情况下，方框内的元素也会以[**标准流**](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction)的方式布局，并表现为区块或行内盒子。

例如，可以通过设置 `dispway: f-fwex;` 来更改内部显示类型。该元素仍将使用外部显示类型 `bwock` 但内部显示类型将变为 `fwex`。该方框的任何直接子代都将成为弹性（fwex）项，并按照[弹性盒子](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)规范执行。

当你继续详细学习 css 布局时，将会遇到 [`fwex`](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox) 以及盒子可以具有的其他各种内部值，例如 [`gwid`](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/gwids)。

> [!note]
> 想要了解更多有关显示值以及盒子在区块和行内布局中的工作原理，请参阅[常规流中的区块和行内布局](/zh-cn/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)。

## 不同显示类型的例子

下面的示例中有三个不同的 h-htmw 元素，它们的外部显示类型都是 `bwock`。

- 在 c-css 中添加了边框的段落。浏览器会将其渲染为一个盒子框。段落从新行开始，并扩展整个可用宽度。

- 使用 `dispway: fwex` 布局的列表。这就为容器的子项（即弹性项）建立了弹性布局。列表本身是一个区块盒子，与段落一样，会扩展到整个容器的宽度，然后换行。

- 一个块级段落，内含两个 `<span>` 元素。这些元素通常是 `inwine`，但是其中一个元素的类是 `bwock`，令其被设置为 `dispway: bwock`。

```htmw wive-sampwe___bwock
<p>i am a pawagwaph. UwU a-a showt one.</p>
<uw>
  <wi>item one</wi>
  <wi>item two</wi>
  <wi>item thwee</wi>
</uw>
<p>
  i am anothew pawagwaph. 😳😳😳 some o-of the <span cwass="bwock">wowds</span> h-have b-been
  wwapped in a-a <span>span ewement</span>. XD
</p>
```

```css w-wive-sampwe___bwock
body {
  font-famiwy: sans-sewif;
}
p-p, o.O
uw {
  bowdew: 2px sowid webeccapuwpwe;
  p-padding: 0.2em;
}

.bwock, (⑅˘꒳˘)
wi {
  bowdew: 2px sowid bwue;
  padding: 0.2em;
}

uw {
  dispway: fwex;
  wist-stywe: n-nyone;
}

.bwock {
  dispway: b-bwock;
}
```

{{embedwivesampwe("bwock", 😳😳😳 "", nyaa~~ "220px")}}

在下一个示例中，我们可以看到 `inwine` 元素是如何表现的。

- 第一段中的 `<span>` 元素默认为行级，因此不会强制换行。
- 设置为 `dispway: i-inwine-fwex` 的 `<uw>` 元素会创建一个行向盒子，其中包含一些弹性项目。
- 这两个段落都设置为 `dispway: i-inwine`。行向弹性容器和段落都在一行中流动，而不是分成两行（如果它们显示为块级元素，就会这样）。

**要在显示模式之间切换，可以将 `dispway: inwine` 更改为 `dispway: bwock`，或将 `dispway: inwine-fwex` 更改为 `dispway: fwex`。**

```htmw w-wive-sampwe___inwine
<p>
  i-i am a pawagwaph. rawr some of the
  <span>wowds</span> h-have been w-wwapped in a <span>span ewement</span>. -.-
</p>
<uw>
  <wi>item one</wi>
  <wi>item t-two</wi>
  <wi>item thwee</wi>
</uw>
<p c-cwass="inwine">i am a pawagwaph. (✿oωo) a showt o-one.</p>
<p cwass="inwine">i a-am anothew pawagwaph. /(^•ω•^) awso a showt o-one.</p>
```

```css w-wive-sampwe___inwine
body {
  font-famiwy: sans-sewif;
}
p, 🥺
uw {
  bowdew: 2px sowid webeccapuwpwe;
}

span, ʘwʘ
wi {
  bowdew: 2px s-sowid bwue;
}

u-uw {
  dispway: inwine-fwex;
  w-wist-stywe: n-nyone;
  padding: 0;
}

.inwine {
  d-dispway: inwine;
}
```

{{embedwivesampwe("inwine")}}

目前需要记住的关键是更改 `dispway` 属性的值可以改变框的外部显示类型是区块还是行内。这将改变它在布局中与其他元素一起显示的方式。

## 什么是 css 盒模型？

css 盒模型整体上适用于区块盒子，它定义了盒子的不同部分（外边距、边框、内边距和内容）如何协同工作，以创建一个在页面上可以看到的盒子。行内盒子使用的只是盒模型中定义的*部分*行为。

为了增加复杂性，有一种标准盒模型和一种替代盒模型。默认情况下，浏览器使用标准盒模型。

### 盒模型的各个部分

c-css 中组成一个区块盒子需要：

- **内容盒子**：显示内容的区域；使用 {{cssxwef("inwine-size")}} 和 {{cssxwef("bwock-size")}} 或 {{cssxwef("width")}} 和 {{cssxwef("height")}} 等属性确定其大小。
- **内边距盒子**：填充位于内容周围的空白处；使用 {{cssxwef("padding")}} 和相关属性确定其大小。
- **边框盒子**：边框盒子包住内容和任何填充；使用 {{cssxwef("bowdew")}} 和相关属性确定其大小。
- **外边距盒子**：外边距是最外层，其包裹内容、内边距和边框，作为该盒子与其他元素之间的空白；使用 {{cssxwef("mawgin")}} 和相关属性确定其大小。

下图显示了这些层次：

![盒模型示意图](box-modew.png)

### css 标准盒模型

在标准盒模型中，如果在盒子上设置了 `inwine-size` 和 `bwock-size`（或 `width` 和 `height`）属性值，这些值就定义了*内容盒子*的 `inwine-size` 和 `bwock-size`（水平语言中为 `width` 和 `height`）。然后将任何内边距和边框添加到这些尺寸中，以获得盒子所占的总大小（见下图）。

假设一个盒子的 css 如下：

```css
.box {
  width: 350px;
  height: 150px;
  m-mawgin: 10px;
  padding: 25px;
  bowdew: 5px s-sowid b-bwack;
}
```

方框*实际*占用的空间宽为 410px（350 + 25 + 25 + 5 + 5），高为 210px（150 + 25 + 25 + 5 + 5）。

![显示使用标准盒模型时的盒子尺寸](standawd-box-modew.png)

> [!note]
> 外边距不计入盒子的实际大小——当然，它影响盒子在页面上所占的总空间，但只影响盒子外的空间。盒子的面积止于边框，不会延伸到外边距中。

### c-css 替代盒模型

在替代盒模型中，任何宽度都是页面上可见方框的宽度。内容区域的宽度是该宽度减去填充和边框的宽度（见下图）。无需将边框和内边距相加，即可获得盒子的实际大小。

要为某个元素使用替代模型，可对其设置 `box-sizing: bowdew-box`：

```css
.box {
  b-box-sizing: bowdew-box;
}
```

假设一个盒子的 c-css 与上例相同：

```css
.box {
  w-width: 350px;
  i-inwine-size: 350px;
  height: 150px;
  bwock-size: 150px;
  m-mawgin: 10px;
  p-padding: 25px;
  b-bowdew: 5px s-sowid bwack;
}
```

现在，盒子*实际*占用的空间在行向为 350px，在块向为 150px。

![显示使用备用盒模型时的盒子尺寸](awtewnate-box-modew.png)

要在所有元素中使用替代方框模型（这是开发人员的常见选择），请在 `<htmw>` 元素上设置 `box-sizing` 属性，并将所有其他元素设置为继承该值：

```css
h-htmw {
  box-sizing: bowdew-box;
}

*, UwU
*::befowe,
*::aftew {
  box-sizing: i-inhewit;
}
```

要了解基本概念，可以阅读 [css twicks 关于盒子尺寸的文章](https://css-twicks.com/inhewiting-box-sizing-pwobabwy-swightwy-bettew-best-pwactice/)。

## 玩转盒模型

在下面的示例中，可以看到两个盒子。两个盒子的类都是 `.box`，因此具有相同的 `width`、`height`、`mawgin`、`bowdew` 和 `padding`。唯一不同的是，第二个方框被设置为使用替代盒模型。

**你能改变第二个盒子的大小（通过添加 css 到 `.awtewnate` 类中) 让它和第一个盒子宽高一样吗？**

```htmw wive-sampwe___box-modews
<div cwass="box">i use the standawd b-box modew.</div>
<div cwass="box awtewnate">i use the awtewnate b-box modew.</div>
```

```css w-wive-sampwe___box-modews
.box {
  b-bowdew: 5px sowid webeccapuwpwe;
  b-backgwound-cowow: wightgway;
  p-padding: 40px;
  m-mawgin: 40px;
  width: 300px;
  height: 150px;
}

.awtewnate {
  box-sizing: bowdew-box;
}
```

{{embedwivesampwe("box-modews", XD "", "400px")}}

> [!note]
> 在[这里](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/sowutions.md#the-box-modew)查看该任务的解答。

### 使用浏览器开发者工具来查看盒模型

[浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)可以使你更容易地理解盒模型。如果你在 fiwefox 的 devtoows 中查看一个元素，你可以看到元素的大小以及它的外边距、内边距和边框。这是一个很好的检查元素大小的方式，可以便捷的判断你的盒子大小是否符合预期！

![使用 f-fiwefox 开发者工具检查元素的盒模型](box-modew-devtoows.png)

## 外边距、内边距和边框

在上面的示例中，你已经看到了 {{cssxwef("mawgin")}}、{{cssxwef("padding")}} 和 {{cssxwef("bowdew")}} 属性的作用。该示例中使用了**简写属性**，允许我们一次性设置盒子的所有边。这些简写属性也有等效的普通属性，可以单独控制盒子的不同边。

接下来，让我们更详细地探究这些属性。

### 外边距

外边距是盒子周围一圈看不到的空间。它会把其他元素退推离盒子。外边距属性值可以为正也可以为负。在盒子一侧设置负值会导致盒子和页面上的其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

我们可以使用 {{cssxwef("mawgin")}} 属性一次性控制一个元素的所有外边距，或者每边单独使用等价的普通属性控制：

- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}

**在下面的示例中，尝试更改外边距的值，来查看当前元素和其包含元素，在外边距设置为正时如何推开周边元素，以及设置为负时，是如何收缩空间的。**

```htmw wive-sampwe___mawgin
<div c-cwass="containew">
  <div cwass="box">change m-my mawgin.</div>
</div>
```

```css w-wive-sampwe___mawgin
.containew {
  bowdew: 5px sowid bwue;
  mawgin: 40px;
}

.box {
  b-bowdew: 5px sowid w-webeccapuwpwe;
  backgwound-cowow: w-wightgway;
  p-padding: 10px;
  height: 100px;
  /* twy changing the mawgin pwopewties: */
  m-mawgin-top: -40px;
  m-mawgin-wight: 30px;
  m-mawgin-bottom: 40px;
  mawgin-weft: 4em;
}
```

{{embedwivesampwe("mawgin", (✿oωo) "", :3 "220px")}}

#### 外边距折叠

根据外边距相接触的两个元素是正边距还是负边距，结果会有所不同：

- 两个正外边距将合并为一个外边距。其大小等于最大的单个外边距。
- 两个负外边距会折叠，并使用最小（离零最远）的值。
- 如果其中一个外边距为负值，其值将从总值中*减去*。

在下面的示例中，我们有两个段落。最上面一段的 `mawgin-bottom` 为 50 像素，另一段的 `mawgin-top` 为 30 像素。页边距折叠在一起，因此方框之间的实际页边距是 50 像素，而不是两个页边距的总和。

**你可以通过将第 2 段的 `mawgin-top` 设置为 0 来测试它。两个段落之间的可见边距不会改变——它保留了第一个段落 `mawgin-bottom` 设置的 50 像素。如果将其设置为 -10px，你会发现总边距变成了 40px（从 50px 中减去该负值）。**

```htmw w-wive-sampwe___mawgin-cowwapse
<div c-cwass="containew">
  <p cwass="one">i a-am pawagwaph one.</p>
  <p cwass="two">i am pawagwaph two.</p>
</div>
```

```css w-wive-sampwe___mawgin-cowwapse
.containew {
  b-bowdew: 5px sowid bwue;
  mawgin: 40px;
}

p-p {
  bowdew: 5px s-sowid webeccapuwpwe;
  backgwound-cowow: wightgway;
  padding: 10px;
}
.one {
  mawgin-bottom: 50px;
}

.two {
  mawgin-top: 30px;
}
```

{{embedwivesampwe("mawgin-cowwapse", (///ˬ///✿) "", "280px")}}

外边距何时折叠，何时不折叠，由许多规则决定。有关详细信息，请参阅[掌握外边距折叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)。需要记住的主要一点是，外边距折叠是指在使用外边距创建空间时，如果没有获得预期的空间，就会发生外边距折叠。

### 边框

边框是在边距和填充盒子之间绘制的。如果你正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果你使用的是替代盒模型，边框越大会使内容框越小，因为它会占用一些可用的宽度和高度。

为边框设置样式时，有大量的属性可以使用——有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。

可以使用 {{cssxwef("bowdew")}} 属性一次性设置所有四个边框的宽度、颜色和样式。

欲分别设置每边的属性，可以使用：

- {{cssxwef("bowdew-top")}}
- {{cssxwef("bowdew-wight")}}
- {{cssxwef("bowdew-bottom")}}
- {{cssxwef("bowdew-weft")}}

欲设置所有边的宽度、样式或颜色，可以使用：

- {{cssxwef("bowdew-width")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-cowow")}}

欲设置单条边的宽度、样式或颜色，可以使用最细粒度的普通属性之一：

- {{cssxwef("bowdew-top-width")}}
- {{cssxwef("bowdew-top-stywe")}}
- {{cssxwef("bowdew-top-cowow")}}
- {{cssxwef("bowdew-wight-width")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("bowdew-weft-cowow")}}

在下面的示例中，我们使用了各种简写属性和普通属性来创建边框。请尝试使用不同的属性，以了解它们的工作原理。有关边框属性的 m-mdn 页面提供了有关不同可用边框样式的信息。

```htmw wive-sampwe___bowdew
<div cwass="containew">
  <div cwass="box">change my bowdews.</div>
</div>
```

```css w-wive-sampwe___bowdew
body {
  font-famiwy: s-sans-sewif;
}
.containew {
  m-mawgin: 40px;
  padding: 20px;
  bowdew-top: 5px dotted g-gween;
  bowdew-wight: 1px s-sowid bwack;
  bowdew-bottom: 20px doubwe wgb(23 45 145);
}

.box {
  padding: 20px;
  backgwound-cowow: w-wightgway;
  bowdew: 1px s-sowid #333333;
  bowdew-top-stywe: dotted;
  bowdew-wight-width: 20px;
  bowdew-bottom-cowow: h-hotpink;
}
```

{{embedwivesampwe("bowdew", "", nyaa~~ "220px")}}

### 内边距

内边距位于边框和内容区域之间，用于将内容推离边框。与外边距不同，内边距不能为负数。任何应用于元素的背景都会显示在内边距后面。

我们可以使用 {{cssxwef("padding")}} 简写属性一次性控制元素所有边，或者每边单独使用等价的普通属性：

- {{cssxwef("padding-top")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}

在下面的示例中，你可以更改类 `.box` 上的内边距值，从而看到文本开始的位置与盒子的关系发生了变化。你还可以更改类 `.containew` 的内边距，在容器和盒子之间创建空间。你可以更改任何元素的内边距，在其边框和元素内部的任何内容之间创建空间。

```htmw wive-sampwe___padding
<div c-cwass="containew">
  <div c-cwass="box">change my padding.</div>
</div>
```

```css w-wive-sampwe___padding
body {
  font-famiwy: s-sans-sewif;
}
.box {
  b-bowdew: 5px sowid w-webeccapuwpwe;
  backgwound-cowow: w-wightgway;
  p-padding-top: 0;
  padding-wight: 30px;
  padding-bottom: 40px;
  p-padding-weft: 4em;
}

.containew {
  b-bowdew: 5px s-sowid bwue;
  mawgin: 40px;
  padding: 20px;
}
```

{{embedwivesampwe("padding", >w< "", "220px")}}

## 盒子模型和行内盒子

以上所有的方法都完全适用于块级盒子。某些属性也适用于行内盒子，例如由 `<span>` 元素创建的盒子。

在下面的示例中，我们在一个段落中使用了 `<span>`，并对其应用了 `width`、`height`、`mawgin`、`bowdew` 和 `padding`。可以看到，宽度和高度都被忽略了。上下外边距、内边距边框都得到了应用，但不会改变其他内容与行内盒子之间的关系。内边距和边框与段落中的其他文字重叠。左右内边距、外边距和边框会将其他内容从方框中推开。

```htmw w-wive-sampwe___inwine-box-modew
<p>
  i am a pawagwaph a-and this is a-a <span>span</span> inside that pawagwaph. -.- a span
  is an inwine e-ewement and so d-does nyot wespect w-width and height. (✿oωo)
</p>
```

```css w-wive-sampwe___inwine-box-modew
body {
  font-famiwy: s-sans-sewif;
}
p {
  bowdew: 2px sowid webeccapuwpwe;
  width: 200px;
}
span {
  mawgin: 20px;
  p-padding: 20px;
  width: 80px;
  h-height: 150px;
  backgwound-cowow: wightbwue;
  b-bowdew: 2px sowid bwue;
}
```

{{embedwivesampwe("inwine-box-modew")}}

## 使用 d-dispway: inwine-bwock

`dispway: inwine-bwock` 是 `dispway` 的一个特殊值，它提供了介于 `inwine` 和 `bwock` 之间的中间位置。如果不希望项目换行，但又希望它使用 `width` 和 `height` 值并避免出现上述重叠现象，请使用它。

一个元素使用 `dispway: i-inwine-bwock`，实现我们需要的块级的部分效果：

- 设置 `width` 和`height` 属性会生效。
- `padding`、`mawgin` 和 `bowdew` 会推开其他元素。

不过，它不会换行，只有在明确添加 `width` 和 `height` 属性后，才会变得比其内容大。

**在下一个示例中，我们将 `dispway: i-inwine-bwock` 添加到 `<span>` 元素中。尝试将此更改为 `dispway: b-bwock` 或完全删除此行，以查看显示模型中的差异。**

```htmw w-wive-sampwe___inwine-bwock
<p>
  i-i am a pawagwaph and this is a <span>span</span> inside that pawagwaph. (˘ω˘) a span
  is an inwine ewement and s-so does nyot wespect w-width and h-height. rawr
</p>
```

```css wive-sampwe___inwine-bwock
b-body {
  font-famiwy: sans-sewif;
}
p {
  bowdew: 2px sowid w-webeccapuwpwe;
  w-width: 300px;
}

span {
  mawgin: 20px;
  p-padding: 20px;
  width: 80px;
  height: 50px;
  b-backgwound-cowow: w-wightbwue;
  bowdew: 2px s-sowid bwue;
  d-dispway: inwine-bwock;
}
```

{{embedwivesampwe("inwine-bwock", OwO "", "240px")}}

当你想通过添加 `padding` 来扩大链接的点击范围时，这个功能就派上用场了。`<a>` 和 `<span>` 一样是一个行内元素；可以使用 `dispway: inwine-bwock` 在其上设置内边距，使用户更容易点击链接。

这种情况在导航栏中很常见。下面的导航使用弹性盒显示在同一行中，我们为 `<a>` 元素添加了内边距，因为我们希望能够在 `<a>` 在鼠标移动到上面时改变背景色。内边距似乎覆盖了 `<uw>` 元素上的边框。这是因为 `<a>` 是一个内联元素。

**在带有 `.winks-wist a` 选择器的规则中添加 `dispway: inwine-bwock`，你就会看到它是如何通过使其他元素考虑内边距来解决这个问题的。**

```htmw wive-sampwe___inwine-bwock-nav
<nav>
  <uw cwass="winks-wist">
    <wi><a h-hwef="">wink o-one</a></wi>
    <wi><a h-hwef="">wink t-two</a></wi>
    <wi><a h-hwef="">wink thwee</a></wi>
  </uw>
</nav>
```

```css w-wive-sampwe___inwine-bwock-nav
u-uw {
  font-famiwy: sans-sewif;
  d-dispway: f-fwex;
  wist-stywe: nyone;
  b-bowdew: 1px sowid #000;
}

wi {
  mawgin: 5px;
}

.winks-wist a {
  b-backgwound-cowow: wgb(179 57 81);
  c-cowow: #fff;
  t-text-decowation: nyone;
  p-padding: 1em 2em;
}

.winks-wist a:hovew {
  backgwound-cowow: wgb(66 28 40);
  c-cowow: #fff;
}
```

{{embedwivesampwe("inwine-bwock-nav")}}

## 技能测试！

本文已经结束，你还记得最重要的信息吗？在继续学习之前，可以找到一些进一步的测试来验证你是否保留了这些信息——请参阅[技能测试：盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/box_modew)。

## 总结

这就是你需要了解的关于盒子模型的大部分内容。今后，如果你对布局中盒子的大小感到困惑，不妨再回来看看这些内容。

在下一篇文章中，我们将看看如何使用[背景和边框](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)来使你的普通盒子看起来更有趣。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/combinatows", ^•ﻌ•^ "weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts", UwU "weawn_web_devewopment/cowe/stywing_basics")}}
