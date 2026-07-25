---
title: OverconstrainedError
slug: Web/API/OverconstrainedError
l10n:
  sourceCommit: 3178e38ae397032bd9c44d5ec6f8192ee391b56a
---

{{APIRef("Media Capture and Streams")}}

[メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API) の **`OverconstrainedError`** インターフェイスは、{{domxref('MediaStreamTrack')}} で要求されている能力の組が現在実現できないことを表します。このイベントが `MediaStreamTrack` で投げられると、現在の制約が実現できるか、実現できる制約が適用されるまで、無音になります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("OverconstrainedError.OverconstrainedError", "OverconstrainedError()")}}
  - : 新しい `OverconstrainedError` のオブジェクトを作成します。

## インスタンスプロパティ

_親インターフェイスの {{domxref('DOMException')}} からもプロパティを継承します。_

- {{domxref("OverconstrainedError.constraint")}} {{ReadOnlyInline}}
  - : コンストラクターに渡された制約を返し、この制約が実現できていないことを表します。

## インスタンスメソッド

_親インターフェイスの {{domxref('DOMException')}} からもメソッドを継承します。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
