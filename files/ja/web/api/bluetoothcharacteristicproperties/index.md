---
title: BluetoothCharacteristicProperties
slug: Web/API/BluetoothCharacteristicProperties
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の **`BluetoothCharacteristicProperties`** インターフェイスは、指定の {{domxref('BluetoothRemoteGATTCharacteristic')}} で有効な操作を提供します。

このインターフェイスは、{{DOMxRef("BluetoothRemoteGATTCharacteristic.properties")}} を呼ぶと返されます。

## インスタンスプロパティ

- {{DOMxRef("BluetoothCharacteristicProperties.authenticatedSignedWrites","authenticatedSignedWrites")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックの値への署名付き書き込みが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.broadcast", "broadcast")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Server Characteristic Configuration Descriptor によりキャラクタリスティックの値のブロードキャストが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.indicate","indicate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックの値のアクノリッジメントありのインジケーションが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.notify","notify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックの値のアクノリッジメントなしのノーティフィケーションが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.read", "read")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックの値の読み取りが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.reliableWrite","reliableWrite")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックへの信頼性のある書き込みが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.writableAuxiliaries","writableAuxiliaries")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックディスクリプターへの信頼性のある書き込みが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.write","write")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックへのレスポンスありの書き込みが許可されているならば `true` となる `boolean` 値を返します。
- {{DOMxRef("BluetoothCharacteristicProperties.writeWithoutResponse","writeWithoutResponse")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャラクタリスティックへのレスポンスなしの書き込みが許可されているならば `true` となる `boolean` 値を返します。

## 例

以下の例では、GATT キャラクタリスティックが値の変化の通知に対応しているかを調べる方法を示します。

```js
let device = await navigator.bluetooth.requestDevice({
  filters: [{ services: ["heart_rate"] }],
});
let gatt = await device.gatt.connect();
let service = await gatt.getPrimaryService("heart_rate");
let characteristic = await service.getCharacteristic("heart_rate_measurement");
if (characteristic.properties.notify) {
  characteristic.addEventListener(
    "characteristicvaluechanged",
    async (event) => {
      console.log(`心拍数測定の受信: ${event.target.value}`);
    },
  );
  await characteristic.startNotifications();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
