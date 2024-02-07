---
title: CSS フォント読み込み
slug: Web/CSS/CSS_font_loading
l10n:
  sourceCommit: fe5361c29eab373c0b60d07bb86dbf0048220110
---

{{CSSRef}}

**CSS フォント読み込み**モジュールは、フォントリソースを動的に読み込むために使用するイベントとインターフェイスを記述します。

## リファレンス

### インターフェイス

- {{domxref("fontFace")}} インターフェイス
  - [`FontFace()`](/ja/docs/Web/API/FontFace/FontFace) コンストラクター
  - {{domxref("fontFace.family")}} プロパティ
  - {{domxref("fontFace.style")}} プロパティ
  - {{domxref("fontFace.weight")}} プロパティ
  - {{domxref("fontFace.stretch")}} プロパティ
  - {{domxref("fontFace.unicodeRange")}} プロパティ
  - {{domxref("fontFace.variant")}} プロパティ
  - {{domxref("fontFace.featureSettings")}} プロパティ
  - {{domxref("fontFace.variationSettings")}} プロパティ
  - {{domxref("fontFace.display")}} プロパティ
  - {{domxref("fontFace.ascentOverride")}} プロパティ
  - {{domxref("fontFace.descentOverride")}} プロパティ
  - {{domxref("fontFace.lineGapOverride")}} プロパティ
  - {{domxref("fontFace.load()")}} メソッド（プロミスを返す）
- {{domxref("fontFaceSet")}} インターフェイス
- {{domxref("fontFaceSetLoadEvent")}} イベント

## ガイド

- [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API)
  - : フォントリソースを動的に読み込むためのイベントとインターフェイスを提供する CSS フォント読み込み API の概要です。

## 関連概念

- CSS {{cssxref("@font-face")}} アットルール
- CSS {{cssxref("@font-feature-values")}} アットルール
- {{domxref("CSSFontFaceRule")}} インターフェイス
- Document {{domxref("document.fonts", "fonts")}} プロパティ（{{domxref("FontFaceSet")}} オブジェクトインスタンスを返す）
- WorkerGlobalScope {{domxref("WorkerGlobalScope.fonts", "fonts")}} プロパティ（{{domxref("FontFaceSet")}} オブジェクトインスタンスを返す）
- JavaScript {{jsxref("Promise")}} オブジェクト

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フォント](/ja/docs/Web/CSS/CSS_fonts)モジュール
