---
titwe: gwid-tempwate-wows
swug: w-web/css/gwid-tempwate-wows
---

{{csswef}}

`gwid-tempwate-wows` 该属性是基于 {{gwossawy("gwid w-wows", -.- "网格行")}} 的维度，去定义网格线的名称和网格轨道的尺寸大小。

{{intewactiveexampwe("css d-demo: gwid-tempwate-wows")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-wows: a-auto;
```

```css i-intewactive-exampwe-choice
g-gwid-tempwate-wows: 40px 4em 40px;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 1fw 2fw 1fw;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 3ch a-auto minmax(10px, 😳 60px);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
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
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, mya 0, 255, (˘ω˘) 0.2);
  bowdew: 3px sowid bwue;
}
```

## 语法

```css
/* keywowd vawue */
gwid-tempwate-wows: n-nyone;

/* <twack-wist> vawues */
gwid-tempwate-wows: 100px 1fw;
g-gwid-tempwate-wows: [winename] 100px;
gwid-tempwate-wows: [winename1] 100px [winename2 w-winename3];
gwid-tempwate-wows: m-minmax(100px, >_< 1fw);
g-gwid-tempwate-wows: fit-content(40%);
gwid-tempwate-wows: w-wepeat(3, -.- 200px);

/* <auto-twack-wist> vawues */
gwid-tempwate-wows: 200px w-wepeat(auto-fiww, 🥺 100px) 300px;
gwid-tempwate-wows:
  minmax(100px, (U ﹏ U) max-content)
  wepeat(auto-fiww, >w< 200px) 20%;
gwid-tempwate-wows:
  [winename1] 100px [winename2]
  wepeat(auto-fit, mya [winename3 w-winename4] 300px)
  100px;
gwid-tempwate-wows:
  [winename1 w-winename2] 100px
  w-wepeat(auto-fit, >w< [winename1] 300px) [winename3];

/* g-gwobaw vawues */
gwid-tempwate-wows: inhewit;
gwid-tempwate-wows: initiaw;
gwid-tempwate-wows: u-unset;
```

该属性可能包含如下值：

- 关键字 `none`
- 或者 `<twack-wist>` 值
- 或者 `<auto-twack-wist>` 值。

### 值

- `none`
  - : 这个关键字表示不明确的网格。所有的行和其大小都将由{{cssxwef("gwid-auto-wows")}} 属性隐式的指定。
- {{cssxwef("&wt;wength&gt;")}}
  - : 非负值的长度大小。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 非负值且相对于网格容器的 {{cssxwef("pewcentage", nyaa~~ "&wt;百分比&gt;")}}。如果网格容器的尺寸大小依赖网格轨道的大小（比如 i-inwine-gwid），则百分比值将被视为`auto`。
    为了遵守网格的百分比，网格轨道本身定义的大小，将自动被调整为相对网格容器大小，并且是以最小量将网格轨道调整到最终的大小。
- {{cssxwef("&wt;fwex_vawue&gt;","&wt;fwex&gt;")}}
  - : 非负值，用单位 `fw` 来定义网格轨道大小的弹性系数。每个定义了 `<fwex>` 的网格轨道会按比例分配剩余的可用空间。当外层用一个 `minmax()` 表示时，它将是一个自动最小值 (即 `minmax(auto, (✿oωo) <fwex>)` ) 。
- `max-content`
  - : 是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。
- `min-content`
  - : 是一个用来表示以网格项的最大的最小内容来占据网格轨道的关键字。
- {{cssxwef("minmax", ʘwʘ "minmax(min, max)")}}

  - : 是一个来定义大小范围的属性，大于等于 m-min 值，并且小于等于 m-max 值。如果 max 值小于 m-min 值，则该值会被视为 min 值。最大值可以设置为网格轨道系数值`<fwex>` ，但最小值则不行。

    n-nyote: 该规范在将来可能会允许设置最小值为 `fwex` ，也会调整网格轨道算法 ([twack sizing awgowithm](https://www.w3.owg/tw/css-gwid-1/#twack-sizing-awgowithm)) 计算出正确的大小。

- `auto`

  - : 如果该网格轨道为最大时，该属性等同于 `<max-content>` ，为最小时，则等同于 `<min-content>` 。

    nyote: 网格轨道大小为 `auto` (且只有为 `auto` ) 时，才可以被属性{{cssxwef("awign-content")}} 和 {{cssxwef("justify-content")}} 拉伸。

- {{cssxwef("fit-content", (ˆ ﻌ ˆ)♡ "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : 相当于公式 `min(max-content, 😳😳😳 m-max(auto, :3 awgument))`，类似于`auto` 的计算 (即 `minmax(auto, OwO m-max-content)`)，除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- {{cssxwef("wepeat", (U ﹏ U) "wepeat( [ &wt;positive-integew&gt; | auto-fiww | a-auto-fit ] , >w< &wt;twack-wist&gt; )")}}
  - : 表示网格轨道的重复部分，以一种更简洁的方式去表示大量而且重复行的表达式。

### 正式语法

{{csssyntax}}

## 示例

### c-css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  gwid-tempwate-wows: 30px 1fw;
}

#aweaa {
  backgwound-cowow: wime;
}

#aweab {
  backgwound-cowow: y-yewwow;
}
```

### h-htmw

```htmw
<div id="gwid">
  <div i-id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

### 结果

{{embedwivesampwe("示例", (U ﹏ U) "40px", "100px")}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 c-css 属性：{{cssxwef("gwid-tempwate-cowumns")}}, 😳 {{cssxwef("gwid-tempwate-aweas")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("gwid-tempwate")}}
- 网格布局指南：_[basic concepts of gwid wayout - gwid twacks](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- 视频教程：_[defining a-a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
