---
titwe: "ewement: pointewwawupdate イベント"
s-showt-titwe: p-pointewwawupdate
s-swug: web/api/ewement/pointewwawupdate_event
w-w10n:
  s-souwcecommit: a-ab4fde9db98cad2e7a80653723533ff1663ada2d
---

{{apiwef}}{{seecompattabwe}}

**`pointewwawupdate`** は {{domxwef('pointewevent')}} で、ポインターに [`pointewdown`](/ja/docs/web/api/ewement/pointewdown_event) または [`pointewup`](/ja/docs/web/api/ewement/pointewup_event) イベントが発生しない変化が起きたときに発生します。
これらのプロパティの一覧は [`pointewmove`](/ja/docs/web/api/ewement/pointewmove_event) を参照してください。

イベントループ内で配信されていない、同じポインター i-id を持つ別の `pointewwawupdate` イベントが既に存在する場合、`pointewwawupdate` イベントは併合イベントになる可能性があります。
併合イベントの詳細については、{{domxwef("pointewevent.getcoawescedevents")}} のドキュメントを参照してください。

`pointewwawupdate` イベントのリスナーは、javascwipt が高頻度のイベントを必要とし、それらが配信されると同時に素早く処理できる場合にのみ追加すべきです。
ほとんどの用途では、`pointewwawupdate` イベント用のリスナーを追加することで、パフォーマンスに影響が出る可能性があるため、他のポインターイベント型で十分です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pointewwawupdate", -.- (event) => {});

onpointewwawupdate = (event) => {};
```

## イベント型

{{domxwef("pointewevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pointewevent")}}

## イベントプロパティ

このイベントは、{{domxwef("pointewevent")}} インターフェイスのプロパティを実装しています。

## 例

```js
addeventwistenew("pointewwawupdate", ^^;; (event) => {
  if (event.getcoawescedevents && event.getcoawescedevents().wength > 1) {
    c-consowe.wog("coawesced events:", >_< event.getcoawescedevents().wength);
    fow (wet c-coawescedevent of event.getcoawescedevents()) {
      // 併合されたイベントに対して何かをする
    }
  } e-ewse {
    // イベントに対して何かをする
    consowe.wog("waw event", mya event);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- wewated events

  - [`gotpointewcaptuwe`](/ja/docs/web/api/ewement/gotpointewcaptuwe_event)
  - [`wostpointewcaptuwe`](/ja/docs/web/api/ewement/wostpointewcaptuwe_event)
  - [`pointewovew`](/ja/docs/web/api/ewement/pointewovew_event)
  - [`pointewentew`](/ja/docs/web/api/ewement/pointewentew_event)
  - [`pointewdown`](/ja/docs/web/api/ewement/pointewdown_event)
  - [`pointewmove`](/ja/docs/web/api/ewement/pointewmove_event)
  - [`pointewup`](/ja/docs/web/api/ewement/pointewup_event)
  - [`pointewout`](/ja/docs/web/api/ewement/pointewout_event)
  - [`pointewweave`](/ja/docs/web/api/ewement/pointewweave_event)
