---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
original_slug: Web/CSS/radial-gradient
---

{{CSSRef}}

CSS radial-gradient() 函數創建了一個圖片，其由一個從原點輻射開的在兩個或者多個顏色之前的漸變組成。這個方法得到的是一個 CSS[`<gradient>`](/zh-TW/docs/Web/CSS/gradient)數據類型的物件，其是 [`<image>`](/zh-TW/docs/Web/CSS/image) 的一種。

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

As with any gradient, a radial gradient has [no intrinsic dimensions](/zh-TW/docs/CSS/image#no_intrinsic); i.e., it has no natural or preferred size, nor a preferred ratio. Its concrete size will match the size of the element it applies to.

To create a radial gradient that repeats so as to fill its container, use the {{cssxref("repeating-radial-gradient")}} function instead.

Because `<gradient>`s belong to the `<image>` data type, they can only be used where `<image>`s can be used. For this reason, `radial-gradient()` won't work on {{Cssxref("background-color")}} and other properties that use the {{cssxref("&lt;color&gt;")}} data type.

## Composition of a radial gradient

向量漸變(Radial gradients)由其中心點、邊緣形狀輪廓及位置、色值結束點（color stops）定義而成。

To create a smooth gradient, the `radial-gradient()` function draws a series of concentric shapes radiating out from the center to the _ending shape_ (and potentially beyond). The ending shape may be either a circle or an ellipse.

Color-stop points are positioned on a _virtual gradient ray_ that extends horizontally from the center towards the right. Percentage-based color-stop positions are relative to the intersection between the ending shape and this gradient ray, which represents `100%`. Each shape is a single color determined by the color on the gradient ray it intersects.

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)
```

### Values

- {{cssxref("&lt;position&gt;")}}
  - : The position of the gradient, interpreted in the same way as {{cssxref("background-position")}} or {{cssxref("transform-origin")}}. If unspecified, it defaults to `center`.
- `<shape>`
  - : The gradient's shape. The value can be `circle` (meaning that the gradient's shape is a circle with constant radius) or `ellipse` (meaning that the shape is an axis-aligned ellipse). If unspecified, it defaults to `ellipse`.
- `<extent-keyword>`
  - : A keyword describing how big the ending shape must be. The possible values are:

    | Keyword           | Description                                                                                                                                                                     |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | The gradient's ending shape meets the side of the box closest to its center (for circles) or meets both the vertical and horizontal sides closest to the center (for ellipses). |
    | `closest-corner`  | The gradient's ending shape is sized so that it exactly meets the closest corner of the box from its center.                                                                    |
    | `farthest-side`   | Similar to `closest-side`, except the ending shape is sized to meet the side of the box farthest from its center (or vertical and horizontal sides).                            |
    | `farthest-corner` | The default value, the gradient's ending shape is sized so that it exactly meets the farthest corner of the box from its center.                                                |

    > **備註：** Early implementations of this function included other keywords (`cover` and `contain`) as synonyms of the standard `farthest-corner` and `closest-side`, respectively. Use the standard keywords only, as some implementations have already dropped those older variants.

- `<linear-color-stop>`
  - : A color-stop's {{cssxref("&lt;color&gt;")}} value, followed by an one or two optional stop positions (either a {{cssxref("&lt;percentage&gt;")}} or a {{cssxref("&lt;length&gt;")}} along the gradient's axis). A percentage of `0%`, or a length of `0`, represents the center of the gradient; the value `100%` represents the intersection of the ending shape with the virtual gradient ray. Percentage values in between are linearly positioned on the gradient ray. Including two stop positions is equivalent to declaring two color stops with the same color at the two positions.
- `<color-hint>`
  - : Th color-hint is an interpolation hint defining how the gradient progresses between adjacent color stops. The length defines at which point between two color stops the gradient color should reach the midpoint of the color transition. If omitted, the midpoint of the color transition is the midpoint between two color stops.

### Formal syntax

```
radial-gradient(
  [ [ circle || <length> ]                         [ at <position> ]? , |
    [ ellipse || [ <length> | <percentage> ]{2} ]  [ at <position> ]? , |
    [ [ circle | ellipse ] || <extent-keyword> ] [at <position> ]? , |
    at <position> ,
  ]?
  <color-stop-list> [ , <color-stop-list> ]+
)
where <extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side
   and <color-stop-list> = [ <linear-color-stop> [, <color-hint>? ]? ]#, <linear-color-stop>
   and <linear-color-stop> = <color> [ <color-stop-length> ]?
   and <color-stop-length> = [ <percentage> | <length> ]{1,2}
   and <color-hint> = [ <percentage> | <length> ]
```

> **警告：** Note that negative `<length>`'s are not allowed, however browsers had implemented negative lengths which are now being removed. [See the Firefox site compat note](https://www.fxsitecompat.dev/en-CA/docs/2019/css-radial-gradients-no-longer-accept-negative-radii/).

## Examples

### Simple gradient

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

{{EmbedLiveSample('Simple_gradient', 120, 120)}}

### Non-centered gradient

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(farthest-corner at 40px 40px,
      #f35 0%, #43e 100%);
}
```

{{EmbedLiveSample('Non-centered_gradient', 240, 120)}}

> **備註：** Please see [Using CSS gradients](/zh-TW/docs/Web/CSS/CSS_Images/Using_CSS_gradients) for more examples.

## 規格

{{Specifications}}

## 瀏覽器的相容性

{{Compat}}

### Quantum CSS notes

Gecko used to have a long-standing bug whereby radial gradients like `radial-gradient(circle gold,red)` would work, even though they shouldn't because of the missing comma between `circle` and `gold`. Also, {{cssxref("calc")}} expressions were rejected — causing the value to be invalid — when used as the radius component of a `radial-gradient()` function ([Firefox bug 1376019](https://bugzil.la/1376019)). Firefox's new parallel CSS engine (also known as [Quantum CSS](https://wiki.mozilla.org/Quantum) or [Stylo](https://wiki.mozilla.org/Quantum/Stylo), released in Firefox 57) fixed these bugs.

## See also

- [Using CSS gradients](/zh-TW/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Other gradient functions: {{cssxref("repeating-radial-gradient")}}, {{cssxref("linear-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("conic-gradient")}}, {{cssxref("repeating-conic-gradient")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("_image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image-set","image-set()")}}
- {{cssxref("cross-fade")}}
