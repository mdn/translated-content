---
title: "LargestContentfulPaint: paintTime プロパティ"
short-title: paintTime
slug: Web/API/LargestContentfulPaint/paintTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

**`paintTime`** は {{domxref("LargestContentfulPaint")}} インターフェイスの読み取り専用プロパティで、レンダリングフェーズが終了し、描画フェーズが始まった時点の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

`paintTime` は広範な相互運用性を備えています。つまり、異なる実装間でもその値は同一です。

## 値

{{domxref("DOMHighResTimeStamp")}} です。

## 例

[描画と表示のタイミングを別個に観察](/ja/docs/Web/API/LargestContentfulPaint#描画と表示のタイミングを別個に観察)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("LargestContentfulPaint.presentationTime")}}
