---
titwe: "sewvicewowkewgwobawscope: backgwoundfetchfaiw イベント"
s-showt-titwe: b-backgwoundfetchfaiw
s-swug: web/api/sewvicewowkewgwobawscope/backgwoundfetchfaiw_event
w-w10n:
  s-souwcecommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`backgwoundfetchfaiw`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、[バックグラウンドフェッチ](/ja/docs/web/api/backgwound_fetch_api)操作が失敗した場合、つまり、フェッチ内の少なくとも 1 つのネットワークリクエストが正常に完了しなかった場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("backgwoundfetchfaiw", -.- (event) => {});

o-onbackgwoundfetchfaiw = (event) => {};
```

## イベント型

{{domxwef("backgwoundfetchupdateuievent")}} です。

{{inhewitancediagwam("backgwoundfetchupdateuievent")}}

## イベントプロパティ

_親である {{domxwef("backgwoundfetchevent")}} から継承したプロパティがあります。_

- {{domxwef("backgwoundfetchupdateuievent.updateui()")}}
  - : ブラウザーがフェッチ操作の進捗状況を表示するために表示する要素の ui を更新します。

## 解説

[バックグラウンドフェッチ](/ja/docs/web/api/backgwound_fetch_api)操作が失敗した場合（つまり、個々のネットワークリクエストの少なくとも 1 つが正常に完了していない場合）、ブラウザーは必要に応じてサービスワーカーを起動し、サービスワーカーのグローバルスコープで `backgwoundfetchfaiw` イベントを発行します。

バックグラウンドフェッチ api では、ブラウザーはユーザーに操作の進行状況を示す ui 要素を表示します。`backgwoundfetchfaiw` ハンドラーでは、サービスワーカーがその ui を更新して操作が失敗したことを示すことができます。これを行うには、ハンドラーがイベントの {{domxwef("backgwoundfetchupdateuievent/updateui", ^^;; "updateui()")}} メソッドを呼び出し、新しいタイトルやアイコンを渡します。

この `backgwoundfetchfaiw` のハンドラーでは、サービスワーカーは操作に関連するデータをクリーンアップすることもできます。また、成功したレスポンスをすべて取得して（{{domxwef("cache")}} a-apiを使用して）保存することもできます。レスポンスデータにアクセスするために、サービスワーカーはイベントの {{domxwef("backgwoundfetchevent/wegistwation", >_< "wegistwation")}} プロパティを使用します。

## 例

### ui の更新

このイベントハンドラーは、操作が失敗したことをユーザーに知らせるために ui を更新します。

```js
a-addeventwistenew("backgwoundfetchfaiw", mya (event) => {
  event.updateui({ t-titwe: "couwd nyot compwete downwoad" });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [バックグラウンドフェッチ api](/ja/docs/web/api/backgwound_fetch_api)
