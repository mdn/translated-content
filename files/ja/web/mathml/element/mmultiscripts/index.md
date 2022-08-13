---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
translation_of: Web/MathML/Element/mmultiscripts
---
{{MathMLRef}}

MathML の `<mmultiscripts>` 要素によって、テンソル的なものを作ることができます。見た目は、 [テンソル](http://ja.wikipedia.org/wiki/テンソル) は多次元の行列です（数学的には不正確だが喩えて言えば）。テンソルの階数は、それを表す配列の次元によって決まります。例えば、数は 0 次元の配列であり、0 階のテンソルです。1 次元配列（つまり数ベクトル）は 1 階のテンソルです。同様に、2 階のテンソルは四角い行列（訳注：ふつうの意味での行列のこと）で表すことになります。テンソルの数学的背景についてもっと知りたければ、 [ウィキペディアの記事](http://ja.wikipedia.org/wiki/テンソル) を参照してください。

MathML は、基部（base expression）に対する後付け（postscripts）および前付け（prescripts）の下付き／上付きの添字を表すために次のような特定の構文を使います：

    <mmultiscripts>
        base
         (subscript superscript)*
         [ <mprescripts/> (presubscript presuperscript)* ]
    </mmultiscripts>

基部のあとに後付けの下付き添字と後付けの上付き添字を指定することができます（訳注：下付き／上付きの組は 2 個以上繰り返すこともできる）。前付けは任意で、空タグ `<mprescripts/>` で区切って置きます（\<mprescripts /> 要素は一つしか置くことができず、これを破ると [エラーコンソール](/ja/docs/Error_Console "/en-US/docs/Error_Console") で `DuplicateMprescripts` エラーとなり、表示は "invalid-markup" となります）。また、空の添字にはプレースホルダーとして `<none/>` を置くことができます（基部には使えません）。正しい使い方は例をご覧ください。

## 属性

- class, id, style
  - : Provided for use with [stylesheets](/ja/docs/CSS).
- href
  - : 特定の URI へのハイパーリンクをセットするのに使います。
- mathbackground
  - : 背景色。`#rgb`, `#rrggbb` および [HTML color names](/ja/docs/CSS/color_value#Color_Keywords) が使えます。
- mathcolor
  - : 文字色。`#rgb`, `#rrggbb` および [HTML color names](/ja/docs/CSS/color_value#Color_Keywords) が使えます。
- subscriptshift
  - : The minimum space by which to shift the subscript below the baseline of the expression, as a [CSS length](/ja/docs/CSS/length).
- superscriptshift
  - : The minimum space by which to shift the superscript above the baseline of the expression, as a [CSS length](/ja/docs/CSS/length).

## 例

### `<mprescripts/> の使い方`

Sample rendering: ![](/files/3223/mmultiscripts_prescripts.png)

Rendering in your browser: <math><mmultiscripts><mi>X</mi> <mi>d</mi> <mi>c</mi> <mprescripts></mprescripts><mi>b</mi> <mi>a</mi></mmultiscripts></math>

```html
<math>

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

### `<none/> の使い方`

Sample rendering: ![](/files/3222/mmultiscripts_none.png)

Rendering in your browser: <math><mmultiscripts><mi>X</mi> <none></none><mi>c</mi> <mprescripts></mprescripts><mi>b</mi><none></none></mmultiscripts></math>

```html
<math>

    <mmultiscripts>

        <mi>X</mi>      <!-- base expression -->

        <none />        <!-- postsubscript -->
        <mi>c</mi>      <!-- postsuperscript -->

        <mprescripts />
        <mi>b</mi>      <!-- presubscript -->
        <none />        <!-- presuperscript -->

    </mmultiscripts>

</math>
```

## 仕様

| Specification                                                                                            | Status                       | Comment               |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mmultiscripts', 'mmultiscripts') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter3.html#presm.mmultiscripts', 'mmultiscripts') }} | {{ Spec2('MathML2') }} | Initial specification |

## ブラウザ実装状況

{{Compat("mathml.elements.mmultiscripts")}}

## Gecko-specific notes

- Starting with Gecko 26.0 {{geckoRelease("26")}} it is no longer possible to use `<none />` as the base element. The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msup")}} and {{MathMLElement("msubsup")}}. A bug with the incorrect application of `subscriptshift` and `superscriptshift` attributes has been fixed (see {{bug("827713")}} for details).

## See also

- {{ MathMLElement("msub") }}（下付き）
- {{ MathMLElement("msup") }}（上付き）
- {{ MathMLElement("msubsup") }}（下付き／上付きの組）
