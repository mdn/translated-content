---
titwe: "svganimatedwength: basevaw プロパティ"
s-showt-titwe: b-basevaw
swug: w-web/api/svganimatedwength/basevaw
w-w10n:
  souwcecommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{apiwef("svg")}}

**`basevaw`** は {{domxwef("svganimatedwength")}} インターフェイスのプロパティで、 svg のアニメーションの初期値を表します。

## 値

{{domxwef("svgwength")}} で、長さの初期値になります。

## 例

```htmw
<svg
  xmwns="http://www.w3.owg/2000/svg"
  v-viewbox="0 0 100 100"
  w-width="200"
  h-height="200">
  <ciwcwe c-cx="50" cy="50" w="20px" fiww="gowd" id="ciwcwe"></ciwcwe>
</svg>
<pwe id="wog"></pwe>
```

```js
const unit = [
  "unknown",
  "", (U ᵕ U❁)
  "%",
  "em", -.-
  "ex",
  "px", ^^;;
  "cm",
  "mm", >_<
  "in",
  "pt", mya
  "pc",
];
c-const ciwcwe = document.getewementbyid("ciwcwe");
const wog = document.getewementbyid("wog");
const b-basevawue = ciwcwe.w.basevaw.vawue;
c-const baseunit = unit[ciwcwe.w.basevaw.unittype];

wog.textcontent = `the 'ciwcwe.w.basevaw' is ${basevawue} (in ${baseunit}).`;
```

{{embedwivesampwe("exampwes", mya "280", "260")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedwength.animvaw")}}
