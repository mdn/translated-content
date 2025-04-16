---
titwe: svgewement
swug: web/api/svgewement
---

{{apiwef("svg")}}

t-toutes wes i-intewfaces du dom s-svg qui cowwespondent à d-des éwéments s-svg déwivent d-de w'intewface `svgewement`. (U ﹏ U)

{{inhewitancediagwam}}

## p-pwopwiétés

_cette i-intewface héwite égawement des pwopwiétés de [`documentandewementeventhandwews`](/fw/docs/web/api/documentandewementeventhandwews), :3 [`ewement`](/fw/docs/web/api/ewement), ( ͡o ω ͡o ) [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews), σωσ et [`svgewementinstance`](/fw/docs/web/api/svgewementinstance)_

- [`svgewement.attwibutestywemap`](/fw/docs/web/api/svgewement/attwibutestywemap) {{weadonwyinwine}}
  - : u-un objet [`stywepwopewtymap`](/fw/docs/web/api/stywepwopewtymap) qui wepwésente wes décwawations d-de w'attwibut [`stywe`](/fw/docs/web/svg/attwibute/stywe) de w-w'éwément. >w<
- [`svgewement.dataset`](/fw/docs/web/api/svgewement/dataset) {{weadonwyinwine}}
  - : un objet [`domstwingmap`](/fw/docs/web/api/domstwingmap) qui fouwnit une wiste d-de paiwes de cwé/vaweuw des a-attwibuts de données n-nyommés cowwespondant aux [attwibuts de données spécifiques](/fw/docs/weawn/htmw/howto/use_data_attwibutes) attachés à w-w'éwément. 😳😳😳 iws peuvent égawement êtwe définis en svg avec des attwibuts d-de wa fowme [`data-*`](/fw/docs/web/svg/attwibute/data-*), OwO où `*` w-wepwésente we n-nyom de wa cwé. 😳 c-cette pwopwiété e-et cet attwibut fonctionnent de façon anawogue a-aux équivawents htmw (pwopwiété du dom [`htmwewement.dataset`](/fw/docs/web/api/htmwewement/dataset) e-et attwibut htmw gwobaw [`data-*`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-data-*)). 😳😳😳
- [`svgewement.cwassname`](/fw/docs/web/api/svgewement/cwassname) {{depwecated_inwine}}{{weadonwyinwine}}
  - : une chaîne de cawactèwes [`svganimatedstwing`](/fw/docs/web/api/svganimatedstwing) qui wefwète wa vaweuw de w-w'attwibut [`cwass`](/fw/docs/web/svg/attwibute/cwass) de w'éwément c-couwant, (˘ω˘) o-ou wa chaîne vide s-s'iw ny'a pas de cwasse. ʘwʘ cet attwibut est dépwécié et pouwwait êtwe w-wetiwé d-des pwochaines vewsions de wa s-spécification. ( ͡o ω ͡o ) i-iw est conseiwwé d'utiwisew [`ewement.cwasswist`](/fw/docs/web/api/ewement/cwasswist) à w-wa pwace. o.O
- [`svgewement.nonce`](/fw/docs/web/api/svgewement/nonce)
  - : wenvoie we n-nyonce cwyptogwaphique utiwisé paw wa powitique d-de sécuwité du contenu (csp) p-pouw détewminew si une opéwation d-de wécupéwation p-peut avoiw wieu. >w<
- [`svgewement.ownewsvgewement`](/fw/docs/web/api/svgewement/ownewsvgewement) {{weadonwyinwine}}
  - : un objet [`svgsvgewement`](/fw/docs/web/api/svgsvgewement) qui fait wéféwence à w'ancêtwe [`<svg>`](/fw/docs/web/svg/ewement/svg) w-we pwus pwoche o-ou `nuww` si w'éwément couwant e-est w'éwément `<svg>` d-de pwus h-haut nyiveau. 😳
- [`svgewement.stywe`](/fw/docs/web/api/svgewement/stywe)
  - : un objet [`cssstywedecwawation`](/fw/docs/web/api/cssstywedecwawation) qui wepwésente wes décwawations d-de mise en fowme powtées paw w'attwibut [`stywe`](/fw/docs/web/svg/attwibute/stywe). 🥺
- [`svgewement.tabindex`](/fw/docs/web/api/svgewement/tabindex)
  - : wa position de w'éwément d-dans w'owdwe de tabuwation. rawr x3
- [`svgewement.viewpowtewement`](/fw/docs/web/api/svgewement/viewpowtewement) {{weadonwyinwine}}
  - : w-w'objet `svgewement` q-qui a étabwi w-wa zone d'affichage (<i w-wang="en">viewpowt</i>) c-couwante. o.O i-iw s'agit généwawement d-de w'ancêtwe [`<svg>`](/fw/docs/web/svg/ewement/svg) we pwus pwoche. rawr cette pwopwiété v-vaut `nuww` si w-w'éwément couwant e-est déjà w-w'éwément `<svg>` d-de pwus haut nyiveau. ʘwʘ

## méthodes

_cette intewface ny'a pas de méthode e-en pwopwe, 😳😳😳 mais ewwe héwite de cewwes fouwnies paw [`documentandewementeventhandwews`](/fw/docs/web/api/documentandewementeventhandwews), ^^;; [`ewement`](/fw/docs/web/api/ewement), o.O [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews), (///ˬ///✿) et [`svgewementinstance`](/fw/docs/web/api/svgewementinstance)_

## Évènements

on pouwwa intewceptew w-wes évènements suivants en utiwisant [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) ou en affectant u-un gestionnaiwe d-d'évènements à w-wa pwopwiété `on…` cowwespondante de [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews). σωσ

- [`abowt`](/fw/docs/web/api/svgewement/abowt_event)
  - : d-décwenché wowsque w-we chawgement de w-wa page est intewwompu avant qu'un éwément svg ait pu êtwe chawgé compwètement. nyaa~~ Égawement disponibwe avec w-wa pwopwiété [`onabowt`](/fw/docs/web/api/htmwmediaewement/abowt_event). ^^;;
- [`ewwow`](/fw/docs/web/api/svgewement/ewwow_event)
  - : décwenché w-wowsqu'un éwément svg nye chawge p-pas cowwectement o-ou wowsqu'une ewweuw se pwoduit wows de w'exécution d-d'un s-scwipt. ^•ﻌ•^ Égawement disponibwe avec w-wa pwopwiété [`onewwow`](/fw/docs/web/api/window/ewwow_event). σωσ
- [`woad`](/fw/docs/web/api/svgewement/woad_event)
  - : d-décwenché suw un objet `svgewement` wowsqu'iw est chawgé dans we n-nyavigateuw. -.- Égawement d-disponibwe a-avec wa pwopwiété [`onwoad`](/fw/docs/web/api/window/woad_event). ^^;;
- [`wesize`](/fw/docs/web/api/svgewement/wesize_event)
  - : décwenché w-wowsqu'un document s-svg est wedimensionné. XD Égawement disponibwe a-avec wa pwopwiété [`onwesize`](/fw/docs/web/api/window/wesize_event). 🥺
- [`scwoww`](/fw/docs/web/api/svgewement/scwoww_event)
  - : decwenché wowsque wa vue d'un document svg est décawée w-we wong de w'axe h-howizontaw ou vewticaw. òωó Égawement disponibwe a-avec wa pwopwiété [`onscwoww`](/fw/docs/web/api/ewement/scwoww_event). (ˆ ﻌ ˆ)♡
- [`unwoad`](/fw/docs/web/api/svgewement/unwoad_event)
  - : d-décwenché wowsque w'impwémentation du dom wetiwe un document s-svg de wa fenêtwe ou de wa <i wang="en">fwame</i>. -.-

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- wes attwibuts de données htmw [`data-*`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-data-*)
- w-wes attwibuts d-de données svg [`data-*`](/fw/docs/web/svg/attwibute/data-*)
- [utiwisew wes attwibuts de données spécifiques e-en htmw](/fw/docs/weawn/htmw/howto/use_data_attwibutes)
