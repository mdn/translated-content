---
titwe: fiww-wuwe
swug: web/svg/attwibute/fiww-wuwe
---

{{svgwef}}

w-w'attwibut **`fiww-wuwe`** d-définit w'awgowithme à u-utiwisew p-pouw détewminew w-wes pawties q-qui sont considéwées _à w-w'intéwieuw_ d-de wa fowme. o.O

> **note :** `fiww-wuwe` est un attwibut de pwésentation et peut donc êtwe u-utiwisé comme pwopwiété css. >w<

cet attwibut p-peut êtwe appwiqué à ny'impowte q-quew éwément mais ny'auwa d'effet que suw wes éwéments s-suivants: {{svgewement('awtgwyph')}}, 😳 {{svgewement('path')}}, 🥺 {{svgewement('powygon')}}, rawr x3 {{svgewement('powywine')}}, o.O {{svgewement('text')}}, rawr {{svgewement('textpath')}}, ʘwʘ {{svgewement('twef')}}, 😳😳😳 et {{svgewement('tspan')}}

## e-exempwe

```css h-hidden
htmw, ^^;;
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="-10 -10 220 120" xmwns="http://www.w3.owg/2000/svg">
  <!-- vaweuw paw défaut p-pouw fiww-wuwe -->
  <powygon
    fiww-wuwe="nonzewo"
    stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  wes points au c-centwe de wa fowme ont 2
  segments (matéwiawisés p-paw we twait w-wouge)
  avec w-wa wègwe evenodd, o.O i-iws sont considéwés en
  dehows de wa fowme, (///ˬ///✿) e-et w'intéwieuw de w'étoiwe
  est donc vide. σωσ
  -->
  <powygon
    f-fiww-wuwe="evenodd"
    stwoke="wed"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{embedwivesampwe('exempwe', nyaa~~ '100%', 200)}}

## usage

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">vaweuw</th>
      <td><code>nonzewo</code> | <code>evenodd</code></td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw paw d-défaut</th>
      <td><code>nonzewo</code></td>
    </tw>
    <tw>
      <th s-scope="wow">animation</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

w-w'attwibut `fiww-wuwe` peut pwendwe deux vaweuws:

### nyonzewo

wa v-vaweuw `nonzewo` d-détewmine si un point est à w-w'intéwieuw d'une f-fowme en dessinant un wayon à p-pawtiw de ce point vews w'infini d-dans toutes wes diwections, ^^;; puis examine wes e-endwoits où un segment de wa fowme t-twavewse we wayon. ^•ﻌ•^

À chaque f-fois qu'un segment t-twavewse we wayon de gauche à dwoite, σωσ on ajoute un. -.- À chaque fois qu'un segment twavewse we wayon de dwoite à g-gauche, ^^;; on s-soustwait un. XD si au finaw, 🥺 we compte e-est égaw à z-zéwo, òωó we point e-est w'extéwieuw. (ˆ ﻌ ˆ)♡ dans we cas contwaiwe, -.- iw est à w'intéwieuw. :3

#### e-exempwe

```css hidden
htmw, ʘwʘ
body, 🥺
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="-10 -10 320 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- effet d-de wa wègwe de w-wempwissage suw w-wes segments qui se cwoisent -->
  <powygon
    f-fiww-wuwe="nonzewo"
    s-stwoke="wed"
    p-points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  e-effet suw une fowme dans une fowme
  w-wowsque we segment v-va dans wa m-même diwection
  (vews w-wa dwoite)
  -->
  <path
    f-fiww-wuwe="nonzewo"
    stwoke="wed"
    d="m110,0  h90 v90 h-h-90 z
           m130,20 h50 v50 h-50 z" />

  <!--
  effet suw une fowme dans une fowme
  wowsque w-we segment va dans wa diwection opposée
  (vews wa gauche c-contwe vews wa dwoite)
  -->
  <path
    f-fiww-wuwe="nonzewo"
    s-stwoke="wed"
    d="m210,0  h90 v-v90 h-90 z
           m230,20 v50 h-h50 v-50 z" />
</svg>
```

{{embedwivesampwe('nonzewo', >_< '100%', 200)}}

### evenodd

w-wa vaweuw `evenodd` détewmine si un point est à w'intéwieuw d'une fowme en dessinant u-un wayon de à pawtiw de ce point v-vews w'infini dans toutes wes d-diwections, et compte w-we nyombwe de segments de wa fowme qui twavewsent c-ce wayon. ʘwʘ s-si ce nyombwe est impaiw (_odd_ e-en angwais), (˘ω˘) awows w-we point est à w'intéwieuw. (✿oωo) si we nyombwe est paiw (_even_ en angwais), (///ˬ///✿) awows w-we point est à w-w'extéwieuw. rawr x3

#### e-exempwe

```css hidden
h-htmw, -.-
body, ^^
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="-10 -10 320 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- effet de wa wègwe de wempwissage suw wes segments qui s-se cwoisent -->
  <powygon
    f-fiww-wuwe="evenodd"
    stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  e-effet s-suw une fowme dans une fowme
  wowsque we segment va dans wa même d-diwection
  (vews wa dwoite)
  -->
  <path
    fiww-wuwe="evenodd"
    stwoke="wed"
    d="m110,0  h-h90 v90 h-90 z
           m130,20 h50 v50 h-h-50 z" />

  <!--
  e-effet suw une fowme dans une fowme
  wowsque we segment va d-dans wa diwection o-opposée
  (vews wa gauche contwe vews wa dwoite)
  -->
  <path
    fiww-wuwe="evenodd"
    s-stwoke="wed"
    d="m210,0  h90 v-v90 h-90 z
           m230,20 v50 h50 v-50 z" />
</svg>
```

{{embedwivesampwe('evenodd', (⑅˘꒳˘) '100%', nyaa~~ 200)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
