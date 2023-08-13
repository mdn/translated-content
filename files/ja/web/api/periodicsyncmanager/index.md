---
title: PeriodicSyncManager
slug: Web/API/PeriodicSyncManager
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

**`PeriodicSyncManager`** は{{domxref('Web Periodic Background Synchronization API', 'ウェブ定期バックグラウンド同期 API')}} のインターフェイスは、ネットワーク接続のある定期的な間隔で実行するタスクをサービスワーカーの中に登録する方法を提供します。これらのタスクは、定期バックグラウンド同期リクエストと呼ばれます。`PeriodicSyncManager` には {{domxref('ServiceWorkerRegistration.periodicSync')}} を通してアクセスします。

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxref('PeriodicSyncManager.register')}} {{Experimental_Inline}}
  - : 指定したタグとオプションでブラウザーに定期同期リクエストを登録します。登録が完了した時点で解決する {{jsxref('Promise')}} を返します。
- {{domxref('PeriodicSyncManager.getTags')}} {{Experimental_Inline}}
  - : 定期同期を行うために現在登録されているタグを表す[文字列](Web/JavaScript/Data_structures#文字列型)のリストで解決される {{jsxref('Promise')}} を返します。
- {{domxref('PeriodicSyncManager.unregister')}} {{Experimental_Inline}}
  - : 指定されたタグに対応する定期同期のリクエストを登録解除し、登録解除が完了すると解決する {{jsxref('Promise')}} を返します。

## 例

次の例は、インターフェイスを使用する方法を示しています。

### 定期バックグラウンド同期のリクエスト

以下の非同期関数は、閲覧コンテキストから最小 1 日間隔で定期バックグラウンド同期を登録するものです。

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

### タグによる定期バックグラウンド同期の検証

このコードは、指定されたタグを持つ定期バックグラウンド同期タスクが登録されているかどうかを調べるものです。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### 定期バックグラウンド同期タスクの削除

以下は、定期バックグラウンド同期タスクを削除して、バックグラウンドでの記事同期を停止するコードです。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
