---
title: CSS ボックス配置
slug: Web/CSS/Guides/Box_alignment
original_slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

**CSS ボックス配置** (CSS box alignment) モジュールは、コンテナー内のボックスの配置に関する CSS 機能を指定します。ブロックレイアウト、表レイアウト、フレキシブルボックスレイアウト （フレックスボックス）、グリッドレイアウトなど、さまざまな CSS ボックスレイアウトモデルにおける配置を定義し、 CSS 全体で一貫した配置方法を作成します。

このモジュールでは、配置の用語について詳しく説明し、配置プロパティを特定のレイアウト手法に制限することなく、複数のレイアウトモジュールで使用できるようにしています。

配置は、書字方向とリンクしています。アイテムを配置する場合、そのアイテムを物理的な寸法である上、右、下、左のどこに配置するかは考慮しません。代わりに、作業している具体的な次元の先頭と末尾で配置を記述します。これにより、文書がどの書字方向であっても、配置が確実に同じように動作します。

テキストレベル、インラインレベルのコンテンツの配置は、それぞれ [CSS テキストモジュール](/ja/docs/Web/CSS/Guides/Text)と [CSS インラインモジュール](/ja/docs/Web/CSS/Guides/Inline_layout)で定義されています。

## リファレンス

### CSS プロパティ

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}

### データ型

- {{cssxref("baseline-position")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("overflow-position")}}
- {{cssxref("self-position")}}

### 用語と定義

- {{Glossary("Alignment container", "配置コンテナー")}}
- {{Glossary("Alignment subject", "配置対象物")}}
- [ベースライン揃え](/ja/docs/Web/CSS/Guides/Box_alignment/Overview#ベースライン揃え)
- [分配配置](/ja/docs/Web/CSS/Guides/Box_alignment/Overview#分配配置)
- {{Glossary("Fallback alignment", "代替配置")}}
- [位置指定配置](/ja/docs/Web/CSS/Guides/Box_alignment/Overview#positional_alignment)

## ガイド

- [ボックス配置の概要](/ja/docs/Web/CSS/Guides/Box_alignment/Overview)
  - : CSS ボックス配置モジュールで使える一般概念の概要です。

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : フレックスボックスのコンテキストにおけるボックスの配置の動作です。

- [CSS グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : グリッドレイアウトのコンテキストにおけるボックスの配置の動作です。

- [段組みレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
  - : 段組みのコンテキストにおけるボックスの配置の動作です。

- [ブロック、絶対配置、表レイアウトのブロック配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
  - : ブロックレイアウトのコンテキストにおけるボックスの配置の動作。浮動ボックス、位置指定要素、表要素も含まれます。

## 関連概念

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("scroll-snap-align")}}
- SVG の {{SVGAttr("dominant-baseline")}} 属性
- {{Glossary("Cross axis", "交差軸")}}
- {{Glossary("Main axis", "主軸")}}

### 仕様書

{{Specifications}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナーのアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
