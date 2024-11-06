---
title: Worker.terminate()
slug: Web/API/Worker/terminate
l10n:
  sourceCommit: 1529c6f4990c6d66190b8e50b38aa605f298c10b
---

{{APIRef("Web Workers API")}}

**`terminate()`** は {{domxref("Worker")}} インターフェイスのメソッドで、このワーカーを即座に停止させます。これはワーカーに対してその動作を終了する機会を提供するものではありません。即時に停止させます。

## 構文

```js
terminate();
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

所属先の {{domxref("Worker")}} インターフェイス。
