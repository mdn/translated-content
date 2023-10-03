---
title: "CookieStoreManager: subscribe() メソッド"
slug: Web/API/CookieStoreManager/subscribe
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store")}}{{SeeCompatTable}}

{{domxref("CookieStoreManager")}} インターフェイスの **`subscribe()`** メソッドは、{{domxref("ServiceWorkerRegistration")}} に Cookie 変更イベントを購読させます。

## 構文

```js-nolint
subscribe(subscriptions)
```

### 引数

- `subscriptions`

  - : 以下が格納されたオブジェクトです。

    - `name`
      - : Cookie の名前を表す文字列です。
    - `url`
      - : Cookie のスコープの URL を表す文字列です。サービスワーカーの登録のスコープより狭くすることができます。

### 返値

購読が完了したら {{jsxref("undefined")}} で解決する {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : `subscriptions` に渡された URL がサービスワーカーの登録の {{domxref("ServiceWorkerRegistration.scope","scope")}} とマッチしないとき投げられます。

## 例

この例では、`registration` で表される {{domxref("ServiceWorkerRegistration")}} が、名前が `"cookie1"` でスコープが `"/path1"` である Cookie の変更イベントを購読します。

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

`subscribe()` メソッドに渡す URL は、サービスワーカーの登録のスコープより狭くすることができます。以下の例では、`/path/one/` を購読しているので、最初の Cookie の変更では変更イベントを受け取りますが、2 番目では受け取りません。

```js
registration.cookies.subscribe([{ name: "cookie1", url: "/path/one/" }]); // 購読
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/one/" }); // 変更イベントを受け取る
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/two/" }); // 変更イベントを受け取らない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
