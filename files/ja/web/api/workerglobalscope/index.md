---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
tags:
  - API
  - Interface
  - NeedsBrowserCompatibility
  - Reference
  - WorkerGlobalScope
  - Workers
translation_of: Web/API/WorkerGlobalScope
---
{{APIRef("Web Workers API")}}

[Web Workers API](/ja/docs/Web/API/Web_Workers_API) の **`WorkerGlobalScope`** インターフェースは、いずれかの worker のスコープを表すインターフェースです。worker はブラウジングコンテクストを持ちません； このスコープには、通常 {{domxref("Window")}} オブジェクトによって伝えられた情報が含まれます — この場合、イベントハンドラやコンソール、関連する {{domxref("WorkerNavigator")}} オブジェクトのことです。ぞれぞれの `WorkerGlobalScope` は独自のイベントループを持ちます。

このインターフェースは通常、 それぞれの work タイプによって特化されます： dedicated workers のための {{domxref("DedicatedWorkerGlobalScope")}} と shared workers のための {{domxref("SharedWorkerGlobalScope")}}、[ServiceWorker](/ja/docs/Web/API/ServiceWorker_API) のための {{domxref("ServiceWorkerGlobalScope")}} です。`self` プロパティはそれぞれのコンテキストに特化したスコープを返します。

## プロパティ

_このインターフェースは、 {{domxref("EventTarget")}} インターフェースから継承したプロパティと、 {{domxref("WindowTimers")}}、 {{domxref("WindowBase64")}}、 {{domxref("WindowEventHandlers")}} からのプロパティを実装しています。_

### 標準プロパティ

- {{domxref("WorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : 現在のコンテキストに関連した {{domxref("CacheStorage")}} オブジェクトを返す。このオブジェクトは、オフラインで使用するために資産を保存することやリクエストに対してカスタムレスポンスを生成するなどの [service worker](/ja/docs/Web/API/ServiceWorker_API) の機能を使用できる。
- {{domxref("WorkerGlobalScope.navigator")}} {{readOnlyinline}}
  - : worker に関連した {{domxref("WorkerNavigator")}} を返す。これは特定の navigator オブジェクト、主にブラウジングスコープの {{domxref("Navigator")}} ではなく、worker に適合する。
- {{domxref("WorkerGlobalScope.self")}} {{readOnlyinline}}
  - : `WorkerGlobalScope` 自身の参照を返す。ほとんどの場合、 {{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}} 、{{domxref("ServiceWorkerGlobalScope")}} のような特定のスコープである。
- {{domxref("WorkerGlobalScope.location")}} {{readOnlyinline}}
  - : worker に関連した {{domxref("WorkerLocation")}} を返す。これは特定の location オブジェクト、主にブラウジングスコープの {{domxref("Location")}} ではなく、worker に適合する。

### 非標準プロパティ

- {{domxref("WorkerGlobalScope.performance")}} {{readOnlyinline}}
  - : work に関連した {{domxref("Performance")}} を返す。これは、プロパティとメソッドのサブセットのみが worker で利用できることを除いて、通常の performance オブジェクトである。
- {{domxref("WorkerGlobalScope.console")}} {{readOnlyinline}} {{Non-standard_inline}}
  - : worker に関連した {{domxref("Console")}} オブジェクトを返す。

### イベントハンドラ

_このインターフェースは、{{domxref("EventTarget")}} インターフェースから継承したイベントハンドラと {{domxref("WindowTimers")}} と {{domxref("WindowBase64")}} のイベントハンドラを実装しています。_

- {{domxref("WorkerGlobalScope.onerror")}}
  - : {{event("error")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}}。
- {{domxref("WorkerGlobalScope.onoffline")}}
  - : {{event("offline")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}}。
- {{domxref("WorkerGlobalScope.ononline")}}
  - : {{event("online")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}}。
- {{domxref("WorkerGlobalScope.onlanguagechange")}}
  - : ユーザーの選択言語を変更したときに、 global/worker スコープオブジェクトで発火する {{event("Event_handlers", "event handler")}}。

<!---->

- {{domxref("WorkerGlobalScope.onclose")}} {{non-standard_inline}}
  - : {{event("close")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}}。
- {{domxref("WorkerGlobalScope.onrejectionhandled")}} {{non-standard_inline}}
  - : [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.") の rejection イベントを制御するためのイベントハンドラ。
- {{domxref("WorkerGlobalScope.onunhandledrejection")}} {{non-standard_inline}}
  - : 制御されていない [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.") の rejection イベントのためのイベントハンドラ。

## メソッド

_このインターフェースは、{{domxref("EventTarget")}} インターフェースから併称したメソッドと{{domxref("WindowTimers")}}、 {{domxref("WindowBase64")}}、 {{domxref("WindowEventHandlers")}}、 {{domxref("GlobalFetch")}} のメソッドを実装しています。_

### 標準メソッド

- {{domxref("WorkerGlobalScope.close()")}}
  - : 効果的に特定のスコープを閉じ、 `WorkerGlobalScope` のイベントループにキューされているタスクを破棄する。
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : worker のスコープに 1 つ以上のスクリプトをインポートする。カンマ区切りで任意の数を指定できる。例：` importScripts('foo.js', 'bar.js');`

### 非標準メソッド

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : 標準出力にメッセージを記述できる — たとえば、ターミナルに。これは Firefox の {{domxref("window.dump")}} と同様に worker のためのものである。

### ほかで実装されているメソッド

- {{domxref("WindowBase64.atob()")}}
  - : base-64 エンコーディングを使用してエンコードされた文字データをデコードする。
- {{domxref("WindowBase64.btoa()")}}
  - : バイナリデータ文字列から base-64 エンコードされた ASCII 文字列を生成する。
- {{domxref("WindowTimers.clearInterval()")}}
  - : {{domxref("WindowTimers.setInterval()")}} を使用して設定された繰り返し処理をキャンセルする。
- {{domxref("WindowTimers.clearTimeout()")}}
  - : {{domxref("WindowTimers.setTimeout()")}} を使用して設定された繰り返し処理をキャンセルする。
- {{domxref("ImageBitmapFactories.createImageBitmap()")}}
  - : 異なるさまざまな画像ソースを受け入れ、{{domxref("ImageBitmap")}} を解決する {{domxref("Promise")}} を返す。
- {{domxref("GlobalFetch.fetch()")}}
  - : リソースの取得プロセスを開始する。
- {{domxref("WindowTimers.setInterval()")}}
  - : X ミリ秒ごとの処理実行をスケジューリングする。
- {{domxref("WindowTimers.setTimeout()")}}
  - : 遅延処理を設定する。

## 例

コード内で `WorkerGlobalScope` に直接アクセスすることはありません； しかし、{{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}} のような特定のグローバルスコープからプロパティやメソッドが継承されています。たとえば、worker にほかのスクリプトをインポートして、次の 2 行を使用して worker スコープの `navigator` オブジェクトのコンテンツを表示できます：

```js
importScripts('foo.js');
console.log(navigator);
```

> **Note:** **ノート：** worker スクリプトのグローバルスコープは、実行している worker グローバルスコープ（{{domxref("DedicatedWorkerGlobalScope")}} やそのほか）と `WorkerGlobalScope` からメソッドやプロパティなどを継承している すべての worker グローバルスコープで有効であるため、上記のように親オブジェクトを指定しなくとも実行できます。

## 仕様

| 仕様                                                                                         | 状態                                 | コメント                                            |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#workerglobalscope', 'WorkerGlobalScope')}} | {{Spec2('HTML WHATWG')}}     | {{SpecName("Web Workers")}} から変更なし。 |
| {{SpecName('Service Workers')}}                                                     | {{Spec2('Service Workers')}} | `caches` を定義。                                   |
| {{SpecName('Web Workers', '#workerglobalscope', 'WorkerGlobalScope')}} | {{Spec2('Web Workers')}}     | 初期定義。                                          |

## ブラウザ実装状況

{{Compat("api.WorkerGlobalScope")}}

## 関連項目

- そのほかのグローバルオブジェクトインターフェース： {{domxref("Window")}}、 {{domxref("DedicatedWorkerGlobalScope")}}、 {{domxref("SharedWorkerGlobalScope")}}、 {{domxref("ServiceWorkerGlobalScope")}}
- そのほかの Worker 関連インターフェース： {{domxref("Worker")}}、{{domxref("WorkerLocation")}}、 {{domxref("WorkerGlobalScope")}}、 {{domxref("ServiceWorkerGlobalScope")}}
- [Web Worker を使用する](/ja/docs/Web/Guide/Performance/Using_web_workers)
