---
title: "Viewport: segments プロパティ"
short-title: segments
slug: Web/API/Viewport/segments
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

**`segments`** は {{domxref("Viewport")}} インターフェイスの読み取り専用のプロパティで、表示領域全体の中のそれぞれのビューポートセグメントの位置とサイズを表す {{domxref("DOMRect")}} オブジェクトの配列を返します。

## 値

{{domxref("DOMRect")}} オブジェクトの配列です。

## 例

### 基本的な `Viewport.segments` の使い方

このスニペットはビューポート内のそれぞれのセグメントをループ処理し、インデックス数値、幅、高さを詳細に記述した文字列をコンソールにログ出力します。

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `セグメント ${segments.indexOf(segment)} は ${segment.width}px x ${segment.height}px`,
  ),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API)
- [CSSOM view API](/ja/docs/Web/API/CSSOM_view_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) - developer.chrome.com (2024)
