---
title: "Worker: terminate() メソッド"
short-title: terminate()
slug: Web/API/Worker/terminate
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

**`terminate()`** は {{domxref("Worker")}} インターフェイスのメソッドで、このワーカーを即座に停止させます。これはワーカーに対してその動作を終了する機会を提供するものではありません。即時に停止させます。

## 構文

```js-nolint
terminate()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次のコードでは {{domxref("Worker")}} オブジェクトを {{domxref("Worker.Worker", "Worker()")}} コンストラクターで作成したあと、すぐに停止させます。

```js
const myWorker = new Worker("worker.js");

myWorker.terminate();
```

> [!NOTE]
> 専用ワーカーおよび共有ワーカーは、 {{domxref("Worker")}} インスタンスから {{domxref("DedicatedWorkerGlobalScope.close()")}} または {{domxref("SharedWorkerGlobalScope.close()")}} メソッドを使用して停止することもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Worker")}} インターフェイス
- {{domxref("DedicatedWorkerGlobalScope.close()")}}
- {{domxref("SharedWorkerGlobalScope.close()")}}
