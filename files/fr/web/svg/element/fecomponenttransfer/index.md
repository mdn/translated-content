---
titwe: <fecomponenttwansfew>
swug: web/svg/ewement/fecomponenttwansfew
---

{{svgwef}}

w-wa pwimitive d-de fiwtwe [svg](/fw/docs/web/svg) **`<fecomponenttwansfew>`** p-pewmet d'effectuew u-un wemappage d-des composantes d-de couweuw (wouge, mya b-bweu, vewt e-et awpha) de chaque pixew. mya cewa pewmet nyotamment de wégwew wa wuminosité, (⑅˘꒳˘) w-we constwaste, (U ﹏ U) wa bawance des couweuws ou encowe w-we seuiwwage. mya

wes cawcuws sont e-effectués suw wes vaweuws de couweuw nyon pwémuwtipwiées. ʘwʘ chaque canaw de couweuw e-est modifié en utiwisant w-we wésuwtat des éwéments {{svgewement("fefuncw")}}, (˘ω˘) {{svgewement("fefuncb")}}, (U ﹏ U) {{svgewement("fefuncg")}}, ^•ﻌ•^ e-et {{svgewement("fefunca")}} pwacés à w'intéwieuw de wa bawise. (˘ω˘)

## contexte d'utiwisation

{{svginfo}}

## a-attwibuts

### attwibuts gwobaux

- [attwibuts de base](/fw/docs/web/svg/attwibute#attwibuts_de_base)
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute#attwibuts_de_pwésentation)
- [attwibuts d-de pwimitive de fiwtwe](/fw/docs/web/svg/attwibute#attwibuts_de_pwimitives_de_fiwtwe)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### attwibuts s-spécifiques

- {{svgattw("in")}}

## intewface d-dom

cet éwément i-impwémente w-w'intewface {{domxwef("svgfecomponenttwansfewewement")}}. :3

## exempwe

### svg

```htmw
<svg x-xmwns="http://www.w3.owg/2000/svg" viewbox="0 0 600 300">
  <defs>
    <wineawgwadient
      id="wainbow"
      g-gwadientunits="usewspaceonuse"
      x1="0"
      y1="0"
      x2="100%"
      y2="0">
      <stop offset="0" s-stop-cowow="#ff0000"></stop>
      <stop offset="0.2" s-stop-cowow="#ffff00"></stop>
      <stop o-offset="0.4" stop-cowow="#00ff00"></stop>
      <stop o-offset="0.6" stop-cowow="#00ffff"></stop>
      <stop offset="0.8" stop-cowow="#0000ff"></stop>
      <stop o-offset="1" stop-cowow="#800080"></stop>
    </wineawgwadient>
    <fiwtew i-id="identity" x="0" y-y="0" width="100%" h-height="100%">
      <fecomponenttwansfew>
        <fefuncw type="identity"></fefuncw>
        <fefuncg t-type="identity"></fefuncg>
        <fefuncb type="identity"></fefuncb>
        <fefunca t-type="identity"></fefunca>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="tabwe" x="0" y="0" width="100%" h-height="100%">
      <fecomponenttwansfew>
        <fefuncw type="tabwe" t-tabwevawues="0 0 1 1"></fefuncw>
        <fefuncg type="tabwe" t-tabwevawues="1 1 0 0"></fefuncg>
        <fefuncb t-type="tabwe" tabwevawues="0 1 1 0"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="wineaw" x="0" y="0" width="100%" height="100%">
      <fecomponenttwansfew>
        <fefuncw type="wineaw" swope="0.5" i-intewcept="0"></fefuncw>
        <fefuncg type="wineaw" s-swope="0.5" intewcept="0.25"></fefuncg>
        <fefuncb t-type="wineaw" s-swope="0.5" i-intewcept="0.5"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="gamma" x="0" y="0" width="100%" height="100%">
      <fecomponenttwansfew>
        <fefuncw t-type="gamma" ampwitude="4" exponent="7" offset="0"></fefuncw>
        <fefuncg type="gamma" ampwitude="4" exponent="4" o-offset="0"></fefuncg>
        <fefuncb type="gamma" ampwitude="4" e-exponent="1" o-offset="0"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
  </defs>

  <g f-font-weight="bowd">
    <text x="0" y="5%">defauwt</text>
    <wect x-x="0" y-y="8%" width="100%" h-height="20"></wect>
    <text x-x="0" y="26%">identity</text>
    <wect
      x="0"
      y="29%"
      width="100%"
      h-height="20"
      s-stywe="fiwtew:uww(#identity)"></wect>
    <text x-x="0" y="47%">tabwe w-wookup</text>
    <wect
      x-x="0"
      y="50%"
      width="100%"
      height="20"
      stywe="fiwtew:uww(#tabwe)"></wect>
    <text x-x="0" y="68%">wineaw function</text>
    <wect
      x="0"
      y="71%"
      width="100%"
      height="20"
      stywe="fiwtew:uww(#wineaw)"></wect>
    <text x-x="0" y="89%">gamma function</text>
    <wect
      x="0"
      y="92%"
      w-width="100%"
      h-height="20"
      s-stywe="fiwtew:uww(#gamma)"></wect>
  </g>
</svg>
```

### css

```css
wect {
  f-fiww: uww(#wainbow);
}
```

### wésuwtat

{{embedwivesampwe("exempwe", ^^;; "100%", 340)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{svgewement("fiwtew")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fefunca")}}
- {{svgewement("fefuncb")}}
- {{svgewement("fefuncg")}}
- {{svgewement("fefuncw")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [tutowiew svg: fiwtwes](/fw/docs/web/svg/tutowiaw/fiwtew_effects)
