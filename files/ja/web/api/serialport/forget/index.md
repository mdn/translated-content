---
title: SerialPort.forget()
slug: Web/API/SerialPort/forget
---

{{securecontext_header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} インターフェイスの **`SerialPort.forget()`** メソッドは、ポートを閉じ、忘れる処理が完了したら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
forget()
```

### 引数

なし。

### 返値

ポートを閉じ、デバイスを忘れ、許可をリセットする処理が完了したら `undefined` で解決する {{jsxref("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
