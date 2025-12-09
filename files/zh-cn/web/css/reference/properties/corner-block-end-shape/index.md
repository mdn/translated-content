---
title: corner-block-end-shape
slug: Web/CSS/Reference/Properties/corner-block-end-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`corner-block-end-shape`** [CSS](/zh-CN/docs/Web/CSS) 属性用于指定盒子块末边上两个边角在 {{cssxref("border-radius")}} 区域内的边角形状。

关于边角形状行为的完整说明及更多示例，请参阅 {{cssxref("corner-shape")}} 简写属性页面。

## 组成属性

`corner-block-end-shape` 属性是以下物理属性的简写形式：

- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-end-end-shape")}}

## 语法

```css
/* 为两个边角同时设置单个关键字值 */
corner-block-end-shape: square;
corner-block-end-shape: scoop;

/* 为两个边角同时设置单个 superellipse() 值 */
corner-block-end-shape: superellipse(3.5);
corner-block-end-shape: superellipse(-1.9);

/* 块末/行首边角、块末/行末边角 */
corner-block-end-shape: square scoop;
corner-block-end-shape: square superellipse(-1.9);

/* 全局值 */
corner-block-end-shape: inherit;
corner-block-end-shape: initial;
corner-block-end-shape: revert;
corner-block-end-shape: revert-layer;
corner-block-end-shape: unset;
```

### 值

`corner-block-end-shape` 属性使用一个或两个 {{cssxref("&lt;corner-shape-value>")}} 值进行指定：

- 使用**一个值**时该值会应用于**两个块末**边角。
- 使用**两个值**时，第一个值应用于**块末/行首**边角，第二个值应用于**块末/行末**边角。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

你可以在 {{cssxref("corner-shape")}} 参考页面找到更多相关示例。

### 基础 `corner-block-end-shape` 用法

#### HTML

此示例的标记包含一个 {{htmlelement("div")}} 元素。

```html live-sample___basic-usage
<div></div>
```

#### CSS

我们为这个盒子设置了一些基础样式（为简洁起见未在示例中展示）。此外，我们还应用了 {{cssxref("box-shadow")}}，将 `border-radius` 设为 `80px / 40px`，并将 `corner-block-end-shape` 设置为 `notch square`。

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
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
  border-radius: 80px / 40px;
  corner-block-end-shape: notch square;
}
```

#### 结果

渲染后的效果如下所示：

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("corner-shape")}} 简写属性
- {{cssxref("corner-block-start-shape")}}、{{cssxref("corner-inline-start-shape")}} 和 {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}、{{cssxref("corner-bottom-shape")}}、{{cssxref("corner-left-shape")}} 和 {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} 简写属性
- {{cssxref("border-end-start-radius")}} 和 {{cssxref("border-end-end-radius")}}
- [CSS 边框和盒子装饰](/zh-CN/docs/Web/CSS/Guides/Borders_and_box_decorations)模块
- [CSS 背景和边框](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders)模块
