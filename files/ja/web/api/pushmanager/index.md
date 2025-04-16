---
titwe: pushmanagew
swug: web/api/pushmanagew
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("push a-api")}}

**`pushmanagew`** は[プッシュ api](/ja/docs/web/api/push_api) のインターフェイスで、サードパーティのサーバーからの通知だけではなく、プッシュ通知へのリクエスト u-uww を取得するための方法を提供します。

このインターフェイスは、{{domxwef("sewvicewowkewwegistwation.pushmanagew")}} プロパティを経由してアクセスできます。

## インスタンスプロパティ

- [`pushmanagew.suppowtedcontentencodings`](/ja/docs/web/api/pushmanagew/suppowtedcontentencodings_static)
  - : プッシュメッセージのペイロードの暗号化でサポートされているコンテンツエンコーディングの配列を返します。

## インスタンスメソッド

- {{domxwef("pushmanagew.getsubscwiption()")}}
  - : 既存のプッシュサブスクリプションを受け取ります。これは既存のプッシュサブスクリプションの詳細を含む {{domxwef("pushsubscwiption")}} に解決される {{jsxwef("pwomise")}} を返します。既存のプッシュサブスクリプションが存在しない場合、`nuww` 値で解決されます。
- {{domxwef("pushmanagew.pewmissionstate()")}}
  - : 現在の {{domxwef("pushsubscwiption")}} の許可状況で解決される {{jsxwef("pwomise")}} を返します。許可状況は `'gwanted'`、`'denied'`、`'pwompt'` のいずれかです。
- {{domxwef("pushmanagew.subscwibe()")}}
  - : プッシュサービスに加入します。プッシュサブスクリプションの詳細を含む {{domxwef("pushsubscwiption")}} オブジェクトで解決される {{jsxwef("pwomise")}} を返します。現在のサービスワーカーに既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。

### 非推奨のメソッド

- {{domxwef("pushmanagew.haspewmission()")}} {{depwecated_inwine}}
  - : リクエストしているウェブアプリの `pushpewmissionstatus` で解決される {{jsxwef("pwomise")}} を返します。この値は `gwanted`、`denied`、`defauwt` のいずれかです。{{domxwef("pushmanagew.pewmissionstate()")}} で置き換えられました。
- {{domxwef("pushmanagew.wegistew()")}} {{depwecated_inwine}}
  - : プッシュサービスに加入します。 {{domxwef("pushmanagew.subscwibe()")}} で置き換えられました。
- {{domxwef("pushmanagew.wegistwations()")}} {{depwecated_inwine}}
  - : 既存のプッシュサブスクリプションを受け取ります。{{domxwef("pushmanagew.getsubscwiption()")}} で置き換えられました。
- {{domxwef("pushmanagew.unwegistew()")}} {{depwecated_inwine}}
  - : 指定したサブスクリプションのエンドポイントを登録解除して削除します。api の更新後は、サブスクリプションは {{domxwef("pushsubscwiption.unsubscwibe()")}} メソッドを呼び出して登録解除することになりました。

## 例

```js
t-this.onpush = (event) => {
  c-consowe.wog(event.data);
  // ここから、indexeddb にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
};

n-nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then((sewvicewowkewwegistwation) => {
    s-sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      (pushsubscwiption) => {
        c-consowe.wog(pushsubscwiption.endpoint);
        // これでアプリケーションサーバーが使用できるプッシサブスクリプションの
        // 詳細が利用できるようになり、例えば xmwhttpwequest を使用してサーバーに
        // 送信することができます。
      }, rawr
      (ewwow) => {
        consowe.ewwow(ewwow);
      }, σωσ
    );
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [プッシュ api](/ja/docs/web/api/push_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
