---
title: <color-interpolation-method>
slug: Web/CSS/color-interpolation-method
l10n:
  sourceCommit: 707a895d09555c873e5e7dbd28135381fde6d01e
---

{{CSSRef}}

**`<color-interpolation-method>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示用于在 {{CSSXref("&lt;color&gt;")}} 值之间插值的[色彩空间](/zh-CN/docs/Glossary/Color_space)。它可用于覆盖像 {{CSSXref("color_value/color-mix", "color-mix()")}} 和 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} 等与颜色相关的函数符号所用的默认插值色彩空间。

在对 `<color>` 值插值时，插值色彩空间默认为 `oklab`。

## 语法

`<color-interpolation-method>` 指定了插值应使用直角坐标色彩空间还是带可选色相插值方法的极坐标色彩空间：

```plain
in <rectangular-color-space>
// 或者
in <polar-color-space>[ <hue-interpolation method>]
```

### 值

- `<rectangular-color-space>`

  - : 关键字 `srgb`、`srgb-linear`、`display-p3`、`a98-rgb`、`prophoto-rgb`、`rec2020`、`lab`、`oklab`、`xyz`、`xyz-d50` 或 `xyz-d65` 之一。

- `<polar-color-space>`

  - : 关键字 `hsl`、`hwb`、`lch` 或 `oklch` 之一。

- {{CSSXref("&lt;hue-interpolation-method&gt;")}} {{optional_inline}}

  - : 用于色调插值的算法。默认为 `shorter hue`。

- `<custom-color-space>`
  - : 一个指向自定义 [@color profile](/zh-CN/docs/Web/CSS/@color-profile) 的 [`<dashed-ident>`](/zh-CN/docs/Web/CSS/dashed-ident#与_color-profile_一起使用)。

## 形式语法

{{CSSSyntax}}

## 示例

### 用渐变比较各种插值色彩空间

以下示例展示了 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} 使用不同的插值色彩空间的效果。

#### HTML

```html
<div>sRGB：</div>
<div class="gradient srgb"></div>
<div>Oklab：</div>
<div class="gradient oklab"></div>
<div>Oklch（带 <code>longer hue</code>）：</div>
<div class="gradient oklch-longer"></div>
```

#### CSS

```css
.gradient {
  height: 50px;
  width: 100%;
}
.srgb {
  background-image: linear-gradient(in srgb to right, blue, red);
}
.oklab {
  background-image: linear-gradient(in oklab to right, blue, red);
}
.oklch-longer {
  background-image: linear-gradient(in oklch longer hue to right, blue, red);
}
```

#### 结果

{{EmbedLiveSample("用渐变比较各种插值色彩空间", "100%", 250)}}

### 重复渐变中的颜色插值

以下示例展示了在重复渐变中插值颜色时如何指定色彩空间。

三个框展示了使用 [`repeating-conic-gradient()`](/zh-CN/docs/Web/CSS/gradient/repeating-conic-gradient)、[`repeating-linear-gradient()`](/zh-CN/docs/Web/CSS/gradient/repeating-linear-gradient) 和 [`repeating-radial-gradient()`](/zh-CN/docs/Web/CSS/gradient/repeating-radial-gradient) 函数创建的不同类型的重复渐变。

第一个框使用 Lab 色彩空间在两个颜色值之间进行插值。第二个和第三个框使用 Oklch 色彩空间，并且额外提供了一个 [`<hue-interpolation-method>`](/zh-CN/docs/Web/CSS/hue-interpolation-method) 来指定如何在色调值之间进行插值。

#### HTML

```html
<div class="gradient conic">圆锥渐变</div>
<div class="gradient linear">线性渐变</div>
<div class="gradient radial">径向渐变</div>
```

#### CSS

我们在每个渐变中使用了相同的两种颜色，以展示 [`<hue-interpolation-method>`](/zh-CN/docs/Web/CSS/hue-interpolation-method) 和{{glossary("color space", "色彩空间")}}在渐变颜色插值中的不同效果。

```css hidden
.gradient {
  height: 200px;
  width: 200px;
  display: inline-block;
  font-family: monospace;
  margin: 10px;
  font-size: 16px;
}
```

```css
.conic {
  background-image: repeating-conic-gradient(
    in lab,
    burlywood,
    blueviolet 120deg
  );
}

.linear {
  background-image: repeating-linear-gradient(
    in oklch,
    burlywood,
    blueviolet 75px
  );
}

.radial {
  background-image: repeating-radial-gradient(
    in oklch longer hue,
    blueviolet 50px,
    burlywood 100px
  );
}
```

#### 结果

{{EmbedLiveSample("重复渐变中的颜色插值", "100%", 250)}}

对比第一个和第二个框展示了在不同色彩空间中插值两种颜色时的差异。对比第二个和第三个框则展示 [`<hue-interpolation-method>`](/zh-CN/docs/Web/CSS/hue-interpolation-method) 之间的差异，其中线性渐变使用了较短的方法（默认），而径向渐变使用了较长的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}}、{{CSSXref("&lt;gradient&gt;")}}
- {{CSSXref("&lt;hue-interpolation-method&gt;")}}
