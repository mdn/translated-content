---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
---

{{securecontext_header}}

{{DefaultAPISidebar("Periodic Background Sync")}}

Web Periodic Background Synchonization API は、 {{domxref('Service Worker API','service worker')}} 上で定期的にネットワーク通信ができる状況で走るタスクを登録する機能を提供します。それらのタスクを周期的なバックグラウンド同期リクエスト (periodic background sync requests) と呼びます。

## Web Periodic Background Synchronization の概念と用法

Periodic Background Sync API により、ウェブアプリケーションが定期的にサービスワーカーにアップデートを行うよう知らせることができます。利用法としては、デバイスが WiFi に接続している間に最新のコンテンツを取得したり、アプリケーションをバックグラウンドでアップデートしたりすることが挙げられます。

API が呼び出された際には最小の時間間隔がセットされますが、サービスワーカーがそのイベントを受け取るタイミングに影響を与える様々な要素をユーザーエージェントは考慮します。その要素には、例えばウェブサイトのエンゲージメントや特定のネットワークへの接続などがあります。

{{domxref('PeriodicSyncManager')}} インターフェースは {{domxref('ServiceWorkerRegistration.periodicSync')}} によって提供されます。一意のタグが sync イベントの 'name' として設定され、これは {{domxref('ServiceWorker')}} スクリプト内で取得することができます。イベントを受け取った際には、キャッシュのアップデートや新たなリソースの取得といった任意の利用可能な機能を実行することができます

この API はサービスワーカーに依存しているため、この API も安全なコンテクスト (secure context) でしか利用できません。

> **メモ:** At the time of writing, the Web Periodic Background Synchronization API is only available through an installed [Progressive Web App](/ja/docs/Web/Progressive_web_apps)

## Web Periodic Background Synchronization Interfaces

- {{domxref('PeriodicSyncManager')}}
  - : Registers tasks to be run in a service worker at periodic intervals with network connectivity. These tasks are referred to as periodic background sync requests.
- {{domxref('PeriodicSyncEvent')}}
  - : Represents a synchronization event, sent to the {{domxref('ServiceWorkerGlobalScope', 'global scope')}} of a {{domxref('ServiceWorker')}}. It provides a way to run tasks in the service worker with network connectivity.

## Service Worker Additions

The following additions to the {{domxref('Service Worker API')}} are specified in the Periodic Background Sync specification to provide an entry point for using Periodic Background Sync.

- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PeriodicSyncManager")}} interface for registering tasks to run at specific intervals.
- {{domxref("ServiceWorkerGlobalScope.onperiodicsync")}}
  - : An event handler fired whenever a {{Event("periodicsync")}} event occurs. This happens at timed intervals, that are specified when registering a {{domxref('PeriodicSyncManager')}}.

## Examples

The following examples show how to use the interface.

### Requesting a Periodic Background Sync

The following asynchronous function registers a periodic background sync at a minimum interval of one day from a browsing context:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register('fetch-news', {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log('Periodic Sync could not be registered!');
  }
}
```

### Verifying a Background Periodic Sync by Tag

This code checks to see if a Periodic Background Sync task with a given tag is registered.

```js
navigator.serviceWorker.ready.then(registration => {
  registration.periodicSync.getTags().then(tags => {
    if (tags.includes('get-latest-news'))
      skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Removing a Periodic Background Sync Task

The following code removes a Periodic Background Sync task to stop articles syncing in the background.

```js
navigator.serviceWorker.ready.then(registration => {
  registration.periodicSync.unregister('get-latest-news');
});
```

### Listening for a Periodic Background Sync within a Service Worker

The following example shows how to respond to a periodic sync event in the service worker.

```js
self.addEventListener('periodicsync', event => {
  if (event.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

## Specifications

| Specification                                        | Status                                           | Comment             |
| ---------------------------------------------------- | ------------------------------------------------ | ------------------- |
| {{SpecName('Periodic Background Sync')}} | {{Spec2('Periodic Background Sync')}} | Initial definition. |

## Browser compatibility

{{Compat("api.PeriodicSyncManager")}}

## See also

- [An article on using Periodic Background Sync](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
