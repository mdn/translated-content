---
title: SerialPort.getInfo()
slug: Web/API/SerialPort/getInfo
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} インターフェイスの **`getInfo()`** メソッドは、デバイスのベンダー ID とプロダクト ID をプロパティとするオブジェクトを返します。

## 構文

```js-nolint
getInfo()
```

### 引数

なし。

### 返値

以下の値を持つオブジェクトを返します。

- `usbVendorId`
  - : ポートが USB デバイスの一部である場合、USB デバイスの製造元を特定する `unsigned short` の整数です。そうでない場合は `undefined` です。
- `usbProductId`
  - : ポートが USB デバイスの一部である場合、USB デバイスを特定する `unsigned short` の整数です。そうでない場合は `undefined` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
