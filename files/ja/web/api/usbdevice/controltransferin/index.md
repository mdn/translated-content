---
title: "USBDevice: controlTransferIn() メソッド"
slug: Web/API/USBDevice/controlTransferIn
l10n:
  sourceCommit: df1b34262b09c40014b9c18ed41edcd85a37f4df
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`controlTransferIn()`** メソッドは、コマンドまたは状態の操作の要求の USB デバイスへの送信 (USB デバイスでの受信) が完了したら {{domxref("USBInTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
controlTransferIn(setup, length)
```

### 引数

- `setup`
  - : オプションを設定するオブジェクトです。以下のオプションが使用可能です。
    - `requestType`
      - : 転送の性質を示します。`"standard"` (すべての USB デバイスに共通)、`"class"` (業界標準のクラスまたはデバイスに共通)、`"vendor"` のいずれかの値でなければなりません。
    - `recipient`
      - : デバイス上の転送の対象を指定します。`"device"`、`"interface"`、`"endpoint"`、`"other"` のいずれかです。
    - `request`
      - : ベンダー固有のコマンドです。
    - `value`
      - : ベンダー固有のリクエストパラメーターです。
    - `index`
      - : 宛先のインターフェイス番号です。

- `length`
  - : デバイスから読み取る最大のバイト数です。実際のデータは、解決したプロミス内の {{domxref("USBInTransferResult")}} に格納されます。

### 返値

{{domxref("USBInTransferResult")}} で解決する {{jsxref("promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
