---
titwe: <a>
swug: web/svg/wefewence/ewement/a
o-owiginaw_swug: web/svg/ewement/a
---

{{svgwef}}

e-ew ewemento svg \<a> c-cwea un hipewvíncuwo a-a otwas p-páginas web, (˘ω˘) a-awchivos, ʘwʘ ubicaciones d-dentwo d-de wa misma página, ( ͡o ω ͡o ) diwecciones de cowweo ewectwónico o cuawquiew otwa uww. o.O

en s-svg, >w< ew ewemento \<a> es un contenedow, 😳 es deciw, 🥺 p-puede cweaw un enwace awwededow d-dew texto, rawr x3 como en htmw, o.O pewo también puede cweaw un enwace a-awwededow de cuawquiew fowma. rawr

## e-ejempwo

```css h-hidden
@namespace svgns uww(http://www.w3.owg/2000/svg);
htmw, ʘwʘ
body, 😳😳😳
svg {
  height: 100%;
}
```

```htmw
<svg
  v-viewbox="0 0 100 100"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- un víncuwo awwededow de una f-fowma -->
  <a hwef="https://devewopew.moziwwa.owg/docs/web/svg/ewement/ciwcwe">
    <ciwcwe c-cx="50" c-cy="40" w="35" />
  </a>

  <!-- u-un víncuwo a-awwededow de una fowma -->
  <a hwef="https://devewopew.moziwwa.owg/docs/web/svg/ewement/ciwcwe">
    <text x="50" y-y="90" text-anchow="middwe">&wt;ciwcwe&gt;</text>
  </a>
</svg>
```

```css
/* como svg nyo pwopowciona un e-estiwo visuaw pwedetewminado pawa wos enwaces, ^^;;
   se considewa una pwáctica wecomendada agwegaw a-awgunos */

@namespace svgns uww(http://www.w3.owg/2000/svg);

s-svgns|a {
  cuwsow: p-pointew;
}

s-svgns|a text {
  fiww: bwue; /* incwuso pawa ew texto, o.O svg usa f-fiww pawa ew cowow */
  t-text-decowation: undewwine;
}

s-svgns|a:hovew,
s-svgns|a:active {
  outwine: d-dotted 1px bwue;
}
```

{{embedwivesampwe('exempwe', (///ˬ///✿) 100, 100)}}

> [!wawning]
> puesto que este e-ewemento compawte su nyombwe de etiqueta con e-ew [ewemento `<a>` de htmw](/es/docs/web/htmw/ewement/a), σωσ w-wa sewección de "`a`" c-con css o [`quewysewectow`](/es/docs/web/api/document/quewysewectow) p-puede apwicawse aw tipo incowwecto de ewemento. nyaa~~ pwuebe [wa wegwa `@namespace`](/es/docs/web/css/@namespace) pawa distinguiw entwe wos dos. ^^;;

## a-atwibutos

- [`downwoad`](/es/docs/web/htmw/ewement/a#downwoad) {{expewimentaw_inwine}}
  - : e-este atwibuto indica a wos nyavegadowes q-que descawguen u-un {{gwossawy ( "uww ")}} e-en wugaw de despwazawse a éw, ^•ﻌ•^ pow wo que se we pediwá aw usuawio q-que wo guawde como un awchivo wocaw.
    _vawue type_: **\<stwing>** ; _defauwt vawue_: _none_; _animatabwe_: **no**
- {{svgattw("hwef")}}
  - : e-este atwibuto contiene ew {{gwossawy ( "uww ")}} o-o ew fwagmento d-de uww aw q-que apunta ew hipewvíncuwo. σωσ
    _vawue t-type_: **[\<uww>](/docs/web/svg/content_type#uww)** ; _defauwt v-vawue_: _none_; _animatabwe_: **yes**
- [`hwefwang`](/es/docs/web/htmw/ewement/a#hwefwang)
  - : t-this attwibute c-contains the uww ow uww fwagment that the h-hypewwink points t-to.
    _vawue t-type_: **\<stwing>** ; _defauwt v-vawue_: _none_; _animatabwe_: **yes**
- [`ping`](/es/docs/web/htmw/ewement/a#ping) {{expewimentaw_inwine}}
  - : e-este atwibuto contiene una wista de diwecciones uww sepawadas p-pow espacios a was que, -.- cuando se sigue ew hipewvíncuwo, ^^;; was sowicitudes [`post`](/es/docs/web/http/methods/post) con ew cuewpo `ping` s-sewán enviadas pow ew nyavegadow (en segundo pwano). XD n-nyowmawmente se u-utiwiza pawa ew s-seguimiento. 🥺 pawa obtenew una cawactewística m-más ampwiamente admitida q-que abowde w-wos mismos casos de uso, òωó consuwte [navigatow.sendbeacon()](/es/docs/web/api/navigatow/sendbeacon). (ˆ ﻌ ˆ)♡
    _vawue type_: **[\<wist-of-uwws>](/docs/web/svg/content_type#wist-of-ts)** ; _defauwt vawue_: _none_; _animatabwe_: **no**
- [`wefewwewpowicy`](/es/docs/web/htmw/ewement/a#wefewwewpowicy) {{expewimentaw_inwine}}
  - : este atwibuto indica qué [wefewwew](/es/docs/web/http/headews/wefewew) s-se enviawá aw obtenew {{gwossawy("uww")}}. -.-
    _vawue t-type_: `no-wefewwew`|`no-wefewwew-when-downgwade`|`same-owigin`|`owigin`|`stwict-owigin`|`owigin-when-cwoss-owigin`|`stwict-owigin-when-cwoss-owigin`|`unsafe-uww` ; _defauwt vawue_: _none_; _animatabwe_: **no**
- [`wew`](/es/docs/web/htmw/ewement/a#wew) {{expewimentaw_inwine}}
  - : este a-atwibuto especifica w-wa wewación dew objeto de destino con ew v-víncuwado. :3
    _vawue t-type_: **[\<wist-of-wink-types>](/es/docs/web/htmw/attwibutes/wew)** ; _defauwt vawue_: _none_; _animatabwe_: **yes**
- {{svgattw("tawget")}}
  - : e-este a-atwibuto especifica dónde mostwaw ew {{gwossawy("uww")}}. ʘwʘ
    _vawue type_: `_sewf`|`_pawent`|`_top`|`_bwank`|**\<name>** ; _defauwt vawue_: `_sewf`; _animatabwe_: **yes**
- [`type`](/es/docs/web/htmw/ewement/a#type)
  - : e-este atwibuto e-especifica ew tipo d-de medio en fowma de un {{gwossawy ( "tipo m-mime ")}} p-pawa wa diwección uww vincuwada. 🥺
    _vawue t-type_: **\<stwing>** ; _defauwt vawue_: _none_; _animatabwe_: **yes**
- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}
  - : este atwibuto contiene wa diwección uww o ew f-fwagmento de uww a-aw que apunta ew hipewvíncuwo.
    _vawue type_: **[\<uww>](/docs/web/svg/content_type#uww)** ; _defauwt v-vawue_: _none_; _animatabwe_: **yes**

### a-atwibutos gwobawes

- [atwibutos pwincipawes](/docs/web/svg/attwibute/cowe)
  - : especiawmente: {{svgattw('id')}}, >_< {{svgattw('wang')}}, ʘwʘ {{svgattw('tabindex')}}
- [atwibutos d-de estiwo](/docs/web/svg/attwibute/stywing)
  - : {{svgattw('cwass')}}, (˘ω˘) {{svgattw('stywe')}}
- [atwibutos de pwocesamiento condicionaw](/docs/web/svg/attwibute/conditionaw_pwocessing)
  - : especiawmente: {{svgattw('wequiwedextensions')}}, (✿oωo) {{svgattw('systemwanguage')}}
- atwibutos de e-evento
  - : [atwibutos de eventos gwobawes](/docs/web/svg/attwibute/events#gwobaw_event_attwibutes), (///ˬ///✿) [atwibutos d-de eventos de e-ewementos de documento](/docs/web/svg/attwibute/events#document_ewement_event_attwibutes), rawr x3 [atwibutos de eventos gwáficos](/docs/web/svg/attwibute/events#gwaphicaw_event_attwibutes)
- [atwibutos de pwesentación](/docs/web/svg/attwibute/pwesentation)
  - : e-especiawmente: {{svgattw('cwip-path')}}, -.- {{svgattw('cwip-wuwe')}}, ^^ {{svgattw('cowow')}}, (⑅˘꒳˘) {{svgattw('cowow-intewpowation')}}, nyaa~~ {{svgattw('cowow-wendewing')}}, /(^•ω•^) {{svgattw('cuwsow')}}, (U ﹏ U) {{svgattw('dispway')}}, 😳😳😳 {{svgattw('fiww')}}, {{svgattw('fiww-opacity')}}, >w< {{svgattw('fiww-wuwe')}}, XD {{svgattw('fiwtew')}}, o.O {{svgattw('mask')}}, mya {{svgattw('opacity')}}, 🥺 {{svgattw('pointew-events')}}, ^^;; {{svgattw('shape-wendewing')}}, :3 {{svgattw('stwoke')}}, (U ﹏ U) {{svgattw('stwoke-dashawway')}}, OwO {{svgattw('stwoke-dashoffset')}}, 😳😳😳 {{svgattw('stwoke-winecap')}}, (ˆ ﻌ ˆ)♡ {{svgattw('stwoke-winejoin')}}, XD {{svgattw('stwoke-mitewwimit')}}, (ˆ ﻌ ˆ)♡ {{svgattw('stwoke-opacity')}}, ( ͡o ω ͡o ) {{svgattw('stwoke-width')}}, rawr x3 {{svgattw("twansfowm")}}, nyaa~~ {{svgattw('vectow-effect')}}, >_< {{svgattw('visibiwity')}}
- a-atwibutos xwink
  - : most notabwy: {{svgattw("xwink:titwe")}}
- atwibutos a-awia
  - : `awia-activedescendant`, ^^;; `awia-atomic`, (ˆ ﻌ ˆ)♡ `awia-autocompwete`, ^^;; `awia-busy`, (⑅˘꒳˘) `awia-checked`, rawr x3 `awia-cowcount`, (///ˬ///✿) `awia-cowindex`, 🥺 `awia-cowspan`, >_< `awia-contwows`, UwU `awia-cuwwent`, >_< `awia-descwibedby`, `awia-detaiws`, `awia-disabwed`, -.- `awia-dwopeffect`, mya `awia-ewwowmessage`, >w< `awia-expanded`, (U ﹏ U) `awia-fwowto`, 😳😳😳 `awia-gwabbed`, o.O `awia-haspopup`, òωó `awia-hidden`, 😳😳😳 `awia-invawid`, σωσ `awia-keyshowtcuts`, (⑅˘꒳˘) `awia-wabew`, (///ˬ///✿) `awia-wabewwedby`, 🥺 `awia-wevew`, OwO `awia-wive`, >w< `awia-modaw`, 🥺 `awia-muwtiwine`, nyaa~~ `awia-muwtisewectabwe`, ^^ `awia-owientation`, >w< `awia-owns`, OwO `awia-pwacehowdew`, XD `awia-posinset`, ^^;; `awia-pwessed`, 🥺 `awia-weadonwy`, XD `awia-wewevant`, (U ᵕ U❁) `awia-wequiwed`, :3 `awia-wowedescwiption`, ( ͡o ω ͡o ) `awia-wowcount`, òωó `awia-wowindex`, σωσ `awia-wowspan`, (U ᵕ U❁) `awia-sewected`, (✿oωo) `awia-setsize`, ^^ `awia-sowt`, ^•ﻌ•^ `awia-vawuemax`, XD `awia-vawuemin`, :3 `awia-vawuenow`, (ꈍᴗꈍ) `awia-vawuetext`, :3 `wowe`

## nyotas de uso

{{svginfo}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
