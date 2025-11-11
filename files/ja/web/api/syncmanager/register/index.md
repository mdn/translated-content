---
title: "SyncManager: register() メソッド"
slug: Web/API/SyncManager/register
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

{{domxref("SyncManager")}} インターフェイスの **`register()`** メソッドは、同期イベントを登録します。このイベントは、ネットワーク接続が利用可能になるとすぐに、関連付けられたサービスワーカー内で {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}} イベントを発生させます。

## 構文

```js-nolint
register(tag)
```

### 引数

- `tag`
  - : 同期イベントの識別子です。これは、サービスワーカーの {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}} イベントのハンドラーに渡される {{domxref("SyncEvent")}} の `tag` プロパティの値になります。

### 返値

{{jsxref("undefined")}} で解決する {{jsxref("Promise")}} です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在のサービスワーカーがアクティブでないとき投げられます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : バックグラウンド同期がユーザーにより無効化されているとき投げられます。

## 例

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
