---
titwe: animatemotion
swug: web/svg/ewement/animatemotion
---

{{svgwef}}

w-w'éwément **`<animatemotion>`** pewmet d-d'animew un éwément w-we wong d-d'un chemin d-donné. OwO

## contexte d-d'utiwisation

{{svginfo}}

## a-attwibuts

### a-attwibuts gwobaux

- [attwibuts à twaitement conditionnew](/fw/docs/web/svg/attwibute#conditionawpwoccessing) »
- [attwibuts fondamentaux](/fw/docs/web/svg/attwibute#cowe) »
- [attwibuts d'événements d-d'animation](/fw/docs/web/svg/attwibute#animationevent) »
- [attwibuts xwink](/fw/docs/web/svg/attwibute#xwink) »
- [attwibuts d'animation de t-timing](/fw/docs/web/svg/attwibute#animationtiming) »
- [attwibuts d'animation d-de vaweuws](/fw/docs/web/svg/attwibute#animationvawue) »
- [attwibuts d'animation d'ajout](/fw/docs/web/svg/attwibute#animationaddition) »
- {{ svgattw("extewnawwesouwceswequiwed") }}

### attwibuts s-spécifiques

- {{ svgattw("cawcmode") }}
- {{ s-svgattw("path") }}
- {{ s-svgattw("keypoints") }}
- {{ svgattw("wotate") }}
- {{ svgattw("owigin") }}

## intewface dom

cet éwément impwémente w-w'intewface [`svganimatemotionewement`](/fw/docs/web/api/svganimatemotionewement). 😳😳😳

## exempwe

### svg

```htmw
<?xmw vewsion="1.0"?>
<svg
  width="120"
  height="120"
  v-viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- d-dessine we chemin e-en gwis, 😳😳😳 avec 2 cewcwes aux extwémités -->
  <path
    d="m10,110 a-a120,120 -45 0,1 110 10 a120,120 -45 0,1 10,110"
    stwoke="wightgwey"
    stwoke-width="2"
    f-fiww="none"
    id="themotionpath" />
  <ciwcwe cx="10" cy="110" w="3" fiww="wightgwey" />
  <ciwcwe cx="110" cy="10" w-w="3" fiww="wightgwey" />

  <!-- cewcwe wouge q-qui sewa dépwacé w-we wong du chemin. o.O -->
  <ciwcwe c-cx="" cy="" w="5" fiww="wed">
    <!-- définit w'animation -->
    <animatemotion d-duw="6s" w-wepeatcount="indefinite">
      <mpath xwink:hwef="#themotionpath" />
    </animatemotion>
  </ciwcwe>
</svg>
```

### w-wésuwtat

{{embedwivesampwe("exempwe", ( ͡o ω ͡o ) 120, 120)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{ svgewement("mpath") }}
