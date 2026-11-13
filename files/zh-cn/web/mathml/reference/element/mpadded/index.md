---
title: <mpadded>
slug: Web/MathML/Reference/Element/mpadded
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mpadded>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于添加额外的内边距，并设置封闭内容的位置和大小的一般调整。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)以及以下属性：

- `depth`
  - : 一个 {{cssxref("length-percentage")}}，指示 `<mpadded>` 元素的期望深度（基线以下）。
- `height`
  - : 一个 {{cssxref("length-percentage")}}，指示 `<mpadded>` 元素的期望高度（基线以上）。
- `lspace`
  - : 一个 {{cssxref("length-percentage")}}，指示子内容的定位点相对于 `<mpadded>` 元素的定位点的水平位置。
- `voffset`
  - : 一个 {{cssxref("length-percentage")}}，指示子内容的定位点相对于 `<mpadded>` 元素的定位点的垂直位置。
- `width`
  - : 一个 {{cssxref("length-percentage")}}，指示 `<mpadded>` 元素的期望水平长度。

### 旧版语法

对于 `depth`、`height`、`lspace`、`voffset` 和 `width` 属性，一些浏览器可能接受更复杂的语法：

1. 可选的 `+` 或 `-` 符号作为前缀，指定对应维度的增量或减量（如果缺失，则对应维度直接设置为指定值）。
2. 后跟一个 [`<unsigned-number>`](/zh-CN/docs/Web/MathML/Reference/Values#mathml_特定类型)（下面称为 α）。
3. 可选地跟随一个值（如果缺失，则指定值被解释为“α 的百分比的 100 倍”）。
   - 一个[单位](/zh-CN/docs/Web/MathML/Reference/Values#单位)。指定值的解释方式与旧版 MathML 长度相同。
   - 一个[命名空间常量](/zh-CN/docs/Web/MathML/Reference/Values#常数)。指定值被解释为 α 乘以常量。
   - 一个伪单位 `width`、`height` 或 `depth`。指定值被解释为内容的对应维度的 α 倍。
   - 一个百分号后跟伪单位 `width`、`height` 或 `depth`。指定值被解释为内容的对应维度的 α%。

## 示例

### 尺寸和偏移

```html-nolint
<math display="block">
  <mpadded width="400px" height="5em" depth="4em"
           lspace="300px" voffset="-2em"
           style="background: lightblue">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mpadded>
</math>
```

{{ EmbedLiveSample('尺寸和偏移', 700, 200) }}

### 旧版语法

```html
<math display="block">
  <!-- 增加一定的长度 -->
  <mpadded width="+20px" style="background: lightblue">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- 设定为伪单位 -->
  <mpadded width="2width" style="background: lightgreen">
    <mtext>2width</mtext>
  </mpadded>

  <!-- 以伪单位的百分比增加 -->
  <mpadded width="+400%height" style="background: lightyellow">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- 递减至命名空间的倍数 -->
  <mpadded width="-1thickmathspace" style="background: pink">
    <mtext>-.5thickmathspace</mtext>
  </mpadded>
</math>
```

{{ EmbedLiveSample('旧版语法_2', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
