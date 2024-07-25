---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis`** 将强调标记应用到除去空格和控制字符的文本。这个值是 {{cssxref("text-emphasis-style")}} 和 {{cssxref("text-emphasis-color")}} 的[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)。

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

`text-emphasis` 属性与 {{cssxref("text-decoration")}} 完全不同。`text-decoration` 属性不可继承，并且指定的装饰会应用于整个元素。然而，`text-emphasis` 是可继承的，这意味着可以为其子元素更改强调标记。

强调符号的大小，例如注音字符，大约是字体大小的 50%，在当前行间距不足以容纳标记时，`text-emphasis` 可能会影响行高。

> **备注：** `text-emphasis` 不会重置 {{cssxref("text-emphasis-position")}} 的值。这是因为如果文本中的强调标记的样式和颜色不同，它们的位置几乎不会变化。在极少数情况需要这样做时，可以使用 `text-emphasis-position` 属性。

## 组成属性

此属性是以下 CSS 属性的简写：

- [`text-emphasis-color`](/zh-CN/docs/Web/CSS/text-emphasis-color)
- [`text-emphasis-style`](/zh-CN/docs/Web/CSS/text-emphasis-style)

## 语法

```css
/* 初始值 */
text-emphasis: none; /* 没有强调标记 */

/* <string> 值 */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* 不应使用。它可能被计算或渲染为仅“f” */

/* 关键字值 */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* 关键字值与色彩值结合 */
text-emphasis: filled sesame #555;

/* 全局值 */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: revert;
text-emphasis: revert-layer;
text-emphasis: unset;
```

### 取值

- `none`
  - : 没有强调标记。
- `filled`
  - : 形状填充为纯色。如果 `filled` 和 `open` 都未被设置，这是默认设置。
- `open`
  - : 形状为空心。
- `dot`
  - : 显示小圆点作为标记。填充圆点是 `'•'`（`U+2022`），空心圆点是 `'◦'`（`U+25E6`）。
- `circle`
  - : 显示大圆圈作为标记。填充圆圈是 `'●'`（`U+25CF`），空心圆圈是 `'○'`（`U+25CB`）。在水平书写模式下，如果没有指定其他形状，则默认为此形状。
- `double-circle`
  - : 显示双重圆圈作为标记。填充双重圆圈是 `'◉'`（`U+25C9`），空心双重圆圈是 `'◎'`（`U+25CE`）。
- `triangle`
  - : 显示三角形作为标记。填充三角形是 `'▲'`（`U+25B2`），空心三角形是 `'△'`（`U+25B3`）。
- `sesame`
  - : 显示芝麻点形状作为标记。填充芝麻点是 `'﹅'`（`U+FE45`），空心芝麻点是 `'﹆'`（`U+FE46`）。在垂直书写模式下，如果没有指定其他形状，则默认为此形状。
- `<string>`
  - : 将指定的字符串作为标记显示。不应指定多于一个字符的 `<string>`。用户代理（UA）可能会截断或忽略超过一个字素簇的字符串。
- `<color>`
  - : 指定用作强调色的颜色。如果未定义，该值默认为 `currentcolor`。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用强调标记和强调色的标题

此示例绘制了一个标题，并使用三角形来强调每个字符。

#### CSS

```css
h2 {
  text-emphasis: triangle #d55;
}
```

#### HTML

```html
<h2>这很重要！</h2>
```

#### 结果

{{EmbedLiveSample("使用强调标记和强调色的标题", 500, 90)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 全称属性 {{cssxref('text-emphasis-style')}}、{{cssxref('text-emphasis-color')}}
- 用于定义强调标记位置的 {{cssxref('text-emphasis-position')}} 属性。
