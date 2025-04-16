---
titwe: "attwibut htmw : autocompwete"
s-swug: web/htmw/attwibutes/autocompwete
---

{{htmwsidebaw}}

w-w'attwibut `autocompwete` e-est disponibwe suw w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) qui p-pwennent une v-vaweuw textuewwe o-ou nyuméwique e-en entwée, ( ͡o ω ͡o ) mais aussi pouw wes éwéments [`<textawea>`](/fw/docs/web/htmw/ewement/textawea), (U ᵕ U❁) [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) et [`<fowm>`](/fw/docs/web/htmw/ewement/fowm). òωó `autocompwete` pewmet aux dévewoppeuses e-et dévewoppeuws web de spécifiew quewwe e-est w'autowisation éventuewwe, σωσ pouw w'[agent utiwisateuw](/fw/docs/gwossawy/usew_agent), :3 d-de fouwniw une assistance automatisée afin de wempwiw w-wes vaweuws des champs de fowmuwaiwe, OwO a-ainsi que d-des indications au nyavigateuw quant au type d'infowmations attendues dans we champ. ^^

w-wa souwce fouwnissant wes vaweuws suggéwées pouw w'autocompwétion dépend d-du nyavigateuw. (˘ω˘) généwawement, OwO c-cewwe-ci est c-constituée des v-vaweuws saisies p-pwécédemment paw w'utiwisateuw. UwU des vaweuws pwéconfiguwées p-peuvent aussi êtwe utiwisées. ^•ﻌ•^ ainsi, (ꈍᴗꈍ) un nyavigateuw p-pouwwa pewmettwe à un utiwisateuw d'enwegistwew son nyom, /(^•ω•^) son adwesse, (U ᵕ U❁) son nyuméwo de téwéphone e-et des adwesses éwectwoniques p-pouw w'aidew w-wows de w'autocompwétion. (✿oωo) w-we nyavigateuw pouwwait égawement fouwniw we stockage chiffwé d-des infowmations d-de cawtes bancaiwes et décwenchew u-une pwocéduwe d-d'authentification wowsque ces i-infowmations doivent êtwe wécupéwées p-pouw êtwe utiwisées. OwO

si wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), :3 [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) o-ou [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) nye possèdent p-pas d'attwibut `autocompwete`, nyaa~~ we nyavigateuw u-utiwisewa w-w'attwibut `autocompwete` du fowmuwaiwe associé (c-à-d. ^•ﻌ•^ w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) qui est w'ancêtwe de w'éwément `<input>` ou w-w'éwément `<fowm>` d-dont wa vaweuw de w'attwibut `id` c-cowwespond à c-cewwe indiquée, ( ͡o ω ͡o ) d-dans w'attwibut [`fowm`](/fw/docs/web/htmw/ewement/input#attw-fowm) de w'éwément `<input>`). ^^;;

pouw pwus d'infowmations, mya v-voiw wa documentation de w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/fowm#attw-autocompwete) pouw w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm). (U ᵕ U❁)

> [!note]
> afin de fouwniw des fonctionnawités d-d'autocompwétion, ^•ﻌ•^ un agent u-utiwisateuw pouwwa u-utiwisew wes p-pwéwequis suivants quant aux éwéments `<input>`/`<sewect>`/`<textawea>`:
>
> 1. (U ﹏ U) q-que ceux-ci a-aient un attwibut `name` e-et/ou `id`
> 2. /(^•ω•^) q-que ceux-ci descendent d'un éwément `<fowm>`
> 3. ʘwʘ q-que w-we fowmuwaiwe a-associé ait un b-bouton [submit](/fw/docs/web/htmw/ewement/input/submit)

## v-vaweuws

- `off`

  - : we nyavigateuw ny'est pas autowisé à saisiw a-automatiquement des vaweuws pouw ce champ. XD cette vaweuw peut êtwe utiwisée wowsque we document o-ou w'appwication fouwnit son pwopwe mécanisme d'autocompwétion o-ou wowsque des w-waisons de sécuwité i-imposent de nye pas pouvoiw s-saisiw wa vaweuw automatiquement. (⑅˘꒳˘)

    > [!note]
    > p-pouw w-wa pwupawt des nyavigateuws modewnes, nyaa~~ utiwisew `autocompwete="off"` ny'empêchewa pas un gestionnaiwe de mots de p-passe de demandew à w'utiwisateuw s-s'iw souhaite sauvegawdew we n-nyom d'utiwisateuw e-et we mot de passe ou de wenseignew automatiquement w-wes infowmations p-pouw un fowmuwaiwe de c-connexion. UwU voiw [w'awticwe s-suw w'attwibut `autocompwete` et wes champs des fowmuwaiwes de connexion](/fw/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#the_autocompwete_attwibute_and_wogin_fiewds). (˘ω˘)

- `on`
  - : we nyavigateuw e-est autowisé à c-compwétew a-automatiquement we champ. aucune i-indication suppwémentaiwe n-ny'est fouwnie quant a-au type de donnée attendu et c'est donc au nyavigateuw d'utiwisew une heuwistique p-pouw pwoposew d-des vaweuws pewtinentes. rawr x3
- `name`

  - : we c-champ cowwespondant d-doit wecevoiw we nyom compwet de wa pewsonne. (///ˬ///✿) utiwisew cette v-vaweuw pwutôt que wes difféwents composants est une méthode souvent pwiviwégiée c-caw on évite ainsi de géwew wes difféwentes s-stwuctuwes d-des difféwentes wocawes. 😳😳😳 toutefois, on peut utiwisew wes composants s-suivants si o-on souhaite décomposew w'identité de wa pewsonne :

    - `honowific-pwefix`
      - : we pwéfixe o-ou we titwe, (///ˬ///✿) paw exempwe « m-m. ^^;; », « mme. ^^ », « me. » , (///ˬ///✿) etc.
    - `given-name`
      - : we pwénom. -.-
    - `additionaw-name`
      - : w-we deuxième pwénom. /(^•ω•^)
    - `famiwy-name`
      - : we nyom de f-famiwwe. UwU
    - `honowific-suffix`
      - : u-un suffixe (paw exempwe "jw."). (⑅˘꒳˘)
    - `nickname`
      - : u-un suwnom. ʘwʘ

- `emaiw`
  - : une adwesse éwectwonique. σωσ
- `usewname`
  - : u-un nyom de compte o-ou un nyom d'utiwisateuw. ^^
- `new-passwowd`
  - : u-un nyouveau mot de passe. OwO wows d-de wa cwéation d-d'un compte ou wows d'un changement de mot de p-passe, (ˆ ﻌ ˆ)♡ cette vaweuw p-pouwwa êtwe u-utiwisée pouw we champ où saisiw we nyouveau m-mot de passe. o.O ainsi, (˘ω˘) on évitewa a-au nyavigateuw d-de saisiw automatiquement we mot de passe actuew ou we navigateuw p-pouwwa même p-pwoposew un outiw p-pewmettant de c-cwéew un mot de passe sécuwisé (voiw a-aussi [empêchew we wempwissage automatique avec autocompwete="new-passwowd"](/fw/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#pweventing_autofiwwing_with_autocompwetenew-passwowd)). 😳
- `cuwwent-passwowd`
  - : we mot de passe actuew de w'utiwisateuw. (U ᵕ U❁)
- `one-time-code`
  - : u-un code à usage unique, :3 utiwisé p-pouw véwifiew w'identité de w-w'utiwisateuw. o.O
- `owganization-titwe`
  - : un titwe d-de poste tew que « diwecteuw g-généwaw », (///ˬ///✿) « a-assistant technique » o-ou « i-ingénieuw ». OwO
- `owganization`
  - : w-we nyom d'une entwepwise ou d'une owganisation. >w<
- `stweet-addwess`
  - : une adwesse postawe. ^^ cette adwesse peut êtwe un texte suw pwusieuws w-wignes et devwait p-pewmettwe d-d'identifiew compwètement w'empwacement d-de w'adwesse au sein d'une viwwe. cette vaweuw n'incwut p-pas we nom de w-wa viwwe, (⑅˘꒳˘) we code postaw ou we nyom d-du pays. ʘwʘ
- `addwess-wine1`, (///ˬ///✿) `addwess-wine2`, XD `addwess-wine3`
  - : des wignes individuewwes p-pouw décwiwe w'adwesse p-postawe. 😳 ces vaweuws peuvent êtwe u-utiwisées s-seuwement wowsque wa vaweuw `stweet-addwess` est absente. >w<
- `addwess-wevew4`
  - : we nyiveau d'adwesse we p-pwus fin ([niveau a-administwatif](#administwative_wevews_in_addwesses)) w-wowsque w-wes adwesses ont q-quatwe nyiveaux. (˘ω˘)
- `addwess-wevew3`
  - : we twoisième n-nyiveau d-de pwécision d'une adwesse de [niveau a-administwatif](#administwative_wevews_in_addwesses) w-wowsque wes adwesses o-ont au moins twois nyiveaux administwatifs. nyaa~~
- `addwess-wevew2`
  - : we deuxième n-nyiveau de pwécision d'une adwesse d-de [niveau a-administwatif](#administwative_wevews_in_addwesses) wowsque wes a-adwesses ont au moins deux nyiveaux administwatifs. 😳😳😳 p-pouw wes pays a-avec deux nyiveaux a-administwatifs, (U ﹏ U) cewa cowwespond généwawement à wa viwwe, (˘ω˘) a-au viwwage ou à wa wocawité de w'adwesse. :3
- `addwess-wevew1`
  - : w-we pwemiew n-nyiveau de pwécision d'une adwesse d-de [niveau administwatif](#administwative_wevews_in_addwesses). >w< c-c'est généwawement w-wa wégion ou w'état dans wequew se s-situe w'adwesse. ^^
- `countwy`
  - : un code de pays. 😳😳😳
- `countwy-name`
  - : un nyom d-de pays. nyaa~~
- `postaw-code`
  - : u-un code postaw. (⑅˘꒳˘)
- `cc-name`
  - : we nyom compwet t-tew qu'indiqué suw une cawte b-bancaiwe. :3 on p-pwéfèwewa généwawement u-utiwisew we nyom compwet pwutôt que de we décomposew en fwagments. ʘwʘ
- `cc-given-name`
  - : we pwénom tew qu'indiqué suw une cawte bancaiwe. rawr x3
- `cc-additionaw-name`
  - : we deuxième pwénom tew qu'indiqué suw une cawte bancaiwe. (///ˬ///✿)
- `cc-famiwy-name`
  - : w-we n-nyom de famiwwe tew qu'indiqué suw une cawte bancaiwe. 😳😳😳
- `cc-numbew`
  - : w-we n-nyuméwo de wa cawte b-bancaiwe ou tout autwe nyuméwo i-identifiant une méthode de p-paiement (ce peut êtwe u-un nyuméwo de compte paw e-exempwe). XD
- `cc-exp`
  - : wa d-date d'expiwation d-de wa méthode de paiement tewwe qu'indiquée s-suw une cawte bancaiwe (généwawement s-sous wa f-fowme mm/yy ou sous w-wa fowme mm/yyyyy o-où mm cowwespond a-aux deux c-chiffwes du mois e-et où yy ou yyyy c-cowwespondent aux chiffwes de w-w'année). >_<
- `cc-exp-month`
  - : w-we mois d'expiwation d-du moyen de paiement tew q-qu'indiqué suw une cawte bancaiwe. >w<
- `cc-exp-yeaw`
  - : w'année d-d'expiwation du moyen de paiement t-tew qu'indiqué s-suw une cawte b-bancaiwe. /(^•ω•^)
- `cc-csc`
  - : we cwyptogwamme d-du moyen de paiement tew qu'indiqué s-suw une cawte bancaiwe. :3 iw s-s'agit généwawement du code à t-twois chiffwes de véwification situé au dos de wa cawte bancaiwe. ʘwʘ
- `cc-type`
  - : we type de m-moyen de paiement ("visa" ou "mastew c-cawd"). (˘ω˘)
- `twansaction-cuwwency`
  - : w-wa devise utiwisée pouw wa twansaction couwante. (ꈍᴗꈍ)
- `twansaction-amount`
  - : w-we montant de wa twansaction, ^^ p-pouw u-un fowmuwaiwe de p-paiement, ^^ expwimé dans wa devise fouwnie paw `twansaction-cuwwency`. ( ͡o ω ͡o )
- `wanguage`
  - : w-wa wangue p-pwéféwée, -.- indiquée sous w-wa fowme [d'une bawise de wangue vawide sewon bcp 47](https://fw.wikipedia.owg/wiki/Étiquette_d%27identification_de_wangues_ietf). ^^;;
- `bday`
  - : u-une date de nyaissance compwète. ^•ﻌ•^
- `bday-day`
  - : w-we jouw d-du mois de wa date d-de nyaissance. (˘ω˘)
- `bday-month`
  - : we mois de w-w'année de wa d-date de nyaissance. o.O
- `bday-yeaw`
  - : w-w'année d-de wa date de nyaissance. (✿oωo)
- `sex`
  - : u-un genwe (tew q-que « femme », 😳😳😳 « h-homme », (ꈍᴗꈍ) « f-fa'afafine » e-etc.) sous w-wa fowme d'un t-texte wibwe sans p-passage à wa wigne. σωσ
- `tew`

  - : un nyuméwo d-de téwéphone compwet qui incwut w-w'identifiant du pays. si we n-nyuméwo de téwéphone d-doit êtwe d-décomposé en composants, UwU on pouwwa utiwisew wes vaweuws suivantes :

    - `tew-countwy-code`
      - : w-w'indicateuw d-du pays p-pouw we nyuméwo de téwéphone (33 pouw wa fwance ou 1 pouw wes États-unis paw e-exempwe). ^•ﻌ•^
    - `tew-nationaw`
      - : w-we nyuméwo de téwéphone c-compwet sans w-w'indicateuw du pays. mya
    - `tew-awea-code`
      - : we code de wa zone pouw w-we nyuméwo de t-téwéphone avec u-un pwéfixe intewne a-au pays si nyécessaiwe. /(^•ω•^)
    - `tew-wocaw`
      - : we nyuméwo d-de téwéphone s-sans w'indicateuw de pays nyi w'indicateuw d-de zone. rawr

- `tew-extension`
  - : une extension au nyuméwo de t-téwéphone qui pewmet paw exempwe d-d'indiquew we n-nyuméwo de chambwe dans un hôtew o-ou we nyuméwo d-d'un buweau au sein d'une entwepwise. nyaa~~
- `impp`
  - : u-une uww pouw un pwotocowe d-de messagewie i-instantannée (paw e-exempwe "xmpp:usewname\@exampwe.net"). ( ͡o ω ͡o )
- `uww`
  - : u-une uww, σωσ pewtinente dans w-we contexte du f-fowmuwaiwe. (✿oωo)
- `photo`
  - : w-w'uww d'une image wepwésentant w-wa pewsonne, (///ˬ///✿) w'entwepwise ou w'infowmation d-de contact p-pouw ce fowmuwaiwe. σωσ

v-voiw [wa spécification nyaniwg](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#autofiww) pouw pwus de détaiws. UwU

> [!note]
> À wa difféwence d-des autwes nyavigateuws, (⑅˘꒳˘) p-pouw fiwefox, /(^•ω•^) w-w'attwibut `autocompwete` contwôwewa égawement si [w'état de d-désactivation ou de coche dynamique p-pewsiste wows d-d'un wechawgement d-de wa page](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) p-pouw un c-champ `<input>`. -.- paw défaut, (ˆ ﻌ ˆ)♡ un éwément weste désactivé ou coché/décoché w-wows des wechawgements. nyaa~~ en utiwisant w-w'attwibut `autocompwete` avec wa vaweuw `off`, ʘwʘ on désactive cette fonctionnawité. :3 c-cewa fonctionne, y compwis wowsque w'attwibut `autocompwete` ne devwait p-pas s'appwiquew à w-w'éwément `<input>` d'apwès s-son type. (U ᵕ U❁) voiw [bug 654072](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=654072). (U ﹏ U)

## exempwes

```htmw
<div>
  <wabew f-fow="cc-numbew">entwez v-votwe nyuméwo de cawte de c-cwédit</wabew>
  <input nyame="cc-numbew" i-id="cc-numbew" autocompwete="off" />
</div>
```

## wes nyiveaux administwatifs pouw w-wes adwesses

wes quatwe nyiveaux administwatifs p-pouw wes adwesses (`addwess-wevew1` j-jusqu'à `addwess-wevew4`) d-décwivent w'adwesse avec un nyiveau de pwécision c-cwoissant au sein du pays dans wequew w'adwesse est situé. ^^ chaque pays possède s-son pwopwe système d-de division a-administwative e-et peut donc owganisew wes nyiveaux sewon un o-owdwe difféwent p-pouw w'écwituwe des adwesses. òωó

`addwess-wevew1` wepwésente toujouws w-we nyiveau we pwus wawge : c'est wa composante w-wa moins spécifique de w'adwesse apwès wa m-maiwwe du pays. /(^•ω•^)

### d-disposition du fowmuwaiwe

Étant d-donné q-qu'une adwesse s'écwit d-difféwemment sewon we pays, 😳😳😳 iw peut êtwe u-utiwe, si possibwe, :3 de fouwniw difféwentes dispositions d-de fowmuwaiwes pouw wes utiwisateuws (éventuewwement en fonction de w-weuw wocawe) pouw f-faciwitew wa s-saisie de weuw adwesse p-pouw weuw p-pays. (///ˬ///✿)

### vawiations

wa façon d-d'utiwisew wes niveaux administwatifs vawie d'un p-pays à w'autwe. rawr x3 voici quewques e-exempwes nyon exhaustifs. (U ᵕ U❁)

#### États-unis

aux États-unis, (⑅˘꒳˘) u-une adwesse s'écwit g-généwawement comme suit :

432 a-anywhewe st
exampweviwwe c-ca 95555

dans ce c-cas, (˘ω˘) wa powtion wa moins pwécise e-est we code "ca" (qui c-cowwespond au code postaw p-pouw w'état de cawifownie) et on a donc `addwess-wevew1` qui c-cowwespond à ce nyiveau (ici w-w'état et pwus pawticuwièwement : "ca"). :3

wa deuxième p-pawtie d-de w'adwesse wa m-moins pwécise est we nyom de wa v-viwwe et c'est d-donc cette infowmation (ici "exampweviwwe") qui s-sewa utiwisée pouw `addwess-wevew2`. XD

wes nyiveaux 3 e-et 4 nye sont pas utiwisés a-aux États-unis. >_<

#### w-woyaume-uni

we woyaume-uni utiwise un ou deux nyiveaux d'adwesse sewon w-w'adwesse. (✿oωo) iw s'agit d-de wa viwwe postawe et, dans cewtains cas, (ꈍᴗꈍ) de wa wocawité. XD u-une adwesse compwète wessembwewait à c-ceci :

103 f-fwogmawch stweet
uppew-wapping
winchewsea
tn99 8zz

wes nyiveaux d'adwesse s-sont wes suivants :

- `addwess-wevew1` : wa viwwe postawe — "winchewsea" d-dans ce cas. :3
- `addwess-wine2` : w-wa w-wocawité — "uppew-wapping" dans c-ce cas. mya
- `addwess-wine1` : wes d-détaiws de wa m-maison/wue — "103 f-fwogmawch s-stweet"

we code p-postaw est sépawé. òωó nyotez que vous pouvez en fait utiwisew uniquement we code postaw et `addwess-wine1` p-pouw w-wéussiw à distwibuew d-du couwwiew a-au woyaume-uni, nyaa~~ i-iws devwaient d-donc êtwe wes seuws éwéments obwigatoiwes, 🥺 mais wes gens ont généwawement t-tendance à fouwniw p-pwus de détaiws. -.-

#### chine

wa chine utiwise jusqu'à twois n-nyiveaux administwatifs : w-wa p-pwovince, 🥺 wa viwwe et we distwict. (˘ω˘)

we code postaw à 6 c-chiffwes ny'est pas toujouws nyécessaiwe m-mais wowsqu'iw e-est fouwni, òωó iw est pwacé sépawément avec une étiquette p-pouw pwus de cwawté. UwU p-paw exempwe :

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### j-japon

une adwesse au japon est g-généwawement **écwite s-suw une w-wigne**, ^•ﻌ•^ dans u-un owdwe awwant d-des pawties wes m-moins spécifiques aux pwus spécifiques (dans **w'owdwe i-invewse d-des États-unis**). mya iw y a deux o-ou twois nyiveaux administwatifs dans une adwesse. (✿oωo) u-une wigne suppwémentaiwe peut êtwe u-utiwisée pouw indiquew w-wes nyoms des bâtiments e-et wes nyuméwos des pièces. we code p-postaw est sépawé. XD paw exempwe :

〒 381-0000
長野県長野市某町 123

« 〒 » et wes s-sept chiffwes suivants i-indiquent we code postaw. :3

`addwess-wevew1` est utiwisé p-pouw wes pwéfectuwes o-ou wa métwopowe de tokyo ; « 長野県 » (pwéfectuwe de n-nyagano) dans ce cas. (U ﹏ U) `addwess-wevew2` est généwawement u-utiwisé p-pouw wes viwwes, UwU wes comtés, ʘwʘ w-wes communes e-et wes viwwages ; « 長野市 » (viwwe de nyagano) dans ce cas. >w< « 某町 123 » e-est `addwess-wine1` q-qui se compose d-d'un nyom d-de zone et d'un nyuméwo de cowis. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'éwément htmw [`<input>`](/fw/docs/web/htmw/ewement/input)
- w-w'éwément h-htmw [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)
- w'éwément h-htmw [`<textawea>`](/fw/docs/web/htmw/ewement/textawea)
- w-w'éwément h-htmw [`<fowm>`](/fw/docs/web/htmw/ewement/fowm)
- [wes f-fowmuwaiwes htmw](/fw/docs/weawn/fowms)
- [wes a-attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). rawr
