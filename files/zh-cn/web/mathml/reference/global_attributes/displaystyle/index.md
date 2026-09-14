---
title: displaystyle
slug: Web/MathML/Reference/Global_attributes/displaystyle
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`displaystyle`** [全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)是一个用于设置 MathML 元素的 [math-style](/zh-CN/docs/Web/CSS/Reference/Properties/math-style) 的布尔值。

## 示例

在这个示例中，使用 [munder](/zh-CN/docs/Web/MathML/Reference/Element/munder) 元素将脚本“A”附加到基础的“∑”上。默认情况下，求和符号是以从其父元素继承的[字体大小](/zh-CN/docs/Web/CSS/Reference/Properties/font-size)渲染的，并且 A 作为缩小的下标。通过显式设置 `displaystyle="true"` 属性，求和符号将会变大，并且“A”变成一个下标。

```html
<math>
  <munder>
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
  <munder displaystyle="true">
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
</math>
```

## 语法

```html-nolint
<math displaystyle="true"></math>
<math displaystyle="false"></math>
```

### 值

- `true`
  - : 将显示样式设置为 `normal`。
- `false`
  - : 将显示样式设置为 `compact`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)
- [scriptlevel](/zh-CN/docs/Web/MathML/Reference/Global_attributes/scriptlevel) 全局属性
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
