---
title: text-emphasis-style
slug: Web/CSS/Reference/Properties/text-emphasis-style
l10n:
  sourceCommit: 5a0e89bad2e2bbbd32ce22b0c2bb419ae3b7c962
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis-style`** 设置强调标记的样式。这个值也可以使用简写属性 {{cssxref("text-emphasis")}} 来设置。

{{InteractiveExample("CSS Demo: text-emphasis-style")}}

```css interactive-example-choice
text-emphasis-style: none;
```

```css interactive-example-choice
text-emphasis-style: triangle;
```

```css interactive-example-choice
text-emphasis-style: "x";
```

```css interactive-example-choice
text-emphasis-style: filled double-circle;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

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
  - : 显示大圆圈作为标记。填充圆圈是 `'●'`（`U+25CF`），空心圆圈是 `'○'`（`U+25CB`）。
- `double-circle`
  - : 显示双重圆圈作为标记。填充双重圆圈是 `'◉'`（`U+25C9`），空心双重圆圈是 `'◎'`（`U+25CE`）。
- `triangle`
  - : 显示三角形作为标记。填充三角形是 `'▲'`（`U+25B2`），空心三角形是 `'△'`（`U+25B3`）。
- `sesame`
  - : 显示芝麻点形状作为标记。填充芝麻点是 `'﹅'`（`U+FE45`），空心芝麻点是 `'﹆'`（`U+FE46`）。
- `<string>`
  - : 将指定的字符串作为标记显示。不应指定多于一个*字符*的 `<string>`。用户代理（UA）可能会截断或忽略超过一个字素簇的字符串。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基础示例

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关属性：{{cssxref('text-emphasis-color')}}、{{cssxref('text-emphasis')}}。
- 用于定义强调标记的 {{cssxref('text-emphasis-position')}} 属性。
