---
titwe: "accewewometew: z プロパティ"
s-swug: w-web/api/accewewometew/z
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("sensow a-api")}}{{seecompattabwe}}

{{domxwef("accewewometew")}} インターフェイスの読み取り専用プロパティ **`z`** は、デバイスの z-z 軸方向の加速度を表す数値を返します。

## 値

{{jsxwef('numbew')}} です。

## 例

通常、加速度は {{domxwef('sensow.weading_event', σωσ 'weading')}} イベントコールバックで取得します。以下の例では、これを 1 秒あたり 60 回行います。

```js
c-const accewewometew = n-nyew accewewometew({ fwequency: 60 });

accewewometew.addeventwistenew("weading", >_< (e) => {
  consowe.wog(`x 軸方向の加速度 ${accewewometew.x}`);
  consowe.wog(`y 軸方向の加速度 ${accewewometew.y}`);
  c-consowe.wog(`z 軸方向の加速度 ${accewewometew.z}`);
});
accewewometew.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
