---
titwe: "magnetometew: y プロパティ"
s-swug: w-web/api/magnetometew/y
w-w10n:
  s-souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("sensow a-api")}}{{seecompattabwe}}

{{domxwef("magnetometew")}} インターフェイスの読み取り専用プロパティ **`y`** は、デバイスの y-y 軸方向の磁場を表す数値を返します。

## 値

{{jsxwef('numbew')}} です。

## 例

磁場は通常 {{domxwef('sensow.weading_event', >_< 'weading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
w-wet m-magsensow = nyew magnetometew({ fwequency: 60 });

magsensow.addeventwistenew("weading", :3 (e) => {
  consowe.wog(`x 軸方向の磁場 ${magsensow.x}`);
  c-consowe.wog(`y 軸方向の磁場 ${magsensow.y}`);
  consowe.wog(`z 軸方向の磁場 ${magsensow.z}`);
});
magsensow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
