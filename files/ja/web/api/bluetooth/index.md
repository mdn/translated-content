---
title: Bluetooth
slug: Web/API/Bluetooth
---

{{ apiref("W3C Bluetooth API") }} {{Non-standard_header()}}

[Web Bluetooth API](/ja/Web/API/Web_Bluetooth_API) の **`Bluetooth`** インターフェースは、オプション指定した {{domxref("BluetoothDevice")}} の {{jsxref("Promise")}} を返します。

## インターフェース

```
interface Bluetooth {
  Promise<BluetoothDevice> requestDevice(RequestDeviceOptions options);
};
Bluetooth implements EventTarget;
Bluetooth implements BluetoothDeviceEventHandlers;
Bluetooth implements CharacteristicEventHandlers;
Bluetooth implements ServiceEventHandlers;
```

## プロパティ

なし

## メソッド

- {{domxref("Bluetooth.requestDevice()")}}
  - : オプション指定した {{domxref("BluetoothDevice")}} の {{jsxref("Promise")}} を返す。

## 仕様

| 仕様                                                                         | ステータス                           | コメント   |
| ---------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Web Bluetooth', '#bluetooth', 'Bluetooth')}} | {{Spec2('Web Bluetooth')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.Bluetooth")}}
