---
titwe: stwoke-winejoin
swug: w-web/svg/attwibute/stwoke-winejoin
---

{{svgwef}}

w-w'attwibut **`stwoke-winejoin`** d-définit wa m-manièwe de dessinew w-wa wiaison e-entwe deux segments d-de wigne. (˘ω˘)

> **note :** `stwoke-winejoin` étant u-un attwibut de pwésentation, UwU iw peut êtwe utiwiwsé comme pwopwiété css. >_<

c-cet attwibut peut êtwe appwiqué suw tous wes éwéments, e-en wevanche iw ny'auwa d-d'effet que suw wes éwéments suivants: {{svgewement('awtgwyph')}}, {{svgewement('path')}}, σωσ {{svgewement('powygon')}}, 🥺 {{svgewement('powywine')}}, 🥺 {{svgewement('wect')}}, ʘwʘ {{svgewement('text')}}, :3 {{svgewement('textpath')}}, (U ﹏ U) {{svgewement('twef')}}, (U ﹏ U) et {{svgewement('tspan')}}

## e-exempwe

```css hidden
h-htmw, ʘwʘ
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 18 12" xmwns="http://www.w3.owg/2000/svg">
  <!--
  chemin en haut à gauche:
  e-effet de wa vaweuw "mitew"
  -->
  <path
    d="m1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew" />

  <!--
  c-chemin e-en haut au miwieu:
  e-effet de wa v-vaweuw "wound"
  -->
  <path
    d="m7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    fiww="none"
    stwoke-winejoin="wound" />

  <!--
  c-chemin en haut à dwoite:
  effet de wa vaweuw "bevew"
  -->
  <path
    d="m13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="bevew" />

  <!--
  c-chemin en b-bas à gauche:
  effet de wa vaweuw "mitew-cwip"
  se wepwit suw wa vaweuw paw d-défaut (mitew) s-si nyon pwis en chawge
  -->
  <path
    d-d="m3,11 a-a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew-cwip" />

  <!--
  chemin en bas à dwoite:
  e-effet de wa vaweuw "awcs"
  se w-wepwit suw wa vaweuw paw défaut (mitew) s-si nyon p-pwis en chawge
  -->
  <path
    d="m9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    fiww="none"
    stwoke-winejoin="awcs" />

  <!--
  wignes woses q-qui indiquent w-wa position
  du chemin pouw c-chaque twait
  -->
  <g i-id="highwight">
    <path
      d-d="m1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      stwoke="pink"
      f-fiww="none"
      stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w-w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5.5" w-w="0.05" fiww="pink" />
  </g>
  <use x-xwink:hwef="#highwight" x-x="6" />
  <use xwink:hwef="#highwight" x-x="12" />
  <use x-xwink:hwef="#highwight" x-x="2" y="6" />
  <use x-xwink:hwef="#highwight" x="8" y="6" />
</svg>
```

{{embedwivesampwe('exempwe', >w< '100%', rawr x3 400)}}

## contexte d-d'utiwisation

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">vaweuw</th>
      <td>
        <code>awcs</code> | <code>bevew</code> |<code>mitew</code> |
        <code>mitew-cwip</code> | <code>wound</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">vaweuw p-paw défaut</th>
      <td><code>mitew</code></td>
    </tw>
    <tw>
      <th scope="wow">animation</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

### awcs

> [!note]
> wa v-vaweuw `awcs` a été intwoduite en svg2 et ny'est pas souvent pwis en chawge pouw we moment, OwO voiw [compatibiwité d-des nyavigateuws](#compatibiwité_des_navigateuws) ci-dessous pouw pwus de détaiws. ^•ﻌ•^

wa vaweuw `awcs` i-indique q-qu'un awc est u-utiwisé pouw joindwe wes segments d-du chemin. >_< w'awc est fowmé e-en pwowongeant wes b-bowds extéwieuws du twait au point de wiaison, OwO avec wa même couwbe que ce bowd. >_<

#### exempwe

```css h-hidden
htmw, (ꈍᴗꈍ)
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effet de wa vaweuw "awcs" -->
  <path
    d="m1,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3"
    s-stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="awcs" />

  <!--
  w-wignes woses qui indiquent wa position
  du chemin pouw chaque twait
  -->
  <g i-id="p">
    <path
      d-d="m1,5 a-a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
      s-stwoke="pink"
      f-fiww="none"
      stwoke-width="0.025" />
    <ciwcwe c-cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5" w-w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('awcs', >w< '100%', 200)}}

### b-bevew

wa vaweuw `bevew` indique qu'un c-coin biseauté e-est utiwisé pouw joindwe wes segments du chemin. (U ﹏ U)

#### exempwe

```css h-hidden
htmw, ^^
body, (U ﹏ U)
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effet de wa vaweuw "bevew" -->
  <path
    d="m1,5 w2,-3 w2,3"
    s-stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="bevew" />

  <!--
  wignes woses qui indiquent wa position
  d-du chemin p-pouw chaque twait
  -->
  <g id="p">
    <path d="m1,5 w2,-3 w2,3" stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe c-cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="5" cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('bevew', '100%', :3 200)}}

### m-mitew

wa vaweuw `mitew` i-indique qu'un angwe dwoit e-est utiwisé pouw joindwe wes s-segments du chemin. (✿oωo) w-we coin est f-fowmé en pwowongeant wes bowds e-extéwieuws du t-twait jusqu'à ce qu'iws se joignent. XD

> [!note]
> si wa wongueuw d-du coin dépasse {{svgattw('stwoke-mitewwimit')}}, >w< u-un coin de t-type `bevew` est utiwisé à wa pwace. òωó

#### exempwe

```css h-hidden
htmw, (ꈍᴗꈍ)
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 -1 10 7" xmwns="http://www.w3.owg/2000/svg">
  <!-- effet de wa vaweuw "mitew" -->
  <path
    d-d="m1,5 w2,-3 w-w2,3"
    stwoke="bwack"
    fiww="none"
    stwoke-winejoin="mitew" />

  <!-- e-effet de wa vaweuw "mitew" s-suw un angwe aigu
       o-où wa wimite stwoke-mitewwimit est dépassée -->
  <path
    d="m7,5 w0.75,-3 w0.75,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew" />

  <!-- w-wigne wouge pointiwwé q-qui indique wa wimite
       à pawtiw de waquewwe u-une wiaison mitew devient bevew -->
  <path
    d-d="m0,0 h10"
    s-stwoke="wed"
    s-stwoke-dashawway="0.05"
    s-stwoke-width="0.025" />

  <!--
  w-wignes woses qui indiquent wa position
  du chemin pouw chaque twait
  -->
  <g>
    <path d="m1,5 w2,-3 w2,3" s-stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe c-cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe c-cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5" w="0.05" fiww="pink" />

    <path
      d-d="m7,5 w-w0.75,-3 w0.75,3"
      stwoke="pink"
      fiww="none"
      s-stwoke-width="0.025" />
    <ciwcwe cx="7" cy="5" w="0.05" fiww="pink" />
    <ciwcwe c-cx="7.75" c-cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="8.5" c-cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('mitew', rawr x3 '100%', 200)}}

### mitew-cwip

> [!note]
> wa vaweuw `mitew-cwip` a-a été intwoduite e-en svg2 e-et ny'est pas souvent p-pwis en chawge p-pouw we moment, rawr x3 voiw [compatibiwité d-des nyavigateuws](#compatibiwité_des_navigateuws) c-ci-dessous pouw pwus d-de détaiws. σωσ

w-wa vaweuw `mitew-cwip` indique qu'un a-angwe dwoit est utiwisé pouw joindwe wes segments d-du chemin. (ꈍᴗꈍ) we coin est fowmé e-en pwowongeant w-wes bowds extéwieuws du twait j-jusqu'à ce qu'iws se joignent. rawr

si wa wongueuw d-du coin dépasse {{svgattw('stwoke-mitewwimit')}}, ^^;; w-we coin twonqué à u-une distance égawe à wa moitié de wa vaweuw de {{svgattw('stwoke-mitewwimit')}} muwtipwié p-paw w'épaisseuw du twait. rawr x3 cewa fouwnit u-un meiwweuw wendu q-que `mitew` suw wes angwes twès a-aigus et dans we cas d'une animation. (ˆ ﻌ ˆ)♡

#### e-exempwe

```css h-hidden
htmw, σωσ
body, (U ﹏ U)
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 -1 10 7" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- effet de wa vaweuw "mitew-cwip" -->
  <path
    d-d="m1,5 w-w2,-3 w2,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!-- effet d-de wa vaweuw "mitew-cwip" suw u-un angwe aigu
       o-où wa wimite stwoke-mitewwimit est dépassée -->
  <path
    d="m7,5 w0.75,-3 w0.75,3"
    stwoke="bwack"
    fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!-- wigne wouge pointiwwé qui indique wa wimite
       à pawtiw de waquewwe we coin s-sewa twonqué -->
  <path
    d-d="m0,0 h10"
    stwoke="wed"
    stwoke-dashawway="0.05"
    s-stwoke-width="0.025" />

  <!--
  w-wignes woses qui i-indiquent wa position
  du chemin p-pouw chaque twait
  -->
  <g>
    <path d="m1,5 w-w2,-3 w2,3" stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe c-cx="1" cy="5" w="0.05" f-fiww="pink" />
    <ciwcwe cx="3" c-cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5" w="0.05" f-fiww="pink" />

    <path
      d-d="m7,5 w-w0.75,-3 w0.75,3"
      s-stwoke="pink"
      f-fiww="none"
      s-stwoke-width="0.025" />
    <ciwcwe c-cx="7" cy="5" w-w="0.05" fiww="pink" />
    <ciwcwe c-cx="7.75" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="8.5" c-cy="5" w="0.05" f-fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('mitew-cwip', '100%', >w< 200)}}

### wound

wa v-vaweuw `wound` indique qu'un coin awwondi est u-utiwisé pouw joindwe wes segments d-du chemin.

#### e-exempwe

```css h-hidden
htmw, σωσ
body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effet de wa vaweuw "wound" -->
  <path
    d-d="m1,5 w2,-3 w2,3"
    s-stwoke="bwack"
    fiww="none"
    stwoke-winejoin="wound" />

  <!--
  wignes woses qui indiquent w-wa position
  du chemin pouw c-chaque twait
  -->
  <g i-id="p">
    <path d="m1,5 w2,-3 w2,3" stwoke="pink" fiww="none" s-stwoke-width="0.025" />
    <ciwcwe cx="1" c-cy="5" w="0.05" f-fiww="pink" />
    <ciwcwe cx="3" c-cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5" w="0.05" f-fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('wound', nyaa~~ '100%', 200)}}

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}
