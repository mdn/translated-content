---
title: <axis>
slug: Web/CSS/Reference/Values/axis
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`<axis>`** は{{glossary("enumerated", "列挙型")}}のデータ型で、[スクロールタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)を制御する{{glossary("scroll container", "スクロールコンテナー")}}のスクロール方向を指定します。

`<axis>` キーワード値は、以下の [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)およびプロパティで使用されます。

- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline")}} shorthand
- {{cssxref("animation-timeline/scroll", "scroll()")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline")}} shorthand
- {{cssxref("animation-timeline/view", "view()")}}

## 構文

有効な `<axis>` 値は次の通りです。

- `block`
  - : スクローラー要素のブロック軸であり、行内のテキストの流れに垂直な方向の軸です。標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。
- `inline`
  - : スクローラー要素のインライン軸であり、行内のテキストの流れに平行な方向の軸です。横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
- `x`
  - : スクローラー要素の水平軸です。
- `y`
  - : スクローラー要素の垂直軸です。

## 形式文法

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)ガイド
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
