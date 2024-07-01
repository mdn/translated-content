---
title: DedicatedWorkerGlobalScope.name
slug: Web/API/DedicatedWorkerGlobalScope/name
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Web Workers API")}}

**`name`** は {{domxref("DedicatedWorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Worker")}} が作成された際に（オプションで）指定された名前を返すものです。これは {{domxref("Worker.Worker", "Worker()")}} コンストラクターが {{domxref("DedicatedWorkerGlobalScope")}} への参照を取得するために渡すことができる名前になります。

## 値

文字列です。

## 例

もしワーカーが `name` オプションを持つコンストラクターで作成された場合、

```js
const myWorker = new Worker("worker.js", { name: "myWorker" });
```

これで {{domxref("DedicatedWorkerGlobalScope")}} は "myWorker" という名前を持ち、ワーカー内から、

```js
self.name;
```

を実行すると返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DedicatedWorkerGlobalScope")}}
