---
title: "WorkerGlobalScope: crossOriginIsolated プロパティ"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("Web Workers API")}}

**`crossOriginIsolated`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、ウェブサイトがオリジン間隔離状態にあるかどうかを示す論理値を返します。この状態はサイドチャネル攻撃のリスクを軽減し、いくつかの機能をアンロックします。

- {{JSxRef("SharedArrayBuffer")}} を作成し、{{DOMxRef("DedicatedWorkerGlobalScope.postMessage()")}} または {{DOMxRef("MessagePort.postMessage()")}} を呼び出して送信することができます。
- {{DOMxRef("Performance.now()")}} の方が精度が高いです。
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} にアクセスすることができます。

{{HTTPHeader("Cross-Origin-Opener-Policy")}} レスポンスヘッダーの値が `same-origin` で、{{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーの値が `require-corp` または `credentialless` である場合、ウェブサイトはオリジン間隔離状態になります。

## 値

論理値です。

## 例

```js
const myWorker = new Worker("worker.js");

if (self.crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
