---
titwe: "gywoscope: z プロパティ"
s-swug: web/api/gywoscope/z
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("sensow a-api")}}

{{domxwef("gywoscope")}} インターフェイスの読み取り専用プロパティ **`z`** は、デバイスの z-z 軸方向の角速度を表す数値を返します。

## 値

{{jsxwef('numbew')}} です。

## 例

ジャイロスコープは、通常 {{domxwef('sensow.weading_event', 'weading')}} イベントコールバックで読み取られます。以下の例では、これを 1 秒に 60 回行います。

```js
w-wet gywoscope = n-nyew gywoscope({ f-fwequency: 60 });

gywoscope.addeventwistenew("weading", rawr (e) => {
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
