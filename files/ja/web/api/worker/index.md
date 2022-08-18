---
title: Worker
slug: Web/API/Worker
tags:
  - API
  - DOM
  - Interface
  - JavaScript
  - Reference
  - Web Workers
  - Worker
  - Workers
translation_of: Web/API/Worker
browser-compat: api.Worker
---
{{APIRef("Web Workers API")}}

**`Worker`** は [Web Workers API](/ja/docs/Web/API/Web_Workers_API) のインターフェイスです。スクリプトで生成することができるバックグラウンドタスクを表し、作成元にメッセージを送り返すことができます。ワーカーは `Worker("path/to/worker/script")` コンストラクターを呼び出すことで生成することができます。

ワーカーは同じ親ページの同一 [オリジン](/ja/docs/Web/Security/Same-origin_policy) 内でホストされている限り、他の新しいワーカーを生成することができます (注: 入れ子になったワーカーは [WebKit では未実装です](https://bugs.webkit.org/show_bug.cgi?id=22723))。

[利用可能なすべてのインターフェイスと関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers "Web Worker で利用可能な関数とクラス") がすべて `Worker` の中で利用できるとは限りません。ワーカーはネットワーク通信のために {{domxref("XMLHttpRequest")}} を使うことができますが、 `responseXML` 属性と `channel` 属性は常に `null` になります。 ([`fetch`](/ja/docs/Web/API/Fetch_API) も利用可能であり、このような制限はありません。)

## コンストラクター

- {{domxref("Worker.Worker", "Worker()")}}
  - : 指定された URL にあるスクリプトを実行する専用ウェブワーカーのインスタンスを生成します。また、 [Blob URL](/ja/docs/Web/API/Blob) を用いてワーカーを生成することもできます。

## プロパティ

_親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承しています。_

### イベントハンドラー

- {{domxref("Worker.onerror")}}
  - : {{ domxref("EventListener") }} であり、 {{domxref("ErrorEvent")}} の type が `error` であるイベントが発行されるたびに呼び出されます。
- {{domxref("Worker.onmessage")}}
  - : {{ domxref("EventListener") }} であり、 {{domxref("MessageEvent")}} の type が `message` であるイベントが発行されるたびに呼び出されます。すなわち、 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} を経由して親文書にメッセージが送信されます。メッセージは {{domxref("MessageEvent.data", "data")}} プロパティに格納されます。
- {{domxref("Worker.onmessageerror")}}
  - : [イベントハンドラー](/ja/docs/Web/Events/Event_handlers)であり、 {{event("messageerror")}} イベントが発行されるたびに呼び出されるコードを表します。

## メソッド

_親である {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("Worker.postMessage()")}}
  - : ワーカーの内部スコープに、あらゆる JavaScript オブジェクトの形式のメッセージも送ることができます。
- {{domxref("Worker.terminate()")}}
  - : ワーカーを直ちに終了させます。ワーカーに終了処理を行わせず、直ちに終了させます。 [`ServiceWorker`](/ja/docs/Web/API/ServiceWorker) インスタンスはこのメソッドを備えていません。

## イベント

- [`message`](/ja/docs/Web/API/Worker/message_event)
  - : ワーカーの親が、そのワーカーからメッセージを受信したときに発行されます。
    [`onmessage`](/ja/docs/Web/API/Worker/onmessage) プロパティからも利用できます。
- [`messageerror`](/ja/docs/Web/API/Worker/messageerror_event)
  - : `Worker` オブジェクトが [シリアライズ解除](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)できないというメッセージを受け取ったときに発行されます。
    [`onmessageerror`](/ja/docs/Web/API/Worker/onmessageerror) プロパティからも利用できます。
- [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event)
  - : {{jsxref("Promise")}} が拒否されるたびに発行されます。拒否を処理するハンドラーがあるかどうかは問いません。
    [`onrejectionhandled`](/ja/docs/Web/API/WindowEventHandlers/onrejectionhandled) イベントハンドラープロパティからも利用できます。
- [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event)
  - : 拒否を処理するハンドラーのない {{jsxref("Promise")}} が拒否されたときに発行されます。
    [`onunhandledrejection`](/ja/docs/Web/API/WindowEventHandlers/onunhandledrejection) イベントハンドラープロパティからも利用できます。

## 例

次のコード例では、 {{domxref("Worker")}} オブジェクトを、 {{domxref("Worker.Worker", "Worker()")}} コンストラクターを用いて生成しています。

```js
var myWorker = new Worker('/worker.js');
var first = document.querySelector('input#number1');
var second = document.querySelector('input#number2');

first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}
```

完全な例は、 [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([専用ワーカーを実行](http://mdn.github.io/simple-web-worker/)) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ワーカーの種類に応じて対応状況が異なります。詳しくは、それぞれの種類のワーカーのページをご覧ください。

{{Compat}}

### オリジンをまたいだワーカーのエラーの動作

古いバージョンのブラウザーでオリジンをまたいでワーカーのスクリプトを読み込もうとすると、 `SecurityError` が発生していました。最近は、 {{event("error")}} イベントが発行されるようになりました。

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [ウェブワーカーで使用可能な関数一覧](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- 他の種類のワーカー: {{domxref("SharedWorker")}}、 [ServiceWorker](/ja/docs/Web/API/ServiceWorker_API)
