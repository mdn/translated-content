---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

**`WorkerGlobalScope`** は[ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API) のインターフェイスで、あらゆるワーカーのスコープを表します。ワーカーには閲覧コンテキストがありません。このスコープには、通常 {{domxref("Window")}} オブジェクトによって伝えられる情報が含まれます。この場合では、イベントハンドラーやコンソール、関連する {{domxref("WorkerNavigator")}} オブジェクトのことです。ぞれぞれの `WorkerGlobalScope` は独自のイベントループを持ちます。

このインターフェイスは通常、 それぞれのワーカーの種類に合わせて特化されます。 {{domxref("DedicatedWorkerGlobalScope")}} は専用ワーカーため、 {{domxref("SharedWorkerGlobalScope")}} は共有ワーカーのため、 {{domxref("ServiceWorkerGlobalScope")}} は[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)のためのものです。 `self` プロパティはそれぞれのコンテキストに特化したスコープを返します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、 {{domxref("EventTarget")}} インターフェイスから継承したプロパティがあります。_

- {{domxref("WorkerGlobalScope.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : 現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。このオブジェクトは、オフラインで使用するための資産の保存や、リクエストに対するカスタムレスポンスの生成といった機能を実現します。
- {{domxref("WorkerGlobalScope.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : 論理値で、ウェブサイトがオリジン間隔離状態にあるかどうかを返します。
- {{domxref("WorkerGlobalScope.crypto")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトに関連付けられた {{domxref("Crypto")}} オブジェクトを返します。
- {{domxref("WorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : このワーカーに関連付けられた {{domxref("FontFaceSet")}} を返します。
- {{domxref("WorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : アプリケーションが索引付きデータベースの機能に非同期でアクセスするための機構を提供し、{{domxref("IDBFactory")}} オブジェクトを返します。
- {{domxref("WorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : 現在のコンテキストが安全か (`true`) そうでないか (`false`) を示す論理値を返します。
- {{domxref("WorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : ワーカーに関連した {{domxref("WorkerLocation")}} を返します。これは特化された location オブジェクトであり、ほぼ閲覧スコープのの {{domxref("Location")}} のサブセットですが、ワーカーに適応したものです。
- {{domxref("WorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : ワーカーに関連した {{domxref("WorkerNavigator")}} を返します。これは特化された navigator オブジェクトであり、ほぼ閲覧スコープの {{domxref("Navigator")}} のサブセットですが、ワーカーに適応したものです。
- {{domxref("WorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトのオリジンを文字列としてシリアライズしたものを返します。
- {{domxref("WorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : ワーカーに関連した {{domxref("Performance")}} を返します。ワーカーが利用できるのは `Performance` インターフェイスのプロパティとメソッドのサブセットだけです。
- {{domxref("WorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : 現在のコンテキストに関連付けられた {{domxref("Scheduler")}} オブジェクトを返します。これは[優先度付きタスクスケジューリング API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) を使用するエントリーポイントです。
- {{domxref("WorkerGlobalScope.trustedTypes")}} {{ReadOnlyInline}}
  - : グローバルオブジェクトに関連付けられた {{domxref("TrustedTypePolicyFactory")}} オブジェクトを返し、{{domxref("Trusted Types API", "信頼型 API", "", "nocode")}} を使用するためのエントリーポイントを提供します。
- {{domxref("WorkerGlobalScope.self")}} {{ReadOnlyInline}}
  - : `WorkerGlobalScope` 自身の参照を返します。ほとんどの場合、 {{domxref("DedicatedWorkerGlobalScope")}}、{{domxref("SharedWorkerGlobalScope")}}、{{domxref("ServiceWorkerGlobalScope")}} のような特化されたスコープです。

### インスタンスメソッド

_このインターフェイスは、{{domxref("EventTarget")}} インターフェイスから継承したメソッドがあります。_

- {{domxref("WorkerGlobalScope.atob()")}}
  - : base-64 エンコーディングを使用してエンコードされた文字データをデコードします。
- {{domxref("WorkerGlobalScope.btoa()")}}
  - : バイナリーデータ文字列から base-64 エンコードされた {{Glossary("ASCII")}} 文字列を生成します。
- {{domxref("WorkerGlobalScope.clearInterval()")}}
  - : {{domxref("WorkerGlobalScope.setInterval()")}} を使用して設定された繰り返し処理をキャンセルします。
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
  - : {{domxref("WorkerGlobalScope.setTimeout()")}} を使用して設定された繰り返し処理をキャンセルします。
- {{domxref("WorkerGlobalScope.createImageBitmap()")}}
  - : さまざまな画像ソースを受け入れ、プロミス ({{jsxref("Promise")}}) を返します。これは {{domxref("ImageBitmap")}} に解決されます。オプションとして、ソースを _(sx, sy)_ を原点とする幅 sw, 高さ sh のピクセル矩形に切り詰めます。
- {{domxref("WorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 標準出力、たとえば端末にメッセージを書き込むことができます。これは Firefox の {{domxref("window.dump")}} ですが、ワーカーのためのものです。
- {{domxref("WorkerGlobalScope.fetch()")}}
  - : リソースのネットワークからの取得プロセスを開始します。
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : ワーカーののスコープに 1 つ以上のスクリプトをインポートします。カンマ区切りで任意の数を指定できます。例：`importScripts('foo.js', 'bar.js');`
- {{domxref("WorkerGlobalScope.queueMicrotask()")}}
  - : ブラウザーのイベントループに制御を返す前に、安全な時点で実行されるマイクロタスクをキューに入れます。
- {{domxref("WorkerGlobalScope.setInterval()")}}
  - : 指定したミリ秒周期で実行されるように関数をスケジュールします。
- {{domxref("WorkerGlobalScope.setTimeout()")}}
  - : 指定された時間内に実行されるように関数をスケジューリングします。
- {{domxref("WorkerGlobalScope.structuredClone()")}}
  - : 指定された値の[ディープクローン](/ja/docs/Glossary/Deep_copy)を、[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を用いて作成します。
- {{domxref("WorkerGlobalScope.reportError()")}}
  - : 処理されない例外をエミュレートして、スクリプトのエラーを報告します。

### イベント

- {{domxref("WorkerGlobalScope/error_event", "error")}}
  - : エラーが発生したときに発行されます。
- {{domxref("WorkerGlobalScope/languagechange_event", "languagechange")}}
  - : ユーザーの優先言語が変更された際に、グローバル/ワーカースコープで発行されます。
- {{domxref("WorkerGlobalScope/offline_event", "offline")}}
  - : ブラウザーがネットワークへのアクセスを失ったときに発行され、`navigator.onLine` の値が `false` に切り替わります。
- {{domxref("WorkerGlobalScope/online_event", "online")}}
  - : ブラウザーがネットワークへアクセスできるようになったときに発行され、`navigator.onLine` の値が `true` に切り替わります。
- {{domxref("WorkerGlobalScope/rejectionhandled_event", "rejectionhandled")}}
  - : {{jsxref("Promise")}} の拒否イベントが処理された際に発行されます。
- {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}}
  - : [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)に違反したときに発生します。
- {{domxref("WorkerGlobalScope/unhandledrejection_event", "unhandledrejection")}}
  - : {{jsxref("Promise")}} の拒否イベントが処理されなかったときに発行されます。

## 例

コード内で `WorkerGlobalScope` に直接アクセスすることはありません。しかし、プロパティやメソッドが {{domxref("DedicatedWorkerGlobalScope")}} や {{domxref("SharedWorkerGlobalScope")}} のような特化されたグローバルスコープに継承されています。たとえば、ワーカーがほかのスクリプトをインポートした場合、ワーカースコープの `navigator` オブジェクトの内容を以下の 2 行で表示することができます。

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> ワーカースクリプトのグローバルスコープは、実行しているワーカーのグローバルスコープ（{{domxref("DedicatedWorkerGlobalScope")}} やその他）と、 `WorkerGlobalScope` からメソッドやプロパティなどを継承しているすべてのワーカーのグローバルスコープで有効であるため、上記のように親オブジェクトを指定しなくとも実行できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- その他のグローバルオブジェクトインターフェイス: {{domxref("Window")}}、 {{domxref("DedicatedWorkerGlobalScope")}}、 {{domxref("SharedWorkerGlobalScope")}}、 {{domxref("ServiceWorkerGlobalScope")}}
- その他のワーカー関連インターフェイス: {{domxref("Worker")}}、{{domxref("WorkerLocation")}}、 {{domxref("WorkerNavigator")}}、 {{domxref("ServiceWorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
