---
title: CSS スクロール固定
slug: Web/CSS/Guides/Scroll_anchoring
original_slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: 6b52c3a6f18dc5c3f316b9935a0e1c80736409fe
---

**CSS スクロール固定**モジュールは、ユーザーが可視コンテンツを利用している間、スクロールボックスの可視領域より上の DOM の変更によってページが動くことを防ぐ仕組みを定義します。

スクロール固定は、レイアウトが変更されてもユーザーの文書表示を安定させようとするものです。これは、移動がスクロール位置を決定するために使用される DOM ノード（アンカーノード）を選択することで機能します。アンカーノードは常にスクロールボックスの子孫です。

要素に[スナップ](/ja/docs/Glossary/Scroll_snap)されたスクロールコンテナーの場合、スクロールアンカーは再スナップされる位置に制限されます。

## リファレンス

### プロパティ

- {{cssxref("overflow-anchor")}}

## 用語集と定義

- {{glossary("Scroll container", "スクロールコンテナー")}}
- {{glossary("Scroll snap", "スクロールスナップ")}}

## ガイド

- [スクロール固定のガイド](/ja/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
  - : スクロール固定と抑制トリガーを有効化および無効化する方法、そして、いつ、なぜそれらを使用するべきなのかを説明します。

## 関連概念

- {{CSSxRef("overscroll-behavior")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
