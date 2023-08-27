---
title: oklab()
slug: Web/CSS/color_value/oklab
---

{{CSSRef}}

函数记号 **`oklab()`** 在 Oklab 颜色空间中表示指定颜色，此颜色空间尽力模仿人眼感知颜色的方式。`oklab()` 在 Oklab 颜色空间中使用直角坐标系，有 a 轴和 b 轴。若想要极坐标颜色系统——色度和色相，请使用 {{CSSXref("color_value/oklch", "oklch()")}}。

Oklab 为感知颜色空间，可用于：

- 在不改变图像明度的前提下，将图像转换为灰度图。
- 在保持用户所感知的色相和明度的前提下，修改颜色的饱和度。
- 创建平滑均匀的颜色渐变（例如在 {{HTMLElement("canvas")}} 元素中手动插值）。

`oklab()` 函数可表示 Oklab 颜色空间中的任意颜色。此颜色空间比 RGB 更宽广，包含宽色域颜色和 P3 颜色。

## 语法

```css
/* oklab(明度 a 轴 b 轴) */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);

/* oklab(明度 a 轴 b 轴 / alpha) */
oklab(59.69% 0.1007 0.1191 / 0.5);
```

> **备注：** oklab() 函数**不**像其他某些颜色函数一样支持以逗号分隔其值，且可选的 alpha 值在指定时需置于正斜杠（`/`）之后。

### 取值

- 函数记号：`oklab(L a b [/ A])`
  - `L` 为介于 `0` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，此处数值 `0` 对应 `0%`（黑），数值 `1` 对应 `100%`（白）。`L` 指定了感知明度。
  - `a` 为介于 `-0.4` 和 `0.4` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `-100%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}。此值指定了在 Oklab 空间中沿 `a` 轴的距离，即颜色绿或红的程度。
  - `b` 为介于 `-0.4` 和 `0.4` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `-100%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}。此值指定了在 Oklab 空间中沿 `b` 轴的距离，即颜色蓝或黄的程度。
  - `A`（alpha）为介于 `0` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。`A` 表示颜色的透明度（即 alpha 通道）。

### 形式语法

{{CSSSyntax}}

## 示例

### 用 oklab() 调整明度和轴

下列示例展示了改变 `oklab()` 函数的明度、a 轴和 b 轴值的效果。

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>
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
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.7 -0.3 -0.4);
}

[data-color="red"] {
  background-color: oklab(100% 0.4 0.4);
}
[data-color="red-a"] {
  background-color: oklab(100% 0.2 0.4);
}

[data-color="green"] {
  background-color: oklab(100% -100% 0.4);
}
[data-color="green-b"] {
  background-color: oklab(100% -100% 0.6);
}
```

#### 结果

{{EmbedLiveSample("用_oklab_调整明度和轴", "100%", 155)}}

### 用 oklab() 调整不透明度

下列示例展示了改变 `oklab()` 函数的 `A`（alpha）值的效果。为演示不透明度的效果，`red` 和 `red-alpha` 元素与 `#background-div` 元素重叠。给予 `red-alpha` 元素 `0.4` 的不透明度使其显得比 `red` 元素更透明。

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
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklab(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: oklab(50% 130 20 / 0.4);
}
```

#### 结果

{{EmbedLiveSample("用_oklab_调整不透明度", "100%", 155)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`<color>` 数据类型](/zh-CN/docs/Web/CSS/color_value)所列的所有颜色记号
- {{CSSXref("color_value/oklch", "oklch()")}}：另一使用与 `oklab()` 相同的颜色空间但在极坐标系中的函数记号
- [一个用于图像处理的感知颜色空间](https://bottosson.github.io/posts/oklab/)
