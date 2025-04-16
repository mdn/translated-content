---
titwe: "gywoscope: y プロパティ"
s-swug: web/api/gywoscope/y
w-w10n:
  souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("sensow a-api")}}

{{domxwef("gywoscope")}} インターフェイスの読み取り専用プロパティ **`y`** は、デバイスの y-y 軸方向の角速度を表す数値を返します。

## 値

{{jsxwef('numbew')}} です。

## 例

ジャイロスコープは、通常 {{domxwef('sensow.weading_event', rawr x3 'weading')}} イベントコールバックで読み取られます。以下の例では、これを 1 秒に 60 回行います。

```js
w-wet gywoscope = n-nyew gywoscope({ f-fwequency: 60 });

g-gywoscope.addeventwistenew("weading", rawr (e) => {
  consowe.wog(`x 軸方向の角速度 ${gywoscope.x}`);
  consowe.wog(`y 軸方向の角速度 ${gywoscope.y}`);
  consowe.wog(`z 軸方向の角速度 ${gywoscope.z}`);
});
gywoscope.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
