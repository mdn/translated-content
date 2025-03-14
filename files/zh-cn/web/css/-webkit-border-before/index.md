---
title: -webkit-border-before
slug: Web/CSS/-webkit-border-before
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

**`-webkit-border-before`** [CSS](/zh-CN/docs/Web/CSS) 属性是一个用于在样式表中统一设置逻辑块起始边框各属性值的简写属性。

## 组成属性

该属性是以下 CSS 属性的简写：

- {{cssxref("-webkit-border-before-color")}}
- {{cssxref("-webkit-border-before-style")}}
- {{cssxref("-webkit-border-before-width")}}

## 语法

```css
/* 边框值 */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* 全局值 */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: revert;
-webkit-border-before: revert-layer;
-webkit-border-before: unset;
```

### 值

以下一个或多个，顺序不限：

- `<'border-width'>`
  - : 参阅 {{cssxref("border-width")}}
- `<'border-style'>`
  - : 参阅 {{cssxref("border-style")}}
- `<'color'>`
  - : 参阅 {{cssxref("color")}}

## 描述

`-webkit-border-before` 属性根据元素的书写模式、方向性和文本方向映射到物理边框。它对应于 {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}} 或 {{cssxref("border-left")}} 属性，具体取决于为 {{cssxref("writing-mode")}}、{{cssxref("direction")}} 和 {{cssxref("text-orientation")}} 定义的值。

它与 {{cssxref("-webkit-border-after")}}、{{cssxref("-webkit-border-start")}} 和 {{cssxref("-webkit-border-end")}}（这些属性定义了元素的其他边框）相关。

该属性的标准跟踪等效属性是 {{cssxref("border-block-start")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

```plain
-webkit-border-before =
  <'border-width'> || <'border-style'> || <color>
```

## 示例

### 对垂直文本应用边框

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
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}
```

#### 结果

{{EmbedLiveSample("对垂直文本应用边框", 140, 140)}}

## 规范

不属于任何标准，但它与标准跟踪的 {{cssxref("border-block-start")}} 属性相关。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("border-block-start")}}
- 映射的物理属性：{{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}} 和 {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
