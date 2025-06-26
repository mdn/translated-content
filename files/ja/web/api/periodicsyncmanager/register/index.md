---
title: "PeriodicSyncManager: register() メソッド"
slug: Web/API/PeriodicSyncManager/register
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

**`register()`** は {{domxref("PeriodicSyncManager")}} インターフェイスのメソッドで、
指定したタグとオプションでブラウザーに定期的な同期リクエストを登録します。登録が完了すると解決する {{jsxref('Promise')}} を返します。

## 構文

```js-nolint
register(tag, options)
```

### 引数

- `tag`
  - : 固有の[文字列](Web/JavaScript/Data_structures#文字列型)の識別子です。
- `options` {{optional_inline}}
  - : 以下のオプションデータを含む {{jsxref('Object')}} です。
    - `minInterval`
      - : 定期的な同期を行う最小間隔時間をミリ秒単位で指定します。

### 返値

{{jsxref('undefined')}} で解決する {{jsxref("Promise")}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : アクティブなサービスワーカー ({{domxref('ServiceWorker')}}) が存在しない場合に返されます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : バックグラウンド定期同期のその権限が与えられていない場合に返されます。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : アクティブウィンドウがメインウィンドウでない場合（`auxiliary` や `top-level` の種類でない場合）に返されます。

## 例

以下の非同期関数は、閲覧コンテキストから最小 1 日間隔で定期バックグラウンド同期を登録するものです。

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("fetch-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
