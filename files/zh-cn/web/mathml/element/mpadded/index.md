---
title: <mpadded>
slug: Web/MathML/Element/mpadded
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

**`<mpadded>`** 这个 [MathML](/zh-CN/docs/Web/MathML) 元素用于添加额外的填充，并设置封闭内容的位置和大小的一般调整。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及以下属性：

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
2. 后跟一个 [`<unsigned-number>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)（下面称为 α）。
3. 可选地跟随一个值（如果缺失，则指定值被解释为“α 的百分比的 100 倍”）。
    - 一个[unit](/zh-CN/docs/Web/MathML/Values#units)。指定值的解释方式与旧版 MathML 长度相同。
    - 一个[namedspace constant](/zh-CN/docs/Web/MathML/Values#constants)。指定值被解释为α乘以常量。
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

{{ EmbedLiveSample('dimensions_and_offsets_example', 700, 200, "", "") }}

### 旧版语法

```html
<math display="block">
  <!-- increment by a length -->
  <mpadded width="+20px" style="background: lightblue">
    <mtext>+20px</mtext>
  </mpadded>

  <!-- set to a pseudo-unit -->
  <mpadded width="2width" style="background: lightgreen">
    <mtext>2width</mtext>
  </mpadded>

  <!-- increment by a percent of a pseudo-unit -->
  <mpadded width="+400%height" style="background: lightyellow">
    <mtext>+400%height</mtext>
  </mpadded>

  <!-- decrement to a multiple of a namedspace -->
  <mpadded width="-1thickmathspace" style="background: pink">
    <mtext>-.5thickmathspace</mtext>
  </mpadded>
</math>
```

{{ EmbedLiveSample('legacy_syntax_example', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
