---
title: <merror>
slug: Web/MathML/Element/merror
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

**`<merror>`** [MathML](/zh-CN/docs/Web/MathML)元素用于将内容显示为错误消息。该元素的目的是为从其他输入生成 MathML 的程序提供一种标准方法来报告语法错误。

## 属性

该元素接受[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)。

## 示例

在以下示例中，`<merror>` 用于指示一些类似 LaTeX 的输入的解析错误：

```html
<math display="block">
  <mfrac>
    <merror>
      <mtext>Syntax error: \frac{1}</mtext>
    </merror>
    <mn>3</mn>
  </mfrac>
</math>
```

{{ EmbedLiveSample('merror 示例', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
