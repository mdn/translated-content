---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
l10n:
  sourceCommit: 3923ef69d52670cc5da97056689330c495f51cc4
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の `BluetoothRemoteGattCharacteristic` インターフェイスは、GATT キャラクタリスティックを表します。これは、周辺機器のサービスに関する詳細情報を提供する基本的なデータ要素です。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{DOMxRef("BluetoothRemoteGATTCharacteristic.service")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このキャラクタリスティックが属する {{DOMxRef("BluetoothRemoteGATTService")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このキャラクタリスティックの UUID を表す文字列を返します。たとえば、Heart Rate Measurement characteristic は `'00002a37-0000-1000-8000-00805f9b34fb'` です。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.properties")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : このキャラクタリスティックのプロパティを返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在キャッシュされているキャラクタリスティックの値です。この値は、キャラクタリスティックの値が読まれるか、ノーティフィケーションやインディケーションによって更新されると更新されます。

### イベント

- `oncharacteristicvaluechanged` {{Experimental_Inline}}
  - : `characteristicvaluechanged` イベント用のイベントハンドラーです。

## インスタンスメソッド

- {{DOMxRef("BluetoothRemoteGATTCharacteristic.getDescriptor()")}} {{Experimental_Inline}}
  - : 指定のディスクリプター UUID に対応する最初の {{DOMxRef("BluetoothRemoteGATTDescriptor")}} で解決する {{JSxRef("Promise")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.getDescriptors()")}} {{Experimental_Inline}}
  - : 指定のディスクリプター UUID に対応するすべての {{DOMxRef("BluetoothRemoteGATTDescriptor")}} オブジェクトの {{JSxRef("Array")}} で解決する {{JSxRef("Promise")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.readValue()")}} {{Experimental_Inline}}
  - : 利用可能で対応していれば、`value` プロパティの複製が格納された {{JSxRef("DataView")}} で解決する {{JSxRef("Promise")}} を返します。そうでない場合は、エラーを投げます。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValue()", "BluetoothRemoteGATTCharacteristic.writeValue(<var>value</var>)")}} {{Deprecated_Inline}}
  - : `value` プロパティを渡された {{JSxRef("ArrayBuffer")}} に格納されたバイト列に設定し、[`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"optional"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) を呼び出し、結果の {{JSxRef("Promise")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()", "BluetoothRemoteGATTCharacteristic.writeValueWithResponse(<var>value</var>)")}} {{Experimental_Inline}}
  - : `value` プロパティを渡された {{JSxRef("ArrayBuffer")}} に格納されたバイト列に設定し、[`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"required"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) を呼び出し、結果の {{JSxRef("Promise")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()", "BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse(<var>value</var>)")}} {{Experimental_Inline}}
  - : `value` プロパティを渡された {{JSxRef("ArrayBuffer")}} に格納されたバイト列に設定し、[`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"never"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) を呼び出し、結果の {{JSxRef("Promise")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.startNotifications()")}} {{Experimental_Inline}}
  - : `navigator.bluetooth` が活動中のノーティフィケーションコンテキストに追加されたら解決する {{JSxRef("Promise")}} を返します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.stopNotifications()")}} {{Experimental_Inline}}
  - : `navigator.bluetooth` が活動中のノーティフィケーションコンテキストから削除されたら解決する {{JSxRef("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
