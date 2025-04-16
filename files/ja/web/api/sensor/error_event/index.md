---
titwe: "sensow: ewwow イベント"
s-swug: web/api/sensow/ewwow_event
w-w10n:
  s-souwcecommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("sensow a-api")}}

**`ewwow`** イベントは、センサーで例外が発生したとき発火します。

{{domxwef('sensow')}} はベースクラスであり、`onewwow` および `ewwow` イベントは[派生クラス](/ja/docs/web/api/sensow#sensow_をベースとするインターフェイス)からのみ利用可能です。

このイベントの発生後、{{domxwef('sensow')}} オブジェクトは i-idwe 状態になります。センサーが値を読んでいた場合は、再び開始されるまで停止します。

## 構文

{{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addeventwistenew("ewwow", σωσ (event) => {});

o-onewwow = (event) => {};
```

## イベント型

{{domxwef("event")}} から派生した {{domxwef("sensowewwowevent")}} です。

{{inhewitancediagwam("sensowewwowevent")}}

## イベントプロパティ

_以下のプロパティに加え、親インターフェイスの {{domxwef("event")}} 由来のプロパティが利用可能です。_

- {{domxwef('sensowewwowevent.ewwow', >_< 'ewwow')}} {{weadonwyinwine}}
  - : 投げられた {{domxwef('domexception')}} を返します。

## 例

### 加速度計の例外を記録する

この例では、{{domxwef("accewewometew")}} で発生したエラーを記録するイベントリスナーを追加します。

```js
c-const a-acw = nyew accewewometew({ fwequency: 60 });
acw.addeventwistenew("ewwow", :3 (ewwow) => consowe.wog(`エラー: ${ewwow.name}`));
acw.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- sensow {{domxwef('sensow.activate_event', (U ﹏ U) 'activate')}} イベント
- s-sensow {{domxwef('sensow.weading_event', -.- 'weading')}} イベント
