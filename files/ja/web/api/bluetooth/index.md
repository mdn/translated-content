---
title: Bluetooth
slug: Web/API/Bluetooth
l10n:
  sourceCommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

**`Bluetooth`** は [Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) のインターフェイスで、指定のオプションに合致する {{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{domxref("EventTarget")}} から継承したプロパティがあります。_

## インスタンスメソッド

- {{domxref("Bluetooth.getAvailability","Bluetooth.getAvailability()")}} {{Experimental_Inline}}
  - : ユーザーエージェントに Bluetooth を扱う機能があるかを表す論理値で解決する {{jsxref("Promise")}} を返します。これが何を返すかに影響するオプションをユーザーが設定できるユーザーエージェントもあります。このオプションが設定されている場合、このメソッドはその値を返します。
- {{domxref("Bluetooth.getDevices","Bluetooth.getDevices()")}} {{Experimental_Inline}}
  - : オリジンが既に使用する許可を得ている {{domxref("BluetoothDevice")}} の配列で解決する {{jsxref("Promise")}} を返します。許可は {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} を呼び出すことによって得ることができます。
- {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} {{Experimental_Inline}}
  - : 指定のオプションに合致する {{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
