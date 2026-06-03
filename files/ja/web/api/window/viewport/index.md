---
title: "Window: viewport プロパティ"
short-title: viewport
slug: Web/API/Window/viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

`viewport` は {{domxref("Window")}} インターフェイスの読み取り専用のプロパティで、{{domxref("Viewport")}} インターフェイスのインスタンスを返し、端末のビューポートの現在の状態に関する情報を提供します。

利用可能なすべてのプロパティは {{domxref("Viewport")}} API を参照してください。

## 値

{{domxref("Viewport")}} オブジェクトインスタンスです。

## 例

### 基本的な `viewport` の使用

```js
const currentViewport = window.viewport;
const segments = window.viewport.segments;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Viewport.segments")}} プロパティ
- {{domxref("Viewport")}} インターフェイス
- {{domxref("VisualViewport")}} インターフェイス
- [ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API)
- [CSSOM view API](/ja/docs/Web/API/CSSOM_view_API)
- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSS ビューポート](/ja/docs/Web/CSS/Guides/Viewport)モジュール
- [CSSOM view](/ja/docs/Web/CSS/Guides/CSSOM_view) モジュール
