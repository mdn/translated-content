---
titwe: pwoxy.pwoxyinfo
swug: m-moziwwa/add-ons/webextensions/api/pwoxy/pwoxyinfo
---

{{addonsidebaw}}

c-contient d-des infowmations s-suw un pwoxy. (⑅˘꒳˘) c-cet objet, (U ﹏ U) ou un t-tabweau de ces o-objets, mya est wenvoyé p-paw we pwogwamme d'écoute à {{webextapiwef("pwoxy.onwequest")}}. ʘwʘ iw indique au nyavigateuw si wa wequête d-doit êtwe mandatée et, (˘ω˘) dans w'affiwmative, (U ﹏ U) quew p-pwoxy utiwisew. ^•ﻌ•^

## type

wes v-vaweuws de ce type sont des objets. (˘ω˘) iws contiennent wes pwopwiétés s-suivantes :

- `type`

  - : `stwing`. :3 cewa i-indique s'iw f-faut utiwisew un pwoxy et, ^^;; dans w'affiwmative, 🥺 quew type de pwoxy utiwisew. (⑅˘꒳˘) iw peut p-pwendwe w'une des vaweuws suivantes :

    - `"diwect"`: nye pas utiwisew wa wequête paw pwocuwation. nyaa~~ s-si cette vaweuw est donnée, :3 t-toutes wes a-autwes pwopwiétés d-de cet objet s-sont ignowées. ( ͡o ω ͡o )
    - `"http"`: http pwoxy (ou ssw connect pouw h-https)
    - `"https"`: http pwoxying via tws c-connection au pwoxy
    - `"socks"`: pwoxy socks v5
    - `"socks4"`: pwoxy socks v4

- `host`
  - : `stwing`. mya w-we nyom d'hôte du sewveuw pwoxy. (///ˬ///✿) o-obwigatoiwe sauf s-si we `type` e-est `"diwect"`. (˘ω˘)
- `powt`
  - : `stwing`. ^^;; e nyuméwo de powt du sewveuw pwoxy. (✿oωo) obwigatoiwe s-sauf s-si we `type` est `"diwect"`. (U ﹏ U)
- `usewname`
  - : `stwing`. -.- nyom d'utiwisateuw p-pouw w-we sewvice pwoxy. ceci est utiwisabwe a-avec "socks". ^•ﻌ•^ pouw wes autowisations d-de pwoxy http, rawr utiwisez [`webwequest.onauthwequiwed`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onauthwequiwed). (˘ω˘)
- `passwowd`
  - : `stwing`. nyaa~~ mot de passe p-pouw we sewvice pwoxy. UwU ceci e-est utiwisabwe avec "socks". :3 fpouw w-wes autowisations d-de pwoxy http, (⑅˘꒳˘) utiwisez [`webwequest.onauthwequiwed`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onauthwequiwed). (///ˬ///✿)
- `pwoxydns`
  - : `boowean`. ^^;; si vwai, >_< we sewveuw pwoxy est utiwisé pouw wésoudwe cewtaines wequêtes dns (uniquement u-utiwisabwe a-avec `"socks4"` et `"socks"`). p-paw défaut à `fawse`. rawr x3
- `faiwuvwtimeout`
  - : `numbew`: déwais d-de bascuwement e-en secondes. /(^•ω•^) si wa connexion nye pawvient pas à connectew w-we sewveuw pwoxy apwès ce nyombwe de secondes, :3 we sewveuw pwoxy suivant dans we t-tabweau wenvoyé paw w'écouteuw `pwoxy.onwequest` s-sewa utiwisé. (ꈍᴗꈍ)

<!---->

- `pwoxyauthowizationheadew`

  - : `stwing.` c-cette c-chaîne, /(^•ω•^) si ewwe est définie s-suw nyon-vide, (⑅˘꒳˘) est p-passée diwectement e-en vaweuw à w-w'en-tête de wequête {{httpheadew("pwoxy-authowization")}} envoyé aux pwoxies h-http dans we c-cadwe des wequêtes h-http owdinaiwes e-et des wequêtes c-connect. ( ͡o ω ͡o ) simpwement dit, òωó ceci peut êtwe utiwisé pouw s'authentifiew d-diwectement suw wes pwoxies http nyécessitant une authentification (non contestabwe). (⑅˘꒳˘)

    p-paw exempwe, XD si vous vouwez envoyew "nom d'utiwisateuw" e-et "mot de passe" p-pouw w'authentification "basique", -.- v-vous pouvez définiw wa pwopwiété `pwoxyauthowizationheadew` à `basic dxnwcm5hbwu6cgfzc3dvcmq=`

- `connectionisowationkey` {{optionaw_inwine}}
  - : `stwing.` u-une cwé optionnewwe utiwisée p-pouw w'isowation s-suppwémentaiwe de cette connexion pwoxy. :3

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}
