---
title: inset-block-end
slug: Web/CSS/inset-block-end
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`inset-block-end`** 定义了元素的逻辑块末偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("top")}}、{{CSSXref("right")}}、{{CSSXref("bottom")}} 或 {{CSSXref("left")}} 属性。

{{EmbedInteractiveExample("pages/css/inset-block-end.html")}}

## 语法

```css
/* 长度值 */
inset-block-end: 3px;
inset-block-end: 2.4em;

/* 包含块的宽度或高度的百分比 */
inset-block-end: 10%;

/* 关键词值 */
inset-block-end: auto;

/* 全局值 */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: revert;
inset-block-end: revert-layer;
inset-block-end: unset;
```

### 取值

`inset-block-end` 属性的取值与 {{CSSXref("left")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置块末偏移

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
  position: relative;
  inset-block-end: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("设置块末偏移", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义其他偏移的属性：{{CSSXref("inset-block-start")}}、{{CSSXref("inset-inline-start")}} 和 {{CSSXref("inset-inline-end")}}
- 对应的实体属性：{{CSSXref("top")}}、{{CSSXref("right")}}、{{CSSXref("bottom")}} 和 {{CSSXref("left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
