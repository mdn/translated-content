---
title: フローレイアウトと書字方向
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
---

通常フローの動きについて詳細を説明している CSS 2.1 仕様書は、横書きを想定しています。[レイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)プロパティは縦書きモードでも同様に動作するべきです。このガイドでは、異なる文書の書字方向が使われた場合のフローレイアウトの動作を見てみましょう。

これは CSS での書字方向の使用に関する包括的なガイドではなく、ここでの目的は、フローレイアウトと書字方向の起こりうる相互作用が予想できないような領域を文書化することです。この文書の[外部リソース](#External_Resources)や[関連情報](#See_Also)の節で、書字方向に関するより多くのリソースを紹介します。

## 書字方向の仕様書

CSS Writing Modes Level 3 仕様書では、フローレイアウトで文書の書字方向が変更された時の影響を定義しています。[仕様書](https://drafts.csswg.org/css-writing-modes-3/#text-flow)の書字方向の導入部では、以下のように書かれています。

> "CSS の書字方向は {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} プロパティによって決められます。これは主にインラインベース方向とブロックフロー方向から決まります。"

仕様書では*インラインベース方向*を、行内でコンテンツが並べられる方向として定義しています。ここでは、インライン方向の始点と終点を定義しています。始点は文が始まるところであり、終点はテキストの行が終わり、新しい行への折り返しが始まる前です。

*ブロックフロー方向*は、段落などのボックスが、その書字方向で積み重なる方向です。 CSS の writing-mode プロパティは、ブロックフロー方向を制御します。ページまたはページの一部を `vertical-lr` に変更したい場合、要素に `writing-mode: vertical-lr` と設定し、これがブロックの方向を変更して、従ってインライン方向も同様に変更します。

特定の言語では書字方向やテキストの方向が使用されますが、これらの方向を創造的な効果として、例えば見出しを縦書きにするために使用することができます。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}

## `writing-mode` プロパティとブロックフロー

{{cssxref("writing-mode")}} プロパティは `horizontal-tb`, `vertical-rl`, `vertical-lr` の値を受け入れます。これらの値はページのブロックフローの方向を制御します。初期値は `horizontal-tb` で、ブロックフロー方向は上から下で、インライン方向は横書きとなります。英語のような左書きの言語、アラビア語のような右書きの言語は、すべて `horizontal-tb` です。

以下の例は `horizontal-tb` を使用したブロックを示しています。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}

vertical-rl の値は、次の例に見られるように、ブロックフロー方向は右から左で、インライン方向は縦書きになります。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}

最後の例では `writing-mode` の第三の値である `vertical-lr` を紹介します。ブロックフロー方向は左から右で、インライン方向は縦書きになります。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}

## 書字方向が親と異なるボックス

親とは書字方向が異なる内部のボックスを作成した場合、インラインレベルボックスは `display: inline-block` であるかのように表示されます。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}

ブロックレベルボックスは新しいブロック整形コンテキストを生成し、つまり内部の display 種別が `flow` であれば、 display 種別の計算値は `flow-root` になります。次の例では、親が新しいブロック整形コンテキストを確立するため、 `horizontal-tb` で表示される浮動要素を含むボックスがどこに表示されるかを確認できます。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}

## 置換要素

画像などの置換要素は、 `writing-mode` プロパティによって方向が変更されません。しかし、テキストを含むフォームコントロールのような置換要素は、使用中の書字方向に一致するでしょう。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}

## 論理プロパティと値

書字方向を `horizontal-tb` 以外にして作業をすると、画面の物理的な寸法に合わせられた多くのプロパティと値はおかしく見えます。例えば、 `horizontal-tb` の中でボックスの幅を 100px に設定すると、インライン方向の寸法を制御することになります。 `vertical-lr` では、ブロック方向の寸法を制御することになり、テキストに合わせて回転するわけではありません。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}

従って、新しいプロパティ {{cssxref("block-size")}} および {{cssxref("inline-size")}} ができました。ブロックの `inline-size` を 100px に設定すると、書字方向が横書きか縦書きかに関わらず、 `inline-size` は常にインライン方向の寸法を意味します。

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}

[CSS 論理プロパティと値](/ja/docs/Web/CSS/CSS_Logical_Properties)の仕様書は、マージン、パディング、境界の制御や、その他の通常は物理的な方向を使用して指定するものの論理バージョンのプロパティを含んでいます。

## まとめ

多くの場合、フローレイアウトは文書や文書の一部の書字方向を変更したときに、期待通りに動作するでしょう。これはふつう、縦書きの言語や創造的な理由で使用することができます。 CSS は論理プロパティと値を導入することで、縦書き時にインラインやブロック方向に基づいて寸法を決めやすくしています。これはどの書字方向でも動作するコンポーネントを作成するのに便利です。

## 関連情報

- [書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes)

## 外部リソース

- _[CSS Writing Modes](https://24ways.org/2016/css-writing-modes/)_, Jen Simmons on 24 Ways

{{QuickLinksWithSubpages("/ja/docs/Web/CSS/CSS_Flow_Layout/")}}
