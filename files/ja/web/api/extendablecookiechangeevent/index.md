---
title: ExtendableCookieChangeEvent
slug: Web/API/ExtendableCookieChangeEvent
l10n:
  sourceCommit: 335a6f38068e697c64009243648c75fb97650402
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

**`ExtendableCookieChangeEvent`** は{{domxref("Cookie Store API", "クッキーストアー API", "", "nocode")}} のインターフェイスで、サービスワーカーのクッキー変更サブスクリプションリストに一致するクッキーの変更が発生した際に、{{domxref("ServiceWorkerGlobalScope")}} で発生する {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} イベントに渡されるイベント型です。Cookie の変更イベントは、Cookie と種類 (`"changed"` または `"deleted"`) からなります。

`ExtendableCookieChangeEvent` を発生させる Cookie の変更は、以下のものがあります。

- Cookie が新規作成され、すぐには削除されなかった場合、または置き換えられた場合。
  この場合の `type` は "changed" です。
- Cookie が新規作成され、すぐに削除された場合。
  この場合の `type` は "deleted" です。
- Cookie が削除された場合。この場合の `type` は "deleted" です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ExtendableCookieChangeEvent.ExtendableCookieChangeEvent", "ExtendableCookieChangeEvent()")}}
  - : 新しい `ExtendableCookieChangeEvent` を生成します。

## インスタンスプロパティ

_このインターフェイスには {{domxref("ExtendableEvent")}} から継承したプロパティもあります。_

- {{domxref("ExtendableCookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : 変更された Cookie が格納された配列を返します。
- {{domxref("ExtendableCookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : 削除された Cookie が格納された配列を返します。

## インスタンスメソッド

_このインターフェイスには {{domxref("ExtendableEvent")}} から継承したメソッドもあります。_

## 例

以下の例では、{{domxref("CookieStoreManager.getSubscriptions()")}} を用いて現在ある購読のリストを取得します。(サービスワーカーでは、イベントを監視するには購読が必要です) {{domxref("CookieStoreManager.unsubscribe()")}} を用いて既存の購読を解除し、{{domxref("CookieStoreManager.subscribe()")}} を用いて名前が `'COOKIE_NAME'` である Cookie を購読します。この Cookie が変更されると、イベントリスナーがイベントをコンソールに記録します。これは、変化が起きた Cookie が格納された {{domxref("ExtendableCookieChangeEvent.changed","changed")}} プロパティまたは {{domxref("ExtendableCookieChangeEvent.deleted","deleted")}} プロパティを持つ `ExtendableCookieChangeEvent` オブジェクトです。

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(async () => {
    const subscriptions = await self.registration.cookies.getSubscriptions();

    await self.registration.cookies.unsubscribe(subscriptions);

    await self.registration.cookies.subscribe([
      {
        name: "COOKIE_NAME",
      },
    ]);
  });
});

self.addEventListener("cookiechange", (event) => {
  console.log(event);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
