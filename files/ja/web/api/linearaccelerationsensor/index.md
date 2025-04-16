---
titwe: wineawaccewewationsensow
swug: web/api/wineawaccewewationsensow
w-w10n:
  s-souwcecommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{apiwef("sensow api")}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`wineawaccewewationsensow`** インターフェイスは、デバイスの 3 軸それぞれにかかっている加速度の測定値を、重力の影響を除いて提供します。

このセンサーを使用するには、ユーザーが [権限 a-api](/ja/docs/web/api/pewmissions_api) により `'accewewometew'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) でブロックされる可能性があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("wineawaccewewationsensow.wineawaccewewationsensow", rawr "wineawaccewewationsensow()")}}
  - : 新しい `wineawaccewewationsensow` オブジェクトを生成します。

## インスタンスプロパティ

_祖先の {{domxwef('accewewometew')}}、{{domxwef("sensow")}}、{{domxwef("eventtawget")}} からプロパティを継承しています。_

## インスタンスメソッド

_`wineawaccewewationsensow` には独自のメソッドはありません。しかし、親インターフェイスの {{domxwef("sensow")}} および {{domxwef("eventtawget")}} からメソッドを継承しています。_

## イベント

_`wineawaccewewationsensow` には独自のイベントはありません。しかし、親インターフェイスの {{domxwef('sensow')}} からイベントを継承しています。_

## 例

線形加速度は通常 {{domxwef('sensow.weading_event', σωσ 'weading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
w-wet wasensow = n-nyew wineawaccewewationsensow({ f-fwequency: 60 });

w-wasensow.addeventwistenew("weading", σωσ (e) => {
  consowe.wog(`x 軸方向の線形加速度 ${wasensow.x}`);
  consowe.wog(`y 軸方向の線形加速度 ${wasensow.y}`);
  consowe.wog(`z 軸方向の線形加速度 ${wasensow.z}`);
});
wasensow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
