---
title: NDEFMessage
slug: Web/API/NDEFMessage
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFMessage
translation_of: Web/API/NDEFMessage
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`NDEFMessage`** は[ウェブ NFC API](/ja/docs/Web/API/Web_NFC_API) のインターフェイスで、 NHC タグで読み書きされる NDEF メッセージの内容を表します。インスタンスは `NDEFMessage()` コンストラクターを呼び出すか、 {{domxref("NDEFReader.reading_event", "reading")}} イベントに渡される {{domxref("NDEFReadingEvent.message")}} プロパティを用いるかして取得します。

## コンストラクター

- {{DOMxRef("NDEFMessage.NDEFMessage", "NDEFMessage()")}}
  - : 新しい `NDEFMessage` オブジェクトを生成し、指定された NDEF レコードで初期化します。

## プロパティ

- {{DOMxRef("NDEFMessage.records")}}{{ReadOnlyInline}}
  - : メッセージに含まれる NDEF レコードのリストを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
