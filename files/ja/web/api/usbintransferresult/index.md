---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBInTransferResult` インターフェイスは、`USBDevice` インターフェイスの `transferIn()` および `controlTransferIn()` メソッドを呼び出した結果を提供します。これは、USB デバイスから USB ホストへのデータ転送の要求の結果を表します。

## コンストラクター

- {{domxref("USBInTransferResult.USBInTransferResult", "USBInTransferResult()")}} {{Experimental_Inline}}
  - : 指定の `status` および `data` フィールドを持つ新しい `USBInTransferResult` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBInTransferResult.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : あれば、USB デバイスから受信したデータが格納された `DataView` オブジェクトを返します。
- {{domxref("USBInTransferResult.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"stall"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。コントロールエンドポイントでのストールをクリアする必要はありません。バルクエンドポイントやインタラプトエンドポイントでのストールは、次の `transferIn()` の呼び出しの前に `clearHalt()` を呼び出してクリアする必要があります。
    - `"babble"` — デバイスは想定より多くのデータで応答しました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
