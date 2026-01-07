---
title: 段組みレイアウトでのボックス配置
short-title: 段組みレイアウトで
slug: Web/CSS/Guides/Box_alignment/In_multi-column_layout
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

[CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュールでは、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このガイドでは、[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)のコンテキストにおいてボックス配置がどのように働くかを探ります。このガイドの目的は、段組みレイアウトとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置の概要](/ja/docs/Web/CSS/Guides/Box_alignment/Overview)ガイドを合わせてお読みください。

[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)において、{{glossary("alignment container", "配置コンテナー")}}は段組みコンテナーのコンテンツボックスです。{{glossary("alignment subject", "配置対象物")}}は段ボックスです。段組みレイアウトに適用されるプロパティの詳細を以下に示します。

## align-content と justify-content

{{cssxref("align-content")}} プロパティはブロック軸に、 {{cssxref("justify-content")}} はインライン軸に適用されます。段に追加された空間は分配に使用され、段間のすき間に追加されるため、段間は {{cssxref("column-gap")}} プロパティ（または {{cssxref("gap")}} 一括指定）で指定された寸法よりも大きくなることがあります。

`justify-content` に `normal` または `stretch` 以外の値を使用すると、 {{cssxref("column-width")}} が指定された段組みコンテナーに表示し、残りの余白は `justify-content` の値によって配分されます。

## column-gap

段組みレイアウト仕様書の早期の版では、 {{cssxref("column-gap")}} プロパティが定義されていましたが、ボックス配置では他のレイアウト方式の gap プロパティと統合されました。他のレイアウト方式では、 `column-gap` の初期値を `0` として扱うのに対し、段組みレイアウトでは、一般に段間にすき間がないようにすることはないでしょうから、 `1em` として扱うようになっています。

## 関連情報

- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [ボックス配置の概要](/ja/docs/Web/CSS/Guides/Box_alignment/Overview)
- [フレックスボックスのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [ブロック、絶対位置指定、表レイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
