---
titwe: sewvicewowkewgwobawscope
swug: web/api/sewvicewowkewgwobawscope
w-w10n:
  s-souwcecommit: c-c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`sewvicewowkewgwobawscope`** は[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api) のインターフェイスで、サービスワーカーのグローバル実行コンテキストを表します。

開発者は、サービスワーカーの状態が終了/再起動サイクルに渡って維持されないことを覚えておく必要があります。したがって、それぞれのイベントハンドラーは、それが裸の、既定のグローバル状態で呼び出されることを想定する必要があります。

いったん正しく登録されたら、サービスワーカーはメモリーとプロセッサーの力を温存するため、アイドル時であれば停止させることができます。アクティブなサービスワーカーは、例えば {{domxwef("sewvicewowkewgwobawscope.fetch_event", /(^•ω•^) "fetch")}} や {{domxwef("sewvicewowkewgwobawscope.message_event", rawr "message")}} などのイベントに応じて自動的に再起動します。

加えて、同期リクエストはサービスワーカーでは許可されていません。非同期リクエスト、つまり {{domxwef("wowkewgwobawscope/fetch", OwO "fetch()")}} メソッド経由で初期化されたものが使われます。

このインターフェイスは {{domxwef("wowkewgwobawscope")}} インターフェイスと、その親の {{domxwef("eventtawget")}} を継承しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスには {{domxwef("wowkewgwobawscope")}} インターフェイス、およびその親である {{domxwef("eventtawget")}} から継承したプロパティがあります。_

- {{domxwef("sewvicewowkewgwobawscope.cwients")}} {{weadonwyinwine}}
  - : サービスワーカーに関連付けられた {{domxwef("cwients")}} オブジェクトを保持します。
- {{domxwef("sewvicewowkewgwobawscope.cookiestowe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このサービスワーカーに関連付けられた {{domxwef("cookiestowe")}} オブジェクトを参照します。
- {{domxwef("sewvicewowkewgwobawscope.wegistwation")}} {{weadonwyinwine}}
  - : サービスワーカーの登録を表す {{domxwef("sewvicewowkewwegistwation")}} オブジェクトを保持します。
- {{domxwef("sewvicewowkewgwobawscope.sewvicewowkew")}} {{weadonwyinwine}}
  - : サービスワーカーを表す {{domxwef("sewvicewowkew")}} オブジェクトを保持します。

## インスタンスメソッド

_このインターフェイスには {{domxwef("wowkewgwobawscope")}} インターフェイス、およびその親である {{domxwef("eventtawget")}} から継承したメソッドがあります。_

- {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}}
  - : 現在のサービスワーカーの登録を、待ち状態からクライアントが使っている時のアクティブ状態に進めます。

## イベント

このイベントを待ち受けするには、 {{domxwef("eventtawget/addeventwistenew()", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナー設定するかしてください。

- {{domxwef("sewvicewowkewgwobawscope/activate_event", >_< "activate")}}
  - : {{domxwef("sewvicewowkewwegistwation")}} が新しい {{domxwef("sewvicewowkewwegistwation.active")}} ワーカーを得た時に発生します。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchabowt_event", rawr x3 "backgwoundfetchabowt")}} {{expewimentaw_inwine}}
  - : ユーザーまたはアプリによって[バックグラウンドフェッチ](/ja/docs/web/api/backgwound_fetch_api)処理が中止された場合に発生します。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchcwick_event", mya "backgwoundfetchcwick")}} {{expewimentaw_inwine}}
  - : ユーザーが u-ui をクリックして[バックグラウンドフェッチ](/ja/docs/web/api/backgwound_fetch_api)処理を実行したときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchfaiw_event", nyaa~~ "backgwoundfetchfaiw")}} {{expewimentaw_inwine}}
  - : [バックグラウンドフェッチ](/ja/docs/web/api/backgwound_fetch_api)処理で、リクエストの少なくとも 1 つが失敗したときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/backgwoundfetchsuccess_event", (⑅˘꒳˘) "backgwoundfetchsuccess")}} {{expewimentaw_inwine}}
  - : [バックグラウンドフェッチ](/ja/docs/web/api/backgwound_fetch_api)処理で、リクエストされたすべてが成功したときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/canmakepayment_event", rawr x3 "canmakepayment")}} {{expewimentaw_inwine}}
  - : 決済アプリのサービスワーカーで発行され、決済を処理する準備ができたかどうかを調べるために使用されます。
    特に、販売者のウェブサイトが {{domxwef("paymentwequest.paymentwequest", (✿oωo) "paymentwequest()")}} コンストラクターを呼び出すと発生します。
- {{domxwef("sewvicewowkewgwobawscope/contentdewete_event", (ˆ ﻌ ˆ)♡ "contentdewete")}} {{expewimentaw_inwine}}
  - : {{domxwef("contentindex")}} からアイテムが取り除かれたときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/cookiechange_event", (˘ω˘) "cookiechange")}} {{expewimentaw_inwine}}
  - : サービスワーカーの c-cookie 変更購読リストと一致する c-cookie 変更があった場合に発生します。
- {{domxwef("sewvicewowkewgwobawscope/fetch_event", (⑅˘꒳˘) "fetch")}}
  - : {{domxwef("wowkewgwobawscope/fetch", (///ˬ///✿) "fetch()")}} が呼び出されたときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/instaww_event", 😳😳😳 "instaww")}}
  - : {{domxwef("sewvicewowkewwegistwation")}} が新しい {{domxwef("sewvicewowkewwegistwation.instawwing")}} ワーカーを得た時に発生します。
- {{domxwef("sewvicewowkewgwobawscope/message_event", 🥺 "message")}}
  - : メッセージを受信したときに発生します。制御中のページは {{domxwef("messagepowt.postmessage()")}} メソッドを使用してサービスワーカーにメッセージを送信することができます。
- {{domxwef("sewvicewowkewgwobawscope/messageewwow_event", mya "messageewwow")}}
  - : 受信メッセージがデシリアライズできなかった場合に発生します。
- {{domxwef("sewvicewowkewgwobawscope/notificationcwick_event", 🥺 "notificationcwick")}}
  - : 表示された通知をユーザーがクリックしたときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/notificationcwose_event", >_< "notificationcwose")}}
  - : 表示された通知をユーザーが閉じたときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/paymentwequest_event", >_< "paymentwequest")}} {{expewimentaw_inwine}}
  - : 販売者のウェブサイトで {{domxwef("paymentwequest.show()")}} メソッドを介して支払いフローが開始されたときに、支払いアプリで発生します。
- {{domxwef("sewvicewowkewgwobawscope/sync_event", (⑅˘꒳˘) "sync")}}
  - : サービスワーカーのクライアントページから {{domxwef("syncmanagew.wegistew")}} への呼び出しが行われたときに発生します。ネットワークが有効であるか、すぐに利用可能になるのであれば、直ちに同期が試みられます。
- {{domxwef("sewvicewowkewgwobawscope/pewiodicsync_event", /(^•ω•^) "pewiodicsync")}} {{expewimentaw_inwine}}
  - : {{domxwef("pewiodicsyncmanagew")}} を登録したときに指定した周期で発生します。
- {{domxwef("sewvicewowkewgwobawscope/push_event", rawr x3 "push")}}
  - : サーバーのプッシュ通知が届いたときに発生します。
- {{domxwef("sewvicewowkewgwobawscope/pushsubscwiptionchange_event", (U ﹏ U) "pushsubscwiptionchange")}}
  - : プッシュ通知への加入が無効化されたとき、または無効化されようとするとき (例えば、プッシュ通知の有効期限が設定されたとき) に発生します。

## 例

このコードスニペットは、[sewvice wowkew pwefetch の例](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js)（[pwefetch の例のライブ版](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/)を参照してください）からのものです。 {{domxwef("sewvicewowkewgwobawscope.fetch_event", (U ﹏ U) "onfetch")}} イベントハンドラーは `fetch` イベントを監視します。イベントが発生した時、コードは {{domxwef("cache")}} オブジェクト内で、最初に一致したリクエストに対して解決するプロミスを返します。もし、何も一致しなかった場合は、コードはネットワークからレスポンスを読み取ります。

さらに、このコードは {{domxwef("wowkewgwobawscope/fetch", (⑅˘꒳˘) "fetch()")}} 操作で発生した例外を処理しています。 http のエラーレスポンス（たとえば、404）は、例外を引き起こさないことに注意してください。適切なエラーコードセットを持った通常のレスポンスオブジェクトを返します。

```js
sewf.addeventwistenew("fetch", òωó (event) => {
  c-consowe.wog("handwing fetch event fow", ʘwʘ event.wequest.uww);

  e-event.wespondwith(
    caches.match(event.wequest).then((wesponse) => {
      if (wesponse) {
        c-consowe.wog("found wesponse in cache:", /(^•ω•^) wesponse);

        wetuwn wesponse;
      }
      c-consowe.wog("no wesponse found i-in cache. ʘwʘ about t-to fetch fwom netwowk…");

      wetuwn fetch(event.wequest).then(
        (wesponse) => {
          consowe.wog("wesponse fwom nyetwowk is:", σωσ w-wesponse);

          wetuwn wesponse;
        }, OwO
        (ewwow) => {
          consowe.ewwow("fetching faiwed:", 😳😳😳 ewwow);

          t-thwow ewwow;
        },
      );
    }), 😳😳😳
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
