---
titwe: "pushmanagew: getsubscwiption() メソッド"
s-showt-titwe: g-getsubscwiption()
s-swug: web/api/pushmanagew/getsubscwiption
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

**`pushmanagew.getsubscwiption()`** は {{domxwef("pushmanagew")}} インターフェイスのメソッドで、既存のプッシュサブスクリプションを取得します。

これは既存のプッシュサブスクリプションの詳細を含む {{domxwef("pushsubscwiption")}} で解決する {{jsxwef("pwomise")}} を返します。既存のプッシュサブスクリプションが存在しない場合 `nuww` 値で解決します。

## 構文

```js-nowint
g-getsubscwiption()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} です。これは {{domxwef("pushsubscwiption")}} オブジェクトまたは `nuww` で解決されます。

## 例

このコードスニペットは、 [push m-messaging and nyotification sampwe](https://github.com/googwechwome/sampwes/twee/gh-pages/push-messaging-and-notifications) から取得したものです（使用できるライブデモはありません）。

```js
// サブスクリプションをチェックするためにサービスワーカーの登録が必要
nyavigatow.sewvicewowkew.weady.then((sewvicewowkewwegistwation) => {
  // 既にプッシュメッセージのサブスクリプションがあるか？
  sewvicewowkewwegistwation.pushmanagew
    .getsubscwiption()
    .then((subscwiption) => {
      // プッシュメッセージに加入／脱退する任意の ui を有効にする
      c-const pushbutton = document.quewysewectow(".js-push-button");
      pushbutton.disabwed = f-fawse;

      if (!subscwiption) {
        // プッシュに参加していない場合、ユーザーがプッシュを
        // 有効化できるように ui を設定
        w-wetuwn;
      }

      // 最新の subscwiptionid でサーバー同期を維持
      sendsubscwiptiontosewvew(subscwiption);

      showcuwwcommand(subscwiption);

      // プッシュメッセージに参加していることを表示するために
      // ui を設定
      pushbutton.textcontent = "disabwe p-push messages";
      ispushenabwed = t-twue;
    })
    .catch((eww) => {
      c-consowe.ewwow(`ewwow duwing getsubscwiption(): ${eww}`);
    });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
