---
title: "Bluetooth: getDevices() メソッド"
slug: Web/API/Bluetooth/getDevices
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Bluetooth API")}}

[Web Bluetooth API](/ja/docs/Web/API/Web_Bluetooth_API) の {{DOMxRef("Bluetooth")}} インターフェイスの **`getDevices()`** メソッドは、オリジンがアクセスを許可されている Bluetooth デバイスを公開します。このメソッドは許可を要求するプロンプトを表示しません。

> **メモ:** このメソッドは、圏外だったり電源が切られていたりするものを含め、オリジンが現在アクセスを許可されている各デバイスに対応する {{DOMxRef("BluetoothDevice")}} を返します。

## 構文

```js-nolint
getDevices()
```

### 引数

なし

### 返値

{{DOMxRef("BluetoothDevice")}} の配列で解決する {{JSxRef("Promise")}} を返します。

## 例外

このメソッドは例外を投げません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
