---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBIsochronousInTransferResult` インターフェイスは、`USBDevice` インターフェイスの `isochronousTransferIn()` メソッドを呼び出した結果を提供します。これは、USB デバイスから USB ホストへのデータ転送の要求の結果を表します。

## コンストラクター

- {{domxref("USBIsochronousInTransferResult.USBIsochronousInTransferResult", "USBIsochronousInTransferResult()")}} {{Experimental_Inline}}
  - : 指定の `packets` および `data` フィールドを持つ新しい `USBIsochronousInTransferResult` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBIsochronousInTransferResult.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスから受信したデータを格納した `DataView` オブジェクトを返します。これはすべてのパケットのデータを合わせたものです。個々のパケットで受信したこのバッファーの部分は、配列 `packets` 内の個別の `DataView` オブジェクトを参照してください。
- {{domxref("USBIsochronousInTransferResult.packets")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 個々のデバイスからのパケットを受信する要求の結果が格納された `USBIsochronousInTransferPacket` オブジェクトの配列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
