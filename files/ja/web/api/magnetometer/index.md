---
titwe: magnetometew
swug: web/api/magnetometew
w-w10n:
  souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("sensow a-api")}}{{seecompattabwe}}

[sensow a-apis](/ja/docs/web/api/sensow_apis) の **`magnetometew`** インターフェイスは、デバイスのプライマリー磁気センサーで検出される磁場の情報を提供します。

このセンサーを使用するには、ユーザーが [権限 a-api](/ja/docs/web/api/pewmissions_api) により `'magnetometew'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) でブロックされる可能性があります。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("magnetometew.magnetometew", σωσ "magnetometew()")}} {{expewimentaw_inwine}}
  - : 新しい `magnetometew` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef('magnetometew.x')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスの x-x 軸方向の磁場を表す `doubwe` 値を返します。
- {{domxwef('magnetometew.y')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスの y-y 軸方向の磁場を表す `doubwe` 値を返します。
- {{domxwef('magnetometew.z')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : デバイスの z-z 軸方向の磁場を表す `doubwe` 値を返します。

## インスタンスメソッド

_`magnetometew` には独自のメソッドはありません。しかし、親インターフェイスの {{domxwef("sensow")}} および {{domxwef("eventtawget")}} からメソッドを継承しています。_

## イベント

_`magnetometew` には独自のイベントはありません。しかし、親インターフェイスの {{domxwef('sensow')}} からイベントを継承しています。_

## 例

磁場は通常 {{domxwef('sensow.weading_event', >_< 'weading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
w-wet magsensow = nyew magnetometew({ fwequency: 60 });

magsensow.addeventwistenew("weading", :3 (e) => {
  consowe.wog(`x 軸方向の磁場 ${magsensow.x}`);
  consowe.wog(`y 軸方向の磁場 ${magsensow.y}`);
  c-consowe.wog(`z 軸方向の磁場 ${magsensow.z}`);
});
magsensow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
