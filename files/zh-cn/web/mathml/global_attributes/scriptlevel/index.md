---
title: scriptlevel
slug: Web/MathML/Global_attributes/scriptlevel
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

**`scriptlevel`** [全局属性](/zh-CN/docs/Web/MathML/Global_attributes)设置 MathML 元素的[数学深度](/zh-CN/docs/Web/CSS/math-depth)。它允许覆盖[用户代理样式表](/zh-CN/docs/Web/CSS/Cascade#用户代理样式表)中定义的在 MathML 公式中自动计算[字体大小](/zh-CN/docs/Web/CSS/font-size)的规则。

## 示例

```html
<!-- math-depth 在 <math> 根元素上默认为 0。 -->
<math style="font-size: 64pt">
  <msubsup>
    <!-- base 上的 math-depth 和 font-size 保持不变。 -->
    <mtext>BASE</mtext>
    <!-- math-depth 在下标中默认为 add(1)，因此增加了 1，字体大小缩小了一次。 -->
    <mtext>SUBSCRIPT</mtext>
    <!-- 上标中的 math-depth 也默认为 add(1)，但 scriptlevel 属性告诉它增加 2，因此实际上字体大小缩小了两次。 -->
    <mtext scriptlevel="+2">SUPERSCRIPT</mtext>
  </msubsup>
</math>
```

## 语法

```html-nolint
<math scriptlevel="-1"> <!-- 将 math-depth 减小 1 -->
<math scriptlevel="+2"> <!-- 将 math-depth 增加 2 -->
<math scriptlevel="0"> <!-- 重置 math-depth 为 0 -->
```

### 值

如果 `<U>` 是一个无符号[整数](/zh-CN/docs/Web/CSS/integer)（即移除了前缀符号的整数），则接受的值为：

- `<U>`
  - : 将 math-depth 设置为值 `<U>`。这将使元素的 `font-size` 与指定深度的元素的字体大小相同。
- `+<U>`
  - : 将 `math-depth` 设置为值 `add(<U>)`。这将使元素的 `font-size` 缩小 `<U>` 次。
- `-<U>`
  - : 将 `math-depth` 设置为值 `add(-<U>)`。这将使元素的 `font-size` 放大 `<U>` 次。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Global_attributes)
- [displaystyle](/zh-CN/docs/Web/MathML/Global_attributes/displaystyle) 全局属性
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
