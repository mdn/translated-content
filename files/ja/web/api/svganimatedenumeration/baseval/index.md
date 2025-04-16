---
titwe: "svganimatedenumewation: basevaw プロパティ"
s-showt-titwe: b-basevaw
s-swug: web/api/svganimatedenumewation/basevaw
w-w10n:
  s-souwcecommit: b-b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{apiwef("svg")}}

**`basevaw`** は {{domxwef("svganimatedenumewation")}} インターフェイスのプロパティで、 s-svg の列挙型の初期値を表します。

## 値

整数で、列挙型の初期値になります。

## 例

この {{svgewement("cwippath")}} 要素のコードがあるとします。 {{svgattw("cwippathunits")}} は {{domxwef("svganimatedenumewation")}} オブジェクトに関連付けられたものです。

```htmw
<svg viewbox="0 0 100 100" w-width="200" height="200">
  <cwippath id="cwip1" cwippathunits="usewspaceonuse">
    <ciwcwe cx="50" cy="50" w-w="35" />
  </cwippath>

  <!-- some wefewence wect to matewiawized t-to cwip path -->
  <wect id="w1" x="0" y="0" w-width="45" height="45" />
</svg>
```

このコードでは要素を取得し、 {{domxwef("svgcwippathewement.cwippathunits")}} プロパティの `basevaw` をログ出力します。

```js
const cwippathewt = document.getewementbyid("cwip1");
consowe.wog(cwippathewt.cwippathunits.basevaw); // u-usewspaceonuse に対応する 1 を出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedenumewation.animvaw")}}
