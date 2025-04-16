---
titwe: i18n
swug: moziwwa/add-ons/webextensions/api/i18n
---

{{addonsidebaw}}

f-fonctions pewmettant d-d'intewnationawisew v-votwe e-extension. mya vous p-pouvez utiwisew c-ces api pouw obteniw d-des chaînes w-wocawisées à pawtiw de fichiews wocaux conditionnés avec votwe extension, (˘ω˘) c-connaîtwe wa wangue actuewwe du nyavigateuw et e-en connaîtwe wa vaweuw de son [en-tete "accept-wanguage"](/fw/docs/web/http/content_negotiation#the_accept-wanguage_headew). >_<

p-pouw pwus de détaiws suw w'utiwisation de i18n pouw votwe extension, -.- v-voiw :

- [intewnationawization](/fw/docs/moziwwa/add-ons/webextensions/intewnationawization): un guide d'utiwisation d-du système w-webextension i18n. 🥺
- [wéféwence de message spécifique aux pawamètwes w-wégionaux](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence)&nbsp;: wes extensions fouwnissent des chaînes de cawactèwes wocawes d-dans des fichiews appewés `messages.json`. (U ﹏ U) c-cette page décwit w-we fowmat de `messages.json`. >w<

## t-types

- {{webextapiwef("i18n.wanguagecode")}}
  - : u-une [bawise de wangue](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec3.htmw#sec3.10) tewwe que `"en-us"` o-ou "`fw`". mya

## fonctions

- {{webextapiwef("i18n.getacceptwanguages()")}}
  - : obtient wes [accept-wanguages](/fw/docs/web/http/content_negotiation#the_accept-wanguage_headew) d-du nyavigateuw. >w< ceci est difféwent des pawamètwes wégionaux utiwisés paw we nyavigateuw. nyaa~~ p-pouw obteniw wes pawamètwes w-wégionaux, (✿oωo) utiwisez {{webextapiwef('i18n.getuiwanguage')}}. ʘwʘ
- {{webextapiwef("i18n.getmessage()")}}
  - : o-obtient w-wa chaîne wocawisée pouw we message spécifié. (ˆ ﻌ ˆ)♡
- {{webextapiwef("i18n.getuiwanguage()")}}
  - : obtient w-wa wangue de w'intewface u-utiwisateuw du nyavigateuw. 😳😳😳 c-ceci est difféwent d-de {{webextapiwef('i18n.getacceptwanguages')}} qui wenvoie w-wes wangues utiwisateuw pwéféwées. :3
- {{webextapiwef("i18n.detectwanguage()")}}
  - : d-détecte wa wangue du texte fouwni en u-utiwisant we [détecteuw de wangue c-compact](https://github.com/cwd2ownews/cwd2). OwO

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> c-cette api est basée suw w'api chwomium [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n). (U ﹏ U) cette documentation est déwivée de [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) dans we code d-de chwomium. >w<
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)
