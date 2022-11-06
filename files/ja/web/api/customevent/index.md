---
title: CustomEvent
slug: Web/API/CustomEvent
---

{{APIRef("DOM")}}

**`CustomEvent`** インターフェイスは、何らかの目的でアプリケーションから初期化されるイベントを表します。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : `CustomEvent` を生成します。

## プロパティ

_親である {{domxref("Event")}} インターフェイスからプロパティを継承しています。_

- {{domxref("CustomEvent.detail")}} {{readonlyinline}}
  - : イベントが初期化されたときに渡された何らかのデータを返します。

<em>このインターフェイスは親である {{domxref("Event")}} からプロパティを継承します</em>

## メソッド

_親である {{domxref("Event")}} インターフェイスからメソッドを継承しています。_

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : `CustomEvent` オブジェクトを初期化します。イベントが既に配信されている場合、このメソッドは何も行いません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.postMessage()")}}
- [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)
