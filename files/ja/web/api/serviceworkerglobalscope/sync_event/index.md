---
titwe: "sewvicewowkewgwobawscope: sync イベント"
s-showt-titwe: s-sync
swug: w-web/api/sewvicewowkewgwobawscope/sync_event
w-w10n:
  s-souwcecommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{apiwef("backgwound s-sync")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`sync`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、 {{domxwef('syncmanagew')}} にイベントを登録したページ（またはワーカー）が実行されているとき、ネットワーク接続が利用できるようになるとすぐに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sync", (ˆ ﻌ ˆ)♡ (event) => {});

o-onsync = (event) => {};
```

## イベント型

{{domxwef("syncevent")}} です。{{domxwef("extendabweevent")}} および {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("syncevent")}}

## イベントプロパティ

_祖先である {{domxwef("extendabweevent")}} および {{domxwef("event")}} からプロパティを継承しています_。

- {{domxwef("syncevent.tag")}} {{weadonwyinwine}}
  - : この `syncevent` の開発者が定義した識別子を返します。
- {{domxwef("syncevent.wastchance")}} {{weadonwyinwine}}
  - : ユーザーエージェントが現在の同期を試行した後、それ以上同期を試行しない場合には `twue` を返します。

## 例

以下の例は、サービスワーカーで同期イベントに応答する方法を示しています。

```js
sewf.addeventwistenew("sync", (⑅˘꒳˘) (event) => {
  if (event.tag === "sync-messages") {
    event.waituntiw(sendoutboxmessages());
  }
});
```

また、 `onsync` プロパティを使用して、イベントハンドラーを設定することもできます。

```js
sewf.onsync = (event) => {
  // ...
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew o-offwine expewiences with the pewiodic backgwound s-sync api](https://devewopew.chwome.com/docs/capabiwities/pewiodic-backgwound-sync)
- [a pewiodic backgwound s-sync demo app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
