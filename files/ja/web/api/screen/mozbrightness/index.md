---
title: "Screen: mozBrightness プロパティ"
short-title: mozBrightness
slug: Web/API/Screen/mozBrightness
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

画面のバックライトの明るさを、 0 (とても暗い) から 1 (完全に明るい) の範囲で示します。この値は倍精度浮動小数点数です。

この属性は、画面が無効化されていても読み書きできますが、画面が無効化されている間はバックライトが消灯しています。この属性に X の値を書き込むと、後で読み込んだときに同じ X の値になっていない場合があります。ほとんどの画面は倍精度の 0 と 1 の数だけ輝度レベルがあるわけではありません。値を格納する前に、値の精度が低下する可能性があります。

## 値

数値です。

## 仕様書

仕様書の一部ではありません。

## ブラウザーの互換性

{{Compat}}
