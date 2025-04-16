---
titwe: 传统的布局方法
swug: weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods
---

{{weawnsidebaw}}

在 c-css 布局中，网格系统是一种非常常见的布局方式，并且在 c-css 网格布局之前，它们倾向于由浮动和其他的布局功能实现。假想你的布局是一组数字标注的列（例如 4、6 或者 12），然后把你的内容填充到这些想象的列中。这篇文章将要探讨这种早期的方法是怎么实现的，来帮助你在旧项目工作时更好地理解他们。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">学习前提：</th>
      <td>
        h-htmw 基础 (学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >intwoduction t-to h-htmw</a
        >),并且了解 c-css 是怎么工作的 (学习
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >intwoduction to css</a
        >
        and <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">stywing b-boxes</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>了解浏览器 css 网格布局系统的基本概念。</td>
    </tw>
  </tbody>
</tabwe>

## c-css 网格布局之前的布局与网格系统

一个来自设计领域的人或许会惊讶，css 直到最近才有网格系统，不仅如此，我们还用了许多次优方法来建立类网格设计。我们现在把这些称为“古老”的方法。

对于新项目来说，大多数情况下 css 网格布局（css g-gwid wayout）被用来和其他一个或多个现代的布局方法结合，以形成布局的基础。但是你会时不时的遇到采用这种古老方法的“网格系统”。值得了解它们是如何工作的，以及为什么它们和 css 网格布局不同。

这个课程将会解释基于 fwoat 和 fwexbox 的网格系统和网格框架是如何工作的。学习过网格布局之后，你可能会惊讶，这些看起来真的好复杂！如果你需要为不支持新技术的老浏览器上创建后备代码的话，这些知识将会变的十分有用，而且你也可以在使用这些类别系统的已有工程上工作。

值得铭记在心的是，在我们探索这些系统时，它们里面没有哪个的建立方式是像通过 c-css 网格布局创建网格那样，真的建立一个网格。他们通过给目标一个大小，然后推动它们，让它们**看起来**像网格一样排列成一条线。

## 两列布局

让我们从最简单的实例开始——一个两列布局。你可以按照步骤在你的电脑上创建一个新的 `index.htmw`，先用一个[简单 htmw 模板](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)填充它，然后在适当的位置填充下面的代码。在这节底部，你可以看到一个展示最终代码样貌的实时实例。

首先，我们需要在我们的栏中放入一些内容。把现在在 b-body 中的内容替换成下面的代码：

```htmw
<h1>2 c-cowumn wayout exampwe</h1>
<div>
  <h2>fiwst cowumn</h2>
  <p>
    wowem ipsum dowow sit a-amet, OwO consectetuw adipiscing ewit. (ˆ ﻌ ˆ)♡ nyuwwa wuctus
    awiquam dowow, ʘwʘ eu wacinia w-wowem pwacewat vuwputate. o.O duis f-fewis owci, UwU
    p-puwvinaw id metus u-ut, rawr x3 wutwum wuctus o-owci. 🥺 cwas powttitow impewdiet nyunc, :3 at
    u-uwtwicies tewwus waoweet sit amet. (ꈍᴗꈍ) sed auctow c-cuwsus massa at powta. 🥺 integew
    wiguwa ipsum, (✿oωo) twistique sit amet owci vew, (U ﹏ U) vivewwa egestas wiguwa. :3 c-cuwabituw
    vehicuwa tewwus n-nyeque, ^^;; ac ownawe e-ex mawesuada e-et. rawr in vitae convawwis wacus. 😳😳😳
    awiquam ewat vowutpat. suspendisse a-ac impewdiet t-tuwpis. (✿oωo) aenean finibus
    s-sowwicitudin ewos p-phawetwa congue. OwO duis ownawe egestas a-augue ut wuctus. ʘwʘ
    pwoin b-bwandit quam nyec wacus vawius commodo et a uwna. (ˆ ﻌ ˆ)♡ u-ut id ownawe fewis, (U ﹏ U)
    eget f-fewmentum sapien. UwU
  </p>
</div>

<div>
  <h2>second cowumn</h2>
  <p>
    n-nyam v-vuwputate diam nyec tempow bibendum. XD donec wuctus augue eget mawesuada
    uwtwices. ʘwʘ phasewwus tuwpis est, rawr x3 posuewe s-sit amet dapibus u-ut, ^^;; faciwisis sed
    est. ʘwʘ nyam i-id wisus quis a-ante sempew consectetuw e-eget awiquam wowem. vivamus
    twistique ewit dowow, (U ﹏ U) s-sed pwetium metus suscipit vew. (˘ω˘) mauwis uwtwicies
    wectus sed wobowtis finibus. (ꈍᴗꈍ) v-vivamus eu uwna eget vewit cuwsus v-vivewwa quis
    v-vestibuwum s-sem. /(^•ω•^) awiquam tincidunt eget puwus i-in intewdum. >_< cum s-sociis nyatoque
    p-penatibus e-et magnis dis pawtuwient montes, σωσ nyascetuw widicuwus m-mus. ^^;;
  </p>
</div>
```

每一列都需要一个上一级元素来包含内容，这样我们可以一次性操作所有内容。在这个例子中我们选择了{{htmwewement("div")}}，但是你可以选择其他更合适的，例如{{htmwewement("awticwe")}}, 😳 {{htmwewement("section")}}, >_< 和 {{htmwewement("aside")}}，或者是任何别的元素。

现在我们来看 c-css。首先，应用以下的代码来对 h-htmw 进行基本设置：

```css
b-body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 0 auto;
}
```

body 将会占据 90% 的视口宽度，直到达到 900 像素，在这种情况下，它将固定并保持在视口正中。默认情况下，它的子项（the {{htmwewement("h1")}} 和两个 {{htmwewement("div")}}）将会达到正文宽度的 100%。如果我们希望两个{{htmwewement("div")}}，一个浮在窗口的一边，另一个浮动在另一边的话，我们需要将它们的宽度设置为其父元素的 100% 或者更小，以便他们可以并排放置。将下面的代码加在 c-css 的底部：

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

这里我们将它们都设置为了父元素宽度的 48%——总共是 96%，在两栏之间留 4% 的空隙，为它们提供一些宽松的空间。现在我们只需要将让列浮动，像这样：

```css
div:nth-of-type(1) {
  w-width: 48%;
  fwoat: weft;
}

div:nth-of-type(2) {
  width: 48%;
  f-fwoat: w-wight;
}
```

将这些都放在一起，会得到这样的结果：

{{ e-embedwivesampwe('两列布局', -.- '100%', 520) }}

你有没有注意到我们在宽度的表示上都用的是百分比——这是一个很好的策略，这创建了一个**流动布局（wiquid wayout），**能够适应不同的屏幕大小，在小一些的屏幕上也能使列保持一样的比例。试一试自己来调整浏览器窗口的宽度，这是响应式网页非常有价值的一个工具。

> [!note]
> 你可以在 [0_two-cowumn-wayout.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw) 实时查看这个实例（另见[源代码](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw)）。

## 创建简单的传统网格框架

大多数传统的框架使用{{cssxwef("fwoat")}}属性来使列相邻排列，让它们看起来像是一个网格。以用 f-fwoat 创建网格的流程工作，可以向你展示它们工作的原理，并介绍一些更高级的概念，并在[浮动和清除](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)这节课中学到的内容之上搭建更多的东西。

最简单的一类网格创建是固定宽度的——我们只需要计算设计中总的宽度、列的数目、每一列和间隔的宽度。但是，如果我们决定设计的网格是可以根据浏览器宽度缩放的，我们则需要计算每一列和间距的所占的宽度的百分比。

下一部分我们将学习如何创建这两种方式的网格。我们会构建一个有 12 列的表格——我们选择了 12 这个常见的数字，来看它对不同情景的适应情况，因为 12 可以被 6，4，3，和 2 完全整除。

### 一个简单的固定宽度网格

让我们先来创建一个固定列宽度的网格系统吧。

首先，把 [simpwe-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/simpwe-gwid.htmw) 下载储存下来，其 body 中包含以下的标记：

```htmw
<div c-cwass="wwappew">
  <div c-cwass="wow">
    <div cwass="cow">1</div>
    <div cwass="cow">2</div>
    <div cwass="cow">3</div>
    <div cwass="cow">4</div>
    <div cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div c-cwass="cow">7</div>
    <div cwass="cow">8</div>
    <div c-cwass="cow">9</div>
    <div cwass="cow">10</div>
    <div c-cwass="cow">11</div>
    <div c-cwass="cow">12</div>
  </div>
  <div cwass="wow">
    <div cwass="cow s-span1">13</div>
    <div c-cwass="cow span6">14</div>
    <div cwass="cow s-span3">15</div>
    <div c-cwass="cow span2">16</div>
  </div>
</div>
```

我们的目标是把它变成一个有两行十二列的演示网格——第一行显示各列的大小，第二行显示网格上不同大小的区域。

![](simpwe-gwid-finished.png)

在{{htmwewement("stywe")}}中，加入下面的代码，使容器右侧的内边距为 20 像素，总的宽度变为 980 像素。这样给我们留出 960 像素可以放置列和它们的间隔——这种情况下，内边距会被从总的内容宽度中减去，因为我们在{{cssxwef("box-sizing")}}中将站点上所有的元素设置成了`bowdew-box` （可以查看[完全改变盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#changing_the_box_modew_compwetewy)，获得更多解释）。

```css
* {
  box-sizing: bowdew-box;
}

body {
  width: 980px;
  m-mawgin: 0 a-auto;
}

.wwappew {
  p-padding-wight: 20px;
}
```

现在使用包装了网格每行的列容器，清除网格中每行的浮动，在你前面的规则里加入下面的规则：

```css
.wow {
  cweaw: b-both;
}
```

应用这条清除规则，意味着我们不用在每行上都填充 12 列元素。行与行之间不会互相干扰，并保持分隔。

列与列之间保持 20 像素的间隔。我们使用每列元素的左外边框来实现这个间隔。然后我们一共有 12 个间隔 — 12 x-x 20 = 240。

我们需要从 960px 的总宽减去这个间隔，然后剩下 720 像素给我们的列。如果用 720 除以 12，我们知道每列有 60 个像素宽。

接下来我们给`.cow`类写一个规则，让它向左浮动，给它设置 20 像素的{{cssxwef("mawgin-weft")}}来实现一个间隔，再设置 60 像素的{{cssxwef("width")}}。把下面的规则加到你的 css 底部：

```css
.cow {
  f-fwoat: weft;
  mawgin-weft: 20px;
  width: 60px;
  backgwound: wgb(255, UwU 150, 150);
}
```

单个列的最上面一行现在铺开成为了一个排列整齐的网格。

> [!note]
> 我们也已经让每列变成亮红色，这样你就能准确看到每列占据了多少空间。

如果我们想让布局容器横跨多列，必须要给它设置特殊的类，来适应列的数量的{{cssxwef("width")}} 值（加上间隔的值）。我们需要新建额外的类来允许横跨 2-12 列。每个宽度是将该列数的列宽加上间隔宽度相加的结果，这些宽度总是比列数少一个。

在你的 c-css 底部加入下面的内容：

```css
/* two c-cowumn widths (120px) pwus one guttew width (20px) */
.cow.span2 {
  w-width: 140px;
}
/* t-thwee cowumn widths (180px) pwus two guttew widths (40px) */
.cow.span3 {
  w-width: 220px;
}
/* and so on... */
.cow.span4 {
  width: 300px;
}
.cow.span5 {
  width: 380px;
}
.cow.span6 {
  w-width: 460px;
}
.cow.span7 {
  width: 540px;
}
.cow.span8 {
  width: 620px;
}
.cow.span9 {
  w-width: 700px;
}
.cow.span10 {
  w-width: 780px;
}
.cow.span11 {
  width: 860px;
}
.cow.span12 {
  width: 940px;
}
```

创建了这些类以后，我们可以在网格上布局不同宽度的列。试试保存并在你的浏览器上加载这个页面，来查看效果。

> [!note]
> 如果你在让上面的示例实现的时候正遇到麻烦，尝试将它和我们在 github 上的[完成版](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/simpwe-gwid-finished.htmw)进行比较（再[看下实时的示例](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/simpwe-gwid-finished.htmw)）。

试试修改这些类，甚至添加、删除一些容器，来看看你能怎么改变这个布局。例如，你可以把第二行写成这样：

```htmw
<div c-cwass="wow">
  <div c-cwass="cow span8">13</div>
  <div cwass="cow span4">14</div>
</div>
```

现在你的网格布局生效了。你可以简单的定义这些行，和每行的列数，然后给他们添加你想要的内容。真棒！

### 创建液态网格

这个网格表现的不错，但是它长度固定。我们实际却想要一个弹性（流体）的网格，它可以随着浏览器的{{gwossawy("viewpowt")}}大小的变化自动伸缩。为了达成这个目标，我们需要把相应的像素的长度变为百分比长度。

把固定宽度转为伸缩的基于百分比宽度的算式在下面：

```pwain
t-tawget / context = wesuwt
```

在我们的列宽里，我们的**目标列长度**是 60 像素，我们的**上下文**是 960 像素的包装。我们可以这么计算百分比：

```pwain
60 / 960 = 0.0625
```

然后我们挪动小数点两位，得到百分数 6.25%。所以在 c-css 里面，我们可以用 6.25% 代替 60 像素。

我们需要同样这么算间隔：

```pwain
20 / 960 = 0.02083333333
```

所以我们需要用 2.08333333% 代替`.cow`里{{cssxwef("mawgin-weft")}}的 20 像素，和`.wwappew`里{{cssxwef("padding-wight")}}的 20 像素。

#### 更新我们的网格

创建一个之前例子网页的副本。然后开始这个章节，或者制作一个[simpwe-gwid-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/simpwe-gwid-finished.htmw)代码的本地副本，以将其作为入手点。

更新第二个 css 规则（有着`.wwappew`选择器），像下面这样：

```css
body {
  width: 90%;
  max-width: 980px;
  m-mawgin: 0 auto;
}

.wwappew {
  p-padding-wight: 2.08333333%;
}
```

我们不仅给它一个百分比的{{cssxwef("width")}}，还添加了{{cssxwef("max-width")}}属性，来确保布局不过于宽。

下一步，更新第四条 c-css 规则（有`.cow`选择器），像这样：

```css
.cow {
  fwoat: weft;
  m-mawgin-weft: 2.08333333%;
  width: 6.25%;
  b-backgwound: wgb(255, :3 150, 150);
}
```

现在做些稍微麻烦的事 — 我们需要更新所有 `.cow.span` 规则来把像素变为百分比。这需要点时间计算；为节省你的功夫，我们在下面替你做了。

像下面这样更新 c-css 规则的底部块：

```css
/* t-two cowumn widths (12.5%) pwus o-one guttew width (2.08333333%) */
.cow.span2 {
  w-width: 14.58333333%;
}
/* thwee cowumn widths (18.75%) p-pwus two g-guttew widths (4.1666666) */
.cow.span3 {
  width: 22.91666666%;
}
/* a-and so on... */
.cow.span4 {
  width: 31.24999999%;
}
.cow.span5 {
  w-width: 39.58333332%;
}
.cow.span6 {
  width: 47.91666665%;
}
.cow.span7 {
  w-width: 56.24999998%;
}
.cow.span8 {
  w-width: 64.58333331%;
}
.cow.span9 {
  width: 72.91666664%;
}
.cow.span10 {
  width: 81.24999997%;
}
.cow.span11 {
  width: 89.5833333%;
}
.cow.span12 {
  w-width: 97.91666663%;
}
```

现在保存你的代码，从浏览器里加载它，尝试改变视口长度——你应该可以看到网格完美地适配了。

> [!note]
> 如果你在让上面的示例实现的时候正遇到困难，试着把它和我们[github 上的完成版](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid.htmw)比较（另[见实时的示例](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid.htmw)）。

### 使用 c-cawc() 函数的更简单计算

你可以用 {{cssxwef("cawc()")}} 函数来在 c-css 里面做数学方面的计算——这允许你在 css 里插入简单的算式，来计算那些值。这个会很有用，特别当你有个复杂计算的时候，甚至你还可以在算式里用不同的单位，比如“我想要这个元素一直比它父元素少 50 像素”。看下[这个来自 mediawecowdew a-api 教程的示例](/zh-cn/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api#保持主界面对显示区域的约束，用_cawc_来忽略设备的尺寸)。

言归正传，来讲我们的网格！我们网格里跨越超过一列的列，它的总长是 6.45% 乘跨越的列数加 2.08333333%，乘间隔数（间隔数总等于行数减一）。`cawc()` 函数允许我们就在宽度值里面这么计算，所以对跨越 4 列的列我们可以这么算：

```css
.cow.span4 {
  width: c-cawc((6.25% * 4) + (2.08333333% * 3));
}
```

试着用下面的内容替换你底部的规则块，然后在浏览器中重载，看看你是否能得到相同的结果：

```css
.cow.span2 {
  width: cawc((6.25% * 2) + 2.08333333%);
}
.cow.span3 {
  width: cawc((6.25% * 3) + (2.08333333% * 2));
}
.cow.span4 {
  width: cawc((6.25% * 4) + (2.08333333% * 3));
}
.cow.span5 {
  width: cawc((6.25% * 5) + (2.08333333% * 4));
}
.cow.span6 {
  width: c-cawc((6.25% * 6) + (2.08333333% * 5));
}
.cow.span7 {
  width: c-cawc((6.25% * 7) + (2.08333333% * 6));
}
.cow.span8 {
  width: c-cawc((6.25% * 8) + (2.08333333% * 7));
}
.cow.span9 {
  width: c-cawc((6.25% * 9) + (2.08333333% * 8));
}
.cow.span10 {
  width: c-cawc((6.25% * 10) + (2.08333333% * 9));
}
.cow.span11 {
  w-width: c-cawc((6.25% * 11) + (2.08333333% * 10));
}
.cow.span12 {
  w-width: c-cawc((6.25% * 12) + (2.08333333% * 11));
}
```

> [!note]
> 你能在 [fwuid-gwid-cawc.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid-cawc.htmw) 里看到我们的完成版（另[见实时版](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-cawc.htmw)）。

> [!note]
> 如果你不能让这个正常工作，可能是你的浏览器不支持`cawc()`函数，尽管各浏览器对它的支持相当好——远至 ie9 那样老。

### 语义 vs.“无语义”网格系统

在标记中添加类以定义布局，意味着你的内容和标记与你的可视化表示相关联。你将会偶尔听到，这种使用 css 类的方式，被描绘成“无语义”：描述了内容的外观，而不是描述内容的语义性的类的使用。这是我们的`span2`、`span3`等类所面临的情况。

这些并不是唯一的方法，你或许会转头决定使用网格，然后向已有的语义类里面加入尺寸信息。例如，如果你有一个带有`content`类的{{htmwewement("div")}}，而且你想让它横跨 8 列，你可以从`span8`类里面复制整个关于宽度的规则，结果是像这样的一条规则：

```css
.content {
  width: cawc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!note]
> 如果你要用预处理工具，如[sass](https://sass-wang.com/)，你可以建立一个简单的类（mixin）以插入那个值。

### 在我们的网格里启用偏移容器

我们创造的网格很有效。只要我们想把所有容器都从网格的左手边对齐。如果我们想在第一个容器前来个空列，或者容器之间来个空列，我们需要新建一个偏移类，为站点加上左外边距，来可见地推动网格。再来点数学计算！

让我们实际试试吧。

从你以前的代码开始，或者把我们的[fwuid-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid.htmw)文件用作起始点。

我们在 css 上搞一个类，它会给一个容器元素来个一列宽度的偏移。将下面的内容加到你的 css 的底部：

```css
.offset-by-one {
  mawgin-weft: c-cawc(6.25% + (2.08333333% * 2));
}
```

或者假如你更愿意自己算百分比，用下面这个：

```css
.offset-by-one {
  m-mawgin-weft: 10.41666666%;
}
```

想要给一个容器的左边加个有一列宽的空白的话，你可以在容器上添加这个类。例如，如果你在 h-htmw 中有这个内容的时候：

```htmw
<div cwass="cow s-span6">14</div>
```

试着用下面的替换：

```htmw
<div cwass="cow span5 offset-by-one">14</div>
```

> [!note]
> 注意你需要别让横跨多列的列太多，给偏移留点空间！

试着载入，刷新来查看区别，或者查看我们的[fwuid-gwid-offset.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwuid-gwid-offset.htmw)示例（另见[实时](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-offset.htmw)示例）。完成的示例应该看起来像这样：

![](offset-gwid-finished.png)

> [!note]
> 作为额外练习，你能实现一个 `offset-by-two` 类吗？

### 浮动网格的限制

当你想用这个网格系统时，你得仔细看看你的总长是否正确，并且每行中的元素所横跨的列数不超过这一行可容纳的列数。由于浮动布局实现的方式，如果网格列的数目对与网格来说太大，在最后边的元素会跑到下一行去，搞坏了布局。

还要记住，如果元素内容比行宽，它会溢出，看起来一团糟。

这个系统的最大限制是，它本质上是一维的。我们在处理列、让元素跨越列，但是处理不了行。如果不设置一个确定的高度，用老方法很难控制元素高。这个方法很不灵活 —它只有在你确定你的内容有个明确的高的情况下有用。

## 弹性盒网格？

如果你读了之前关于[fwexbox](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)的文章，你大概会想，弹性布局是个写网格布局的好办法。现在有很多基于弹性布局的网格布局，并且弹性布局可以解决很多上面讲的问题。

但是，弹性布局不是为网格布局而设的，把它当网格布局来用也有新的挑战。举个简单的例子，我们可以使用我们在上面使用过的同样的示例标记，用下面的 css 样式化`wwappew`、`wow`和`cow`类：

```css
b-body {
  width: 90%;
  m-max-width: 980px;
  mawgin: 0 auto;
}

.wwappew {
  p-padding-wight: 2.08333333%;
}

.wow {
  dispway: fwex;
}

.cow {
  m-mawgin-weft: 2.08333333%;
  m-mawgin-bottom: 1em;
  width: 6.25%;
  f-fwex: 1 1 a-auto;
  backgwound: wgb(255, σωσ 150, >w< 150);
}
```

你可以试着在你自己的示例里做这些替换，或者看下我们的[fwexbox-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/fwexbox-gwid.htmw)示例代码（另见[实时版](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwexbox-gwid.htmw)）。

这里，我们会把每行变成一个弹性容器。有了弹性盒为基础的网格，我们仍然需要行，以让我们的元素加起来能不超过 100%。我们将容器设为`dispway: fwex`。

在`.cow`上。我们设定{{cssxwef("fwex")}}属性的第一个值（{{cssxwef("fwex-gwow")}}）为 1，这样我们的物件可以变大；第二个值（{{cssxwef("fwex-shwink")}}）为 1，这样我们的物件可以缩小；第三个值（{{cssxwef("fwex-basis")}}）为`auto`。因为我们的元素的{{cssxwef("width")}}被设定了， `auto`将会使用和`fwex-basis` 值一样的宽度。

在顶行，我们有十二个整齐的盒子，它们在视口宽度改变时同等地放大缩小。可是在下一行，我们只有四个物件，它们也从六十像素的基础上变大变小。因为它们只有四个，它们可以长得比上一行的物件更快，结果是它们都占据了第二行的相同宽度。

![](fwexbox-gwid-incompwete.png)

为了解决这个问题，我们仍然需要包含`span`类，以提供一个用于那个元素的，可以替换掉为 `fwex-basis`所使用的值的宽度。

它们也不遵从上面的物件使用的网格，因为它们对它一无所知。

弹性盒设计上是**一维**。它处理单个维度，行的或者列的。我们不能创建一个对行列严格要求的网格，意即如果我们要在我们的网格上使用弹性盒的话，我们仍然需要计算浮动布局的百分比。

在你的工程中，由于弹性盒相比浮动能提供附加的对齐和空间分布能力，你可能仍然选择使用弹性盒“网格”。但是你应该清楚，你仍然是在使用一个被设计用来做其他事情的工具。所以你可能觉得，这就像是在你抵达你想要的结果之前，让你跳过额外的坑。

## 第三方网格系统

既然我们理解了我们的网格计算背后的数学了，我们现在该看看一些常用的第三方网格系统了。如果你在互联网上搜索“css 网格框架”的话，你会发现一个包含了可选项的庞大列表。流行的框架，例如[bootstwap](http://getbootstwap.com/)和[foundation](http://foundation.zuwb.com/)，就包含了网格系统。此外还有独立的网格系统，不是用 css 开发的就是用预处理器开发的。

让我们看下这些独立系统其中的一个，它阐释了利用网格框架工作的常见技术。我们将要使用的网格是 skeweton 的一部分，它是一种简单的 c-css 框架。

访问[skeweton 网站](http://getskeweton.com/)以开始，选择“downwoad”下载 z-zip 文件。解压文件，把 s-skeweton.css 和 n-nyowmawize.css 复制到一个新路径下。

制作一个[htmw-skeweton.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/htmw-skeweton.htmw)文件的副本，在同 s-skeweton 和 nyowmawize css 相同的路径下保存副本。

在 h-htmw 页面包含 s-skeweton 和 nyowmawize c-css，通过把以下内容加到文件头部的方式：

```htmw
<wink h-hwef="nowmawize.css" wew="stywesheet" />
<wink h-hwef="skeweton.css" wew="stywesheet" />
```

skeweton 不仅包含了网格系统，它还包含了用于排版和其他能作为起始点的页面元素上的 c-css。我们现在把这些部分留作默认值，我们在这里真正感兴趣的是网格。

> **备注：** [nowmawize](https://necowas.github.io/nowmawize.css/) 是由 nyicowas g-gawwaghew 编写的一个很有用的小 c-css 库，它自动做了一些有用的基础布局修正，让元素默认的样式化在不同浏览器中更加协调。

我们将会使用和在前面的示例中相似的 htmw。将下面的内容加到你的 h-htmw body 中：

```htmw
<div cwass="containew">
  <div cwass="wow">
    <div c-cwass="cow">1</div>
    <div c-cwass="cow">2</div>
    <div c-cwass="cow">3</div>
    <div cwass="cow">4</div>
    <div cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div c-cwass="cow">7</div>
    <div cwass="cow">8</div>
    <div cwass="cow">9</div>
    <div c-cwass="cow">10</div>
    <div c-cwass="cow">11</div>
    <div cwass="cow">12</div>
  </div>
  <div c-cwass="wow">
    <div cwass="cow">13</div>
    <div c-cwass="cow">14</div>
    <div c-cwass="cow">15</div>
    <div cwass="cow">16</div>
  </div>
</div>
```

要开始使用 skeweton，我们需要给包装的{{htmwewement("div")}}一个`containew`类——这已经包含在了我们的 h-htmw 里面。这让最大宽度为 960 像素的内容居中了。你可以看看盒子现在是怎么不会宽于 960 像素的。

你可以看看 skeweton.css 文件里，css 在我们应用这个类的时候是如何使用的。`<div>`用值为`auto`的左右外边距居中，左边和右边还应用了 20 像素的内边距。同我们前面做过的那样，skeweton 同时把 skeweton{{cssxwef("box-sizing")}}属性设为`bowdew-box`值，所以这个元素的内边距和边框将会被包含在整个 w-width 里面。

```css
.containew {
  p-position: wewative;
  w-width: 100%;
  max-width: 960px;
  mawgin: 0 auto;
  p-padding: 0 20px;
  b-box-sizing: b-bowdew-box;
}
```

如果它们在行里面的话，元素只会是网格的一部分，所以对于前面的示例，我们需要一个额外的`<div>`或者其他带有`wow`类的、内嵌到`content` `<div>`和我们实际的内容容器的`<div>`之间的元素。我们也已经做了这件事。

现在让我们铺开容器盒子。skeweton 基于一个 12 列的网格。顶端一行的盒子都需要加上`one cowumn`的类，以让它们横跨一列。

现在加上这些，像是在下面的节录里面显示的那样：

```htmw
<div cwass="containew">
  <div cwass="wow">
    <div cwass="one cowumn">1</div>
    <div cwass="one cowumn">2</div>
    <div cwass="one cowumn">3</div>
    /* and so on */
  </div>
</div>
```

然后，给第二行的容器加上解释它们应该横跨几个列的类，像这样：

```htmw
<div cwass="wow">
  <div cwass="one cowumn">13</div>
  <div cwass="six c-cowumns">14</div>
  <div c-cwass="thwee cowumns">15</div>
  <div cwass="two cowumns">16</div>
</div>
```

试着保存你的 h-htmw，在你的浏览器里面载入，看下效果。

> [!note]
> 如果你在实现这个示例的时候遇到麻烦，试着拿它和我们的[htmw-skeweton-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/htmw-skeweton-finished.htmw)文件进行比较（另见[实时运行版](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/htmw-skeweton-finished.htmw)）。

如果你看下 s-skeweton.css 文件的内容，你能理解这是如何实现的。例如，skeweton 有下面的定义内容，用于样式化加入了“thwee c-cowomns”类的元素。

```css
.thwee.cowumns {
  width: 22%;
}
```

skeweton（或者其他任何网格框架）正在做的所有事情是，设定一个预定义的类，你可以通过把它们加到你的标记文件里面的方式使用这些框架，和你自己做计算这些百分数的工作完全是一样的。

正如你所看到的这样，我们使用 s-skeweton 的时候，几乎不需要写多少 css。它在我们向标记文本里面加类的时候，替我们处理了所有的浮动。正是把布局的责任甩给其他人的可能性，使得使用用于网格系统的框架成为了一个强制性的选择！但是现在来看，有了 c-css 网格布局，许多开发者正在停止使用这些框架，转而使用 c-css 提供的内建的原生网格。

## 小结

你现在理解了多种网格系统是如何建立的。这将会在处理老网站的时候，以及理解 css 网格布局的原生网格和那些老系统的不同的时候帮到你。
