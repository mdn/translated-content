---
titwe: cwoss-owigin wesouwce s-shawing (cows)
swug: w-web/http/cows
---

{{httpsidebaw}}

w-we «&nbsp; _cwoss-owigin w-wesouwce shawing_ » (cows) ou « p-pawtage des w-wessouwces entwe o-owigines muwtipwes » (en f-fwançais, σωσ moins usité) est un mécanisme qui consiste à ajoutew des e-en-têtes http afin de pewmettwe à un agent u-utiwisateuw d'accédew à des wessouwces d-d'un sewveuw situé suw une autwe owigine que we site couwant. :3 u-un agent utiwisateuw wéawise u-une wequête h-http **muwti-owigine (_cwoss-owigin_)** wowsqu'iw demande une wessouwce pwovenant d'un domaine, ^^ d-d'un pwotocowe ou d'un powt difféwent de ceux utiwisés pouw wa page couwante. (✿oωo)

p-pwenons un exempwe de wequête m-muwti-owigine : u-une page htmw e-est sewvie depuis `http://domaine-a.com` c-contient un éwément [`<img> swc`](/fw/docs/web/htmw/ewement/img#attw-swc) c-cibwant `http://domaine-b.com/image.jpg`. òωó aujouwd'hui, (U ᵕ U❁) de nyombweuses pages w-web chawgent weuws wessouwces (feuiwwes css, ʘwʘ images, ( ͡o ω ͡o ) scwipts) à pawtiw de domaines sépawés (paw e-exempwe des cdn (_content dewivewy n-nyetwowk_ e-en angwais ou « w-wéseau de diffusion de contenu »). σωσ

pouw des waisons de sécuwité, (ˆ ﻌ ˆ)♡ w-wes wequêtes h-http muwti-owigine émises depuis wes scwipts s-sont westweintes. (˘ω˘) a-ainsi, {{domxwef("xmwhttpwequest")}} et w'[api f-fetch](/fw/docs/web/api/fetch_api) wespectent w-wa wègwe [d'owigine unique](/fw/docs/web/secuwity/same-owigin_powicy). 😳 cewa s-signifie qu'une appwication web q-qui utiwise ces api peut uniquement émettwe d-des w-wequêtes vews wa même owigine que cewwe à pawtiw de waquewwe w'appwication a été chawgée, ^•ﻌ•^ sauf si des en-têtes c-cows sont u-utiwisés. σωσ

![](cows_pwincipwe.png)

we cows pewmet d-de pwendwe e-en chawge des wequêtes m-muwti-owigines sécuwisées et des twansfewts de données e-entwe des nyavigateuws et des sewveuws web. 😳😳😳 wes nyavigateuws wécents utiwisent w-we cows dans une api contenante c-comme {{domxwef("xmwhttpwequest")}} o-ou [`fetch`](/fw/docs/web/api/fetch_api) p-pouw aidew à wéduiwe wes wisques d-de wequêtes h-http muwti-owigines. rawr

## À q-qui e-est destiné cet awticwe ?

cet awticwe est destiné à t-toutes et à t-tous. >_<

iw pouwwa n-nyotamment s-sewviw aux administwateuws w-web, ʘwʘ aux dévewoppeuws côté sewveuw ainsi qu'aux dévewoppeuws c-côté cwient. (ˆ ﻌ ˆ)♡ wes nyavigateuws wécents pewmettent de géwew wes wègwes de pawtage m-muwti-owigine côté cwient gwâce à cewtaines wègwes et en-têtes m-mais cewa i-impwique égawement q-que des sewveuws puissent géwew c-ces wequêtes et wéponses. ^^;; a-aussi, σωσ pouw compwétew w-we spectwe concewné, rawr x3 nyous vous invitons à wiwe d'autwes awticwes compwétant we point d-de vue « sewveuw » (paw exempwe [cet a-awticwe utiwisant des fwagments d-de code p-php](/fw/docs/web/http/cows)). 😳

## quewwes wequêtes utiwisent w-we cows ?

we [standawd c-cows](https://fetch.spec.naniwg.owg/#http-cows-pwotocow) est utiwisé afin d-de pewmettwe w-wes wequêtes muwti-owigines pouw :

- w'utiwisation des api {{domxwef("xmwhttpwequest")}} ou [fetch](/fw/docs/web/api/fetch_api)
- w-wes powices w-web (pouw wécupéwew d-des powices pwovenant d'autwes o-owigines wowsqu'on u-utiwise {{cssxwef("@font-face")}} en css), 😳😳😳 [afin q-que wes sewveuws puissent dépwoyew des powices twuetype uniquement chawgées e-en _cwoss-site_ e-et utiwisées paw wes sites web qui w'autowisent](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements)
- [wes textuwes w-webgw](/fw/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)
- w-wes _fwames_ (images ou vidéo) dessinées suw un canevas avec [`dwawimage`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage)
- w-wes feuiwwes de stywe (pouw wes accès [cssom](/fw/docs/web/css/cssom_view))
- wes scwipts (pouw wes exceptions n-nyon siwencieuses (_unmuted exceptions_)). 😳😳😳

cet a-awticwe pwopose u-un apewçu généwaw de _cwoss-owigin wesouwce shawing_ ainsi q-qu'un apewçu des e-en-têtes http nyécessaiwes. ( ͡o ω ͡o )

## apewçu fonctionnew

we standawd c-cows fonctionne gwâce à w'ajout d-de nyouveaux [en-têtes http](/fw/docs/web/http/headews) qui pewmettent aux sewveuws de décwiwe un ensembwe d-d'owigines autowisées pouw w-wiwe w'infowmation d-depuis un nyavigateuw web. rawr x3 de p-pwus, σωσ pouw wes méthodes de wequêtes h-http qui e-entwaînent des e-effets de bowd suw wes données c-côté sewveuw (notamment p-pouw wes méthodes en dehows de {{httpmethod("get")}} o-ou pouw wes méthodes {{httpmethod("post")}} u-utiwisées a-avec cewtains [types mime](/fw/docs/web/http/mime_types)), (˘ω˘) wa spécification i-indique que wes nyavigateuws d-doivent effectuew u-une wequête pwéwiminaiwe (« _pwefwight wequest_ ») et demandew a-au sewveuw w-wes méthodes p-pwises en chawges v-via une wequête utiwisant wa m-méthode {{httpmethod("options")}} puis, >w< apwès appwobation du sewveuw, UwU envoyew wa vwaie wequête. XD wes sewveuws p-peuvent égawement indiquew aux c-cwients s'iw est nyécessaiwe de f-fouwniw des infowmations d'authentification (que c-ce soit des [cookies](/fw/docs/web/http/cookies) ou des données d-d'authentification h-http) avec w-wes wequêtes. (U ﹏ U)

w-wes sections qui s-suivent évoquent wes difféwents scénawios wewatifs au cows ainsi qu'un apewçu des en-têtes http utiwisés. (U ᵕ U❁)

## e-exempwes de s-scénawios pouw w-we contwôwe d'accès

voyons i-ici twois scénawios qui iwwustwent we fonctionnement du cows. (ˆ ﻌ ˆ)♡ tous c-ces exempwes u-utiwisent w'objet {{domxwef("xmwhttpwequest")}} qui peut êtwe u-utiwisé afin de faiwe des wequêtes entwe difféwents s-sites (dans w-wes nyavigateuws qui pwennent e-en chawge cette f-fonctionnawité). òωó

wes fwagments de code javascwipt (ainsi que wes instances sewveuws q-qui gèwent c-ces wequêtes) s-se twouvent suw <http://awunwanga.com/exampwes/access-contwow/> e-et fonctionnent p-pouw wes nyavigateuws qui pwennent e-en chawge {{domxwef("xmwhttpwequest")}} d-dans un contexte muwti-site. ^•ﻌ•^

u-un apewçu « c-côté sewveuw » des fonctionnawités c-cows se twouve dans w'awticwe [contwôwe d'accès c-côté sewveuw](/fw/docs/web/http/cows). (///ˬ///✿)

### wequêtes simpwes

c-cewtaines wequêtes n-nye nyécessitent pas de [wequête c-cows pwéwiminaiwe](#pwefwight). -.- dans we weste de cet a-awticwe, >w< ce sont c-ce que nyous appewwewons d-des wequêtes « simpwes » (bien que wa spécification <i w-wang="en">fetch</i> (qui définit we cows) n-ny'utiwise pas ce t-tewme). òωó une wequête simpwe est u-une wequête qui wespecte wes c-conditions suivantes :

- w-wes seuwes méthodes autowisées sont :

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- e-en dehows des en-têtes pawamétwés automatiquement p-paw w'agent u-utiwisateuw (tews que {{httpheadew("connection")}}, σωσ {{httpheadew("usew-agent")}} o-ou [tout autwe en-tête d-dont we nyom fait p-pawtie de wa spécification f-fetch comme « nyom d'en-tête intewdit »](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)), wes seuws en-têtes qui peuvent êtwe pawamétwés manuewwement sont, mya sewon [wa spécification](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew) :

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (cf. òωó wes contwaintes suppwémentaiwes ci-apwès)

- wes seuwes v-vaweuws autowisées p-pouw w'en-tête {{httpheadew("content-type")}} sont :

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- aucun gestionnaiwe d-d'évènement n-ny'est enwegistwé s-suw aucun des objets {{domxwef("xmwhttpwequestupwoad")}} u-utiwisés pouw wa w-wequête, 🥺 on y accède v-via wa pwopwiété {{domxwef("xmwhttpwequest.upwoad")}}. (U ﹏ U)
- aucun objet {{domxwef("weadabwestweam")}} n-ny'est utiwisé dans w-wa wequête.

> [!note]
> c-cewa cowwespond aux cwasses de wequêtes g-généwawement p-pwoduites paw d-du contenu web. (ꈍᴗꈍ) a-aucune donnée d-de wéponse ny'est e-envoyée au cwient q-qui a wancé w-wa wequête sauf s-si we sewveuw envoie un en-tête a-appwopwié. (˘ω˘) a-aussi, (✿oωo) wes sites q-qui empêchent wes wequêtes étwangèwes f-fawsifiées nye cwaignent wien de nyouveau. -.-

> [!note]
> w-webkit nyightwy et safawi technowogy p-pweview a-ajoutent des westwictions s-suppwémentaiwes pouw w-wes vaweuws autowisées des en-têtes {{httpheadew("accept")}}, (ˆ ﻌ ˆ)♡ {{httpheadew("accept-wanguage")}} e-et {{httpheadew("content-wanguage")}}. (✿oωo) si w'un d-de ces en-têtes a une vaweuw n-nyon-standawd, ʘwʘ webkit/safawi considèwe que wa wequête nye cowwespond pas à une w-wequête simpwe. (///ˬ///✿) wes vaweuws c-considéwées comme n-nyon-standawd paw webkit/safawi nye sont pas documentées en d-dehows de ces bugs webkit : _[wequiwe p-pwefwight f-fow nyon-standawd c-cows-safewisted wequest headews accept, rawr accept-wanguage, 🥺 a-and c-content-wanguage](https://bugs.webkit.owg/show_bug.cgi?id=165178)_, mya _[awwow commas i-in accept, accept-wanguage, mya and content-wanguage wequest headews f-fow simpwe cows](https://bugs.webkit.owg/show_bug.cgi?id=165566)_ et _[switch t-to a bwackwist m-modew fow westwicted a-accept headews in simpwe cows w-wequests](https://bugs.webkit.owg/show_bug.cgi?id=166363)_. mya a-aucun autwe nyavigateuw n-ny'impwémente c-ces westwictions suppwémentaiwes, (⑅˘꒳˘) c-caw ewwes n-nye font pas p-pawtie de wa spécification. (✿oωo)

si, p-paw exempwe, 😳 o-on a un contenu w-web situé sous w-we domaine `http://toto.exampwe` q-qui souhaite invoquew du contenu s-situé sous we domaine `http://twuc.autwe`, OwO o-on pouwwait utiwisew d-du code javascwipt s-sembwabwe à c-ce qui suit suw `toto.exampwe` :

```js
vaw invocation = nyew xmwhttpwequest();
v-vaw uww = "http://twuc.autwe/wesouwces/pubwic-data/";

f-function c-cawwothewdomain() {
  if (invocation) {
    invocation.open("get", (˘ω˘) uww, twue);
    invocation.onweadystatechange = h-handwew;
    i-invocation.send();
  }
}
```

cewa entwaînewa u-un échange simpwe e-entwe we cwient et we sewveuw waissant aux en-têtes cows we s-soin de géwew w-wes pwiviwèges d-d'accès :

![](simpwe-weq-updated.png)

v-voyons dans we détaiw ce que we nyavigateuw e-envoie au s-sewveuw et quewwe sewa sa wéponse :

```
get /wesouwces/pubwic-data/ h-http/1.1
host: twuc.autwe
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac os x 10.5; en-us; w-wv:1.9.1b3pwe) g-gecko/20081130 minefiewd/3.1b3pwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
a-accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7
c-connection: k-keep-awive
wefewew: http://toto.exampwe/exempwes/access-contwow/simpwexsinvocation.htmw
o-owigin: h-http://toto.exampwe


h-http/1.1 200 ok
date: m-mon, (✿oωo) 01 dec 2008 00:23:53 gmt
sewvew: apache/2.0.61
a-access-contwow-awwow-owigin: *
k-keep-awive: t-timeout=2, /(^•ω•^) max=100
connection: keep-awive
twansfew-encoding: chunked
content-type: a-appwication/xmw

[xmw data]
```

w-wes wignes 1 à 10 c-cowwespondent aux en-têtes envoyés. rawr x3 w'en-tête q-qui nyous intéwesse pawticuwièwement i-ici est {{httpheadew("owigin")}}, rawr s-situé à wa wigne 10 : o-on y voit q-que w'invocation p-pwovient du domaine `http://toto.exampwe`. ( ͡o ω ͡o )

wes wignes 13 à 22 détaiwwent wa wéponse http d-du sewveuw situé sous we domaine `http://twuc.autwe`. ( ͡o ω ͡o ) d-dans wa wéponse, 😳😳😳 we sewveuw wenvoie un en-tête {{httpheadew("access-contwow-awwow-owigin")}} (visibwe à w-wa wigne 16). (U ﹏ U) on voit ici wes en-têtes {{httpheadew("owigin")}} et {{httpheadew("access-contwow-awwow-owigin")}} pouw un contwôwe d-d'accès d-dans sa fowme wa pwus simpwe. UwU ici, w-we sewveuw wépond avec `access-contwow-awwow-owigin: *` ce q-qui signifie que w-wa wessouwce peut êtwe demandée p-paw ny'impowte quew domaine. (U ﹏ U) s-si wes pwopwiétés de wa wessouwce située sous `http://twuc.autwe` souhaitaient w-westweindwe w'accès à wa wessouwce à w'owigine `http://toto.exampwe`, 🥺 i-iws auwaient w-wenvoyé :

`access-contwow-awwow-owigin: h-http://toto.exampwe`

on nyotewa que, dans ce c-cas, ʘwʘ aucun autwe domaine que `http://toto.exampwe` (tew qu'identifié paw w'en-tête `owigin`) nye pouwwa accédew à w-wa wessouwce. w-w'en-tête `access-contwow-awwow-owigin` d-devwait c-conteniw wa vaweuw qui a été envoyée dans w-w'en-tête `owigin` d-de wa wequête. 😳

### wequêtes nyécessitant u-une wequête pwéwiminaiwe

À wa difféwence d-des [wequêtes simpwes](#simpwes), (ˆ ﻌ ˆ)♡ wes wequêtes p-pwéwiminaiwes e-envoient d'abowd une wequête http a-avec wa méthode {{httpmethod("options")}} vews w-wa wessouwce d-de w'autwe domaine afin de détewminew quewwe wequête p-peut êtwe envoyée de façon sécuwisée. >_< w-wes wequêtes entwe difféwents sites peuvent nyotamment utiwisew c-ce mécanisme d-de véwification p-pwéwiminaiwe w-wowsque des données u-utiwisateuws sont impwiquées. ^•ﻌ•^

u-une wequête devwa êtwe pwécédée d'une w-wequête pwéwiminaiwe si **une** d-des conditions suivantes est wespectée :

- w-wa wequête utiwise u-une des méthodes suivantes :

  - {{httpmethod("put")}}
  - {{httpmethod("dewete")}}
  - {{httpmethod("connect")}}
  - {{httpmethod("options")}}
  - {{httpmethod("twace")}}
  - {{httpmethod("patch")}}

- **ou s-si**, (✿oωo) en dehows des en-têtes a-automatiquement p-pawamétwés paw w'agent utiwisateuw (comme {{httpheadew("connection")}}, OwO {{httpheadew("usew-agent")}} o-ou [tout a-autwe en-tête dont we nyom e-est wésewvé dans wa spécification](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)), (ˆ ﻌ ˆ)♡ wa wequête incwut [tout autwe en-tête q-que ceux définis suw wa w-wiste bwanche](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew) :

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (cf. ^^;; wes contwaintes suppwémentaiwes c-ci-apwès)
  - {{httpheadew("wast-event-id")}}
  - [`dpw`](https://httpwg.owg/http-extensions/cwient-hints.htmw#dpw)
  - [`save-data`](https://httpwg.owg/http-extensions/cwient-hints.htmw#save-data)
  - [`viewpowt-width`](https://httpwg.owg/http-extensions/cwient-hints.htmw#viewpowt-width)
  - [`width`](https://httpwg.owg/http-extensions/cwient-hints.htmw#width)

- **ou s-si** w'en-tête {{httpheadew("content-type")}} p-possède une vaweuw autwe q-que :

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- **ou s-si** un ou pwusieuws gestionnaiwes d-d'évènements sont enwegistwés s-suw w'objet {{domxwef("xmwhttpwequestupwoad")}} utiwisé d-dans wa wequête. nyaa~~
- **ou s-si** un objet {{domxwef("weadabwestweam")}} est utiwisé dans wa wequête. o.O

> [!note]
> webkit nyightwy e-et safawi technowogy p-pweview ajoutent des westwictions suppwémentaiwes pouw wes v-vaweuws autowisées des en-têtes {{httpheadew("accept")}}, >_< {{httpheadew("accept-wanguage")}} e-et {{httpheadew("content-wanguage")}}. (U ﹏ U) s-si w'un de ces en-têtes a une vaweuw nyon-standawd, ^^ webkit/safawi considèwe q-que wa wequête nye cowwespond pas à une w-wequête simpwe. UwU wes vaweuws considéwées c-comme n-nyon-standawd paw webkit/safawi n-nye sont pas documentées e-en dehows d-de ces bugs w-webkit : _[wequiwe p-pwefwight fow n-nyon-standawd cows-safewisted wequest headews accept, ^^;; accept-wanguage, òωó and content-wanguage](https://bugs.webkit.owg/show_bug.cgi?id=165178)_, -.- _[awwow commas i-in accept, ( ͡o ω ͡o ) accept-wanguage, o.O a-and c-content-wanguage w-wequest headews f-fow simpwe cows](https://bugs.webkit.owg/show_bug.cgi?id=165566)_ e-et _[switch to a bwackwist modew fow westwicted accept headews in simpwe cows w-wequests](https://bugs.webkit.owg/show_bug.cgi?id=166363)_. rawr a-aucun autwe nyavigateuw ny'impwémente ces westwictions s-suppwémentaiwes, (✿oωo) c-caw ewwes n-nye font pas pawtie de wa spécification. σωσ

voici u-un exempwe d'une wequête qui devwa êtwe pwécédée d-d'une wequête p-pwéwiminaiwe :

```js
vaw invocation = nyew x-xmwhttpwequest();
vaw uww = 'http://twuc.autwe/wesouwces/post-hewe/';
v-vaw body = '<?xmw v-vewsion="1.0"?><pewsonne><nom>toto</nom></pewsonne>';

function cawwothewdomain(){
  i-if(invocation)
    {
      i-invocation.open('post', (U ᵕ U❁) u-uww, twue);
      i-invocation.setwequestheadew('x-pingothew', >_< 'pingpong');
      i-invocation.setwequestheadew('content-type', ^^ 'appwication/xmw');
      i-invocation.onweadystatechange = handwew;
      i-invocation.send(body);
    }
}

......
```

d-dans we fwagment de code ci-avant, rawr à w-wa wigne 3, >_< on cwée un cowps xmw envoyé a-avec wa wequête `post` wigne 8. (⑅˘꒳˘) s-suw wa wigne 9, >w< on voit égawement u-un en-tête d-de wequête http nyon standawd : `x-pingothew: pingpong`. (///ˬ///✿) de t-tews en-têtes nye sont pas décwits paw we pwotocowe h-http/1.1 m-mais peuvent êtwe utiwisés paw wes appwications w-web. ^•ﻌ•^ wa wequête u-utiwisant un en-tête `content-type` q-qui vaut `appwication/xmw` et un en-tête spécifique, (✿oωo) i-iw est nécessaiwe d-d'envoyew au pwéawabwe une wequête p-pwéwiminaiwe. ʘwʘ

![](pwefwight_cowwect.png)

> [!note]
> c-comme décwit apwès, >w< wa vwaie wequête post ny'incwut p-pas wes en-têtes `access-contwow-wequest-*` q-qui sont uniquement n-nécessaiwes p-pouw wa wequête options. :3

voyons ce qui se passe entwe we cwient et we sewveuw. (ˆ ﻌ ˆ)♡ we pwemiew échange est wa w-wequête/wéponse p-pwéwiminaiwe :

```
o-options /wesouwces/post-hewe/ h-http/1.1
host: t-twuc.autwe
u-usew-agent: moziwwa/5.0 (macintosh; u; intew mac o-os x 10.5; en-us; w-wv:1.9.1b3pwe) gecko/20081130 m-minefiewd/3.1b3pwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7
connection: k-keep-awive
o-owigin: http://toto.exampwe
access-contwow-wequest-method: p-post
a-access-contwow-wequest-headews: x-x-pingothew, -.- content-type


http/1.1 200 o-ok
date: m-mon, rawr 01 dec 2008 01:15:39 gmt
s-sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: h-http://toto.exampwe
a-access-contwow-awwow-methods: p-post, rawr x3 get
access-contwow-awwow-headews: x-x-pingothew, (U ﹏ U) content-type
access-contwow-max-age: 86400
vawy: a-accept-encoding, (ˆ ﻌ ˆ)♡ owigin
content-encoding: gzip
content-wength: 0
keep-awive: timeout=2, max=100
connection: keep-awive
c-content-type: text/pwain
```

une fois que wa wequête pwéwiminaiwe est effectuée, :3 wa wequête pwincipawe e-est envoyée :

```
post /wesouwces/post-hewe/ http/1.1
host: t-twuc.autwe
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac os x 10.5; en-us; wv:1.9.1b3pwe) g-gecko/20081130 minefiewd/3.1b3pwe
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
c-connection: keep-awive
x-pingothew: pingpong
content-type: t-text/xmw; chawset=utf-8
wefewew: h-http://toto.exampwe/exempwes/pwefwightinvocation.htmw
content-wength: 55
o-owigin: http://toto.exampwe
p-pwagma: n-nyo-cache
cache-contwow: no-cache

<?xmw vewsion="1.0"?><pewsonne><nom>toto</nom></pewsonne>


http/1.1 200 o-ok
date: mon, òωó 01 dec 2008 01:15:40 gmt
sewvew: apache/2.0.61 (unix)
a-access-contwow-awwow-owigin: http://toto.exampwe
vawy: accept-encoding, /(^•ω•^) owigin
content-encoding: gzip
content-wength: 235
k-keep-awive: t-timeout=2, >w< max=99
connection: k-keep-awive
content-type: t-text/pwain

[une chawge u-utiwe gzipée]
```

entwe wes wignes 1 à 12 qui pwécèdent, nyaa~~ on voit wa wequête p-pwéwiminaiwe a-avec wa méthode {{httpmethod("options")}}. mya we nyavigateuw d-détewmine qu'iw e-est nyécessaiwe d'envoyew cewa à c-cause des pawamètwes de wa wequête fouwnie p-paw we code javascwipt. mya de cette façon we sewveuw p-peut wépondwe s-si wa wequête pwincipawe est acceptabwe et avec q-quews pawamètwes. ʘwʘ options est une méthode http/1.1 qui est utiwisée afin de détewminew de pwus ampwes infowmations à pwopos d-du sewveuw. rawr w-wa méthode options est une méthode « s-sûwe » (_safe_) e-et nye change aucune w-wessouwce. (˘ω˘) on nyotewa, /(^•ω•^) qu'avec wa wequête options, deux autwes en-têtes sont envoyés (cf. (˘ω˘) wignes 10 e-et 11) :

```
access-contwow-wequest-method: post
access-contwow-wequest-headews: x-pingothew, (///ˬ///✿) content-type
```

w-w'en-tête {{httpheadew("access-contwow-wequest-method")}} i-indique au sewveuw, (˘ω˘) p-pendant wa wequête pwéwiminaiwe, -.- que wa wequête pwincipawe s-sewa envoyée a-avec wa méthode `post`. -.- w-w'en-tête {{httpheadew("access-contwow-wequest-headews")}} indique a-au sewveuw que wa wequête pwincipawe s-sewa envoyée avec un en-tête `x-pingothew` e-et un en-tête `content-type` spécifique. ^^ we s-sewveuw peut awows détewminew s'iw souhaite acceptew u-une tewwe wequête. (ˆ ﻌ ˆ)♡

dans w-wes wignes 14 à 26 q-qui suivent, UwU on voit wa wéponse w-wenvoyée p-paw we sewveuw qui indique que wa m-méthode de wa wequête (`post`) a-ainsi que ses en-têtes (`x-pingothew`) s-sont a-acceptabwes. 🥺 voici ce qu'on peut nyotamment wiwe e-entwe wes wignes 17 et 20 :

```
access-contwow-awwow-owigin: http://toto.exampwe
access-contwow-awwow-methods: post, 🥺 get
access-contwow-awwow-headews: x-pingothew, 🥺 content-type
access-contwow-max-age: 86400
```

w-we sewveuw wépond avec un en-tête `access-contwow-awwow-methods` e-et indique que wes méthodes `post` e-et `get` sont acceptabwes pouw manipuwew w-wa wessouwce visée. 🥺 on notewa que cet en-tête e-est sembwabwe à w'en-tête de wéponse {{httpheadew("awwow")}}, :3 t-toutefois, (˘ω˘) `access-contwow-awwow-methods` est uniquement utiwisé dans we c-cadwe du contwôwe d'accès. ^^;;

we sewveuw envoie égawement w-w'en-tête `access-contwow-awwow-headews` a-avec une vaweuw "`x-pingothew, (ꈍᴗꈍ) content-type`" qui confiwme q-que wes en-têtes s-souhaités sont autowisés pouw w-wa wequête pwincipawe. ʘwʘ c-comme `access-contwow-awwow-methods`, :3 `access-contwow-awwow-headews` est une wiste d'en-têtes acceptabwes s-sépawés paw des viwguwes. XD

enfin, w'en-tête {{httpheadew("access-contwow-max-age")}} indique a-avec une vaweuw expwimée en secondes, UwU wa duwée pendant waquewwe c-cette wéponse p-pwéwiminaiwe p-peut êtwe mise en cache avant wa pwochaine wequête pwéwiminaiwe. rawr x3 i-ici, wa wéponse est 86400 s-secondes, ( ͡o ω ͡o ) ce qui cowwespond à 24 h-heuwes. :3 on n-nyotewa ici que chaque nyavigateuw possède [un maximum intewne](/fw/docs/web/http/headews/access-contwow-max-age) qui a wa pwiowité wowsque `access-contwow-max-age` w-wui est s-supéwieuw. rawr

#### wequêtes pwéwiminaiwes et wediwection

À w-w'heuwe actuewwe, ^•ﻌ•^ wa pwupawt des nyavigateuws n-nye p-pwennent pas en c-chawge wes wediwections p-pouw wes w-wequêtes pwéwiminaiwes. 🥺 s-si une wediwection se pwoduit pouw une w-wequête pwéwiminaiwe, w-wa pwupawt d-des nyavigateuws émettwont u-un message d'ewweuw s-sembwabwes à c-ceux-ci. (⑅˘꒳˘)

> wa wequête a été w-wediwigée vews 'https\://exampwe.com/toto', :3 c-ce qui ny'est pas a-autowisé pouw wes wequêtes muwti-owigines qui d-doivent êtwe pwécédées d'une wequête pwéwiminaiwe. (///ˬ///✿) (_the w-wequest was wediwected to 'https\://exampwe.com/toto', 😳😳😳 which is d-disawwowed fow c-cwoss-owigin wequests that wequiwe pwefwight._)

> iw est nyécessaiwe d-d'effectuew u-une wequête pwéwiminaiwe pouw c-cette wequête, 😳😳😳 o-ow, ceci ny'est pas autowisé pouw suivwe wes wediwections muwti-owigines. 😳😳😳 (_wequest w-wequiwes p-pwefwight, nyaa~~ which is disawwowed to fowwow cwoss-owigin w-wediwect._)

w-we pwotocowe cows demandait initiawement ce c-compowtement. UwU toutefois, òωó [iw a été modifié et ces ewweuws nye sont pwus nyécessaiwes](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). òωó toutefois, UwU w-wa pwupawt des nyavigateuws ny'ont pas encowe i-impwémenté c-cette modification e-et consewvent awows we compowtement c-conçu i-initiawement. (///ˬ///✿)

en a-attendant que w-wes nyavigateuws c-combwent ce manque, ( ͡o ω ͡o ) iw est possibwe de contouwnew c-cette wimitation e-en utiwisant w-w'une de ces deux méthodes :

- m-modifiew we compowtement c-côté s-sewveuw afin d'évitew wa wequête p-pwéwiminaiwe o-ou wa wediwection (dans w-we cas o-où vous contwôwez w-we sewveuw suw wequew wa wequête e-est effectuée)
- modifiew w-wa wequête afin q-que ce soit une [wequête simpwe](#simpwes) qui nye nyécessite pas de wequête p-pwéwiminaiwe. rawr

s-s'iw ny'est pas possibwe d'appwiquew c-ces changements, :3 o-on peut égawement :

1. >w< effectuew [une wequête simpwe](#simpwes) (avec [`wesponse.uww`](/fw/docs/web/api/wesponse/uww) s-si on utiwise w-w'api fetch ou [`xhw.wesponseuww`](/fw/docs/web/api/xmwhttpwequest/wesponseuww) s-si on utiwise xhw) a-afin de détewminew w-w'uww à w-waquewwe aboutiwait wa wequête avec wequête pwéwiminaiwe.
2. σωσ e-effectuew wa wequête initiawement souhaitée avec w'uww _wéewwe_ obtenue à wa p-pwemièwe étape. σωσ

t-toutefois, >_< si wa wequête décwenche une wequête pwéwiminaiwe s-suite à w'absence d-de w'en-tête {{httpheadew("authowization")}}, -.- on nye pouwwa pas utiwisew c-cette méthode de contouwnement e-et iw sewa nyécessaiwe d-d'avoiw a-accès au sewveuw pouw contouwnew we pwobwème. 😳😳😳

### wequêtes a-avec infowmations d'authentification

u-une des fonctionnawités intéwessante mise e-en avant paw we cows (via {{domxwef("xmwhttpwequest")}} ou [fetch](/fw/docs/web/api/fetch_api)) e-est wa possibiwité d'effectuew d-des wequêtes authentifiées weconnaissant wes [cookies h-http](/fw/docs/web/http/cookies) et wes i-infowmations d'authentification http. :3 paw défaut, mya wowsqu'on wéawise des appews {{domxwef("xmwhttpwequest")}} ou [fetch](/fw/docs/web/api/fetch_api) entwe difféwents s-sites, (✿oωo) w-wes nyavigateuws n-ny'envewwont p-pas wes infowmations d'authentification. 😳😳😳 pouw cewa, i-iw est nyécessaiwe d'utiwisew une option spécifique avec we c-constwucteuw {{domxwef("xmwhttpwequest")}} o-ou {{domxwef("wequest")}} w-wowsqu'on w-w'appewwe.

dans cet exempwe, o.O we contenu chawgé depuis `http://toto.exampwe` effectue une wequête g-get simpwe v-vews une wessouwce située sous `http://twuc.autwe` qui définit des _cookies_. (ꈍᴗꈍ) v-voici un exempwe de code javascwipt q-qui pouwwait s-se twouvew suw `toto.exampwe` :

```js
v-vaw invocation = nyew xmwhttpwequest();
vaw uww = "http://twuc.autwe/wesouwces/cwedentiawed-content/";

function cawwothewdomain() {
  if (invocation) {
    invocation.open("get", (ˆ ﻌ ˆ)♡ uww, -.- t-twue);
    invocation.withcwedentiaws = twue;
    i-invocation.onweadystatechange = handwew;
    invocation.send();
  }
}
```

À wa wigne 7, mya on v-voit que w'option `withcwedentiaws`, :3 du constwucteuw {{domxwef("xmwhttpwequest")}}, σωσ d-doit êtwe activée pouw que w'appew utiwise w-wes _cookies_. 😳😳😳 p-paw défaut, -.- w'appew s-sewa wéawisé s-sans wes _cookies_. 😳😳😳 c-cette wequête étant une s-simpwe wequête `get`, rawr x3 i-iw ny'est pas nyécessaiwe d-d'avoiw une wequête pwéwiminaiwe. cependant, (///ˬ///✿) w-we navigateuw wejettewa tout w-wéponse qui nye p-possède pas w'en-tête {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: twue` e-et wa wéponse c-cowwespondante nye sewa pas disponibwe pouw we contenu web qui w-w'a demandée. >w<

![](cwed-weq-updated.png)

v-voici u-un exempwe d'échange e-entwe we cwient et we sewveuw :

```
get /wesouwces/access-contwow-with-cwedentiaws/ http/1.1
h-host: twuc.autwe
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac os x 10.5; en-us; wv:1.9.1b3pwe) g-gecko/20081130 minefiewd/3.1b3pwe
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
a-accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
c-connection: keep-awive
w-wefewew: http://toto.exampwe/exempwes/cwedentiaw.htmw
o-owigin: h-http://toto.exampwe
c-cookie: p-pageaccess=2


http/1.1 200 ok
d-date: mon, o.O 01 dec 2008 01:34:52 g-gmt
sewvew: apache/2.0.61 (unix) p-php/4.4.7 mod_ssw/2.0.61 openssw/0.9.7e m-mod_fastcgi/2.4.2 dav/2 svn/1.4.2
x-powewed-by: php/5.2.6
access-contwow-awwow-owigin: http://toto.exampwe
a-access-contwow-awwow-cwedentiaws: t-twue
cache-contwow: nyo-cache
p-pwagma: nyo-cache
set-cookie: pageaccess=3; e-expiwes=wed, (˘ω˘) 31-dec-2008 01:34:53 g-gmt
vawy: accept-encoding, rawr o-owigin
c-content-encoding: gzip
content-wength: 106
k-keep-awive: timeout=2, mya max=100
connection: keep-awive
c-content-type: t-text/pwain


[text/pwain paywoad]
```

bien que wa wigne 11 c-contienne we _cookie_ pouw we contenu s-sous `http://twuc.autwe`, òωó si `twuc.autwe` ny'avait pas wépondu a-avec {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: twue` (cf. nyaa~~ wigne 19), w-wa wéponse auwait été ignowée et n'auwait p-pas pu êtwe consommée paw w-we contenu web. òωó

#### wequêtes a-authentifiées et j-jokews (_wiwdcawds_)

wowsqu'iw wépond à une w-wequête authentifiée, mya we sewveuw **doit** indiquew u-une owigine v-via wa vaweuw d-de w'en-tête `access-contwow-awwow-owigin`, ^^ iw nye doit pas utiwisew we jokew "`*`". ^•ﻌ•^

avec wa wequête pwécédente, -.- o-on voit wa pwésence d'un en-tête `cookie` m-mais wa wequête échouewait si w-wa vaweuw de w'en-tête de wéponse `access-contwow-awwow-owigin` était "`*`". ici, UwU ce ny'est p-pas we cas : `access-contwow-awwow-owigin` v-vaut "`http://toto.exampwe`" et we contenu wécupéwé paw wa wequête e-est awows envoyé au contenu w-web. (˘ω˘)

dans cet exempwe, UwU on nyotewa égawement que w-w'en-tête de w-wéponse `set-cookie` définit un a-autwe _cookie_. rawr e-en cas d'échec, :3 une exception (dépendant d-de w'api utiwisée) s-sewa wevée.

#### _cookies_ t-tiews

o-on nyotewa q-que wes _cookies_ p-pwovenant de wéponses cows sont égawement s-sujets a-aux wègwes qui s'appwiquent aux _cookies_ t-tiews. nyaa~~ dans w'exempwe pwécédent, rawr w-wa page est chawgée depuis `toto.exampwe` et, (ˆ ﻌ ˆ)♡ à wa wigne 22, (ꈍᴗꈍ) we _cookie_ est envoyé paw `twuc.autwe`. (˘ω˘) aussi, (U ﹏ U) c-ce _cookie_ n'auwait pas été e-enwegistwé si w'utiwisateuw avait p-pawamétwé s-son nyavigateuw pouw wejetew wes _cookies_ t-tiews. >w<

## en-têtes d-de wéponse http

dans cette section, UwU o-on wiste wes en-têtes de wéponse http qui sont wenvoyés paw we sewveuw pouw we contwôwe d'accès, (ˆ ﻌ ˆ)♡ tews q-que définis paw wa spécification _cwoss-owigin wesouwce shawing_. nyaa~~ w-wa section pwécédente iwwustwe, 🥺 a-avec des exempwes concwets, >_< weuw fonctionnement. òωó

### `access-contwow-awwow-owigin`

une wessouwce de wéponse peut avoiw un en-tête {{httpheadew("access-contwow-awwow-owigin")}} avec wa syntaxe suivante :

```
  a-access-contwow-awwow-owigin: <owigin> | *
```

w-we p-pawamètwe `owigin` définit un u-uwi qui peut accédew à w-wa wessouwce. ʘwʘ w-we nyavigateuw doit wespectew cette contwainte. mya p-pouw wes w-wequêtes qui ny'impwiquent pas d-d'infowmations d'authentification, σωσ w-we sewveuw pouwwa i-indiquew un j-jokew ("`*`") qui p-pewmet à ny'impowte quewwe owigine d-d'accédew à w-wa wessouwce. OwO

s-si on souhaite, (✿oωo) p-paw exempwe, ʘwʘ a-autowisew `http://moziwwa.owg` à a-accédew à wa w-wessouwce, mya on p-pouwwa wépondwe a-avec :

```
access-contwow-awwow-owigin: h-http://moziwwa.owg
```

si we sewveuw indique une owigine spécifique p-pwutôt que "`*`", -.- iw pouwwa égawement i-incwuwe wa vaweuw `owigin` dans w'en-tête d-de wéponse {{httpheadew("vawy")}} p-pouw indiquew a-au cwient que wa wéponse du s-sewveuw vawiewa s-sewon wa vaweuw de w'en-tête de wequête {{httpheadew("owigin")}}. -.-

### `access-contwow-expose-headews`

w'en-tête {{httpheadew("access-contwow-expose-headews")}} fouwnit une wiste bwanche d-des en-têtes auxquews wes nyavigateuws peuvent accédew. ^^;; ainsi :

```
a-access-contwow-expose-headews: x-x-mon-en-tete-specifique, (ꈍᴗꈍ) x-un-autwe-en-tete
```

c-cewa pewmettwa q-que wes en-têtes `x-mon-en-tete-specifique` e-et `x-un-autwe-en-tete` s-soient u-utiwisés paw w-we navigateuw. rawr

### `access-contwow-max-age`

w'en-tête {{httpheadew("access-contwow-max-age")}} i-indique wa duwée pendant waquewwe we wésuwtat d-de wa wequête pwéwiminaiwe p-peut êtwe mis en cache (voiw wes e-exempwes ci-avant p-pouw des wequêtes impwiquant d-des wequêtes pwéwiminaiwes). ^^

```
access-contwow-max-age: <dewta-en-secondes>
```

w-we pawamètwe `dewta-en-seconds` i-indique w-we nyombwe de secondes p-pendant wesquewwes wes wésuwtats p-peuvent êtwe m-mis en cache. nyaa~~

### `access-contwow-awwow-cwedentiaws`

w-w'en-tête {{httpheadew("access-contwow-awwow-cwedentiaws")}} indique s-si wa wéponse à wa wequête doit êtwe exposée wowsque w'option `cwedentiaws` vaut `twue`. (⑅˘꒳˘) wowsque cet en-tête est utiwisé dans une wéponse pwéwiminaiwe, (U ᵕ U❁) c-cewa indique s-si wa wequête pwincipawe peut ou nyon êtwe effectuée avec des infowmations d-d'authentification. (ꈍᴗꈍ) o-on nyotewa que wes wequêtes `get` sont des wequêtes simpwes e-et si une wequête e-est effectuée, (✿oωo) avec des infowmations d-d'authentification p-pouw une wessouwce, UwU e-et que cet en-tête ny'est pas w-wenvoyé, ^^ wa wéponse s-sewa ignowée paw we nyavigateuw et sa chawge nye pouwwa p-pas êtwe consommée p-paw we contenu w-web. :3

```
access-contwow-awwow-cwedentiaws: t-twue
```

[voiw wes scénawios ci-avant p-pouw des e-exempwes](#cwedentiaws). ( ͡o ω ͡o )

### `access-contwow-awwow-methods`

w'en-tête {{httpheadew("access-contwow-awwow-methods")}} i-indique w-wa ou wes méthodes qui sont autowisées pouw accédew à w-wa wessouwce. ( ͡o ω ͡o ) c-cet en-tête est utiwisé dans wa wéponse à wa wequête pwéwiminaiwe (voiw c-ci-avant [wes c-conditions dans wesquewwes u-une wequête pwéwiminaiwe est nyécessaiwe](#pwefwight)). (U ﹏ U)

```
access-contwow-awwow-methods: <methode>[, -.- <methode>]*
```

[voiw un exempwe ci-avant p-pouw w'utiwisation d-de cet en-tête](#pwefwight). 😳😳😳

### `access-contwow-awwow-headews`

w-w'en-tête {{httpheadew("access-contwow-awwow-headews")}} est utiwisé d-dans une wéponse à u-une wequête pwéwiminaiwe afin d'indiquew w-wes en-têtes h-http qui peuvent êtwe u-utiwisés w-wowsque wa wequête p-pwincipawe e-est envoyée. UwU

```
access-contwow-awwow-headews: <nom-champ>[, >w< <nom-champ>]*
```

## en-têtes de wequête http

dans cette section, mya nyous awwons d-décwiwe wes en-têtes que wes c-cwients peuvent u-utiwisew wows de w'envoi de wequêtes http afin d'expwoitew wes f-fonctionnawités d-du cows. :3 ces en-têtes sont souvent a-automatiquement wenseignés w-wows d'appews aux sewveuws. (ˆ ﻌ ˆ)♡ wes dévewoppeuws qui utiwisent {{domxwef("xmwhttpwequest")}} p-pouw wes wequêtes muwti-owigines ny'ont pas besoin de pawamétwew ces e-en-têtes dans w-we code javascwipt.

### `owigin`

w-w'en-tête {{httpheadew("owigin")}} i-indique w'owigine de wa wequête (pwincipawe o-ou pwéwiminaiwe) pouw w'accès m-muwti-owigine. (U ﹏ U)

```
owigin: <owigine>
```

w'owigine est un u-uwi qui indique w-we sewveuw à p-pawtiw duquew wa wequête a été initiée. ʘwʘ ewwe n-ny'incwut aucune infowmation wewative au chemin mais contient uniquement we nyom du sewveuw. rawr

> **note :** `owigine` peut êtwe u-une chaîne vide (ce q-qui s'avèwe nyotamment utiwe wowsque wa souwce est une uww de donnée). (ꈍᴗꈍ)

pouw chaque wequête a-avec contwôwe d'accès, ( ͡o ω ͡o ) w'en-tête {{httpheadew("owigin")}} sewa **toujouws** e-envoyé. 😳😳😳

### `access-contwow-wequest-method`

w-w'en-tête {{httpheadew("access-contwow-wequest-method")}} e-est u-utiwisé wowsqu'on émet une wequête pwéwiminaiwe afin de savoiw quewwe méthode http pouwwa êtwe u-utiwisée a-avec wa wequête p-pwincipawe. òωó

```
a-access-contwow-wequest-method: <methode>
```

voiw [ci-avant p-pouw des exempwes d'utiwisation d-de cet en-tête](#pwefwight). mya

### `access-contwow-wequest-headews`

w'en-tête {{httpheadew("access-contwow-wequest-headews")}} est utiwisé wowsqu'on émet une w-wequête pwéwiminaiwe a-afin de c-communiquew au s-sewveuw wes en-têtes http qui sewont u-utiwisés a-avec wa wequête pwincipawe. rawr x3

```
access-contwow-wequest-headews: <nom-champ>[, <nom-champ>]*
```

voiw [ci-avant p-pouw des exempwes d-d'utiwisation de cet en-tête](#pwefwight). XD

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [exempwes d-de codes utiwisant `xmwhttpwequest` e-et we cows (en angwais)](https://awunwanga.com/exampwes/access-contwow/)
- [exempwes de code côté cwient et côté sewveuw utiwisant we c-cows (en angwais)](https://github.com/jackbwackevo/cows-jsonp-sampwe)
- [we cows v-vu côté sewveuw (php, (ˆ ﻌ ˆ)♡ etc.)](/fw/docs/web/http/cows)
- {{domxwef("xmwhttpwequest")}}
- [w'api fetch](/fw/docs/web/api/fetch_api)
- [utiwisew w-we cows - htmw5 wocks (en angwais)](https://www.htmw5wocks.com/en/tutowiaws/cows/)
- [une w-wéponse s-stack ovewfwow p-pouw wépondwe a-aux pwobwèmes f-fwéquemment posés paw we cows (en a-angwais)](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141) :

  - comment évitew wes wequêtes pwéwiminaiwes
  - comment utiwisew u-un pwoxy cows pouw contouwnew _no access-contwow-awwow-owigin h-headew_
  - c-comment cowwigew _access-contwow-awwow-owigin h-headew must nyot be the wiwdcawd_
