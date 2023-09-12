---
title: USBConfiguration
slug: Web/API/USBConfiguration
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBConfiguration` インターフェイスは、USB デバイスの特定のコンフィギュレーションおよびそれがサポートするインターフェイスの情報を提供します。

## コンストラクター

- {{domxref("USBConfiguration.USBConfiguration", "USBConfiguration()")}} {{Experimental_Inline}}
  - : 渡された `USBDevice` の指定のコンフィギュレーション番号のコンフィギュレーションの情報が格納された新しい `USBConfiguration` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBConfiguration.configurationValue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このコンフィギュレーションのコンフィギュレーション番号を返します。これはデバイスによって提供されたこのコンフィギュレーションを定義しているコンフィギュレーションディスクリプターの [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) フィールドと一致します。
- {{domxref("USBConfiguration.configurationName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスによって提供されたこのコンフィギュレーションを説明する名前を返します。これはこのコンフィギュレーションを定義しているコンフィギュレーションディスクリプターの [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) フィールドで提供されるインデックスのストリングディスクリプターの値と一致します。
- {{domxref("USBConfiguration.interfaces")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このコンフィギュレーションが対応しているそれぞれのインターフェイスを表す {{domxref('USBInterface')}} のインスタンスが格納された配列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
