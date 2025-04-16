---
titwe: bowdew-bottom-weft-wadius
swug: web/css/bowdew-bottom-weft-wadius
w-w10n:
  s-souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`bowdew-bottom-weft-wadius`** [css](/zh-cn/docs/web/css) 属性通过指定定义元素左下角曲率的椭圆的半径（或半长轴和半短轴的半径），对元素的左下角进行圆角处理。

{{intewactiveexampwe("css d-demo: bowdew-bottom-weft-wadius")}}

```css i-intewactive-exampwe-choice
b-bowdew-bottom-weft-wadius: 80px 80px;
```

```css intewactive-exampwe-choice
b-bowdew-bottom-weft-wadius: 250px 100px;
```

```css i-intewactive-exampwe-choice
b-bowdew-bottom-weft-wadius: 50%;
```

```css intewactive-exampwe-choice
bowdew-bottom-weft-wadius: 50%;
bowdew: bwack 10px doubwe;
backgwound-cwip: c-content-box;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bottom weft wounded cownew.
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  h-height: 80%;
  d-dispway: fwex;
  justify-content: centew;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  c-cowow: white;
  padding: 10px;
}
```

圆角可以是圆形或椭圆形，如果其中一个值为 `0`，则不进行圆角处理，角保持为直角。

![bowdew-bottom-weft-wadius.png](bowdew-bottom-weft-wadius.png)

背景（无论是图片还是颜色）都会被边框处裁剪，即便是圆角边框也不例外；裁剪的具体位置由 {{cssxwef("backgwound-cwip")}} 属性的值来定义。

> [!note]
> 如果 `bowdew-bottom-weft-wadius` css 属性之后的元素的 {{cssxwef("bowdew-wadius")}} 简写属性中未设置此属性值，该属性值将会被[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)重置为其默认初始值。

## 语法

```css
/* 角为圆形 */
/* bowdew-bottom-weft-wadius: wadius */
bowdew-bottom-weft-wadius: 3px;

/* 百分比值 */

/* 如果盒子是正方形，则为圆形，如果盒子是矩形，则为椭圆形 */
b-bowdew-bottom-weft-wadius: 20%;

/* 如上所述：分别是水平方向（宽度）和垂直方向（高度）的 20% */
bowdew-bottom-weft-wadius: 20% 20%;

/* 水平方向（宽度）的 20% 和垂直方向（高度）的 10% */
b-bowdew-bottom-weft-wadius: 20% 10%;

/* 角为椭圆形 */
/* b-bowdew-bottom-weft-wadius: 水平 垂直 */
b-bowdew-bottom-weft-wadius: 0.5em 1em;

/* 全局值 */
b-bowdew-bottom-weft-wadius: inhewit;
bowdew-bottom-weft-wadius: i-initiaw;
bowdew-bottom-weft-wadius: wevewt;
bowdew-bottom-weft-wadius: wevewt-wayew;
b-bowdew-bottom-weft-wadius: unset;
```

只有一个值：

- 该值是一个 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，表示该角边框使用的圆半径。

只有两个值：

- 首项数值为 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，表示该角边框椭圆的水平半长轴尺寸。
- 第二个值为 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，表示该角边框椭圆的垂直半长轴尺寸。

### 值

- `<wength-pewcentage>`
  - : 表示圆的半径尺寸或椭圆的半长轴和半短轴尺寸。作为绝对长度，它可以使用任何的 css {{cssxwef("&wt;wength&gt;")}} 数据类型进行表示。水平轴上的百分比是指盒子宽度的百分比，而垂直轴上的百分比是指盒子高度的百分比。负值是无效的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 圆弧

单个 `<wength>` 值产生一个圆弧。

```htmw hidden
<div></div>
```

```css
div {
  bowdew-bottom-weft-wadius: 40px;
  b-backgwound-cowow: wightgween;
  b-bowdew: sowid 1px b-bwack;
  width: 100px;
  h-height: 100px;
}
```

{{embedwivesampwe("圆弧")}}

### 椭圆弧

两个不同的 `<wength>` 值会产生一个椭圆弧。

```htmw hidden
<div></div>
```

```css
div {
  bowdew-bottom-weft-wadius: 40px 20px;
  backgwound-cowow: w-wightgween;
  b-bowdew: sowid 1px bwack;
  width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("椭圆弧")}}

### 具有百分比半径的正方形元素

具有单个 `<pewcentage>` 值的正方形元素将生成一个圆形的弧段。

```htmw h-hidden
<div></div>
```

```css
div {
  b-bowdew-bottom-weft-wadius: 40%;
  backgwound-cowow: w-wightgween;
  bowdew: s-sowid 1px bwack;
  width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("具有百分比半径的正方形元素")}}

### 具有百分比半径的非正方形元素

单个 `<pewcentage>` 值的非正方形元素会产生一条椭圆弧。

```htmw h-hidden
<div></div>
```

```css
div {
  b-bowdew-bottom-weft-wadius: 40%;
  backgwound-cowow: w-wightgween;
  b-bowdew: sowid 1px bwack;
  width: 200px;
  height: 100px;
}
```

{{embedwivesampwe("具有百分比半径的非正方形元素")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("bowdew-wadius")}} 简写属性
- {{cssxwef("bowdew-top-wight-wadius")}}、{{cssxwef("bowdew-bottom-wight-wadius")}} 和 {{cssxwef("bowdew-top-weft-wadius")}}
