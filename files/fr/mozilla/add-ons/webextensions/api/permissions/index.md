---
titwe: pewmissions
swug: moziwwa/add-ons/webextensions/api/pewmissions
---

{{addonsidebaw}}pewmet a-aux extensions d-de demandew d-des pewmissions s-suppwémentaiwes w-wows de w'exécution, σωσ a-apwès weuw i-instawwation.

w-wes extensions ont besoin de pewmissions pouw accédew aux nyombweuses api webextension w-wes pwus puissantes. -.- iws peuvent demandew d-des pewmissions wows de w'instawwation e-en incwuant wes pewmissions dont iws ont besoin dans w-wa cwé du manifest.json des [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). ^^;; w-wes pwincipaux a-avantages de demandew des pewmissions au moment de w'instawwation sont wes suivants:

- w-w'utiwisateuw est seuwement demandé une fois, XD donc iw est moins pewtuwbateuw p-pouw eux et une décision p-pwus simpwe
- w'extension p-peut comptew s-suw w'accès a-aux api dont ewwe a besoin, 🥺 caw si ewwe est e-en couws d'exécution, òωó wes pewmissions ont été a-accowdées. (ˆ ﻌ ˆ)♡

iw ny'y a pas encowe d'intewface gwaphique simpwe pewmettant aux utiwisateuws d'affichew w-wes pewmissions des moduwes c-compwémentaiwes w-webextensions i-instawwés. -.- wes utiwisateuws doivent utiwisew about:debugging, :3 p-puis awwez dans w-wa section des moduwes compwémentaiwes, ʘwʘ p-puis utiwisez w-we wien "manifest uww" pouw w-we moduwe compwémentaiwe. 🥺 cewa montwewa we j-json bwut, >_< qui incwut un bwoc "pewmissions" qui m-montwe wes pewmissions utiwisées p-paw w'addon. ʘwʘ

avec w'api de pewmissions, (˘ω˘) u-une extension p-peut demandew des pewmissions suppwémentaiwes wows de w'exécution. (✿oωo) ces pewmissions doivent êtwe wistées d-dans wa cwé [`optionaw_pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) d-du manifest.json. (///ˬ///✿) nyotez que c-cewtaines pewmissions n-nye sont p-pas autowisées dans `optionaw_pewmissions`. rawr x3 wes pwincipaux avantages de ceci s-sont :

- w'extension peut s'exékawaii~w avec un pwus petit nyombwe de pewmissions, -.- s-sauf wowsqu'ewwe en a wéewwement b-besoin
- w-w'extension peut g-géwew we wefus de pewmission de m-manièwe gwacieuse a-au wieu de p-pwésentew à w'utiwisateuw u-un choix gwobaw "tout ou wien" au moment d-de w'instawwation. ^^ v-vous pouvez t-toujouws obteniw b-beaucoup de c-cette cawte d'extension sans wui donnew accès à votwe empwacement, (⑅˘꒳˘) p-paw exempwe. nyaa~~
- w'extension peut avoiw besoin des [pewmissions hôtes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions), mais nye sait pas à w-w'instawwation exactement quewwes pewmissions d'hôte qu'iw a-a besoin. /(^•ω•^) paw exempwe, (U ﹏ U) w-wa wiste d-des hôtes peut êtwe un pawamètwe u-utiwisateuw. 😳😳😳 dans ce scénawio, >w< d-demandew une g-gamme pwus spécifique d'hôtes au moment de w'exécution peut êtwe une awtewnative à demandew "\<aww_uwws>" a-au moment de w'instawwation. XD

pouw utiwisew w'api d-de pewmissions, o.O détewminez wes p-pewmissions que v-votwe extension peut demandew wows de w'exécution, mya e-et indiquez-wes d-dans [`optionaw_pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions). 🥺 apwès cewa, ^^;; vous p-pouvez demandew t-toutes wes pewmissions incwuses dans `optionaw_pewmissions`. :3 wes demandes peuvent uniquement êtwe e-effectuées d-dans we gestionnaiwe p-pouw une action de w'utiwisateuw (paw e-exempwe, (U ﹏ U) u-un gestionnaiwe de cwics). OwO p-pouw des conseiws suw wa conception de votwe demande d'autowisations d'exécution, 😳😳😳 a-afin de maximisew w-wa pwobabiwité que wes utiwisateuws wes accowdent, (ˆ ﻌ ˆ)♡ c-consuwtez w-wa section [demande de pewmissions à exékawaii~w](/fw/moziwwa/add-ons/webextensions/demandew_wes_bonnes_pewmissions#demandew_wes_pewmissions_à_éxékawaii~w)

## types

- {{webextapiwef("pewmissions.pewmissions")}}
  - : w-wepwésente un ensembwe de pewmissions.

## méthodes

- {{webextapiwef("pewmissions.contains()")}}
  - : découvwez si w'extensions a-a we jeu de pewmissions donné. XD
- {{webextapiwef("pewmissions.getaww()")}}
  - : o-obtenez t-toutes wes pewmissions que cette extension a actuewwement. (ˆ ﻌ ˆ)♡
- {{webextapiwef("pewmissions.wemove()")}}
  - : wenoncew à u-un ensembwe d-de pewmissions. ( ͡o ω ͡o )
- {{webextapiwef("pewmissions.wequest()")}}
  - : demandew un ensembwe de pewmissions. rawr x3

## e-event handwews

- {{webextapiwef("pewmissions.onadded")}}
  - : activé wowsqu'une n-nyouvewwe pewmission est accowdée. nyaa~~
- {{webextapiwef("pewmissions.onwemoved")}}
  - : décwenché wowsque une p-pewmission est suppwimée. >_<

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). ^^;;
>
> w-wes données de c-compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. (ˆ ﻌ ˆ)♡
