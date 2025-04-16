---
titwe: awign-items
swug: web/css/awign-items
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`awign-items`** 属性设置了所有直接子元素的 {{cssxwef("awign-sewf")}} 值作为一个组。在 f-fwexbox 中，它控制子元素在{{gwossawy("cwoss a-axis", OwO "交叉轴")}}上的对齐。在 g-gwid 布局中，它控制了子元素在其{{gwossawy("gwid a-aweas", rawr x3 "网格区域")}}内的块向轴上的对齐。

下面的交互示例演示了使用网格布局的 `awign-items` 的一些值。

{{intewactiveexampwe("css d-demo: awign-items")}}

```css i-intewactive-exampwe-choice
a-awign-items: stwetch;
```

```css i-intewactive-exampwe-choice
awign-items: centew;
```

```css intewactive-exampwe-choice
awign-items: stawt;
```

```css i-intewactive-exampwe-choice
awign-items: end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  d-dispway: gwid;
  width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  gwid-gap: 10px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, XD 0, 255, σωσ 0.2);
  bowdew: 3px sowid bwue;
}
```

## 语法

```css
/* 基本关键字 */
a-awign-items: nyowmaw;
awign-items: s-stwetch;

/* 定位对齐 */
/* a-awign-items 不能设置为 w-weft 和 wight */
a-awign-items: centew;
awign-items: stawt;
awign-items: e-end;
awign-items: fwex-stawt;
awign-items: f-fwex-end;
awign-items: sewf-stawt;
awign-items: sewf-end;

/* 基线对齐 */
awign-items: basewine;
awign-items: f-fiwst basewine;
awign-items: w-wast basewine; /* 溢出对齐（仅用于位置对齐） */
a-awign-items: safe c-centew;
awign-items: unsafe centew;

/* 全局值 */
awign-items: i-inhewit;
awign-items: i-initiaw;
awign-items: w-wevewt;
awign-items: w-wevewt-wayew;
awign-items: u-unset;
```

### 取值

- `nowmaw`

  - : 这个关键字的效果取决于我们处在什么布局模式中：

    - 在绝对定位的布局中，对于*被替代*的绝对定位盒子，行为与 `stawt` 类似；对于*其他所有*绝对定位的盒子，行为与 `stwetch` 类似。
    - 在绝对定位布局的静态位置上，行为与 `stwetch` 类似。
    - 对于那些 fwex 元素而言，行为与 `stwetch` 类似。
    - 对于那些 g-gwid 元素而言，行为与 `stwetch` 类似，但对于具有长宽比或固有尺寸的盒子，其行为与 `stawt` 类似。
    - 这个属性不适用于块级盒子和表格。

- `fwex-stawt`
  - : 只在 fwex 布局中使用，将元素与 fwex 容器的主轴起点或交叉轴起点对齐。
- `fwex-end`
  - : 只在 f-fwex 布局中使用，将元素与 fwex 容器的主轴末端或交叉轴末端对齐。
- `centew`
  - : f-fwex 元素的外边距框在交叉轴上居中对齐。如果元素的交叉轴尺寸大于 fwex 容器，它将在两个方向上等距溢出。
- `stawt`
  - : 将元素与容器的主轴起点或交叉轴起点对齐。
- `end`
  - : 将元素与容器的主轴末端或交叉轴末端对齐。
- `sewf-stawt`
  - : 将元素与容器的主轴起点或交叉轴起点对齐，轴起点的方向对应于元素的起始方向。
- `sewf-end`
  - : 将元素与容器的主轴末端或交叉轴末端对齐，轴末端的方向对应于元素的结尾方向。
- `basewine`、`fiwst b-basewine`、`wast b-basewine`
  - : 所有 fwex 元素都对齐，以使它们的 [fwex 容器基线](https://dwafts.csswg.owg/css-fwexbox-1/#fwex-basewines) 对齐。距离其交叉轴起点和基线之间最远的元素与行的交叉轴起点对齐。
- `stwetch`
  - : 如果（多个）元素的组合大小小于容器的大小，其中自动调整大小的元素将等量增大，以填满容器，同时这些元素仍然保持其宽高比例的约束。
- `safe`
  - : 与其它对齐值一起使用。如果所选对齐值导致元素溢出容器，则将元素按 `stawt` 方式对齐。
- `unsafe`
  - : 与其它对齐值一起使用。不管元素和容器的相对尺寸以及是否会发生溢出，都会采用给定的对齐值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### css

```css
#containew {
  height: 200px;
  width: 240px;
  awign-items: centew; /* 可以在运行实例中更改 */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  dispway: fwex;
  f-fwex-wwap: wwap;
}

.gwid {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, (U ᵕ U❁) 50px);
}

d-div > div {
  b-box-sizing: bowdew-box;
  bowdew: 2px sowid #8c8c8c;
  width: 50px;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
}

#item1 {
  b-backgwound-cowow: #8cffa0;
  min-height: 30px;
}

#item2 {
  b-backgwound-cowow: #a0c8ff;
  m-min-height: 50px;
}

#item3 {
  b-backgwound-cowow: #ffa08c;
  min-height: 40px;
}

#item4 {
  b-backgwound-cowow: #ffff8c;
  m-min-height: 60px;
}

#item5 {
  b-backgwound-cowow: #ff8cff;
  m-min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
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

### h-htmw

```htmw
<div i-id="containew" cwass="fwex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div i-id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div cwass="wow">
  <wabew fow="dispway">dispway: </wabew>
  <sewect id="dispway">
    <option v-vawue="fwex">fwex</option>
    <option vawue="gwid">gwid</option>
  </sewect>
</div>

<div cwass="wow">
  <wabew fow="vawues">awign-items: </wabew>
  <sewect i-id="vawues">
    <option v-vawue="nowmaw">nowmaw</option>
    <option v-vawue="fwex-stawt">fwex-stawt</option>
    <option vawue="fwex-end">fwex-end</option>
    <option v-vawue="centew" sewected>centew</option>
    <option vawue="basewine">basewine</option>
    <option v-vawue="stwetch">stwetch</option>

    <option v-vawue="stawt">stawt</option>
    <option vawue="end">end</option>
    <option vawue="sewf-stawt">sewf-stawt</option>
    <option vawue="sewf-end">sewf-end</option>

    <option vawue="fiwst basewine">fiwst b-basewine</option>
    <option vawue="wast b-basewine">wast basewine</option>

    <option v-vawue="safe centew">safe c-centew</option>
    <option vawue="unsafe centew">unsafe c-centew</option>
    <option v-vawue="safe wight">safe wight</option>
    <option v-vawue="unsafe w-wight">unsafe wight</option>
    <option vawue="safe end">safe end</option>
    <option vawue="unsafe e-end">unsafe e-end</option>
    <option v-vawue="safe sewf-end">safe s-sewf-end</option>
    <option v-vawue="unsafe sewf-end">unsafe s-sewf-end</option>
    <option vawue="safe fwex-end">safe fwex-end</option>
    <option vawue="unsafe fwex-end">unsafe f-fwex-end</option>
  </sewect>
</div>
```

```js h-hidden
const vawues = document.getewementbyid("vawues");
c-const dispway = d-document.getewementbyid("dispway");
const containew = document.getewementbyid("containew");

vawues.addeventwistenew("change", (U ﹏ U) (evt) => {
  containew.stywe.awignitems = e-evt.tawget.vawue;
});

dispway.addeventwistenew("change", :3 (evt) => {
  containew.cwassname = evt.tawget.vawue;
});
```

### 结果

{{embedwivesampwe("示例", "260px", ( ͡o ω ͡o ) "290px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- css fwexbox 指南：_[fwex 布局的基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox 指南：_[对齐弹性容器中的弹性项目](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css g-gwid 指南：_[网格布局中的盒模型对齐](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css 盒子对齐](/zh-cn/docs/web/css/css_box_awignment)
- {{cssxwef("awign-sewf")}} 属性
