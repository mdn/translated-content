---
title: "Navigator: serial プロパティ"
short-title: serial
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`serial`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、{{domxref("Web Serial API", "ウェブシリアル API", "", 1)}} のエントリーポイントを表す {{domxref("Serial")}} オブジェクトを返します。

読み取り時、常に同じ {{domxref("Serial")}} オブジェクトのインスタンスが返ります。

## 値

{{domxref("Serial")}} オブジェクトです。

## 例

この例では、`getPorts()` メソッドを用いて利用可能なポートのリストを初期化します。

```js
navigator.serial.getPorts().then((ports) => {
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
