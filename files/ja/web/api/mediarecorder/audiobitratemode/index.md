---
title: "MediaRecorder: audioBitrateMode プロパティ"
short-title: audioBitrateMode
slug: Web/API/MediaRecorder/audioBitrateMode
l10n:
  sourceCommit: 0267fa593fc01609738d486f8755bda8e95ecdf2
---

{{APIRef("MediaStream Recording")}}{{SeeCompatTable}}

**`audioBitrateMode`** は {{domxref("MediaRecorder")}} インターフェイスの読み取り専用プロパティで、音声トラックをエンコードするのに使用されるビットレートモードを返します。

## 値

以下のいずれかです。

- `constant`
  - : {{domxref("MediaRecorder")}} は、この固定ビットレートでエンコードします。
- `variable`
  - : {{domxref("MediaRecorder")}} は、この可変ビットレートを使用してエンコードを行うため、複雑な信号にはより多くの空間を使用し、複雑度の低い信号にはより少ない空間を使用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
