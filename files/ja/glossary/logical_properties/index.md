---
title: Logical properties (論理的プロパティ)
slug: Glossary/Logical_properties
l10n:
  sourceCommit: aa0ae01fcb69a07b099406e5d6ce907ee9b2f929
---

{{GlossarySidebar}}

CSS の **論理的プロパティ** は、ビューポートの物理的な次元ではなく、文書の書字方向に基づいてコンテンツをレイアウトする方法を提供します。これにより、特に複数の言語に対応するウェブサイトにおいて、より柔軟で保守しやすいデザインが可能になります。

{{glossary("physical properties", "物理的プロパティ")}}（{{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}}, {{cssxref("border-bottom-left-radius")}} など）は、物理的な次元に基づいて位置や機能を定義して、要素の特定の辺を参照しますが、論理的プロパティ（{{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}}, and {{cssxref("border-end-end-radius")}} など）は、ブロック軸およびインライン軸に沿ったコンテンツのフローを基準とする論理的な次元キーワードを使用します。

## ブロック次元

**ブロック軸** (block axis) は、ブロックレイアウトにおける要素の積み重ねの順序を定義する軸を参照します。これは、基本的に、段落 ({{htmlelement("p")}})、見出し、div ({{htmlelement("div")}}) などのコンテンツのブロックがウェブページ上にレイアウトされる次元です。これは、**ブロック次元**とも呼ばれます。左書きの言語では、ブロック次元はコンテンツのフローの垂直方向、つまり上から下です。

**block-start** および **block-end** の次元は、ブロック軸に沿ったコンテンツの先頭の端および末尾の端、あるいは "from" および "to" の方向を表します。横書きでは、`block-start` は `top` に、 `block-end` は `bottom` に対応します。

## インライン次元

**インライン軸** (inline axis) は、ブロック軸に対して垂直です。インライン軸は、ブロック内でテキストなどのインラインコンテンツが流れる次元を表します。これは**インライン次元**とも呼ばれます。英語のような左書きの言語では、インライン次元は水平、つまり左から右です。アラビア語やヘブライ語のような右書きの言語では、インライン次元は水平、つまり右から左です。

**inline-start** および **inline-end** は、インライン軸に沿ったコンテンツの先頭の端および末尾の端をそれぞれ表し、値やプロパティにおける `inline-start` および `inline-end` は、横書きでは `left` および `right` のプロパティや値と同等です。 `right` と `left` のどちらと同等であるかは、書字方向によって異なります。例えば、`inline-start` は、左書きの言語では `left`、右書きの言語では `right` です。

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
