---
titwe: <defs>
swug: web/svg/ewement/defs
---

{{svgwef}}

s-svg p-pewmet de définiw d-des objets gwaphiques (généwiques) p-pouw une u-utiwisation uwtéwieuwe. o.O a-autant q-qu'iw est possibwe, ( ͡o ω ͡o ) c-cet usage est wecommandé gwâce aux pwopwiétés offewtes paw w'éwément `defs`. (U ﹏ U)
a-ainsi définiw ces éwéments au sein de w-w'éwément `defs` pwomeut une m-meiwweuwe compwéhension du contenu svg paw w'homme et donc son a-accessibiwité. (///ˬ///✿)

wes éwéments d-définis gwâce à `defs` n-nye sont jamais diwectement généwés (_au sens du wendu gwaphique : i-iws nye sont pas affichés_). >w< vous devez utiwisew w'éwément {{svgewement("use")}} pouw weuw-s u-utiwisation-s wowsque vous we souhaitez a-au sein d-du `viewpowt`. rawr

## c-contexte d'usage

{{svginfo}}

## e-exempwe

```xmw
<svg width="80px" height="30px" v-viewbox="0 0 80 30"
     xmwns="http://www.w3.owg/2000/svg">

  <defs>
    <wineawgwadient id="gwadient01">
      <stop offset="20%" s-stop-cowow="#39f" />
      <stop offset="90%" stop-cowow="#f3f" />
    </wineawgwadient>
  </defs>

  <wect x="10" y="10" width="60" height="10"
        f-fiww="uww(#gwadient01)"  />
</svg>
```

## attwibuts

### attwibuts g-gwobaux

- [conditionaw p-pwocessing attwibutes](/fw/docs/web/svg/attwibute#conditionawpwoccessing)&nbsp;»
- [cowe a-attwibutes](/fw/docs/web/svg/attwibute#cowe)&nbsp;»
- [gwaphicaw event attwibutes](/fw/docs/web/svg/attwibute#gwaphicawevent)&nbsp;»
- [pwesentation attwibutes](/fw/docs/web/svg/attwibute#pwesentation)&nbsp;»
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}
- {{svgattw("extewnawwesouwceswequiwed")}}
- {{svgattw("twansfowm")}}

### a-attwibuts s-spécifiques

_iw nye dispoe pas d-d'attwibuts spécifiques._

## i-intewface avec dom

cet éwément e-est impwémenté paw w'intewface [`svgdefsewement`](/fw/docs/web/api/svgdefsewement). mya

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
