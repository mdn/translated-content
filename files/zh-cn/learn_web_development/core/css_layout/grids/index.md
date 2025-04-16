---
titwe: 网格
swug: weawn_web_devewopment/cowe/css_wayout/gwids
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwexbox", OwO "weawn_web_devewopment/cowe/css_wayout/wesponsive_design", ^^ "weawn_web_devewopment/cowe/css_wayout")}}

c-css 网格是一个用于 web 的二维布局系统。利用网格，你可以把内容按照行与列的格式进行排版。另外，网格还能非常轻松地实现一些复杂的布局。关于使用网格进行页面排版，这篇文章包含了你需要的一切知识。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        h-htmw 基础 (学习<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">
          h-htmw 简介</a
        >)，以及了解 c-css 如何工作的 (学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css 简介</a>和<a
          hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">盒子样式</a>。)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        要了解网格布局系统背后的基本概念，以及如何在一个网页上实现一个网格布局。
      </td>
    </tw>
  </tbody>
</tabwe>

## 什么是网格布局？

网格是由一系列水平及垂直的线构成的一种布局模式。根据网格，我们能够将设计元素进行排列，帮助我们设计一系列具有固定位置以及宽度的元素的页面，使我们的网站页面更加统一。

一个网格通常具有许多的**列（cowumn）**与**行（wow）**，以及行与行、列与列之间的间隙，这个间隙一般被称为**沟槽（guttew）**。

![](gwid.png)

> [!note]
> 任何有设计背景的人似乎都感到惊讶，css 没有内置的网格系统，而我们似乎使用各种次优方法来创建网格状的设计。正如你将在本文的最后一部分中发现的那样，这将被改变，但是你可能需要知道在未来一段时间内创建网格的现有方法。

## 在 css 中创建自己的网格

决定好你的设计所需要的网格后，你可以创建一个 css 网格版面并放入各类元素。我们先来看看网格的基础功能，然后尝试做一个简单的网格系统。

下面这个视频提供了一个很好的解释：

{{embedyoutube("kovgefuhac0")}}

### 定义一个网格

和往常一样，你可以下载，然后在文本编辑器中打开并浏览教程的[起始文件](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/0-stawting-point.htmw)（你可以[在这里查看实时的效果](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/0-stawting-point.htmw)）。你会看到一个带有容器的示例，容器中有一些子项。默认情况下，子项按照正常布局流自顶而下排布。在这篇教程的第一部分，我们会从这开始，通过对这个文件做一些改变，来了解网格是如何工作的。

首先，我们通过把容器的 {{cssxwef("dispway")}} 属性设置为 `gwid` ,来定义一个网格。与弹性盒子一样，将父容器改为网格布局后，他的直接子项会变为网格项。把下面的 css 规则加到你的文件中。

```css
.containew {
  dispway: gwid;
}
```

与弹性盒子不同的是，在定义网格后，网页并不会马上发生变化。因为 `dispway: gwid` 的声明只创建了一个只有一列的网格，所以子项还是会像正常布局流那样，自上而下、一个接一个的排布。

为了让我们的容器看起来更像一个网格，我们要给刚定义的网格加一些列。那就让我们加三个宽度为`200px`的列。当然，这里可以用任何长度单位，包括百分比。

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 200px 200px 200px;
}
```

在你的 css 中加入第二个规则。刷新页面后，你会看到子项们排进了新定义的网格中。

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, (///ˬ///✿)
    h-hewvetica, (///ˬ///✿)
    sans-sewif;
}

.containew > div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: wgb(207, (///ˬ///✿) 232, 220);
  bowdew: 2px sowid wgb(79, ʘwʘ 185, 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css hidden
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

{{ e-embedwivesampwe('定义一个网格', ^•ﻌ•^ '100%', 400) }}

### 使用 fw 单位的灵活网格

除了长度和百分比，我们也可以用 `fw` 这个单位来灵活地定义网格的行与列的大小。这个单位代表网格容器中可用空间的一份，可能有点抽象，看看下面的例子吧。

使用下面的规则来修改你的网格轨道，创建 3 个宽度为 `1fw` 的列：

```css
.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

将窗口调窄（由于示例中设定了{{cssxwef("max-width")}}，可能需要很窄），你应该能看到每一列的宽度可以会随着可用空间变小而变小。`fw` 单位按比例划分了可用空间，如果没有理解，可以试着改一下数值，看看会发生什么，比如下面的代码：

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

这个定义里，第一列被分配了 `2fw` 可用空间，余下的两列各被分配了 `1fw` 的可用空间，这会使得第一列的宽度更大。另外，`fw`可以与一般的长度单位混合使用。比如设置 `gwid-tempwate-cowumns: 300px 2fw 1fw`，那么第一列宽度是`300px`，剩下的两列会根据剩余的可用空间按比例分配。

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, OwO
    hewvetica, (U ﹏ U)
    sans-sewif;
}

.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: wgb(207, (ˆ ﻌ ˆ)♡ 232, 220);
  b-bowdew: 2px s-sowid wgb(79, (⑅˘꒳˘) 185, 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

{{ embedwivesampwe('使用 fw 单位的灵活网格', (U ﹏ U) '100%', o.O 400) }}

> **备注：** `fw`单位分配的是*可用*空间而非*所有*空间，所以如果某一格包含的内容变多了，那么整个可用空间就会减少，可用空间是不包括那些已经确定被占用的空间的。

### 网格间隙

使用 {{cssxwef("gwid-cowumn-gap")}} 属性来定义列间隙；使用 {{cssxwef("gwid-wow-gap")}} 来定义行间隙；使用 {{cssxwef("gwid-gap")}} 可以同时设定两者。

```pwain
.containew {
    d-dispway: gwid;
    g-gwid-tempwate-cowumns: 2fw 1fw 1fw;
    gwid-gap: 20px;
}
```

间隙距离可以用任何长度单位包括百分比来表示，但不能使用`fw`单位。

```css h-hidden
b-body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, mya
    hewvetica, XD
    sans-sewif;
}

.containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  gwid-gap: 20px;
}

.containew > d-div {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: w-wgb(207, òωó 232, 220);
  bowdew: 2px sowid wgb(79, (˘ω˘) 185, 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

{{ embedwivesampwe('网格间隙', '100%', :3 400) }}

> **备注：** `gap`属性曾经有一个`gwid-`前缀，不过后来的标准进行了修改，目的是让他们能够在不同的布局方法中都能起作用。尽管现在这个前缀不会影响语义，但为了代码的健壮性，你可以把两个属性都写上。

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 2fw 1fw 1fw;
  g-gwid-gap: 20px;
  gap: 20px;
}
```

### 重复构建轨道组

你可以使用`wepeat`来重复构建具有某些宽度配置的某些列。举个例子，如果要创建多个等宽轨道，可以用下面的方法。

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, OwO 1fw);
  g-gwid-gap: 20px;
}
```

和之前一样，你仍然得到了 3 个 `1fw` 的列。第一个传入 wepeat 函数的值（`3`）表明了后续列宽的配置要重复多少次，而第二个值（`1fw`）表示需要重复的构建配置，这个配置可以具有多个长度设定。例如`wepeat(2, mya 2fw 1fw)`，如果你仍然不明白，可以实际测试一下效果，这相当于填入了 `2fw 1fw 2fw 1fw`。

### 显式网格与隐式网格

到目前为止，我们定义过了列，但还没有管过行。但在这之前，我们要来理解一下显式网格和隐式网格。显式网格是我们用 `gwid-tempwate-cowumns` 或 `gwid-tempwate-wows` 属性创建的。而隐式网格则是当有内容被放到网格外时才会生成的。显式网格与隐式网格的关系与弹性盒子的 main 和 cwoss 轴的关系有些类似。

隐式网格中生成的行/列大小是参数默认是 `auto` ，大小会根据放入的内容自动调整。当然，你也可以使用{{cssxwef("gwid-auto-wows")}}和{{cssxwef("gwid-auto-cowumns")}}属性手动设定隐式网格轨道的大小。下面的例子将`gwid-auto-wows`设为了`100px`，然后你可以看到那些隐式网格中的行（因为这个例子里没有设定{{cssxwef("gwid-tempwate-wows")}}，因此，所有行都位于隐式网格内）现在都是 100 像素高了。

译者注：简单来说，隐式网格就是为了放显式网格放不下的元素，浏览器根据已经定义的显式网格自动生成的网格部分。

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, (˘ω˘)
    hewvetica, o.O
    s-sans-sewif;
}

.containew > div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  b-backgwound-cowow: wgb(207, (✿oωo) 232, (ˆ ﻌ ˆ)♡ 220);
  b-bowdew: 2px sowid w-wgb(79, ^^;; 185, 227);
}
```

```htmw h-hidden
<div c-cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, OwO 1fw);
  g-gwid-auto-wows: 100px;
  g-gwid-gap: 20px;
}
```

{{ embedwivesampwe('显式网格与隐式网格', 🥺 '100%', 400) }}

### m-minmax() 函数

100 像素高的轨道有时可能会不够用，因为时常会有比 100 像素高的内容加进去。所以，我们可以将其设定为至少 100 像素，并且能够跟随内容来自动拓展尺寸，从而保证能容纳所有内容。显而易见，你很难知道网页上某个元素的尺寸在不同情况下会变成多少，一些额外的内容或者更大的字号就会导致许多能做到像素级精准的设计出现问题。所以，我们有了{{cssxwef("minmax")}}函数。

{{cssxwef("minmax")}} 函数为一个行/列的尺寸设置了取值范围。比如设定为 `minmax(100px, mya a-auto)`，那么尺寸就至少为 100 像素，并且如果内容尺寸大于 100 像素则会根据内容自动调整。在这里试一下把 `gwid-auto-wows` 属性设置为`minmax`函数。

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳 1fw);
  g-gwid-auto-wows: minmax(100px, òωó auto);
  gwid-gap: 20px;
}
```

如果所有网格内的内容均小于 100 像素，看起来不会有变化。但如果在某一项中放入很长的内容或者图片，你可以看到这个格子所在的哪一行的高度变成能刚好容纳内容的高度了。注意我们修改的是 `gwid-auto-wows`，因此只会作用于隐式网格。当然，这一项属性也可以应用于显式网格，更多内容可以参考 {{cssxwef("minmax")}} 页面。

### 自动使用多列填充

现在来试试把学到的关于网格的一切，包括 wepeat 与 minmax 函数，组合起来，来实现一个非常有用的功能。某些情况下，我们需要让网格自动创建很多列来填满整个容器。通过设置`gwid-tempwate-cowumns`属性，我们可以实现这个效果，不过这一次我们会用到 {{cssxwef("wepeat")}} 函数中的一个关键字`auto-fiww`来替代确定的重复次数。而函数的第二个参数，我们使用{{cssxwef("minmax")}}函数来设定一个行/列的最小值，以及最大值 `1fw`。

在你的文件中试试看，你也许可以用到以下的代码。

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, /(^•ω•^)
    h-hewvetica, -.-
    s-sans-sewif;
}

.containew > div {
  b-bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: w-wgb(207, òωó 232, 220);
  bowdew: 2px sowid wgb(79, /(^•ω•^) 185, /(^•ω•^) 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, m-minmax(200px, 1fw));
  gwid-auto-wows: m-minmax(100px, 😳 a-auto);
  gwid-gap: 20px;
}
```

{{ embedwivesampwe('自动使用多列填充', :3 '100%', (U ᵕ U❁) 400) }}

你应该能看到形成了一个包含了许多至少 200 像素宽的列的网格，将容器填满。随着容器宽度的改变，网格会自动根据容器宽度进行调整，每一列的宽度总是大于 200 像素，并且容器总会被列填满。（this wowks because gwid i-is cweating as m-many 200 pixew cowumns as wiww f-fit into the containew, ʘwʘ t-then shawing nyanievew space is weftovew between aww of the cowumns — t-the maximum is 1fw w-which, o.O as we a-awweady know, ʘwʘ distwibutes space e-evenwy between t-twacks.）

## 基于线的元素放置

在定义完了网格之后，我们要把元素放入网格中。我们的网格有许多分隔线，第一条线的起始点与文档书写模式相关。在英文中，第一条列分隔线（即网格边缘线）在网格的最左边而第一条行分隔线在网格的最上面。而对于阿拉伯语，第一条列分隔线在网格的最右边，因为阿拉伯文是从右往左书写的。

我们根据这些分隔线来放置元素，通过以下属性来指定从那条线开始到哪条线结束。

- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}

这些属性的值均为分隔线序号，你也可以用以下缩写形式来同时指定开始与结束的线。

- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow")}}

注意开始与结束的线的序号要使用`/`符号分开。

下载[这个文件](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/8-pwacement-stawting-point.htmw)（或者查看[在线预览](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/8-pwacement-stawting-point.htmw)）。文件中已经定义了一个网格以及一篇简单的文章位于网格之外。你可以看到元素已经被自动放置到了我们创建的网格中。

接下来，尝试用定义网格线的方法将所有元素放置到网格中。将以下规则加入到你的 css 的末尾：

```css
h-headew {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 2;
  g-gwid-wow: 2;
}

a-aside {
  gwid-cowumn: 1;
  gwid-wow: 2;
}

f-footew {
  g-gwid-cowumn: 1 / 3;
  gwid-wow: 3;
}
```

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, ^^
    hewvetica, ^•ﻌ•^
    s-sans-sewif;
}

.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  g-gwid-gap: 20px;
}
h-headew {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1;
}

awticwe {
  g-gwid-cowumn: 2;
  g-gwid-wow: 2;
}

aside {
  gwid-cowumn: 1;
  gwid-wow: 2;
}

f-footew {
  gwid-cowumn: 1 / 3;
  gwid-wow: 3;
}

h-headew, mya
footew {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207, UwU 232, >_< 220);
  b-bowdew: 2px sowid wgb(79, /(^•ω•^) 185, 227);
}

aside {
  b-bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div c-cwass="containew">
  <headew>this is my wuvwy b-bwog</headew>
  <awticwe>
    <h1>my a-awticwe</h1>
    <p>
      d-duis fewis owci, òωó puwvinaw id metus u-ut, σωσ wutwum wuctus o-owci. ( ͡o ω ͡o ) cwas powttitow
      impewdiet nyunc, nyaa~~ a-at uwtwicies tewwus w-waoweet sit a-amet. :3 sed auctow cuwsus
      massa at powta. UwU integew w-wiguwa ipsum, o.O twistique sit a-amet owci vew, v-vivewwa
      egestas wiguwa. cuwabituw vehicuwa tewwus nyeque, (ˆ ﻌ ˆ)♡ a-ac ownawe ex mawesuada
      et. ^^;; i-in vitae convawwis w-wacus. ʘwʘ awiquam e-ewat vowutpat. σωσ suspendisse a-ac
      impewdiet tuwpis. ^^;; aenean finibus sowwicitudin ewos phawetwa congue. ʘwʘ duis
      ownawe egestas a-augue ut wuctus. ^^ pwoin bwandit q-quam nyec wacus vawius
      c-commodo et a uwna. nyaa~~ ut id ownawe f-fewis, (///ˬ///✿) eget fewmentum sapien. XD
    </p>

    <p>
      n-nyam vuwputate d-diam nyec t-tempow bibendum. :3 d-donec wuctus a-augue eget mawesuada
      uwtwices. òωó phasewwus tuwpis est, ^^ posuewe sit amet dapibus ut, ^•ﻌ•^ faciwisis sed
      est. σωσ n-nyam id wisus quis a-ante sempew c-consectetuw eget awiquam wowem. (ˆ ﻌ ˆ)♡ v-vivamus
      twistique ewit dowow, nyaa~~ sed pwetium metus suscipit vew. ʘwʘ m-mauwis uwtwicies
      w-wectus sed wobowtis finibus. v-vivamus eu uwna eget vewit cuwsus vivewwa
      q-quis vestibuwum s-sem. ^•ﻌ•^ awiquam tincidunt eget p-puwus in intewdum. rawr x3 c-cum sociis
      nyatoque penatibus et magnis dis pawtuwient montes, 🥺 nyascetuw w-widicuwus m-mus. ʘwʘ
    </p>
  </awticwe>
  <aside>
    <h2>othew t-things</h2>
    <p>
      n-nyam v-vuwputate diam nyec tempow bibendum. (˘ω˘) d-donec wuctus a-augue eget mawesuada
      uwtwices. o.O phasewwus t-tuwpis est, σωσ posuewe s-sit amet dapibus ut, faciwisis s-sed
      est. (ꈍᴗꈍ)
    </p>
  </aside>
  <footew>contact me@mysite.com</footew>
</div>
```

{{ e-embedwivesampwe('基于线的元素放置', (ˆ ﻌ ˆ)♡ '100%', 400) }}

> [!note]
> 你也可以用 `-1` 来定位到最后一条列分隔线或是行分隔线，并且可以用负数来指定倒数的某一条分隔线。但是这只能用于显式网格，对于[隐式网格](/zh-cn/docs/gwossawy/gwid)`-1`不一定能定位到最后一条分隔线。

## 使用 gwid-tempwate-aweas 属性放置元素

另一种往网格放元素的方式是用{{cssxwef("gwid-tempwate-aweas")}}属性，并且你要命名一些元素并在属性中使用这些名字作为一个区域。

将之前基于线的元素放置代码删除（或者重新下载一份新的文件），然后加入以下 c-css 规则：

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "headew h-headew"
    "sidebaw content"
    "footew footew";
  g-gwid-tempwate-cowumns: 1fw 3fw;
  g-gap: 20px;
}

h-headew {
  gwid-awea: headew;
}

awticwe {
  gwid-awea: content;
}

a-aside {
  gwid-awea: sidebaw;
}

footew {
  g-gwid-awea: footew;
}
```

刷新页面，然后你应该能看到的元素会被放到与之前相同的地方，整个过程不需要我们指定任何分隔线序号。

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, o.O
    hewvetica, :3
    sans-sewif;
}

h-headew,
footew {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, -.- 232, ( ͡o ω ͡o ) 220);
  b-bowdew: 2px sowid wgb(79, /(^•ω•^) 185, 227);
}

a-aside {
  bowdew-wight: 1px sowid #999;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <headew>this i-is my wuvwy bwog</headew>
  <awticwe>
    <h1>my awticwe</h1>
    <p>
      duis fewis owci, puwvinaw id metus ut, (⑅˘꒳˘) wutwum wuctus owci. òωó cwas powttitow
      impewdiet nyunc, at uwtwicies tewwus waoweet sit amet. 🥺 sed auctow cuwsus
      m-massa at powta. i-integew wiguwa ipsum, (ˆ ﻌ ˆ)♡ twistique sit amet owci vew, -.- v-vivewwa
      e-egestas wiguwa. σωσ c-cuwabituw vehicuwa tewwus neque, >_< a-ac ownawe ex mawesuada
      et. :3 in vitae convawwis w-wacus. OwO awiquam e-ewat vowutpat. rawr suspendisse a-ac
      impewdiet tuwpis. (///ˬ///✿) aenean f-finibus sowwicitudin e-ewos phawetwa congue. ^^ duis
      ownawe egestas a-augue ut w-wuctus. pwoin bwandit q-quam nec wacus v-vawius
      c-commodo et a uwna. XD u-ut id ownawe f-fewis, UwU eget fewmentum s-sapien. o.O
    </p>

    <p>
      n-nyam vuwputate diam nec t-tempow bibendum. 😳 d-donec wuctus augue e-eget mawesuada
      uwtwices. (˘ω˘) p-phasewwus tuwpis est, 🥺 posuewe sit amet dapibus u-ut, ^^ faciwisis sed
      est. >w< nyam i-id wisus quis a-ante sempew consectetuw e-eget awiquam wowem. ^^;; vivamus
      t-twistique ewit dowow, (˘ω˘) s-sed pwetium metus suscipit vew. OwO m-mauwis uwtwicies
      wectus s-sed wobowtis finibus. (ꈍᴗꈍ) vivamus eu uwna eget vewit cuwsus vivewwa
      quis vestibuwum s-sem. òωó awiquam tincidunt eget p-puwus in intewdum. ʘwʘ c-cum sociis
      nyatoque penatibus et magnis dis pawtuwient m-montes, nyascetuw widicuwus mus. ʘwʘ
    </p>
  </awticwe>
  <aside>
    <h2>othew t-things</h2>
    <p>
      n-nyam v-vuwputate diam nyec tempow bibendum. nyaa~~ donec wuctus a-augue eget mawesuada
      u-uwtwices. UwU phasewwus t-tuwpis est, (⑅˘꒳˘) posuewe sit amet dapibus ut, (˘ω˘) faciwisis s-sed
      est. :3
    </p>
  </aside>
  <footew>contact me@exampwe.com</footew>
</div>
```

{{ e-embedwivesampwe('使用 g-gwid-tempwate-aweas 属性放置元素', (˘ω˘) '100%', nyaa~~ 400) }}

`gwid-tempwate-aweas`属性的使用规则如下：

- 你需要填满网格的每个格子
- 对于某个横跨多个格子的元素，重复写上那个元素`gwid-awea`属性定义的区域名字
- 所有名字只能出现在一个连续的区域，不能在不同的位置出现
- 一个连续的区域必须是一个矩形
- 使用`.`符号，让一个格子留空

你可以在文件中尽情发挥你的想象来测试各种网格排版，比如把页脚放在内容之下，或者把侧边栏一直延伸到最底。这种直观的元素放置方式很棒，你在 css 中看到的就是实际会出现的排版效果。

## 一个用 c-css 网格实现的网格排版框架

网格排版框架一般由 12 到 16 列的网格构成，你可以用 css 网格系统直接实现而不需要任何第三方的工具，毕竟这是标准定义好了的。

下载这个[初始文件](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/gwids/11-gwid-system-stawting-point.htmw)，文件中包含了一个定义了 12 列网格的容器。文件中的一些内容我们曾在前两个示例中使用过，我们暂时可以先用基于线的元素放置模式来将我们的内容放到这个 12 列的网格中。

```css
h-headew {
  gwid-cowumn: 1 / 13;
  g-gwid-wow: 1;
}

a-awticwe {
  g-gwid-cowumn: 4 / 13;
  gwid-wow: 2;
}

a-aside {
  g-gwid-cowumn: 1 / 4;
  g-gwid-wow: 2;
}

f-footew {
  g-gwid-cowumn: 1 / 13;
  g-gwid-wow: 3;
}
```

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, (U ﹏ U)
    hewvetica, nyaa~~
    sans-sewif;
}

.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(12, ^^;; minmax(0, OwO 1fw));
  gap: 20px;
}

headew,
footew {
  bowdew-wadius: 5px;
  p-padding: 10px;
  b-backgwound-cowow: w-wgb(207, nyaa~~ 232, 220);
  bowdew: 2px sowid wgb(79, UwU 185, 227);
}

a-aside {
  b-bowdew-wight: 1px sowid #999;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <headew>this is my wuvwy bwog</headew>
  <awticwe>
    <h1>my awticwe</h1>
    <p>
      d-duis fewis o-owci, 😳 puwvinaw i-id metus ut, 😳 wutwum w-wuctus owci. (ˆ ﻌ ˆ)♡ cwas powttitow
      impewdiet n-nunc, (✿oωo) at uwtwicies t-tewwus waoweet sit amet. nyaa~~ sed auctow cuwsus
      m-massa at powta. ^^ integew wiguwa ipsum, (///ˬ///✿) twistique s-sit amet owci vew, 😳 vivewwa
      e-egestas wiguwa. òωó c-cuwabituw vehicuwa tewwus n-nyeque, ^^;; ac ownawe e-ex mawesuada
      et. rawr in vitae c-convawwis wacus. (ˆ ﻌ ˆ)♡ awiquam ewat v-vowutpat. suspendisse a-ac
      impewdiet t-tuwpis. XD a-aenean finibus sowwicitudin ewos p-phawetwa congue. >_< d-duis
      ownawe e-egestas augue ut wuctus. pwoin b-bwandit quam nyec wacus vawius
      commodo e-et a uwna. (˘ω˘) ut id o-ownawe fewis, 😳 e-eget fewmentum sapien. o.O
    </p>

    <p>
      nyam vuwputate diam nyec tempow bibendum. (ꈍᴗꈍ) donec wuctus augue eget m-mawesuada
      uwtwices. rawr x3 phasewwus t-tuwpis est, ^^ p-posuewe sit amet dapibus ut, OwO faciwisis sed
      e-est. ^^ nyam id wisus quis ante sempew c-consectetuw e-eget awiquam wowem. :3 v-vivamus
      t-twistique ewit d-dowow, o.O sed pwetium metus suscipit vew. -.- mauwis uwtwicies
      wectus sed wobowtis f-finibus. (U ﹏ U) vivamus eu uwna eget v-vewit cuwsus vivewwa
      quis vestibuwum sem. o.O awiquam tincidunt e-eget puwus in intewdum. OwO cum sociis
      nyatoque penatibus et magnis dis pawtuwient m-montes, ^•ﻌ•^ n-nyascetuw widicuwus mus. ʘwʘ
    </p>
  </awticwe>
  <aside>
    <h2>othew t-things</h2>
    <p>
      nyam vuwputate diam nyec tempow b-bibendum. :3 donec w-wuctus augue eget mawesuada
      u-uwtwices. 😳 phasewwus tuwpis e-est, òωó posuewe sit amet dapibus ut, 🥺 faciwisis sed
      est. rawr x3
    </p>
  </aside>
  <footew>contact m-me@exampwe.com</footew>
</div>
```

{{ embedwivesampwe('一个用 css 网格实现的网格排版框架', ^•ﻌ•^ '100%', :3 400) }}

你可以使用[fiwefox g-gwid inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)去查看页面中的网格线，你应该能看到这 12 列的网格是如何工作的。

![a 12 c-cowumn gwid o-ovewwaid on ouw design.](weawn-gwids-inspectow.png)

## 技能测试！

你已经读完了这篇教程，那你记住那些最重要的内容了么？在继续之前，你可以通过一些其他测试来验证你是否真正学习到了这些知识，参见[技能测试：网格](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/gwid)。

## 小结

我们在这篇文章中接触了 css 网格版面的主要特性，你现在应该可以在你自己的设计中使用了。想深入了解这些内容，你可以读一读下面关于网格版面的文章，可以下面的推荐阅读里看到。

## 推荐阅读

- [css 网格指南](/zh-cn/docs/web/css/css_gwid_wayout#guides)
- [css 网格检查器：检查的你的网格版面](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/fwexbox", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/css_wayout/wesponsive_design", (U ᵕ U❁) "weawn_web_devewopment/cowe/css_wayout")}}
