---
title: CSS 色調整
slug: Web/CSS/Guides/Color_adjustment
original_slug: Web/CSS/CSS_color_adjustment
l10n:
  sourceCommit: 8d03307af2cee96a307c22b5d52b93f155f11524
---

**CSS 色調整**モジュールは、モデルを提供し、「ダークモード」、コントラスト調整、その他の配色設定などのユーザーの環境設定を処理するために、ユーザーエージェントによる自動色調整を制御します。

このモジュールは {{CSSxRef("@media")}} の {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}、{{cssxref("@media/prefers-contrast", "prefers-contrast")}}、{{cssxref("@media/forced-colors", "forced-colors")}} 特性とともに、ブラウザーに色を自動的に調整させる方法とタイミングを定義します。

## リファレンス

### プロパティ

- {{cssxref("color-scheme")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("print-color-adjust")}}

## 関連概念

- CSS の {{cssxref("&lt;color&gt;")}} データ型
- 関連する {{CSSxRef("@media")}} 特性:
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
- 強制色モードに影響するプロパティ
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - [`fill`](/ja/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/ja/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/ja/docs/Web/SVG/Reference/Attribute/lighting-color)
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - [`stop-color`](/ja/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/ja/docs/Web/SVG/Reference/Attribute/stroke)
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
