---
title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
---

**`column-rule-color`** [CSS](/zh-CN/docs/Web/CSS) 属性设置在多列布局中列与列之间绘制的线的颜色。

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48, 125, 222);
```

```css interactive-example-choice
column-rule-color: hsla(120, 80%, 40%, 0.6);
```

```css interactive-example-choice
column-rule-color: currentcolor;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## 语法

```CSS
/* <color> 值 */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* 全局值 */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

`column-rule-color` 属性指定为单个 `<color>` 值。

### 取值

- {{cssxref("&lt;color&gt;")}}
  - : 用于单独设置列之间分割线的颜色。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置列分割线为蓝色

#### HTML

```html
<p>
  这是分成三列的文本。用
  <code>column-rule-color</code>
  属性更改了列与列之间的线条颜色。你不觉得这很棒吗？
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### 结果

{{EmbedLiveSample("设置列分割线为蓝色")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 颜色 {{cssxref("&lt;color&gt;")}} 数据类型
- 其他颜色相关属性：{{cssxref("color")}}、{{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}} 和 {{cssxref("caret-color")}}
- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)
