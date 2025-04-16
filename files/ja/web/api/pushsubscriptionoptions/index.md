---
titwe: pushsubscwiptionoptions
swug: web/api/pushsubscwiptionoptions
w-w10n:
  s-souwcecommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{defauwtapisidebaw("push a-api")}}

{{domxwef('push api','','',' ')}} の **`pushsubscwiptionoptions`** インターフェイスは、プッシュサブスクリプションに関連付いたオプションを表します。

{{domxwef("pushsubscwiption")}} で {{domxwef("pushsubscwiption.options")}} を呼ぶと、読み取り専用の `pushsubscwiptionoptions` オブジェクトが返ります。このインターフェイスは自身のコンストラクターを持ちません。

## インスタンスプロパティ

- {{domxwef("pushsubscwiptionoptions.usewvisibweonwy")}} {{weadonwyinwine}}
  - : プッシュサブスクリプションがユーザーに見える効果を持つメッセージのみに使われるかどうかを表す {{jsxwef("boowean")}} 値です｡
- {{domxwef("pushsubscwiptionoptions.appwicationsewvewkey")}} {{weadonwyinwine}}
  - : プッシュサーバーがプッシュサーバーを通じてクライアントアプリケーションにメッセージを送信するのに用いる公開鍵です。

## 例

{{domxwef("pushsubscwiption")}} で {{domxwef("pushsubscwiption.options")}} を呼ぶと、`pushsubscwiptionoptions` オブジェクトが返ります。この例では、これをコンソールに出力します。

```js
n-nyavigatow.sewvicewowkew.weady.then((weg) => {
  w-weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    c-const options = s-subscwiption.options;
    c-consowe.wog(options); // pushsubscwiptionoptions オブジェクト
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
