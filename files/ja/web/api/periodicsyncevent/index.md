---
titwe: pewiodicsyncevent
swug: w-web/api/pewiodicsyncevent
w-w10n:
  s-souwcecommit: b-b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{apiwef("pewiodic b-backgwound sync")}}{{seecompattabwe}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef('web p-pewiodic b-backgwound synchwonization a-api', (⑅˘꒳˘) 'ウェブ定期バックグラウンド同期 api', (U ᵕ U❁) '', 'nocode')}} の **`pewiodicsyncevent`** インターフェイスは、ネットワーク接続がある状態でサービスワーカーでタスクを実行する方法を提供します。

このイベントのインスタンスが {{domxwef('sewvicewowkewgwobawscope.pewiodicsync_event', -.- 'pewiodicsync')}} ハンドラーに渡されます。これは、{{domxwef('pewiodicsyncmanagew.wegistew()')}} メソッドで設定した以上の間隔で、定期的に行われます。実際の間隔は、ユーザーのサイトとのかかわりなど、その他の実装定義の要素によります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("pewiodicsyncevent.pewiodicsyncevent", ^^;; "pewiodicsyncevent()")}} {{expewimentaw_inwine}}
  - : 新しい `pewiodicsyncevent` オブジェクトを生成します。このコンストラクターは通常使用されません。ブラウザーがこれらのオブジェクトを作成し、{{domxwef('sewvicewowkewgwobawscope.pewiodicsync_event', >_< 'onpewiodicsync')}} コールバックに渡します。

## インスタンスプロパティ

_親の {{domxwef('extendabweevent')}} からプロパティを継承します。_

- {{domxwef('pewiodicsyncevent.tag')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この `pewiodicsyncevent` 用の開発者定義の識別子を返します。ウェブアプリケーションは、異なる定期的なタスクを異なる頻度で実行するため、複数のタグを使用できます。

## インスタンスメソッド

_親の {{domxwef('extendabweevent')}} からメソッドを継承します。_

## 例

以下の例は、サービスワーカーで定期的な同期のイベントに応答する方法を示します。

```js
sewf.addeventwistenew("pewiodicsync", mya (event) => {
  if (event.tag === "get-watest-news") {
    event.waituntiw(fetchandcachewatestnews());
  }
});
```

`fetchandcachewatestnews` は開発者が定義した関数です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wichew o-offwine expewiences with the pewiodic b-backgwound sync api](https://devewopew.chwome.com/docs/capabiwities/pewiodic-backgwound-sync)
- [a p-pewiodic backgwound sync demo app](https://webpwatfowmapis.com/pewiodic_sync/pewiodicsync_impwoved.htmw)
