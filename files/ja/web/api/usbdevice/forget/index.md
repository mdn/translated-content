---
title: "USBDevice: forget() メソッド"
slug: Web/API/USBDevice/forget
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBDevice")}} インターフェイスの **`forget()`** メソッドは、すべての実行中の操作が中止され、すべての開いているインターフェイスが解放され、デバイスのセッションが終了し、許可をリセットしたら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
forget()
```

### 引数

なし

### 返値

デバイスのアクセス許可を取り消したら `undefined` で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
