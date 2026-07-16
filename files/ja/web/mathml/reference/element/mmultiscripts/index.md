---
title: <mmultiscripts>
slug: Web/MathML/Reference/Element/mmultiscripts
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<mmultiscripts>`** は [MathML](/ja/docs/Web/MathML) の要素で、 {{ MathMLElement("msubsup") }} 要素を一般化して、式に任意の数の下付き添字と上付き添字を一度に付けるために使用されます。添字は、前置添字（式の**前**に配置）または後置添字（式の**後**に配置）のどちらかになります。

MathML 後置以下の構文を使用します。つまり、基本式に任意の数の後置下付き添字と後上付き添字の組（指定された順序で付加される）が続き、オプションで `<mprescripts>` と任意の数の前置下付き添字と前置上付き添字の組（指定された順序で付加される）が続きます。さらに、空の `<mrow>` 要素を使用して、存在しない添字を表すことができます。

```html-nolint
<mmultiscripts>
  base
  後置下付き添字1 後置上付き添字1
  後置下付き添字2 後置上付き添字2
  後置下付き添字3 後置上付き添字3
  ...
  後置下付き添字N 後置上付き添字N
  <mprescripts />               ⎫
  前置下付き添字1 前置上付き添字1 ⎪
  前置下付き添字2 前置上付き添字2 ⎬ オプション
  前置下付き添字3 前置上付き添字3 ⎪
  ...                           ⎪
  前置下付き添字M 前置上付き添字M ⎭
</mmultiscripts>
```

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)の他に以下の属性があります。

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : {{cssxref("length-percentage")}} で、式のベースラインより下付き添字を移動させる最小の空間を示します。
- `superscriptshift` {{deprecated_inline}}
  - : {{cssxref("length-percentage")}} で、式のベースライン上に上付き添字を移動させる最小の空間を示します。

> [!NOTE]
> `subscriptshift` 属性と `superscriptshift` 属性については、ブラウザーによっては [MathML における古い長さ](/ja/docs/Web/MathML/Reference/Values#mathml_における古い長さ)も受け付けます。

## 例

### `<mprescripts>` の使用

`<mprescripts>` 要素以降の子要素は前置添字（基底の式の前）として置かれます。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- 基底の式 -->
    <mi>a</mi> <!-- 後置下付き添字-->
    <mi>b</mi> <!-- 後置上付き添字 -->
    <mprescripts />
    <mi>c</mi> <!-- 前置下付き添字 -->
    <mi>d</mi> <!-- 前置上付き添字 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('using_mprescripts', 700, 200, "", "") }}

### 空の添字

空の `<mrow>` 要素を使用して、存在しない添字を表すことができます。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>    <!-- 基底の式 -->
    <mrow></mrow> <!-- 後置下付き添字 -->
    <mi>b</mi>    <!-- 後置上付き添字 -->
    <mprescripts />
    <mi>c</mi>    <!-- 前置下付き添字 -->
    <mrow></mrow> <!-- 前置上付き添字 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('empty_scripts', 700, 200, "", "") }}

### 添字の順序

ここでは、添字が多数含まれるより複雑な例を示します。これにより、添字が基底の式にどのような順序で添付されているかを確認できます。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- 基底の式 -->
    <mn>1</mn> <!-- 後置下付き添字-1 -->
    <mn>2</mn> <!-- 後置上付き添字-1 -->
    <mn>3</mn> <!-- 後置下付き添字-2 -->
    <mn>4</mn> <!-- 後置上付き添字-2 -->
    <mprescripts />
    <mn>5</mn> <!-- 前置下付き添字-1 -->
    <mn>6</mn> <!-- 前置上付き添字-1 -->
    <mn>7</mn> <!-- 前置下付き添字-2 -->
    <mn>8</mn> <!-- 前置上付き添字-2 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('order_of_scripts', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }}（下付き添字）
- {{ MathMLElement("msup") }}（上付き添字）
- {{ MathMLElement("msubsup") }}（下付き添字／上付き添字の組）
