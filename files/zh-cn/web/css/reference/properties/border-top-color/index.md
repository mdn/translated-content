---
title: border-top-color
slug: Web/CSS/border-top-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的[上边框](/zh-CN/docs/Web/CSS/border)颜色。也可以通过简写属性 {{cssxref("border-color")}} 或 {{cssxref("border-top")}} 来设置该属性。

{{InteractiveExample("CSS Demo: border-top-color")}}

```css interactive-example-choice
border-top-color: red;
```

```css interactive-example-choice
border-top-color: #32a1ce;
```

```css interactive-example-choice
border-top-color: rgba(180, 222, 100, 0.5);
```

## Syntax
```css
/* <color> 值 */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentcolor;
border-top-color: transparent;

/* 全局值 */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

### Values
- {{cssxref("&lt;color&gt;")}}：表示上边框的颜色。

## Formal definition
{{CSSInfo}}

## Formal syntax
{{csssyntax}}

## Examples
### 简单边框示例
#### HTML
```html
<div class="box">
  <p class="red-border">顶部红色边框的段落。</p>
  <p class="blue-border">顶部蓝色边框的段落。</p>
</div>
```

#### CSS
```css
.box {
  border-width: 0.5rem;
  border-style: solid;
}

.red-border {
  border-top-color: red;
}

.blue-border {
  border-top-color: blue;
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
- 边框相关的简写属性：{{cssxref("border")}}、{{cssxref("border-top")}}、{{cssxref("border-color")}}
- 其他边框颜色属性：{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}}
