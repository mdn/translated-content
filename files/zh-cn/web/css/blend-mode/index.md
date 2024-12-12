---
title: <blend-mode>
slug: Web/CSS/blend-mode
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{CSSRef}}

**`<blend-mode>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)描述当元素重叠时，颜色应当如何呈现。它被用于 {{cssxref("background-blend-mode")}} 和 {{cssxref("mix-blend-mode")}} 属性。

## 语法

`<blend-mode>` 数据类型使用从下方列表中选择的关键字值定义。

### 值

- `normal`
  - : 最终颜色是顶层颜色，无论底层颜色是什么。其效果类似于两张不透明的纸重叠（overlapping）在一起。
- `multiply`
  - : 最终颜色为顶层颜色与底层颜色相乘的结果。如果叠加黑色层，则最终层必为黑色层，叠加白色层不会造成变化。其效果类似于在透明薄膜上重叠印刷的两个图像。
- `screen`
  - : 最终的颜色是反转颜色（顶层颜色和底层颜色），相乘它们并反转该值的结果。黑色层不会造成变化，白色层导致白色最终层。其效果类似于投射到投影屏幕上的两个图像。
- `overlay`
  - : 如果底层颜色比顶层颜色深，则最终颜色是 `multiply` 的结果，如果底层颜色比顶层颜色浅，则最终颜色是 `screen` 的结果。此混合模式相当于顶层与底层互换后的 `hard-light`。
- `darken`
  - : 最终颜色是由每个颜色通道下，顶底两层颜色中的最暗值所组成的颜色。
- `lighten`
  - : 最终颜色是每个颜色通道下，顶底两层颜色中的最亮值所组成的颜色。
- `color-dodge`
  - : 最终颜色是将底层颜色除以顶层颜色的反色的结果。黑色前景不会造成变化。前景如果是背景的反色，会得到白色（fully lit color，完全亮起的颜色，应当为白色）。此混合模式类似于 `screen`，但是，前景只需要和背景的反色一样亮，最终图像就会变为全白。
- `color-burn`
  - : 最终颜色是反转底层颜色，将反转后的值除以顶层颜色，再反转除以后的值得到的结果。白色的前景不会导致变化，前景如果是背景的反色，会得到黑色。此混合模式类似于 `multiply`，但是，前景只需要和背景的反色一样暗，最终图像就会变为全黑。
- `hard-light`
  - : 如果顶层颜色比底层颜色深，则最终颜色是 `multiply` 的结果；如果顶层颜色比底层颜色浅，则最终颜色是 `screen` 的结果。此混合模式相当于顶层与底层互换后的 `overlay`。其效果类似于在背景层上打出一片*刺眼*的聚光灯。
- `soft-light`
  - : 最终颜色类似于 `hard-light` 的结果，但更加柔和一些。此混合模式的表现类似 `hard-light`。其效果类似于在背景层上打出一片*发散*的聚光灯。
- `difference`
  - : 最终颜色是两种颜色中较浅的颜色减去两种颜色中较深的颜色得到的结果。黑色层不会造成变化，而白色层会反转另一层的颜色。
- `exclusion`
  - : 最终颜色类似于 `difference`，但对比度更低一些。和 `difference` 相同，黑色层不会造成变化，而白色层会反转另一层的颜色。
- `hue`
  - : 最终颜色由顶层颜色的*色调*和底层颜色的*饱和度*与*亮度*组成。
- `saturation`
  - : 最终颜色由顶层颜色的*饱和度*和底层颜色的*色调*与*亮度*组成。饱和度为零的纯灰色背景层不会造成变化。
- `color`
  - : 最终颜色由顶层颜色的*色调*与*饱和度*和底层颜色的*亮度*组成。此效果保留了灰度级别，可用于为前景着色。
- `luminosity`
  - : 最终颜色由顶层颜色的*亮度*和底层颜色的*色调*和*饱和度*组成。此混合模式相当于顶层与底层互换后的 `color`。

## 描述

对于应用该模式的层中的每个像素，混合模式采用前景和背景的颜色，对它们进行计算，并返回一个新的颜色值。

混合模式之间的变化不会被插值。任何变化都会立即发生。

## 形式语法

{{csssyntax}}

## 示例

### 示例：使用“normal”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

{{ EmbedLiveSample('示例：使用“normal”', "300", "350") }}

### 示例：使用“multiply”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: multiply;
}
```

{{ EmbedLiveSample('示例：使用“multiply”', "300", "350") }}

### 示例：使用“screen”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

{{ EmbedLiveSample('示例：使用“screen”', "300", "350") }}

### 示例：使用“overlay”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: overlay;
}
```

{{ EmbedLiveSample('示例：使用“overlay”', "300", "350") }}

### 示例：使用“darken”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: darken;
}
```

{{ EmbedLiveSample('示例：使用“darken”', "300", "350") }}

### 示例：使用“lighten”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: lighten;
}
```

{{ EmbedLiveSample('示例：使用“lighten”', "300", "350") }}

### 示例：使用“color-dodge”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-dodge;
}
```

{{ EmbedLiveSample('示例：使用“color-dodge”', "300", "350") }}

### 示例：使用“color-burn”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-burn;
}
```

{{ EmbedLiveSample('示例：使用“color-burn”', "300", "350") }}

### 示例：使用“hard-light”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hard-light;
}
```

{{ EmbedLiveSample('示例：使用“hard-light”', "300", "350") }}

### 示例：使用“soft-light”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: soft-light;
}
```

{{ EmbedLiveSample('示例：使用“soft-light”', "300", "350") }}

### 示例：使用“difference”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('示例：使用“difference”', "300", "350") }}

### 示例：使用“exclusion”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: exclusion;
}
```

{{ EmbedLiveSample('示例：使用“exclusion”', "300", "350") }}

### 示例：使用“hue”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hue;
}
```

{{ EmbedLiveSample('示例：使用“hue”', "300", "350") }}

### 示例：使用“saturation”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: saturation;
}
```

{{ EmbedLiveSample('示例：使用“saturation”', "300", "350") }}

### 示例：使用“color”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color;
}
```

{{ EmbedLiveSample('示例：使用“color”', "300", "350") }}

### 示例：使用“luminosity”

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: luminosity;
}
```

{{ EmbedLiveSample('示例：使用“luminosity”', "300", "350") }}

### 混合模式比较

在以下示例中，我们有一个带有两张背景图片（在线性渐变之上有一个 Firefox 的 logo）的 `<div>`。它的下面，我们提供一个 `<select>` 菜单，允许你改变应用到 `<div>` 上的 `background-blend-mode`，你可以借此比较不同的混合模式效果。

#### HTML

```html
<div></div>
<p>选择 blend-mode：</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background:
    url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png)
      no-repeat center,
    linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");

selectElem.addEventListener("change", () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### 结果

{{EmbedLiveSample('混合模式比较', '100%', 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 合成和混合](/zh-CN/docs/Web/CSS/CSS_compositing_and_blending)模块定义了 `<blend-mode>` 值。
- 使用此数据类型的属性：{{cssxref("background-blend-mode")}} 和 {{cssxref("mix-blend-mode")}}

其他网站上对各种混合模式的说明与介绍：

- Wikipedia 上的[混合模式](http://en.wikipedia.org/wiki/Blend_modes)
- Adobe 提供的 [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html)
