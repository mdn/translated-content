---
title: 実効値
slug: Web/CSS/actual_value
---

{{CSSRef}}

**実効値** (actual value) は [CSS](/ja/docs/Web/CSS) プロパティにおいて、すべての必要な推定が適用された後の [使用値](/ja/docs/Web/CSS/used_value) (used value) です。例えば、境界を整数値のピクセル幅でしか描けない{{glossary("user agent", "ユーザーエージェント")}}は、境界の太さを近似値の整数に丸めるかもしれません。

## プロパティの実効値の計算

{{glossary("user agent", "ユーザーエージェント")}}はプロパティの実効値 (最終値) を 4 段階で計算します。

1. 最初に[指定値](/ja/docs/Web/CSS/specified_value) (specified value) が、[カスケード](/ja/docs/Web/CSS/Cascade)、[継承](/ja/docs/Web/CSS/Inheritance)、[初期値](/ja/docs/Web/CSS/initial_value)の使用の何れかによって決定されます。
2. 次に、仕様に従って[計算値](/ja/docs/Web/CSS/computed_value) (computed value) が計算されます (例えば、 `span` に `position: absolute` が付いていると、 `display` が計算で `block` に変わります)。
3. それから、レイアウトが計算され、結果として[使用値](/ja/docs/Web/CSS/used_value)になります。
4. 最後に、使用値がローカルの環境の制約によって変換され、結果として実効値になります。

## 仕様書

{{Specifications}}

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/Inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
