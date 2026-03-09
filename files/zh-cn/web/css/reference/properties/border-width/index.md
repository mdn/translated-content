---
title: border-width
slug: Web/CSS/border-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的宽度。它是一个简写属性，可以同时设置元素四个方向的宽度。

{{InteractiveExample("CSS Demo: border-width")}}

## Syntax
```css
/* 标准语法 */
border-width: value;
/* 全局值 */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

### Values
根据属性不同，支持对应的值类型。

## Formal definition
{{CSSInfo}}

## Formal syntax
{{csssyntax}}

## Examples
### 基础示例
#### HTML
```html
<div class="box">示例元素</div>
```

#### CSS
```css
.box {
  border-width: value;
}
```

#### Result
{{EmbedLiveSample('Examples')}}

## 无障碍建议
该属性本身不会对视力障碍用户造成特殊影响，但如果用于表示交互状态，建议同时添加文本说明。

## Specifications
{{Specifications}}

## 浏览器兼容性
{{Compat}}

## 参见
- 相关属性文档
