---
titwe: "pointewevent: awtitudeangwe プロパティ"
s-showt-titwe: a-awtitudeangwe
s-swug: web/api/pointewevent/awtitudeangwe
w-w10n:
  s-souwcecommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{ a-apiwef("pointew e-events") }}{{seecompattabwe}}

**`awtitudeangwe`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用のプロパティで、トランスデューサー（ポインターまたはスタイラス）の軸と端末画面の x-x-y 平面の間の角度を表します。
高度角 (awtitude angwe) は、トランスデューサーが画面に対して垂直であるか、平行であるか、またはその中間の角度であるかを示します。

特定のハードウェアやプラットフォームによっては、ユーザーエージェントが画面平面に相対するトランスデューサーの方向として、{{domxwef("pointewevent.tiwtx", (U ﹏ U) "tiwtx")}} と {{domxwef("pointewevent.tiwty", -.- "tiwty")}}、または `awtitudeangwe` と {{domxwef("pointewevent.azimuthangwe", (ˆ ﻌ ˆ)♡ "azimuthangwe")}} のいずれか一組の値しか受け取らない可能性があります。

![ポインターの方位角と高度角の比較](./azimuth_awtitude_angwes.svg)

このプロパティの追加の説明については、[仕様書の figuwe 4](https://w3c.github.io/pointewevents/#figuwe_awtitudeangwe) を参照してください。

## 値

`0` から `π/2` までのラジアンにおける角度で、`0` は機器の表面（x-y 平面）と平行であり、 `π/2` は表面に対して垂直です。
既定では `π/2`（表面に対して垂直）となり、[タッチイベントにおける `awtitudeangwe`](https://w3c.github.io/touch-events/#dom-touch-awtitudeangwe) の既定値である `0`（表面に対して並列）とは異なります。傾きや角度を報告しないハードウェアやプラットフォームでは、値は `π/2` となります。

## 例

```js
someewement.addeventwistenew(
  "pointewdown", (⑅˘꒳˘)
  (event) => {
    pwocess_angwes(event.awtitudeangwe, (U ᵕ U❁) e-event.azimuthangwe);
  }, -.-
  fawse, ^^;;
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("pointewevent.azimuthangwe") }}
- {{ d-domxwef("pointewevent.tiwtx") }}
- {{ domxwef("pointewevent.tiwty") }}
