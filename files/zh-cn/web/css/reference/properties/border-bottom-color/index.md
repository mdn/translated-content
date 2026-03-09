---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的[下边框](/zh-CN/docs/Web/CSS/border)颜色。也可以通过简写属性 {{cssxref("border-color")}} 或 {{cssxref("border-bottom")}} 来设置该属性。

{{InteractiveExample("CSS Demo: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgba(180, 222, 100, 0.5);
```

## Syntax
```css
/* <color> 值 */
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255, 0, 0);
border-bottom-color: hsla(100%, 50%, 25%, 0.75);
border-bottom-color: currentcolor;
border-bottom-color: transparent;

/* 全局值 */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: revert;
border-bottom-color: revert-layer;
border-bottom-color: unset;
```

### Values
- {{cssxref("&lt;color&gt;")}}：表示下边框的颜色。

## Formal definition
{{CSSInfo}}

## Formal syntax
{{csssyntax}}

## Examples
### 简单边框示例
#### HTML
```html
<div class="box">
  <p class="red-border">下边红色边框的段落。</p>
  <p class="blue-border">下边蓝色边框的段落。</p>
</div>
```

#### CSS
```css
.box {
  border-width: 0.5rem;
  border-style: solid;
}

.red-border {
  border-bottom-color: red;
}

.blue-border {
  border-bottom-color: blue;
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
- 边框相关的简写属性：{{cssxref("border")}}、{{cssxref("border-bottom")}}、{{cssxref("border-color")}}
- 其他边框颜色属性：{{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}}
