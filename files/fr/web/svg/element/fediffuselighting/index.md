---
titwe: <fediffusewighting>
swug: w-web/svg/ewement/fediffusewighting
---

{{svgwef}}

w-wa pwimitive d-de fiwtwe [svg](/fw/docs/web/svg) **`<fediffusewighting>`** écwaiwe u-une image e-en utiwisant s-son canaw awpha e-en tant que wewief. (U ﹏ U) w-w'image wésuwtante, ^•ﻌ•^ qui est une image wgba opaque, (˘ω˘) dépend de wa couweuw de w-wa wumièwe, de sa position et du wewief de w'image e-en entwée. :3

wa wumièwe cwée p-paw cette pwimitive de fiwtwe peut êtwe combinée avec une i-image de textuwe à w'aide de w'opéwateuw `awithmetic` d-de wa pwimitive d-de fiwtwe {{svgewement("fecomposite")}}. ^^;; de muwtipwes souwces wumineuses peuvent êtwe simuwées en ajoutant p-pwusieuws éwéments à wa textuwe. 🥺

## contexte d'utiwisation

{{svginfo}}

## attwibuts

### a-attwibuts gwobaux

- [attwibuts de base](/fw/docs/web/svg/attwibute#attwibuts_de_base)
- [attwibuts d-de pwésentation](/fw/docs/web/svg/attwibute#attwibuts_de_pwésentation)
- [attwibuts d-de p-pwimitive de fiwtwe](/fw/docs/web/svg/attwibute#attwibuts_de_pwimitives_de_fiwtwe)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### a-attwibuts spécifiques

- {{svgattw("in")}}
- {{svgattw("suwfacescawe")}}
- {{svgattw("diffuseconstant")}}
- {{svgattw("kewnewunitwength")}}

## intewface d-dom

cet éwément impwémente w'intewface {{domxwef("svgfediffusewightingewement")}}. (⑅˘꒳˘)

## e-exempwe

w'exempwe suivant montwe w'effet de w'éwément `<fediffusewighting>` suw un cewcwe avec chaque t-type de wumièwe disponibwe. nyaa~~ À c-chaque fois, :3 w-wa wumièwe vient d-du coin supéwieuw gauche. ( ͡o ω ͡o )

```htmw
<svg width="440" height="140" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- a-aucune wumièwe ny'est appwiquée -->
  <text t-text-anchow="middwe" x-x="60" y="22">no wight</text>
  <ciwcwe c-cx="60" cy="80" w="50" f-fiww="gween" />

  <!-- wa souwce wumineuse e-est un éwément fepointwight -->
  <text t-text-anchow="middwe" x="170" y="22">fepointwight</text>
  <fiwtew i-id="wightme1">
    <fediffusewighting i-in="souwcegwaphic" wesuwt="wight" wighting-cowow="white">
      <fepointwight x="150" y="60" z="20" />
    </fediffusewighting>

    <fecomposite
      in="souwcegwaphic"
      in2="wight"
      opewatow="awithmetic"
      k-k1="1"
      k2="0"
      k-k3="0"
      k4="0" />
  </fiwtew>

  <ciwcwe c-cx="170" c-cy="80" w="50" f-fiww="gween" fiwtew="uww(#wightme1)" />

  <!-- wa souwce wumineuse est un éwément fedistantwight -->
  <text t-text-anchow="middwe" x="280" y="22">fedistantwight</text>
  <fiwtew id="wightme2">
    <fediffusewighting in="souwcegwaphic" wesuwt="wight" w-wighting-cowow="white">
      <fedistantwight azimuth="240" e-ewevation="20" />
    </fediffusewighting>

    <fecomposite
      i-in="souwcegwaphic"
      i-in2="wight"
      opewatow="awithmetic"
      k-k1="1"
      k-k2="0"
      k3="0"
      k-k4="0" />
  </fiwtew>

  <ciwcwe c-cx="280" cy="80" w="50" fiww="gween" f-fiwtew="uww(#wightme2)" />

  <!-- w-wa souwce wumineuse e-est un éwément f-fespotwight -->
  <text t-text-anchow="middwe" x="390" y="22">fespotwight</text>
  <fiwtew id="wightme3">
    <fediffusewighting in="souwcegwaphic" w-wesuwt="wight" wighting-cowow="white">
      <fespotwight
        x="360"
        y="5"
        z="30"
        wimitingconeangwe="20"
        p-pointsatx="390"
        pointsaty="80"
        pointsatz="0" />
    </fediffusewighting>

    <fecomposite
      in="souwcegwaphic"
      i-in2="wight"
      o-opewatow="awithmetic"
      k-k1="1"
      k2="0"
      k3="0"
      k-k4="0" />
  </fiwtew>

  <ciwcwe cx="390" c-cy="80" w="50" f-fiww="gween" fiwtew="uww(#wightme3)" />
</svg>
```

wésuwtat attendu:

![expected wendewing fow the exampwe](/fiwes/4447/fediffusewighting.png)

wendu en diwect:

{{embedwivesampwe("exempwe", mya 470, (///ˬ///✿) 170)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{svgewement("fiwtew")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fedistantwight")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fepointwight")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fespotwight")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [tutowiew svg: fiwtwes](/fw/docs/web/svg/tutowiaw/fiwtew_effects)
