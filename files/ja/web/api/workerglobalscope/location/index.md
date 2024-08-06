---
title: "WorkerGlobalScope: location プロパティ"
short-title: location
slug: Web/API/WorkerGlobalScope/location
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{APIRef("Web Workers API")}}

**`location`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、このワーカーに関連付けられた {{domxref("WorkerLocation")}} を返します。これは特有の location オブジェクトであり、大部分は閲覧スコープの {{domxref("Location")}} のサブセットですが、ワーカーに合わせたものです。

## 値

{{domxref("WorkerLocation")}} オブジェクトです。

## 例

`localhost:8000` で配信される文書で、ワーカー内で

```js
console.log(location);
```

を呼び出すと（これらは基本的に `self.console.log(self.location);` と同等であり、ワーカーのスコープで呼び出されたとき、 {{domxref("WorkerGlobalScope.self")}} で参照されるもの）、 {{domxref("WorkerLocation")}} オブジェクトが次のようにコンソールに出力されるのが分かるでしょう。

```plain
WorkerLocation {hash: "", search: "", pathname: "/worker.js", port: "8000", hostname: "localhost"…}
  hash: ""
  host: "localhost:8000"
  hostname: "localhost"
  href: "http://localhost:8000/worker.js"
  origin: "http://localhost:8000"
  pathname: "/worker.js"
  port: "8000"
  protocol: "http:"
  search: ""
  __proto__: WorkerLocation
```

この location オブジェクトを使用して、通常の {{domxref("Location")}} オブジェクトと同様、文書の場所に関するより詳細な情報を得ることができます。

> [!NOTE]
> Firefox では、共有/サービスワーカー内で `console.log` を使用する際にバグがあり（[Firefox バグ 1058644](https://bugzil.la/1058644) を参照）、おかしな結果を返すことがありますが、これはすぐに修正されるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{domxref("WorkerGlobalScope")}}
