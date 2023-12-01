---
title: Worker
slug: Web/API/Worker
l10n:
  sourceCommit: 6fefcdd237a377af5c066dc2734c118feadbbef9
---

{{APIRef("Web Workers API")}}

**`Worker`** は[ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API) のインターフェイスで、スクリプトで生成することができるバックグラウンドタスクを表し、作成元にメッセージを送り返すことができます。

ワーカーは `Worker("path/to/worker/script")` コンストラクターを呼び出すことで生成されます。

ワーカーは同じ親ページの同一[オリジン](/ja/docs/Web/Security/Same-origin_policy)内でホストされている限り、他の新しいワーカーを生成することができます（メモ: [入れ子になったワーカーは WebKit では未実装です](https://bugs.webkit.org/show_bug.cgi?id=22723)）。

[利用可能なすべてのインターフェイスと関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)がすべて `Worker` の中で利用できるとは限りません。ワーカーはネットワーク通信のために {{domxref("XMLHttpRequest")}} を使うことができますが、 `responseXML` 属性と `channel` 属性は常に `null` になります。（[`fetch`](/ja/docs/Web/API/Fetch_API) も利用可能であり、このような制限はありません。）

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Worker.Worker", "Worker()")}}
  - : 指定された URL にあるスクリプトを実行する専用ウェブワーカーのインスタンスを生成します。また、 [Blob URL](/ja/docs/Web/API/Blob) を用いてワーカーを生成することもできます。

## プロパティ

_親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承しています。_

## メソッド

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
- [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event)
  - : プロミス ({{jsxref("Promise")}}) が拒否されるたびに発行されます。拒否を処理するハンドラーがあるかどうかは問いません。
- [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event)
  - : 拒否を処理するハンドラーのないプロミス ({{jsxref("Promise")}}) が拒否されたときに発行されます。

## 例

次のコード例では、 {{domxref("Worker")}} オブジェクトを、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを用いて生成しています。

```js
const myWorker = new Worker("/worker.js");
const first = document.querySelector("input#number1");
const second = document.querySelector("input#number2");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

完全な例は、 [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([専用ワーカーを実行](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker/)) を参照してください。

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
