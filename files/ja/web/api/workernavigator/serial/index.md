---
title: WorkerNavigator.serial
slug: Web/API/WorkerNavigator/serial
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}

**`serial`** は {{domxref("WorkerNavigator")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Serial")}} オブジェクトを返します。これは{{domxref("Web Serial API", "ウェブシリアル API", "", 1)}} へのエントリーポイントを表してます。

取得する際には、常に同じ {{domxref("Serial")}} オブジェクトのインスタンスが返されることになります。

## 値

{{domxref("Serial")}} オブジェクトです。

## 例

以下の例では、`getPorts()` メソッドを使用して、使用できるポートのリストを初期化しています。

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports.
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Read from and write to a serial port](https://web.dev/serial/)
- [Getting started with the web serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
