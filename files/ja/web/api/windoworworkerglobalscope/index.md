---
title: WindowOrWorkerGlobalScope
slug: Web/API/WindowOrWorkerGlobalScope
tags:
  - API
  - HTML DOM
  - Service Worker
  - Window
  - WindowOrWorkerGlobalScope
  - Worker
  - WorkerGlobalScope
translation_of: Web/API/WindowOrWorkerGlobalScope
browser-compat: api.WindowOrWorkerGlobalScope
---
{{ApiRef()}}

**`WindowOrWorkerGlobalScope`** ミックスインは、{{domxref("Window")}} インターフェイスと {{domxref("WorkerGlobalScope")}} インターフェイスで共通する機能を記述します。 それぞれのインターフェイスはこのページに記載されている機能に加え、より多くの機能を持つことができます。

> **Note:** **注**: `WindowOrWorkerGlobalScope` はインターフェイスではなく、ミックスインです。実際には、`WindowOrWorkerGlobalScope` 型のオブジェクトを作成することはできません。

## プロパティ

これらのプロパティは {{domxref("WindowOrWorkerGlobalScope")}} に定義され、{{domxref("Window")}} および {{domxref("WorkerGlobalScope")}} で実装されています。

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : 現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。このオブジェクトで、オフラインで使用するデータなどを保存したり、リクエストに対してカスタムレスポンスを生成したりといったことが可能になります。
- {{domxref("WindowOrWorkerGlobalScope.crossOriginIsolated")}} {{readOnlyinline}}
  - : {{jsxref("SharedArrayBuffer")}} を {{domxref("Window.postMessage()")}} で送信できるかどうかを表す真偽値を返します。
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Indexed Database にアプリケーションが非同期にアクセスできる仕組みを提供します。このプロパティは {{domxref("IDBFactory")}} オブジェクトを返します。
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : 現在のコンテキストが安全である (`true`) か否か (`false`) を示す真偽値を返します。
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : グローバルオブジェクトのオリジンを、文字列としてシリアライズして返します。

## メソッド

これらのメソッドは {{domxref("WindowOrWorkerGlobalScope")}} に定義され、{{domxref("Window")}} および {{domxref("WorkerGlobalScope")}} で実装されています。

- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Base64 エンコーディングを使用してエンコードされたデータ文字列をデコードします。
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : バイナリーデータを Base64 でエンコードした ASCII 文字列を生成します。
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : {{domxref("WindowOrWorkerGlobalScope.setInterval()")}} で繰り返し実行されるよう設定された命令をキャンセルします。
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}} で遅延実行するよう設定した命令をキャンセルします。
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : さまざまな画像ソースを受け入れて、{{domxref("ImageBitmap")}} に解決される {{domxref("Promise")}} を返します。任意で、始点 _(sx, sy)_ から幅 sw、高さ sh の長方形でソースを切り抜くことができます。
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : ネットワークからリソースを取り込む処理を開始します。
- {{domxref("WindowOrWorkerGlobalScope.queueMicrotask()")}}
  - : マイクロタスクをキューに追加します。マイクロタスクは短い関数で、JavaScript コードの実行が完了してから JavaScript の呼び出し元に制御が返る前、コールバックや他のタスクが完了する前に実行されます。これを使うことで、より優先度の高い他のコードに干渉することなく、しかしブラウザーのランタイムが制御を取り戻す*前に*、ブラウザーの処理が潜在的に依存する作業を行うことができます。
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : ミリ秒単位で指定した時間が経過するたびに関数を実行するようスケジューリングします。
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : 指定した時間が経過したら関数を実行するようスケジューリングします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
