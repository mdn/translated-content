---
title: <color>
slug: Web/CSS/color_value
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<color>`** 表示一个颜色。颜色可以包括一个 [alpha 通道](https://zh.wikipedia.org/wiki/Alpha合成)_透明度值_，来表明颜色如何与背景色[混合（composite）](http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending)。

> [!NOTE]
> 尽管 CSS 颜色值（`<color>`）被精确定义，但在不同的输出设备上仍然有可能表现不一致（甚至区别很大）。这是因为大多数设备不是经校准的，而且有些浏览器不支持输出设备的[色彩配置（color profile）](https://zh.wikipedia.org/wiki/ICC色彩特性文件)。

## 语法

```css
/* 命名颜色 */
rebeccapurple
aliceblue

/* RGB 十六进制 */
#f09
#ff0099

/* RGB（红、绿、蓝） */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL（色相、饱和度、明度） */
hsl(150 30% 60%)
hsl(150 30% 60% / 0.8)

/* HWB（色相、白度、黑度）*/
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB（亮度、A 轴、B 轴） */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH（亮度、色度、色相） */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab（亮度、A 轴、B 轴） */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch（亮度、色度、色相） */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)
```

一个 `<color>` 值可以以如下方式定义：

- 通过关键字：{{CSSXref("&lt;named-color&gt;")}}（例如 `blue` 和 `pink`）、{{CSSXref("&lt;system-color&gt;")}} 和 [`currentcolor`](#currentcolor_关键字).
- 通过十六进制标记：{{CSSXref("&lt;hex-color&gt;")}}（例如 `#ff0000`）。
- 通过使用函数标记的颜色空间的参数：
  - [sRGB](https://zh.wikipedia.org/wiki/SRGB色彩空间) 颜色空间：{{CSSXref("color_value/hsl", "hsl()")}}、{{CSSXref("color_value/hwb", "hwb()")}}、{{CSSXref("color_value/rgb", "rgb()")}}；
  - [CIELAB](https://zh.wikipedia.org/wiki/CIELAB色彩空间) 颜色空间：{{CSSXref("color_value/lab", "lab()")}}、{{CSSXref("color_value/lch", "lch()")}}；
  - [Oklab](https://bottosson.github.io/posts/oklab/) 颜色空间：{{CSSXref("color_value/oklab", "oklab()")}}、{{CSSXref("color_value/oklch", "oklch()")}}；
  - 其他颜色空间：{{CSSXref("color_value/color", "color()")}}。
- 通过混合两个颜色：{{CSSXref("color_value/color-mix", "color-mix()")}}。

### currentcolor 关键字

`currentcolor` 关键字表示元素的 {{Cssxref("color")}} 属性的值。这可以在默认情况下不接收 `color` 值的属性上使用 `color` 值。

如果 `currentcolor` 用于 `color` 属性的值，那么会给元素继承 `color` 属性的值。

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  这个文本的颜色是蓝色。
  <div style="background: currentcolor; height:9px;"></div>
  这个块的边框也是蓝色。
</div>
```

{{EmbedLiveSample("currentcolor_关键字", "100%", 80)}}

### 缺失颜色成分

每个 CSS 颜色函数的成分，除了使用旧版的逗号分隔语法的，都可以指定关键字 `none` 表示一个缺失的成分。

清晰地指定缺失的成分可用于[颜色插值](#带有缺失成分时的插值)，可用于需要插值一些颜色成分但不插值其他颜色成分时。对于所有其他的目的，缺失的成分会相当于相应单位的零值：`0`、`0%` 或 `0deg`。例如，下面的颜色在不插值时是等价的：

```css
/* 这两个是等价的 */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* 这两个是等价的 */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## 插值

颜色插值会发生在[渐变](/zh-CN/docs/Web/CSS/gradient)、[过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)和[动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)中。

当对 `<color>` 值进行插值时，它们首先会转换成指定的颜色空间，然后颜色成分的[计算值](/zh-CN/docs/Web/CSS/computed_value)会进行线性插值，插值速度由过渡和动画中的[缓动函数](/zh-CN/docs/Web/CSS/easing-function)决定。插值颜色空间默认为 Oklab，但是可以在一些与颜色相关的函数标记中通过 {{CSSXref("&lt;color-interpolation-method&gt;")}} 覆盖。

### 带有缺失成分时的插值

#### 在同一空间内插值颜色

对完全在插值颜色空间中的颜色进行插值时，一个颜色中缺失的成分将替换为另一种颜色中同一成分的现有值。例如，以下两个表达式是等效的：

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> 如果两个颜色都缺失这个成分，那么这个成分在插值后也是缺失的。

#### 在不同空间内插值：相似成分

如果任何要插值的颜色不在插值颜色空间中，则其缺失的成分将根据同一类的**相似成分**转换为转换后的颜色，如下表所述：

| 类别 | 相似成分 |
| ---- | -------- |
| 红色 | `R`, `X` |
| 绿色 | `G`, `Y` |
| 蓝色 | `B`, `Z` |
| 明度 | `L`      |
| 色度 | `C`, `S` |
| 色相 | `H`      |
| a    | `a`      |
| b    | `b`      |

例如：

- `color(xyz 0.2 0.1 0.6)` 中的 `X`（`0.2`）相似于 `rgb(50% 70% 30%)` 中的 `R`（`50%`）。
- `hsl(0deg 100% 80%)` 中的 `H`（`0deg`）相似于 `oklch(80% 0.1 140)` 中的 `H`（`140`）。

使用 Oklch 作为插值颜色空间并以下面两种颜色为例：

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

预处理过程为：

1. 将两种颜色中缺失的成分替换为零值：

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. 将两种颜色转换为插值颜色空间：

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. 如果转换后颜色的任何成分与相应原始颜色中的缺失成分相似，则将其重置为缺失的成分：

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. 将任何缺失的成分替换为另一转换后颜色中的相同成分：

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## 无障碍考虑

一些人分辨颜色可能会存在困难。[WCAG 2.2](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) 强烈建议不要将颜色作为传递特定消息、活动或结果的唯一方式。参见[颜色和颜色对比度](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)以了解更多信息。

## 形式语法

{{csssyntax}}

## 示例

### 颜色值检测器

在这个例子中，我们提供了一个 `<div>` 和一个文本输入框。往文本框内输入有效的颜色会使 `<div>` 接受这个颜色，从而可能测试我们的颜色值。

#### HTML

```html
<div></div>
<hr />
<label for="color">输入有效的颜色值：</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "无效的颜色值";
  }
});
```

#### 结果

{{EmbedLiveSample("颜色值检测器", "100%", 300)}}

### 完全饱和的 sRGB 颜色

此示例显示 sRGB 颜色空间中完全饱和的 sRGB 颜色。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### 结果

{{EmbedLiveSample("完全饱和的 srgb 颜色", "100%", 200)}}

### 不同深浅的红色

此示例显示 sRGB 颜色空间中不同深浅的红色。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### 结果

{{EmbedLiveSample("不同深浅的红色", "100%", 150)}}

### 不同饱和度的红色

此示例显示 sRGB 颜色空间中不同饱和度的红色。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### 结果

{{EmbedLiveSample("不同饱和度的红色", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("opacity")}}：在元素级别上设备透明度的属性
- {{CSSXref("&lt;hue&gt;")}}：表示一个颜色的色相角度的数据类型
- {{CSSXref("color")}}、{{CSSXref("background-color")}}、{{CSSXref("border-color")}}、{{CSSXref("box-shadow")}}、{{CSSXref("outline-color")}}、{{CSSXref("text-shadow")}}：使用 `<color>` 的常见属性
- [使用 CSS 给元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
- MDN 博客中的文章 [CSS 颜色中的新功能、渐变和色调（级别 4）](/en-US/blog/css-color-module-level-4/)（2023 年）
