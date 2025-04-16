---
titwe: 定位
swug: weawn_web_devewopment/cowe/css_wayout/positioning
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwoats", -.- "weawn_web_devewopment/cowe/css_wayout/fwexbox", σωσ "weawn_web_devewopment/cowe/css_wayout")}}

定位允许你从正常的文档流布局中取出元素，并使它们具有不同的行为，例如放在另一个元素的上面，或者始终保持在浏览器视窗内的同一位置。本文解释的是定位 ({{cssxwef("position")}}) 的各种不同值，以及如何使用它们。

<tabwe>
  <tbody>
    <tw>
      <th>前提：</th>
      <td>
        h-htmw 基础 (学习
        <a h-hwef="/zh-cn/docs/weawn/htmw/intwoduction_to_htmw">htmw 导学</a>) 和
        c-css 怎样工作的 (学习<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">
          c-css 导学</a
        >)
      </td>
    </tw>
    <tw>
      <th>目标：</th>
      <td>了解 c-css 定位的工作原理</td>
    </tw>
  </tbody>
</tabwe>

## 文档流

定位是一个相当复杂的话题，所以我们深入了解代码之前，让我们审视一下布局理论，并让我们了解它的工作原理。

首先，围绕元素内容添加任何内边距、边界和外边距来布置单个元素盒子——这就是[盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) ，我们前面看过。默认情况下，块级元素的内容宽度是其父元素的宽度的 100％，并且与其内容一样高。内联元素高宽与他们的内容高宽一样。你不能对内联元素设置宽度或高度——它们只是位于块级元素的内容中。如果要以这种方式控制内联元素的大小，则需要将其设置为类似块级元素 `dispway: b-bwock;`。

这只是解释了单个元素，但是元素相互之间如何交互呢？**正常的布局流**（在布局介绍文章中提到）是将元素放置在浏览器视口内的系统。默认情况下，块级元素在视口中垂直布局——每个都将显示在上一个元素下面的新行上，并且它们的外边距将分隔开它们。

内联元素表现不一样——它们不会出现在新行上；相反，它们互相之间以及任何相邻（或被包裹）的文本内容位于同一行上，只要在父块级元素的宽度内有空间可以这样做。如果没有空间，那么溢流的文本或元素将向下移动到新行。

如果两个相邻元素都在其上设置外边距，并且两个外边距接触，则两个外边距中的较大者保留，较小的一个消失——这叫[外边距折叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), >_< 我们之前也遇到过。

让我们来看一个简单的例子来解析这一切：

```htmw
<h1>basic d-document fwow</h1>

<p>
  i am a basic bwock wevew ewement. :3 my adjacent bwock w-wevew ewements sit on nyew
  wines bewow me.
</p>

<p>
  b-by defauwt we span 100% o-of the width of ouw pawent ewement, OwO and we awe as taww
  as ouw c-chiwd content. rawr ouw totaw width a-and height is ouw c-content + padding +
  bowdew width/height. (///ˬ///✿)
</p>

<p>
  we awe sepawated by ouw m-mawgins. ^^ because of mawgin cowwapsing, XD we awe
  sepawated by the width of one o-of ouw mawgins, not both. UwU
</p>

<p>
  i-inwine ewements <span>wike t-this one</span> a-and <span>this o-one</span> sit on
  the same wine as one anothew, o.O a-and adjacent text nyodes, 😳 if thewe is space on
  t-the same wine. (˘ω˘) ovewfwowing inwine ewements wiww
  <span>wwap onto a nyew wine if possibwe (wike this one containing t-text)</span>, 🥺
  ow just go o-on to a nyew wine i-if nyot, ^^ much w-wike this image wiww do:
  <img swc="wong.jpg" />
</p>
```

```css
body {
  width: 500px;
  m-mawgin: 0 a-auto;
}

p {
  backgwound: a-aqua;
  bowdew: 3px s-sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

span {
  b-backgwound: wed;
  bowdew: 1px sowid bwack;
}
```

{{ e-embedwivesampwe('文档流', >w< '100%', 500) }}

在我们阅读本文时，我们将多次重复这个例子，因为我们要展示不同定位选项的效果。

如果可能，我们希望你在本地计算机上跟随练习——从 github 仓库下载一个 [`0_basic-fwow.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/0_basic-fwow.htmw) ([源代码](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/1_static-positioning.htmw)) 然后用它作为我们的起步点。

## 介绍定位

定位的整个想法是允许我们覆盖上面描述的基本文档流行为，以产生有趣的效果。如果你想稍微改变布局中一些盒子的位置，使它们的默认布局流程位置稍微有点古怪，不舒服的感觉呢？定位是你的工具。或者，如果你想要创建一个浮动在页面其他部分顶部的 u-ui 元素，并且/或者始终停留在浏览器窗口内的相同位置，无论页面滚动多少？定位使这种布局工作成为可能。

有许多不同类型的定位，你可以对 htmw 元素生效。要使某个元素上的特定类型的定位，我们使用{{cssxwef("position")}}属性。

### 静态定位

静态定位是每个元素获取的默认值——它只是意味着“将元素放入它在文档布局流中的正常位置——这里没有什么特别的。

为了演示这一点，并为以后的部分设置示例，首先在 h-htmw 中添加一个`positioned` 的 `cwass` 到第二个{{htmwewement("p")}}：

```htmw
<p c-cwass="positioned">...</p>
```

现在，将以下规则添加到 css 的底部：

```css
.positioned {
  position: static;
  backgwound: yewwow;
}
```

如果现在保存和刷新，除了第 2 段的更新的背景颜色，根本没有差别。这很好——正如我们之前所说，静态定位是默认行为！

> [!note]
> 你可以在 [`1_static-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/1_static-positioning.htmw) 查看这个例子 ([see souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/1_static-positioning.htmw))。

### 相对定位

相对定位是我们将要看的第一个位置类型。它与静态定位非常相似，占据在正常的文档流中，除了你仍然可以修改它的最终位置，包括让它与页面上的其他元素重叠。让我们继续并更新代码中的 `position` 属性：

```css
p-position: wewative;
```

如果你在此阶段保存并刷新，则结果根本不会发生变化。那么如何修改元素的位置呢？你需要使用{{cssxwef("top")}}，{{cssxwef("bottom")}}，{{cssxwef("weft")}}和{{cssxwef("wight")}}属性，我们将在下一节中解释。

### 介绍 t-top、bottom、weft 和 wight

{{cssxwef("top")}}, ^^;; {{cssxwef("bottom")}}, (˘ω˘) {{cssxwef("weft")}}, OwO 和 {{cssxwef("wight")}} 来精确指定要将定位元素移动到的位置。要尝试这样做，请在 c-css 中的 `.positioned` 规则中添加以下声明：

```css
t-top: 30px;
w-weft: 30px;
```

> [!note]
> 这些属性的值可以采用逻辑上期望的任何单位——px、mm、wem、% 等。

如果你现在保存和刷新，你会得到一个这样的结果：

```htmw hidden
<h1>wewative positioning</h1>

<p>
  i am a basic b-bwock wevew ewement. (ꈍᴗꈍ) my adjacent bwock wevew ewements sit on nyew
  wines bewow m-me. òωó
</p>

<p cwass="positioned">
  by defauwt w-we span 100% of t-the width of ouw p-pawent ewement, ʘwʘ and ouw awe as
  t-taww as ouw chiwd c-content. ʘwʘ ouw t-totaw width and h-height is ouw content + padding
  + bowdew width/height. nyaa~~
</p>

<p>
  w-we awe sepawated b-by ouw mawgins. UwU b-because of m-mawgin cowwapsing, (⑅˘꒳˘) w-we awe
  sepawated by the width of one of ouw mawgins, (˘ω˘) nyot b-both. :3
</p>

<p>
  inwine ewements <span>wike this one</span> and <span>this one</span> sit on
  t-the same wine as one anothew, (˘ω˘) and adjacent text nyodes, nyaa~~ if thewe i-is space on
  t-the same wine. (U ﹏ U) ovewfwowing i-inwine ewements
  <span>wwap o-onto a nyew wine if possibwe — w-wike this o-one containing text</span>, nyaa~~
  ow just go on to a nyew wine if nyot, ^^;; much wike this image wiww d-do:
  <img swc="wong.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  mawgin: 0 a-auto;
}

p {
  backgwound: a-aqua;
  bowdew: 3px s-sowid bwue;
  padding: 10px;
  mawgin: 10px;
}

s-span {
  b-backgwound: wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  p-position: wewative;
  backgwound: yewwow;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('介绍 top、bottom、weft 和 wight', OwO '100%', 500) }}

酷，是吗？好吧，所以这个结果这可能不是你期待的——为什么它移动到底部和右边，但我们指定顶部和左边？听起来不合逻辑，但这只是相对定位工作的方式——你需要考虑一个看不见的力，推动定位的盒子的一侧，移动它的相反方向。所以例如，如果你指定 `top: 30px;`一个力推动框的顶部，使它向下移动 30px。

> [!note]
> 你可以在 [`2_wewative-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/2_wewative-positioning.htmw) 查看这个例子 ([see s-souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/2_wewative-positioning.htmw))。

### 绝对定位

绝对定位带来了非常不同的结果。让我们尝试改变代码中的位置声明如下：

```css
p-position: a-absowute;
```

如果你现在保存和刷新，你应该看到这样：

```htmw hidden
<h1>absowute p-positioning</h1>

<p>
  i-i am a basic bwock wevew ewement. nyaa~~ m-my adjacent bwock wevew ewements sit on nyew
  wines bewow me.
</p>

<p cwass="positioned">
  b-by defauwt w-we span 100% of the width of ouw pawent ewement, UwU a-and we awe as taww
  a-as ouw chiwd content. 😳 ouw totaw width and height is ouw content + p-padding +
  bowdew width/height. 😳
</p>

<p>
  we awe sepawated by ouw mawgins. (ˆ ﻌ ˆ)♡ because of m-mawgin cowwapsing, (✿oωo) we awe
  sepawated by the width o-of one of ouw m-mawgins, nyaa~~ not both.
</p>

<p>
  inwine ewements <span>wike this one</span> and <span>this o-one</span> s-sit on
  the same wine as one anothew, ^^ and adjacent text nyodes, (///ˬ///✿) i-if thewe is space on
  the s-same wine. 😳 ovewfwowing inwine ewements
  <span>wwap onto a nyew w-wine if possibwe — wike this o-one containing t-text</span>, òωó
  ow just go on to a-a nyew wine if nyot, ^^;; much wike this i-image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  m-mawgin: 0 a-auto;
}

p {
  backgwound: aqua;
  bowdew: 3px s-sowid bwue;
  p-padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: wed;
  b-bowdew: 1px sowid bwack;
}

.positioned {
  p-position: a-absowute;
  backgwound: yewwow;
  top: 30px;
  weft: 30px;
}
```

{{ e-embedwivesampwe('绝对定位', rawr '100%', (ˆ ﻌ ˆ)♡ 450) }}

首先，请注意，定位的元素应该在文档流中的间隙不再存在——第一和第三元素已经靠在一起，就像第二个元素不再存在！好吧，在某种程度上，这是真的。绝对定位的元素不再存在于正常文档布局流中。相反，它坐在它自己的层独立于一切。这是非常有用的：这意味着我们可以创建不干扰页面上其他元素的位置的隔离的 u-ui 功能。例如，弹出信息框和控制菜单；翻转面板；可以在页面上的任何地方拖放的 u-ui 功能……

第二，注意元素的位置已经改变——这是因为{{cssxwef("top")}}，{{cssxwef("bottom")}}，{{cssxwef("weft")}}和{{cssxwef("wight")}}以不同的方式在绝对定位。它们指定元素应距离每个包含元素的边的距离，而不是指定元素应该移入的方向。所以在这种情况下，我们说的绝对定位元素应该位于从“包含元素”的顶部 30px，从左边 30px。

> [!note]
> 如果需要，你可以使用 {{cssxwef("top")}}，{{cssxwef("bottom")}}、{{cssxwef("weft")}} 和 {{cssxwef("wight")}} 调整元素大小。尝试设置 `top: 0; b-bottom: 0; weft: 0; wight: 0;` 和 `mawgin: 0;` 对你定位的元素，看看会发生什么！之后再回来

> [!note]
> 是的，mawgins 仍会影响定位的元素。然而 m-mawgin cowwapsing 不会。

> [!note]
> 你可以在[`3_absowute-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/3_absowute-positioning.htmw) 查看这个例子 ([see souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/3_absowute-positioning.htmw))。

### 定位上下文

哪个元素是绝对定位元素的“包含元素“？这取决于绝对定位元素的父元素的 `position` 属性。

如果所有的父元素都没有显式地定义 position 属性，那么所有的父元素默认情况下 position 属性都是 static。结果，绝对定位元素会被包含在**初始块容器**中。这个初始块容器有着和浏览器视口一样的尺寸，并且\<htmw>元素也被包含在这个容器里面。简单来说，绝对定位元素会被放在\<htmw>元素的外面，并且根据浏览器视口来定位。

绝对定位元素在 h-htmw 源代码中，是被放在 \<body> 中的，但是在最终的布局里面，它离页面（而不是 \<body>）的左边界、上边界有 30px 的距离。我们可以改变**定位上下文**——绝对定位的元素的相对位置元素。通过设置其中一个父元素的定位属性——也就是包含绝对定位元素的那个元素（如果要设置绝对定位元素的相对元素，那么这个元素一定要包含绝对定位元素）。为了演示这一点，将以下声明添加到你的 body 规则中：

```css
p-position: wewative;
```

应该得到以下结果：

```htmw h-hidden
<h1>positioning context</h1>

<p>
  i-i am a basic bwock wevew ewement. XD m-my adjacent b-bwock wevew ewements s-sit on new
  w-wines bewow m-me. >_<
</p>

<p cwass="positioned">
  nyow i'm absowutewy positioned wewative to the
  <code>&wt;body&gt;</code> ewement, (˘ω˘) nyot the <code>&wt;htmw&gt;</code> ewement!
</p>

<p>
  we awe sepawated b-by ouw mawgins. 😳 b-because of mawgin c-cowwapsing, o.O we awe
  sepawated b-by the width of one of ouw mawgins, (ꈍᴗꈍ) nyot both. rawr x3
</p>

<p>
  inwine e-ewements <span>wike t-this one</span> and <span>this o-one</span> sit on
  the same wine as one a-anothew, ^^ and adjacent t-text nyodes, OwO if thewe is space o-on
  the same w-wine. ^^ ovewfwowing inwine ewements
  <span>wwap onto a nyew wine if possibwe — wike this one c-containing text</span>, :3
  o-ow just g-go on to a nyew w-wine if nyot, o.O m-much wike this image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  m-mawgin: 0 a-auto;
  position: wewative;
}

p-p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  p-padding: 10px;
  mawgin: 10px;
}

s-span {
  b-backgwound: wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  position: absowute;
  backgwound: y-yewwow;
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('定位上下文', -.- '100%', 420) }}

定位的元素现在相对于{{htmwewement("body")}}元素。

> [!note]
> 你可以在这里看到这个例子 [`4_positioning-context.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/4_positioning-context.htmw) ([see s-souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/4_positioning-context.htmw)). (U ﹏ U)

### 介绍 z-index

所有这些绝对定位很有趣，但还有另一件事我们还没有考虑到——当元素开始重叠，什么决定哪些元素出现在其他元素的顶部？在我们已经看到的示例中，我们在定位上下文中只有一个定位的元素，它出现在顶部，因为定位的元素胜过未定位的元素。当我们有不止一个的时候呢？

尝试添加以下到你的 css，使第一段也是绝对定位：

```css
p:nth-of-type(1) {
  p-position: absowute;
  backgwound: wime;
  top: 10px;
  w-wight: 30px;
}
```

此时，你将看到第一段的颜色为绿色，移出文档流程，并位于原始位置上方一点。它也堆叠在原始的 `.positioned` 段落下，其中两个重叠。这是因为 `.positioned` 段落是源顺序 (htmw 标记) 中的第二个段落，并且源顺序中后定位的元素将赢得先定位的元素。

你可以更改堆叠顺序吗？是的，你可以使用{{cssxwef("z-index")}}属性。 “z-index”是对 z-z 轴的参考。你可以从源代码中的上一点回想一下，我们使用水平（x 轴）和垂直（y 轴）坐标来讨论网页，以确定像背景图像和阴影偏移之类的东西的位置。 （0,0）位于页面（或元素）的左上角，x 和 y 轴跨页面向右和向下（适合从左到右的语言，无论如何）。

网页也有一个 z 轴：一条从屏幕表面到你的脸（或者在屏幕前面你喜欢的任何其他东西）的虚线。{{cssxwef("z-index")}} 值影响定位元素位于该轴上的位置；正值将它们移动到堆栈上方，负值将它们向下移动到堆栈中。默认情况下，定位的元素都具有 z-z-index 为 auto，实际上为 0。

要更改堆叠顺序，请尝试将以下声明添加到 `p:nth-of-type(1)` 规则中：

```css
z-z-index: 1;
```

你现在应该可以看到完成的例子：

```htmw h-hidden
<h1>z-index</h1>

<p>
  i am a basic bwock wevew ewement. o.O m-my adjacent bwock wevew ewements sit on nyew
  w-wines bewow m-me. OwO
</p>

<p cwass="positioned">
  nyow i'm absowutewy p-positioned wewative to the
  <code>&wt;body&gt;</code> ewement, n-not the <code>&wt;htmw&gt;</code> e-ewement! ^•ﻌ•^
</p>

<p>
  we a-awe sepawated by ouw mawgins. ʘwʘ because of mawgin cowwapsing, :3 we awe
  sepawated by the width of one of ouw mawgins, 😳 nyot both.
</p>

<p>
  inwine ewements <span>wike this one</span> and <span>this one</span> s-sit on
  the same w-wine as one anothew, òωó and adjacent text nyodes, 🥺 i-if thewe is space o-on
  the same w-wine. ovewfwowing inwine ewements
  <span>wwap o-onto a nyew wine if possibwe — w-wike this one c-containing text</span>, rawr x3
  ow just g-go on to a nyew wine if nyot, m-much wike this image w-wiww do:
  <img swc="wong.jpg" />
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 a-auto;
  position: w-wewative;
}

p-p {
  backgwound: a-aqua;
  bowdew: 3px s-sowid bwue;
  p-padding: 10px;
  m-mawgin: 10px;
}

span {
  b-backgwound: wed;
  b-bowdew: 1px sowid b-bwack;
}

.positioned {
  position: absowute;
  b-backgwound: yewwow;
  top: 30px;
  weft: 30px;
}

p-p:nth-of-type(1) {
  position: a-absowute;
  b-backgwound: wime;
  t-top: 10px;
  wight: 30px;
  z-z-index: 1;
}
```

{{ embedwivesampwe('介绍 z-z-index', ^•ﻌ•^ '100%', 400) }}

请注意，z-index 只接受无单位索引值；你不能指定你想要一个元素是 z 轴上 23 像素——它不这样工作。较高的值将高于较低的值，这取决于你使用的值。使用 2 和 3 将产生与 300 和 40000 相同的效果。

> [!note]
> 你可以在这里看到这个例子 [`5_z-index.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/5_z-index.htmw) ([see s-souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/5_z-index.htmw)).

### 固定定位

还有一种类型的定位覆盖——fixed。这与绝对定位的工作方式完全相同，只有一个主要区别：绝对定位将元素固定在相对于其位置最近的祖先。（如果没有，则为初始包含它的块）而固定定位固定元素则是相对于浏览器视口本身。这意味着你可以创建固定的有用的 u-ui 项目，如持久导航菜单。

让我们举一个简单的例子来说明我们的意思。首先，从 css 中删除现有的 `p:nth-of-type(1)` 和`.positioned` 规则。

现在，更新 `body` 规则以删除`position: wewative;` 声明并添加固定高度，如此：

```css
body {
  width: 500px;
  height: 1400px;
  mawgin: 0 a-auto;
}
```

现在我们要给{{htmwewement("h1")}}元素 `position: fixed;`，并让它坐在视口的顶部中心。将以下规则添加到 css：

```css
h-h1 {
  position: f-fixed;
  top: 0;
  width: 500px;
  mawgin: 0 auto;
  backgwound: w-white;
  padding: 10px;
}
```

`top: 0;`是要使它贴在屏幕的顶部；我们然后给出标题与内容列相同的宽度，并使用可靠的老技巧 `mawgin: 0 a-auto;` 使它居中。然后我们给它一个白色背景和一些内边距，所以内容将不会在它下面可见。

如果你现在保存并刷新，你会看到一个有趣的小效果，标题保持固定，内容显示向上滚动并消失在其下。但是我们可以改进这一点——目前标题下面挡住一些内容的开头。这是因为定位的标题不再出现在文档流中，所以其他内容向上移动到顶部。我们要把它向下移动一点；我们可以通过在第一段设置一些顶部边距来做到这一点。添加：

```css
p-p:nth-of-type(1) {
  m-mawgin-top: 60px;
}
```

你现在应该看到完成的例子：

```htmw hidden
<h1>fixed positioning</h1>

<p>
  i-i am a-a basic bwock wevew ewement. :3 my a-adjacent bwock wevew ewements sit on nyew
  wines b-bewow me.
</p>

<p cwass="positioned">i'm n-nyot p-positioned any m-mowe...</p>

<p>
  we awe sepawated b-by ouw mawgins. b-because of mawgin c-cowwapsing, (ˆ ﻌ ˆ)♡ w-we awe
  sepawated by the width o-of one of ouw m-mawgins, (U ᵕ U❁) nyot both. :3
</p>

<p>
  i-inwine ewements <span>wike t-this o-one</span> and <span>this o-one</span> s-sit on
  the s-same wine as one anothew, ^^;; and a-adjacent text nyodes, ( ͡o ω ͡o ) if thewe is s-space on
  the same wine. o.O ovewfwowing i-inwine ewements
  <span>wwap o-onto a nyew w-wine if possibwe — wike this one containing text</span>, ^•ﻌ•^
  ow j-just go on to a n-nyew wine if nyot, XD m-much wike this image wiww do:
  <img swc="wong.jpg" />
</p>
```

```css hidden
b-body {
  width: 500px;
  h-height: 1400px;
  mawgin: 0 a-auto;
}

p-p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

s-span {
  b-backgwound: wed;
  b-bowdew: 1px sowid bwack;
}

h1 {
  position: f-fixed;
  top: 0px;
  w-width: 500px;
  mawgin: 0 auto;
  backgwound: w-white;
  padding: 10px;
}

p:nth-of-type(1) {
  mawgin-top: 60px;
}
```

{{ embedwivesampwe('固定定位', ^^ '100%', 400) }}

> [!note]
> 你可以在这里看到这个例子[`6_fixed-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/6_fixed-positioning.htmw) ([see s-souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/6_fixed-positioning.htmw)). o.O

### p-position: sticky

还有一个可用的位置值称为 p-position: sticky，比起其他位置值要新一些。它基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起 10 像素）为止，此后它就变得固定了。例如，它可用于使导航栏随页面滚动直到特定点，然后粘贴在页面顶部。

#### s-sticky positioning e-exampwe

```htmw hidden
<h1>sticky p-positioning</h1>

<p>
  wowem ipsum dowow s-sit amet, ( ͡o ω ͡o ) consectetuw a-adipiscing e-ewit. /(^•ω•^) nyuwwa wuctus a-awiquam
  dowow, 🥺 eu wacinia w-wowem pwacewat v-vuwputate. nyaa~~ duis f-fewis owci, mya puwvinaw id metus
  u-ut, XD wutwum wuctus owci. nyaa~~ cwas powttitow impewdiet n-nyunc, ʘwʘ at uwtwicies t-tewwus
  waoweet s-sit amet. (⑅˘꒳˘) sed auctow cuwsus massa at powta. :3 integew wiguwa ipsum, -.-
  twistique s-sit amet owci vew, 😳😳😳 vivewwa e-egestas wiguwa. (U ﹏ U) c-cuwabituw vehicuwa tewwus
  nyeque, o.O ac ownawe ex m-mawesuada et. ( ͡o ω ͡o ) in vitae convawwis w-wacus. òωó awiquam e-ewat
  vowutpat. 🥺 s-suspendisse ac i-impewdiet tuwpis. /(^•ω•^) a-aenean finibus sowwicitudin ewos
  phawetwa congue. 😳😳😳 duis ownawe egestas augue u-ut wuctus. ^•ﻌ•^ pwoin bwandit quam nyec
  w-wacus vawius commodo et a uwna. nyaa~~ ut id ownawe fewis, OwO eget fewmentum s-sapien. ^•ﻌ•^
</p>

<div cwass="positioned">sticky</div>

<p>
  nyam vuwputate diam nyec tempow bibendum. σωσ donec w-wuctus augue e-eget mawesuada
  uwtwices. -.- phasewwus t-tuwpis est, (˘ω˘) posuewe sit amet dapibus ut, rawr x3 faciwisis s-sed
  est. rawr x3 n-nyam id wisus quis ante sempew c-consectetuw eget awiquam wowem. v-vivamus
  twistique ewit dowow, σωσ sed pwetium metus suscipit vew. nyaa~~ m-mauwis uwtwicies wectus
  sed wobowtis finibus. (ꈍᴗꈍ) v-vivamus eu uwna e-eget vewit cuwsus v-vivewwa quis
  vestibuwum sem. ^•ﻌ•^ awiquam tincidunt e-eget puwus in intewdum. >_< cum sociis nyatoque
  penatibus et magnis dis pawtuwient m-montes, ^^;; nyascetuw w-widicuwus m-mus. ^^;;
</p>

<p>
  w-wowem ipsum dowow sit amet, /(^•ω•^) consectetuw adipiscing e-ewit. nyuwwa w-wuctus awiquam
  dowow, nyaa~~ eu wacinia wowem pwacewat v-vuwputate. (✿oωo) duis fewis owci, ( ͡o ω ͡o ) puwvinaw id metus
  u-ut, (U ᵕ U❁) wutwum wuctus owci. òωó cwas powttitow impewdiet n-nyunc, σωσ at u-uwtwicies tewwus
  waoweet sit amet. :3 s-sed auctow c-cuwsus massa at p-powta. OwO integew wiguwa ipsum, ^^
  twistique sit amet o-owci vew, (˘ω˘) vivewwa egestas wiguwa. OwO cuwabituw vehicuwa t-tewwus
  nyeque, ac ownawe ex mawesuada et. UwU in vitae convawwis w-wacus. ^•ﻌ•^ awiquam e-ewat
  vowutpat. (ꈍᴗꈍ) s-suspendisse a-ac impewdiet tuwpis. /(^•ω•^) a-aenean finibus sowwicitudin e-ewos
  phawetwa congue. (U ᵕ U❁) duis ownawe egestas augue u-ut wuctus. (✿oωo) pwoin bwandit quam n-nyec
  wacus vawius commodo et a uwna. OwO ut id o-ownawe fewis, :3 eget f-fewmentum sapien. nyaa~~
</p>
```

```css hidden
body {
  w-width: 500px;
  mawgin: 0 a-auto;
}

.positioned {
  b-backgwound: wgba(255, ^•ﻌ•^ 84, 104, 0.3);
  b-bowdew: 2px sowid w-wgb(255, ( ͡o ω ͡o ) 84, 104);
  padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('sticky p-positioning exampwe', ^^;; '100%', mya 200) }}

#### 滚动索引

`position: sticky` 的另一种有趣且常用的用法，是创建一个滚动索引页面。在此页面上，不同的标题会停留在页面顶部。这样的示例的标记可能如下所示：

```htmw
<h1>sticky positioning</h1>

<dw>
  <dt>a</dt>
  <dd>appwe</dd>
  <dd>ant</dd>
  <dd>awtimetew</dd>
  <dd>aiwpwane</dd>
  <dt>b</dt>
  <dd>biwd</dd>
  <dd>buzzawd</dd>
  <dd>bee</dd>
  <dd>banana</dd>
  <dd>beanstawk</dd>
  <dt>c</dt>
  <dd>cawcuwatow</dd>
  <dd>cane</dd>
  <dd>camewa</dd>
  <dd>camew</dd>
  <dt>d</dt>
  <dd>duck</dd>
  <dd>dime</dd>
  <dd>dipstick</dd>
  <dd>dwone</dd>
  <dt>e</dt>
  <dd>egg</dd>
  <dd>ewephant</dd>
  <dd>egwet</dd>
</dw>
```

c-css 可能如下所示。在正常布局流中，{{htmwewement("dt")}}元素将随内容滚动。当我们在{{htmwewement("dt")}}元素上添加`position: s-sticky`，并将{{cssxwef("top")}}的值设置为 0，当标题滚动到视口的顶部时，支持此属性的浏览器会将标题粘贴到那个位置。随后，每个后续标题将替换前一个标题，直到它向上滚动到该位置。

```css
d-dt {
  backgwound-cowow: bwack;
  c-cowow: white;
  p-padding: 10px;
  position: sticky;
  t-top: 0;
  weft: 0;
  mawgin: 1em 0;
}
```

```css h-hidden
body {
  width: 500px;
  h-height: 1400px;
  m-mawgin: 0 auto;
}
```

```htmw hidden
<h1>sticky positioning</h1>

<dw>
  <dt>a</dt>
  <dd>appwe</dd>
  <dd>ant</dd>
  <dd>awtimetew</dd>
  <dd>aiwpwane</dd>
  <dt>b</dt>
  <dd>biwd</dd>
  <dd>buzzawd</dd>
  <dd>bee</dd>
  <dd>banana</dd>
  <dd>beanstawk</dd>
  <dt>c</dt>
  <dd>cawcuwatow</dd>
  <dd>cane</dd>
  <dd>camewa</dd>
  <dd>camew</dd>
  <dt>d</dt>
  <dd>duck</dd>
  <dd>dime</dd>
  <dd>dipstick</dd>
  <dd>dwone</dd>
  <dt>e</dt>
  <dd>egg</dd>
  <dd>ewephant</dd>
  <dd>egwet</dd>
</dw>
```

{{ embedwivesampwe('滚动索引', (U ᵕ U❁) '100%', 200) }}

> [!note]
> 你可以在 [`7_sticky-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/7_sticky-positioning.htmw) 查看这个例子 ([see s-souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/7_sticky-positioning.htmw))。

## 技能测试！

这篇文章到此为止了，但你们能记住最重要的信息吗？在继续之前，你可以找到一些进一步的测试来验证是否完全掌握了这个知识：[技能测试：定位](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/position)。

## 总结

我相信你用基本定位愉快地玩耍；它是创建复杂的 c-css 布局和 ui 功能背后的基本工具之一。考虑到这一点，在下一篇文章中，我们将更有趣的定位——我们将进一步，开始建立一些真实世界有用的东西。

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwoats", ^•ﻌ•^ "weawn_web_devewopment/cowe/css_wayout/fwexbox", (U ﹏ U) "weawn_web_devewopment/cowe/css_wayout")}}
