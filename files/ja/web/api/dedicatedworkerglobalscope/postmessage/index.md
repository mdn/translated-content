---
title: DedicatedWorkerGlobalScope.postMessage()
slug: Web/API/DedicatedWorkerGlobalScope/postMessage
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("Web Workers API")}}

**`postMessage()`** は {{domxref("DedicatedWorkerGlobalScope")}} インターフェイスのメソッドで、それを生成したメインスレッドにメッセージを送信します。

これは data 引数を受け入れ、そこにワーカーからメインスレッドにコピーされるデータが入ります。 data は任意の値、または[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で処理される JavaScript オブジェクトであり、循環参照を含むことができます。

このメソッドは、メインスレッドに*移譲*するための{{Glossary("Transferable objects", "移譲可能オブジェクト")}}の配列もオプションで受け入れます。
data 引数とは異なり、移譲されたオブジェクトはワーカスレッドでは使えなくなります（可能であれば、オブジェクトは高性能なゼロコピー処理で移譲されます）。

ワーカーを生成したメインスコープは、{{domxref("Worker.postMessage")}} メソッドを使用して、ワーカーを生成したスレッドに情報を送り返すことができます。

## 構文

```js-nolint
postMessage(aMessage, transferList)
```

### 引数

- `aMessage`
  - : メインスレッドに配信するオブジェクト。これは {{domxref("Worker.message_event")}} に配信されるイベント内の data フィールドに格納されます。
    これは、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)によって処理される任意の値または JavaScript オブジェクトであり、循環参照を含むことができます。
- `transferList` {{optional_inline}}

  - : 所有権を移譲するための、{{Glossary("Transferable objects", "移譲可能オブジェクト")}}の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)（オプション）。
    オブジェクトの所有権が移譲された場合、そのオブジェクトは送信元のコンテキストでは使用できなくなり、 送信先のメインスレッドでのみ利用できるようになります。

    {{Glossary("Transferable objects", "移譲可能オブジェクト")}}のみが移譲可能です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下のコードでは `worker.js` を示しています。このコードでは `onmessage` ハンドラーを使用して、メイン スクリプトからのメッセージを処理しています。
ハンドラーの内部で計算が行われ、そこから結果メッセージが作成されます。これは `postMessage(workerResult);` を使用してメインスレッドに返されます。

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

メインスクリプトでは `onmessage` を `Worker` オブジェクトに対して呼び出す必要がありますが、ワーカススクリプトの内部では `onmessage` だけで済みます。ワーカーは事実上グローバルスコープ ({{domxref("DedicatedWorkerGlobalScope")}}) になっているためです。

完全な例は、[基本的な専用ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker)を参照してください（[専用ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）。

> **メモ:** `postMessage()` は一度に単一のオブジェクトしか送ることができません。上で見たように、複数の値を渡したい場合は、配列を送ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

所属先の {{domxref("DedicatedWorkerGlobalScope")}} インターフェイス。
