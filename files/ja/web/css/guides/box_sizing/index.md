---
title: CSS ボックスサイズ指定
short-title: ボックスサイズ指定
slug: Web/CSS/Guides/Box_sizing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS ボックスサイズ指定**モジュールは、要素のサイズをどのようにコンテンツに合わせるか、または特定のレイアウトコンテキストに合わせるかを指定できるようにします。このモジュールでは、サイズ指定、最小サイズ指定、最大サイズ指定のプロパティを定義しており、コンテンツに基づく{{glossary("intrinsic size", "内在サイズ")}}とコンテキストに基づく{{glossary("extrinsic size", "外因的なサイズ")}}を表すキーワードで CSS サイズ指定のプロパティを拡張します。

要素は、外在的にも内在的にもサイズを設定することができます。[CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)は、要素の大きさを明示的に、つまり「外在的」に設定するためのページに相対的なプロパティ、たとえば `width`、`height`、`padding`、`margin` などのプロパティ（[CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュールで定義されている `border` プロパティも含む）を定義しています。この CSS ボックスサイズ指定モジュールは、CSS ボックスモデルモジュールを拡張し、コンテンツのサイズに基づいて要素のサイズを設定することで、要素を内在的にサイズ指定できるようにします。

このモジュールで導入されたサイズ指定値は、[サイズ抑制](/ja/docs/Web/CSS/Guides/Containment/Using#サイズ抑制)を持つ要素が、内在サイズが何も指定されていないかのようにサイズ指定されるのではなく、そのフロー内コンテンツの幅と高さが指定された明示的な内在サイズと一致するように、明示的な内在サイズを取ることができるようになります。

このモジュールでは、要素のボックスのアスペクト比を定義する機能も導入されました。つまり、ブラウザーは指定されたアスペクト比を維持するために、いずれかの寸法が自動的にサイズ調整される限り、要素の寸法を自動的に調整することができます。

[論理的プロパティと値モジュール](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)は、ボックスモデルとボックスサイズ指定モジュールで利用可能なプロパティを拡張し、対応する物理ボックスモデルと内在ボックスサイズ指定プロパティの書字方向に相対的である等価なものを含むように拡張しています。

## リファレンス

### プロパティ

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("contain-intrinsic-block-size")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("contain-intrinsic-inline-size")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}

CSS ボックスサイズ指定モジュールでは、`min-intrinsic-sizing` プロパティも導入されています。現在、この機能を対応しているブラウザーはありません。

### データ型と値

- {{cssxref("ratio")}} データ型
- {{cssxref("min-content")}} 値
- {{cssxref("max-content")}} 値
- {{cssxref("fit-content")}} 値

### 関数

- [`fit-content()`](/ja/docs/Web/CSS/Reference/Values/fit-content_function)

### 用語集の用語

- {{glossary("Intrinsic size", "内在サイズ")}}
- {{glossary("Extrinsic size", "外因的なサイズ")}}

## ガイド

- [アスペクト比を理解する](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : `aspect-ratio` プロパティについて学び、置換要素と非置換要素のアスペクト比について議論し、一般的なアスペクト比の使用例を検討します。

- [CSS ボックスモデルの紹介](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
  - : CSS の基本概念のひとつであるボックスモデルについての解説です。このモデルは、CSS が要素をどのようにレイアウトするかを定義するもので、コンテンツ、パディング、境界、マージン領域などが含まれます。

- [マージンの相殺をマスターする](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : 隣接する 2 つのマージンが 1 つに折りたたまれることがあります。この記事では、この現象がいつ、なぜ起こるのか、そしてどのように制御するのかについて説明します。

- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : 視覚整形モデルを説明します。

- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : 内在的なサイズ調整について、{{CSSxRef("flex-grow")}}、{{CSSxRef("flex-shrink")}}、{{CSSxRef("flex-basis")}} を使用して主軸に沿ってフレックスアイテムのサイズと柔軟性を制御する方法を理解する前段階として説明します。

## 関連概念

- [CSS 論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("contain-intrinsic-block-size")}}
  - {{CSSxRef("contain-intrinsic-inline-size")}}
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overscroll-behavior-block")}}
  - {{CSSxRef("overscroll-behavior-inline")}}
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
  - {{cssxref("margin")}} 一括指定プロパティ
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-trim")}}
  - {{cssxref("padding")}} 一括指定プロパティ
  - {{cssxref("padding-bottom")}}
  - {{cssxref("padding-left")}}
  - {{cssxref("padding-right")}}
  - {{cssxref("padding-top")}}
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
  - {{cssxref("border")}} 一括指定プロパティ
  - {{cssxref("border-width")}} 一括指定プロパティ
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
  - {{CSSxRef("overflow")}} 一括指定プロパティ
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} 関数
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
- [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュール
