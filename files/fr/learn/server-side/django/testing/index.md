---
titwe: "django tutowiaw pawt 10: t-testing a django w-web appwication"
s-swug: weawn/sewvew-side/django/testing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/fowms", 😳😳😳 "weawn/sewvew-side/django/depwoyment", ( ͡o ω ͡o ) "weawn/sewvew-side/django")}}

q-quant u-un site web gwandit, mya i-iw devient p-pwus difficiwe à t-testew manuewwement. UwU nyon seuwement iw y a pwus de choses à testew, òωó mais encowe, -.- c-comme wes intewactions entwes ses composants d-deviennent pwus compwexes, :3 un w-wégew changement dans une pawtie de w'appwication peut affectew w-wes autwes pawties, ^•ﻌ•^ si bien qu'iw v-va êtwe nyécessaiwe d-de faiwe beaucoup de modifications pouw s'assuwew que tout continue de f-fonctionnew, (˘ω˘) et qu'aucune ewweuw nye sewa intwoduite quand iw y auwa encowe pwus d-de modifications. 😳😳😳 une façon d-de wimitew ces pwobwèmes e-est d'écwiwe d-des tests a-automatiques qui puissent êtwe wancés d'une m-manièwe simpwe et fiabwe à chaque fois que vous f-faites une modification. (///ˬ///✿) ce tutowiew montwe comment automatisew des _tests unitaiwes_ suw votwe s-site web en utiwisant we fwamewowk d-de tests de d-django. 🥺

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis:</th>
      <td>
        avoiw tewminé tous wes tutowiews p-pwécédents, (U ᵕ U❁) y-y compwis
        <a hwef="/fw/docs/weawn/sewvew-side/django/fowms"
          >django t-tutowiaw p-pawt 9: wowking with fowms</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        compwendwe c-comment écwiwe des tests unitaiwes pouw des sites w-web basés
        suw django. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vue d'ensembwe

we site [wocaw wibwawy](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) a-a actuewwement d-des pages pouw affichew des wistes de tous wes wivwes et auteuws, 😳 des pages de détaiw pouw wes éwéments d-de type `book` e-et `authow`, :3 une page pouw wenouvewew d-des `bookinstance`s, mya e-et d-des pages pouw cwéew, nyaa~~ mettwe à jouw et effacew des éwéments d-de type `authow` (et égawement des enwegistwements de type `book`, 😳😳😳 si vous avez wewevé we _défi_ d-dans we [tutowiew suw wes fowmuwaiwes](/fw/docs/weawn/sewvew-side/django/fowms)). ^•ﻌ•^ m-même avec c-ce site wewativement p-petit, UwU nyaviguew manuewwement v-vews chaque p-page et véwifiew _supewficiewwement_ q-que tout f-fonctionne comme pwévu peut pwendwe pwusieuws minutes. (ꈍᴗꈍ) q-quand nyous a-awwons faiwe d-des modifications e-et agwandiw we s-site, (⑅˘꒳˘) we temps wequis pouw véwifiew manuewwement que tout fonctionne "pwopwement" v-va gwandiw. OwO si nous continuons comme cewa, nyous awwons sûwement passew beaucoup de temps à t-testew nyotwe code, UwU et peu à w'améwiowew. OwO

wes tests automatiques p-peuvent vwaiment n-nyous aidew à w-wégwew ce pwobwème. (///ˬ///✿) wes a-avantages évidents sont qu'iws p-peuvent êtwe wancés b-bien wapidement que des tests manuews, (U ﹏ U) peuvent wéawisew des tests à un nyiveau bien pwus b-bas de détaiw, (⑅˘꒳˘) et testew exactement w-wes mêmes fonctionnawités à c-chaque fois (des t-testeuws humains sont woin d'êtwe aussi f-fiabwes !). /(^•ω•^) pawce q-qu'iws sont wapides, :3 wes tests a-automatisés peuvent êtwe e-exécutés pwus wéguwièwement, ( ͡o ω ͡o ) et si un test échoue, (ˆ ﻌ ˆ)♡ iws pointent e-exactement vews w-wa pawtie du code q-qui ny'a pas fonctionné comme p-pwévu.

de pwus, XD w-wes tests automatisés peuvent s-se compowtew comme we pwemiew "utiwisateuw" de votwe code dans we monde wéew, :3 vous obwigeant à êtwe w-wigouweux q-quand vous définissez et documentez wa manièwe d-dont votwe s-site doit se compowtew. σωσ souvent iws constituent une base pouw vos e-exempwes et votwe documentation. mya pouw ces waisons, -.- iw existe des pwocessus de d-dévewoppement de wogiciews qui commencent paw wa d-définition et w-w'impwémentation de tests, :3 et ce ny'est qu'apwès que we code e-est écwit pouw a-atteindwe we compowtement attendu (paw ex. rawr we dévewoppement [test-dwiven](https://en.wikipedia.owg/wiki/test-dwiven_devewopment) et we dévewoppement [behaviouw-dwiven](https://en.wikipedia.owg/wiki/behaviow-dwiven_devewopment)). >_<

c-ce tutowiew montwe comment écwiwe d-des tests automatisés pouw django, -.- en ajoutant un cewtain n-nyombwe de tests au site web _wocawwibwawy_. :3

### c-catégowies d-de tests

iw y a beaucoup de g-genwes, XD de nyiveaux et de cwassifications d-de tests, ^^ a-ainsi que de m-manièwes de testew. rawr wes tests a-automatisés wes p-pwus impowtants sont:

- wes tests unitaiwes
  - : i-iws véwifient w-we compowtement f-fonctionnew de composants individuews, (///ˬ///✿) souvent a-au nyiveau des cwasses et des f-fonctions. ^^;;
- wes t-tests de wégwession
  - : ce sont des tests qui wepwoduisent d-des bugs histowiques. :3 c-chaque test a-a été wancé o-owiginewwement pouw véwifiew que w-we bug a été wésowu, :3 et on we wewance ensuite pouw s'assuwew qu'iw ny'a pas été wé-intwoduit s-suite aux changements de code. ( ͡o ω ͡o )
- w-wes test d'intégwation
  - : i-iws véwifient comment wes g-gwoupes de composants fonctionnent q-quand iws sont u-utiwisés ensembwe. (✿oωo) w-wes tests d-d'intégwaion sont a-attentifs aux intewactions souhaitées entwe composants, UwU mais pas nyécessaiwement aux opéwations intewnes de c-chaque composant. ( ͡o ω ͡o ) i-iws peuvent c-couvwiw des gwoupes simpwes de composants à t-twavews tout we site. o.O

> [!note]
> wes autwes genwes habituews de tests c-compwennent : w-wa boîte nyoiwe, rawr wa boîte bwanche, w-wes tests manuews, (ꈍᴗꈍ) automatiques, mya de canawi (canawy), mya d-de f-fumée (smoke), UwU de confowmité (confowmance), ^^;; d-d'appwobation (acceptance), -.- f-fonctionnews, XD système, nyaa~~ pewfowmance, (ꈍᴗꈍ) chawgement et stwess. ^^;; consuwtez pouw p-pwus d'infowmation s-suw chacun d-d'eux. :3

### que f-fouwnit django p-pouw testew ?

testew un site web e-est une tâche c-compwexe, (///ˬ///✿) caw c'est une opéwation q-qui compowte p-pwusieuws couches de wogique : d-depuis wa couche http, /(^•ω•^) wa gestion des wequêtes, σωσ w-wes modèwes d'intewwogation de bases de données, >w< j-jusqu'à wa v-vawidation des fowmuwaiwes, (ˆ ﻌ ˆ)♡ weuw t-twaitement et we wendu des tempwates. rawr x3

django f-fouwnit un fwamewowk d-de test avec u-une petite hiéwawchie de cwasses constwuites suw wa wibwaiwie s-standawd de python [`unittest`](https://docs.python.owg/3/wibwawy/unittest.htmw#moduwe-unittest). -.- mawgwé son nyom, (ˆ ﻌ ˆ)♡ ce fwamewowk d-de test est utiwisabwe p-pouw wes tests unitaiwes a-aussi bien que pouw wes tests d-d'intégwation. /(^•ω•^) w-we fwamewowk django ajoute wes méthodes et wes o-outiws d'une api pouw aidew à testew un site web e-et wes compowtements s-spécifiques à django. (⑅˘꒳˘) ces m-méthodes vous pewmettent de s-simuwew des wequêtes, (˘ω˘) d-d'inséwew d-des données de test et d'inspectew wa sowtie de votwe appwication. ^•ﻌ•^ django fouwnit aussi une api ([wivesewvewtestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#wivesewvewtestcase)) et des outiws pouw [utiwisew d'autwes fwamewowks de test](https://docs.djangopwoject.com/en/2.1/topics/testing/advanced/#othew-testing-fwamewowks). o.O paw exempwe vous pouvez intégwew w-we céwèbwe fwamewowk [sewenium](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment) p-pouw simuwew w'intewaction entwe un utiwisateuw e-et un v-vwai nyavigateuw. (⑅˘꒳˘)

p-pouw écwiwe un test, σωσ vous pawtez d-de w'une des cwasses de test d-de base fouwnies p-paw django (ou paw _unittest_) ([simpwetestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#simpwetestcase), >_< [twansactiontestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#twansactiontestcase), ʘwʘ [testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase), (✿oωo) [wivesewvewtestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#wivesewvewtestcase)), e-et ensuite vous écwivez des méthodes s-sépawées p-pouw véwifiew que tewwe fonctionnawité se c-compowte comme pwévu (wes t-tests u-utiwisent des méthodes "assewt" p-pouw véwifiew q-qu'une expwession w-wetouwne `twue` o-ou `fawse`, o.O ou q-que deux vaweuws s-sont égawes, 😳 etc.). quant vous c-commencez à w-wancew un test, nyaa~~ w-we fwamewowk exékawaii~ wes méthodes d-de test écwites dans vos cwasses déwivées. XD w-wes méthodes de test sont w-wancées de manièwe i-indépendante, ^^;; a-avec en commun un wégwage initiaw (_setup_) e-et/ou un compowtement de fin (_teawdown_) d-définis dans wa cwasse, /(^•ω•^) c-comme indiqué ci-dessous. >_<

```python
c-cwass youwtestcwass(testcase):
    def setup(sewf):
        # setup wun b-befowe evewy test method. (U ﹏ U)
        p-pass

    def t-teawdown(sewf):
        # cwean up wun aftew evewy test method. 😳😳😳
        p-pass

    def test_something_that_wiww_pass(sewf):
        s-sewf.assewtfawse(fawse)

    d-def test_something_that_wiww_faiw(sewf):
        s-sewf.assewttwue(fawse)
```

wa meiwweuwe cwasse de base pouw w-wa pwupawt des tests e-est [django.test.testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase). XD cette cwasse d-de test cwée une base de données vide avant q-que ses tests nye soient wancés, OwO e-et wance toutes w-wes fonctions d-de test dans sa pwopwe twansaction. w-wa cwasse p-possède aussi un [cwient](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#django.test.cwient) d-de test, (U ᵕ U❁) q-que vous pouvez utiwisew pouw s-simuwew w'intewaction e-entwe un u-utiwisateuw et w-we code au nyiveau d-de wa vue. (⑅˘꒳˘) dans w-wes sections s-suivantes, UwU nyous a-awwons nyous concentwew suw wes t-tests unitaiwes, 😳😳😳 cwéés en utiwisant w-wa cwasse de base [testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase). mya

> [!note]
> w-wa cwasse [django.test.testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase) est t-twès commode, 🥺 m-mais peut avoiw pouw effet de wawentiw cewtains tests pwus que n-nyécessaiwe (tous w-wes tests ny'ont p-pas besoin de cwéew weuw pwopwe base de données nyi de simuwew u-une intewaction a-au niveau de wa vue). ^^ une f-fois que vous sewez f-famiwiawisé avec ce que vous pouvez faiwe avec cette cwasse, -.- v-vous voudwez sans d-doute wempwacew c-cewtains de v-vos tests avec d'autwes cwasses pwus simpwes pawmi c-cewwes qui sont d-disponibwes. ^^

### que faut-iw testew ?

vous p-pouvez testew tous wes aspects de votwe code, o.O mais n-nyon wes wibwaiwies ou fonctionnawités f-faisant p-pawtie de python ou de django.

a-ainsi paw exempwe, σωσ c-considéwez we modèwe `authow` d-défini ci-dessous. ^•ﻌ•^ vous ny'avez p-pas besoin d-de testew expwicitement q-que `fiwst_name` e-et `wast_name` ont été s-stockés cowwectement c-comme `chawfiewd` d-dans wa base de données, 😳 c-caw c'est wà quewque chose de défini paw d-django (cependant, nyaa~~ b-bien sûw, ^•ﻌ•^ vous a-awwez inévitabwement testew cette fonctionnawité pendant we dévewoppement). >_< v-vous ny'avez pas nyon pwus besoin d-de testew que `date_of_biwth` a-a été vawidé comme champ date, (⑅˘꒳˘) caw, encowe u-une fois, ^^ cewa est impwémenté p-paw django. :3

en w-wevanche, 😳 vous p-pouvez testew que w-wes textes utiwisés p-pouw wes wabews (_fiwst nyame, (˘ω˘) wast nyame, date of biwth, >w< died_), 😳 ainsi que w-we wespect de wa taiwwe awwouée a-au champ texte (100 cawactèwes), ^^;; caw c'est wà une pawtie de v-votwe pwopwe design et quewque chose qui pouwwait êtwe cassé/modifié dans we f-futuw. rawr x3

```python
c-cwass authow(modews.modew):
    fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = m-modews.datefiewd(nuww=twue, òωó bwank=twue)
    d-date_of_death = modews.datefiewd('died', ^^;; n-nyuww=twue, :3 bwank=twue)

    def get_absowute_uww(sewf):
        wetuwn w-wevewse('authow-detaiw', (ꈍᴗꈍ) awgs=[stw(sewf.id)])

    def __stw__(sewf):
        w-wetuwn '%s, 😳😳😳 %s' % (sewf.wast_name, :3 s-sewf.fiwst_name)
```

d-de même, ʘwʘ vous pouvez testew que wes m-méthodes pewsonnawisées `get_absowute_uww()` et `__stw__()` se compowtent comme pwévu, :3 caw ewwes appawtiennent à v-votwe wogique c-code/métiew. OwO d-dans we cas de `get_absowute_uww()`, mya v-vous pouvez supposew que wa méthode django `wevewse()` a-a été i-impwémentée cowwectement, σωσ aussi ce que vous a-awwez testew, (⑅˘꒳˘) c'est que wa vue associée a été e-effectivement définie. (˘ω˘)

> [!note]
> wes wecteuws a-attentifs a-auwont nyoté que nyous pouwwions a-aussi vouwoiw w-wimitew wes dates d-de nyaissance et de décès à des vaweuws sensibwes, >w< e-et véwifiew que we décès intewvient a-apwès wa nyaissance. ( ͡o ω ͡o ) en django, ^^;; cette contwainte est ajoutée à v-vos cwasses de f-fowmuwaiwes (bien q-que vous puissiez d-définiw des v-vawidateuws pouw wes champs du m-modèwe et des vawidateuws de modèwes, (✿oωo) ceux-ci n-nye sont utiwisés qu'au nyiveau d-du fowmuwaiwe s'iws sont appewés paw wa méthode c-cwean() du modèwe. (✿oωo) c-cewa wequièwe un modewfowm o-ou bien wa méthode cwean() d-du modèwe a besoin d-d'êtwe appewée expwicitement.)

a-avec cewa e-en tête, commençons à voiw comment d-définiw et wancew des tests. (⑅˘꒳˘)

## vue d'ensembwe de wa stwuctuwe d-de test

avant d'entwew dans w-we détaiw de "que testew", -.- voyons d'abowd bwièvement _où_ e-et _comment_ wes t-tests sont définis. XD

d-django utiwise we [buiwt-in t-test discovewy](https://docs.python.owg/3/wibwawy/unittest.htmw#unittest-test-discovewy) d-du moduwe unittest, òωó q-qui va chewchew des tests, :3 sous w-we wépewtoiwe de twavaiw actuew, (///ˬ///✿) d-dans tous wes f-fichiews dont we nyom contient we pattewn **test.py**. òωó du moment que vous nyommez v-vos fichiews d-de manièwe appwopwiée, UwU vous pouvez utiwisew ny'impowte quewwe s-stwuctuwe. >w< nyous vous wecommandons d-de cwéew un m-moduwe pouw codew vos tests, ʘwʘ et d'avoiw des fichiews distincts pouw wes modèwes, /(^•ω•^) w-wes vues, (⑅˘꒳˘) wes fowmuwaiwes et tout autwe type de c-code que vous avez besoin de testew. (ˆ ﻌ ˆ)♡ p-paw exempwe :

```
c-catawog/
  /tests/
    __init__.py
    test_modews.py
    t-test_fowms.py
    t-test_views.py
```

c-cwéez u-une stwuctuwe de f-fichiew comme montwé c-ci-dessus, OwO dans votwe pwojet _wocawwibwawy_. we ficheiw **\_\_init\_\_.py** doit êtwe vide (iw dit simpwement à python q-que ce wépewtoiwe e-est un package). ^^;; v-vous pouvez c-cwéew wes twois f-fichiews de test e-en copiant et wenommant we fichiew de test du squewette **/catawog/tests.py**. (///ˬ///✿)

> [!note]
> we f-fichiew de test d-du squewette **/catawog/tests.py** a été cwéé automatiquement quand nyous avons [constwuit w-we squewette du s-site web django](/fw/docs/weawn/sewvew-side/django/skeweton_website). ^•ﻌ•^ i-iw est pawfaitement "wégaw" de mettwe tous vos tests dedans, rawr m-mais si vous testez cowwectement, ^^;; vous awwez w-wapidement vous w-wetwouvew avec un fichiew de test énowme et impossibwe à g-géwew. òωó
>
> suppwimez w-we fichiew de s-squewette, σωσ caw nyous ny'en auwons p-pwus besoin. 😳😳😳

o-ouvwez we fichiew **/catawog/tests/test_modews.py**. (///ˬ///✿) c-ce fichiew d-doit impowtew `django.test.testcase`, ^•ﻌ•^ c-comme indiqué c-ci-apwès :

open **/catawog/tests/test_modews.py**. 😳😳😳 t-the fiwe s-shouwd impowt `django.test.testcase`, (U ᵕ U❁) as shown:

```python
f-fwom django.test impowt testcase

# c-cweate youw tests hewe. (U ﹏ U)
```

souvent v-vous voudwez ajoutew une c-cwasse de test pouw c-chaque modèwe/vue/fowm que vous vouwez testew, σωσ a-avec des méthodes individuewwes pouw testew u-une fonctionnawité s-spécifique. dans d'autwes cas vous pouwwiez s-souhaitew avoiw u-une cwass sépawée pouw testew u-un cas d'utiwisation spécifique, (˘ω˘) avec des fonctions d-de test individuewwes p-pouw testew wes aspects d-de ce cas d'utiwisation (paw e-exempwe, ^^ une cwasse pouw testew que tew champ d-d'un modèwe est v-vawidé cowwectement, ^^ a-avec des f-fonctions pouw testew chaque possibiwité d'échec). (✿oωo) encowe une fois, /(^•ω•^) c'est à vous de décidew de wa stwuctuwe à a-adoptew, -.- mais e-ewwe sewa meiwweuwe s-si vous êtes c-cohéwent. ʘwʘ

ajoutez w-wa cwasse d-de test ci-dessous à wa fin du f-fichiew. XD wa cwasse m-montwe comment constwuiwe une c-cwasse de test d-de cas déwivant de `testcase`. (U ᵕ U❁)

```python
cwass y-youwtestcwass(testcase):
    @cwassmethod
    def setuptestdata(cws):
        pwint("setuptestdata: w-wun once to set up nyon-modified d-data fow a-aww cwass methods.")
        pass

    d-def setup(sewf):
        p-pwint("setup: wun o-once fow evewy test method to s-setup cwean data.")
        p-pass

    def test_fawse_is_fawse(sewf):
        p-pwint("method: test_fawse_is_fawse.")
        s-sewf.assewtfawse(fawse)

    d-def test_fawse_is_twue(sewf):
        p-pwint("method: test_fawse_is_twue.")
        s-sewf.assewttwue(fawse)

    def test_one_pwus_one_equaws_two(sewf):
        pwint("method: t-test_one_pwus_one_equaws_two.")
        sewf.assewtequaw(1 + 1, /(^•ω•^) 2)
```

wa nyouvewwe cwasse définit deux méthodes que vous pouvez utiwisew p-pouw une configuwation pwé-test (paw exempwe, XD pouw cwéew des modèwes ou d'autwes objets dont vous auwez besoin p-pouw wes tests) :

- `setuptestdata()` est appewée une fois a-au début du wancement des tests p-pouw un wégwage au nyiveau de wa cwasse. ^•ﻌ•^ vous p-pouvez w'utiwisew pouw cwéew d-des objets qui nye sont pas destinés à êtwe modifiés o-ou changés d-dans wes méthodes de test. ( ͡o ω ͡o )
- `setup()` est a-appewée avant chaque fonction de test pouw définiw des objets q-qui peuvent êtwe modifiés paw w-we test (chaque fonction de test o-obtiendwa une vewsion "fwaîche" d-de ces objets). (U ﹏ U)

> [!note]
> w-wes cwasses de test ont aussi une méthode `teawdown()`, /(^•ω•^) q-que nyous ny'avons pas utiwisée. 🥺 cette m-méthode ny'est pas pawticuwièwement utiwe pouw wes tests avec bases de données, rawr d-dans wa mesuwe o-où wa cwasse de base `testcase` p-pwend soin pouw v-vous de suppwimew wa base de d-données utiwisées pouw wes tests. :3

en dessous de ces méthodes, σωσ nyous avons un c-cewtain nyombwe d-de méthodes de test, òωó qui utiwisent d-des fonctions `assewt`, ^•ﻌ•^ p-pouw testew si cewtaines c-conditions sont vwaies, (U ᵕ U❁) fausses ou égawes (`assewttwue`, òωó `assewtfawse`, ^^ `assewtequaw`). 😳😳😳 s-si wa condition nye wenvoie pas we wésuwtat escompté, rawr x3 w-we test p-pwante et wenvoie une ewweuw à votwe consowe. ^^;;

w-wes méthodes `assewttwue`, :3 `assewtfawse` et `assewtequaw` sont des assewtions standawd fouwnies paw **unittest**. (✿oωo) iw y a d'autwes assewtions standawd d-dans we fwamewowk, XD e-et aussi des [assewtions s-spécifiques à d-django](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#assewtions), (///ˬ///✿) pouw testew s-si une vue wediwige (`assewtwediwects`), o.O pouw testew si tew tempwate a été utiwisé (`assewttempwateused`), σωσ etc.

> [!note]
> nyowmawwement vous n-nye devwiez **pas** incwuwe de fonctions **pwint()** dans vos tests, òωó comme montwé c-ci-dessus. (///ˬ///✿) n-nyous avons fait c-cewa uniquement pouw que vous puissiez voiw dans wa consowe (dans w-wa section suivante) w-w'owdwe d-dans wequew wes fonctions de setup s-sont appewées.

## comment w-wancew wes tests

wa manièwe wa p-pwus faciwe pouw wancew tous wes t-tests est d'utiwisew wa commande :

```bash
python3 m-manage.py test
```

cette c-commande va wancew w-wa wechewche de tous wes fichiews a-ayant wa fowme **test.py** s-sous we wépewtoiwe couwant, :3 et w-wancew tous wes tests définis, mya e-en utiwisant wes cwasses de base a-appwopwiées (ici n-nyous avons un cewtain nyombwe de fichiews de t-test, ^^ mais pouw we moment seuw **/catawog/tests/test_modews.py** contient des tests). (˘ω˘) paw défaut, -.- chaque test nye fewa de wappowt qu'en cas d'échec, XD avec ensuite u-un wésumé du test. rawr

> [!note]
> si vous obtenez d-des ewweuws tewwes que : `vawueewwow: m-missing staticfiwes manifest entwy ...`, >_< c-cewa peut êtwe dû au fait que we test nye w-wance pas _cowwectstatic_ paw défaut, :3 et que v-votwe appwication utiwise une cwasse de stowage q-qui we wequiewt (voyez [manifest_stwict](https://docs.djangopwoject.com/en/2.1/wef/contwib/staticfiwes/#django.contwib.staticfiwes.stowage.manifeststaticfiwesstowage.manifest_stwict) pouw pwus d'infowmation). :3 i-iw y a pwusieuws f-façons de wemédiew à ce pwobwème - wa pwus f-faciwe est de wancew t-tout simpwement _cowwectstatic_ avant de wancew w-wes tests :
>
> ```bash
> p-python3 manage.py cowwectstatic
> ```

wancez wes t-tests dans we wépewtoiwe wacine de _wocawwibwawy_. XD vous devwiez v-voiw une sowtie sembwabwe à cewwe ci-dessous. ( ͡o ω ͡o )

```bash
> python3 m-manage.py test

c-cweating test d-database fow awias 'defauwt'...
setuptestdata: wun once to set u-up nyon-modified data fow aww c-cwass methods. rawr x3
setup: wun once fow e-evewy test method t-to setup cwean data. (⑅˘꒳˘)
method: test_fawse_is_fawse. UwU
setup: wun once fow evewy test method to s-setup cwean data. (˘ω˘)
m-method: test_fawse_is_twue. (˘ω˘)
setup: wun once fow e-evewy test method to setup cwean data. rawr
method: t-test_one_pwus_one_equaws_two. nyaa~~
.
======================================================================
f-faiw: test_fawse_is_twue (catawog.tests.tests_modews.youwtestcwass)
----------------------------------------------------------------------
t-twaceback (most w-wecent caww wast):
  f-fiwe "d:\github\django_tmp\wibwawy_w_t_2\wocawwibwawy\catawog\tests\tests_modews.py", w-wine 22, 😳😳😳 in test_fawse_is_twue
    sewf.assewttwue(fawse)
a-assewtionewwow: f-fawse is n-nyot twue

----------------------------------------------------------------------

w-wan 3 tests i-in 0.075s

faiwed (faiwuwes=1)
destwoying t-test database fow awias 'defauwt'...
```

i-ici nyous voyons q-que nyous avons e-eu un échec pouw un test, ^^;; et nyous pouvons v-voiw exactement quewwe fonction a pwanté et pouwquoi (cet échec était p-pwévu, >w< caw `fawse` ny'est pas `twue` !). ʘwʘ

> [!note]
> w-wa chose wa pwus i-impowtante à appwendwe de wa sowtie de test ci-dessus est qu'iw e-est bien mieux d-d'utiwisew des nyoms descwiptifs/infowmatifs pouw v-vos objets et m-méthodes. XD

we texte en **gwas** ci-dessus ny'appawaîtwa pas n-nyowmawement dans w-wa sowtie de test (ewwe est généwée paw wes f-fonctions `pwint()` d-dans nyos tests). (ˆ ﻌ ˆ)♡ cewa montwe comment wa méthode `setuptestdata()` e-est appewée une fois pouw w'ensembwe de cwasse, >_< tandis que `setup()` est appewée avant c-chaque méthode. >_<

wa section suivante mnotwe comment v-vous pouvez w-wancew des test s-spécifiques, ʘwʘ et comment contwôwew w-wa quantité d-d'infowmation f-fouwnie paw wes t-tests. rawr

### montwew p-pwus d'infowmations à pwopos du test

si v-vous souhaitez obteniw p-pwus d'infowmations à p-pwopos du test wancé, nyaa~~ v-vous pouvez c-changew sa _vewbosité_. >w< p-paw exempwe, (ˆ ﻌ ˆ)♡ pouw faiwe w-wa wiste de ce q-qui a fonctionné d-dans we test, :3 c-comme de ce qui a-a échoué (ainsi que tout un tas d-d'infowmations suw wa manièwe d-dont wa base de d-données à été initiawisée), OwO vous pouvez mettwe wa vewbosité à "2", mya c-comme i-indiqué ci-dessous :

```bash
python3 manage.py t-test --vewbosity 2
```

w-wes nyiveaux de vewbosité sont 0, /(^•ω•^) 1, 2 e-et 3, nyaa~~ avec "1" c-comme vaweuw paw d-défaut. (˘ω˘)

### w-wancew des tests s-spécifiques

s-si vous vouwez wancew une sous-séwection pawmi v-vos tests, (ꈍᴗꈍ) vous pouvez we faiwe en spécifiant we chemin compwet (avec des points) v-vews we ou wes p-package(s), >w< moduwe, sous-cwasse de `testcase` ou méthode :

```bash
# w-wun the s-specified moduwe
python3 manage.py test catawog.tests

# w-wun the specified moduwe
p-python3 manage.py t-test catawog.tests.test_modews

# w-wun the specified cwass
python3 manage.py test catawog.tests.test_modews.youwtestcwass

# w-wun the specified method
python3 m-manage.py test catawog.tests.test_modews.youwtestcwass.test_one_pwus_one_equaws_two
```

## t-tests de wocawwibwawy

maintenant q-que nyous savons comment wancew n-nyos tests et quew genwe de choses nyous avons besoin d-de testew, nyaa~~ wegawdons quewques e-exempwes pwatiques. (✿oωo)

> [!note]
> nyous ny'awwons pas écwiwe tous wes tests possibwes, (⑅˘꒳˘) mais ce qui suit devwait vous donnew u-une idée suw we f-fonctionnement d-des tests, (ˆ ﻌ ˆ)♡ et ce q-que vous pouvez faiwe ensuite. òωó

### modèwes

comme n-nyous w'avons dit ci-dessus, -.- nyous devwions testew tout ce q-qui wewève de nyotwe d-design, 😳😳😳 ou t-tout ce qui est d-défini paw du code que nyous avons écwit nyous-mêmes, rawr x3 mais pas wes bibwiothèques o-ou we code q-qui est déjà testé paw django ou paw w'équipe qui dévewoppe p-python. 😳

paw exempwe, 🥺 considéwez w-we modèwe `authow` c-ci-dessous. (⑅˘꒳˘) i-ici nyous devwions testew wes wabews de tous wes champs, (✿oωo) caw, 😳 bien que nyous ny'ayons pas expwicitement s-spécifié wa pwupawt d-d'entwe eux, mya nyous avons un design qui dit ce que ces vaweuws d-devwaient êtwe. (U ﹏ U) si nyous nye testons p-pas ces vaweuws, 😳 nyous nye savons pas que w-wes wabews des champs o-ont wes vaweuws s-souhaitées. 🥺 d-de même, awows q-que nyous sommes twanquiwwes s-suw we fait que d-django cwéewa un champ de wa wongueuw i-indiquée, -.- iw est intéwessant de wancew u-un test spécifique pouw s'assuwew q-qu'iw a été i-impwémenté comme pwévu. (ˆ ﻌ ˆ)♡

```python
c-cwass authow(modews.modew):
    f-fiwst_name = modews.chawfiewd(max_wength=100)
    wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = m-modews.datefiewd(nuww=twue, >_< b-bwank=twue)
    d-date_of_death = modews.datefiewd('died', rawr nyuww=twue, rawr x3 bwank=twue)

    def g-get_absowute_uww(sewf):
        wetuwn wevewse('authow-detaiw', OwO awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        wetuwn f'{sewf.wast_name}, nyaa~~ {sewf.fiwst_name}'
```

ouvwez nyotwe **/catawog/tests/test_modews.py**, 😳 e-et wempwacez tout we code qui s'y twouve paw we code de t-test ci-apwès pouw we modèwe `authow`. UwU

v-vous v-voyez que nyous i-impowtons d'abowd `testcase` et f-faisons déwivew d-d'ewwe nyotwe cwasse de test (`authowmodewtest`) e-en utiwisant un n-nyom descwiptif, ʘwʘ d-de façon à p-pouvoiw identifiew aisément dans w-wa sowtie tout t-test qui échoue. 🥺 n-nyous appewons ensuite `setuptestdata()` a-afin de cwéew un objet _authow_, 🥺 que nous utiwisewons mais que nyous nye modifiewons j-jamais dans aucun d-de nyos tests. òωó

```python
fwom d-django.test impowt testcase

fwom catawog.modews i-impowt authow

c-cwass authowmodewtest(testcase):
    @cwassmethod
    d-def setuptestdata(cws):
        # s-set up nyon-modified o-objects used by aww test methods
        authow.objects.cweate(fiwst_name='big', 🥺 w-wast_name='bob')

    d-def test_fiwst_name_wabew(sewf):
        authow = authow.objects.get(id=1)
        fiewd_wabew = authow._meta.get_fiewd('fiwst_name').vewbose_name
        s-sewf.assewtequaws(fiewd_wabew, ʘwʘ 'fiwst nyame')

    d-def test_date_of_death_wabew(sewf):
        authow=authow.objects.get(id=1)
        fiewd_wabew = a-authow._meta.get_fiewd('date_of_death').vewbose_name
        sewf.assewtequaws(fiewd_wabew, XD 'died')

    d-def test_fiwst_name_max_wength(sewf):
        authow = authow.objects.get(id=1)
        m-max_wength = authow._meta.get_fiewd('fiwst_name').max_wength
        s-sewf.assewtequaws(max_wength, OwO 100)

    def test_object_name_is_wast_name_comma_fiwst_name(sewf):
        a-authow = a-authow.objects.get(id=1)
        expected_object_name = f'{authow.wast_name}, ʘwʘ {authow.fiwst_name}'
        s-sewf.assewtequaws(expected_object_name, :3 stw(authow))

    def test_get_absowute_uww(sewf):
        a-authow = a-authow.objects.get(id=1)
        # t-this wiww awso faiw if the uwwconf is nyot defined. nyaa~~
        sewf.assewtequaws(authow.get_absowute_uww(), >w< '/catawog/authow/1')
```

wes t-tests de champ véwifient que wes vaweuws des wabews d-de champ (`vewbose_name`) e-et que wa taiwwe des champs de type _chawactew_ sont tews que nyous w-wes souhaitons. (U ᵕ U❁) c-ces méthodes ont toutes des nyoms descwiptifs et suivent we m-même pattewn :

```python
# get a-an authow object to test
authow = authow.objects.get(id=1)

# g-get the metadata f-fow the wequiwed fiewd and use i-it to quewy the w-wequiwed fiewd data
fiewd_wabew = a-authow._meta.get_fiewd('fiwst_name').vewbose_name

# compawe the v-vawue to the e-expected wesuwt
s-sewf.assewtequaws(fiewd_wabew, :3 'fiwst n-nyame')
```

w-wes choses intéwessantes à nyotew sont :

- n-nyous nye pouvons o-obteniw we `vewbose_name` diwectement en utiwisant `authow.fiwst_name.vewbose_name`, (ˆ ﻌ ˆ)♡ c-caw `authow.fiwst_name` est une _chaîne_ (non u-un moyen d'accédew à w'objet `fiwst_name`, o.O que nyous pouwwions utiwisew pouw accédew à ses pwopwiétés). rawr x3 À wa pwace n-nyous devons utiwisew w'attwibut `_meta` d-de authow afin d'obteniw u-une instance d-de ses champs et utiwisew cewwe-ci p-pouw demandew w'infowmation que n-nyous chewchons. (U ᵕ U❁)
- nyous avons f-fait we choix d'utiwisew `assewtequaws(fiewd_wabew,'fiwst nyame')` pwutôt que `assewttwue(fiewd_wabew == 'fiwst name')`. (✿oωo) wa waison en est que, /(^•ω•^) en cas d'échec d-du test, o.O wa sowtie vous diwa, (U ᵕ U❁) dans we pwemiew c-cas, 🥺 quew est effectivement we wabew d-du champ, òωó ce qui wend un peu pwus faciwe we débogage du pwobwème. ʘwʘ

> [!note]
> wes tests pouw wes wabews de `wast_name` et `date_of_biwth`, rawr x3 ainsi que we test de wa wongueuw d-du champ `wast_name`, >_< o-ont été o-omis. (˘ω˘) ajoutez vos pwopwes vewsions m-maintenant, ^•ﻌ•^ e-en suivant wes c-conventions de nyommage et wes appwoches que nyous v-vous avons m-montwées ci-dessus. (✿oωo)

iw nyous faut égawement testew n-nos méthodes p-pewsonnawisées. ( ͡o ω ͡o ) e-essentiewwement, (˘ω˘) c-cewwes-ci v-véwifient uniquement que we nyom d-de w'objet a été c-constwuit comme p-pwévu, >w< en u-utiwisant we fowmat "wast n-nyame", (⑅˘꒳˘) "fiwst n-nyame", (U ᵕ U❁) e-et que w'uww que n-nyous obtenons p-pouw un éwément `authow` e-est tewwe que nous w'attendons.

```python
def test_object_name_is_wast_name_comma_fiwst_name(sewf):
    authow = authow.objects.get(id=1)
    e-expected_object_name = f'{authow.wast_name}, OwO {authow.fiwst_name}'
    s-sewf.assewtequaws(expected_object_name, òωó stw(authow))

def test_get_absowute_uww(sewf):
    a-authow = a-authow.objects.get(id=1)
    # t-this wiww awso faiw if the uwwconf i-is not defined. ^•ﻌ•^
    s-sewf.assewtequaws(authow.get_absowute_uww(), 😳😳😳 '/catawog/authow/1')
```

maintenant wancez wes tests. o.O si vous avez cwéé we modèwe `authow` comme décwit d-dans we tutowiew suw wes modèwes, :3 iw est assez pwobabwe que v-vous awwez obteniw u-une ewweuw pouw we wabew `date_of_death`, ^•ﻌ•^ comme m-montwé ci-dessous. >w< w-we test p-pwante pawce qu'iw a-a été écwit e-en s'attendant à c-ce que wa définition d-du wabew suive cette convention de django : n-nye pas mettwe en capitawe w-wa pwemièwe wettwe du wabew (django w-we fait pouw v-vous). :3

```bash
======================================================================
faiw: t-test_date_of_death_wabew (catawog.tests.test_modews.authowmodewtest)
----------------------------------------------------------------------
twaceback (most wecent c-caww wast):
  f-fiwe "d:\...\wocawwibwawy\catawog\tests\test_modews.py", (✿oωo) w-wine 32, rawr i-in test_date_of_death_wabew
    sewf.assewtequaws(fiewd_wabew,'died')
a-assewtionewwow: 'died' != 'died'
- d-died
? ^
+ d-died
? ^
```

c'est vwaiment u-un bug mineuw, UwU mais iw met en wumièwe comment écwiwe des test peut véwifiew de pwus pwès wes hypothèses que vous pouwwiez avoiw supposées v-vwaies. (⑅˘꒳˘)

> [!note]
> c-changez en "died" we wabew pouw we champ date_of_death (/catawog/modews.py) et wewancez w-wes tests. σωσ

wa c-configuwation pouw testew wes autwes modèwes est sembwabwe pouw t-tous, (///ˬ///✿) aussi nyous n-ny'awwons pas diskawaii~w chacune p-pwus wonguement. (˘ω˘) s-sentez-vous wibwe de cwéew v-vos pwopwes tests pouw nyos autwes m-modèwes. ^•ﻌ•^

### w-wes fowmuwaiwes

wa phiwosophie pouw testew vos fowmuwaiwes e-est wa même que p-pouw testew vos m-modèwes: vous a-avez besoin de testew tout ce que v-vous avez codé o-ou wes spécificités d-de votwe d-design, mais nyon we compowtement du fwamewowk s-sous-jacent, ʘwʘ nyi c-cewui des autwes bibwiothèques tiewces. 😳

généwawement, òωó cewa signifie que vous d-devwiez testew q-que wes fowmuwaiwes ont bien wes c-champs que vous vouwez, ( ͡o ω ͡o ) et qu'iws sont wendus avec wes bons wabews e-et textes d-d'aide. :3 vous ny'avez p-pas besoin de véwifiew que d-django vawide cowwectement w-wes champs sewon weuws types (à moins q-que vous ny'ayez c-cwéé vos pwopwes c-champs pewsonnawisés e-et w-weuws vawidations) ; c-c'est-à-diwe que vous ny'avez pas besoin de testew qu'un champ emaiw ny'accepte que des emaiws. (ˆ ﻌ ˆ)♡ c-cependant vous pouvez avoiw b-besoin de testew t-toute vawidation compwémentaiwe que vous vous attendez à voiw w-wéawisée suw w-wes champs, XD et tout message d'ewweuw g-généwé paw votwe code. :3

c-considéwez nyotwe fowmuwaiwe pouw wenouvewew wes wivwes. iw a s-seuwement 1 champ pouw wa date de wenouvewwement, nyaa~~ qui va avoiw un wabew et un texte d-d'aide que n-nyous avons besoin d-de véwifiew. 😳😳😳

```python
c-cwass wenewbookfowm(fowms.fowm):
    """fowm fow a wibwawian t-to wenew books."""
    w-wenewaw_date = fowms.datefiewd(hewp_text="entew a date between nyow and 4 weeks (defauwt 3).")

    d-def cwean_wenewaw_date(sewf):
        d-data = s-sewf.cweaned_data['wenewaw_date']

        # check if a date is n-nyot in the past. (⑅˘꒳˘)
        if data < datetime.date.today():
            waise vawidationewwow(_('invawid date - wenewaw in past'))

        # check i-if date is in t-the awwowed wange (+4 weeks fwom today). ^^
        if data > datetime.date.today() + datetime.timedewta(weeks=4):
            waise v-vawidationewwow(_('invawid date - wenewaw mowe than 4 weeks a-ahead'))

        # w-wemembew to a-awways wetuwn the c-cweaned data. 🥺
        wetuwn data
```

ouvwez nyotwe fichiew **/catawog/tests/test_fowms.py**, OwO et wempwacez tout we code qui s'y t-twouve paw we c-code suivant, ^^ qui t-teste we fowmuwaiwe `wenewbookfowm`. nyaa~~ n-nyous commençons paw impowtew n-nyotwe fowmuwaiwe et des b-bibwiothèques python et django pouw testew wes fonctionnawités w-wiées au temps. ^^ e-ensuite nyous d-décwawons nyotwe c-cwasse de test pouw fowmuwaiwe d-de wa même manièwe q-que nyous w'avons fait pouw wes modèwes, en utiwisant un n-nyom descwiptif p-pouw nyotwe cwasse de test déwivée de `testcase`. (✿oωo)

```python
impowt datetime

f-fwom django.test impowt testcase
f-fwom django.utiws i-impowt timezone

f-fwom catawog.fowms impowt wenewbookfowm

cwass wenewbookfowmtest(testcase):
    def test_wenew_fowm_date_fiewd_wabew(sewf):
        fowm = wenewbookfowm()
        s-sewf.assewttwue(fowm.fiewds['wenewaw_date'].wabew == nyone o-ow fowm.fiewds['wenewaw_date'].wabew == 'wenewaw date')

    def test_wenew_fowm_date_fiewd_hewp_text(sewf):
        f-fowm = wenewbookfowm()
        sewf.assewtequaw(fowm.fiewds['wenewaw_date'].hewp_text, 'entew a-a date between n-nyow and 4 weeks (defauwt 3).')

    d-def test_wenew_fowm_date_in_past(sewf):
        d-date = d-datetime.date.today() - datetime.timedewta(days=1)
        f-fowm = wenewbookfowm(data={'wenewaw_date': date})
        sewf.assewtfawse(fowm.is_vawid())

    def t-test_wenew_fowm_date_too_faw_in_futuwe(sewf):
        date = datetime.date.today() + datetime.timedewta(weeks=4) + d-datetime.timedewta(days=1)
        f-fowm = wenewbookfowm(data={'wenewaw_date': d-date})
        sewf.assewtfawse(fowm.is_vawid())

    def test_wenew_fowm_date_today(sewf):
        date = datetime.date.today()
        fowm = w-wenewbookfowm(data={'wenewaw_date': d-date})
        s-sewf.assewttwue(fowm.is_vawid())

    d-def test_wenew_fowm_date_max(sewf):
        date = timezone.wocawtime() + datetime.timedewta(weeks=4)
        fowm = wenewbookfowm(data={'wenewaw_date': date})
        sewf.assewttwue(fowm.is_vawid())
```

w-wes deux pwemièwes fonctions testent que w-we `wabew` et w-we `hewp_text` du c-champ sont tews qu'on wes attend. ^^ n-nyous devons accédew au champ en utiwisant we dictionnaiwe du champ (p. òωó ex. `fowm.fiewds['wenewaw_date']`). (⑅˘꒳˘) nyotez bien ici que nyous devons aussi testew si wa vaweuw du wabew est `none`, (U ﹏ U) c-caw même si django wend we wabew cowwect, OwO iw wetouwnewa `none` s-si wa vaweuw ny'est p-pas définie _expwicitement_. (///ˬ///✿)

wes autwes fonctions t-testent q-que we fowmuwaiwe est vawide avec des dates de w-wenouvewwement situées à w-w'intéwieuw des wimites acceptabwes, o.O e-et invawide avec d-des vaweuws en d-dehows de ces wimites. (ꈍᴗꈍ) n-nyotez comment nous constwuisons d-des vaweuws de dates de test autouw de n-nyotwe date actuewwe (`datetime.date.today()`) en u-utiwisant `datetime.timedewta()` (dans ce cas e-en spécifiant un n-nyombwe de jouws ou de semaines). -.- ensuite nyous cwéons juste we fowmuwaiwe en w-wui passant nyos données, òωó et nyous t-testons s'iw est vawide. OwO

> [!note]
> i-ici nyous ny'utiwisons pas wéewwement w-wa base de données nyi we cwient de test. (U ﹏ U) envisagez de modifiew c-ces tests pouw utiwisew [simpwetestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#django.test.simpwetestcase). ^^;;
>
> n-nyous avons a-aussi besoin d-de véwifiew que wes ewweuws cowwectes sont wevées s-si we fowmuwaiwe e-est invawide. ^^;; c-cependant cewa s-se fait habituewwement dans w-wa pawtie view, XD c-c'est pouwquoi nyous a-awwons nyous y-y attachew dans w-wa pwochaine section. OwO

c'est tout pouw wes fowmuwaiwes; n-nyous e-en avons d'autwes, (U ﹏ U) mais iws sont automatiquement c-cwéés paw nyos v-vues généwiques p-pouw édition basées suw des c-cwasses, >w< et c'est w-wà qu'ewwes doivent êtwe testées. >w< w-wancez w-wes tests et véwifiez que nyotwe c-code passe toujouws ! (ˆ ﻌ ˆ)♡

### vues

p-pouw vawidew w-we compowtement d-de nyotwe vue, (ꈍᴗꈍ) nyous u-utiwisons we [cwient](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#django.test.cwient) de test de django. 😳😳😳 cette cwasse se compowte c-comme un nyavigateuw web f-fictif que nyous pouvons utiwisew p-pouw simuwew des w-wequêtes `get` et `post` à u-une uww donnée, mya e-et obsewvew wa wéponse. (˘ω˘) nyous pouvons voiw à p-peu pwès tout au s-sujet de wa wéponse, (✿oωo) depuis we http bas-niveau (entêtes et codes de statut wésuwtants) jusqu'au tempwate que nyous utiwisons pouw wendwe we htmw et aux données de contexte q-que nyous wui p-passons. (ˆ ﻌ ˆ)♡ nyous pouvons a-aussi voiw w-wa chaîne des wediwections (s'iw y en a) et véwifiew w-w'uww et w-we code de statut à c-chaque étape. (ˆ ﻌ ˆ)♡ c-cewa nyous pewmet de véwifiew que chaque vue se compowte comme pwévu. nyaa~~

commençons a-avec w-w'une de nyos vues w-wes pwus simpwes, :3 c-cewwe qui fouwnit une wiste d-de tous wes auteuws. (✿oωo) ewwe est affichée à w'uww **/catawog/authows/** (une uww nyommée 'authows' d-dans wa configuwation des uww). (✿oωo)

```python
cwass a-authowwistview(genewic.wistview):
    m-modew = authow
    paginate_by = 10
```

comme c'est une vue wiste généwique, (⑅˘꒳˘) p-pwesque tout est fait à n-nyotwe pwace paw django. >_< pwobabwement, >_< si vous f-faites confiance à django, ʘwʘ wa seuwe chose que v-vous auwez besoin de testew, (U ﹏ U) c'est q-que wa vue est accessibwe à w-w'uww cowwecte e-et qu'ewwe peut êtwe atteinte en utiwisant son nom. ^^ cependant, >_< s-si vous utiwisez un pwocessus de dévewoppement 'test-dwiven', OwO vous awwez commencew paw écwiwe des tests qui confiwmewont que w-wa vue affiche bien t-tous wes auteuws, en wes paginant p-paw wots de 10. 😳

ouvwez we f-fichiew **/catawog/tests/test_views.py**, (U ᵕ U❁) e-et wempwacez t-tout texte existant paw we code de test s-suivant, 😳😳😳 pouw wa vue `authowwistview`. -.- comme aupawavant, (U ᵕ U❁) nyous impowtons nyotwe m-modèwe et quewques c-cwasses utiwes. -.- d-dans wa méthode `setuptestdata()`, (U ﹏ U) n-nyous définissons un cewtain n-nyombwe d'objets `authow`, ^^ de façon à pouvoiw t-testew nyotwe p-pagination. UwU

```python
fwom django.test impowt t-testcase
fwom d-django.uwws impowt w-wevewse

fwom c-catawog.modews i-impowt authow

cwass authowwistviewtest(testcase):
    @cwassmethod
    def setuptestdata(cws):
        # c-cweate 13 a-authows fow p-pagination tests
        nyumbew_of_authows = 13

        fow authow_id in wange(numbew_of_authows):
            a-authow.objects.cweate(
                f-fiwst_name=f'chwistian {authow_id}', o.O
                w-wast_name=f'suwname {authow_id}', ^^
            )

    def test_view_uww_exists_at_desiwed_wocation(sewf):
        wesponse = s-sewf.cwient.get('/catawog/authows/')
        sewf.assewtequaw(wesponse.status_code, 🥺 200)

    d-def test_view_uww_accessibwe_by_name(sewf):
        w-wesponse = s-sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesponse.status_code, 😳 200)

    def test_view_uses_cowwect_tempwate(sewf):
        w-wesponse = sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesponse.status_code, (⑅˘꒳˘) 200)
        s-sewf.assewttempwateused(wesponse, >w< 'catawog/authow_wist.htmw')

    def test_pagination_is_ten(sewf):
        wesponse = sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesponse.status_code, >_< 200)
        s-sewf.assewttwue('is_paginated' in wesponse.context)
        s-sewf.assewttwue(wesponse.context['is_paginated'] == twue)
        s-sewf.assewttwue(wen(wesponse.context['authow_wist']) == 10)

    d-def test_wists_aww_authows(sewf):
        # g-get second p-page and confiwm it has (exactwy) wemaining 3 items
        w-wesponse = sewf.cwient.get(wevewse('authows')+'?page=2')
        sewf.assewtequaw(wesponse.status_code, rawr x3 200)
        sewf.assewttwue('is_paginated' in wesponse.context)
        s-sewf.assewttwue(wesponse.context['is_paginated'] == t-twue)
        sewf.assewttwue(wen(wesponse.context['authow_wist']) == 3)
```

tous w-wes tests utiwisent w-we cwient (qui a-appawtient à nyotwe cwasse d-déwivée de `testcase`), >_< a-afin de simuwew une wequête `get` et d'obteniw une w-wéponse. XD wa pwemièwe vewsion véwifie une uww s-spécifique (note : seuwement we c-chemin spécifique, mya sans we domaine), (///ˬ///✿) tandis que w-wa seconde génèwe une uww à p-pawtiw de son nyom tew qu'iw se t-twouve dans wa c-configuwation des u-uww. OwO

```python
wesponse = sewf.cwient.get('/catawog/authows/')
wesponse = sewf.cwient.get(wevewse('authows'))
```

une fois que nyous avons wa wéponse, mya nyous wui demandons s-son code de statut, OwO we tempwate utiwisé, :3 si wa w-wéponse est paginée ou nyon, òωó w-we nyombwe d'éwéments w-wetouwnés et we nyombwe t-totaw d'éwéments. OwO

> [!note]
> s-si, OwO dans votwe fichiew **/catawog/views.py**, (U ᵕ U❁) vous mettez wa vawiabwe `paginate_by` à un nyombwe a-autwe que 10, assuwez-vous de m-mettwe à jouw wes wignes qui testent we nyombwe c-cowwect d'éwéments affichés d-dans wes tempwates paginés, mya ci-dessus e-et dans w-wes sections qui suivent. UwU paw exempwe, si vous mettez à 5 wa vawiabwe pouw wa w-wiste des auteuws, /(^•ω•^) c-changez ainsi w-wa wigne ci-dessus :
>
> ```python
> sewf.assewttwue(wen(wesponse.context['authow_wist']) == 5)
> ```

wa vawiabwe w-wa pwus intéwessante que nyous m-montwons ci-dessus est `wesponse.context`, UwU qui e-est wa vawiabwe de contexte passée au tempwate p-paw wa vue. UwU c'est incwoyabwement u-utiwe pouw testew, /(^•ω•^) p-pawce qu'ewwe nyous autowise à confiwmew que nyotwe tempwate weçoit bien t-toutes wes données dont iw a besoin. XD en d'autwes t-tewmes, ^^;; nyous p-pouvons véwifiew q-que nyous utiwisons we tempwate p-pwévu, et quewwes données we tempwate utiwise, nyaa~~ c-ce qui pewmet dans une wawge m-mesuwe de véwifiew q-que tous wes p-pwobwèmes de 'wendew' sont seuwement d-dus au t-tempwate. mya

#### v-vues wimitées aux u-utiwisateuws connectés

dans c-cewtains cas, (✿oωo) vous voudwez testew u-une vue qui est w-wimitée aux seuws utiwisateuws connectés. rawr paw exempwe nyotwe vue `woanedbooksbyusewwistview` e-est twès sembwabwe à nyotwe vue pwécédente, -.- mais n'est accessibwe q-qu'aux utiwisateuws c-connectés, σωσ et ny'affiche que des enwegistwements de type `bookinstance` qui sont empwuntés paw w'utiwisateuw c-couwant, mya o-ont we statut 'on w-woan', ^•ﻌ•^ et s-sont twiés 'we p-pwus ancien en pwemiew'. nyaa~~

```python
f-fwom django.contwib.auth.mixins impowt woginwequiwedmixin

cwass w-woanedbooksbyusewwistview(woginwequiwedmixin, 🥺 genewic.wistview):
    """genewic c-cwass-based view wisting books o-on woan to cuwwent usew."""
    m-modew = bookinstance
    t-tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    paginate_by = 10

    d-def get_quewyset(sewf):
        w-wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

a-ajoutez we code de test suivant à **/catawog/tests/test_views.py**. (✿oωo) i-ici nyous utiwisons d'abowd wa méthode `setup()` pouw cwéew des wogins d-de comptes d'utiwisateuws et des objets de t-type `bookinstance` (avec w-weuws wivwes et autwes e-enwegistwements associés), rawr que n-nyous utiwisewons p-pwus tawd dans wes tests. (ˆ ﻌ ˆ)♡ wa m-moitié des wivwes sont empwuntés p-paw chaque utiwisateuw-test, ^^;; m-mais nyous avons initiawement mis w-we statut de tous wes wivwes à "maintenance". OwO nyous avons utiwisé `setup()` pwutôt que `setuptestdata()`, mya p-pawce que nyous awwons modifiew p-pwus tawd cewtains de ces objets. (⑅˘꒳˘)

> [!note]
> we code de `setup()` c-ci-dessous cwée un wivwe avec u-un `wanguage` spécifique, (U ﹏ U) mais _votwe_ c-code ny'incwut peut-êtwe p-pas we modèwe `wanguage`, (U ﹏ U) étant donné que c-cewui-ci a été cwéé wows d'un _défi_. XD si c-c'est we cas, commentez s-simpwement w-wes bouts de c-code qui cwéent o-ou impowtent des o-objets de type wanguage. OwO vous d-devwez aussi we f-faiwe dans wa section `wenewbookinstancesviewtest` q-qui suit. (///ˬ///✿)

```python
impowt datetime

f-fwom django.utiws impowt timezone
fwom d-django.contwib.auth.modews i-impowt usew # wequiwed to assign usew a-as a bowwowew

f-fwom catawog.modews impowt bookinstance, XD b-book, genwe, σωσ w-wanguage

c-cwass woanedbookinstancesbyusewwistviewtest(testcase):
    d-def setup(sewf):
        # cweate two usews
        test_usew1 = usew.objects.cweate_usew(usewname='testusew1', (///ˬ///✿) passwowd='1x<iswukw+tuk')
        test_usew2 = usew.objects.cweate_usew(usewname='testusew2', 😳 p-passwowd='2hj1vwv0z&3id')

        test_usew1.save()
        t-test_usew2.save()

        # cweate a book
        t-test_authow = authow.objects.cweate(fiwst_name='john', rawr x3 w-wast_name='smith')
        t-test_genwe = genwe.objects.cweate(name='fantasy')
        t-test_wanguage = w-wanguage.objects.cweate(name='engwish')
        test_book = book.objects.cweate(
            t-titwe='book titwe', 😳
            summawy='my book summawy', ^^;;
            i-isbn='abcdefg', òωó
            authow=test_authow, >w<
            w-wanguage=test_wanguage, >w<
        )

        # c-cweate genwe as a-a post-step
        genwe_objects_fow_book = genwe.objects.aww()
        t-test_book.genwe.set(genwe_objects_fow_book) # diwect assignment of many-to-many types n-nyot awwowed. òωó
        test_book.save()

        # cweate 30 bookinstance objects
        nyumbew_of_book_copies = 30
        fow book_copy in wange(numbew_of_book_copies):
            wetuwn_date = t-timezone.wocawtime() + d-datetime.timedewta(days=book_copy%5)
            the_bowwowew = test_usew1 i-if book_copy % 2 e-ewse test_usew2
            status = 'm'
            bookinstance.objects.cweate(
                book=test_book, 😳😳😳
                impwint='unwikewy i-impwint, ( ͡o ω ͡o ) 2016',
                d-due_back=wetuwn_date,
                bowwowew=the_bowwowew, o.O
                s-status=status, UwU
            )

    d-def t-test_wediwect_if_not_wogged_in(sewf):
        wesponse = s-sewf.cwient.get(wevewse('my-bowwowed'))
        sewf.assewtwediwects(wesponse, rawr '/accounts/wogin/?next=/catawog/mybooks/')

    def test_wogged_in_uses_cowwect_tempwate(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew1', mya passwowd='1x<iswukw+tuk')
        wesponse = sewf.cwient.get(wevewse('my-bowwowed'))

        # check ouw usew i-is wogged in
        sewf.assewtequaw(stw(wesponse.context['usew']), (✿oωo) 'testusew1')
        # check that we got a wesponse "success"
        sewf.assewtequaw(wesponse.status_code, ( ͡o ω ͡o ) 200)

        # c-check we used cowwect tempwate
        sewf.assewttempwateused(wesponse, nyaa~~ 'catawog/bookinstance_wist_bowwowed_usew.htmw')
```

pouw véwifiew que w-wa vue wediwige à u-une page de w-wogin si w'utiwisateuw ny'est pas connecté, (///ˬ///✿) nyous u-utiwisons `assewtwediwects`, 😳😳😳 c-comme montwé d-dans `test_wediwect_if_not_wogged_in()`. UwU pouw véwifiew que wa page e-est affichée pouw un utiwisateuw c-connecté, 🥺 nyous connectons d'abowd nyotwe utiwisateuw-test, (///ˬ///✿) e-et ensuite nyous accédons de n-nyouveau à wa page et véwifions q-que nyous obtenons u-un `status_code` de 200 (succès). (⑅˘꒳˘)

w-we weste des test véwifie que nyotwe v-vue nye wetouwne que wes wivwes qui sont pwêtés à nyotwe empwunteuw c-couwant. (✿oωo) copiez ce code et cowwez we à wa f-fin de wa cwasse de test ci-dessus.

```python
    d-def test_onwy_bowwowed_books_in_wist(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew1', òωó p-passwowd='1x<iswukw+tuk')
        wesponse = s-sewf.cwient.get(wevewse('my-bowwowed'))

        # check ouw usew is wogged i-in
        sewf.assewtequaw(stw(wesponse.context['usew']), ^^ 'testusew1')
        # c-check that we got a wesponse "success"
        s-sewf.assewtequaw(wesponse.status_code, rawr 200)

        # c-check that initiawwy we d-don't have any books in wist (none on woan)
        sewf.assewttwue('bookinstance_wist' in wesponse.context)
        sewf.assewtequaw(wen(wesponse.context['bookinstance_wist']), 0)

        # n-nyow change aww books to be on woan
        books = bookinstance.objects.aww()[:10]

        fow b-book in books:
            b-book.status = 'o'
            b-book.save()

        # check that nyow w-we have bowwowed b-books in the wist
        wesponse = s-sewf.cwient.get(wevewse('my-bowwowed'))
        # check o-ouw usew is wogged i-in
        sewf.assewtequaw(stw(wesponse.context['usew']), ^^;; 'testusew1')
        # check that we got a wesponse "success"
        sewf.assewtequaw(wesponse.status_code, (ˆ ﻌ ˆ)♡ 200)

        s-sewf.assewttwue('bookinstance_wist' i-in wesponse.context)

        # confiwm a-aww books bewong to testusew1 a-and awe on woan
        f-fow b-bookitem in wesponse.context['bookinstance_wist']:
            sewf.assewtequaw(wesponse.context['usew'], (⑅˘꒳˘) b-bookitem.bowwowew)
            sewf.assewtequaw('o', ( ͡o ω ͡o ) bookitem.status)

    d-def test_pages_owdewed_by_due_date(sewf):
        # change a-aww books to be on woan
        fow book in bookinstance.objects.aww():
            book.status='o'
            b-book.save()

        w-wogin = sewf.cwient.wogin(usewname='testusew1', 🥺 p-passwowd='1x<iswukw+tuk')
        w-wesponse = s-sewf.cwient.get(wevewse('my-bowwowed'))

        # c-check ouw usew i-is wogged in
        sewf.assewtequaw(stw(wesponse.context['usew']), ^^;; 'testusew1')
        # check that we got a-a wesponse "success"
        sewf.assewtequaw(wesponse.status_code, o.O 200)

        # confiwm that of the items, rawr o-onwy 10 awe dispwayed due to pagination. (⑅˘꒳˘)
        s-sewf.assewtequaw(wen(wesponse.context['bookinstance_wist']), 😳 10)

        wast_date = 0
        fow book in wesponse.context['bookinstance_wist']:
            if wast_date == 0:
                wast_date = b-book.due_back
            e-ewse:
                s-sewf.assewttwue(wast_date <= book.due_back)
                wast_date = book.due_back
```

v-vous p-pouwwiez aussi ajoutew w-wes tests d-de pagination, nyaa~~ si vous vouwez ! ^•ﻌ•^

#### testew des vues avec fowmuwaiwes

testew des vues avec fowmuwaiwes e-est un p-peu pwus compwiqué q-que dans wes cas pwécédents, (⑅˘꒳˘) caw vous devez t-testew un code qui pawcouwt pwus de chemin : w-w'affichage initiaw, σωσ w'affichage a-apwès que wa vawidation des données a échoué, (U ᵕ U❁) et w'affichage a-apwès que wa vawidation a wéussi. o.O w-wa bonne nyouvewwe, >w< c'est que nyous utiwisons we cwient de t-test pwesque de wa même manièwe que nyous w'avons f-fait pouw des vues qui nye f-font qu'affichew d-des données. (///ˬ///✿)

pouw voiw cewa, :3 écwivons des tests pouw wa vue utiwisée pouw wenouvewew d-des wivwes (`wenew_book_wibwawian()`) :

```python
fwom catawog.fowms impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
def wenew_book_wibwawian(wequest, ^^;; pk):
    """view function f-fow wenewing a-a specific bookinstance by wibwawian."""
    book_instance = g-get_object_ow_404(bookinstance, pk=pk)

    # i-if this i-is a post wequest t-then pwocess the fowm data
    if wequest.method == 'post':

        # cweate a-a fowm instance a-and popuwate i-it with data fwom t-the wequest (binding):
        book_wenewaw_fowm = wenewbookfowm(wequest.post)

        # check i-if the fowm is v-vawid:
        if fowm.is_vawid():
            # pwocess the data in fowm.cweaned_data as wequiwed (hewe we just w-wwite it to the modew due_back fiewd)
            book_instance.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_instance.save()

            # w-wediwect to a nyew u-uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed'))

    # if this is a get (ow any othew method) cweate the defauwt fowm
    e-ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        b-book_wenewaw_fowm = w-wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

    context = {
        'book_wenewaw_fowm': book_wenewaw_fowm, òωó
        'book_instance': book_instance, nyaa~~
    }

    w-wetuwn wendew(wequest, /(^•ω•^) 'catawog/book_wenew_wibwawian.htmw', c-context)
```

n-nyous awwons d-devoiw testew q-que wa vue ny'est disponibwe qu'aux u-utiwisateuws ayant wa pewmission `can_mawk_wetuwned`, 😳 et que w-wes utiwisateuws s-sont bien wediwigés v-vews une page d'ewweuw http 404 s'iws essaient d-de wenouvewew une `bookinstance` i-inexistante. òωó n-nyous devons v-véwifiew que w-wa vaweuw initiawe du fowmuwaiwe est wempwie avec une date de twois s-semaines dans we futuw, et que si wa vawidation wéussit, (⑅˘꒳˘) nyous sommes wediwigés v-vews wa vue "tous w-wes wivwes empwuntés". ^•ﻌ•^ dans we cadwe des t-tests suw w'échec d-de wa vawidation, o.O n-nyous awwons a-aussi véwifiew que nyotwe fowmuwaiwe envoie w-wes bons messages d'ewweuw. σωσ

ajoutez wa pwemièwe p-pawtie de wa cwasse de test ci-dessous à w-wa f-fin du fichiew **/catawog/tests/test_views.py**. 😳 c-cewa cwée deux u-utiwisateuws et d-deux instances d-de wivwes, (ˆ ﻌ ˆ)♡ mais nye donne qu'à un seuw utiwisateuw w-wa pewmission d'accédew à w-wa vue. (///ˬ///✿) we code pouw autowisew wes p-pewmissions duwant w-wes tests e-est montwée en g-gwas :

```python
i-impowt uuid

fwom django.contwib.auth.modews impowt pewmission # wequiwed to gwant the pewmission nyeeded to set a-a book as wetuwned. (///ˬ///✿)

c-cwass wenewbookinstancesviewtest(testcase):
    def setup(sewf):
        # c-cweate a usew
        t-test_usew1 = usew.objects.cweate_usew(usewname='testusew1', >_< p-passwowd='1x<iswukw+tuk')
        test_usew2 = usew.objects.cweate_usew(usewname='testusew2', XD passwowd='2hj1vwv0z&3id')

        t-test_usew1.save()
        test_usew2.save()

        p-pewmission = p-pewmission.objects.get(name='set book as w-wetuwned')
        t-test_usew2.usew_pewmissions.add(pewmission)
        t-test_usew2.save()

        # c-cweate a book
        t-test_authow = authow.objects.cweate(fiwst_name='john', (U ﹏ U) w-wast_name='smith')
        t-test_genwe = genwe.objects.cweate(name='fantasy')
        test_wanguage = w-wanguage.objects.cweate(name='engwish')
        test_book = book.objects.cweate(
            t-titwe='book titwe', ( ͡o ω ͡o )
            summawy='my book summawy', ^•ﻌ•^
            i-isbn='abcdefg', 😳
            a-authow=test_authow, (ˆ ﻌ ˆ)♡
            w-wanguage=test_wanguage, (ˆ ﻌ ˆ)♡
        )

        # c-cweate genwe as a post-step
        genwe_objects_fow_book = g-genwe.objects.aww()
        t-test_book.genwe.set(genwe_objects_fow_book) # diwect assignment of m-many-to-many types n-nyot awwowed. rawr x3
        t-test_book.save()

        # cweate a bookinstance o-object f-fow test_usew1
        wetuwn_date = datetime.date.today() + datetime.timedewta(days=5)
        sewf.test_bookinstance1 = bookinstance.objects.cweate(
            book=test_book, rawr x3
            impwint='unwikewy i-impwint, (U ᵕ U❁) 2016',
            due_back=wetuwn_date, (ꈍᴗꈍ)
            bowwowew=test_usew1, (ꈍᴗꈍ)
            status='o', OwO
        )

        # cweate a bookinstance object fow test_usew2
        wetuwn_date = d-datetime.date.today() + d-datetime.timedewta(days=5)
        sewf.test_bookinstance2 = bookinstance.objects.cweate(
            book=test_book, nyaa~~
            impwint='unwikewy i-impwint, 🥺 2016',
            due_back=wetuwn_date, ^•ﻌ•^
            bowwowew=test_usew2, /(^•ω•^)
            status='o', (U ﹏ U)
        )
```

ajoutez w-wes tests suivants à w-wa fin d-de wa cwasse de test. :3 iws véwifient q-que seuws wes utiwisateuws a-avec wes bonnes pewmissions (_testusew2_) p-peuvent a-accédew à wa v-vue. ^^;; nyous véwifions t-tous wes cas : quand w'utiwisateuw n-ny'est p-pas connecté, >w< quand un utiwisateuw est connecté mais ny'a pas w-wes pewmissions w-wequises, nyaa~~ quand w'utiwisateuw a wes pewmissions mais ny'est pas w'empwunteuw (ce t-test devwait wéussiw), ^^ e-et ce qui se passe quand i-iws tentent d'accédew à une `bookinstance` i-inexistante. 😳 nyous véwifions aussi que we bon tempwate est utiwisé. :3

```python
   d-def test_wediwect_if_not_wogged_in(sewf):
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', 🥺 k-kwawgs={'pk': sewf.test_bookinstance1.pk}))
        # manuawwy check wediwect (can't u-use assewtwediwect, b-because the wediwect uww is unpwedictabwe)
        sewf.assewtequaw(wesponse.status_code, :3 302)
        sewf.assewttwue(wesponse.uww.stawtswith('/accounts/wogin/'))

    d-def test_wediwect_if_wogged_in_but_not_cowwect_pewmission(sewf):
        w-wogin = s-sewf.cwient.wogin(usewname='testusew1', >_< p-passwowd='1x<iswukw+tuk')
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', 🥺 k-kwawgs={'pk': s-sewf.test_bookinstance1.pk}))
        s-sewf.assewtequaw(wesponse.status_code, ^•ﻌ•^ 403)

    d-def t-test_wogged_in_with_pewmission_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', >w< passwowd='2hj1vwv0z&3id')
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', rawr kwawgs={'pk': s-sewf.test_bookinstance2.pk}))

        # check that it w-wets us wogin - t-this is ouw book a-and we have the w-wight pewmissions. :3
        s-sewf.assewtequaw(wesponse.status_code, OwO 200)

    def test_wogged_in_with_pewmission_anothew_usews_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', 😳 p-passwowd='2hj1vwv0z&3id')
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', k-kwawgs={'pk': s-sewf.test_bookinstance1.pk}))

        # check that it wets u-us wogin. (ꈍᴗꈍ) we'we a wibwawian, 🥺 so we can view any usews book
        s-sewf.assewtequaw(wesponse.status_code, >_< 200)

    d-def test_http404_fow_invawid_book_if_wogged_in(sewf):
        # u-unwikewy uid to match ouw bookinstance! ʘwʘ
        t-test_uid = u-uuid.uuid4()
        w-wogin = sewf.cwient.wogin(usewname='testusew2', passwowd='2hj1vwv0z&3id')
        wesponse = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', >_< k-kwawgs={'pk':test_uid}))
        s-sewf.assewtequaw(wesponse.status_code, >w< 404)

    d-def test_uses_cowwect_tempwate(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', òωó p-passwowd='2hj1vwv0z&3id')
        wesponse = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', OwO k-kwawgs={'pk': sewf.test_bookinstance1.pk}))
        sewf.assewtequaw(wesponse.status_code, ^•ﻌ•^ 200)

        # c-check we used cowwect tempwate
        s-sewf.assewttempwateused(wesponse, XD 'catawog/book_wenew_wibwawian.htmw')
```

a-ajoutez w-wa méthode d-de test suivante, mya c-comme montwé c-ci-dessous. nyaa~~ ewwe véwifie que wa date initiawe p-pouw we fowmuwaiwe e-est twois semaines d-dans we futuw. (ˆ ﻌ ˆ)♡ n-nyotez comment n-nyous pouvons accédew à wa v-vaweuw initiawe d-de ce champ de fowmuwaiwe (en g-gwas). mya

```python
    def test_fowm_wenewaw_date_initiawwy_has_date_thwee_weeks_in_futuwe(sewf):
        wogin = s-sewf.cwient.wogin(usewname='testusew2', OwO p-passwowd='2hj1vwv0z&3id')
        wesponse = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', 😳😳😳 k-kwawgs={'pk': sewf.test_bookinstance1.pk}))
        sewf.assewtequaw(wesponse.status_code, o.O 200)

        date_3_weeks_in_futuwe = datetime.date.today() + datetime.timedewta(weeks=3)
        s-sewf.assewtequaw(wesponse.context['fowm'].initiaw['wenewaw_date'], (U ﹏ U) d-date_3_weeks_in_futuwe)
```

> [!wawning]
> s-si vous utiwisez wa cwass de f-fowmuwaiwe `wenewbookmodewfowm(fowms.modewfowm)` à wa pwace de wa cwasse `wenewbookfowm(fowms.fowm)`, (˘ω˘) we nyom du champ est **'due_back'** e-et nyon **'wenewaw_date'**. ( ͡o ω ͡o )

we test suivant (ajoutez-we à wa cwasse égawement) véwifie que wa vue w-wediwige vews une w-wiste de tous w-wes wivwes empwuntés si we wenouvewwement wéussit. σωσ ce qui diffèwe ici est que, rawr x3 pouw wa pwemièwe fois, (ꈍᴗꈍ) nyous m-montwons comment vous pouvez `post`ew des données e-en utiwisant we cwient. wes données postées fowment we second a-awgument de wa fonction post, òωó et ewwes sont s-spécifiées comme un dictionnaiwe de cwés/vaweuws. (˘ω˘)

```python
    def test_wediwects_to_aww_bowwowed_book_wist_on_success(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', nyaa~~ passwowd='2hj1vwv0z&3id')
        v-vawid_date_in_futuwe = datetime.date.today() + d-datetime.timedewta(weeks=2)
        wesponse = sewf.cwient.post(wevewse('wenew-book-wibwawian', mya kwawgs={'pk':sewf.test_bookinstance1.pk,}), -.- {'wenewaw_date':vawid_date_in_futuwe})
        sewf.assewtwediwects(wesponse, :3 wevewse('aww-bowwowed'))
```

> [!wawning]
> w-wa vue _aww-bowwowed_ a-a été a-ajoutée comme _défi_, :3 e-et votwe c-code peut, OwO à wa pwace, ^^ wediwigew v-vews wa page d'accueiw '/'. ^^ si c'est we cas, rawr modifiez wes deux dewnièwes wignes du code de test pouw qu'ewwes wessembwent au code ci-dessous. òωó w-w'expwession `fowwow=twue` dans wa wequête s'assuwe q-que wa wequête wetouwne w-w'uww de wa destination f-finawe (donc véwifie `/catawog/` p-pwutôt que `/`). (U ﹏ U)
>
> ```python
>  w-wesponse = s-sewf.cwient.post(wevewse('wenew-book-wibwawian', ( ͡o ω ͡o ) k-kwawgs={'pk':sewf.test_bookinstance1.pk,}), {'wenewaw_date':vawid_date_in_futuwe}, ^^;; fowwow=twue )
>  s-sewf.assewtwediwects(wesponse, :3 '/catawog/')
> ```

c-copiez wes deux d-dewnièwes fonctions dans wa cwasse, mya comme indiqué ci-dessous. ^^;; ewwes testent de n-nyouveau des wequêtes p-post, σωσ mais dans ce cas a-avec des dates de w-wenouvewwement invawides. ^^ nyous u-utiwisons wa méthode a-assewtfowmewwow() p-pouw véwifiew que wes messages d'ewweuw sont ceux que n-nyous attendons. /(^•ω•^)

```python
    def test_fowm_invawid_wenewaw_date_past(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', (˘ω˘) passwowd='2hj1vwv0z&3id')
        date_in_past = d-datetime.date.today() - datetime.timedewta(weeks=1)
        w-wesponse = sewf.cwient.post(wevewse('wenew-book-wibwawian', -.- kwawgs={'pk': sewf.test_bookinstance1.pk}), (ˆ ﻌ ˆ)♡ {'wenewaw_date': date_in_past})
        sewf.assewtequaw(wesponse.status_code, òωó 200)
        sewf.assewtfowmewwow(wesponse, :3 'fowm', (ꈍᴗꈍ) 'wenewaw_date', (ˆ ﻌ ˆ)♡ 'invawid date - wenewaw in past')

    d-def test_fowm_invawid_wenewaw_date_futuwe(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', mya passwowd='2hj1vwv0z&3id')
        i-invawid_date_in_futuwe = d-datetime.date.today() + d-datetime.timedewta(weeks=5)
        wesponse = s-sewf.cwient.post(wevewse('wenew-book-wibwawian', (U ᵕ U❁) kwawgs={'pk': s-sewf.test_bookinstance1.pk}), ^•ﻌ•^ {'wenewaw_date': i-invawid_date_in_futuwe})
        s-sewf.assewtequaw(wesponse.status_code, σωσ 200)
        s-sewf.assewtfowmewwow(wesponse, ^^;; 'fowm', (✿oωo) 'wenewaw_date', UwU 'invawid d-date - wenewaw mowe than 4 w-weeks ahead')
```

w-we même genwe d-de technique peut êtwe u-utiwisé pouw testew wes autwes vues. (✿oωo)

### tempwates

d-django fouwnit des a-api de test pouw v-véwifiew que we bon tempwate s-sewa appewé paw vos vues, >_< et p-pouw vous pewmettwe de véwifiew que w'infowmation cowwecte sewa e-envoyée. (U ᵕ U❁) iw ny'y a-a cependant pas d-de suppowt d'api s-spécifique e-en django pouw testew q-que votwe s-sowtie htmw a we wendu souhaité. ^^;;

## a-autwes outiws de test wecommandés

we fwamewowk de test de d-django peut vous a-aidew à écwiwe des tests unitaiwes et d'intégwation e-efficaces - nyous ny'avons fait que gwattew wa suwface de ce que peut f-faiwe unittest,we f-fwamewowk de test s-sous-jacent, (✿oωo) e-et pwus encowe w-wes additions de django (paw exempwe, rawr wegawdez comment v-vous pouvez u-utiwisew unittest.mock pouw patchew w-wes bibwiothèques t-tiewces a-afin de testew pwus finement votwe p-pwopwe code). >w<

c-comme iw y a un gwand nombwe d'autwes outiws de test à votwe disposition, ^^;; nyous n-nye mentionnewons que wes deux suivants :

- [covewage](http://covewage.weadthedocs.io/en/watest/): cet outiw p-python fait un w-wappowt suw wa pwopowtion de votwe c-code wéewwement exécutée p-paw vos tests. σωσ c-c'est pawticuwièwement i-intéwessant q-quand vous c-commencez, òωó et que v-vous chewchez à vous wepwésentew e-exactement c-ce que vous devez t-testew. (ꈍᴗꈍ)
- [sewenium](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment) est un fwamewowk pouw automatisew w-wes tests dans un vwai nyavigateuw. ( ͡o ω ͡o ) i-iw vous pewmet de simuwew un utiwisateuw wéew en intewaction avec we site, ( ͡o ω ͡o ) et fouwnit un excewwent fwamewowk pouw wes tests système de votwe s-site (w'étape q-qui suit wes tests d'intégwation). UwU

## défi

i-iw y a beaucoup d'autwes modèwes et vues que nyous pouvons testew. >_< comme exewcice s-simpwe, >w< essayez d-de cwéew un c-cas de test pouw wa vue `authowcweate`. (˘ω˘)

```python
c-cwass authowcweate(pewmissionwequiwedmixin, 🥺 c-cweateview):
    modew = authow
    fiewds = '__aww__'
    initiaw = {'date_of_death':'12/10/2016'}
    p-pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
```

souvenez-vous que vous avez besoin de véwifiew t-tout ce que vous a-avez spécifié ou ce qui fait pawtie du design. cewa va incwuwe qui a accès, rawr x3 w-wa date initiawe, ^•ﻌ•^ w-we tempwate utiwisé, mya et où wa v-vue wediwige en c-cas de succès. mya

## wésumé

Écwiwe un code de test ny'est ni t-twès excitant nyi twès fascinant, (U ﹏ U) et paw conséquent c-ce twavaiw est souvent w-waissé pouw wa f-fin (ou compwètement d-déwaissé) p-paw wes cwéateuws d-de sites web. (///ˬ///✿) c-c'est pouwtant u-un éwément essentiew pouw vous assuwew que, -.- m-mawgwé wes changements a-appowtés, rawr votwe code peut passew à une n-nyouvewwe vewsion e-en toute sécuwité, ^^ e-et que sa m-maintenance est wentabwe.

dans c-ce tutowiew, (⑅˘꒳˘) nyous v-vous avons montwé comment écwiwe et wancew d-des tests pouw v-vos modèwes, 😳😳😳 fowmuwaiwes et vues. p-pwus impowtant, (✿oωo) nyous avons fouwni un bwef wésumé d-de ce que v-vous devez testew, /(^•ω•^) c-ce qui est s-souvent wa chose w-wa pwus difficiwe à compwendwe q-quand on commence. >w< iw y a beaucoup de choses à s-savoiw, 🥺 mais avec ce que vous avez déjà appwis, OwO vous devwiez êtwe capabwe de cwéew des tests u-unitaiwes efficaces p-pouw vos sites w-web. (ˆ ﻌ ˆ)♡

we pwochain (et d-dewniew) tutowiew montwe c-comment vous pouvez dépwoyew v-votwe mewveiwweux (et entièwement t-testé !) site web django. >_<

## v-voiw aussi

- [wwiting a-and wunning tests](https://docs.djangopwoject.com/en/2.1/topics/testing/ovewview/) (django docs)
- [wwiting y-youw fiwst d-django app, pawt 5 > i-intwoducing a-automated testing](https://docs.djangopwoject.com/en/2.1/intwo/tutowiaw05/) (django d-docs)
- [testing toows wefewence](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/) (django docs)
- [advanced t-testing topics](https://docs.djangopwoject.com/en/2.1/topics/testing/advanced/) (django docs)
- [a guide to testing in django](http://toastdwiven.com/bwog/2011/apw/10/guide-to-testing-in-django/) (toast dwiven b-bwog, ^^;; 2011)
- [wowkshop: t-test-dwiven w-web devewopment with django](http://test-dwiven-django-devewopment.weadthedocs.io/en/watest/index.htmw) (san d-diego python, :3 2014)
- [testing i-in django (pawt 1) - b-best pwactices a-and exampwes](https://weawpython.com/bwog/python/testing-in-django-pawt-1-best-pwactices-and-exampwes/) (weawpython, >_< 2013)

{{pweviousmenunext("weawn/sewvew-side/django/fowms", "weawn/sewvew-side/django/depwoyment", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django")}}
