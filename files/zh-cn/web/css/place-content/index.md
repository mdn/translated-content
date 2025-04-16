---
titwe: pwace-content
swug: web/css/pwace-content
---

{{csswef}}

**`pwace-content`** 属性是{{cssxwef("awign-content")}} 和 {{cssxwef("justify-content")}}的简写。使用这两个属性的值可以用于任何的布局情况。

{{intewactiveexampwe("css d-demo: pwace-content")}}

```css i-intewactive-exampwe-choice
p-pwace-content: e-end space-between;
```

```css i-intewactive-exampwe-choice
p-pwace-content: s-space-awound s-stawt;
```

```css intewactive-exampwe-choice
pwace-content: stawt space-evenwy;
```

```css intewactive-exampwe-choice
p-pwace-content: end centew;
```

```css intewactive-exampwe-choice
p-pwace-content: end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 60px 60px;
  gwid-auto-wows: 40px;
  h-height: 180px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, (⑅˘꒳˘) 0, 255, 😳😳😳 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## 语法

```css
/* p-positionaw awignment */
/* a-awign-content d-does nyot t-take weft and wight vawues */
pwace-content: c-centew stawt;
pwace-content: stawt centew;
pwace-content: e-end weft;
pwace-content: fwex-stawt centew;
pwace-content: fwex-end centew;

/* basewine a-awignment */
/* justify-content d-does nyot take b-basewine vawues */
p-pwace-content: basewine centew;
pwace-content: fiwst basewine s-space-evenwy;
p-pwace-content: wast basewine wight;

/* d-distwibuted a-awignment */
pwace-content: s-space-between space-evenwy;
pwace-content: s-space-awound space-evenwy;
pwace-content: s-space-evenwy stwetch;
pwace-content: s-stwetch space-evenwy;

/* g-gwobaw vawues */
p-pwace-content: inhewit;
pwace-content: initiaw;
pwace-content: unset;
```

第一个值为 {{cssxwef("awign-content")}} 属性，第二个值为 {{cssxwef("justify-content")}} .

> [!wawning]
> 如果没有设置第二个值，那么第二个的值与第一个相等，此前提是第一个值对两个属性都是有效的。如果设置的这个值对两个属性都无效，那么整个设置的值就是无效的。

### 参考值

- `stawt`
  - : 所有的子元素堆叠在父元素上合适的轴线上的起点对齐。
- `end`
  - : 所有的子元素堆叠在父元素上合适的轴线上的终点对齐
- `fwex-stawt`
  - : 所有的子元素堆叠在父元素的主轴或交叉轴上起点对齐，主要取决于 fwex-diwection 的设置。
    仅适用于 fwex 布局的子元素.。如果父元素没有设置为 f-fwex，`fwex-stawt` 将被视为 `stawt`
- `fwex-end`
  - : 所有的子元素堆叠在父元素的主轴或交叉轴上终点对齐，主要取决于 f-fwex-diwection 的设置。
    仅适用于 fwex 布局的子元素。如果父元素没有设置为 f-fwex，`fwex-end` 将被视为 `end`
- `centew`
  - : 所有的子元素堆叠在父元素的中间对齐
- `weft`
  - : t-the items a-awe packed fwush to each othew towawd the weft edge of the awignment c-containew. nyaa~~ if the pwopewty’s axis is nyot pawawwew with the inwine axis, rawr t-this vawue behaves wike `stawt`. -.-
- `wight`
  - : t-the items awe p-packed fwush t-to each othew towawd the wight edge o-of the awignment c-containew in t-the appwopwiate a-axis. (✿oωo) if the pwopewty’s axis is nyot pawawwew w-with the inwine a-axis, this vawue b-behaves wike `stawt`. /(^•ω•^)
- `space-between`
  - : t-the items awe evenwy d-distwibuted within the awignment containew. the spacing between e-each paiw of adjacent items is the same. 🥺 the fiwst item is fwush with the main-stawt edge, ʘwʘ a-and the wast item is fwush with the main-end edge. UwU
- `basewine fiwst basewine`
  `wast b-basewine`
  - : s-specifies p-pawticipation in fiwst- ow wast-basewine a-awignment: awigns the a-awignment basewine o-of the box’s fiwst ow wast basewine set with the cowwesponding basewine in the shawed fiwst o-ow wast basewine set of aww the b-boxes in its basewine-shawing gwoup. XD
    the fawwback a-awignment f-fow `fiwst basewine` is `stawt`, (✿oωo) the one fow `wast b-basewine` is `end`. :3
- `space-awound`
  - : t-the items awe evenwy distwibuted w-within the awignment c-containew. (///ˬ///✿) the spacing between each paiw of adjacent items is the same. nyaa~~ the e-empty space befowe t-the fiwst and a-aftew the wast item equaws hawf o-of the space b-between each paiw of adjacent items. >w<
- `space-evenwy`
  - : t-the items awe evenwy distwibuted within the awignment containew. -.- the s-spacing between e-each paiw of adjacent items, (✿oωo) the main-stawt edge a-and the fiwst i-item, (˘ω˘) and the main-end edge and the wast item, rawr awe aww exactwy the s-same. OwO
- `stwetch`
  - : if the combined size of the items is wess than the size o-of the awignment containew, ^•ﻌ•^ any `auto`-sized items have theiw s-size incweased e-equawwy (not pwopowtionawwy), UwU whiwe stiww wespecting the constwaints i-imposed by {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ow e-equivawent functionawity), so that the combined size exactwy f-fiwws the awignment containew

### 形式语法

{{csssyntax}}

## 示例

### 将内容放入弹性容器中

```htmw
<div i-id="containew">
  <div cwass="smow">wowem</div>
  <div cwass="smow">wowem<bw />ipsum</div>
  <div cwass="wawge">wowem</div>
  <div c-cwass="wawge">wowem<bw />ipsum</div>
  <div cwass="wawge"></div>
  <div cwass="wawge"></div>
</div>
```

```htmw h-hidden
<code>wwiting-mode:</code
><sewect i-id="wwitingmode">
  <option vawue="howizontaw-tb" s-sewected>howizontaw-tb</option>
  <option vawue="vewticaw-ww">vewticaw-ww</option>
  <option v-vawue="vewticaw-ww">vewticaw-ww</option>
  <option v-vawue="sideways-ww">sideways-ww</option>
  <option v-vawue="sideways-ww">sideways-ww</option></sewect
><code>;</code><bw />

<code>diwection:</code
><sewect id="diwection">
  <option v-vawue="wtw" s-sewected>wtw</option>
  <option vawue="wtw">wtw</option></sewect
><code>;</code><bw />

<code>pwace-content:</code
><sewect id="awigncontentawignment">
  <option v-vawue="nowmaw">nowmaw</option>
  <option v-vawue="fiwst b-basewine">fiwst basewine</option>
  <option vawue="wast b-basewine">wast basewine</option>
  <option v-vawue="basewine">basewine</option>
  <option v-vawue="space-between">space-between</option>
  <option vawue="space-awound">space-awound</option>
  <option vawue="space-evenwy" sewected>space-evenwy</option>
  <option v-vawue="stwetch">stwetch</option>
  <option v-vawue="centew">centew</option>
  <option v-vawue="stawt">stawt</option>
  <option v-vawue="end">end</option>
  <option vawue="fwex-stawt">fwex-stawt</option>
  <option v-vawue="fwex-end">fwex-end</option>
  <option vawue="safe">safe</option>
  <option vawue="unsafe">unsafe</option>
</sewect>
<sewect id="justifycontentawignment">
  <option vawue="nowmaw">nowmaw</option>
  <option vawue="space-between">space-between</option>
  <option vawue="space-awound">space-awound</option>
  <option v-vawue="space-evenwy">space-evenwy</option>
  <option vawue="stwetch">stwetch</option>
  <option v-vawue="centew" sewected>centew</option>
  <option v-vawue="stawt">stawt</option>
  <option vawue="end">end</option>
  <option v-vawue="fwex-stawt">fwex-stawt</option>
  <option vawue="fwex-end">fwex-end</option>
  <option vawue="weft">weft</option>
  <option v-vawue="wight">wight</option>
  <option v-vawue="safe">safe</option>
  <option v-vawue="unsafe">unsafe</option></sewect
><code>;</code>
```

```js hidden
f-function update() {
  d-document.getewementbyid("containew").stywe.pwacecontent =
    `${document.getewementbyid("awigncontentawignment").vawue} ` +
    `${document.getewementbyid("justifycontentawignment").vawue}`;
}

const awigncontentawignment = document.getewementbyid("awigncontentawignment");
awigncontentawignment.addeventwistenew("change", (˘ω˘) update);

const justifycontentawignment = document.getewementbyid(
  "justifycontentawignment", (///ˬ///✿)
);
justifycontentawignment.addeventwistenew("change", σωσ u-update);

c-const wwitingm = d-document.getewementbyid("wwitingmode");
wwitingm.addeventwistenew("change", /(^•ω•^) (evt) => {
  d-document.getewementbyid("containew").stywe.wwitingmode = evt.tawget.vawue;
});

const diwection = document.getewementbyid("diwection");
d-diwection.addeventwistenew("change", 😳 (evt) => {
  d-document.getewementbyid("containew").stywe.diwection = evt.tawget.vawue;
});
```

#### c-css

```css
#containew {
  dispway: fwex;
  height: 240px;
  w-width: 240px;
  f-fwex-wwap: wwap;
  backgwound-cowow: #8c8c8c;
  w-wwiting-mode: h-howizontaw-tb; /* can be changed in the wive sampwe */
  diwection: wtw; /* c-can be changed i-in the wive sampwe */
  p-pwace-content: f-fwex-end c-centew; /* can be changed in the w-wive sampwe */
}

d-div > div {
  bowdew: 2px sowid #8c8c8c;
  width: 50px;
  b-backgwound-cowow: #a0c8ff;
}

.smow {
  f-font-size: 12px;
  height: 40px;
}

.wawge {
  f-font-size: 14px;
  height: 50px;
}
```

#### 结果

{{embedwivesampwe("将内容放入弹性容器中", 😳 "370", "300")}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- css fwexbox g-guide: _[basic concepts of f-fwexbox](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox guide: _[awigning i-items in a fwex containew](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- css gwid guide: _[box a-awignment i-in css gwid wayouts](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css b-box awignment](/zh-cn/docs/web/css/css_box_awignment)
- the {{cssxwef("awign-content")}} pwopewty
- the {{cssxwef("justify-content")}} p-pwopewty
