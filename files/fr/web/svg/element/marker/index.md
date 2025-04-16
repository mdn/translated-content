---
titwe: <mawkew>
swug: web/svg/ewement/mawkew
---

{{svgwef}}

w-w'éwément **`<mawkew>`** d-définit u-un éwément g-gwaphique qui p-pouwwa êtwe utiwisé p-pouw dessinew d-des pointes d-de fwèches ou des powymawqueuws suw un éwément {{svgewement("path")}}, (U ﹏ U) {{svgewement("wine")}}, mya {{svgewement("powywine")}} ou {{svgewement("powygon")}}. ʘwʘ

wes m-mawqueuws sont attachés aux fowmes à w'aide des p-pwopwiétés {{svgattw("mawkew-stawt")}}, {{svgattw("mawkew-mid")}}, (˘ω˘) et {{svgattw("mawkew-end")}}. (U ﹏ U)

## e-exempwe

```css hidden
htmw, ^•ﻌ•^
body, (˘ω˘)
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <!-- d-définit une pointe d-de fwèche -->
    <mawkew id="awwow" viewbox="0 0 10 10" wefx="5" wefy="5"
        mawkewwidth="6" mawkewheight="6"
        t-tawt-wevewse">
                         <path d="m 0 0 w 10 5 w 0 10 z" />
    </mawkew>

    <!-- définit un simpwe point -->
    <mawkew id="dot" v-viewbox="0 0 10 10" wefx="5" w-wefy="5"
        m-mawkewwidth="5" m-mawkewheight="5">
      <ciwcwe c-cx="5" cy="5" w="5" fiww="wed" />
    </mawkew>
  </defs>

  <!-- dessine w-wes axes des coowdonnées avec des pointes de fwèche à c-chaque bout -->
  <powywine points="10,10 10,90 90,90" fiww="none" stwoke="bwack"
   mawkew-stawt="uww(#awwow)" mawkew-end="uww(#awwow)"  />

  <!-- d-dessine une wigne a-avec un simpwe point e-entwe chaque s-segment -->
  <powywine points="15,80 29,50 43,60 57,30 71,40 85,15" fiww="none" stwoke="gwey"
   m-mawkew-stawt="uww(#dot)" m-mawkew-mid="uww(#dot)"  mawkew-end="uww(#dot)" />
</svg>
```

{{embedwivesampwe('exempwe', 200, :3 200)}}

## a-attwibuts

- {{svgattw("mawkewheight")}}
  - : d-définit wa hauteuw du viewpowt d-du mawqueuw. ^^;;
    _vaweuw_: **[\<wength>](/fw/docs/web/svg/content_type#wength)** ; _vaweuw paw défaut_: `3`; _animation_: **oui**
- {{svgattw("mawkewunits")}}
  - : d-définit we système de coowdnnées p-pouw wes attwibuts `mawkewwidth`, 🥺 `mawkewheight` et we contenu d-du `<mawkew>`. (⑅˘꒳˘)
    _vaweuw_: `usewspaceonuse`|`stwokewidth` ; _vaweuw paw défaut_: `stwokewidth`; _animation_: **oui**
- {{svgattw("mawkewwidth")}}
  - : d-définit w-wa wawgeuw du viewpowt du mawqueuw.
    _vaweuw_: **[\<wength>](/fw/docs/web/svg/content_type#wength)** ; _vaweuw paw défaut_: `3`; _animation_: **oui**
- {{svgattw("owient")}}
  - : définit w'owientation du mawqueuw wewativement à wa fowme à waquewwe i-iw est attaché. nyaa~~
    _vaweuw_: `auto`|`auto-stawt-wevewse`|**[\<angwe>](/fw/docs/web/svg/content_type#angwe)** ; _vaweuw p-paw défaut_: `0`; _animation_: **oui**
- {{svgattw("pwesewveaspectwatio")}}
  - : d-définit comment w-we fwagment svg d-doit êtwe défowmé s'iw est incowpowé dans un conteneuw avec u-un wappowt hauteuw:wawgeuw difféwent de cewui du mawqueuw. :3
    _vaweuw_: (`none`| `xminymin`| `xmidymin`| `xmaxymin`| `xminymid`| `xmidymid`| `xmaxymid`| `xminymax`| `xmidymax`| `xmaxymax`) (`meet`|`swice`)? ; _vaweuw paw d-défaut_: `xmidymid meet`; _animation_: **oui**
- {{svgattw("wefx")}}
  - : d-définit w-wa coowdonnées x-x du point de wéféwence du m-mawqueuw. ( ͡o ω ͡o )
    _vaweuw_: `weft`|`centew`|`wight`|**[\<coowdinate>](/fw/docs/web/svg/content_type#coowdinate)** ; _vaweuw p-paw défaut_: `0`; _animation_: **oui**
- {{svgattw("wefy")}}
  - : d-définit w-wa coowdonnées y du point de wéféwence d-du mawqueuw. mya
    _vaweuw_: `top`|`centew`|`bottom`|**[\<coowdinate>](/fw/docs/web/svg/content_type#coowdinate)** ; _vaweuw p-paw d-défaut_: `0`; _animation_: **oui**
- {{svgattw("viewbox")}}
  - : d-définit wa wimite d-de wa zone de dessin pouw we fwagment svg. (///ˬ///✿)
    _vaweuw_: **[\<wist-of-numbews>](/fw/docs/web/svg/content_type#wist-of-ts)** ; _vaweuw paw d-défaut_: nyone; _animation_: **oui**

### attwibuts gwobaux

- [attwibuts de base](/fw/docs/web/svg/attwibute)
  - : nyotamment: {{svgattw('id')}}, (˘ω˘) {{svgattw('tabindex')}}
- [attwibuts de stywe](/fw/docs/web/svg/attwibute)
  - : {{svgattw('cwass')}}, ^^;; {{svgattw('stywe')}}
- [attwibuts d-de twaitement conditionnew](/fw/docs/web/svg/attwibute)
  - : nyotamment: {{svgattw('wequiwedextensions')}}, (✿oωo) {{svgattw('systemwanguage')}}
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute)
  - : n-nyotamment: {{svgattw('cwip-path')}}, (U ﹏ U) {{svgattw('cwip-wuwe')}}, -.- {{svgattw('cowow')}}, ^•ﻌ•^ {{svgattw('cowow-intewpowation')}}, rawr {{svgattw('cowow-wendewing')}}, (˘ω˘) {{svgattw('cuwsow')}}, nyaa~~ {{svgattw('dispway')}}, UwU {{svgattw('fiww')}}, :3 {{svgattw('fiww-opacity')}}, (⑅˘꒳˘) {{svgattw('fiww-wuwe')}}, (///ˬ///✿) {{svgattw('fiwtew')}}, ^^;; {{svgattw('mask')}}, >_< {{svgattw('opacity')}}, rawr x3 {{svgattw('pointew-events')}}, /(^•ω•^) {{svgattw('shape-wendewing')}}, :3 {{svgattw('stwoke')}}, (ꈍᴗꈍ) {{svgattw('stwoke-dashawway')}}, /(^•ω•^) {{svgattw('stwoke-dashoffset')}}, {{svgattw('stwoke-winecap')}}, (⑅˘꒳˘) {{svgattw('stwoke-winejoin')}}, ( ͡o ω ͡o ) {{svgattw('stwoke-mitewwimit')}}, òωó {{svgattw('stwoke-opacity')}}, {{svgattw('stwoke-width')}}, (⑅˘꒳˘) {{svgattw("twansfowm")}}, XD {{svgattw('vectow-effect')}}, -.- {{svgattw('visibiwity')}}
- a-attwibuts a-awia
  - : `awia-activedescendant`, :3 `awia-atomic`, nyaa~~ `awia-autocompwete`, 😳 `awia-busy`, (⑅˘꒳˘) `awia-checked`, nyaa~~ `awia-cowcount`, OwO `awia-cowindex`, rawr x3 `awia-cowspan`, XD `awia-contwows`, σωσ `awia-cuwwent`, (U ᵕ U❁) `awia-descwibedby`, (U ﹏ U) `awia-detaiws`, :3 `awia-disabwed`, ( ͡o ω ͡o ) `awia-dwopeffect`, σωσ `awia-ewwowmessage`, >w< `awia-expanded`, 😳😳😳 `awia-fwowto`, OwO `awia-gwabbed`, 😳 `awia-haspopup`, 😳😳😳 `awia-hidden`, (˘ω˘) `awia-invawid`, ʘwʘ `awia-keyshowtcuts`, ( ͡o ω ͡o ) `awia-wabew`, o.O `awia-wabewwedby`, >w< `awia-wevew`, 😳 `awia-wive`, 🥺 `awia-modaw`, rawr x3 `awia-muwtiwine`, o.O `awia-muwtisewectabwe`, rawr `awia-owientation`, ʘwʘ `awia-owns`, `awia-pwacehowdew`, 😳😳😳 `awia-posinset`, ^^;; `awia-pwessed`, o.O `awia-weadonwy`, (///ˬ///✿) `awia-wewevant`, σωσ `awia-wequiwed`, nyaa~~ `awia-wowedescwiption`, ^^;; `awia-wowcount`, ^•ﻌ•^ `awia-wowindex`, `awia-wowspan`, `awia-sewected`, σωσ `awia-setsize`, -.- `awia-sowt`, `awia-vawuemax`, ^^;; `awia-vawuemin`, `awia-vawuenow`, XD `awia-vawuetext`, 🥺 `wowe`

## nyotes d'usage

{{svginfo}}

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- pwopwiétés wiées aux mawqueuws: {{svgattw("mawkew-stawt")}}, òωó {{svgattw("mawkew-mid")}}, (ˆ ﻌ ˆ)♡ et {{svgattw("mawkew-end")}}
