---
title: border-left-color
slug: Web/CSS/border-left-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的[左边框](/zh-CN/docs/Web/CSS/border)颜色。也可以通过简写属性 {{cssxref("border-color")}} 或 {{cssxref("border-left")}} 来设置该属性。

{{InteractiveExample("CSS Demo: border-left-color")}}

```css interactive-example-choice
border-left-color: red;
```

```css interactive-example-choice
border-left-color: #32a1ce;
```

```css interactive-example-choice
border-left-color: rgba(180, 222, 100, 0.5);
```

## Syntax
```css
/* <color> 值 */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255, 0, 0);
border-left-color: hsla(100%, 50%, 25%, 0.75);
border-left-color: currentcolor;
border-left-color: transparent;

/* 全局值 */
border-left-color: inherit;
border-left-color: initial;
border-left-color: revert;
border-left-color: revert-layer;
border-left-color: unset;
```

### Values
- {{cssxref("&lt;color&gt;")}}：表示左边框的颜色。

## Formal definition
{{CSSInfo}}

## Formal syntax
{{csssyntax}}

## Examples
### 简单边框示例
#### HTML
```html
<div class="box">
  <p class="red-border">左边红色边框的段落。</p>
  <p class="blue-border">左边蓝色边框的段落。</p>
</div>
```

#### CSS
```css
.box {
  border-width: 0.5rem;
  border-style: solid;
}

.red-border {
  border-left-color: red;
}

.blue-border {
  border-left-color: blue;
}
```

#### Result
{{EmbedLiveSample('Examples')}}

## 无障碍建议
边框颜色本身不会对视力障碍用户造成特殊影响，但如果边框用于表示交互元素或者分隔内容，建议添加足够的对比度和语义标识，确保屏幕阅读器用户能够理解边框所表示的含义。

## Specifications
{{Specifications}}

## 浏览器兼容性
{{Compat}}

## 参见
- 边框相关的简写属性：{{cssxref("border")}}、{{cssxref("border-left")}}、{{cssxref("border-color")}}
- 其他边框颜色属性：{{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}}
