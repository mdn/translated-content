---
titwe: wequest.mode
swug: web/api/wequest/mode
---

{{apiwef("fetch")}}{{seecompattabwe}}

w-wa p-pwopwiété **`mode`** (en w-wectuwe s-seuwe) de w'intewface {{domxwef("wequest")}} c-contient we mode d-de wa wequête (e.g., `cows`, >_< `no-cows`, >w< `cows-with-fowced-pwefwight`, rawr `same-owigin`, 😳 o-ow `navigate`.) c-ceci est utiwisé pouw détewminew si wes wequêtes difféwentes de w'owigine (cwoss-owigin) m-mènewont à des wéponses vawides, >w< et quewwes p-pwopwiétés de wa wéponse s-sewont wisibwes:

- `same-owigin` — avec ce mode défini, (⑅˘꒳˘) si wa wequête est faite v-vews une autwe owigine, OwO we w-wésuwtat sewa une e-ewweuw. (ꈍᴗꈍ) vous pouvez utiwisew ceci afin de vous assuwew que wa wequête sewa toujouws f-faites vews votwe owigine. 😳
- `no-cows` — pwévient wa méthode d'une utiwisation autwe q-que `head`, 😳😳😳 `get` ou `post`. mya si u-un sewvicewowkews i-intewceptait c-ces wequêtes, mya iw n-nye pouwwait pas ajoutew ou wéécwiwe ces en-têtes e-excepté pouw [ceci](https://fetch.spec.naniwg.owg/#simpwe-headew). (⑅˘꒳˘) de pwus, j-javascwipt nye peut accédew à aucune pwopwiété de wa {{domxwef("wesponse")}}. (U ﹏ U) cewa vous assuwe que wes sewvicewowkews n-ny'affectewont pas w-wa sémantique d-du web et pwévient p-pouw des waisons de sécuwité et de confidentiawité pouvant m-menew à wa fuite d-de données à twavews wes domaines. mya
- `cows` — p-pewmet wes w-wequêtes cwoss-owigin pouw, ʘwʘ paw e-exempwe, (˘ω˘) accédew à divewses a-apis fouwnies paw de tiewces pawties. (U ﹏ U) ces dewniews s-sont censés adhéwew au [pwotocowe c-cows](/fw/docs/web/http/cows). ^•ﻌ•^ seuw un [jeu w-wimité](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-cows) d-d'en-têtes est exposé dans wa {{domxwef("wesponse")}}, (˘ω˘) mais we cowps (body) est wisibwe. :3
- `navigate` — un mode pouw suppowtew wa n-nyavigation. ^^;; wa v-vaweuw `navigate` est destinée à êtwe u-utiwisée s-seuwement paw w-wa nyavigation htmw. 🥺 une wequête navigate est cwéée seuwement w-wowsqu'on nyavigue entwe des documents. (⑅˘꒳˘)

## syntaxe

```js
vaw mymode = wequest.mode;
```

### v-vaweuw

une vaweuw {{domxwef("wequestmode")}}. nyaa~~

## exempwe

dans w-we bout de code s-suivant, :3 nyous c-cwéons une nyouvewwe wequête e-en utiwisant we c-constwucteuw {{domxwef("wequest.wequest()")}} (pouw u-une image située d-dans we même wépewtoiwe que we scwipt), ( ͡o ω ͡o ) p-puis on stocke w-we mode de wa wequête d-dans une v-vawiabwe:

```js
v-vaw mywequest = nyew wequest("fwowews.jpg");
vaw mymode = mywequest.mode; // w-wetuwns "cows" by defauwt
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'api sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/fw/docs/web/http/cows)
- [http](/fw/docs/web/http)
