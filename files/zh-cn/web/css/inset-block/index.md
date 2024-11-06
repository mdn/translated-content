---
title: inset-block
slug: Web/CSS/inset-block
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`inset-block`** 定义了元素的逻辑块首和块末偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("top")}} 和 {{CSSXref("bottom")}}，或者 {{CSSXref("right")}} 和 {{CSSXref("left")}} 属性。

{{EmbedInteractiveExample("pages/css/inset-block.html")}}

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("inset-block-end")}}
- {{CSSXref("inset-block-start")}}

## 语法

```css
/* 长度值 */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* 应用于块首和块末 */

/* 包含块的宽度或高度的百分比 */
inset-block: 10% 5%;

/* 关键词值 */
inset-block: auto;

/* 全局值 */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

### 取值

`inset-block` 属性的取值与 {{CSSXref("left")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置块首和块末偏移

#### HTML

```html
<div>
  <p class="exampleText">示例文本</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("设置块首和块末偏移", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 对应的实体属性：{{CSSXref("top")}}、{{CSSXref("right")}}、{{CSSXref("bottom")}} 和 {{CSSXref("left")}}
- 对应的实体简写属性：{{CSSXref("inset")}}
- 对应的行向简写属性：{{CSSXref("inset-inline")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
