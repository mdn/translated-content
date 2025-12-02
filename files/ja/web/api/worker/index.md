---
title: Worker
slug: Web/API/Worker
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

**`Worker`** は[ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API) のインターフェイスで、スクリプトで生成することができるバックグラウンドタスクを表し、作成元にメッセージを送り返すことができます。

ワーカーは `Worker("path/to/worker/script")` コンストラクターを呼び出すことで生成されます。

ワーカーは同じ親ページと同一の[オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)内でホストされている限り、他の新しいワーカーを生成することができます。

すべてのインターフェイスと関数がウェブワーカーで利用できるわけではないことにご注意ください。詳細については、[ウェブワーカーで利用可能な関数とクラス](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)を参照してください。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Worker.Worker", "Worker()")}}
  - : 指定された URL にあるスクリプトを実行する専用ウェブワーカーのインスタンスを生成します。また、 [Blob URL](/ja/docs/Web/API/Blob) を用いてワーカーを生成することもできます。

## インスタンスプロパティ

_親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承しています。_

## インスタンスメソッド

_親である {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("Worker.postMessage()")}}
  - : ワーカーの内部スコープに、あらゆる JavaScript オブジェクトの形式のメッセージも送ることができます。
- {{domxref("Worker.terminate()")}}
  - : ワーカーを直ちに終了させます。ワーカーに終了処理を行わせず、直ちに終了させます。 [`ServiceWorker`](/ja/docs/Web/API/ServiceWorker) のインスタンスはこのメソッドを備えていません。

## イベント

- [`error`](/ja/docs/Web/API/Worker/error_event)
  - : ワーカー内でエラーが発生したときに発行されます。
- [`message`](/ja/docs/Web/API/Worker/message_event)
  - : ワーカーの親が、そのワーカーからメッセージを受信したときに発行されます。
- [`messageerror`](/ja/docs/Web/API/Worker/messageerror_event)
  - : `Worker` オブジェクトが [シリアライズ解除](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)できないというメッセージを受け取ったときに発行されます。

## 例

次のコード例では、 `Worker` オブジェクトを、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを用いて生成しています。

```js
const myWorker = new Worker("/worker.js");
const first = document.querySelector("input#number1");
const second = document.querySelector("input#number2");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("メッセージがワーカーへ渡されました");
};
```

完全な例は、 [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([専用ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ワーカーの種類に応じて対応状況が異なります。詳しくは、それぞれの種類のワーカーのページをご覧ください。

{{Compat}}

### オリジンをまたいだワーカーのエラーの動作

古いバージョンのブラウザーでは、オリジンをまたいでワーカーのスクリプトを読み込もうとすると、 `SecurityError` が発生していました。最近は、 {{domxref("Worker/error_event", "error")}} イベントが発行されるようになりました。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [ウェブワーカーで使用可能な関数一覧](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- 他の種類のワーカー: {{domxref("SharedWorker")}}、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)
- [`OffscreenCanvas`](/ja/docs/Web/API/OffscreenCanvas) インターフェイス
