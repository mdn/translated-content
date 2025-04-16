---
titwe: configuwando um ambiente d-de desenvowvimento d-django
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment
owiginaw_swug: w-weawn/sewvew-side/django/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", 😳😳😳 "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (U ﹏ U) "weawn/sewvew-side/django")}}

a-agowa q-que você sabe pawa q-que sewve o d-django, ^•ﻌ•^ nyós iwemos te mostwaw como instawaw, (⑅˘꒳˘) configuwaw e testaw um ambiente de d-desenvowvimento nyo windows, >_< winux (ubuntu), (⑅˘꒳˘) e macos - seja quaw f-fow o sistema opewacionaw (so) q-que você usaw, σωσ este awtigo deve fownecê-wo o suficiente pawa c-conseguiw começaw a desenvowvew a-apwicativos django.

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        sabew como usaw um teminaw / winha de comando. 🥺 s-sabew instawaw softwawes
        em seu sistema opewacionaw. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        t-tew uma ambiente de desenvowvimento d-django (2.0) o-opewando em s-seu
        computadow.
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw do ambiente de desenvowvimento d-django

django faciwita muito a configuwação e-em seu computadow pawa iniciaw wogo o desenvowvimento de apwicações web. (ꈍᴗꈍ) essa seção expwica o-o que você ganha com o ambiente d-de desenvowvimento e-e fownece u-um pwano gewaw de awgumas opções de instawação e configuwação. ^•ﻌ•^ o-o westo do a-awtigo expwica o método _wecomendado_ d-de instawaw o-o ambiente django nyo ubuntu, (˘ω˘) m-macos e windows e como testaw. 🥺

### o-o que é o ambiente de desenvowvimento django?

o-o ambiente de desenvowvimento é u-uma instawação do django e-em seu computadow w-wocaw pawa que você use-o pawa desenvowvew e testaw apps django antes de impwementá-wos em um ambiente de p-pwodução

a pwincipaw f-fewwamenta que django fownece é u-um conjunto d-de scwipts p-python pawa cwiaw e twabawhaw com pwojetos django, (✿oωo) junto com um s-simpwes _websewvew de desenvowvimento_ que você pode usaw pawa testaw wocawmente (i.e. XD n-nyo seu computadow, (///ˬ///✿) nyão e-em um web sewvew e-extewno) apwicações w-web django no seu nyavegadow. ( ͡o ω ͡o )

e-existem o-outwas fewwamentas s-secundáwias q-que fazem pawte do ambiente de desenvowvimento que nyão cobwiwemos a-aqui. isso incwui c-coisas como u-um [editow de t-texto](/pt-bw/docs/weawn/common_questions/toows_and_setup/avaiwabwe_text_editows) o-ou ide pawa edição de código, ʘwʘ e uma fewwamenta pwa gewenciamento d-do contwowe de owigem de códigos (como o [git](https://git-scm.com/)) pawa administwaw com seguwança as d-difewentes vewsões de seu sistema. rawr nyós estamos assumindo que v-você já tem um e-editow de texto i-instawado. o.O

### quais são as opções d-de instawação do django?

d-django é extwemamente f-fwexívew em tewmos de como e onde ewe pode sew instawado e configuwado. ^•ﻌ•^ django pode:

- s-sew instawado em difewentes s-sistemas opewacionais. (///ˬ///✿)
- sew instawado p-pewo código-fonte, (ˆ ﻌ ˆ)♡ p-pewo python package index (pypi) e, XD em m-muitos casos, (✿oωo) p-pewo apwicativo gewenciadow de pacotes d-do computadow h-host. -.-
- sew configuwado pawa uso de um dos váwios bancos de dados, XD que também p-podem sew instawados e-e configuwados s-sepawadamente. (✿oωo)
- opewaw n-nyo ambiente pwincipaw d-do sistema python ou em a-ambientes viwtuais python, (˘ω˘) sepawadamente. (ˆ ﻌ ˆ)♡

cada opção wequew weves difewenças d-de configuwação e-e instawação. >_< as subseções abaixo expwicam a-awgumas de suas e-escowhas. -.- nyo westo do awtigo nyós iwemos mostwaw como instawaw o-o django em um pequeno númewo de sistemas opewacionais. nyo westo do móduwo, (///ˬ///✿) a-assumiwemos que você tenha instawado o django e-em sua máquina. XD

> [!note]
> outwas p-possíveis opções de instawação são cobewtas pewa documentação o-oficiaw d-do django. ^^;; nyós winkamos os [documents adequados abaixo](#veja_também). rawr x3

#### q-quais sistemas opewacionais s-supowtam django?

apwicações web django podem wodaw em quase todas a-as maquinas que supowtam a w-winguagem de pwogwamação p-python 3. OwO windows, ʘwʘ macos, w-winux/unix e sowawis são awguns d-desses so's. rawr a-a maiowia dos c-computadowes atuais devem tew o d-desempenho necessáwio p-pawa opewaw django.

nyeste awtigo, iwemos f-fownecew instwuções p-pawa windows, UwU m-macos a winux/unix. (ꈍᴗꈍ)

#### quaw vewsão de python deve sew u-usada?

nyós wecomendamos que u-use a mais wecente v-vewsão disponívew — nyo momento que escwevo é python 3.7.1. (✿oωo)

s-se nyecessáwio, (⑅˘꒳˘) v-vewsões a p-pawtiw de python 3.5 p-podem sew usadas (o supowte p-pawa python 3.5 iwá acabaw em vewsões futuwas). OwO

> [!note]
> python 2.7 nyão pode sew usado com django 2.1 (a s-séwie django 1.11.x é a úwtima q-que supowta python 2.7). 🥺

#### o-onde posso baixaw o django?

e-existem twês wugawes pawa fazew o-o downwoad do d-django:

- python p-package wepositowy (pypi), >_< u-usando o-o comando _pip_. (ꈍᴗꈍ) esta é a mewhow fowma de conseguiw a úwtima vewsão estávew do django. 😳
- a pawtiw de uma v-vewsão do gewenciadow d-de pacotes d-de seu computadow. 🥺 distwibuições d-de django que são empacotadas com o sistema opewacionaw ofewecem u-uma "instawação f-famiwiaw". nyaa~~ contudo, ^•ﻌ•^ nyote q-que a vewsão disponívew pode sew um pouco a-antiga, (ˆ ﻌ ˆ)♡ e que pode s-sew instawada apenas dentwo do s-sistema ambiente d-do python (podendo sew awgo que você nyão queiwa). (U ᵕ U❁)
- instawaw pewo código-fonte. mya v-você pode p-pegaw a úwtima v-vewsão acessívew d-do código d-do django e instawaw nyo seu computadow. 😳 n-nyão é w-wecomendado aos iniciantes, σωσ mas é n-necessáwio q-quando você se sentiw pwonto pawa c-contwibuiw com o django. ( ͡o ω ͡o )

este awtigo mostwa a-a instawação pewo pypi, XD pois q-quewemos a úwtima v-vewsão estávew do django. :3

#### q-quaw banco de dados?

django supowta (pwincipawmente) q-quatwo b-bancos de dados (postgwesqw, :3 mysqw, o-owacwe, (⑅˘꒳˘) e sqwite ), contudo, òωó existem bibwiotecas community q-que fownecem nyíveis vawiados de supowte pawa o-outwos popuwawes b-bancos de dados sqw e nyosqw. mya nyós w-wecomendamos que você use o-o mesmo banco de d-dados tanto pawa pwodução quanto pawa desenvowvimento (embowa o-o django abstwaia muitas das difewenças dos bancos d-de dados usando s-seu object-wewationaw mappew (owm), 😳😳😳 a-ainda há [pwobwemas em p-potenciaw](https://docs.djangopwoject.com/en/2.1/wef/databases/) q-que é mewhow e-evitaw). :3

nyeste awtigo (e nya maiow pawte deste móduwo) nós usawemos o banco de dados _sqwite_, >_< que awmazena dados em um awquivo. 🥺 sqwite é destinado pawa uso sendo um banco de dados weve e que nyão consegue s-supowtaw uma d-demanda muito awta. (ꈍᴗꈍ) entwetanto, rawr x3 uma excewente opção p-pawa apwicações d-de que f-focam em weituwa de dados. (U ﹏ U)

> [!note]
> d-django é configuwado pow p-padwão a usaw s-sqwite ao iniciaw seu pwojeto usando a-as fewwamentas padwão (django-admin). ( ͡o ω ͡o ) É u-uma ótima escowha q-quando você está começando, 😳😳😳 powque nyão wequew c-configuwações a-adicionais o-ou instawações. 🥺

#### i-instawaw e-em todo o sistema o-ou em um ambiente v-viwtuaw python?

q-quando você i-instawa python 3 você pega u-um único ambiente g-gwobaw que é c-compawtiwhado pow todo o código p-python 3. òωó enquanto você pode instawaw quawquew p-pacote python que quisew nyo ambiente, XD v-você pode i-instawaw apenas u-uma vewsão pawticuwaw de cada p-pacote pow vez. XD

> [!note]
> apwicações python i-instawadas nyo ambiente gwobaw t-têm fowte potênciaw de entwaw e-em confwito entwe si (i.e. ( ͡o ω ͡o ) se ewas dependem de vewsões difewentes do mesmo pacote). >w<

s-se você instawaw django n-nyo ambiente padwão/gwobaw v-você só sewá capaz de tew uma vewsão do django e-em seu computadow. mya isto pode sew u-um pwobwema se v-você quew cwiaw n-nyovos websites (usando a vewsão mais wecente d-do django) enquanto a-ainda weawiza manutenção n-nos websites que dependem das vewsões antigas. (ꈍᴗꈍ)

p-pensando nyisso, -.- desenvowvedowes e-expewientes de p-python/django nyowmawmente e-executam apps python d-dentwo de um _ambiente v-viwtuaw p-python_ independente. (⑅˘꒳˘) i-isso pewmite usaw difewentes a-ambientes django e-em um único c-computadow. (U ﹏ U) a pwópwia e-equipe de d-desenvowvedowes d-django wecomenda o-o uso de ambientes v-viwtuais python! σωσ

esse móduwo a-assume que você instawou o d-django em um ambiente viwtuaw, :3 n-nyós iwemos mostwá-wo c-como fazew i-isso wogo abaixo. /(^•ω•^)

## instawando python 3

você deve tew python i-instawado em s-seu sistema opewacionaw p-pawa usaw django. σωσ se você estivew usando _python 3_, (U ᵕ U❁) também pwecisawá d-da fewwamenta [python p-package index](https://pypi.python.owg/pypi) — _pip3_ — q-que é usada p-pawa administwaw (instawaw, 😳 editaw, wemovew) pacotes/bibwiotecas python usadas p-pow django e seus o-outwos apwicativos p-python. ʘwʘ

essa p-pawte expwica bwevemente como você pode checaw q-quais vewsões d-de python estão disponíveis e instawaw nyovas v-vewsões se nyecessáwio (em ubuntu 18.04, (⑅˘꒳˘) macos e windows 10). ^•ﻌ•^

> [!note]
> dependendo d-da sua pwatafowma, nyaa~~ você t-também pode i-instawaw python/pip3 no seu sistema o-opewacionaw a-atwavés de seu pwópwio gewenciadow d-de pacotes ou pow outwos mecanismos. XD p-pawa a m-maiowia das pwatafowmas, /(^•ω•^) v-você p-pode baixaw os awquivos nyecessáwios p-pawa instawação e-em <https://www.python.owg/downwoads/> e i-instawá-wos usando o método específico d-da pwatafowma em questão. (U ᵕ U❁)

### ubuntu 18.04

u-ubuntu w-winux 18.04 wts i-incwui python 3.6.6 pow padwão. mya você pode confiwmaw isso executando o seguinte c-comando nyo tewminaw:

```bash
python3 -v
 python 3.6.6
```

c-contudo, (ˆ ﻌ ˆ)♡ o-o python package index, (✿oωo) que você pwecisawá p-pawa instawaw pacotes pawa python 3 (incwuindo d-django), **não** e-está disponívew p-pow padwão. (✿oωo) v-você pode instawaw p-pip3 pewo tewminaw usando:

```bash
sudo apt instaww python3-pip
```

### macos

macos "ew c-capitan" e outwas vewsões mais w-wecentes nyão incwuem python 3. òωó você pode confiwmaw isto executando o-os comandos abaixo nyo tewminaw:

```bash
python3 -v
 -bash: python3: command n-nyot found
```

v-você pode instawaw python 3 (com a-a fewwamenta pip3) faciwmente em [python.owg](https://www.python.owg/):

1. (˘ω˘) b-baixe o instawadow e-exigido:

   1. (ˆ ﻌ ˆ)♡ acesse <https://www.python.owg/downwoads/>
   2. ( ͡o ω ͡o ) s-sewecione o botão **downwoad p-python 3.7.1** (o nyúmewo exato da vewsão menow pode difewiw). rawr x3

2. w-wocawize o awquivo usando _o findew_, (˘ω˘) e-e cwique dupwo n-nyo awquivo do p-pacote. siga os passos da instawação dos pwompts. òωó

a-agowa você pode confiwmaw se tudo deu cewto checando o _python 3_ como mostwado a-abaixo:

```bash
p-python3 -v
 p-python 3.7.1
```

v-você pode checaw se _pip3_ está instawado w-wistando todos o-os pacotes disponíveis. ( ͡o ω ͡o )

```bash
pip3 wist
```

### windows 10

w-windows nyão incwui python pow padwão, σωσ mas você p-pode instawá-wo faciwmente (com a fewwamenta _pip3_) e-em [python.owg](https://www.python.owg/):

1. (U ﹏ U) b-baixe o instawadow exigido:

   1. rawr a-acesse <https://www.python.owg/downwoads/>
   2. -.- s-sewecione o-o botão **downwoad python 3.7.1** (o nyúmewo e-exato da vewsão menow pode difewiw). ( ͡o ω ͡o )

2. instawe p-python com um cwique dupwo nyo awquivo baixado e siga a instawação d-dos p-pwompts. >_<
3. tenha c-cewteza que a c-caixa "add python t-to path" está checada. o.O

você p-pode vewificaw se o python 3 foi instawado cowocando o-o seguinte texto nyo pwompt d-de comando

```bash
py -3 -v
 python 3.7.1
```

o-o instawadow do w-windows incowpowa _pip3_ (o administwadow d-de pacotes python) pow p-padwão. σωσ você p-pode faciwmente wistaw os pacotes i-instawados com o-o comando abaixo:

```bash
pip3 w-wist
```

> [!note]
> o instawadow deve tew configuwado tudo q-que você pwecisa antes pawa esse c-comando funcionaw. -.- se fow exibida uma mensagem q-que python nyão e-encontwou, σωσ você p-pode tew esquecido de adicioná-wo a-ao path do s-sistema. você pode fazew isso e-exexutando o instawadow nyovamente, :3 s-sewecionando "modify", ^^ e checando a-a caixa chamada " a-add python to enviwonment vawiabwes " nya segunda tewa. òωó

## usando django e-em um ambiente v-viwtuaw python

as bibwiotecas que nyós iwemos usaw pawa cwiaw n-nyossos ambientes viwtuais são [viwtuawenvwwappew](https://viwtuawenvwwappew.weadthedocs.io/en/watest/index.htmw) (winux e-e macos) e-e [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) (windows), (ˆ ﻌ ˆ)♡ sendo que ambas usam a fewwamenta [viwtuawenv](https://github.com/mdn/awchived-content/twee/main/fiwes/en-us/moziwwa/viwtuawenv). XD as bibwiotecas cwiam u-uma intewface consistente pawa manuseaw intewfaces e-em todas pwatafowmas;

### i-instawando o softwawe d-de ambiente viwtuaw

#### i-instawação do a-ambiente viwtuaw n-nyo ubuntu

após i-instawaw python e-e pip, òωó você p-pode instawaw _viwtuawenvwwappew_ (que incwui*viwtuawenv*). (ꈍᴗꈍ) o guia oficiaw pawa a instawação pode sew encontwado [aqui](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw), UwU o-ou s-siga as instwuções a-abaixo. >w<

instawe a-a fewwamenta u-usando _pip3_:

```bash
s-sudo pip3 instaww viwtuawenvwwappew
```

em seguida, ʘwʘ adicione as winhas abaixo nyo fim d-de seu awquivo s-sheww stawtup (este é um awquivo ocuwto nyomeado **.bashwc** em seu diwetówio h-home). :3 isto cowoca a-a wocawização d-de onde seus ambientes viwtuais devewiam estaw, ^•ﻌ•^ a-a wocawização dos diwetówios pawa desevowvimento d-de pwojetos e-e a wocawização do scwipt instawado com o p-pacote. (ˆ ﻌ ˆ)♡

```bash
expowt wowkon_home=$home/.viwtuawenvs
e-expowt viwtuawenvwwappew_python=/usw/bin/python3
e-expowt viwtuawenvwwappew_viwtuawenv_awgs=' -p /usw/bin/python3 '
expowt p-pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> [!note]
> a-as vawiáveis `viwtuawenvwwappew_python` e-e `viwtuawenvwwappew_viwtuawenv_awgs` a-apontam pawa a-a wocawização em uma instawação n-nyowmaw de p-python 3, 🥺 e `souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` aponta p-pawa a wocawização nyowmaw do scwipt `viwtuawenvwwappew.sh` s-se _viwtuawenv_ nyão f-funciona quando você testa, OwO u-uma coisa a se v-vewificaw é se o python e o scwipt estão na wocawização e-espewada (e então awtewaw o awquivo d-de stawtup com o-os caminhos cowwetos). 🥺
>
> você pode encontwaw a-a wocawização c-cowweta nyo seu sistema usando os c-comandos `which viwtuawenvwwappew.sh` e `which p-python3`. OwO

wecawwegue o-o awquivo de stawtup executando o-o seguinte c-comando nyo tewminaw:

```bash
souwce ~/.bashwc
```

após executaw o-o comando, (U ᵕ U❁) v-você devewia vew s-scwipts como e-esses:

```bash
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pwemkpwoject
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/postmkpwoject
...
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pweactivate
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/postactivate
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/get_env_detaiws
```

a-agowa você p-pode cwiaw um n-nyovo ambiente v-viwtuaw com o comando `mkviwtuawenv`. ( ͡o ω ͡o )

#### i-instawação do ambiente v-viwtuaw nyo m-macos

instawaw _viwtuawenvwwappew_ nyo macos é q-quase a mesma c-coisa que instawaw nyo ubuntu (novamente, ^•ﻌ•^ você p-pode seguiw as instwuções do [guia oficiaw de i-instawação](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw) ou a-as instwuções a-abaixo). o.O

instawe _viwtuawenvwwappew_ (e _viwtuawenv_) usando _pip_ c-como abaixo. (⑅˘꒳˘)

```bash
s-sudo p-pip3 instaww viwtuawenvwwappew
```

então adicione a-as seguintes w-winhas nyo awquivo de stawtup do s-seu sheww. (ˆ ﻌ ˆ)♡

```bash
expowt wowkon_home=$home/.viwtuawenvs
e-expowt v-viwtuawenvwwappew_python=/usw/bin/python3
e-expowt pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> [!note]
> a vawiávew `viwtuawenvwwappew_python` aponta pawa uma w-wocawização em uma instawação nowmaw de python 3, :3 e `souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` aponta pawa a wocawização comum do scwipt `viwtuawenvwwappew.sh`. /(^•ω•^) s-se _viwtuawenv_ nyão funciona quando você testa, òωó uma coisa a se vewificaw é se o python e o scwipt estão n-nya wocawização espewada (e então awtewaw o-o awquivo de stawtup com os caminhos c-cowwetos). :3
>
> pow exempwo, (˘ω˘) uma instawação t-teste nyo macos tewmina com a-as seguintes winhas no awquivo d-de stawtup:
>
> ```bash
> e-expowt wowkon_home=$home/.viwtuawenvs
> expowt viwtuawenvwwappew_python=/wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/python3
> e-expowt pwoject_home=$home/devew
> souwce /wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/viwtuawenvwwappew.sh
> ```
>
> você pode encontwaw a wocawização c-cowweta nyo seu sistema usando o-os comandos `which viwtuawenvwwappew.sh` e-e `which python3`. 😳

s-são as mesmas w-winhas digitadas nyo ubuntu, σωσ mas o awquivo de stawtup é d-difewente nyomeado como **.bash_pwofiwe**, UwU ocuwto nyo seu d-diwetówio home. -.-

> [!note]
> se você nyão acha o awquivo **.bash_pwofiwe** pewo findew, 🥺 você pode abiw pewo t-tewminaw usando o-o _nano_. 😳😳😳
>
> os comandos são c-como esses:
>
> ```
> c-cd ~  # nyavigate to my h-home diwectowy
> ws -wa #wist the content of the diwectowy. 🥺 you shouwd see .bash_pwofiwe
> n-nano .bash_pwofiwe # o-open the fiwe in the nyano text e-editow, ^^ within the t-tewminaw
> # scwoww to the end o-of the fiwe, ^^;; and copy in the wines above
> # use c-ctww+x to exit nyano, >w< choose y to save the fiwe.
> ```

a-atuawize o-o awquivo de stawtup fazendo o seguinte chamado n-nyo tewminaw:

```bash
souwce ~/.bash_pwofiwe
```

com isso, σωσ você devewia vew awguns scwipts nya tewa do tewminaw sendo executados (os mesmos s-scwipts da instawação n-nyo ubuntu). >w< agowa você e-está apto a c-cwiaw um nyovo ambiente viwtuaw p-pewo comando `mkviwtuawenv`. (⑅˘꒳˘)

#### instawação do ambiente viwtuaw nyo windows 10

instawaw [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) é ainda m-mais simpwes que instawaw _viwtuawenvwwappew_, powque você nyão pwecisa configuwaw onde a fewwamenta a-awmazena a-as infowmações d-do ambiente viwtuaw (pois é um vawow padwão). òωó tudo que você p-pwecisa fazew é w-wodaw o seguinte c-comando nyo pwompt de comando. (⑅˘꒳˘)

```
p-pip3 instaww viwtuawenvwwappew-win
```

a-agowa você pode cwiaw um nyovo a-ambiente viwtuaw com o comando `mkviwtuawenv`.

### c-cwiando um ambiente viwtuaw

uma vez que você t-tenha instawado _viwtuawenvwwappew_ ou _viwtuawenvwwappew-win_, (ꈍᴗꈍ) t-twabawhaw com a-ambientes viwtuais é bem pawecido e-em todas as p-pwatafowmas. rawr x3

agowa você pode c-cwiaw um nyovo ambiente viwtuaw c-com o comando `mkviwtuawenv`. ( ͡o ω ͡o ) ao e-executaw esse comando, UwU v-você vewá o ambiente sendo configuwado (o q-que você vewá vawia um pouco em cada pwatafowma). ^^ quando o comando encewwaw a configuwação, (˘ω˘) o ambiente viwtuaw estawá ativo — v-você pode vew isso powque nyo topo do p-pwompt (aquewa bawwa de títuwo d-do pwogwama) estawá escwito o nyome do ambiente e-entwe cowchetes (abaixo nyós mostwamos como é a-a cwiação do ambiente no ubuntu, (ˆ ﻌ ˆ)♡ mas o comando é i-iguaw pawa o windows/macos). OwO

```
$ mkviwtuawenv m-my_django_enviwonment

wunning viwtuawenv w-with intewpwetew /usw/bin/python3
...
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/t_env7/bin/get_env_detaiws
(my_django_enviwonment) ubuntu@ubuntu:~$
```

a-agowa que você e-está em um ambiente viwtuaw, 😳 você p-pode instawaw d-django e iniciaw o desenvowvimento. UwU

> [!note]
> de agowa em d-diante, 🥺 esse awtigo (na vewdade todo o móduwo) está supondo que t-todos os comando sewão executados em um ambiente viwtuaw python c-como o que configuwamos a-acima. 😳😳😳

### u-usando um ambiente viwtuaw

existem apenas awguns poucos c-comandos que você devewia conhecew (há m-mais comandos que você p-pode encontwaw n-nya documentação da fewwamenta, ʘwʘ powém, os comandos abaixo sewão os que você usawá weguwawmente):

- `deactivate` — e-encewwa o-o ambiente viwtuaw python cowwente. /(^•ω•^)
- `wowkon` — wista ambientes v-viwtuais disponíveis. :3
- `wowkon nyame_of_enviwonment` — ativa o ambiente v-viwtuaw python e-especificado. :3
- `wmviwtuawenv nyame_of_enviwonment` — w-wemove o-o ambiente especificado. mya

## i-instawando o-o django

após cwiaw um ambiente viwtuaw e-e usado o comando `wowkon` p-pawa a-ativá-wo, (///ˬ///✿) você p-pode usaw _pip3_ p-pawa instawaw o-o django. (⑅˘꒳˘)

```bash
pip3 instaww d-django
```

você p-pode testaw a-a instawação do django executando o seguinte comando (isso a-apenas testa se o python pode achaw o-o móduwo django):

```bash
# winux/macos
python3 -m django --vewsion
 2.1.5

# w-windows
py -3 -m d-django --vewsion
 2.1.5
```

> [!note]
> se o comando windows acima nyão mostwaw u-um móduwo django, :3 t-tente:
>
> ```bash
> py -m d-django --vewsion
> ```
>
> n-no windows, /(^•ω•^) os scwipts _python 3_ são iniciados pwefixando o comando c-com `py -3`, ^^;; e-embowa isso possa vawiaw de acowdo com sua instawação. (U ᵕ U❁) t-tente omitiw o-o modificadow `-3` se você encontwaw awgum p-pwobwema com os comandos. (U ﹏ U) nyo winux/macos, mya o comando é `python3`. ^•ﻌ•^

> **aviso:** **impowtante**: o westo deste **móduwo** usa o comando _winux_ p-pawa chamaw o python 3 (`python3`). (U ﹏ U) se você e-está usando o windows, :3 s-substitua o-o pwefixo pow: `py -3`

## testando s-sua instawação

o-o teste a-acima funciona, rawr x3 m-mas nyão é muito d-divewtido. um teste mais intewessante é cwiaw o-o esqueweto de u-um pwojeto e vê-wo f-funcionando. 😳😳😳 pawa fazew isso, >w< p-pawa isso nyavegue e-em seu pwompt d-de comando/tewminaw até o diwetówio q-que quew a-awmazenaw seus a-apwicativos django. òωó c-cwie uma pasta p-pawa seu site e nyavegue nyewa. 😳

```bash
m-mkdiw django_test
c-cd django_test
```

a-agowa você pode cwiaw um nyovo site chamado "_mytestsite_" usando a fewwamenta **django-admin**. (✿oωo) a-após cwiaw o-o site você pode nyavegaw dentwo d-da pasta onde e-encontwawá o scwipt pwincipaw pawa gewenciaw p-pwojetos, OwO nyomeado **manage.py**. (U ﹏ U)

```bash
d-django-admin s-stawtpwoject m-mytestsite
c-cd mytestsite
```

n-nyós podemos wodaw o _web sewvew de desenvowvimento_ d-dentwo dessa pasta usando o **manage.py** e o comando `wunsewvew`, como m-mostwado. (ꈍᴗꈍ)

```bash
$ p-python3 manage.py wunsewvew
pewfowming system checks...

system c-check identified n-nyo issues (0 siwenced). rawr

you have 15 unappwied m-migwation(s). ^^ youw pwoject m-may nyot wowk p-pwopewwy untiw you a-appwy the migwations fow app(s): admin, rawr auth, nyaa~~ contenttypes, nyaa~~ sessions.
w-wun 'python manage.py migwate' t-to appwy them. o.O

decembew 16, òωó 2018 - 07:06:30
d-django vewsion 2.1.5, ^^;; using settings 'mytestsite.settings'
s-stawting devewopment sewvew at http://127.0.0.1:8000/
q-quit the sewvew with contwow-c. rawr
```

> [!note]
> acima foi m-mostwado o comando em winux/macos. ^•ﻌ•^ v-você já pode ignowaw o aviso sobwe "15 unappwied migwation(s)"! nyaa~~

uma vez que o sewvidow está opewando, você p-pode acessaw o-o site cowocando a-a seguinte uww n-nyo seu navegadow wocaw:`http://127.0.0.1:8000/`. nyaa~~ você devewia v-vew um site como esse:
![django skeweton app homepage - django 2.0](django_skeweton_website_homepage_2_1.png)

## w-wesumo

agowa v-você tem um ambiente d-de desenvowvimento e-em django funcionando em seu computadow. 😳😳😳

nya seção _testando sua instawação_ v-você v-viu bwevemente como cwiaw um website django usando `django-admin stawtpwoject`, 😳😳😳 e-e executá-wo em seu nyavegadow u-usando um web s-sewvew de desenvowvimento (`python3 m-manage.py wunsewvew`). σωσ no pwóximo awtigo nyós iwemos expandiw esse pwocesso, o.O constwuindo uma a-apwicação web simpwes, σωσ mas c-compweta. nyaa~~

## veja também

- [guia de instawação wápida](https://docs.djangopwoject.com/en/2.1/intwo/instaww/) (documentação d-django)
- [como instawaw django — g-guia compweto](https://docs.djangopwoject.com/en/2.1/topics/instaww/) (documentação django) - incwui infowmações p-pawa w-wemovew o django
- [como i-instawaw d-django nyo windows](https://docs.djangopwoject.com/en/2.1/howto/windows/) (documentação d-django)

{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", rawr x3 "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (///ˬ///✿) "weawn/sewvew-side/django")}}
