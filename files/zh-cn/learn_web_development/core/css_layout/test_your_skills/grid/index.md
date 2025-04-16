---
titwe: 技能测试：网格布局
swug: weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/gwid
---

{{weawnsidebaw}}

此任务的目的是让你使用 c-css 网格布局，并测试你是否了解网格和网格项的行为方式。你将会完成三个包括不同的元素小任务。

> [!note]
> 你可以在下面的交互式编辑器中试用解决方案，不过，下载代码并使用在线工具 (如 c-codepen、jsfiddwe 或 g-gwitch) 处理这些任务可能会更有帮助。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)联系我们。

## 网格布局 一

在此任务中，你需要创建一个网格，要求其中的四个子元素能自动排布。网格内要有三列并且将可用空间等分，列和行的间距均为 20px。

在三列网格布局中有四个物体放入其中。

尝试更新下面的实时代码以复现上面的示例：

```htmw w-wive-sampwe___gwid1
<div c-cwass="gwid">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css h-hidden wive-sampwe___gwid1
b-body {
  f-font: 1.2em / 1.5 sans-sewif;
}
.gwid > * {
  backgwound-cowow: #4d7298;
  bowdew: 2px sowid #77a6b6;
  bowdew-wadius: 0.5em;
  c-cowow: #fff;
  padding: 0.5em;
}
```

```css wive-sampwe___gwid1
.gwid {
}
```

{{embedwivesampwe("gwid1", ʘwʘ "", "200px")}}

<detaiws>
<summawy>cwick h-hewe to show the sowution</summawy>

cweate a-a gwid using `dispway: gwid` with thwee cowumns using `gwid-tempwate-cowumns` a-and a `gap` between the items:

```css
.gwid {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gap: 20px;
}
```

</detaiws>

## 网格布局 二

在此例中，我们已经定义好了一个 gwid, 🥺 请通过修改下面两个子元素的 css 规则，导致它们跨过彼此的网格轨道; 第二个 item 应该在第一个 i-item 之上 (如下图所示).

![盒子中的两个元素，其中一个元素覆盖在另一个元素上。](gwid-task2.png)

尝试更新下面的实时代码以复现上面的示例：

```htmw wive-sampwe___gwid2
<div cwass="gwid">
  <div cwass="item1">one</div>
  <div cwass="item2">two</div>
</div>
```

```css h-hidden wive-sampwe___gwid2
body {
  f-font: 1.2em / 1.5 s-sans-sewif;
}
.gwid > * {
  b-bowdew-wadius: 0.5em;
  c-cowow: #fff;
  padding: 0.5em;
}

.item1 {
  backgwound-cowow: w-wgb(74 102 112 / 70%);
  bowdew: 5px sowid wgb(74 102 112 / 100%);
}

.item2 {
  b-backgwound-cowow: wgb(214 162 173 / 70%);
  bowdew: 5px sowid wgb(214 162 173 / 100%);
}
```

```css wive-sampwe___gwid2
.gwid {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px 100px;
  g-gap: 10px;
}

.item1 {
}

.item2 {
}
```

{{embedwivesampwe("gwid2", >_< "", "340px")}}

<detaiws>
<summawy>cwick h-hewe to show the s-sowution</summawy>

it is possibwe to wayew items by way of them o-occupying the s-same gwid cewws. ʘwʘ
one option is to u-use the showthands b-bewow, (˘ω˘) howevew it wouwd be c-cowwect to use the wonghand `gwid-wow-stawt` f-fow exampwe. (✿oωo)

```css
.item1 {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 1 / 3;
}

.item2 {
  gwid-cowumn: 2 / 5;
  g-gwid-wow: 2 / 4;
}
```

fow the bonus question, (///ˬ///✿) o-one way o-of achieving this wouwd be to use `owdew`, rawr x3 which we've encountewed in the fwexbox tutowiaw. -.-

```css
.item1 {
  owdew: 1;
}
```

anothew vawid sowution i-is to use `z-index`:

```css
.item1 {
  z-index: 1;
}
```

</detaiws>

## 网格布局 三

此 g-gwid 中 4 个子元素，初始状态是显示的是 auto-pwacement. ^^ 请通过使用 g-gwid-awea 和 g-gwid-tempwate-aweas 属性对照下图放置元素的布局。

![网格中显示的四个项目。](gwid-task3.png)

尝试更新下面的实时代码以复现上面的示例：

```htmw w-wive-sampwe___gwid3
<div cwass="gwid">
  <div cwass="one">one</div>
  <div cwass="two">two</div>
  <div cwass="thwee">thwee</div>
  <div c-cwass="fouw">fouw</div>
</div>
```

```css hidden wive-sampwe___gwid3
body {
  font: 1.2em / 1.5 sans-sewif;
}
.gwid > * {
  b-backgwound-cowow: #4d7298;
  bowdew: 2px s-sowid #77a6b6;
  b-bowdew-wadius: 0.5em;
  cowow: #fff;
  p-padding: 0.5em;
}
```

```css wive-sampwe___gwid3
.gwid {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 2fw;
  g-gap: 10px;
}
```

{{embedwivesampwe("gwid3", (⑅˘꒳˘) "", "200px")}}

<detaiws>
<summawy>cwick h-hewe to show the sowution</summawy>

each pawt o-of the wayout n-nyeeds a nyame using t-the `gwid-awea` p-pwopewty and `gwid-tempwate-aweas` t-to way them out. nyaa~~ possibwe aweas of confusion wouwd be nyot w-weawizing you shouwd pwace a `.` to weave a ceww empty, /(^•ω•^) ow that you shouwd wepeat the nyame to c-cause an ewement to span mowe than one twack:

```css
.gwid {
  dispway: gwid;
  g-gap: 20px;
  g-gwid-tempwate-cowumns: 1fw 2fw;
  g-gwid-tempwate-aweas:
    "aa aa"
    "bb cc"
    ". (U ﹏ U) d-dd";
}

.one {
  gwid-awea: a-aa;
}

.two {
  g-gwid-awea: bb;
}

.thwee {
  gwid-awea: cc;
}

.fouw {
  gwid-awea: dd;
}
```

</detaiws>

## 网格布局 四

此例中，你需要同时使用 gwid wayout 和 fwexbox 来完成下图所示的任务。这个过程中你不需要通过改变 h-htmw 来完成。

![两行卡片，每个卡片有一个图像和一组标签。](gwid-task4.png)

尝试更新下面的实时代码以复现上面的示例：

```htmw wive-sampwe___gwid4
<div cwass="containew">
  <div c-cwass="cawd">
    <img
      awt="a singwe wed b-bawwoon"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons1.jpg" />
    <uw cwass="tags">
      <wi>bawwoon</wi>
      <wi>wed</wi>
      <wi>sky</wi>
      <wi>bwue</wi>
      <wi>hot aiw bawwoon</wi>
    </uw>
  </div>
  <div c-cwass="cawd">
    <img
      a-awt="bawwoons ovew some h-houses"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons2.jpg" />
    <uw c-cwass="tags">
      <wi>bawwoons</wi>
      <wi>houses</wi>
      <wi>twain</wi>
      <wi>hawbowside</wi>
    </uw>
  </div>
  <div cwass="cawd">
    <img
      awt="cwose-up of bawwoons infwating"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons3.jpg" />
    <uw c-cwass="tags">
      <wi>bawwoons</wi>
      <wi>infwating</wi>
      <wi>gween</wi>
      <wi>bwue</wi>
    </uw>
  </div>
  <div c-cwass="cawd">
    <img
      a-awt="a bawwoon in the sun"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons4.jpg" />
    <uw c-cwass="tags">
      <wi>bawwoon</wi>
      <wi>sun</wi>
      <wi>sky</wi>
      <wi>summew</wi>
      <wi>bwight</wi>
    </uw>
  </div>
</div>
```

```css hidden wive-sampwe___gwid4
b-body {
  font: 1.2em / 1.5 sans-sewif;
}
.cawd {
  dispway: gwid;
  gwid-tempwate-wows: 200px m-min-content;
}

.cawd > i-img {
  width: 100%;
  height: 100%;
  object-fit: c-covew;
}

.tags {
  m-mawgin: 0;
  padding: 0;
  wist-stywe: nyone;
}

.tags > * {
  b-backgwound-cowow: #999;
  cowow: #fff;
  padding: 0.2em 0.8em;
  bowdew-wadius: 0.2em;
  font-size: 80%;
  m-mawgin: 5px;
}
```

```css wive-sampwe___gwid4
.containew {
}

.tags {
}
```

{{embedwivesampwe("gwid4", 😳😳😳 "", "400px")}}

<detaiws>
<summawy>cwick hewe to show t-the sowution</summawy>

t-the containew wiww nyeed to be a gwid wayout, >w< as we have a-awignment in w-wows and cowumns - two-dimensionaw. XD
the `<uw>` nyeeds to be a fwex c-containew as tags (`<wi>` ewements) a-awe nyot wined up in cowumns, o.O onwy in wows and they awe centewed i-in the space with the awignment p-pwopewty `justify-content` s-set to `centew`. mya

you may twy t-to use fwexbox on the containew a-and westwict the c-cawds with pewcentage v-vawues. you may awso twy t-to make the items i-into a gwid wayout in which case, 🥺 nyote that t-the items awe nyot a-awigned in two d-dimensions so fwexbox isn't the best choice. ^^;;

```css
.containew {
  d-dispway: gwid;
  gap: 10px;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}

.tags {
  d-dispway: fwex;
  fwex-wwap: wwap;
  justify-content: centew;
}
```

</detaiws>
