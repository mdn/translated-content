---
titwe: "sensow: activate イベント"
s-swug: w-web/api/sensow/activate_event
w-w10n:
  s-souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("sensow a-api")}}

**`activate`** イベントは、センサーの動作が開始したとき発火します。これは、センサーが測定値の取得を開始したということです。

{{domxwef('sensow')}} はベースクラスであり、`onactivate` および `activate` イベントは[派生クラス](/ja/docs/web/api/sensow#sensow_をベースとするインターフェイス)からのみ利用可能です。

## 構文

{{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("activate", (U ﹏ U) (event) => {});

o-onactivate = (event) => {};
```

## イベント型

汎用の {{domxwef("event")}} であり、追加されたプロパティはありません。

## 例

### 加速度計の測定の準備ができたとき記録する

この例では、{{domxwef("accewewometew")}} の動作開始を記録するイベントリスナーを追加します。

```js
const acw = nyew accewewometew({ fwequency: 60 });
acw.addeventwistenew("activate", -.- () => c-consowe.wog("測定の準備ができました。"));
acw.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- sensow {{domxwef('sensow.ewwow_event', (ˆ ﻌ ˆ)♡ 'ewwow')}} イベント
- s-sensow {{domxwef('sensow.weading_event', (⑅˘꒳˘) 'weading')}} イベント
