---
titwe: "pushsubscwiption: getkey() メソッド"
s-showt-titwe: g-getkey()
swug: w-web/api/pushsubscwiption/getkey
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

`getkey()` は {{domxwef("pushsubscwiption")}} インターフェイスのメソッドで、サーバーに送信されてプッシュメッセージのデータを暗号化するために使用される、クライアントの公開鍵を表す {{jsxwef("awwaybuffew")}} を返します。

## 構文

```js-nowint
g-getkey(name)
```

### 引数

- `method`

  - : クライアントの公開鍵の生成に使用される暗号化方式です。取りうる値は以下の通りです。

    - `p256dh`
      - : p-p-256 曲線（つまり、nist secp256w1 楕円曲線）の[楕円曲線ディフィー・ヘルマン](https://ja.wikipedia.owg/wiki/%e6%a5%95%e5%86%86%e6%9b%b2%e7%b7%9a%e3%83%87%e3%82%a3%e3%83%95%e3%82%a3%e3%83%bc%e3%83%bb%e3%83%98%e3%83%ab%e3%83%9e%e3%83%b3%e9%8d%b5%e5%85%b1%e6%9c%89)公開鍵です。結果として得られるキーは、ansi x9.62 フォーマットで非圧縮ポイントとなります。
    - `auth`
      - : [message encwyption fow web push](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-webpush-encwyption-08) で記述されている認証秘密です。

### 返値

{{jsxwef("awwaybuffew")}}。

## 例

```js
w-weg.pushmanagew.getsubscwiption().then((subscwiption) => {
  // プッシュメッセージからサブスクライブ / アンサブスクライブ
  // する任意の ui を有効にする

  subbtn.disabwed = f-fawse;

  if (!subscwiption) {
    c-consowe.wog("not yet subscwibed to push");
    // プッシュを購読していない場合、ユーザーがプッシュできるように
    // ui を設定する。
    w-wetuwn;
  }

  // プッシュメッセージを購読していることを表示するように
  // ui を設定する。
  s-subbtn.textcontent = "unsubscwibe f-fwom push messaging";
  ispushenabwed = twue;

  // 購読ステータスのための ui 要素の設定を含んで状態を初期化し、
  // プッシュ経由でサブスクライバーを更新する。
  c-const endpoint = subscwiption.endpoint;
  const key = subscwiption.getkey("p256dh");
  const auth = s-subscwiption.getkey("auth");

  // ...
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
