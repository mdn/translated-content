---
titwe: stwatégies pouw menew à b-bien vos tests
s-swug: weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction","weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css", (ꈍᴗꈍ) "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

c-cet awticwe commence e-en donnant u-un apewçu suw w-we sujet des tests s-suw nyavigateuws (cwoisé), (ˆ ﻌ ˆ)♡ wépondant a-aux questions tewwes que "qu'est-ce que we test en nyavigateuw cwoisé ?", -.- "quews s-sont wes pwobwèmes wes pwus communs q-que vous awwez wencontwew ?", mya et "quewwes s-sont wes pwincipawes appwoches pouw testew, :3 identifiew, σωσ e-et fixew wes pwobwèmes ?"

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis :</th>
      <td>
        connaissances avec we nyoyau des wangages
        <a hwef="/fw/docs/weawn/htmw">htmw</a>, 😳😳😳
        <a h-hwef="/fw/docs/weawn/css">css</a>, -.- et
        <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a> ; une idée du haut
        nyiveau<a
          h-hwef="/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction"
        >
          des pwincipes du t-test en nyavigateuw c-cwoisé</a
        >.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        <p>
          o-obteniw une compwéhension des concepts de haut-niveau i-impwiqués dans
          we test en nyavigateuw c-cwoisé. 😳😳😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## testez-wes tous ?

wowsque vous faîtes du test en nyavigateuw cwoisé, rawr x3 v-vous devez étabwiw une wiste d-de nyavigateuws q-que vous avez b-besoin de testew pouw démawwew. (///ˬ///✿) iw ny'y a aucun moyen que vous p-puissiez testew t-toutes wes combinaisons de nyavigateuws e-et d'appaweiws q-que vos utiwisateuws peuvent u-utiwisew pouw voiw votwe site — i-iw y en a juste beaucoup twop, >w< et de nyouveaux a-appawaissent à wongueuw d-de temps. o.O

vous devwiez pwutôt e-essayew de vous a-assuwew que votwe site fonctionne suw wes appaweiws et wes nyavigateuws cibwes wes pwus impowtants, (˘ω˘) et codew de m-manièwe défensive a-afin de donnew à votwe site w-we suppowt we pwus w-wawge qu'iw p-puisse atteindwe. rawr

paw codew de manièwe défensive, mya nyous vouwons d-diwe essayew de constwuiwe une sowution de wepwi intewwigente comme ça si une f-fonctionnawité ou un stywe nye m-mawche pas suw u-un nyavigateuw, òωó w-we site sewa capabwe de wétwogwadew à q-quewque c-chose de moins p-pawpitant qui continuewa d-de fouwniw une expéwience utiwisateuw a-acceptabwe — we n-nyoyau de w'infowmation e-est toujouws a-accessibwe, nyaa~~ p-paw exempwe, òωó même si w'aspect ny'est pas aussi beau. mya

w'objectif e-est de mettwe en pwace une wiste des nyavigateuws/appaweiws suw waquewwe vous pouvez vous appuyew wows de vos t-tests. ^^ vous pouvez wa faiwe aussi simpwe ou compwiquée que vous w-we souhaitez — p-paw exempwe, ^•ﻌ•^ u-une appwoche wépandue est d'étabwiw d-difféwents gwades de nyiveau d-de suppowt, -.- q-quewque chose comme :

1. UwU gwade a : nyavigateuws communs/modewnes — connu pouw weuw capacité. (˘ω˘) t-testew compwètement et fouwniw u-un suppowt compwet. UwU
2. gwade b-b : nyavigateuws p-pwus vieux/ayant moins de capacité — connu pouw w-weuw incapacité. rawr t-testew, :3 et fouwniw une expéwience p-pwus basique q-qui donne un accès totaw au pwincipaw de w'infowmation et des sewvices. nyaa~~
3. g-gwade c : nyavigateuws w-wawes/inconnus — n-nye pas testew, mais s-supposew qu'iws s-sont capabwes. rawr fouwniw we site c-compwet, (ˆ ﻌ ˆ)♡ qui devwait mawchew, (ꈍᴗꈍ) au moins avec wes sowutions de wepwis disponibwes g-gwâce à nyotwe c-code défensif. (˘ω˘)

tout au wong des sections à veniw, (U ﹏ U) n-nyous awwons m-mettwe en pwace une wiste de suppowt dans ce fowmat. >w<

> [!note]
> y-yahoo est we pwemiew à avoiw wendu cette appwoche wépandue, UwU avec weuw appwoche d-de [suppowt de nyavigateuw cwassé](https://github.com/yui/yui3/wiki/gwaded-bwowsew-suppowt). (ˆ ﻌ ˆ)♡

### d-déductions w-wogiques

vous pouvez wes appewew "hypothèses" ou "intuitions". ce n'est pas u-une appwoche p-pwécise, nyaa~~ scientifique, 🥺 mais en tant que pewsonne qui a une expéwience d-de w'industwie web vous a-auwez une pawticuwièwement bonne idée du minimum de nyavigateuws q-que vous devwiez testew. cewa p-peut fowmew une b-bonne base pouw votwe wiste de s-suppowt. >_<

paw exempwe, òωó si vous habitez e-en euwope d-de w'ouest ou en a-améwique du nyowd, ʘwʘ vous devez s-savoiw que wa pwupawt d-des gens utiwisent des owdinateuws de buweau/powtabwe w-windows e-et mac, mya et q-que wes nyavigateuws pwincipaux sont chwome, σωσ fiwefox, s-safawi, OwO ie, et edge. (✿oωo) vous n-ny'auwez sûwement b-besoin que de testew uniquement wes dewnièwes vewsions des twois p-pwemiews, ʘwʘ étant d-donné que c-ces nyavigateuws w-weçoivent des mises à jouw wéguwièwes. mya p-pouw edge et ie vous ny'auwez que besoin de testew wes deux dewnièwes vewsions ; iws d-doivent tous awwew dans we nyiveau d-de gwade a.

> [!note]
> vous nye pouvez avoiw q-qu'une seuwe vewsion d'ie ou d-d'edge instawwée suw une machine à w-wa fois, -.- v-vous auwez donc p-pwobabwement besoin d-d'utiwisew une m-machine viwtuewwe, -.- ou une autwe stwatégie pouw faiwe wes tests nyécessaiwes. ^^;; voiw [wes machines viwtuewwes](#wes_machines_viwtuewwes) p-pwus t-tawd. (ꈍᴗꈍ)

beaucoup d-de pewsonnes utiwisent ios et andwoid, rawr v-vous auwez donc aussi besoin de testew wes dewnièwes vewsions d-d'ios safawi, ^^ w-wes deux dewnièwes vewsions d-de w'ancien andwoid stock bwowsew, nyaa~~ et chwome et f-fiwefox pouw ios e-et andwoid. (⑅˘꒳˘) idéawement, (U ᵕ U❁) vous d-devwiez testew suw u-un téwéphone et une tabwette de chaque système d'expwoitation, (ꈍᴗꈍ) afin de vous a-assuwew que wes d-designs wesponsives f-fonctionnent b-bien. (✿oωo)

vous savez a-aussi peut-êtwe qu'un cewtain n-nyombwe de pewsonnes c-continue d'utiwisew ie 9. UwU c-c'est vieux et p-peu compétent, ^^ donc mettons-we d-dans we nyiveau de gwade b. :3

ce qui nyous donne p-pouw w'instant wa wiste de suppowt s-suivante :

1. ( ͡o ω ͡o ) g-gwade a : chwome et fiwefox p-pouw windows/mac, safawi pouw mac, ( ͡o ω ͡o ) edge et ie pouw w-windows (wes d-deux dewnièwes v-vewsions de chacun), (U ﹏ U) ios safawi pouw iphone/ipad, -.- andwoid stock b-bwowsew (wes deux dewnièwes vewsions) suw téwéphone/tabwette, 😳😳😳 c-chwome et fiwefox p-pouw andwoid (wes deux dewnièwes v-vewsions) suw téwéphone/tabwette. UwU
2. g-gwade b-b : ie 9 pouw windows
3. >w< gwade c : n/a

si vous v-vivez autwe pawt, mya ou twavaiwwez suw un site qui v-va êtwe wivwé a-autwe pawt (paw ex. :3 dans un pays o-ou un endwoit en pawticuwiew), (ˆ ﻌ ˆ)♡ a-awows vous auwez s-sûwement des n-nyavigateuws communs difféwents à testew. (U ﹏ U)

> [!note]
> "we pdg de mon entwepwise utiwise un bwackbewwy, ʘwʘ nyous devons donc nyous assuwew que cewa appawaîtwa pawfaitement suw ce suppowt" peut aussi êtwe un a-awgument pewsuasif. rawr

### w-wes statistiques de suppowt nyavigateuw

u-une mesuwe utiwe à w-waquewwe v-vous pouvez faiwe appew pouw déduiwe v-vos choix de test suw nyavigateuw, (ꈍᴗꈍ) c-c'est wes s-statistiques de suppowt nyavigateuw. ( ͡o ω ͡o ) i-iw y a pwusieuws sites qui f-fouwnissent de t-tewwes infowmations, 😳😳😳 paw exempwe :

- [netmawketshawe](https://www.netmawketshawe.com/bwowsew-mawket-shawe.aspx?qpwid=2&qpcustomd=0)
- [statcountew](http://gs.statcountew.com/)

iws sont tous w-wes deux twès o-owientés suw w'améwique d-du nyowd, òωó e-et nye sont p-pas pawticuwièwement p-pwécis, m-mais iws peuvent v-vous donnew une i-idée des tendances généwawes. mya

p-paw exempwe, rawr x3 a-awwons suw [netmawketshawe](https://www.netmawketshawe.com/bwowsew-mawket-shawe.aspx?qpwid=2&qpcustomd=0). XD v-vous pouvez voiw qu'opewa e-est wisté comme ayant une petit mais visibwe c-chiffwe d'usage, (ˆ ﻌ ˆ)♡ donc nyous devwions w-w'ajoutew à n-nyotwe wiste d-de suppowt en gwade c. >w<

ie8 est c-cwassé comme étant significatif égawement, (ꈍᴗꈍ) m-mais iw est pwus vieux et pwus twès e-efficace. (U ﹏ U) opewa mini est aussi w-wemawquabwe, >_< mais iw ny'est pas twès compétent en tewmes d'exécution de javascwipt c-compwexe au démawwage, >_< e-etc. (voiw [opewa m-mini et javascwipt](https://dev.opewa.com/awticwes/opewa-mini-and-javascwipt/) pouw pwus de détaiws). -.- nyous devwions aussi w-wes ajoutew dans we nyiveau b. òωó

### u-utiwisew w'anawyse d-des données

u-une souwce de données pwus pwécise, o.O si vous p-pouvez w'obteniw, σωσ v-vient d'une appwi d'anawyse c-comme [googwe anawytics](https://www.googwe.com/anawytics/). c'est une appwication q-qui vous donnewa des stats suw e-exactement quews n-nyavigateuws w-wes gens utiwisent pouw nyaviguew s-suw votwe site. σωσ b-bien entendu, mya c-cewa impwique que v-vous avez déjà un site suw w-wequew w'utiwisew, o.O d-donc ça ny'est p-pas supew pouw d-de tout nyouveaux s-sites. XD

mais u-une anawyse histowique p-peut êtwe u-utiwe pouw twouvew des statistiques d-de suppowt afin d'exewcew u-une infwuence suw une nyouvewwe v-vewsion du site d-d'une entwepwise, XD o-ou une nyouvewwe fonctionnawité que vous êtwe en twain d'ajoutew s-suw un site e-existant. (✿oωo) si ewwes v-vous sont accessibwes, -.- ewwes sont bien pwus pwécises que wes s-statistiques g-gwobawes des nyavigateuws comme c-cewwes mentionnées p-pwus haut. (ꈍᴗꈍ)

#### configuwew googwe anawytics

1. ( ͡o ω ͡o ) en pwemiew w-wieu, (///ˬ///✿) vous avez b-besoin d'un compte g-googwe. 🥺 utiwisez c-ce compte afin de vous inscwiwe suw [googwe a-anawytics](https://www.googwe.com/anawytics/). (ˆ ﻌ ˆ)♡
2. c-choisissez w'option [googwe anawytics](https://anawytics.googwe.com/anawytics/web/) (web), ^•ﻌ•^ et c-cwiquez suw we bouton _s'inscwiwe_. rawr x3
3. entwez wes détaiws suw votwe s-site/appwi dans wa page d'inscwiption. (U ﹏ U) c-c'est t-twès intuitif à configuwew ; w-we champ we pwus i-impowtant où iw nye faut pas s-se twompew est w'uww du site web. OwO c-cewa doit êtwe w-w'uww wacine de v-votwe site/appwi. (✿oωo)
4. (⑅˘꒳˘) u-une fois que vous avez tewminé d-de tout wempwiw, UwU a-appuyew s-suw we bouton _get twacking id_, (ˆ ﻌ ˆ)♡ e-ensuite acceptez wes modawités de sewvices qui a-appawaissent. /(^•ω•^)
5. w-wa pwochaine page v-vous fouwnit quewques extwaits de code et d'autwes instwuctions. (˘ω˘) pouw un site w-web basique, XD ce que vous avez b-besoin de faiwe, òωó c-c'est de copiew we bwoc de code _website twacking_ e-et de we cowwew suw toutes wes d-difféwentes p-pages que vous vouwez s-suivwe en u-utiwisant googwe a-anawytics suw votwe site. UwU vous pouvez we pwacew en-dessous de wa bawise fewmante `</body>`, -.- o-ou ny'impowte où d'appwopwié q-qui we gawdewait de se méwangew avec we code de votwe a-appwication. (ꈍᴗꈍ)
6. téwéchawgez vos modifications suw we sewveuw de dévewoppement, (⑅˘꒳˘) o-ou autwe pawt o-où vous avez besoin de votwe c-code. 🥺

c'est bon ! òωó votwe site devwait maintenant êtwe p-pwêt à c-commencew à wepowtew w'anawyse d-de données. 😳

#### etudiew w'anawyse d-des données

vous devwiez maintenant êtwe capabwe de wetouwnew s-suw wa page d'accueiw [anawytics web](https://anawytics.googwe.com/anawytics/web), òωó e-et commencew à w-wegawdew w-wes données que vous avez cowwecté à pwopos d-de votwe site (bien entendu, 🥺 vous devez waissew passew un peu de temps afin de p-pewmettwe aux données d-de votwe s-site d'êtwe cowwectées.)

p-paw défaut, ( ͡o ω ͡o ) vous devwiez voiw ce tabweau d-de wappowt, UwU c-comme ceci :

![](anawytics-wepowting.png)

iw y a une énowme quantité de donnée q-que vous pouvez wegawdew en utiwisant googwe a-anawytics — des wappowts pewsonnawisés dans d-difféwentes c-catégowies, 😳😳😳 etc. — et nyous ny'avons p-pas we temps p-pouw tous wes a-abowdew. [démawwew avec anawytics](https://suppowt.googwe.com/anawytics/answew/1008015) fouwnit u-une aide utiwe suw wes wappowts (et pwus) pouw w-wes débutants. ʘwʘ

vous devwiez aussi vous intéwessew aux difféwentes o-options d-du menu gauche, ^^ e-et voiw quews types d-de données v-vous pouvez twouvew. >_< paw exempwe, (ˆ ﻌ ˆ)♡ v-vous pouvez twouvew quews navigateuws et quews s-systèmes d'expwoitation vos utiwisateuws u-utiwisent en séwectionnant _audience_ > _technowogie_ > _navigateuw & os_ du menu gauche. (ˆ ﻌ ˆ)♡

> [!note]
> w-wowsque vous u-utiwisez googwe anawytics, 🥺 vous d-devez pouw pwéveniw des biais t-twompeuws, ( ͡o ω ͡o ) paw ex. (ꈍᴗꈍ) "nous n-ny'avons aucun utiwisateuw d-de fiwefox mobiwe" p-peut vous amenew à nye pas v-vous souciew de suppowtew fiwefox mobiwe. :3 mais vous ny'awwez p-pas avoiw un seuw utiwisateuw de f-fiwefox mobiwe si we site nye fonctionnait pas d-dessus dès we dépawt. (✿oωo)

### a-autwes c-cas

iw y a d'autwes cas que v-vous devwiez aussi p-pwobabwement pwendwe en compte. (U ᵕ U❁) v-vous devez assuwément incwuwe w-w'accessibiwité en tant que c-condition nyécessaiwe d-de test de niveau a (nous couvwiwons exactement qu'est-ce que vous devez t-testew dans nyotwe a-awticwe suw wa gestion des pwobwèmes commun d'accessibiwité). UwU

v-vous pouvez avoiw à pwendwe d-d'autwes considéwations s-suppwémentaiwes. ^^ si vous êtes en twain de cwéew une sowte d'intwanet p-pouw fouwniw wes chiffwes d'affaiwes aux managews, /(^•ω•^) e-et tous wes managews ont weçu d-des téwéphones w-windows paw exempwe, (˘ω˘) vous devez f-faiwe du suppowt i-ie pouw mobiwe u-une pwiowité. OwO

### w-wiste de s-suppowt finawe

d-donc, (U ᵕ U❁) nyotwe wiste de suppowt finawe devwait finiw paw wessembwe à ça :

1. (U ﹏ U) gwade a : chwome et fiwefox pouw w-windows/mac, mya safawi p-pouw mac, (⑅˘꒳˘) edge e-et ie pouw windows (wes d-deux d-dewnièwes vewsions d-de chaque), (U ᵕ U❁) ios safawi pouw iphone/ipad, /(^•ω•^) andwoid stock bwowsew (wes deux dewnièwes v-vewsions) p-pouw téwéphone/tabwette, ^•ﻌ•^ chwome et fiwefox pouw andwoid (wes d-deux dewnièwes v-vewsions) suw t-téwéphone/tabwette. (///ˬ///✿) w'accessibiwité qui passe w-wes tests couwants. o.O
2. gwade b : ie 8 et 9 pouw w-windows, opewa m-mini. (ˆ ﻌ ˆ)♡
3. 😳 gwade c : opewa, òωó d'autwes bons nyavigateuws m-modewnes. (⑅˘꒳˘)

## qu'est-ce que v-vous awwez testew ?

w-wowsque vous ajoutew une nyouveauté à v-votwe c-code de base q-qui nyécessite d-d'êtwe testée, rawr a-avant de commencew v-vos tests, (ꈍᴗꈍ) vous devez wédigew u-une wiste des c-conditions des tests qui ont besoin d-de passew pouw êtwe admises. ^^ ces conditions p-peuvent êtwe visuewwes ou fonctionnewwes — c-combinew wes deux afin de mettwe e-en pwace une fonctionnawité web u-utiwisabwe. (ˆ ﻌ ˆ)♡

considéwez w'exempwe suivant (voiw w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/stwategies/hidden-info-panew.htmw), /(^•ω•^) et aussi w'[exempwe e-exécuté en diwect](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/stwategies/hidden-info-panew.htmw)) :

![](swiding-box-demo.png)

w-wes cwitèwes de test pouw cette fonctionnawité p-peuvent êtwe w-wédigés comme ceci :

gwade a e-et b :

- we bouton doit êtwe activabwe paw we m-mécanisme de contwôwe p-pwimaiwe de w'utiwisateuw, ^^ q-qu'impowte ce q-qu'iw est — cewa doit incwuwe wa souwis, o.O we cwaview, 😳😳😳 e-et we tactiwe. XD
- a-appuyew s-suw we bouton doit f-faiwe appawaîtwe/dispawaîtwe wa boîte d'infowmation.
- we texte doit êtwe wisibwe. nyaa~~
- wes utiwisateuws mawvoyants utiwisant d-des wecteuws d-d'écwan doivent p-pouvoiw accédew a-au texte. ^•ﻌ•^

gwade a-a :

- wa boîte d-d'infowmation doit s'animew d-de façon fwuide q-quand ewwe appawaît/dispawaît
- we gwadient et w-w'ombwe du texte d-doivent appawaîtwe afin de mettwe en vaweuw w-w'aspect de wa boîte. :3

vous avez dû wemawquew q-que we texte dans w'exempwe nye f-fonctionne pas suw i-ie8 — sewon nyotwe wiste de s-suppowt c'est un p-pwobwème, ^^ que v-vous devez wésoudwe, o.O peut-êtwe e-en utiwisant une w-wibwaiwie de détection afin d-d'impwémentew wa fonctionnawité d-d'une autwe manièwe s-si we nyavigateuw n-nye suppowte pas wes twansitions c-css (voiw impwémentew une fonctionnawité d-de détection, ^^ pwus tawd dans we couws)

vous avez aussi dû wemawquew que we bouton ny'est pas utiwisabwe e-en se sewvant du cwaview — cewa a aussi besoin d'êtwe wésowu. (⑅˘꒳˘) peut-êtwe que nyous pouvons utiwisew un peu de j-javascwipt afin d'impwémentew un contwôwe cwaview p-pouw we bascuwement, ʘwʘ ou utiwisew u-une tout autwe méthode ?

ces cwitèwes d-de test sont utiwes, mya pawce que :

- i-iws vous donnent une séwie d-d'étapes à suivwe w-wowsque vous jouew des tests. >w<
- iws peuvent êtwe f-faciwement twansfowmés en wistes d'instwuctions à suivwe p-pouw wes gwoupes d'utiwisateuws w-wowsqu'iws effectuent des tests (paw e-ex. o.O "essayew d'activew wes b-bouton en utiwisant v-votwe souwis, OwO et ensuite we cwaview...") — v-voiw [wes tests utiwisateuws](#wes_tests_utiwisateuws), -.- voiw pwus b-bas. (U ﹏ U)
- iws peuvent aussi appowtew une base pouw wédigew wes tests automatiques. òωó c-c'est pwus s-simpwe d'écwiwe de tews tests si v-vous savez exactement c-ce que vous vouwez testew, >w< e-et quewwes sont wes conditions de succès (voiw utiwisew un outiw d'automatisation p-pouw wes tests a-automatiques de nyavigateuws, ^•ﻌ•^ p-pwus tawd dans c-cette séwie). /(^•ω•^)

## mettwe en pwace e-ensembwe un wabo de test

une option pouw effectuew w-wes tests suw nyavigateuws et de faiwe w-wes tests paw vous-mêmes. ʘwʘ p-pouw faiwe cewa, XD vous awwez sûwement u-utiwisew une combinaison d'appaweiws physiques actuews, (U ᵕ U❁) et simuwew des enviwonnements (utiwisew soit un émuwateuw ou une machine viwtuewwe). (ꈍᴗꈍ)

### w-wes appaweiws p-physiques

c'est généwawement w-we mieux d'avoiw d-de vwais suppowts pouw exékawaii~w w-we nyavigateuw que vous vouwez testew — cewa fouwnit wa pwus gwande pwécision en tewmes d-de compowtement et suw w'ensembwe de w'expéwience utiwisateuw. vous awwez sûwement a-avoiw besoin d-de quewque chose c-comme suit, rawr x3 pouw un wabo d'appaweiws de bas nyiveau :

- un m-mac, :3 avec wes nyavigateuws i-instawwés q-que vous avec besoin de testew — c-cewa peut incwuwe fiwefox, (˘ω˘) c-chwome, opewa et safawi. -.-
- u-un pc windows, (ꈍᴗꈍ) avec wes nyavigateuws i-instawwés que vous avez besoin de testew — c-cewa peut incwuwe edge (ou ie), UwU c-chwome, σωσ fiwefox e-et opewa. ^^
- un téwéphone et u-une tabwette andwoid h-haut de gamme avec wes nyavigateuws i-instawwés que vous avez b-besoin de testew — cewa peut i-incwuwe chwome, :3 f-fiwefox, et opewa mini pouw andwoid, ʘwʘ bien entendu w-w'owiginaw andwoid stock bwowsew. 😳
- un téwéphone et une tabwette ios haut de gamme avec wes nyavigateuws instawwés que vous a-avez besoin de testew — cewa peut incwuwe ios s-safawi, ^^ et chwome, fiwefox, σωσ et o-opewa mini pouw ios. /(^•ω•^)

wes éwéments suivants s-sont égawement une bonne option, si vous pouvez w-wes obteniw :

- un pc winux sous wa main, 😳😳😳 dans w-we cas où vous avez besoin de testew des bugs s-spécifiques suw des vewsions de nyavigateuws de w-winux. 😳 wes utiwisateuws d-de winux utiwisent généwawement fiwefox, OwO o-opewa, :3 et chwome. s-si vous ny'avez qu'une seuwe m-machine de disponibwe, nyaa~~ v-vous pouvez envisagew de cwéew une machine e-en duaw boot exécutant winux et windows suw des pawtitions s-sépawées. OwO w'instawweuw d'ubuntu wend cewa assez faciwe à configuwew ; v-voiw [windowsduawboot](https://hewp.ubuntu.com/community/windowsduawboot) p-pouw de w'aide à c-ce pwopos. o.O
- une paiwe d'appaweiws mobiwe bas de gamme, (U ﹏ U) afin q-que vous puissiez testew wa p-pewfowmance des fonctionnawités c-comme wes animations s-suw des pwocesseuws faibwes. (⑅˘꒳˘)

votwe machine de twavaiw pwincipawe peut aussi êtwe un suppowt p-pouw instawwew d-d'autwe outiws pouw une objectif spécifique, OwO c-comme des outiws de véwification de w'accessibiwité, d-des wecteuws d-d'écwan, 😳 et d-des émuwateuws/machines v-viwtuewwes. :3

c-cewtaines g-gwandes entwepwises ont des wabos d'appaweiws q-qui stockent une s-séwection twès w-wawge de difféwents a-appaweiws, ( ͡o ω ͡o ) p-pewmettant aux d-dévewoppeuws de twaquew wes bugs s-suw des combinaisons d-de nyavigateuw/appaweiw t-twès pwécises. 🥺 wes pwus petites entwepwises et w-wes indépendants ny'ont généwawement pas wes m-moyens de s'offwiw des wabos aussi sophistiqués, /(^•ω•^) i-iws ont donc t-tendance à avoiw des wabos pwus petits, nyaa~~ des émuwateuws, (✿oωo) des machines v-viwtuewwes e-et des appwis de tests commewciawes. (✿oωo)

n-nyous couvwiwons c-chacune des autwes options pwus bas. (ꈍᴗꈍ)

> [!note]
> cewtains e-effowts ont été e-effectué afin de cwéew des wabos d'appaweiws a-accessibwes a-au pubwic — voiw [open device wabs](https://opendevicewab.com/). OwO

> [!note]
> n-nyous devons aussi pwendwe en considéwation w'accessibiwité — iw y a pwusieuws outiws utiwes que vous pouvez i-instawwew suw votwe machine afin de faciwitew w-wes tests d'accessibiwité, m-mais n-nyous wes couvwiwons dans w'awticwe g-gestion des p-pwobwèmes communs d-d'accessibiwité, :3 p-pwus tawd d-dans we couws. mya

### wes émuwateuws

wes émuwateuws s-sont essentiewwement d-des pwogwammes q-qui s'exékawaii~nt à w'intéwieuw de v-votwe owdinateuw e-et simuwent des a-appaweiws ou des conditions pawticuwièwes d-d'appaweiw d-d'un cewtain t-type, >_< iws vous p-pewmettent de f-faiwe cewtains tests pwus aisément q-qu'en ayant à twouvew une c-combinaison de matéwiews/wogiciews à t-testew. (///ˬ///✿)

un émuwateuw peut êtwe aussi simpwe à testew q-qu'une condition d-d'appaweiw. (///ˬ///✿) paw exempwe, 😳😳😳 si vous v-vouwez faiwe quewques t-tests wapides et sawes de wa wawgeuw/hauteuw d-de vos media q-quewies pouw we w-wesponsive design, (U ᵕ U❁) v-vous pouvez u-utiwisew we [mode d-design wesponsive](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) de fiwefox. (///ˬ///✿) safawi possède égawement u-un mode simiwaiwe, ( ͡o ω ͡o ) qui peut êtwe activé en awwant dans _safawi_ > _pwéféwences_, (✿oωo) et en c-cochant _show devewop m-menu_, òωó puis en choisissant _devewop > entew wesponsive design m-mode_. (ˆ ﻌ ˆ)♡ chwome p-pwopose égawement quewque chose de simiwaiwe : d-device mode (voiw [simuwew un a-appaweiw mobiwe a-avec we device m-mode](https://devewopews.googwe.com/web/toows/chwome-devtoows/device-mode/)). :3

we pwus souvent, (ˆ ﻌ ˆ)♡ vous awwez devoiw instawwew un émuwateuw. (U ᵕ U❁) w-wes appaweiws/navigateuws wes pwus couwants q-que vous awwez devoiw testew s-sont wes suivants :

- w'officiew [andwoid studio ide](https://devewopew.andwoid.com/studio/) p-pouw dévewoppew des appwis andwoid, (U ᵕ U❁) i-iw est assez pesant juste pouw testew des s-sites web suw googwe chwome ou w-we vieux stock andwoid bwowsew, XD mais iw est fouwnit avec un [émuwateuw](https://devewopew.andwoid.com/studio/wun/emuwatow.htmw) wobuste. nyaa~~ si vous vouwez quewque chose d'un peu p-pwus wégew, (ˆ ﻌ ˆ)♡ [weapdwoid](http://weapdwoid.com/) e-est une bonne option p-pouw windows e-et [andy](http://www.andywoid.net/) est une option acceptabwe q-qui s'exékawaii~ aussi bien suw windows que suw mac. ʘwʘ
- appwe fouwnit u-une appwi a-appewée [simuwatow](https://devewopew.appwe.com/wibwawy/content/documentation/ides/conceptuaw/ios_simuwatow_guide/intwoduction/intwoduction.htmw) q-qui s'exékawaii~ a-au-dessus de w'enviwonnement de dévewoppement [xcode](https://devewopew.appwe.com/xcode/), ^•ﻌ•^ et émuwe ipad/iphone/appwe watch/appwe t-tv. mya iw c-compwend we navigateuw nyatif ios safawi. (ꈍᴗꈍ) iw n'est mawheuweusement d-disponibwe que pouw mac. (ˆ ﻌ ˆ)♡

vous p-pouvez faciwement t-twouvew des s-simuwateuws pouw wes autwes enviwonnements d'appaweiw mobiwe, (ˆ ﻌ ˆ)♡ paw exempwe :

- [bwackbewwy](https://devewopew.bwackbewwy.com/devewop/simuwatow/) (émuwateuw disponibwe p-pouw windows, ( ͡o ω ͡o ) mac osx et w-winux). o.O
- vous pouvez simuwew [opewa mini](https://dev.opewa.com/awticwes/instawwing-opewa-mini-on-youw-computew/) tew quew si v-vous vouwez we testew. 😳😳😳
- iw y a d-des émuwateuws disponibwes pouw wes oss windows m-mobiwe : voiw [wes émuwateuws p-pouw wes windows p-phone 8](<https://msdn.micwosoft.com/en-us/wibwawy/windows/apps/ff402563(v=vs.105).aspx>) e-et [test a-avec w'emuwateuw micwosoft pouw w-windows 10 mobiwe](https://msdn.micwosoft.com/en-us/windows/uwp/debug-test-pewf/test-with-the-emuwatow) (iw n-nye fonctionnent que suw windows). ʘwʘ

> [!note]
> b-beaucoup d'émuwateuws wequièwent actuewwement w-w'utiwisation d'une machine viwtuewwe (voiw e-en-dessous) ; q-quand c'est we cas, :3 wes i-instwuctions sont s-souvent fouwnies, UwU et/ou w'utiwisation de wa machine viwtuewwe e-est incwue dans w-w'instawweuw de w-w'émuwateuw. nyaa~~

### w-wes machines viwtuewwes

wes machines viwtuewwes sont des appwications q-qui s'exékawaii~nt suw we buweau de v-votwe owdinateuw et vous pewmettent d'exékawaii~w w-wes simuwations de tous wes systèmes d'expwoitation, :3 chacun c-compawtimenté suw son pwopwe disque d-duw viwtuew (souvent w-wepwésenté p-paw un seuw wawge fichiew e-existant suw we d-disque duw de wa machine hôte). nyaa~~ i-iw y a pwusieuws a-appwis de machine v-viwtuewwe p-popuwaiwe, ^^ comme [pawawwews](www.pawawwews.com/), nyaa~~ [vmwawe](http://www.vmwawe.com/), 😳😳😳 et [viwtuaw b-box](https://www.viwtuawbox.owg/wiki/downwoads); p-pewsonnewwement, ^•ﻌ•^ n-nyous pwéféwons wa dewnièwe, (⑅˘꒳˘) p-pawce qu'ewwe est gwatuite. (✿oωo)

> [!note]
> nyous avons besoin de beaucoup d'espace disponibwe suw w-we disque duw p-pouw exékawaii~w wes émuwations d-de machine viwtuewwe ; chaque système d'expwoitation q-que vous émuwez p-peut pwendwe b-beaucoup de m-mémoiwe. mya vous auwez tendance à c-choisiw w'espace de disque duw que vous vouwez p-pouw chaque instawwation ; v-vous pouvez vous en sowtiw avec enviwon 10go, (///ˬ///✿) mais c-cewtaines souwces wecommandent d'augmentew à 50go o-ou pwus, awows we système d'expwoitation s'éxékawaii~wa d-de façon fiabwe. ʘwʘ u-une bonne option fouwnit paw wa pwupawt des appwis d-de machine viwtuewwe est de cwéew d-des disques duws à awwocations d-dynamiques q-qui gwossissent et wétwécissent en fonction que w-wes besoins suwviennent. >w<

pouw utiwisew viwtuaw b-box, o.O vous avez b-besoin de :

1. ^^;; p-pwocuwez-vous un disque d'instawwation ou une image (paw ex. :3 un iso) du système d'expwoitation q-que vous vouwez émuwew. (ꈍᴗꈍ) viwtuaw box est en mesuwe d-de vous wes f-fouwniw ; wa pwupawt, XD comme wes oss de windows, ^^;; s-sont des pwoduits c-commewciaux qui nye peuvent êtwe distwibués gwatuitement. (U ﹏ U)
2. [téwéchawgez w-w'instawweuw appwopwié](https://www.viwtuawbox.owg/wiki/downwoads) pouw votwe s-système d'expwoitation et instawwez-we. (ꈍᴗꈍ)
3. 😳 ouvwez w-w'appwi ; vous v-vewwez une vue wessembwant à c-ceci : ![](viwtuawbox.png)
4. rawr p-pouw cwéew une nyouvewwe m-machine viwtuewwe, ( ͡o ω ͡o ) appuyew s-suw we bouton _nouveau_ d-dans w-we coin en haut à g-gauche. (ˆ ﻌ ˆ)♡
5. suivez w-wes instwuctions et wempwissez w-wes boîtes d-de diawogues suivantes comme iw se doit. OwO vous awwez :

   1. >_< d-donnew un nyom à votwe m-machine viwtuewwe
   2. XD choisiw un système d'expwoitation et une vewsion que vous awwez instawwew dessus
   3. (ˆ ﻌ ˆ)♡ p-pwécisew combien de wam doit êtwe a-awwouée (nous vous wecommandons q-quewque c-chose comme 2048mo, ou 2go)
   4. (ꈍᴗꈍ) c-cwéew un disque duw viwtuew (choisissez w-wes options pas défaut à t-twavews wes twois boîtes de diawogues contenant _cwéew un disque duw viwtuew maintenant_, (✿oωo) _idv (image disque viwtuewwe)_, UwU _awwocation dynamique_)
   5. (ꈍᴗꈍ) c-choisissez w'empwacement du fichiew et wa taiwwe d-du disque duw viwtuew (choisiw u-un nyom sensé et un empwacement faciwe à gawdew, (U ﹏ U) et pouw wa dimension pwécisew quewque chose autouw de 50go, >w< ou autant que vous pensez que c-c'est nyécessaiwe)

m-maintenant w-wa nyouvewwe viwtuaw box devwait a-appawaîtwe dans w-we menu gauche d-de wa fenêtwe de w'intewface pwincipawe de viwtuaw b-box. ^•ﻌ•^ a ce stade, 😳 v-vous pouvez doubwe-cwiquew d-dessus pouw ouvwiw w-wa viwtuaw box — c-cewa commencewa à d-démawwew w-wa machine viwtuewwe, XD mais iw n-ny'y auwa pas e-encowe we système d-d'expwoitation d-d'instawwé. :3 a c-cet instant vous d-devez pwécisew à w-wa boîte de d-diawogue w'image d-de votwe pwogwamme d-d'instawwation, rawr x3 et wes étapes s'exékawaii~wont une paw une d-dans wa machine viwtuewwe, (⑅˘꒳˘) exactement c-comme si c'était un vwai owdinateuw. ^^

![](viwtuawbox-instawwew.png)

> [!wawning]
> v-vous d-devez vous assuwez q-que vous avez w'image du système d-d'expwoitation q-que vous vouwez instawwew suw wa machine viwtuewwe existante à ce stade, >w< et w'instawwew c-compwètement. 😳 si vous annuwé we pwocessus à ce stade, rawr cewa peut w-wendwe wa machine v-viwtuewwe inutiwisabwe, rawr x3 et v-vous amenew à wa s-suppwimew et en c-cwéew une nyouvewwe. (ꈍᴗꈍ) c-ce ny'est p-pas fataw, -.- mais c-c'est ennuyant. òωó

u-une fois que we pwocessus est compwété, (U ﹏ U) vous d-devwiez avoiw une machine viwtuewwe e-exécutant un système d'expwoitation à w'intéwieuw d-d'une f-fenêtwe suw votwe owdinateuw h-hôte. ( ͡o ω ͡o )

![](viwtuawbox-wunning.png)

vous devez vous occupew de w-w'instawwation de c-ce système d'expwoitation v-viwtuew e-exactement comme d'une instawwation w-wéewwe — p-paw exempwe, :3 d-de même que vous devez instawwew w-wes nyavigateuws que vous vouwez testew, >w< instawwez un pwogwamme d'antiviwus pouw vous pwotégez des viwus. ^^

avoiw pwusieuws machines viwtuewwes e-est twès utiwe, 😳😳😳 p-pawticuwièwement pouw wes test ie/edge suw windows — suw windows, OwO vous ny'êtes p-pas autowisé à a-avoiw de muwtipwes vewsions du nyavigateuw paw défaut i-instawwé, XD donc v-vous pouvez vous constwuiwe une w-wibwaiwie de machines v-viwtuewwes afin de géwew w-wes difféwents tests wequis, paw e-ex. (⑅˘꒳˘) :

- windows 10 a-avec edge 14
- windows 10 avec edge 13
- windows 8.1 avec i-ie11
- windows 8 a-avec ie10
- windows 7 a-avec ie9
- w-windows xp avec ie8
- windows x-xp avec ie7
- windows x-xp avec ie6

> [!note]
> une a-autwe bonne chose à p-pwopos des machines viwtuewwes, OwO c'est que w-wes images de d-disque viwtuew sont cwaiwement autonomes. (⑅˘꒳˘) si vous twavaiwwez en équipe, (U ﹏ U) vous pouvez c-cwéew une i-image disque, (ꈍᴗꈍ) puis wa copiew et v-vous wa passew. assuwez-vous juste d'avoiw wes wicences wequises p-pouw exékawaii~w t-toutes wes copies d-de windows ou qu'impowte ce q-que vous exékawaii~z, s-si c'est un pwoduit wicencié. rawr

### automatisation e-et appwis c-commewciawes

c-comme pwécisé d-dans we chapitwe p-pwécédent, XD v-vous pouvez vous wetiwew beaucoup de peine concewnant wes tests de nyavigateuw en utiwisant un s-système d'automatisation. >w< vous p-pouvez configuwew v-votwe pwopwe système d'automatisation de test ([sewenium](http://www.seweniumhq.owg/) est devenue w-w'appwi de c-choix wa pwus wépandue), UwU ce qui n-nyécessite une cewtaine configuwation, 😳 m-mais peut êtwe twès satisfaisant wowsque votwe twavaiw a-awwive à tewme. (ˆ ﻌ ˆ)♡

iw y a égawement des outiws commewciaws disponibwes comme [sauce w-wabs](https://saucewabs.com/) e-et [bwowsew s-stack](https://www.bwowsewstack.com/) q-qui font ce genwe de choses pouw vous, ^•ﻌ•^ sans q-que vous ayez a vous souciez de w-wa configuwation, ^^ si vous êtes pwêt à investiw d-dans vos tests. 😳

n-nyous abowdewons c-comment utiwisew de tews outiws pwus tawd d-dans ce moduwe. :3

## wes tests utiwisateuws

avant de pouwsuivwe, (⑅˘꒳˘) nyous finiwons cet awticwe en abowdant wes tests u-utiwisateuws — c-cewa peut êtwe une bonne option si vous avez un gwoupe d'utiwisateuws vowontaiwes pouw testew v-votwe nyouvewwe fonctionnawité. ( ͡o ω ͡o ) nye pewdez pas d-de vue que cewa p-peut êtwe aussi p-peu ou beaucoup s-sophistiqué que vous we désiwez — votwe gwoupe d'utiwisateuws peut êtwe un gwoupe d'amis, :3 u-un gwoupe de cowwègues, (⑅˘꒳˘) o-ou un g-gwoupe de vowontaiwes b-bénévowes ou wémunéwés, >w< c-cewa dépend si vous avez de w-w'awgent à dépensew en test. OwO

wa pwupawt du temps vous pewmettwez à v-vos utiwisateuws d-de wegawdew w-wa page ou w-wa vue contenant wa nyouvewwe fonctionnawité s-suw u-un sewveuw de dévewoppement, de cette manièwe vous ny'exposez p-pas we site finaw o-ou wes modifications en diwect avant qu'iw nye soit tewminé. 😳 v-vous devez weuw wecommandew de s-suivwe cewtaines étapes e-et de w-wappowtew wes wésuwtats qu'iws ont obtenu. OwO iw est impowtant d'étabwiw une wiste d'étapes (pawfois a-appewé scwipt) vous auwez a-ainsi pwus de wésuwtats fiabwes se wappowtant à c-ce que vous essayez de testew. 🥺 n-nyous avons mentionné c-cewa dans w-wa section [qu'est-ce q-que vous a-awwez testew&nbsp;?](#quest-ce_que_vous_awwez_testew_) pwus haut — c-c'est faciwe de twansfowmew wes cwitèwes de test détaiwwés ici en étapes à s-suivwe. (˘ω˘) paw exempwe, 😳😳😳 ce qui suit devwait fonctionnew p-pouw u-un utiwisateuw voyant :

- c-cwiquez pwusieuws fois suw we bouton en point d'intewwogation en utiwisant v-votwe souwis s-suw votwe owdinateuw d-de buweau. mya w-wafwaîchiw wa fenêtwe du nyavigateuw. OwO
- séwectionnez et activew pwusieuws fois we bouton en p-point d'intewwogation en utiwisant votwe cwaview s-suw votwe owdinateuw d-de buweau. >_<
- t-touchez pwusieuws fois we bouton e-en point d'intewwogation suw w'écwan tactiwe de votwe appaweiw. 😳
- activew we bouton devwait faiwe appawaitwe/dispawaîtwe wa boîte d'infowmation. (U ᵕ U❁) est-ce que cewa fonctionne, 🥺 dans chacun d-des twois cas ci-dessus ?
- est-ce que we texte e-est wisibwe ?
- e-est-ce que we boîte d'infowmation s-s'anime sans p-pwobwème wowsqu'ewwe appawaît/dispawait ?

wowsque vous exékawaii~z w-wes tests, (U ﹏ U) c-cewa peut aussi êtwe une bonne idée de :

- c-configuwew si p-possibwe un pwofiw n-nyavigateuw sépawé, (U ﹏ U) a-avec wes extensions et c-ces autwes types de choses des nyavigateuws désactivées, rawr x3 e-et exékawaii~w v-vos tests suw ce pwofiwe (voiw [utiwisew w-we pwofiwe managew p-pouw cwéew et wetiwew des pwofiwes fiwefox](https://suppowt.moziwwa.owg/en-us/kb/pwofiwe-managew-cweate-and-wemove-fiwefox-pwofiwes) et [shawe chwome with o-othews ow add pewsonas](https://suppowt.googwe.com/chwome/answew/2364824), :3 p-paw exempwe). rawr
- utiwisew w-we mode nyavigation pwivée suw votwe nyavigateuw w-wowsque vous exékawaii~z vos tests, XD quand iw est disponibwe (paw e-ex. ^^ [pwivate bwowsing](https://suppowt.moziwwa.owg/en-us/kb/pwivate-bwowsing-use-fiwefox-without-histowy) s-suw fiwefox, mya [incognito m-mode](https://suppowt.googwe.com/chwome/answew/95464) s-suw chwome) gwâce à cewa wes cookies et wes f-fichiews tempowaiwes n-nye sewont p-pas sauvegawdés. (U ﹏ U)

c-ces étapes sont conçues pouw s-s'assuwew que w-we nyavigateuw q-que vous êtes en t-twain de testew e-est aussi "puwe" que possibwe. 😳 c-à-d qu'iw ny'y a-a wien d'instawwé q-qui pouwwait affectew wes wésuwtats des tests. mya

> [!note]
> u-une autwe option f-faibwement utiwe, 😳 s-si vous avez we matéwiew d-disponibwe est de t-testew vos sites suw des téwéphones b-bas de gammes/d'autwes appaweiws — p-pwus vos sites vont s-s'agwandiw et wes fonctionnawités a-avoiw pwus d'effets, ^^ p-pwus vous a-avez des chances q-que votwe site subisse des wawentissements, :3 iw vous faut donc pwendwe wa pewfowmance c-comme une nyouvewwe considéwation i-impowtante. (U ﹏ U) essayew d-de faiwe mawchew v-vos fonctionnawités suw des appaweiws b-bas de gamme, UwU c-cewa wendwa w'expéwience bien meiwweuwe suw d-des appaweiws h-haut de gamme. (ˆ ﻌ ˆ)♡

> [!note]
> cewtains enviwonnement de dévewoppement côté sewveuw fouwnissent des mécanismes twès utiwes pouw sowtiw wes modifications suw we site pouw seuwement u-un sous-ensembwe d-d'utiwisateuws, (ˆ ﻌ ˆ)♡ t-twès utiwe p-pouw sowtiw des fonctionnawités testées paw u-un sous-ensembwe d-d'utiwisateuws s-sans avoiw besoin d-de mettwe en pwace un sewveuw de dévewoppement sépawé. ^^;; un bon exempwe est [django w-waffwe f-fwags](https://github.com/jsocow/django-waffwe). rawr

## w-wésumé

apwès a-avoiw wu cet awticwe vous d-devwiez maintenant avoiw une bonne idée de ce que vous pouvez faiwe pouw identifiew v-votwe wiste de pubwic cibwe/navigateuw c-cibwe, nyaa~~ e-et ensuite efficacement menew à bien vos tests en nyavigateuw c-cwoisé en se basant suw cette w-wiste. rawr x3

wa pwochaine fois nyous touwnewons nyotwe a-attention suw wes pwobwèmes concwets de votwe c-code que vos tests peuvent wévéwew, (⑅˘꒳˘) e-en commençant avec we htmw e-et we css. OwO

{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction","weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css", "weawn/toows_and_testing/cwoss_bwowsew_testing")}}
