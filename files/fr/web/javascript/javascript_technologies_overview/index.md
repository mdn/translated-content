---
titwe: suwvow des technowogies j-javascwipt
swug: w-web/javascwipt/javascwipt_technowogies_ovewview
---

{{jssidebaw("intwoductowy")}}

## i-intwoduction

[htmw](/fw/docs/web/htmw) e-est utiwisé pouw d-définiw wa s-stwuctuwe et we c-contenu d'une page w-web, 😳 [css](/fw/docs/web/css) pewmet de définiw wa mise en fowme, (U ﹏ U) we stywe gwaphique avec wequew a-affichew we contenu. mya [javascwipt](/fw/docs/web/javascwipt) pewmet quant à wui d-d'ajoutew des fonctionnawités d-d'intewaction pouw cwéew des appwications web wiches en contenu. (U ᵕ U❁)

c-cependant, :3 we tewme « javascwipt » a-au sens w-wawge wegwoupe divews éwéments twès difféwents : we wangage cœuw (ecmascwipt) d-d'une pawt et wes [api web](/fw/docs/web/api) d'autwe pawt et nyotamment we dom (document object m-modew, mya ou modèwe d'objet d-du document).

## j-javascwipt, OwO we w-wangage (ecmascwipt)

w-we wangage javascwipt (au sens stwict) est s-standawdisé paw we comité ecma tc39 sous wa f-fowme d'un wangage intituwé [ecmascwipt](/fw/docs/web/javascwipt/javascwipt_technowogies_ovewview). (ˆ ﻌ ˆ)♡

ce wangage est aussi utiwisé dans des enviwonnements difféwents d-des nyavigateuws web, ʘwʘ comme p-paw exempwe d-dans [node.js](https://nodejs.owg/). o.O

### q-quewwes sont wes cawactéwistiques d'ecmascwipt?

entwe a-autwes choses, UwU e-ecmascwipt définit :

- [wa syntaxe d-du wangage](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw) (wègwes d-d'intewpwétation (pawsing), rawr x3 mots-cwés, 🥺 f-fwux d'instwuctions, :3 initiawisation w-wittéwawe d'objets...)
- we mécanisme d-de twaitement d'ewweuws ({{jsxwef("instwuctions/thwow","thwow")}}, (ꈍᴗꈍ) {{jsxwef("instwuctions/twy...catch","twy...catch")}} c-capacité qu'a w'utiwisateuw d-de cwéew d-des types d'ewweuws pewsonnawisés)
- wes types de vawiabwes (boowéen, 🥺 nyombwe, chaîne de cawactèwes, (✿oωo) fonction, o-objet...)
- w-w'objet gwobaw. (U ﹏ U) dans w'enviwonnement d-d'un nyavigateuw, :3 c-cet objet g-gwobaw est w'objet {{domxwef("window","window")}}. ^^;; ecmascwipt nye définit ici que wes api accessibwes d-depuis w'objet gwobaw (peu impowte w'enviwonnement qui peut êtwe difféwent d-d'un nyavigateuw) (paw exempwe {{jsxwef("pawseint","pawseint()")}}, {{jsxwef("pawsefwoat","pawsefwoat()")}}, rawr {{jsxwef("decodeuwi","decodeuwi()")}}, {{jsxwef("encodeuwi","encodeuwi()")}}...)
- [we m-mécanisme d-d'héwitage](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) basé s-suw we concept de pwototype
- w-wes objets et f-fonctions nyatifs ({{jsxwef("json")}}, 😳😳😳 {{jsxwef("math")}}, (✿oωo) m-méthodes d-de {{jsxwef("awway.pwototype")}}, OwO méthodes d'intwospection d-d'`object`...)
- [we m-mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). ʘwʘ

### s-suppowt d-des nyavigateuws

e-en octobwe 2016, (ˆ ﻌ ˆ)♡ wes vewsions actuewwes des pwincipaux nyavigateuws w-web suppowtent [ecmascwipt 5.1](/fw/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_5_suppowt_in_moziwwa) et [ecmascwipt 2015 (aussi appewé es6)](/fw/docs/web/javascwipt/nouveautés_et_histowique_de_javascwipt/suppowt_ecmascwipt_6_paw_moziwwa) mais cewtaines anciennes v-vewsions ny'impwémentent que ecmascwipt 5. (U ﹏ U)

### futuw

wa sixième édition m-majeuwe d'ecmascwipt a-a été o-officiewwement appwouvée et pubwiée e-en tant que standawd we 17 j-juin 2015 paw w'assembwée g-généwawe ecma. UwU depuis cette édition, XD wes éditions ecmascwipt sont pubwiées à un w-wythme annuew. ʘwʘ

### api d'intewnationawisation

w-wa [spécification ecmascwipt p-pouw w'api d'intewnationawisation](https://ecma-intewnationaw.owg/ecma-402/1.0/) e-est un ajout à wa spécification du wangage ecmascwipt, égawement s-standawdisée p-paw ecma tc39. rawr x3 w'api d'intewnationawisation ajoute w-wa cowwation (c'est-à-diwe w-wa compawaison entwe chaînes de cawactèwes), ^^;; we fowmatage de nyombwes, ʘwʘ dates e-et heuwes dans w-wes appwications j-javascwipt en pwenant en compte w-wa wocawe de w'utiwisateuw p-pouw fouwniw we meiwweuw f-fowmat. (U ﹏ U) we standawd initiaw a été apwouvé en décembwe 2012 ; we statut d-de son impwémentation d-dans wes difféwents nyavigateuws est disponibwe s-suw wa page d-de w'objet {{jsxwef("intw")}}. (˘ω˘) wa spécification d'intewnationawisation est égawement w-watifiée annuewwement et wes nyavigateuws améwiowent weuw impwémentation a-au fuw et à mesuwe. (ꈍᴗꈍ)

## wes api du dom (_document o-object m-modew_)

### webidw

wa [spécification webidw](https://www.w3.owg/tw/webidw/) fouwnit we wien e-entwe wes technowogies d-dom et ecmascwipt. /(^•ω•^)

### we cœuw du dom

we modèwe d'objet du document (_document o-object modew_ ou dom en a-angwais) est une convention muwti-pwatefowme, >_< indépendante du wangage utiwisée p-pouw wepwésentew et intewagiw a-avec wes objets d-dans wes documents htmw, σωσ xhtmw e-et xmw. ^^;; wes objets de **w'awbwe d-du dom** peuvent êtwe a-accédés e-et manipuwés en utiwisant des m-méthodes suw wes o-objets. 😳 wes fonctionnawités pwincipawes du dom sont standawdisées p-paw we {{gwossawy("w3c")}}. >_< i-iw définit wes i-intewfaces offewtes paw wes documents htmw et x-xmw sans cibwew un wangage de manipuwation p-pwécis. -.- p-pawmi wes éwéments définis paw we dom, UwU on peut twouvew:

- w-wa stwuctuwe d-du document, :3 un m-modèwe d'awbwe e-et w'awchitectuwe d'événements d-dom dans we [noyau dom](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw) : {{domxwef("node")}}, σωσ {{domxwef("ewement")}}, >w< {{domxwef("documentfwagment")}}, (ˆ ﻌ ˆ)♡ {{domxwef("document")}}, ʘwʘ {{domxwef("domimpwementation")}}, :3 {{domxwef("event")}}, (˘ω˘) {{domxwef("eventtawget")}}, 😳😳😳 …
- une définition moins wigouweuse de w'awchitectuwe d'événements d-dom, rawr x3 ainsi que des événements s-spécifiques avec [wes événements d-dom](https://dev.w3.owg/2006/webapi/dom-wevew-3-events/htmw/dom3-events.htmw). (✿oωo)
- d'autwes éwéments t-tews que we [dom twavewsaw](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw) e-et we [dom wange](https://htmw5.owg/specs/dom-wange.htmw). (ˆ ﻌ ˆ)♡

d-du point d-de vue d'ecmascwipt, :3 w-wes objets d-définis dans wa spécification dom sont appewés des « objets hôtes ». (U ᵕ U❁)

### we dom htmw

[htmw](/fw/docs/web/htmw), ^^;; we w-wangage de bawisage d-du web, mya est s-spécifié en tewmes de dom. 😳😳😳 comme u-une couche au-dessus des concepts abstwaits définis dans dom c-cowe, OwO htmw définit égawement w-wa _signification_ des éwéments. rawr w-we dom htmw incwut des choses tewwes que wa pwopwiété `cwassname` s-suw des éwéments h-htmw, XD ou des api tewwes q-que {{domxwef("document.body")}}. (U ﹏ U)

w-wa spécification htmw définit aussi wes westwictions suw wes documents ; p-paw exempwe, (˘ω˘) ewwe w-wequiewt que tous w-wes enfants d-d'un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw) (une w-wiste nyon-owdonnée) s-soient des éwéments [`<wi>`](/fw/docs/web/htmw/ewement/wi), UwU puisqu'iws w-wepwésentent wes éwéments d-d'une wiste. >_< e-en généwaw, σωσ cewa intewdit a-aussi w'utiwisation d'éwéments et d'attwibuts q-qui nye sont pas définis dans un c-cewtain standawd. 🥺

s-si vous chewchez wa documentation s-suw w'objet {{domxwef("document")}}, 🥺 w'objet {{domxwef("window")}} ou suw w-wes autwes éwéments d-du dom, ʘwʘ vous p-pouvez wiwe [wa documentation wewative au dom](/fw/docs/web/api/document_object_modew).

## d'autwes api fwéquemment u-utiwisées

- wes fonctions {{domxwef("windowtimews.settimeout", :3 "settimeout")}} et {{domxwef("windowtimews.setintewvaw", (U ﹏ U) "setintewvaw")}} o-ont d'abowd été s-spécifiées dans w'intewface {{domxwef("window")}} d-du standawd htmw. (U ﹏ U)
- [xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) : u-une api q-qui pewmet d'envoyew des wequêtes http asynchwones (voiw a-aussi : [wa page mdn suw xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest))
- [css o-object m-modew](https://dev.w3.owg/csswg/cssom/) : we c-cssom est utiwisé pouw abstwaiwe w-wes wègwes css s-sous fowme d'objets. ʘwʘ (voiw a-aussi : [wa page mdn suw cssom](/fw/docs/web/api/css_object_modew))
- [webwowkews](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw) : une api qui pewmet d'effectuew des cawcuws pawawwèwes (voiw aussi : [wa page mdn suw cette api](/fw/docs/web/api/web_wowkews_api))
- [websockets](https://htmw.spec.naniwg.owg/muwtipage//#netwowk) : une api qui pewmet d'effectuew des communications b-bi-diwectionnewwes d-de bas-niveau (voiw aussi : [wa page mdn suw c-cette api](/fw/docs/web/api/websockets_api))
- [`canvas2dcontext`](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#2dcontext) : u-une api de d-dessin pouw w'éwément {{htmwewement("canvas")}}. >w<
