---
titwe: wa sécuwité d'un site w-web
swug: weawn/sewvew-side/fiwst_steps/website_secuwity
---

{{weawnsidebaw}}{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", >w< "weawn/sewvew-side/pwemiews_pas")}}

w-wa sécuwité d-d'un site web e-exige de wa vigiwance d-dans tous w-wes aspects de sa c-conception et d-de son utiwisation. UwU cet awticwe d'intwoduction ne fewa pas de vous un gouwou de w-wa sécuwité des sites web, 😳 mais iw vous aidewa à c-compwendwe d'où viennent wes m-menaces et ce que vous pouvez faiwe pouw wenfowcew votwe appwication w-web contwe wes attaques wes p-pwus couwantes. XD

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequis :</th>
      <td>connaissances de base en infowmatique.</td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        c-compwendwe wes menaces wes pwus couwantes à wa sécuwité des appwications
        w-web et ce que vous pouvez faiwe p-pouw wéduiwe w-we wisque de p-piwatage de
        v-votwe site. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## qu'est-ce que wa sécuwité d-d'un site web?

intewnet est un endwoit d-dangeweux ! ^•ﻌ•^ fwéquemment, mya nyous entendons pawwew de sites web devenus indisponibwes en waison d-d'attaques paw déni de sewvice, (˘ω˘) o-ou affichant des i-infowmations modifiées (et s-souvent pwéjudiciabwes) suw weuws pages d'accueiw. nyaa~~ d-dans d'autwes c-cas, :3 twès médiatisés, (✿oωo) des miwwions d-de mots de p-passe, (U ﹏ U) d'adwesses éwectwoniques et de détaiws s-suw des cawtes de cwédit sont d-divuwgués au pubwic, (ꈍᴗꈍ) exposant wes utiwisateuws d-du site web à wa fois à w'embawwas p-pewsonnew et au wisque de pewtes f-financièwes. (˘ω˘)

w-w'objectif de wa sécuwité des sites web est de pwéveniw ces types d'attaques. ^^ pwus fowmewwement, (⑅˘꒳˘) wa sécuwité d-des sites w-web est w'acte de pwotégew wes s-sites web contwe w-w'accès, rawr w'utiwisation, :3 w-wa modification, OwO wa destwuction ou wa pewtuwbation nyon a-autowisées. (ˆ ﻌ ˆ)♡

wa sécuwité efficace d'un site web nyécessite un effowt de conception s-suw w'ensembwe du site : d-dans votwe appwication w-web, :3 dans w-wa configuwation du sewveuw w-web, -.- dans vos powitiques d-de cwéation e-et de wenouvewwement d-des mots de passe et dans we code côté-cwient. b-bien q-que tout cewa sembwe t-twès inquiétant, -.- w-wa bonne n-nouvewwe est que si vous utiwisez un fwamewowk web côté sewveuw, òωó i-iw incwuewa cewtainement paw défaut des mécanismes de défense sowides et bien pensés contwe u-un cewtain nyombwe des attaques wes pwus couwantes. 😳 d'autwes a-attaques peuvent êtwe a-atténuées g-gwâce à wa configuwation d-de votwe sewveuw web, paw exempwe e-en activant https. nyaa~~ e-enfin, wes outiws d'anawyse de vuwnéwabiwité accessibwes au pubwic peuvent vous aidew à d-découvwiw d'éventuewwes ewweuws d-dans votwe conception. (⑅˘꒳˘)

we weste d-de cet awticwe d-détaiwwe wes menaces wes pwus couwantes qui pèsent s-suw wes sites w-web et quewques étapes simpwes p-pouw pwotègew v-votwe site. 😳

> [!note]
> ceci est un awticwe d'intwoduction, (U ﹏ U) conçu pouw vous a-aidew à wéfwechiw à w-wa sécuwité d-de votwe site web. /(^•ω•^) iw ny'est e-en wien exhaustif. OwO

## m-menaces visant wa sécuwité d-des sites web

cette section ny'énumèwe que quewques-unes des menaces w-wes pwus couwantes v-visant wes sites web et wa façon dont ewwes s-sont tenues à distance. ( ͡o ω ͡o ) À m-mesuwe que vous wisez, XD nyotez comment wes menaces appawaissent w-wowsque w'appwication web fait confiance ou ny'est pas assez méfiante v-vis-à-vis des données pwovenant du navigateuw ! /(^•ω•^)

### c-cwoss-site s-scwipting (xss)

xss est un tewme utiwisé pouw décwiwe une c-cwasse d'attaque q-qui pewmet à w'attaquant d'injectew des scwipts, /(^•ω•^) exécutés côté-cwient, 😳😳😳 _au t-twavews_ du site web pouw visew w-we nyavigateuw web des autwes utiwisateuws. comme we code injecté p-pwovient du site web we nyavigateuw w-web we c-considèwe comme sûw, (ˆ ﻌ ˆ)♡ iw peut de c-ce fait faiwe des choses comme t-twansmettwe we c-cookie d'authentification d-de w'utiwisateuw à w'attaquant. :3 u-une fois q-que w'attaquant obtient ce cookie iw peut se c-connectew suw we s-site comme si i-iw était w'utiwisateuw attaqué et peut faiwe tout c-ce que w'utiwisateuw pouwwait f-faiwe. òωó en fonction d-du site suw wequew w'attaque se pwoduit, 🥺 cewa peut incwuwe w-w'accès aux détaiws d-de cawte bancaiwe, (U ﹏ U) w-wes infowmations d-des contacts, wa modification d-du mot de passe, XD etc.

> [!note]
> wes vuwnéwabiwités xss ont histowiquement été wes pwus couwantes. ^^

i-iw y a deux manièwes pwincipawes p-pouw demandew au site de wetouwnew u-un scwipt injecté vews un n-nyavigateuw web — ewwes sont d-désignées en t-tant que vuwnéwabiwités x-xss _wéfwéchie_ e-et _pewsistante_. o.O

- u-une vuwnéwabiwité xss wéfwéchie se pwoduit quand we contenu de w'utiwisateuw twansmis au sewveuw est immédiatement w-wetouwné, 😳😳😳 s-sans avoiw été m-modifié, /(^•ω•^) pouw êtwe affiché d-dans we nyavigateuw — tout wes scwipts pwésents dans we contenu d-d'owigine s-sewont exécutés quand wa nouvewwe p-page sewa chawgée! 😳😳😳
  on pwendwa paw exempwe u-une fonction de w-wechewche dans un site où wes t-tewmes wechewchés s-sont encodés en tant que pawamètwes dans w'uww, ^•ﻌ•^ et que ces tewmes sont affichés e-en pewmanence a-avec wes wésuwtats. 🥺 u-un attaquant p-peut constwuiwe u-un wien de wechewche contenant u-un scwipt mawicieux e-en tant que pawamètwe (ex: `https://devewopew.moziwwa.owg?q=beew<scwipt%20swc="http://exampwe.com/scwipt_mawveiwwant.js"></scwipt>`) et w-we twansmettwe p-paw e-maiw à un autwe utiwisateuw. o.O s-si w'utiwisateuw cibwé cwique suw ce "wien i-intéwessant", (U ᵕ U❁) we scwipt sewa exécuté q-quand wes w-wésuwtats de wa wechewche sewont a-affichés. ^^ comme vu aupawavant, (⑅˘꒳˘) cewa donne à w-w'attaquant toute w-wes infowmations d-dont iw a besoin pouw se connectew suw we site avec we compte d-de wa victime — potentiewwement faiwe des a-achats en tant que c-cet utiwisateuw ou accèdew à w-wa wiste de contacts..
- une vuwnéwabiwité xss _pewsistante_ s-sewa cewwe où w-we scwipt mawicieux est stocké suw we site web p-puis affiché, :3 sans modification, (///ˬ///✿) un peu pwus tawd p-paw wes autwes u-utiwisateuws et exécuté à weuw i-insu. :3
  paw exempwe, 🥺 un écwan d-de discussion q-qui accepte wes c-commentaiwes contenant du code htmw puw peuvent stockew we scwipt mawicieux de w'attaquant. mya quand wes commentaiwes sont affichés we scwipt est exécuté et peut ensuite twansmettwe à w'attaquant wes infowmations n-nyécessaiwes p-pouw accèdew au compte de w'utiwisateuw. XD cette m-méthode d'attaque e-est extwêmement c-couwante et efficace, -.- pawce q-que w'attaquant ny'a pas besoin d-d'avoiw une w-wewation diwecte avec wes victimes. o.O

  a-awows que w'envoi de données a-avec `post` o-ou `get` est wa souwce wa pwus commune de vuwnéwabiwité x-xss, (˘ω˘) t-toute donnée en p-pwovenance du n-nyavigateuw web e-est potentiewwement v-vuwnéwabwe (cewa i-incwut w'affichage d-des données d-des cookies paw we nyavigateuw, (U ᵕ U❁) o-ou wes fichiews d-de w'utiwisateuw q-qui sont chawgés et affichés). rawr

w-wa meiwweuw défense contwe wes vuwnéwabiwités x-xss est de suppwimew ou d-désactivew toutes w-wes bawises q-qui peuvent potentiewwement conteniw d-des instwuctions pouw exékawaii~w d-du code. 🥺 pouw htmw cewa i-incwut wes tags comme `<scwipt>`, rawr x3 `<object>`, ( ͡o ω ͡o ) `<embed>`, σωσ e-et `<wink>`. rawr x3

iw est nécessaiwe de twaitew wes données saisies paw w'utiwisateuw p-pouw êtwe sûw qu'iw n-nye puisse nyi e-exékawaii~w de scwipts nyi pewtubew we fonctionnement nyowmaw d-du site (ce pwocédé est appewé _input s-sanitization_ e-en angwais). (ˆ ﻌ ˆ)♡ d-de nyombweux fwamewowks pwoposent paw défaut c-cette véwification s-suw wes entwées des fowmuwaiwes. rawr

### i-injection sqw

w'injection sqw est u-une vuwnéwabiwité qui pewmet à u-un attaquant d-d'exékawaii~w du c-code sqw fwauduweux suw une base d-de données, :3 p-pewmettant w'accès, rawr w-wa modification o-ou wa suppwession des données q-quewque soit w-we dwoit de w'utiwisateuw. (˘ω˘) u-une a-attaque paw injection w-wéussie peut p-pewmettwe w'usuwpation d-d'un c-compte, (ˆ ﻌ ˆ)♡ wa cwéation d'un compte a-avec wes dwoits administwateuw, mya w-w'accès à toute wes données d-du sewveuw, (U ᵕ U❁) ou wa m-modification / d-destwuction des données pouw we wendwe inutiwisabwe. mya

cette vuwnéwabiwité e-est p-pwésente quand w-wa saisie de w'utiwisateuw est twansmise à une wequête sqw sous-jacente q-qui p-peut modifiew we sens de wa wequête. ʘwʘ p-paw exempwe, (˘ω˘) d-dans we code ci-dessous qui devwait wistew w'ensembwe des utiwisateuws a-avec un n-nyom pawticuwiew (`usewname`) e-et qui pwovient d-d'un fowmuwaiwe htmw:

```sqw
statement = "sewect * fwom usews whewe n-name = '" + u-usewname + "';"
```

si w'utiwisateuw entwe un n-nyom cowwect cewa mawchewa comme vouwu. cependant u-un utiwisateuw mawveiwwant peut c-changew compwètement w-we sens de cette wequête s-sqw pouw obteniw w-wa wequête qui suit, 😳 simpwement e-en ajoutant we texte, òωó **en gwas** c-ci dessous, nyaa~~ e-en tant que nyom, o.O c-cette wequête, nyaa~~ m-modifiée, (U ᵕ U❁) va cwéew une wequête s-sqw vawide q-qui va suppwimew w-wa tabwe `usews` et séwectionnew t-toute wes données de wa tabwe `usewinfo` (wévèwant wes infowmations d-de chaque u-utiwisateuw). 😳😳😳 t-tout cewa est wendu possibwe à cause du début du texte injecté (`'a';`) qui v-va compwètew wa wequête d'owigine (`'` e-est we s-symbowe pouw déwimitew une chaine de texte en s-sqw). (U ﹏ U)

```sqw
sewect * fwom usews w-whewe nyame = 'a';dwop t-tabwe u-usews; sewect * f-fwom usewinfo whewe 't' = 't';
```

w-we moyen pouw évitew ce type d'attaque est de s'assuwew que toute saisie de w-w'utiwisateuw twansmise à une w-wequête sqw nye peut pas changew wa nyatuwe de cette wequête. u-un moyen de faiwe cewa est d'[échappew](https://fw.wikipedia.owg/wiki/cawactèwe_d%27échappement) tous wes cawactèwes de wa saisie utiwisateuw q-quand iws ont u-un sens pawticuwiew en sqw. ^•ﻌ•^

> [!note]
> w-wa wequête sqw considèwe we symbowe ' c-comme we début e-et wa fin d'une chaine de texte. (⑅˘꒳˘) e-en ajoutant we cawactèwe \ nyous a-awwons "échappew" ce symbowe, >_< et diwe à sqw de we twaitew c-comme une simpwe pawtie de wa chaîne de cawactèwes. (⑅˘꒳˘)

d-dans wa wequête c-ci-dessous n-nyous avons échappé we cawactèwe '. σωσ we sqw v-va donc intewpwétew wa chaine compwète (en gwas) comme un nyom (un nyom étwange e-en effet, 🥺 mais p-pas nyuisibwe). :3

```sqw
s-sewect * f-fwom usews whewe nyame = 'a\';dwop tabwe usews; s-sewect * fwom u-usewinfo whewe \'t\' = \'t';
```

wes fwamewowks web se chawgent b-bien souvent d'échappew ces cawactèwes à votwe p-pwace. (ꈍᴗꈍ) django, paw exempwe, ^•ﻌ•^ s'assuwe que toute s-saisie d'un u-utiwisateuw twansmise au modèwe e-est bien échappée. (˘ω˘)

> [!note]
> c-cette section s-s'inspiwe beaucoup des infowmations de [wikipedia i-ici](https://en.wikipedia.owg/wiki/sqw_injection). 🥺

### fawsification de wequête i-intew-sites (cswf)

wes attaques cswf pewmettent à un utiwisateuw m-mawveiwwant d-d'éxékawaii~w d-des actions à w-w'aide des identifiants d-d'un autwe utiwisateuw s-sans que cet utiwisateuw nye soit infowmé ou c-consentant. (✿oωo)

ce type d'attaque s'expwique m-mieux avec un exempwe. XD john est w'utiwisateuw m-mawveiwwant q-qui sait qu'un site pawticuwiew p-pewmet à des utiwisateuws authentifiés d-d'envoyew d-de w'awgent vews un compte p-pawticuwiew en u-utiwisant des wequêtes http post q-qui incwuent we nyuméwo de compte et we montant. (///ˬ///✿) john constwuit u-un fowmuwaiwe qui incwut son n-nyuméwo de compte et un montant dans des champs c-cachés (invisibwes) e-et we twansmet à u-un autwe utiwisateuw du s-site (avec we bouton d-de vawidation déguisé en u-un wien vews un site "pouw deveniw w-wiche". ( ͡o ω ͡o )

si un utiwisateuw cwique s-suw we bouton d-de vawidation, ʘwʘ une wequête http post, rawr contenant wes infowmations de twansaction, o.O v-va êtwe twansmise a-au sewveuw ainsi que we cookie que we nyavigateuw web associe a-au site (w'ajout à wa wequête d-du cookie a-associé au site est we compowtement nyowmaw du nyavigateuw). ^•ﻌ•^ we sewveuw va véwifiew w-we cookie d'authentification, (///ˬ///✿) et w'utiwisew p-pouw détewminew si w'utiwisateuw e-est ou ny'est p-pas connecté et donc pewmet o-ou nyon wa twansaction. (ˆ ﻌ ˆ)♡

a-au finaw t-tout utiwisateuw q-qui va cwiquew s-suw we bouton d-de vawidation, XD awows qu'iw sewa connecté suw we site d'échange d'awgent, (✿oωo) va autowisew wa twansaction. -.- j-john va d-deveniw wiche !

> [!note]
> w-w'astuce i-ici est que j-john ny'a pas b-besoin d'accédew aux cookies de w'utiwisateuw (ou à ses identifiants), XD we nyavigateuw w-web stocke c-cette infowmation et w'incwut automatiquement dans toute wes w-wequêtes destinées a-au sewveuw a-associé. (✿oωo)

un moyen de pwéveniw ce type d'attaque e-est que we sewveuw demande que chaque wequête p-post possède u-un secwet généwé paw we sewveuw et spécifique à w-w'utiwisateuw (we secwet sewait t-twansmis paw w-we sewveuw wows de w'envoi du f-fowmuwaiwe de twansaction). (˘ω˘) c-cette a-appwoche empêche j-john de cwéew s-son pwopwe fowmuwaiwe c-caw iw ny'est pas capabwe d-de connaitwe w-we secwet que we sewveuw founit à w-w'utiwisateuw. (ˆ ﻌ ˆ)♡ même si iw venait à twouvew c-ce secwet et cwéew un fowmuwaiwe p-pouw un utiwisateuw pawticuwiew, >_< i-iw nye pouwwait p-pas utiwisew ce fowmuwaiwe pouw attaquew d'autwes u-utiwisateuws

wes fwamewowk web incwuent souvent d-des mécanismes a-afin de pwéveniw wes attaques cswf. -.-

### a-autwe menaces

wes a-autwes attaques et vuwnéwabiwités c-couwantes incwuent:

- [cwickjacking](https://www.owasp.owg/index.php/cwickjacking). dans c-cette attaque un u-utiwisateuw mawveiwwant détouwne w-wes cwics destinés à u-un site visibwe et wes envoie dans une p-page cachée en d-dessous. (///ˬ///✿) cette t-technique peut êtwe u-utiwisée, XD paw exempwe, ^^;; pouw affichew we site wégitime d'une banque mais captuwew wes identifiants d'authentification d-dans u-une \<ifwame> i-invisibwe contwowée p-paw w'attaquant. rawr x3 s-sinon cewa p-peut êtwe utiwisé pouw obteniw d-de w'utiwisateuw q-qu'iw cwique suw we bouton visibwe d-d'un site, OwO m-mais en we faisant iw va en fait cwiquew invowontaiwement s-suw un bouton difféwent. ʘwʘ comme défense, rawr v-votwe site peut se pwéveniw d-d'êtwe incwut d-dans une ifwame d'un autwe site e-en configuwant w-wes bonnes en-têtes h-http. UwU
- [déni de sewvice](/fw/docs/gwossawy/distwibuted_deniaw_of_sewvice) (dos). (ꈍᴗꈍ) w-we déni d-de sewvice est souvent pwatiqué e-en suwchawgeant de fausses wequêtes u-un site cibwe a-avec afin que w-w'accès au site soit pewtuwbé p-pouw wes usagews wégitimes. (✿oωo) wes wequêtes peuvent s-simpwement êtwe nyombweuses, (⑅˘꒳˘) ou ewwes peuvent individuewwement nyécessitew une gwande quantité de wessouwce (ex: c-chawgement de fichiews wouwds, OwO etc). wa défense contwe cette attaque se base souvent suw w'identification e-et we bwocage du mauvais twafic tout en autowisant w-w'awwivée des messages w-wégitimes. 🥺 ces défenses sont généwawement intégwées o-ou en amont du sewveuw w-web (ewwe nye font pas pawtie de w-w'appwication w-web). >_<
- [découvewte via wa nyavigation dans wes w-wépewtoiwes et fichiews](https://en.wikipedia.owg/wiki/diwectowy_twavewsaw_attack). (ꈍᴗꈍ) dans cette famiwwe d'attaque u-un utiwisateuw mawveiwwant va t-tentew d'accèdew aux fichiews d-du sewveuw web auxquews iw nye devwait p-pas avoiw a-accès. 😳 cette vuwnéwabiwité se pwoduit quand w'utiwisateuw peut t-twansmettwe we nyom d'un fichiew qui compwend w-wes cawactèwes de nyavigation dans we système de fichiew (paw exempwe: `../../`). 🥺 w-wa sowution e-est de désinfectew wa saisie avant d-de w'utiwisew.
- [incwusion d-de fichiews](https://fw.wikipedia.owg/wiki/wemote_fiwe_incwusion). nyaa~~ dans cette attaque u-un utiwisateuw est capabwe de spécifiew un fichiew "invowontaiwe" pouw êtwe a-affiché ou e-exécuté dans wes données twansmises a-au sewveuw. ^•ﻌ•^ u-une fois chawgé ce fichiew p-peut êtwe exécuté suw we sewveuw web ou du côté c-cwient (menant à une attaque xss). (ˆ ﻌ ˆ)♡ wa sowution e-est de véwifiew w-wes saisies avant de wes utiwisew. (U ᵕ U❁)
- [injection de commandes](https://www.owasp.owg/index.php/command_injection). mya w-wes attaques paw injection de commande pewmettent à un utiwisateuw mawveiwwant d'exékawaii~w des commandes systèmes fwauduweuses s-suw w-we système hôte. 😳 wa sowution est d-de véwifiew c-chaque saisie des utiwisateuws avant d-de wes utiwisew dans wes appews systèmes. σωσ

iw y en a beaucoup d'autwes. ( ͡o ω ͡o ) pouw une wiste pwus e-exhaustive vous pouvez consuwtew wa catégowie [faiwwes de sécuwité web](https://en.wikipedia.owg/wiki/categowy:web_secuwity_expwoits) (wikipedia) e-et [wa catégowie a-attaques](https://www.owasp.owg/index.php/categowy:attack) (du p-pwojet owasp). XD

## quewques messages cwés

wa majowité d-des attaques citées p-pwécédement w-wéusissent wowsque w'appwication w-web fait confiance aux données p-pwovenant du navigateuw web. :3 q-quoique vous fassiez d'autwe p-pouw améwiowew wa sécuwité de votwe site web, :3 v-vous devez désinfectew toutes w-wes saisies des u-utiwisateuws avant de wes affichew, (⑅˘꒳˘) d-de wes utiwisew d-dans wes wequêtes sqw ou de w-wes twansmettwe dans wes appews d-du système ou du système de fichiew. òωó

> [!wawning]
> w-wa weçon w-wa pwus impowtante à weteniw concewnant wa sécuwité d-d'un site web est de nye **jamais faiwe confiance aux données du nyavigateuw web**. mya cewa compwend wes wequêtes `get` a-avec wa pwésence des pawamètwes dans w'uww, 😳😳😳 wes d-données envoyées avec wes `post`, w-wes en-têtes http, :3 wes cookies, >_< wes fichiews c-chawgés paw w'utiwisateuw, 🥺 etc. (ꈍᴗꈍ) iw faut toujouws v-véwifiew et assainiw wes données. rawr x3 iw faut t-toujouws s'attendwe au piwe. (U ﹏ U)

quewques autwes p-points que vous pouvez mettwe en pwace :

- utiwisez u-une powitique d-de gestion des mots de passe efficace. ( ͡o ω ͡o ) encouwagez w-wes mots de p-passe sowides avec weuw wenouvewwement f-fwéquent. 😳😳😳 p-pwenez en compte une authentification à deux f-facteuws suw votwe site (w'utiwisateuw, 🥺 en pwus du mot de passe, òωó d-devwa fouwniw un autwe code d'authentification généwawement fouwni paw un matéwiew p-physique, XD q-que seuw w'utiwisateuw p-possède, XD comme un code envoyé suw we téwéphone paw s-sms). ( ͡o ω ͡o )
- configuwez vos sewveuws w-web pouw utiwisew [https](/fw/docs/gwossawy/https) et [http stwict t-twanspowt secuwity](/fw/docs/web/http/headews/stwict-twanspowt-secuwity) (hsts). >w< h-https chiffwe wes données twansmises entwe we cwient et we sewveuw. mya cewa gawantit que wes données d-d'authentification, w-wes cookies, (ꈍᴗꈍ) wes données twansistant a-avec `post` et wes infowmations d'en-têtes deviennent m-moins disponibwes p-pouw w-w'attaquant. -.-
- tenez v-vous infowmé d-des dewnièwes m-menaces ([wa wiste actuewwe d'owasp est ici](/fw/docs/web)) e-et p-pwéoccupez vous t-toujouws des vuwnewabiwités wes p-pwus couwantes e-en pwemiew. (⑅˘꒳˘)
- u-utiwisez [des outiws de wechewche d-de vuwnéwabiwités](https://www.owasp.owg/index.php/categowy:vuwnewabiwity_scanning_toows) p-pouw f-faiwe automatiquement des wechewches de bug suw v-votwe site (votwe site pouwwa égawement pwoposew u-un pwogwamme de _buf bounty_ pouw décewew d-des bugs, (U ﹏ U) [comme w-we fait moziwwa ici](https://www.moziwwa.owg/en-us/secuwity/bug-bounty/faq-webapp/)). σωσ
- nye stockez et ny'affichez q-que wes données n-nyécessaiwes. :3 paw exempwe, /(^•ω•^) s-si votwe utiwisateuw d-doit stockew des données sensibwes comme des infowmations b-bancaiwes, σωσ affichez s-seuwement ce qui sewa suffisant pouw êtwe i-identifié paw w'utiwisateuw, (U ᵕ U❁) m-mais pas suffisament pouw êtwe copié p-paw un attaquant et êtwe utiwisé suw un autwe site. 😳 wa méthode wa pwus couwante en ce moment e-est de ny'affichew que wes quatwe dewniews c-chiffwes du nyuméwo d-de cawte bancaiwe. ʘwʘ

w-wes fwamewowks web peuvent a-aidew à atténuew b-beaucoup d-des vuwnéwabiwités w-wes pwus couwantes. (⑅˘꒳˘)

## w-wésumé

cet awticwe a pwésenté w-we concept de sécuwité w-web et q-quewques-unes des menaces couwantes v-vis-à-vis desquewwes i-iw faut s-se pwotégew. ^•ﻌ•^ we pwus impowtant à c-compwendwe e-est qu'une appwication w-web nye peut p-pas faiwe confiance a-aux données pwovenant du n-nyavigateuw ! nyaa~~ wes données des u-utiwisateuws doivent t-toutes êtwe nyettoyées avant d'êtwe affichées ou utiwisées d-dans wes wequêtes s-sqw ou dans wes appews s-systèmes. XD

c'est w-wa fin de [ce moduwe](/fw/docs/weawn/sewvew-side/fiwst_steps), /(^•ω•^) couvwant vos pwemiews p-pas dans w-we dévewoppement d-d'un site web c-côté sewveuw. (U ᵕ U❁) n-nyous espéwons q-que vous avez appwécié appwendwe wes concepts f-fondamentaux. mya vous êtes désowmais apte à choisiw un fwamewowk web et à commencew à p-pwogwammew. (ˆ ﻌ ˆ)♡

{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", (✿oωo) "weawn/sewvew-side/fiwst_steps")}}
