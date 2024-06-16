---
title: path()
slug: Web/CSS/basic-shape/path
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{CSSRef}}

`path()` [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions)接受 [SVG 路径](/zh-CN/docs/Web/SVG/Element/path)字符串作为参数，用于 [CSS 形状](/zh-CN/docs/Web/CSS/CSS_shapes)和[运动路径](/zh-CN/docs/Web/CSS/CSS_motion_path)模块中绘制形状。`path()` 函数是 {{cssxref("&lt;basic-shape&gt;")}} 数据类型的值。它可以用于 CSS 的 [`offset-path`](/zh-CN/docs/Web/CSS/offset-path) 和 [`clip-path`](/zh-CN/docs/Web/CSS/clip-path) 属性，以及 SVG 的 [`d`](/zh-CN/docs/Web/SVG/Attribute/d) 属性。

{{EmbedInteractiveExample("pages/css/function-path.html")}}

## 语法

当用于 {{cssxref("offset-path")}} 或 {{SVGAttr("d")}} 时：

```css
path(<string>)
```

当用于 {{cssxref("clip-path")}} 时：

```css
path( [<fill-rule>,]? <string> )
```

### 参数

- [`<fill-rule>`](/zh-CN/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : 可选值为 [`nonzero`](/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero)（默认值，当省略时）或 [`evenodd`](/zh-CN/docs/Web/SVG/Attribute/fill-rule#evenodd)，定义填充形状内部的规则。
    > **备注：** {{cssxref("offset-path")}} 不支持 `<fill-rule>` 值，使用它会使属性失效。

- {{cssxref("string")}}

  - : 用于定义 [SVG 路径](/zh-CN/docs/Web/SVG/Element/path)的[数据字符串](/zh-CN/docs/Web/SVG/Attribute/d)。该 `<string>` 的内容语法与 SVG 相同。

### 返回值

返回一个 {{cssxref("basic-shape")}} 值。

## 形式语法

{{csssyntax}}

## 示例

### path() 正确值的示例

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### 作为 offset-path 值的使用示例

`path()` 函数用于创建物体运动的路径。修改任何值都会导致路径不能完美地绕着圆形运动。

{{EmbedGHLiveSample("css-examples/path/offset-path.html", '100%', 960)}}

### 修改 SVG 路径 d 属性的值

`path()` 可以用于修改 SVG 的 [`d` 属性](/zh-CN/docs/Web/SVG/Attribute/d)的值，该属性也可以在 CSS 中设置为 `none`。

如果支持将 `d` 作为 CSS 属性，当你将鼠标悬停在“V”符号上面时，它会垂直翻转。

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* 当悬停时显示此路径 */
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### 结果

{{EmbedLiveSample('修改 SVG 路径 d 属性的值', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS 形状](/zh-CN/docs/Web/CSS/CSS_shapes)
- [CSS 形状概述](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [SVG 路径语法图解指南](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
