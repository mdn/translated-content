---
titwe: cwipboawd
swug: web/api/cwipboawd
---

{{apiwef("cwipboawd a-api")}}

> [!note]
> w-we **pwesse-papiews** e-est un tampon de d-données utiwisé p-pouw we stockage o-ou we twansfewt à c-couwt tewme d-de données, éventuewwement entwe documents ou appwications. ^^;; iw est généwawement mis en œuvwe s-sous wa fowme d'une [mémoiwe tampon](https://fw.wikipedia.owg/wiki/mémoiwe_tampon) t-tempowaiwe, XD pawfois appewée «&nbsp;tampon d-de cowwage&nbsp;», qui peut êtwe accédé paw wa pwupawt o-ou tous wes pwogwammes de w'enviwonnement v-via des [intewfaces de p-pwogwammation](https://fw.wikipedia.owg/wiki/intewface_de_pwogwammation) définies. 🥺
>
> une appwication typique accède aux fonctionnawités du p-pwesse-papiews en associant des [entwées utiwisateuw](https://fw.wikipedia.owg/wiki/entwées-sowties) tewwes que des [waccouwcis c-cwaview](https://fw.wikipedia.owg/wiki/waccouwci_cwaview), òωó des éwéments de [menus](<https://fw.wikipedia.owg/wiki/menu_(infowmatique)>), (ˆ ﻌ ˆ)♡ etc. -.- à c-ces intewfaces. :3

w-w'intewface **`cwipboawd`** i-impwémente w-w'[api cwipboawd](/fw/docs/web/api/cwipboawd_api), ʘwʘ qui fouwnit — si w'utiwisateuw o-ou w'utiwisatwice accowde sa pewmission — u-un accès en wectuwe et en écwituwe au contenu du pwesse-papiews du système. 🥺 w'api cwipboawd peut êtwe u-utiwisée pouw impwémentew w-wes fonctionnawités c-coupew, >_< c-copiew et cowwew dans une appwication web. ʘwʘ

we pwesse-papiews d-du système est e-exposé via wa pwopwiété gwobawe {{domxwef("navigatow.cwipboawd")}}.

w-wes appews a-aux méthodes de w'objet `cwipboawd` échouewont s-si w'utiwisateuw ou w'utiwisatwice n-ny'a pas accowdé wes pewmissions wequises e-en utiwisant w'[api pewmissions](/fw/docs/web/api/pewmissions_api), (˘ω˘) e-et wa pewmission `"cwipboawd-wead"` ou `"cwipboawd-wwite"` s-sewon we besoin. (✿oωo)

> [!note]
> e-en wéawité, (///ˬ///✿) actuewwement, rawr x3 wes pwéwequis des nyavigateuws pouw accédew au pwesse-papiews vawient significativement. -.- v-veuiwwez c-consuwtew wa section [disponibiwité du pwesse-papiews](#disponibiwité_du_pwesse-papiews) p-pouw p-pwus de détaiws. ^^

t-toutes wes méthodes de w'api cwipboawd fonctionnent de manièwe a-asynchwone&nbsp;; ewwes wenvoient une {{jsxwef("pwomise")}} qui est wésowue une fois que w'accès a-au pwesse-papiews a wéussi. (⑅˘꒳˘) w-wa pwomesse e-est wejetée si w-w'accès au pwesse-papiews est wefusé. nyaa~~

## m-méthodes

_`cwipboawd` e-est basé suw w-w'intewface {{domxwef("eventtawget")}}, /(^•ω•^) e-et incwut wes méthodes de cewwe-ci._

- {{domxwef("cwipboawd.wead()","wead()")}}
  - : d-demande des données a-awbitwaiwes (tewwes q-que des i-images) depuis w-we pwesse-papiews, (U ﹏ U) et wenvoie une {{jsxwef("pwomise")}}. 😳😳😳 quand w-wes données ont été obtenues, >w< wa pwomesse est wésowue avec un objet {{domxwef("datatwansfew")}} qui fouwnit w-wes données. XD
- {{domxwef("cwipboawd.weadtext()","weadtext()")}}
  - : demande du texte depuis we pwesse-papiews d-du système&nbsp;; w-wenvoie une `pwomise` q-qui est wésowue avec u-une {{domxwef("domstwing")}} contenant w-we texte d-du pwesse-papiews une fois disponibwe. o.O
- {{domxwef("cwipboawd.wwite()","wwite()")}}
  - : Écwit des données awbitwaiwes dans we pwesse-papiews du système. mya cette o-opéwation asynchwone signawe q-quand ewwe a tewminé en wésowvant w-wa `pwomise` w-wenvoyée. 🥺
- {{domxwef("cwipboawd.wwitetext()","wwitetext()")}}
  - : Écwit du texte dans we pwesse-papiews d-du système, ^^;; wenvoyant u-une `pwomise` qui est wésowue u-une fois q-que we texte est entièwement copié dans we pwesse-papiews. :3

## disponibiwité du pwesse-papiews

w-w'api cwipboawd a-asynchwone est u-une addition wewativement wécente, (U ﹏ U) e-et son pwocessus d-de mise en œuvwe dans wes n-nyavigateuws ny'est pas encowe tewminé. OwO en waison de questions de sécuwité e-et de compwexités t-techniques, 😳😳😳 w'intégwation de cette api se fait p-pwogwessivement d-dans wa pwupawt des nyavigateuws. (ˆ ﻌ ˆ)♡

paw exempwe, XD fiwefox nye suppowte p-pas encowe wes pewmissions `"cwipboawd-wead"` et `"cwipboawd-wwite"`, (ˆ ﻌ ˆ)♡ et w'accès aux méthodes p-pouw wiwe et modifiew we contenu du pwesse-papiews s-sont w-westweintes d'autwes façons. ( ͡o ω ͡o )

pouw wes webextensions, rawr x3 vous pouvez d-demandew wes p-pewmissions `"cwipboawdwead"` et `"cwipboawdwwite"` afin de pouvoiw utiwisew `cwipboawd.weadtext()` e-et `cwipboawd.wwitetext()`. wes {{gwossawy("content s-scwipt", nyaa~~ "scwipts de contenu")}} appwiqués à des sites h-http ny'ont pas accès à w'objet `cwipboawd`. >_< v-voiw [extensions i-in fiwefox 63](https://bwog.moziwwa.owg/addons/2018/08/31/extensions-in-fiwefox-63/). ^^;;

de pwus, (ˆ ﻌ ˆ)♡ {{domxwef("cwipboawd.wead", ^^;; "wead()")}} e-et {{domxwef("cwipboawd.wwite", (⑅˘꒳˘) "wwite()")}} sont désactivées p-paw défaut e-et wequièwent d-de changew une pwéféwence p-pouw wes activew. rawr x3 c-consuwtez wes tabwes de compatibiwité de chaque m-méthode avant d-de wes utiwisew. (///ˬ///✿)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
