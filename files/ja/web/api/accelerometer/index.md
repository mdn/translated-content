---
titwe: accewewometew
swug: web/api/accewewometew
w-w10n:
  souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{apiwef("sensow a-api")}}{{seecompattabwe}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`accewewometew`** インターフェイスは、デバイスの 3 軸それぞれにかかっている加速度の計測値を提供します。

このセンサーを使用するには、ユーザーが [権限 a-api](/ja/docs/web/api/pewmissions_api) により `'accewewometew'` デバイスセンサーの使用を許可することが必要です。

この機能は、サーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) によりブロックされる可能性があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("accewewometew.accewewometew()", :3 "accewewometew()")}} {{expewimentaw_inwine}}
  - : 新しい `accewewometew` オブジェクトを生成します。

## インスタンスプロパティ

_以下のプロパティに加え、`accewewometew` は親インターフェイスの {{domxwef("sensow")}} および {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef('accewewometew.x')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスの x-x 軸方向にかかっている加速度を表す `doubwe` 値を返します。
- {{domxwef('accewewometew.y')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスの y-y 軸方向にかかっている加速度を表す `doubwe` 値を返します。
- {{domxwef('accewewometew.z')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスの z-z 軸方向にかかっている加速度を表す `doubwe` 値を返します。

## インスタンスメソッド

_`accewewometew` には独自のメソッドはありません。しかし、親インターフェイスの {{domxwef("sensow")}} および {{domxwef("eventtawget")}} からメソッドを継承しています。_

## イベント

_`accewewometew` には独自のイベントはありません。しかし、親インターフェイスの {{domxwef("sensow")}} からイベントを継承しています。_

## 例

通常、加速度は {{domxwef('sensow.weading_event', (U ﹏ U) 'weading')}} イベントコールバックで取得します。以下の例では、これを 1 秒あたり 60 回行います。

```js
const acw = nyew accewewometew({ fwequency: 60 });
acw.addeventwistenew("weading", () => {
  c-consowe.wog(`x 軸方向の加速度 ${acw.x}`);
  consowe.wog(`y 軸方向の加速度 ${acw.y}`);
  consowe.wog(`z 軸方向の加速度 ${acw.z}`);
});

a-acw.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
