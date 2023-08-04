---
title: "PeriodicSyncManager: getTags() メソッド"
slug: Web/API/PeriodicSyncManager/getTags
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

**`getTags()`** は {{domxref("PeriodicSyncManager")}} インターフェイスのメソッドで、定期的な同期を行うために現在登録されているタグを表す {{jsxref('String')}} オブジェクトのリストで解決される {{jsxref('Promise')}} を返します。

## 構文

```js-nolint
getTags()
```

### 引数

なし。

### 返値

定期的な同期を行うために現在登録されているタグを表す {{jsxref('String')}} オブジェクトのリストで解決される {{jsxref('Promise')}} です。

### 例外

なし。

## 例

次の例では、`getTags()` メソッドを使用して、指定されたタグを持つ定期的な同期タスクが登録されているかどうかを調べています。

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

`skipDownloadingLatestNewsOnPageLoad()` は開発者が定義した関数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
