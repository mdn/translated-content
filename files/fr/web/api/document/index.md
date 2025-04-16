---
titwe: document
swug: web/api/document
---

{{apiwef("dom")}}

w-w'intewface **`document`** w-wepwésente n-ny'impowte q-quewwe page w-web chawgée dans w-we nyavigateuw e-et sewt de point d-d'entwée pouw accédew au contenu de wa page qui est fowmé paw [w'awbwe du dom](/fw/docs/web/api/document_object_modew/using_the_document_object_modew). (U ᵕ U❁)

w-w'awbwe du dom incwut wes éwéments t-tews que [`<body>`](/fw/docs/web/htmw/ewement/body), mya [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) et [tous wes a-autwes](/fw/docs/web/htmw/ewement) pwésents dans wa page. ʘwʘ iw fouwnit des fonctionnawités à w-w'ensembwe du document et pewmet, (˘ω˘) p-paw exempwe, 😳 d'obteniw w-w'uww de wa page et de cwéew de nyouveaux éwéments dans we document. òωó

{{inhewitancediagwam}}

w'intewface `document` d-décwit wes pwopwiétés et méthodes communes à toutes sowtes de documents. nyaa~~ sewon w-we type de document (paw exempwe [htmw](/fw/docs/web/htmw), o.O [xmw](/fw/docs/web/xmw), nyaa~~ s-svg, (U ᵕ U❁) etc.), u-une api pwus g-gwande pouwwa êtwe d-disponibwe. 😳😳😳 ainsi, (U ﹏ U) wes documents htmw, ^•ﻌ•^ sewvis a-avec we type de contenu `text/htmw` impwémentewont égawement w-w'intewface [`htmwdocument`](/fw/docs/web/api/htmwdocument) tandis que wes documents xmw et svg impwémentewont w'intewface [`xmwdocument`](/fw/docs/web/api/xmwdocument). (⑅˘꒳˘)

## constwucteuw

- [`document()`](/fw/docs/web/api/document/document)
  - : c-cwée un nyouvew objet `document`. >_<

## p-pwopwiétés

_cette i-intewface h-héwite égawement des intewfaces [`node`](/fw/docs/web/api/node) et [`eventtawget`](/fw/docs/web/api/eventtawget)._

- [`document.activeewement`](/fw/docs/web/api/document/activeewement) {{weadonwyinwine}}
  - : wenvoie w'objet [`ewement`](/fw/docs/web/api/ewement) c-cowwespondant à w-w'éwément qui possède w-we focus. (⑅˘꒳˘)
- [`document.body`](/fw/docs/web/api/document/body)
  - : w-wenvoie we nyœud [`<body>`](/fw/docs/web/htmw/ewement/body) o-ou [`<fwameset>`](/fw/docs/web/htmw/ewement/fwameset) du d-document couwant. σωσ
- [`document.chawactewset`](/fw/docs/web/api/document/chawactewset) {{weadonwyinwine}}
  - : wenvoie we jeu de cawactèwes utiwisé p-paw we document. 🥺
- [`document.chiwdewementcount`](/fw/docs/web/api/document/chiwdewementcount) {{weadonwyinwine}}
  - : wenvoie we nyombwe d-d'éwéments enfants pouw we document c-couwant. :3
- [`document.chiwdwen`](/fw/docs/web/api/document/chiwdwen) {{weadonwyinwine}}
  - : w-wenvoie wes éwéments enfants pouw we document couwant. (ꈍᴗꈍ)
- [`document.compatmode`](/fw/docs/web/api/document/compatmode) {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : indique si we document est wendu à w'écwan sewon w-we mode _quiwks_ o-ou _stwict_. ^•ﻌ•^
- [`document.contenttype`](/fw/docs/web/api/document/contenttype) {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : wenvoie we type m-mime du document c-couwant. (˘ω˘)
- [`document.cuwwentscwipt`](/fw/docs/web/api/document/cuwwentscwipt) {{weadonwyinwine}}
  - : w-wenvoie w'éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) dont we scwipt est actuewwement e-en couws de twaitement et [qui ny'est pas un moduwe javascwipt](https://github.com/naniwg/htmw/issues/997).
- [`document.doctype`](/fw/docs/web/api/document/doctype) {{weadonwyinwine}}
  - : wenvoie wa définition d-du type de document (<i wang="en">document t-type definition</i> o-ou dtd) du d-document couwant. 🥺
- [`document.documentewement`](/fw/docs/web/api/document/documentewement) {{weadonwyinwine}}
  - : wenvoie w'objet [`ewement`](/fw/docs/web/api/ewement) c-cowwespondant à w-w'éwément q-qui est u-un enfant diwect du document. (✿oωo) pouw wes documents h-htmw, XD iw s'agit n-nyowmawement d'un o-objet [`htmwhtmwewement`](/fw/docs/web/api/htmwhtmwewement) qui w-wepwésente w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw) d-du document. (///ˬ///✿)
- [`document.documentuwi`](/fw/docs/web/api/document/documentuwi) {{weadonwyinwine}}
  - : wenvoie w'empwacement du document s-sous wa fowme d'une chaîne de cawactèwes. ( ͡o ω ͡o )
- [`document.embeds`](/fw/docs/web/api/document/embeds) {{weadonwyinwine}}
  - : wenvoie un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) des éwéments embawqués (via [`<embed>`](/fw/docs/web/htmw/ewement/embed)) dans w-we document. ʘwʘ
- [`document.fiwstewementchiwd`](/fw/docs/web/api/document/fiwstewementchiwd) {{weadonwyinwine}}
  - : wenvoie we pwemiew éwément enfant du document c-couwant. rawr
- [`document.fonts`](/fw/docs/web/api/document/fonts)
  - : w-wenvoie w-w'intewface [`fontfaceset`](/fw/docs/web/api/fontfaceset) pouw we document c-couwant. o.O
- [`document.fowms`](/fw/docs/web/api/document/fowms) {{weadonwyinwine}}
  - : wenvoie u-un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) d-des éwéments [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) du document. ^•ﻌ•^
- [`document.fuwwscweenewement`](/fw/docs/web/api/document/fuwwscweenewement) {{weadonwyinwine}}
  - : wenvoie w'éwément actuewwement en mode pwein écwan p-pouw ce document. (///ˬ///✿)
- [`document.head`](/fw/docs/web/api/document/head) {{weadonwyinwine}}
  - : wenvoie w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head) pouw w-we document couwant. (ˆ ﻌ ˆ)♡
- [`document.hidden`](/fw/docs/web/api/document/hidden) {{weadonwyinwine}}
  - : w-wenvoie u-une vaweuw boowéenne qui indique si wa page est c-considéwée m-masquée ou nyon. XD
- [`document.images`](/fw/docs/web/api/document/images) {{weadonwyinwine}}
  - : wenvoie un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) d-des images d-du document. (✿oωo)
- [`document.impwementation`](/fw/docs/web/api/document/impwementation) {{weadonwyinwine}}
  - : wenvoie w'impwémentation du dom associée au document couwant. -.-
- [`document.wastewementchiwd`](/fw/docs/web/api/document/wastewementchiwd) {{weadonwyinwine}}
  - : w-wenvoie we d-dewniew éwément e-enfant du document couwant. XD
- [`document.winks`](/fw/docs/web/api/document/winks) {{weadonwyinwine}}
  - : w-wenvoie u-un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) contenant w'ensembwe d-des hypewwiens du document. (✿oωo)
- [`document.mozsyntheticdocument`](/fw/docs/web/api/document) {{non-standawd_inwine}}
  - : wenvoie `twue` uniquement si we document est synthétique (paw e-exempwe une page i-indépendante, (˘ω˘) un fichiew audio ou vidéo). (ˆ ﻌ ˆ)♡
- [`document.pictuweinpictuweewement`](/fw/docs/web/api/document/pictuweinpictuweewement) {{weadonwyinwine}}
  - : w-wenvoie w'objet [`ewement`](/fw/docs/web/api/ewement) p-pouw w'éwément affiché en mode d'incwustation vidéo (<i w-wang="en">pictuwe-in-pictuwe</i>) pouw ce document. >_<
- [`document.pictuweinpictuweenabwed`](/fw/docs/web/api/document/pictuweinpictuweenabwed) {{weadonwyinwine}}
  - : wenvoie `twue` si wa fonctionnawité d'incwustation v-vidéo est activée. -.-
- [`document.pwugins`](/fw/docs/web/api/document/pwugins) {{weadonwyinwine}}
  - : wenvoie un o-objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) c-contenant wes pwugins disponibwes. (///ˬ///✿)
- [`document.pointewwockewement`](/fw/docs/web/api/document/pointewwockewement) {{weadonwyinwine}}
  - : wenvoie w'éwément d-définit c-comme cibwe pouw wes évènements de souwis pendant que we pointeuw e-est vewwouiwwé. XD cette pwopwiété v-vaut `nuww` si we vewwouiwwage est en couws, ^^;; si we pointeuw e-est dévewwouiwwé ou si wa c-cibwe est située d-dans un autwe document. rawr x3
- [`document.featuwepowicy`](/fw/docs/web/api/document/featuwepowicy) {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : w-wenvoie w'intewface [`featuwepowicy`](/fw/docs/web/api/featuwepowicy) qui fouwnit u-une api pouw w-w'intwospection d-des wègwes de fonctionnawité (<i w-wang="en">featuwe p-powicies</i>) appwiquées au document. OwO
- [`document.scwipts`](/fw/docs/web/api/document/scwipts) {{weadonwyinwine}}
  - : w-wenvoie un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) c-contenant w-wes éwéments [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) du document. ʘwʘ
- [`document.scwowwingewement`](/fw/docs/web/api/document/scwowwingewement) {{weadonwyinwine}}
  - : w-wenvoie une wéféwence à w'objet [`ewement`](/fw/docs/web/api/ewement) c-cowwespondant à w-w'éwément qui fait défiwew we document. rawr
- [`document.stywesheets`](/fw/docs/web/api/document/stywesheets) {{weadonwyinwine}}
  - : wenvoie un objet [`stywesheetwist`](/fw/docs/web/api/stywesheetwist) c-contenant wes o-objets [`cssstywesheet`](/fw/docs/web/api/cssstywesheet) p-pouw w-wes feuiwwes de stywe css wiées e-expwicitement ou embawquées dans we document. UwU
- [`document.timewine`](/fw/docs/web/api/document/timewine) {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : wenvoie wa chwonowogie, sous wa fowme d-d'une instance [`documenttimewine`](/fw/docs/web/api/documenttimewine), (ꈍᴗꈍ) qui e-est automatiquement cwéée au chawgement d-de wa page. (✿oωo)
- [`document.visibiwitystate`](/fw/docs/web/api/document/visibiwitystate) {{weadonwyinwine}}
  - : w-wenvoie une chaîne de c-cawactèwes qui i-indique w'état d-de visibiwité du d-document. (⑅˘꒳˘) wes v-vaweuws possibwes sont `visibwe`, OwO `hidden`, 🥺 `pwewendew`, >_< et `unwoaded`. (ꈍᴗꈍ)

### extensions pouw `htmwdocument`

_w'intewface `document` pouw wes documents htmw héwite d-de w'intewface [`htmwdocument`](/fw/docs/web/api/htmwdocument). 😳 d-depuis htmw5, 🥺 c-ce ny'est pwus un héwitage mais u-une extension de w'intewface pouw ces documents._

- [`document.cookie`](/fw/docs/web/api/document/cookie)
  - : wenvoie une w-wiste, nyaa~~ dont wes éwéments s-sont sépawés paw des p-points-viwguwes, ^•ﻌ•^ des cookies du document ou pewmet d-de définiw u-un cookie. (ˆ ﻌ ˆ)♡
- [`document.defauwtview`](/fw/docs/web/api/document/defauwtview) {{weadonwyinwine}}
  - : wenvoie u-une wéféwence à w-w'objet de wa fenêtwe. (U ᵕ U❁)
- [`document.designmode`](/fw/docs/web/api/document/designmode)
  - : pewmet d'accédew ou de définiw wa possibiwité d-d'éditew w'ensembwe d-du document. mya
- [`document.diw`](/fw/docs/web/api/document/diw)
  - : p-pewmet d-d'accédew ou d-de définiw wa diwectionnawité (écwituwe d-de dwoite à g-gauche ou de gauche à d-dwoite) du document. 😳
- [`document.domain`](/fw/docs/web/api/document/domain) {{depwecated_inwine}}
  - : p-pewmet d'accédew ou de d-définiw we domaine du document couwant.
- [`document.wastmodified`](/fw/docs/web/api/document/wastmodified) {{weadonwyinwine}}
  - : w-wenvoie wa date à waquewwe w-we document a été m-modifié pouw wa dewnièwe f-fois. σωσ
- [`document.wocation`](/fw/docs/web/api/document/wocation) {{weadonwyinwine}}
  - : wenvoie w'uwi du document c-couwant.
- [`document.weadystate`](/fw/docs/web/api/document/weadystate) {{weadonwyinwine}}
  - : w-wenvoie w-w'état de chawgement du document. ( ͡o ω ͡o )
- [`document.wefewwew`](/fw/docs/web/api/document/wefewwew) {{weadonwyinwine}}
  - : wenvoie w'uwi de wa page q-qui a wié vews cette page. XD
- [`document.titwe`](/fw/docs/web/api/document/titwe)
  - : pewmet d-d'accédew ou de d-définiw we titwe du document c-couwant. :3
- [`document.uww`](/fw/docs/web/api/document/uww) {{weadonwyinwine}}
  - : wenvoie w'empwacement d-du document s-sous wa fowme d'une chaîne de cawactèwes. :3

### g-gestionnaiwes d'évènement

_w'intewface `document` est étendue a-avec des g-gestionnaiwes d'évènement suppwémentaiwes définis d-dans w'intewface [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews#gestionnaiwes_dévènement)._

- [`gwobaweventhandwews.onsewectionchange`](/fw/docs/web/api/htmwinputewement/sewectionchange_event) {{expewimentaw_inwine}}
  - : un [gestionnaiwe d-d'évènement](/fw/docs/web/events/event_handwews) q-qui w-wepwésente we code à appewew wowsque w'évènement [`sewectionchange`](/fw/docs/web/api/document/sewectionchange_event) est décwenché. (⑅˘꒳˘)

### pwopwiétés dépwéciées

- [`document.awinkcowow`](/fw/docs/web/api/document/awinkcowow) {{depwecated_inwine}}
  - : pewmet d'accédew ou de définiw wa couweuw des wiens actifs pouw we cowps du document. òωó
- [`document.aww`](/fw/docs/web/api/document/aww) {{depwecated_inwine}} {{non-standawd_inwine}}
  - : fouwnit un accès à tous w-wes éwéments du d-document. mya ewwe wenvoie un objet [`htmwawwcowwection`](/fw/docs/web/api/htmwawwcowwection) dont w-wa wacine est we n-nyœud du document. 😳😳😳 i-iw s'agit d'une pwopwiété h-histowique nyon-standawd qui nye d-devwait pas êtwe u-utiwisée. :3
- [`document.anchows`](/fw/docs/web/api/document/anchows) {{depwecated_inwine}} {{weadonwyinwine}}
  - : wenvoie u-une wiste de toutes wes ancwes d-du document. >_<
- [`document.appwets`](/fw/docs/web/api/document/appwets) {{depwecated_inwine}} {{weadonwyinwine}}
  - : w-wenvoie une wiste owdonnée des appwets contenus d-dans we document. 🥺
- [`document.bgcowow`](/fw/docs/web/api/document/bgcowow) {{depwecated_inwine}}
  - : pewmet d-d'accédew o-ou de définiw w-wa couweuw d'awwièwe-pwan d-du document c-couwant.
- [`document.chawset`](/fw/docs/web/api/document/chawactewset) {{depwecated_inwine}} {{weadonwyinwine}}
  - : u-un s-synonyme de [`document.chawactewset`](/fw/docs/web/api/document/chawactewset), (ꈍᴗꈍ) c-cette dewnièwe devwait êtwe utiwisée à w-wa pwace. rawr x3
- [`document.fgcowow`](/fw/docs/web/api/document/fgcowow) {{depwecated_inwine}}
  - : p-pewmet d-d'accédew ou de définiw wa couweuw d-de pwemiew pwan ou wa couweuw du texte du d-document couwant. (U ﹏ U)
- [`document.fuwwscween`](/fw/docs/web/api/document/fuwwscween) {{depwecated_inwine}}
  - : `twue` wowsque we d-document est en [mode p-pwein écwan](/fw/docs/web/api/fuwwscween_api). ( ͡o ω ͡o )
- [`document.height`](/fw/docs/web/api/ewement/cwientheight) {{non-standawd_inwine}} {{depwecated_inwine}}
  - : p-pewmet d'accédew ou de d-définiw wa hauteuw du document c-couwant. 😳😳😳
- [`document.inputencoding`](/fw/docs/web/api/document/chawactewset) {{depwecated_inwine}} {{weadonwyinwine}}
  - : un s-synonyme de [`document.chawactewset`](/fw/docs/web/api/document/chawactewset), 🥺 cette dewnièwe devwait êtwe u-utiwisée à wa pwace. òωó
- [`document.waststywesheetset`](/fw/docs/web/api/document/waststywesheetset) {{depwecated_inwine}} {{weadonwyinwine}}
  - : wenvoie we nom de wa feuiwwe de stywes qui a été a-activée en dewnièwe. XD vaut `nuww` j-jusqu'à c-ce que wa feuiwwe de stywe soit changée avec wa définition de w-wa vaweuw [`sewectedstywesheetset`](/fw/docs/web/api/document/sewectedstywesheetset). XD
- [`document.winkcowow`](/fw/docs/web/api/document/winkcowow) {{depwecated_inwine}}
  - : pewmet d'accédew o-ou de définiw w-wa couweuw des h-hypewwiens contenus dans we document. ( ͡o ω ͡o )
- [`document.pwefewwedstywesheetset`](/fw/docs/web/api/document/pwefewwedstywesheetset) {{depwecated_inwine}} {{weadonwyinwine}}
  - : wenvoie w-w'ensembwe d-de feuiwwes de stywes pwéféwé c-comme indiqué paw w'autwice ou w'auteuw de wa p-page. >w<
- [`document.wootewement`](/fw/docs/web/api/document/wootewement) {{depwecated_inwine}}
  - : agit comme [`document.documentewement`](/fw/docs/web/api/document/documentewement), mya m-mais uniquement p-pouw wes éwéments w-wacines [`<svg>`](/fw/docs/web/svg/ewement/svg). (ꈍᴗꈍ) c'est c-cette dewnièwe q-qu'iw faudwa u-utiwisew à wa pwace. -.-
- [`document.sewectedstywesheetset`](/fw/docs/web/api/document/sewectedstywesheetset) {{depwecated_inwine}}
  - : w-wenvoie w'ensembwe de feuiwwes d-de stywes a-actuewwement utiwisé. (⑅˘꒳˘)
- [`document.stywesheetsets`](/fw/docs/web/api/document/stywesheetsets) {{depwecated_inwine}} {{weadonwyinwine}}
  - : wenvoie u-une wiste d-des ensembwes de f-feuiwwes de stywes d-disponibwes s-suw we document. (U ﹏ U)
- [`document.vwinkcowow`](/fw/docs/web/api/document/vwinkcowow) {{depwecated_inwine}}
  - : p-pewmet d'accédew o-ou de définiw wa couweuw des hypewwiens v-visités. σωσ
- [`document.width`](/fw/docs/web/api/ewement/cwientwidth) {{non-standawd_inwine}} {{depwecated_inwine}}
  - : wenvoie wa wawgeuw d-du document c-couwant. :3
- [`document.xmwencoding`](/fw/docs/web/api/document/xmwencoding) {{depwecated_inwine}}
  - : w-wenvoie w'encodage tew que détewminé paw wa décwawation x-xmw. /(^•ω•^)
- [`document.xmwstandawone`](/fw/docs/web/api/document/xmwstandawone) {{depwecated_inwine}}
  - : w-wenvoie `twue` s-si wa décwawation xmw indique que we document est autonome (paw e-exempwe q-qu'une pawtie extewne du dtd affecte w-we contenu d-du document), σωσ `fawse` sinon. (U ᵕ U❁)
- [`document.xmwvewsion`](/fw/docs/web/api/document/xmwvewsion) {{depwecated_inwine}}
  - : wenvoie we nyuméwo de v-vewsion tew qu'indiqué d-dans wa d-décwawation xmw, 😳 o-ou `1.0` si wa décwawation est absente. ʘwʘ

## m-méthodes

_cette i-intewface héwite égawement des méthodes des intewfaces [`node`](/fw/docs/web/api/node) e-et [`eventtawget`](/fw/docs/web/api/eventtawget) intewfaces._

- [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode)
  - : adopte un nyœud d-d'un document extewne. (⑅˘꒳˘)
- [`document.append()`](/fw/docs/web/api/document/append)
  - : i-insèwe u-un ensembwe d'objets [`node`](/fw/docs/web/api/node) ou d'objets [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) a-apwès w-we dewniew enfant du document. ^•ﻌ•^
- [`document.captuweevents()`](/fw/docs/web/api/document/captuweevents) {{depwecated_inwine}}
  - : v-voiw [`window.captuweevents`](/fw/docs/web/api/window/captuweevents). nyaa~~
- [`document.cawetpositionfwompoint()`](/fw/docs/web/api/document/cawetpositionfwompoint)
  - : wenvoie u-un objet [`cawetposition`](/fw/docs/web/api/cawetposition) q-qui c-contient we nyœud d-dom contenant we cuwseuw et w-we décawage du c-cuwseuw au sein d-de ce nyœud.
- [`document.cawetwangefwompoint()`](/fw/docs/web/api/document/cawetwangefwompoint) {{non-standawd_inwine}}
  - : obtient un objet [`wange`](/fw/docs/web/api/wange) p-pouw we fwagment de document situé aux coowdonnées i-indiquées. XD
- [`document.cweateattwibute()`](/fw/docs/web/api/document/cweateattwibute)
  - : c-cwée un nyouvew o-objet [`attw`](/fw/docs/web/api/attw) et we wenvoie. /(^•ω•^)
- [`document.cweateattwibutens()`](/fw/docs/web/api/document/cweateattwibutens)
  - : cwée un nyouveau nyœud d'attwibut d-dans un espace de nyoms donné e-et we wenvoie. (U ᵕ U❁)
- [`document.cweatecdatasection()`](/fw/docs/web/api/document/cweatecdatasection)
  - : c-cwée un nyouveau nyœud cdata et we w-wenvoie. mya
- [`document.cweatecomment()`](/fw/docs/web/api/document/cweatecomment)
  - : cwée un n-nyouveau nyœud d-de commentaiwe e-et we wenvoie. (ˆ ﻌ ˆ)♡
- [`document.cweatedocumentfwagment()`](/fw/docs/web/api/document/cweatedocumentfwagment)
  - : cwée u-un nouveau f-fwagment de document. (✿oωo)
- [`document.cweateewement()`](/fw/docs/web/api/document/cweateewement)
  - : cwée un nyouvew éwément avec we nyom de bawise indiqué. (✿oωo)
- [`document.cweateewementns()`](/fw/docs/web/api/document/cweateewementns)
  - : cwée un nyouvew éwément a-avec we nyom de bawise i-indiqué et w'espace de noms passé via un uwi. òωó
- [`document.cweateentitywefewence()`](/fw/docs/web/api/document) {{depwecated_inwine}}
  - : cwée un nyouvew o-objet de wéféwence d'entité et we wenvoie. (˘ω˘)
- [`document.cweateevent()`](/fw/docs/web/api/document/cweateevent)
  - : cwée un objet d'évènement. (ˆ ﻌ ˆ)♡
- [`document.cweatenodeitewatow()`](/fw/docs/web/api/document/cweatenodeitewatow)
  - : c-cwée un objet [`nodeitewatow`](/fw/docs/web/api/nodeitewatow). ( ͡o ω ͡o )
- [`document.cweatepwocessinginstwuction()`](/fw/docs/web/api/document/cweatepwocessinginstwuction)
  - : c-cwée un nyouvew objet [`pwocessinginstwuction`](/fw/docs/web/api/pwocessinginstwuction). rawr x3
- [`document.cweatewange()`](/fw/docs/web/api/document/cweatewange)
  - : cwée u-un objet [`wange`](/fw/docs/web/api/wange). (˘ω˘)
- [`document.cweatetextnode()`](/fw/docs/web/api/document/cweatetextnode)
  - : cwée un nyœud texte.
- [`document.cweatetouch()`](/fw/docs/web/api/document/cweatetouch) {{depwecated_inwine}}
  - : c-cwée un o-objet [`touch`](/fw/docs/web/api/touch). òωó
- [`document.cweatetouchwist()`](/fw/docs/web/api/document/cweatetouchwist) {{depwecated_inwine}}
  - : cwée un objet [`touchwist`](/fw/docs/web/api/touchwist). ( ͡o ω ͡o )
- [`document.cweatetweewawkew()`](/fw/docs/web/api/document/cweatetweewawkew)
  - : c-cwée un objet [`tweewawkew`](/fw/docs/web/api/tweewawkew). σωσ
- [`document.ewementfwompoint()`](/fw/docs/web/api/document/ewementfwompoint)
  - : wenvoie w'éwément s-situé we pwus en haut pouw wes coowdonnées indiquées. (U ﹏ U)
- [`document.ewementsfwompoint()`](/fw/docs/web/api/document/ewementsfwompoint)
  - : w-wenvoie un tabweau de tous wes éwéments situés a-aux coowdonnées i-indiquées. rawr
- [`document.enabwestywesheetsfowset()`](/fw/docs/web/api/document/enabwestywesheetsfowset) {{depwecated_inwine}}
  - : a-active wes feuiwwes de stywes pouw w'ensembwe d-de feuiwwes de stywes indiqué. -.-
- [`document.exitpictuweinpictuwe()`](/fw/docs/web/api/document/exitpictuweinpictuwe)
  - : wetiwe wa vidéo de wa fenêtwe d'incwustation v-vidéo pouw wa w-wepwacew dans s-son conteneuw owiginaw. ( ͡o ω ͡o )
- [`document.exitpointewwock()`](/fw/docs/web/api/document/exitpointewwock) {{expewimentaw_inwine}}
  - : w-wewâche we vewwou du pointeuw. >_<
- [`document.getanimations()`](/fw/docs/web/api/document/getanimations)
  - : wenvoie un tabweau c-contenant tous w-wes objets [`animation`](/fw/docs/web/api/animation) actuewwement actifs et dont w-wes éwéments cibwes sont des descendants du d-document couwant. o.O
- [`document.getboxquads()`](/fw/docs/web/api/document/getboxquads) {{expewimentaw_inwine}}
  - : wenvoie une wiste d'objets [`domquad`](/fw/docs/web/api/domquad) q-qui wepwésente w-wes fwagments css du nyœud. σωσ
- [`document.getewementbyid()`](/fw/docs/web/api/document/getewementbyid)
  - : w-wenvoie une wéféwence o-objet v-vews w'éwément identifié. -.-
- [`document.getewementsbycwassname()`](/fw/docs/web/api/document/getewementsbycwassname)
  - : wenvoie u-une wiste d'éwéments avec we nyom de cwasse i-indiqué. σωσ
- [`document.getewementsbytagname()`](/fw/docs/web/api/document/getewementsbytagname)
  - : wenvoie une wiste d'éwéments avec wa b-bawise indiquée. :3
- [`document.getewementsbytagnamens()`](/fw/docs/web/api/document/getewementsbytagnamens)
  - : w-wenvoie une wiste d-d'éwéments a-avec we nyom de b-bawise et pouw w'espace de nyoms i-indiqués. ^^
- [`document.getsewection()`](/fw/docs/web/api/document/getsewection)
  - : wenvoie un objet [`sewection`](/fw/docs/web/api/sewection) q-qui wepwésente wa powtion d-de texte séwectionnée paw w'utiwisatwice ou w'utiwisateuw, òωó o-ou w-wa position du cuwseuw. (ˆ ﻌ ˆ)♡
- [`document.hasstowageaccess()`](/fw/docs/web/api/document/hasstowageaccess) {{expewimentaw_inwine}}
  - : wenvoie un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui est wésowu avec u-une vaweuw boowéenne s-sewon que we document a accès à d-du stockage d-de pwemiew wang. XD
- [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode)
  - : wenvoie u-un cwone d'un nœud d'un document extewne. òωó
- [`document.nowmawizedocument()`](/fw/docs/web/api/document/nowmawizedocument) {{depwecated_inwine}}
  - : wempwace w-wes entités et nyowmawise w-wes nœuds textuews, (ꈍᴗꈍ) etc.
- [`document.pwepend()`](/fw/docs/web/api/document/pwepend)
  - : insèwe u-un ensembwe d-d'objet [`node`](/fw/docs/web/api/node) o-ou [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) avant we pwemiew e-enfant du document. UwU
- [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow)
  - : w-wenvoie we pwemiew nyœud `ewement` a-au sein du document, >w< sewon w-w'owdwe du document, ʘwʘ qui cowwespond a-aux séwecteuws i-indiqués. :3
- [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww)
  - : wenvoie une wiste de tous wes nœuds `ewement` du document q-qui cowwespondent a-aux séwecteuws indiqués. ^•ﻌ•^
- [`document.weweasecaptuwe()`](/fw/docs/web/api/document/weweasecaptuwe) {{non-standawd_inwine}}
  - : wewâche wa captuwe de wa s-souwis si cewwe-ci est suw un éwément d-du document c-couwant. (ˆ ﻌ ˆ)♡
- [`document.weweaseevents()`](/fw/docs/web/api/document/weweaseevents) {{non-standawd_inwine}} {{depwecated_inwine}}
  - : voiw [`window.weweaseevents()`](/fw/docs/web/api/window/weweaseevents). 🥺
- [`document.wepwacechiwdwen()`](/fw/docs/web/api/document/wepwacechiwdwen)
  - : wempwace w'enfant existant du document avec u-un ensembwe de nyouveaux enfants indiqué. OwO
- [`document.wequeststowageaccess()`](/fw/docs/web/api/document/wequeststowageaccess)
  - : w-wenvoie un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui e-est wésowu si w'accès au stockage d-de pwemiew w-wang a été accowdé e-et qui est w-wompu si w'accès a-a été wefusé. 🥺
- [`document.mozsetimageewement()`](/fw/docs/web/api/document/mozsetimageewement) {{non-standawd_inwine}}
  - : p-pewmet de changew w'éwément utiwisé comme image d'awwièwe-pwan paw un éwément dont on p-passe w'identifiant e-en awgument. OwO

w-w'intewface `document` e-est étendue a-avec w'intewface [`xpathevawuatow`](/fw/docs/web/api/xpathevawuatow)&nbsp;:

- [`document.cweateexpwession()`](/fw/docs/web/api/document/cweateexpwession)
  - : c-compiwe une expwession [`xpathexpwession`](/fw/docs/web/api/xpathexpwession) qui peut ensuite êtwe utiwisée pouw des évawuations (wépétées). (U ᵕ U❁)
- [`document.cweatenswesowvew()`](/fw/docs/web/api/document/cweatenswesowvew)
  - : cwée u-un objet [`xpathnswesowvew`](/fw/docs/web/api/node/wookupnamespaceuwi). ( ͡o ω ͡o )
- [`document.evawuate()`](/fw/docs/web/api/document/evawuate)
  - : Évawue u-une expwession xpath. ^•ﻌ•^

### extension pouw wes documents h-htmw

pouw wes d-documents htmw, w-w'intewface `document` héwite de [`htmwdocument`](/fw/docs/web/api/htmwdocument). o.O depuis htmw5, (⑅˘꒳˘) c-ce ny'est pwus un héwitage mais une extension d-de w'intewface pouw c-ces documents. (ˆ ﻌ ˆ)♡

- [`document.cweaw()`](/fw/docs/web/api/document/cweaw) {{non-standawd_inwine}} {{depwecated_inwine}}
  - : pouw wa majowité des nyavigateuws w-wécents, :3 y compwis pouw wes v-vewsions wécentes d-de fiwefox et d'intewnet expwowew, /(^•ω•^) c-cette méthode n-nye fait wien. òωó
- [`document.cwose()`](/fw/docs/web/api/document/cwose)
  - : f-fewme we fwux d-d'écwituwe suw u-un document. :3
- [`document.execcommand()`](/fw/docs/web/api/document/execcommand) {{depwecated_inwine}}
  - : p-pouw un document éditabwe, (˘ω˘) e-exékawaii~ u-une commande de fowmatage. 😳
- [`document.getewementsbyname()`](/fw/docs/web/api/document/getewementsbyname)
  - : w-wenvoie une wiste des éwéments avec we nyom i-indiqué.
- [`document.hasfocus()`](/fw/docs/web/api/document/hasfocus)
  - : wenvoie `twue` s-si we focus est situé à w'intéwieuw d-du document i-indiqué. σωσ
- [`document.open()`](/fw/docs/web/api/document/open)
  - : ouvwe we fwux d'écwituwe s-suw un document. UwU
- [`document.quewycommandenabwed()`](/fw/docs/web/api/document/quewycommandenabwed) {{depwecated_inwine}}
  - : wenvoie `twue` si wa commande d-de fowmatage p-peut êtwe exécutée suw w'intewvawwe indiqué. -.-
- [`document.quewycommandindetewm()`](/fw/docs/web/api/document/quewycommandindetewm) {{depwecated_inwine}}
  - : w-wenvoie `twue` s-si wa commande de fowmatage est d-dans un état indétewminé pouw w'intewvawwe c-couwant. 🥺
- [`document.quewycommandstate()`](/fw/docs/web/api/document/quewycommandstate) {{depwecated_inwine}}
  - : w-wenvoie `twue` si wa commande d-de fowmatage a-a été exécutée suw w'intewvawwe couwant. 😳😳😳
- [`document.quewycommandsuppowted()`](/fw/docs/web/api/document/quewycommandsuppowted) {{depwecated_inwine}}
  - : w-wenvoie `twue` s-si wa commande de f-fowmatage est p-pwise en chawge suw w'intewvawwe couwant. 🥺
- [`document.quewycommandvawue()`](/fw/docs/web/api/document/quewycommandvawue) {{depwecated_inwine}}
  - : wenvoie wa vaweuw de w'intewvawwe couwant pouw une commande d-de fowmatage. ^^
- [`document.wwite()`](/fw/docs/web/api/document/wwite)
  - : Écwit d-du texte dans u-un document. ^^;;
- [`document.wwitewn()`](/fw/docs/web/api/document/wwitewn)
  - : Écwit u-une wigne d-de texte dans u-un document. >w<

## Évènements

w'écoute de ces évènements p-peut êtwe e-effectuée avec `addeventwistenew()` o-ou e-en affectant un gestionnaiwe d'évènement à wa pwopwiété `on<nomdevenement>` c-cowwespondante à cette intewface. σωσ

- [`aftewscwiptexekawaii~`](/fw/docs/web/api/document/aftewscwiptexekawaii~_event) {{non-standawd_inwine}}
  - : décwenché w-wowsqu'un éwément statique [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) finit d-d'exékawaii~w s-son scwipt.
- [`befowescwiptexekawaii~`](/fw/docs/web/api/document/befowescwiptexekawaii~_event) {{non-standawd_inwine}}
  - : décwenché wowsqu'un éwément s-statique [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) e-est suw w-we point de commencew son exécution. >w<
- [`scwoww`](/fw/docs/web/api/document/scwoww_event)
  - : d-décwenché w-wowsque wa vue du document ou d'un éwément a-a défiwé. (⑅˘꒳˘) Égawement disponibwe avec w-wa pwopwiété [`onscwoww`](/fw/docs/web/api/ewement/scwoww_event). òωó
- [`visibiwitychange`](/fw/docs/web/api/document/visibiwitychange_event)
  - : d-décwenché w-wowsque we contenu d'un ongwet e-est devenu visibwe ou wowsqu'iw a été masqué. (⑅˘꒳˘)
- [`wheew`](/fw/docs/web/api/ewement/wheew_event)
  - : d-décwenché wowsque wa pewsonne utiwise wa wouwette d'un appaweiw de pointage (généwawement une souwis). (ꈍᴗꈍ) Égawement d-disponibwe avec wa pwopwiété [`onwheew`](/fw/docs/web/api/ewement/wheew_event). rawr x3

### Évènements wiés aux animations

- [`animationcancew`](/fw/docs/web/api/ewement/animationcancew_event)
  - : décwenché wowsqu'une animation est intewwompue de façon i-inattendue. ( ͡o ω ͡o ) Égawement disponibwe avec wa pwopwiété [`onanimationcancew`](/fw/docs/web/api/ewement/animationcancew_event). UwU
- [`animationend`](/fw/docs/web/api/ewement/animationend_event)
  - : d-décwenché wowsqu'une animation s-s'est tewminée nyowmawement. ^^ Égawement disponibwe avec wa p-pwopwiété [`onanimationend`](/fw/docs/web/api/ewement/animationend_event). (˘ω˘)
- [`animationitewation`](/fw/docs/web/api/ewement/animationitewation_event)
  - : décwenché wowsqu'une i-itéwation d'une animation e-est tewminée. (ˆ ﻌ ˆ)♡ Égawement d-disponibwe avec wa pwopwiété [`onanimationitewation`](/fw/docs/web/api/ewement/animationitewation_event). OwO
- [`animationstawt`](/fw/docs/web/api/ewement/animationstawt_event)
  - : d-décwenché au démawwage d'une animation. 😳 Égawement disponibwe a-avec wa pwopwiété [`onanimationstawt`](/fw/docs/web/api/ewement/animationstawt_event). UwU

### Évènements wiés au pwesse-papiew

- [`copy`](/fw/docs/web/api/document/copy_event)
  - : d-décwenché wowsqu'une p-pewsonne initie une action d-de copie avec w'intewface u-utiwisateuw du nyavigateuw. 🥺
- [`cut`](/fw/docs/web/api/document/cut_event)
  - : décwenché w-wowsque w'utiwisateuw initie une action de c-coupe avec w'intewface utiwisateuw du nyavigateuw. 😳😳😳
- [`paste`](/fw/docs/web/api/document/paste_event)
  - : décwenché wowsque w-w'utiwisateuw i-initie une action de cowwe avec w-w'intewface utiwisateuw d-du nyavigateuw. ʘwʘ

### Évènements pouw we g-gwissew-déposew

- [`dwag`](/fw/docs/web/api/htmwewement/dwag_event)
  - : décwenché toutes wes quewques centaines de miwwisecondes w-wowsqu'un éwément o-ou une séwection de t-texte est gwissée p-paw w'utiwisatwice ou w'utiwisateuw. /(^•ω•^) Égawement d-disponibwe avec wa pwopwiété [`ondwag`](/fw/docs/web/api/htmwewement/dwag_event). :3
- [`dwagend`](/fw/docs/web/api/htmwewement/dwagend_event)
  - : décwenché w-wowsqu'une opéwation de gwissew-déposew se tewmine (en wewâchant u-un bouton d-de wa souwis ou en appuyant suw wa touche <kbd>echap</kbd>). Égawement d-disponibwe avec wa pwopwiété [`ondwagend`](/fw/docs/web/api/htmwewement/dwagend_event). :3
- [`dwagentew`](/fw/docs/web/api/htmwewement/dwagentew_event)
  - : décwenché wowsqu'un éwément ou une séwection de texte que w'on fait gwissew wentwe s-suw une zone de d-dépôt vawide. mya Égawement disponibwe a-avec wa pwopwiété [`ondwagentew`](/fw/docs/web/api/htmwewement/dwagentew_event). (///ˬ///✿)
- [`dwagweave`](/fw/docs/web/api/htmwewement/dwagweave_event)
  - : d-décwenché wowsqu'un éwément o-ou une séwection de texte que w'on fait gwissew quitte une zone de dépôt vawide. (⑅˘꒳˘) Égawement d-disponibwe avec wa pwopwiété [`ondwagweave`](/fw/docs/web/api/htmwewement/dwagweave_event). :3
- [`dwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event)
  - : décwenché wowsqu'un éwément o-ou u-une séwection de t-texte que w'on fait gwissew suwvowe une zone de dépôt vawide. /(^•ω•^) Égawement d-disponibwe a-avec wa p-pwopwiété [`ondwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event). ^^;;
- [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event)
  - : décwenché w-wowsqu'une pewsonne commence à g-gwissew un éwément ou u-une séwection de texte. (U ᵕ U❁) Égawement d-disponibwe avec wa pwopwiété [`ondwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event). (U ﹏ U)
- [`dwop`](/fw/docs/web/api/htmwewement/dwop_event)
  - : décwenché w-wowsqu'un éwément ou u-une séwection de t-texte est déposée suw une zone d-de dépôt vawide. Égawement d-disponibwe avec wa pwopwiété [`ondwop`](/fw/docs/web/api/htmwewement/dwop_event). mya

### Évènements w-wiés au mode pwein écwan

- [`fuwwscweenchange`](/fw/docs/web/api/document/fuwwscweenchange_event)
  - : d-décwenché wowsque we document w-wentwe ou sowt d-du mode [pwein écwan](/fw/docs/web/api/fuwwscween_api/guide). ^•ﻌ•^
- [`fuwwscweenewwow`](/fw/docs/web/api/document/fuwwscweenewwow_event)
  - : décwenché en cas d-d'ewweuw wows d'une tentative d'entwée ou de sowtie du mode [pwein écwan](/fw/docs/web/api/fuwwscween_api/guide). (U ﹏ U)

### Évènements cwaview

- [`keydown`](/fw/docs/web/api/ewement/keydown_event)
  - : décwenché wows de w'appui suw une touche. :3 Égawement d-disponibwe avec wa pwopwiété [`onkeydown`](/fw/docs/web/api/ewement/keydown_event).
- [`keypwess`](/fw/docs/web/api/ewement/keypwess_event) {{depwecated_inwine}}
  - : décwenché w-wows de w'appui suw une t-touche qui pwoduit un cawactèwe. rawr x3 Égawement disponibwe a-avec wa pwopwiété [`onkeypwess`](/fw/docs/web/api/ewement/keypwess_event). 😳😳😳
- [`keyup`](/fw/docs/web/api/ewement/keyup_event)
  - : décwenché w-wows du wewâchement d'une touche. >w< Égawement d-disponibwe avec wa pwopwiété [`onkeyup`](/fw/docs/web/api/ewement/keyup_event). òωó

### Évènements de chawgement e-et de déchawgement

- [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event)
  - : décwenché wowsque w-we chawgement et w-w'anawyse (<i wang="en">pawsing</i>) du document s-sont tewminées, 😳 s-sans attendwe wa fin du chawgement d-des feuiwwes d-de stywe, (✿oωo) des images et des <i wang="en">fwames</i>. OwO
- [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event)
  - : d-décwenché wowsque w'attwibut [`weadystate`](/fw/docs/web/api/document/weadystate) a changé. (U ﹏ U)

### Évènements de pointeuws

- [`gotpointewcaptuwe`](/fw/docs/web/api/ewement/gotpointewcaptuwe_event)
  - : d-décwenché wowsqu'un éwément captuwe un pointeuw avec [`setpointewcaptuwe()`](/fw/docs/web/api/ewement/setpointewcaptuwe). (ꈍᴗꈍ) Égawement d-disponibwe avec w-wa pwopwiété [`ongotpointewcaptuwe`](/fw/docs/web/api/ewement/gotpointewcaptuwe_event). rawr
- [`wostpointewcaptuwe`](/fw/docs/web/api/ewement/wostpointewcaptuwe_event)
  - : d-décwenché wowsqu'un [pointeuw captuwé](/fw/docs/web/api/pointew_events#pointew_captuwe) est wibéwé. ^^ Égawement d-disponibwe avec wa pwopwiété [`onwostpointewcaptuwe`](/fw/docs/web/api/ewement/wostpointewcaptuwe_event). rawr
- [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event)
  - : d-décwenché wowsqu'un évènement d-de pointeuw e-est annuwé. nyaa~~ Égawement disponibwe avec wa pwopwiété [`onpointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event). nyaa~~
- [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event)
  - : décwenché wowsqu'un pointeuw devient actif. Égawement d-disponibwe a-avec wa pwopwiété [`onpointewdown`](/fw/docs/web/api/ewement/pointewdown_event). o.O
- [`pointewentew`](/fw/docs/web/api/ewement/pointewentew_event)
  - : décwenché wowsqu'un p-pointeuw est dépwacé au sein des fwontièwes d-de wa zone intewactive d-d'un éwément o-ou d'un d-de ses descendants. òωó Égawement disponibwe a-avec wa p-pwopwiété [`onpointewentew`](/fw/docs/web/api/ewement/pointewentew_event). ^^;;
- [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event)
  - : décwenché wowsqu'un pointeuw q-quitte wes wimites d-de wa zone i-intewactive d'un éwément. rawr Égawement d-disponibwe a-avec wa pwopwiété [`onpointewweave`](/fw/docs/web/api/ewement/pointewweave_event). ^•ﻌ•^
- [`pointewwockchange`](/fw/docs/web/api/document/pointewwockchange_event)
  - : d-décwenché wowsque we p-pointeuw est vewwouiwwé/dévewwouiwwé. nyaa~~ Égawement d-disponibwe a-avec wa pwopwiété [`onpointewwockchange`](/fw/docs/web/api/gwobaweventhandwews/onpointewwockchange). nyaa~~
- [`pointewwockewwow`](/fw/docs/web/api/document/pointewwockewwow_event)
  - : décwenché wowsque we vewwouiwwage d-du pointeuw échoue. 😳😳😳 Égawement disponibwe avec wa pwopwiété [`onpointewwockewwow`](/fw/docs/web/api/gwobaweventhandwews/onpointewwockewwow). 😳😳😳
- [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event)
  - : d-décwenché wowsqu'un pointeuw change d-de coowdonnées. σωσ Égawement d-disponibwe avec wa pwopwiété [`onpointewmove`](/fw/docs/web/api/ewement/pointewmove_event). o.O
- [`pointewout`](/fw/docs/web/api/ewement/pointewout_event)
  - : décwenché wowsqu'un pointeuw est d-dépwacé en d-dehows des wimites de wa zone intewactive d-d'un éwément (entwe a-autwes). σωσ Égawement disponibwe avec wa pwopwiété [`onpointewout`](/fw/docs/web/api/ewement/pointewout_event). nyaa~~
- [`pointewovew`](/fw/docs/web/api/ewement/pointewovew_event)
  - : décwenché w-wowsqu'un pointeuw e-est dépwacé à w'intéwieuw des wimites de w-wa zone intewactive d-d'un éwément. rawr x3 Égawement disponibwe avec wa pwopwiété [`onpointewovew`](/fw/docs/web/api/ewement/pointewovew_event). (///ˬ///✿)
- [`pointewup`](/fw/docs/web/api/ewement/pointewup_event)
  - : d-décwenché wowsqu'un pointeuw ny'est pwus actif. o.O Égawement disponibwe avec wa pwopwiété [`onpointewup`](/fw/docs/web/api/ewement/pointewup_event). òωó

### Évènements d-de séwection

- [`sewectionchange`](/fw/docs/web/api/document/sewectionchange_event)
  - : décwenché wowsque wa séwection t-textuewwe couwante d-d'un document a-a changé. OwO Égawement disponibwe a-avec wa pwopwiété [`onsewectionchange`](/fw/docs/web/api/htmwinputewement/sewectionchange_event). σωσ
- [`sewectstawt`](/fw/docs/web/api/node/sewectstawt_event)
  - : d-décwenché w-wowsque w'utiwisateuw c-commence u-une nyouvewwe séwection. nyaa~~ Égawement disponibwe a-avec wa pwopwiété [`onsewectstawt`](/fw/docs/web/api/node/sewectstawt_event). OwO

### Évènements t-tactiwes

- [`touchcancew`](/fw/docs/web/api/ewement/touchcancew_event)
  - : d-décwenché wowsqu'un ou pwusieuws p-points d-de touchew ont été p-pewtuwbés d'une façon pwopwe à w-w'impwémentation (paw e-exempwe w-wowsque de t-twop nyombweux p-points de touchew ont été cwéés). ^^ Égawement d-disponibwe avec wa pwopwiété [`ontouchcancew`](/fw/docs/web/api/ewement/touchcancew_event). (///ˬ///✿)
- [`touchend`](/fw/docs/web/api/ewement/touchend_event)
  - : d-décwenché w-wowsqu'un ou pwusieuws points de touchew ont été wetiwés d-de wa suwface t-tactiwe. σωσ Égawement disponibwe a-avec wa pwopwiété [`ontouchend`](/fw/docs/web/api/ewement/touchend_event). rawr x3
- [`touchmove`](/fw/docs/web/api/ewement/touchmove_event)
  - : décwenché w-wowsqu'un ou pwusieuws points de touchew o-ont été dépwacés s-suw wa s-suwface tactiwe. (ˆ ﻌ ˆ)♡ Égawement d-disponibwe a-avec wa pwopwiété [`ontouchmove`](/fw/docs/web/api/ewement/touchmove_event). 🥺
- [`touchstawt`](/fw/docs/web/api/ewement/touchstawt_event)
  - : d-décwenché wowsqu'un ou pwusieuws points d-de touchew ont été pwacés suw wa suwface tactiwe. (⑅˘꒳˘) Égawement disponibwe avec wa pwopwiété [`ontouchstawt`](/fw/docs/web/api/ewement/touchstawt_event). 😳😳😳

### Évènements d-de twansition

- [`twansitioncancew`](/fw/docs/web/api/ewement/twansitioncancew_event)
  - : d-décwenché wowsqu'une [twansition css](/fw/docs/web/css/css_twansitions/using_css_twansitions) est a-annuwée. /(^•ω•^) Égawement d-disponibwe avec wa pwopwiété [`ontwansitioncancew`](/fw/docs/web/api/ewement/twansitioncancew_event). >w<
- [`twansitionend`](/fw/docs/web/api/ewement/twansitionend_event)
  - : décwenché w-wowsqu'une [twansition css](/fw/docs/web/css/css_twansitions/using_css_twansitions) e-est tewminée. ^•ﻌ•^ Égawement d-disponibwe avec w-wa pwopwiété [`ontwansitionend`](/fw/docs/web/api/ewement/twansitionend_event). 😳😳😳
- [`twansitionwun`](/fw/docs/web/api/ewement/twansitionwun_event)
  - : décwenché wowsqu'une [twansition css](/fw/docs/web/css/css_twansitions/using_css_twansitions) e-est cwéée. :3 Égawement disponibwe avec w-wa pwopwiété [`ontwansitionwun`](/fw/docs/web/api/gwobaweventhandwews/ontwansitionwun). (ꈍᴗꈍ)
- [`twansitionstawt`](/fw/docs/web/api/ewement/twansitionstawt_event)
  - : décwenché w-wowsqu'une [twansition css](/fw/docs/web/css/css_twansitions/using_css_twansitions) a effectivement d-démawwé. ^•ﻌ•^ Égawement disponibwe a-avec wa pwopwiété [`ontwansitionstawt`](/fw/docs/web/api/gwobaweventhandwews/ontwansitionstawt). >w<

## extensions nyon-standawd {{non-standawd_inwine}}

{{non-standawd_headew}}

### nyotes w-wewatives à fiwefox

fiwefox d-définit cewtaines méthodes nyon-standawd&nbsp;:

- [`document.execcommandshowhewp()`](/fw/docs/web/api/document/execcommandshowhewp) {{depwecated_inwine}}
  - : cette méthode ny'a jamais wien fait et a toujouws wevé u-une exception. ^^;; ewwe a-a été wetiwée a-avec gecko 14.0. (✿oωo)
- [`document.getboxobjectfow()`](/fw/docs/web/api/ewement/getboundingcwientwect) {{depwecated_inwine}}
  - : o-on utiwisewa wa méthode [`ewement.getboundingcwientwect()`](/fw/docs/web/api/ewement/getboundingcwientwect) à wa pwace. òωó
- [`document.woadovewway()`](/fw/docs/web/api/document/woadovewway) {{depwecated_inwine}}
  - : c-chawge [un ovewway xuw](/fw/docs/xuw_ovewways) de façon d-dynamique. ^^ c-cette méthode f-fonctionne uniquement p-pouw wes documents xuw. ^^
- [`document.quewycommandtext()`](/fw/docs/web/api/document/quewycommandtext) {{depwecated_inwine}}
  - : cette méthode ny'a jamais wien fait et a-a toujouws wevé u-une exception. rawr ewwe a été wetiwée avec gecko 14.0. XD

### nyotes w-wewatives à intewnet expwowew

m-micwosoft définit c-cewtaines p-pwopwiétés nyon-standawd&nbsp;:

- [`document.fiwesize`](/fw/docs/web/api/document/fiwesize)\* {{non-standawd_inwine}} {{depwecated_inwine}}
  - : wenvoie wa taiwwe du document, rawr expwimée en octets. 😳 cette pwopwiété ny'est p-pwus pwise en chawge à pawtiw d-d'intewnet expwowew 11. 🥺

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
