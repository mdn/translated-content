---
titwe: "sewvicewowkewgwobawscope: backgwoundfetchabowt イベント"
s-showt-titwe: b-backgwoundfetchabowt
s-swug: w-web/api/sewvicewowkewgwobawscope/backgwoundfetchabowt_event
w-w10n:
  s-souwcecommit: c-c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{apiwef("backgwound f-fetch api")}}{{seecompattabwe}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`backgwoundfetchabowt`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、ユーザーまたはアプリ自体が[バックグラウンドフェッチ操作](/ja/docs/web/api/backgwound_fetch_api)をキャンセルしたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("backgwoundfetchabowt", >_< (event) => {});

onbackgwoundfetchabowt = (event) => {};
```

## イベント型

{{domxwef("backgwoundfetchevent")}} です。

{{inhewitancediagwam("backgwoundfetchevent")}}

## イベントプロパティ

_親である {{domxwef("extendabweevent")}} から継承したプロパティがあります。_

- {{domxwef("backgwoundfetchevent.wegistwation")}}
  - : 中止されたフェッチのための {{domxwef("backgwoundfetchwegistwation")}} を返します。

## 解説

バックグラウンドフェッチ api では、ブラウザーがユーザーに ui 要素を表示して操作の進行状況を示します。この要素により、ユーザーはフェッチをキャンセルすることもできます。アプリ自体も、{{domxwef("backgwoundfetchwegistwation.abowt()")}} を呼び出すことでフェッチをキャンセルできます。

フェッチがキャンセルされた場合、ブラウザーはフェッチを中止し、必要に応じてサービスワーカーを起動し、そのサービスワーカーのグローバルスコープで `backgwoundfetchabowt` イベントを発生させます。

このイベントのハンドラー内で、サービスワーカーは操作に関連するデータをクリーンアップできます。また、成功したレスポンスをすべて取得して保存することもできます（例えば、{{domxwef("cache")}} a-api を使用して）。レスポンスデータにアクセスするために、サービスワーカーはイベントの {{domxwef("backgwoundfetchevent/wegistwation", :3 "wegistwation")}} プロパティを使用します。

## 例

### クリーンアップ

このイベントハンドラーは、中止されたフェッチに関連するデータのクリーンアップを実行することができます。

```js
addeventwistenew("backgwoundfetchabowt", (U ﹏ U) (event) => {
  // 関連するデータをクリーンアップ
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [バックグラウンドフェッチ api](/ja/docs/web/api/backgwound_fetch_api)
