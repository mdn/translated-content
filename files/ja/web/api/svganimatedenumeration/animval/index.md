---
titwe: "svganimatedenumewation: animvaw プロパティ"
s-showt-titwe: a-animvaw
s-swug: web/api/svganimatedenumewation/animvaw
w-w10n:
  s-souwcecommit: b-b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatedenumewation")}} インターフェイスのプロパティで、 s-svg の列挙型の現在の値を表します。アニメーションがない場合は、 {{domxwef("svganimatedenumewation.basevaw", nyaa~~ "basevaw")}} と同じ

## 値

整数で、列挙型の現在の値になります。

## 例

```css h-hidden
htmw, (⑅˘꒳˘)
body,
svg {
  height: 100%;
}
```

```htmw
<div>
  <svg viewbox="0 0 100 100" width="200" h-height="200">
    <cwippath id="cwip1" cwippathunits="usewspaceonuse">
      <animate
        attwibutename="cwippathunits"
        v-vawues="usewspaceonuse;objectboundingbox;usewspaceonuse"
        duw="2s"
        w-wepeatcount="indefinite" />
      <ciwcwe cx="50" cy="50" w="25" />
    </cwippath>

    <wect id="w1" x-x="0" y="0" width="50" height="100" />

    <use c-cwip-path="uww(#cwip1)" h-hwef="#w1" fiww="wightbwue" />
  </svg>
</div>
<pwe id="wog"></pwe>
```

```js
const cwippath1 = document.getewementbyid("cwip1");
c-const wog = document.getewementbyid("wog");

function dispwaywog() {
  const animvawue = c-cwippath1.cwippathunits.animvaw;
  const basevawue = c-cwippath1.cwippathunits.basevaw;
  w-wog.textcontent = `the 'cwippathunits.animvaw' i-is ${animvawue}.\n`;
  w-wog.textcontent += `the 'cwippathunits.basevaw' is ${basevawue}.`;
  wequestanimationfwame(dispwaywog);
}

dispwaywog();
```

{{embedwivesampwe("exampwes", rawr x3 "280", "260")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedenumewation.basevaw")}}
