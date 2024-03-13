---
title: USBInterface
slug: Web/API/USBInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBInterface` インターフェイスは、USB デバイスが提供するインターフェイスの情報を提供します。インターフェイスは、デバイスの機能を表し、特定のプロトコルを実装し、双方向通信用のエンドポイントを含むことができます。

## コンストラクター

- {{domxref("USBInterface.USBInterface", "USBInterface()")}} {{Experimental_Inline}}
  - : 渡された `USBConfiguration` の指定のインターフェイス番号のインターフェイスの情報が格納される新しい `USBInterface` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBInterface.interfaceNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスのインターフェイス番号を返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bInterfaceNumber` フィールドと一致します。
- {{domxref("USBInterface.alternate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスで現在選択されているオルタナティブコンフィギュレーションを返します。デフォルトでは、これは `alternates` に入っている `USBAlternateInterface` の中で、`alternateSetting` が `0` のものです。`USBDevice.selectAlternateInterface()` を `alternates` に入っている他の値を渡して呼ぶことで、変えることができます。
- {{domxref("USBInterface.alternates")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスで可能なオルタナティブコンフィギュレーションそれぞれを表す `USBAlternateInterface` インターフェイスのインスタンスが格納された配列を返します。
- {{domxref("USBInterface.claimed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスが現在のページで `USBDevice.claimInterface()` を呼ぶことで要求されたかどうかを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
