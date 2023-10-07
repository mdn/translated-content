---
title: WorkerLocation
slug: Web/API/WorkerLocation
l10n:
  sourceCommit: 2c732b2ab1969d6ae887b865b11ba27de225f291
---

{{APIRef("Web Workers API")}}

**`WorkerLocation`** インターフェイスは、ワーカー ({{domxref("Worker")}}) で実行されているスクリプトの絶対的な場所を定義します。そのようなオブジェクトはワーカーごとに初期化され、 {{domxref("WorkerGlobalScope.location")}} プロパティから利用することができます。これは `self.location` を呼び出すことで取得することができます。

このインターフェイスは、ウェブワーカーのコンテキストで実行されている JavaScript のスクリプト内でのみ見ることができます。

## インスタンスプロパティ

- {{domxref("WorkerLocation.href")}} {{ReadOnlyInline}}
  - : このワーカーの位置のシリアライズされた {{domxref("URL")}} が入った文字列を返します。
- {{domxref("WorkerLocation.protocol")}} {{ReadOnlyInline}}
  - : このワーカーの位置のプロトコル部分 ({{domxref("URL.protocol", "protocol")}}) が入った文字列です。
- {{domxref("WorkerLocation.host")}} {{ReadOnlyInline}}
  - : このワーカーの位置のうち、ホスト部分 ({{domxref("URL.host", "host")}}) が入った文字列です。
- {{domxref("WorkerLocation.hostname")}} {{ReadOnlyInline}}
  - : このワーカーの位置のうち、ホスト名部分 ({{domxref("URL.hostname", "hostname")}}) が入った文字列です。
- {{domxref("WorkerLocation.origin")}} {{ReadOnlyInline}}
  - : このワーカーのオリジン ({{domxref("URL.origin", "origin")}}) を返します。
- {{domxref("WorkerLocation.port")}} {{ReadOnlyInline}}
  - : このワーカーの位置のうち、ポート番号部分 ({{domxref("URL.port", "port")}}) が入った文字列です。
- {{domxref("WorkerLocation.pathname")}} {{ReadOnlyInline}}
  - : このワーカーの位置のうち、パス名部分 ({{domxref("URL.pathname", "pathname")}}) が入った文字列です。
- {{domxref("WorkerLocation.search")}} {{ReadOnlyInline}}
  - : このワーカーの位置のうち、検索引数部分 ({{domxref("URL.search", "search")}}) が入った文字列です。
- {{domxref("WorkerLocation.hash")}} {{ReadOnlyInline}}
  - : このワーカーの位置のうち、ハッシュ部分 ({{domxref("URL.hash", "hash")}}) が入った文字列です。

## インスタンスメソッド

- {{domxref("WorkerLocation.toString()")}}
  - : このワーカーの位置のシリアライズされた {{domxref("URL")}} が入った文字列を返します。 {{domxref("WorkerLocation.href")}} と同じです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のワーカーに関するインターフェイス: {{domxref("Worker")}}、{{domxref("WorkerNavigator")}}、{{domxref("WorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
