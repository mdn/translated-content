---
title: oklch()
slug: Web/CSS/color_value/oklch
---

{{CSSRef}}

函数记号 **`oklch()`** 在 Oklch 颜色空间中表示指定颜色。此函数记号与 {{CSSXref("color_value/oklab", "oklab()")}} 有相同的 L 轴，但使用极坐标 C（色度）和 H（色相）。

## 语法

```css
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)
```

### 取值

- 函数记号：`oklch(L C H [/ A])`

  - `L` 为介于 `0` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，此处数值 `0` 对应 `0%`（黑），数值 `1` 对应 `100%`（白）。`L` 指定了感知明度。

  - `C` 为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}，此处 `0%` 对应 `0`，`100%` 对应数值 `0.4`。此值衡量了色度（大概表示“颜色的量”），其有用的最小值为 `0`，最大值无理论上限（但实际不超过 `0.5`）。

  - `H` 为 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;angle&gt;")}}，指定了沿正半 a 轴（紫红方向）的色相角。`90deg` 指向正半 b 轴（芥末黄方向），`180deg` 指向负半 a 轴（蓝绿方向），`270deg` 指向负半 b 轴（天蓝方向）。

  - `A`（alpha）可为介于 `0` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。

### 形式语法

{{CSSSyntax}}

## 示例

### 调整颜色的明度、色度和色相

下列示例展示了改变颜色函数 `oklch()` 的 `L`（明度）、`C`（色度）和 `H`（色相）值的效果。

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
  background-color: oklch(60% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red"] {
  background-color: oklch(100% 0.4 30);
}
[data-color="red-chroma"] {
  background-color: oklch(100% 0.3 40);
}

[data-color="green"] {
  background-color: oklch(60% 0.57 161);
}
[data-color="green-hue"] {
  background-color: oklch(60% 0.57 181);
}
```

#### 结果

{{EmbedLiveSample("调整颜色的明度、色度和色相")}}

### 调整颜色的 alpha 值

下列示例展示了改变颜色函数 `oklch()` 的 `A`（alpha）值的效果。为演示不透明度的效果，`red` 和 `red-alpha` 元素与 `#background-div` 元素重叠。`0.4` 的 `A` 值使颜色有 40% 的不透明度。

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
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 130 20 / 0.4);
}
```

#### 结果

{{EmbedLiveSample("调整颜色的_alpha_值")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`<color>` 数据类型](/zh-CN/docs/Web/CSS/color_value)所列的所有颜色记号
- [一个用于图像处理的感知颜色空间](https://bottosson.github.io/posts/oklab/)
- [CSS 中的 OKLCH](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [Safari 技术预览 137 发布记录](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/)：含 `oklch()` and {{CSSXref("color_value/oklab", "oklab()")}} 颜色
