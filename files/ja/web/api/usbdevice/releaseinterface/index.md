---
title: "USBDevice: releaseInterface() メソッド"
slug: Web/API/USBDevice/releaseInterface
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`releaseInterface()`** メソッドは、要求済みのインターフェイスが排他アクセスから解放されたら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
releaseInterface(interfaceNumber)
```

### 引数

- `interfaceNumber`
  - : 現在要求済みのインターフェイスのデバイス固有のインデックスです。

### 返値

{{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
