---
title: SharedWorker
slug: Web/API/SharedWorker
---

{{APIRef("Web Workers API")}}

**`SharedWorker`** インターフェースは複数のブラウザコンテキストからアクセス可能な Worker を提供します。複数のブラウザコンテキストとは、複数のウィンドウや iframe、Worker などを指します。Dedicated Worker とは異なるインタフェースと、異なるグローバルスコープを持ちます。スコープに関しては {{domxref("SharedWorkerGlobalScope")}} を参照してください。

> **メモ:** 同じオリジン、つまりプロトコル、ホスト名、ポートが全て同じ場合にのみ、SharedWorker は異なるブラウザコンテキスト間で共有されます。

## コンストラクタ

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : 指定された URL のスクリプトを実行する SharedWorker を作成します。

## プロパティ

_{{domxref("EventTarget")}} のプロパティを継承し、 {{domxref("AbstractWorker")}} で定義されるプロパティを実装しています。_

- {{domxref("AbstractWorker.onerror")}}
  - : type `error` である {{domxref("ErrorEvent")}} がバブリングした時に呼ばれる {{domxref("EventListener")}}
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : 通信とコントロールに利用される {{domxref("MessagePort")}} オブジェクトを返します。

## メソッド

_{{domxref("EventTarget")}} のメソッドを継承し、 {{domxref("AbstractWorker")}} に定義されるメソッドを実装します。_

## 例

[SharedWorker の基本利用例](https://github.com/mdn/simple-shared-worker) ([ライブデモ](http://mdn.github.io/simple-shared-worker/)) には 2 つの HTML ページがあり、それぞれでは JavaScript で単純な計算を行っています。それぞれのスクリプトは計算を行うために同じ JS ファイルを Worker に実行させています。2 つのページが別のウインドウで動作していたとしても、同じ Worker にアクセスできています。

`SharedWorker` オブジェクトは {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクタを利用して、次のように作成します：

```js
var myWorker = new SharedWorker("worker.js");
```

それぞれのスクリプトは {{domxref("MessagePort")}} オブジェクトを通じて Worker にアクセスします。このオブジェクトは {{domxref("SharedWorker.port")}} プロパティから取得できます。addEventListener を読んで onmessage イベントのハンドラを登録したら、`start()` メソッドを呼んでポートを手動で開始できます：

```js
myWorker.port.start();
```

ポートが開始されたら、Worker に向けてメッセージを送ったり、送られたメッセージを受け取ったりできます。これらには `port.postMessage()` と `port.onmessage` を利用します:

```js
first.onchange = function() {
    myWorker.port.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function() {
    myWorker.port.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
  }

  myWorker.port.onmessage = function(e) {
    result1.textContent = e.data;
    console.log('Message received from worker');
  }
```

Worker の内部では {{domxref("SharedWorkerGlobalScope.onconnect")}} に対してハンドラを設定することで、上述したポートへの接続を処理できます。Worker に関連付けられたポートは {{event("connect")}} イベントの `ports` 属性で参照できます。{{domxref("MessagePort")}} `の start()` メソッドによるポート開始後は、`onmessage` ハンドラでメインスレッドからのメッセージを処理します。

```js
onconnect = function(e) {
    var port = e.ports[0];

    port.addEventListener('message', function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    });

    port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
```

## 仕様

| 仕様                                                                             | 状況                             | コメント                                          |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#sharedworker", "SharedWorker")}} | {{Spec2('HTML WHATWG')}} | {{SpecName("Web Workers")}} との差分なし |

## ブラウザ互換性

{{Compat("api.SharedWorker")}}

## 関連情報

- {{domxref("Worker")}}
- [Web workers の利用](/ja/docs/Web/Guide/Performance/Using_web_workers)
