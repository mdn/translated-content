---
title: ウェブ定期バックグラウンド同期 API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}

ウェブ定期バックグラウンド同期 API (Web Periodic Background Synchronization API) は、{{domxref('Service Worker API','サービスワーカー', "", 1)}}上で定期的にネットワーク通信ができる状況で実行されるタスクを登録する機能を提供します。それらのタスクを定期バックグラウンド同期リクエスト (periodic background sync requests) と呼びます。

## ウェブ定期バックグラウンド同期の概念と用法

定期バックグラウンド同期 API により、ウェブアプリケーションが定期的にサービスワーカーに更新を行うよう知らせることができます。利用法としては、端末が Wi-Fi に接続している間に最新のコンテンツを取得したり、アプリケーションをバックグラウンドで更新したりすることが挙げられます。

API が呼び出された際には最小の時間間隔が設定されますが、ユーザーエージェントはサービスワーカーがそのイベントを受け取るタイミングに影響を与える様々な要素を考慮します。その要素には、例えばウェブサイトのエンゲージメントや特定のネットワークへの接続などがあります。

{{domxref('PeriodicSyncManager')}} インターフェースは {{domxref('ServiceWorkerRegistration.periodicSync')}} によって提供されます。一意のタグが sync イベントの 'name' として設定され、これは {{domxref('ServiceWorker')}} スクリプト内で取得することができます。イベントを受け取った際には、キャッシュの更新や新たなリソースの取得といった任意の利用可能な機能を実行することができます

この API はサービスワーカーに依存しているため、この API も安全なコンテキストでしか利用できません。

> [!NOTE]
> 執筆時点では、ウェブ定期バックグラウンド同期 API は、インストールされた[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps)を介してのみ利用可能です。

## ウェブ定期バックグラウンド同期インターフェイス

- {{domxref('PeriodicSyncManager')}}
  - : ネットワーク接続がある状態で、定期的にサービスワーカーの中で実行されるタスクを登録します。これらのタスクは、定期バックグラウンド同期要求として参照されます。
- {{domxref('PeriodicSyncEvent')}}
  - : {{domxref('ServiceWorker')}} の{{domxref('ServiceWorkerGlobalScope', 'グローバルスコープ', "", 1)}}に送信される、同期イベントを表します。これは、ネットワーク接続があるサービスワーカーのタスクを実行する方法を指定されたものです。

## サービスワーカーへの追加

定期バックグラウンド同期仕様では、定期バックグラウンド同期を使用するためのエントリーポイントを提供するために、{{domxref('Service Worker API', 'サービスワーカー API', '', 1)}} に以下のような追加項目を指定しています。

- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{ReadOnlyInline}}
  - : 特定の間隔で実行するタスクを登録するための {{domxref("PeriodicSyncManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerGlobalScope.periodicsync_event", "onperiodicsync")}}
  - : {{domxref("ServiceWorkerGlobalScope.periodicsync_event", "periodicsync")}} イベントが発生したときに発行されるイベントハンドラーです。これは {{domxref('PeriodicSyncManager')}} を登録する際に指定した、時刻を指定した間隔で実行されます。

## 例

以下の例では、インターフェイスを使用する方法を示しています。

### 定期バックグラウンド同期のリクエスト

次の非同期関数は、閲覧コンテキストから最小 1 日間隔の定期バックグラウンド同期を登録するものです。

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("get-latest-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

### 定期バックグラウンド同期をタグで検証

このコードは、指定されたタグを持つ定期バックグラウンド同期タスクが登録されているかどうかを調べるものです。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### 定期バックグラウンド同期タスクを削除

以下のコードでは、定期バックグラウンド同期タスクを削除し、バックグラウンドでの記事の同期を停止しています。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### サービスワーカーの定期バックグラウンド同期の待ち受け

以下の例では、サービスワーカーの定期的な同期イベントに応答する方法を示しています。

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [An article on using Periodic Background Sync](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
