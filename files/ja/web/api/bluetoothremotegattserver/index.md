---
title: BluetoothRemoteGATTServer
slug: Web/API/BluetoothRemoteGATTServer
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の **`BluetoothRemoteGATTServer`** インターフェイスは、リモートデバイス上の GATT サーバーを表します。

## インスタンスプロパティ

- {{DOMxRef("BluetoothRemoteGATTServer.connected")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このスクリプト実行環境が `this.device` に接続されている間 `true` を返す論理値です。ユーザーエージェントが物理的に接続されていても `false` になる可能性があります。
- {{DOMxRef("BluetoothRemoteGATTServer.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このサーバーを動かしている {{DOMxRef("BluetoothDevice")}} への参照です。

## インスタンスメソッド

- {{DOMxRef("BluetoothRemoteGATTServer.connect()")}} {{Experimental_Inline}}
  - : このスクリプト実行環境を `this.device` に接続させます。
- {{DOMxRef("BluetoothRemoteGATTServer.disconnect()")}} {{Experimental_Inline}}
  - : このスクリプト実行環境を `this.device` から切断させます。
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryService()")}} {{Experimental_Inline}}
  - : Bluetooth デバイスが提供している指定の `BluetoothServiceUUID` に対応するプライマリー {{DOMxRef("BluetoothRemoteGATTService")}} で解決するプロミスを返します。
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryServices()")}} {{Experimental_Inline}}
  - : Bluetooth デバイスが提供している指定の `BluetoothServiceUUID` に対応するプライマリー {{DOMxRef("BluetoothRemoteGATTService")}} オブジェクトのリストで解決するプロミスを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
