---
title: SharedWorkerGlobalScope.name
slug: Web/API/SharedWorkerGlobalScope/name
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Workers API")}}

**`name`** は {{domxref("SharedWorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、 {{domxref("SharedWorker")}} が作成されたときに（任意で）指定された名前を返します。これは {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクターが {{domxref("SharedWorkerGlobalScope")}} への参照を取得するために渡すことができる名前になります。

## 値

文字列です。

## 例

共有ワーカーが `name` オプションを持つコンストラクターで作成された場合。

```js
const myWorker = new SharedWorker("worker.js", { name: "mySharedWorker" });
```

これで {{domxref("SharedWorkerGlobalScope")}} は "mySharedWorker" という名前になり、次のように実行すると返すことができます。

```js
self.name;
```

共有ワーカーの中で実行してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SharedWorkerGlobalScope")}}
