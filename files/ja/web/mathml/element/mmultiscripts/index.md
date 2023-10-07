---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
l10n:
  sourceCommit: d3a04bcdd16434b613b132fb488235ce44355891
---

{{MathMLRef}}

MathML の `<mmultiscripts>` 要素によって、テンソル的なものを作ることができます。見た目は、 [テンソル](https://ja.wikipedia.org/wiki/テンソル) は多次元の行列です（数学的には不正確だが喩えて言えば）。テンソルの階数は、それを表す配列の次元によって決まります。例えば、数は 0 次元の配列であり、0 階のテンソルです。1 次元配列（つまりベクトル）は 1 階のテンソルです。同様に、2 階のテンソルは四角い行列で表すことになります。テンソルの数学的背景についてもっと知りたければ、 [ウィキペディアの記事](https://ja.wikipedia.org/wiki/テンソル) を参照してください。

MathML は、基部 'base expression) に対する後付け (postscripts) および前付け (prescripts) の下付き／上付きの添字を表すために次のような特定の構文を使います。

```html
<mmultiscripts>
  base (下付き文字 上付き文字)* [ <mprescripts /> (前の下付き文字
  前の上付き文字)* ]
</mmultiscripts>
```

基部のあとに後付けの下付き添字と後付けの上付き添字を指定することができます。前付けは任意で、空タグ `<mprescripts/>` で区切って置きます（\<mprescripts /> 要素は一つしか置くことができず、これを破ると `DuplicateMprescripts` エラーが[エラーコンソール](/ja/docs/Error_Console)に報告され、表示は "invalid-markup" となります）。また、空の添字にはプレースホルダーとして `<none/>` を置くことができます（基部には使えません）。正しい使い方は例をご覧ください。

## 属性

この要素の属性には [MathML のグローバル属性](/ja/docs/Web/MathML/Global_attributes)があります。

- `subscriptshift` {{deprecated_inline}}
  - : 式のベースラインより下に添字を移動させる最小の空間を、 [CSS 長](/ja/docs/Web/CSS/length)で指定します。
- `superscriptshift` {{deprecated_inline}}
  - : 式のベースライン上に上付き文字を移動させる最小の空間、 [CSS 長](/ja/docs/Web/CSS/length)で指定します。

## 例

### `<mprescripts/>` の使い方

表示例: ![](mmultiscripts_prescripts.png)

このブラウザーでの表示: <math><mmultiscripts><mi>X</mi> <mi>d</mi> <mi>c</mi> <mprescripts></mprescripts><mi>b</mi> <mi>a</mi></mmultiscripts></math>

```html
<math>
  <mmultiscripts>
    <mi>X</mi>
    <!-- 基部 -->

    <mi>d</mi>
    <!-- 後の下付き文字-->
    <mi>c</mi>
    <!-- 後の上付き文字 -->

    <mprescripts />
    <mi>b</mi>
    <!-- 前の下付き文字 -->
    <mi>a</mi>
    <!-- 前の上付き文字 -->
  </mmultiscripts>
</math>
```

### `<none/> の使い方`

表示例: ![](mmultiscripts_none.png)

このブラウザーでの表示: <math><mmultiscripts><mi>X</mi>
<none></none><mi>c</mi>
<mprescripts></mprescripts><mi>b</mi><none></none></mmultiscripts></math>

```html
<math>
  <mmultiscripts>
    <mi>X</mi>
    <!-- 基部 -->

    <none />
    <!-- 後の下付き文字-->
    <mi>c</mi>
    <!-- 後の上付き文字 -->

    <mprescripts />
    <mi>b</mi>
    <!-- 前の下付き文字 -->
    <none />
    <!-- 前の上付き文字 -->
  </mmultiscripts>
</math>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ MathMLElement("msub") }}（下付き）
- {{ MathMLElement("msup") }}（上付き）
- {{ MathMLElement("msubsup") }}（下付き／上付きの組）
