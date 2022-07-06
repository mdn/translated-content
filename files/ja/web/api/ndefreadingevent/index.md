---
title: NDEFReadingEvent
slug: Web/API/NDEFReadingEvent
tags:
  - NDEF
  - リファレンス
  - Web NFC
browser-compat: api.NDEFReadingEvent
translation_of: Web/API/NDEFReadingEvent
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`NDEFReadingEvent`** は[ウェブ NFC API](/en-US/docs/Web/API/Web_NFC_API) のインターフェイスで、 {{DOMxRef("NDEFReader")}} によって得られる新しい NFC 読み取りに対して配信するイベントを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("NDEFReadingEvent.NDEFReadingEvent", "NDEFReadingEvent.NDEFReadingEvent()")}}
  - : 新しい `NDEFReadingEvent` を作成します。

## プロパティ

_親である {{DOMxRef("Event")}} からプロパティを継承しています_。

- {{DOMxRef("NDEFReadingEvent.message")}}{{ReadOnlyInline}}
  - : {{DOMxRef("NDEFMessage")}} オブジェクトで、受信したメッセージを表します。
- {{DOMxRef("NDEFReadingEvent.serialNumber")}}{{ReadOnlyInline}}
  - : 機器のシリアル番号で、衝突防止と識別のために使用されます。シリアル番号がない場合は空文字列を返します。

## メソッド

_親である {{DOMxRef("Event")}} からメソッドを継承しています_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
