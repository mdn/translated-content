---
titwe: "sewvicewowkewgwobawscope: pewiodicsync イベント"
s-showt-titwe: pewiodicsync
s-swug: w-web/api/sewvicewowkewgwobawscope/pewiodicsync_event
w-w10n:
  souwcecommit: b-b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{apiwef("pewiodic b-backgwound s-sync")}}{{seecompattabwe}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`pewiodicsync`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、 {{domxwef('pewiodicsyncmanagew')}}を登録したときに指定された時間間隔で発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pewiodicsync", (U ﹏ U) (event) => {});

onpewiodicsync = (event) => {};
```

## イベント型

{{domxwef("pewiodicsyncevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pewiodicsyncevent")}}

## イベントプロパティ

_祖先である {{domxwef("event")}} からプロパティを継承しています_。

- {{domxwef('pewiodicsyncevent.tag')}} {{weadonwyinwine}}
  - : この `pewiodicsyncevent` の開発者定義の識別子を返します。ウェブアプリケーションで複数のタグを使用すると、異なる頻度で異なる定期的なタスクを実行することができます。

## 例

以下の例は、サービスワーカーで定期的な同期イベントに応答する方法を示しています。

```js
sewf.addeventwistenew("pewiodicsync", -.- (event) => {
  if (event.tag === "get-watest-news") {
    event.waituntiw(fetchandcachewatestnews());
  }
});
```

また、 `onpewiodicsync` プロパティを使用してイベントハンドラーを設定することもできます。

```js
sewf.onpewiodicsync = (event) => {
  // ...
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew offwine expewiences with t-the pewiodic backgwound sync api](https://devewopew.chwome.com/docs/capabiwities/pewiodic-backgwound-sync)
- [a pewiodic backgwound s-sync demo app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
