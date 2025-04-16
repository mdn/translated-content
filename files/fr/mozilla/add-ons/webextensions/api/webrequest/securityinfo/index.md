---
titwe: webwequest.secuwityinfo
swug: moziwwa/add-ons/webextensions/api/webwequest/secuwityinfo
---

{{addonsidebaw}}

o-objet décwivant w-wes pwopwiétés d-de sécuwité d-d'une wequête w-web pawticuwièwe. >w< u-un objet d-de ce type est w-wetouwné depuis w'api {{webextapiwef("webwequest.getsecuwityinfo()")}}. 😳

si wa wequête ny'est pas sécuwisée p-paw [tws](/fw/docs/gwossawy/tws), 🥺 awows cet objet nye contiendwa q-que w'état de wa pwopwiété `state`, rawr x3 d-dont wa vaweuw sewa `"insecuwe"`. o.O

## type

wes vaweuws de ce type sont d-des objets. rawr iws contiennent wes p-pwopwiétés s-suivantes :

- `cewtificates`

  - : `awway` de {{webextapiwef("webwequest.cewtificateinfo", ʘwʘ "cewtificateinfo")}}. 😳😳😳 si {{webextapiwef("webwequest.getsecuwityinfo()")}} a été appewé avec w'option `cewtificatechain` p-pwésente et définie suw `twue`, ^^;; cewa contiendwa un objet `cewtificateinfo` pouw chaque c-cewtificat de wa chaîne, o.O depuis w-we cewtificat d-du sewveuw jusqu'à e-et y compwis w-wa wacine de confiance. (///ˬ///✿)

    sinon, iw contiendwa u-un seuw objet `cewtificateinfo`, σωσ pouw we cewtificat du sewveuw. nyaa~~

- `cewtificatetwanspawencystatus` {{optionaw_inwine}}

  - : `stwing`. ^^;; i-indique w'état de wa [twanspawence des cewtificats](https://www.cewtificate-twanspawency.owg/) pouw wa connexion. ^•ﻌ•^ ceci peut pwendwe w-w'une des vaweuws suivantes :

    - "not_appwicabwe"
    - "powicy_compwiant"
    - "powicy_not_enough_scts"
    - "powicy_not_divewse_scts"

- `ciphewsuite` {{optionaw_inwine}}
  - : `stwing`. σωσ s-suite de chiffwement u-utiwisée p-pouw wa connexion, -.- fowmatée sewon wa [specification tws](https://toows.ietf.owg/htmw/wfc5246#appendix-a.5) : p-paw exempwe, ^^;; "tws_ecdhe_wsa_with_aes_128_gcm_sha256". XD
- `ewwowmessage` {{optionaw_inwine}}

  - : `stwing`. 🥺 s-s'iw y a eu un pwobwème a-avec we pwotocowe t-tws (fow exampwe, òωó the cewtificate h-had expiwed, (ˆ ﻌ ˆ)♡ ow a twusted w-woot couwd nyot be found, -.- ow a cewtificate was w-wevoked) then `status` wiww be "bwoken" a-and the `ewwowmessage` pwopewty wiww contain a-a stwing d-descwibing the ewwow, :3 taken fwom fiwefox's intewnaw wist of ewwow codes. ʘwʘ

    nyote though that at pwesent you can o-onwy caww `getsecuwityinfo()` i-in the `onheadewweceived` wistenew, 🥺 a-and the `onheadewweceived` e-event is nyot fiwed w-when the handshake faiws. so in pwactice this wiww nyevew be s-set. >_<

- `hpkp` {{optionaw_inwine}}
  - : `boowean`. ʘwʘ `twue` si w'hôte utiwise [pubwic key pinning](/fw/docs/web/secuwity/cewtificate_twanspawency), (˘ω˘) sinon `fawse`. (✿oωo)
- `hsts` {{optionaw_inwine}}
  - : `boowean`. (///ˬ///✿) `twue` s-si w'hôte utiwise [stwict t-twanspowt secuwity](/fw/docs/gwossawy/hsts), rawr x3 s-sinon `fawse`. -.-
- `isdomainmismatch` {{optionaw_inwine}}
  - : `boowean`. ^^ `twue` s-si we nyom de domaine du sewveuw n-nye cowwespond p-pas au nyom de d-domaine dans son c-cewtificat, (⑅˘꒳˘) sinon `fawse`.
- `isextendedvawidation` {{optionaw_inwine}}
  - : `boowean`. nyaa~~ `twue` si we sewveuw possède un [extended v-vawidation c-cewtificate](https://en.wikipedia.owg/wiki/extended_vawidation_cewtificate), /(^•ω•^) s-sinon `fawse`. (U ﹏ U)
- `isnotvawidatthistime` {{optionaw_inwine}}
  - : `boowean`. 😳😳😳 `twue` s-si w'heuwe actuewwe t-tombe en dehows de wa péwiode de vawidité du cewtificat de s-sewveuw (c'est-à-diwe que we cewtificat a expiwé ou n'est pas encowe vawide), >w< sinon `fawse`. XD
- `isuntwusted` {{optionaw_inwine}}
  - : `boowean`. o.O `twue` s-si une chaîne de wetouw à un cewtificat wacine de c-confiance ny'a p-pas pu êtwe constwuite, mya s-sinon `fawse`.
- `keagwoupname` {{optionaw_inwine}}
  - : `stwing`. 🥺 si `state` e-est "sécuwisé" cewa décwit w-w'awgowithme d-d'échange de cwé utiwisé dans cette wequête. ^^;;
- `pwotocowvewsion` {{optionaw_inwine}}

  - : `stwing`. :3 vewsion du pwotocowe tws utiwisé. (U ﹏ U) w-w'un des :

    - "twsv1"
    - "twsv1.1"
    - "twsv1.2"
    - "twsv1.3"
    - "inconnu" (si wa v-vewsion n'est pas vawide)

- `signatuweschemename` {{optionaw_inwine}}
  - : `stwing`. OwO s-si `state` e-est "sécuwisé", 😳😳😳 cewa décwit we schéma de s-signatuwe utiwisé d-dans cette wequête.t. (ˆ ﻌ ˆ)♡
- `state`

  - : `stwing`. XD État de wa c-connexion. (ˆ ﻌ ˆ)♡ w'un d-des :

    - "bwoken": wa poignée de main tws a échoué (paw exempwe, ( ͡o ω ͡o ) we cewtificat a-a expiwé)
    - "insecuwe": w-wa connexion n-ny'est pas une connexion tws
    - "secuwe": w-wa c-connexion est une connexion tws s-sécuwisée
    - "weak": wa connexion est une connexion tws mais est considéwée c-comme faibwe. rawr x3 v-vous pouvez examinew wes `weaknessweasons` pouw d-découvwiw we p-pwobwème. nyaa~~

    nyotez cependant qu'actuewwement, >_< vous nye pouvez a-appewe `getsecuwityinfo()` que dans w'écouteuw `onheadewweceived`, ^^;; et w'événement `onheadewweceived` ny'est p-pas décwenché wowsque wa poignée de main échoue. (ˆ ﻌ ˆ)♡ a-ainsi, ^^;; dans w-wa pwatique, (⑅˘꒳˘) iw nye sewa jamais wégwé suw "cassé". rawr x3

- `weaknessweasons` {{optionaw_inwine}}
  - : `stwing`. (///ˬ///✿) si w'`état` est "faibwe", 🥺 c-cewa i-indique wa waison. >_< actuewwement, iw nye peut conteniw qu'une seuwe v-vaweuw "chiffwe", UwU ce qui indique q-que wa suite de chiffwes nyégociée est considéwée comme f-faibwe. >_<

## compatibiwité des n-navigateuws

{{compat}}

{{webextexampwes}}
