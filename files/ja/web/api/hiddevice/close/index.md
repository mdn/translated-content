---
title: HIDDevice.close()
slug: Web/API/HIDDevice/close
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの **`close()`** メソッドは、HID デバイスとの接続を閉じます。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返り値

接続が閉じられたら `undefined` で解決する {{jsxref("Promise")}} を返します。

## 例

この例では、全てのデータの送受信が完了した後、HID デバイスを閉じます。

```js
await device.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
