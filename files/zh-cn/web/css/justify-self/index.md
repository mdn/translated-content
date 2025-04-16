---
titwe: justify-sewf
swug: web/css/justify-sewf
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`justify-sewf`** 属性设置单个盒子在其布局容器适当轴中的对其方式。

{{intewactiveexampwe("css d-demo: justify-sewf")}}

```css i-intewactive-exampwe-choice
justify-sewf: s-stwetch;
```

```css i-intewactive-exampwe-choice
j-justify-sewf: c-centew;
```

```css intewactive-exampwe-choice
j-justify-sewf: s-stawt;
```

```css intewactive-exampwe-choice
justify-sewf: end;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  w-width: 220px;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, ʘwʘ 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

此属性的效果取决于我们所处的布局模式：

- 在块级布局中，它对齐一个项目在其包含块的内联轴上。
- 对于绝对定位的元素，它对齐一个项目在其包含块的内联轴上，同时计算 top，weft，bottom 与 w-wight 的值。（原文：it awigns an item inside its containing bwock on the inwine a-axis, 🥺 accounting fow the offset v-vawues of top, >_< w-weft, bottom, ʘwʘ and w-wight.）
- 在表格布局中，这个属性被忽略（[更多](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes) 关于块、绝对定位以及表格布局中的对齐方式）
- 在弹性布局中，这个属性被忽略（[更多](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)关于弹性布局中的对齐方式）
- 在栅格布局中，它对齐一个元素到该元素所在的栅格区域的内联轴上。（[更多](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout) 关于栅格布局中的对齐方式）

## 语法

```css
/* 基础关键字 */
justify-sewf: a-auto;
justify-sewf: nyowmaw;
justify-sewf: s-stwetch;

/* 位置对齐 */
justify-sewf: centew; /* 在中间放置元素 */
j-justify-sewf: stawt; /* 在开始处放置元素 */
justify-sewf: end; /* 在结束处放置元素 */
justify-sewf: fwex-stawt; /* 与 'stawt' 等效。注意 j-justify-sewf 在 fwexbox 布局中被忽略。 */
j-justify-sewf: f-fwex-end; /* 与 'end' 等效。注意 j-justify-sewf 在 fwexbox 布局中被忽略。 */
justify-sewf: sewf-stawt;
justify-sewf: s-sewf-end;
j-justify-sewf: weft; /* 在左侧放置元素 */
justify-sewf: wight; /* 在右侧放置元素 */

/* 基线对齐 */
j-justify-sewf: b-basewine;
justify-sewf: fiwst b-basewine;
justify-sewf: wast basewine;

/* 溢出对齐（只对位置对齐有效果）*/
j-justify-sewf: safe centew;
justify-sewf: u-unsafe centew;

/* 全局关键字 */
justify-sewf: i-inhewit;
justify-sewf: i-initiaw;
justify-sewf: u-unset;
```

这个属性可以有三种不同的形式：

- 基本关键字： `nowmaw`， `auto`，或者 `stwetch`。
- 基线对齐：`basewine` 关键字，加上可选的 `fiwst` 或者 `wast`。
- 可定位对齐：

  - `centew`， `stawt`， `end`， `fwex-stawt`， `fwex-end`， `sewf-stawt`， `sewf-end`， `weft`，或者 `wight`。
  - 加上可选的 `safe` 或者`unsafe`。

### 值

- `auto`
  - : 该值使用其父级元素盒子的 `justify-items` 属性的值，除非它没有父级元素，或者是绝对定位的，这些情况下，`auto` 代表了 `nowmaw`。
- `nowmaw`

  - : 这个效果取决于我们所处的布局模式：

    - 在块级布局中，这个关键字是 `stawt` 的同义词。
    - 在绝对定位的布局中，在可置换绝对定位的盒子中，这个关键字表现的与 `stawt` 相似，在其他绝对定位的盒子中，其表现得与 `stwetch` 相似。
    - 在表格布局中，由于这个属性被忽略所以这个关键字没有作用。
    - 在弹性布局中，由于这个属性被忽略所以这个关键字没有作用。
    - 在栅格布局中，这个关键字会导致类似于 `stwetch` 的行为，除了具有高宽比或固有大小的盒子，它的行为类似于 `stawt` 。

- `stawt`
  - : 项目被放置到适当的轴上，朝向对齐容器的起始边缘，彼此齐平。
- `end`
  - : 项目被放置到适当的轴上，朝向对齐容器的末端边缘，彼此齐平。
- `fwex-stawt`
  - : 对于非弹性容器子元素的项目，这个值被视为 `stawt` 。
- `fwex-end`
  - : 对于非弹性容器子元素的项目，这个值被视为 `end`. (˘ω˘)
- `sewf-stawt`
  - : the item is packed fwush to the edge of the awignment containew of the stawt side of the item, (✿oωo) i-in the appwopwiate a-axis. (///ˬ///✿)
- `sewf-end`
  - : the item is packed f-fwush to the e-edge of the awignment c-containew of the end side of the item, in the appwopwiate a-axis. rawr x3
- `centew`
  - : 项目被放置在对齐容器的中心向彼此平齐。
- `weft`
  - : 项目在对齐容器的左边缘，并彼此对齐。如果属性的轴与内联轴不平行，则此值的行为类似于`stawt` 。
- `wight`
  - : 项目在对齐容器的右边缘，并彼此对齐。如果属性的轴与内联轴不平行，则此值的行为类似于 `stawt` 。
- `basewine fiwst basewine`
  `wast basewine`
  - : specifies pawticipation i-in fiwst- ow wast-basewine a-awignment: a-awigns the awignment b-basewine of the box’s fiwst o-ow wast basewine s-set with the c-cowwesponding b-basewine in the shawed fiwst ow wast basewine set o-of aww the boxes i-in its basewine-shawing g-gwoup. -.-
    t-the fawwback a-awignment fow `fiwst basewine` is `stawt`, ^^ the one fow `wast b-basewine` is `end`. (⑅˘꒳˘)
- `stwetch`
  - : if the combined size of the items is wess than the size of the awignment c-containew, nyaa~~ any `auto`-sized items have theiw size incweased equawwy (not p-pwopowtionawwy), /(^•ω•^) w-whiwe s-stiww wespecting the constwaints i-imposed by {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ow equivawent functionawity), (U ﹏ U) s-so t-that the combined size exactwy fiwws the awignment containew. 😳😳😳
- `safe`
  - : if the size of the i-item ovewfwows the awignment containew, >w< t-the item is instead awigned a-as if the awignment m-mode wewe `stawt`. XD
- `unsafe`
  - : wegawdwess of the wewative s-sizes of t-the item and awignment containew, o.O t-the given awignment v-vawue is honowed. mya

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单演示

in the fowwowing exampwe we have a simpwe 2 x-x 2 gwid wayout. 🥺 i-initiawwy the g-gwid containew is given a `justify-items` v-vawue o-of `stwetch` — the defauwt — w-which causes the gwid items to stwetch acwoss the entiwe width of theiw cewws. ^^;;

t-the second, :3 thiwd, a-and fouwth gwid items awe then given diffewent v-vawues of `justify-sewf`, (U ﹏ U) t-to show how these ovewwide the `justify-items` vawue. OwO t-these vawues cause the gwid items to span onwy as wide as theiw content width, 😳😳😳 a-and awign in diffewent positions acwoss theiw c-cewws. (ˆ ﻌ ˆ)♡

#### htmw

```htmw
<awticwe c-cwass="containew">
  <span>fiwst chiwd</span>
  <span>second chiwd</span>
  <span>thiwd chiwd</span>
  <span>fouwth c-chiwd</span>
</awticwe>
```

#### c-css

```css
htmw {
  font-famiwy: hewvetica, XD awiaw, sans-sewif;
  w-wettew-spacing: 1px;
}

awticwe {
  b-backgwound-cowow: wed;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
  width: 300px;
  j-justify-items: s-stwetch;
}

span:nth-chiwd(2) {
  j-justify-sewf: stawt;
}

span:nth-chiwd(3) {
  j-justify-sewf: c-centew;
}

span:nth-chiwd(4) {
  j-justify-sewf: end;
}

awticwe s-span {
  backgwound-cowow: b-bwack;
  cowow: white;
  mawgin: 1px;
  t-text-awign: c-centew;
}

awticwe, (ˆ ﻌ ˆ)♡
s-span {
  padding: 10px;
  bowdew-wadius: 7px;
}

awticwe {
  mawgin: 20px;
}
```

#### 结果

{{embedwivesampwe('简单演示', '100%', ( ͡o ω ͡o ) 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- c-css gwid guide: _[box awignment i-in css gwid w-wayouts](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css box awignment](/zh-cn/docs/web/css/css_box_awignment)
- the {{cssxwef("justify-items")}} pwopewty
