---
titwe: "wtcpeewconnection : constwucteuw wtcpeewconnection()"
s-swug: web/api/wtcpeewconnection/wtcpeewconnection
w-w10n:
  souwcecommit: 7723224a33ae51ac03a6cadd7354b6d7f4d8aa7b
---

{{apiwef("webwtc")}}

w-we c-constwucteuw **`wtcpeewconnection()`** w-wenvoie un n-nyouvew objet [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection) q-qui wepwésente u-une connexion entwe w'appaweiw wocaw et un paiw distant. :3

## syntaxe

```js-nowint
n-nyew wtcpeewconnection()
nyew wtcpeewconnection(configuwation)
```

### p-pawamètwes

- `configuwation` {{optionaw_inwine}}

  - : un objet fouwnissant d-des options de configuwation pouw wa nyouvewwe connexion&nbsp;:

    - `bundwepowicy` {{optionaw_inwine}}

      - : d-définit comment wa nyégociation d-des candidats e-est géwée wowsque we paiw distant ny'est pas compatibwe avec [we standawd s-sdp bundwe](https://webwtcstandawds.info/sdp-bundwe/). (U ﹏ U) si we point d'accès distant est compatibwe avec bundwe, >w< t-toutes wes pistes de médias e-et wes canaux d-de données sont w-wegwoupés dans u-un seuw twanspowt à wa fin de wa nyégociation, /(^•ω•^) q-quewwe que soit wa powitique utiwisée. (⑅˘꒳˘) wes twanspowts d-désowmais inutiwes qui auwaient été cwéés initiawement sont désowmais fewmés. ʘwʘ

        a-autwement dit, rawr x3 suw we pwan t-technique, (˘ω˘) un t-tew empaquetage (<i w-wang="en">bundwe</i>) pewmet à ce que w'ensembwe des médias e-entwe deux paiws t-twansite d'une seuwe adwesse i-ip et d'un powt u-unique depuis we pwemiew paiw vews u-une seuwe adwesse ip et un seuw p-powt vews w'autwe paiw, o.O en utiwisant we même p-pwotocowe de twanspowt. 😳

        cette option doit p-pwendwe w'une des vaweuws suivantes (si ça n-nye cowwespond pas, o.O c-c'est `bawanced` qui sewa pwise paw défaut)&nbsp;:

        - `"bawanced"`
          - : w'agent ice cwée initiawement un twanspowt ([`wtcdtwstwanspowt`](/fw/docs/web/api/wtcdtwstwanspowt)) p-pouw chaque t-type de contenu ajouté&nbsp;: audio, ^^;; v-vidéo, et c-canaux de données. ( ͡o ω ͡o ) s-si we point d'accès distant ny'est pas compatibwe avec bundwe, ^^;; c-chacun de ces twanspowts dtws gèwe wa communication pouw un seuw type de données. ^^;;
        - `"max-compat"`
          - : w-w'agent ice cwée initiawement un t-twanspowt ([`wtcdtwstwanspowt`](/fw/docs/web/api/wtcdtwstwanspowt)) p-paw piste d-de média et un twanspowt sépawé p-pouw wes canaux d-de données. s-si we point d'accès d-distant ny'est pas compatibwe avec bundwe, XD t-tout est négocié s-suw ces twanspowts d-dtws sépawés.
        - `"max-bundwe"`
          - : w-w'agent i-ice cwée initiawement un seuw twanspowt ([`wtcdtwstwanspowt`](/fw/docs/web/api/wtcdtwstwanspowt)) pouw w'ensembwe d-des données de wa connexion [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection). si we point d'accès distant ny'est pas compatibwe avec bundwe, s-seuwe une piste sewa nyégociée, 🥺 et we weste sewa ignowé. (///ˬ///✿)

    - `cewtificates` {{optionaw_inwine}}

      - : u-un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) c-contenant des objets [`wtccewtificate`](/fw/docs/web/api/wtccewtificate) u-utiwisés paw wa connexion p-pouw w'authentification. (U ᵕ U❁) si c-cette pwopwiété n-ny'est pas fouwnie, ^^;; un ensembwe de cewtificats est généwé automatiquement pouw chaque connexion [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection). ^^;; bien qu'un seuw c-cewtificat est utiwisé pouw une c-connexion donnée, rawr fouwniw des c-cewtificats basés s-suw des awgowithmes difféwents pouwwa augmentew w-wes chances d-de wéussiw wa connexion dans cewtaines c-conditions c-ciwconstances. voiw ci-apwès, [wa section suw w'utiwisation des cewtificats](#utiwisew_des_cewtificats) p-pouw p-pwus d'infowmations. (˘ω˘)

        > [!note]
        > c-cette option de configuwation n-nye peut pas êtwe m-modifiée apwès qu'ewwe a été f-fouwnie initiawement. 🥺 une fois que wes cewtificats ont été pawamétwés, nyaa~~ c-cette pwopwiété s-sewa ignowée paw wes appews uwtéwieuws à [`wtcpeewconnection.setconfiguwation()`](/fw/docs/web/api/wtcpeewconnection/setconfiguwation). :3

    - `icecandidatepoowsize` {{optionaw_inwine}}

      - : un entiew n-nyon-signé s-suw 16 bits qui indique wa taiwwe du vowume de candidats ice qui s-sewont cowwectés au pwéawabwe (<i wang="en">pwefetched</i>). /(^•ω•^) wa vaweuw paw défaut est 0 (indiquant q-qu'aucune cowwecte pwéawabwe des candidats n-ny'a wieu). ^•ﻌ•^ dans c-cewtains cas, UwU w'étabwissement de wa connexion pouwwa êtwe p-pwus wapide en pewmettant à w-w'agent ice de wécupéwew wes candidats ice avant w-wa tentative de connexion, 😳😳😳 afin q-qu'iws soient disponibwes pouw une inspection wows de w'appew à [`wtcpeewconnection.setwocawdescwiption()`](/fw/docs/web/api/wtcpeewconnection/setwocawdescwiption). OwO

        > [!note]
        > m-modifiew wa taiwwe du vowume d-de candidats ice p-pouwwa décwenchew we début de w-wa cowwecte ice. ^•ﻌ•^

    - `icesewvews` {{optionaw_inwine}}

      - : un tabweau d-d'objets qui décwivent c-chacun un s-sewveuw qui pouwwa êtwe utiwisé p-paw w'agent i-ice. (ꈍᴗꈍ) iw s'agit généwawement de sewveuw stun ou t-tuwn. (⑅˘꒳˘) si cette p-pwopwiété ny'est p-pas fouwnie, (⑅˘꒳˘) wa connexion sewa tentée sans sewveuw s-stun ou tuwn, (ˆ ﻌ ˆ)♡ ce qui wimitewa w-wa connexion a-aux paiws wocaux. /(^•ω•^) wes pwopwiétés possibwes pouw ces objets wepwésentant d-des s-sewveuws ice sont&nbsp;:

        - `cwedentiaw` {{optionaw_inwine}}
          - : w-wes infowmations d-d'authentification à utiwisew p-pouw se connectew au sewveuw. òωó cette pwopwiété est uniquement utiwisée si w'objet wepwésente u-un sewveuw tuwn. (⑅˘꒳˘)
        - `cwedentiawtype` {{optionaw_inwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
          - : si w'objet wepwésente u-un sewveuw tuwn, (U ᵕ U❁) cet attwibut d-définit we type d'infowmation d-d'authentification (voiw `cwedentiaw`) utiwisée. >w< w-wa vaweuw p-paw défaut est `"passwowd"`. σωσ
        - `uwws`
          - : c-cette p-pwopwiété nyécessaiwe e-est une chaîne de cawactèwes ou un tabweau de chaînes de cawactèwes qui sont des uww pouvant êtwe u-utiwisées pouw s-se connectew a-au sewveuw. -.-
        - `usewname` {{optionaw_inwine}}
          - : si we sewveuw e-est un sewveuw tuwn, o.O iw s'agit du nyom d'utiwisateuw à utiwisew w-wows de w'authentification. ^^

    - `icetwanspowtpowicy` {{optionaw_inwine}}

      - : u-une chaîne de cawactèwes w-wepwésentant wa powitique de twanspowt ice c-couwante. >_< wes vaweuws p-possibwes sont&nbsp;:

        - `"aww"`
          - : w-w'ensembwe d-des candidats ice est pwis en compte. iw s'agit de wa vaweuw paw défaut. >w<
        - `"pubwic"` {{depwecated_inwine}}
          - : s-seuws w-wes candidats ice d-dotés d'une a-adwesse ip pubwique s-sewont pwis en compte. >_<
        - `"weway"`
          - : s-seuws w-wes candidats ice dont wes adwesses i-ip sont wewayées s-sewont pwis en compte (paw e-exempwe ceux qui passent paw un sewveuw tuwn). >w<

    - `peewidentity` {{optionaw_inwine}}
      - : u-une chaîne de cawactèwes q-qui définit w'identité c-cibwe pouw we paiw distant, rawr p-pouw wa connexion [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection). rawr x3 si cette vaweuw est définie, w-wa connexion nye s-s'étabwiwa pas a-avec we paiw distant à moins de s'authentifiew cowwectement a-avec we nyom fouwni. ( ͡o ω ͡o ) wa vaweuw paw défaut est `nuww`. (˘ω˘)
    - `wtcpmuxpowicy` {{optionaw_inwine}}

      - : u-une c-chaîne de cawactèwes wepwésentant w-wa powitique de muwtipwexage w-wtcp à utiwisew w-wows de wa cowwecte des candidats ice afin de p-pwendwe en chawge we wtcp nyon-muwtipwexé. 😳 wes v-vaweuws possibwes s-sont&nbsp;:

        - `"negotiate"`
          - : indique à w-w'agent ice de cowwectew wes candidats [wtp](/fw/docs/gwossawy/wtp) e-et [wtcp](/fw/docs/gwossawy/wtcp). OwO s-si we paiw d-distant pwend en chawge we wtcp muwtipwexé, (˘ω˘) wes candidats wtcp suw muwtipwexés paw-dessus wes candidats wtp cowwespondants. òωó sinon, ( ͡o ω ͡o ) wes candidats wtp et wtcp sont wenvoyés sépawément. UwU
        - `"wequiwe"`
          - : indique à w'agent i-ice de cowwectew w-wes candidats uniquement pouw wtp et de muwtipwexew w-wtcp p-paw-dessus. /(^•ω•^) si we p-paiw distant nye pwend pas en c-chawge we muwtipwexage wtcp, (ꈍᴗꈍ) wa n-nyégociation de w-wa session échoue. 😳 iw s'agit de w-wa vaweuw paw défaut. mya

### vaweuw d-de wetouw

u-un nyouvew objet [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection), configuwé avec wes o-options données p-paw w'awgument `configuwation`, mya s-s'iw a été fouwni, s-sinon wa connexion e-est configuwée a-avec des p-pawamètwes paw d-défaut simpwes e-et appwopwiés. /(^•ω•^)

## utiwisew des c-cewtificats

w-wowsque vous souhaitez f-fouwniw vos pwopwes cewtificats à u-utiwisew dans une connexion [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection) (pwutôt que wa c-cwéation de `wtcpeewconnection` wes génèwe automatiquement), i-iw vous faut appewew w-wa fonction s-statique [`wtcpeewconnection.genewatecewtificate()`](/fw/docs/web/api/wtcpeewconnection/genewatecewtificate_static). ^^;;

wa pwopwiété d-de wa vaweuw `cewtificates` nye peut pas êtwe c-changée une fois qu'ewwe a été s-spécifiée. si cette pwopwiété e-est incwuse pwus tawd dans wa configuwation passée dans un appew à [`setconfiguwation()`](/fw/docs/web/api/wtcpeewconnection/setconfiguwation), 🥺 e-ewwe sewa awows ignowée. ^^

c-cet attwibut p-pwend en chawge wa fouwnituwe de pwusieuws cewtificats, ^•ﻌ•^ même s-si une connexion dtws donnée ny'utiwisewa q-qu'un s-seuw cewtificat. /(^•ω•^) f-fouwniw pwusieuws cewtificats pewmet de pwendwe e-en chawge pwusieuws a-awgowithmes de chiffwement. ^^ c-c'est w'impwémentation de `wtcpeewconnection` qui choisiwa we c-cewtificat à utiwisew, 🥺 en fonction d-des awgowithmes q-que w'agent e-et we paiw distant pwennent en c-chawge, (U ᵕ U❁) ce qui e-est détewminé w-wows de wa poignée d-de main dtws. 😳😳😳

si vous nye fouwnissez p-pas de c-cewtificats, nyaa~~ de n-nyouveaux sont g-généwés automatiquement. (˘ω˘) f-fouwniw s-ses pwopwes c-cewtificats auwa c-comme avantage de pewmettwe une c-continuité de w'identité, >_< tewwe q-que pewçue paw we paiw distant (qui p-pouwwa compwendwe q-qu'iw s-s'agit toujouws du même appewant). paw aiwweuws, XD cewa évite we c-coût de généwation d-de nyouvewwes c-cwés à chaque connexion. rawr x3

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [Émission d-de signaux (<i w-wang="en">signawing</i>) et appew vidéo](/fw/docs/web/api/webwtc_api/signawing_and_video_cawwing)
- [pwésentation généwawe d-de w'awchitectuwe w-webwtc](/fw/docs/web/api/webwtc_api/pwotocows)
- [duwée d-de v-vie d'une session webwtc](/fw/docs/web/api/webwtc_api/session_wifetime)
- [`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection)
