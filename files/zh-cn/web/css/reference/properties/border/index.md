---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的所有边框属性，是 border-width、border-style、border-color 的简写属性。它是一个简写属性，可以同时设置元素四个方向的边框。

{{InteractiveExample("CSS Demo: border")}}

## Syntax
```css
/* 标准语法 */
border: value;
/* 全局值 */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
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
  border: value;
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
