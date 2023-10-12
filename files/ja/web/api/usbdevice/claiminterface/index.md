---
title: "USBDevice: claimInterface() メソッド"
slug: Web/API/USBDevice/claimInterface
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`claimInterface()`** メソッドは、要求したインターフェイスの排他アクセスを獲得したら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
claimInterface(interfaceNumber)
```

### 引数

- `interfaceNumber`
  - : デバイスが対応しているインターフェイスのうち 1 個のインデックスです。インターフェイスはデバイス固有です。

### 返値

{{jsxref("promise")}} です。

## 例

以下の例では、USB デバイスへの接続時に使用される `claimInterface()` を示します。

```js
async function connectDevice(usbDevice) {
  await usbDevice.open();
  if (usbDevice.configuration === null) await usbDevice.selectConfiguration(1);
  await usbDevice.claimInterface(0);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
