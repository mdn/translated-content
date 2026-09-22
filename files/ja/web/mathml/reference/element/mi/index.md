---
title: <mi>
slug: Web/MathML/Reference/Element/mi
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

**`<mi>`** は [MathML](/ja/docs/Web/MathML) の要素で、内容を関数名、変数、記号定数などの**識別子**としてレンダリングすべきであることを示します。

デフォルトで、複数の文字を含む `<mi>` 要素は通常のテキストとしてレンダリングされますが、単一の文字を含む要素はイタリック体としてレンダリングされます。これは、CSS の {{cssxref("text-transform")}} プロパティの値を `math-auto` に設定した場合と同じ動作です。
`mathvariant` 属性の値を `normal` に設定することで、単一の文字を含む要素を通常のフォントにリセットすることができます。

具体的な書体の文字、例えば太字・斜体、セリフ体、サンセリフ体、筆記体・カリグラフィー体、等幅フォント、二重線などを使用するには、適切な[数学用英数字記号](https://ja.wikipedia.org/wiki/数学用英数字記号)を使用してください。

> [!NOTE]
> 以前の仕様 (MathML3) では、`mathvariant` 属性を使用して、数学的な英数字記号の文字書式化を適用できる論理クラスを定義していました。
> これに関連付けられた値は現在非推奨となっており、今後のリリースでブラウザーから除去される見込みです。

## 属性

- `mathvariant`
  - : 現在の仕様で許可されている値は `normal` （大文字と小文字を区別しない）のみです。
    - `normal`
      - : デフォルト／通常のレンダリングを使用し、単一の文字に対して自動的にイタリック体になるスタイル設定を除去します。

    非推奨となった古い値は以下の通りです。
    - `bold` {{deprecated_inline}}
      - : 太字の文字を試行し使用します。例: "𝐀"
    - `italic` {{deprecated_inline}}
      - : イタリック体の文字を試行し使用します。例: "𝐴"
    - `bold-italic` {{deprecated_inline}}
      - : 太字のイタリック体の文字を試行し使用します。例: "𝑨"
    - `double-struck` {{deprecated_inline}}
      - : 二重の文字を試行し使用します。例: "𝔸"
    - `bold-fraktur` {{deprecated_inline}}
      - : 太字のフラクトゥール体の文字を試行し使用します。例: "𝕬"
    - `script` {{deprecated_inline}}
      - : 筆記体の文字を試行し使用します。例: "𝒜"
    - `bold-script` {{deprecated_inline}}
      - : 太字の筆記体の文字を試行し使用します。例: "𝓐"
    - `fraktur` {{deprecated_inline}}
      - : フラクトゥール体の文字を試行し使用します。例: "𝔄"
    - `sans-serif` {{deprecated_inline}}
      - : サンセリフ体の文字を試行し使用します。例: "𝖠"
    - `bold-sans-serif` {{deprecated_inline}}
      - : 太字のサンセリフ体の文字を試行し使用します。例: "𝗔"
    - `sans-serif-italic` {{deprecated_inline}}
      - : サンセリフ体のイタリック体の文字を試行し使用します。例: "𝘈"
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : 太字のサンセリフ体のイタリック体の文字を試行し使用します。例: "𝘼"
    - `monospace` {{deprecated_inline}}
      - : 等幅文字を試行し使用します。例: "𝙰"
    - `initial` {{deprecated_inline}}
      - : initial の文字を試行し使用します。例: "𞸢"
    - `tailed` {{deprecated_inline}}
      - : tailed の文字を試行し使用します。例: "𞹂"
    - `looped` {{deprecated_inline}}
      - : looped の文字を試行し使用します。例: "𞺂"
    - `stretched` {{deprecated_inline}}
      - : stretched の文字を試行し使用します。例: "𞹢"

この要素は[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)も受け入れます。

## 例

```html
<math display="block">
  <!-- "normal" テキストとして複数の文字を描画 -->
  <mi>sin</mi>
</math>
<hr />
<math display="block">
  <!-- 単一の文字は、デフォルトでイタリック体で表示される（例："A" は "𝐴" として表示される） -->
  <mi>A</mi>
</math>
<hr />
<math display="block">
  <!-- mathvariant="normal" を使用することで、単一の文字が通常のテキストとして表示される -->
  <mi mathvariant="normal">F</mi>
</math>
<hr />
<math display="block">
  <!-- フラクトゥール体で "B" などの特定のバリエーションを使用する -->
  <mi>𝔅</mi>
</math>
```

{{ EmbedLiveSample('mi_example', 400, 100) }}

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
