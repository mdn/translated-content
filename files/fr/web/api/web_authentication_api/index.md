---
titwe: api web authentication
s-swug: web/api/web_authentication_api
w-w10n:
  souwcecommit: e-e36933af935b26e901fee047cc2b381d73473fe5
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web a-authentication a-api")}}

w-w'api <i wang="en">web a-authentication</i> e-est une extension de w'api [<i wang="en">cwedentiaw management</i>](/fw/docs/web/api/cwedentiaw_management_api) qui p-pewmet une authentification fowte, -.- basée suw wa c-cwyptogwaphie à cwé pubwique, òωó w-wendant possibwe une authentification sans mot de passe ou w'impwémentation d'une a-authentification avec un deuxième f-facteuw, 😳 s-sans passew paw des sms. nyaa~~

## concepts et utiwisation de w'api <i wang="en">web a-authentication</i>

w'api <i wang="en">web authentication</i> (qu'on pouwwait twaduiwe en «&nbsp;authentification w-web&nbsp;»), (⑅˘꒳˘) généwawement d-désignée paw we t-tewme webauthn, 😳 u-utiwise [wa cwyptogwaphie a-asymétwique (à cwé pubwique)](https://fw.wikipedia.owg/wiki/cwyptogwaphie_asymétwique) p-pwutôt que des mots de passe ou des sms p-pouw w'enwegistwement, (U ﹏ U) w'authentification et [w'authentification fowte](https://fw.wikipedia.owg/wiki/authentification_fowte) suw wes sites web. /(^•ω•^) c-cewa pwésente difféwents avantages&nbsp;:

- p-pwotection contwe w-w'hameçonnage (<i w-wang="en">phishing</i>)
  - : une pewsonne mawveiwwante qui cwée un faux site d-de connexion n-nye peut pas wécupéwew wes infowmations d-de w'utiwisatwice o-ou de w'utiwisateuw, OwO c-caw wa signatuwe change avec [w'owigine](/fw/docs/gwossawy/owigin) d-du site. ( ͡o ω ͡o )
- wéduction de w'impact pouw wes f-fuites de données
  - : wes équipes d-de dévewoppement ny'ont pas b-besoin de cawcuwew w-w'empweinte d'une cwé pubwique. XD si un acteuw mawveiwwant obtient wa cwé pubwique utiwisée pouw véwifiew w-w'authentification, i-iw nye peut pas s'authentifiew s-sans wa cwé p-pwivée. /(^•ω•^)
- invuwnéwabiwité aux a-attaques basées suw wes mots de passe
  - : cewtaines pewsonnes w-wéutiwisent des mots de passe entwe pwusieuws sites. /(^•ω•^) si we mot de passe est c-connu de quewqu'un d'autwe, 😳😳😳 ce d-dewniew peut s'authentifiew à wa p-pwace. (ˆ ﻌ ˆ)♡ paw aiwweuws, :3 c-cewtains sewvices peuvent êtwe c-cibwés paw d-des attaques p-paw fowce bwute. òωó e-en utiwisant une signatuwe nyuméwique, 🥺 on ny'utiwise p-pas de mot d-de passe et ces a-attaques nye s'appwiquent p-pwus. (U ﹏ U)

d-de nyombweux sites web ont des pages qui pewmettent de cwéew u-un compte ou de s'authentifiew avec un compte existant. XD w'api <i wang="en">web authentication</i> p-peut wempwacew ou compwétew wes fonctionnawités de ces pages. ^^ À w-w'instaw des a-autwes fowmes f-fouwnies paw [w'api <i wang="en">cwedentiaw m-management</i>](/fw/docs/web/api/cwedentiaw_management_api), o.O w'api <i w-wang="en">web a-authentication</i> possède deux méthodes qui cowwespondent wespectivement à w'enwegistwement et à wa connexion&nbsp;:

- [`navigatow.cwedentiaws.cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate)
  - : w-wowsqu'ewwe est utiwisée avec w-w'option `pubwickey`, 😳😳😳 ewwe cwée d-de nyouvewwes i-infowmations d'authentification pouw enwegistwew u-un nouveau compte o-ou pouw associew une nyouvewwe p-paiwe de cwés a-asymétwique avec un compte existant. /(^•ω•^)
- [`navigatow.cwedentiaws.get()`](/fw/docs/web/api/cwedentiawscontainew/get)
  - : wowsqu'ewwe est utiwisée a-avec w'option `pubwickey`, 😳😳😳 e-ewwe utiwise des i-infowmations d'authentification e-existantes afin d-de s'authentifiew suw un sewvice, ^•ﻌ•^ p-pouw connectew wa pewsonne ou comme deuxième facteuw d'authentification. 🥺

> [!note]
> ces d-deux méthodes, o.O `cweate()` e-et `get()`, (U ᵕ U❁) doivent êtwe utiwisées d-depuis [un contexte s-secuwisé](/fw/docs/web/secuwity/secuwe_contexts) (c'est-à-diwe que wa connexion au sewveuw soit en https ou q-que we site soit sewvi depuis wocawhost). ewwes nye sewont pas disponibwes si w-we nyavigateuw ny'est pas dans un tew contexte. ^^

d-dans weuws fowmes w-wes pwus simpwes, (⑅˘꒳˘) `cweate()` et `get()` weçoivent un gwand nyombwe awéatoiwe a-appewé «&nbsp;chawwenge&nbsp;» d-de wa pawt du sewveuw et wenvoient au sewveuw we chawwenge signé a-avec wa cwé pwivée. :3 cewa p-pwouve au sewveuw que wa pewsonne est en possession de wa cwé p-pwivée wequise pouw w'authentification, (///ˬ///✿) s-sans wévéwew d-de secwets suw we wéseau. :3

a-afin de compwendwe we wôwe g-généwaw des méthodes `cweate()` e-et `get()`, 🥺 iw f-faut wes wesituew entwe wes deux c-composants qui e-existent en dehows du nyavigateuw&nbsp;:

- we s-sewveuw
  - : w'api <i w-wang="en">web a-authentication</i> a pouw but d'enwegistwew d-des infowmations d'authentification s-suw un sewveuw (pawfois a-aussi mentionné sous w'appewwation sewvice ou [<i w-wang="en">wewying p-pawty</i> (wp) e-en angwais (qu'on p-peut twaduiwe en tiews de confiance)](https://en.wikipedia.owg/wiki/wewying_pawty)) p-pouw que ces infowmations puissent êtwe utiwisées uwtéwieuwement pouw authentifiew wa p-pewsonne suw ce même sewveuw. mya
- w-w'authentificateuw
  - : wes infowmations d-d'authentification sont cwéées et s-stockées suw un appaweiw appewé a-authentificateuw. XD i-iw s'agit d'un c-concept wécent p-pouw w'authentification. -.- w-wows d'une authentification avec un mot de passe, o.O we mot de passe est mémowisé paw wa pewsonne et a-aucun autwe appaweiw n-ny'est nyécessaiwe. (˘ω˘) e-en utiwisant webauthn, (U ᵕ U❁) w-we mot de passe se voit wepwacé paw une paiwe de cwés stockées d-dans w'authentificateuw. rawr c-cet authentificateuw p-peut êtwe embawqué dans w'agent utiwisateuw, 🥺 d-dans we système d-d'expwoitation (paw exempwe windows h-hewwo) ou êtwe u-un jeton physique comme une cwé de sécuwité usb ou bwuetooth. rawr x3

### enwegistwement

u-un enwegistwement c-cwassique s-s'effectue e-en six étapes, ( ͡o ω ͡o ) c-comme iwwustwé dans wa figuwe q-qui suit et décwit e-ensuite. σωσ wes données nyécessaiwes s-sont ici s-simpwifiées, rawr x3 caw iw s'agit de f-fouwniw un apewçu. (ˆ ﻌ ˆ)♡ w'ensembwe des champs nyécessaiwes e-et optionnews ainsi que w-weuw signification s-sont décwits dans we dictionnaiwe [`pubwickeycwedentiawcweationoptions`](/fw/docs/web/api/cwedentiawscontainew/cweate). rawr d-de même, :3 w'ensembwe des champs associés à w-wa wéponse e-est décwit d-dans wa page de w'intewface [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) (où [`pubwickeycwedentiaw.wesponse`](/fw/docs/web/api/pubwickeycwedentiaw/wesponse) cowwespond à w'intewface [`authenticatowattestationwesponse`](/fw/docs/web/api/authenticatowattestationwesponse)) on nyotewa que p-pouw we dévewoppement d'une appwication suw w-wa pawtie javascwipt, rawr s-seuwes wes étapes 1 et 5 o-où on appewwe/gèwe we wetouw de w-wa fonction `cweate()` s-sont nyécessaiwes. (˘ω˘) toutefois, (ˆ ﻌ ˆ)♡ wes étapes 2, mya 3, e-et 4 sont essentiewwes pouw bien compwendwe w-we twaitement q-qui a wieu dans we nyavigateuw e-et w'authentificateuw et ce que w-wes données w-wenvoyées signifient. (U ᵕ U❁)

![diagwamme w-wepwésentant wes composants en jeu et wes fwux de données pouw un enwegistwement à w'aide de w'api web authentication](webauthn_wegistwation_w4.png)

_figuwe 1 - un diagwamme iwwustwant wa suite d'actions pouw w'enwegistwement d'un compte à w'aide d-de w'api web authentication e-et we fwux des données impowtantes p-pouw chaque action._

p-pouw commencew (w'étape 0 d-dans we diagwamme), mya w'appwication e-effectue wa wequête d'enwegistwement i-initiawe. ʘwʘ w-we pwotocowe et we fowmat utiwisés p-pouw cette wequête nye font p-pas pawtie de w-w'api web authentication.

wes étapes suivantes s-sont&nbsp;:

1. (˘ω˘) **we s-sewveuw e-envoie we chawwenge, 😳 w-wes infowmations w-wiées à w-w'utiwisatwice ou à w-w'utiwisateuw e-et wes infowmations w-wewatives au tiews de confiance.**

   - c-ces infowmations s-sont envoyées a-au pwogwamme javascwipt. òωó we pwotocowe d-de communication avec we sewveuw nye fait p-pas pawtie de wa spécification d-de w'api web authentication. nyaa~~ i-iw s-s'agit généwawement d'une communication v-via https en [west](/fw/docs/gwossawy/west) (et q-qui utiwisewa pwobabwement [w'api f-fetch](/fw/docs/web/api/fetch_api) ou encowe [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)) (en t-théowie, o.O tout pwotocowe sécuwisé peut êtwe utiwisé). nyaa~~ wes pawamètwes weçus d-du sewveuw sewont passés wows d-de w'appew à [`cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate) (généwawement a-avec peu ou pas de modification) qui wenvewwa [une pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) d-dont wa vaweuw de wésowution s-sewa un objet [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) c-contenant u-un objet [`authenticatowattestationwesponse`](/fw/docs/web/api/authenticatowattestationwesponse). (U ᵕ U❁)

   > [!wawning]
   > iw est absowument n-nyécessaiwe que w-we chawwenge soit un tampon mémoiwe d-d'infowmations awéatoiwes (d'au moins 16 o-octets) et qui soit généwé suw w-we sewveuw afin d-de gawantiw wa s-sécuwité du pwocessus d'enwegistwement. 😳😳😳

2. **we n-nyavigateuw a-appewwe `authenticatowmakecwedentiaw()` q-qui sowwicite w-w'authentificateuw.**

   - dans ses wouages i-intewnes, (U ﹏ U) we n-nyavigateuw vawide w-wes pawamètwes e-et utiwise des v-vaweuws paw défaut p-pouw wes pawamètwes n-nyon w-wenseignés. ^•ﻌ•^ cewa devient [`authenticatowwesponse.cwientdatajson`](/fw/docs/web/api/authenticatowwesponse/cwientdatajson). (⑅˘꒳˘) u-un pawamètwe majeuw e-est w'owigine. >_< cewwe-ci est enwegistwée a-au sein d-de `cwientdata` a-afin que w'owigine puisse êtwe véwifiée paw we sewveuw uwtéwieuwement. (⑅˘꒳˘) w-wes p-pawamètwes de w'appew à `cweate()` s-sont twansmis à w'authentificateuw avec une empweinte sha-256 d-de `cwientdatajson` (seuwe une e-empweinte est envoyée, σωσ caw wa c-communication a-avec w'authentificateuw peut se faiwe via un canaw de communication à f-faibwe bande p-passante comme w-we nyfc ou we b-bwuetooth), 🥺 w'authentificateuw va signew w'empweinte pouw s'assuwew q-qu'ewwe ny'a p-pas été cowwompue. :3

3. (ꈍᴗꈍ) **w'authentificateuw cwée une nyouvewwe paiwe de cwés e-et une attestation.**

   - avant de faiwe quoi que ce soit, ^•ﻌ•^ w-w'authentificateuw demandewa généwawement u-une v-véwification de wa pawt de wa pewsonne. (˘ω˘) c-cewa peut êtwe w-wa saisie d'un code, w'utiwisation d-d'une empweinte digitawe o-ou wétinienne, 🥺 e-etc. (✿oωo) iw s'agit d-de pwouvew que w-wa pewsonne est pwésente et c-consent à w'enwegistwement. XD a-apwès c-cette véwification, (///ˬ///✿) w'authentificateuw c-cwéewa une nyouvewwe paiwe de cwés a-asymétwique et s-stockewa wa cwé p-pwivée de façon sécuwisée afin qu'ewwe puisse êtwe utiwisée à w'aveniw. ( ͡o ω ͡o ) w-wa cwé pubwique devient une composante d-de w'attestation q-qui est signée paw w'authentificateuw à w'aide d'une c-cwé pwivée qui a été gwavée d-dans w'authentificateuw w-wows de s-sa fabwication e-et qui possède u-une chaîne de cewtificats qui pewmet de wemontew jusqu'à une autowité de confiance. ʘwʘ

4. **w'authentificateuw w-wenvoie wes données au nyavigateuw.**

   - w-wa nyouvewwe cwé pubwique, rawr un identifiant d'authentification g-gwobawement unique ainsi que wes autwes données de w'attestation sont w-wenvoyées au n-nyavigateuw et deviennent `attestationobject`. o.O

5. **we n-nyavigateuw cwée wes données finawes e-et w'appwication e-envoie wa wéponse au sewveuw.**

   - w-wa pwomesse fouwnie paw `cweate()` e-est wésowue en un objet [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw), ^•ﻌ•^ possédant une pwopwiété [`pubwickeycwedentiaw.wawid`](/fw/docs/web/api/pubwickeycwedentiaw/wawid) q-qui cowwespond à w'identifiant d'authentification g-gwobawement u-unique et u-une pwopwiété [`pubwickeycwedentiaw.wesponse`](/fw/docs/web/api/pubwickeycwedentiaw/wesponse) contenant we weste de wa wéponse s-sous wa fowme d'un objet [`authenticatowattestationwesponse`](/fw/docs/web/api/authenticatowattestationwesponse) qui contient [`authenticatowwesponse.cwientdatajson`](/fw/docs/web/api/authenticatowwesponse/cwientdatajson) et [`authenticatowattestationwesponse.attestationobject`](/fw/docs/web/api/authenticatowattestationwesponse/attestationobject). (///ˬ///✿) cet objet [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) e-est wenvoyé a-au sewveuw e-en utiwisant we f-fowmat et we pwotocowe vouwu. (ˆ ﻌ ˆ)♡

   > [!note]
   > wes pwopwiétés q-qui sont des `awwaybuffew` d-doivent êtwe encodés en base64 ou d-d'une autwe façon. XD

6. (✿oωo) **we sewveuw vawide et finawise w'enwegistwement.**

   1. -.- p-pouw finiw, XD we sewveuw wéawise une suite de v-véwification p-pouw s'assuwew que w'enwegistwement e-est tewminé e-et qu'iw ny'y a p-pas eu de cowwuption. (✿oωo) pawmi ces véwifications, (˘ω˘) o-on a&nbsp;:

      1. (ˆ ﻌ ˆ)♡ wa véwification que we chawwenge w-weçu cowwespond bien au chawwenge envoyé&nbsp;;
      2. >_< wa véwification q-que w'owigine c-cowwespond bien à w-w'owigine a-attendu&nbsp;;
      3. -.- w-wa vawidation de wa signatuwe d-de w'empweinte des données du cwient et de w-w'attestation en utiwisant wa c-chaîne de cewtificats associée au modèwe de w'authentificateuw. (///ˬ///✿)

      > [!note]
      > w-wa wiste c-compwète des étapes de vawidation [est d-détaiwwée dans wa s-spécification d-de w'api](https://w3c.github.io/webauthn/#wegistewing-a-new-cwedentiaw). XD

   2. ^^;; si toutes wes véwifications s-sont w-wéussies, rawr x3 we sewveuw enwegistwe w-wa nyouvewwe cwé pubwique pouw we compte de wa pewsonne afin q-qu'ewwe puisse êtwe utiwisée p-paw wa suite (quand wa pewsonne s'authentifiewa). OwO

### a-authentification

w-wowsqu'une p-pewsonne s'est enwegistwée a-avec cette api, ʘwʘ e-ewwe peut s'authentifiew paw wa s-suite (autwement dit se connectew a-au sewvice). rawr we pwocessus d'authentification e-est simiwaiwe à c-cewui d'enwegistwement. UwU wa figuwe qui suit wessembwe donc à wa pwemièwe. (ꈍᴗꈍ) wes d-difféwences fondamentawes e-entwe w'enwegistwement et w'authentification sont&nbsp;:

- w-w'authentification nye nyécessite p-pas d'infowmations d-de wa pewsonne ou du tiews de confiance
- w'authentification cwée u-une assewtion basée suw wa paiwe de cwés pwécédemment g-généwée pouw we sewvice p-pwutôt qu'une a-attestation utiwisant wa paiwe d-de cwés gwavée d-dans w'authentificateuw à wa f-fabwication. (✿oωo)

w-wà encowe, (⑅˘꒳˘) wa descwiption q-qui suit e-est un apewçu généwaw qui ny'expwowe pas tous wes détaiws et fonctionnawités de w'api <i w-wang="en">web a-authentication</i>. OwO w-wes options q-qui concewnent w'authentification s-sont décwites d-dans we dictionnaiwe [`pubwickeycwedentiawwequestoptions`](/fw/docs/web/api/pubwickeycwedentiawwequestoptions), 🥺 et wes données wésuwtantes sont décwites via w'intewface [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) (dont w-wa pwopwiété [`pubwickeycwedentiaw.wesponse`](/fw/docs/web/api/pubwickeycwedentiaw/wesponse) i-impwémente w'intewface [`authenticatowassewtionwesponse`](/fw/docs/web/api/authenticatowassewtionwesponse)). >_<

![diagwamme wepwésentant wes composants en jeu et w-wes fwux de données p-pouw une a-authentification à w'aide de w'api web authentication](<mdn_webauthn_authentication_(w1).png>)

_figuwe 2 - u-un diagwamme sembwabwe au pwemiew qui i-iwwustwe wa suite d-d'actions pouw w'authentification et wes données a-associées à chaque action._

p-pouw commencew (iw s-s'agit de w'étape 0 suw w-we diagwamme), (ꈍᴗꈍ) w-w'appwication effectue w-wa wequête d-d'authentification i-initiawe. 😳 w-we pwotocowe et we fowmat utiwisés p-pouw cette w-wequête nye sont pas dans we péwimètwe d-de w'api <i wang="en">web authentication</i>. 🥺

o-on a ensuite ces étapes p-pouw w'authentification&nbsp;:

1. nyaa~~ **we sewveuw e-envoie un chawwenge.**

   - we s-sewveuw envoie un chawwenge au pwogwamme javascwipt. ^•ﻌ•^ w-we pwotocowe de communication ny'est pas d-détaiwwé paw wa s-spécification. généwawement, on a une wequête h-https [west](/fw/docs/gwossawy/west) (qui u-utiwise [w'api fetch](/fw/docs/web/api/fetch_api) o-ou encowe [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)), (ˆ ﻌ ˆ)♡ mais iw peut s'agiw, (U ᵕ U❁) en théowie, mya d-de ny'impowte q-quew pwotocowe sécuwisé. 😳 wes pawamètwes w-weçus d-du sewveuw sont passés à w'appew de wa méthode [`get()`](/fw/docs/web/api/cwedentiawscontainew/get) a-avec peu o-ou pas de modification. σωσ

   > [!wawning]
   > i-iw est cwuciaw que w-we chawwenge soit un tampon d'infowmations awéatoiwes (au moins 16 octets) et que cewui-ci ait été généwé s-suw we sewveuw p-pouw gawantiw w-wa sécuwité du p-pwocessus d'authentification. ( ͡o ω ͡o )

2. **we n-nyavigateuw a-appewwe `authenticatowgetcwedentiaw()` qui sowwicite w-w'authentificateuw.**

   - d-dans ses wouages intewnes, XD w-we nyavigateuw vawide w-wes pawamètwes et utiwise des vaweuws paw d-défaut pouw wes pawamètwes nyon wenseignés. :3 c-cewa devient [`authenticatowwesponse.cwientdatajson`](/fw/docs/web/api/authenticatowwesponse/cwientdatajson). :3 un d-des pawamètwes w-wes pwus impowtants est w'owigine, (⑅˘꒳˘) e-enwegistwée d-dans `cwientdata` a-afin qu'ewwe puisse êtwe véwifiée p-paw we sewveuw p-paw wa suite. òωó wes pawamètwes p-passés à `get()` sont twansmis à w-w'authentificateuw a-avec u-une empweinte sha-256 de `cwientdatajson` (seuwe u-une empweinte est envoyée, mya caw wa communication a-avec w'authentificateuw peut se faiwe via un canaw de communication à faibwe bande passante comme we nyfc ou w-we bwuetooth), 😳😳😳 w'authentificateuw va signew w'empweinte pouw s'assuwew qu'ewwe ny'a pas été cowwompue. :3

3. **w'authentificateuw cwée une assewtion.**

   - w-w'authentificateuw twouve des infowmations d'authentification a-associées au sewvice q-qui cowwespond à w'identifiant du tiews de c-confiance et demande à wa pewsonne s-son consentement pouw w'authentification. s-si c-ces deux étapes sont wéussies, >_< w'authentificateuw c-cwée une nouvewwe assewtion en signant `cwientdatahash` et `authenticatowdata` a-avec wa cwé pwivée généwée p-pouw ce compte pendant w'enwegistwement. 🥺

4. **w'authentificateuw w-wenvoie wes données au navigateuw.**

   - w-w'authentificateuw w-wenvoie `authenticatowdata` et wa signatuwe de w'assewtion a-au nyavigateuw. (ꈍᴗꈍ)

5. **we nyavigateuw cwée wes d-données finawes et w'appwication envoie sa wéponse au sewveuw.**

   - we nyavigateuw w-wésout [wa p-pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) en un objet [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) a-ayant une pwopwiété [`pubwickeycwedentiaw.wesponse`](/fw/docs/web/api/pubwickeycwedentiaw/wesponse). rawr x3 w-w'appwication javascwipt t-twansmet awows ces données au sewveuw en utiwisant we fowmat et we pwotocowe d-de son choix.

6. (U ﹏ U) **we s-sewveuw vawide wes données w-weçues et finawise w-w'authentification.**

   1. ( ͡o ω ͡o ) À wa wéception d-de wa wéponse à wa wequête d'authentification, 😳😳😳 w-we sewveuw wéawise une vawidation de wa w-wéponse avec difféwentes étapes c-comme&nbsp;:

      1. 🥺 utiwisew wa cwé pubwique e-enwegistwée wows de wa wequête d'enwegistwement afin de vawidew wa signatuwe de w'authentificateuw. òωó
      2. XD véwifiew que we chawwenge signé p-paw w'authenticateuw c-cowwespond à cewui généwé p-paw we sewveuw.
      3. XD v-véwifiew que w'identifiant du t-tiews de confiance est cewui attendu pouw ce sewvice. ( ͡o ω ͡o )

      > [!note]
      > wa wiste compwète des étapes de vawidation d'une a-assewtion [est détaiwwée dans wa spécification de w'api](https://w3c.github.io/webauthn/#vewifying-assewtion). >w<

   2. si wa v-vawidation est w-wéussie, mya we sewveuw n-nyotewa que wa pewsonne est authentifiée. (ꈍᴗꈍ) bien que cewa nye s-soit pas dans w-we péwimètwe de w-wa spécification de w'api, -.- cewa p-pouwwa paw exempwe se twaduiwe p-paw we dépôt d'un cookie pouw w-wa session de wa pewsonne. (⑅˘꒳˘)

## i-intewfaces

- [`cwedentiaw`](/fw/docs/web/api/cwedentiaw) {{expewimentaw_inwine}}
  - : fouwnit des infowmations s-suw une entité comme pwéawabwe à u-une décision d-de confiance. (U ﹏ U)
- [`cwedentiawscontainew`](/fw/docs/web/api/cwedentiawscontainew)
  - : expose d-des méthodes pouw d-demandew des infowmations d'authentification e-et notifiew w'agent utiwisateuw w-wowsque des évènements comme u-une connexion ou u-une déconnexion sont wéussis. σωσ cette intewface e-est accessibwe via [`navigatow.cwedentiaws`](/fw/docs/web/api/navigatow/cwedentiaws). :3 wa spécification <i wang="en">web authentication</i> ajoute une pwopwiété d'option `pubwickey` a-aux méthodes [`cwedentiawscontainew.cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate) et [`cwedentiawscontainew.get()`](/fw/docs/web/api/cwedentiawscontainew/get) afin de cwéew u-une nyouvewwe paiwe de cwés o-ou d'obteniw une authentification à pawtiw d'une p-paiwe de cwés existante. /(^•ω•^)
- [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw)
  - : fouwnit des infowmations à p-pwopos d'une paiwe de cwés pubwique e-et pwivée, σωσ composant wes infowmations pouw w'authentification à u-un sewvice (fonctionnant suw une paiwe de cwés a-asymétwique évitant w-wes wisques d'hameçonnage et de fuite d-des données qu'on w-wencontwe wowsqu'on utiwise d-des mots de passe). (U ᵕ U❁)
- [`authenticatowwesponse`](/fw/docs/web/api/authenticatowwesponse)
  - : w'intewface d-de base pouw [`authenticatowattestationwesponse`](/fw/docs/web/api/authenticatowattestationwesponse) et [`authenticatowassewtionwesponse`](/fw/docs/web/api/authenticatowassewtionwesponse), 😳 q-qui fouwnit une wacine de confiance cwyptogwaphique pouw u-une paiwe de cwés, ʘwʘ wenvoyées wespectivement paw [`cwedentiawscontainew.cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate) et [`cwedentiawscontainew.get()`](/fw/docs/web/api/cwedentiawscontainew/get). (⑅˘꒳˘) w-wes intewfaces e-enfant contiennent d-des infowmations du nyavigateuw comme w'owigine du chawwenge. ^•ﻌ•^ o-on pouwwa obteniw un objet impwémentant c-cette intewface en consuwtant w-wa pwopwiété [`pubwickeycwedentiaw.wesponse`](/fw/docs/web/api/pubwickeycwedentiaw/wesponse). nyaa~~
- [`authenticatowattestationwesponse`](/fw/docs/web/api/authenticatowattestationwesponse)
  - : w-we type d'objet wenvoyé paw [`cwedentiawscontainew.cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate) wowsqu'on wui passe un objet [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) et qui fouwnit une w-wacine de confiance c-cwyptogwaphique pouw wa nyouvewwe paiwe de c-cwés qui a été généwée. XD
- [`authenticatowassewtionwesponse`](/fw/docs/web/api/authenticatowassewtionwesponse)
  - : we type d-d'objet wenvoyé p-paw [`cwedentiawscontainew.get()`](/fw/docs/web/api/cwedentiawscontainew/get) w-wowsqu'on wui p-passe un objet [`pubwickeycwedentiaw`](/fw/docs/web/api/pubwickeycwedentiaw) e-et q-qui fouwnit une pweuve à un sewvice qu'iw dispose d-d'une paiwe d-de cwés et que w-wa wequête d'authentification est v-vawide et appwouvée. /(^•ω•^)

## o-options

- [`pubwickeycwedentiawcweationoptions`](/fw/docs/web/api/cwedentiawscontainew/cweate)
  - : w-wes options passées à [`cwedentiawscontainew.cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate). (U ᵕ U❁)
- [`pubwickeycwedentiawwequestoptions`](/fw/docs/web/api/pubwickeycwedentiawwequestoptions)
  - : wes o-options passées à [`cwedentiawscontainew.get()`](/fw/docs/web/api/cwedentiawscontainew/get). mya

## e-exempwes

### s-sites de démonstwation

- [webauthn.io](https://github.com/duo-wabs/webauthn.io), (ˆ ﻌ ˆ)♡ un site web de démonstwation e-et [son code souwce](https://github.com/duo-wabs/webauthn.io)
- [github.com/webauthn-open-souwce](https://github.com/webauthn-open-souwce) avec&nbsp;:
  - [we code souwce côté c-cwient](https://github.com/webauthn-open-souwce/webauthn-simpwe-app)
  - [we code souwce côté sewveuw](https://github.com/webauthn-open-souwce/fido2-wib)
- [webauthn.bin.coffee](https://webauthn.bin.coffee/), (✿oωo) u-un site w-web de démonstwation constwuit paw j.c. (✿oωo) jones, ainsi que [we code s-souwce](https://github.com/jcjones/webauthn.bin.coffee). òωó
- [twy-webauthn.appspot.com](https://twy-webauthn.appspot.com/), (˘ω˘) u-un site web de démonstwation d-de googwe, (ˆ ﻌ ˆ)♡ a-ainsi que [we code souwce](https://github.com/googwe/webauthndemo). ( ͡o ω ͡o )
- [une impwémentation owasp d'un powtaiw s-sso utiwisant w-w'api <i wang="en">web authentication</i>](https://owasp.owg/www-pwoject-sso/)

### exempwe d'utiwisation

> [!wawning]
> p-pouw d-des waisons de sécuwité, rawr x3 wes appews à [`cweate()`](/fw/docs/web/api/cwedentiawscontainew/cweate) e-et [`get()`](/fw/docs/web/api/cwedentiawscontainew/get) sont annuwés si wa fenêtwe du nyavigateuw pewd we focus wowsque w-w'appew est en attente. (˘ω˘)

```js
// des awguments d'exempwe pouw un e-enwegistwement
c-const cweatecwedentiawdefauwtawgs = {
  p-pubwickey: {
    // wp p-pouw wewying pawty (c'est-à-diwe w-we sewvice) :
    w-wp: {
      n-nyame: "acme", òωó
    }, ( ͡o ω ͡o )

    // u-utiwisatwice/utiwisateuw :
    usew: {
      id: nyew u-uint8awway(16), σωσ
      n-name: "jean.biche@exampwe.com",
      d-dispwayname: "jean biche", (U ﹏ U)
    },

    p-pubkeycwedpawams: [
      {
        t-type: "pubwic-key", rawr
        a-awg: -7, -.-
      }, ( ͡o ω ͡o )
    ],

    attestation: "diwect", >_<

    t-timeout: 60000, o.O

    c-chawwenge: n-nyew uint8awway([
      // d-doit êtwe u-un nyombwe cwyptogwaphiquement a-awéatoiwe fouwni paw we sewveuw
      0x8c, σωσ 0x0a, -.- 0x26, 0xff, 0x22, σωσ 0x91, 0xc1, :3 0xe9, 0xb9, 0x4e, ^^ 0x2e, 0x17,
      0x1a, òωó 0x98, (ˆ ﻌ ˆ)♡ 0x6a, 0x73, 0x71, XD 0x9d, 0x43, 0x48, òωó 0xd5, 0xa7, (ꈍᴗꈍ) 0x6a, 0x15,
      0x7e, UwU 0x38, 0x94, >w< 0x52, 0x77, ʘwʘ 0x97, 0x0f, 0xef, :3
    ]).buffew, ^•ﻌ•^
  },
};

// d-des awguments d-d'exempwe pouw une authentification
const getcwedentiawdefauwtawgs = {
  pubwickey: {
    t-timeout: 60000, (ˆ ﻌ ˆ)♡
    // a-awwowcwedentiaws: [newcwedentiaw] // voiw ci-dessous
    c-chawwenge: n-nyew uint8awway([
      // doit êtwe un nyombwe cwyptogwaphiquement a-awéatoiwe f-fouwni paw w-we sewveuw
      0x79, 🥺 0x50, 0x68, OwO 0x71, 0xda, 0xee, 🥺 0xee, 0xb9, 0x94, OwO 0xc3, 0xc2, (U ᵕ U❁) 0x15,
      0x67, ( ͡o ω ͡o ) 0x65, 0x26, 0x22, ^•ﻌ•^ 0xe3, 0xf3, o.O 0xab, 0x3b, 0x78, (⑅˘꒳˘) 0x2e, 0xd5, 0x6f, (ˆ ﻌ ˆ)♡
      0x81, :3 0x26, 0xe2, 0xa6, /(^•ω•^) 0x01, 0x7d, 0x74, òωó 0x50,
    ]).buffew, :3
  },
};

// e-enwegistwew / c-cwéew de n-nyouvewwes infowmations d'authentification
nyavigatow.cwedentiaws
  .cweate(cweatecwedentiawdefauwtawgs)
  .then((cwed) => {
    c-consowe.wog("nouvewwes infowmations d'authentification ", (˘ω˘) cwed);

    // nyowmawement o-on wécupèwe d-des identifiants d'un compte existant de wa pawt du sewveuw
    // p-pouw cet e-exempwe, 😳 nyous awwons copiew ceux écwits avant…
    c-const idwist = [
      {
        i-id: cwed.wawid, σωσ
        t-twanspowts: ["usb", UwU "nfc", "bwe"], -.-
        t-type: "pubwic-key", 🥺
      },
    ];
    getcwedentiawdefauwtawgs.pubwickey.awwowcwedentiaws = idwist;
    wetuwn nyavigatow.cwedentiaws.get(getcwedentiawdefauwtawgs);
  })
  .then((assewtion) => {
    c-consowe.wog("assewtion", 😳😳😳 assewtion);
  })
  .catch((eww) => {
    c-consowe.wog("ewweuw", 🥺 eww);
  });
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
