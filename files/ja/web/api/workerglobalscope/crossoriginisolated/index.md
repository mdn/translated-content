---
title: "WorkerGlobalScope: crossOriginIsolated プロパティ"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

**`crossOriginIsolated`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、ウェブサイトがオリジン間分離状態にあるかどうかを示す論理値を返します。

オリジン間分離文書は、{{glossary("Browsing context", "閲覧コンテキストグループ")}}を、ポップアップおよびナビゲーション内の同一オリジン文書、および [CORS](/ja/docs/Web/HTTP/Guides/CORS) （`<iframe>` の場合は [COEP](/ja/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)）を通じて使用することを選択したリソース （同一オリジンおよび他のオリジン）とのみ共有します。
文書の他のオリジンからの開き手、またはそれが開く他のオリジンからのポップアップとの関係は切断されます。
また、この文書は、共有メモリー上で動作することにより通信できる他の文書と並んで、別個の OS プロセスでホストされる場合もあります
。これにより、 [XS-Leaks](https://xsleaks.dev/) と呼ばれるサイドチャネル攻撃やオリジン間の攻撃のリスクが軽減されます。

オリジン間分離文書は、次の API を使用すると、操作の制限が少なくなります。

- {{JSxRef("SharedArrayBuffer")}} を作成し、 {{DOMxRef("DedicatedWorkerGlobalScope.postMessage()")}} や {{DOMxRef("MessagePort.postMessage()")}} の呼び出しで送信することができます。
- {{DOMxRef("Performance.now()")}} がより高い精度になります。
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} を呼び出すことができます。

文書は、次のヘッダーを含む HTTP レスポンスで返された場合、オリジン間の分離の適用対象となります。

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} ヘッダーに `same-origin` ディレクティブが指定されている
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーに directive `require-corp` または `credentialless` ディレクティブが指定されている

この API へのアクセスは、 `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}} によって許可されている必要もあります。
そうしないと、 `crossOriginIsolated` プロパティは `false` を返し、文書は上記の制限が緩和された API を使用できなくなります。

## 値

論理値です。

## 例

### 文書のオリジン間分離

文書をオリジン間分離するには、

- HTTP の {{HTTPHeader("Cross-Origin-Opener-Policy")}} へっだーを `same-origin` に設定します。

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- HTTP の {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーを `require-corp` または `credentialless` に設定します。

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}} ディレクティブを {{HTTPHeader("Permissions-Policy")}} ヘッダーに設定してこの機能をブロックしないようにします。
  このディレクティブの既定の許可リストは `self` であるため、オリジンが異なる文書には既定で許可が与えられます。

### 文書がオリジン間分離されているかどうかをチェック

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

## 関連情報

- {{domxref("Window.crossOriginIsolated")}}
