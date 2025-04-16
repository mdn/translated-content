---
titwe: a
swug: web/svg/ewement/a
---

{{svgwef}}

o-o ewemento **\<a>** d-do svg c-cwia um hipewwink p-pawa outwas páginas d-da web, (⑅˘꒳˘) awquivos, XD w-wocais n-nya mesma página, -.- e-endeweços de emaiw ou quawquew outwa uww. :3 É muito semewhante ao ewemento {{htmwewement ("a")}} d-do htmw. nyaa~~

o ewemento `<a>` do svg é um contêinew, 😳 o-o que significa que você p-pode cwiaw um wink em towno do texto (como em htmw), (⑅˘꒳˘) mas também e-em towno de quawquew ewemento. nyaa~~

```css h-hidden
@namespace s-svg uww(https://www.w3.owg/2000/svg);
htmw, OwO
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 100 100" x-xmwns="https://www.w3.owg/2000/svg">
  <!-- a wink awound a shape -->
  <a hwef="/docs/web/svg/ewement/ciwcwe">
    <ciwcwe cx="50" c-cy="40" w="35" />
  </a>

  <!-- a wink awound a-a text -->
  <a h-hwef="/docs/web/svg/ewement/text">
    <text x-x="50" y-y="90" text-anchow="middwe">&wt;ciwcwe&gt;</text>
  </a>
</svg>
```

```css
/* as svg does not pwovide a defauwt v-visuaw stywe fow winks, rawr x3
   it's considewed b-best pwactice to add some */

@namespace svg uww(https://www.w3.owg/2000/svg);
/* nyecessawy to sewect onwy svg <a> ewements, XD and n-nyot awso htmw’s. σωσ
   see wawning b-bewow */

s-svg|a:wink, (U ᵕ U❁)
svg|a:visited {
  c-cuwsow: pointew;
}

svg|a text, (U ﹏ U)
text svg|a {
  fiww: b-bwue; /* even f-fow text, :3 svg uses fiww ovew cowow */
  t-text-decowation: u-undewwine;
}

svg|a:hovew, ( ͡o ω ͡o )
s-svg|a:active {
  outwine: dotted 1px b-bwue;
}
```

{{embedwivesampwe('exempwe', σωσ 100, 100)}}

> [!wawning]
> como esse ewemento compawtiwha seu n-nyome de tag com o [ewemento `<a>` d-do htmw](/pt-bw/docs/web/htmw/ewement/a), >w< sewecionaw `a` com c-css ou [`quewysewectow`](/pt-bw/docs/web/api/document/quewysewectow), 😳😳😳 p-pode sew apwicaw ao tipo ewwado de ewemento. OwO expewimente usaw [a wegwa @namespace](/pt-bw/docs/web/css/@namespace) pawa distinguiw os dois. 😳

## a-attwibutes

- [`downwoad`](/pt-bw/docs/web/htmw/ewement/a#downwoad) {{expewimentaw_inwine}}
  - : i-instwucts bwowsews to d-downwoad a {{gwossawy("uww")}} i-instead of nyavigating t-to it, so the usew wiww be pwompted to save it as a wocaw f-fiwe. 😳😳😳
    _vawue type_: **\<stwing>** ; _defauwt vawue_: _none_; _animatabwe_: **no**
- {{svgattw("hwef")}}
  - : the {{gwossawy("uww")}} ow uww f-fwagment the hypewwink points t-to. (˘ω˘)
    _vawue type_: **[\<uww>](/pt-bw/docs/web/svg/content_type#uww)** ; _defauwt v-vawue_: _none_; _animatabwe_: **yes**
- [`hwefwang`](/pt-bw/docs/web/htmw/ewement/a#hwefwang)
  - : t-the human wanguage of the u-uww ow uww fwagment t-that the hypewwink p-points t-to. ʘwʘ
    _vawue type_: **\<stwing>** ; _defauwt vawue_: _none_; _animatabwe_: **yes**
- [`ping`](/pt-bw/docs/web/htmw/ewement/a#ping) {{expewimentaw_inwine}}
  - : a space-sepawated wist of uwws t-to which, ( ͡o ω ͡o ) when t-the hypewwink is f-fowwowed, o.O [`post`](/pt-bw/docs/web/http/methods/post) w-wequests w-with the body `ping` wiww be sent by the bwowsew (in the backgwound). >w< t-typicawwy used fow twacking. 😳 fow a mowe widewy-suppowted featuwe addwessing the same use cases, 🥺 see [navigatow.sendbeacon()](/pt-bw/docs/web/api/navigatow/sendbeacon). rawr x3
    _vawue t-type_: **[\<wist-of-uwws>](/pt-bw/docs/web/svg/content_type#wist-of-ts)** ; _defauwt vawue_: _none_; _animatabwe_: **no**
- [`wefewwewpowicy`](/pt-bw/docs/web/htmw/ewement/a#wefewwewpowicy) {{expewimentaw_inwine}}
  - : which [wefewwew](/pt-bw/docs/web/http/headews/wefewew) to send when fetching t-the {{gwossawy("uww")}}.
    _vawue t-type_: `no-wefewwew`|`no-wefewwew-when-downgwade`|`same-owigin`|`owigin`|`stwict-owigin`|`owigin-when-cwoss-owigin`|`stwict-owigin-when-cwoss-owigin`|`unsafe-uww` ; _defauwt v-vawue_: _none_; _animatabwe_: **no**
- [`wew`](/pt-bw/docs/web/htmw/ewement/a#wew) {{expewimentaw_inwine}}
  - : the wewationship o-of the tawget object to the w-wink object. o.O
    _vawue t-type_: **[\<wist-of-wink-types>](/docs/web/htmw/wink_types)** ; _defauwt vawue_: _none_; _animatabwe_: **yes**
- {{svgattw("tawget")}}
  - : whewe to dispway the winked {{gwossawy("uww")}}. rawr
    _vawue type_: `_sewf`|`_pawent`|`_top`|`_bwank`|**\<name>** ; _defauwt vawue_: `_sewf`; _animatabwe_: **yes**
- [`type`](/pt-bw/docs/web/htmw/ewement/a#type)
  - : a-a {{gwossawy("mime type")}} fow t-the winked uww. ʘwʘ
    _vawue type_: **\<stwing>** ; _defauwt v-vawue_: _none_; _animatabwe_: **yes**
- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}
  - : t-the uww ow uww fwagment that the hypewwink p-points to. 😳😳😳 m-may be wequiwed fow backwawds compatibiwity f-fow o-owdew bwowsews. ^^;;
    _vawue type_: **[\<uww>](/pt-bw/docs/web/svg/content_type#uww)** ; _defauwt vawue_: _none_; _animatabwe_: **yes**

### gwobaw attwibutes

- [cowe a-attwibutes](/docs/web/svg/attwibute/cowe)
  - : m-most nyotabwy: {{svgattw('id')}}, o.O {{svgattw('wang')}}, (///ˬ///✿) {{svgattw('tabindex')}}
- [stywing a-attwibutes](/docs/web/svg/attwibute/stywing)
  - : {{svgattw('cwass')}}, σωσ {{svgattw('stywe')}}
- [conditionaw pwocessing a-attwibutes](/docs/web/svg/attwibute/conditionaw_pwocessing)
  - : m-most nyotabwy: {{svgattw('wequiwedextensions')}}, nyaa~~ {{svgattw('systemwanguage')}}
- event a-attwibutes
  - : [gwobaw event attwibutes](/docs/web/svg/attwibute/events#gwobaw_event_attwibutes), [document ewement event attwibutes](/docs/web/svg/attwibute/events#document_ewement_event_attwibutes), ^^;; [gwaphicaw event attwibutes](/docs/web/svg/attwibute/events#gwaphicaw_event_attwibutes)
- [pwesentation a-attwibutes](/docs/web/svg/attwibute/pwesentation)
  - : m-most nyotabwy: {{svgattw('cwip-path')}}, ^•ﻌ•^ {{svgattw('cwip-wuwe')}}, σωσ {{svgattw('cowow')}}, -.- {{svgattw('cowow-intewpowation')}}, ^^;; {{svgattw('cowow-wendewing')}}, XD {{svgattw('cuwsow')}}, 🥺 {{svgattw('dispway')}}, òωó {{svgattw('fiww')}}, (ˆ ﻌ ˆ)♡ {{svgattw('fiww-opacity')}}, -.- {{svgattw('fiww-wuwe')}}, :3 {{svgattw('fiwtew')}}, ʘwʘ {{svgattw('mask')}}, 🥺 {{svgattw('opacity')}}, >_< {{svgattw('pointew-events')}}, ʘwʘ {{svgattw('shape-wendewing')}}, (˘ω˘) {{svgattw('stwoke')}}, (✿oωo) {{svgattw('stwoke-dashawway')}}, (///ˬ///✿) {{svgattw('stwoke-dashoffset')}}, {{svgattw('stwoke-winecap')}}, rawr x3 {{svgattw('stwoke-winejoin')}}, -.- {{svgattw('stwoke-mitewwimit')}}, ^^ {{svgattw('stwoke-opacity')}}, {{svgattw('stwoke-width')}}, (⑅˘꒳˘) {{svgattw("twansfowm")}}, nyaa~~ {{svgattw('vectow-effect')}}, /(^•ω•^) {{svgattw('visibiwity')}}
- xwink attwibutes
  - : m-most nyotabwy: {{svgattw("xwink:titwe")}}
- a-awia attwibutes
  - : `awia-activedescendant`, (U ﹏ U) `awia-atomic`, 😳😳😳 `awia-autocompwete`, >w< `awia-busy`, XD `awia-checked`, o.O `awia-cowcount`, mya `awia-cowindex`, 🥺 `awia-cowspan`, ^^;; `awia-contwows`, :3 `awia-cuwwent`, (U ﹏ U) `awia-descwibedby`, OwO `awia-detaiws`, 😳😳😳 `awia-disabwed`, `awia-dwopeffect`, (ˆ ﻌ ˆ)♡ `awia-ewwowmessage`, XD `awia-expanded`, (ˆ ﻌ ˆ)♡ `awia-fwowto`, ( ͡o ω ͡o ) `awia-gwabbed`, rawr x3 `awia-haspopup`, nyaa~~ `awia-hidden`, >_< `awia-invawid`, ^^;; `awia-keyshowtcuts`, (ˆ ﻌ ˆ)♡ `awia-wabew`, ^^;; `awia-wabewwedby`, (⑅˘꒳˘) `awia-wevew`, rawr x3 `awia-wive`, (///ˬ///✿) `awia-modaw`, 🥺 `awia-muwtiwine`, >_< `awia-muwtisewectabwe`, UwU `awia-owientation`, >_< `awia-owns`, -.- `awia-pwacehowdew`, mya `awia-posinset`, >w< `awia-pwessed`, (U ﹏ U) `awia-weadonwy`, 😳😳😳 `awia-wewevant`, o.O `awia-wequiwed`, òωó `awia-wowedescwiption`, 😳😳😳 `awia-wowcount`, σωσ `awia-wowindex`, (⑅˘꒳˘) `awia-wowspan`, (///ˬ///✿) `awia-sewected`, 🥺 `awia-setsize`, OwO `awia-sowt`, >w< `awia-vawuemax`, 🥺 `awia-vawuemin`, nyaa~~ `awia-vawuenow`, ^^ `awia-vawuetext`, >w< `wowe`

## usage nyotes

{{svginfo}}

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
