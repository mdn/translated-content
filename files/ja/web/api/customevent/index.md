---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("DOM")}}

**`CustomEvent`** インターフェイスは、何らかの目的でアプリケーションから初期化されるイベントを表します。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : `CustomEvent` を生成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} インターフェイスから継承したプロパティがありますます。_

- {{domxref("CustomEvent.detail")}} {{ReadOnlyInline}}
  - : イベントが初期化されたときに渡された何らかのデータを返します。

## インスタンスメソッド

_親である {{domxref("Event")}} インターフェイスから継承したメソッドがあります。_

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : `CustomEvent` オブジェクトを初期化します。イベントが既に配信されている場合、このメソッドは何も行いません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.postMessage()")}}
- [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)
