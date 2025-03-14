---
title: <mmultiscripts>
slug: Web/MathML/Reference/Element/mmultiscripts
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mmultiscripts>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于一次性将任意数量的下标和上标附加到表达式上，将 {{ MathMLElement("msubsup") }} 元素泛化。附加符号可以是前置的附加符号（放置在表达式之前）或后置的附加符号（放置在表达式之后）。

MathML 使用以下语法，即一个基本表达式，后跟任意数量的后置下标—后置上标对（按给定顺序附加），可选择后跟一个 `<mprescripts>` 和任意数量的前置下标—前置上标对（按给定顺序附加）。此外，空的 `<mrow>` 元素可用于表示不存在的脚本。

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
  presubscript2 presuperscript2 ⎬ 可选
  presubscript3 presuperscript3 ⎪
  ...                           ⎪
  presubscriptM presuperscriptM ⎭
</mmultiscripts>
```

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)以及以下已弃用的属性：

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 表示将下标基线向下移动的最小量的 {{cssxref("length-percentage")}}。
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 表示将上标基线向上移动的最小量的 {{cssxref("length-percentage")}}。

> [!NOTE]
> 对于 `subscriptshift` 和 `superscriptshift` 属性，一些浏览器可能还接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Reference/Values#旧版_mathml_长度)。

## 示例

### 使用 `<mprescripts/>`

`<mprescripts/>` 元素后的子元素被放置为前置附加符号（在基本表达式之前）。

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- 基本表达式 -->
    <mi>d</mi>      <!-- 后下标 -->
    <mi>c</mi>      <!-- 后上标 -->
    <mprescripts />
    <mi>b</mi>      <!-- 前下标 -->
    <mi>a</mi>      <!-- 前上标 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('使用 `<mprescripts/>`', 700, 200) }}

### 空附加符号

空的 `<mrow>` 元素可用于表示不存在的附加符号。

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- 基本表达式 -->
    <mrow></mrow>   <!-- 后下标 -->
    <mi>c</mi>      <!-- 后上标 -->
    <mprescripts />
    <mi>b</mi>      <!-- 前下标 -->
    <mrow></mrow>   <!-- 前上标 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('空附加符号', 700, 200) }}

### 附加符号的顺序

以下是一个更复杂的示例，其中包含许多附加符号，以便你可以查看它们附加到基本表达式的顺序：

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

{{ EmbedLiveSample('附加符号的顺序', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("msub") }}（下标）
- {{ MathMLElement("msup") }}（上标）
- {{ MathMLElement("msubsup") }}（上下标对）
