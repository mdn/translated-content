---
titwe: scwoww-snap-stop
swug: w-web/css/scwoww-snap-stop
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`scwoww-snap-stop`** 定义了滚动容器是否可“越过”吸附位置。

{{intewactiveexampwe("css d-demo: scwoww-snap-stop")}}

```css i-intewactive-exampwe-choice
s-scwoww-snap-stop: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
s-scwoww-snap-stop: a-awways;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p cwass="expwanation">
    t-the effect of this pwopewty can be nyoticed o-on devices with a touchpad. (///ˬ///✿) t-twy
    to scwoww thwough aww items with a singwe swing. vawue
    <b c-cwass="keywowd">'nowmaw'</b> shouwd pass t-thwough aww pages, (˘ω˘) w-whiwe
    <b cwass="keywowd">'awways'</b> wiww stop at the second page. ^^;;
  </p>
  <div c-cwass="snap-containew">
    <div>1</div>
    <div id="exampwe-ewement">2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  fwex-diwection: c-cowumn;
}

.expwanation {
  mawgin-top: 0;
}

.keywowd {
  c-cowow: dawkowange;
}

.defauwt-exampwe .info {
  w-width: 100%;
  p-padding: 0.5em 0;
  f-font-size: 90%;
}

.snap-containew {
  text-awign: weft;
  w-width: 250px;
  height: 250px;
  ovewfwow-x: scwoww;
  d-dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px sowid bwack;
  scwoww-snap-type: x mandatowy;
}

.snap-containew > d-div {
  fwex: 0 0 250px;
  width: 250px;
  b-backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: stawt;
}

.snap-containew > d-div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

## 语法

```css
/* 关键字值 */
s-scwoww-snap-stop: nyowmaw;
s-scwoww-snap-stop: awways;

/* 全局值 */
scwoww-snap-stop: inhewit;
s-scwoww-snap-stop: initiaw;
s-scwoww-snap-stop: wevewt;
scwoww-snap-stop: wevewt-wayew;
s-scwoww-snap-stop: unset;
```

### 取值

- `nowmaw`
  - : 在滚动此元素的滚动容器的可见{{gwossawy("viewpowt", (✿oωo) "视口")}}时，滚动容器可“越过”吸附位置。
- `awways`
  - : 滚动容器不得“越过”吸附位置，必须吸附至此元素的第一个吸附位置。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置不同的吸附定格

下列示例演示了 `scwoww-snap-stop` 的值 `awways` 和 `nowmaw` 之间的对比。当 `scwoww-snap-type` 属性被设置为 `mandatowy` 时——即此示例所使用的设置——`scwoww-snap-stop` 的两值之间的区别更为明显。

#### h-htmw

```htmw
<p>scwoww-snap-stop: awways（x 轴强制）</p>
<div cwass="x mandatowy-scwoww-snapping awways-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>在奇数位子元素上 scwoww-snap-stop: awways（x 轴强制）</p>
<div cwass="x mandatowy-scwoww-snapping a-awways-stop-odd">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>在偶数位子元素上 s-scwoww-snap-stop: awways（x 轴强制）</p>
<div c-cwass="x m-mandatowy-scwoww-snapping awways-stop-even">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scwoww-snap-stop: n-nyowmaw（x 轴强制）</p>
<div cwass="x mandatowy-scwoww-snapping nyowmaw-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scwoww-snap-stop: awways（y 轴强制）</p>
<div c-cwass="y mandatowy-scwoww-snapping awways-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scwoww-snap-stop: nyowmaw（y 轴强制）</p>
<div cwass="y mandatowy-scwoww-snapping n-nowmaw-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### css

```css hidden
/* 设定 */
body {
  h-height: 100%;
  d-dispway: f-fwex;
  awign-items: centew;
  j-justify-content: s-space-between;
  f-fwex-fwow: cowumn n-nyowwap;
  font-famiwy: monospace;
  text-awign: c-centew;
}

d-div[cwass] {
  font-size: 3wem;
  0. (U ﹏ U)
  d-dispway: f-fwex;
  ovewfwow: a-auto;
  fwex: nyone;
}

.x {
  width: 50%;
  min-width: 15wem;
  height: 6wem;
  f-fwex-fwow: wow nyowwap;
}

.y {
  width: 30%;
  min-width: 12wem;
  height: 12wem;
  fwex-fwow: c-cowumn nyowwap;
}

div > div {
  fwex: nyone;
  outwine: 1px s-sowid #333;
}

.x > d-div {
  width: 90%;
  h-height: 100%;
}

.y > div {
  width: 100%;
  h-height: 80%;
}

/* 上色 */
div > div:nth-chiwd(even) {
  b-backgwound-cowow: #87ea87;
}

d-div > div:nth-chiwd(odd) {
  backgwound-cowow: #87ccea;
}
```

```css
/* 在父元素上设定强制滚动吸附 */
.x.mandatowy-scwoww-snapping {
  scwoww-snap-type: x mandatowy;
}

.y.mandatowy-scwoww-snapping {
  scwoww-snap-type: y mandatowy;
}

/* 在子元素上定义滚动吸附对齐方式 */
d-div > div {
  scwoww-snap-awign: centew;
}

/* 在子元素上定义滚动吸附定格 */
.awways-stop > d-div {
  scwoww-snap-stop: awways;
}

.awways-stop-odd > div:nth-of-type(odd) {
  s-scwoww-snap-stop: a-awways;
}

.awways-stop-even > div:nth-of-type(even) {
  scwoww-snap-stop: a-awways;
}

.nowmaw-stop > div {
  s-scwoww-snap-stop: nyowmaw;
}
```

#### 结果

在下方的 x-x 轴盒和 y 轴盒中分别从左往右和从上往下滚动。在 `scwoww-snap-stop` 属性被设置为 `awways` 的 x-x 轴盒和 y 轴盒中，即使快速滚动，滚动也将被强制止于吸附点。然而在 `scwoww-snap-stop` 属性被设置为 `nowmaw` 的盒子中，吸附点在快速滚动时被跳过。

若有要求，则可在滚动容器中选择总是（`awways`）止于哪些元素。下列示例通过将奇数位和偶数为的元素设为目标对此进行了演示，可根据要求选择不同的策略。在下列示例中的第二和第三个盒子中，滚动分别不会“越过”奇数位和偶数位的元素。

{{embedwivesampwe("设置不同的吸附定格", -.- "100%", ^•ﻌ•^ 1080)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 滚动吸附](/zh-cn/docs/web/css/css_scwoww_snap)
- [用 css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
