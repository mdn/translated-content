---
title: <resolution>
slug: Web/CSS/resolution
---

{{CSSRef}}

分辨率：用于描述[媒体查询](/zh-CN/docs/Web/CSS/Media_Queries)中的分辨率的\<resolution> CSS[数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示输出设备的像素密度。

在屏幕上，单位与 CSS 英寸，厘米或像素有关，而与物理值无关。

## Syntax

\<resolution>数据类型由严格为正{{cssxref("&lt;number&gt;")}}组成，后跟下面列出的单位之一。与所有 CSS 维度一样，单位字面值与数字之间没有空格。

### 单位

- `dpi`
  - : 表示[每英寸的点数](https://en.wikipedia.org/wiki/Dots_per_inch)。屏幕通常每英寸包含 72 或 96 个点，但打印文档的 dpi 通常要大得多。1 英寸是 2.54 厘米，1dpi≈0.39dpcm。
- `dpcm`
  - : [每厘米上的点数](https://en.wikipedia.org/wiki/Dots_per_inch)。1 英寸是 2.54 厘米，`1dpcm ≈ 2.54dpi`.
- `dppx`
  - : 表示每个[`px`](/zh-CN/docs/Web/CSS/length#px)的点数。由于 CSS px 的固定比率为 1:96，因此 1dppx 相当于 96dpi。which corresponds to the default resolution of images displayed in CSS as defined by {{cssxref("image-resolution")}}.
- `x`
  - : `dppx` 的别名

> **备注：** Although the number `0` is always the same regardless of unit, the unit may not be omitted. In other words, `0` is invalid and does not represent `0dpi`, `0dpcm`, or `0dppx`.

## Examples

### Use in a media query

```css
@media print and (min-resolution: 300dpi) { ... }
```

### Valid resolutions

```
96dpi
50.82dpcm
3dppx
```

### Invalid resolutions

```plain example-bad
72 dpi     Spaces are not allowed between the number and the unit.
ten dpi    The number must use digits only.
0          The unit is required.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [resolution](/zh-CN/docs/Web/CSS/@media/resolution) media feature
