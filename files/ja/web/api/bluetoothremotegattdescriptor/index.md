---
title: BluetoothRemoteGATTDescriptor
slug: Web/API/BluetoothRemoteGATTDescriptor
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の `BluetoothRemoteGATTDescriptor` は、GATT ディスクリプターを提供します。これは、キャラクタリスティックの値に関する詳細情報を提供します。

## インスタンスプロパティ

- {{DOMxRef("BluetoothRemoteGATTDescriptor.characteristic")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このディスクリプターが属する {{DOMxRef("BluetoothRemoteGATTCharacteristic")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTDescriptor.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このキャラクタリスティックディスクリプターの UUID を返します。たとえば、theClient
    Characteristic Configuration descriptor は「`00002902-0000-1000-8000-00805f9b34fb`」です。
- {{DOMxRef("BluetoothRemoteGATTDescriptor.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在キャッシュされているディスクリプターの値を返します。この値はディスクリプターの値が読まれると更新されます。

## インスタンスメソッド

- {{DOMxRef("BluetoothRemoteGATTDescriptor.readValue()")}} {{Experimental_Inline}}
  - : 利用可能で対応していれば `value` プロパティの複製が格納された {{JSxRef("ArrayBuffer")}} で解決する {{JSxRef("Promise")}} を返します。そうでない場合、エラーを投げます。
- {{DOMxRef("BluetoothRemoteGATTDescriptor.writeValue()")}} {{Experimental_Inline}}
  - : `value` プロパティを {{JSxRef("ArrayBuffer")}} に格納されたバイト列に設定し、{{JSxRef("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
