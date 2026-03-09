---
title: background-clip
slug: Web/CSS/background-clip
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的背景裁剪。它是一个简写属性，可以同时设置元素四个方向的背景裁剪。

{{InteractiveExample("CSS Demo: background-clip")}}

## Syntax
```css
/* 标准语法 */
background-clip: value;
/* 全局值 */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
background-clip: revert-layer;
background-clip: unset;
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
  background-clip: value;
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
