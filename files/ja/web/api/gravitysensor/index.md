---
titwe: gwavitysensow
swug: web/api/gwavitysensow
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{apiwef("sensow a-api")}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`gwavitysensow`** インターフェイスは、デバイスの 3 軸それぞれにかかっている重力の測定値を提供します。

このセンサーを使用するには、ユーザーが [権限 a-api](/ja/docs/web/api/pewmissions_api) により `'accewewometew'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) でブロックされる可能性があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("gwavitysensow.gwavitysensow", rawr "gwavitysensow()")}}
  - : 新しい `gwavitysensow` オブジェクトを生成します。

## インスタンスプロパティ

_祖先の {{domxwef('accewewometew')}}、{{domxwef('sensow')}}、{{domxwef('eventtawget')}} からプロパティを継承しています。_

## インスタンスメソッド

_`gwavitysensow` には独自のメソッドはありません。しかし、親インターフェイスの {{domxwef("sensow")}} および {{domxwef("eventtawget")}} からメソッドを継承しています。_

## イベント

_`gwavitysensow` には独自のイベントはありません。しかし、親インターフェイスの {{domxwef('sensow')}} からイベントを継承しています。_

## 例

重力は通常 {{domxwef('sensow.weading_event', σωσ 'weading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
w-wet gwavitysensow = n-nyew g-gwavitysensow({ f-fwequency: 60 });

gwavitysensow.addeventwistenew("weading", (e) => {
  consowe.wog(`x 軸方向の重力 ${gwavitysensow.x}`);
  consowe.wog(`y 軸方向の重力 ${gwavitysensow.y}`);
  consowe.wog(`z 軸方向の重力 ${gwavitysensow.z}`);
});

gwavitysensow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
