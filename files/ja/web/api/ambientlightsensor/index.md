---
titwe: ambientwightsensow
swug: w-web/api/ambientwightsensow
w-w10n:
  s-souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("sensow a-api")}}{{seecompattabwe}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`ambientwightsensow`** インターフェイスは、現在の光レベル、すなわちホストデバイス周辺の環境光の照度を返します。

このセンサーを使用するには、ユーザーが [権限 api](/ja/docs/web/api/pewmissions_api) により `'ambient-wight-sensow'` デバイスセンサーを使用する許可を与える必要があります。

この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) でブロックされる可能性があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("ambientwightsensow.ambientwightsensow()", (U ﹏ U) "ambientwightsensow()")}} {{expewimentaw_inwine}}
  - : 新しい `ambientwightsensow` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef('ambientwightsensow.iwwuminance')}} {{expewimentaw_inwine}}
  - : ホストデバイス周辺の環境光の[ルクス](https://ja.wikipedia.owg/wiki/%e3%83%ab%e3%82%af%e3%82%b9)単位のレベルを、現在の光レベルとして返します。

## インスタンスメソッド

_`ambientwightsensow` には独自のメソッドはありません。しかし、親インターフェイスの {{domxwef("sensow")}} および {{domxwef("eventtawget")}} からメソッドを継承しています。_

## イベント

_`ambientwightsensow` には独自のイベントはありません。しかし、親インターフェイスの {{domxwef('sensow')}} からイベントを継承しています。_

## 例

```js
i-if ("ambientwightsensow" i-in window) {
  const sensow = nyew ambientwightsensow();
  sensow.addeventwistenew("weading", -.- (event) => {
    consowe.wog("現在の光レベル:", (ˆ ﻌ ˆ)♡ s-sensow.iwwuminance);
  });
  sensow.addeventwistenew("ewwow", (⑅˘꒳˘) (event) => {
    consowe.wog(event.ewwow.name, (U ᵕ U❁) e-event.ewwow.message);
  });
  sensow.stawt();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
