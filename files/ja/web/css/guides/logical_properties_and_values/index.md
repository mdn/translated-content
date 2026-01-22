---
title: CSS 論理的プロパティと値
slug: Web/CSS/Guides/Logical_properties_and_values
original_slug: Web/CSS/CSS_logical_properties_and_values
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS 論理的プロパティと値** (CSS logical properties and values) モジュールは、物理的ではなく論理的に方向や寸法を対応付けて、レイアウトを制御することができるようにします。論理的プロパティは、対応する物理的プロパティに対する書字方向に関連した同等のものを定義します。

行の先頭は、常にその行の左側であるとは限りません。書き方によって、進行方向はさまざまです。例えば、

- 英語とポルトガル語は左から右に書き、新しい行は前の行の下に追加します。
- ヘブライ語とアラビア語は右から左に書く言語で、新しい行は前の行の下に追加します。
- 一部の書字方向では、テキストの行は垂直で、上から下に向かって書かれます。中国語、ベトナム語、韓国語、日本語は、伝統的に上から下に向かって垂直に書かれ、新しい行は前の行の左側に追加します。
- 伝統的なモンゴル語も上から下へ書く言語ですが、新しい行は前の行の右側に書きます。

このモジュールで定義される論理的プロパティにより、物理的な方向ではなく、コンテンツの書き方向に対する相対的なプロパティを定義することができます。これは、異なる書き方を持つ言語に翻訳されたコンテンツも、意図通りに表示されることを意味します。

論理的プロパティおよび値は、そのフローの方向を記述するために、「ブロック」と「インライン」という抽象的な用語を使用します。これらの用語の物理的な意味は、[書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)によって異なります。

**ブロック寸法** は、行内のテキストのフローに対して垂直な寸法、つまり横書きでは縦の寸法、縦書きでは横の寸法です。標準的な英語のテキストでは、縦の寸法になります。

**インライン寸法** は、行内のテキストのフローと並列です。つまり、横書きでは水平方向、縦書きでは垂直方向です。標準的な英語のテキストでは、水平方向です。

CSS は当初、物理的な座標のみで設計されていました。論理的プロパティおよび値モジュールは、多くの[値](/ja/docs/Web/CSS/Guides/Values_and_units)およびプロパティについて、フローに関連した同等のものを定義します。以前は物理値のみを受け入れていたプロパティ (`top`, `bottom`, `left`, `right`) は、これでフローに関連した論理値 (`block-start`, `block-end`, `inline-start`, `inline-end`) も受け入れるようになりました。

## リファレンス

### プロパティ

- {{cssxref("block-size")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("inline-size")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-block-end")}}
- {{cssxref("margin-block-start")}}
- {{cssxref("margin-inline")}}
- {{cssxref("margin-inline-end")}}
- {{cssxref("margin-inline-start")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-block-end")}}
- {{cssxref("padding-block-start")}}
- {{cssxref("padding-inline")}}
- {{cssxref("padding-inline-end")}}
- {{cssxref("padding-inline-start")}}

### データ型と値

{{glossary("Flow relative values", "フロー関連値")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`
- `start`
- `end`

### 用語

- {{glossary("Flow relative values", "フロー関連値")}}
- {{glossary("Inset properties", "インセットプロパティ")}}
- {{glossary("Logical properties", "論理的プロパティ")}}
- {{glossary("Physical properties", "物理的プロパティ")}}

### ガイド

- [論理的プロパティと値の基本概念](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts)
  - : フロー関連プロパティと値の概要です。

- [寸法の論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Sizing)
  - : フロー関連の物理プロパティと論理プロパティ間の対応付け。ページ上の要素のサイズ決定に使用されます。

- [マージン、境界、パディングの論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Margins_borders_padding)
  - : さまざまなマージン、境界線、パディングのプロパティとその一括指定に対するフローに関連した割り当て。

- [浮動ボックスと位置指定の論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning)
  - : `float`、`clear`、[インセットプロパティ](/ja/docs/Glossary/Inset_properties)、`resize` の物理値と論理値間の詳細な対応付け。

## 関連概念

- {{CSSxRef("caption-side")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("float")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("text-align")}}

[CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)

- {{CSSxRef("margin")}} 一括指定
- {{CSSxRef("padding")}} 一括指定

[CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)

- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

[CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)

- {{CSSxRef("border-color")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("border")}} 一括指定
- {{CSSxRef("border-radius")}}

[CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

[CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)

- {{CSSxRef("direction")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("writing-mode")}}

[CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

[CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}

[CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)

- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

## 仕様書

{{Specifications}}

## 関連情報

- [フローレイアウトと書字方向](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
