---
title: "USBDevice: selectConfiguration() メソッド"
slug: Web/API/USBDevice/selectConfiguration
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`selectConfiguration()`** メソッドは、指定のコンフィギュレーションが選択されたら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
selectConfiguration(configurationValue)
```

### 引数

- `configurationValue`
  - : デバイス固有のコンフィグレーションの番号です。

### 返値

{{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
