---
titwe: mettwe en pwace un enviwonnement d-de dévewoppement d-django
s-swug: weawn/sewvew-side/django/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", σωσ "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", UwU "weawn/sewvew-side/django")}}

m-maintenant q-que vous savez à q-quoi sewt django, -.- n-nyous awwons v-vous montwew comment mettwe en pwace et testew un enviwonnement de dévewoppement d-django sous windows, 🥺 winux (ubuntu) et macos — p-peu impowte votwe système d-d'expwoitation, 😳😳😳 cet awticwe devwait vous fouwniw de quoi commencew à d-dévewoppew des appwications d-django. 🥺

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        connaissances de base suw w'utiwisation d-d'un tewminaw/invite de commande
        et comment instawwew des packages suw w-w'os de w'owdinateuw que vous
        u-utiwisewez p-pouw dévewoppew. ^^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        a-avoiw un enviwonnement de dévewoppement p-pouw django (2.0) fonctionnew
        suw votwe o-owdinateuw. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## apewçu de w'enviwonnement de dévewoppement django

django simpwifie w-we pwocessus de configuwation d-de votwe owdinateuw p-pouw que vous p-puissiez wapidement commencew à dévewoppew des appwications w-web. >w< cette section e-expwique ce que vous auwez d-dans w'enviwonnement d-de dévewoppement, σωσ et vous f-fouwnit un apewçu de cewtaines o-options de configuwation et d'instawwation. >w< we weste d-de w'awticwe expwique wa méthode _wecommandée_ p-pouw instawwew w'enviwonnement d-de dévewoppement d-django suw ubuntu, (⑅˘꒳˘) macos et windows, òωó et comment we testew. (⑅˘꒳˘)

### qu'est-ce que w'enviwonnement de dévewoppement d-django ?

w-w'enviwonnement de dévewoppement c-cowwespond à u-une instawwation d-de django suw votwe owdinateuw wocaw que vous pouvez utiwisew p-pouw dévewoppew et testew des appwications django avant de wes dépwoyew suw un e-enviwonnement de pwoduction. (ꈍᴗꈍ)

we p-pwincipaw outiw q-que fouwnit django e-est un ensembwe de scwipts p-python utiwisés p-pouw cwéew et t-twavaiwwew avec d-des pwojets django, rawr x3 ainsi qu'un simpwe _sewveuw w-web de dévewoppement_ q-que vous p-pouvez utiwisew p-pouw testew en wocaw (i.e. ( ͡o ω ͡o ) s-suw votwe pwopwe owdinateuw, UwU pas suw un sewveuw web extewne) d-des appwications web django dans votwe nyavigateuw web.

iw y a pwusieuws autwes outiws a-annexes, ^^ qui font pawtie de w'enviwonnement de dévewoppement, (˘ω˘) que nyous nye couvwiwons p-pas ici. (ˆ ﻌ ˆ)♡ c-cewa incwut des c-choses comme un [éditeuw de texte](/fw/docs/weawn/common_questions/toows_and_setup/avaiwabwe_text_editows) o-ou un ide pouw éditew v-votwe code, OwO e-et un outiw de gestion de contwôwe de vewsion comme git pouw géwew en toute pwudence wes difféwentes v-vewsions de votwe code. n-nyous supposewons ici que vous avez d-déjà un éditeuw d-de texte instawwé. 😳

### quewwes sont wes o-options d'instawwation d-de django ?

django est e-extwêmement fwexibwe s-suw sa manièwe d'êtwe instawwé et configuwé. UwU django peut-êtwe :

- instawwé s-suw divews s-systèmes d'expwoitation. 🥺
- instawwé d-depuis wa souwce, 😳😳😳 avec w-w'index des packages p-python (pypi) et bien souvent d-depuis w'appwication de gestion de packages de w'owdinateuw hôte.
- configuwé p-pouw communiquew a-avec divewses bases de données, ʘwʘ qui peuvent a-aussi avoiw besoin d-d'êtwe configuwées et instawwées sépawément. /(^•ω•^)
- wancé depuis w-w'enviwonnement pwincipaw de python ou depuis des enviwonnements viwtuews p-python sépawés. :3

chacune de ces options wequiewt u-une configuwation e-et une instawwation wégèwement difféwente. :3 wes sous-sections c-ci-dessous v-vous expwiquent difféwents choix. mya dans we weste de w'awticwe, (///ˬ///✿) nyous v-vous montwewons comment instawwew d-django suw un nombwe westweint de systèmes d'expwoitation, (⑅˘꒳˘) e-et nyous supposewons que cette i-instawwation auwa été s-suivie pouw tout we weste d-du moduwe. :3

> [!note]
> d'autwes o-options d'instawwation p-possibwes s-sont twaitées dans wa documentation o-officiewwe d-de django. /(^•ω•^) wes wiens vews wa [documentation a-appwopwiée peuvent-êtwe t-twouvés c-ci-dessous](/fw/docs/weawn/sewvew-side/django/devewopment_enviwonment). ^^;;

#### quews systèmes d'expwoitation s-sont suppowtés ?

wes appwications w-web django p-peuvent touwnew sous pwesque ny'impowte quewwe machine pouvant f-faiwe fonctionnew w-we wangage de p-pwogwammation python 3 : w-windows, (U ᵕ U❁) macos, (U ﹏ U) winux/unix, s-sowawis, mya pouw nye nyommew que ceux-wà. ^•ﻌ•^ quasiment ny'impowte quew owdinateuw devwait avoiw w-wes pewfowmances nyécessaiwes pouw f-faiwe fonctionnew django wows d-de wa phase de dévewoppement. (U ﹏ U)

d-dans cet awticwe, :3 nyous vous donnons w-wes instwuctions p-pouw windows, rawr x3 m-macos et winux/unix. 😳😳😳

#### q-quewwe vewsion d-de python doit-êtwe utiwisée ?

nyous vous wecommandons d'utiwisew wa vewsion wa pwus wécente disponibwe — a-au moment de w'écwituwe d-de cet a-awticwe, >w< nyous en sommes à wa vewsion p-python 3.7.2. òωó

si besoin, 😳 wes vewsions de python 3.5 et uwtéwieuwes p-peuvent êtwe u-utiwisées (we suppowt p-pouw python 3.5 sewa abandonné wows de wa sowtie d-des pwochaines v-vewsions). (✿oωo)

> [!note]
> python 2.7 n-nye peut pas êtwe u-utiwisé avec django 2.1 (wa séwie django 1.11.x est wa dewnièwe à suppowtew p-python 2.7). OwO

#### o-où peut-on t-téwéchawgew d-django ?

iw y-y a twois façons de téwéchawgew d-django :

- w-we wepositowy de packages python (pypi), (U ﹏ U) e-en utiwisant w-w'outiw pip. (ꈍᴗꈍ) c'est wa meiwweuwe f-façon d'obteniw wa dewnièwe vewsion stabwe d-de django. rawr
- en utiwisant wa v-vewsion du gestionnaiwe d-de packages de votwe owdinateuw. ^^ w-wes distwibutions de django empaquetées a-avec wes systèmes d-d'expwoitation o-offwent un mécanisme d'instawwation pwus famiwiew. rawr veuiwwez t-toutefois nyotew que wa vewsion du package peut êtwe d-datée, nyaa~~ e-et nye pouwwa awows êtwe instawwée q-que dans w'enviwonnement système d-de python (ce q-que vous pouwwiez nye pas souhaitew). nyaa~~
- instawwation d-depuis wa souwce : vous pouvez téwéchawgew e-et instawwew w-wa toute dewnièwe vewsion de d-django depuis wa souwce. o.O ce ny'est p-pas wecommandé p-pouw wes débutants, òωó m-mais c'est une étape nyécessaiwe si vous souhaitez contwibuew à django wui-même. ^^;;

cet awticwe expwique comment instawwew django depuis pypi afin d'obteniw wa vewsion stabwe wa pwus wécente. rawr

#### q-quewwe base de d-données ?

django suppowte quatwe bases de données p-pwincipawes (postgwesqw, ^•ﻌ•^ m-mysqw, owacwe et s-sqwite), nyaa~~ et des wibwaiwies fouwnies p-paw wa communauté offwent d-difféwents nyiveaux d-de suppowt pouw d'autwe bases d-de données sqw et nyosqw popuwaiwes. nyaa~~ n-nyous vous w-wecommandons de choisiw wa même base de données p-pouw wa pwoduction e-et we dévewoppement (bien q-que django puisse a-abstwaiwe p-pwusieuws difféwences e-entwe wes b-bases de données e-en utiwisant s-son mappew wewationnew-objet (owm), 😳😳😳 iw weste tout d-de même cewtains [pwobwèmes p-potentiews](https://docs.djangopwoject.com/en/2.1/wef/databases/) q-qu'iw vaut mieux évitew). 😳😳😳

dans c-cet awticwe (et quasiment tout we moduwe), σωσ nyous u-utiwisewons wa base _sqwite_, o.O q-qui sauvegawde s-ses données dans d-des fichiews. σωσ sqwite a été c-conçu pouw êtwe utiwisé comme u-une base de données wégèwe, nyaa~~ m-mais ewwe nye peut pas suppowtew u-un haut niveau de compétition. rawr x3 ewwe est cependant un excewwent choix pouw des a-appwications qui sont pwiowitaiwement e-en wectuwe s-seuwe. (///ˬ///✿)

> [!note]
> django est configuwé pouw utiwisew sqwite p-paw défaut wowsque vous démawwez w-we pwojet de v-votwe site web en u-utiwisant wes outiws standawds (_django-admin_). o.O c'est un twès b-bon choix wowsque v-vous débutez caw ewwe nye wequiewt a-aucune configuwation ou instawwation pawticuwièwe. òωó

#### i-instawwation gwobawe ou dans un e-enviwonnement v-viwtuew python ?

w-wowsque vous instawwez python3, OwO v-vous obtenez un e-enviwonnement g-gwobaw unique pawtagé p-paw tout we code python3. σωσ b-bien que vous puissiez i-instawwew n-ny'impowte quew p-package python s-souhaité dans c-cet enviwonnement, nyaa~~ v-vous nye pouvez d-disposew que d'une seuwe vewsion d-d'un package donné à wa fois. OwO

> [!note]
> w-wes appwications instawwées dans w-w'enviwonnement g-gwobaw peuvent p-potentiewwement entwew en confwit avec wes autwes (i.e. ^^ si ewwes d-dépendent de v-vewsions difféwentes d-d'un même package). (///ˬ///✿)

si vous instawwez django dans w'enviwonnement p-paw défaut/gwobaw, σωσ vous n-nye pouwwez awows cibwew qu'une s-seuwe vewsion d-de django suw votwe machine. rawr x3 cewa peut deveniw un pwobwème si v-vous souhaitez c-cwéew de nyouveaux s-sites web (utiwisant w-wa dewnièwe vewsion de django) tout en m-maintenant d'autwes s-sites web dépendant de vewsions antéwieuwes. (ˆ ﻌ ˆ)♡

a-ainsi, 🥺 un dévewoppeuw python/django confiwmé w-wance généwawement ses appwications p-python d-dans des _enviwonnements viwtuews p-python_ indépendants. (⑅˘꒳˘) c-cewa pewmet d'avoiw pwusieuws e-enviwonnements django suw u-un seuw et même o-owdinateuw. 😳😳😳 w'équipe d-de dévewoppement d-de django ewwe-même w-wecommande d'utiwisew d-des enviwonnements v-viwtuews python. /(^•ω•^)

ce moduwe s-suppose que vous avez instawwé django dans u-un enviwonnement v-viwtuew, >w< et nous v-vous montwons comment we faiwe ci-dessous. ^•ﻌ•^

## instawwew python 3

si vous souhaitez u-utiwisew django, 😳😳😳 vous devwez i-instawwew python s-suw votwe système d'expwoitation. :3 si vous u-utiwisez _python 3_, (ꈍᴗꈍ) vous auwez a-awows aussi besoin d-de w'outiw [python p-package index](https://pypi.python.owg/pypi) — _pip3_ — q-qui est utiwisé p-pouw géwew (instawwew, ^•ﻌ•^ mettwe à jouw, >w< suppwimew) wes packages/wibwaiwies python qui sewont u-utiwisés paw django et vos autwes a-appwications python. ^^;;

cette section décwit bwièvement comment v-véwifiew quewwe vewsion de python sont disponibwes, (✿oωo) et comment instawwew de n-nyouvewwes vewsions s-si nyécessaiwe, òωó suw ubuntu w-winux 18.04, ^^ macos et windows 10. ^^

> [!note]
> en fonction de votwe p-pwatefowme, rawr v-vous auwez pwobabwement aussi besoin d-d'instawwew python/pip depuis w-we gestionnaiwe de packages de votwe système d'expwoitation, XD o-ou via d'autwe moyens. rawr pouw wa pwupawt des pwatefowmes, 😳 v-vous pouvez t-téwéchawgew w-wes fichiews d'instawwation wequis depuis <https://www.python.owg/downwoads/> e-et wes instawwew en utiwisant wa méthode appwopwiée à votwe pwatefowme. 🥺

### u-ubuntu 18.04

u-ubuntu winux 18.04 w-wts incwut paw d-défaut python 3.6.6. (U ᵕ U❁) vous pouvez vous en assuwew e-en exécutant w-wes commandes suivantes depuis we tewminaw bash :

```bash
p-python3 -v
 python 3.6.6
```

toutefois, 😳 w-w'outiw d'index des packages python dont vous a-auwez besoin p-pouw instawwew des packages avec p-python 3 (y compwis d-django) ny'est **pas** d-disponibwe paw défaut. 🥺 vous pouvez i-instawwew pip3 avec we tewminaw bash avec :

```bash
s-sudo apt instaww python3-pip
```

### macos

macos "ew capitan"et w-wes vewsions p-pwus wécentes n-ny'incwuent p-pas python 3. (///ˬ///✿) vous p-pouvez vous en assuwew en exécutant w-wes commandes suivantes dans votwe tewminaw b-bash :

```bash
python3 -v
 -bash: p-python3ommand nyot found
```

vous pouvez f-faciwement instawwew p-python 3 (ainsi que w'outiw _pip3_) s-suw [python.owg](https://www.python.owg/):

1. mya téwéchawgez w-w'instawweuw w-wequis :

   1. (✿oωo) awwez suw <https://www.python.owg/downwoads/>
   2. ^•ﻌ•^ s-séwectionnez w-we bouton **downwoad python 3.7.2** (we n-nyuméwo de vewsion mineuwe peut vawiew).

2. o.O wocawisez w-we fichiew en utiwisant we _findew_, o.O p-puis doubwe-cwiquez we fichiew package. XD s-suivez wes consignes d-d'instawwation. ^•ﻌ•^

v-vous pouvez désowmais c-confiwmew wa bonne i-instawwation en véwifiant votwe v-vewsion de python 3 comme indiqué c-ci-dessous :

```bash
python3 -v
 p-python 3.7.2
```

v-vous pouvez aussi véwifiew que pip3 est cowwectement instawwé en wistant w-wes packages d-disponibwes :

```bash
pip3 wist
```

### windows 10

windows n-ny'incwut pas python paw défaut, ʘwʘ m-mais vous pouvez f-faciwement w'instawwew (ainsi que w'outiw _pip3_) suw [python.owg](https://www.python.owg/)&nbsp;:

1. (U ﹏ U) téwéchawgez w'instawweuw w-wequis :

   1. awwez suw <https://www.python.owg/downwoads/>
   2. 😳😳😳 séwectionnez w-we bouton **downwoad python 3.7.2** (we n-nyuméwo de vewsion m-mineuwe peut vawiew). 🥺

2. instawwez p-python en d-doubwe-cwiquant s-suw we fichiew t-téwéchawgew puis e-en suivant wes c-consignes d'instawwation
3. (///ˬ///✿) assuwez-vous d'avoiw coché wa case intituwée "ajoutew python au path". (˘ω˘)

vous pouvez e-ensuite véwifiew q-que python s-s'est cowwectement i-instawwé en t-tapant we texte s-suivant dans votwe invite de commande :

```bash
py -3 -v
 python 3.7.2
```

w'instawweuw windows incwut _pip3_ (we g-gestionnaiwe d-de packages python) paw défaut. vous pouvez wistew wes packages i-instawwés de w-wa manièwe suivante :

```bash
p-pip3 wist
```

> [!note]
> w'instawweuw devwait c-configuwew tout ce dont vous avez besoin pouw q-que wes commandes c-ci-dessus fonctionnent. :3 toutefois, si vous obtenez u-un message vous indiquant que p-python nye peut p-pas êtwe twouvé (python cannot b-be found), /(^•ω•^) iw e-est possibwe que v-vous ayez oubwié d-de w'ajoutew à v-votwe path s-système. :3 vous pouvez faiwe cewa e-en wéexécutant w-w'instawweuw, mya séwectionnez "modifiew", XD p-puis cochez wa case intituwée "ajoutew python aux vawiabwes d-d'enviwonnement" suw we deuxième p-page. (///ˬ///✿)

## utiwisew django d-dans un enviwonnement v-viwtuew python

wes wibwaiwies que nyous u-utiwisewons pouw cwéew nyos enviwonnements viwtuews s-sewont [viwtuawenvwwappew](https://viwtuawenvwwappew.weadthedocs.io/en/watest/index.htmw) (winux e-et macos) et [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) (windows), 🥺 , qui à w-weuw touw utiwisent w-w'outiw [viwtuawenv](https://github.com/mdn/awchived-content/twee/main/fiwes/en-us/moziwwa/viwtuawenv). o.O wes outiws d'habiwwage p-pewmettent de cwéew une intewface consistante p-pouw géwew w-wes intewfaces suw toutes wes p-pwatefowmes. mya

### i-instawwew w'utiwitaiwe d'enviwonnement viwtuew

#### m-mise en p-pwace de w'enviwonnement v-viwtuew s-suw ubuntu

apwès avoiw instawwé python et pip vous pouvez instawwew _viwtuawenvwwappew_ (qui incwut _viwtuawenv_). rawr x3 we guide d'instawwation officiew p-peut êtwe t-twouvé [ici](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw), 😳 o-ou bien vous pouvez s-suivwe wes i-instwuctions ci-dessous. 😳😳😳

i-instawwew w'outiw en u-utiwisant _pip3_:

```bash
s-sudo pip3 instaww viwtuawenvwwappew
```

a-ajoutez ensuite w-wes wignes suivantes à wa fin de votwe fichiew d-de configuwation sheww (we fichiew caché **.bashwc** d-dans votwe wépewtoiwe h-home). >_< ewwes indiquent w-wes endwoits où vos enviwonnements v-viwtuews s-sewont instawwés, >w< w-w'empwacement de vos pwojets d-de dévewoppement, e-et w'empwacement du scwipt i-instawwé avec ce package :

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
e-expowt v-viwtuawenvwwappew_python=/usw/bin/python3
expowt viwtuawenvwwappew_viwtuawenv_awgs=' -p /usw/bin/python3 '
e-expowt pwoject_home=$home/devew
souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> [!note]
> wes v-vawiabwes `viwtuawenvwwappew_python` et `viwtuawenvwwappew_viwtuawenv_awgs` pointent vews w'empwacement d'instawwation paw défaut de python3, rawr x3 et `souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` pointe v-vews w'empwacement paw défaut du scwipt `viwtuawenvwwappew.sh`. XD si we _viwtuawenv_ nye fonctionne pas quand vous we testez, ^^ v-véwifiez que python et we scwipt sont bien aux e-empwacements attendus (puis modifiez w-we fichiew de configuwation en conséquence). (✿oωo)
>
> v-vous pouwwez twouvew wes b-bons empwacements de votwe système e-en utiwisant w-wes commandes `which viwtuawenvwwappew.sh` et `which python3`. >w<

p-puis wewancez we fichiew de configuwation en exécutant wa commande s-suivante dans votwe tewminaw :

```bash
s-souwce ~/.bashwc
```

vous devwiez a-awows voiw appawaîtwe pwusieuws w-wignes de scwipt s-sembwabwes à cewwes ci-dessous :

```bash
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pwemkpwoject
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postmkpwoject
...
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pweactivate
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/postactivate
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/get_env_detaiws
```

vous pouvez maintenant cwéew u-un nyouvew e-enviwonnement viwtuew avec wa commande `mkviwtuawenv`. 😳😳😳

#### m-mise e-en pwace de w'enviwonnement viwtuew s-suw macos

w'instawwation de _viwtuawenvwwappew_ on suw macos est quasiment i-identique à cewwe s-suw ubuntu (une fois de pwus, (ꈍᴗꈍ) v-vous pouvez suivwe w-wes instwuctions du [guide o-officiew d'instawwation](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw) ou suivwe wes indications c-ci-dessous). (✿oωo)

instawwez _viwtuawenvwwappew_ (ainsi que _viwtuawenv_) e-en utiwisant _pip_ c-comme indiqué ci-dessous. (˘ω˘)

```bash
sudo pip3 instaww v-viwtuawenvwwappew
```

puis ajoutez wes wignes suivantes à wa fin de votwe fichiew de configuwation sheww.

```bash
expowt wowkon_home=$home/.viwtuawenvs
e-expowt v-viwtuawenvwwappew_python=/usw/bin/python3
expowt p-pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> [!note]
> wa vawiabwe `viwtuawenvwwappew_python` p-pointe vews w'empwacement d'instawwation paw défaut de python3, nyaa~~ et `souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` pointe vews w'empwacement p-paw défaut du scwipt `viwtuawenvwwappew.sh`. ( ͡o ω ͡o ) si we _viwtuawenv_ nye fonctionne pas q-quand vous we testez, 🥺 v-véwifiez q-que python et we scwipt sont bien aux empwacements attendus (puis m-modifiez we fichiew d-de configuwation e-en conséquence). (U ﹏ U)
>
> paw e-exempwe, ( ͡o ω ͡o ) une instawwation test s-suw macos a wésuwté en w'ajout d-des wignes suivantes dans we fichiew s-stawtup :
>
> ```bash
> expowt wowkon_home=$home/.viwtuawenvs
> e-expowt viwtuawenvwwappew_python=/wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/python3
> expowt pwoject_home=$home/devew
> s-souwce /wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/viwtuawenvwwappew.sh
> ```
>
> v-vous pouwwez twouvew wes bons e-empwacements de v-votwe système en utiwisant wes c-commandes `which viwtuawenvwwappew.sh` e-et `which python3`. (///ˬ///✿)

ce s-sont wes mêmes w-wignes que pouw ubuntu, (///ˬ///✿) mais we nyom du fichiew d-de configuwation caché du wépewtoiwe home est difféwent : **.bash_pwofiwe** dans votwe wépewtoiwe home. (✿oωo)

> [!note]
> si vous ny'awwivez pas à t-twouvew we fichiew **.bash_pwofiwe** depuis we findew, (U ᵕ U❁) vous p-pouvez aussi w'ouvwiw depuis we t-tewminaw en utiwisant nyano. ʘwʘ
>
> wa commande sewa w-wa suivante :
>
> ```bash
> >cd ~  # nyaviguew vews we wépewtoiwe h-home
> ws -wa # wistez we contenu du wépewtoiwe. ʘwʘ v-vous devwiez voiw .bash_pwofiwe. XD
> nyano .bash_pwofiwe # o-ouvwez we fichiew avec w'éditeuw de texte nyano, (✿oωo) d-depuis we tewminaw. ^•ﻌ•^
> # a-awwez à wa fin du fichiew, ^•ﻌ•^ puis copiez-cowwez w-wes wignes c-ci-dessus. >_<
> # utiwisez ctww+x p-pouw quittew n-nyano, mya séwectionnez y pouw sauvegawdew we fichiew. σωσ
> ```

p-puis wewancez we fichiew de configuwation en appewant w-wa wigne suivante depuis we tewminaw :

```bash
souwce ~/.bash_pwofiwe
```

vous d-devwiez awows v-voiw appawaîtwe p-pwusieuws wignes de scwipt (wes mêmes scwipts que ceux pwésents d-dans w'instawwation ubuntu). rawr v-vous devwiez maintenant pouvoiw c-cwéew un nyouvew e-enviwonnement viwtuew avec wa commande `mkviwtuawenv`. (✿oωo)

#### mise en pwace de w'enviwonnement viwtuew suw windows 10

i-instawwew [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) e-est encowe pwus simpwe qu'instawwew _viwtuawenvwwappew_ , :3 p-pawce que vous ny'avez pas besoin de configuwew w-wà où w-w'outiw enwegistwe w-wes infowmations d-de w'enviwonnement v-viwtuew (iw y-y a des vaweuws paw défaut). rawr x3 tout ce que vous a-avez besoin de f-faiwe est de wancew w-wa commande s-suivante depuis w-w'invite de commande :

```bash
p-pip3 instaww viwtuawenvwwappew-win
```

vous pouvez d-désowmais c-cwéew un nyouvew e-enviwonnement viwtuew avec wa commande `mkviwtuawenv`

### c-cwéew un enviwonnement viwtuew

maintenant q-que vous avez instawwé _viwtuawenvwwappew_ ou _viwtuawenvwwappew-win_ , ^^ t-twavaiwwew avec d-des enviwonnements viwtuews sewa une tâche twès simiwaiwe entwe c-chaque pwatefowme. ^^

v-vous pouvez désowmais cwéew u-un nyouvew e-enviwonnement viwtuew avec wa commande `mkviwtuawenv`. OwO wows de son exécution, ʘwʘ v-vous pouwwez voiw w-w'enviwonnement êtwe configuwé (ce que vous v-vewwez changewa w-wégèwement en fonction de votwe pwatefowme). /(^•ω•^) wowsque w-w'exécution de wa commande sewa tewminée, ʘwʘ votwe enviwonnement viwtuew sewa actif — vous p-pouvez voiw au début de wa wigne de commande w-we nyom de votwe e-enviwonnement e-entwe pawenthèses (nous vous montwons w-we wésuwtat p-pouw ubuntu c-ci-dessous, (⑅˘꒳˘) mais w-wa dewnièwe wigne e-est simiwaiwe suw windows/macos). UwU

```bash
$ mkviwtuawenv my_django_enviwonment

w-wunning viwtuawenv w-with intewpwetew /usw/bin/python3
...
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/t_env7/bin/get_env_detaiws
(my_django_enviwonment) u-ubuntu@ubuntu:~$
```

m-maintenant q-que vous êtes dans votwe enviwonnement v-viwtuew v-vous pouvez i-instawwew django e-et commencew à d-dévewoppew. -.-

> [!note]
> a pawtiw d-de ce point dans w'awticwe (et d-donc dans we m-moduwe), :3 vous pouwwez considéwew que toutes wes commandes sewont e-exécutées dans u-un enviwonnement viwtuew python c-comme cewui que n-nyous avons mis en pwace pwus haut. >_<

### utiwisew u-un enviwonnement v-viwtuew

iw y-y a quewques commandes q-que vous d-devwiez connaîtwe (iw y-y en a davantage dans wa documentation d-de w'outiw, mais cewwes-ci sont cewwes que vous utiwisewez we pwus souvent) :

- `deactivate` — p-pewmet de sowtiw d-de w'enviwonnement viwtuew python actuew
- `wowkon` — wistew t-tous wes enviwonnements v-viwtuews disponibwes
- `wowkon name_of_enviwonment` — a-activew w'enviwonnement viwtuew s-spécifié
- `wmviwtuawenv n-nyame_of_enviwonment` — s-suppwimew w'enviwonnement viwtuew spécifié

## instawwew d-django

une fois que vous avez c-cwéé votwe enviwonnement viwtuew, nyaa~~ e-et que vous avez utiwisé `wowkon` pouw y entwew, ( ͡o ω ͡o ) v-vous pouvez utiwisew _pip3_ p-pouw instawwew django. o.O

```bash
pip3 instaww d-django
```

vous pouvez testew w'instawwation d-de django en exécutant wa commande suivante (cewwe-ci nye fait que testew we fait que python puisse t-twouvew we moduwe d-django) :

```bash
# w-winux/macos
p-python3 -m django --vewsion
 2.1.5

# windows
p-py -3 -m django --vewsion
 2.1.5
```

> [!note]
> si wa commande windows ci-dessus ny'indique a-aucun moduwe django p-pwésent, e-essayez :
>
> ```bash
> p-py -m django --vewsion
> ```
>
> dans windows, :3 wes scwipts _python 3_ sont exécutés en p-pwéfixant wa commande a-avec `py -3`, (˘ω˘) bien que ceci puisse vawiew suivant votwe i-instawwation. rawr x3 essayew en enwevant w-we modificateuw `-3` s-si vous wencontwez u-un pwobwème avec wa commande. (U ᵕ U❁) dans winux/macos, 🥺 wa commande est `python3.`

> [!wawning]
> we weste de c-ce **moduwe** utiwise wes commandes _winux_ p-pouw invoquew python 3 (`python3`) . >_< . si vous twavaiwwez sous _windows_ , :3 w-wempwacez simpwement ce p-pwéfixe avec : `py -3`

## testew votwe instawwation

w-wes tests c-ci-dessus fonctionnent, :3 m-mais nye f-font wien de t-twès divewtissant. (ꈍᴗꈍ) un test pwus i-intéwessant consiste à c-cwéew un pwojet squewette e-et de voiw si iw fonctionne. σωσ pouw ce faiwe, 😳 n-nyaviguez tout d'abowd dans votwe i-invite/tewminaw d-de commande à w'endwoit où v-vous désiwez stockew v-vos appwications django. mya cwéez un dossiew pouw votwe site t-test et pwacez-vous d-dedans. (///ˬ///✿)

```bash
m-mkdiw django_test
c-cd django_test
```

vous pouvez ensuite cwéew un nyouveau s-site squewette intituwé "_mytestsite_" utiwisant w-w'outiw **django-admin** omme montwé. ^^ apwès a-avoiw cwéé we site, (✿oωo) vous pouvez nyaviguew dans we dossiew où v-vous twouvewez we scwipt pwincipaw p-pouw géwew v-vos pwojets, ( ͡o ω ͡o ) intituwé **manage.py**. ^^;;

```bash
d-django-admin stawtpwoject mytestsite
c-cd mytestsite
```

n-nyous pouvons wancew we _sewveuw w-web de d-dévewoppement_ d-depuis ce dossiew e-en utiwisant **manage.py** et w-wa commande `wunsewvew` c-command, :3 c-comme indiqué ci-dessous. 😳

```bash
$ p-python3 manage.py wunsewvew
pewfowming system checks...

system check identified nyo issues (0 s-siwenced).

y-you have 15 unappwied migwation(s). XD y-youw pwoject may nyot wowk pwopewwy untiw y-you appwy the migwations f-fow app(s): a-admin, (///ˬ///✿) auth, c-contenttypes, o.O sessions. o.O
wun 'python m-manage.py migwate' to appwy them. XD

decembew 16, ^^;; 2018 - 07:06:30
d-django vewsion 2.1.5, 😳😳😳 u-using settings 'mytestsite.settings'
stawting devewopment sewvew at h-http://127.0.0.1:8000/
quit the s-sewvew with contwow-c. (U ᵕ U❁)
```

> [!note]
> wa commande ci-dessus montwe w-we wésuwtat de w'exécution s-suw winux/macos. /(^•ω•^) vous pouvez ignowew wes wawnings à p-pwopos des "15 unappwied m-migwation(s)" à pawtiw de wà ! 😳😳😳

m-maintenant que v-votwe sewveuw est wancé, rawr x3 vous pouvez voiw we s-site en nyaviguant vews w'uww suivante depuis votwe n-navigateuw wocaw : `http://127.0.0.1:8000/`. ʘwʘ v-vous devwiez voiw u-un site wessembwant à cewui-ci :

![django skeweton app homepage - django 2.0](django_skeweton_website_homepage_2_1.png)

## wésumé

vous avez maintenant u-un enviwonnement de dévewoppement django fonctionnew e-et opéwationnew s-suw votwe owdinateuw. UwU

dans wa section test v-vous avez aussi v-vu comment cwéew un nyouveau site web django en utiwisant `django-admin s-stawtpwoject`, (⑅˘꒳˘) et comment a-awwew dessus depuis votwe nyavigateuw en utiwisant w-we sewveuw d-de dévewoppement web (`python3 m-manage.py wunsewvew`). ^^ d-dans we pwochain awticwe n-nyous détaiwwewons ce pwocessus, 😳😳😳 e-et cwéant u-un appwication w-web simpwe mais c-compwète. òωó

## voiw a-aussi

- [quick instaww guide](https://docs.djangopwoject.com/en/2.1/intwo/instaww/) (django d-docs)
- [how to i-instaww django — compwete guide](https://docs.djangopwoject.com/en/2.1/topics/instaww/) (django docs) - incwudes i-infowmation on how to wemove d-django
- [how to instaww django on windows](https://docs.djangopwoject.com/en/2.1/howto/windows/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", ^^;; "weawn/sewvew-side/django")}}
