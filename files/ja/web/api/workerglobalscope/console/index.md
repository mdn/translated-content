---
title: WorkerGlobalScope.console
slug: Web/API/WorkerGlobalScope/console
tags:
  - API
  - ウェブワーカー
  - リファレンス
  - リファレンス(2)
  - ワーカーグローバルスコープ
  - 読み込み専用
translation_of: Web/API/WorkerGlobalScope/console
---
{{APIRef("Web Workers API")}}{{Non-standard_header}}

{{domxref("Console")}} インターフェイスの読み取り専用 `console` プロパティは、ワーカーにブラウザコンソールへのアクセスを提供する {{domxref("Console")}} オブジェクトを返します。

## 構文

```js
var consoleObj = self.console;
```

### 値

{{domxref("Console")}} オブジェクト

## 例

このプロパティはワーカー内でデバッグのためにブラウザコンソールへアクセスすることを可能にします。よって、例えばこのようにコールできます

```js
console.log('test');
```

inside a worker (which would basically be the equivalent of `self.console.log('test');`, as these are being called on the worker scope, which can be referenced with {{domxref("WorkerGlobalScope.self")}}), to return a test message out to the browser console.

If you are calling `console.log()` from a {{domxref("DedicatedWorkerGlobalScope")}} or other worker scope that acts on a single loaded window, that tab's web console will receive the logs. However, If you are calling `console.log()` from a {{domxref("SharedWorkerGlobalScope")}}, the global browser console will receive the logs.

## 仕様

仕様の一部ではありません。

## Browser compatibility

{{Compat("api.WorkerGlobalScope.console")}}

## 関連

- {{domxref("Console")}}
- {{domxref("WorkerGlobalScope")}}
