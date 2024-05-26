---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

**`<mmultiscripts>`** 这个 [MathML](/zh-CN/docs/Web/MathML) 元素用于一次性将任意数量的下标和上标附加到表达式上，将 {{ MathMLElement("msubsup") }} 元素泛化。脚本可以是前置脚本（放置在表达式之前）或后置脚本（放置在表达式之后）。

MathML 使用以下语法，即一个基本表达式，后跟任意数量的后置下标 - 后置上标对（按给定顺序附加），可选择后跟一个 `<mprescripts>` 和任意数量的前置下标 - 前置上标对（按给定顺序附加）。此外，空的 `<mrow>` 元素可用于表示不存在的脚本。

```html-nolint
<mmultiscripts>
  base
  postsubscript1 postsuperscript1
  postsubscript2 postsuperscript2
  postsubscript3 postsuperscript3
  ...
  postsubscriptN postsuperscriptN
  <mprescripts/>                ⎫
  presubscript1 presuperscript1 ⎪
  presubscript2 presuperscript2 ⎬ Optional
  presubscript3 presuperscript3 ⎪
  ...                           ⎪
  presubscriptM presuperscriptM ⎭
</mmultiscripts>
```

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及以下已弃用的属性：

- `subscriptshift`：{{deprecated_inline}} {{Non-standard_Inline}}
  - : 表示将下标基线最小移动的量的 {{cssxref("length-percentage")}}。
- `superscriptshift`：{{deprecated_inline}} {{Non-standard_Inline}}
    - : 表示将上标基线最小移动的量的 {{cssxref("length-percentage")}}。

> **备注：** 对于 `subscriptshift` 和 `superscriptshift` 属性，一些浏览器可能还接受[遗留的 MathML 长度](/zh-CN/docs/Web/MathML/Values#legacy_mathml_lengths)。

## 示例

### 使用 `<mprescripts/>`

`<mprescripts/>` 元素后的子元素被放置为前置脚本（在基本表达式之前）。

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- base expression -->
    <mi>d</mi>      <!-- postsubscript -->
    <mi>c</mi>      <!-- postsuperscript -->
    <mprescripts />
    <mi>b</mi>      <!-- presubscript -->
    <mi>a</mi>      <!-- presuperscript -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('mprescripts示例', 700, 200, "", "") }}

### 空脚本

空的 `<mrow>` 元素可用于表示不存在的脚本。

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- base expression -->
    <mrow></mrow>   <!-- postsubscript -->
    <mi>c</mi>      <!-- postsuperscript -->
    <mprescripts />
    <mi>b</mi>      <!-- presubscript -->
    <mrow></mrow>   <!-- presuperscript -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('none 示例', 700, 200, "", "") }}

### 脚本的顺序

以下是一个更复杂的示例，其中包含许多脚本，以便你可以查看它们附加到基本表达式的顺序：

```html
<math display="block">
  <mmultiscripts>
    <mtext>base</mtext>
    <mtext>postsubscript1</mtext>
    <mtext>postsupscript1</mtext>
    <mtext>postsubscript2</mtext>
    <mtext>postsupscript2</mtext>
    <mtext>postsubscript3</mtext>
    <mtext>postsupscript3</mtext>
    <mtext>postsubscript4</mtext>
    <mtext>postsupscript4</mtext>
    <mprescripts />
    <mtext>presubscript1</mtext>
    <mtext>presupscript1</mtext>
    <mtext>presubscript2</mtext>
    <mtext>presupscript2</mtext>
    <mtext>presubscript3</mtext>
    <mtext>presupscript3</mtext>
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('order_of_scripts示例', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
