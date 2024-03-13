---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("Web Workers API")}}

**`WorkerGlobalScope`** は[ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API) のインターフェイスで、あらゆるワーカーのスコープを表します。ワーカーには閲覧コンテキストがありません。このスコープには、通常 {{domxref("Window")}} オブジェクトによって伝えられる情報が含まれます。この場合では、イベントハンドラーやコンソール、関連する {{domxref("WorkerNavigator")}} オブジェクトのことです。ぞれぞれの `WorkerGlobalScope` は独自のイベントループを持ちます。

このインターフェイスは通常、 それぞれのワーカーの種類に合わせて特化されます。 {{domxref("DedicatedWorkerGlobalScope")}} は専用ワーカーため、 {{domxref("SharedWorkerGlobalScope")}} は共有ワーカーのため、 {{domxref("ServiceWorkerGlobalScope")}} は[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)のためのものです。 `self` プロパティはそれぞれのコンテキストに特化したスコープを返します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、 {{domxref("EventTarget")}} インターフェイスから継承したプロパティがあります。_

### 標準プロパティ

- {{domxref("WorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : ワーカーに関連した {{domxref("WorkerNavigator")}} を返します。これは特化された navigator オブジェクトであり、ほぼ閲覧スコープの {{domxref("Navigator")}} のサブセットですが、ワーカーに適合したものです。
- {{domxref("WorkerGlobalScope.self")}} {{ReadOnlyInline}}
  - : `WorkerGlobalScope` 自身の参照を返します。ほとんどの場合、 {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, {{domxref("ServiceWorkerGlobalScope")}} のような特化されたスコープです。
- {{domxref("WorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : ワーカーに関連した {{domxref("WorkerLocation")}} を返します。これは特化された location オブジェクトであり、ほぼ閲覧スコープのの {{domxref("Location")}} のサブセットですが、ワーカーに適合したものです。
- {{domxref("WorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : このワーカーに関連付けられた {{domxref("FontFaceSet")}} を返します。

### 非標準プロパティ

- {{domxref("WorkerGlobalScope.performance")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : ワーカーに関連した {{domxref("Performance")}} を返す。これは、通常の performance オブジェクトですが、ワーカーで利用可能なプロパティやメソッドのみを持つサブセットであることが異なります。
- {{domxref("WorkerGlobalScope.console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : ワーカーに関連付けられた {{domxref("console")}} オブジェクトを返します。

### 他の場所で実装されているインスタンスプロパティ

- {{domxref("caches")}} {{ReadOnlyInline}}
  - : 現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。このオブジェクトは、オフラインで使用するための資産の保存や、リクエストに対するカスタムレスポンスの生成といった機能を実現します。
- {{domxref("indexedDB")}} {{ReadOnlyInline}}
  - : アプリケーションが索引付きデータベースの機能に非同期でアクセスするための機構を提供し、 {{domxref("IDBFactory")}} オブジェクトを返します。
- {{domxref("isSecureContext")}} {{ReadOnlyInline}}
  - : 現在のコンテキストが安全か (`true`) そうでないか (`false`) を示す論理値を返します。
- {{domxref("origin")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトのオリジンを文字列としてシリアライズしたものを返します。
- [`scheduler`](/ja/docs/Web/API/Window/scheduler) {{ReadOnlyInline}}
  - : 現在のコンテキストに関連付けられた {{domxref("Scheduler")}} オブジェクトを返します。
    これは[優先度付きタスクスケジューリング API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) を使用する入口です。

### イベント

- `error`
  - : エラーが発生したときに発行されます。
- `offline`
  - : ブラウザーがネットワークへのアクセスを失ったときに発行され、 `navigator.onLine` の値が `false` に切り替わります。
- `online`
  - : ブラウザーがネットワークへアクセスできるようになったときに発行され、 `navigator.onLine` の値が `true` に切り替わります。
- [`languagechange`](/ja/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : ユーザーの優先言語が変更された際に、グローバル/ワーカースコープで発行されます。
- `rejectionhandled` {{non-standard_inline}}
  - : [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) の拒否イベントが処理された際に発行されます。
- `unhandledrejection` {{non-standard_inline}}
  - : [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) の拒否イベントが処理されなかったときに発行されます。

## インスタンスメソッド

_このインターフェイスは、{{domxref("EventTarget")}} インターフェイスから継承したメソッドがあります。_

### 標準メソッド

- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : ワーカーののスコープに 1 つ以上のスクリプトをインポートします。カンマ区切りで任意の数を指定できます。例：`importScripts('foo.js', 'bar.js');`

### 非標準メソッド

- {{domxref("WorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 標準出力、たとえば端末にメッセージを書き込むことができます。これは Firefox の {{domxref("window.dump")}} ですが、ワーカーのためのものです。

### 他で実装されているインスタンスメソッド

- {{domxref("atob", "atob()")}}
  - : base-64 エンコーディングを使用してエンコードされた文字データをデコードする。
- {{domxref("btoa", "btoa()")}}
  - : バイナリーデータ文字列から base-64 エンコードされた ASCII 文字列を生成する。
- {{domxref("clearInterval()")}}
  - : {{domxref("setInterval()")}} を使用して設定された繰り返し処理をキャンセルする。
- {{domxref("clearTimeout()")}}
  - : {{domxref("setTimeout()")}} を使用して設定された繰り返し処理をキャンセルする。
- {{domxref("createImageBitmap()")}}
  - : さまざまな画像ソースを受け入れ、プロミス ({{jsxref("Promise")}}) を返します。これは {{domxref("ImageBitmap")}} に解決されます。オプションとして、ソースを _(sx, sy)_ を原点とする幅 sw, 高さ sh のピクセル矩形に切り詰めます。
- {{domxref("fetch()")}}
  - : リソースのネットワークからの取得プロセスを開始します。
- {{domxref("setInterval()")}}
  - : 指定したミリ秒周期で実行されるように関数をスケジュールします。
- {{domxref("setTimeout()")}}
  - : 指定された時間内に実行されるように関数をスケジューリングします。
- {{domxref("reportError()")}}
  - : 処理されない例外をエミュレートして、スクリプトのエラーを報告します。

## 例

コード内で `WorkerGlobalScope` に直接アクセスすることはありません。しかし、プロパティやメソッドが {{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}} のような特化されたグローバルスコープに継承されています。たとえば、ワーカーがほかのスクリプトをインポートした場合、ワーカースコープの `navigator` オブジェクトの内容を以下の 2 行で表示することができます。

```js
importScripts("foo.js");
console.log(navigator);
```

> **メモ:** ワーカースクリプトのグローバルスコープは、実行しているワーカーのグローバルスコープ（{{domxref("DedicatedWorkerGlobalScope")}} やその他）と、 `WorkerGlobalScope` からメソッドやプロパティなどを継承しているすべてのワーカーのグローバルスコープで有効であるため、上記のように親オブジェクトを指定しなくとも実行できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- その他のグローバルオブジェクトインターフェイス: {{domxref("Window")}}、 {{domxref("DedicatedWorkerGlobalScope")}}、 {{domxref("SharedWorkerGlobalScope")}}、 {{domxref("ServiceWorkerGlobalScope")}}
- その他のワーカー関連インターフェイス: {{domxref("Worker")}}、{{domxref("WorkerLocation")}}、 {{domxref("WorkerGlobalScope")}}、 {{domxref("ServiceWorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
