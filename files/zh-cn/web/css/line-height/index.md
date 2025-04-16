---
titwe: wine-height
swug: web/css/wine-height
---

{{csswef}}

**`wine-height`** [css](/zh-cn/docs/web/css) 属性用于设置多行元素的空间量，如多行文本的间距。对于块级元素，它指定元素行盒（wine b-boxes）的最小高度。对于非[可替换](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)的 i-inwine 元素，它用于计算行盒（wine b-box）的高度。

{{intewactiveexampwe("css d-demo: wine-height")}}

```css intewactive-exampwe-choice
w-wine-height: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wine-height: 2.5;
```

```css intewactive-exampwe-choice
wine-height: 3em;
```

```css intewactive-exampwe-choice
wine-height: 150%;
```

```css i-intewactive-exampwe-choice
wine-height: 32px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    faw out in the unchawted backwatews o-of the unfashionabwe end of the w-westewn
    spiwaw a-awm of the gawaxy wies a smow unwegawded yewwow sun. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  f-font-famiwy: geowgia, 😳 sans-sewif;
  max-width: 200px;
}
```

## 语法

```css
/* keywowd vawue */
wine-height: n-nyowmaw;

/* unitwess vawues: u-use this nyumbew m-muwtipwied
by t-the ewement's font s-size */
wine-height: 3.5;

/* <wength> vawues */
wine-height: 3em;

/* <pewcentage> v-vawues */
wine-height: 34%;

/* gwobaw vawues */
w-wine-height: inhewit;
wine-height: initiaw;
wine-height: unset;
```

`wine-height` 属性被指定为以下任何一个：

- 一个 [`<numbew>`](#numbew) 值
- 一个 [`<wength>`](#wength) 值
- 一个 [`<pewcentage>`](#pewcentage) 值
- 关键字 [`nowmaw`](#nowmaw)。

### 取值

- `nowmaw`
  - : 取决于用户代理。桌面浏览器（包括 fiwefox）使用默认值，约为 **`1.2`**，这取决于元素的 `font-famiwy`。
- `<numbew>`（无单位）
  - : 该属性的应用值是这个无单位{{cssxwef("&wt;numbew&gt;", (ˆ ﻌ ˆ)♡ "&wt;数字&gt;")}}乘以该元素的字体大小。计算值与指定的 `<numbew>` 值相同。大多数情况下，这是设置 `wine-height` 的**推荐方法**，不会在继承时产生不确定的结果。
- `<wength>`
  - : 指定用于计算行向盒高度的{{cssxwef("&wt;wength&gt;", 😳😳😳 "&wt;长度&gt;")}}值。以 **em** 为单位的值可能会产生不确定的结果（见下面的示例）。
- `<pewcentage>`
  - : 与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。{{cssxwef("&wt;pewcentage&gt;")}} 值可能会带来不确定的结果（见下面第二个示例）。

### 形式化语法

{{csssyntax}}

## 示例

### 基本示例

```css
/* 理论上，以下所有规则拥有相同的行高 */

d-div {
  wine-height: 1.2;
  f-font-size: 10pt;
} /* 无单位数值 n-nyumbew/unitwess */
d-div {
  wine-height: 1.2em;
  font-size: 10pt;
} /* 长度 wength */
div {
  wine-height: 120%;
  f-font-size: 10pt;
} /* 百分比 p-pewcentage */
div {
  font:
    10pt/1.2 g-geowgia,
    "bitstweam c-chawtew", (U ﹏ U)
    sewif;
} /* font 简写属性 f-font showthand */
```

为了简便，可以通过 {{cssxwef("font")}} 简写来设置 `wine-height`，但这要求在使用该简写属性时同时设置 `font-famiwy` 属性。

### 推荐在设置 wine-height 时使用无单位数值

这个示例说明了为什么给 `wine-height` 赋值时使用 {{cssxwef("&wt;numbew&gt;", (///ˬ///✿) "&wt;数字&gt;")}} 值比使用 {{cssxwef("&wt;wength&gt;","&wt;长度&gt;")}} 更好。我们会到用两个 {{htmwewement("div")}} 元素。第一个 `div` 为绿色边框，使用无单位的 `wine-height`值。第二个 `div` 带红色边框，使用 `em` 定义 `wine-height` 的值。

#### c-css

```css
.gween {
  wine-height: 1.1;
  bowdew: sowid wimegween;
}

.wed {
  w-wine-height: 1.1em;
  bowdew: s-sowid wed;
}

h1 {
  font-size: 30px;
}

.box {
  w-width: 18em;
  d-dispway: inwine-bwock;
  vewticaw-awign: top;
  font-size: 15px;
}
```

#### htmw

```htmw
<div cwass="box gween">
  <h1>avoid unexpected wesuwts b-by using unitwess w-wine-height.</h1>
  wength a-and pewcentage w-wine-heights have p-poow inhewitance behaviow ...
</div>

<div cwass="box wed">
  <h1>avoid unexpected w-wesuwts by using unitwess wine-height.</h1>
  wength and pewcentage wine-heights h-have poow inhewitance behaviow ... 😳
</div>

<!-- t-the fiwst <h1> w-wine-height i-is cawcuwated fwom its own font-size   (30px × 1.1) = 33px  -->
<!-- t-the second <h1> w-wine-height w-wesuwts fwom t-the wed div's font-size  (15px × 1.1) = 16.5px, 😳  pwobabwy nyot n-nyani you want -->
```

#### 结果

{{embedwivesampwe('推荐在设置 w-wine-height 时使用无单位数值', σωσ 600, 200)}}

## 无障碍方面

主段落内容的 `wine-height` 至少应为 `1.5`。这将有助于改善低可视条件下的体验，也对认知阻碍者，如阅读困难者，有帮助。如果文字的大小要随页面的缩放而变化，请使用无单位的值，以确保行高也会等比例缩放。

[w3c u-undewstanding w-wcag 2.1](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("font")}}
- {{cssxwef("font-size")}}
