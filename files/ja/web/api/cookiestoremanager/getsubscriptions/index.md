---
title: "CookieStoreManager: getSubscriptions() メソッド"
slug: Web/API/CookieStoreManager/getSubscriptions
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store")}}{{SeeCompatTable}}

{{domxref("CookieStoreManager")}} インターフェイスの **`getSubscriptions()`** メソッドは、この {{domxref("ServiceWorkerRegistration")}} のすべての Cookie 変更購読のリストを返します。

## 構文

```js-nolint
getSubscriptions()
```

### 引数

なし

### 返値

オブジェクトのリストで解決する {{jsxref("promise")}} です。それぞれのオブジェクトは以下を持ちます。

- `name`
  - : Cookie の名前を表す文字列です。
- `url`
  - : Cookie を購読するのに用いるスコープの URL を表す文字列です。

## 例

`registration` で表される {{domxref("ServiceWorkerRegistration")}} が既に何か Cookie 変更イベントを購読している場合は、`subscriptions` はそれらの Cookie の名前と URL が格納されたオブジェクトのリストで解決します。

```js
const subscriptions = await registration.cookies.getSubscriptions();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
