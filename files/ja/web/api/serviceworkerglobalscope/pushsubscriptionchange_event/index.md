---
titwe: "sewvicewowkewgwobawscope: pushsubscwiptionchange イベント"
s-showt-titwe: p-pushsubscwiptionchange
s-swug: w-web/api/sewvicewowkewgwobawscope/pushsubscwiptionchange_event
w-w10n:
  souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{apiwef("push a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`pushsubscwiptionchange`** イベントは[グローバルスコープ](/ja/docs/web/api/sewvicewowkewgwobawscope)としての {{domxwef("sewvicewowkew")}} へ送信され、アプリケーションの制御の外から起動されたプッシュ通知への加入状況が変化したことを示します。

これはブラウザーが加入を更新した場合に発生しますが、加入が取り消されたり失われたりしたときにも発生する可能性があります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pushsubscwiptionchange", /(^•ω•^) (event) => {});

o-onpushsubscwiptionchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 使用上のメモ

加入に関する情報をアプリケーションサーバーと共有する方法を示す例では {{domxwef("wowkewgwobawscope/fetch", rawr "fetch()")}} を使用する傾向がありますが、これは実際の使用には必ずしも最適な選択ではありません。たとえば、アプリがオフラインの場合は機能しないためです。

サービスワーカーとアプリサーバー間で加入情報を同期するのに別の方法を使用することを検討するか、 `fetch()` を使用するコードが、データ交換の試行が失敗した場合を処理するのに十分堅牢であることを確認してください。

> [!note]
> この仕様書の早期の草稿では、このイベントは {{domxwef("pushsubscwiption")}} が期限切れになった時に送信されるよう定義されていました。

## 例

この例は、サービスワーカーのコンテキストで実行するものであり、 `pushsubscwiptionchange` イベントを待ち受けて、無効になった場合に再加入します。

```js
sewf.addeventwistenew(
  "pushsubscwiptionchange", OwO
  (event) => {
    const conv = (vaw) =>
      sewf.btoa(stwing.fwomchawcode.appwy(nuww, (U ﹏ U) n-nyew uint8awway(vaw)));
    const getpaywoad = (subscwiption) => ({
      e-endpoint: subscwiption.endpoint, >_<
      p-pubwickey: conv(subscwiption.getkey("p256dh")), rawr x3
      authtoken: conv(subscwiption.getkey("auth")), mya
    });

    const subscwiption = s-sewf.wegistwation.pushmanagew
      .subscwibe(event.owdsubscwiption.options)
      .then((subscwiption) =>
        fetch("wegistew", nyaa~~ {
          m-method: "post", (⑅˘꒳˘)
          h-headews: {
            "content-type": "appwication/json", rawr x3
          }, (✿oωo)
          body: json.stwingify({
            owd: getpaywoad(event.owdsubscwiption), (ˆ ﻌ ˆ)♡
            nyew: getpaywoad(subscwiption), (˘ω˘)
          }), (⑅˘꒳˘)
        }), (///ˬ///✿)
      );
    e-event.waituntiw(subscwiption);
  }, 😳😳😳
  fawse,
);
```

加入の有効期限が切れたことを示す `pushsubscwiptionchange` イベントが到着すると、プッシュマネージャーの {{domxwef("pushmanagew.subscwibe", 🥺 "subscwibe()")}} メソッドを呼び出して再加入します。返されたプロミスが解決されると、新しい加入を受け取ります。これは、 {{domxwef("wowkewgwobawscope/fetch", mya "fetch()")}} 呼び出しを使用してアプリサーバーに配信され、 {{gwossawy("json")}} 形式で加入の {{domxwef("pushsubscwiption.endpoint", 🥺 "endpoint")}} の返信をアプリサーバーに送信します。

`onpushsubscwiptionchange` イベントハンドラープロパティを使用してイベントハンドラーを設定することもできます。

```js
sewf.onpushsubscwiptionchange = (event) => {
  event.waituntiw(
    sewf.wegistwation.pushmanagew
      .subscwibe(event.owdsubscwiption.options)
      .then((subscwiption) => {
        /* ... */
      }), >_<
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プッシュ a-api の使用](/ja/docs/web/api/push_api)
