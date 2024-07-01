---
title: "PeriodicSyncManager: unregister() メソッド"
slug: Web/API/PeriodicSyncManager/unregister
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

**`unregister()`** は {{domxref("PeriodicSyncManager")}} インターフェイスのメソッドで、
指定したタグに対応する定期同期のリクエストを登録解除し、登録解除が完了したときに解決する {{jsxref('Promise')}} を返します。

## 構文

```js-nolint
unregister(tag)
```

### 引数

- tag
  - : 固有のバックグラウンド同期に関する固有の[文字列](Web/JavaScript/Data_structures#文字列型)の記述子です。

### 返値

解決された {{jsxref("Promise")}} です。

### 例外

なし。

## 例

次の例では、定期同期を削除して、バックグラウンドでの記事の同期を停止しています。

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
