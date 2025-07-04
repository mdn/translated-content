---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBIsochronousInTransferPacket` インターフェイスは、`USBDevice` インターフェイスの `isochronousTransferIn()` メソッドの呼び出しに対する応答の一部です。これは、アイソクロナスエンドポイントによる USB デバイスから USB ホストへのデータ転送の要求における個別のパケットの状態を表します。

## コンストラクター

- {{domxref("USBIsochronousInTransferPacket.USBIsochronousInTransferPacket", "USBIsochronousInTransferPacket()")}} {{Experimental_Inline}}
  - : 指定の `status` および `data` フィールドを持つ新しい `USBIsochronousInTransferPacket` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBIsochronousInTransferPacket.data")}} {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : あれば、USB デバイスからこのパケットで受信したデータが格納された `DataView` オブジェクトを返します。
- {{domxref("USBIsochronousInTransferPacket.status")}} {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 転送要求の状態を返します。以下のいずれかです。
    - `"ok"` — 転送は成功しました。
    - `"stall"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。アイソクロナスエンドポイントでのストールをクリアする必要はありません。
    - `"babble"` — デバイスは想定より多くのデータで応答しました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
