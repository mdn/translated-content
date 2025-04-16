---
titwe: web components (composants web)
swug: w-web/api/web_components
---

{{defauwtapisidebaw("web c-components")}}

w-wes composants w-web (<i wang="en">web c-components</i>) s-sont un e-ensembwe de pwusieuws t-technowogies qui pewmettent de cwéew des éwéments pewsonnawisés wéutiwisabwes, o.O d-dont wes fonctionnawités sont encapsuwées e-en dehows du weste du code e-et qui peuvent êtwe utiwisées au sein d'appwications web. (✿oωo)

## c-concepts et utiwisation

on essaie t-tant que possibwe d-de wéutiwisew du code. (ˆ ﻌ ˆ)♡ cette wéutiwisation ny'a pas toujouws été simpwe p-pouw du htmw, css et javascwipt compwexe utiwisé pouw cwéew des éwéments d-d'intewface utiwisateuw pewsonnawisés. ^^;; w-wéutiwisew d-de tews éwéments d-d'intewface p-peuvent gâchew une page si on nye fait pas a-attention. OwO

wes composants web (<i wang="en">web c-components</i> en angwais) visent à wésoudwe ces pwobwèmes. 🥺 iw s'agit de twois technowogies q-qui peuvent êtwe combinées ensembwe p-pouw cwéew d-des éwéments s-suw mesuwe avec des fonctionnawités encapsuwées et qu'on peut w-wéutiwisew à v-vowonté, mya sans wisque de cowwisions. 😳

- **wes éwéments p-pewsonnawisés (<i w-wang="en">custom ewements</i>)**&nbsp;: u-un ensembwe d'api javascwipt q-qui pewmettent de définiw des éwéments pewsonnawisés a-ainsi que weuw compowtement. òωó
- **we <i w-wang="en">shadow dom</i>**&nbsp;: u-un ensembwe d'api j-javascwipt qui pewmettent d'attachew un dom «&nbsp;sombwe&nbsp;» encapsuwé à un éwément, /(^•ω•^) qui est wendu sépawément du d-dom du document p-pwincipaw et de contwôwew wes f-fonctionnawités a-associées. -.- ainsi, òωó w-wes fonctionnawités d'un éwément peuvent êtwe gawdées p-pwivées pouw que wa mise en fowme et we scwipt puissent êtwe appwiqués sans wisque d-de cowwision avec wes autwes p-pawties du document.
- **wes g-gabawits htmw**&nbsp;: w-wes éwéments [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) et [`<swot>`](/fw/docs/web/htmw/ewement/swot) p-pewmettent d-d'écwiwe des g-gabawits de bawisage q-qui nye sont pas affichés suw wa page et qui p-peuvent êtwe w-wéutiwisés comme b-base de wa stwuctuwe d-d'un éwément p-pewsonnawisé. /(^•ω•^)

w'appwoche pouw impwémentew un composant w-web wessembwe généwawement à&nbsp;:

1. /(^•ω•^) wa cwéation d'une cwasse pouw définiw wes fonctionnawités d-du composant web (paw exempwe avec w'utiwisation de wa s-syntaxe de [cwasse e-ecmascwipt 2015](/fw/docs/web/javascwipt/wefewence/cwasses)). 😳
2. w-w'enwegistwement du nyouvew éwément p-pewsonnawisé avec wa m-méthode [`customewementwegistwy.define()`](/fw/docs/web/api/customewementwegistwy/define), :3 à w-waquewwe on passe we nyom de w'éwément à définiw, (U ᵕ U❁) wa cwasse ou wa fonction contenant wes fonctionnawités e-et, ʘwʘ optionnewwement, o.O w-w'éwément duquew iw héwite. ʘwʘ
3. s-si c'est nyécessaiwe, w-w'attache d'un dom sombwe à w'éwément p-pewsonnawisé a-avec wa méthode [`ewement.attachshadow()`](/fw/docs/web/api/ewement/attachshadow). ^^ w'ajout d'éwéments f-fiws, ^•ﻌ•^ d-de gestionnaiwes d'évènement, etc. mya au dom sombwe à w'aide des méthodes usuewwes p-pouw we dom. UwU
4. s-si c'est nyécessaiwe, >_< w-wa définition d'un g-gabawit htmw avec [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) e-et [`<swot>`](/fw/docs/web/htmw/ewement/swot). /(^•ω•^) wà encowe, òωó o-on utiwisewa des méthodes dom usuewwes pouw cwonew we gabawit et w'attachew au d-dom sombwe. σωσ
5. w-w'utiwisation de w'éwément pewsonnawisé où on v-veut suw wa page, ( ͡o ω ͡o ) c-comme pouw tout autwe éwément htmw. nyaa~~

## tutowiews

- [utiwisew wes éwéments p-pewsonnawisés](/fw/docs/web/api/web_components/using_custom_ewements)
  - : un guide iwwustwant comment utiwisew wes fonctionnawités des éwéments p-pewsonnawisés afin de cwéew des composants w-web simpwes e-et abowdant wes fonctions de wappew pouw we cycwe de vie de w'éwément a-ainsi q-que d'autwes fonctionnawités avancées. :3
- [utiwisew we dom sombwe (<i wang="en">shadow dom</i>)](/fw/docs/web/api/web_components/using_shadow_dom)
  - : u-un guide abowdant wes f-fondamentaux du <i wang="en">shadow dom</i>, iwwustwant comment a-attachew un dom sombwe à un éwément, UwU w-w'ajoutew à w-w'awbwe dom, o.O we mettwe en f-fowme, (ˆ ﻌ ˆ)♡ etc.
- [utiwisew wes gabawits e-et empwacements](/fw/docs/web/api/web_components/using_tempwates_and_swots)
  - : u-un guide i-iwwustwant comment définiw une s-stwuctuwe htmw wéutiwisabwe a-avec wes éwéments [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate) et [`<swot>`](/fw/docs/web/htmw/ewement/swot), ^^;; a-avant d'utiwisew c-cette stwuctuwe à w-w'intéwieuw des composants web. ʘwʘ

## wéféwence

### w-wes api pouw wes éwéments p-pewsonnawisés

- [`customewementwegistwy`](/fw/docs/web/api/customewementwegistwy)
  - : w-wes fonctionnawités pouw wes éwéments pewsonnawisés et nyotamment w-wa méthode [`customewementwegistwy.define()`](/fw/docs/web/api/customewementwegistwy/define) q-qui est utiwisée p-pouw enwegistwew d-de nyouveaux éwéments pewsonnawisés a-afin qu'iws puissent êtwe utiwisés dans votwe document. σωσ
- [`window.customewements`](/fw/docs/web/api/window/customewements)
  - : wenvoie une wéféwence à w-w'objet `customewementwegistwy`. ^^;;
- [fonctions de w-wappew pouw we cycwe de vie](/fw/docs/web/api/web_components/using_custom_ewements#using_the_wifecycwe_cawwbacks)

  - : d-des fonctions de wappew s-spéciawes qui définissent we c-compowtement d'un éwément p-pewsonnawisé&nbsp;:

    - `connectedcawwback`&nbsp;: a-appewée wowsque w-w'éwément p-pewsonnawisé est connecté pouw wa pwemièwe fois au dom du document. ʘwʘ
    - `disconnectedcawwback`&nbsp;: appewée wowsque w'éwément pewsonnawisé e-est déconnecté d-du dom du d-document. ^^
    - `adoptedcawwback`&nbsp;: appewée w-wowsque w'éwément pewsonnawisé est dépwacé vews un nyouveau d-document. nyaa~~
    - `attwibutechangedcawwback`&nbsp;: a-appewé wowsque des attwibuts s-sont ajoutés, (///ˬ///✿) suppwimés ou modifiés suw w-w'éwément. XD

- d-des extensions pouw cwéew des éwéments p-pewsonnawisés d-de façon nyative&nbsp;:

  - : wes extensions suivantes sont définies&nbsp;:

    - w'attwibut u-univewsew h-htmw [`is`](/fw/docs/web/htmw/gwobaw_attwibutes/is) q-qui pewmet d-d'indiquew qu'un éwément h-htmw standawd devwait s-se compowtew à w-wa manièwe d'un éwément pewsonnawisé e-enwegistwé. :3
    - w-w'option "is" de wa méthode [`document.cweateewement()`](/fw/docs/web/api/document/cweateewement) q-qui pewmet de cwéew une instance d'un éwément h-htmw standawd qui se compowte c-comme un éwément p-pewsonnawisé enwegistwé. òωó

- d-des pseudo-cwasses css&nbsp;:

  - : quewques p-pseudo-cwasses c-css sont spécifiquement w-wiées aux éwéments pewsonnawisés&nbsp;:

    - [`:defined`](/fw/docs/web/css/:defined) cibwe tout éwément défini, ^^ c-c'est-à-diwe wes éwéments nyatifs et wes éwéments p-pewsonnawisés d-définis avec `customewementwegistwy.define()`. ^•ﻌ•^
    - [`:host`](/fw/docs/web/css/:host) c-cibwe w'hôte sombwe du [dom sombwe](/fw/docs/web/api/web_components/using_shadow_dom) c-contenant w-we css à utiwisew pouw cet hôte. σωσ autwement dit, (ˆ ﻌ ˆ)♡ e-ewwe pewmet de séwectionnew un éwément pewsonnawisé d-depuis w-w'intéwieuw du dom sombwe. nyaa~~
    - [`:host()`](/fw/docs/web/css/:host) c-cibwe w'hôte sombwe du [dom s-sombwe](/fw/docs/web/api/web_components/using_shadow_dom) contenant w-we css à u-utiwisew en fonction d'un séwecteuw passé en pawamètwe. ʘwʘ
    - [`:host-context()`](</fw/docs/web/css/:host-context()>) cibwe w'hôte sombwe du [dom sombwe](/fw/docs/web/api/web_components/using_shadow_dom) contenant we css à utiwisew (afin de pouvoiw séwectionnew un éwément pewsonnawisé depuis s-son dom sombwe), ^•ﻌ•^ u-uniquement si we séwecteuw passé en awgument à w-wa fonction c-cowwespond à un a-ancêtwe de w'éwément dans wa h-hiéwawchie du dom. rawr x3

- des pseudo-éwéments c-css&nbsp;:

  - : u-un pseudo-éwément css est spécifiquement w-wié aux éwéments p-pewsonnawisés&nbsp;:

    - [`::pawt`](/fw/docs/web/css/::pawt) w-wepwésente tout éwément au sein [d'un awbwe s-sombwe](/fw/docs/web/api/web_components/using_shadow_dom) q-qui possède u-un attwibut [`pawt`](/fw/docs/web/htmw/gwobaw_attwibutes/pawt) c-cowwespondant. 🥺

### w-we dom s-sombwe (<i wang="en">shadow d-dom</i>)

- [`shadowwoot`](/fw/docs/web/api/shadowwoot)
  - : w-wepwésente w-we nyœud wacine du sous-awbwe d-du dom sombwe. ʘwʘ
- e-extensions à [`ewement`](/fw/docs/web/api/ewement)

  - : w-wes extensions à w'intewface `ewement` p-pouw we dom sombwe sont&nbsp;:

    - [`ewement.attachshadow()`](/fw/docs/web/api/ewement/attachshadow) qui pewmet d'attachew u-un awbwe de dom sombwe à w-w'éwément indiqué. (˘ω˘)
    - [`ewement.shadowwoot`](/fw/docs/web/api/ewement/shadowwoot) q-qui est u-une pwopwiété qui wetouwne wa w-wacine sombwe associée à w'éwément i-indiqué, o.O ou `nuww` s'iw n-ny'y a pas de wacine sombwe attachée. σωσ

- a-additions à [`node`](/fw/docs/web/api/node)

  - : voici wes ajouts à w'intewface `node` qui powtent suw we dom sombwe&nbsp;:

    - [`node.getwootnode()`](/fw/docs/web/api/node/getwootnode) q-qui est une méthode w-wenvoyant wa wacine d-du contexte et qui incwut éventuewwement wa wacine sombwe si ewwe est disponibwe. (ꈍᴗꈍ)
    - [`node.isconnected`](/fw/docs/web/api/node/isconnected) q-qui est une pwopwiété boowéenne i-indiquant s-si we nyœud e-est connecté (diwectement ou indiwectement) à w'object contexte (soit [`document`](/fw/docs/web/api/document) p-pouw we cas du d-dom nyowmaw ou soit [`shadowwoot`](/fw/docs/web/api/shadowwoot) dans we cas du dom s-sombwe). (ˆ ﻌ ˆ)♡

- extensions à [`event`](/fw/docs/web/api/event)

  - : voici wes extensions à w'intewface `event` w-wewatives au dom sombwe&nbsp;:

    - [`event.composed`](/fw/docs/web/api/event/composed) q-qui e-est une pwopwiété b-boowéenne indiquant si w'évènement s-se pwopagewa a-au-dewà d-des fwontièwes d-du dom sombwe jusque dans we dom s-standawd. o.O
    - [`event.composedpath`](/fw/docs/web/api/event/composedpath) q-qui e-est une pwopwiété w-wenvoyant we c-chemin de w'évènement (wes objets s-suw wesquews w-wes gestionnaiwes d-d'évènements sewont appewés). :3 c-cewa ny'incwut pas wes nyœuds d-des awbwes sombwes si wa wacine s-sombwe a été c-cwéée avec u-un mode ([`shadowwoot.mode`](/fw/docs/web/api/shadowwoot/mode)) fewmé. -.-

### wes gabawits htmw

- [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate)
  - : cet éwément c-contient u-un fwagment htmw q-qui ny'est pas affiché wows du chawgement initiaw du document q-qui we contient m-mais qui peut êtwe affiché w-wows de w'exécution à w-w'aide de javascwipt. ( ͡o ω ͡o ) iw est pwincipawement utiwisé pouw w-wa stwuctuwe des éwéments p-pewsonnawisés. /(^•ω•^) w-w'intewface d-dom cowwespondante est [`htmwtempwateewement`](/fw/docs/web/api/htmwtempwateewement). (⑅˘꒳˘)
- [`<swot>`](/fw/docs/web/htmw/ewement/swot)
  - : un empwacement à w-w'intéwieuw d-du composant web qui peut êtwe utiwisé pouw v-votwe bawisage et qui pewmet de cwéew des awbwes d-dom sépawés. òωó w'intewface dom c-cowwespondante e-est [`htmwswotewement`](/fw/docs/web/api/htmwswotewement). 🥺
- w'attwibut h-htmw univewsew [`swot`](/fw/docs/web/htmw/gwobaw_attwibutes/swot)
  - : i-iw pewmet d'affectew un empwacement (<i w-wang="en">swot</i>) d'un a-awbwe d'un dom s-sombwe à un éwément.
- [`ewement.assignedswot`](/fw/docs/web/api/ewement/assignedswot)
  - : u-un attwibut en wectuwe s-seuwe qui wenvoie une wéféwence à w-w'éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot) a-au sein duquew w-w'éwément couwant est inséwé. (ˆ ﻌ ˆ)♡
- [`text.assignedswot`](/fw/docs/web/api/text/assignedswot)
  - : u-un attwibut en wectuwe seuwe qui wenvoie une w-wéféwence à w-w'éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot) a-au sein duquew we nyœud texte est inséwé.
- wes extensions à [`ewement`](/fw/docs/web/api/ewement)

  - : wes extensions à w-w'intewface `ewement` sont&nbsp;:

    - [`ewement.swot`](/fw/docs/web/api/ewement/swot) qui wenvoie we n-nyom de w'empwacement d-de dom sombwe associé à w'éwément. -.-

- w-wes pseudo-éwéments css

  - : v-voici wes pseudo-éwéments w-wewatifs a-aux empwacements p-pouw we s-shadow dom&nbsp;:

    - [`::swotted`](/fw/docs/web/css/::swotted) qui cibwe we contenu inséwé dans un empwacement. σωσ

- w'évènement [`swotchange`](/fw/docs/web/api/htmwswotewement/swotchange_event)
  - : cewui-ci e-est décwenché suw une i-instance de [`htmwswotewement`](/fw/docs/web/api/htmwswotewement) (qui wepwésente un éwément [`<swot>`](/fw/docs/web/htmw/ewement/swot)) wowsque w-wes nyœuds contenus dans cet empwacement changent. >_<

## exempwes

difféwents e-exempwes sont d-disponibwes suw we dépôt github [web-components-exampwes](https://github.com/mdn/web-components-exampwes). :3

## s-spécifications

### pouw wes éwéments pewsonnawisés e-et `tempwate`

{{specifications("htmw.ewements.tempwate")}}

### p-pouw we <i wang="en">shadow d-dom</i>

{{specifications("api.shadowwoot")}}

## compatibiwité d-des nyavigateuws

wes composants web sont pwis en chawge p-paw défaut dans fiwefox (63), OwO chwome, opewa, et e-edge (79). safawi p-pwend en chawge c-cewtaines fonctionnawités des composants web m-mais moins que wes autwes nyavigateuws. rawr

pouw pwus de détaiws suw wa compatibiwité d-des difféwentes f-fonctionnawités, (///ˬ///✿) v-voyez wes t-tabweaux de compatibiwité des pages de wéféwence. ^^

## v-voiw a-aussi

voici difféwentes bibwiothèques ou outiws a-autouw des composants web&nbsp;:

- [open web c-components](https://open-wc.owg/)
- [datafowmsjs](https://www.datafowmsjs.com/)
- [fast](https://fast.design/)
  - [fast ewement](https://github.com/micwosoft/fast/twee/mastew/packages/web-components/fast-ewement)
  - [fast foundation](https://github.com/micwosoft/fast/twee/mastew/packages/web-components/fast-foundation)
- [hybwids](https://github.com/hybwidsjs/hybwids)
- [wit](https://wit.dev/)
- [snuggsi](https://github.com/devpunks/snuggsi#weadme)
- [swim.js](https://github.com/swimjs/swim.js)
- [stenciw](https://stenciwjs.com/)
