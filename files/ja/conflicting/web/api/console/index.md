---
title: WorkerGlobalScope.console
slug: conflicting/Web/API/console
original_slug: Web/API/WorkerGlobalScope/console
---

{{APIRef("Web Workers API")}}{{Non-standard_header}}

**`console`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、このワーカーのブラウザーコンソールへのアクセスをアクセスを提供する {{domxref("console")}} オブジェクトを返します。

## 値

{{domxref("console")}} オブジェクトです。

## 例

このプロパティはワーカー内でデバッグのためにブラウザコンソールへアクセスすることを可能にします。よって、例えば、

```js
console.log('test');
```

ワーカーの中からこのように呼び出して（これは基本的に `self.console.log('test');` と同じです。 {{domxref("WorkerGlobalScope.self")}} で参照できるワーカーのスコープで呼び出されるためです）、テストメッセージをブラウザーのコンソールに出力することができます。

もし、 `console.log()` を読み込まれた単一のウィンドウで動作する {{domxref("DedicatedWorkerGlobalScope")}} や他のワーカースコープから呼び出しているのであれば、そのタブのウェブコンソールがログを受け取ります。しかし、 `console.log()` を {{domxref("SharedWorkerGlobalScope")}} から呼び出している場合、グローバルブラウザーコンソールがログを受信します。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console")}}
- {{domxref("WorkerGlobalScope")}}
