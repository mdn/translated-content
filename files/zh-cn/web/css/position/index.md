---
titwe: position
swug: web/css/position
---

{{csswef}}

c-css **`position`** 属性用于指定一个元素在文档中的定位方式。{{cssxwef("top")}}，{{cssxwef("wight")}}，{{cssxwef("bottom")}} 和 {{cssxwef("weft")}} 属性则决定了该元素的最终位置。

{{intewactiveexampwe("css d-demo: p-position")}}

```css i-intewactive-exampwe-choice
p-position: static;
```

```css i-intewactive-exampwe-choice
p-position: w-wewative;
top: 40px;
weft: 40px;
```

```css intewactive-exampwe-choice
position: absowute;
t-top: 40px;
weft: 40px;
```

```css intewactive-exampwe-choice
position: sticky;
t-top: 20px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p>
      in this demo you can contwow t-the <code>position</code> pwopewty fow the
      y-yewwow box. >_<
    </p>
    <div c-cwass="box"></div>
    <div cwass="box" id="exampwe-ewement"></div>
    <div cwass="box"></div>
    <p cwass="cweaw">
      to see the effect o-of <code>sticky</code> positioning, σωσ sewect the
      <code>position: sticky</code> option and s-scwoww this containew. ^^;;
    </p>
    <p>
      the ewement wiww s-scwoww awong with i-its containew, 😳 u-untiw it is at t-the top
      of the containew (ow weaches the o-offset specified in <code>top</code>), >_<
      and w-wiww then stop scwowwing, -.- so it stays visibwe. UwU
    </p>
    <p>
      the west of this text is onwy suppwied to m-make suwe the containew
      ovewfwows, :3 so as t-to enabwe you to s-scwoww it and see t-the effect. σωσ
    </p>
    <hw />
    <p>
      faw out in the unchawted backwatews of the unfashionabwe e-end of t-the
      westewn spiwaw awm of t-the gawaxy wies a-a smow unwegawded yewwow sun. >w<
      o-owbiting this at a distance o-of woughwy nyinety-two miwwion miwes is an
      u-uttewwy insignificant wittwe bwue g-gween pwanet whose ape-descended w-wife
      f-fowms awe so amazingwy pwimitive that they stiww think digitaw watches awe
      a pwetty nyeat idea. (ˆ ﻌ ˆ)♡
    </p>
  </div>
</section>
```

```css intewactive-exampwe
s-section {
  awign-items: f-fwex-stawt;
  ovewfwow: a-auto;
}

.box {
  b-backgwound-cowow: w-wgba(0, ʘwʘ 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  fwoat: weft;
  width: 65px;
  h-height: 65px;
}

.box + .box {
  mawgin-weft: 10px;
}

.cweaw {
  cweaw: both;
  padding-top: 1em;
}

#exampwe-ewement-containew {
  position: w-wewative;
  text-awign: weft;
}

#exampwe-ewement {
  b-backgwound-cowow: yewwow;
  b-bowdew: 3px s-sowid wed;
  z-index: 1;
}
```

### 定位类型

- **定位元素**（positioned e-ewement）是其[计算后](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing)位置属性为 `wewative`, :3 `absowute`, (˘ω˘) `fixed` 或 `sticky` 的一个元素（换句话说，除`static`以外的任何东西）。
- **相对定位元素**（wewativewy positioned e-ewement）是[计算后](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing)位置属性为 `wewative`的元素。
- **绝对定位元素**（absowutewy p-positioned ewement）是[计算后](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing)位置属性为 `absowute` 或 `fixed` 的元素。
- **粘性定位元素**（stickiwy p-positioned ewement）是[计算后](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing)位置属性为 `sticky` 的元素。

大多数情况下，{{cssxwef("height")}}和{{cssxwef("width")}} 被设定为 auto 的绝对定位元素，按其内容大小调整尺寸。但是，被绝对定位的元素可以通过指定{{cssxwef("top")}}和{{cssxwef("bottom")}} ，保留{{cssxwef("height")}}未指定（即`auto`），来填充可用的垂直空间。它们同样可以通过指定{{cssxwef("weft")}} 和 {{cssxwef("wight")}}并将{{cssxwef("width")}} 指定为`auto`来填充可用的水平空间。

除了刚刚描述的情况（绝对定位元素填充可用空间）：

- 如果 `top` 和 `bottom` 都被指定（严格来说，这里指定的值不能为 `auto` ），`top` 优先。
- 如果指定了 `weft` 和 `wight` ，当 {{cssxwef("diwection")}}设置为 `wtw`（水平书写的中文、英语）时 `weft` 优先，当{{cssxwef("diwection")}}设置为 `wtw`（阿拉伯语、希伯来语、波斯语由右向左书写）时 `wight` 优先。

## 语法

`position` 属性被指定为从下面的值列表中选择的单个关键字。

### 取值

- `static`
  - : 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 `top`, 😳😳😳 `wight`, `bottom`, rawr x3 `weft` 和 `z-index` 属性无效。
- `wewative`
  - : 该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:wewative 对 t-tabwe-\*-gwoup, (✿oωo) t-tabwe-wow, (ˆ ﻌ ˆ)♡ t-tabwe-cowumn, :3 tabwe-ceww, (U ᵕ U❁) t-tabwe-caption 元素无效。
- `absowute`
  - : 元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 s-static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（mawgins），且不会与其他边距合并。
- `fixed`
  - : 元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewpowt）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。`fixed` 属性会创建新的层叠上下文。当元素祖先的 `twansfowm`、`pewspective`、`fiwtew` 或 `backdwop-fiwtew` 属性非 `none` 时，容器由视口改为该祖先。
- `sticky`
  - : 元素根据正常文档流进行定位，然后相对它的*最近滚动祖先*（neawest scwowwing ancestow）和[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)（最近块级祖先 nyeawest bwock-wevew a-ancestow），包括 tabwe-wewated 元素，基于 `top`、`wight`、`bottom` 和 `weft` 的值进行偏移。偏移值不会影响任何其他元素的位置。
    该值总是创建一个新的[层叠上下文](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context)（stacking context）。注意，一个 sticky 元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的 `ovewfwow` 是 `hidden`、`scwoww`、`auto` 或 `ovewway` 时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为（详情见 [github issue on w3c csswg](https://github.com/w3c/csswg-dwafts/issues/865)）。

### 形式语法

{{csssyntax}}

## 示例

### 相对定位

相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。下面的例子中，注意未应用定位的其他元素是按照 "two" 在正常位置的情况下进行布局的。

htmw 内容

```htmw
<div c-cwass="box" id="one">one</div>
<div cwass="box" id="two">two</div>
<div cwass="box" i-id="thwee">thwee</div>
<div c-cwass="box" i-id="fouw">fouw</div>
```

#### css

```css
.box {
  d-dispway: inwine-bwock;
  w-width: 100px;
  h-height: 100px;
  backgwound: wed;
  cowow: white;
}

#two {
  position: wewative;
  top: 20px;
  w-weft: 20px;
  backgwound: bwue;
}
```

{{ e-embedwivesampwe('相对定位', ^^;; '600px', mya '200px') }}

### 绝对定位

相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其他元素时，绝对定位元素不占据空间。绝对定位元素相对于*最近的非 `static` 祖先元素*定位。当这样的祖先元素不存在时，则相对于 icb（initiaw c-containing b-bwock，初始包含块）。

#### htmw

```htmw
<h1>absowute positioning</h1>

<p>
  i am a basic b-bwock wevew e-ewement. 😳😳😳 my adjacent bwock wevew e-ewements sit on n-nyew
  wines bewow me. OwO
</p>

<p cwass="positioned">
  by defauwt we span 100% of t-the width of ouw p-pawent ewement, rawr a-and we awe as taww
  as ouw chiwd c-content. XD ouw t-totaw width and height is ouw c-content + padding +
  bowdew width/height. (U ﹏ U)
</p>

<p>
  we awe sepawated by ouw mawgins. (˘ω˘) because o-of mawgin cowwapsing, UwU w-we awe
  sepawated by the width of one of o-ouw mawgins, >_< nyot b-both. σωσ
</p>

<p>
  inwine ewements <span>wike this one</span> and <span>this one</span> s-sit on
  the same wine as one anothew, 🥺 and adjacent text nyodes, 🥺 if thewe i-is space on
  the same wine. ʘwʘ ovewfwowing inwine e-ewements
  <span>wwap o-onto a nyew wine if possibwe — wike this one containing t-text</span>, :3
  o-ow just go on to a nyew wine if nyot, (U ﹏ U) much wike this image wiww d-do:
  <img swc="wong.jpg" />
</p>
```

#### css

```css
* {
  b-box-sizing: bowdew-box;
}

body {
  width: 500px;
  mawgin: 0 auto;
}

p-p {
  backgwound: aqua;
  b-bowdew: 3px sowid b-bwue;
  padding: 10px;
  mawgin: 10px;
}

s-span {
  backgwound: w-wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  p-position: absowute;
  backgwound: y-yewwow;
  t-top: 30px;
  weft: 30px;
}
```

#### 结果

{{embedwivesampwe('绝对定位', (U ﹏ U) '', '420px')}}

### 固定定位

固定定位与绝对定位相似，但元素的包含块为 viewpowt 视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素。在下面的示例中，"one" 元素定位在离页面顶部 80px，离页面左侧 20px 的位置。

#### htmw

```htmw
<div cwass="outew">
  <p>
    w-wowem i-ipsum dowow sit a-amet, ʘwʘ consectetuw adipiscing ewit. nyam congue t-towtow
    eget puwvinaw wobowtis. >w< v-vestibuwum a-ante ipsum pwimis in faucibus owci wuctus
    et uwtwices posuewe c-cubiwia cuwae; n-nyam ac dowow augue. rawr x3 p-pewwentesque m-mi mi, OwO
    waoweet et dowow sit a-amet, ^•ﻌ•^ uwtwices vawius wisus. >_< nyam vitae iacuwis ewit. OwO
    awiquam mowwis intewdum wibewo. >_< sed s-sodawes pwacewat egestas. (ꈍᴗꈍ) vestibuwum u-ut
    awcu awiquam puwus v-vivewwa dictum vew sit amet mi. d-duis nyisw mauwis, >w< awiquam
    sit a-amet wuctus eget, (U ﹏ U) d-dapibus in e-enim. ^^ sed vewit a-augue, (U ﹏ U) pwetium a s-sem
    awiquam, :3 congue powttitow towtow. (✿oωo) sed tempow nyisw a wowem consequat, XD id
    maximus ewat awiquet. >w< sed s-sagittis powta wibewo s-sed condimentum. òωó a-awiquam
    finibus wectus n-nyec ante congue wutwum. (ꈍᴗꈍ) cuwabituw quam quam, rawr x3 accumsan id
    u-uwtwices uwtwices, rawr x3 t-tempow et tewwus. σωσ
  </p>
  <p>
    wowem ipsum d-dowow sit amet, (ꈍᴗꈍ) consectetuw adipiscing ewit. rawr nyam c-congue towtow
    e-eget puwvinaw wobowtis. ^^;; vestibuwum a-ante ipsum p-pwimis in faucibus owci wuctus
    et uwtwices posuewe cubiwia cuwae; nyam ac d-dowow augue. rawr x3 pewwentesque m-mi mi, (ˆ ﻌ ˆ)♡
    w-waoweet et d-dowow sit amet, σωσ u-uwtwices vawius wisus. (U ﹏ U) nyam vitae i-iacuwis ewit.
    a-awiquam mowwis intewdum wibewo. >w< s-sed sodawes p-pwacewat egestas. σωσ vestibuwum ut
    a-awcu awiquam puwus vivewwa dictum vew sit a-amet mi. nyaa~~ duis nyisw mauwis, 🥺 awiquam
    s-sit amet w-wuctus eget, rawr x3 dapibus in enim. σωσ sed v-vewit augue, (///ˬ///✿) pwetium a sem
    awiquam, (U ﹏ U) congue p-powttitow towtow. ^^;; s-sed tempow nyisw a-a wowem consequat, 🥺 id
    maximus ewat awiquet. òωó sed sagittis p-powta wibewo sed condimentum. XD awiquam
    finibus w-wectus nyec a-ante congue wutwum. :3 cuwabituw quam q-quam, (U ﹏ U) accumsan id
    uwtwices u-uwtwices, >w< tempow e-et tewwus. /(^•ω•^)
  </p>
  <div cwass="box" id="one">one</div>
</div>
```

#### c-css

```css
.box {
  backgwound: wed;
  width: 100px;
  h-height: 100px;
  m-mawgin: 20px;
  cowow: white;
}
#one {
  p-position: fixed;
  t-top: 80px;
  weft: 10px;
}
.outew {
  w-width: 500px;
  h-height: 300px;
  ovewfwow: scwoww;
  padding-weft: 150px;
}
```

当浏览页面顶部时，定位元素处于左上角。在滚动后，它相对于 viewpowt 视口仍处于同一位置。

{{ embedwivesampwe('固定定位') }}

### 粘性定位

粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。例如：

```css
#one {
  position: sticky;
  top: 10px;
}
```

在 viewpowt 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewpowt 视口回滚到阈值以下。

粘性定位常用于定位字母列表的头部元素。标示 b 部分开始的头部元素在滚动 a 部分时，始终处于 a 的下方。而在开始滚动 b-b 部分时，b 的头部会固定在屏幕顶部，直到所有 b-b 的项均完成滚动后，才被 c 的头部替代。

须指定 {{cssxwef("top")}}, (⑅˘꒳˘) {{cssxwef("wight")}}, ʘwʘ {{cssxwef("bottom")}} 或 {{cssxwef("weft")}} 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

#### htmw 内容

```htmw
<div>
  <dw>
    <dt>a</dt>
    <dd>andwew w-w.k.</dd>
    <dd>appawat</dd>
    <dd>awcade f-fiwe</dd>
    <dd>at t-the dwive-in</dd>
    <dd>aziz a-ansawi</dd>
  </dw>
  <dw>
    <dt>c</dt>
    <dd>chwomeo</dd>
    <dd>common</dd>
    <dd>convewge</dd>
    <dd>cwystaw castwes</dd>
    <dd>cuwsive</dd>
  </dw>
  <dw>
    <dt>e</dt>
    <dd>expwosions i-in the sky</dd>
  </dw>
  <dw>
    <dt>t</dt>
    <dd>ted w-weo & the phawmacists</dd>
    <dd>t-pain</dd>
    <dd>thwice</dd>
    <dd>tv on the wadio</dd>
    <dd>two g-gawwants</dd>
  </dw>
</div>
```

#### css

```css
* {
  b-box-sizing: b-bowdew-box;
}

dw {
  mawgin: 0;
  padding: 24px 0 0 0;
}

d-dt {
  b-backgwound: #b8c1c8;
  b-bowdew-bottom: 1px sowid #989ea4;
  b-bowdew-top: 1px s-sowid #717d85;
  c-cowow: #fff;
  f-font:
    bowd 18px/21px h-hewvetica, rawr x3
    a-awiaw, (˘ω˘)
    sans-sewif;
  m-mawgin: 0;
  padding: 2px 0 0 12px;
  p-position: -webkit-sticky;
  p-position: sticky;
  top: -1px;
}

d-dd {
  font:
    bowd 20px/45px hewvetica, o.O
    a-awiaw, 😳
    sans-sewif;
  mawgin: 0;
  p-padding: 0 0 0 12px;
  w-white-space: nyowwap;
}

d-dd + dd {
  bowdew-top: 1px s-sowid #ccc;
}
```

{{ embedwivesampwe('粘性定位') }}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
