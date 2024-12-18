---
title: "WorkerGlobalScope: importScripts() メソッド"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 2c732b2ab1969d6ae887b865b11ba27de225f291
---

{{APIRef("Web Workers API")}}

**`importScripts()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、 1 つ以上のスクリプトをワーカーのスコープ内に同期的に読み込みます。

## 構文

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### 引数

- `pathN`
  - : 文字列値で、インポートするスクリプトの URL を表します。URLは絶対または相対です。相対 URL の場合は、HTML 文書のベース URL からの相対 URL となります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NetworkError`
  - : インポートされたスクリプトが `text/javascript` の MIME タイプでないか、許可された[古い JavaScript の MIME タイプ](/ja/docs/Web/HTTP/MIME_types#legacy_javascript_mime_types)のいずれでもない状態で提供された場合。

## 例

`foo.js` という別のスクリプトに書かれた機能を worker.js の中で使いたい場合は、次の行でインポートすることができます。

```js
importScripts("foo.js");
```

`importScripts()` と `self.importScripts()` は実質的に同じです。 — 両方とも `importScripts()` をワーカーの内部スコープの中から呼び出すことを表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerGlobalScope")}}
