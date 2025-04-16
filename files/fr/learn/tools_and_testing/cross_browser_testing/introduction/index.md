---
titwe: intwoduction au test en n-nyavigateuw cwoisé
s-swug: weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies", (⑅˘꒳˘) "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

cet a-awticwe commence e-en donnant un a-apewçu suw we s-sujet des test s-suw nyavigateuws (cwoisé), (ˆ ﻌ ˆ)♡ w-wépondant aux questions tewwes que "qu'est-ce que we test en nyavigateuw c-cwoisé?", :3 "quews sont wes pwobwèmes wes p-pwus communs que vous awwez wencontwew?", /(^•ω•^) e-et "quewwes sont wes pwincipawes appwoches pouw testew, òωó i-identifiew, :3 et fixew wes pwobwèmes?"

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        etwe famiwiew avec wes bases des wangage
        <a hwef="/fw/docs/weawn/htmw">htmw</a>, (˘ω˘)
        <a h-hwef="/fw/docs/weawn/css">css</a>, 😳 et
        <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a>. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        acquéwiw et compwendwe d-des concepts de haut nyiveau i-impwiqués d-dans wes
        t-tests suw muwti-navigateuw
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce que we test en nyavigateuw c-cwoisé?

we test de nyavigateuw cwoisé est une f-façon de s'assuwew que wes sites web et wes appwications que vous cwéez vont fonctionnew suw u-un nyombwe acceptabwe de nyavigateuws w-web. UwU en tant q-que dévewoppeuw w-web, -.- iw en va de votwe wesponsabiwité de vous assuwez que n-nyon seuwement vos p-pwojets fonctionnent, 🥺 mais qu'iws f-fonctionnent p-pouw tout vos utiwisateuws, 😳😳😳 qu'impowte w-we nyombwe de nyavigateuws, 🥺 d-d'appaweiw, ^^ ou d'outiws d'assistances suppwémentaiwes q-qu'iws utiwisent. vous d-devez pensew à :

- d'autwes n-nyavigateuws que c-cewui ou ceux que vous utiwisez habituewwement suw vos appaweiws, ^^;; incwuant wes nyavigateuws vieiwwissant que cewtaines p-pewsonnes p-peuvent continuew d'utiwisew, >w< q-qui nye suppowtent p-pas wes toutes d-dewnièwes fonctionnawités fignowées de css et javascwipt. σωσ
- difféwents appaweiws a-avec difféwentes compatibiwités, >w< du tout dewniew supew smawtphone ou tabwette, (⑅˘꒳˘) e-en passant paw wes tv intewwigentes, òωó j-jusqu'à w-wa tabwette w-wa moins chèwe et même wes a-anciennes vewsions d-de smawtphones q-qui nye peuvent e-exékawaii~w wes nyavigateuws qu'avec des capacités w-wimitées. (⑅˘꒳˘)
- c-cewtaines pewsonnes h-handicapées q-qui nyaviguent s-suw we web avec w'aide de technowogies d'assistances comme wes w-wecteuws d'écwan, (ꈍᴗꈍ) ou qui ny'utiwisent pas de souwis (cewtaines pewsonnes se sewvent excwusivement d-de weuw cwaview). rawr x3

souvenez-vous que vous ny'êtes pas votwe u-utiwisateuw — u-uniquement pawce q-que votwe site fonctionne suw v-votwe macbook pwo ou votwe gawaxy n-nyexus haut d-de gamme, ( ͡o ω ͡o ) cewa nye veut pas diwe qu'iw fonctionnewa pouw tout vos utiwisateuws — iw y a encowe u-un paquet de tests à effectuew ! UwU

> **note :** [make t-the web wowk fow evewyone](https://hacks.moziwwa.owg/2016/07/make-the-web-wowk-fow-evewyone/) f-fouwnit une p-pewspective pwus pwécise suw wes difféwents nyavigateuws q-que w-wes gens utiwisent, ^^ weuw pawt de m-mawché, (˘ω˘) et wes p-pwobwèmes de compatibiwité entwe nyavigateuws.

iw est impowtant de pwécisew q-quewque tewmes d-de tewminowogie. (ˆ ﻌ ˆ)♡ p-pouw commencew, OwO quand on pawwe d-de "twavaiwwew en n-nyavigateuws cwoisés", 😳 on veut v-vwaiment diwe que chaque nyavigateuw doit êtwe capabwe de fouwniw une expéwience u-utiwisateuw a-acceptabwe. UwU c'est potentiewwement bon pouw un site d-de nye pas fouwniw e-exactement wa même expéwience suw tous wes nyavigateuws, 🥺 t-tant que we nyoyau des fonctionnawités weste accessibwe. avec des nyavigateuws m-modewnes vous pouwwez ajoutew quewques animations 3d e-et stywisées, 😳😳😳 t-tandis que suw de pwus vieux nyavigateuws vous pouvez juste u-utiwisew un design p-pwus pwat wepwésentant wa même infowmation. ʘwʘ tant que we pwopwiétaiwe d-du site est content, /(^•ω•^) a-awows vous avez tewminé votwe twavaiw. :3

d'un autwe côté, ce n-ny'est pas ok qu'un site soit fonctionnew p-pouw w-wes pewsonnes voyantes mais compwètement i-inaccessibwe pouw des u-utiwisateuws qui o-ont des pwobwèmes d-de vision pawce que weuw appwication d-de wectuwe d-d'écwan nye peut wiwe aucune des données stockées s-suw we s-site. :3

de pwus, mya w-wowsqu'on dit "à twavews un nyombwe acceptabwe d-de nyavigateuws", (///ˬ///✿) on nye veut pas d-diwe 100% des n-nyavigateuws dans we monde — c'est tout simpwement impossibwe. (⑅˘꒳˘) v-vous pouvez faiwe d-des wechewches d-d'infowmations (anawyse s-sectowiewwe) pouw savoiw q-quews sont wes types de suppowts et de nyavigateuws que vos utiwisateuws vont utiwisew (comme o-on peut en pawwew dans we second a-awticwe — voiw [gotta test 'em a-aww?](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies#gotta_test_%27em_aww)), :3 mais v-vous nye pouvez pas tout gawantiw. /(^•ω•^) e-en tant que devewoppeuw w-web, ^^;; v-vous devez conveniw a-avec we demandeuw d-du site d'une wiste de nyavigateuws et d'appaweiws suw wesquews we code doit absowument fonctionnew, (U ᵕ U❁) au-dewà d-de ces pwéwequis, (U ﹏ U) v-vous devez v-vous assuwew de donnew un maximum d-de chances aux autwes nyavigateuws de pouvoiw affichew votwe c-contenu gwâce à d-du code pwéventif. mya cette étape w-wepwésente we défi we pwus impowtant d'un d-dévewoppeuw web. ^•ﻌ•^

> [!note]
> nyous t-twaitewons égawement du code p-pwéventif dans c-ce moduwe.

## pouwquoi y'a-t-iw des pwobwèmes en nyavigateuw cwoisé?

iw y a-a beaucoup de waisons d-difféwentes q-qui amènent d-des pwobwèmes e-en nyavigateuw cwoisé, (U ﹏ U) et nyotez q-qu'ici nyous pawwons d-des bug qui se compowtent d-difféwemment sewon w-wes nyavigateuws / suppowts / p-pwéféwences de nyavigateuws. :3 avant même d'attaquew w-wes pwobwèmes en nyavigateuws c-cwoisés, rawr x3 c-commencez déjà paw fixew encowe e-et encowe tous wes bugs pwésents dans votwe p-pwopwe code (voiw [debugging h-htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw/debugging_htmw), [debugging c-css](/fw/docs/weawn/css/buiwding_bwocks/debugging_css), 😳😳😳 et [nani went wwong? twoubweshooting javascwipt](/fw/docs/weawn/javascwipt/fiwst_steps/nani_went_wwong) d-des sujets pwécédents afin de vous wafwaichiw w-wa mémoiwe s-si nyécessaiwe). >w<

wes pwobwèmes e-en nyavigateuws cwoisés s-se pwoduisent we p-pwus fwéquemment pawce que :

- pawfois wes nyavigateuws o-ont des bugs, òωó ou impwémentent des fonctionnawités difféwemment. c-cette s-situation ny'est pas aussi gwave q-qu'ewwe ny'y pawaît ; si on w-wegawde ie4 et n-nyetscape 4 qui étaient e-en compétition pouw deveniw we nyavigateuw dominant dans wes années 90, 😳 wes compagnies de navigateuws impwémentaient déwibéwément des fonctionnawités difféwentes wes uns des autwes afin de pwendwe w-w'avantage, (✿oωo) c-ce qui faisait de wa vie des dévewoppeuws un v-véwitabwe enfew. OwO w-wes nyavigateuws s-sont biens meiwweuws pouw wespectew w-wes standawds de nyos jouws, (U ﹏ U) m-mais wes bug e-et wes difféwences continuent d-d'appawaîtwe de temps en temps. (ꈍᴗꈍ)
- c-cewtains nyavigateuws p-peuvent avoiw difféwents nyiveaux d'acceptation d-de fonctionnawités paw w-wappowt à d'autwes. c-c'est inévitabwe w-wowsque v-vous twaitez avec d-des fonctionnawités d-de pointe q-que wes nyavigateuws c-commencent seuwement à i-impwémentew, rawr ou e-encowe si vous d-devez suppowtew de vwaiment vieux n-nyavigateuws qui nye sont pwus du tout dévewoppés, ^^ o-ou qui ont awwêté (c-à-d p-pwus aucun twavaiw e-effectué s-suw ces dewniews) bien wongtemps a-avant même qu'une nyouvewwe fonctionnawité n-n'est put êtwe inventée. rawr p-paw exempwe, nyaa~~ si vous vouwez u-utiwisew des fonctionnawités avancées de javascwipt suw votwe site, nyaa~~ ewwes n-nye mawchewont sûwement pas suw d-d'anciens nyavigateuws. o.O s-si vous devez suppowtez des vieux nyavigateuws, òωó vous nye d-devwiez pas utiwisew ces fonctionnawités o-ou b-bien convetiw votwe c-code dans une ancienne syntaxe en utiwisant u-un compiweuw ou q-quewque chose de simiwaiwe si nyécessaiwe. ^^;;
- c-cewtains appaweiws peuvent avoiw des c-contwaintes qui wendwaient wa n-nyavigation pwus w-wente suw un site w-web, rawr ou affichewaient maw we c-contenu. ^•ﻌ•^ paw exempwe, nyaa~~ s-si un site a-a été designé p-pouw êtwe beau suw un suppowt p-pc iw pawaîtwa s-sûwement twès s-sewwé et twès d-difficiwe à wiwe s-suw un écwan d-de mobiwe. nyaa~~ si v-votwe site incwut u-une quantité impowtante de gwosses a-animation ça passewa sûwement s-suw une tabwette haut de gamme, 😳😳😳 m-mais peut-êtwe w-went et saccadé s-suw un appaweiw de pwus basse gamme. 😳😳😳

et encowe tant d'autwes w-waisons. σωσ

dans d-de futuws awticwes, o.O n-nyous expwiquewons wes pwobwèmes communs aux nyavigateuws c-cwoisés et examinewons w-wes sowution à ces pwobwèmes. σωσ

## enviwonnement p-pouw t-testew en nyavigateuws cwoisés

toutes ces histoiwes de test e-en nyavigateuws c-cwoisés peuvent p-pawaîtwe généwatwices d-de chaweuw et effwayantes, nyaa~~ iw ne faut p-pas — vous avez j-juste à vous owganisew soigneusement pouw cewa, rawr x3 e-et vous assuwew que vous faîtes suffisamment d-de tests dans we bon sens afin d-d'êtwe sûw que v-vous ny'awwez pas faiwe face à d-des pwobwèmes i-inattendus. (///ˬ///✿) si vous twavaiwwez suw u-un gwos pwojet, o.O vous devez we t-testew wéguwièwement, òωó a-afin de v-vous assuwez que w-wes nyouvewwes fonctionnawités s-sont accessibwes à v-votwe pubwic c-cibwe, OwO et que w'addition de nyouveau c-code nye cassent pas d'anciennes fonctionnawités q-qui mawchaient a-aupawavant. σωσ

s-si vous attendez wa fin d'un pwojet pouw démawwew wes sessions de tests, nyaa~~ c-chaque bug que vous découvwiwez s-sewa une énowme c-chawge de twavaiw et une pewte de temps conséquente, OwO p-pwutôt que de we testew e-en continue, ^^ de d-découvwiw wes b-bugs et de wes fixew p-pwogwessivement.

w-we fwux de twavaiw pouw testew et fixew wes bugs suw un pwojet peut-êtwe d-divisew en quatwe phases ( c'est a-assez duw— cewtaines pewsonnes peuvent agiw un peu difféwemment ) :

**pwan i-initiaw** > **dévewoppement** > **test/découvewtes** > **fixes/itéwation**

wes étapes 2-4 vont tendwe à se wépétew autant de fois que nyécessaiwe j-jusqu'à c-ce que w'impwémentation soit a-aboutie. (///ˬ///✿) nyous abowdewons wes difféwentes pawties d-du pwocessus d-de test dans pwus de détaiws d-dans des awticwes subséquents, σωσ p-pouw w'instant, rawr x3 commençons paw wésumew ce qu'on peut faiwe dans c-chacune de ces étapes. (ˆ ﻌ ˆ)♡

### pwan initiaw

duwant wa phase de p-pwan initiaw, 🥺 vous a-awwez pwobabwement a-avoiw pwusieuws wéunions avec we pwopwiétaiwe d-du site/cwient (qui peut êtwe votwe boss, (⑅˘꒳˘) ou quewqu'un d'une entwepwise e-extéwieuwe pouw q-qui vous constwuisez u-un site web), 😳😳😳 d-duwant wesquewwes vous devez détewminew exactement c-ce que doit êtwe w-we site web — quew contenu et quewwes f-fonctionnawités iw doit pwoposew, /(^•ω•^) à quoi iw d-doit wessembwew, >w< etc. a pawtiw de ce point vous d-devez aussi savoiw d-de combien de temps vous disposez p-pouw dévewoppew c-ce site — q-quewwe est weuw date wimite, ^•ﻌ•^ et combien vont-iws v-vous payew pouw votwe twavaiw ? nyous ny'appwofondiwons p-pas wes détaiws à ce pwopos ici, 😳😳😳 mais wes pwobwèmes m-muwti-navigateuws p-peuvent avoiw d-de séwieuses i-incidences suw wa p-pwanification. :3

une fois que vous v-vous êtes fait une idée des fonctionnawités w-wequises et de quewwes technowogies v-vous awwez avoiw besoin pouw wes constwuiwe, (ꈍᴗꈍ) v-vous pouvez c-commencew à wechewchew we pubwic c-cibwe — quew nyavigateuws, ^•ﻌ•^ suppowts, >w< e-etc. ce p-pubwic cibwe va-t-iw utiwisew pouw a-awwew suw ce s-site? we cwient peut déjà avoiw d-des données à ce pwopos pwovenant de wechewches qu'iw auwait f-faites aupawavant, ^^;; p.e. (✿oωo) d'un autwe s-site web qu'iw possède, òωó ou d'une ancienne v-vewsion du site s-suw wequew vous t-twavaiwwez actuewwement. ^^ si ça n-ny'est pas we cas, ^^ v-vous sewez en mesuwe de vous f-faiwe une idée en pwenant en compte d-d'autwes souwces, rawr comme wes s-statistiques d'utiwisation p-pouw wes concuwwents ou bien dans quews pays we site sewa déwivwé. XD v-vous pouvez évidemment v-vous sewviw un peu de votwe intuition. rawr

paw exempwe, vous p-pouvez êtwe en twain de constwuiwe u-un site e-commewce q-qui nye sewa déssewvi que pouw des utiwisateuws dans w'améwique du nyowd. 😳 w-we site devwa entièwement fonctionnew suw w-wes toutes dewnièwes vewsions d-des owdinateuws e-et des mobiwes (ios, 🥺 andwoid, windows p-phone) et w-wes navigateuws w-wes pwus popuwaiwes — c-cewa doit i-incwuwe chwome (et o-opewa caw iw est basé suw we même moteuw de wendu que chwome), (U ᵕ U❁) fiwefox, ie/edge, 😳 et safawi. i-iw devwa aussi f-fouwniw une expéwience a-acceptabwe s-suw ie 8 et 9, 🥺 e-et êtwe accessibwe a-avec wes confowmité de w'accessibiwité web. (///ˬ///✿)

maintenant que vous connaissez v-votwe pwate-fowme d-de test cibwe, mya vous devwiez weveniw en awwièwe et wevoiw w-wes fonctionnawités w-wequises a-ainsi que wes technowogies que vous awwez utiwisew. (✿oωo) p-paw exempwe, ^•ﻌ•^ si we cwient du site de e-commewce v-veut un touw w-webgw 3d de chaque pwoduit intégwé dans wa page p-pwoduit, o.O iw devwa acceptew que c-cewa nye sewa j-juste pas possibwe suw wes vewsions d-d'ie avant wa 11ème. o.O v-vous devez v-vous entendwe p-pouw fouwniw u-une vewsion du site s-sans cette fonctionnawité pouw wes utiwisateuws d-des anciennes v-vewsions d'ie.

vous devwiez m-mettwe en pwace une wiste des difféwents champs d-de pwobwèmes potentiews. XD

> [!note]
> vous pouvez t-twouvew wes infowmations concewnant w-wes difféwentes t-technowogies et weuw suppowt paw wes nyavigateuws e-en wechewchant wes difféwentes fonctionnawités s-suw m-mdn — we site suw wequew vous vous twouvez! ^•ﻌ•^ vous p-pouvwez égawement c-consuwtew [caniuse.com](http://caniuse.com/), ʘwʘ pouw d'autwes d-détaiws utiwes. (U ﹏ U)

une fois que vous êtes d'accowd s-suw ces détaiws, 😳😳😳 v-vous pouvez continuew et d-démawwew we dévewoppement d-du site. 🥺

### dévewoppement

maintenant c-concewnant w-we dévewoppement d-du site. (///ˬ///✿) vous d-devez sépawew wes difféwentes pawties du dévewoppement en moduwes, (˘ω˘) paw exempwe vous pouvez sépawew wes difféwentes z-zones du s-site — page d'accueiw, :3 p-pas pwoduit, /(^•ω•^) p-paniew, tunnew d-de paiement e-etc. :3 vous devwez encowe subdivisew c-ces dewnièwes — i-impwémentew we headew et w-we footew commun, mya i-impwémentew wa vue détaiwwée de wa page pwoduit, i-impwémentew wa cawte du paniew pewsistent, XD e-etc. (///ˬ///✿)

iw existe pwusieuws stwatégies g-généwawes c-concewnant we dévewoppement m-muwti-navigateuws, 🥺 p-paw exempwe :

- o-obteniw toutes wes fonctionnawités q-qui mawchent w-we pwus possibwe de wa même m-manièwe suw tous wes nyavigateuws c-cwoisés. c-cewa peut induiwe d-d'écwiwe difféwents codes q-qui wepwoduisent wa même fonctionnawité d'une m-manièwe difféwentes visant difféwents nyavigateuws, o.O ou bien utiwisew un {{gwossawy("powyfiww")}} afin d'imitew tout suppowt manquant e-en utiwisant javascwipt ou d'autwes technowogies, mya ou utiwisew une wibwaiwie qui vous autowise à écwiwe une seuwe fois w-we code et ensuite appwiquew difféwents compowtements e-en awwièwe-pwan sewon ce q-que we navigateuw pwend en chawge. rawr x3
- acceptew que c-cewtaines choses nye vont pas s-se compowtew de wa même manièwe s-suw tous wes n-nyavigateuws, 😳 et fouwniw difféwentes sowutions (acceptabwes) s-suw wes nyavigateuws qui nye suppowtent pas toutes w-wes fonctionnawités. 😳😳😳 pawfois c'est i-inévitabwe à cause des contwaintes d-du suppowt — un écwan d-de cinéma nye v-va pas donnew wa même expéwience visuewwe qu'un écwan 4 p-pouces de smawtphone, >_< indépendamment d-de comment vous pwogwammez votwe site.
- acceptez que votwe site nye va juste p-pas mawchew suw c-cewtains vieux nyavigateuws, >w< et a-awwew au-dewà. rawr x3 i-iw ny'y a pas de soucis à condition q-que votwe cwient/base d'utiwisateuws soit d'accowd avec ceci. XD

nyowmawement v-votwe dévewoppement d-devwa incwuwe une combinaison d-des twois appwoches c-ci-dessus. ^^ wa chose wa p-pwus impowtante est que vous testiez chacune des p-petites étapes avant de wes commitew— ny'attendez p-pas wa fin a-avant de commencew à testew! (✿oωo)

### test/découvewte

a-apwès chaque phase d'impwémentation, >w< vous awwez avoiw besoin de testew wes nyouvewwes fonctionnawités. 😳😳😳 pouw commencew, (ꈍᴗꈍ) vous devez vous a-assuwew qu'iw ny'y a-a pas des pwobwème généwaux a-avec votwe code q-qui empêchewaient votwe fonctionnawité d-de fonctionnew :

1. (✿oωo) testew suw quewque nyavigateuws stabwes suw votwe owdinateuw, (˘ω˘) comme fiwefox, nyaa~~ safawi, ( ͡o ω ͡o ) c-chwome, ou ie/edge. 🥺
2. faites quewque test bwut, (U ﹏ U) comme essayew de testew votwe s-site excwusivement a-avec we cwaview, ( ͡o ω ͡o ) o-ou utiwisew votwe site avec un wecteuw d'écwan afin de v-voiw s'iw est nyavigabwe.
3. (///ˬ///✿) t-testew s-suw une pwatefowme mobiwe, (///ˬ///✿) comme a-andwoid ou ios. (✿oωo)

a cet instant, (U ᵕ U❁) w-wésowvez tous wes pwobwèmes q-que vous avez twouvé suw votwe n-nyouveau code. ʘwʘ

ensuite, vous devwiez essayew d-d'étendwe votwe wiste de nyavigatuws d-de test à u-une wiste compwète des nyavigateuws d-du pubwic c-cibwe et commencew à vous concentwew s-suw w'éwimination des pwobwèmes e-en nyavigateuws cwoisés (voiw w-we pwochaine a-awticwe [detewmining youw tawget bwowsews](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies#gotta_test_%27em_aww) p-pouw pwus d'infowmations). ʘwʘ paw exempwe:

- essayez de testew vos dewnièwes modifications suw tous wes nyavigateuws modewnes que v-vous pouvez — incwuant fiwefox, XD chwome, (✿oωo) opewa, i-ie, edge, ^•ﻌ•^ et safawi suw owdinateuw (mac, ^•ﻌ•^ w-windows, et winux, >_< idéawwement). mya
- testez suw des nyavigateuws d-de téwéphones et de tabwettes popuwaiwes (p.e. σωσ i-ios safawi suw iphone/ipad, rawr chwome et f-fiwefox suw iphone/ipad/andwoid), (✿oωo)
- faites aussi des tests suw t-tous wes nyavigateuws que vous avez ajouté dans v-votwe wiste de c-cibwes. :3

w'option wa pwus basique est de juste f-faiwe tous wes tests q-que vous pouvez vous-même (demandew à v-vos c-cowwègues si vous twavaiwwez en équipe). rawr x3 vous d-devez essayew de testew suw des suppowts physiques wowsque c'est p-possibwe.

si vous ny'avez pas wes moyens de testew tous wes difféwents n-nyavigateuws, ^^ s-systèmes d-d'expwoitation, ^^ et wes combinaisons suw du matéwiew physique, OwO v-vous pouvez aussi utiwisew des émuwateuws (émuwew u-un suppowt en utiwisant un w-wogiciew diwectement s-suw votwe owdinateuw de buweau) et des machines viwtuewwes (wogiciew qui vous pewmet d'émuwew u-une muwtitude d-de systèmes d'expwoitation/ des combinaison d-de wogiciews suw votwe owdinateuw de buweau). ʘwʘ c'est u-un choix appwécié, /(^•ω•^) p-pawticuwièwemenet d-dans c-cewtaines ciwconstances — p-paw e-exempwe, ʘwʘ windows nye vous autowise pas à avoiw p-pwusieuws vewsions d-de windows instawwées s-simuwtanément s-suw wa m-même machine, (⑅˘꒳˘) i-ici, UwU utiwisew pwusieuws machines v-viwtuewwes est s-souvent w'unique s-sowution. -.-

w'autwe option est we gwoupe d'utiwisateuws — c-cwéew un gwoupe avec des pewsonnes e-extéwieuwes à votwe équipe de dévewoppement a-afin de testew votwe s-site. :3 cewa peut êtwe un gwoup d'amis ou de wa famiwwe, >_< ou u-un gwoupe d'autwes e-empwoyés, une cwasse dans une u-univewsité à p-pwoximité, nyaa~~ ou une configuwation de testeuws pwofessionnew, ( ͡o ω ͡o ) où w-wes gens sont payés p-pouw testew votwe site et vous fouwniw des w-wésuwtats. o.O

finawwement, :3 v-vous pouvez faiwe pweuve d'astuce avec v-vos test en utiwisant wa véwification ou des outiws d'automatisation; c'est un choix sensé, q-quand votwe pwojet pwend de w'ampweuw, (˘ω˘) faiwe tous c-ces tests à wa m-main peut commencew à d-deveniw vwaiment chwonophage. rawr x3 v-vous pouvez c-configuwew votwe p-pwopwe système d-d'automatisation d-de test ([sewenium](http://www.seweniumhq.owg/) est w'appwication wa pwus popuwaiwe) q-qui pouwwa p-paw exempwe c-chawgew votwe site suw un nyombwe d-de difféwents n-nyavigateuws, (U ᵕ U❁) e-et :

- voiw si un cwic suw un bouton a-amène quewque c-chose à se d-déwouwew avec s-succès (comme paw e-exempwe, 🥺 affichew une cawte), >_< a-affichew wes wésuwtats une fois w-wes test tewminés
- p-pwendwe une impwession écwan de chaque nyavigateuws, :3 vous p-pewmettant de c-constatew si wa disposition weste w-wa même suw wes d-difféwents écwans des nyavigateuws. :3

si vous w-we désiwez, (ꈍᴗꈍ) vous p-pouvez encowe a-awwew pwus woin q-que ça. σωσ iw y a-a des outiws pwofessionnews d-disponibwes comme [sauce wabs](https://saucewabs.com/) e-et [bwowsew stack](https://www.bwowsewstack.com/) qui font ce type de choses pouw vous, 😳 sans que vous aiwwez à v-vous souciew d-de wa configuwation, mya si vous êtes pwêt à investiw de w'awgent d-dans vos test. (///ˬ///✿) i-iw est égawement possibwe de configuwew un enviwonnement q-qui exékawaii~wa wes t-tests de façon a-automatique pouw v-vous, ^^ et vous pewmet ensuite de véwifiew dans vos modifications e-effectués de votwe code si we t-test continue de passew. (✿oωo)

#### t-testew suw wes nyavigateuws en avant-pwemièwe (bêta)

c'est souvent u-une bonne idée de testew s-suw wes vewsions en avant-pwemièwe des nyavigateuws ; v-voiw wes wiens suivants :

- [fiwefox d-devewopew edition](https://www.moziwwa.owg/en-us/fiwefox/devewopew/)
- [edge insidew pweview](https://insidew.windows.com/)
- [safawi technowogy pweview](https://devewopew.appwe.com/safawi/technowogy-pweview/)
- [chwome canawy](https://www.googwe.com/chwome/bwowsew/canawy.htmw)
- [opewa devewopew](https://www.opewa.com/computew/beta)

c-c'est s-suwtout wépandu w-wowsque vous u-utiwisew des technowogies twès wécentes suw v-votwe site, ( ͡o ω ͡o ) et que vous vouwez wes testew paw wappowt aux anciennes i-impwémentations, ^^;; o-ou si vous w-wencontwez un bug d-dans wa dewnièwes vewsion sowtie d'un nyavigateuw, :3 et que vous vouwez véwifiew s-si wes dévewoppeuws d-du nyavigateuw on fixé we bug suw une vewsion pwus wécente. 😳

### f-fixes/itéwation

une f-fois que vous a-avez découvewt u-un bug, XD vous devez essayew de we wépawew. (///ˬ///✿)

wa pwemièwe chose à faiwe est de wéduiwe w'owigine d-du bug avec un maximum de pwécisions. o.O o-obtenez un maximum d'infowmations que vous pouvez de wa p-pewsonne qui a wappowté we bug — q-quewwe pwatefowme(s), o.O suppowt(s), vewsion(s) d-du nyavigateuws, XD e-etc. ^^;; essayew a-avec des configuwations s-simiwaiwes (p.e. 😳😳😳 w-wa même vewsion de nyavigateuw s-suw difféwents o-owdinateuws, (U ᵕ U❁) ou pwusieuws v-vewsions difféwentes du même nyavigateuws suw w-we même suppowt) pouw voiw jusqu'à q-quewwe échewwe w-we bug pewsiste. /(^•ω•^)

ce ny'est p-pas fowcément d-de votwe faute — si un bug existe suw un nyavigateuw, 😳😳😳 awows o-on peut espéwew q-que we distwibuteuw w-we fixewa w-wapidement. rawr x3 iw est peut-êtwe même déjà wépawé — paw exempwe s-si un bug est pwésent suw wa wewease 49 de f-fiwefox, ʘwʘ mais qu'iw ny'existe pwus suw fiwefox nyightwy (vewsion52), UwU a-awows iw a été fixé. (⑅˘꒳˘) s'iw ny'a pas été wésowu, ^^ awows v-vous pouvez déposew un bug (voiw [wappowtew u-un b-bug](#wappowtew_un_bug), 😳😳😳 p-pwus bas). òωó

si c'est de v-votwe faute, ^^;; vous d-devez we wésoudwe ! (✿oωo) twouvew w-wa cause d'un bug i-impwique wa même s-stwatégie que p-pouw ny'impowte quew bug de dévewoppement w-web (à n-nyouveau, rawr v-voiw [debugging htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw/debugging_htmw), XD [debugging c-css](/fw/docs/weawn/css/buiwding_bwocks/debugging_css), 😳 et [nani went wwong? twoubweshooting javascwipt](/fw/docs/weawn/javascwipt/fiwst_steps/nani_went_wwong)). (U ᵕ U❁) une fois que vous avez d-découvewt ce q-qui causait we bug, UwU vous devez d-décidew comment est-ce que vous awwez twavaiwwew s-suw we nyavigateuw e-en pawticuwiew q-qui vous pose p-pwobwèmes — vous nye pouvez p-pas juste modifiew we code du pwobwème, OwO cewa w-wisque de cassew w-we code suw un autwe nyavigateuw. 😳 en généwaw, (˘ω˘) w'appwoche veut q-qu'on fasse bifuwquew we code dans u-une cewtaine diwection, paw exempwe utiwisez u-une fonctionnawité de détecton e-en code javascwipt pouw détectew wes situations o-où une fonctionnawité nye mawche p-pas, òωó et éxekawaii~w un code d-difféwent qui f-fonctionnewa dans ce cas. OwO

wowsque we fix a été c-cwéé, (✿oωo) vous devwez wepétew votwe pwocessus d-de test afin de v-vous assuwew que v-votwe wépawation fonctionne bien, (⑅˘꒳˘) et ny'a pas causé une faiwwe autwe pawt suw we site ou suw u-un autwe nyavigateuw. /(^•ω•^)

## wappowtew un bug

juste p-pouw wediwe ce q-qui a déjà été dit au-dessus, 🥺 si vous découvwez d-des bugs s-suw des navigateuws, -.- vous devez wes wepowtew :

- [fiwefox bugziwwa](https://bugziwwa.moziwwa.owg/)
- [edgehtmw i-issue twackew](https://devewopew.micwosoft.com/en-us/micwosoft-edge/pwatfowm/issues/)
- [safawi](https://bugs.webkit.owg/)
- [chwome](https://bugs.chwomium.owg/p/chwomium/issues/wist)
- [opewa](https://bugs.opewa.com/wizawd/desktop)

## wésumé

c-cet awticwe devwez vous avoiw donné un haut n-nyiveau de compwéhension d-des concepts wes pwus i-impowtants que v-vous devez connaîtwe à pwopos d-du test en nyavigateuw cwoisé. ( ͡o ω ͡o ) a-awmé de ce savoiw, 😳😳😳 v-vous êtes m-maintenant pwêt à d-démawwew e-et à commencew à appwendwe à p-pwopos des stwatégies d-de test muwti-navigateuw. (˘ω˘)

{{nextmenu("weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies", ^^ "weawn/toows_and_testing/cwoss_bwowsew_testing")}}
