---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
---

{{CSSRef}}

CSS 函数 **`repeating-radial-gradient()`** 创建一个从原点辐射的重复渐变组成的{{cssxref("&lt;image&gt;")}} 。它类似于{{cssxref("radial-gradient")}} 并且采用相同的参数，但是它会在所有方向上重复颜色，以覆盖其整个容器。函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，是一种特殊的{{cssxref("&lt;image&gt;")}}类型。

```css
/* 一个从容器中心点开始的重复渐变，
   从红色开始，渐变到蓝色，再渐变到绿色 */
repeating-radial-gradient(circle at center, red 0, blue, green 30px);
```

每次重复时，色标位置的偏移量都是基准渐变长度（最后一个色标和第一个之间的距离）的倍数。因此，最后色标的色值应该与第一个色标的色值保持一致；如果不一致的话，会导致非常突兀的渐变效果。

与其他渐变一样，线形重复渐变没有提供[固定的尺寸](/zh-CN/docs/CSS/image#no_intrinsic)；即，它没有原始尺寸或首选尺寸，也没有首选的比列。它将自适应于对应元素的尺寸。

> **备注：** 因为 `<gradient>` 属于`<image>` 数据类型，所以只能在可以使用 `<image>`的地方使用它们。因此`repeating-linear-gradient()` 不适用于{{Cssxref("background-color")}} 以及使用{{cssxref("&lt;color&gt;")}} 数据类型的地方。

## 语法

### 值

- {{cssxref("&lt;position&gt;")}}
  - : `position`与 {{cssxref("background-position")}} 或者 {{cssxref("transform-origin")}}类似。默认值为 `center`.
- {{cssxref("&lt;angle&gt;")}}
  - : 渐变轴的角度。角度顺时针增加，默认值为`0deg`。
- {{cssxref("&lt;shape&gt;")}}
  - : 渐变的形状。圆形（渐变的形状是一个半径不变的正圆）或椭圆形（轴对称椭圆）。默认值为椭圆。默认值为椭圆形，即 `ellipse`。
- `<extent-keyword>`

  - : 关键字用于描述边缘轮廓的具体位置。以下为关键字常量：

    | Keyword           | Description                                                                                                      |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | 渐变的边缘形状与容器距离渐变中心点最近的一边相切（圆形）或者至少与距离渐变中心点最近的垂直和水平边相切（椭圆）。 |
    | `closest-corner`  | 渐变的边缘形状与容器距离渐变中心点最近的一个角相交。                                                             |
    | `farthest-side`   | 与 `closest-side`相反，边缘形状与容器距离渐变中心点最远的一边相切（或最远的垂直和水平边）。                      |
    | `farthest-corner` | 渐变的边缘形状与容器距离渐变中心点最远的一个角相交。                                                             |

    > **备注：** 早期的草案中还包含其他关键字 (`cover` and `contain`) ，分别相当于标准关键字 `farthest-corner` 和 `closest-side`,。但因为在某些实现中丢弃了这些旧的关键字，所以请仅使用标准关键字。

- `<color-stop>`
  - : 表示某个确定位置的固定色值，包含一个[`<color>`](/zh-CN/docs/Web/CSS/color_value)值加上可选的位置值（相对虚拟渐变射线的[`<percentage>`](/zh-CN/docs/Web/CSS/percentage)或者[`<length>`](/zh-CN/docs/Web/CSS/length)长度值）。百分比值`0%`，或者长度值`0`，表示渐变中心点；百分比值`100%`表示渐变射线与边缘形状相交的点。其间的百分比值线性对应渐变射线上的点。

### 形式语法

```
repeating-radial-gradient(
       [[ circle  || <length> ]                     [at <position>]? , |
        [ ellipse || [<length> | <percentage> ]{2}] [at <position>]? , |
        [[ circle | ellipse ] || <extent-keyword> ] [at <position>]? , |
                                                     at <position>   ,    <color-stop> [ , <color-stop> ]+ )
        \---------------------------------------------------------------/\--------------------------------/
                  定义轮廓、尺寸和结束形状的位置                                    色标列表

where <extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side
  and <color-stop> = <color> [ <percentage> | <length> ]?
```

## 示例

径向渐变沿着一条轴线进行渲染。在每个轴线的端点处可以指定一个半径。可以想象为创建了两个“圆”，每个圆的中心位置用点指定，大小由半径值指定。渐变从内圆的圆周向外延伸到外圆的圆周。

### 黑白相间的渐变

```css
div {
  display: block;
  width: 50%;
  height: 80px;
  border-color: #000000;
  padding: 10px;
}
#grad1 {
  background: -webkit-repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
  background: -moz-repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
  background: -ms-repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
  background: -o-repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
  text-shadow: 1px 1px 0pt black;
  color: white;
  border: 1px solid black;
  height: 5.5em;
}
```

{{EmbedLiveSample('黑白相间的渐变', '300px', '120px', '')}}

```css
background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
```

### Farthest-corner 渐变

```css
div {
  display: block;
  width: 50%;
  height: 80px;
  border-radius: 10px;
  border-color: #000000;
  padding: 10px;
}
#grad1 {
  background: -webkit-repeating-radial-gradient(
    ellipse farthest-corner,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: -moz-repeating-radial-gradient(
    ellipse farthest-corner,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: -ms-repeating-radial-gradient(
    ellipse farthest-corner,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: -o-repeating-radial-gradient(
    ellipse farthest-corner,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: repeating-radial-gradient(
    ellipse farthest-corner,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  text-shadow: 1px 1px 0pt blue;
  color: white;
  border: 1px solid black;
  height: 5.5em;
}
```

{{EmbedLiveSample('Farthest-corner 渐变', '300px', '120px', '')}}

```css
background: repeating-radial-gradient(
  ellipse farthest-corner,
  red,
  black 5%,
  blue 5%,
  green 10%
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用渐变](/zh-CN/docs/Web/Guide/CSS/Using_CSS_gradients)
- 其他渐变方法：{{cssxref("radial-gradient")}}, {{cssxref("linear-gradient")}}, {{cssxref("repeating-linear-gradient")}}
