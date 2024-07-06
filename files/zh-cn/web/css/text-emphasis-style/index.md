---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis-style`** 设置强调标记的样式。这个值也可以使用[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) {{cssxref("text-emphasis")}} 来设置。

{{EmbedInteractiveExample("pages/css/text-emphasis-style.html")}}

## 语法

```css
/* 初始值 */
text-emphasis-style: none; /* 无强调标记 */

/* <string> 值 */
text-emphasis-style: "x";
text-emphasis-style: "\25B2";
text-emphasis-style: "*";

/* 关键字值 */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* 全局值 */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: revert-layer;
text-emphasis-style: unset;
```

### Values

- `none`
  - : 没有强调标记。
- `filled`
  - : 形状填充为实色。如果 `filled` 和 `open`都未被设置，这是默认设置。
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
  - : 显示圏点形状作为标记。填充圏点是 `'﹅'`（`U+FE45`），空心圏点是 `'﹆'`（`U+FE46`）。在垂直书写模式下，如果没有指定其他形状，则默认为此形状。
- `<string>`
  - : 将指定的字符串作为标记显示。不应指定多于一个字符的 `<string>`。用户代理（UA）可能会截断或忽略超过一个字形集群的字符串。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### CSS

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

### HTML

```html
<h2>这是一个二级标题</h2>

<h3>这是一个三级标题</h3>
```

### 结果

{{EmbedLiveSample("带有强调标记的示例", 450, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('text-emphasis-color')}}、{{cssxref('text-emphasis')}} 和 {{cssxref('text-emphasis-position')}}——其他强调标记相关属性
