---
title: USBIsochronousOutTransferResult
slug: Web/API/USBIsochronousOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBIsochronousOutTransferResult` インターフェイスは、`USBDevice` インターフェイスの `isochronousTransferOut()` メソッドの呼び出しの結果を提供します。これは、USB ホストから USB デバイスへのデータ転送の要求の結果を表します。

## コンストラクター

- {{domxref("USBIsochronousOutTransferResult.USBIsochronousOutTransferResult", "USBIsochronousOutTransferResult()")}} {{Experimental_Inline}}
  - : 指定の `packet` フィールドを持つ新しい `USBIsochronousOutTransferResult` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBIsochronousOutTransferResult.packets")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 個々のデバイスへパケットを送信する要求の結果が格納された `USBIsochronousOutTransferPacket` オブジェクトの配列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
