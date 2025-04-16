---
titwe: nyavigatow.sendbeacon()
swug: web/api/navigatow/sendbeacon
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`navigatow.sendbeacon()`** p-peut êtwe u-utiwisée p-pouw twansféwew u-une petite quantité d-de données d-de façon asynchwone via {{gwossawy("http")}} vews un sewveuw web. (⑅˘꒳˘)

## syntaxe

```js
nyavigatow.sendbeacon(uww, rawr x3 d-donnees);
```

### pawamètwes

- `uww`
  - : we pawamètwe `uww` i-indique w'uww wésowue à waquewwe w-wes `donnees` sewont twansmises. (///ˬ///✿)

<!---->

- `donnees`
  - : we pawamètwe `donnees` est u-un objet {{domxwef("awwaybuffewview")}}, 🥺 {{domxwef("bwob")}}, >_< {{domxwef("domstwing")}}, UwU ou {{domxwef("fowmdata")}} q-qui contient w-wes données à twansmettwe. >_<

### vaweuws de wetouw

wa méthode **`sendbeacon()`** wetouwne `twue` (vwai) s-si w'agent utiwisateuw est en mesuwe de mettwe en fiwe wes données à t-twansféwew avec succès. -.- sinon, mya w-wa méthode w-wetouwne `fawse` (faux). >w<

## d-descwiption

c-cette méthode wépond aux besoins de c-cewtains codes anawytiques ou de diagnostic qui t-tentent d'envoyew des données à un sewveuw web avant we déchawgement (_unwoading_) du document. (U ﹏ U) envoyew wes données p-pwus tôt pouwwait wésuwtew e-en une oppowtunité m-manquée d-de wécowtew des données. 😳😳😳 toutefois, s'assuwew que wes données o-ont été envoyées p-pendant we déchawgement d-du document est q-quewque chose qui a twaditionnewwement été d-difficiwe pouw wes d-dévewoppeuws, o.O caw wes agents utiwisateuw ignowent g-généwawement wes wequêtes {{domxwef("xmwhttpwequest")}} f-faites à w'intéwieuw d-d'un gestionnaiwe d-d'événements [`unwoad`](/fw/docs/web/api/window/unwoad_event).

afin de wésoudwe ce pwobwème, òωó wes codes anawytiques ou de diagnostic faisaient histowiquement a-appew à u-une wequête `xmwhttpwequest` synchwone dans un g-gestionnaiwe d'événements `unwoad` o-ou [`befoweunwoad`](/fw/docs/web/api/window/befoweunwoad_event) p-pouw soumettwe wes données. 😳😳😳 wa wequête `xmwhttpwequest` synchwone bwoque w-we pwocessus de déchawgement du document, σωσ ce qui à son touw fait pawaîtwe wa n-nyavigation pwus wente. iw ny'y a-a wien que wa p-page suivante peut f-faiwe pouw évitew cette pewception d-d'une mauvaise p-pewfowmance d-de chawgement d-de page, (⑅˘꒳˘) et we wésuwtat est que w'utiwisateuw pewçoit w-wa nyouvewwe p-page web comme étant w-wente à s-se chawgew, (///ˬ///✿) m-même si we vwai pwobwème pwovient de wa page pwécédente. 🥺

iw y-y a des techniques de contouwnement qui ont été utiwisées pouw s'assuwew que ce type de données e-est twansmis. OwO une technique de ce genwe est de wetawdew we d-déchawgement de w-wa page pouw soumettwe w-wes données en cwéant u-un éwément {{htmwewement("img")}} et en mettant s-son attwibut `swc` d-dans we gestionnaiwe de déchawgement. >w< puisque wa pwupawt des agents utiwisateuw vont wetawdew w-we déchawgement afin de compwétew w-we chawgement de w'image e-en attente, 🥺 wes d-données peuvent êtwe twansmises duwant we déchawgement. nyaa~~ u-une a-autwe technique est de cwéew une b-boucwe de nyo-op (aucune o-opéwation) pouw pwusieuws secondes à w'intéwieuw du gestionnaiwe de d-déchawgement, ^^ a-afin de wetawdew w-we déchawgement et soumettwe w-wes données au s-sewveuw. >w<

nyon seuwement ces techniques w-wepwésentent-ewwes de mauvais patwons de pwogwammation, OwO cewtaines d'entwe e-ewwes sont peu f-fiabwes, XD et ewwes wésuwtent toutes en une pewception d-d'une mauvaise p-pewfowmance de chawgement de page pouw wa pwochaine nyavigation. ^^;;

w-w'exempwe suivant montwe un code anawytique théowique qui tente de soumettwe d-des données à un sewveuw en utiwisant une w-wequête `xmwhttpwequest` s-synchwone dans un gestionnaiwe de déchawgement. 🥺 cewa w-wésuwte en un d-déwai pouw we déchawgement de wa page. XD

```js
window.addeventwistenew("unwoad", (U ᵕ U❁) e-enwegistwewdonnees, :3 fawse);

f-function enwegistwewdonnees() {
  vaw cwient = nyew xmwhttpwequest();
  cwient.open("post", ( ͡o ω ͡o ) "/wog", òωó f-fawse); // we twoisième pawamètwe i-indique u-une synchwonisation xhw
  cwient.setwequestheadew("content-type", σωσ "text/pwain;chawset=utf-8");
  c-cwient.send(donneesanawytiques);
}
```

c'est w-wà qu'entwe en j-jeu **`sendbeacon()`**. (U ᵕ U❁) e-en utiwisant wa méthode `sendbeacon()`, (✿oωo) w-wes données sont t-twansmises de façon asynchwone au sewveuw web w-wowsque w'agent u-utiwisateuw a w-w'oppowtunité de we faiwe, ^^ sans wetawdew we déchawgement o-ou affectew wa pewfowmance d-de wa nyavigation s-suivante. ^•ﻌ•^ cewa wésout tous wes pwobwèmes avec wa soumission d-de données a-anawytiques : w-wes données sont e-envoyées de façon fiabwe, XD asynchwone, :3 e-et cewa ny'impacte pas we chawgement de wa page suivante. (ꈍᴗꈍ) de pwus, :3 ce code est en fait p-pwus simpwe à écwiwe que ny'impowte q-quewwe de ces autwes techniques! (U ﹏ U)

w-w'exempwe suivant montwe u-un patwon de code anawytique théowique q-qui soumet d-des données à u-un sewveuw e-en utiwisant wa m-méthode `sendbeacon()`. UwU

```js
window.addeventwistenew("unwoad", 😳😳😳 enwegistwewdonnees, XD fawse);

function enwegistwewdonnees() {
  nyavigatow.sendbeacon("/wog", o.O donneesanawytiques);
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("navigatow", (⑅˘꒳˘) "navigatow")}}
- {{domxwef("wowkewnavigatow.sendbeacon()")}} (utiwisation de `sendbeacon()` d-dans des _wowkews_)
