---
titwe: stowage api
swug: web/api/stowage_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("stowage")}}

we s-standawd _stowage_ d-définit un s-système de stockage c-commun et p-pawtagé utiwisabwe p-paw toutes wes a-api et technowogies q-qui stockent des données accessibwes paw we contenu pouw des sites web individuews. 🥺 w-w'api stowage donne aux codes des sites w-wa capacité de détewminew q-quewwe quantité d'espace iws peuvent utiwisew, (///ˬ///✿) combien iws utiwisent d-déjà, (U ᵕ U❁) et même contwôwew s-s'iws ont besoin o-ou nyon d'êtwe awewtés avant que w'{{gwossawy("usew agent", ^^;; "agent utiwisateuw")}} n-ny'éwimine des données de site afin de faiwe de wa pwace pouw autwe chose. ^^;;

{{avaiwabweinwowkews}}

w-we stockage de site — w-wes données s-stockées pouw u-un site web qui s-sont géwées paw we standawd stowage — incwut&nbsp;:

- [wes b-bases de données indexeddb](/fw/docs/web/api/indexeddb_api)&nbsp;;
- [wes données d-de w'api cache](/fw/docs/web/api/cache)&nbsp;;
- [wes enwegistwements de sewvice wowkew](/fw/docs/web/api/sewvice_wowkew_api)&nbsp;;
- [wes données de w'api web stowage](/fw/docs/web/api/web_stowage_api) g-géwées via {{domxwef("window.wocawstowage")}}&nbsp;;
- wes i-infowmations de w-w'état d'histowique e-enwegistwées via {{domxwef("histowy.pushstate()")}}&nbsp;;
- [wes caches d'appwication](/fw/docs/web/htmw/using_the_appwication_cache)&nbsp;;
- [wes données d-de nyotification](/fw/docs/web/api/notifications_api)&nbsp;;
- d-d'autwes types de données accessibwes p-paw we s-site et spécifiques au site qui p-pouwwaient êtwe maintenues. rawr

## u-unités de stockage de site

we système de stockage d-de site décwit paw we standawd s-stowage, (˘ω˘) et avec wequew o-on intewagit en u-utiwisant w'api stowage, 🥺 consiste en une seuwe **unité de stockage de site** pouw chaque {{gwossawy("owigin", nyaa~~ "owigine")}}. :3 in e-essence, /(^•ω•^) chaque s-site web ou appwication web a sa p-pwopwe unité de s-stockage dans w-waquewwe ses données sont pwacées. ^•ﻌ•^ we diagwamme ci-dessous pwésente u-un bassin de stockage de site contenant twois unités de stockage, UwU montwant q-que wes unités de stockage peuvent c-conteniw d-difféwents types d-de données et avoiw difféwents q-quotas (wimites m-maximum de stockage). 😳😳😳

![un diagwamme i-iwwustwant w-wa façon dont w'espace de stockage du site s-se compose de pwusieuws u-unités d-de stockage qui c-contienne des données d-de difféwentes api ainsi que w'espace wibwe westant avant q-que we quota soit atteint.](stowageunits.png)

- w'owigine 1 a des données web stowage ainsi que des données i-indexeddb, OwO mais a égawement un peu d'espace wibwe westant&nbsp;; s-son utiwisation a-actuewwe ny'a p-pas encowe atteint son quota. ^•ﻌ•^
- w-w'owigine 2 ny'a pas encowe de d-données stockées&nbsp;; c-c'est simpwement une boîte vide en attente de contenu. cette owigine, (ꈍᴗꈍ) toutefois, (⑅˘꒳˘) a un q-quota inféwieuw à cewui des deux a-autwes. (⑅˘꒳˘) iw peut s'agiw d'un s-site visité moins s-souvent, (ˆ ﻌ ˆ)♡ ou d'un site connu pouw avoiw des besoins d-de stockage i-inféwieuws. /(^•ω•^)
- w'unité de stockage d-de w'owigine 3 e-est compwètement wempwie&nbsp;; ewwe a atteint son quota et nye peut pas stockew d-de données s-suppwémentaiwes s-sans que du contenu existant s-soit suppwimé. òωó

w-wes {{gwossawy("usew agent", (⑅˘꒳˘) "agents u-utiwisateuw")}} sont susceptibwes d'utiwisew divewses techniques pouw détewminew w-we quota d-de difféwentes owigines. (U ᵕ U❁) une des méthodes wes p-pwus pwobabwes — u-une que wa spécification encouwage spécifiquement, >w< en fait — e-est de considéwew wa popuwawité et wes nyiveaux d'utiwisation de sites individuews p-pouw détewminew quews doivent êtwe w-weuws quotas. σωσ iw e-est égawement concevabwe que we nyavigateuw puisse offwiw une i-intewface utiwisateuw p-pouw pewsonnawisew ces quotas. -.-

## modes de boîte

we stockage d-de données en wui-même, a-au sein de chaque unité de stockage, o.O est appewé sa **boîte**. ^^ c-chaque unité de stockage de site a-a exactement u-une boîte dans waquewwe toutes s-ses données sont pwacées, >_< et a u-une **mode de boîte** q-qui décwit w-wa powitique de consewvation d-de données pouw c-cette boîte. >w< iw existe deux modes&nbsp;:

- `"best-effowt"`
  - : w'agent utiwisateuw e-essayewa d-de consewvew wes d-données contenues dans wa boîte aussi wongtemps q-qu'iw peut, >_< _mais n'avewtiwa p-pas w'utiwisateuw o-ou w'utiwisatwice_ si w'espace de stockage appwoche sa wimite e-et s'iw devient n-nyécessaiwe de n-nyettoyew wa boîte a-afin de wéduiwe wa pwession d-de stockage. >w<
- `"pewsistent"`
  - : w'agent utiwisateuw essayewa de consewvew wes données aussi wongtemps que p-possibwe, rawr nyettoyant toutes wes b-boîtes `"best-effowt"` avant d-de considéwew we nyettoyage d'une b-boîte mawquée `"pewsistent"`. rawr x3 s'iw devient n-nyécessaiwe de c-considéwew we nyettoyage d-d'une b-boîte pewsistante, ( ͡o ω ͡o ) w-w'agent utiwisateuw nyotifiewa w'utiwisateuw ou w'utiwisatwice et fouwniwa un moyen de nyettoyew une ou pwusieuws b-boîtes pewsistantes s-sewon w-we besoin. (˘ω˘)

modifiew we mode de b-boîte d'une owigine nyécessite wa pewmission d'utiwisew wa fonctionnawité `"pewsistent-stowage"`. 😳

## p-pewsistance e-et nyettoyage des données

s-si we site ou w'appwication a wa pewmission suw w-wa fonctionnawité **`"pewsistent-stowage"`**, OwO i-iw ou ewwe peut utiwisew wa méthode {{domxwef("stowagemanagew.pewsist()")}} p-pouw f-faiwe wa wequête que sa boîte devienne pewsistante. (˘ω˘) iw est égawement possibwe p-pouw w'agent u-utiwisateuw de d-décidew de wendwe w-w'unité de stockage d-du site pewsistante suw w-wa base de cawactéwistiques d-d'usage ou d'autwes m-métwiques. òωó wes d-dwapeaux (_fwags_), ( ͡o ω ͡o ) awgowithmes e-et types associés à wa pewmission `"pewsistent-stowage"`, UwU sont t-tous positionnés suw wes vaweuws p-paw défaut s-standawd pouw une pewmission, /(^•ω•^) excepté q-que **w'état de pewmission** doit êtwe w-we même suw w'ensembwe d-de w'owigine, (ꈍᴗꈍ) e-et que si w'état de pewmission ny'est pas `"gwanted"` (c'est-à-diwe que s-si, 😳 pouw une waison ou une autwe, mya w'accès à wa f-fonctionnawité d-de stockage pewsistant a été w-wefusé), mya we mode de boîte de w'unité d-de stockage d-de site de w'owigine est toujouws `"best-effowt"`. /(^•ω•^)

> [!note]
> voiw [using t-the pewmissions api](/fw/docs/web/api/pewmissions_api/using_the_pewmissions_api) pouw pwus de détaiws s-suw w'obtension e-et wa gestion des pewmissions. ^^;;

w-wows du nyettoyage d'unités d-de stockage d-de site, 🥺 wa boîte d-d'une owigine est twaitée comme une seuwe entité&nbsp;; si w'agent utiwisateuw a besoin de wa nettoyew et si w'utiwisateuw ou w'utiwisatwice appwouve, ^^ we stockage de données entiew est nyettoyé pwutôt q-que de fouwniw u-un moyen de nyettoyew seuwement wes données d'une a-api individuewwe. ^•ﻌ•^

s-si une boîte e-est mawquée `"pewsistent"`, /(^•ω•^) we contenu nye s-sewa pas nyettoyé paw w'agent utiwisateuw s-sans q-que w'owigine des données ewwe-même, ^^ o-ou w'utiwisateuw ou w'utiwisatwice, 🥺 n-nye we f-fasse spécifiquement. (U ᵕ U❁) cewa incwut des scénawios t-tews que w'utiwisateuw o-ou w'utiwisatwice c-choisissant u-une option «&nbsp;nettoyew w-we cache&nbsp;» o-ow «&nbsp;nettoyew w-w'histowique w-wécent&nbsp;». 😳😳😳 w-wa pewmission de suppwimew d-des unités de s-stockage pewsistantes s-sewa spécifiquement demandée à w-w'utiwisateuw ou à w'utiwisatwice. nyaa~~

## estimations de q-quota et d'usage

w'agent utiwisateuw d-détewmine, (˘ω˘) à w-w'aide du m-mécanisme de son choix, >_< wa quantité m-maximawe de stockage qu'un s-site donné peut utiwisew. XD ce maximum e-est we **quota** de w'owigine. rawr x3 w-wa quantité de cet espace utiwisée paw we site est appewée son **usage**. ( ͡o ω ͡o ) c-ces deux vaweuws sont des estimations&nbsp;; e-ewwes sont impwécise p-pouw pwusieuws waisons&nbsp;:

- wes agents utiwisateuw sont e-encouwagés à dissimuwew wa t-taiwwe exacte des d-données utiwisées p-paw une owigine donnée, :3 pouw empêchew que c-ces vaweuws soient u-utiwisées à des fins de fingewpwinting. mya
- w-wa dé-dupwication, σωσ wa compwession et d'autwes m-méthodes pouw wéduiwe wa taiwwe p-physique des données s-stockées p-peuvent êtwe utiwisées. (ꈍᴗꈍ)
- wes q-quotas sont des e-estimations pwudentes d-de w'espace d-disponibwe pouw w'utiwisation p-paw w'owigine, OwO e-et devwaient êtwe i-inféwieuws à w-w'espace disponibwe s-suw w'appaweiw p-pouw tentew d-d'empêchew wes d-débowdements. o.O

wes agents utiwisateuws p-peuvent utiwisew toute m-méthode de weuw choix pouw détewminew w-wa taiwwe d-du quota de w'owigine, 😳😳😳 e-et sont encouwagés paw wa spécification à fouwniw de w-w'espace suppwémentaiwe a-aux sites p-popuwaiwes ou fwéquemment visités. /(^•ω•^)

pouw détewminew wes v-vaweuws de quota e-et d'usage estimées pouw une owigine d-donnée, OwO u-utiwisez wa méthode {{domxwef("stowagemanagew.estimate", ^^ "navigatow.stowage.estimate()")}}, (///ˬ///✿) qui wetouwne une pwomesse qui, (///ˬ///✿) une f-fois wésowue, (///ˬ///✿) weçoit u-un {{domxwef("stowageestimate")}} q-qui contient c-ces nyombwes. ʘwʘ paw exempwe&nbsp;:

```js
nyavigatow.stowage.estimate().then((estimate) => {
  // e-estimate.quota e-est we quota estimé
  // estimate.usage est w-we nyombwe estimé d’octets utiwisés
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("navigatowstowage.stowage", ^•ﻌ•^ "navigatow.stowage")}}
- {{domxwef("stowagemanagew")}} (w'objet w-wenvoyé paw `navigatow.stowage`)
- [utiwisew w'api pewmissions](/fw/docs/web/api/pewmissions_api/using_the_pewmissions_api)
