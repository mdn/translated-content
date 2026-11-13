---
title: drop-shadow()
slug: Web/CSS/Reference/Values/filter-function/drop-shadow
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`drop-shadow()`** [CSS](/zh-CN/docs/Web/CSS) [函数](docs/Web/CSS/CSS_values_and_units/CSS_value_functions)对输入图像应用投影效果。其结果是 {{cssxref("&lt;filter-function&gt;")}}。

{{InteractiveExample("CSS Demo: drop-shadow()")}}

```css interactive-example-choice
filter: drop-shadow(30px 10px 4px #4444dd);
```

```css interactive-example-choice
filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210));
```

```css interactive-example-choice
filter: drop-shadow(0 0 0.75rem crimson);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

投影实际上是输入图像的 alpha 蒙版的一个模糊的、偏移的版本，用特定的颜色绘制并合成在图像下面。

> [!NOTE]
> 这个函数有点类似于 {{Cssxref("box-shadow")}} 属性。`box-shadow` 属性在元素的整个盒子后面创建一个矩形阴影，而 `drop-shadow()` 滤镜函数则是创建一个符合图像*本身*形状（alpha 通道）的阴影。

## 语法

```css
/* 双长度值 */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* 三长度值 */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* 双长度值加一个颜色值 */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* 三长度值加一个颜色值 */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* 可以改变颜色和长度值的顺序 */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#e23 0.5rem 0.5rem 1rem)

/* 向滤镜传入多个 drop-shadow 以叠加 */
drop-shadow(10px 10px red) drop-shadow(-5px -5px yellow)
```

`drop-shadow()` 函数接收一个 `<shadow>` 类型（在 {{cssxref("box-shadow")}} 属性中定义）的参数，但不允许使用 `inset` 关键字和 `spread` 参数。

### 参数

- `color` {{optional_inline}}
  - : 阴影的颜色。如果未指定，则使用父元素中 {{cssxref("color")}} 属性的值。

- `length`
  - : 阴影的偏移长度。此参数接受 2 或 3 个值。如指定 2 个值，则被解释为 `<offset-x>`（水平偏移）和 `<offset-y>`（竖直偏移）值。负的 `<offset-x>` 值将阴影置于元素左侧，负的 `<offset-y>` 值将阴影置于元素上方。如未指定，则使用 `0` 值填充缺失的长度。如指定第 3 个值，则被解释为 `<standard-deviation>`，表示[高斯模糊](https://zh.wikipedia.org/wiki/高斯模糊)函数的标准差。更大的 `<standard-deviation>` 值会产生更大、更模糊的阴影。不允许 `<standard-deviation>` 为负值。

## 形式语法

{{CSSSyntax}}

## 示例

### 设置投影

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
<div>
  drop-shadow(1px 1px red) drop-shadow(1px -1px red) drop-shadow(-1px 1px red)
  drop-shadow(-1px -1px red)
</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
  vertical-align: top;
  background-color: #222;

  color: lime;
}

div:nth-child(1) {
  filter: drop-shadow(16px 16px);
}

div:nth-child(2) {
  filter: drop-shadow(16px 16px red);
}

div:nth-child(3) {
  filter: drop-shadow(red 1rem 1rem 10px);
}

div:nth-child(4) {
  filter: drop-shadow(-16px -16px red);
}

div:nth-child(5) {
  filter: drop-shadow(1px 1px red) drop-shadow(1px -1px red)
    drop-shadow(-1px 1px red) drop-shadow(-1px -1px red);
}
```

{{EmbedLiveSample("设置投影", "100%", "300px")}}

第一个盒子中，未指定 `drop-shadow()` 函数的 `<color>` 值，阴影会采用元素自身的 `color` 属性值（`lime`）。第二个和第三个阴影示例表明，长度值和颜色值可以按任意顺序指定。第三个阴影展示了当指定第三个 `<length>` 值时产生的模糊效果。第四个阴影使用负偏移值，使阴影向左上方偏移。第五个示例演示了如何在单个元素上使用多个投影。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

其他可用于 {{cssxref("filter")}} 和 {{cssxref("backdrop-filter")}} 属性值的 {{cssxref("&lt;filter-function&gt;")}} 函数包括：

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
- {{cssxref("box-shadow")}} 属性
- {{cssxref("text-shadow")}} 属性
