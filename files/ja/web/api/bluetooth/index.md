---
title: Bluetooth
slug: Web/API/Bluetooth
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の **`Bluetooth`** インターフェイスは、指定のオプションに合致する {{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{domxref("EventTarget")}} からプロパティを継承します。_

## インスタンスメソッド

- {{domxref("Bluetooth.getAvailability","Bluetooth.getAvailability()")}} {{Experimental_Inline}}
  - : ユーザーエージェントに Bluetooth を扱う機能があるかを表す {{jsxref("boolean")}} 値で解決する {{jsxref("Promise")}} を返します。これが何を返すかに影響するオプションをユーザーが設定できるユーザーエージェントもあります。このオプションが設定されている場合、このメソッドはその値を返します。
- {{domxref("Bluetooth.getDevices","Bluetooth.getDevices()")}} {{Experimental_Inline}}
  - : オリジンが既に {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} の呼び出しにより使用する許可を得ている {{domxref("BluetoothDevice")}} の配列で解決する {{jsxref("Promise")}} を返します。
- {{domxref("Bluetooth.requestDevice","Bluetooth.requestDevice()")}} {{Experimental_Inline}}
  - : 指定のオプションに合致する {{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("Bluetooth.availabilitychanged_event", "availabilitychanged")}} {{Experimental_Inline}}
  - : Bluetooth の能力のうち利用可能性が変化したとき発火するイベントです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
