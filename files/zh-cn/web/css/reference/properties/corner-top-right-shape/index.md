---
title: corner-top-right-shape
slug: Web/CSS/Reference/Properties/corner-top-right-shape
l10n:
  sourceCommit: 2a64c5583a2c61c729ffe1ee1e7709a5898f57b0
---

{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`corner-top-right-shape`** 用于指定盒子右上角在 {{cssxref("border-radius")}} 区域内的形状。

如需了解角形状行为的完整说明和更多示例，请参见 {{cssxref("corner-shape")}} 简写属性页面。

## 语法

```css
/* 关键字值 */
corner-top-right-shape: scoop;
corner-top-right-shape: square;

/* superellipse() 函数值 */
corner-top-right-shape: superellipse(2.2);
corner-top-right-shape: superellipse(-2.5);

/* 全局值 */
corner-top-right-shape: inherit;
corner-top-right-shape: initial;
corner-top-right-shape: revert;
corner-top-right-shape: revert-layer;
corner-top-right-shape: unset;
```

### 值

`corner-top-right-shape` 属性使用 {{cssxref("&lt;corner-shape-value>")}} 值进行指定。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

你可以在 {{cssxref("corner-shape")}} 参考页面找到其他相关示例。

### 基础 `corner-top-right-shape` 用法

#### HTML

此示例的标记只包含单个 {{htmlelement("div")}} 元素。

```html live-sample___basic-usage
<div></div>
```

#### CSS

我们为这个盒子提供了一些基础样式（这里为了简洁已省略），并且应用了 {{cssxref("box-shadow")}}、60 像素的 `border-radius`，以及一个取值为 `bevel` 的 `corner-top-right-shape`。

```css hidden live-sample___basic-usage
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 60px;
  corner-top-right-shape: bevel;
}
```

#### 结果

渲染结果如下所示：

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("corner-shape")}} 简写属性
- {{cssxref("corner-top-left-shape")}}、{{cssxref("corner-bottom-left-shape")}} 和 {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}、{{cssxref("corner-start-end-shape")}}、{{cssxref("corner-end-start-shape")}} 和 {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}} 简写属性
- {{cssxref("border-top-right-radius")}}
- [CSS 边框和盒子装饰](/zh-CN/docs/Web/CSS/Guides/Borders_and_box_decorations)模块
- [CSS 背景和边框](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders)模块
