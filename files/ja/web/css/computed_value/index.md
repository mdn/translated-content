---
title: 計算値
slug: Web/CSS/computed_value
---

{{CSSRef}}

**計算値** (computed value) は [CSS](/ja/docs/Web/CSS) プロパティにおいて、継承の過程で親から子へと伝えられる値です。これは[指定値](/ja/docs/Web/CSS/specified_value)から計算されます。

1. 特殊な値である {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("unset")}} を扱います。
2. プロパティの概要の「計算値」に記載された値に達するのに必要な計算を行います。

プロパティの計算値に達するのに必要な計算は、一般に (`em` の単位やパーセントなどの) 相対値を絶対値に変換する計算を含みます。例えば、ある要素に `font-size: 16px` と `padding-top: 2em` が指定された場合、 `padding-top` の計算値は `32px` (フォントサイズの倍) になります。

しかしながら、いくつかのプロパティ (`width`, `margin-right`, `text-indent`, `top` など、レイアウトの定義に必要ものに対する割合が相対的なもの) でパーセント値で指定された値はパーセント値で計算された値に変わります。さらに、 `line-height` に指定された単位なしの値は、指定された計算値になります。これらの計算値に残った相対的な値は、[使用値](/ja/docs/Web/CSS/used_value)が定義された場合、絶対値になります。

> [!NOTE]
> DOM の {{domxref("Window.getComputedStyle", "getComputedStyle()")}} API は[解決値](/ja/docs/Web/CSS/resolved_value)を返しますが、これはプロパティによって[計算値](/ja/docs/Web/CSS/computed_value)であるか[使用値](/ja/docs/Web/CSS/used_value)であるかが変わります。

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("window.getComputedStyle")}}
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
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
