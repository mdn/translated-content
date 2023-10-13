---
title: CookieStoreManager
slug: Web/API/CookieStoreManager
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{securecontext_header}}{{APIRef("Cookie Store")}}{{SeeCompatTable}}

[「Cookie Store API」](/ja/docs/Web/API/Cookie_Store_API)の **`CookieStoreManager`** インターフェイスは、サービスワーカーが Cookie 変更イベントを購読できるようにします。変更イベントを受け取るには、特定のサービスワーカーの登録で {{domxref("CookieStoreManager.subscribe()","subscribe()")}} を呼びます。

`CookieStoreManager` には、関連づいた {{domxref("ServiceWorkerRegistration")}} があります。それぞれのサービスワーカーの登録には、Cookie 変更購読リストがあります。これは、それぞれが名前と URL を持つ Cookie 変更購読のリストです。このインターフェイスのメソッドにより、サービスワーカーはこのリストに購読を追加したり、リストから購読を削除したり、すべての購読のリストを取得したりできます。

`CookieStoreManager` を得るには、{{domxref("ServiceWorkerRegistration.cookies")}} を参照します。

## インスタンスメソッド

- {{domxref("CookieStoreManager.getSubscriptions()")}} {{Experimental_Inline}}
  - : このサービスワーカーの登録の Cookie 変更購読のリストで解決する {{jsxref("promise")}} を返します。
- {{domxref("CookieStoreManager.subscribe()")}} {{Experimental_Inline}}
  - : Cookie の変更を購読します。購読に成功したら解決する {{jsxref("promise")}} を返します。
- {{domxref("CookieStoreManager.unsubscribe()")}} {{Experimental_Inline}}
  - : このサービスワーカーの登録の Cookie の変更の購読を解除します。操作に成功したら解決する {{jsxref("promise")}} を返します。

## 例

この例では、`registration` で表される {{domxref("ServiceWorkerRegistration")}} が、名前が `"cookie1"` でスコープが `"/path1"` である Cookie の変更イベントを購読します。

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

{{domxref("ServiceWorkerRegistration")}} が既に何か Cookie を購読している場合は、{{domxref("CookieStoreManager.getSubscriptions()","getSubscriptions()")}} はもとの購読で用いるのと同じ形式のオブジェクトで表された Cookie のリストを返します。

```js
const subscriptions = await registration.cookies.getSubscriptions();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
