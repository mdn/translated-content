---
title: "CookieStoreManager: unsubscribe() メソッド"
slug: Web/API/CookieStoreManager/unsubscribe
l10n:
  sourceCommit: 010a96869db46dc6e1a9bc9808dc3a1588bf025a
---

{{securecontext_header}}{{APIRef("Cookie Store")}}{{SeeCompatTable}}

{{domxref("CookieStoreManager")}} インターフェイスの **`unsubscribe()`** メソッドは、{{domxref("ServiceWorkerRegistration")}} が以前購読していたイベントを受け取るのを止めます。

## 構文

```js-nolint
unsubscribe(subscriptions)
```

### 引数

- `subscriptions`
  - : 以下が格納されたオブジェクトです。
    - `name`
      - : Cookie の名前を表す文字列です。
    - `url`
      - : この Cookie の購読に使用していたスコープの URL を表す文字列です。

### 返値

サービスワーカーの購読の解除が完了したら {{jsxref("undefined")}} で解決する {{jsxref("Promise")}} を返します。

### 例外

- {{jsxref("TypeError")}}
  - : `subscriptions` に渡された URL がサービスワーカーの登録の {{domxref("ServiceWorkerRegistration.scope","scope")}} とマッチしないとき投げられます。

## 例

この例では、`registration` で表される {{domxref("ServiceWorkerRegistration")}} が、名前が `"cookie1"` でスコープが `"/path1"` である Cookie の変更イベントの購読を解除します。

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.unsubscribe(subscriptions);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
