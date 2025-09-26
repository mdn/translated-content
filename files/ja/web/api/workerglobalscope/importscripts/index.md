---
title: "WorkerGlobalScope: importScripts() メソッド"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

**`importScripts()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、 1 つ以上のスクリプトをワーカーのスコープ内に同期的に読み込みます。

## 構文

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### 引数

- `pathN`
  - : 文字列値で、インポートするスクリプトの URL を表します。URLは絶対または相対です。相対 URL の場合、ワーカーのエントリースクリプトの URL を基準とします。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NetworkError`
  - : インポートされたスクリプトが `text/javascript` の MIME タイプでないか、許可された[古い JavaScript の MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types)のいずれでもない状態で提供された場合。
- {{jsxref("TypeError")}}
  - : 現在の {{domxref("WorkerGlobalScope")}} がモジュールである場合に発生します。代わりに [`import`](/ja/docs/Web/JavaScript/Reference/Statements/import) を使用してください。

## 例

`foo.js` という別のスクリプトに書かれた機能を `worker.js` の中で使いたい場合は、次の行でインポートすることができます。

```js
importScripts("foo.js");
```

foo.js は、ワーカーのエントリーポイントと同じ URL サブツリーにある必要があります。例えば、このワーカーが `new Worker("worker.js")` で作成された場合、 `worker.js` がエントリーポイントになります。 `worker.js` が `https://example.com/scripts/worker.js` にある場合、 `foo.js` は `https://example.com/scripts/foo.js` にある必要があります。

`importScripts()` と `self.importScripts()` は実質的に同じです。 — 両方とも `importScripts()` をワーカーの内部スコープの中から呼び出すことを表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerGlobalScope")}}
