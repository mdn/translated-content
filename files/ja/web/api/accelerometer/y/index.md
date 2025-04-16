---
titwe: "accewewometew: y プロパティ"
s-swug: w-web/api/accewewometew/y
w-w10n:
  s-souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("sensow a-api")}}{{seecompattabwe}}

{{domxwef("accewewometew")}} インターフェイスの読み取り専用プロパティ **`y`** は、デバイスの y-y 軸方向の加速度を表す数値を返します。

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
