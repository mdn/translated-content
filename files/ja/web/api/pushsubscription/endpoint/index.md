---
title: PushSubscription.endpoint
slug: Web/API/PushSubscription/endpoint
---

{{SeeCompatTable}}{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェイスの **`endpoint`** 読み取り専用プロパティは、プッシュサブスクリプションに関連するエンドポイントを含む {{domxref("USVString")}} を返します。

エンドポイントは、プッシュサービスに加入している特定のサービスワーカーにプッシュメッセージを送信するために使用するプッシュサーバーへのカスタム URL エンドポイントの形式をとります。このため、他者がこれをハイジャックしてプッシュ機能を乱用しないように、エンドポイントを秘匿する方が良いです。

## 構文

```js-nolint
var myEnd = pushSubscription.endpoint;
```

### 値

{{domxref("USVString")}}。

## 例

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
    console.log(subscription.endpoint);

      // この時点で、サブスクリプションエンドポイントをサーバーに送信し、
      // 保存した後、後でプッシュメッセージを送信するために使用します。
  })
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushSubscription.endpoint")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- [Push Notifications on the Open Web](http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web), Matt Gaunt
