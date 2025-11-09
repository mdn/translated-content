---
title: CSS フローレイアウト
slug: Web/CSS/Guides/Display/Flow_layout
original_slug: Web/CSS/CSS_display/Flow_layout
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

_通常フロー_ (Normal Flow) 、またはフローレイアウトは、レイアウトに変更が加えられる前にブロック要素やインライン要素がページに表示される方法です。このフローは本質的に、共に動作するすべてのものの組み合わせで、レイアウトの中で互いについてを知っています。いったん何かがフローの外に出ると、独立して動作します。

通常フローでは、 **{{Glossary("Inline-level_content", "インライン")}}** 要素はインライン方向、つまり文書の[書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)に従って、文の中で言葉が表示される方向に表示されます。 **{{Glossary("Block/CSS", "ブロック")}}** 要素は、文書の書字方向の中で、段落として一つが他の物の後に表示されます。従って英語では、インライン要素は左から始まり、一つが他の物の後に表示され、ブロック要素は上から始まり、ページの下に向かいます。

## 基本的な例

以下の例はブロック及びインラインレベルボックスの例を示します。緑色の枠線がある二つの要素がブロックレベルで、他の物の下に表示されます。

最初の文は青い背景をもつ span 要素を含んでいます。これはインラインレベルで、文の中に表示されます。

```html hidden live-sample___normal-flow
<div class="box">
  <p>
    One <span>November</span> night in the year 1782, so the story runs, two
    brothers sat over their winter fire in the little French town of Annonay,
    watching the grey smoke-wreaths from the hearth curl up the wide chimney.
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css hidden live-sample___normal-flow
body {
  font: 1.2em sans-serif;
}

p {
  border: 2px solid green;
}
span {
  background-color: lightblue;
}
```

{{EmbedLiveSample("normal-flow", "", "250px")}}

## 関連情報

- [通常フローでのブロック及びインラインレイアウト](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [フロー内とフローの外](/ja/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)
- [整形コンテキストの解説](/ja/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [フローレイアウトとオーバーフロー](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
