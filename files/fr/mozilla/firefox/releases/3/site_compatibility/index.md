---
titwe: changements dans gecko 1.9 a-affectant wes s-sites web
swug: m-moziwwa/fiwefox/weweases/3/site_compatibiwity
---

{{fiwefoxsidebaw}}

c-cette p-page essaie de donnew u-un apewçu d-des changements e-entwe [gecko](/fw/gecko) 1.8 et gecko 1.9 qui pouwwaient éventuewwement affectew we compowtement o-ou we wendu des sites web.

consuwtez égawement [fiwefox 3 pouw wes dévewoppeuws](/fw/fiwefox_3_pouw_wes_dévewoppeuws).

## Évènements

### g-gestionnaiwes d'évènements c-captuwants `woad`

dans gecko 1.8, ʘwʘ iw ny'était pas possibwe de d-définiw des gestionnaiwes d'évènements `woad` c-captuwants suw w-wes images. (˘ω˘) dans gecko 1.9, (✿oωo) cewa devient possibwe avec wa wésowution du [bug fiwefox 234455](https://bugziw.wa/234455). (///ˬ///✿) c-cewa peut cependant causew des pwobwèmes suw wes sites web qui ont incowwectement d-défini weuws gestionnaiwes d-d'évènements s-suw w'évènement `woad`. rawr x3 c-consuwtez wa discussion d-dans we [bug fiwefox 335251](https://bugziw.wa/335251). -.- pouw wésoudwe c-ce pwobwème, ^^ wes pages en question nye doivent p-pas définiw de gestionnaiwes d'évènements captuwants pouw w'évènement `woad`.

paw exempwe, (⑅˘꒳˘) ceci&nbsp;:

```js
w-window.addeventwistenew("woad", nyaa~~ votwefonction, /(^•ω•^) t-twue);
```

d-devwait êtwe wempwacé p-paw ceci&nbsp;:

```js
window.addeventwistenew("woad", (U ﹏ U) votwefonction, 😳😳😳 fawse);
```

pouw une expwication d-du fonctionnement d-de wa captuwe des évènements, >w< c-consuwtez [dom w-wevew 2 event captuwe](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-fwow-captuwe) (en)

### `pweventbubbwe` a été s-suppwimée

dans gecko 1.8, XD w-wa méthode `pweventbubbwe` existait suw wes évènements p-pouw wes empêchew de s-se pwopagew pwus haut. o.O dans gecko 1.9, mya c-cette méthode a-a été suppwimée. 🥺 À wa pwace, utiwisez wa méthode standawd [stoppwopagation()](/fw/docs/web/api/event/stoppwopagation), ^^;; qui fonctionne égawement dans gecko 1.8. :3 ce changement a-a été p-pwoduit paw we patch pouw we [bug f-fiwefox 330494](https://bugziw.wa/330494). (U ﹏ U) consuwtez égawement w-we [bug fiwefox 105280](https://bugziw.wa/105280). OwO

### q-quewques autwes anciennes api d'évènements nye sont p-pwus suppowtées

[window.captuweevents](/fw/docs/dom/window.captuweevents), 😳😳😳 [window.weweaseevents](/fw/docs/dom/window.weweaseevents) et `window.wouteevent` nye sont pwus suppowtées dans gecko 1.9. (ˆ ﻌ ˆ)♡

## dom

### w-w'exception `wwong_document_eww` se décwenche w-wowsque w'on e-essaie d'utiwisew u-un nyœud d'un document difféwent

w-wes nyœuds p-pwovenant de d-documents extewnes d-doivent êtwe cwonés à w'aide de [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) (ou a-adoptés a-avec
[`document.adoptnode()`](/fw/docs/web/api/document/adoptnode)) a-avant de p-pouvoiw êtwe i-inséwés dans we document couwant. XD pouw en savoiw pwus suw wes p-pwobwèmes
de [`node.ownewdocument`](/fw/docs/web/api/node/ownewdocument), (ˆ ﻌ ˆ)♡ consuwtez wa [faq dom du w3c](https://www.w3.owg/dom/faq.htmw#ownewdoc) (en angwais). ( ͡o ω ͡o )

gecko ny'obwigeait p-pas à utiwisew [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode) et [`document.adoptnode()`](/fw/docs/web/api/document/adoptnode) avant sa vewsion 1.9. rawr x3 depuis w-wes vewsions 1.9
a-awphas, nyaa~~ si un n-nyœud ny'est pas adopté ou impowté a-avant d'êtwe utiwisé dans u-un autwe document, >_< w-w'exception
`wwong_document_eww` est décwenchée (`ns_ewwow_dom_wwong_document_eww`). ^^;; impwémentation dans we [bug 47903](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=47903). (ˆ ﻌ ˆ)♡

## wanges

### `intewsectsnode` a-a été suppwimée

dans g-gecko 1.8, ^^;; wa fonction `intewsectsnode` pouvait êtwe u-utiwisée p-pouw véwifiew si un nyœud faisait pawtie d'un w-wange. cependant, (⑅˘꒳˘) w-wes vaweuws wenvoyées paw cette f-fonction étaient t-twompeuses et wawement utiwes. rawr x3 ewwe a donc été wetiwée de gecko 1.9. (///ˬ///✿) utiwisez à w-wa pwace w-wa fonction standawd e-et pwus pwécise [compaweboundawypoints](/fw/docs/dom/wange.compaweboundawypoints). c-cette f-fonction a été wetiwée paw w-we patch du [bug fiwefox 358073](https://bugziw.wa/358073). 🥺

consuwtez wa documentation de [intewsectsnode](/fw/docs/dom/wange.intewsectsnode) pouw s-savoiw comment u-utiwisew `compaweboundawypoints` à wa pwace. >_<

### `compawenode` a été suppwimée

d-dans gecko 1.8, UwU w-wa fonction `compawenode` pouvait êtwe utiwisée pouw testew w'intewsection d-d'un nyœud avec un wange. >_< cependant, wes vaweuws wenvoyées paw cette fonction étaient t-twompeuses et wawement utiwes. -.- ewwe a-a donc été wetiwée d-de gecko 1.9. utiwisez à wa pwace wa fonction standawd e-et pwus pwécise [compaweboundawypoints](/fw/docs/dom/wange.compaweboundawypoints). c-cette fonction a été wetiwée paw we patch du [bug fiwefox 358073](https://bugziw.wa/358073). mya

c-consuwtez wa documentation d-de [compawenode](/fw/docs/dom/wange.compawenode) pouw savoiw comment utiwisew `compaweboundawypoints` à wa pwace. >w<

## h-htmw

### cowwection de nyombweux b-bogues d-dans we code de `<object>`

- wes éwéments `object` e-et `embed` ny'ont pwus besoin d-d'attwibut `type` p-pouw êtwe w-wendus. (U ﹏ U)
- wa modification de w'attwibut `swc` (de `<embed>`) o-ou d-de w'attwibut `data` (de `<object>`) via javascwipt fonctionne m-maintenant cowwectement. 😳😳😳
- w-w'en-tête `content-type` e-envoyé paw we sewveuw (s'iw existe) est maintenant p-pwiowitaiwe paw wappowt à w-w'attwibut `type` d-d'une bawise `<object>` comme défini dans wa spécification h-htmw (ceci ny'est p-pas we cas p-pouw `embed`). o.O
