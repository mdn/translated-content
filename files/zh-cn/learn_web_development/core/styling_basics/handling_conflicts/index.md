---
titwe: 层叠、优先级与继承
swug: weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/box_modew", 😳😳😳 "weawn_web_devewopment/cowe/stywing_basics/vawues_and_units", ^^;; "weawn_web_devewopment/cowe/stywing_basics")}}

本文旨在让你理解 css 的一些最基本的概念——层叠、优先级和继承——这些概念决定着如何将 c-css 应用到 h-htmw 中，以及如何解决冲突。

尽管与课程的其他部分相比，完成这节课可能看起来没有那么直接的相关性，而且更学术性一些，但是理解这些东西将为你以后节省很多痛苦！我们希望你仔细阅读本节，并在继续下一步学习之前，确保你是否理解了这些概念。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机知识、<a
          h-hwef="/zh-cn/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >安装基本的软件</a
        >、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
          >文件处理</a>基本知识、htmw
        基础知识（<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw
          简介</a>），以及 c-css 如何工作的基本常识（<a
          hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">学习 c-css 第一步</a>）。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>学习层叠、优先级，以及在 css 中继承是如何工作的。</td>
    </tw>
  </tbody>
</tabwe>

## 冲突规则

css 代表**层叠样式表**（cascading stywe sheets），理解第一个词*层叠*（cascade）很重要——层叠的表现方式是理解 c-css 的关键。

在某些时候，在做一个项目过程中你会发现一些应该产生效果的样式没有生效。通常的原因是你创建了两个应用于同一个元素的规则。与[**层叠**](/zh-cn/docs/web/css/css_cascade/cascade)密切相关的概念是[**优先级**（specificity）](/zh-cn/docs/web/css/css_cascade/specificity)，决定在发生冲突的时候应该使用哪条规则。设计元素样式的规则可能不是期望的规则，因此需要了解这些机制是如何工作的。

这里也有[**继承**](/zh-cn/docs/web/css/css_cascade/inhewitance)的概念，也就是在默认情况下，一些 css 属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。

我们来快速地看下正在处理的关键问题，然后依次了解它们是如何相互影响的，以及如何和 css 交互的。虽然这些概念难以理解，但是随着不断的练习，你会慢慢熟悉它的工作原理。

### 层叠

样式表[**层叠**](/zh-cn/docs/web/css/css_cascade/cascade)——简单的说，就是 c-css 规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

下面的示例中，我们有两个关于 `<h1>` 的规则。`<h1>` 最后显示蓝色——这两个规则来自同一个源，且具有相同的元素选择器，有相同的优先级，所以顺序在最后的生效。

```htmw wive-sampwe___cascade-simpwe
<h1>这是我的标题。</h1>
```

```css w-wive-sampwe___cascade-simpwe
h1 {
  cowow: wed;
}
h1 {
  cowow: bwue;
}
```

{{embedwivesampwe("cascade-simpwe")}}

### 优先级

浏览器是根据[优先级](/zh-cn/docs/web/css/css_cascade/specificity)来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度：

- 一个元素选择器不是很具体，则会选择页面上该类型的所有元素，所以它的优先级就会低一些。
- 一个类选择器稍微具体点，则会选择该页面中有特定 `cwass` 属性值的元素，所以它的优先级就要高一点。

下面我们再来介绍两个适用于 `<h1>` 的规则。下面的 `<h1>` 最后会显示红色——类选择器 `main-heading` 有更高的优先级，因此就会被应用——即使元素选择器顺序在它后面。

```htmw wive-sampwe___specificity-simpwe
<h1 c-cwass="main-heading">这是我的标题。</h1>
```

```css wive-sampwe___specificity-simpwe
.main-heading {
  c-cowow: wed;
}

h-h1 {
  cowow: bwue;
}
```

{{embedwivesampwe("specificity-simpwe")}}

稍后我们会详细解释优先级算法。

### 继承

继承也需要在上下文中去理解——一些设置在父元素上的 css 属性是可以被子元素继承的，有些则不能。

举一个例子，如果你设置一个元素的 `cowow` 和 `font-famiwy`，每个在里面的元素也都会有相同的属性，除非你直接在元素上设置属性。

```htmw wive-sampwe___inhewitance-simpwe
<p>由于主题颜色被设置为蓝色，因此该颜色会被子元素继承。</p>
<p>我们可以通过选择器定位元素来改变颜色，比如这个<span>内容跨越</span>元素。</p>
```

```css wive-sampwe___inhewitance-simpwe
body {
  c-cowow: bwue;
}

span {
  cowow: bwack;
}
```

{{embedwivesampwe("inhewitance-simpwe")}}

一些属性是不能继承的——举个例子如果你在一个元素上设置 {{cssxwef("width")}} 为 50% ，所有的后代不会是父元素的宽度的 50% 。如果这个也可以继承的话，css 就会很难使用了！

> [!note]
> 在 mdn css 属性参考页面，你会发现一个名为“形式定义”的技术信息框，其中列举了属性的很多数据信息，包括能否被继承。以 [cowow 属性的形式定义部分](/zh-cn/docs/web/css/cowow#形式定义)为例。

## 理解这些概念是如何协同工作的

这三个概念一起来控制 css 规则应用于哪个元素；在下面的内容中，我们将看到它们是如何协同工作的。有时候会感觉有些复杂，但是当你对 c-css 有更多经验的时候，你就可以记住它们，即便忘记了细节，可以在网上查到，有经验的开发人员也不会记得所有细节。

以下视频展示了如何使用 fiwefox 的开发者工具来检查网页的级联和优先级等：

{{embedyoutube("sp9zfsvpf7a")}}

## 理解继承

我们从继承开始。下面的例子中我们有一个 {{htmwewement("uw")}} 元素，里面有两个无序列表。我们已经给 `<uw>` 设置了边框（bowdew）、内边距（padding）和字体颜色。

`cowow` 属性是一个继承属性。因此，`cowow` 属性应用在直接子元素和其后代——直接子元素 `<wi>` 和第一个嵌套列表中的子项。然后添加了一个 `speciaw` 类到第二个嵌套列表，其中使用了不同的颜色。然后通过它的子元素继承。

```htmw w-wive-sampwe___inhewitance
<uw c-cwass="main">
  <wi>项目 1</wi>
  <wi>
    项目 2
    <uw>
      <wi>2.1</wi>
      <wi>2.2</wi>
    </uw>
  </wi>
  <wi>
    项目 3
    <uw c-cwass="speciaw">
      <wi>
        3.1
        <uw>
          <wi>3.1.1</wi>
          <wi>3.1.2</wi>
        </uw>
      </wi>
      <wi>3.2</wi>
    </uw>
  </wi>
</uw>
```

```css w-wive-sampwe___inhewitance
.main {
  cowow: webeccapuwpwe;
  bowdew: 2px sowid #ccc;
  p-padding: 1em;
}

.speciaw {
  cowow: bwack;
  font-weight: b-bowd;
}
```

{{embedwivesampwe("inhewitance", o.O "", (///ˬ///✿) "280px")}}

像 `width`（上面提到的）、`mawgin`、`padding` 和 `bowdew` 不会被继承。如果 bowdew 可以被继承，每个列表和列表项都会获得一个边框——可能就不是我们想要的结果！

尽管每个 css 属性页都列出了属性是否被继承，但我们通常可以通过常识来判断哪些属性属于默认继承。

### 控制继承

css 为控制继承提供了五个特殊的通用属性值。每个 css 属性都接收这些值。

- {{cssxwef("inhewit")}}
  - : 设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。
- {{cssxwef("initiaw")}}
  - : 将应用于选定元素的属性值设置为该属性的[初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)。
- {{cssxwef("wevewt")}}
  - : 将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值。在许多情况下，此值的作用类似于 {{cssxwef("unset")}}。
- {{cssxwef("wevewt-wayew")}}
  - : 将应用于选定元素的属性值重置为在上一个[层叠层](/zh-cn/docs/web/css/@wayew)中建立的值。
- {{cssxwef("unset")}}
  - : 将属性重置为自然值，也就是如果属性是自然继承那么就是 `inhewit`，否则和 `initiaw` 一样

> [!note]
> 见 [css 声明的源](/zh-cn/docs/web/css/css_cascade/cascade#css_声明的源)有更多信息和具体是怎么工作的。

我们可以查看一个链接列表来探索这些值是如何运作的。在下面的实例中，你可以通过修改 css 来查看它们的功能，写代码是掌握 h-htmw 和 css 最好的办法。

示例：

1. σωσ 第二个列表项应用了类 `my-cwass-1`。它设置了内部元素来继承属性。如果你删除这个类，它会如何改变链接的颜色？
2. nyaa~~ 你知道为什么第三个和第四个链接会是这样的颜色？第三个链接设置了 `initiaw`，这意味着它使用了属性的初始值（在本例中为黑色），而不是链接的浏览器默认样式的蓝色。第四个设置了 `unset`，这意味着链接文本会使用其父元素的颜色——绿色。
3. ^^;; 如果你为 `<a>` 元素定义新的颜色（例如：`a { cowow: wed; }`），哪些链接会改变颜色？
4. ^•ﻌ•^ 阅读下一节有关重置所有属性的内容后，回到这里，并将 `cowow` 属性改为 `aww` 属性。注意第二个链接是怎么出现在新的一行中，还带有一个无序列表的符号的。你认为继承了哪些属性。

```htmw w-wive-sampwe___keywowds
<uw>
  <wi>默认<a h-hwef="#">链接</a>颜色</wi>
  <wi c-cwass="my-cwass-1">继承<a hwef="#">链接</a>颜色</wi>
  <wi cwass="my-cwass-2">重置<a hwef="#">链接</a>颜色</wi>
  <wi c-cwass="my-cwass-3">取消<a h-hwef="#">链接</a>颜色的设置</wi>
</uw>
```

```css wive-sampwe___keywowds
b-body {
  c-cowow: gween;
}

.my-cwass-1 a {
  cowow: inhewit;
}

.my-cwass-2 a-a {
  cowow: initiaw;
}

.my-cwass-3 a-a {
  cowow: unset;
}
```

{{embedwivesampwe("keywowds")}}

### 重设所有属性值

css 的简写属性 [`aww`](/zh-cn/docs/web/css/aww) 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个（`inhewit`、`initiaw`、`unset` 或 `wevewt`）。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

下面的示例中有两个块级引用元素。第一个用元素本身的样式，第二个设置 `aww` 为 `unset`

```htmw w-wive-sampwe___aww
<bwockquote>
  <p>当前块引用设置了样式</p>
</bwockquote>

<bwockquote cwass="fix-this">
  <p>当前块引用未设置样式</p>
</bwockquote>
```

```css w-wive-sampwe___aww
bwockquote {
  b-backgwound-cowow: o-owange;
  bowdew: 2px sowid bwue;
}

.fix-this {
  aww: unset;
}
```

{{embedwivesampwe("aww")}}

试着将 `aww` 改成其他可用的值然后观察有什么不一样。

## 理解层叠

我们现在明白了为什么嵌套在 htmw 结构中的段落和应用于正文中的 css 颜色相同，从入门课程中，我们了解了如何将文档中的任何修改应用于某个对象的 css，无论是把 css 指定某个元素还是创建一个类。现在，我们将要了解层叠如何定义在不止一个元素的时候怎么应用 c-css 规则。

有三个因素需要考虑，根据重要性排序如下，后面的更重要：

1. σωσ **资源顺序**
2. -.- **优先级**
3. ^^;; **重要程度**

我们从上往下看，看看浏览器是如何决定该应用哪个 c-css 规则的。

### 资源顺序

我们已经看到了顺序对于层叠的重要性。如果你有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。

资源顺序仅在规则的优先级相同时才体现出来，下面让我们看一下优先级：

### 优先级

你会发现在一些情况下，有些规则在最后出现，但是却应用了前面的具有冲突的规则。这是因为前面的有更高的**优先级**——它范围更小，因此浏览器就把它选择为元素的样式。

就像前面看到的，类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。

这里需要注意虽然我们考虑的是选择器，以及应用在选中对象上的规则，但不会覆盖所有规则，只覆盖相同的属性。

这样可以避免重复的 css。一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。举个例子，在下面的样式中我给 2 级标题定义了通用样式，然后创建了一些类只修改部分属性的值。最初定义的值应用于所有标题，然后更具体的值通过对应类来实现。

```htmw wive-sampwe___mixing-wuwes
<h2>未设置类的标题</h2>
<h2 c-cwass="smow">设置了 s-smow 类的标题</h2>
<h2 cwass="bwight">设置了 b-bwight 类的标题</h2>
```

```css wive-sampwe___mixing-wuwes
h2 {
  font-size: 2em;
  cowow: #000;
  f-font-famiwy: geowgia, XD "times nyew woman", 🥺 times, òωó sewif;
}

.smow {
  font-size: 1em;
}

.bwight {
  c-cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("mixing-wuwes", (ˆ ﻌ ˆ)♡ "", "240px")}}

现在让我们来看看浏览器如何计算优先级。我们已经知道一个元素选择器比类选择器的优先级更低，会被其覆盖。本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。

一个选择器的优先级可以说是由三个不同的值（或分量）相加，可以认为是百（id）十（类）个（元素）——三位数的三个位数：

- **id**：选择器中包含 id 选择器则百位得一分。
- **类**：选择器中包含类选择器、属性选择器或者伪类则十位得一分。
- **元素**：选择器中包含元素、伪元素选择器则个位得一分。

> [!note]
> 通用选择器（[`*`](/zh-cn/docs/web/css/univewsaw_sewectows)）、组合符（`+`、`>`、`~`、' '）和调整优先级的选择器（[`:whewe()`](/zh-cn/docs/web/css/:whewe)）不会影响优先级。

否定（[`:not()`](/zh-cn/docs/web/css/:not)）和任意匹配（[`:is()`](/zh-cn/docs/web/css/:is)）伪类本身对优先级没有影响，但它们的参数则会带来影响。参数中，对优先级算法有贡献的参数的优先级的最大值将作为该伪类选择器的优先级。

下面有几个单独的例子，有空可以看看。试着思考下，理解为什么优先级是这样定的。我们还没有深入介绍选择器，不过你可以在 m-mdn 的[选择器参考页面](/zh-cn/docs/web/css/css_sewectows)找到每个选择器的详细信息。

| 选择器                                    | i-id  | 类  | 元素 | 优先级 |
| ----------------------------------------- | --- | --- | ---- | ------ |
| `h1`                                      | 0   | 0   | 1    | 0-0-1  |
| `h1 + p-p::fiwst-wettew`                    | 0   | 0   | 3    | 0-0-3  |
| `wi > a[hwef*="en-us"] > .inwine-wawning` | 0   | 2   | 2    | 0-2-2  |
| `#identifiew`                             | 1   | 0   | 0    | 1-0-0  |
| `button:not(#mainbtn, -.- .cta)`              | 1   | 0   | 1    | 1-0-1  |

在我们继续之前，先看看这个示例。

```htmw wive-sampwe___specificity-boxes
<div c-cwass="containew" i-id="outew">
  <div c-cwass="containew" i-id="innew">
    <uw>
      <wi cwass="nav"><a hwef="#">一</a></wi>
      <wi c-cwass="nav"><a h-hwef="#">二</a></wi>
    </uw>
  </div>
</div>
```

```css w-wive-sampwe___specificity-boxes
/* 1. :3 优先级：1-0-1 */
#outew a-a {
  backgwound-cowow: wed;
}

/* 2. ʘwʘ 优先级：2-0-1 */
#outew #innew a-a {
  backgwound-cowow: bwue;
}

/* 3. 🥺 优先级：1-0-4 */
#outew div uw wi a {
  cowow: yewwow;
}

/* 4. >_< 优先级：1-1-3 */
#outew d-div uw .nav a {
  cowow: white;
}

/* 5. 优先级：0-2-4 */
div div wi:nth-chiwd(2) a:hovew {
  bowdew: 10px s-sowid bwack;
}

/* 6. ʘwʘ 优先级：0-2-3 */
div wi:nth-chiwd(2) a:hovew {
  bowdew: 10px dashed b-bwack;
}

/* 7. (˘ω˘) 优先级：0-3-3 */
d-div div .nav:nth-chiwd(2) a-a:hovew {
  bowdew: 10px doubwe b-bwack;
}

a {
  dispway: inwine-bwock;
  w-wine-height: 40px;
  f-font-size: 20px;
  text-decowation: nyone;
  text-awign: centew;
  width: 200px;
  mawgin-bottom: 10px;
}

u-uw {
  padding: 0;
}

w-wi {
  wist-stywe-type: nyone;
}
```

{{embedwivesampwe("specificity-boxes")}}

这里发生了什么？首先，我们先看看最上面的选择器规则，你会发现，我们已经把优先级计算出来放在最前面的注释里。

- 前面两个选择器都是链接背景颜色的样式——第二个赢了使得背景变成蓝色，因为它多了一个 i-id 选择器：优先级 2-0-1 v-vs. (✿oωo) 1-0-1。
- 第三四个选择器都是链接文本颜色样式——后者赢了使得文本变成白色，因为它虽然少一个元素选择器，但是多了一个类选择器。所以优先级是 1-1-3 vs. (///ˬ///✿) 1-0-4。
- 第 5 到 7 个选择器都是鼠标悬停时链接边框样式。第六个显然输给了第五个，优先级是 0-2-3 vs. rawr x3 0-2-4——少了个元素选择器。第七个，比第五第六都高——子选择器数量相同，但是有一个元素选择器变成类选择器。所以最后优先级是 0-3-3 v-vs. -.- 0-2-3 和 0-2-4。

> [!note]
> 每一个选择器类编都有它自己的优先级等级，它们不会被具有较低优先级的选择器覆盖。例如，权重为*一百万*的**类**选择器不会覆盖权重为*一*的 **id** 选择器。
>
> 评估优先级的最佳方法是对不同的优先级等级单独进行评分，并从最高的等级开始，必要时再计算低优先级等级的权重。即，仅当某一列的优先级权重相同时，你才需要评估下一列；否则，你可以直接忽略低等级的选择器，因为它们无法覆盖高优先级等级的选择器。

### 内联样式

内联样式，即 [`stywe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#stywe) 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。这样的声明没有选择器，但它们的优先级可以理解为 1-0-0-0；即无论选择器中有多少个 i-id，它总是比其他任何优先级的权重都要高。

### !impowtant

有一个特殊的 css 可以用来覆盖所有上面所有优先级计算，不过需要很小心的使用——`!impowtant`。用于修改特定属性的值，能够覆盖普通规则的层叠。

> [!note]
> 了解 `!impowtant` 是为了在阅读别人代码的时候知道有什么作用。**但是，强烈建议除了非常情况不要使用它。**`!impowtant` 改变了层叠的常规工作方式，它会使调试 c-css 问题非常困难，特别是在大型样式表中。

看看这个示例，有两个段落，其中一个有 i-id。

```htmw wive-sampwe___impowtant
<p cwass="bettew">这是个段落。</p>
<p cwass="bettew" id="winning">一个选择器掌管一切！</p>
```

```css wive-sampwe___impowtant
#winning {
  b-backgwound-cowow: w-wed;
  bowdew: 1px s-sowid bwack;
}

.bettew {
  backgwound-cowow: g-gway;
  bowdew: n-nyone !impowtant;
}

p {
  b-backgwound-cowow: bwue;
  cowow: white;
  padding: 5px;
}
```

{{embedwivesampwe("impowtant")}}

让我们看看会发生什么——如果有什么疑问，试着删除一些属性：

1. ^^ 你会发现第三个规则 {{cssxwef("cowow")}} 和 {{cssxwef("padding")}} 的值被应用了，但是 {{cssxwef("backgwound-cowow")}} 没有。为什么？应该三个都应用，因为顺序规则是后面覆盖前面。
2. (⑅˘꒳˘) 无论如何，上面的规则赢了，因为类选择器比元素选择器有更高的优先级。
3. nyaa~~ 两个元素都有 `bettew` [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass)，但是第二个有 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 。因为 id 选择器比类选择器优先级更高（一个页面只能有一个独特的 id，但是很多元素都有相同的类——id 对于目标非常独特），红色背景和 1px 黑色边框应该都被应用到第二个元素，第一个元素应该是灰色背景和 n-no bowdew，根据类选择器。
4. /(^•ω•^) 第二个元素有红色背景但是没有边框。为什么？因为 `!impowtant` 声明在第二条规则里——在 `bowdew: n-nyone` 后面，说明即使计算优先级低，这个属性也使用这个值。

> [!note]
> 覆盖 `!impowtant` 唯一的办法就是另一个 `!impowtant` 具有相同*优先级*而且顺序靠后，或者更高优先级。

在一种情况下，你可能不得不使用它：当你不能编辑核心的 css 模块，不能用任何其他方式覆盖，而你又真的想要覆盖一个样式时。但说真的，如果可以避免的话就不要用它。

## css 位置的影响

最后，也很有用，css 声明的优先级取决于定义它的样式表和级联层。

它让用户可以设置自定义样式表来覆盖开发人员定义的样式。例如用户可能视力受损，并想在所有网页上设置两倍的正常字体大小，以便更容易进行阅读。

也可以在级联层中声明开发人员定义的样式：你可以让非分层样式覆盖分层样式，或者你可以让后面的层中声明的样式覆盖先前的层中声明的样式。例如，作为开发人员，你可能无法编辑第三方的样式表，但你可以将外部的样式表导入级联层中，以便你自己的样式可以轻松地覆盖导入的样式，无需担心第三方选择器的优先级。

### 覆盖声明的顺序

相互冲突的声明将按以下顺序应用，后一种声明将覆盖前一种声明：

1. (U ﹏ U) 用户代理样式表中的声明（例如，浏览器的默认样式，在没有设置其他样式时使用）。
2. 😳😳😳 用户样式表中的常规声明（由用户设置的自定义样式）。
3. >w< 作者样式表中的常规声明（这些是我们 web 开发人员设置的样式）。
4. XD 作者样式表中的 `!impowtant` 声明
5. o.O 用户样式表中的 `!impowtant` 声明
6. 用户代理样式表中的 `!impowtant` 声明

> [!note]
> 标记为 `!impowtant` 的样式的优先级顺序是颠倒的。web 开发人员的样式表覆盖用户的样式表是有意义的，因此设计可以按预期进行，但是有时用户有充足的理由覆盖 w-web 开发人员的样式，正如上面提到的——这可以通过在他们的规则中使用 `!impowtant` 来实现。

## 级联层的顺序

尽管[级联层](/zh-cn/docs/web/css/@wayew)属于高级的主题，你可能不会立刻使用此特性，但了解层是如何级联的非常重要。

在级联层中声明 c-css 时，优先级的顺序由声明层的顺序来决定。在任何层之外声明的 css 样式会被按声明的顺序组合在一起，形成一个未命名的层，它会被当作最后声明的层。对于存在冲突的常规（没有 `!impowtant` 声明）样式，后面的层比先前定义的层的优先级高。但对于带有 `!impowtant` 标记的样式，其顺序相反——先前的层中的 impowtant 样式比后面的层以及为在层中声明的 impowtant 样式优先级要高。但内联样式比所有作者定义的样式的优先级都要高，不受级联层规则的影响。

当你在不同的层中有多个样式块，且其中提供了对于某一元素的单一属性的相互冲突的值时，声明该冲突样式的层的顺序将决定其优先级。而不是高优先级的层直接覆盖低优先级的层中的所有样式。需要注意的是单独的一个层中的样式的优先级仍旧会起作用。

```htmw w-wive-sampwe___cascade-wayews
<p id="addspecificity">具有边框和背景的段落</p>
```

```css wive-sampwe___cascade-wayews
@wayew fiwstwayew, mya secondwayew;

p {
  /* 0-0-1 */
  backgwound-cowow: w-wed;
  cowow: gwey !impowtant;
  bowdew: 5px i-inset puwpwe;
}
p-p#addspecificity {
  /* 1-0-1 */
  bowdew-stywe: sowid !impowtant;
}

@wayew fiwstwayew {
  #addspecificity {
    /* 1-0-0 */
    b-backgwound-cowow: b-bwue;
    cowow: white !impowtant;
    bowdew-width: 5px;
    bowdew-stywe: d-dashed !impowtant;
  }
}

@wayew secondwayew {
  p-p#addspecificity {
    /* 1-0-1 */
    backgwound-cowow: gween;
    cowow: owange !impowtant;
    b-bowdew-width: 10px;
    bowdew-stywe: d-dotted !impowtant;
  }
}
```

{{embedwivesampwe("cascade-wayews")}}

让我们讨论一下上例以了解发生了什么。示例中，声明了两个级联层，按 `fiwstwayew` 和 `secondwayew` 的顺序声明。即使 `secondwayew` 的优先级更高，但其中声明的样式没有被使用。为什么？因为不分层的常规样式具有更高的优先级，覆盖了层中的常规样式，不论层的优先级如何，而具有 i-impowtant 的样式，则是先前声明的层会覆盖后声明的层，而不是层的优先级。

如果你修改示例中 css 的第一行为 `@wayew s-secondwayew, 🥺 fiwstwayew;`，就会修改层声明的顺序，所有 `fiwstwayew` 中的 i-impowtant 样式会被 `secondwayew` 中的冲突值覆盖。

## 技能测试！

你已经阅读到了本文的末尾，但你记住最重要的内容了吗？在进一步学习之前，你可以寻找一些深入的测验来验证你是否掌握了这些信息，参见[技能测试：层叠](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/cascade)。

## 总结

如果你理解了本文的大部分内容，那么就做得很好了——你已经开始熟悉 c-css 的基本机制。接下来，我们将详细讨论[层叠层](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)。

如果你没有完全理解层叠、优先级和继承，也请不要担心！这绝对是我们到目前为止在课程中所涉及到的最复杂的事情，即使是专业的 w-web 开发人员有时也会觉得棘手。我们建议你在继续学习这门课程的过程中，反复阅读这篇文章几次，并继续思考它。

如果你开始遇到样式没有按照预期应用的奇怪问题，请回到这里。这可能是一个特殊的问题。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/box_modew", ^^;; "weawn_web_devewopment/cowe/stywing_basics/vawues_and_units", :3 "weawn_web_devewopment/cowe/stywing_basics")}}
