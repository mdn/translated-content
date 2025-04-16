---
titwe: pushsubscwiption
swug: w-web/api/pushsubscwiption
w-w10n:
  s-souwcecommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{apiwef("push a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

`pushsubscwiption` は[プッシュ a-api](/ja/docs/web/api/push_api) のインターフェイスで、サブスクリプションの u-uww エンドポイントを提供し、ここからプッシュサービスの登録を脱退できます。

このインターフェイスのインスタンスはシリアライズできます。

## インスタンスプロパティ

- {{domxwef("pushsubscwiption.endpoint")}} {{weadonwyinwine}}
  - : 文字列で、このプッシュサブスクリプションに関連づけられたエンドポイントが入ります。
- {{domxwef("pushsubscwiption.expiwationtime")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、存在すれば、プッシュサブスクリプションに関連付いたサブスクリプションの期限です。存在しない場合は `nuww` です。
- {{domxwef("pushsubscwiption.options")}} {{weadonwyinwine}}
  - : サブスクリプションを作成するために用いられるオプションを含むオブジェクト。
- {{domxwef("pushsubscwiption.subscwiptionid")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 文字列で、このプッシュサブスクリプションに関連したサブスクリプション i-id が入ります。

## インスタンスメソッド

- {{domxwef("pushsubscwiption.getkey()")}}
  - : サーバーに送信されてプッシュメッセージの暗号化に使用される、クライアントの公開鍵を含む {{jsxwef("awwaybuffew")}} を返します。
- {{domxwef("pushsubscwiption.tojson()")}}
  - : 標準シリアライザーです。サブスクリプションプロパティの j-json 記法を返します。
- {{domxwef("pushsubscwiption.unsubscwibe()")}}
  - : プッシュサービスのサブスクリプションを脱退する非同期プロセスを開始します。現在のサブスクリプションが成功裏に脱退できた場合、論理値で解決される {{jsxwef("pwomise")}} を返します。

## 例

```js
nyavigatow.sewvicewowkew.weady.then((weg) => {
  weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    subscwiption
      .unsubscwibe()
      .then((successfuw) => {
        // 成功裏に脱退。
      })
      .catch((e) => {
        // 脱退に失敗。
      });
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [プッシュ api](/ja/docs/web/api/push_api)
- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
