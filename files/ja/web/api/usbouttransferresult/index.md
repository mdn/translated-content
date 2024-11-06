---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBOutTransferResult` インターフェイスは、`USBDevice` インターフェイスの `transferOut()` および `controlTransferOut()` メソッドを呼び出した結果を提供します。これは、USB ホストから USB デバイスへのデータ転送の要求の結果を表します。

## コンストラクター

- {{domxref("USBOutTransferResult.USBOutTransferResult", "USBOutTransferResult()")}} {{Experimental_Inline}}
  - : 指定の `status` および `bytesWritten` フィールドを持つ新しい `USBOutTransferResult` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBOutTransferResult.bytesWritten")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 転送要求によりデバイスに送られたバイト数を返します。
- {{domxref("USBOutTransferResult.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : 転送要求の状態を返します。以下のいずれかです。

    - `"ok"` — 転送は成功しました。
    - `"stall"` — デバイスはエンドポイントでストール状態を発生させ、エラーを示しました。バルクエンドポイントやインタラプトエンドポイントでのストールは、次の `transferOut()` の呼び出しの前に `clearHalt()` を呼び出してクリアする必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
