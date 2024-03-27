---
title: USBAlternateInterface
slug: Web/API/USBAlternateInterface
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBAlternateInterface` インターフェイスは、USB デバイスが提供するインターフェイスの特定のコンフィギュレーションの情報を提供します。インターフェイスには 1 個以上のオルタネイト設定があり、これらによりデバイスの動作モードに基づくエンドポイント一式の設定ができます。

## コンストラクター

- {{domxref("USBAlternateInterface.USBAlternateInterface", "USBAlternateInterface()")}} {{Experimental_Inline}}
  - : 渡された `USBInterface` の指定のオルタネイト設定番号のオルタネイトインターフェイスの情報が格納される新しい `USBAlternateInterface` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBAlternateInterface.alternateSetting")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスのオルタネイト設定番号を返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bAlternateSetting` フィールドと一致します。
- {{domxref("USBAlternateInterface.interfaceClass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスのクラスを返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bInterfaceClass` フィールドと一致します。USB Implementers Forum により、このフィールド用の[標準化された値](https://www.usb.org/defined-class-codes)が定義されています。値 `0xFF` はベンダー定義のインターフェイスを表します。
- {{domxref("USBAlternateInterface.interfaceSubclass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスのサブクラスを返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bInterfaceSubClass` フィールドと一致します。この値の意味は `interfaceClass` フィールドによります。
- {{domxref("USBAlternateInterface.interfaceProtocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスがサポートしているプロトコルを返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `bInterfaceProtocol` フィールドに一致します。この値の意味は、`interfaceClass` および `interfaceSubclass` フィールドによります。
- {{domxref("USBAlternateInterface.interfaceName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスにより提供されていれば、このインターフェイスの名前を返します。これはこのインターフェイスを定義しているインターフェイスディスクリプターの `iInterface` フィールドで指定されたインデックスのストリングディスクリプターの値です。
- {{domxref("USBAlternateInterface.endpoints")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このインターフェイスを構成するエンドポイントそれぞれを表す `USBEndpoint` インターフェイスのインスタンスが格納された配列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
