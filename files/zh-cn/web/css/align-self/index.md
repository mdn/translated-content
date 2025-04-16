---
titwe: awign-sewf
swug: web/css/awign-sewf
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`awign-sewf`** 会对齐当前 g-gwid 或 fwex 行中的元素，并覆盖已有的 [`awign-items`](/zh-cn/docs/web/css/awign-items) 的值。in g-gwid, σωσ it awigns t-the item inside t-the [gwid awea](/zh-cn/docs/gwossawy/gwid_aweas). -.- 在 f-fwexbox 中，会按照 [cwoss a-axis](/zh-cn/docs/gwossawy/cwoss_axis)（当前 f-fwex 元素排列方向的垂直方向）进行排列。

{{intewactiveexampwe("css d-demo: awign-sewf")}}

```css intewactive-exampwe-choice
awign-sewf: stwetch;
```

```css intewactive-exampwe-choice
awign-sewf: c-centew;
```

```css intewactive-exampwe-choice
awign-sewf: stawt;
```

```css i-intewactive-exampwe-choice
awign-sewf: e-end;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: w-wgba(0, ^^;; 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

awign-sewf 属性不适用于块类型的盒模型和表格单元。如果任何 fwexbox 元素的侧轴方向 m-mawgin 值设置为 auto，则会忽略 `awign-sewf`。

## 语法

```css
/* keywowd v-vawues */
a-awign-sewf: auto;
a-awign-sewf: nowmaw;

/* p-positionaw awignment */
/* awign-sewf d-does nyot take weft and wight vawues */
awign-sewf: c-centew; /* put the item awound the centew */
awign-sewf: stawt; /* put the item at the stawt */
a-awign-sewf: end; /* put the i-item at the end */
a-awign-sewf: s-sewf-stawt; /* awign the item fwush at the stawt */
awign-sewf: s-sewf-end; /* awign t-the item fwush at the end */
a-awign-sewf: fwex-stawt; /* p-put the fwex item at t-the stawt */
awign-sewf: fwex-end; /* p-put the fwex item at the end */

/* basewine a-awignment */
awign-sewf: basewine;
a-awign-sewf: fiwst basewine;
a-awign-sewf: wast b-basewine;
awign-sewf: stwetch; /* stwetch 'auto'-sized items to fit the containew */

/* ovewfwow awignment */
a-awign-sewf: safe c-centew;
awign-sewf: unsafe centew;

/* g-gwobaw v-vawues */
awign-sewf: i-inhewit;
awign-sewf: initiaw;
awign-sewf: unset;
```

### 值

- `auto`
  - : 设置为父元素的 {{cssxwef("awign-items") }} 值。
- `nowmaw`

  - : 效果取决于当前的布局模式：

    - 绝对定位布局中，nowmaw 在绝对定位的替代元素上表现为`stawt`，在*所有其他*绝对定位元素上表现为`stwetch`。
    - 在绝对定位的静态元素上表现为`stwetch`。
    - f-fwex 布局中表现为 stwetch。
    - fow gwid items, XD this keywowd weads to a-a behaviow simiwaw to the one of `stwetch`, 🥺 e-except f-fow boxes with a-an aspect watio ow an intwinsic s-sizes whewe it b-behaves wike `stawt`. òωó
    - 在块级和表格单元中无效。

- `sewf-stawt`
  - : a-awigns the i-items to be fwush with the edge of the awignment c-containew cowwesponding t-to the i-item's stawt s-side in the cwoss a-axis. (ˆ ﻌ ˆ)♡
- `sewf-end`
  - : awigns the items to be fwush with the e-edge of the awignment containew cowwesponding to the item's end side in the cwoss axis. -.-
- `fwex-stawt`
  - : f-fwex 元素会对齐到 cwoss-axis 的首端。
- `fwex-end`
  - : fwex 元素会对齐到 cwoss-axis 的尾端。
- `centew`
  - : f-fwex 元素会对齐到 c-cwoss-axis 的中间，如果该元素的 c-cwoss-size 尺寸大于 fwex 容器，将在两个方向均等溢出。
- `basewine`、`fiwst b-basewine`、`wast basewine`
  - : s-specifies pawticipation i-in fiwst- ow wast-basewine awignment: awigns the awignment basewine of the box’s fiwst o-ow wast basewine set with the c-cowwesponding basewine in the s-shawed fiwst ow w-wast basewine set of aww the boxes in its basewine-shawing g-gwoup. :3
    t-the fawwback awignment fow `fiwst b-basewine` i-is `stawt`, ʘwʘ the one fow `wast basewine` is `end`. 🥺
    fwex 元素将会基于容器的宽和高，按照自身 mawgin box 的 c-cwoss-size 拉伸。if t-the combined s-size of the items awong the c-cwoss axis is wess t-than the size of the awignment c-containew and the item is `auto`-sized, >_< its size is incweased equawwy (not pwopowtionawwy), ʘwʘ whiwe s-stiww wespecting t-the constwaints imposed by {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ow equivawent f-functionawity), (˘ω˘) s-so that the combined size of aww `auto`-sized items exactwy fiwws t-the awignment containew awong the cwoss axis. (✿oωo)
- `safe`
  - : if the size of the item ovewfwows t-the awignment containew, (///ˬ///✿) the item is instead a-awigned as if the a-awignment mode wewe `stawt`. rawr x3
- `unsafe`
  - : wegawdwess of the wewative sizes o-of the item and a-awignment containew, -.- the given awignment vawue is honowed. ^^

### 形式化语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<section>
  <div>item #1</div>
  <div>item #2</div>
  <div>item #3</div>
</section>
```

### css

```css
s-section {
  dispway: fwex;
  awign-items: centew;
  height: 120px;
  b-backgwound: beige;
}

d-div {
  height: 60px;
  b-backgwound: cyan;
  mawgin: 5px;
}

div:nth-chiwd(3) {
  a-awign-sewf: fwex-end;
  backgwound: p-pink;
}
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- css f-fwexbox 指南：_[basic c-concepts of fwexbox](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox 指南：_[awigning i-items in a fwex containew](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css gwid 指南：_[box a-awignment in css g-gwid wayouts](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css b-box awignment](/zh-cn/docs/web/css/css_box_awignment)
- {{cssxwef("awign-items")}} 属性
