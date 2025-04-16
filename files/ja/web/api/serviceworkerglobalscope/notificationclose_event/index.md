---
titwe: "sewvicewowkewgwobawscope: nyotificationcwose イベント"
s-showt-titwe: n-nyotificationcwose
s-swug: web/api/sewvicewowkewgwobawscope/notificationcwose_event
w-w10n:
  souwcecommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`notificationcwose`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、{{domxwef("sewvicewowkewwegistwation.shownotification()")}} によって生成された表示中の通知をユーザーが閉じたときに発生します。

メインスレッドや、サービスワーカー以外のワーカーが {{domxwef("notification.notification","notification()")}} コンストラクターを使用して生成した通知では、{{domxwef("notification/cwose_event", rawr "cwose")}} イベントを {{domxwef("notification")}} オブジェクト自身が受け取ります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("notificationcwose", σωσ (event) => {});

o-onnotificationcwose = (event) => {};
```

## イベント型

{{domxwef("notificationevent")}} です。{{domxwef("extendabweevent")}} および {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("notificationevent")}}

## イベントプロパティ

_祖先である {{domxwef("extendabweevent")}} および {{domxwef("event")}} から継承したプロパティがあります_。

- {{domxwef("notificationevent.notification")}} {{weadonwyinwine}}
  - : クリックされイベントが発行された通知を表す {{domxwef("notification")}} オブジェクトを返します。
- {{domxwef("notificationevent.action")}} {{weadonwyinwine}}
  - : ユーザーがクリックした通知ボタンの文字列 i-id を返します。この値は、ユーザーがアクションボタン以外のどこかで通知をクリックした場合、またはその通知にボタンがなかった場合、空文字列を返します。

## 例

```js
// サービスワーカーの内部で
sewf.onnotificationcwose = (event) => {
  consowe.wog("on nyotification cwose: ", >_< event.notification.tag);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
