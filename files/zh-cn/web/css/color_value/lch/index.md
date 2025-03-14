---
title: lch()
slug: Web/CSS/color_value/lch
---

{{CSSRef}}

函数记号 **`lch()`** 在 LCH 颜色空间中表示指定颜色。此函数记号与 {{CSSXref("color_value/lab", "lab()")}} 有相同的 L 轴，但使用极坐标 C（色度）和 H（色相）。

## 语法

```css
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);
```

### 取值

- 函数记号：`lch(L C H [/ A])`

  - `L` 为介于 `0` 和 `100` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，指定了 CIE 明度，此处数值 `0` 对应 `0%`（黑），数值 `100` 对应 `100%`（白）。

  - `C` 为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}，此处 `0%` 对应 `0`，`100%` 对应数值 `150`。此值衡量了色度（大概表示“颜色的量”），其有用的最小值为 `0`，最大值无理论上限（但实际不超过 `230`）。

  - `H` 为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}}，指定了沿正半 a 轴（紫红方向）的色相角。`90deg` 指向正半 b 轴（芥末黄方向），`180deg` 指向负半 a 轴（蓝绿方向），`270deg` 指向负半 b 轴（天蓝方向）。

  - `A`（alpha）可为介于 `0` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。

> [!NOTE]
> 在 CSS 中，通常当百分比值有等价数值时，`100%` 等于数值 `1`。此处注意 `100%` 对于 `L` 值等于数值 `100`，对于 `C` 值等于 `150`。

### 形式语法

{{CSSSyntax}}

## 示例

### 用 lch() 调整明度、色度和色相

下列示例展示了改变函数记号 `lch()` 的 `L`（明度）、`C`（色度）和 `H`（色相）值的效果。

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-chroma"></div>

<div data-color="green"></div>
<div data-color="green-hue"></div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
[data-color="blue"] {
  background-color: lch(0% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(100% 100 240);
}

[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-chroma"] {
  background-color: lch(100% 30 20);
}

[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-hue"] {
  background-color: lch(50% 132 180);
}
```

#### 结果

{{EmbedLiveSample("用_lch_调整明度、色度和色相")}}

### 用 lch() 调整不透明度

下列示例展示了改变函数记号 `lch()` 的 `A`（alpha）值的效果。为演示不透明度的效果，`red` 和 `red-alpha` 元素与 `#background-div` 元素重叠。`0.4` 的 `A` 值使颜色有 40% 的不透明度。

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

#### 结果

{{EmbedLiveSample("用_lch_调整不透明度")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`<color>` 数据类型](/zh-CN/docs/Web/CSS/color_value)所列的所有颜色记号
- [CSS 中的 LCH 颜色——是什么，为什么，怎么用？](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari 技术预览 122 发布记录](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/)：含 `lch()` 和 {{CSSXref("color_value/lab", "lab()")}} 颜色
