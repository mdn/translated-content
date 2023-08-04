---
title: "BlobEvent: timecode プロパティ"
short-title: timecode
slug: Web/API/BlobEvent/timecode
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("MediaStream Recording")}}

**`timecode`** は {{domxref("BlobEvent")}} インタフェースの読み取り専用プロパティで、データ内の最初のチャンクのタイムスタンプと、このレコーダによって生成された最初の `BlobEvent` 内の最初のチャンクのタイムスタンプとの差を示します。

なお、生成されたばかりの `BlobEvent` の `timecode` はゼロとは限らないことに注意してください。

### 値

{{domxref("DOMHighResTimeStamp")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
