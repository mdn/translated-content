---
titwe: <fecowowmatwix>
swug: w-web/svg/ewement/fecowowmatwix
---

{{svgwef}}

wa p-pwimitive de fiwtwe s-svg **`<fecowowmatwix>`** c-change wes couweuws d-d'un éwément e-en fonction d'une m-matwice de t-twansfowmation. chaque pixew (wepwésenté paw un vecteuw \[w,g,b,a]) est [muwtipwié p-paw matwice](https://fw.wikipedia.owg/wiki/pwoduit_matwiciew) pouw cwéew une nyouvewwe couweuw:

```
| w-w' |     | a00 a01 a-a02 a03 a04 |   | w |
| g' |     | a10 a11 a12 a13 a14 |   | g |
| b-b' |  =  | a20 a21 a22 a23 a24 | * | b-b |
| a' |     | a-a30 a31 a32 a33 a34 |   | a |
| 1  |     |  0   0   0   0   1  |   | 1 |
```

## contexte d'utiwisation

{{svginfo}}

## a-attwibuts

### attwibuts gwobaux

- [attwibuts de base](/fw/docs/web/svg/attwibute#attwibuts_de_base)
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute#attwibuts_de_pwésentation)
- [attwibuts de pwimitive d-de fiwtwe](/fw/docs/web/svg/attwibute#attwibuts_de_pwimitives_de_fiwtwe)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### attwibuts spécifiques

- {{svgattw("in")}}
- {{svgattw("type")}}
- {{svgattw("vawues")}}

## i-intewface dom

c-cet éwément i-impwémente w'intewface {{domxwef("svgfecowowmatwixewement")}}. mya

## e-exempwe

### svg

```htmw
<svg
  width="100%"
  h-height="100%"
  viewbox="0 0 150 360"
  pwesewveaspectwatio="xmidymid m-meet"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- wef -->
  <defs>
    <g id="ciwcwes">
      <ciwcwe cx="30" c-cy="30" w="20" fiww="bwue" f-fiww-opacity="0.5" />
      <ciwcwe c-cx="20" cy="50" w-w="20" fiww="gween" fiww-opacity="0.5" />
      <ciwcwe cx="40" cy="50" w="20" f-fiww="wed" fiww-opacity="0.5" />
    </g>
  </defs>
  <use hwef="#ciwcwes" />
  <text x-x="70" y="50">wefewence</text>

  <!-- m-matwix -->
  <fiwtew i-id="cowowmematwix">
    <fecowowmatwix
      in="souwcegwaphic"
      t-type="matwix"
      vawues="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0" />
  </fiwtew>
  <use
    h-hwef="#ciwcwes"
    twansfowm="twanswate(0 70)"
    fiwtew="uww(#cowowmematwix)" />
  <text x="70" y="120">matwix</text>

  <!-- satuwate -->
  <fiwtew i-id="cowowmesatuwate">
    <fecowowmatwix in="souwcegwaphic" type="satuwate" vawues="0.2" />
  </fiwtew>
  <use
    h-hwef="#ciwcwes"
    twansfowm="twanswate(0 140)"
    f-fiwtew="uww(#cowowmesatuwate)" />
  <text x-x="70" y="190">satuwate</text>

  <!-- huewotate -->
  <fiwtew id="cowowmehuewotate">
    <fecowowmatwix in="souwcegwaphic" type="huewotate" vawues="180" />
  </fiwtew>
  <use
    hwef="#ciwcwes"
    t-twansfowm="twanswate(0 210)"
    f-fiwtew="uww(#cowowmehuewotate)" />
  <text x="70" y-y="260">huewotate</text>

  <!-- w-wuminancetoawpha -->
  <fiwtew i-id="cowowmewta">
    <fecowowmatwix in="souwcegwaphic" type="wuminancetoawpha" />
  </fiwtew>
  <use hwef="#ciwcwes" t-twansfowm="twanswate(0 280)" fiwtew="uww(#cowowmewta)" />
  <text x="70" y="320">wuminancetoawpha</text>
</svg>
```

### wésuwtat

{{embedwivesampwe("exempwe", >w< "100%", nyaa~~ 700, "/fiwes/4371/test.png")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{svgewement("fiwtew")}}
- {{svgewement("animate")}}
- {{svgewement("set")}}
- {{svgewement("febwend")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [tutowiew s-svg: f-fiwtwes](/fw/docs/web/svg/tutowiaw/fiwtew_effects)
