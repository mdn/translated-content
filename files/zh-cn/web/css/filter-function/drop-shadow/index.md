---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
---

{{CSSRef}}

The **`drop-shadow()`** [CSS](/zh-CN/docs/Web/CSS) function applies a drop shadow effect to the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

投影实际上是输入图像的 alpha 蒙版的一个模糊的、偏移的版本，用特定的颜色绘制并合成在图像下面。

> **备注：** 这个函数有点类似于 {{Cssxref("box-shadow")}} 属性。`box-shadow` 属性在元素的整个框后面创建一个矩形阴影，而 `drop-shadow()` 过滤器则是创建一个符合图像本身形状 (alpha 通道) 的阴影。

## Syntax

```
drop-shadow(offset-x offset-y blur-radius spread-radius color)
```

The `drop-shadow()` function accepts a parameter of type `<shadow>` (defined in the {{cssxref("box-shadow")}} property), with the exception that the `inset` keyword is not allowed.

### Parameters

- `offset-x` `offset-y` (required)
  - : `offset-x`指定水平距离，其中负值将阴影放置到元素的左侧。`offset-y`指定垂直距离，其中负值将阴影置于元素之上。如果两个值都为 `0`，则阴影直接放置在元素后面。
- `blur-radius` (optional)
  - : 阴影的模糊半径，指定为 {{cssxref("&lt;length&gt;")}}。值越大，阴影就越大，也越模糊。如果未指定，则默认为 `0`，从而产生清晰、不模糊的边缘。不允许有负值。
- `spread-radius` (optional)

  - : 阴影的扩展半径，指定为 {{cssxref("&lt;length&gt;")}}. 正的值会导致阴影扩大和变大，而负的值会导致阴影缩小。如果未指定，则默认为 0，阴影的大小将与输入图像相同。

    > **警告：** 大多数浏览器不支持这个参数;如果使用，效果将不会呈现。截止 2020 年 10,14 日，Chrome v.85.0.4183.121（正式版本）,Microsoft Edge Beta v85.0.564.63(64 位), Firefox v.85.0.564.63 暂未支持

- `color` (optional)
  - : 阴影的颜色，指定为 {{cssxref("&lt;color&gt;")}}。如果未指定，则使用 {{cssxref("color")}} 属性的值。

## Examples

```css
/* Black shadow with 10px blur */
drop-shadow(16px 16px 10px black)

/* Reddish shadow with 1rem blur and .3rem spread */
/* WARNING: not generally supported by browsers */
drop-shadow(.5rem .5rem 1rem .3rem #e23)
```

## See also

- {{cssxref("&lt;filter-function&gt;")}}
- CSS {{cssxref("box-shadow")}} property
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
