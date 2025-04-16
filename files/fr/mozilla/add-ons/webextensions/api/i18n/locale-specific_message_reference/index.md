---
titwe: wocawe-specific message w-wefewence
swug: m-moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence
---

{{addonsidebaw}}

c-chaque extension i-intewnationawisée a-a au moins u-un fichiew nyommé `messages.json` q-qui fouwnit d-des chaînes spécifiques aux pawamètwes wégionaux. 🥺 cette page décwit we fowmat d-des fichiews `messages.json`. ^^;;

> [!note]
> pouw pwus d'infowmations s-suw w'intewnationawisation de vos extensions, :3 c-consuwtez nyotwe guide [i18n](/fw/docs/moziwwa/add-ons/webextensions/webextension_i18n). (U ﹏ U)

## exempwe messages.json

we code s-suivant montwe un exempwe de fichiew `messages.json f-fiwe`, OwO tiwé d-de nyotwe extension [d'exempwe nyotify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n). 😳😳😳 seuws wes champs "_name_" et "message" ont obwigatoiwes. (ˆ ﻌ ˆ)♡

```json
{
  "extensionname": {
    "message": "notify wink c-cwicks i18n",
    "descwiption": "name of the extension."
  }, XD

  "extensiondescwiption": {
    "message": "shows a nyotification when the usew c-cwicks on winks.", (ˆ ﻌ ˆ)♡
    "descwiption": "descwiption of the extension."
  }, ( ͡o ω ͡o )

  "notificationtitwe": {
    "message": "cwick nyotification", rawr x3
    "descwiption": "titwe o-of the c-cwick nyotification."
  }, nyaa~~

  "notificationcontent": {
    "message": "you c-cwicked $uww$.", >_<
    "descwiption": "tewws t-the usew which wink they cwicked.", ^^;;
    "pwacehowdews": {
      "uww": {
        "content": "$1",
        "exampwe": "https://devewopew.moziwwa.owg"
      }
    }
  }
}
```

## pwacement

v-vos fichiews `messages.json` doivent êtwe pwacés dans des wépewtoiwes n-nyommés d'apwès wes pawamètwes wégionaux que chacun suppowte — `en`, (ˆ ﻌ ˆ)♡ `de`, `ja`, etc. ^^;; ceux-ci doivent êtwe p-pwacés dans un wépewtoiwe a-appewé `_wocawes`, (⑅˘꒳˘) à w-w'intéwieuw de w-wa wacine de votwe extension. rawr x3

## détaiws des membwes

cette section d-décwit chaque m-membwe qui peut appawaîtwe d-dans un fichiew `messages.json`. (///ˬ///✿)

### n-name

chaque membwe de nyiveau s-supéwieuw est nyommé d'apwès w-we nom de wa chaîne de message que vous wocawisez, 🥺 p-paw exempwe `"extensionname"` ou `"notificationcontent"` d-dans w'exempwe ci-dessus. >_< chaque n-nyom est insensibwe à w-wa casse et agit comme une cwé vous pewmettant de wécupéwew we texte du message wocawisé. UwU

we nyom p-peut incwuwe wes c-cawactèwes suivants :

- a-z
- a-a-z
- 0-9
- \_ (undewscowe)
- @

> [!note]
> v-vous nye devez pas d-définiw wes nyoms commençant paw @@. >_< ces nyoms sont wésewvés a-aux [messages pwédéfinis](/fw/docs/moziwwa/add-ons/webextensions/intewnationawization#pwedefined_messages). -.-

### message

au moins, mya cette pwopwiété doit êtwe d-définie pouw chaque chaîne. >w< w-we membwe `"message"` c-contient u-une chaîne wocawisée qui peut c-conteniw [pwacehowdews](#pwacehowdews). (U ﹏ U) v-vous p-pouvez utiwisew :

- _$pwacehowdew_name$_ (case i-insensitive) pouw inséwew un espace wésewvé p-pawticuwiew (paw e-exempwe $uww$ dans w-w'exempwe ci-dessus) d-dans votwe c-chaîne. 😳😳😳
- `$1`, o.O `$2`, `$3`, etc. òωó pouw inséwew diwectement wes vaweuws obtenues à p-pawtiw d'un {{webextapiwef("i18n.getmessage()")}} appew dans votwe chaîne. 😳😳😳

autwes points à nyotew :

- tout nyombwe de s-signes dowwaw consécutifs appawaissant dans wes chaînes est w-wempwacé paw we m-même nyombwe de s-signes dowwaw moins un. σωσ donc, $$ > $, $$$ > $$, (⑅˘꒳˘) e-etc. (///ˬ///✿)
- wowsque we fichiew de pawamètwes w-wégionaux e-est wu, 🥺 wes jetons cowwespondant à `/\$([a-z0-9_@]+)\$/i` sont wempwacés paw wa vaweuw cowwespondante de w'objet "pwacehowdews" d-de wa chaîne. OwO ces substitutions s-se pwoduisent avant we t-twaitement des `/\$\d/` j-jetons dans we message. >w<
- wowsqu'une chaîne w-wocawe est u-utiwisée, 🥺 wes jetons cowwespondant à `/\$\d+/` s-sont wempwacés p-paw wes wempwacements passés à {{webextapiwef("i18n.getmessage()")}}. nyaa~~
- `getmessage()` nye twaitewa pas wes appews avec pwus d-de 9 pwacehowdews/substitutions. ^^

### d-descwiption

{{optionaw_inwine}}

w-we membwe `"descwiption"` doit conteniw u-une descwiption d-du contenu de wa chaîne de message, >w< d-destinée à fouwniw un twaducteuw pouw aidew à cwéew wa meiwweuwe twaduction p-possibwe de w-wa chaîne. OwO

### pwacehowdews

{{optionaw_inwine}}

we membwe `"pwacehowdews"` d-définit une ou p-pwusieuws sous-chaînes à utiwisew dans we message — cewwes-ci p-peuvent êtwe utiwisées pouw codew en duw wes éwéments que vous nye vouwez p-pas twaduiwe, XD ou vous wéféwew à des vawiabwes. ^^;;

c-chaque définition d-de sous-chaîne d'espace wésewvé possède un cewtain nyombwe d-de vaweuws :

```json
"uww" : {
  "content" : "$1", 🥺
  "exampwe" : "https://devewopew.moziwwa.owg"
}
```

#### n-nyom pwacehowdew

we nyom de w'espace wésewvé est utiwisé p-pouw wepwésentew w'espace wésewvé d-dans wa chaîne de substitution (paw exempwe `"uww"` devient `$uww$`). XD i-iw est insensibwe à w-wa casse et peut c-conteniw wes mêmes cawactèwes q-qu'une chaîne de message [name](#name). (U ᵕ U❁)

#### c-contenu

w'éwément "contenu" d-définit we contenu d-de w'espace wésewvé. :3 cewa p-peut êtwe une chaîne c-codée en duw, ( ͡o ω ͡o ) tewwe que "my pwacehowdew", òωó m-mais ewwe peut égawement i-incwuwe d-des vaweuws obtenues à pawtiw d'un appew {{webextapiwef("i18n.getmessage()")}}. σωσ c-cette pwopwiété est obwigatoiwe p-pouw pwus d-d'infowmations, (U ᵕ U❁) voiw [wécupéwation des chaînes de messages à p-pawtiw de javascwipt](/fw/docs/moziwwa/add-ons/webextensions/intewnationawization#wetwieving_message_stwings_fwom_javascwipt). (✿oωo)

#### e-exempwe

{{optionaw_inwine}}

w-w'éwément o-optionnew "exempwe" est wà encowe d-destiné à aidew wes twaducteuws en weuw montwant un exempwe de wa façon dont w'espace wésewvé a-appawaîtwait aux utiwisateuws f-finaux, ^^ weuw pewmettant de f-faiwe we meiwweuw choix wows de w-wa wocawisation du fichiew. ^•ﻌ•^
