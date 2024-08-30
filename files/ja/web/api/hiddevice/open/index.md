---
title: HIDDevice.open()
slug: Web/API/HIDDevice/open
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} の **`open()`** メソッドは、オペレーティングシステムに HID デバイスを開くことを要求します。

> [!NOTE]
> HID デバイスは自動では開かれません。そのため、{{domxref("HID.requestDevice()")}} から返された {{domxref("HIDDevice")}} でデータの転送を可能にするには、このメソッドを用いて開く必要があります。

## 構文

```js-nolint
open()
```

### 引数

なし。

### 返値

接続が開かれたら `undefined` で解決する {{jsxref("Promise")}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 接続が既に開かれているとき投げられます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 何らかの理由により接続を開くのに失敗したとき投げられます。

## 例

この例では、データの送受信を試みる前に HID 接続を開くのを待ちます。

```js
await device.open();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
