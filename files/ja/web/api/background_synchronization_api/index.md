---
title: バックグラウンド同期 API
slug: Web/API/Background_Synchronization_API
l10n:
  sourceCommit: dd84b3b089d199be3771d6afe01e068b19889e71
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

**バックグラウンド同期 API** は、ウェブアプリケーションがタスクを延期し、ユーザーが安定したネットワーク接続を得たときに[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)で実行できるようにします。

## 概念と使用法

バックグラウンド同期 API は、デバイスがオフラインのとき、ウェブアプリケーションがサーバーとの同期処理を延期して後でサービスワーカーで処理できるようにします。用途として、アプリケーションの使用中に送信できなかったリクエストをバックグラウンドで送信することがあるかもしれません。

たとえば、電子メールのクライアントアプリケーションは、デバイスがネットワークに接続されていないときを含め、いつでもユーザーがメッセージを書いて送信できるようにできます。このアプリケーションのフロントエンドは同期リクエストを登録するだけであり、ネットワークが再び使用可能になった時サービスワーカーが通知を受けて同期を処理します。

{{domxref('SyncManager')}} インターフェイスが {{domxref('ServiceWorkerRegistration.sync')}} を通じて利用可能です。一意なタグ識別子が同期イベントにおいて `'name'` に設定され、このイベントは {{domxref('ServiceWorker')}} のスクリプト内で受け取ることができます。イベントを受信したら、サーバーにリクエストを送信するなど、利用可能な任意の機能を実行することができます。

この API はサービスワーカーに依存しているので、この API が提供する機能は安全なコンテキストでのみ利用可能です。

## インターフェイス

- {{domxref('SyncManager')}} {{Experimental_Inline}}
  - : 後でネットワークが接続されたときサービスワーカーで実行するタスクを登録します。このようなタスクは _バックグラウンド同期の要求_ と呼ばれます。
- {{domxref('SyncEvent')}} {{Experimental_Inline}}
  - : 同期イベントを表します。このイベントは、{{domxref('ServiceWorker')}} の[グローバルスコープ](/ja/docs/Web/API/ServiceWorkerGlobalScope)に送信されます。これは、デバイスがネットワークに接続されたときタスクをサービスワーカーで実行する方法を提供します。

### 他のインターフェイスの拡張

[Service Worker API](/ja/docs/Web/API/Service_Worker_API) に追加された以下が、バックグラウンド同期をセットアップするためのエントリーポイントを提供します。

- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : デバイスがネットワークに接続されたときに実行するタスクを登録するための {{domxref("SyncManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}} イベント
  - : {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}} イベントが発生した際常に実行されるイベントハンドラーです。これは、ネットワークが利用可能になるとすぐに発生します。

## 例

以下の例は、インターフェイスの使い方を示します。

### バックグラウンド同期を要求する

以下の非同期関数は、ブラウジングコンテキストからバックグラウンド同期を登録します。

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("バックグラウンド同期の登録に失敗しました！");
  }
}
```

### タグを用いてバックグラウンド同期を確認する

このコードは、指定のタグがついたバックグラウンド同期タスクが登録されているかを確認します。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages")) {
      console.log("メッセージの同期は既に登録されています");
    }
  });
});
```

### サービスワーカー内でバックグラウンド同期イベントを受け取る

以下の例は、サービスワーカーでバックグラウンド同期イベントに応答する方法を示します。

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Introducing Background Sync](https://developer.chrome.com/blog/background-sync/)
