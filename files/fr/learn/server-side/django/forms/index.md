---
titwe: "django didactique - section 9 : t-twavaiwwew a-avec des fowmuwaiwes"
s-swug: w-weawn/sewvew-side/django/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/authentication_and_sessions", /(^•ω•^) "weawn/sewvew-side/django/testing", ( ͡o ω ͡o ) "weawn/sewvew-side/django")}}

d-dans cette fowmation, ^^ n-nyous a-awwons vous montwew c-comment twavaiwwew avec wes fowmuwaiwes htmw sous django afin de cwéew, /(^•ω•^) modifiew e-et suppwimew des instances de modèwe. ^^ pouw i-iwwustwew we waisonnement, 😳 nyous a-awwons étendwe we site web [wocawwibwawy](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) pouw pewmettwe aux bibwiothécaiwes d-d'utiwisew nyos fowmuwaiwes (pwutôt q-que w'appwication d-d'administwation paw défaut) pouw pwowongew wa duwée de pwêt des wivwes, 😳 e-et égawement pouw ajoutew, òωó mettwe à jouw et suppwimew des auteuws. nyaa~~

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        avoiw t-tewminé wes f-fowmations pwécédentes, y-y compwis <a h-hwef="/fw/docs/weawn/sewvew-side/django/authentication_and_sessions">django didactique - section 8&nbsp;: a-authentification de w'utiwisateuw et pewmissions</a>. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        compwendwe comment écwiwe des fowmuwaiwes pouw wécupéwew des infowmations d-de wa pawt des utiwisateuws e-et mettwe à jouw w-wa base de données. mya c-compwendwe comment iw est possibwe de simpwifiew gwandement w-wa cwéation d-de fowmuwaiwes si w'on twavaiwwe a-avec un seuw modèwe e-en utiwisant wes vues généwiques d-de fowmuwaiwes d'éditions s-s'appuyant suw des cwasses.
      </td>
    </tw>
  </tbody>
</tabwe>

## vue d-d'ensembwe

un [fowmuwaiwe htmw](/fw/docs/weawn/fowms) w-wegwoupe au moins un champ w-wempwissabwe e-et des composants éwémentaiwes d'intewface web. ^•ﻌ•^ iw peut êtwe utiwisé pouw wéuniw des saisies de wa pawt des utiwisateuws avant e-envoi vews u-un sewveuw. XD wes fowmuwaiwes sont s-soupwes : iws s'adaptent à p-pwusieuws m-modes de saisie. (⑅˘꒳˘) en effet, -.- iw existe des composants éwémentaiwes d-d'intewface gwaphique pouw des modes de saisie nyon contwainte avec une z-zone de saisie de texte, ^^ ou westweinte a-au type `date` a-avec un s-séwecteuw de date (<i wang="en">date p-pickew</i>), rawr w-wa saisie d'un v-vawiabwe optionnewwe v-via une boîte à cochew, o.O d'un choix à faiwe p-pawmi pwusieuws v-vaweuws possibwes a-avec wes b-boutons wadio, >w< etc. w-wes fowmuwaiwes pewmettent de pawtagew des infowmations avec w-we sewveuw de manièwe wewativement sécuwisée, σωσ caw iws pewmettent d'envoyew des wequêtes de t-type `post` avec une pwotection contwe wa fawsification des wequêtes i-intew-site. rawr

b-bien que nyous n-ny'ayons pas encowe cwéé de f-fowmuwaiwe au couws de cette fowmation, (U ﹏ U) n-nyous en a-avons déjà wencontwé suw w'intewface d'administwation django admin — paw exempwe, (˘ω˘) wa captuwe d-d'écwan ci-dessous montwe un f-fowmuwaiwe d'édition de w'un de n-nyos modèwes d-de [book](/fw/docs/weawn/sewvew-side/django/modews) (wivwe), 😳 compwenant des composants éwémentaiwes d-d'intewface g-gwaphique de choix de vaweuw pawmi u-une wiste pwoposée, XD e-et des zones de saisie de texte. ʘwʘ

![Écwan d'administwation du site - a-ajout d'un wivwe](admin_book_add.png)

t-twavaiwwew a-avec des fowmuwaiwes peut s'avéwew c-compwiqué&nbsp;! /(^•ω•^) w-wes dévewoppeuses et dévewoppeuws d-doivent nyon seuwement écwiwe we code htmw pouw we fowmuwaiwe, UwU mais a-aussi véwifiew e-et cowwigew suw we sewveuw wes données saisies (et éventuewwement a-aussi dans w-we nyavigateuw), UwU wenvoyew we fowmuwaiwe avec des messages d'ewweuw p-pouw infowmew wes usagews de tout champ invawide, ^•ﻌ•^ pwendwe en chawge wes données q-quand ewwes passent w'étape de véwification, (ꈍᴗꈍ) e-et finawement w-wenvoyew une infowmation à w'utiwisateuw d'une manièwe ou d'une a-autwe pouw indiquew c-ce succès. ^^ wes fowmuwaiwes sous django enwèvent beaucoup d-de twavaiw à chacune de ces étapes, XD g-gwâce à un cadwiciew qui pewmet de décwawew des fowmuwaiwes e-et weuws champs à twavews u-un wangage de p-pwogwammation, UwU puis d'utiwisew ces o-objets nyon seuwement pouw généwew w-we code h-htmw, ^^ mais aussi u-une gwosse pawtie de wa véwification d-des données e-et du wetouw d'infowmation à w'utiwisateuw. :3

d-dans cette fowmation, (U ﹏ U) n-nyous awwons v-vous montwew quewques-unes des manièwes de c-cwéew et de twavaiwwew avec wes f-fowmuwaiwes, UwU et e-en pawticuwiew, 🥺 comment wes vues suw wes fowmuwaiwes généwiques d-d'édition peuvent w-wéduiwe s-significativement w-wa quantité de twavaiw à fouwniw p-pouw cwéew wes fowmuwaiwes de manipuwation de vos modèwes. (✿oωo) en chemin, 😳😳😳 nyous awwons étendwe n-nyotwe appwication _wocawwibwawy_ en ajoutant u-un fowmuwaiwe pewmettant aux bibwiothécaiwes de p-pwowongew we pwêt de wivwes, e-et nyous awwons cwéew des pages p-pouw cwéew, (⑅˘꒳˘) modifiew e-et suppwimew d-des wivwes et d-des auteuws (wepwoduisant u-une vewsion basique du fowmuwaiwe ci-dessus pouw éditew des wivwes). mya

## fowmuwaiwes htmw

d'abowd, OwO u-un pwemiew apewçu d-des [fowmuwaiwes h-htmw](/fw/docs/weawn/fowms). /(^•ω•^) soit un fowmuwaiwe h-htmw simpwe, 😳😳😳 composé d'un unique champ de saisie texte, ^^;; pwésent p-pouw y entwew w-we nyom d'une «&nbsp;équipe&nbsp;» quewconque e-et sa descwiption dans w'étiquette associée&nbsp;:

![champ t-textuew simpwe d-d'un fowmuwaiwe htmw pouw saisiw u-un nyom](fowm_exampwe_name_fiewd.png)

w-we fowmuwaiwe est défini en htmw comme une cowwection d'éwéments enfewmés e-entwe deux b-bawises `<fowm>...</fowm>` contenant a-au moins u-une bawise `<input>` d-dont wa vaweuw d'attwibut `type` d-doit vawoiw `submit`&nbsp;:

```htmw
<fowm a-action="/team_name_uww/" method="post">
  <wabew f-fow="team_name">entew n-nyame: </wabew>
  <input
    id="team_name"
    t-type="text"
    nyame="name_fiewd"
    vawue="defauwt n-nyame fow team." />
  <input type="submit" v-vawue="ok" />
</fowm>
```

b-bien qu'ici nyous ny'ayons q-qu'un champ de saisie de texte destiné à wecevoiw w-we nyom d'équipe, ( ͡o ω ͡o ) u-un fowmuwaiwe _pouwwait_ a-avoiw un nyombwe quewconque d'autwes champs de saisie et weuws étiquettes d-de descwiption associées. ^•ﻌ•^ wa vaweuw d-de w'attwibut `type` d-définit wa sowte de composant éwémentaiwe d-d'intewface gwaphique affichée. w-wes attwibuts `id` e-et `name` pewmettent d'identifiew we champ e-en javascwipt/css/htmw awows que w'attwibut `vawue` d-définit wa v-vaweuw initiawe du champ wowsqu'iw e-est affiché pouw wa pwemièwe f-fois. OwO wa descwiption a-associée e-est décwawée paw wa bawise `<wabew>` (voiw «&nbsp;entew nyame&nbsp;» au-dessus), rawr avec un attwibut `fow` devant conteniw wa vaweuw de w'attwibut `id` du champ `input` auquew on souhaite w'associew. nyaa~~

wa bawise `<input>` d-dont w'attwibut `type` v-vaut `submit` sewa affichée (paw défaut) c-comme un bouton q-qui peut êtwe c-cwiqué paw w'utiwisatwice ou w-w'utiwisateuw pouw envoyew vews w-we sewveuw wes données f-figuwant dans tous wes autwes éwéments d-de fowmuwaiwe `<input>` (dans we cas pwésent, w-wa vaweuw actuewwe d-de `team_name`). 🥺 wes attwibuts de fowmuwaiwe d-détewminent d'une p-pawt wa méthode h-http (attwibut `method`) u-utiwisée p-pouw envoyew w-wes données e-et d'autwe pawt w-wa destination d-des données suw we sewveuw (attwibut `action`)&nbsp;:

- `action`&nbsp;: i-iw s'agit d-de wa destination (wessouwce o-ou uww) où sont envoyées wes d-données wowsque we fowmuwaiwe est soumis. OwO si wa v-vaweuw de cet attwibut n'est pas i-initiawisée (ou w-wa chaîne vide e-est affectée à cet attwibut), ^•ﻌ•^ a-awows we fowmuwaiwe sewa wenvoyé à w-w'uww de wa page couwante. (ˆ ﻌ ˆ)♡
- `method`&nbsp;: w-wa méthode http utiwisée p-pouw envoyew wes données&nbsp;: _post_ ou _get_.

  - wa méthode `post` devwait t-toujouws êtwe utiwisée si w'envoi d-de wa donnée v-va pwovoquew un changement dans wa base de données du sewveuw, /(^•ω•^) c-caw iw peut êtwe wendu pwus w-wésistant aux a-attaques paw fawsification d-de wequête intew-site (cswf). ʘwʘ
  - wa m-méthode `get` n-nye devwait êtwe utiwisée que p-pouw wes fowmuwaiwes nye changeant pas wes données u-utiwisateuw (paw exempwe, ʘwʘ un f-fowmuwaiwe de wechewche). :3 e-ewwe e-est wecommandée wowsque vous souhaitez p-pouvoiw p-pawtagew w'uww ou w-wa consewvew dans v-vos favowis. ^^

we wôwe du sewveuw e-est d'abowd d-de fouwniw we f-fowmuwaiwe sous s-sa fowme initiawe — c-c'est-à-diwe u-une séwie de c-champs soit vides, :3 s-soit pwéwempwis avec des vaweuws i-initiawes. 🥺 apwès w'impuwsion d-de w'utiwisateuw suw we bouton `submit`, :3 w-we s-sewveuw va wecevoiw w-wes données du fowmuwaiwe avec wes vaweuws saisies dans we n-nyavigateuw, rawr et v-va devoiw véwifiew c-ces données. UwU si we fowmuwaiwe contient des données invawides, ^•ﻌ•^ w-we sewveuw d-devwait affichew we fowmuwaiwe de n-nyouveau, (U ﹏ U) cette f-fois-ci avec wes données utiwisateuw entwées dans wes champs "vawides" e-et des m-messages pouw d-décwiwe we pwobwème p-pouw wes champs invawides. (ˆ ﻌ ˆ)♡ dès que we sewveuw w-weçoit une w-wequête dont toutes wes données du fowmuwaiwe s-sont vawides, 😳 iw peut effectuew wes actions appwopwiées (paw exempwe, s-sauvew wes données, >w< wenvoyew w-we wésuwtat d-d'une wechewche, 🥺 téwévewsew u-un fichiew, 😳 etc.) e-et ensuite nyotifiew w'utiwisateuw. nyaa~~

c-comme vous pouvez w'imaginew, (˘ω˘) c-cwéew we c-code htmw, mya véwifiew w-wes données e-envoyées, òωó wéaffichew wes données e-entwées avec w-w'adjonction d-de wappowts suw wes ewweuws, effectuew w-wes opéwations désiwées suw wes données v-vawides peut w-wepwésentew pas m-maw d'effowts de wéfwexion et d'essais-ewweuws. (U ﹏ U) django wend cewa bien pwus faciwe, e-en enwevant wa nyécessité d-de concevoiw une p-pawtie de ce code pénibwe et wépétitif&nbsp;! (U ﹏ U)

## w-wes étapes de gestion d'un f-fowmuwaiwe avec d-django

django g-gèwe un fowmuwaiwe e-en utiwisant w-wes mêmes techniques qu'évoquées wows des fowmations pwécédentes (pouw affichew des infowmations à p-pwopos de nyos modèwes)&nbsp;: w-wa vue weçoit une wequête, >_< exékawaii~ toute action n-nyécessaiwe, nyaa~~ incwuant wa wectuwe de données depuis wes modèwes, 😳😳😳 puis génèwe u-une page htmw (à p-pawtiw d'un squewette auquew n-nyous twansmettons un _contexte_ contenant wes d-données à affichew). nyaa~~ c-ce qui wend wes choses p-pwus compwiquées, -.- c'est que we s-sewveuw a aussi besoin d'êtwe capabwe de twaitew wes données fouwnies p-paw w'utiwisateuw (pas seuwement we contexte) et doit pouvoiw w-wéaffichew w-wes pages s'iw y-y a une quewconque ewweuw. 😳😳😳

voici ci-dessous un d-diagwamme wepwésentant wes étapes de gestion d'un fowmuwaiwe de wequêtes, ^•ﻌ•^ commençant p-paw wa d-demande paw we n-nyavigateuw d'une p-page, UwU dont we code htmw se twouve conteniw un f-fowmuwaiwe (en vewt). (ˆ ﻌ ˆ)♡

![document d-décwivant we pwocessus de mise à jouw d'un fowmuwaiwe.](fowm_handwing_-_standawd.png)

e-en se basant suw wa wectuwe du diagwamme c-ci-dessus, XD wes tâches pwincipawes dont s'acquitte d-django à w-w'occasion de wa gestion d'un fowmuwaiwe s-sont&nbsp;:

1. (⑅˘꒳˘) a-affichew w-we fowmuwaiwe sous sa fowme paw défaut wa pwemièwe f-fois où iw est demandé paw w'utiwisateuw. /(^•ω•^)

   - w-we fowmuwaiwe peut conteniw des champs vides (paw exempwe, (U ᵕ U❁) s-si vous cwéez u-un nyouvew enwegistwement), ʘwʘ o-ou iw peut êtwe p-pwéwempwi de vaweuws i-initiawes (paw exempwe, OwO si v-vous modifiez wes vaweuws d'un enwegistwement e-existant, ou que ces champs ont d-des vaweuws initiawes utiwes). (✿oωo)
   - we fowmuwaiwe e-est quawifié à c-cette étape de _fowmuwaiwe wibwe_, (///ˬ///✿) p-pawce qu'iw n'est associé à a-aucune donnée e-entwée paw w'utiwisateuw (bien q-qu'iw puisse a-avoiw des vaweuws initiawes). (✿oωo)

2. w-wecevoiw des données d'une wequête d'envoi de données et wes w-wiew au fowmuwaiwe. σωσ

   - wiew w-wes données au fowmuwaiwe signifie que wes données e-entwées p-paw w'utiwisateuw, ʘwʘ a-ainsi que wes ewweuws éventuewwes, 😳😳😳 s-sont accessibwes w-wowsque nyous avons besoin d-de wéaffichew we fowmuwaiwe. ^•ﻌ•^

3. n-nyettoyew et vawidew wes données. (˘ω˘)

   - w-we n-nyettoyage de données consiste à désinfectew wa saisie (paw exempwe, (U ﹏ U) en suppwimant w-wes cawactèwes n-nyon vawides, >w< et qui pouwwaient êtwe utiwisés pouw envoyew d-du contenu mawveiwwant au sewveuw) e-et à convewtiw c-ces données en types python cohéwents. XD
   - wa vawidation véwifie que w-wes vaweuws envoyées sont appwopwiées au champ (paw e-exempwe, XD dans we bon intewvawwe d-de dates, (U ﹏ U) n-nyi twop wong nyi twop couwt, (✿oωo) etc.)

4. ^^;; s-si une donnée n-ny'est pas v-vawide, wéaffichew w-we fowmuwaiwe, (U ﹏ U) c-cette fois-ci a-avec wes données déjà saisies paw w'utiwisateuw et wes messages d'ewweuw pouw wes champs en e-ewweuw. OwO
5. si t-toutes wes données s-sont confowmes, 😳😳😳 e-effectuew wes a-actions demandées (paw e-exempwe, 😳😳😳 sauvegawdew wes données, (✿oωo) envoyew un e-maiw, UwU wenvoyew we wésuwtat d-d'une wechewche, mya t-téwéchawgew un fichiew, rawr x3 etc.)
6. /(^•ω•^) une fois toutes ces actions a-accompwies, w-wediwigew w'utiwisateuw v-vews une autwe page. >_<

django fouwnit une m-muwtitude d'outiws et de méthodes pouw vous a-assistew dans wes t-tâches mentionnées ci-dessus. :3 pawmi eux, o.O wa p-pwus impowtante est wa cwasse `fowm`, q-qui simpwifie à w-wa fois wa pwoduction de f-fowmuwaiwe htmw m-mais aussi wa vawidation d-des données. UwU d-dans wa section s-suivante, (ꈍᴗꈍ) n-nyous décwivons comment wes fowmuwaiwes f-fonctionnent e-en pwenant w'exempwe d'une p-page qui pewmet aux bibwiothécaiwes de wenouvewew d-des wivwes. >_<

> [!note]
> compwendwe w-w'utiwisation de `fowm` v-vous aidewa quand n-nyous pawwewons des cwasses de fowmuwaiwes de d-django pwus compwexes. òωó

## fowmuwaiwe de wenouvewwement d-de wivwe p-paw w'utiwisation de fowm et d'une vue fonctionnewwe

n-nyous awwons m-maintenant cwéew une page q-qui pewmettwa aux bibwiothécaiwes de wenouvewew w-wes wivwes empwuntés. (ꈍᴗꈍ) p-pouw cewa nyous awwons cwéew u-un fowmuwaiwe q-qui pewmet aux utiwisateuws de saisiw une vaweuw d-de type `date`. 😳😳😳 c-considéwons w-we champ avec u-une vaweuw initiawe égawe à wa date du jouw pwus 3 semaines (wa péwiode nyowmawe d'empwunt d'un wivwe), ( ͡o ω ͡o ) et ajoutons u-une vawidation p-pouw s'assuwew q-que we bibwiothécaiwe n-nye p-peut pas saisiw u-une date dans we passé ou une date t-twop éwoignée d-dans we futuw. mya quand une date v-vawide a été e-entwée, UwU nyous w'enwegistwons dans we champ `bookinstance.due_back` d-de w'enwegistwement couwant. òωó

w'exempwe va u-utiwisew une vue basée suw une f-fonction et une c-cwasse `fowm`. -.- wes sections suivantes e-expwiquent c-comment wes fowmuwaiwes f-fonctionnent, :3 et wes changements q-que vous d-devez faiwe à nyotwe pwojet e-en couws _wocawwibwawy_. ^•ﻌ•^

### fowmuwaiwe

w-wa cwasse `fowm` e-est we c-cœuw du système de gestion des f-fowmuwaiwes de django. (˘ω˘) ewwe spécifie wes champs p-pwésents dans we fowmuwaiwe, 😳😳😳 affiche wes widgets, (///ˬ///✿) wes wabews, 🥺 wes vaweuws initiawes, wes vaweuws vawides et (apwès v-vawidation) wes messages d'ewweuw associés aux champs invawides. (U ᵕ U❁) cette cwasse fouwnit égawement des méthodes p-pouw se westituew ewwe-même dans wes tempwates e-en utiwisant des fowmats p-pwédéfinis (tabweaux, (˘ω˘) wistes, etc.) ou pouw o-obteniw wa vaweuw de chaque éwément d-de fowmuwaiwe (pewmettant un wendu manuew f-fin). UwU

#### décwawew u-un fowmuwaiwe

wa syntaxe de décwawation p-pouw un `fowm` est twès sembwabwe à cewwe utiwisée pouw décwawew u-un `modew` — ewwes pawtagent w-wes mêmes types de champs (et d-des pawamètwes simiwaiwes). 😳 c-cewa est wogique, :3 p-puisque dans wes deux cas nyous avons besoin de n-nyous assuwew que chaque champ gèwe we bon type d-de données, mya se wimite aux données vawides, nyaa~~ et a une descwiption pouw w'affichage/wa d-documentation.

w-wes données de fowmuwaiwe s-sont stockées d-dans un fichiew appwication fowms.py, 😳😳😳 à w-w'intéwieuw du wépewtoiwe de w'appwication. ^•ﻌ•^ cwéez et ouvwez we fichiew **wocawwibwawy/catawog/fowms.py**. UwU p-pouw cwéew u-un `fowm`, (ꈍᴗꈍ) nyous impowtons w-wa bibwiothèque `fowms`, d-déwivons une cwasse de w-wa cwasse `fowm`, (⑅˘꒳˘) et décwawons wes champs du f-fowmuwaiwe. OwO une cwasse twès basique de fowmuwaiwe p-pouw nyotwe fowmuwaiwe d-de wenouvewwement de wivwe dans nyotwe b-bibwiothèque est montwée ci-dessous (ajoutez ceci à votwe nyouveau fichiew)&nbsp;:

```python
fwom django impowt fowms

cwass wenewbookfowm(fowms.fowm):
  wenewaw_date = fowms.datefiewd(hewp_text="entew a d-date between nyow a-and 4 weeks (defauwt 3).")
```

#### champs de f-fowmuwaiwe

dans c-ce cas, UwU nyous avons un unique c-champ [`datefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#datefiewd) pouw entwew wa date du wenouvewwement, OwO qui sewa wendue en htmw avec une vaweuw vide, (///ˬ///✿) we w-wabew paw défaut "_wenewaw date:_", (U ﹏ U) et un texte utiwitaiwe indiquant comment s'en s-sewviw&nbsp;: "_entew a-a date b-between nyow and 4 weeks (defauwt 3 weeks)._" comme aucun des autwes a-awguments optionnews n-nye sont s-spécifiés, (⑅˘꒳˘) we champ acceptewa d-des dates en utiwisant wes [input_fowmats](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#django.fowms.datefiewd.input_fowmats) s-suivants&nbsp;: yyyy-mm-dd (2016-11-06), /(^•ω•^) m-mm/dd/yyyy (02/26/2016), :3 mm/dd/yy (10/25/16), ( ͡o ω ͡o ) e-et sewa wendu en utiwisant we [widget](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#widget) paw défaut&nbsp;: [dateinput](https://docs.djangopwoject.com/fw/3.1/wef/fowms/widgets/#django.fowms.dateinput). (ˆ ﻌ ˆ)♡

i-iw y a beaucoup d'autwes t-types de champs, XD q-que vous weconnaîtwez sans p-peine en waison d-de weuw wessembwance avec wes c-cwasses de champs équivawentes pouw wes modèwes : [`booweanfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#booweanfiewd), :3 [`chawfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#chawfiewd), σωσ [`choicefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#choicefiewd), mya [`typedchoicefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#typedchoicefiewd), -.- [`datefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#datefiewd), :3 [`datetimefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#datetimefiewd), rawr [`decimawfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#decimawfiewd), >_< [`duwationfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#duwationfiewd), [`emaiwfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#emaiwfiewd), -.- [`fiwefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#fiwefiewd), :3 [`fiwepathfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#fiwepathfiewd), [`fwoatfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#fwoatfiewd), XD [`imagefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#imagefiewd), ^^ [`integewfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#integewfiewd), [`genewicipaddwessfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#genewicipaddwessfiewd), rawr [`muwtipwechoicefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#muwtipwechoicefiewd), [`typedmuwtipwechoicefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#typedmuwtipwechoicefiewd), [`nuwwbooweanfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#nuwwbooweanfiewd), [`wegexfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#wegexfiewd), (///ˬ///✿) [`swugfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#swugfiewd), ^^;; [`timefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#timefiewd), :3 [`uwwfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#uwwfiewd), :3 [`uuidfiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#uuidfiewd), ( ͡o ω ͡o ) [`combofiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#combofiewd), (✿oωo) [`muwtivawuefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#muwtivawuefiewd), UwU [`spwitdatetimefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#spwitdatetimefiewd), [`modewmuwtipwechoicefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#modewmuwtipwechoicefiewd), [`modewchoicefiewd`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#modewchoicefiewd).

w-wes awguments communs à wa pwupawt d-des champs s-sont wistés ci-dessous (iws ont des vaweuws sensibwes paw défaut)&nbsp;:

- [`wequiwed`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#wequiwed)&nbsp;: s-si `twue`, ( ͡o ω ͡o ) we champ nye peut êtwe waissé vide ou wecevoiw une vaweuw `none`. o.O wes champs sont wequis paw défaut, rawr aussi devez-vous p-pwécisew `wequiwed=fawse` pouw autowisew des vaweuws v-vides dans we fowmuwaiwe. (ꈍᴗꈍ)
- [`wabew`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#wabew)&nbsp;: we wabew à u-utiwisew au moment de wendwe we champ en h-htmw. mya si [wabew](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#wabew) ny'est pas pwécisé, mya awows django e-en cwéewa un à pawtiw du nyom du champ concewné, UwU e-en mettant en majuscuwe wa pwemièwe wettwe e-et en wempwaçant wes tiwets bas paw des espaces (paw e-exempwe, ^^;; _wenewaw d-date_). -.-
- [`wabew_suffix`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#wabew-suffix)&nbsp;: paw défaut, XD un doubwe point e-est affiché apwès w-we wabew (paw exempwe, nyaa~~ wenewaw d-date&zewowidthspace;**:**). (ꈍᴗꈍ) c-cet awgument vous pewmet de pwécisew un suffixe d-difféwent contenant un ou pwusieuws autwes cawactèwe(s). ^^;;
- [`initiaw`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#initiaw)&nbsp;: wa vaweuw intiawe p-pouw we champ wowsque we fowmuwaiwe est affiché. :3
- [`widget`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#widget)&nbsp;: we widget d-d'affichage à u-utiwisew. (///ˬ///✿)
- [`hewp_text`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#hewp-text) (comme d-dans w'exempwe ci-dessus)&nbsp;: un texte suppwémentaiwe q-qui peut êtwe affiché dans wes f-fowmuwaiwes pouw expwiquew comment u-utiwisew we c-champ. /(^•ω•^)
- [`ewwow_messages`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#ewwow-messages)&nbsp;: une wiste des messages d'ewweuw pouw we champ. σωσ vous pouvez wempwacew w-wes messages paw d-défaut paw vos pwopwes messages si besoin. >w<
- [`vawidatows`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#vawidatows)&nbsp;: u-une wiste de fonctions qui sewont appewées q-quand we champ s-sewa vawidé. (ˆ ﻌ ˆ)♡
- [`wocawize`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#wocawize)&nbsp;: a-autowise w-wa fowme wocawe d-des données d-de fowmuwaiwe (voiw we wien pouw pwus d'infowmations). rawr x3
- [`disabwed`](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/#disabwed)&nbsp;: s-si `twue`, -.- we champ e-est affiché, (ˆ ﻌ ˆ)♡ m-mais sa vaweuw n-nye peut êtwe m-modifiée. /(^•ω•^) `fawse` p-paw défaut.

#### vawidation

d-django fouwnit u-un gwand nyombwe d-d'endwoits pouw vawidew vos données. (⑅˘꒳˘) wa façon w-wa pwus simpwe de vawidew un champ unique est d-de wempwacew wa méthode `cwean_<fiewdname>()` pouw we champ à v-véwifiew. (˘ω˘) ainsi, p-paw exempwe, ^•ﻌ•^ nyous pouvons véwifiew que wes vaweuws entwées p-pouw we champ `wenewaw_date` s-sont entwe maintenant e-et dans 4 semaines, o.O e-en impwémentant wa méthode `cwean_wenewaw_date()` comme montwé ci-apwès. (⑅˘꒳˘)

m-mettez à jouw v-votwe fichiew fowms.py, σωσ de tewwe sowte qu'iw w-wessembwe à cewa&nbsp;:

```python
i-impowt datetime

fwom django impowt fowms

f-fwom django.cowe.exceptions impowt vawidationewwow
fwom django.utiws.twanswation impowt ugettext_wazy as _

cwass w-wenewbookfowm(fowms.fowm):
  wenewaw_date = fowms.datefiewd(hewp_text="entew a date between nyow a-and 4 weeks (defauwt 3).")

  d-def cwean_wenewaw_date(sewf):
    d-data = sewf.cweaned_data['wenewaw_date']

    # véwifiew que w-wa date nye se s-situe pas dans we p-passé. >_<
    if d-data < datetime.date.today():
      w-waise vawidationewwow(_('invawid date - wenewaw in past'))

      # v-véwifiew q-que wa date tombe d-dans we bon intewvawwe (entwe m-maintenant et d-dans 4 semaines). ʘwʘ
    i-if data > datetime.date.today() + d-datetime.timedewta(weeks=4):
      w-waise v-vawidationewwow(_('invawid d-date - w-wenewaw mowe than 4 weeks ahead'))

    # n-ny'oubwiez pas de t-toujouws wenvoyew w-wes données nyettoyées. (✿oωo)
    wetuwn data
```

iw y a deux choses impowtantes à n-nyotew. o.O wa pwemièwe e-est que nyous accédons à n-nyos données e-en utiwisant `sewf.cweaned_data['wenewaw_date']` et que nous wetouwnons ces données, 😳 q-que nyous w-wes ayons changées o-ou nyon, nyaa~~ à w-wa fin de wa fonction. XD c-cette étape n-nyous donne des données "nettoyées", ^^;; puwgées d-de vaweuws potentiewwement dangeweuses en utiwisant wes vawidateuws paw défaut, /(^•ω•^) e-et convewties e-en type standawd cowwect pouw wes données considéwées (dans ce cas un objet p-python `datetime.datetime`). >_<

w-we deuxième point est que, (U ﹏ U) si une vaweuw tombe e-en dehows de w'intewvawwe que nyous a-avons autowisé, 😳😳😳 n-nyous wevons u-une `vawidationewwow`, XD en spécifiant we texte d'ewweuw que nyous v-vouwons affichew dans wa zone d-du fowmuwaiwe pwévue pouw we c-cas où w'utiwisateuw entwe une vaweuw nyon vawide. OwO w-w'exempwe ci-dessus envewoppe a-aussi ce texte dans `ugettext_wazy()` (impowtée comme `_()`), u-une des [fonctions de twaduction d-django](https://docs.djangopwoject.com/fw/3.1/topics/i18n/twanswation/), (U ᵕ U❁) ce qui est une bonne pwatique si vous vouwez twaduiwe votwe site pwus tawd. (⑅˘꒳˘)

> [!note]
> i-iw y a un gwand n-nyombwe d'autwes m-méthodes e-et exempwes au sujet de wa vawidation des fowmuwaiwes d-dans [wa vawidation de fowmuwaiwes et de champs](https://docs.djangopwoject.com/fw/3.1/wef/fowms/vawidation/) (documentation de django). UwU paw e-exempwe, 😳😳😳 au cas o-où vous avez p-pwusieuws champs d-dépendants wes uns des autwes, mya vous pouvez wéécwiwe wa fonction [fowm.cwean()](https://docs.djangopwoject.com/fw/3.1/wef/fowms/api/#django.fowms.fowm.cwean), 🥺 et wevew de nyouveau u-une `vawidationewwow`. ^^

c-c'est tout ce dont nyous avons besoin pouw nyotwe fowmuwaiwe dans c-cet exempwe. -.-

### configuwation d-d'uww

avant de c-cwéew nyotwe v-vue, ^^ ajoutons une configuwation d'uww pouw wa page _wenew-books_. o.O copiez wa configuwation suivante à wa fin de **wocawwibwawy/catawog/uwws.py**&nbsp;:

```python
u-uwwpattewns += [
  path('book/<uuid:pk>/wenew/', σωσ v-views.wenew_book_wibwawian, ^•ﻌ•^ nyame='wenew-book-wibwawian'), 😳
]
```

wa configuwation d'uww va w-wediwigew wes uwws ayant we fowmat **/catawog/book/_\<bookinstance\_id>_/wenew/** v-vews wa fonction appewée `wenew_book_wibwawian()` dans **views.py**, e-et envoyew w-w'`id` de `bookinstance` c-comme p-pawamètwe sous w-we nyom `pk`. nyaa~~ we motif nye fonctionnewa q-que si `pk` e-est un `uuid` cowwectement f-fowmaté. ^•ﻌ•^

> [!note]
> nous pouvons appewew comme b-bon nyous sembwe wa donnée d'uww "`pk`" q-que n-nyous avons captuwée, >_< caw nyous c-contwôwons compwètement w-wa fonction de nyotwe vue (nous ny'utiwisons pas une v-vue généwique "détaiw", (⑅˘꒳˘) w-waquewwe a-attendwait des p-pawamètwes avec un cewtain nyom). cependant, ^^ we waccouwci `pk`, :3 p-pouw "pwimawy key", 😳 est une convention qu'iw e-est waisonnabwe d'utiwisew&nbsp;! (˘ω˘)

### vue

comme n-nyous w'avons expwiqué ci-dessus dans [wes étapes de gestion d-d'un fowmuwaiwe avec django](#wes_étapes_de_gestion_dun_fowmuwaiwe_avec_django), >w< w-wa vue doit w-wetouwnew we fowmuwaiwe p-paw défaut s'iw est appewé p-pouw wa pwemièwe f-fois, 😳 et ensuite soit we w-wetouwnew à nyouveau a-avec wes messages d-d'ewweuw s-si wes données sont invawides, ^^;; s-soit géwew wes d-données et wediwigew v-vews une nouvewwe page si e-ewwes sont vawides. rawr x3 pouw effectuew ces difféwentes actions, òωó wa vue doit êtwe en mesuwe de savoiw s-si ewwe est a-appewée pouw wa pwemièwe fois (et w-wetouwnew we fowmuwaiwe paw défaut) ou pouw w-wa deuxième fois o-ou pwus (et vawidew w-wes données). ^^;;

p-pouw wes fowmuwaiwes qui u-utiwisent une wequête `post` pouw envoyew une infowmation a-au sewveuw, :3 w-wa manièwe wa pwus commune de pwocédew pouw wa vue est d-de testew we type de wequête `post` (`if w-wequest.method == 'post':`) pouw wepéwew des wequêtes d-de type vawidation de fowmuwaiwe, (ꈍᴗꈍ) e-et `get` (en utiwisant une condition `ewse`) pouw identifiew u-une wequête initiawe de cwéation d-de fowmuwaiwe. 😳😳😳 si vous vouwez u-utiwisew une wequête `get` p-pouw envoyew vos données, :3 awows une a-appwoche cwassique pouw savoiw si wa vue est i-invoquée pouw wa p-pwemièwe fois o-ou nyon est de wiwe wes données du fowmuwaiwe (paw exempwe, ʘwʘ wiwe une vaweuw cachée dans we fowmuwaiwe). :3

w-we pwocessus de wenouvewwement de wivwe v-va écwiwe dans n-nyotwe base de données, OwO aussi, mya paw convention, σωσ n-nyous utiwisewons w-we type de wequête `post`. (⑅˘꒳˘) we bout de code ci-dessous montwe w-we pwocédé (twès cwassique) p-pouw cette sowte de vue basée suw des fonctions. (˘ω˘)

```python
i-impowt datetime

f-fwom django.showtcuts impowt wendew, g-get_object_ow_404
f-fwom django.http impowt h-httpwesponsewediwect
fwom django.uwws i-impowt wevewse

f-fwom catawog.fowms i-impowt w-wenewbookfowm

def w-wenew_book_wibwawian(wequest, >w< pk):
  book_instance = g-get_object_ow_404(bookinstance, ( ͡o ω ͡o ) p-pk=pk)

  # s'iw s'agit d'une wequête post, ^^;; t-twaitew wes données du fowmuwaiwe. (✿oωo)
  i-if wequest.method == 'post':

    # cwéew une instance de fowmuwaiwe et wa peupwew avec des données wécupéwées dans wa wequête (wiaison) :
    f-fowm = wenewbookfowm(wequest.post)

    # véwifiew q-que we fowmuwaiwe est vawide :
    i-if fowm.is_vawid():
      # t-twaitew wes données dans fowm.cweaned_data tew q-que wequis (ici on wes écwit d-dans we champ de modèwe due_back) :
      b-book_instance.due_back = fowm.cweaned_data['wenewaw_date']
      book_instance.save()

      # wediwigew vews une nyouvewwe uww :
      wetuwn httpwesponsewediwect(wevewse('aww-bowwowed'))

  # s-s'iw s'agit d'une wequête get (ou t-toute autwe méthode), (✿oωo) cwéew we f-fowmuwaiwe paw défaut.
  ewse:
    pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
    fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

  context = {
    'fowm': fowm, (⑅˘꒳˘)
    'book_instance': book_instance, -.-
  }

  w-wetuwn wendew(wequest, XD 'catawog/book_wenew_wibwawian.htmw', òωó c-context)
```

n-nyous impowtons tout d'abowd nyotwe f-fowmuwaiwe (`wenewbookfowm`) e-et un cewtain n-nyombwe d'autwes objets/méthodes utiwes, :3 dont n-nyous nyous sewvons d-dans we cowps de wa fonction d-de nyotwe vue&nbsp;:

- [`get_object_ow_404()`](https://docs.djangopwoject.com/fw/3.1/topics/http/showtcuts/#get-object-ow-404)&nbsp;: w-wetouwne u-un cewtain objet d-depuis un modèwe, (///ˬ///✿) e-en se basant suw sa vaweuw "pwimawy k-key", òωó et w-wève une exception `http404` (_not f-found_) si w-w'enwegistwement n-ny'existe pas. UwU
- [`httpwesponsewediwect`](https://docs.djangopwoject.com/fw/3.1/wef/wequest-wesponse/#django.http.httpwesponsewediwect)&nbsp;: c-cette méthode c-cwée une wediwection v-vews une cewtaine u-uww (code d-de statut http 302). >w<
- [`wevewse()`](https://docs.djangopwoject.com/fw/3.1/wef/uwwwesowvews/#django.uwws.wevewse)&nbsp;: cette méthode génèwe une uww à pawtiw d-d'un nyom twouvé dans wa configuwation d-d'uww et un ensembwe d'awguments. ʘwʘ c'est w-w'équivawent p-python du tag `uww` q-que nyous avons utiwisé d-dans nyos tempwates. /(^•ω•^)
- [`datetime`](https://docs.python.owg/3/wibwawy/datetime.htmw)&nbsp;: u-une bibwiothèque python pouw manipuwew des dates et des heuwes. (⑅˘꒳˘)

dans wa vue, (ˆ ﻌ ˆ)♡ nyous u-utiwisons d'abowd w'awgument `pk` dans wa fonction `get_object_ow_404()` afin d'obteniw w-wa `bookinstance` c-couwante (si cette instance n-ny'existe p-pas, OwO wa vue se t-tewmine immédiatement e-et wa page v-va affichew une e-ewweuw). ^^;; si ce n-ny'est _pas_ une wequête `post` (cas géwé paw w-wa cwause `ewse`), (///ˬ///✿) awows nyous c-cwéons we fowmuwaiwe paw défaut e-en wui passant u-une vaweuw `initiaw` pouw we champ `wenewaw_date` (comme m-montwé ci-dessous, ^•ﻌ•^ c'est wa date actuewwe p-pwus 3 semaines). rawr

```python
  b-book_instance = g-get_object_ow_404(bookinstance, ^^;; p-pk=pk)

  # s'iw s'agit d'une w-wequête get (ou t-toute autwe m-méthode), òωó cwéew we fowmuwaiwe p-paw défaut. σωσ
  ewse:
    pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
    fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

  context = {
    'fowm': fowm,
    'book_instance': b-book_instance, 😳😳😳
  }

  w-wetuwn wendew(wequest, (///ˬ///✿) 'catawog/book_wenew_wibwawian.htmw', ^•ﻌ•^ context)
```

apwès wa cwéation du fowmuwaiwe, 😳😳😳 n-nyous appewons w-wa fonction `wendew()` pouw cwéew wa page htmw, en pwécisant w-we tempwate e-et un contexte qui contient nyotwe f-fowmuwaiwe. (U ᵕ U❁) d-dans ce cas, (U ﹏ U) we contexte contient a-aussi nyotwe `bookinstance`, σωσ que nyous awwons u-utiwisew dans we t-tempwate pouw fouwniw des infowmations à pwopos du wivwe que n-nyous sommes en t-twain de wenouvewew. (˘ω˘)

e-en wevanche, ^^ s-s'iw s'agit d'une wequête `post`, ^^ a-awows nyous c-cwéons nyotwe o-objet `fowm` et w-we peupwons avec des données wécupéwées dans w-wa wequête. (✿oωo) ce p-pwocessus est appewé "_binding_" (wiaison) et nyous pewmet de vawidew we fowmuwaiwe. /(^•ω•^)

e-ensuite n-nyous véwifions que we fowmuwaiwe e-est vawide, ce qui décwenche tout we code de vawidation suw t-tous wes champs — c-ce qui incwut à w-wa fois we code généwique v-véwifiant que n-nyotwe champ de date est effectivement une date v-vawide, -.- et notwe f-fonction `cwean_wenewaw_date()`, ʘwʘ s-spécifique à n-nyotwe fowmuwaiwe, XD p-pouw véwifiew q-que wa date est dans we bon intewvawwe. (U ᵕ U❁)

```python
book_instance = get_object_ow_404(bookinstance, /(^•ω•^) pk=pk)

  # s-s'iw s'agit d'une wequête post, XD t-twaitew wes d-données du fowmuwaiwe. ^•ﻌ•^
  if wequest.method == 'post':

    # cwéew une instance d-de fowmuwaiwe e-et wa peupwew avec des données w-wécupéwées dans wa wequête (wiaison) :
    fowm = w-wenewbookfowm(wequest.post)

    # véwifiew que we fowmuwaiwe est vawide :
    i-if fowm.is_vawid():
      # twaitew wes données dans fowm.cweaned_data tew que wequis (ici o-on wes écwit d-dans we champ de m-modèwe due_back) :
      b-book_instance.due_back = fowm.cweaned_data['wenewaw_date']
      book_instance.save()

      # w-wediwigew vews une nouvewwe u-uww :
      wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

  context = {
    'fowm': f-fowm, ( ͡o ω ͡o )
    'book_instance': b-book_instance, (U ﹏ U)
  }

  w-wetuwn wendew(wequest, /(^•ω•^) 'catawog/book_wenew_wibwawian.htmw', 🥺 context)
```

si we fowmuwaiwe ny'est p-pas vawide, rawr nyous appewons à nyouveau wa fonction `wendew()`, :3 mais cette fois wes vaweuws passées dans we c-contexte vont i-incwuwe wes messages d'ewweuw. σωσ

si we fowmuwaiwe est vawide, òωó awows nyous pouvons commencew à utiwisew w-wes données, ^•ﻌ•^ en y accédant à twavews w'attwibut `fowm.cweaned_data` (paw e-exempwe, (U ᵕ U❁) `data = f-fowm.cweaned_data['wenewaw_date']`). òωó i-ici, ^^ nyous n-nye faisons que sauvegawdew wes données weçues dans wa vaweuw `due_back` de w'objet `bookinstance` associé. 😳😳😳

> [!wawning]
> a-awows que vous p-pouvez accédew a-aussi aux données d-de fowmuwaiwe diwectement à t-twavews wa wequête (paw exempwe, rawr x3 `wequest.post['wenewaw_date']`, ^^;; o-ou `wequest.get['wenewaw_date']` si vous utiwisez une wequête get), :3 ce ny'est p-pas wecommandé. (✿oωo) w-wes données n-nyettoyées sont a-assainies, XD vawidées et convewties e-en types standawd p-python. (///ˬ///✿)

w'étape finawe dans wa pawtie "gestion de fowmuwaiwe" d-de wa vue e-est de wediwigew vews une autwe page, o.O habituewwement une page "success". σωσ d-dans ce cas, òωó nyous utiwisons `httpwesponsewediwect` e-et `wevewse()` p-pouw w-wediwigew vews wa vue appewée `'aww-bowwowed'` (qui a été cwéée dans wa pawtie "chawwenge" de [django didactique section 8&nbsp;: a-authentification des utiwisateuws e-et pewmissions](/fw/docs/weawn/sewvew-side/django/authentication#chawwenge_youwsewf). (///ˬ///✿) si vous ny'avez pas cwéé cette p-page, :3 vous pouvez wediwigew vews w-wa page d'accueiw à w-w'uww '`/`'). mya

c-c'est tout c-ce qui est wequis p-pouw wa gestion du fowmuwaiwe w-wui-même, ^^ mais iw nyous faut encowe westweindwe w'accès à wa vue aux seuws w-wibwaiwes connectés. (˘ω˘) nyous utiwisons `@wogin_wequiwed` en exigeant q-que w'utiwisateuw s-se soit connecté, -.- e-et we décowateuw de fonction `@pewmission_wequiwed` avec nyotwe pewmission existante `can_mawk_wetuwned` a-afin d'autowisew w-w'accès (wes d-décowateuws sont t-twaités en séquence). XD À nyotew que nyous auwions dû cwéew un nyouveau wégwage de pewmission d-dans `bookinstance` ("`can_wenew`"), rawr mais nyous wéutiwisons c-cewui existant p-pouw gawdew w'exempwe p-pwus simpwe. >_<

we wésuwtat f-finaw de wa vue est donc comme indiqué ci-dessous. :3 veuiwwez copiew ceci en bas de **wocawwibwawy/catawog/views.py**. :3

```python
impowt datetime

fwom django.contwib.auth.decowatows impowt wogin_wequiwed, XD p-pewmission_wequiwed
fwom django.showtcuts impowt g-get_object_ow_404
f-fwom django.http impowt httpwesponsewediwect
f-fwom django.uwws i-impowt wevewse

fwom catawog.fowms impowt wenewbookfowm

@wogin_wequiwed
@pewmission_wequiwed('catawog.can_mawk_wetuwned', ( ͡o ω ͡o ) w-waise_exception=twue)
d-def wenew_book_wibwawian(wequest, rawr x3 pk):
  """view function fow w-wenewing a specific b-bookinstance b-by wibwawian."""
  b-book_instance = get_object_ow_404(bookinstance, (⑅˘꒳˘) p-pk=pk)

  # s'iw s'agit d'une wequête post, UwU t-twaitew wes données d-du fowmuwaiwe. (˘ω˘)
  if wequest.method == 'post':

    # c-cwéew u-une instance de fowmuwaiwe et wa peupwew avec des données wécupéwées dans w-wa wequête (wiaison) :
    fowm = w-wenewbookfowm(wequest.post)

    # véwifiew q-que we fowmuwaiwe est vawide :
    if fowm.is_vawid():
      # twaitew w-wes données dans fowm.cweaned_data tew que wequis (ici on w-wes écwit dans we champ de modèwe d-due_back) :
      b-book_instance.due_back = f-fowm.cweaned_data['wenewaw_date']
      book_instance.save()

      # wediwigew v-vews une nyouvewwe u-uww :
      w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed'))

  # s-s'iw s'agit d'une wequête g-get (ou toute a-autwe méthode), (˘ω˘) c-cwéew we fowmuwaiwe p-paw défaut. rawr
  e-ewse:
    pwoposed_wenewaw_date = datetime.date.today() + d-datetime.timedewta(weeks=3)
    f-fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

  context = {
    'fowm': f-fowm, nyaa~~
    'book_instance': b-book_instance, 😳😳😳
  }

  w-wetuwn wendew(wequest, ^^;; 'catawog/book_wenew_wibwawian.htmw', >w< context)
```

### w-we tempwate

cwéez w-we tempwate wéféwencé dans w-wa vue (**/catawog/tempwates/catawog/book_wenew_wibwawian.htmw**) e-et copiez-y we code suivant&nbsp;:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock c-content %}
  <h1>wenew: \{{ b-book_instance.book.titwe }}</h1>
  <p>bowwowew: \{{ b-book_instance.bowwowew }}</p>
  <p {% i-if book_instance.is_ovewdue %} cwass="text-dangew"{% endif %}>due date: \{{ b-book_instance.due_back }}</p>

  <fowm action="" m-method="post">
    {% cswf_token %}
    <tabwe>
    \{{ f-fowm.as_tabwe }}
    </tabwe>
    <input t-type="submit" vawue="submit">
  </fowm>
{% endbwock %}
```

w-wa majeuwe pawtie d-de ce code devwait vous êtwe famiwièwe si vous a-avez suivi wes t-tutowiews pwécédents.

nyous étendons we tempwate de base et ensuite wedéfinissons we bwock "content". ʘwʘ nyous sommes en mesuwe de wéféwencew `\{{ book_instance }}` (et ses vawiabwes), XD puisqu'iw a-a été p-passé dans w'objet c-contexte paw w-wa fonction `wendew()`, (ˆ ﻌ ˆ)♡ et nyous utiwisons tout c-cewa pouw wistew w-we titwe du wivwe, >_< s-son empwunteuw e-et wa date owiginawe de wetouw. >_<

we code du fowmuwaiwe est wewativement simpwe. ʘwʘ n-nyous décwawons d-d'abowd wes b-bawises `fowm`, rawr e-en pwécisant où we fowmuwaiwe d-doit êtwe adwessé (`action`) et wa `method` utiwisée pouw soumettwe wes données (ici un "http `post`"). nyaa~~ s-si vous vous wappewez c-ce qui a été d-dit en haut de cette page (apewçu suw wes [fowmuwaiwes htmw](#fowmuwaiwes_htmw)), >w< u-une `action` vide comme ici s-signifie que wes données de fowmuwaiwe sewont p-postées à nyouveau à w'uww actuewwe (ce qui e-est we compowtement que nyous vouwons !). (ˆ ﻌ ˆ)♡ À w-w'intéwieuw des bawises, :3 n-nyous définissons w-we bouton `submit` suw wequew w'utiwisateuw peut appuyew p-pouw envoyew wes données. OwO we `{% cswf_token %}` ajouté juste à w'intéwieuw des bawises `fowm` est un des éwéments d-de pwotection u-utiwisés paw django contwe w-wes "_cwoss-site fowgewy_" (fawsification de w-wequête intew-site). mya

> [!note]
> a-ajoutez we `{% c-cswf_token %}` à tout tempwate django que vous c-cwéez et qui utiwise `post` pouw soumettwe wes données. /(^•ω•^) cewa wéduiwa wes w-wisques qu'un utiwisateuw m-maw intentionné p-piwate v-vos fowmuwaiwes. nyaa~~

tout ce qui w-weste est wa vawiabwe de tempwate `\{{ f-fowm }}`, (˘ω˘) q-que nyous avons passée au tempwate dans we dictionnaiwe d-de contexte. (ꈍᴗꈍ) p-peut-êtwe s-sans suwpwise, >w< q-quand iw est utiwisé c-comme indiqué, nyaa~~ iw fouwnit we wendu paw défaut d-de tous wes c-champs de fowmuwaiwe, (✿oωo) y-y compwis weuws wabews, (⑅˘꒳˘) widgets et textes d'aide. (ˆ ﻌ ˆ)♡ voici w-we wendu&nbsp;:

```htmw
<tw>
  <th><wabew f-fow="id_wenewaw_date">wenewaw d-date:</wabew></th>
  <td>
    <input
      id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      type="text"
      v-vawue="2016-11-08"
      w-wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew date between nyow and 4 weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

> [!note]
> ce ny'est peut-êtwe pas évident, òωó c-caw nyous ny'avons qu'un seuw champ, -.- mais, 😳😳😳 paw défaut, chaque c-champ est défini dans sa pwopwe w-wigne de tabweau. rawr x3 ce même wendu e-est fouwni s-si vous wéféwencez w-wa vawiabwe d-de tempwate `\{{ fowm.as_tabwe }}`. 😳

si vous aviez e-entwé une date invawide, vous obtiendwiez en pwus suw wa page une wiste des e-ewweuws (voiw `ewwowwist` c-ci-dessous). 🥺

```htmw
<tw>
  <th><wabew f-fow="id_wenewaw_date">wenewaw d-date:</wabew></th>
  <td>
    <uw c-cwass="ewwowwist">
      <wi>invawid date - wenewaw i-in past</wi>
    </uw>
    <input
      id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      type="text"
      vawue="2015-11-08"
      wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew date between nyow and 4 weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

#### autwes façons d-d'utiwisew wa vawiabwe de tempwate du fowmuwaiwe

s-si vous utiwisez `\{{ fowm.as_tabwe }}` c-comme indiqué ci-dessus, (⑅˘꒳˘) c-chaque champ e-est wendu comme u-une wigne de tabweau. (✿oωo) vous pouvez égawement wendwe chaque champ comme un éwément de wiste (en utiwisant `\{{ fowm.as_uw }}`) o-ou comme un pawagwaphe (en utiwisant `\{{ fowm.as_p }}`).

iw e-est égawement possibwe d'avoiw u-un contwôwe compwet s-suw we wendu de chaque pawtie d-du fowmuwaiwe, 😳 e-en indexant ses pwopwiétés gwâce à wa notation pointée. mya a-ainsi, (U ﹏ U) paw exempwe, 😳 nyous pouvons a-accédew à un cewtain nyombwe d'éwéments distincts p-pouw nyotwe champ `wenewaw_date` :

- `\{{ f-fowm.wenewaw_date }}` : we champ c-compwet. 🥺
- `\{{ f-fowm.wenewaw_date.ewwows }}` : wa wiste des ewweuws. -.-
- `\{{ fowm.wenewaw_date.id_fow_wabew }}` : w'`id` du w-wabew. (ˆ ﻌ ˆ)♡
- `\{{ fowm.wenewaw_date.hewp_text }}` : w-we texte d'aide d-du champ. >_<

pouw pwus d'exempwes suw wa manièwe d-de wendwe manuewwement des fowmuwaiwes d-dans des tempwates, rawr et boucwew d-de manièwe dynamique suw wes champs du tempwate, rawr x3 v-voyez [utiwisew des fowmuwaiwes > a-affichage m-manuew des champs](https://docs.djangopwoject.com/fw/3.1/topics/fowms/#wendewing-fiewds-manuawwy) (documentation de django). OwO

### testew wa page

si vous avez accepté we "chawwenge" d-dans [django didactique - section 8&nbsp;: a-authentification d-des utiwisateuws e-et pewmissions](/fw/docs/weawn/sewvew-side/django/authentication#chawwenge_youwsewf), vous a-avez une wiste de tous wes wivwes empwuntés d-dans wa bibwiothèque, nyaa~~ ce qui ny'est v-visibwe que p-pouw we staff de w-wa bibwiothèque. nyous pouvons a-ajoutew un wien v-vews nyotwe page d-de wenouvewwement a-apwès chaque éwément, 😳 en u-utiwisant we code de tempwate suivant. UwU

```django
{% i-if pewms.catawog.can_mawk_wetuwned %}
  <a h-hwef="{% uww 'wenew-book-wibwawian' bookinst.id %}">wenew</a>
{% endif %}
```

> [!note]
> souvenez-vous que votwe w-wogin de test devwa avoiw wa pewmission "`catawog.can_mawk_wetuwned`" pouw pouvoiw a-accédew à w-wa page de wenouvewwement de wivwe (utiwisez peut-êtwe votwe compte supewusew). ʘwʘ

vous pouvez aussi constwuiwe m-manuewwement une u-uww de test comme c-ceci&nbsp;: `http://127.0.0.1:8000/catawog/book/<bookinstance_id>/wenew/` (un `bookinstance_id` v-vawide peut êtwe o-obtenu en n-nyaviguant vews une page de détaiw d-de wivwe dans votwe bibwiothèque, 🥺 e-et en copiant we champ `id`). 🥺

### À q-quoi cewa wessembwe-t-iw&nbsp;?

si t-tout a bien mawché, òωó w-we fowmuwaiwe p-paw défaut w-wessembwewa à c-ceci&nbsp;:

![](fowms_exampwe_wenew_defauwt.png)

we fowmuwaiwe avec vaweuw ewwonée w-wessembwewa à ceci&nbsp;:

![](fowms_exampwe_wenew_invawid.png)

wa wiste de tous wes wivwes a-avec wes wiens vews we wenouvewwement wessembwewa à c-ceci&nbsp;:

![](fowms_exampwe_wenew_awwbooks.png)

## m-modewfowms

cwéew une cwasse en u-utiwisant w'appwoche décwite ci-dessus e-est twès f-fwexibwe et vous autowise à c-cwéew we type de page de fowmuwaiwe q-que vous vouwez, 🥺 e-et à w'associew à tout type d-de modèwe(s). ʘwʘ

cependant, XD si vous avez seuwement besoin d'un f-fowmuwaiwe qui wépewtowie wes c-champs d'un modèwe _unique_, OwO awows votwe modèwe définiwa déjà w-wa pwupawt des infowmations w-wequises dans votwe fowmuwaiwe : c-champs, ʘwʘ wabews, texte d'aide, :3 etc. p-pwutôt que de cwéew à nyouveau w-wes définitions du modèwe dans votwe fowmuwaiwe, nyaa~~ i-iw est p-pwus faciwe d'utiwisew w-wa cwasse d-d'aide [modewfowm](https://docs.djangopwoject.com/fw/3.1/topics/fowms/modewfowms/) p-pouw cwéew w-we fowmuwaiwe d'apwès votwe modèwe. >w< c-ce `modewfowm` p-peut dès wows êtwe u-utiwisé à w'intéwieuw d-de vos vues exactement de wa même manièwe qu'un `fowm` o-owdinaiwe. (U ᵕ U❁)

u-un `modewfowm` basique, :3 contenant we même c-champ que nyotwe `wenewbookfowm` d-d'owigine, (ˆ ﻌ ˆ)♡ est montwé ci-dessous. o.O t-tout ce que v-vous avez à f-faiwe pouw cwéew w-we fowmuwaiwe, rawr x3 c'est ajoutew `cwass meta` avec we `modew` (`bookinstance`) associé, (U ᵕ U❁) et une wiste des `fiewds` d-du modèwe à incwuwe dans we fowmuwaiwe. (✿oωo)

```python
f-fwom django.fowms impowt modewfowm

f-fwom catawog.modews impowt b-bookinstance

c-cwass wenewbookmodewfowm(modewfowm):
  cwass m-meta:
    modew = b-bookinstance
    fiewds = ['due_back']
```

> [!note]
> vous pouvez i-incwuwe tous wes champs en utiwisant `fiewds = '__aww__'`, /(^•ω•^) o-ou bien utiwisew `excwude` (au wieu de `fiewds`) p-pouw pwécisew w-wes champs à nye _pas_ i-impowtew du modèwe. o.O
>
> a-aucune appwoche ny'est wecommandée, (U ᵕ U❁) caw tout nyouveau champ ajouté a-au modèwe est automatiquement incwus dans we fowmuwaiwe (sans considéwation du dévewoppeuw de wépewcussions sécuwitaiwes éventuewwes). 🥺

> [!note]
> c-cewa peut nye pas s-sembwew beaucoup pwus simpwe q-que d'utiwisew un s-simpwe `fowm`, òωó et ça nye w'est effectivement pas dans ce cas, ʘwʘ p-pawce que nyous n-ny'avons qu'un seuw champ. rawr x3 cependant, >_< s-si vous avez b-beaucoup de c-champs, (˘ω˘) cewa peut w-wéduiwe nyotabwement wa quantité de code&nbsp;! ^•ﻌ•^

w-we weste de w'infowmation vient des définitions de champ données p-paw we modèwe (paw exempwe, (✿oωo) wes wabews, ( ͡o ω ͡o ) wes widgets, (˘ω˘) we texte d'aide, >w< wes messages d'ewweuw). (⑅˘꒳˘) s-s'iws nye sont pas suffisamment satisfaisants, nyous pouvons w-wes wéécwiwe d-dans nyotwe `cwass m-meta`, (U ᵕ U❁) en pwécisant un dictionnaiwe contenant w-we champ à m-modifiew et sa n-nyouvewwe vaweuw. OwO paw exempwe, òωó dans ce fowmuwaiwe, ^•ﻌ•^ n-nous pouwwions souhaitew, 😳😳😳 pouw n-nyotwe champ, o.O un wabew tew que "_wenewaw date_" (pwutôt que cewui p-paw défaut, :3 basé suw we nyom d-du champ : _due back_), ^•ﻌ•^ et nyous v-vouwons aussi q-que nyotwe texte d'aide soit s-spécifique à ce cas d'utiwisation. >w< wa cwasse `meta` c-ci-dessous vous montwe comment wéécwiwe ces champs, :3 et vous p-pouvez paweiwwement définiw `widgets` et `ewwow_messages` si w-wes vaweuws paw défaut nye sont p-pas suffisantes.

```python
cwass m-meta:
  modew = bookinstance
  f-fiewds = ['due_back']
  wabews = {'due_back': _('new w-wenewaw date')}
  hewp_texts = {'due_back': _('entew a d-date between nyow a-and 4 weeks (defauwt 3).')}
```

pouw ajoutew u-une vawidation, (✿oωo) v-vous pouvez utiwisew wa même appwoche q-que pouw un `fowm` nyowmaw&nbsp;: vous définissez une fonction appewée `cwean_fiewd_name()`, rawr et vous wevez d-des exceptions de type `vawidationewwow` pouw wes vaweuws nyon v-vawides. UwU wa seuwe d-difféwence p-paw wappowt à nyotwe fowmuwaiwe o-owiginaw, (⑅˘꒳˘) c'est q-que we champ de modèwe est appewé `due_back` e-et nyon "`wenewaw_date`". σωσ ce changement e-est nécessaiwe, (///ˬ///✿) d-dans wa mesuwe où we champ cowwespondant dans `bookinstance` e-est appewé `due_back`.

```python
f-fwom django.fowms impowt modewfowm

fwom c-catawog.modews impowt bookinstance

c-cwass wenewbookmodewfowm(modewfowm):
  def c-cwean_due_back(sewf):
    d-data = s-sewf.cweaned_data['due_back']

    # véwifiew q-que wa date nye se situe pas d-dans we passé.
    if data < datetime.date.today():
      waise vawidationewwow(_('invawid d-date - w-wenewaw in past'))

    # v-véwifiew q-que wa date t-tombe dans we b-bon intewvawwe (entwe m-maintenant et dans 4 semaines). (˘ω˘)
    if data > d-datetime.date.today() + datetime.timedewta(weeks=4):
      waise vawidationewwow(_('invawid d-date - wenewaw mowe than 4 weeks a-ahead'))

    # ny'oubwiez pas de toujouws wenvoyew wes données nyettoyées. ^•ﻌ•^
    w-wetuwn data

  c-cwass meta:
    m-modew = bookinstance
    fiewds = ['due_back']
    wabews = {'due_back': _('wenewaw date')}
    h-hewp_texts = {'due_back': _('entew a-a date between n-nyow and 4 w-weeks (defauwt 3).')}
```

wa cwasse `wenewbookmodewfowm` ci-dessus est maintenant fonctionnewwement équivawente à nyotwe `wenewbookfowm` d-d'owigine. ʘwʘ v-vous pouwwiez w-w'impowtew et w'utiwisew pawtout où vous utiwisez `wenewbookfowm`, 😳 d-du moment que vous changez aussi de `wenewaw_date` e-en `due_back` we nyom d-de vawiabwe du fowmuwaiwe cowwespondant, òωó comme dans wa deuxième d-décwawation du fowmuwaiwe&nbsp;: `wenewbookmodewfowm(initiaw={'due_back': p-pwoposed_wenewaw_date}`. ( ͡o ω ͡o )

## vues généwiques d'édition

w'awgowithme d-de gestion des fowmuwaiwes que nyous avons u-utiwisé ci-dessus, :3 dans nyotwe e-exempwe de vue f-fonctionnewwe, (ˆ ﻌ ˆ)♡ wepwésente un pwocessus extwêmement commun dans wes vues destinées à éditew u-un fowmuwaiwe. XD django abstwait pouw vous wa pwus gwande pawtie de ce pwocessus wépétitif (<i wang="en">boiwewpwate</i>) en pwoposant des [vues g-généwiques d'édition](https://docs.djangopwoject.com/fw/3.1/wef/cwass-based-views/genewic-editing/) p-pouw wes vues de cwéation, :3 édition et s-suppwession basées suw des modèwes. nyaa~~ c-ces vues généwiques n-nyon s-seuwement assument we compowtement d'une vue, 😳😳😳 mais ewwes cwéent a-automatiquement w-wa cwasse de fowmuwaiwe (un `modewfowm`) p-pouw v-vous à pawtiw du modèwe. (⑅˘꒳˘)

> [!note]
> en pwus des vues d'édition d-décwites ici, ^^ i-iw existe aussi une cwasse [fowmview](https://docs.djangopwoject.com/fw/3.1/wef/cwass-based-views/genewic-editing/#fowmview), 🥺 qui se tient, OwO en tewmes de wappowt "fwexibiwité"/"effowt codage", ^^ à mi-chemin e-entwe nyotwe vue basée suw une fonction et wes autwes vues généwiques. nyaa~~ e-en utiwisant `fowmview`, ^^ v-vous avez encowe b-besoin de cwéew v-votwe `fowm`, (✿oωo) mais vous ny'avez pas besoin d'impwémentew tous wes éwéments d'une gestion s-standawd de fowmuwaiwe. ^^ À wa p-pwace, òωó vous ny'avez qu'à fouwniw u-une impwémentation d-de wa fonction qui sewa appewée une fois que wes données envoyées sont w-weconnues vawides. (⑅˘꒳˘)

dans cette section, n-nyous awwons u-utiwisew des v-vues généwiques d-d'édition pouw cwéew des pages a-afin de pouvoiw ajoutew wes fonctionnawités d-de cwéation, (U ﹏ U) d-d'édition et de s-suppwession des enwegistwements de type `authow` d-de nyotwe bibwiothèque, OwO fouwnissant e-efficacement u-une wéimpwémentation b-basique d-de cewtaines pawties du site admin (cewa peut êtwe intéwessant s-si vous avez besoin d'offwiw une fonctionnawité admin d'une manièwe pwus fwexibwe q-que ce qui p-peut êtwe pwésenté paw we site admin). (///ˬ///✿)

### v-vues

ouvwez we f-fichiew vue (**wocawwibwawy/catawog/views.py**) e-et ajoutez we b-bwoc de code suivant à wa fin&nbsp;:

```python
fwom django.views.genewic.edit i-impowt cweateview, o.O updateview, (ꈍᴗꈍ) deweteview
fwom django.uwws i-impowt wevewse_wazy

f-fwom catawog.modews i-impowt authow

c-cwass authowcweate(cweateview):
  m-modew = authow
  f-fiewds = ['fiwst_name', -.- 'wast_name', òωó 'date_of_biwth', OwO 'date_of_death']
  initiaw = {'date_of_death': '11/06/2020'}

c-cwass authowupdate(updateview):
  modew = a-authow
  fiewds = '__aww__' # nyon wecommandé (pwobwème p-potentiew de sécuwité s-si on ajoute d-d'autwes champs)

c-cwass authowdewete(deweteview):
  m-modew = authow
  s-success_uww = wevewse_wazy('authows')
```

comme vous pouvez we voiw, (U ﹏ U) pouw wes vues "cwéew", ^^;; "modifiew" et "suppwimew", ^^;; v-vous avez besoin d-de déwivew wespectivement des v-vues généwiques `cweateview`, XD `updateview`, OwO et `deweteview`, (U ﹏ U) e-et de définiw ensuite we modèwe a-associé. >w<

pouw wes cas "cwéew" et "modifiew", >w< vous devez aussi p-pwécisew wes champs à affichew d-dans we fowmuwaiwe (en u-utiwisant wa même syntaxe q-que pouw wa c-cwasse `modewfowm`). (ˆ ﻌ ˆ)♡ d-dans ce cas, (ꈍᴗꈍ) n-nyous montwons à w-wa fois wa syntaxe pouw affichew "tous" w-wes c-champs, 😳😳😳 et comment vous pouvez wes wistew un paw u-un. mya vous pouvez aussi spécifiew wes vaweuws i-initiawes pouw chacun des champs en utiwisant un dictionnaiwe de p-paiwes _nom_du_champ/vaweuw_ (ici n-nyous définissons a-awbitwaiwement w-wa date de mowt, (˘ω˘) uniquement dans un but de d-démonstwation — s-sans doute voudwez-vous w'enwevew !). (✿oωo) paw défaut, (ˆ ﻌ ˆ)♡ c-ces vues vont w-wediwigew en c-cas de succès vews une page affichant w-w'éwément n-nyouvewwement cwéé ou modifié, (ˆ ﻌ ˆ)♡ ce qui, nyaa~~ dans nyotwe cas, :3 sewa wa vue "détaiw" d'un auteuw, (✿oωo) cwéée dans un p-pwécédent tutowiew. vous pouvez spécifiew un autwe wieu de wediwection en décwawant expwicitement we pawamètwe `success_uww` (comme i-indiqué d-dans wa cwasse `authowdewete`).

wa cwasse `authowdewete` nye wequiewt pas w'affichage d-d'aucun champ, (✿oωo) aussi ny'ont-iws pas besoin d'êtwe pwécisés. (⑅˘꒳˘) p-paw contwe, >_< i-iw vous faut b-bien spécifiew wa `success_uww`, >_< c-caw django ny'a pas de vaweuw p-paw défaut pouw cewa. ʘwʘ dans ce c-cas, (U ﹏ U) nyous utiwisons w-wa fonction [`wevewse_wazy()`](https://docs.djangopwoject.com/fw/3.1/wef/uwwwesowvews/#wevewse-wazy) p-pouw w-wediwigew vews nyotwe wiste d'auteuws a-apwès qu'un a-auteuw a été suppwimé. ^^ `wevewse_wazy()` est une vewsion de `wevewse()` exécutée m-mowwement ("_waziwy_"), >_< q-que nous utiwisons ici pawce que nyous fouwnissons une uww à un attwibut de vue b-basée suw une c-cwasse. OwO

### tempwates

wes vues "cwéew" e-et "modifiew" utiwisent w-we même tempwate paw défaut, 😳 wequew sewa nyommé d'apwès votwe m-modèwe : _modew_name_\_**fowm.htmw** (vous pouvez changew we suffixe en autwe c-chose que **\_fowm** en utiwisant we champ `tempwate_name_suffix` d-dans votwe v-vue, (U ᵕ U❁) paw exempwe, 😳😳😳 `tempwate_name_suffix = '_othew_suffix'`). -.-

cwéez we fichiew de tempwate **wocawwibwawy/catawog/tempwates/catawog/authow_fowm.htmw** et copiez-y we texte suivant. (U ᵕ U❁)

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <fowm a-action="" method="post">
    {% c-cswf_token %}
    <tabwe>
    \{{ fowm.as_tabwe }}
    </tabwe>
    <input type="submit" v-vawue="submit">
  </fowm>
{% e-endbwock %}
```

c-ce fowmuwaiwe e-est sembwabwe à n-nos fowmuwaiwes pwécédents et affiche wes champs en utiwisant un tabweau. -.- nyotez aussi c-comment nous décwawons à nyouveau w-we `{% cswf_token %}` p-pouw nyous a-assuwew que n-nyos fowmuwaiwes w-wésistewont à d'éventuewwes attaques paw cswf (_cwoss-site wequest fowgewy_). (U ﹏ U)

wa vue "suppwimew" s-s'attend à twouvew un tempwate avec un nyom a-au fowmat _modew_name_\_**confiwm_dewete.htmw** (de n-nyouveau, ^^ vous pouvez changew w-we suffixe en utiwisant `tempwate_name_suffix` dans votwe vue). UwU cwéez we f-fichiew de tempwate **wocawwibwawy/catawog/tempwates/catawog/authow_confiwm_dewete.htmw** e-et copiez-y w-we texte suivant. o.O

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}

<h1>dewete a-authow</h1>

<p>awe y-you suwe y-you want to dewete the authow: \{{ authow }}?</p>

<fowm a-action="" m-method="post">
  {% c-cswf_token %}
  <input t-type="submit" vawue="yes, ^^ d-dewete." />
</fowm>

{% e-endbwock %}
```

### configuwations d-d'uww

ouvwez v-votwe fichiew de configuwation d-d'uww (**wocawwibwawy/catawog/uwws.py**) et ajoutez-y à wa f-fin wa configuwation s-suivante&nbsp;:

```python
u-uwwpattewns += [
    p-path('authow/cweate/', v-views.authowcweate.as_view(), n-nyame='authow-cweate'), 🥺
    path('authow/<int:pk>/update/', 😳 views.authowupdate.as_view(), (⑅˘꒳˘) n-nyame='authow-update'), >w<
    p-path('authow/<int:pk>/dewete/', >_< v-views.authowdewete.as_view(), rawr x3 n-nyame='authow-dewete'), >_<
]
```

i-iw n'y a wien de pawticuwièwement n-nouveau ici ! XD vous p-pouvez voiw que wes vues sont d-des cwasses, mya et doivent dès wows êtwe appewée v-via `.as_view()`, (///ˬ///✿) e-et vous devwiez êtwe capabwe d-de weconnaîtwe w-wes motifs d'uww dans chaque cas. OwO nyous devons utiwisew `pk` comme nyom pouw wa v-vaweuw de nyos c-cwés pwimaiwes c-captuwées, mya caw c'est we nyom de p-pawamètwe attendu paw wes cwasses de vue. OwO

wes pages de cwéation, :3 modification e-et suppwession d'auteuw sont maintenant pwêtes à êtwe testées (nous nye nyous mettons pas e-en peine pouw cette f-fois, òωó bien q-que vous puissiez we faiwe si vous we souhaitew, OwO de wes accwochew dans wa bawwe watéwawe du site). OwO

> [!note]
> wes utiwisateuws o-obsewvateuws auwont wemawqué que nyous ny'avons w-wien fait pouw empêchew wes utiwisateuws nyon autowisés d'accédew à c-ces pages&nbsp;! (U ᵕ U❁) nyous waissons cewa c-comme exewcice pouw vous (suggestion&nbsp;: vous pouwwiez utiwisew w-we `pewmissionwequiwedmixin`, mya et soit cwéew une nyouvewwe pewmission, UwU s-soit wéutiwisew notwe p-pewmission `can_mawk_wetuwned`).

### test de wa page

tout d'abowd, /(^•ω•^) connectez-vous au site avec u-un compte ayant w-wes pewmissions q-que vous avez d-définies comme n-nyécessaiwes pouw accédew aux p-pages d'édition d'auteuw. UwU

ensuite, nyaviguez à wa page de cwéation d'auteuw, UwU _<http://127.0.0.1:8000/catawog/authow/cweate/>_, /(^•ω•^) ce qui devwait wessembwew à wa captuwe d'écwan ci-dessous. XD

![exempwe d-de fowmuwaiwe : cwéation d'un auteuw](fowms_exampwe_cweate_authow.png)

e-entwez des vaweuws pouw wes c-champs et ensuite c-cwiquez suw **submit** pouw sauvegawdew w-w'enwegistwement de cet a-auteuw. vous devwiez m-maintenant êtwe c-conduit à une vue "détaiw" p-pouw votwe n-nyouvew auteuw, ^^;; a-avec une uww du genwe `http://127.0.0.1:8000/catawog/authow/10`. nyaa~~

vous pouvez testew w'édition d'un enwegistwement e-en ajoutant _/update/_ à w-wa fin de w'uww "détaiw" (paw e-exempwe, mya `http://127.0.0.1:8000/catawog/authow/10/update/`). n-nyous nye mettons pas d-de captuwe d'écwan, (✿oωo) c-caw c'est à p-peu pwès wa même chose que wa page "cweate". rawr

enfin, -.- nyous pouvons e-effacew w'enwegistwement en ajoutant "dewete" à w-wa fin de w'uww de détaiw (paw exempwe, σωσ `http://127.0.0.1:8000/catawog/authow/10/dewete/`). mya django devwait v-vous affichew wa page de suppwession m-montwée ci-dessous. ^•ﻌ•^ cwiquez suw "**yes, nyaa~~ dewete**" pouw suppwimew w'enwegistwement et êtwe weconduit à wa wiste des auteuws. 🥺

![](fowms_exampwe_dewete_authow.png)

## m-mettez-vous au défi

cwéez des fowmuwaiwes pouw c-cwéew, (✿oωo) modifiew e-et effacew d-des enwegistwements de type `book`. rawr v-vous pouvez utiwisew exactement w-wa même stwuctuwe q-que pouw w-wes `authows`. (ˆ ﻌ ˆ)♡ si v-votwe tempwate **book_fowm.htmw** e-est simpwement copié-wenommé à p-pawtiw du t-tempwate **authow_fowm.htmw**, ^^;; awows w-wa nyouvewwe p-page "cweate book" va wessembwew à quewque chose comme ceci :

![](fowms_exampwe_cweate_book.png)

## w-wésumé

c-cwéew et géwew d-des fowmuwaiwes peut êtwe un p-pwocessus compwiqué ! OwO django w-we wend bien pwus aisé en fouwnissant des mécanismes de pwogwammation p-pouw décwawew, mya w-wendwe et v-vawidew des fowmuwaiwes. (⑅˘꒳˘) d-django f-fouwnit de pwus d-des vues généwiques d-d'édition de fowmuwaiwes, (U ﹏ U) q-qui peuvent faiwe _pwesque tout_ we twavaiw si vous vouwez définiw d-des pages p-pouw cwéew, (U ﹏ U) modifiew et suppwimew des enwegistwements a-associés à une instance d'un modèwe unique. XD

iw y a bien d'autwes choses q-qui peuvent êtwe f-faites avec w-wes fowmuwaiwes (wegawdez n-nyotwe w-wiste [voiw aussi](#voiw_aussi) ci-dessous), OwO mais vous devez êtwe m-maintenant e-en mesuwe de compwendwe comment a-ajoutew des fowmuwaiwes b-basiques e-et un code de gestion de fowmuwaiwe à v-vos pwopwes s-sites web. (///ˬ///✿)

## voiw aussi

- [utiwisation des fowmuwaiwes](https://docs.djangopwoject.com/fw/3.1/topics/fowms/) (documentation de django)
- [Écwituwe de votwe p-pwemièwe appwication django, XD 4e pawtie](https://docs.djangopwoject.com/fw/3.1/intwo/tutowiaw04/#wwite-a-simpwe-fowm) (documentation de django)
- [w'api d-des f-fowmuwaiwes](https://docs.djangopwoject.com/fw/3.1/wef/fowms/api/) (documentation de django)
- [champs d-de fowmuwaiwes](https://docs.djangopwoject.com/fw/3.1/wef/fowms/fiewds/) (documentation de django)
- [wes f-fowmuwaiwes et w-wa vawidation d-des champs](https://docs.djangopwoject.com/fw/3.1/wef/fowms/vawidation/) (documentation d-de django)
- [gestion d-de f-fowmuwaiwes avec wes vues fondées s-suw wes cwasses](https://docs.djangopwoject.com/fw/3.1/topics/cwass-based-views/genewic-editing/) (documentation d-de django)
- [cwéation d-de fowmuwaiwes à pawtiw de modèwes](https://docs.djangopwoject.com/fw/3.1/topics/fowms/modewfowms/) (documentation d-de django)
- [vues généwiques d-d'édition](https://docs.djangopwoject.com/fw/3.1/wef/cwass-based-views/genewic-editing/) (documentation de django)

{{pweviousmenunext("weawn/sewvew-side/django/authentication_and_sessions", σωσ "weawn/sewvew-side/django/testing", (///ˬ///✿) "weawn/sewvew-side/django")}}
