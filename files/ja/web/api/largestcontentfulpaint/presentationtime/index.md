---
title: "LargestContentfulPaint: presentationTime プロパティ"
short-title: presentationTime
slug: Web/API/LargestContentfulPaint/presentationTime
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("Performance API")}}

**`presentationTime`** は {{domxref("LargestContentfulPaint")}} インターフェイスの読み取り専用プロパティで、描画されたピクセルが実際に画面上に描画された時点の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

`presentationTime` はオプションです。ブラウザーによっては、常に `0` を返す場合や、この値をまったく公開しない場合があります。また、この値は実装に依存するため、公開するブラウザー間でも異なる場合があります。

## 値

{{domxref("DOMHighResTimeStamp")}} またはこの値が公開されていない場合は {{jsxref("null")}} です。

## 例

[描画と表示のタイミングを別個に観察](/ja/docs/Web/API/LargestContentfulPaint#描画と表示のタイミングを別個に観察)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("LargestContentfulPaint.paintTime")}}
