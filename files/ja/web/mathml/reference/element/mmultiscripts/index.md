---
title: <mmultiscripts>
slug: Web/MathML/Reference/Element/mmultiscripts
original_slug: Web/MathML/Element/mmultiscripts
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

**`<mmultiscripts>`** は [MathML](/ja/docs/Web/MathML) の要素で、 {{ MathMLElement("msubsup") }} 要素を一般化して、式に任意の数の下付き添え字と上付き添え字を一度に付けるために使用されます。スクリプトは、プレスクリプト（式の前に配置）またはポストスクリプト（式の後に配置）のいずれかになります。

MathML は以下の構文を使用します。つまり、基本式に任意の数の後下付き添え字と後上付き添え字の組（指定された順序で付加される）が続き、オプションで `<mprescripts>` と任意の数の前下付き添え字と前上付き添え字の組（指定された順序で付加される）が続きます。さらに、空の `<mrow>` 要素を使用して、存在しないスクリプトを表すことができます。

```html-nolint
<mmultiscripts>
  base
  後下付き添え字1 後上付き添え字1
  後下付き添え字2 後上付き添え字2
  後下付き添え字3 後上付き添え字3
  ...
  後下付き添え字N 後上付き添え字N
  <mprescripts/>                  ⎫
  前下付き添え字1 前上付き添え字1 ⎪
  前下付き添え字2 前上付き添え字2 ⎬ オプション
  前下付き添え字3 前上付き添え字3 ⎪
  ...                             ⎪
  前下付き添え字M 前上付き添え字M ⎭
</mmultiscripts>
```

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)の他に以下の属性があります。

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) で、式のベースラインより下に添字を移動させる最小の空間を示します。
- `superscriptshift` {{deprecated_inline}}
  - : [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) で、式のベースライン上に上付き文字を移動させる最小の空間を示します。

> [!NOTE]
> `subscriptsshift` 属性と `superscriptsshift` 属性については、ブラウザーによっては [MathML における古い長さ](/ja/docs/Web/MathML/Reference/Values#mathml_における古い長さ)も受け付けます。

## 例

### `<mprescripts/>` の使用

`<mprescripts/>` 要素以降の子要素はプレスクリプト（ベースとなる式の前）として置かれます。

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- 基部 -->
    <mi>d</mi>      <!-- 後の下付き文字-->
    <mi>c</mi>      <!-- 後の上付き文字 -->
    <mprescripts />
    <mi>b</mi>      <!-- 前の下付き文字 -->
    <mi>a</mi>      <!-- 前の上付き文字 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('mprescripts_example', 700, 200, "", "") }}

### `<none/> の使い方`

空の `<mrow>` 要素は、スクリプトがないことを表します。

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- 基部 -->
    <mrow></mrow>   <!-- 後の下付き文字 -->
    <mi>c</mi>      <!-- 後の上付き文字 -->
    <mprescripts />
    <mi>b</mi>      <!-- 前の下付き文字 -->
    <mrow></mrow>   <!-- 前の上付き文字 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('none_example', 700, 200, "", "") }}

### スクリプトの順序

ここでは、より複雑なスクリプトの例をいくつか紹介しますので、スクリプトがどのような順番でベースに添付されるかをご覧ください。

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

{{ EmbedLiveSample('order_of_scripts_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }}（下付き）
- {{ MathMLElement("msup") }}（上付き）
- {{ MathMLElement("msubsup") }}（下付き／上付きの組）
