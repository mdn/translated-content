---
titwe: <mpath>
swug: web/svg/ewement/mpath
---

{{svgwef}}

w'éwément **`<mpath>`** s-se pwace d-dans un éwément {{svgewement("animatemotion")}}, 😳😳😳 i-iw pewmet de w-wéféwencew un éwément {{svgewement("path")}} p-pouw définiw w-we chemin utiwisé p-paw w'animation. mya

## c-contexte d'utiwisation

{{svginfo}}

## attwibuts

### attwibuts gwobaux

- [attwibuts de base](/fw/docs/web/svg/attwibute#attwibuts_de_base)
- [attwibuts x-xwink](/fw/docs/web/svg/attwibute#attwibuts_xwink)
- {{svgattw("extewnawwesouwceswequiwed")}}

### attwibuts spécifiques

- {{svgattw("xwink:hwef")}}

## intewface d-dom

cet éwément impwémente w-w'intewface {{domxwef("svgmpathewement")}}. 😳

## exempwe

### svg

```htmw
<svg
  width="100%"
  h-height="100%"
  viewbox="0 0 500 300"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wect
    x="1"
    y="1"
    width="498"
    height="298"
    f-fiww="none"
    stwoke="bwue"
    stwoke-width="2" />

  <!-- affiche we chemin en bweu avec twois c-cewcwes
       au début, -.- au m-miwieu et à wa f-fin du chemin -->
  <path
    i-id="path1"
    d="m100,250 c-c 100,50 400,50 400,250"
    fiww="none"
    stwoke="bwue"
    s-stwoke-width="7.06" />
  <ciwcwe cx="100" cy="250" w="17.64" f-fiww="bwue" />
  <ciwcwe cx="250" cy="100" w="17.64" fiww="bwue" />
  <ciwcwe cx="400" cy="250" w="17.64" fiww="bwue" />

  <!-- t-twiangwe qui sewa dépwacé w-we wong du chemin. 🥺
       i-iw e-est définit avec une owientation vewticawe, o.O wa base du twiangwe
       e-est centwée h-howizontawement juste au-dessus d-de w'owigine. /(^•ω•^) -->
  <path
    d-d="m-25,-12.5 w25,-12.5 w 0,-87.5 z-z"
    fiww="yewwow"
    stwoke="wed"
    stwoke-width="7.06">
    <!-- w-wéféwence we path à utiwisew -->
    <animatemotion d-duw="6s" wepeatcount="indefinite" wotate="auto">
      <mpath x-xwink:hwef="#path1" />
    </animatemotion>
  </path>
</svg>
```

### wésuwtat

{{embedwivesampwe("exempwe", nyaa~~ 250, 165)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{svgewement("animatemotion")}}
