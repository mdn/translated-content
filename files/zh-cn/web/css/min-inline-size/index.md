---
title: min-inline-size
slug: Web/CSS/min-inline-size
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`min-inline-size`** 根据元素的书写模式定义了元素块的水平或竖直最小尺寸。根据 {{CSSXref("writing-mode")}} 的值，此属性对应于 {{CSSXref("min-width")}} 或 {{CSSXref("min-height")}} 属性。

{{EmbedInteractiveExample("pages/css/min-inline-size.html")}}

## 语法

```css
/* 长度值 */
min-inline-size: 100px;
min-inline-size: 5em;

/* 百分比值 */
min-inline-size: 10%;

/* 关键词值 */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content(20em);

/* 全局值 */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

若书写模式为竖直朝向，则 `min-inline-size` 的值对应于元素的最小高度；否则对应于元素的最小宽度。与此相关的属性为 {{CSSXref("min-block-size")}}，此属性定义了元素另一方向的尺度。

### 取值

`min-inline-size` 属性的取值与 {{CSSXref("min-width")}} 和 {{CSSXref("min-height")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为竖排文本设置最小行向尺寸

#### HTML

```html
<p class="exampleText">示例文本</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### 结果

{{EmbedLiveSample("为竖排文本设置最小行向尺寸")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 对应的实体属性：{{CSSXref("min-width")}} 和 {{CSSXref("min-height")}}
- {{CSSXref("writing-mode")}}
