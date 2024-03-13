---
title: BackgroundFetchUpdateUIEvent
slug: Web/API/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref('Background Fetch API','','',' ')}} の **`BackgroundFetchUpdateUIEvent`** インターフェイスは、 {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} 、および、 {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} イベントのためのイベント型で、バックグラウンドでのフェッチの成否をユーザーに伝えるために、アプリのタイトルやアイコンを更新するメソッドを有しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("BackgroundFetchUpdateUIEvent.BackgroundFetchUpdateUIEvent()", "BackgroundFetchUpdateUIEvent()")}} {{Experimental_Inline}}
  - : 新規に `BackgroundFetchUIEvent` オブジェクトを作成します。通常、このコンストラクターが使用されることはありません。なぜなら、これらのオブジェクトは {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} 、および、 {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} イベントのためにブラウザーによって自動で生成されるからです。

## プロパティ

_このインスタンスは特にプロパティを持っていませんが、 {{domxref("Event")}} 、および、 {{domxref("BackgroundFetchEvent")}} のプロパティを継承します。_

## メソッド

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}} {{Experimental_Inline}}
  - : バックグラウンドのフェッチの状況を知らせるために、 UI 上のタイトルとアイコンを更新します。 {{jsxref("Promise")}} によって解決されます。

## 例

以下の例では、 `backgroundfetchsuccess` イベントの発生が待ち受けられおり、イベントの発生はフェッチが完遂されたことを意味します。イベント発生時、ユーザーにエピソードのダウンロードが完了したことを伝えるメッセージと共に、 {{domxref("BackgroundFetchUpdateUIEvent.updateUI()", "updateUI()")}} メソッドが呼ばれています。

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const bgFetch = event.registration;

  event.waitUntil(
    (async () => {
      // キャッシュを作成
      const cache = await caches.open("downloads");
      // すべての BackgroundFetchRecord オブジェクトを取得
      const records = await bgFetch.matchAll();
      // 各リクエスト/レスポンスの組をコピー
      const promises = records.map(async (record) => {
        const response = await record.responseReady;
        await cache.put(record.request, response);
      });

      // コピーの完了を待つ
      await Promise.all(promises);

      // 進捗表示を更新
      event.updateUI({ title: "Episode 5 ready to listen!" });
    })(),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
