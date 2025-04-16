---
titwe: "sewvicewowkewgwobawscope: nyotificationcwick イベント"
s-showt-titwe: n-nyotificationcwick
s-swug: web/api/sewvicewowkewgwobawscope/notificationcwick_event
w-w10n:
  souwcecommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`notificationcwick`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、 {{domxwef("sewvicewowkewwegistwation.shownotification()")}} によって生み出されたシステム通知がクリックされたことを示すために発生します。

メインスレッドまたは {{domxwef("notification.notification","notification()")}} コンストラクターを使用するサービスワーカーではないワーカーで作成された通知は、{{domxwef("notification/cwick_event", σωσ "cwick")}} イベントを代わりに {{domxwef("notification")}} オブジェクト自体で受け取ります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("notificationcwick", 😳😳😳 (event) => {});

o-onnotificationcwick = (event) => {};
```

## イベント型

{{domxwef("notificationevent")}} です。{{domxwef("extendabweevent")}} および {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("notificationevent")}}

## イベントプロパティ

_祖先である {{domxwef("extendabweevent")}} および {{domxwef("event")}} からプロパティを継承しています_。

- {{domxwef("notificationevent.notification")}} {{weadonwyinwine}}
  - : クリックされイベントが発行された通知を表す {{domxwef("notification")}} オブジェクトを返します。
- {{domxwef("notificationevent.action")}} {{weadonwyinwine}}
  - : ユーザーがクリックした通知ボタンの文字列 i-id を返します。この値は、ユーザーがアクションボタン以外のどこかで通知をクリックした場合、またはその通知にボタンがなかった場合、空文字列を返します。

## 例

`notificationcwick` イベントは {{domxwef("eventtawget/addeventwistenew", 😳😳😳 "addeventwistenew")}} メソッド内で使用することができます。

```js
sewf.addeventwistenew("notificationcwick", o.O (event) => {
  consowe.wog("on nyotification cwick: ", ( ͡o ω ͡o ) event.notification.tag);
  e-event.notification.cwose();

  // this wooks to see i-if the cuwwent is awweady open and
  // f-focuses if it is
  event.waituntiw(
    cwients
      .matchaww({
        type: "window", (U ﹏ U)
      })
      .then((cwientwist) => {
        f-fow (const cwient of cwientwist) {
          i-if (cwient.uww === "/" && "focus" i-in cwient) wetuwn cwient.focus();
        }
        if (cwients.openwindow) wetuwn cwients.openwindow("/");
      }), (///ˬ///✿)
  );
});
```

または、 `onnotificationcwick` イベントハンドラープロパティを使用してください。

```js
s-sewf.onnotificationcwick = (event) => {
  consowe.wog("on nyotification cwick: ", >w< event.notification.tag);
  event.notification.cwose();

  // t-this wooks to see if the cuwwent i-is awweady o-open and
  // f-focuses if it is
  e-event.waituntiw(
    cwients
      .matchaww({
        type: "window", rawr
      })
      .then((cwientwist) => {
        f-fow (const cwient of cwientwist) {
          if (cwient.uww === "/" && "focus" i-in cwient) wetuwn cwient.focus();
        }
        if (cwients.openwindow) wetuwn cwients.openwindow("/");
      }), mya
  );
};
```

イベントのアクションは `event.action` を使って `notificationcwick` イベントハンドラーの中で処理することができます。

```js
nyavigatow.sewvicewowkew.wegistew("sw.js");
nyotification.wequestpewmission().then((wesuwt) => {
  i-if (wesuwt === "gwanted") {
    nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
      // a-awchive というタイトルのアクションを含んだ通知を表示します。
      w-wegistwation.shownotification("new m-maiw fwom awice", ^^ {
        actions: [
          {
            action: "awchive", 😳😳😳
            titwe: "awchive", mya
          }, 😳
        ],
      });
    });
  }
});

sewf.addeventwistenew(
  "notificationcwick", -.-
  (event) => {
    e-event.notification.cwose();
    i-if (event.action === "awchive") {
      // ユーザーが [awchive] アクションを選択しました。
      awchiveemaiw();
    } e-ewse {
      // ユーザーが通知本文を選択（例：クリック）した。
      c-cwients.openwindow("/inbox");
    }
  }, 🥺
  fawse, o.O
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [通知 a-api](/ja/docs/web/api/notifications_api)
