---
title: BluetoothRemoteGATTService
slug: Web/API/BluetoothRemoteGATTService
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の `BluetoothRemoteGATTService` インターフェイスは、GATT サーバーにより提供されるサービスを表します。デバイス、参照されるサービス、このサービスのキャラクタリスティックのリストも含みます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("BluetoothRemoteGATTService.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("BluetoothDevice")}} のインスタンスを通じて、この Bluetooth デバイスの情報を返します。
- {{domxref("BluetoothRemoteGATTService.isPrimary")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : これがプライマリーサービスなのかセカンダリーサービスなのかを表す論理値を返します。
- {{domxref("BluetoothRemoteGATTService.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このサービスの UUID を表す文字列を返します。

## インスタンスメソッド

- {{domxref("BluetoothRemoteGATTService.getCharacteristic()")}} {{Experimental_Inline}}
  - : 指定の universally unique identifier (UUID) に対応する {{domxref("BluetoothRemoteGATTCharacteristic")}} のインスタンスで解決する {{jsxref("Promise")}} を返します。
- {{domxref("BluetoothRemoteGATTService.getCharacteristics()")}} {{Experimental_Inline}}
  - : 省略可能な universally unique identifier (UUID) に対応する {{domxref("BluetoothRemoteGATTCharacteristic")}} のインスタンスの {{jsxref("Array")}} で解決する {{jsxref("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
