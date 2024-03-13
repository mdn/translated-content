---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Workers API")}}

**`port`** は {{domxref("SharedWorker")}} インターフェイスのプロパティで、共有ワーカーを制御したり通信したりするために使用する {{domxref("MessagePort")}} オブジェクトを返します。

### 値

{{domxref("MessagePort")}} オブジェクトです。

## 例

次のコードスニペットでは、 `SharedWorker` オブジェクトを {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクターを使用して生成しています。 {{domxref("MessagePort")}} オブジェクトを`SharedWorker.port` プロパティ経由で使用することで、複数のスクリプトからワーカーにアクセスできます。 port は `start()` メソッドを使用して開始します。

```js
const myWorker = new SharedWorker("worker.js");
myWorker.port.start();
```

完全な例は、[基本的な共有ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[共有ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SharedWorker")}}
