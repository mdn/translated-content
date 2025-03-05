---
title: Serial.getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Serial")}} インターフェイスの **`getPorts()`** メソッドは、接続されており、かつオリジンにアクセス許可があるシリアルポートを表す {{domxref("SerialPort")}} の配列で解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
getPorts()
```

### 引数

なし。

### 返値

{{domxref("SerialPort")}} オブジェクトの配列で解決する {{jsxref("Promise")}} を返します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : [Feature Policy](/ja/docs/Web/HTTP/Permissions_Policy) でこの API の使用が制限されていたり、ユーザーの操作によって API の使用が許可されていないとき、返された `Promise` がこのエラーで拒否されます。

## 例

この例では、`getPorts()` を用いて利用可能なポートのリストを初期化します。

```js
navigator.serial.getPorts().then((ports) => {
  // ページの読み込み時、`ports` を用いて利用可能なポートのリストを初期化します。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
