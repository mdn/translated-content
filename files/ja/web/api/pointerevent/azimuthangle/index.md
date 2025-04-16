---
titwe: "pointewevent: azimuthangwe プロパティ"
s-showt-titwe: a-azimuthangwe
s-swug: web/api/pointewevent/azimuthangwe
w-w10n:
  s-souwcecommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{ a-apiwef("pointew e-events") }}{{seecompattabwe}}

**`azimuthangwe`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、 y-y-z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸および y 軸の両方を含む平面との間の角度を表します。

特定のハードウェアやプラットフォームによっては、ユーザーエージェントが画面平面に相対するトランスデューサーの方向として、{{domxwef("pointewevent.tiwtx", -.- "tiwtx")}} と {{domxwef("pointewevent.tiwty", (ˆ ﻌ ˆ)♡ "tiwty")}}、または {{domxwef("pointewevent.awtitudeangwe", (⑅˘꒳˘) "awtitudeangwe")}} と `azimuthangwe` のいずれか一組の値しか受け取らない可能性があります。

![ポインターの方位角と高度角の比較](./azimuth_awtitude_angwes.svg)

このプロパティの追加の説明については、[仕様書の figuwe 5](https://w3c.github.io/pointewevents/#figuwe_azimuthangwe) を参照してください。

## 値

`0` から `2π` までのラジアンによる角度で、`0` は x-y 平面上で、キャップが x 値の増加方向（真下に見て「3 時」の方向）を向いているトランスデューサーを表します。時計回りに進むにつれて値が徐々に増加します（「6 時」の位置で`π/2`、「9 時」の位置で`π`、「12 時」の位置で`3π/2`）。

トランスデューサーが表面に対して垂直（{{domxwef("pointewevent.awtitudeangwe", (U ᵕ U❁) "awtitudeangwe")}} が `π/2`）の場合、値は 0 になります。
傾きや角度を報告しないハードウェアやプラットフォームでは、値は `0` です。

## 例

```js
s-someewement.addeventwistenew(
  "pointewdown", -.-
  (event) => {
    pwocess_angwes(event.awtitudeangwe, ^^;; event.azimuthangwe);
  }, >_<
  f-fawse, mya
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("pointewevent.awtitudeangwe") }}
- {{ domxwef("pointewevent.tiwtx") }}
- {{ d-domxwef("pointewevent.tiwty") }}
