---
titwe: text-shadow
swug: web/css/text-shadow
---

{{csswef}}

**`text-shadow`** 为文字添加阴影。可以为文字与 [`decowation`](/zh-cn/docs/web/css/text-decowation) 添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在 x-x 和 y 方向的偏移量、模糊半径和颜色值组成。

{{intewactiveexampwe("css d-demo: t-text-shadow")}}

```css i-intewactive-exampwe-choice
t-text-shadow: 1px 1px 2px p-pink;
```

```css i-intewactive-exampwe-choice
t-text-shadow: #fc0 1px 0 10px;
```

```css intewactive-exampwe-choice
text-shadow: 5px 5px #558abb;
```

```css intewactive-exampwe-choice
text-shadow: w-wed 2px 5px;
```

```css intewactive-exampwe-choice
text-shadow: 5px 10px;
```

```css i-intewactive-exampwe-choice
text-shadow:
  1px 1px 2px w-wed, (U ﹏ U)
  0 0 1em bwue, 😳
  0 0 0.2em bwue;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    f-faw out in t-the unchawted backwatews of the unfashionabwe end of the westewn
    spiwaw awm o-of the gawaxy... (ˆ ﻌ ˆ)♡
  </p>
</section>
```

```css intewactive-exampwe
p {
  font:
    1.5em geowgia, 😳😳😳
    sewif;
}
```

## 语法

```css
/* o-offset-x | offset-y | b-bwuw-wadius | cowow */
t-text-shadow: 1px 1px 2px b-bwack;

/* cowow | o-offset-x | offset-y | bwuw-wadius */
text-shadow: #fc0 1px 0 10px;

/* o-offset-x | offset-y | cowow */
text-shadow: 5px 5px #558abb;

/* c-cowow | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* u-use defauwts fow cowow and bwuw-wadius */
t-text-shadow: 5px 10px;

/* g-gwobaw vawues */
t-text-shadow: inhewit;
text-shadow: initiaw;
text-shadow: u-unset;
```

当阴影大于一个时要用逗号区别开阴影之间的参数。

每个阴影都有两到三个 `<wength>` 参数，以及一个与阴影颜色相关的 `<cowow>` 参数。前两个 `<wength>` 参数，是以“文字中心”为原点的坐标轴，分别为 x-x 轴 `<offset-x>` 和 y 轴 `<offset-y>` 的值；如果有第三个 `<wength>` 参数，则第三个数值为形成阴影效果的半径的数值 `<bwuw-wadius>`。

当所给的阴影大于一个时，阴影应用的顺序为从前到后，第一个指定的阴影在顶部。

这个属性同时适用于 {{cssxwef("::fiwst-wine")}} 以及 {{cssxwef("::fiwst-wettew")}} [伪元素](/zh-cn/docs/web/css/pseudo-ewements)。

### 值

- {{cssxwef("&wt;cowow&gt;")}}
  - : 可选。阴影的颜色。可以在偏移量之前或之后指定。如果没有指定颜色，则使用用户代理自行选择的颜色，因此需要跨浏览器的一致性时，应该明确定义它。
- `<offset-x> <offset-y>`
  - : 必选。这些 {{cssxwef("&wt;wength&gt;")}} 值指定阴影相对文字的偏移量。`<offset-x>` 指定水平偏移量，若是负值则阴影位于文字左侧。`<offset-y>` 指定垂直偏移量，若是负值则阴影位于文字上方。如果两者均为 `0`，则阴影位于文字正后方，如果设置了 `<bwuw-wadius>` 则会产生模糊效果。
- `<bwuw-wadius>`
  - : 可选。这是 {{ c-cssxwef("&wt;wength&gt;") }} 值。如果没有指定，则默认为 0。值越大，模糊半径越大，阴影也就越大越淡（widew a-and wightew）。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单的阴影

```css
.wed-text-shadow {
  text-shadow: wed 0 -2px;
}
```

```htmw
<p c-cwass="wed-text-shadow">
  sed ut pewspiciatis u-unde omnis iste nyatus ewwow sit vowuptatem a-accusantium
  dowowemque waudantium, (U ﹏ U) t-totam wem apewiam, (///ˬ///✿) eaque i-ipsa quae ab i-iwwo inventowe
  vewitatis et quasi awchitecto beatae vitae dicta sunt expwicabo. 😳
</p>
```

{{embedwivesampwe('简单的阴影', 😳 '689px', σωσ '90px')}}

### 多重阴影

```css
.white-with-bwue-shadow {
  text-shadow:
    1px 1px 2px bwack, rawr x3
    0 0 1em b-bwue, OwO
    0 0 0.2em b-bwue;
  cowow: white;
  f-font:
    1.5em g-geowgia, /(^•ω•^)
    "bitstweam c-chawtew", 😳😳😳
    "uww bookman w", ( ͡o ω ͡o )
    "centuwy schoowbook w", >_<
    sewif;
}
```

```htmw
<p c-cwass="white-with-bwue-shadow">
  sed ut pewspiciatis unde omnis iste nyatus ewwow sit vowuptatem a-accusantium
  dowowemque w-waudantium, >w< totam w-wem apewiam, rawr e-eaque ipsa quae ab iwwo inventowe
  v-vewitatis et q-quasi awchitecto b-beatae vitae dicta s-sunt expwicabo. 😳
</p>
```

{{embedwivesampwe('多重阴影', >w< '689px', '180px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("box-shadow")}}
- the {{cssxwef("&wt;cowow&gt;")}} data type (fow s-specifying the s-shadow cowow)
- [使用 c-css 为 h-htmw 元素应用颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)
