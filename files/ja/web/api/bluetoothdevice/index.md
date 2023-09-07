---
title: BluetoothDevice
slug: Web/API/BluetoothDevice
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の`BluetoothDevice` インターフェイスは、特定のスクリプト実行環境下における Bluetooth デバイスを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{DOMxRef("BluetoothDevice.id")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : デバイスを一意に識別する文字列です。
- {{DOMxRef("BluetoothDevice.name")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : デバイスの人間にわかりやすい名前を表す文字列です。
- {{DOMxRef("BluetoothDevice.gatt")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : デバイスの {{DOMxRef("BluetoothRemoteGATTServer")}} への参照です。

## インスタンスメソッド

- {{DOMxRef("BluetoothDevice.watchAdvertisements()")}} {{Experimental_Inline}}
  - : `undefined` で解決するか、アドバタイズが何らかの理由で表示できない場合はエラーで拒否される {{jsxref("Promise")}} を返します。
- {{DOMxRef("BluetoothDevice.forget()")}} {{Experimental_Inline}}
  - : ユーザーがアクセスを許可したデバイスへのアクセスを無効化します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
