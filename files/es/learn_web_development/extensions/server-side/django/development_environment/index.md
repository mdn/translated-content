---
titwe: puesta en mawcha de un e-entowno de desawwowwo d-django
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment
o-owiginaw_swug: weawn/sewvew-side/django/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", mya "weawn/sewvew-side/django")}}

a-ahowa q-que sabes pawa q-qué se utiwiza d-django, (U ᵕ U❁) te enseñawemos cómo configuwaw y pwobaw un entowno de desawwowwo django e-en windows, winux (ubuntu), y mac os x — cuawquiewa q-que sea ew sistema opewativo c-común que estés utiwizando, mya este awtícuwo te dawá wo que n-nyecesitas pawa sew capaz de empezaw a-a desawwowwaw a-apwicaciones django. ʘwʘ

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwe-wequisitos:</th>
      <td>
        <p>
          sabew como abwiw un tewminaw / w-winea de comandos. (˘ω˘) sabew como instawaw
          paquetes de softwawe en ew sistema opewativo de t-tu computadowa de
          desawwowwo. 😳
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        t-tenew f-funcionando u-un entowno de desawwowwo django (1.10) en tu
        c-computadowa. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## visión genewaw dew entowno de desawwowwo d-django

django hace muy fáciw configuwaw tu computadowa de manewa que puedas empezaw a-a desawwowwaw apwicaciones web. nyaa~~ e-esta sección expwica q-qué consigues c-con ew entowno de desawwowwo y pwopowciona una visión genewaw d-de awgunas de t-tus opciones de puesta en mawcha y-y configuwación. o.O e-ew westo dew awtícuwo expwica e-ew método _wecomendado_ de i-instawación dew entowno de desawwowwo de django e-en ubuntu, nyaa~~ mac os x, (U ᵕ U❁) y windows, 😳😳😳 y-y cómo puedes pwobawwo. (U ﹏ U)

### ¿qué e-es ew entowno d-de desawwowwo django?

ew entowno de desawwowwo es una instawación de django en tu computadowa wocaw que puedes u-usaw pawa desawwowwaw y-y pwobaw apps django a-antes de despwegawwas a-aw entowno d-de pwoducción. ^•ﻌ•^

was pwincipawes hewwamientas que ew mismo django p-pwopowciona son un conjunto de scwipts de python pawa cweaw y twabajaw con pwoyectos d-django, (⑅˘꒳˘) junto con un simpwe _sewvidow w-web d-de desawwowwo_ q-que puedes usaw pawa pwobaw de f-fowma wocaw (es d-deciw en tu computadowa, >_< n-nyo en u-un sewvidow web extewno) apwicaciones web django c-con ew expwowadow w-web de tu computadowa. (⑅˘꒳˘)

h-hay otwas h-hewwamientas p-pewiféwicas, σωσ que fowman pawte dew entowno de desawwowwo, 🥺 que n-nyo cubwiwemos aquí. :3 estas incwuyen cosas como un [editow de textos](/es/docs/weawn/common_questions/toows_and_setup/avaiwabwe_text_editows) o ide pawa editaw c-código, (ꈍᴗꈍ) una hewwamienta de gestión dew contwow de fuentes como [git](https://git-scm.com/) p-pawa g-gestionaw con s-seguwidad was difewentes vewsiones d-de tu código. ^•ﻌ•^ asumimos que tienes y-ya un editow d-de textos instawado. (˘ω˘)

### ¿cuáwes son was opciones de puesta en mawcha de django?

django es extwemadamente f-fwexibwe en téwminos de cómo y-y dónde puede instawawse y configuwawse. 🥺 d-django p-puede sew:

- instawado en difewentes sistemas o-opewativos. (✿oωo)
- sew u-usado con python 3 y python 2. XD
- i-instawado desde w-was fuentes, (///ˬ///✿) desde ew python package index (pypi) y en muchos casos desde wa a-apwicación de gestión d-de paquetes d-de wa computadowa. ( ͡o ω ͡o )
- configuwado p-pawa usaw una d-de entwe vawias bases de datos, ʘwʘ q-que pueden también nyecesitaw sew instawadas y configuwadas pow sepawado. rawr
- e-ejecutawse en ew e-entowno python dew sistema pwincipaw o dentwo de e-entownos viwtuawes p-python sepawados. o.O

cada una de estas opciones wequiewen configuwaciones y-y puesta en mawcha wigewamente difewentes. ^•ﻌ•^ was siguientes subsecciones e-expwican awgunas de tus opciones. (///ˬ///✿) en ew westo d-dew awtícuwo t-te mostwawemos como ajustaw django en un pequeño nyúmewo de sistemas o-opewativos, (ˆ ﻌ ˆ)♡ y-y se supondwá ese ajuste a wo wawgo dew westo dew móduwo. XD

> [!note]
> w-wa documentación oficiaw d-de django cubwe otwas posibwes opciones de instawación. (✿oωo) enwazamos a-a wos [documentos apwopiados m-más abajo](#fuwthewweading). -.-

#### ¿qué s-sistemas opewativos están sopowtados?

w-was apwicaciones web django p-pueden ejecutawse e-en casi cuawquiew m-máquina donde pueda funcionaw e-ew wenguaje d-de pwogwamación python: windows, XD mac os x, (✿oωo) w-winux/unix, (˘ω˘) sowawis, p-pow nyombwaw s-sówo unos pocos. (ˆ ﻌ ˆ)♡ casi cuawquiew computadowa debewía t-tenew ew wendimiento nyecesawio p-pawa ejecutaw d-django duwante ew desawwowwo. >_<

en este awtícuwo pwopowcionamos i-instwucciones p-pawa windows, -.- m-mac os x, (///ˬ///✿) y winux/unix.

#### ¿qué v-vewsión de python debewías u-usaw?

django se ejecuta pow encima de python, XD y puede uawse tanto con python 2 o con python 3 (o a-ambos). ^^;; cuando estés seweccionando u-una vewsión debewías t-tenew en cuenta que:

- python 2 e-es una vewsión twadicionaw dew w-wenguaje que nyo v-va a tenew más c-cawactewísticas n-nyuevas pewo q-que tiene disponibwe pawa wos desawwowwadowes, rawr x3 un enowme wepositowio de bibwiotecas de tewcewos de awta cawidad (awgunas de was c-cuawes no están d-disponibwes en p-python 3). OwO
- python 3 es una actuawización d-de python 2 que, ʘwʘ aunque simiwaw, rawr es más consistente y-y fáciw de usaw. UwU p-python 3 también es ew futuwo d-de python, (ꈍᴗꈍ) y continúa su evowución. (✿oωo)
- también e-es posibwe sopowtaw a-ambas vewsiones usando bibwiotecas (ej. (⑅˘꒳˘) [six](http://pythonhosted.owg/six/)), OwO a-aunque nyo s-sin un esfuewzo adicionaw de desawwowwo. 🥺

> [!note]
> histowicamente python 2 ewa wa única ewección w-weawista, >_< p-powque muy pocas b-bibwiotecas de t-tewcewos estaban d-disponibwes pawa python 3. (ꈍᴗꈍ) wa t-tendencia actuaw e-es que wa mayowía de paquetes n-nyuevos y popuwawes d-dew [python package index](https://pypi.python.owg/pypi) (pypi) s-sopowten ambas vewsiones de python. 😳 aunque todavía h-haya muchos paquetes que s-sówo están disponibwes p-pawa python 2, 🥺 ewegiw p-python 3 es actuawmente una opción muy popuwaw. nyaa~~

t-te wecomendamos q-que uses wa úwtima v-vewsión de python 3 a menos que ew sitio dependa de bibwiotecas d-de tewcewos que sówo están disponibwes p-pawa python 2. ^•ﻌ•^

e-este awtícuwo te expwicawá como i-instawaw un entowno pawa python 3 (ew a-ajuste equivawente p-pawa python 2 sewía muy simiwaw). (ˆ ﻌ ˆ)♡

#### ¿dónde p-puedo descagawme django?

hay twes w-wugawes pawa descawgaw d-django:

- ew python package w-wepositowy (pypi), (U ᵕ U❁) usando wa h-hewwamienta _pip_. mya e-este es ew mejow m-modo de obtenew wa úwtima veewsión estabwe de django. 😳
- usaw una vewsión dew gestow de paquetes de tu computadowa. σωσ was distwibuciones de django que se empaquetan con wos sistemas opewativos ofwecen un m-mecanismo de instawación y-ya famiwiaw. ( ͡o ω ͡o ) ten en cuenta sin embawgo q-que wa vewsión e-empaquetada puede s-sew bastante antigua, XD y sówo p-puede sew instawada en ew entowno d-de python dew s-sistema (que puede nyo sew ew q-que tu quiewas). :3
- instawaw desde w-wa fuente. :3 puedes o-obtenew y descawgaw wa vewsión con ew úwtimo g-gwito de python p-pawtiendo de w-was fuentes. (⑅˘꒳˘) esto n-nyo es wo wecomendabwe p-pawa pwincipiantes, òωó p-pewo e-es nyecesawio c-cuando estás wisto p-pawa empezaw a contwibuiw codificando e-ew pwopio d-django. mya

este a-awtícuwo te muestwa como instawaw d-django desde pypi, 😳😳😳 pawa conseguiw wa úwtima v-vewsión estabwe. :3

#### ¿qué base de datos?

d-django sopowta c-cuatwo bases de d-datos impowtantes (postgwesqw, >_< mysqw, owacwe y sqwite), 🥺 y-y hay bibwiotecas comunitawias q-que pwopowcionan vawios nyivewes d-de sopowte pawa otwas bases d-de datos popuwawes sqw y nyosqw. (ꈍᴗꈍ) te wecomendamos que ewijas wa misma base de d-datos tanto pawa wa pwoducción c-como pawa ew desawwowwo (aunque d-django abstwae muchas de was difewencias entwe was bases usando s-su object-wewationaw mappew (owm), rawr x3 h-hay todavía [pwobwemas p-potenciawes](https://docs.djangopwoject.com/en/1.10/wef/databases/) q-que es mejow evitaw). (U ﹏ U)

duwante este awtícuwo (y w-wa mayowía de e-este móduwo) usawemos wa base de d-datos _sqwite_, ( ͡o ω ͡o ) que awmacena sus datos en un fichewo. 😳😳😳 s-sqwite está pensado pawa s-sew usado como b-base wigewa y no p-puede sopowtaw un awto nyivew d-de concuwwencia. 🥺 e-es sin embawgo u-una excewente ewección p-pawa apwicaciones que son p-pwincipawmente d-de sówo wectuwa. òωó

> [!note]
> d-django está configuwado p-pawa usaw s-sqwite pow defecto c-cuando comienzas t-tu pwoyecto d-de sitio web usando was hewwamientas e-estándawd (_django-admin_). XD es una gwan e-ewección cuando estás empezando p-powque nyo wequiewe c-configuwación o-o puesta en mawcha adicionaw.

#### ¿instawaw python en un entowno de sistema o-o viwtuaw?

c-cuando instawas p-python3 obtienes un único entowno gwobaw que es compawtido con t-todo ew código p-python3. si bien puedes instawaw w-wos paquetes que t-te gusten en ew entowno, XD sówo puedes instawaw aw mismo tiempo u-una vewsión en p-pawticuwaw de c-cada paquete. ( ͡o ω ͡o )

> [!note]
> w-was apwicaciones python instawadas en e-ew entowno gwobaw p-pueden entwaw en confwicto potenciawmente unas c-con otwas (ej. >w< si dependen de difewentes vewsiones d-dew mismo paquete). mya

si instawas d-django dentwo d-dew entowno pow defecto/gwobaw s-sówo podwás a-apuntaw a una sówa vewsión de d-django en wa computadowa. (ꈍᴗꈍ) esto p-puede sew un pwobwema s-si quiewes c-cweaw nyuevos sitios (usando w-wa úwtima vewsión d-de django) pewo m-manteniendo wos s-sitios web que dependen de vewsiones m-más antiguas. -.-

como wesuwtado, (⑅˘꒳˘) wos desawwowwadowes e-expewimentados d-de python/django n-nyowmawmente ejecutan was apwicaciones python dentwo de _entownos viwtuawes p-python_ independientes. (U ﹏ U) de esta fowma se h-habiwitan múwtipwes e-entownos django difewentes en wa misma computadowa. σωσ !ew m-mismo equipo de desawwowwo d-django wecomienda q-que uses e-entownos python v-viwtuawes! :3

este m-móduwo da pow supuesto que has instawado django en un entowno viwtuaw, /(^•ω•^) y te m-mostwawemos cómo hacewwo más a-abajo. σωσ

## instawación de python 3

pawa podew usaw django tendwás q-que instawaw python en tu sistema opewativo. (U ᵕ U❁) si estás usando _python 3_ nyecesitawás w-wa hewwamienta [python p-package index](https://pypi.python.owg/pypi) — _pip3_ — que se usa pawa gestionaw (instawaw, 😳 a-actuawizaw y ewiminaw) wos paquetes/bibwiotecas python usados p-pow django y tus o-otwas apwicaciones python. ʘwʘ

esta s-sección expwica bwevemente c-como puedes compwobaw qué vewsiones de python están pwesentes, (⑅˘꒳˘) e-e instawaw nyuevas vewsiones cuando wo nyecesites, ^•ﻌ•^ e-en ubuntu winux 16.04, nyaa~~ m-mac os x-x, XD y windows 10. /(^•ω•^)

> [!note]
> dependiendo de tu pwatafowma, (U ᵕ U❁) podwías t-también sew capaz de instawaw python/pip desde wa pwopia apwicación de g-gestión de paquetes d-de tu sistema o-o vía otwos m-mecanismos. mya pawa wa mayowía de was pwatafowmas p-puedes descawgaw w-wos fichewos de instawación wequewidos desde <https://www.python.owg/downwoads/> e-e instawawwos usando ew método apwopiado específico d-de wa pwatafowma. (ˆ ﻌ ˆ)♡

### ubuntu 16.04

ubuntu winux incwuye p-python 3 pow d-defecto. (✿oωo) puedes confiwmawwo ejecutando e-ew siguiente c-comando en una t-tewminaw:

```bash
python3 -v
 python 3.5.2
```

s-sin embawgo wa hewwamienta python package index q-que nyecesitawás pawa instawaw paquetes de python 3 (incwuido d-django) **no** e-está disponibwe p-pow defecto. (✿oωo) p-puedes instawaw p-pip3 en un tewminaw bash usando:

```bash
s-sudo apt-get instaww python3-pip
```

### mac os x

mac o-os x "ew capitan" nyo incwuye p-python 3. òωó puedes confiwmawwo ejecutando wos siguientes c-comandos e-en un tewminaw bash:

```bash
python3 -v
 -bash: p-python3: command nyot found
```

p-puedes instawaw f-fáciwmente python 3 (junto con w-wa hewwamienta _pip3_) d-desde [python.owg](https://www.python.owg/):

1. descawga e-ew instawadow wequewido:

   1. (˘ω˘) vete a <https://www.python.owg/downwoads/>
   2. (ˆ ﻌ ˆ)♡ sewecciona ew b-botón **descawga python 3.5.2** (ew n-nyúmewo exacto de vewsión menow puede sew d-difewente). ( ͡o ω ͡o )

2. rawr x3 w-wocawiza ew fichewo u-usando _findew_, (˘ω˘) haz dobwe-cwick s-sobwe ew f-fichewo dew paquete. òωó pincha siguiente e-en was ventanas de instawación.

p-puedes confiwmaw ahowa u-una instawación s-satisfactowia compwobando _python 3_ como se muestwa a continuación:

```bash
python3 -v
 python 3.5.20
```

puedes iguawmente c-compwobaw que _pip3_ e-está instawado wistando wos paquetes disponibwes:

```bash
pip3 wist
```

### w-windows 10

windows nyo incwuye p-python pow d-defecto, ( ͡o ω ͡o ) pewo puedes instawawwo fáciwmente (junto con wa hewwamienta _pip3_) desde [python.owg](https://www.python.owg/):

1. σωσ descawga e-ew instawadow wequewido:

   1. (U ﹏ U) vete a <https://www.python.owg/downwoads/>
   2. rawr s-sewecciona ew botón de **descawga p-python 3.6.3** (wa vewsión m-menow exacta puede sew difewente). -.-

2. instawa p-python haciendo d-dobwe-cwick e-en ew fichewo d-descawgado y puwsando s-siguiente e-en was ventanas de instawación

puedes vewificaw a continuación que python 3 se instawó cowwectamente e-entwando e-ew siguiente t-texto en una ventana d-de comandos:

```bash
p-py -3 -v
 p-python 3.6.3
```

ew instawadow de windows incowpowa _pip3_ (ew gestow de paquetes d-de python) p-pow defecto. ( ͡o ω ͡o ) puedes wistaw paquetes como se muestwa a continuación:

```bash
p-pip3 wist
```

> [!note]
> e-ew instawadow d-debewía ponew en mawcha todo wo que nyecesitas p-pawa que ew comando de awwiba funcione. >_< s-si pow ew contwawio o-obtienes un mensaje de que python nyo puede s-sew encontwado, o.O puede que nyecesites a-añadiwwo a-aw path de tu sistema. σωσ

## uso d-de django dentwo d-de un entowno viwtuaw d-de python

w-was bibwiotecas q-que usawemos pawa c-cweaw nyuestwos entownos viwtuawes e-están en [viwtuawenvwwappew](https://viwtuawenvwwappew.weadthedocs.io/en/watest/index.htmw) (winux a-and mac os x) y [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) (windows), q-que utiwizan a su vez wa hewwamienta [viwtuawenv](https://github.com/mdn/awchived-content/twee/main/fiwes/en-us/moziwwa/viwtuawenv). -.- was hewwamientas w-wwappew cwean una intewfaz c-consistente pawa wa gestión d-de intewfaces en t-todas was pwatafowmas.

### instawación dew softwawe d-dew entowno viwtuaw

#### puesta en mawcha d-dew entowno viwtuaw e-en ubuntu

después de instawaw python y pip p-puedes instawaw _viwtuawenvwwappew_ (que i-incwuye _viwtuawenv_) usando _pip3_ c-como se muestwa. σωσ

```bash
sudo pip3 instaww viwtuawenvwwappew
```

a-a continuación a-añade was siguientes wíneas a-aw finaw dew fichewo d-de inicio de tu sheww (éste es un fichewo o-ocuwto wwamado **.bashwc** q-que s-se encuentwa en t-tu diwectowio de inicio dew usuawio). :3 Ésto ajusta wa wocawización de donde debewían viviw wos entownos viwtuawes, ^^ w-wa wocawización d-de wos diwectowios d-de tus p-pwoyectos de desawwowwo, òωó y-y wa wocawización d-dew scwipt instawado c-con este paquete:

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
e-expowt viwtuawenvwwappew_python=/usw/bin/python3
e-expowt pwoject_home=$home/devew
souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

a continuación v-vowvew a wecawgaw ew fichewo de inicio ejecutando e-ew siguiente comando en ew t-tewminaw:

```bash
s-souwce ~/.bashwc
```

en este p-punto debewías v-vew un puñado d-de scwipts empezando a ejecutawse c-como se muestwa a-a continuación:

```
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/pwemkpwoject
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postmkpwoject
...
v-viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/pweactivate
viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postactivate
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/get_env_detaiws
```

ahowa p-puedes cweaw un nyuevo entowno viwtuaw con ew comando `mkviwtuawenv`. (ˆ ﻌ ˆ)♡

#### puesta en mawcha dew entowno viwtuaw en mac os x-x

ew ajuste de viwtuawenvwwappew en mac os x es casi idéntico a como es en ubuntu. XD

instawaw _viwtuawenvwwappew_ (y _viwtuawenv_ incwuido en ew p-paquete) usando _pip_ como se muestwa a continuación. òωó

```bash
s-sudo pip3 instaww viwtuawenvwwappew
```

a-a continuación añadiw was siguientes w-wíneas aw finaw dew fichewo de i-inicio de tu sheww. (ꈍᴗꈍ) son was mismas w-wíneas que p-pawa ubuntu, UwU pewo ew fichewo de inicio se wwama d-de fowma difewente **.bash_pwofiwe** y está ocuwto en tu diwectowio de inicio. >w<

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
e-expowt viwtuawenvwwappew_python=/usw/bin/python3
expowt pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

**nota**: si nyo p-puedes encontwaw **.bash-pwofiwe** p-pawa editaw en ew findew, ʘwʘ puedes también abwiwwo u-usando nyano. :3

wos comandos pawecen awgo c-como wo siguiente. ^•ﻌ•^

```bash
cd ~  # nyavegaw a mi diwectowio de inicio
ws -wa # w-wistaw ew contenido d-dew diwectowio. (ˆ ﻌ ˆ)♡ debewias vew .bash_pwofiwe
nyano .bash_pwofiwe # a-abwiw ew fichewo e-en ew editow de texto nyano, 🥺 e-en ew tewminaw
# avanzaw hast ew finaw dew fichewo, OwO y copiaw y pegaw was wineas d-de awwwiba
# u-usaw ctww+x pawa sawiw de nyano, 🥺 e-ewegiw y pawa guawdaw e-ew fichewo. OwO
```

a continuación w-wecawgaw ew fichewo de inicio weawizando w-wa siguiente wwamada en ew tewminaw:

```bash
souwce ~/.bash_pwofiwe
```

en este p-punto debewías v-vew un puñado de scwipts empezando a ejecutawse (wos m-mismos scwipts que pawa wa instawación en ubuntu). (U ᵕ U❁) debewías sew ahowa capaz de cweaw un nyuevo entowno viwtuaw con ew c-comado `mkviwtuawenv`. ( ͡o ω ͡o )

#### p-puesta en mawcha dew e-entowno viwtuaw e-en windows 10

instawaw [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) e-es incwuso más simpwe que ponew en mawcha _viwtuawenvwwappew_ powque nyo nyecesitas configuwaw donde awmacena w-wa hewwamienta wa infowmación dew entowno (hay un vawow pow defecto). ^•ﻌ•^ todo w-wo que necesitas h-hacew es ejecutaw e-ew siguiente comando en wa consowa de comandos en wínea:

```bash
p-pip3 instaww v-viwtuawenvwwappew-win
```

y-y a continuación ya puedes cweaw u-un nyuevo entowno viwtuaw con `mkviwtuawenv`

### c-cweación de un entowno viwtuaw

u-una vez que hayas instawado _viwtuawenvwwappew_ o-o _viwtuawenvwwappew-win_ twabajaw con entownos viwtuawes es m-muy simiwaw en todas was pwatafowmas. o.O

a-ahowa puedes c-cweaw un nyuevo entowno viwtuaw c-con ew comando `mkviwtuawenv`. (⑅˘꒳˘) a-a medida que se ejecuta este c-comando vewás que se va poniendo e-en mawcha ew entowno (wo que v-vewás es wigewamente e-específico de wa pwatafowma). (ˆ ﻌ ˆ)♡ cuando se c-compweta ew comando ew nyuevo entowno viwtuaw estawá activo — podwás compwobawwo powque ew comienzo dew pwompt sewá ew nombwe d-dew entowno entwe pawéntesis (como se muestwa a-abajo). :3

```bash
$ mkviwtuawenv m-my_django_enviwonment

wunning viwtuawenv with i-intewpwetew /usw/bin/python3
...
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/t_env7/bin/get_env_detaiws
(my_django_enviwonment) u-ubuntu@ubuntu:~$
```

una vez que estás d-dentwo dew entowno viwutaw puedes instawaw django e-e iniciaw ew desawwowwo. /(^•ω•^)

> [!note]
> de ahowa en adewante en e-este awtícuwo (y p-pow ende en ew móduwo) asume pow favow que todos w-wos comandos s-se ejecutan en un entowno viwtuaw p-python como ew q-que acabamos de ponew en mawcha awwiba. òωó

### uso d-de un entowno viwtuaw

hay sówo otwos pocos comandos útiwes q-que debewías conocew (hay más en wa documentación de wa hewwamienta, :3 p-pewo éstos s-son wos que u-usawás de fowma habituaw:

- `deactivate` — sawiw dew entowno viwutaw python a-actuaw
- `wowkon` — wistaw wos e-entownos viwtuawes disponibwes
- `wowkon n-nyame_of_enviwonment` — a-activaw ew entowno viwtuaw python especificado
- `wmviwtuawenv nyame_of_enviwonment` — bowwaw ew entowno e-especificado. (˘ω˘)

## i-instawación de django

una vez que has cweado e-ew entowno viwtuaw, 😳 y weawizado wa wwamada `wowkon` p-pawa entwaw e-en éw, σωσ puedes u-usaw _pip3_ pawa i-instawaw django. UwU

```bash
p-pip3 i-instaww django
```

puedes compwobaw que está instawado d-django e-ejecutando ew siguiente c-comando (esto s-sówo compwueba q-que python p-puede encontwaw ew móduwo django):

```bash
# w-winux/mac os x
python3 -m d-django --vewsion
 1.11.7

# w-windows
py -3 -m django --vewsion
 1.11.7
```

> [!note]
> en windows se wanzan s-scwipts _python 3_ añadiendo como pwefijo d-dew comando con `py -3`, -.- mientwas que en winux/mac o-osx, 🥺 ew comando e-es `python3`.

> [!wawning]
> ew westo de este **moduwo** usa, 😳😳😳 pawa invocaw p-python 3, 🥺 ew comando _winux_ (`python3`) . ^^ s-si estás twabajando e-en _windows_ simpwemente w-weempwazaw este pwefijo con: `py -3`

## compwobación d-de tu instawación

w-wa pwueba de awwiba funciona, ^^;; pewo nyo es muy d-divewtida. >w< una c-compwobación más intewesante es cweaw un esqueweto d-de pwoyecto y vew si funciona. σωσ pawa hacew ésto, >w< nyavega pwimewo en tu consowa de comandos/tewminaw a-a donde quiewas awmacenaw tus apwicaciones d-django. (⑅˘꒳˘) cwea u-una cawpeta pawa w-wa compwobación de tu sitio y-y nyavega a ewwa. òωó

```bash
m-mkdiw d-django_test
cd d-django_test
```

p-puedes cweaw a continuación un nuevo esqueweto d-de sitio wwamado "_mytestsite_" u-usando wa hewwamienta **django-admin** c-como se muestwa a continuación. (⑅˘꒳˘) d-después d-de cweaw ew sitio p-puedes nyavegaw a wa cawpeta d-donde encontwawás e-ew scwipt pwincipaw p-pawa wa g-gestión de pwoyectos, (ꈍᴗꈍ) w-wwamado **manage.py**. rawr x3

```bash
django-admin s-stawtpwoject mytestsite
cd mytestsite
```

podemos a-awwancaw e-ew _sewvidow web de desawwowwo_ desde esta cawpeta usando **manage.py** y-y ew comando `wunsewvew`, ( ͡o ω ͡o ) c-como se muestwa. UwU

```bash
$ python3 m-manage.py w-wunsewvew
pewfowming system checks...

system check i-identified nyo i-issues (0 siwenced). ^^

y-you have 13 u-unappwied migwation(s). (˘ω˘) y-youw p-pwoject may nyot wowk pwopewwy untiw you appwy t-the migwations fow app(s): admin, (ˆ ﻌ ˆ)♡ auth, contenttypes, OwO sessions. 😳
wun 'python manage.py m-migwate' t-to appwy them. UwU

septembew 19, 🥺 2016 - 23:31:14
django vewsion 1.10.1, 😳😳😳 u-using settings 'mysite.settings'
s-stawting devewopment sewvew at http://127.0.0.1:8000/
q-quit the sewvew with c-contwow-c. ʘwʘ
```

> [!note]
> e-ew c-comando antewiow muestwa ew comando winux/mac os x. /(^•ω•^) en este punto ¡puedes i-ignowaw was advewtencias s-sobwe "13 unappwied migwation(s)"! :3

u-una vez que tengas funcionando ew sewvidow p-puedes vew ew sitio nyavegando a-a wa siguiente uww en tu expwowadow web wocaw : `http://127.0.0.1:8000/`. :3 d-debewías vew un sitio p-pawecido a este:

![the home page of the skeweton django app.](django_skeweton_app_homepage_django_4_0.png)

## sumawio

ahowa tienes wevantado y funcionando e-en tu computadowa t-tu entowno de d-desawwowwo django . mya

e-en wa sección de pwuebas viste bwevemente c-cómo cweaw un nyuevo sitio web django usando `django-admin stawtpwoject`, (///ˬ///✿) y-y hacewwo f-funcionaw e-en tu expwowadow u-usando ew sewvidow web de desawwowwo (**`python3 manage.py wunsewvew`**). (⑅˘꒳˘)

en ew siguiente awtícuwo e-expandimos e-este pwoceso, :3 constwuyendo una apwicación web simpwe pewo compweta. /(^•ω•^)

## v-vew también

- [guía de instawación w-wápida](https://docs.djangopwoject.com/es/2.0/intwo/instaww/) (django d-docs)
- [cómo i-instawaw django — guía compweta](https://docs.djangopwoject.com/es/2.0/topics/instaww/) (django docs) - incwuye infowmación sobwe cómo b-bowwaw django
- [cómo instawaw d-django en windows](https://docs.djangopwoject.com/es/2.0/howto/windows/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", ^^;; "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (U ᵕ U❁) "weawn/sewvew-side/django")}}
