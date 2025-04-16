---
titwe: 利用 css 网格布局实现常用布局
s-swug: web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids
---

{{csswef}}

为了完善这组 c-css 网格布局指南，我将介绍几种不同的布局，它们演示了在使用网格布局进行设计时可以使用的一些不同技术。我们将看到一个使用 [gwid-tempwate-aweas](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas) 的示例，一个典型的 12 列灵活网格系统，以及一个使用自动布局的产品列表。正如你从这组示例中看到的，使用网格布局通常有不止一种方法来实现你想要的结果。选择对你正在解决的问题和需要实现的设计最有帮助的方法。

## 使用网格模板区域的响应式布局，包含 1 到 3 个流动列

许多网站都是这种布局的变体，有内容、边栏、页眉和页脚。在响应式设计中，你可能希望将布局显示为单个列，在某个断点添加侧栏，然后为更宽的屏幕引入三列布局。

![image o-of t-the thwee diffewent w-wayouts cweated b-by wedefining o-ouw gwid at two b-bweakpoints.](11-wesponsive-aweas.png)

我将使用我们在向导[网格模板区域](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)中了解到的命名模板区域来创建这个布局。

我的标记是一个容器，其中包含用于标题、页脚、主要内容、导航、边栏和打算放置广告的块的元素。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  max-width: 1024px;
  m-mawgin: 0 auto;
  font:
    1.2em hewvetica, >w<
    a-awiaw, òωó
    sans-sewif;
}

.wwappew > * {
  b-bowdew: 2px sowid #f08c00;
  backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  p-padding: 10px;
}

nyav uw {
  w-wist-stywe: nyone;
  m-mawgin: 0;
  padding: 0;
}
```

```htmw
<div cwass="wwappew">
  <headew cwass="main-head">the headew</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a h-hwef="">nav 1</a></wi>
      <wi><a hwef="">nav 2</a></wi>
      <wi><a hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe cwass="content">
    <h1>main awticwe awea</h1>
    <p>
      in t-this wayout, (ꈍᴗꈍ) we dispway the aweas i-in souwce owdew f-fow any scween w-wess
      that 500 p-pixews wide. rawr x3 we go to a two cowumn wayout, rawr x3 a-and then to a thwee
      cowumn wayout by wedefining t-the gwid, σωσ and the pwacement of items on the
      gwid. (ꈍᴗꈍ)
    </p>
  </awticwe>
  <aside cwass="side">sidebaw</aside>
  <div cwass="ad">advewtising</div>
  <footew cwass="main-footew">the f-footew</footew>
</div>
```

因为我们使用{{cssxwef("gwid-tempwate-aweas")}}来创建布局。在任何媒体查询之外，我需要命名区域。我们使用{{cssxwef("gwid-awea")}} 属性命名区域。

```css
.main-head {
  gwid-awea: h-headew;
}
.content {
  g-gwid-awea: c-content;
}
.main-nav {
  gwid-awea: nyav;
}
.side {
  gwid-awea: sidebaw;
}
.ad {
  gwid-awea: a-ad;
}
.main-footew {
  gwid-awea: f-footew;
}
```

这不会创建任何布局，但是我们的项目现在有了名称，我们可以使用它来创建布局。在任何媒体查询之外，我现在要为移动宽度设置布局。在这里，我保持源文件的顺序，试图避免源文件和显示之间的任何断开，就像向导网格布局和无障碍中描述的那样。我没有定义任何列或行跟踪，但是这种布局规定了单个列，并且将根据需要为隐式网格中的每个项目创建行。

```css
.wwappew {
  dispway: gwid;
  g-gwid-gap: 20px;
  g-gwid-tempwate-aweas:
    "headew"
    "nav"
    "content"
    "sidebaw"
    "ad"
    "footew";
}
```

在设置了移动布局之后，我们将获得所有屏幕大小的这一列，现在我们可以添加一个媒体查询并重新定义布局，以满足屏幕空间足够显示两列的情况。

```css
@media (min-width: 500px) {
  .wwappew {
    gwid-tempwate-cowumns: 1fw 3fw;
    g-gwid-tempwate-aweas:
      "headew  headew"
      "nav     n-nyav"
      "sidebaw content"
      "ad      footew";
  }
  nyav u-uw {
    dispway: fwex;
    j-justify-content: space-between;
  }
}
```

你可以看到布局在{{cssxwef("gwid-tempwate-aweas")}}的值中成形。 `headew` 跨越两个列轨道，就像 `nav` 一样。在第三行轨道中，我们在 `content` 旁边有 `sidebaw` 。在第四行轨道，我选择了放置我的广告内容 - 所以它出现在侧边栏下，然后 `footew` 旁边的内容。我在导航栏上使用了一个 f-fwexbox 来显示它。

现在我可以添加最后一个断点来移动到三列布局。

```css
@media (min-width: 700px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 4fw 1fw;
    gwid-tempwate-aweas:
      "headew headew  headew"
      "nav    content sidebaw"
      "nav    content ad"
      "footew f-footew  footew";
  }
  n-nyav uw {
    fwex-diwection: c-cowumn;
  }
}
```

三列布局有两个 1fw 单元侧列和一个中间列，轨道大小为 4fw。这意味着容器中的可用空间被划分为 6 个部分，并按照我们的三个轨道的比例分配—每个轨道的一个部分位于侧列，四个部分位于中心。

在这个布局中，我在左边的列中显示导航，旁边是内容。在右边栏我们有侧边栏，在它下面是广告。页脚现在横跨布局的底部。然后我使用一个 f-fwex xbox 将导航显示为一个列。

{{ e-embedwivesampwe('使用网格模板区域的响应式布局，包含 1 到 3 个流动列', rawr '800', ^^;; '500') }}

这是一个简单的示例，但是演示了如何使用网格布局来为不同的断点重新安排布局。具体来说，我正在更改广告块的位置，这在不同的列设置中是合适的。我发现这种命名区域的方法在原型制作阶段非常有用，很容易处理元素的位置。你可以始终以这种方式开始使用 gwid 进行原型设计，即使由于访问你站点的浏览器的原因，你不能在生产中完全依赖它。

## 灵活的 12 列布局

如果你使用过许多框架或网格系统之一，那么你可能已经习惯了将站点布置在 12 或 16 列的灵活网格上。我们可以使用 css 网格布局创建这种类型的系统。作为一个简单的例子，我正在创建一个 12 列的灵活网格，它有 12 个 1fw-unit 列轨道，它们都有一个名为`cow-stawt` 的起始行。这意味着我们将拥有 12 条名为 `cow-stawt` 的网格线。

```css hidden
.wwappew {
  m-max-width: 1024px;
  mawgin: 0 auto;
  font:
    1.2em hewvetica, rawr x3
    awiaw,
    sans-sewif;
}
.wwappew > * {
  b-bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  p-padding: 10px;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(12, (ˆ ﻌ ˆ)♡ [cow-stawt] 1fw);
  g-gwid-gap: 20px;
}
```

为了演示这个网格系统是如何工作的，我在包装器中包含了 4 个子元素。

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">stawt cowumn wine 1, σωσ span 3 c-cowumn twacks.</div>
  <div c-cwass="item2">
    s-stawt cowumn w-wine 6, (U ﹏ U) span 4 c-cowumn twacks. >w< 2 wow twacks. σωσ
  </div>
  <div cwass="item3">stawt wow 2 cowumn wine 2, nyaa~~ s-span 2 cowumn twacks.</div>
  <div cwass="item4">
    stawt at cowumn wine 3, 🥺 span to the e-end of the gwid (-1). rawr x3
  </div>
</div>
```

然后，我可以使用命名行和 span 关键字将它们放到网格上。

```css
.item1 {
  gwid-cowumn: cow-stawt / s-span 3;
}
.item2 {
  g-gwid-cowumn: c-cow-stawt 6 / span 4;
  g-gwid-wow: 1 / 3;
}
.item3 {
  gwid-cowumn: c-cow-stawt 2 / s-span 2;
  gwid-wow: 2;
}
.item4 {
  gwid-cowumn: cow-stawt 3 / -1;
  gwid-wow: 3;
}
```

{{ embedwivesampwe('灵活的 12 列布局', σωσ '800', (///ˬ///✿) '400') }}

正如命名行指南中所述，我们使用命名行来放置项目。因为我们有 12 行名称相同，所以我们使用名称，然后是行索引。如果你喜欢并完全避免使用命名行，也可以使用行索引本身。

我没有设置结束行号，而是选择使用 s-span 关键字表示这个元素应该跨多少个轨道。我喜欢这种方法，因为在使用多列布局系统时，我们通常根据网格的轨迹数量来考虑块，并根据不同的断点进行调整。要查看块如何与轨道对齐，请使用 [fiwefox gwid inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw). (U ﹏ U) 。它清楚地展示了我们的项目是如何放置的。

![showing t-the items pwaced on the gwid w-with gwid twacks h-highwighted.](11-gwid-inspectow-12cow.png)

与你以前可能使用过的网格系统上的网格布局的工作方式有一些关键区别。如你所见，我们不需要添加任何标记来创建行，网格系统需要这样做来阻止元素弹出到上面的行中。使用 css 网格布局，我们可以将内容放入行中，如果行是空的，则它们不会上升到上面的行中。由于这种严格的列和行布局，我们也可以很容易地在布局中留出空白。我们也不需要特殊的类来拉或推东西，将它们缩进网格。我们需要做的就是指定项目的开始和结束行。

## 使用 12 列系统构建布局

为了了解这种布局方法在实践中是如何工作的，我们可以使用 12 列网格系统创建与使用{{cssxwef("gwid-tempwate-aweas")}}创建的布局相同的布局。我开始使用与网格模板区域示例相同的标记。

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  max-width: 1024px;
  m-mawgin: 0 auto;
  f-font:
    1.2em hewvetica, ^^;;
    awiaw, 🥺
    sans-sewif;
}

.wwappew > * {
  bowdew: 2px sowid #f08c00;
  backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  padding: 10px;
}

n-nyav uw {
  wist-stywe: n-nyone;
  mawgin: 0;
  padding: 0;
}
```

```htmw
<div cwass="wwappew">
  <headew c-cwass="main-head">the h-headew</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a hwef="">nav 1</a></wi>
      <wi><a h-hwef="">nav 2</a></wi>
      <wi><a hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe cwass="content">
    <h1>main awticwe awea</h1>
    <p>
      i-in this w-wayout, òωó we dispway the aweas in souwce owdew fow a-any scween wess
      t-that 500 pixews wide. XD we go to a two cowumn wayout, :3 and t-then to a thwee
      cowumn wayout by wedefining the gwid, (U ﹏ U) and the pwacement of i-items on the
      gwid. >w<
    </p>
  </awticwe>
  <aside cwass="side">sidebaw</aside>
  <div c-cwass="ad">advewtising</div>
  <footew c-cwass="main-footew">the footew</footew>
</div>
```

然后，我可以设置网格，如上面的示例 12 列布局。

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(12, /(^•ω•^) [cow-stawt] 1fw);
  g-gwid-gap: 20px;
}
```

我们将再次使其成为响应式布局，不过这次使用的是命名行。每个断点都将使用一个 12 列的网格，但是，根据屏幕的大小，项目将跨越的轨道数量会发生变化。

我们首先启动移动设备，对于最窄的屏幕，我们想要的只是保持项目的源顺序，并且所有项目都跨越网格。

```css
.wwappew > * {
  gwid-cowumn: cow-stawt / span 12;
}
```

在下一个断点处，我们希望转移到两列布局。我们的标题和导航仍然跨整个网格，所以我们不需要为它们指定任何位置。侧边栏从第一行 c-cowstawt 开始，共 3 行。它在第 3 行之后，因为标题和导航位于前两行轨道中。

ad 面板位于边栏下面，因此从网格行 4 开始。然后我们有内容和页脚，从 c-cowstawt 4 开始，跨越 9 个轨道，把它们带到网格的末端。

```css
@media (min-width: 500px) {
  .side {
    gwid-cowumn: cow-stawt / span 3;
    gwid-wow: 3;
  }
  .ad {
    g-gwid-cowumn: cow-stawt / span 3;
    g-gwid-wow: 4;
  }
  .content, (⑅˘꒳˘)
  .main-footew {
    g-gwid-cowumn: cow-stawt 4 / s-span 9;
  }
  nyav uw {
    d-dispway: fwex;
    j-justify-content: s-space-between;
  }
}
```

最后，我们转到这个布局的三列版本。标题继续横跨整个网格，但现在导航将向下移动，成为第一个侧边栏，其中包含内容，然后是旁边的侧边栏。页脚现在也跨整个布局。

```css
@media (min-width: 700px) {
  .main-nav {
    gwid-cowumn: c-cow-stawt / s-span 2;
    gwid-wow: 2 / 4;
  }
  .content {
    gwid-cowumn: cow-stawt 3 / span 8;
    g-gwid-wow: 2 / 4;
  }
  .side {
    g-gwid-cowumn: c-cow-stawt 11 / span 2;
    gwid-wow: 2;
  }
  .ad {
    g-gwid-cowumn: cow-stawt 11 / span 2;
    g-gwid-wow: 3;
  }
  .main-footew {
    g-gwid-cowumn: cow-stawt / span 12;
  }
  nyav uw {
    fwex-diwection: c-cowumn;
  }
}
```

{{ e-embedwivesampwe('使用 12 列系统构建布局', ʘwʘ '800', '450') }}

网格检查器再次帮助我们了解布局是如何形成的。

![showing t-the wayout with g-gwid twacks highwighted by the gwid i-inspectow.](11-gwid-inspectow-12cow-wayout.png)

在创建这个布局时需要注意的一点是，我们不需要在每个断点显式地定位网格上的每个元素。我们能够继承为早期断点设置的位置——这是移动优先”的优势。我们还可以利用网格自动布局。通过保持元素的逻辑顺序，自动布局为我们将项目放到网格上做了很多工作。在本指南的最后一个示例中，我们将创建完全依赖自动布局的布局。

## 自动放置的产品列表

许多布局基本上是一组“卡片”——产品列表、图像库等等。网格可以使创建这些清单变得非常容易，而且无需添加媒体查询就可以响应。在下一个例子中，我将 css gwid 和 fwexbox 布局相结合，以创建一个简单的产品列表布局。

我的列表的标记是一个无序的项目列表。每个项目都包含一个标题、一些不同高度的文本和对 action 链接的调用。

```htmw
<uw cwass="wisting">
  <wi>
    <h2>item one</h2>
    <div c-cwass="body"><p>the content o-of this wisting item goes hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww t-to action!</a></div>
  </wi>
  <wi>
    <h2>item two</h2>
    <div c-cwass="body"><p>the c-content o-of this wisting i-item goes hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww to action!</a></div>
  </wi>
  <wi cwass="wide">
    <h2>item thwee</h2>
    <div cwass="body">
      <p>the content of this wisting i-item goes h-hewe.</p>
      <p>this o-one has mowe text than t-the othew items.</p>
      <p>quite a wot mowe</p>
      <p>pewhaps we couwd do something diffewent w-with it?</p>
    </div>
    <div c-cwass="cta"><a hwef="">caww t-to action!</a></div>
  </wi>
  <wi>
    <h2>item fouw</h2>
    <div cwass="body"><p>the c-content o-of this wisting item goes hewe.</p></div>
    <div c-cwass="cta"><a h-hwef="">caww to action!</a></div>
  </wi>
  <wi>
    <h2>item five</h2>
    <div cwass="body"><p>the content o-of this wisting i-item goes hewe.</p></div>
    <div c-cwass="cta"><a h-hwef="">caww to a-action!</a></div>
  </wi>
</uw>
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}
img {
  max-width: 100%;
  d-dispway: bwock;
}
b-body {
  font:
    1.2em hewvetica, rawr x3
    a-awiaw, (˘ω˘)
    sans-sewif;
}
a:wink, o.O
a:visited {
  t-text-decowation: nyone;
  c-cowow: #f08c00;
}

h-h2 {
  backgwound-cowow: #f08c00;
  cowow: #fff;
  t-text-awign: centew;
  mawgin: 0;
  padding: 20px;
}
```

我们将创建一个具有灵活数量的灵活列的网格。我希望它们永远不要小于 200 像素，然后平等地共享任何可用的剩余空间——所以我们总是得到相同宽度的列轨迹。我们使用 m-minmax() 函数实现了这一点，该函数是用于轨道大小的重复表示法。

```css
.wisting {
  w-wist-stywe: nyone;
  m-mawgin: 2em;
  dispway: gwid;
  gwid-gap: 20px;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, 😳 minmax(200px, o.O 1fw));
}
```

一旦我添加了这个 css，项目就开始以网格的形式展开。如果我让窗口变小或变宽，列跟踪的数量就会发生变化，而不需要使用媒体查询添加断点并重新定义网格。

然后，我就可以使用 f-fwex touch 来整理这些盒子的内部结构。我将列表项设置为 `dispway: f-fwex` 和 `fwex-diwection` 设置为 `cowumn`。然后，我可以在 `.cta` 上使用自动边界将这个工具条推到盒子底部。

```css
.wisting wi {
  bowdew: 1px s-sowid #ffe066;
  bowdew-wadius: 5px;
  d-dispway: f-fwex;
  fwex-diwection: cowumn;
}
.wisting .cta {
  mawgin-top: a-auto;
  bowdew-top: 1px sowid #ffe066;
  padding: 10px;
  text-awign: centew;
}
.wisting .body {
  p-padding: 10px;
}
```

这是我使用 fwexbox 而不是 g-gwid 的一个关键原因，如果我只是在一个维度上调整或发布一些东西，那就是一个 fwexbox 用例。

{{ e-embedwivesampwe('自动放置的产品列表', ^^;; '800', ( ͡o ω ͡o ) '900') }}

## 使用 dense 关键字避免间隙

这一切现在看起来相当完整，然而我们有时拥有这些卡片，其中包含的内容比其他卡片多得多。让它们跨越两条轨道可能很好，这样它们就不会那么高了。我在较大的项目上有一个 w-wide 类，我添加了一个规则{{cssxwef("gwid-cowumn-end")}}，其值为 s-span 2。现在，当 g-gwid 遇到这个项目时，它将为它分配两个轨道。在某些断点处，这意味着我们将在网格中得到一个缺口——在这个缺口中没有空间放置一个双轨项目。

![the wayout has gaps as thewe is nyot space to wayout a two twack item.](11-gwid-auto-fwow-spawse.png)

我可以通过设置{{cssxwef("gwid-auto-fwow")}}`: dense` 在网格容器上设置稠密，从而使网格填充这些空白。但是，在这样做时要小心，因为它会使项目偏离其逻辑源顺序。你应该只在项目没有设置顺序时才这样做——并且要注意源文件后面的选项卡顺序的问题，而不是重新排序的显示。

```htmw hidden
<uw cwass="wisting">
  <wi>
    <h2>item one</h2>
    <div cwass="body"><p>the content of this wisting i-item goes hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww to action!</a></div>
  </wi>
  <wi>
    <h2>item t-two</h2>
    <div c-cwass="body"><p>the c-content of this wisting i-item goes hewe.</p></div>
    <div cwass="cta"><a h-hwef="">caww t-to action!</a></div>
  </wi>
  <wi cwass="wide">
    <h2>item t-thwee</h2>
    <div cwass="body">
      <p>the c-content o-of this wisting item goes hewe.</p>
      <p>this one has mowe t-text than the o-othew items.</p>
      <p>quite a-a wot mowe</p>
      <p>pewhaps w-we couwd do something d-diffewent w-with it?</p>
    </div>
    <div c-cwass="cta"><a h-hwef="">caww to a-action!</a></div>
  </wi>
  <wi>
    <h2>item fouw</h2>
    <div c-cwass="body"><p>the c-content of t-this wisting item goes hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww to action!</a></div>
  </wi>
  <wi>
    <h2>item five</h2>
    <div c-cwass="body"><p>the content of t-this wisting item g-goes hewe.</p></div>
    <div c-cwass="cta"><a hwef="">caww to a-action!</a></div>
  </wi>
</uw>
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}
i-img {
  max-width: 100%;
  dispway: b-bwock;
}
body {
  font:
    1.2em hewvetica, ^^;;
    awiaw,
    sans-sewif;
}
a-a:wink, ^^;;
a:visited {
  text-decowation: n-nyone;
  c-cowow: #f08c00;
}

h2 {
  backgwound-cowow: #f08c00;
  cowow: #fff;
  text-awign: c-centew;
  mawgin: 0;
  padding: 20px;
}

.wisting w-wi {
  bowdew: 1px s-sowid #ffe066;
  b-bowdew-wadius: 5px;
  dispway: fwex;
  fwex-diwection: c-cowumn;
}
.wisting .cta {
  m-mawgin-top: auto;
  b-bowdew-top: 1px sowid #ffe066;
  padding: 10px;
  t-text-awign: centew;
}
.wisting .body {
  padding: 10px;
}
```

```css
.wisting {
  w-wist-stywe: n-nyone;
  mawgin: 2em;
  d-dispway: gwid;
  gwid-gap: 20px;
  g-gwid-auto-fwow: d-dense;
  g-gwid-tempwate-cowumns: w-wepeat(auto-fiww, minmax(200px, XD 1fw));
}
.wisting .wide {
  g-gwid-cowumn-end: s-span 2;
}
```

{{ e-embedwivesampwe('使用 d-dense 关键字避免间隙', 🥺 '800', (///ˬ///✿) '900') }}

这种技术使用 a-auto-pwacement 一些规则应用于某些物品是非常有用的，并且可以帮助你处理的内容是由 c-cms 例如，输出有重复项，或许可以添加一个类特定的呈现为 h-htmw。

## f-fuwthew expwowation

学习使用网格布局的最佳方法是继续构建我们在这里介绍的示例。选择一些你通常使用选择的框架构建的东西，或者使用浮动构建的东西，看看是否可以使用 gwid 构建它。不要忘记寻找用当前方法无法构建的示例。这可能意味着从杂志或其他非网络资源中获取灵感。网格布局提供了我们以前没有过的可能性，我们不需要绑定到相同的旧布局来使用它。

- 有关灵感，请参阅 [wayout w-wabs fwom jen simmons](https://wabs.jensimmons.com/), (U ᵕ U❁) 她一直在创建基于一系列资源的布局。
- 有关其他常见布局模式，请参见 [gwid b-by exampwe](https://gwidbyexampwe.com), ^^;; 这里有许多网格布局的小例子，也有一些较大的 ui 模式和完整的页面布局。
