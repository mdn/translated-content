---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
---

{{CSSRef}}

CSS 函数 **`repeating-linear-gradient()`** 创建一个由重复线性渐变组成的{{cssxref("&lt;image&gt;")}}，这是一个类似 {{cssxref("linear-gradient")}} 的函数，并且采用相同的参数，但是它会在所有方向上重复渐变以覆盖其整个容器。这个函数的结果是一个{{cssxref("&lt;gradient&gt;")}} 数据类型的对象，这是一个特殊的{{cssxref("&lt;image&gt;")}}类型。

```css
/* 一个倾斜 45 度的重复线性渐变，
   从蓝色开始渐变到红色 */
repeating-linear-gradient(45deg, blue, red);

/* 一个从右下角到左上角的重复线性渐变，
   从蓝色开始渐变到红色 */
repeating-linear-gradient(to left top, blue, red);

/* 一个由下至上的重复线性渐变，
   从蓝色开始，40% 后变绿，
   最后渐变到红色 */
repeating-linear-gradient(0deg, blue, green 40%, red);
```

每次重复时，色标位置的偏移量都是基准渐变长度（最后一个色标和第一个之间的距离）的倍数。因此，最后色标的色值应该与第一个色标的色值保持一致；如果不一致的话，会导致非常突兀的渐变效果。

与其他渐变一样，线形重复渐变没有提供 [固定的尺寸](/zh-CN/docs/CSS/image#no_intrinsic)；即，它没有原始尺寸或首选尺寸，也没有首选的比列。它将自适应于对应元素的尺寸。

> **备注：** 因为 `<gradient>` 属于`<image>` 数据类型，所以只能在可以使用 `<image>`的地方使用它们。因此`repeating-linear-gradient()` 不适用于{{Cssxref("background-color")}}以及使用 {{cssxref("&lt;color&gt;")}} 数据类型的地方。

## 语法

### 值

- `<side-or-corner>`
  - : 描述渐变线的起始点位置。它包含两个关键词：第一个指出垂直位置 left or right，第二个指出水平位置 top or bottom。关键词的先后顺序无影响，且都是可选的。
    to top, to bottom, to left 和 to right 这些值会被转换成角度 0 度、180 度、270 度和 90 度。其余值会被转换为一个以向顶部中央方向为起点顺时针旋转的角度。渐变线的结束点与其起点中心对称。
- {{cssxref("&lt;angle&gt;")}}
  - : 用角度值指定渐变的方向（或角度）。角度顺时针增加。
- `<color-stop>`

  - : 由一个{{cssxref("&lt;color&gt;")}}值组成，并且跟随着一个可选的终点位置（可以是一个{{cssxref("&lt;percentage&gt;")}}或者是沿着渐变轴的{{cssxref("&lt;length&gt;")}}）。CSS 渐变的颜色渲染采取了与 SVG 相同的规则。

    > **备注：** 渲染颜色中间点的规则[CSS 渐变中的色标](#Gradient_with_multiple_color_stops) 与[SVG 渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)一致。

### 形式语法

```css
repeating-linear-gradient(  [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )
                            \---------------------------------/ \----------------------------/
                              渐变轴的定义                                色标列表

where <side-or-corner> = [left | right] || [top | bottom]
   and <color-stop>     = <color> [ <percentage> | <length> ]?
```

## 示例

```css
#grad1 {
  background-image: repeating-linear-gradient(
    180deg,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
}

#grad2 {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 25px,
    rgba(255, 255, 255, 1) 25px,
    rgba(255, 255, 255, 1) 50px
  );
}
```

```html
<ol>
  <li>
    Repeating horizontal bars
    <div id="grad1"></div>
  </li>
  <li>
    Zebra stripes
    <div id="grad2"></div>
  </li>
</ol>
```

```css hidden
div {
  display: block;
  width: 50%;
  height: 80px;
  border-color: #000000;
  padding: 10px;
}

#grad1 {
  background-image: -moz-repeating-linear-gradient(
    180deg,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
  background-image: -webkit-repeating-linear-gradient(
    180deg,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
  background-image: -o-repeating-linear-gradient(
    180deg,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
  background-image: repeating-linear-gradient(
    180deg,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
}

#grad2 {
  background-color: black;
  background-image: -moz-repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 25px,
    rgba(255, 255, 255, 1) 25px,
    rgba(255, 255, 255, 1) 50px
  );
  background-image: -webkit-repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 25px,
    rgba(255, 255, 255, 1) 25px,
    rgba(255, 255, 255, 1) 50px
  );
  background-image: -o-repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 25px,
    rgba(255, 255, 255, 1) 25px,
    rgba(255, 255, 255, 1) 50px
  );
  background-image: -ms-repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 25px,
    rgba(255, 255, 255, 1) 25px,
    rgba(255, 255, 255, 1) 50px
  );
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 25px,
    rgba(255, 255, 255, 1) 25px,
    rgba(255, 255, 255, 1) 50px
  );
}
```

```html hidden
<ol>
  <li>
    repeating gradient
    <div id="grad1"></div>
  </li>
  <li>
    Zebra pattern
    <div id="grad2"></div>
  </li>
</ol>
```

{{EmbedLiveSample('示例', '300px', '300px', '')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 其他渐变函数：{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
