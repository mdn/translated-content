---
title: "PushSubscription: getKey() メソッド"
short-title: getKey()
slug: Web/API/PushSubscription/getKey
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Push API")}}

`getKey()` は {{domxref("PushSubscription")}} インターフェイスのメソッドで、サーバーに送信されてプッシュメッセージのデータを暗号化するために使用される、クライアントの公開鍵を表す {{jsxref("ArrayBuffer")}} を返します。

## 構文

```js-nolint
getKey(name)
```

### 引数

- `method`

  - : クライアントの公開鍵の生成に使用される暗号化方式です。取りうる値は以下の通りです。

    - `p256dh`
      - : P-256 曲線（つまり、NIST secp256r1 楕円曲線）の[楕円曲線ディフィー・ヘルマン](https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9A%E3%83%87%E3%82%A3%E3%83%95%E3%82%A3%E3%83%BC%E3%83%BB%E3%83%98%E3%83%AB%E3%83%9E%E3%83%B3%E9%8D%B5%E5%85%B1%E6%9C%89)公開鍵です。結果として得られるキーは、ANSI X9.62 フォーマットで非圧縮ポイントとなります。
    - `auth`
      - : [Message Encryption for Web Push](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption-08) で記述されている認証秘密です。

### 返値

{{jsxref("ArrayBuffer")}}。

## 例

```js
reg.pushManager.getSubscription().then((subscription) => {
  // プッシュメッセージからサブスクライブ / アンサブスクライブ
  // する任意の UI を有効にする

  subBtn.disabled = false;

  if (!subscription) {
    console.log("Not yet subscribed to Push");
    // プッシュを購読していない場合、ユーザーがプッシュできるように
    // UI を設定する。
    return;
  }

  // プッシュメッセージを購読していることを表示するように
  // UI を設定する。
  subBtn.textContent = "Unsubscribe from Push Messaging";
  isPushEnabled = true;

  // 購読ステータスのための UI 要素の設定を含んで状態を初期化し、
  // プッシュ経由でサブスクライバーを更新する。
  const endpoint = subscription.endpoint;
  const key = subscription.getKey("p256dh");
  const auth = subscription.getKey("auth");

  // ...
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
