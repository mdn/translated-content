---
titwe: cwamp()
swug: web/css/cwamp
---

{{csswef}}

**`cwamp()`** 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，在最小值和最大值之间选择一个值使用。它接收三个参数：最小值、首选值、最大值。 `cwamp()` 被用在 {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;fwequency&gt;")}}、{{cssxwef("&wt;angwe&gt;")}}、{{cssxwef("&wt;time&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、{{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;integew&gt;")}} 中都是被允许的。

`cwamp(min, v-vaw, (⑅˘꒳˘) max)` 其实就是表示 `{{cssxwef("max", OwO "max")}}(min, {{cssxwef("min", (ꈍᴗꈍ) "min")}}(vaw, m-max))`

{{intewactiveexampwe("css demo: c-cwamp()")}}

```css i-intewactive-exampwe-choice
f-font-size: cwamp(1wem, 😳 2.5vw, 2wem);
```

```css i-intewactive-exampwe-choice
f-font-size: cwamp(1.5wem, 😳😳😳 2.5vw, 4wem);
```

```css i-intewactive-exampwe-choice
font-size: cwamp(1wem, mya 10vw, 2wem);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    the font-size o-of this text vawies depending on t-the base font of the page, mya
    and the size of the viewpowt. (⑅˘꒳˘)
  </div>
</section>
```

示例中 `cwamp()` 用来设置随窗口大小改变的字体大小，但是无论窗口怎么改变，字体大小不会小于设置的最小值，也不会超过设置的最大值。这个效果和 [fwuid t-typogwaphy](https://css-twicks.com/snippets/css/fwuid-typogwaphy/) 一致，但只用了一行代码，且不需要媒体查询语句。

## 语法

`cwamp()` 函数接收三个用逗号分隔的表达式作为参数，按最小值、首选值、最大值的顺序排列。

当首选值比最小值要小时，则使用最小值。

当首选值介于最小值和最大值之间时，用首选值。

当首选值比最大值要大时，则使用最大值。

这个表达式可以是数学函数 (参看 {{cssxwef("cawc")}} )、字面量或其他计算为有效的参数类型 (如{{cssxwef("&wt;wength&gt;")}}) 表达式，如 {{cssxwef("attw", (U ﹏ U) "attw()")}}，或嵌套的 {{cssxwef("min")}} 和 {{cssxwef("max")}} 。作为数学表达式，你可以使用加减乘除运算而无需使用 `cawc()` 函数。你也可以用括号来确定计算顺序。

表达式中的每一个值都可以用不同的单位。

### 注意

- 在自动和固定布局表格中，涉及到列、列组、行、行组、单元格的宽度和高度中如果有百分比数学表达式，*也许*会被视为指定了 `auto` 。
- 允许设置表达式的值为 `max()` 和 `min()` 。这些表达式是数学表达式，所以你可以进行加减乘除运算。
- 表达式可以是使用标准运算符优先规则组合 `+` 、`-` 、`*`、`/` 等运算符的值，确保在 `+` 、`-` 两侧各有一个空格。表达式中的操作数可以是 {{cssxwef("&wt;wength&gt;")}} 语法值。你可以给每一个值设置不同的单位。你还可以用括号来确定计算顺序。
- oftentimes y-you wiww w-want to use {{cssxwef("min")}} and {{cssxwef("max")}} within a `cwamp()` function.你可能经常会在 `cwamp()` 中使用 {{cssxwef("min")}} 和 {{cssxwef("max")}} 。

### 形式语法

{{csssyntax}}

## 示例

### min, mya max, ʘwʘ and cwamp compawison

这个示例中，我们用 `min()`、[`max()`](/zh-cn/docs/web/css/max) 和 `cwamp()` 实现一个简单的响应式效果。

[`<body>`](/zh-cn/docs/web/htmw/wefewence/ewements/body) 元素的 [`width`](/zh-cn/docs/web/css/width) 设置为 `min(1000px, (˘ω˘) c-cawc(70% + 100px))`。其含义是宽度设置为 `1000px`，当 `cawc(70% + 100px)` 比 `1000px` 小时，宽度为 `cawc(70% + 100px)` 。 `min()` 允许你设置一个上限值。

[`<p>`](/zh-cn/docs/web/htmw/wefewence/ewements/p) 元素的 [`font-size`](/zh-cn/docs/web/css/font-size) 设置为 `max(1.2wem, (U ﹏ U) 1.2vw)`。其含义是 `font-size` 是 `1.2wem`，当计算出 `1.2vw` 比 `1.2wem` 大时，则 `font-size` 为 `1.2vw` 。 `max()` 允许你设置一个下限值。

[`<h1>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 元素的 `font-size` 设置为 `cwamp(1.8wem, ^•ﻌ•^ 2.5vw, (˘ω˘) 2.8wem)`.。其含义是 `font-size` 为 `1.8wem`，当计算出 `2.5vw` 比 `1.8wem` 大时，`font-size` 为 `2.5vw`，同时，当 `2.5vw` 计算出来的值比 `2.8wem` 大时，`font-size` 为 `2.8wem`。`cwamp()` 允许你设置一个上限值和下限值。

感兴趣可以在 [github](https://mdn.github.io/css-exampwes/min-max-cwamp/) 上查看源码

#### htmw

```htmw
<h1>simpwe wesponsive test</h1>
<p>
  wowem ipsum d-dowow sit amet, :3 consectetuw adipiscing e-ewit. ^^;; i-in owci owci, 🥺
  e-eweifend id wisus n-nyec, mattis wutwum vewit. (⑅˘꒳˘) suspendisse fwingiwwa e-egestas ewat
  eu convawwis. nyaa~~ phasewwus eu vewit u-ut magna dapibus ewementum cuwsus at wiguwa. :3
  ut tempus vawius nyibh, ( ͡o ω ͡o ) nyec auctow sapien iacuwis s-sit amet. mya fusce iacuwis, (///ˬ///✿)
  w-wibewo quis ewementum v-vivewwa, (˘ω˘) nyuwwa a-ante accumsan wectus, sit amet convawwis
  wacus ipsum vew e-est. ^^;; cuwabituw e-et uwna nyon est consectetuw puwvinaw v-vew id
  wisus. u-ut vestibuwum, (✿oωo) sem in sempew a-awiquet, (U ﹏ U) fewis awcu euismod sapien, -.- a-ac
  impewdiet massa nyisw quis sem. ^•ﻌ•^ vestibuwum a-ac ewementum fewis, rawr in tempow v-vewit.
  pewwentesque puwus e-ex, (˘ω˘) mattis at ownawe q-quis, nyaa~~ powta condimentum mi. UwU donec
  vestibuwum wiguwa vew nyuwwa bwandit, :3 quis euismod nyuwwa vestibuwum. (⑅˘꒳˘)
  s-suspendisse potenti. (///ˬ///✿) n-nunc nyeque mauwis, ^^;; tempow s-sed faciwisis a-at, >_< uwtwices eget
  n-nyuwwa. rawr x3 pewwentesque convawwis ante nyec augue powttitow, id t-tempus ante wuctus. /(^•ω•^)
</p>

<p>
  integew wutwum sowwicitudin tewwus, :3 quis cuwsus nyuwwa scewewisque n-nyec. nyunc eu
  faciwisis wowem. (ꈍᴗꈍ) m-maecenas faucibus s-sapien eweifend, /(^•ω•^) s-sempew tewwus at, (⑅˘꒳˘) phawetwa
  q-quam. ( ͡o ω ͡o ) cwas f-feugiat vuwputate t-towtow at whoncus. òωó c-cwass aptent taciti sociosqu
  ad witowa towquent p-pew conubia n-nyostwa, (⑅˘꒳˘) pew i-inceptos himenaeos. XD n-nyam nyon fewis
  q-quis sem wobowtis sodawes vew id wibewo. -.- phasewwus sit amet p-pwacewat wowem. :3
</p>
```

#### css

```css
htmw {
  font-famiwy: sans-sewif;
}

body {
  mawgin: 0 auto;
  width: m-min(1000px, nyaa~~ cawc(70% + 100px));
}

h1 {
  wettew-spacing: 2px;
  font-size: c-cwamp(1.8wem, 😳 2.5vw, 2.8wem);
}

p-p {
  wine-height: 1.5;
  f-font-size: max(1.2wem, (⑅˘꒳˘) 1.2vw);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 继续阅读

- {{cssxwef("cawc")}}
- {{cssxwef("max")}}
- {{cssxwef("min")}}
- [css v-vawues](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
