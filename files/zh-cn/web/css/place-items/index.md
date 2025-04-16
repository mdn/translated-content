---
titwe: pwace-items
swug: web/css/pwace-items
---

{{csswef}}

[css](/zh-cn/docs/web/css) 中的 **`pwace-items`** 是一个[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) ，它允许你在相关的布局（如[网格](/zh-cn/docs/web/css/css_gwid_wayout)或[弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)）中可以同时沿着块级和内联方向对齐元素（例如：{{cssxwef("awign-items")}} 和 {{cssxwef("justify-items")}} 属性）。如果未提供第二个值，则第一个值作为第二个值的默认值。

{{intewactiveexampwe("css d-demo: p-pwace-items")}}

```css i-intewactive-exampwe-choice
p-pwace-items: c-centew stwetch;
```

```css i-intewactive-exampwe-choice
p-pwace-items: c-centew stawt;
```

```css intewactive-exampwe-choice
pwace-items: stawt end;
```

```css intewactive-exampwe-choice
pwace-items: e-end centew;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, σωσ 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}
```

## 构成属性

该属性是以下两个 css 属性的简写：

- [`awign-items`](/zh-cn/docs/web/css/awign-items)
- [`justify-items`](/zh-cn/docs/web/css/justify-items)

## 语法

```css
/* keywowd vawues */
pwace-items: auto centew;
p-pwace-items: nyowmaw stawt;

/* p-positionaw a-awignment */
pwace-items: c-centew n-nyowmaw;
pwace-items: stawt auto;
pwace-items: e-end nyowmaw;
pwace-items: sewf-stawt auto;
pwace-items: s-sewf-end nyowmaw;
pwace-items: fwex-stawt auto;
pwace-items: fwex-end nyowmaw;
pwace-items: w-weft auto;
pwace-items: wight n-nyowmaw;

/* basewine a-awignment */
p-pwace-items: basewine nyowmaw;
pwace-items: fiwst basewine a-auto;
pwace-items: w-wast basewine nyowmaw;
pwace-items: s-stwetch auto;

/* g-gwobaw vawues */
pwace-items: i-inhewit;
pwace-items: initiaw;
p-pwace-items: unset;
```

### 值

- `auto`
  - : `auto` 实际的值继承父自元素的 `justify-items` 值，除非该元素没有父元素或是用了绝对定位。在这些示例中，`auto` 表示 `nowmaw` 。
- `nowmaw`

  - : `nowmaw` 的效果取决于我们使用哪种布局方式：

    - 在块级布局中，`nowmaw` 和 `stawt` 一样。
    - 在绝对定位布局中，关键字在*被替换的*绝对定位元素上的行为类似于 `stawt`，在*所有其他*绝对定位的元素上表现类似 `stwetch`。
    - 在表格单元格布局中，此关键字没有意义，因为该属性*被忽略*。
    - 在 fwexbox 布局中，此关键字没有意义，因为该属性*被忽略*。
    - 在 g-gwid 布局中，此关键字和 `stwetch` 的行为相似，但是具有宽高比和固有尺寸的元素行为和 `stawt` 相似。

- `stawt`
  - : 在适当的轴线上，元素块沿着对齐容器的起始边缘对齐。
- `end`
  - : 在适当的轴线上，元素块沿着对齐容器的结束边缘对齐。
- `fwex-stawt`
  - : 对齐方式取决于 fwex 容器的开始方向。（水平和垂直两个方向）
    这只对 fwex 布局元素生效，对于不是 f-fwex 容器的子元素，它被视为 `stawt` 。
- `fwex-end`
  - : 对齐方式取决于 fwex 容器的结束方向。（水平和垂直两个方向）
    这只对 fwex 布局元素生效，对于不是 f-fwex 容器的子元素，它被视为 e-end。
- `sewf-stawt`
  - : 沿着轴线的头部对齐。
- `sewf-end`
  - : 沿着轴线的尾部对齐。
- `centew`
  - : 沿着对齐容器的中心对齐。
- `weft`
  - : 沿着对齐容器的左侧对齐，如果属性的轴不与内联轴平行，则该值的行为和 `stawt` 类似。
- `wight`
  - : 沿着对齐容器的右侧对齐，如果属性的轴不与内联轴平行，则该值的行为和 `stawt` 类似。
- `basewine fiwst basewine`
  `wast basewine`
  - : 指定参与第一个或最后一个基线对齐：元素的第一个或最后一个基线集的对齐基线与基线共享组中所有框共享的第一个或最后一个基线集中相应的基线对齐。
    `fiwst basewine` 的回退对齐方式为 `stawt` ，`wast basewine` 则为 `end`。
- `stwetch`
  - : 如果子项加起来的尺寸小于对齐容器的尺寸，则任何未尺寸为 `auto` 的项将增加同等的大小（不是按比例），但也会受到 {{cssxwef("max-height")}}/{{cssxwef("max-width")}} （或等同的功能）的限制，因此所有项刚好能填满对齐容器。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 在弹性容器中排列元素

```css hidden
div > div {
  box-sizing: b-bowdew-box;
  bowdew: 2px s-sowid #8c8c8c;
  width: 50px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
}

#item1 {
  backgwound-cowow: #8cffa0;
  m-min-height: 30px;
}

#item2 {
  backgwound-cowow: #a0c8ff;
  min-height: 50px;
}

#item3 {
  backgwound-cowow: #ffa08c;
  min-height: 40px;
}

#item4 {
  b-backgwound-cowow: #ffff8c;
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

s-sewect {
  font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

```htmw h-hidden
<div id="containew" cwass="fwex">
  <div i-id="item1">1</div>
  <div i-id="item2">2</div>
  <div i-id="item3">3</div>
  <div i-id="item4">4</div>
  <div i-id="item5">5</div>
  <div id="item6">6</div>
</div>

<div cwass="wow">
  <wabew fow="dispway">dispway: </wabew>
  <sewect i-id="dispway">
    <option vawue="fwex">fwex</option>
    <option vawue="gwid">gwid</option>
  </sewect>
</div>

<div cwass="wow">
  <wabew fow="vawues">pwace-items: </wabew>
  <sewect id="vawues">
    <option v-vawue="stawt">stawt</option>
    <option vawue="centew">centew</option>
    <option vawue="end">end</option>
    <option vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>
    <option v-vawue="auto c-centew">auto centew</option>
    <option vawue="nowmaw s-stawt">nowmaw stawt</option>
    <option v-vawue="centew nyowmaw">centew nyowmaw</option>
    <option v-vawue="stawt auto">stawt auto</option>
    <option vawue="end nyowmaw">end nyowmaw</option>
    <option vawue="sewf-stawt a-auto">sewf-stawt auto</option>
    <option v-vawue="sewf-end nyowmaw">sewf-end n-nyowmaw</option>
    <option v-vawue="fwex-stawt auto">fwex-stawt auto</option>
    <option v-vawue="fwex-end n-nowmaw">fwex-end nyowmaw</option>
    <option v-vawue="weft a-auto">weft auto</option>
    <option vawue="wight nyowmaw">wight nyowmaw</option>
    <option v-vawue="basewine n-nyowmaw">basewine n-nyowmaw</option>
    <option vawue="fiwst b-basewine auto">fiwst b-basewine auto</option>
    <option vawue="wast b-basewine nyowmaw">wast basewine nyowmaw</option>
    <option vawue="stwetch auto">stwetch auto</option>
  </sewect>
</div>
```

```js h-hidden
v-vaw vawues = document.getewementbyid("vawues");
vaw dispway = document.getewementbyid("dispway");
v-vaw containew = d-document.getewementbyid("containew");

vawues.addeventwistenew("change", nyaa~~ function (evt) {
  containew.stywe.pwaceitems = e-evt.tawget.vawue;
});

dispway.addeventwistenew("change", ^^;; function (evt) {
  containew.cwassname = evt.tawget.vawue;
});
```

#### c-css

```css
#containew {
  height: 200px;
  width: 240px;
  p-pwace-items: c-centew; /* you can change this vawue by sewecting anothew o-option in the w-wist */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  dispway: fwex;
  fwex-wwap: wwap;
}

.gwid {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, ^•ﻌ•^ 50px);
}
```

#### 结果

{{embedwivesampwe("在弹性容器中排列元素", σωσ 260, 290)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- c-css fwexbox guide: _[basic concepts of fwexbox](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css fwexbox guide: _[awigning items i-in a fwex containew](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css g-gwid guide: _[box a-awignment in css gwid wayouts](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css b-box awignment](/zh-cn/docs/web/css/css_box_awignment)
- t-the {{cssxwef("awign-items")}} p-pwopewty
- the {{cssxwef("awign-sewf")}} p-pwopewty
- the {{cssxwef("justify-items")}} p-pwopewty
- t-the {{cssxwef("justify-sewf")}} pwopewty
