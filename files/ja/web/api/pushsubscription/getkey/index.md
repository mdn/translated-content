---
title: PushSubscription.getKey()
slug: Web/API/PushSubscription/getKey
---

{{SeeCompatTable}}{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェイスの **`getKey()`** メソッドは、サーバーに送信されてプッシュメッセージデータを暗号化するために使用される、クライアントパブリックキーを表す {{jsxref("ArrayBuffer")}} を返します。

## 構文

```js-nolint
var key = subscription.getKey(method);
```

### 引数

- `method`

  - : クライアントパブリックキーの生成に使用される暗号化メソッドです。現在、`p256dh` のみがオプションです。メソッドには次の値が選べます：

    - `p256dh`： P-256 曲線の [楕円曲線ディフィー・ヘルマン鍵共有](https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9A%E3%83%87%E3%82%A3%E3%83%95%E3%82%A3%E3%83%BC%E3%83%BB%E3%83%98%E3%83%AB%E3%83%9E%E3%83%B3%E9%8D%B5%E5%85%B1%E6%9C%89)（つまり、NIST secp256r1 楕円曲線）。結果として得られるキーは、ANSI X9.62 フォーマットで非圧縮ポイントとなります。

### 返値

{{jsxref("ArrayBuffer")}}。

## 例

[Push API デモ](https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/main.js#L51-L116)では、プッシュメッセージデータの暗号化と[サーバー](https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/server.js)から特定のサブスクライバーにプッシュメッセージを送信するために必要な認証を得るために、getKey('p256dh') と {{domxref("PushSubscription.endpoint")}} を呼び出しています。

```
reg.pushManager.getSubscription()
  .then(function(subscription) {
  // プッシュメッセージからサブスクライブ / アンサブスクライブ
  // する任意の UI を有効にする

  subBtn.disabled = false;

  if (!subscription) {
    console.log('Not yet subscribed to Push')
    // プッシュを購読していない場合、ユーザーがプッシュできるように
    // UI を設定する。
    return;
  }

  // プッシュメッセージを購読していることを表示するように
  // UI を設定する。
  subBtn.textContent = 'Unsubscribe from Push Messaging';
  isPushEnabled = true;

  // 購読ステータスのための UI 要素の設定を含んで状態を初期化し、
  // プッシュ経由でサブスクライバーを更新する。
  var endpoint = subscription.endpoint;
  var key = subscription.getKey('p256dh');

    ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushSubscription.getKey")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
