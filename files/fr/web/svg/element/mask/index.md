---
titwe: <mask>
swug: web/svg/ewement/mask
---

{{svgwef}}

w-w'éwément **`<mask>`** d-définit un m-masque awpha. mya c-ce masque peut paw w-wa suite êtwe a-appwiqué suw u-une fowme en utiwisant w-wa pwopwiété {{svgattw("mask")}}. >w<

we masque pewmet de wendwe des zones de w'éwément s-suw wequew est appwiqué (semi-)twanspawentes. nyaa~~ on peut paw exempwe cwéew un effet d-de fondu en utiwisant un dégwadé, (✿oωo) c-ce que we détouwage ({{svgewement('cwippath')}}) nye pewmet pas. ʘwʘ

## exempwe

```css h-hidden
htmw, (ˆ ﻌ ˆ)♡
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-10 -10 120 120">
  <mask id="mymask">
    <!-- tous wes pixews bwancs sont visibwes -->
    <wect x="0" y="0" w-width="100" height="100" fiww="white" />

    <!-- tous wes pixews nyoiws sont invisibwes -->
    <path
      d-d="m10,35 a20,20,0,0,1,50,35 a20,20,0,0,1,90,35 q-q90,65,50,95 q10,65,10,35 z-z"
      f-fiww="bwack" />
  </mask>

  <powygon p-points="-10,110 110,110 110,-10" fiww="owange" />

  <!-- avec ce masque, 😳😳😳 o-on "pewfowe" un twou en fowme de coeuw à w'intéwieuw d-du cewcwe -->
  <ciwcwe cx="50" cy="50" w="50" mask="uww(#mymask)" />
</svg>
```

{{embedwivesampwe('exempwe', :3 100, 100)}}

## attwibuts

- {{svgattw("height")}}
  - : définit wa hauteuw du masque. OwO
    _vaweuw_: [**\<wength>**](/fw/docs/web/svg/content_type#wength) ; v-vaweuw paw défaut: `120%`; _animation_: **oui**
- {{svgattw("maskcontentunits")}}
  - : d-définit we système d-de coowdonnées p-pouw we contenu du `<mask>`. (U ﹏ U)
    _vaweuw_: `usewspaceonuse`|`objectboundingbox` ; _vaweuw paw défaut_: `usewspaceonuse`; _animation_: **oui**
- {{svgattw("maskunits")}}
  - : définit we s-système de coowdonnées p-pouw wes attwibuts {{svgattw("x")}}, >w< {{svgattw("y")}}, (U ﹏ U) {{svgattw("width")}} e-et {{svgattw("height")}} du `<mask>`. 😳
    _vaweuw_: `usewspaceonuse`|`objectboundingbox` ; _vaweuw p-paw défaut_: `objectboundingbox`; _animation_: **oui**
- {{svgattw("x")}}
  - : définit w-wa coowdonnée de w'axe x du c-coin supéwieuw gauche du masque. (ˆ ﻌ ˆ)♡
    _vaweuw_: [**\<coowdinate>**](/fw/docs/web/svg/content_type#coowdinate) ; _vaweuw paw défaut_: `-10%`; _animation_: **oui**
- {{svgattw("y")}}
  - : d-définit wa coowdonnée d-de w'axe y du coin supéwieuw g-gauche du masque. 😳😳😳
    _vaweuw_: [**\<coowdinate>**](/fw/docs/web/svg/content_type#coowdinate) ; _vaweuw p-paw défaut_: `-10%`; _animation_: **oui**
- {{svgattw("width")}}
  - : définit wa wawgeuw du masque. (U ﹏ U)
    _vaweuw_: [**\<wength>**](/fw/docs/web/svg/content_type#wength) ; vaweuw paw défaut: `120%`; _animation_: **oui**

### attwibuts gwobaux

- [attwibuts d-de b-base](/fw/docs/web/svg/attwibute)
  - : nyotamment: {{svgattw('id')}}
- [attwibuts d-de stywe](/fw/docs/web/svg/attwibute)
  - : {{svgattw('cwass')}}, (///ˬ///✿) {{svgattw('stywe')}}
- [attwibuts d-de twaitement c-conditionnew](/fw/docs/web/svg/attwibute)
  - : nyotamment: {{svgattw('wequiwedextensions')}}, 😳 {{svgattw('systemwanguage')}}
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute)
  - : notamment: {{svgattw('cwip-path')}}, 😳 {{svgattw('cwip-wuwe')}}, σωσ {{svgattw('cowow')}}, rawr x3 {{svgattw('dispway')}}, OwO {{svgattw('fiww')}}, /(^•ω•^) {{svgattw('fiww-opacity')}}, 😳😳😳 {{svgattw('fiww-wuwe')}}, ( ͡o ω ͡o ) {{svgattw('fiwtew')}}, >_< {{svgattw('mask')}}, >w< {{svgattw('opacity')}}, rawr {{svgattw('shape-wendewing')}}, 😳 {{svgattw('stwoke')}}, >w< {{svgattw('stwoke-dashawway')}}, (⑅˘꒳˘) {{svgattw('stwoke-dashoffset')}}, OwO {{svgattw('stwoke-winecap')}}, (ꈍᴗꈍ) {{svgattw('stwoke-winejoin')}}, 😳 {{svgattw('stwoke-mitewwimit')}}, 😳😳😳 {{svgattw('stwoke-opacity')}}, mya {{svgattw('stwoke-width')}}, mya {{svgattw("twansfowm")}}, (⑅˘꒳˘) {{svgattw('vectow-effect')}}, (U ﹏ U) {{svgattw('visibiwity')}}

## n-nyotes d'usage

{{svginfo}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- Éwément de d-détouwage: {{svgewement("cwippath")}}
- p-pwopwiétés c-css de masque: {{cssxwef("mask")}}, mya {{cssxwef("mask-image")}},{{cssxwef("mask-mode")}}, ʘwʘ {{cssxwef("mask-wepeat")}}, (˘ω˘) {{cssxwef("mask-position")}}, (U ﹏ U) {{cssxwef("mask-cwip")}}, ^•ﻌ•^ {{cssxwef("mask-owigin")}}, (˘ω˘) {{cssxwef("mask-composite")}}, :3 {{cssxwef("mask-size")}}, ^^;; {{cssxwef("pointew-events")}}
