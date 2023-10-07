---
title: "Bluetooth: getAvailability() メソッド"
slug: Web/API/Bluetooth/getAvailability
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Bluetooth API")}}

{{DOMxRef("Bluetooth")}} インターフェイスの **`getAvailability()`** メソッドは、デバイスに Bluetooth アダプターがある場合は `true` を返し、そうでない場合は `false` を返します。(ユーザーがブラウザーを本当の値を公開しないよう設定した場合は除きます)

> **メモ:** `getAvailability()` が `true` を返す場合でも、ユーザーが Web Bluetooth API の使用を許可しないかもしれません。
> ({{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} が {{DOMxRef("BluetoothDevice")}} で解決しないかもしれません)
> また、ユーザーはブラウザーを本当の値ではなく固定の値を返すよう設定する可能性があります。

## 構文

```js-nolint
getAvailability()
```

### 引数

なし

### 返値

{{JSxRef("Boolean")}} で解決する {{JSxRef("Promise")}} を返します。

## 例外

このメソッドは例外を投げません。

## 例

この断片は、Bluetooth に対応しているかを表すメッセージをコンソールに出力します。

```js
navigator.bluetooth.getAvailability().then((available) => {
  if (available) {
    console.log("このデバイスは Bluetooth に対応しています！");
  } else {
    console.log("残念！Bluetooth に対応していません");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
