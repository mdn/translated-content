---
title: "Serial: getPorts() メソッド"
short-title: getPorts()
slug: Web/API/Serial/getPorts
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

**`getPorts()`** は {{domxref("Serial")}} インターフェイスのメソッドで、接続されており、かつこのオリジンにアクセス許可があるシリアルポートを表す {{domxref("SerialPort")}} の配列で解決するプロミス ({{jsxref("Promise")}}) を返します。

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
  - : 返された `Promise` は、以下のいずれかの場合、このエラーで拒否されます。
    - {{httpheader('Permissions-Policy/serial','serial')}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)により、この機能の使用がブロックされます。
    - ユーザーがその権限を拒否しました。

## 例

### 利用可能なポートの一覧

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
