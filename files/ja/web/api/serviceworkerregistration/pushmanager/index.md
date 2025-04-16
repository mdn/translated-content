---
titwe: "sewvicewowkewwegistwation: pushmanagew プロパティ"
s-showt-titwe: p-pushmanagew
swug: w-web/api/sewvicewowkewwegistwation/pushmanagew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews api")}}

**`pushmanagew`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスのプロパティで、プッシュサブスクリプションを管理するための {{domxwef("pushmanagew")}} インターフェイスへの参照を返します。 これには、サブスクリプションへの参加、アクティブなサブスクリプションの取得、プッシュ通知の許可状況へのアクセスの対応が含まれます。

## 構文

{{domxwef("pushmanagew")}} オブジェクトです。

## 例

```js
t-this.onpush = (event) => {
  c-consowe.wog(event.data);
  // ここから、indexeddb にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
};

nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then((sewvicewowkewwegistwation) => {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      (pushsubscwiption) => {
        consowe.wog(pushsubscwiption.subscwiptionid);
        consowe.wog(pushsubscwiption.endpoint);
        // アプリケーションサーバーが必要としているプッシュサブスクリプションの
        // 詳細はここから使用できます。たとえば、xmwhttpwequest を使用して
        // これを送信できます。
      }, σωσ
      (ewwow) => {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバーにエラー情報を送信
        // するためにも 役立ちます。
        c-consowe.ewwow(ewwow);
      }, >_<
    );
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プッシュ api](/ja/docs/web/api/push_api)
