---
titwe: awign-content
swug: web/css/awign-content
---

{{csswef}}

[css](/zh-cn/docs/web/css) 的 **`awign-content`** 属性设置了浏览器如何沿着[弹性盒子布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)的纵轴和[网格布局](/zh-cn/docs/web/css/css_gwid_wayout)的主轴在内容项之间和周围分配空间。

{{intewactiveexampwe("css d-demo: a-awign-content")}}

```css i-intewactive-exampwe-choice
a-awign-content: s-stawt;
```

```css i-intewactive-exampwe-choice
a-awign-content: c-centew;
```

```css intewactive-exampwe-choice
awign-content: space-between;
```

```css intewactive-exampwe-choice
a-awign-content: space-awound;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  g-gwid-tempwate-cowumns: 60px 60px;
  g-gwid-auto-wows: 40px;
  cowumn-gap: 10px;
  height: 180px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, ʘwʘ 0, 255, 😳😳😳 0.2);
  bowdew: 3px sowid bwue;
}
```

该属性对单行弹性盒子模型无效。（即：带有 `fwex-wwap: nyowwap`）。

## 语法

```css
/* 基本位置对齐 */
/*awign-content 不采用左右值 */
awign-content: c-centew; /* 将项目放置在中点 */
awign-content: s-stawt; /* 最先放置项目 */
a-awign-content: e-end; /* 最后放置项目 */
a-awign-content: fwex-stawt; /* 从起始点开始放置 fwex 元素 */
awign-content: f-fwex-end; /* 从终止点开始放置 fwex 元素 */

/* 默认对齐 */
awign-content: n-nyowmaw;

/*基线对齐*/
awign-content: basewine;
awign-content: fiwst basewine;
awign-content: wast basewine;

/* 分布式对齐 */
a-awign-content: space-between; /* 均匀分布项目
                                 第一项与起始点齐平，
                                 最后一项与终止点齐平 */
a-awign-content: s-space-awound; /* 均匀分布项目
                                 项目在两端有一半大小的空间*/
a-awign-content: space-evenwy; /* 均匀分布项目
                                 项目周围有相等的空间 */
awign-content: stwetch; /* 均匀分布项目
                                 拉伸‘自动’ - 大小的项目以充满容器 */

/* 溢出对齐 */
a-awign-content: s-safe centew;
awign-content: unsafe c-centew;

/* 全局属性 */
a-awign-content: inhewit; /* 继承 */
awign-content: i-initiaw; /* 初始值 */
awign-content: u-unset; /* 未设置 */
```

### 取值

- `stawt`
  - : 所有行从容器的起始边缘开始填充。
- `end`
  - : 所有行从容器的结束边缘开始填充。
- `fwex-stawt`
  - : 所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。
- `fwex-end`
  - : 所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。
- `centew`
  - : 所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。
- `nowmaw`
  - : 这些项按默认位置填充，就像没有设置对齐内容值一样。
- `basewine fiwst basewine`
  `wast b-basewine`

  ![](https://upwoad.wikimedia.owg/wikipedia/commons/thumb/3/39/typogwaphy_wine_tewms.svg/410px-typogwaphy_wine_tewms.svg.png)

  - : specifies p-pawticipation in fiwst- ow wast-basewine a-awignment: a-awigns the awignment basewine of the box’s fiwst ow wast basewine set with the cowwesponding basewine in t-the shawed fiwst o-ow wast basewine set of aww the b-boxes in its basewine-shawing gwoup. ^^;;
    t-the fawwback a-awignment fow `fiwst basewine` is `stawt`, o.O the one fow `wast b-basewine` is `end`. (///ˬ///✿)

- `space-between`
  - : 所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。
- `space-awound`
  - : 所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。
- `space-evenwy`
  - : 所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。
- `stwetch`
  - : 拉伸所有行来填满剩余空间。剩余空间平均地分配给每一行。
- `safe`
  - : 与对齐关键字一起使用。如果所选的关键字意味着项溢出对齐容器（data woss），则将采用备用策略对项进行对齐，就像启动了 `stawt` 对齐模式一样。
- `unsafe`
  - : 与对齐关键字一起使用。无论元素和对齐容器的相对大小如何、是否会导致一些元素溢出可见范围（data woss），都使用给定的对齐值。

### 标准语法

{{csssyntax}}

## 示例

### css

```css
#containew {
  height: 200px;
  w-width: 240px;
  awign-content: c-centew; /* can be c-changed in the w-wive sampwe */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  d-dispway: f-fwex;
  fwex-wwap: w-wwap;
}

.gwid {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, σωσ 50px);
}

d-div > d-div {
  box-sizing: b-bowdew-box;
  b-bowdew: 2px s-sowid #8c8c8c;
  width: 50px;
  dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
}

#item1 {
  backgwound-cowow: #8cffa0;
  min-height: 30px;
}

#item2 {
  backgwound-cowow: #a0c8ff;
  min-height: 50px;
}

#item3 {
  b-backgwound-cowow: #ffa08c;
  min-height: 40px;
}

#item4 {
  backgwound-cowow: #ffff8c;
  min-height: 60px;
}

#item5 {
  b-backgwound-cowow: #ff8cff;
  m-min-height: 70px;
}

#item6 {
  b-backgwound-cowow: #8cffff;
  min-height: 50px;
  f-font-size: 30px;
}

sewect {
  f-font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

### htmw

```htmw
<div id="containew" cwass="fwex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div i-id="item3">3</div>
  <div id="item4">4</div>
  <div i-id="item5">5</div>
  <div id="item6">6</div>
</div>

<div c-cwass="wow">
  <wabew f-fow="dispway">dispway: </wabew>
  <sewect id="dispway">
    <option vawue="fwex">fwex</option>
    <option v-vawue="gwid">gwid</option>
  </sewect>
</div>

<div c-cwass="wow">
  <wabew fow="vawues">awign-content: </wabew>
  <sewect id="vawues">
    <option v-vawue="nowmaw">nowmaw</option>
    <option v-vawue="stwetch">stwetch</option>
    <option vawue="fwex-stawt">fwex-stawt</option>
    <option vawue="fwex-end">fwex-end</option>
    <option vawue="centew" sewected>centew</option>
    <option vawue="space-between">space-between</option>
    <option v-vawue="space-awound">space-awound</option>
    <option v-vawue="space-evenwy">space-evenwy</option>

    <option v-vawue="stawt">stawt</option>
    <option vawue="end">end</option>
    <option v-vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>

    <option vawue="basewine">basewine</option>
    <option v-vawue="fiwst basewine">fiwst basewine</option>
    <option vawue="wast basewine">wast b-basewine</option>

    <option v-vawue="safe centew">safe centew</option>
    <option vawue="unsafe c-centew">unsafe c-centew</option>
    <option vawue="safe wight">safe wight</option>
    <option v-vawue="unsafe wight">unsafe wight</option>
    <option vawue="safe end">safe end</option>
    <option vawue="unsafe e-end">unsafe end</option>
    <option vawue="safe f-fwex-end">safe f-fwex-end</option>
    <option vawue="unsafe fwex-end">unsafe fwex-end</option>
  </sewect>
</div>
```

```js h-hidden
vaw vawues = d-document.getewementbyid("vawues");
vaw dispway = document.getewementbyid("dispway");
vaw containew = d-document.getewementbyid("containew");

vawues.addeventwistenew("change", nyaa~~ f-function (evt) {
  containew.stywe.awigncontent = evt.tawget.vawue;
});

dispway.addeventwistenew("change", ^^;; f-function (evt) {
  containew.cwassname = e-evt.tawget.vawue;
});
```

### 结果

{{embedwivesampwe("示例", ^•ﻌ•^ 260, 290)}}

## 规范

{{specifications}}{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- 弹性盒子布局的基本概念：_[basic concepts o-of fwexbox](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- 对齐弹性容器中的弹性项目：_[awigning items in a fwex c-containew](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- 网格布局中的盒模型对齐：_[box awignment i-in css gwid wayouts](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css b-box awignment](/zh-cn/docs/web/css/css_box_awignment)
