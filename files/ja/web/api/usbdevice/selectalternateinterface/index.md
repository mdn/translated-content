---
title: "USBDevice: selectAlternateInterface() メソッド"
slug: Web/API/USBDevice/selectAlternateInterface
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`selectAlternateInterface()`** メソッドは、指定のオルタナティブエンドポイントが選択されたら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
selectAlternateInterface(interfaceNumber, alternateSetting)
```

### 引数

- `interfaceNumber`
  - : デバイスが対応しているインターフェイスのうちの 1 個のインデックスです。インターフェイスはデバイス固有です。
- `alternateSetting`
  - : 選択されたインターフェイスのコンフィグレーションです。

### 返値

{{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
