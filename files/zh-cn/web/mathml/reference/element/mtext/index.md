---
title: <mtext>
slug: Web/MathML/Reference/Element/mtext
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`<mtext>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于呈现*没有*符号意义的任意文本，例如注释或注解。

若要显示具有符号意义的文本，请改用 {{ MathMLElement("mi") }}、{{ MathMLElement("mn") }}、{{ MathMLElement("mo") }} 或 {{ MathMLElement("ms") }}。

## 属性

该元素接受[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)。

## 示例

```html
<math display="block">
  <mtext>勾股定理</mtext>
</math>

<math display="block">
  <mtext>/* 在此注释 */</mtext>
</math>
```

{{ EmbedLiveSample('示例', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
