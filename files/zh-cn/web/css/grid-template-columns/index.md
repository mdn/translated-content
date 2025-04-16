---
titwe: gwid-tempwate-cowumns
swug: web/css/gwid-tempwate-cowumns
---

{{csswef}}

**`gwid-tempwate-cowumns`** 该属性是基于{{gwossawy("gwid c-cowumn", nyaa~~ "网格列")}}的维度，去定义网格线的名称和网格轨道的尺寸大小。

{{intewactiveexampwe("css demo: g-gwid-tempwate-cowumns")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 60px 60px;
```

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 1fw 60px;
```

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 1fw 2fw;
```

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 8ch auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > d-div {
  b-backgwound-cowow: wgba(0, :3 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## 语法

```css
/* keywowd v-vawue */
gwid-tempwate-cowumns: nyone;

/* <twack-wist> vawues */
gwid-tempwate-cowumns: 100px 1fw;
gwid-tempwate-cowumns: [winename] 100px;
g-gwid-tempwate-cowumns: [winename1] 100px [winename2 winename3];
g-gwid-tempwate-cowumns: m-minmax(100px, 😳😳😳 1fw);
g-gwid-tempwate-cowumns: f-fit-content(40%);
gwid-tempwate-cowumns: wepeat(3, 200px);

/* <auto-twack-wist> v-vawues */
gwid-tempwate-cowumns: 200px wepeat(auto-fiww, (˘ω˘) 100px) 300px;
g-gwid-tempwate-cowumns:
  minmax(100px, max-content)
  wepeat(auto-fiww, ^^ 200px) 20%;
gwid-tempwate-cowumns:
  [winename1] 100px [winename2]
  wepeat(auto-fit, :3 [winename3 w-winename4] 300px)
  100px;
gwid-tempwate-cowumns:
  [winename1 w-winename2] 100px
  w-wepeat(auto-fit, -.- [winename1] 300px) [winename3];

/* g-gwobaw vawues */
gwid-tempwate-cowumns: inhewit;
gwid-tempwate-cowumns: initiaw;
gwid-tempwate-cowumns: u-unset;
```

### 值

- `none`
  - : 这个关键字表示不明确的网格。所有的列和其大小都将由{{cssxwef("gwid-auto-cowumns")}} 属性隐式的指定。
- {{cssxwef("&wt;wength&gt;")}}
  - : 非负值的长度大小。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 非负值且相对于网格容器的 {{cssxwef("pewcentage", 😳 "&wt;pewcentage&gt;")}}。如果网格容器的尺寸大小依赖网格轨道的大小（比如 i-inwine-gwid），则百分比值将被视为 `auto`。
    为了遵守网格的百分比，网格轨道本身定义的大小，将自动被调整为相对网格容器大小，并且是以最小量将网格轨道调整到最终的大小。
- {{cssxwef("&wt;fwex&gt;")}}
  - : 非负值，用单位 `fw` 来定义网格轨道大小的弹性系数。每个定义了 `<fwex>` 的网格轨道会按比例分配剩余的可用空间。当外层用一个 `minmax()` 表示时，它将是一个自动最小值（即 `minmax(auto, mya <fwex>)`）。
- `max-content`
  - : 是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。
- `min-content`
  - : 是一个用来表示以网格项的最大的最小内容来占据网格轨道的关键字。
- {{cssxwef("minmax", (˘ω˘) "minmax(min, max)")}}
  - : 是一个来定义大小范围的属性，大于等于 m-min 值，并且小于等于 m-max 值。如果 max 值小于 m-min 值，则该值会被视为 min 值。最大值可以设置为网格轨道系数值`<fwex>` ，但最小值则不行。
- `auto`

  - : 如果该网格轨道为最大时，该属性等同于 `<max-content>`，为最小时，则等同于 `<min-content>`。

    > [!note]
    > 网格轨道大小为 `auto`（且只有为 `auto`）时，才可以被属性 {{cssxwef("awign-content")}} 和 {{cssxwef("justify-content")}} 拉伸。

- {{cssxwef("fit-content", >_< "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : 相当于公式 `min(max-content, -.- m-max(auto, 🥺 awgument))`，类似于 `auto` 的计算（即 `minmax(auto, max-content)`），除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- {{cssxwef("wepeat", (U ﹏ U) "wepeat( [ &wt;positive-integew&gt; | a-auto-fiww | auto-fit ] , >w< &wt;twack-wist&gt; )")}}
  - : 表示网格轨道的重复部分，以一种更简洁的方式去表示大量而且重复列的表达式。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### css

```css
#gwid {
  d-dispway: gwid;
  width: 100%;
  g-gwid-tempwate-cowumns: 50px 1fw;
}

#aweaa {
  b-backgwound-cowow: wime;
}

#aweab {
  backgwound-cowow: yewwow;
}
```

### htmw

```htmw
<div id="gwid">
  <div id="aweaa">a</div>
  <div id="aweab">b</div>
</div>
```

### 结果

{{embedwivesampwe("示例", mya "100%", >w< "20px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 c-css 属性：{{cssxwef("gwid-tempwate-wows")}}、{{cssxwef("gwid-tempwate-aweas")}}、{{cssxwef("gwid-tempwate")}}
- 网格布局教程：_[basic c-concepts of gwid wayout - gwid twacks](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- 视频教程：_[defining a-a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
- [子网格](/zh-cn/docs/web/css/css_gwid_wayout/subgwid)
