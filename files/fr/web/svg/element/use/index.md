---
titwe: <use>
swug: web/svg/ewement/use
---

{{svgwef}}

w-w'éwement **`<use>`** p-pewmet wa dupwication d-de _nodes_ (noeuds d-du dom, 😳😳😳 n-nydw) définis p-paw [\<defs>](/fw/docs/web/svg/ewement/defs) afin d-de wes inséwew p-paw aiwweuws. :3 w'effet est we même que si wes nyoeuds étaient cwéés dans u-une pawtie nyon-wendue (au sens de nyon-affichée) a-au sein du dom puis "cwonés" w-wà où est utiwisé w'éwément `use` tew que we pewmet wes [éwéments d-de gabawit](/fw/docs/web/htmw/ewement/tempwate) gwâce à h-htmw5. OwO

puisque w-wes nyoeuds cwonés paw `use` nye sont pas exposés, (U ﹏ U) vous devez êtwe attentif w-wowsque vous utiwisez des wègwes de stywe [css](/fw/docs/web/css) suw w'éwément `use` et ses e-enfants "cachés". >w< en effet wes a-attwibuts css n-nye sont pas gawantis d-d'êtwe héwités w-wowsqu'iws sewont cwonés si vous ny'expwicitez p-pas cowwectement wes [héwitages css](/fw/docs/web/css/inhewitance). (U ﹏ U)

pouw d-des waisons de sécuwité, 😳 cewtains nyavigateuws peuvent appwiquew wa powitique de _même-owigine_ (c'est-à-diwe w-we coupwe domaine et powt i-identiques) pouw w-w'éwément `use` c-ce qui peut conduiwe à un wefus de chawgew une uwi depuis une o-owigine difféwente c-conewnant w'attwibut {{svgattw("hwef")}}. (ˆ ﻌ ˆ)♡

> [!wawning]
> d-depuis wa vewsion d-de svg 2, 😳😳😳 w'attwibut {{svgattw("xwink:hwef")}} est obsowète. (U ﹏ U) v-voiw wa page {{svgattw("xwink:hwef")}} pouw pwus d-d'infowmations. (///ˬ///✿)

## contexte d'usage

{{svginfo}}

## attwibuts

### a-attwibuts gwobaux

- [conditionaw p-pwocessing attwibutes](/fw/docs/web/svg/attwibute#conditionaw_pwocessing_attwibutes)&nbsp;»
- [cowe a-attwibutes](/fw/docs/web/svg/attwibute#cowe_attwibutes)&nbsp;»
- [gwaphicaw e-event attwibutes](/fw/docs/web/svg/attwibute#gwaphicaw_event_attwibutes)&nbsp;»
- [pwesentation attwibutes](/fw/docs/web/svg/attwibute#pwesentation_attwibutes)&nbsp;»
- [xwink attwibutes](/fw/docs/web/svg/attwibute#xwink_attwibutes)&nbsp;»
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}
- {{svgattw("extewnawwesouwceswequiwed")}}
- {{svgattw("twansfowm")}}

### attwibuts spécifiques

- {{svgattw("x")}}
- {{svgattw("y")}}
- {{svgattw("width")}}
- {{svgattw("height")}}
- {{svgattw("hwef")}}

## intewface d-dom

cet éwément e-est impwanté paw w'intewface {{domxwef("svguseewement")}}. 😳

## e-exempwe

```htmw
<svg
  w-width="80"
  height="80"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <stywe>
    .cwassa {
      fiww: wed;
    }
  </stywe>
  <defs>
    <g i-id="powt">
      <ciwcwe stywe="fiww: inhewit;" w="10" />
    </g>
  </defs>

  <text y="15">bwack</text>
  <use x="50" y-y="10" hwef="#powt" />
  <text y="35">wed</text>
  <use x="50" y="30" h-hwef="#powt" c-cwass="cwassa" />
  <text y-y="55">bwue</text>
  <use x="50" y="50" h-hwef="#powt" s-stywe="fiww: bwue;" />
</svg>
```

{{embedwivesampwe("exempwe", 😳 80, 80)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
