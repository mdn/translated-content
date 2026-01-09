---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: f6b253c16e6b1b9fe568c082a6f9f9bbd18a1c5d
---

**`<timeline-range-name>`** は{{glossary("enumerated", "列挙型")}}のデータ型で、[ビュー進捗タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)の中にある定義済みの名前付きタイムライン範囲のいずれかを表す CSS 識別子です。

`<timeline-range-name>` キーワード値は、次の個別指定プロパティおよび一括指定プロパティで使用されています。

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} 一括指定

## 構文

有効な `<timeline-range-name>` 値は次の通りです。

- `cover`
  - : 名前付きビュー進行タイムラインの全範囲を表します。主体要素が最初にスクロールポートのビュー進行の可視範囲に入り始めた時点（進行度 `0%`）から、完全にその範囲から離れた時点（進行度 `100%`）までです。
- `contain`
  - : ビュー進行タイムラインを完全に包含する、またはビュー進行可視範囲が完全に包含される範囲を、主体要素が[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)内に完全に含まれている範囲として表します。
    - 主体要素がスクロールポートより小さい場合は、主体要素が最初にスクロールポートに完全に収まった点（進行度 `0%`）から、スクロールポートに完全に収まらなくなった点（進行度 `100%`）までの範囲になります。
    - 主体要素がスクロールポートより大きい場合は、主体要素を最初にスクロールポートに完全に覆った点（進行度 `0%`）から、スクロールポートを完全に覆わなくなり始めた点（進行度 `100%`）までの範囲になります。

- `entry`
  - : ビュー進行タイムラインの中で、主体要素がスクロールポートに最初に進入し始める点から、完全に進入し終える点までの範囲を指定します。`0%` は `cover` 範囲の `0%` に相当します。`100%` は `contain` 範囲の `0%` に相当します。
- `exit`
  - : ビュー進行タイムラインの中で、主体要素がスクロールポートから最初に退出を始める点から、完全に退出する点までの範囲を示します。`0%` は `contain` 範囲の `100%` に相当します。`100%` は `cover` 範囲の `100%` に相当します。
- `entry-crossing`
  - : 主ボックスが末尾の境界を横切る範囲を表します。この範囲の始点（進行度 0%）は、要素の主ボックスの先頭の境界が、そのビュー進行可視範囲の末尾と一致する点です。範囲の終点（進行度 100%）は、要素の主ボックスの末尾の境界が、そのビュー進行可視範囲の末尾と一致する点です。範囲の大きさは、スクロール方向における要素の主ボックスのサイズです。

- `exit-crossing`
  - : 主ボックスが先頭の境界を横切る範囲を表します。この範囲の始点（進行度 0%）は、要素の主ボックスの末尾の境界が、そのビュー進行可視範囲の先頭と一致する点です。範囲の終点（進行度 100%）は、要素の主ボックスの先頭の境界が、そのビュー進行可視範囲の末尾と一致する点です。範囲の大きさは、スクロール方向における要素の主ボックスのサイズです。

## 形式文法

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## 例

[View timeline range visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)ガイド
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [View timeline range visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
