---
title: USBIsochronousOutTransferPacket
slug: Web/API/USBIsochronousOutTransferPacket
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBIsochronousOutTransferPacket` インターフェイスは、`USBDevice` インターフェイスの `isochronousTransferOut()` メソッドの呼び出しに対する応答の一部です。これは、アイソクロナスエンドポイントによる USB ホストから USB デバイスへのデータ転送の要求における個別のパケットの状態を表します。

## コンストラクター

- {{domxref("USBIsochronousOutTransferPacket.USBIsochronousOutTransferPacket", "USBIsochronousOutTransferPacket()")}} {{Experimental_Inline}}
  - : 指定の `status` および `bytesWritten` フィールドを持つ新しい `USBIsochronousOutTransferPacket` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBIsochronousOutTransferPacket.bytesWritten")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このパケットでデバイスに送信されたバイト数を返します。
- {{domxref("USBIsochronousOutTransferPacket.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"stall"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。アイソクロナスエンドポイントでのストールをクリアする必要はありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
