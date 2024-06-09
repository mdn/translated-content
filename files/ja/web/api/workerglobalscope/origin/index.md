---
title: "WorkerGlobalScope: origin プロパティ"
short-title: origin
slug: Web/API/WorkerGlobalScope/origin
l10n:
  sourceCommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{APIRef("Web Workers API")}}

**`origin`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、グローバルスコープのオリジンを文字列でシリアライズして返します。

## 値

文字列です。

## 例

ワーカースコープの内部から以下のスニペットを実行すると、メッセージを受信するたびにワーカーのグローバルスコープの元をコンソールにログ出力します。

```js
self.onmessage = () => {
  console.log(self.origin);
};
```

オリジンがスキーム/ホスト/ポートのタプルでない場合（ローカルで実行しようとしている場合、つまり `file://` URL 経由で実行しようとしている場合）、 `origin` は文字列 `"null"` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
