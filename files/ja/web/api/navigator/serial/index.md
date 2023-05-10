---
title: Navigator.serial
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

{{domxref("Navigator")}} インターフェイスの読み取り専用プロパティ **`serial`** は、{{domxref("Web Serial API")}} のエントリーポイントを表す {{domxref("Serial")}} オブジェクトを返します。

読み取り時、常に同じ {{domxref("Serial")}} オブジェクトのインスタンスが返ります。

## 値

{{domxref("Serial")}} オブジェクトです。

## 例

この例では、`getPorts()` メソッドを用いて利用可能なポートのリストを初期化します。

```js
navigator.serial.getPorts()
.then((ports) => {
  // ページが読み込まれた時、`ports` を用いて利用可能なポートのリストを初期化します。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [シリアルポートとの読み書き](https://web.dev/serial/)
- [Getting started with the web serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
