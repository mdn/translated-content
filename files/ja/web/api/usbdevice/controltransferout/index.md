---
title: "USBDevice: controlTransferOut() メソッド"
slug: Web/API/USBDevice/controlTransferOut
l10n:
  sourceCommit: 6edc3d2f9ee4296d467b0e2faa3e720fbe6a07e0
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`controlTransferOut()`** メソッドは、コマンドまたは状態の操作の USB デバイスからの転送が完了したら {{domxref("USBOutTransferResult")}} で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
controlTransferOut(setup, data)
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

- `data`
  - : デバイスに転送されるデータが格納された {{jsxref("TypedArray")}} です。すべてのコマンドで `data` が必要なわけではありません。引数 `value` だけでデータを送ることができるコマンドもあります。特定の要求に何が必要かは、デバイスを確認してください。

### 返値

{{domxref("USBOutTransferResult")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
