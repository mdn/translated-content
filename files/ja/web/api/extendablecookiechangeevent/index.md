---
title: ExtendableCookieChangeEvent
slug: Web/API/ExtendableCookieChangeEvent
l10n:
  sourceCommit: 9fb6c9e56c6db295967384730feeb941509ac743
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

[「Cookie Store API」](/ja/docs/Web/API/Cookie_Store_API)の **`ExtendableCookieChangeEvent`** インターフェイスは、クッキーが何か変更された時 {{domxref("ServiceWorkerRegistration.oncookiechange()")}} に渡されるイベント型です。クッキーの変更イベントは、クッキーと種類 (`"changed"` または `"deleted"`) からなります。

`ExtendableCookieChangeEvent` を発生させるクッキーの変更は、以下のものがあります。

- クッキーが新規作成され、すぐには削除されません。この場合の `type` は `"changed"` です。
- クッキーが新規作成され、すぐに削除されます。この場合の `type` は `"deleted"` です。
- クッキーが削除されます。この場合の `type` は `"deleted"` です。

> **メモ:** 同じ名前・ドメイン・パスの他のクッキーが挿入されることにより置き換えられるクッキーは無視され、変更イベントを発生させません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ExtendableCookieChangeEvent.ExtendableCookieChangeEvent", "ExtendableCookieChangeEvent()")}}
  - : 新しい `ExtendableCookieChangeEvent` を生成します。

## インスタンスプロパティ

_このインターフェイスは、{{domxref("ExtendableEvent")}} からもプロパティを継承します。_

- {{domxref("ExtendableCookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : 変更されたクッキーが格納された配列を返します。
- {{domxref("ExtendableCookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : 削除されたクッキーが格納された配列を返します。

## 例

以下の例では、{{domxref("CookieStoreManager.getSubscriptions()")}} を用いて現在ある購読のリストを取得します。(サービスワーカーでは、イベントを監視するには購読が必要です) {{domxref("CookieStoreManager.unsubscribe()")}} を用いて既存の購読を解除し、{{domxref("CookieStoreManager.subscribe()")}} を用いて名前が `'COOKIE_NAME'` であるクッキーを購読します。このクッキーが変更されると、イベントリスナーがイベントをコンソールに記録します。これは、変化が起きたクッキーが格納された {{domxref("ExtendableCookieChangeEvent.changed","changed")}} プロパティまたは {{domxref("ExtendableCookieChangeEvent.deleted","deleted")}} プロパティを持つ `ExtendableCookieChangeEvent` オブジェクトです。

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
