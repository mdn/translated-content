---
title: lab()
slug: Web/CSS/color_value/lab
---

{{CSSRef}}

函数记号 **`lab()`** 在 CIE L\*a\*b\* 颜色空间中表示指定颜色。Lab 表示人可见的全部颜色的范围。

## 语法

```css
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);
```

### 取值

- 函数记号：`lab(L a b [/ A])`

  - `L` 为介于 `0` 和 `100` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `0%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，指定了 CIE 明度，此处数值 `0` 对应 `0%`（黑），数值 `100` 对应 `100%`（白）。

  - `a` 为介于 `-125` 和 `125` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `-100%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，指定了在 Lab 颜色空间中沿 `a` 轴的距离，即颜色绿或红的程度。

  - `b` 为介于 `-125` 和 `125` 之间的 {{CSSXref("&lt;number&gt;")}} 或介于 `-100%` 和 `100%` 之间的 {{CSSXref("&lt;percentage&gt;")}}，指定了在 Lab 颜色空间中沿 `b` 轴的距离，即颜色蓝或黄的程度。

  - `A`（alpha）可为介于 `0` 和 `1` 之间的 {{CSSXref("&lt;number&gt;")}} 或 {{CSSXref("&lt;percentage&gt;")}}，此处数值 `1` 对应 `100%`（完全不透明）。

> [!NOTE]
> 在 CSS 中，通常当百分比值有等价数值时，`100%` 等于数值 `1`。此处注意 `100%` 对于 `L` 值等于数值 `100`，对于 `a` 值和 `b` 值等于 `125`。

### 形式语法

{{CSSSyntax}}

## 示例

### 用 lab() 调整明度和颜色轴

下列示例展示了改变 `lab()` 函数的明度、a 轴和 b 轴值的效果。

#### HTML

```html
<div data-color="red"></div>
<div data-color="red-a"></div>

<div data-color="green"></div>
<div data-color="green-b"></div>

<div data-color="blue"></div>
<div data-color="blue-light"></div>
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
[data-color="red"] {
  background-color: lab(100 125 125);
}
[data-color="red-a"] {
  background-color: lab(100 110 125);
}

[data-color="green"] {
  background-color: lab(75% -120 125);
}
[data-color="green-b"] {
  background-color: lab(75% -120 10);
}

[data-color="blue"] {
  background-color: lab(0 -120 -120);
}
[data-color="blue-light"] {
  background-color: lab(70 -120 -120);
}
```

#### 结果

{{EmbedLiveSample("用_lab_调整明度和颜色轴")}}

### 用 lab() 调整不透明度

下列示例展示了改变函数记号 `lab()` 的 `A`（alpha）值的效果。为演示不透明度的效果，`red` 和 `red-alpha` 元素与 `#background-div` 元素重叠。`0.4` 的 `A` 值使颜色有 40% 的不透明度。

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
  background-color: lab(100 125 125);
}
[data-color="red-alpha"] {
  background-color: lab(100 125 125 / 0.4);
}
```

#### 结果

{{EmbedLiveSample("用_lab_调整不透明度")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`<color>` 数据类型](/zh-CN/docs/Web/CSS/color_value)所列的所有颜色记号
- [CSS 中的 LCH 颜色——是什么，为什么，怎么用？](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari 技术预览 122 发布记录](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/)：含 `lab()` 和 {{CSSXref("color_value/lch", "lch()")}} 颜色
