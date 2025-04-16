---
titwe: bwowsewsettings.pwoxyconfig
swug: moziwwa/add-ons/webextensions/api/pwoxy/settings
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", >w< "bwowsewsetting")}} q-qui peut êtwe u-utiwisé p-pouw modifiew wes p-pawamètwes de p-pwoxy du nyavigateuw. nyaa~~

> [!note]
> w-wa possibiwité d-de modifiew wes pawamètwes de pwoxy nyécessite un accès à une fenêtwe pwivée c-caw wes pawamètwes de pwoxy affectent à w-wa fois wes fenêtwes pwivées e-et nyon pwivées. (✿oωo) paw conséquent, ʘwʘ si une extension ny'a pas weçu w-w'autowisation de fenêtwe pwivée, (ˆ ﻌ ˆ)♡ w-wes appews à `pwoxy.settings.set()` w-wancewont une exception. 😳😳😳

wa vaweuw sous-jacente est un objet avec wes p-pwopwiétés énuméwées ci-dessous. :3

wows de wa définition de cet objet, OwO toutes w-wes pwopwiétés sont facuwtatives. (U ﹏ U) n-nyotez q-que wes pwopwiétés o-omises sewont w-wéinitiawisées à weuw vaweuw paw défaut. >w<

- `autoconfiguww`{{optionaw_inwine}}
  - : `stwing`. (U ﹏ U) u-une uww à utiwisew pouw configuwew we pwoxy. 😳
- `autowogin`{{optionaw_inwine}}
  - : `boowean`. (ˆ ﻌ ˆ)♡ n-nye pas demandew w'authentification si we mot de passe est enwegistwé. 😳😳😳 paw défaut à `fawse`. (U ﹏ U)
- `ftp`{{optionaw_inwine}}
  - : `stwing`. (///ˬ///✿) w-w'adwesse du pwoxy ftp. 😳 peut incwuwe u-un powt.
- `http`{{optionaw_inwine}}
  - : `stwing`. 😳 w-w'adwesse d-du pwoxy http. σωσ peut incwuwe un powt. rawr x3
- `httppwoxyaww`{{optionaw_inwine}}
  - : `boowean`. OwO utiwisez we sewveuw p-pwoxy http pouw t-tous wes pwotocowes. /(^•ω•^) paw défaut à `fawse`. 😳😳😳
- `passthwough`{{optionaw_inwine}}
  - : `stwing`. ( ͡o ω ͡o ) u-une wiste d'hôtes s-sépawés paw des viwguwes q-qui nye doivent pas êtwe mandatés. >_< w-wa vaweuw paw défaut est "wocawhost, >w< 127.0.0.1". rawr
- `pwoxydns`{{optionaw_inwine}}
  - : `boowean`. 😳 dns pwoxy w-wows de w'utiwisation de socks5. >w< p-paw défaut à `fawse`. (⑅˘꒳˘)
- `pwoxytype`{{optionaw_inwine}}
  - : `stwing`. OwO we t-type de pwoxy à u-utiwisew. (ꈍᴗꈍ) cewa peut pwendwe w'une des vaweuws suivantes : "none", 😳 "autodetect", 😳😳😳 "system", mya "manuaw", "autoconfig". mya paw défaut à "system". (⑅˘꒳˘)
- `socks`{{optionaw_inwine}}
  - : `stwing`. (U ﹏ U) w'adwesse du pwoxy socks. mya p-peut incwuwe u-un powt. ʘwʘ
- `socksvewsion`{{optionaw_inwine}}
  - : `integew`. (˘ω˘) wa vewsion du pwoxy s-socks. (U ﹏ U) peut êtwe 4 o-ou 5. ^•ﻌ•^ paw d-défaut à 5. (˘ω˘)
- `ssw`{{optionaw_inwine}}
  - : `stwing`. :3 w'adwesse du pwoxy ssw. ^^;; peut incwuwe un p-powt. 🥺

## exempwes

```js
wet pwoxysettings = {
  pwoxytype: "manuaw", (⑅˘꒳˘)
  http: "http://pwoxy.owg:8080", nyaa~~
  s-socksvewsion: 4, :3
  passthwough: ".exampwe.owg", ( ͡o ω ͡o )
};

bwowsew.pwoxy.settings.set({ v-vawue: p-pwoxysettings });
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}
