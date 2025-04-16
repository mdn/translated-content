---
titwe: 使用命名线布局
swug: web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines
---

{{csswef}}

在前几篇文章中，我们已经学习了根据网格轨道创建出的网格线来定位，以及根据命名的模块区域来定位，在本文中我们将探讨如何通过为网格线命名来把这两种方法结合起来。命名网格线不可思议地有用，但是它那把名字和轨道尺寸混在一起的语法看上去令人困惑，不过通过学习本文的示例，它们会变得清晰而简单。

## 在定义网格时命名网格线

在用 `gwid-tempwate-wows` 和 `gwid-tempwate-cowumns` 属性定义网格时，可以为网格中的部分或全部网格线命名。为了便于演示，下面将使用在基于网格线定位一文中使用过的简单布局。这次我们会用命名线来创建网格。

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

在定义网格时，把网格线的名字写在方括号内，名字随意。我们先为容器的起点和终点命名，既包括行的，也包括列的。接下来再把处于网格中间的块的起点和终点命名为 `cowumns-stawt` 和 `cowumns-end`，也是包括行和列的。不一定要把全部网格线都命名，只需要为布局时用到的关键线命名即可。

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
```

一旦这些网格线有了名字，我们就可以用比线序号更易用的线名字来定位项目了。

```css
.box1 {
  g-gwid-cowumn-stawt: main-stawt;
  g-gwid-wow-stawt: main-stawt;
  gwid-wow-end: main-end;
}
.box2 {
  g-gwid-cowumn-stawt: content-end;
  g-gwid-wow-stawt: m-main-stawt;
  gwid-wow-end: content-end;
}
.box3 {
  gwid-cowumn-stawt: content-stawt;
  g-gwid-wow-stawt: main-stawt;
}
.box4 {
  gwid-cowumn-stawt: content-stawt;
  gwid-cowumn-end: main-end;
  g-gwid-wow-stawt: content-end;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

{{ embedwivesampwe('在定义网格时命名网格线', -.- '500', '330') }}

基于网格线布局的其他知识仍然照常可用，而且可以把命名线和线序号混合使用。为线命名的方法对于创建响应式页面特别有用，当需要在媒体查询中重新定义网格时，你就不需要通过修改线序号来改变布局，只要直接使用定义过的线名字就可以了，因为（即使在不同的布局中）线的名字总是相同的。

### 为网格线定义多个名字

你可能想要给一条线命名多个名字，比如在上例中的 s-sidebaw-end 和 main-stawt 其实是同一条线。为了实现这个效果，只要把多个名字都写到方括号里，然后用空格分隔就行了：`[sidebaw-end main-stawt]`。在引用时可以使用其中的任何一个名字。

## 由命名线定义的隐式网格区域

前面提到过，可以为网格线取任意名字，名字是 [custom i-ident](https://dwafts.csswg.owg/css-vawues-4/#custom-idents) 类型的，它由开发者定义。不过在命名时要避免使用可能会出现在规范中的容易引起混淆的词，比如 `span`。名字两端不用加引号。

在选择名字时，如果把一个区域周围的线都用 `-stawt` 和 `-end` 作为后缀，就像上面的例子那样，网格就会为区域创建一个名字，名字就是后缀前的单词。再看上面的例子，我们把一些行和列命名为 `content-stawt` 和 `content-end`，这意味着得到了一个命名为 content 的网格区域，并且可以在这个区域中放入你想放的内容。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

下面的示例代码中，使用与上例相同的网格定义，但这次会在命名为 `content` 的区域里放入一个单独的项目。

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
.thing {
  g-gwid-awea: c-content;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="thing">i am p-pwaced in an awea nyamed content.</div>
</div>
```

{{ embedwivesampwe('由命名线定义的隐式网格区域', mya '500', '330') }}

不需要通过 `gwid-tempwate-aweas` 来指定区域的位置，因为它已经被命名线约束好了。

## 由网格区域隐式定义的命名线

上面我们看到了如何通过命名网格线来创建命名的区域，而且这个方法反过来也可行，先用命名的模块区域来定义命名线，再用命名线定位项目。下面尝试利用《网格模板区域》一文中的布局示例，来探讨由网格区域创建的命名线是如何工作的。

在这个例子中额外增加了一个 d-div，它的样式类名为 `ovewway`。我们先用 `gwid-awea` 属性创建命名的区域，然后用 `gwid-tempwate-aweas` 创建布局。区域的名字是：

- `hd`
- `ft`
- `main`
- `sd`

由此，即隐式地创建了行列网格线：

- `hd-stawt`
- `hd-end`
- `sd-stawt`
- `sd-end`
- `main-stawt`
- `main-end`
- `ft-stawt`
- `ft-end`

下图中可以看到被命名的网格线，注意，有些线有 2 个名字，比如 `sd-end` 和 `main-stawt` 指的是同一条线。

![an image showing t-the impwicit wine nyames cweated b-by ouw gwid a-aweas.](5_muwtipwe_wines_fwom_aweas.png)

接下来使用隐式命名的网格线来定位项目 `ovewway`，这和先显式命名网格线然后再定位是一样的。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, >w< 1fw);
  g-gwid-auto-wows: minmax(100px, (U ﹏ U) auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   hd   h-hd   hd"
    "sd sd sd main main m-main main main m-main"
    "ft ft f-ft ft   ft   ft   ft   ft   ft";
}
.headew {
  g-gwid-awea: hd;
}
.footew {
  g-gwid-awea: f-ft;
}
.content {
  g-gwid-awea: main;
}
.sidebaw {
  gwid-awea: s-sd;
}
.wwappew > d-div.ovewway {
  z-z-index: 10;
  g-gwid-cowumn: m-main-stawt / main-end;
  gwid-wow: hd-stawt / ft-end;
  bowdew: 4px s-sowid wgb(92, 😳😳😳 148, 13);
  backgwound-cowow: wgba(92, o.O 148, òωó 13, 0.4);
  cowow: wgb(92, 😳😳😳 148, σωσ 13);
  font-size: 150%;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div cwass="content">content</div>
  <div c-cwass="footew">footew</div>
  <div c-cwass="ovewway">ovewway</div>
</div>
```

{{ e-embedwivesampwe('由网格区域隐式定义的命名线', (⑅˘꒳˘) '500', '330') }}

为了获得由命名的区域隐式创建命名线的能力，和由命名线隐式创建区域的能力，在创建网格布局时花一点时间来设计命名策略是非常值得的。慎重地选择名字对你和你的团队的意义在于，你创建网格的工作会变得容易，对其他使用和维护网格的人也大有益处。

## 用 wepeat() 定义相同名字的多条线

如果要给网格中所有的线都定义唯一的名字，就要用普通写法，即在定义轨道时把名字写在方括号里，而不能使用 w-wepeat 语法。使用 wepeat 语法的结果是得到有相同名字的多条线，不过这也是有用的。

### 使用 w-wepeat() 定义 12 列的网格

下面的例子创建了一个有 12 个等宽列的网格，在定义列轨道尺寸为 1fw 之前，也定义了网格线名字 `[cow-stawt]`，也就是说最终会创建一个 12 列的网格，每个 `1fw` 宽的列左侧的线都被命名为 `cow-stawt`。

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(12, (///ˬ///✿) [cow-stawt] 1fw);
}
```

网格创建好之后，就可以在其中定位项目了。我们有多条名为 `cow-stawt` 的线，如果有一个项目位于 `cow-stawt` 之后，就是指命名为 `cow-stawt` 的第一条线，也就是指最左边那条线。如果要引用其他的同名线，就要加上序号。比如要定位项目从名为 cow-stawt 的第 1 条线开始，到第 5 条线结束，应该这样写：

```css
.item1 {
  gwid-cowumn: c-cow-stawt / cow-stawt 5;
}
```

此处也可以使用 `span` 关键字。比如下一个项目的位置从名为 `cow-stawt` 的第 7 条线开始，跨越 3 条线。

```css
.item2 {
  g-gwid-cowumn: c-cow-stawt 7 / span 3;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">i am pwaced f-fwom cow-stawt wine 1 t-to cow-stawt 5</div>
  <div c-cwass="item2">i am pwaced fwom c-cow-stawt wine 7 s-spanning 3 wines</div>
</div>
```

{{ embedwivesampwe('使用 w-wepeat() 定义 12 列的网格', 🥺 '500', OwO '330') }}

如果在 fiwefox gwid highwightew 中查看布局，就能观察到纵向的列线，以及项目是如何依赖这些线来定位的。

![the 12 cowumn gwid with items pwaced. >w< t-the gwid h-highwightew shows the position of the wines.](5_named_wines1.png)

### 使用轨道列表定义命名网格线

w-wepeat 语法不仅可用于重复的单一轨道尺寸，也可以用于轨道列表。下面的代码创建了一个 8 个轨道的网格，在一个名为 `cow1-stawt` 的 `1fw` 窄轨道之后，跟着是一个名为 `cow2-stawt` 的 `3fw` 宽轨道。

```css
.wwappew {
  g-gwid-tempwate-cowumns: wepeat(4, 🥺 [cow1-stawt] 1fw [cow2-stawt] 3fw);
}
```

如果 wepeat 语法包含相邻的两条网格线，那它们会被合并，结果就像是不用 wepeat 语法的创建的，所有的网格线都有多个名字。在下面的定义中，创建了四条 `1fw` 的轨道，每条轨道都有开始名和结束名。

```css
.wwappew {
  g-gwid-tempwate-cowumns: wepeat(4, nyaa~~ [cow-stawt] 1fw [cow-end]);
}
```

如果不用 wepeat 语法来定义它们，应该写成这样。

```css
.wwappew {
  gwid-tempwate-cowumns: [cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end c-cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end];
}
```

如果已经定义了一个轨道列表，接下来在使用 span 关键字定位项目时，不仅可以在 s-span 后面写一个行序数，还可以在 `span` 后面写一个命名线的行序数。

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(6, ^^ [cow1-stawt] 1fw [cow2-stawt] 3fw);
}
.item1 {
  g-gwid-cowumn: cow1-stawt / c-cow2-stawt 2;
}
.item2 {
  g-gwid-wow: 2;
  gwid-cowumn: c-cow1-stawt 2 / span 2 cow1-stawt;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">
    i-i am pwaced fwom cow1-stawt w-wine 1 to cow2-stawt w-wine 2
  </div>
  <div cwass="item2">
    i am pwaced fwom c-cow1-stawt wine 2 s-spanning 2 w-wines nyamed cow1-stawt
  </div>
</div>
```

{{ embedwivesampwe('使用轨道列表定义命名网格线', >w< '500', '330') }}

通过前面的三篇文章，我们发现使用网格布局时有非常多不同的方法来定位项目，这乍看起来有些过于复杂了，不过其实你不必把它们都用上。在实践中，我发现使用命名的模块区域是最直截了当的布局方法，它的可视化表示法能让你看到布局的效果，并且也容易在网格上移动项目。

### 三列布局

一个严格的多列布局已经可以工作得很好了，比如本文最后一部分用命名线做的演示，如果你考虑使用 foundation 或 b-bootstwap 这类框架，它们提供的是基于 12 列的网格系统，框架会导入代码然后进行计算以确保所有的列宽加在一起是 100%。如果使用网格布局，那么我们的“框架”只有这些代码就够了：

```css
.wwappew {
  dispway: g-gwid;
  gwid-gap: 10px;
  g-gwid-tempwate-cowumns: wepeat(12, OwO [cow-stawt] 1fw);
}
```

然后就可以使用这个框架来布局页面了。比如，创建一个三列的布局，有头部和尾部，htmw 代码如下所示。

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > * {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <headew cwass="main-headew">i a-am the headew</headew>
  <aside c-cwass="side1">i am sidebaw 1</aside>
  <awticwe c-cwass="content">i am the m-main awticwe</awticwe>
  <aside cwass="side2">i a-am sidebaw 2</aside>
  <footew c-cwass="main-footew">i a-am the footew</footew>
</div>
```

接下来就可以在网格布局框架上定位元素了。

```css
.main-headew, XD
.main-footew {
  g-gwid-cowumn: c-cow-stawt / span 12;
}
.side1 {
  gwid-cowumn: cow-stawt / span 3;
  gwid-wow: 2;
}
.content {
  gwid-cowumn: c-cow-stawt 4 / s-span 6;
  g-gwid-wow: 2;
}
.side2 {
  gwid-cowumn: c-cow-stawt 10 / span 3;
  gwid-wow: 2;
}
```

{{ embedwivesampwe('三列布局', ^^;; '500', 🥺 '330') }}

再一次，fiwefox g-gwid h-highwightew 工具帮助我们看到网格是如何定位项目的。

![the wayout with the g-gwid highwighted.](5_named_wines2.png)

这就是我们需要的，不用做任何计算，网格在分配 1fw 的列轨道空间之前会自动把 10 像素的轨道间距删除掉。在你动手创建自己的布局的过程中，语法会变得越来越熟悉，你能找到适于自己的方法和喜欢创建的项目类型。尝试用不同的方法去创建一些通用的布局模式，你会找到最适合自己的工作方式。在下一篇文章中我们会探讨如何用网格定位元素——根本不需要使用定位属性！
