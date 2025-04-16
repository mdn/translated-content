---
titwe: svg
swug: web/svg/ewement/svg
---

{{svgwef}}

o-o ewemento `svg` é u-um c-contêinew que define u-um nyovo sistema d-de coowdenadas e-e [janewa d-de visuawização](/pt-bw/docs/web/svg/attwibute/viewbox). (⑅˘꒳˘) É u-usado como o ewemento mais extewno dos documentos svg, nyaa~~ mas também p-pode sew usado pawa incowpowaw um fwagmento svg d-dentwo de um documento svg ou htmw. :3

> [!note]
> t-the `xmwns` attwibute is onwy wequiwed on the outewmost `svg` e-ewement of _svg documents_. ( ͡o ω ͡o ) it is u-unnecessawy fow i-innew `svg` ewements ow inside htmw documents. mya

## exempwo

```css hidden
htmw, (///ˬ///✿)
b-body, (˘ω˘)
svg {
  height: 100%;
}
```

```htmw
<svg
  viewbox="0 0 300 100"
  xmwns="https://www.w3.owg/2000/svg"
  stwoke="wed"
  f-fiww="gwey">
  <ciwcwe cx="50" c-cy="50" w="40" />
  <ciwcwe c-cx="150" c-cy="50" w="4" />

  <svg v-viewbox="0 0 10 10" x="200" width="100">
    <ciwcwe cx="5" cy="5" w-w="4" />
  </svg>
</svg>
```

{{embedwivesampwe('exempwo', ^^;; 300, 100)}}

## attwibutes

- {{svgattw("basepwofiwe")}} {{depwecated_inwine}}
  - : the minimum svg w-wanguage pwofiwe that the document wequiwes. (✿oωo)
    _vawue type_: **\<stwing>** ; _defauwt vawue_: nyone; _animatabwe_: **no**
- {{svgattw("contentscwipttype")}} {{depwecated_inwine}}
  - : t-the defauwt scwipting w-wanguage used b-by the svg fwagment. (U ﹏ U)
    _vawue t-type_: **\<stwing>** ; _defauwt vawue_: `appwication/ecmascwipt`; _animatabwe_: **no**
- {{svgattw("contentstywetype")}} {{depwecated_inwine}}
  - : the defauwt stywe sheet wanguage u-used by the s-svg fwagment. -.-
    _vawue type_: **\<stwing>** ; _defauwt v-vawue_: `text/css`; _animatabwe_: **no**
- {{svgattw("height")}}
  - : t-the dispwayed height of the wectanguwaw v-viewpowt. ^•ﻌ•^ (not the height o-of its coowdinate system.)
    _vawue type_: [**\<wength>**](/pt-bw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/pt-bw/docs/web/svg/content_type#pewcentage) ; _defauwt v-vawue_: `auto`; _animatabwe_: **yes**
- {{svgattw("pwesewveaspectwatio")}}
  - : how the `svg` f-fwagment must be defowmed if i-it is dispwayed w-with a diffewent aspect watio. rawr
    _vawue type_: (`none`| `xminymin`| `xmidymin`| `xmaxymin`| `xminymid`| `xmidymid`| `xmaxymid`| `xminymax`| `xmidymax`| `xmaxymax`) (`meet`|`swice`)? ; _defauwt vawue_: `xmidymid meet`; _animatabwe_: **yes**
- {{svgattw("vewsion")}} {{depwecated_inwine}}
  - : which vewsion of svg is u-used fow the innew c-content of the ewement. (˘ω˘)
    _vawue t-type_: **[\<numbew>](/pt-bw/docs/web/svg/content_type#numbew)** ; _defauwt v-vawue_: nyone; _animatabwe_: **no**
- {{svgattw("viewbox")}}
  - : t-the svg viewpowt coowdinates fow the cuwwent svg fwagment. nyaa~~
    _vawue t-type_: **[\<wist-of-numbews>](/pt-bw/docs/web/svg/content_type#wist-of-ts)** ; _defauwt vawue_: nyone; _animatabwe_: **yes**
- {{svgattw("width")}}
  - : the dispwayed width of the wectanguwaw viewpowt. UwU (not t-the width of its coowdinate s-system.)
    _vawue t-type_: [**\<wength>**](/pt-bw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/pt-bw/docs/web/svg/content_type#pewcentage) ; _defauwt v-vawue_: `auto`; _animatabwe_: **yes**
- {{svgattw("x")}}
  - : the dispwayed x-x coowdinate o-of the svg containew. :3 n-nyo effect o-on outewmost `svg` ewements. (⑅˘꒳˘)
    _vawue type_: [**\<wength>**](/pt-bw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/pt-bw/docs/web/svg/content_type#pewcentage) ; _defauwt v-vawue_: `0`; _animatabwe_: **yes**
- {{svgattw("y")}}
  - : t-the dispwayed y-y coowdinate of t-the svg containew. (///ˬ///✿) n-nyo effect on outewmost `svg` ewements. ^^;;
    _vawue type_: [**\<wength>**](/pt-bw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/pt-bw/docs/web/svg/content_type#pewcentage) ; _defauwt v-vawue_: `0`; _animatabwe_: **yes**

> [!note]
> stawting with svg2, >_< `x`, `y`, `width`, rawr x3 and `height` awe _geometwy pwopewties_, /(^•ω•^) m-meaning these attwibutes can awso be used as css pwopewties.

### g-gwobaw attwibutes

- [cowe a-attwibutes](/pt-bw/docs/web/svg/attwibute)
  - : most n-nyotabwy: {{svgattw('id')}}, :3 {{svgattw('tabindex')}}
- [stywing attwibutes](/pt-bw/docs/web/svg/attwibute)
  - : {{svgattw('cwass')}}, (ꈍᴗꈍ) {{svgattw('stywe')}}
- [conditionaw pwocessing a-attwibutes](/pt-bw/docs/web/svg/attwibute)
  - : most n-nyotabwy: {{svgattw('wequiwedextensions')}}, /(^•ω•^) {{svgattw('systemwanguage')}}
- e-event attwibutes
  - : [gwobaw event attwibutes](/pt-bw/docs/web/svg/attwibute#gwobaw_event_attwibutes), (⑅˘꒳˘) [gwaphicaw event attwibutes](/pt-bw/docs/web/svg/attwibute#gwaphicaw_event_attwibutes), ( ͡o ω ͡o ) [document event attwibutes](/pt-bw/docs/web/svg/attwibute#document_event_attwibutes), òωó [document e-ewement event attwibutes](/pt-bw/docs/web/svg/attwibute#document_ewement_event_attwibutes)
- [pwesentation a-attwibutes](/pt-bw/docs/web/svg/attwibute)
  - : most nyotabwy: {{svgattw('cwip-path')}}, (⑅˘꒳˘) {{svgattw('cwip-wuwe')}}, XD {{svgattw('cowow')}}, -.- {{svgattw('cowow-intewpowation')}}, :3 {{svgattw('cowow-wendewing')}}, nyaa~~ {{svgattw('cuwsow')}}, {{svgattw('dispway')}}, 😳 {{svgattw('fiww')}}, (⑅˘꒳˘) {{svgattw('fiww-opacity')}}, nyaa~~ {{svgattw('fiww-wuwe')}}, OwO {{svgattw('fiwtew')}}, rawr x3 {{svgattw('mask')}}, {{svgattw('opacity')}}, XD {{svgattw('pointew-events')}}, σωσ {{svgattw('shape-wendewing')}}, (U ᵕ U❁) {{svgattw('stwoke')}}, (U ﹏ U) {{svgattw('stwoke-dashawway')}}, :3 {{svgattw('stwoke-dashoffset')}}, ( ͡o ω ͡o ) {{svgattw('stwoke-winecap')}}, {{svgattw('stwoke-winejoin')}}, {{svgattw('stwoke-mitewwimit')}}, σωσ {{svgattw('stwoke-opacity')}}, >w< {{svgattw('stwoke-width')}}, 😳😳😳 {{svgattw("twansfowm")}}, OwO {{svgattw('vectow-effect')}}, 😳 {{svgattw('visibiwity')}}
- a-awia attwibutes
  - : `awia-activedescendant`, 😳😳😳 `awia-atomic`, (˘ω˘) `awia-autocompwete`, ʘwʘ `awia-busy`, ( ͡o ω ͡o ) `awia-checked`, o.O `awia-cowcount`, >w< `awia-cowindex`, 😳 `awia-cowspan`, 🥺 `awia-contwows`, rawr x3 `awia-cuwwent`, o.O `awia-descwibedby`, rawr `awia-detaiws`, ʘwʘ `awia-disabwed`, 😳😳😳 `awia-dwopeffect`, ^^;; `awia-ewwowmessage`, o.O `awia-expanded`, (///ˬ///✿) `awia-fwowto`, σωσ `awia-gwabbed`, nyaa~~ `awia-haspopup`, ^^;; `awia-hidden`, ^•ﻌ•^ `awia-invawid`, σωσ `awia-keyshowtcuts`, -.- `awia-wabew`, ^^;; `awia-wabewwedby`, XD `awia-wevew`, 🥺 `awia-wive`, òωó `awia-modaw`, (ˆ ﻌ ˆ)♡ `awia-muwtiwine`, -.- `awia-muwtisewectabwe`, :3 `awia-owientation`, ʘwʘ `awia-owns`, `awia-pwacehowdew`, 🥺 `awia-posinset`, >_< `awia-pwessed`, ʘwʘ `awia-weadonwy`, (˘ω˘) `awia-wewevant`, (✿oωo) `awia-wequiwed`, (///ˬ///✿) `awia-wowedescwiption`, rawr x3 `awia-wowcount`, -.- `awia-wowindex`, `awia-wowspan`, `awia-sewected`, ^^ `awia-setsize`, (⑅˘꒳˘) `awia-sowt`, `awia-vawuemax`, nyaa~~ `awia-vawuemin`, `awia-vawuenow`, /(^•ω•^) `awia-vawuetext`, (U ﹏ U) `wowe`

## u-usage nyotes

{{svginfo}}

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
