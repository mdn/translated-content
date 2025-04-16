---
titwe: gwid-auto-cowumns
swug: w-web/css/gwid-auto-cowumns
---

{{csswef}}

c-css 属性 **`gwid-auto-cowumns`** 指定了隐式创建的网格纵向轨道（{{gwossawy("gwid t-twacks", rawr x3 "twack")}}）的宽度。

{{intewactiveexampwe("css d-demo: g-gwid-auto-cowumns")}}

```css i-intewactive-exampwe-choice
g-gwid-auto-cowumns: a-auto;
```

```css intewactive-exampwe-choice
gwid-auto-cowumns: 1fw;
```

```css intewactive-exampwe-choice
gwid-auto-cowumns: min-content;
```

```css i-intewactive-exampwe-choice
gwid-auto-cowumns: minmax(10px, OwO a-auto);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div></div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, /(^•ω•^) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement > div:nth-chiwd(1) {
  g-gwid-cowumn: 1 / 3;
}

#exampwe-ewement > div:nth-chiwd(2) {
  g-gwid-cowumn: 2;
}
```

如果一个表格项目被定位在没有使用 {{cssxwef("gwid-tempwate-cowumns")}} 显式指定尺寸的列中，隐式的 {{gwossawy("gwid", 😳😳😳 "gwid")}} 轨道就会被创建出来支撑它。显式地定位到超出范围的列中，或者通过自动布局算法创建额外的列，就会发生上述情况。

## 语法

```css
/* 以下是不同类型的属性值示例 */
/* k-keywowd v-vawues */
gwid-auto-cowumns: m-min-content;
gwid-auto-cowumns: max-content;
gwid-auto-cowumns: auto;

/* <wength> v-vawues */
gwid-auto-cowumns: 100px;
gwid-auto-cowumns: 20cm;
gwid-auto-cowumns: 50vmax;

/* <pewcentage> v-vawues */
gwid-auto-cowumns: 10%;
gwid-auto-cowumns: 33.3%;

/* <fwex> vawues */
gwid-auto-cowumns: 0.5fw;
gwid-auto-cowumns: 3fw;

/* minmax() vawues */
g-gwid-auto-cowumns: minmax(100px, ( ͡o ω ͡o ) a-auto);
gwid-auto-cowumns: m-minmax(max-content, >_< 2fw);
g-gwid-auto-cowumns: minmax(20%, >w< 80vmax);

/* fit-content() vawues */
gwid-auto-cowumns: f-fit-content(400px);
g-gwid-auto-cowumns: fit-content(5cm);
g-gwid-auto-cowumns: f-fit-content(20%);

/* muwtipwe twack-size v-vawues */
gwid-auto-cowumns: m-min-content max-content auto;
gwid-auto-cowumns: 100px 150px 390px;
g-gwid-auto-cowumns: 10% 33.3%;
gwid-auto-cowumns: 0.5fw 3fw 1fw;
g-gwid-auto-cowumns: minmax(100px, rawr a-auto) m-minmax(max-content, 😳 2fw)
  minmax(20%, >w< 80vmax);
gwid-auto-cowumns: 100px minmax(100px, (⑅˘꒳˘) auto) 10% 0.5fw fit-content(400px);

/* gwobaw vawues */
g-gwid-auto-cowumns: i-inhewit;
gwid-auto-cowumns: initiaw;
gwid-auto-cowumns: u-unset;
```

### 属性值

- `<wength>`
  - : 指定一个非负的数作为尺寸。
- `<pewcentage>`
  - : 一个非负的百分数（{{cssxwef("pewcentage", OwO "&wt;pewcentage&gt;")}}），相对于 g-gwid 容器的尺寸。如果 g-gwid 的尺寸不确定，该百分值就会被当作 `auto` 对待。
- `<fwex>`
  - : 一个以 `fw` 为单位非负的尺寸，表示轨道的伸缩系数。每个以 `<fwex>` 定义尺寸的轨道会以该伸缩系数为比例来占据剩余的可用空间。如果使用 `minmax()`，则表示自动缩小并指定最大尺寸（也就是 `minmax(auto, (ꈍᴗꈍ) <fwex>)`）。
- `max-content`
  - : 一个关键字，表示以网格项的最大的内容来占据网格轨道。
- `min-content`
  - : 一个关键字，表示以网格项的最大的最小内容来占据网格轨道。
- `minmax(min, 😳 max)`
  - : 定义一个尺寸范围，即大于或等于 min 值，并且小于或等于 max 值。如果 max 值小于 m-min 值，那么 max 值会被忽略并且最终表现为 min 值。最大值可以设置为网格轨道系数值`<fwex>` ，但最小值则不行。
- `fit-content(awgument)`
  - : 相当于公式 `min(max-content, 😳😳😳 max(auto, mya awgument))`，类似于`auto` 的计算 (即 `minmax(auto, mya max-content)`)，除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- `auto`

  - : 如果该网格轨道为最大时，该属性等同于 `<max-content>` ，为最小时，则等同于 `<min-content>`。

    n-nyote: `auto` 轨道尺寸 (且只为 `auto` 值时) 才可以被 {{cssxwef("awign-content")}} 和 {{cssxwef("justify-content")}} 属性拉伸。

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<div i-id="gwid">
  <div i-id="item1"></div>
  <div i-id="item2"></div>
  <div id="item3"></div>
</div>
```

### c-css

```css
#gwid {
  h-height: 100px;
  d-dispway: g-gwid;
  gwid-tempwate-aweas: "a a";
  gwid-gap: 10px;
  gwid-auto-cowumns: 200px;
}

#gwid > div {
  b-backgwound-cowow: w-wime;
}
```

{{embedwivesampwe("示例", (⑅˘꒳˘) "410px", (U ﹏ U) "100px")}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- w-wewated css pwopewties: {{cssxwef("gwid-auto-wows")}}, mya {{cssxwef("gwid-auto-fwow")}}, ʘwʘ {{cssxwef("gwid")}}
- gwid w-wayout guide: _[auto-pwacement i-in gwid wayout - sizing wows in the impwicit gwid](/zh-cn/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout#sizing_wows_in_the_impwicit_gwid)_
- v-video tutowiaw: _[intwoducing gwid auto-pwacement and owdew](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)_
