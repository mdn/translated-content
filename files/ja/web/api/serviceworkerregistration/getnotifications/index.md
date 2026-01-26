---
title: ServiceWorkerRegistration.getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}

**`getNotifications()`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのメソッドで、現在のサービスワーカー登録を介して現在のオリジンから作成された順序で通知のリストを返します。オリジンには、アクティブではあるがスコープが異なるサービスワーカー登録が多数あります。 同じオリジンの 1 つのサービスワーカーによって作成された通知は、同じオリジンの他のアクティブなサービスワーカーでは利用できません。

## 構文

```js-nolint
getNotifications()
getNotifications(options)
```

### 引数

- `options` {{optional_inline}}
  - : 返される通知を絞り込むオプションを含むオブジェクト。 使用可能なオプションは次のとおりです。
    - `tag`
      - : 通知タグを表す文字列。 指定した場合、このタグを持つ通知のみが返されます。

### 返値

{{jsxref("Promise")}} で、 {{domxref("Notification")}} オブジェクトのリストに解決されます。

## 例

```js
navigator.serviceWorker.register("sw.js");

const options = { tag: "user_alerts" };

navigator.serviceWorker.ready.then((registration) => {
  registration.getNotifications(options).then((notifications) => {
    // notifications で何かをします
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
