---
title: "ServiceWorkerGlobalScope: backgroundfetchsuccess イベント"
short-title: backgroundfetchsuccess
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`backgroundfetchsuccess`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、[バックグラウンドフェッチ](/ja/docs/Web/API/Background_Fetch_API)操作が正常に完了したとき、つまり、フェッチで行うネットワークリクエストがすべて正常に完了したときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("backgroundfetchsuccess", (event) => {});

onbackgroundfetchsuccess = (event) => {};
```

## イベント型

{{domxref("BackgroundFetchUpdateUIEvent")}} です。

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## イベントプロパティ

_親である {{domxref("BackgroundFetchEvent")}} から継承したプロパティがあります。_

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : ブラウザーがフェッチ操作の進捗状況を表示するために表示する要素の UI を更新します。

## 解説

[バックグラウンドフェッチ](/ja/docs/Web/API/Background_Fetch_API)操作が正常に完了すると（つまり、すべての個々のネットワークリクエストが正常に完了すると）、必要に応じてブラウザーはサービスワーカーを開始し、サービスワーカーのグローバルスコープで `backgroundfetchsuccess` イベントを発行します。

このイベントのハンドラーでは、サービスワーカーはレスポンスを取得し、（例えば、{{domxref("Cache")}} API を使用して）保存することができます。レスポンスデータにアクセスするには、サービスワーカーはイベントの {{domxref("BackgroundFetchEvent/registration", "registration")}} プロパティを使用します。

バックグラウンドフェッチ API では、ブラウザーはユーザーに操作の進行状況を示す UI 要素を表示します。`backgroundfetchsuccess` ハンドラーでは、サービスワーカーがその UI を更新して操作が成功したことを示すことができます。これを行うには、ハンドラーがイベントの {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}} メソッドを呼び出し、新しいタイトルやアイコンを渡します。

## 例

### レスポンスを保存して UI を更新

このイベントハンドラーは、すべてのレスポンスをキャッシュに格納し、UI を更新します。

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const registration = event.registration;

  event.waitUntil(async () => {
    // Open a cache
    const cache = await caches.open("movies");
    // Get all the records
    const records = await registration.matchAll();
    // Cache all responses
    const cachePromises = records.map(async (record) => {
      const response = await record.responseReady;
      await cache.put(record.request, response);
    });

    // Wait for caching to finish
    await Promise.all(cachePromises);

    // Update the browser's UI
    event.updateUI({ title: "Move download complete" });
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API)
