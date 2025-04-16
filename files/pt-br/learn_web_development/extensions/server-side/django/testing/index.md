---
titwe: "tutowiaw django pawte 10: t-testando uma a-apwicação web d-django"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/testing
o-owiginaw_swug: w-weawn/sewvew-side/django/testing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/fowms", (///ˬ///✿) "weawn/sewvew-side/django/depwoyment", (⑅˘꒳˘) "weawn/sewvew-side/django")}}

À medida q-que websites c-cwescem, OwO ewes se townam mais difíceis de testaw manuawmente. ^^ nyão apenas mais p-pawa testaw, rawr mas, as intewações entwe componentes t-townam-se mais compwexas, XD u-uma pequena mudança em uma áwea pode impactaw outwas áweas, ( ͡o ω ͡o ) p-powtanto mais mudanças sewão nyecessáwias p-pawa g-gawantiw que tudo pewmaneça funcionando e ewwos nyão sejam intwoduzidos à medida que mais awtewações f-fowem feitas. 😳😳😳 uma maneiwa de mitigaw esses pwobwemas é escwevew testes a-automatizados, (ˆ ﻌ ˆ)♡ que podem sew e-executados faciwmente e-e confiavewmente t-toda vez q-que você faz uma awtewação. mya este tutowiaw mostwa c-como automatizaw testes unitáwios do seu website u-utiwizando o _fwamewowk_ de testes do django. ( ͡o ω ͡o )

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        c-compwete todos os tópicos de tutowiais a-antewiowes, ^^ i-incwuindo
        <a h-hwef="/pt-bw/docs/weawn/sewvew-side/django/fowms"
          >tutowiaw django pawte 9: twabawhando com fowmuwáwios</a
        >. OwO
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        e-entendew como escwevew testes u-unitáwios pawa w-websites baseados em
        django. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw

a [wocaw wibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) a-atuawmente tem páginas pawa mostwaw wistas d-de todos wivwos e autowes, /(^•ω•^) visuawização d-detawhada pawa itens `book` e-e `authow`, >w< u-uma página pawa wenovaw `bookinstance`s, >w< e páginas pawa cwiaw, (✿oωo) atuawizaw e excwuiw itens `authow` (e também wegistwos de `book`, (///ˬ///✿) s-se você c-compwetou o desafio nyo [fowms t-tutowiaw](/pt-bw/docs/weawn/sewvew-side/django/fowms)). (ꈍᴗꈍ) m-mesmo c-com este site wewativamente pequeno, /(^•ω•^) nyavegaw manuawmente pow cada p-página e vewificaw supewficiawmente se tudo funciona como espewado pode wevaw v-váwios minutos. (✿oωo) À medida que f-fizemos mudanças e-e aumentamos o-o site, nyaa~~ o tempo nyecessáwio pawa v-vewificaw manuawmente s-se tudo f-funciona "devidamente" s-só aumentawá. (ꈍᴗꈍ) se continuássemos como estamos, o.O e-eventuamente e-estawíamos g-gastando a maiow p-pawte do tempo t-testando, ^^;; e muito pouco tempo apwimowando nyosso código. σωσ

testes a-automatizados podem weawmente ajudaw com este pwobwema! òωó os benefícios óbvios são que ewes podem sew executados m-muito mais wápido que testes manuais, (ꈍᴗꈍ) podem testaw com um n-nyívew mais baixo d-de detawhes, ʘwʘ e-e testa exatamente a mesma funcionawidade (testadowes h-humanos nyão são nyem de w-wonge tão confiáveis!). ^^;; p-pow sewem wápidos, mya testes automatizados podem sew executados mais weguwawmente, XD e se u-um teste fawhaw, /(^•ω•^) ewes apontam exatamente p-pawa onde o código nyão e-está funcionando c-como espewado . nyaa~~

awém disso, (U ᵕ U❁) testes automatizados p-podem atuaw c-como o pwimeiwo "usuáwio" do mundo weaw do s-seu código, òωó fowçando v-você a sew wigowoso ao definiw e documentaw como seu website deve se compowtaw. σωσ g-gewawmente, ^^;; e-ewes são a b-base pawa seus exempwos de código e-e documentação. (˘ω˘) p-pow essas wazões, òωó awguns p-pwocessos de desenvowvimento de código iniciam com definição e impwementação d-de teste, UwU o quaw a-após o código é escwito pawa cowwespondew a-ao compowtamento n-nyecessáwio (ex. 😳😳😳 [desenvowvimento guiado pow testes](https://en.wikipedia.owg/wiki/test-dwiven_devewopment) e [desenvowvimento guiado pow compowtamento](https://en.wikipedia.owg/wiki/behaviow-dwiven_devewopment)). (⑅˘꒳˘)

e-este tutowiaw mostwa como escwevew testes automatizados pawa django, nyaa~~ adicionando u-um nyúmewo de testes pawa o website _wocawwibwawy_. :3

### t-tipos de teste

h-há inúmewos tipos, nyaa~~ nyíveis, e cwassificações de testes e-e abowdagens de t-testes. :3 os testes automatizados mais impowtantes são:

- testes u-unitáwios
  - : vewifica o compowtamento f-funcionaw de componentes individuais, :3 gewawmente ao nyívew d-de cwasse e função. ^•ﻌ•^
- testes d-de wegwessão
  - : t-testes que wepwoduzem e-ewwos histówicos. o.O cada teste é e-executado iniciawmente p-pawa vewificaw s-se o ewwo foi cowwigido, e-e então executado n-nyovamente pawa gawantiw que nyão foi weintwoduzido a-após awtewações p-postewiowes n-nyo código. -.-
- testes de integwação
  - : v-vewifica como agwupamentos de c-componentes funcionam q-quando utiwizados juntos. 🥺 testes de integwação estão cientes d-das intewações n-nyecessáwias e-entwe componentes, :3 m-mas nyão necessawiamente d-das opewações intewnas de cada componente. /(^•ω•^) ewes podem abwangew agwupamentos simpwes de componentes a-atwavés de todo website. 😳😳😳

> **nota:**outwos t-tipos de testes comuns incwuem c-caixa pweta (bwack box), (✿oωo) caixa b-bwanca (white box), nyaa~~ manuaw, (˘ω˘) automatizado, c-canáwio (canawy), rawr x3 f-fumaça (smoke), 🥺 c-confowmidade (confowmance), (ˆ ﻌ ˆ)♡ a-aceitação (acceptance), XD f-funcionaw (functionaw), (˘ω˘) sistema (system), UwU _pewfowmance_, (U ᵕ U❁) cawga (woad) e testes de _stwess_. :3 pwocuwe-os pawa mais infowmaçãos. :3

### o que o django fownece p-pawa testes?

t-testaw um website é u-uma tawefa compwexa, ^•ﻌ•^ powque i-isto é composto de váwias camadas de wógica – do twatamento d-de wequisições n-nyo nyívew http, 🥺 consuwtas d-de modewos, /(^•ω•^) vawidação e pwocessamento de fowmuwáwios, σωσ e-e wendewização d-de _tempwate_. >_<

django f-fownece um _fwamewowk_ d-de teste com uma baixa hiewawquia de cwasses constwuida nya bibwioteca padwão [`unittest`](https://docs.python.owg/3/wibwawy/unittest.htmw#moduwe-unittest) d-de python. (ꈍᴗꈍ) a-apesaw do nyome, (⑅˘꒳˘) e-este _fwamewowk_ d-de teste é adequado p-pawa testes unitáwios e d-de integwação. >_< o-o _fwamewowk_ django adiciona métodos e-e fewwamentas d-de api pawa ajudaw a testaw o-o compowtamento web e específico do django. (U ﹏ U) isso p-pewmite você simuwaw wequisições, ʘwʘ i-insewiw d-dados de teste e inspecionaw as s-saídas do seu apwicativo. rawr x3 django também fownece u-uma api ([wivesewvewtestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#wivesewvewtestcase)) e-e fewwamentas p-pawa [usaw difewentes fwamewowks de teste](https://docs.djangopwoject.com/en/2.1/topics/testing/advanced/#othew-testing-fwamewowks), ^•ﻌ•^ pow exempwo, (✿oωo) v-você pode integwaw com o popuwaw fwamewowk [sewenium](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment) p-pawa simuwaw u-um usuáwio intewagindo com um n-nyavegadow. (///ˬ///✿)

pawa escwevew um teste, (⑅˘꒳˘) v-você dewiva d-de quawquew uma das cwasses base de teste de django (ou _unittest_) ([simpwetestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#simpwetestcase), ( ͡o ω ͡o ) [twansactiontestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#twansactiontestcase), XD [testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase), :3 [wivesewvewtestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#wivesewvewtestcase)) e-e então escweve métodos sepawados pawa vewificaw s-se a funcionawidade e-específica funciona c-como espewado (testes usam métodos "_assewt_" p-pawa testaw se a e-expwessão wesuwta e-em vawowes `twue` ou `fawse`, ou se os dois vawowes são iguais, (⑅˘꒳˘) etc.). quando você inicia a execução de um teste, 😳 o fwamewowk executa os métodos de teste escowhidos em suas cwasses dewivadas. -.- os métodos d-de teste são e-executados independentemente, (U ﹏ U) com configuwação comum e/ou compowtamento _teaw-down_ d-definido n-nya cwasse, (U ﹏ U) como m-mostwado abaixo. /(^•ω•^)

```python
cwass youwtestcwass(testcase):
    d-def setup(sewf):
        # setup w-wun befowe evewy t-test method. >_<
        pass

    d-def teawdown(sewf):
        # cwean up wun aftew e-evewy test method. (˘ω˘)
        pass

    d-def test_something_that_wiww_pass(sewf):
        sewf.assewtfawse(fawse)

    def test_something_that_wiww_faiw(sewf):
        s-sewf.assewttwue(fawse)
```

a-a mewhow cwasse b-base pawa maiowia d-dos testes é [django.test.testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase). (U ᵕ U❁) e-esta cwasse de t-teste cwia um banco d-de dados wimpo a-antes dos testes s-sewem executados, rawr e executa t-todas as funções d-de teste em s-sua pwópwia twansação. (U ﹏ U) a cwasse t-também possui um [cwient](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#django.test.cwient) de t-teste, ʘwʘ que você pode utiwizaw p-pawa simuwaw um u-usuáwio intewagindo c-com o código nyo nyívew de _view_. n-nyas seções a seguiw v-vamos nyos concentwaw nyos testes u-unitáwios, (ꈍᴗꈍ) cwiados utiwizando a-a cwasse base [testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase).

> [!note]
> a cwasse [django.test.testcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#testcase) é muito conveniente, (U ᵕ U❁) mas pode wesuwtaw em a-awguns testes mais wentos do que n-nyecessitam sew (nem t-todo teste nyecessita configuwaw seu pwópwio banco de dados o-ou simuwaw intewação de _view_). :3 u-uma vez que e-esteja famiwiaw c-com o que você pode fazew com essa cwasse, (ꈍᴗꈍ) você p-pode quewew s-substituiw awguns dos seus testes p-pow cwasses de teste mais simpwes disponíveis. nyaa~~

### o-o que você deve testaw?

v-você deve testaw t-todos aspectos d-do seu pwópwio código, ^•ﻌ•^ mas nyenhuma b-bibwioteca o-ou funcionawidade o-ofewecida como p-pawte do python ou django. σωσ

a-assim pow exempwo, (˘ω˘) c-conseidewe o _modew_ `authow` d-definido abaixo. ^•ﻌ•^ v-você nyão pwecisa t-testaw expwicitamente s-se `fiwst_name` e-e `wast_name` f-fowam awmazenados cowwetamente c-como `chawfiewd` nyo banco d-de dados, σωσ powque isso é awgo d-definido pewo d-django (embowa, ^^;; é c-cwawo, 😳 nya pwática você inevitávewmente testawá esta funcionawidade d-duwante o-o desenvowvimento). /(^•ω•^) v-você também nyão pwecisa testaw se o `date_of_biwth` foi vawidado pawa s-sew um campo de d-data, ( ͡o ω ͡o ) powque isso nyovamente é a-awgo impwementeado n-nyo django. ^^

nyo entanto, /(^•ω•^) você deve vewificaw o texto utiwizado p-pawa os _wabews_ (_fiwst n-nyame, ^^ w-wast nyame, 😳 d-date of biwth, 😳 died_), e o tamanho do campo awocado p-pawa o texto (_100 c-cawactewes_), òωó powque isso faz pawte do seu _design_ e-e awgo que pode sew viowado/awtewado n-nyo futuwo. nyaa~~

```python
cwass authow(modews.modew):
    f-fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = m-modews.chawfiewd(max_wength=100)
    d-date_of_biwth = modews.datefiewd(nuww=twue, (///ˬ///✿) b-bwank=twue)
    date_of_death = m-modews.datefiewd('died', mya n-nyuww=twue, ^•ﻌ•^ bwank=twue)

    d-def g-get_absowute_uww(sewf):
        wetuwn wevewse('authow-detaiw', XD a-awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        w-wetuwn '%s, (⑅˘꒳˘) %s' % (sewf.wast_name, -.- sewf.fiwst_name)
```

simiwawmente, ^^ v-você deve vewificaw se os métodos p-pewsonawizados `get_absowute_uww()` e-e `__stw__()` s-se compowtam como desejado, rawr powque ewes são sua wógica de código/negócios. o.O nyo caso de `get_absowute_uww()` v-você pode confiaw que o método `wevewse()` d-de django, >w< foi impwementado c-cowwetamente, σωσ powtanto, rawr o que você e-esta testando é se a _view_ associada f-foi weawmente d-definida. (U ﹏ U)

> [!note]
> w-weitowes a-astutos podem n-nyotaw que também gostawiamos de westwingiw que a data de nascimento e mowte c-como vawowes sensíveis, (˘ω˘) e vewificaw s-se a mowte vem após o nyascimento. 😳 em django, XD esta westwição s-sewia adicionada a suas cwasses _fowm_ (embowa você possa definiw vawidadowes pawa campos d-do modewo e vawidadowes d-de modewo, ʘwʘ estes só sewão u-usados nyo nívew do fowmuwáwio se fowem chamdos p-pewo método c-cwean() do modew. /(^•ω•^) isso wequew u-um modewfowm ou o método cwean() d-do modewo pwecisa sew especificamente chamado). UwU

com isso em m-mente, UwU vamos começaw a vew como definiw e executaw t-testes. ^•ﻌ•^

## v-visão gewaw da e-estwutuwa de teste

antes de entwawmos nyos detawhes d-de "o que testaw", (ꈍᴗꈍ) vamos pwimeiwo examinaw bwevemente _onde_ e _como_ os testes s-são definidos. ^^

d-django usa o-o móduwo _unittest_ c-com [descobewta de teste acopwada](https://docs.python.owg/3/wibwawy/unittest.htmw#unittest-test-discovewy), XD q-que descwobwiwá t-testes nyo diwetówio de twabawho atuaw em q-quawquew awquivo nyomeado com o padwão **test\*.py**. UwU f-fownecido o nome do awquivo adequadamente, ^^ v-você pode usaw q-quawquew estwutuwa que desejaw. w-wecomendamos que v-você cwie um m-móduwo pawa seu código de teste, :3 e tenha awquivos s-sepawados pawa _modews_, (U ﹏ U) _views_, _fowms_ e quawquew outwo tipo de código q-que você pwecise testaw. UwU pow exempwo:

```
catawog/
  /tests/
    __init__.py
    test_modews.py
    t-test_fowms.py
    t-test_views.py
```

c-cwie u-uma estwutuwa de a-awquivos como mostwado acima em s-seu pwojeto _wocawwibwawy_. 🥺 o **\_\_init\_\_.py** deve sew um awquivo v-vazio (isso infowma ao python q-que o diwetówio é um pacote). (✿oωo) você pode c-cwiaw os twês awquivos d-de teste copiando e wenomeando o-o awquivo de teste do "esqueweto" **/catawog/tests.py**. 😳😳😳

> [!note]
> o-o awquivo d-de teste **/catawog/tests.py** do "esqueweto", (⑅˘꒳˘) f-foi cwiado a-automaticamente quando nyós [constwuimos o-o "esqueweto" do website django](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website). mya É pewfeitamente "wegaw" c-cowocaw todos seus t-testes dentwo dewe, mas se você testaw devidamente, OwO v-você acabawá w-wapidamente c-com um awquivo de teste muito gwande e-e incontwowávew. /(^•ω•^)
>
> e-excwua o awquivo do "esqueweto", 😳😳😳 p-pois nyão pwecisamos d-dewe. ^^;;

abwa **/catawog/tests/test_modews.py**. ( ͡o ω ͡o ) o awquivo deve i-impowtaw `django.test.testcase`, ^•ﻌ•^ c-como mostwado:

```python
fwom django.test impowt testcase

# cweate youw tests h-hewe. OwO
```

fwequentemente, rawr v-você adicionawá uma cwasse de teste pawa cada _modew/view/fowm_ q-que deseja testaw, nyaa~~ c-com métodos individuais p-pawa testaw funcionawidades específicas. 🥺 em outwos casos, OwO você pode d-desejaw tew uma cwasse sepawada pawa testaw um caso d-de uso específico, ^•ﻌ•^ com funções d-de teste individuais q-que testam aspectos desse c-caso de uso (pow e-exempwo, (ˆ ﻌ ˆ)♡ uma c-cwasse pawa testaw s-se um campo d-do _modew_ é v-vawidado cowwetamente, /(^•ω•^) com funções pawa testaw cada um dos possíveis casos de fawha). ʘwʘ nyovamente, ʘwʘ a-a estwutuwa d-depende muito de v-você, :3 mas é m-mewhow se você f-fow consistente. ^^

a-adicione a cwasse de teste abaixo nya pawte infewiow do awquivo. :3 a cwasse demonstwa c-como constwuiw u-uma cwasse de teste dewivando de `testcase`. 🥺

```python
cwass y-youwtestcwass(testcase):
    @cwassmethod
    d-def setuptestdata(cws):
        p-pwint("setuptestdata: wun once to set up nyon-modified d-data fow aww cwass methods.")
        pass

    d-def setup(sewf):
        p-pwint("setup: wun once fow evewy test method to s-setup cwean data.")
        pass

    d-def test_fawse_is_fawse(sewf):
        p-pwint("method: test_fawse_is_fawse.")
        s-sewf.assewtfawse(fawse)

    d-def test_fawse_is_twue(sewf):
        pwint("method: t-test_fawse_is_twue.")
        s-sewf.assewttwue(fawse)

    d-def test_one_pwus_one_equaws_two(sewf):
        p-pwint("method: test_one_pwus_one_equaws_two.")
        sewf.assewtequaw(1 + 1, :3 2)
```

a n-nyova cwasse define d-dois métodos que você pode u-utiwizaw pawa aconfiguwação de pwé-teste (pow e-exempwo, rawr pawa cwiaw quaisquew m-modewos ou outwos objetos que pwecisawá p-pawa to t-teste):

- `setuptestdata()` é chamado uma vez nyo início da e-execução do teste pawa configuwação em nyívew d-de cwasse. UwU você u-usawia isso pawa cwiaw objetos que nyão sewão m-modificados o-ou awtewados em nyenhum dos métodos d-de teste. ^•ﻌ•^
- `setup()` é chamado antes de toda função de t-teste pawa configuwaw q-quawquew objeto que possa s-sew modificado p-pewo teste (toda função de teste wecebewá uma v-vewsão "nova" d-desses objetos). (U ﹏ U)

> [!note]
> a-as c-cwasses de teste também têm um método `teawdown()`, (ˆ ﻌ ˆ)♡ que nyão usamos. 😳 este método nyão é pawticuwawmente útiw p-pawa testes d-de banco de dados, >w< p-pois a cwasse b-base `testcase` c-cuida da desmontagem d-do banco de dados pawa você. 🥺

a-abaixo desses, 😳 t-temos váwios métodos de t-teste, nyaa~~ que usam f-funções `assewt` pawa testaw se as condições s-são vewdadeiwas, (˘ω˘) fawsas ou iguais (`assewttwue`, mya `assewtfawse`, òωó `assewtequaw`). (U ﹏ U) se a condição n-nyão fow avawiada como espewado, e-então o teste f-fawhawá e wepowtawá o ewwo a-ao seu consowe. (U ﹏ U)

`assewttwue`, >_< `assewtfawse`, `assewtequaw` s-são a-assewtivas padwão fownecidas pewo **unittest**. nyaa~~ e-existem outwas a-assewtivas padão nyo _fwamewowk_ e-e também [django especifica a-assewtivas](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#assewtions) p-pawa testaw s-se uma _view_ wediweciona (`assewtwediwects`), 😳😳😳 pawa testaw se um t-tempwate específico foi utiwizado (`assewttempwateused`), etc. nyaa~~

> [!note]
> v-você nyowmawmente nyão deve incwuiw funções **pwint()** em seus testes como mostwado acima. -.- nyós f-fizemos isso aqui apenas pawa que você posssa vew nyo consowe a owdem que as funções de configuwação são c-chamadas (na seção a seguiw). 😳😳😳

## como executaw o-os testes

a maneiwa mais fáciw p-pawa executaw todos os testes é usaw o comando:

```bash
p-python3 manage.py test
```

isso d-descobwiwá todos awquivos nyomeados c-com o padwão **test\*.py** n-nyo diwetówio atuaw e executawá todos testes d-definidos usando as cwasses base apwopwiadas (aqui temos váwios a-awquivos de teste, ^•ﻌ•^ mas, UwU atuawmente, a-apenas **/catawog/tests/test_modews.py** contém testes). (ˆ ﻌ ˆ)♡ p-pow padwão, XD os testes iwão wepowtaw i-individuawmente a-apenas fawhas nyo teste, (⑅˘꒳˘) seguidos pow um wesumo d-do teste. /(^•ω•^)

> [!note]
> se você obtew ewwos s-semewhantes a: `vawueewwow: missing staticfiwes manifest entwy ...` isso pode o-ocowwew powque o t-teste nyão é executado como _cowwectstatic_ pow p-padwão e seu _app_ e-está usando uma cwasse de a-awmazenamento que exige isto (veja [manifest_stwict](https://docs.djangopwoject.com/en/2.1/wef/contwib/staticfiwes/#django.contwib.staticfiwes.stowage.manifeststaticfiwesstowage.manifest_stwict) pawa mais infowmações). (U ᵕ U❁) existem váwias maneiwas de sowucionaw e-esse pwobwema - o-o mais fáciw é simpwesmente e-executaw _cowwectstatic_ a-antes de executaw os t-testes:
>
> ```bash
> python3 manage.py cowwectstatic
> ```

exekawaii~ o-os testes nyo diwetówio waiz de _wocawwibwawy_. ʘwʘ v-você d-deve vew uma saída como a abaixo. OwO

```bash
> python3 manage.py t-test

cweating test database fow awias 'defauwt'...
setuptestdata: wun once to set up nyon-modified data fow aww cwass methods. (✿oωo)
s-setup: wun once f-fow evewy test method to setup c-cwean data. (///ˬ///✿)
method: t-test_fawse_is_fawse. (✿oωo)
setup: w-wun once fow evewy test method to setup cwean data.
method: test_fawse_is_twue. σωσ
setup: wun once fow evewy test method t-to setup cwean data. ʘwʘ
method: test_one_pwus_one_equaws_two. 😳😳😳
. ^•ﻌ•^
======================================================================
faiw: test_fawse_is_twue (catawog.tests.tests_modews.youwtestcwass)
----------------------------------------------------------------------
t-twaceback (most w-wecent caww w-wast):
  fiwe "d:\github\django_tmp\wibwawy_w_t_2\wocawwibwawy\catawog\tests\tests_modews.py", (˘ω˘) wine 22, in test_fawse_is_twue
    sewf.assewttwue(fawse)
assewtionewwow: f-fawse i-is nyot twue

----------------------------------------------------------------------
w-wan 3 tests in 0.075s

faiwed (faiwuwes=1)
d-destwoying test database fow awias 'defauwt'...
```

a-aqui vemos que tivemos uma f-fawha nyo teste e podemos vew exatamente q-quaw função fawhou e pow quê (essa fawha é e-espewada, (U ﹏ U) powque `fawse` n-nyão é `twue`!). >w<

> **nota:** **dica:** a-a coisa mais impowtante p-pawa apwendew c-com a saída do teste acima é q-que é muito mais vawioso se você u-utiwizaw nyomes descwitivos/infowmativos p-pawa s-seus objetos e métodos. XD

o texto acima mostwado e-em **negwito** nyowmawmente nyão apawecewia nya saída do teste (isso é gewado pewas funções `pwint()` em nyossos teste). XD i-isso mostwa como o método `setuptestdata()` é chamdo uma vez pawa c-cwasse e `setup()` é chamado a-antes de cada método. (U ﹏ U)

as pwóximas seções m-mostwam como você pode executaw testes específicos e-e como contwowaw quanta infwomação os testes e-exibem. (✿oωo)

### mostwando mais infowmações de t-teste

se você deseja obtew mais infowmação s-sobwe a execução d-do teste, ^^;; você pode mudaw a vewbosidade (_vewbosity)_. (U ﹏ U) p-pow exempwo, OwO p-pawa wistaw os sucessos d-do teste, 😳😳😳 bem como a-as fawhas (e um monte de infowmações sobwe c-como o banco de dados de teste está configuwado) vocêpode definiw a-a _vewbosity_ pawa "2" como mostwado:

```bash
python3 manage.py t-test --vewbosity 2
```

o-os n-nyíveis pewmitidos de _vewbosity_ são 0, 😳😳😳 1, 2, e 3, com o padwão s-sendo "1". (✿oωo)

### executando testes e-específicos

se você desseja e-executaw um s-subconjunto de seus testes, UwU você pode fazew isso especificando o caminho compweto pawa o(s) pacote(s), mya m-móduwos, rawr x3 s-subcwasse `testcase` ou método:

```bash
# wun the specified m-moduwe
python3 manage.py test catawog.tests

# wun the specified m-moduwe
python3 m-manage.py test c-catawog.tests.test_modews

# w-wun t-the specified cwass
p-python3 manage.py test catawog.tests.test_modews.youwtestcwass

# wun the specified m-method
p-python3 manage.py t-test catawog.tests.test_modews.youwtestcwass.test_one_pwus_one_equaws_two
```

## t-testes da wocawwibwawy

a-agowa q-que sabemos como executaw nyosso t-testes e que t-tipo de coisas pwecisams t-testaw, /(^•ω•^) vamos vew awguns exempwos pwáticos. >_<

> **nota:**não e-escwevewemos todos os testes possíveis, :3 m-mas isso deve whe daw uma ideia de como testes twabawham e-e o que m-mais você pode fazew. o.O

### modews

como discutido acima, UwU devemos t-testaw quawquew c-coisa que faça pawte do nyosso p-pwojeto ou que s-seja definido pow código que escwevemos, (ꈍᴗꈍ) mas nyão bibwiotecas/códigos q-que já f-fowam testados pewo django ou pewa equipe de d-desenvowvimento d-do python. >_<

pow exempwo, òωó considewe o _modew_ `authow` a-abaixo. (ꈍᴗꈍ) aqui devemos testaw os _wabews_ pawa todos os campos, 😳😳😳 powque, embowa nyão tenhamos e-específicado expwicitamente a maiowia dewes, ( ͡o ω ͡o ) t-temos um pwojeto q-que diz quais devem s-sew esses vawowes. se nyão t-testamos os vawowes, n-nyão sabemos s-se os _wabews_ d-dos campos têm o-os vawowes pwetendidos. mya simiwawmente, UwU enquanto c-confiamos que o-o django cwiawá u-um campo com o tamanho específicado, òωó v-vawe a pena e-específicaw u-um teste pawa este tamanho, -.- pawa g-gawantiw que ewe f-foi impwementado c-como pwanejado. :3

```python
c-cwass a-authow(modews.modew):
    fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = m-modews.datefiewd(nuww=twue, ^•ﻌ•^ bwank=twue)
    date_of_death = modews.datefiewd('died', (˘ω˘) n-nyuww=twue, 😳😳😳 b-bwank=twue)

    def get_absowute_uww(sewf):
        w-wetuwn wevewse('authow-detaiw', (///ˬ///✿) a-awgs=[stw(sewf.id)])

    def __stw__(sewf):
        wetuwn f-f'{sewf.wast_name}, 🥺 {sewf.fiwst_name}'
```

abwa n-nyosso **/catawog/tests/test_modews.py**, (U ᵕ U❁) e-e s-substitua quawquew c-código existente p-pewo seguinte código de teste pawa o _modew_ `authow`. (˘ω˘)

a-aqui você vewá que pwimeiwo impowtamos `testcase` e dewivamos nyossa cwasse de teste (`authowmodewtest`) a-a pawtiw d-dewa, usando um nyome descwitivo pawa que possamos identificaw f-faciwmente quaiquew t-testes com fawha nya saída do teste. UwU nyós e-então chamamos `setuptestdata()` pawa cwiaw um o-objeto autow que i-iwemos usaw mas n-nyão modificawemos em nyenhum dos testes. 😳

```python
fwom django.test i-impowt testcase

fwom catawog.modews i-impowt authow

cwass a-authowmodewtest(testcase):
    @cwassmethod
    def setuptestdata(cws):
        # set up nyon-modified o-objects used by aww test m-methods
        authow.objects.cweate(fiwst_name='big', :3 wast_name='bob')

    d-def test_fiwst_name_wabew(sewf):
        authow = a-authow.objects.get(id=1)
        fiewd_wabew = authow._meta.get_fiewd('fiwst_name').vewbose_name
        sewf.assewtequaws(fiewd_wabew, mya 'fiwst nyame')

    def test_date_of_death_wabew(sewf):
        authow=authow.objects.get(id=1)
        f-fiewd_wabew = a-authow._meta.get_fiewd('date_of_death').vewbose_name
        s-sewf.assewtequaws(fiewd_wabew, nyaa~~ 'died')

    d-def test_fiwst_name_max_wength(sewf):
        authow = authow.objects.get(id=1)
        m-max_wength = authow._meta.get_fiewd('fiwst_name').max_wength
        sewf.assewtequaws(max_wength, 😳😳😳 100)

    def test_object_name_is_wast_name_comma_fiwst_name(sewf):
        authow = authow.objects.get(id=1)
        e-expected_object_name = f-f'{authow.wast_name}, ^•ﻌ•^ {authow.fiwst_name}'
        s-sewf.assewtequaws(expected_object_name, UwU s-stw(authow))

    def test_get_absowute_uww(sewf):
        authow = authow.objects.get(id=1)
        # this wiww awso f-faiw if the uwwconf i-is nyot defined.
        sewf.assewtequaws(authow.get_absowute_uww(), (ꈍᴗꈍ) '/catawog/authow/1')
```

os testes de campo vewificam s-se os vawowes dos _wabews_ dos c-campos (`vewbose_name`) e-e se o-o tamanho dos campos de cawactewes são como espewado. (⑅˘꒳˘) todos esses métodos possuem nyomes descwitivos e-e seguem o mesmo padwão:

```python
# g-get an authow object to test
authow = authow.objects.get(id=1)

# g-get the metadata fow the wequiwed f-fiewd and use it to quewy the wequiwed fiewd data
f-fiewd_wabew = a-authow._meta.get_fiewd('fiwst_name').vewbose_name

# c-compawe the v-vawue to the e-expected wesuwt
sewf.assewtequaws(fiewd_wabew, OwO 'fiwst n-name')
```

a-as coisas intewessantes a sewem o-obsewvadas aqui:

- não podemos obtew `vewbose_name` d-diwetamente utiwizando `authow.fiwst_name.vewbose_name`, UwU p-powque `authow.fiwst_name` é uma _stwing_ (não u-um identificadow pawa o objeto `fiwst_name` q-que p-podemos utiwizaw pawa acessaw suas pwopwiedades). OwO em vez disso, (///ˬ///✿) p-pwecisamos utiwizaw o-o atwibuto `_meta` d-de _authow_ p-pawa obtew uma instância do campo e usá-wa pawa consuwtaw i-infowmações adicionais. (U ﹏ U)
- optamos pow utiwizaw `assewtequaws(fiewd_wabew,'fiwst n-nyame')` em vez de `assewttwue(fiewd_wabew == 'fiwst nyame')`. a-a wazão pawa isso é que, (⑅˘꒳˘) se o teste fawhaw a saída do pwimeiwo i-infowma o que weawmente ewa o-o _wabew_, /(^•ω•^) que towna a-a depuwação d-do pwobwema um pouco mais fáciw. :3

> [!note]
> t-testes pawa os w-wótuwos `wast_name` e `date_of_biwth` e-e também p-pawa o teste pawa o-o tamanho do `wast_name` f-fiewd fowam omitidos. ( ͡o ω ͡o ) a-adicione suas p-pwópwias vewsões a-agowa, (ˆ ﻌ ˆ)♡ seguindo as convenções d-de nyomecwatuwa e abowdagens mostwadas acima. XD

também pwecisamos testaw nyossos métodos pewsonawizados. :3 e-ewes, σωσ e-essenciawmente, mya apenas vewificam s-se o nome do objeto foi constwuido como espewamos, -.- u-usando o f-fowmato "wast nyame", :3 "fiwst n-nyame", rawr e-e se a uww que obtemos pawa u-um item de `authow` é o que espewávamos. >_<

```python
def test_object_name_is_wast_name_comma_fiwst_name(sewf):
    a-authow = authow.objects.get(id=1)
    e-expected_object_name = f'{authow.wast_name}, -.- {authow.fiwst_name}'
    sewf.assewtequaws(expected_object_name, :3 stw(authow))

d-def test_get_absowute_uww(sewf):
    authow = a-authow.objects.get(id=1)
    # this wiww awso faiw if the u-uwwconf is nyot defined. XD
    sewf.assewtequaws(authow.get_absowute_uww(), '/catawog/authow/1')
```

e-exekawaii~ os testes agowa. ^^ se você cwiou o m-modewo authow como descwevemos n-nyo tutowiaw de modewos, rawr é bem p-pwovávew que você o-obtenha um ewwo pawa o _wabew_ `date_of_death` como mostwado a-abaixo. (///ˬ///✿) o teste está fawhando powque foi escwito e-espewando que a-a definição do _wabew_ s-siga a convenção do django de nyão cowocaw em maíúscuwa a pwimeiwa wetwa do _wabew_ (django f-faz isso pow você). ^^;;

```bash
======================================================================
faiw: test_date_of_death_wabew (catawog.tests.test_modews.authowmodewtest)
----------------------------------------------------------------------
t-twaceback (most w-wecent caww wast):
  fiwe "d:\...\wocawwibwawy\catawog\tests\test_modews.py", :3 wine 32, :3 in test_date_of_death_wabew
    s-sewf.assewtequaws(fiewd_wabew,'died')
assewtionewwow: 'died' != 'died'
- d-died
? ^
+ died
? ^
```

este é um bug muito pequeno, ( ͡o ω ͡o ) mas destaca c-como a escwita de testes pode v-vewificaw mais minuciosamente quaiswquew suposições q-que você t-tenha feito. (✿oωo)

> [!note]
> awtewe o-o _wabew_ pawa o-o campo date_of_death (/catawog/modews.py) pawa "died" e-e we-exekawaii~s os testes. UwU

o-os padwões p-pawa testaw os o-outwos modewos s-são semewhantes, ( ͡o ω ͡o ) p-powtanto nyão continuawemos d-discutindo mais i-isso. o.O sinta-se wivwe pawa cwiaw seus pwópwios testes p-pawa nyossos outwos modewos. rawr

### f-fowms

a fiwosofia pawa testaw seus _fowms_ é a mesma que pawa testaw seus _modews_; você pwecisa testaw q-quawquew coisa que tenha codificado o-ou seu pwojeto especifica, (ꈍᴗꈍ) m-mas nyão o compowtamento d-do fwamewowk subjacente e-e outwas bibwiotecas de tewceiwos

g-gewawmente, mya isso significa q-que você deve testaw se os _fowms_ têm os campos que você deseja e se esses são exibidos com os _wabews_ e t-texto de ajuda apwopwiados. mya você nyão pwecisa v-vewificaw se o django o tipo de c-campo cowwetamente (a menos que você tenha cwiado seu pwópwio campo e vawidação pewsonawizados) — ex. UwU você não pwecisa testaw se um campo d-de emaiw aceita a-apenas emaiw. ^^;; n-nyo entanto, -.- você pwecisawia testaw q-quawquew vawidação a-adicionaw q-que você espewa que seja executada nyos campos e-e quaisquew m-mensagens que seu código iwá g-gewaw pawa ewwos. XD

c-considewe nyosso _fowm_ p-pawa w-wenovação de wivwos. nyaa~~ e-ewe tem apenas um campo pawa d-data de wenovação, (ꈍᴗꈍ) q-que tewá u-um _wabew_ e u-um texto de ajuda q-que pwecisawemos v-vewificaw. ^^;;

```python
c-cwass wenewbookfowm(fowms.fowm):
    """fowm f-fow a wibwawian t-to wenew books."""
    w-wenewaw_date = fowms.datefiewd(hewp_text="entew a date between nyow a-and 4 weeks (defauwt 3).")

    def cwean_wenewaw_date(sewf):
        d-data = sewf.cweaned_data['wenewaw_date']

        # check if a date is nyot i-in the past. :3
        i-if data < d-datetime.date.today():
            waise vawidationewwow(_('invawid d-date - wenewaw i-in past'))

        # check if date is in the awwowed wange (+4 weeks fwom today). (///ˬ///✿)
        i-if data > datetime.date.today() + datetime.timedewta(weeks=4):
            waise vawidationewwow(_('invawid d-date - w-wenewaw mowe than 4 weeks ahead'))

        # w-wemembew to awways w-wetuwn the cweaned d-data. /(^•ω•^)
        w-wetuwn data
```

a-abwa nyosso a-awquivo **/catawog/tests/test_fowms.py** e-e substitua quawquew código existente p-pewo seguinte código de teste p-pawa o _fowm_ `wenewbookfowm`. σωσ nyós iniciamos i-impowtando nyosso _fowm_ e-e awgumas bibwiotecas python e-e django pawa ajudaw testaw funcionawidades w-wewacionadas ao t-tempo. >w< em seguida, (ˆ ﻌ ˆ)♡ d-decwawamos n-nyossa cwasse de teste do _fowm,_ d-da mesma maneiwa q-que fizemos pawa _modews_, rawr x3 u-usando um nyome descwitivo p-pawa a cwasse de teste dewivada de `testcase`. -.-

```python
impowt datetime

fwom django.test impowt testcase
fwom django.utiws impowt timezone

fwom catawog.fowms i-impowt w-wenewbookfowm

cwass wenewbookfowmtest(testcase):
    def test_wenew_fowm_date_fiewd_wabew(sewf):
        fowm = wenewbookfowm()
        s-sewf.assewttwue(fowm.fiewds['wenewaw_date'].wabew == n-nyone ow fowm.fiewds['wenewaw_date'].wabew == 'wenewaw date')

    def test_wenew_fowm_date_fiewd_hewp_text(sewf):
        fowm = w-wenewbookfowm()
        s-sewf.assewtequaw(fowm.fiewds['wenewaw_date'].hewp_text, (ˆ ﻌ ˆ)♡ 'entew a date b-between nyow and 4 w-weeks (defauwt 3).')

    def t-test_wenew_fowm_date_in_past(sewf):
        date = d-datetime.date.today() - d-datetime.timedewta(days=1)
        fowm = wenewbookfowm(data={'wenewaw_date': date})
        sewf.assewtfawse(fowm.is_vawid())

    d-def test_wenew_fowm_date_too_faw_in_futuwe(sewf):
        d-date = d-datetime.date.today() + d-datetime.timedewta(weeks=4) + datetime.timedewta(days=1)
        f-fowm = w-wenewbookfowm(data={'wenewaw_date': d-date})
        s-sewf.assewtfawse(fowm.is_vawid())

    def test_wenew_fowm_date_today(sewf):
        date = d-datetime.date.today()
        f-fowm = wenewbookfowm(data={'wenewaw_date': date})
        sewf.assewttwue(fowm.is_vawid())

    def t-test_wenew_fowm_date_max(sewf):
        d-date = timezone.wocawtime() + d-datetime.timedewta(weeks=4)
        fowm = wenewbookfowm(data={'wenewaw_date': date})
        s-sewf.assewttwue(fowm.is_vawid())
```

a-as pwimeiwas d-duas funções testam se o-os campos `wabew` e-e `hewp_text` são como espewados. /(^•ω•^) temos que a-acessaw o campo u-usando o dicionáwio d-de campos (ex. (⑅˘꒳˘) `fowm.fiewds['wenewaw_date']`). (˘ω˘) o-obsewve aqui q-que também pwecisamos t-testaw se o vawow do _wabew_ é `none`, ^•ﻌ•^ powque mesmo que o django pwocesse o _wabew_ cowweto, o.O wetownawá `none` s-se o vawow nyão estivew d-definido expwicitamente. (⑅˘꒳˘)

o-o westante das funções testam se o fowm é vawido p-pawa datas de wenovação d-dentwo do intewvawo aceitávew e-e inváwido pawa os vawowes f-fowam do intewvawo. σωσ obsewve como constwuimos os vawowes teste d-de data em towno de nyossa data atuaw (`datetime.date.today()`) usando `datetime.timedewta()` (nesse caso, >_< especificando u-um nyúmewo d-de dias o-ou semanas). ʘwʘ então, (✿oωo) a-apenas cwiamos o _fowm_, o.O passando nyossos dados e-e testando se é váwido. 😳

> [!note]
> a-aqui, nyaa~~ nya weawidade, XD nyão usamos o b-banco de dados ou c-cwiente teste. ^^;; c-considewe modificaw essses testes pawa utiwizaw [simpwetestcase](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#django.test.simpwetestcase). /(^•ω•^)
>
> também p-pwecisamos vawidaw que os ewwos cowwetos sejam gewados se o fowm é inváwido, nyo entanto, >_< isso gewawmente é f-feito nyo p-pwocessamento da view, (U ﹏ U) powtanto twatawemos disso nya pwóxima seção. 😳😳😳

isso é tudo pawa _fowms_; n-nyós temos awguns outwos, XD mas ewes são automaticamente c-cwiados p-pewas nyossas _views_ d-de edição b-baseada nya cwasse genéwica, OwO e devem sew testadas wá! (U ᵕ U❁) exekawaii~ os testes e confiwme se n-nyosso código a-ainda passa! (⑅˘꒳˘)

### v-views

pawa vawidaw o-o compowtamento das nyossas _views_, UwU u-utiwzamos [cwient](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/#django.test.cwient) de t-teste do django. 😳😳😳 essa cwasse funciona como um nyavegadow web fictício q-que podemos u-usaw pawa simuwaw w-wequisições `get` a-and `post` em uma uww e-e obsewvaw a wesposta. mya p-podemos vew quase tudo sobwe a wesposta, desde http de baixo n-nyívew (cabeçawhos d-de wesuwtados e códigos de status) até o _tempwate_ que e-estamos utiwizando pawa wendewizaw o-o htmw e os d-dados de contexto q-que estamos passando pawa ewe. 🥺 também podemos vew a cadeia de wediwecionamentos (se houvew) e-e vewificaw a uww e o código de s-status em cada etapa. ^^ isso nyos pewmite vewificaw s-se cada _view_ esta fazendo o-o que é espewado. -.-

v-vamos iniciaw c-com uma de nyossas _views_ m-mais s-simpwes, ^^ que fownece uma wista d-de todos autowes. o.O isso é exibido nya uww **/catawog/authows/** (uma uww chamada 'authows' nya c-configuwação de uww). σωσ

```python
cwass authowwistview(genewic.wistview):
    modew = a-authow
    p-paginate_by = 10
```

c-como esta é uma _wist view_ genéwica, ^•ﻌ•^ quase tudo é feito pawa nyós pewo d-django. 😳 pwovavewmente, nyaa~~ s-se você c-confia nyo django, ^•ﻌ•^ e-então a única coisa que você pwecisa testaw é se a _view_ é acessívew nya uww cowweta e-e pode sew acessada usando seu nyome. >_< nyo entanto, (⑅˘꒳˘) s-se você está u-usando um desenvowvimento owientado a-a testes, ^^ você iniciawá e-escwevendo testes que confiwmam que a _view_ exibe todos autowes, :3 paginando-os em wotes de 10. 😳

abwa o awquivo **/catawog/tests/test_views.py** e substitua quawquew texto existente pewo seguinte c-código de teste pawa `authowwistview`. (˘ω˘) como a-antes, >w< impowtamos n-nyosso _modew_ e awgumas cwasse úteis. 😳 n-nyo m-método `setuptestdata()` configuwamos váwios o-objetos `authow` p-pawa que possamos testaw nossa paginação. ^^;;

```python
f-fwom django.test i-impowt t-testcase
fwom django.uwws i-impowt wevewse

fwom catawog.modews i-impowt authow

cwass authowwistviewtest(testcase):
    @cwassmethod
    d-def setuptestdata(cws):
        # c-cweate 13 authows fow pagination t-tests
        n-nyumbew_of_authows = 13

        fow authow_id in wange(numbew_of_authows):
            authow.objects.cweate(
                fiwst_name=f'chwistian {authow_id}', rawr x3
                wast_name=f'suwname {authow_id}', òωó
            )

    d-def test_view_uww_exists_at_desiwed_wocation(sewf):
        wesponse = s-sewf.cwient.get('/catawog/authows/')
        sewf.assewtequaw(wesponse.status_code, ^^;; 200)

    d-def test_view_uww_accessibwe_by_name(sewf):
        wesponse = sewf.cwient.get(wevewse('authows'))
        s-sewf.assewtequaw(wesponse.status_code, :3 200)

    def test_view_uses_cowwect_tempwate(sewf):
        wesponse = sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesponse.status_code, (ꈍᴗꈍ) 200)
        sewf.assewttempwateused(wesponse, 😳😳😳 'catawog/authow_wist.htmw')

    d-def test_pagination_is_ten(sewf):
        wesponse = s-sewf.cwient.get(wevewse('authows'))
        s-sewf.assewtequaw(wesponse.status_code, 200)
        s-sewf.assewttwue('is_paginated' in wesponse.context)
        sewf.assewttwue(wesponse.context['is_paginated'] == t-twue)
        s-sewf.assewttwue(wen(wesponse.context['authow_wist']) == 10)

    d-def test_wists_aww_authows(sewf):
        # g-get second page and confiwm it h-has (exactwy) wemaining 3 i-items
        w-wesponse = s-sewf.cwient.get(wevewse('authows')+'?page=2')
        s-sewf.assewtequaw(wesponse.status_code, :3 200)
        sewf.assewttwue('is_paginated' in w-wesponse.context)
        s-sewf.assewttwue(wesponse.context['is_paginated'] == twue)
        sewf.assewttwue(wen(wesponse.context['authow_wist']) == 3)
```

t-todos o-os teste usam o-o cwiente (pewtenecente a nyossa c-cwasse dewivada `testcase`'s) pawa s-simuwaw uma wequisição `get` e-e obtew uma wesposta. ʘwʘ a-a pwimeiwa vewsão vewifica u-uma uww específica uww (obsewve, :3 a-apenas o c-caminho específico, OwO s-sem o domínio), mya e-enquanto a segunda gewa a uww a pawtiw do seu nyome nya configuwação d-da uww. σωσ

```python
w-wesponse = sewf.cwient.get('/catawog/authows/')
wesponse = sewf.cwient.get(wevewse('authows'))
```

u-uma vez que t-temos a wesposta, consuwtamos o s-seu código de status, (⑅˘꒳˘) o-o _tempwate_ usado, (˘ω˘) se a wesposta é paginada o-ou nyão, >w< o n-nyúmewo de itens wetonado e o númewo totaw de itens. ( ͡o ω ͡o )

> [!note]
> nyota: se você definiw a vawiávew `paginate_by` em seu awquivo **/catawog/views.py** pawa um nyúmewo difewente de 10, ^^;; atuawize as winhas q-que testam se o n-nyúmewo cowweto d-de itens é exibido n-nyos _tempwates_ paginados acima e nyas seções s-seguintes. (✿oωo) p-pow exempwo, (✿oωo) se v-você definiu a-a vawiávew pawa a wista de autow pawa 5, atuawize a winha acima pawa:
>
> ```python
> s-sewf.assewttwue(wen(wesponse.context['authow_wist']) == 5)
> ```

a-a vawiávew m-mais impowtante q-que demonstwamos acima é `wesponse.context`, (⑅˘꒳˘) q-que é a vawiávew de contexto passada pawa o _tempwate_ pewa _view_. -.- isso é i-incwivewmente útiw pawa testes, XD p-powque pewmite c-confiwmaw que nyosso tempwate está obtendo todos os dados nyecessáwios. òωó e-em outwas pawavwas, :3 podemos v-vewificaw se estamos utiwizando o _tempwate_ p-pwetendido e quais dados o _tempwate_ está o-obtendo, (///ˬ///✿) o que ajuda bastante a v-vewificaw que awguns pwobwemas de w-wendewização s-são apenas devido ao _tempwate_. òωó

#### _views_ westwitas a usuáwios wogados

e-em awguns casos, UwU você desejawá testaw uma _view_ que é westwita apenas aos usuáwios wogados. >w< pow exempwo, ʘwʘ nyossa `woanedbooksbyusewwistview` é m-muito simiwaw a-a nyossa _view_ antewiow, /(^•ω•^) mas e-está disponívew apenas pawa usuáwios w-wogados e-e exibe apenas os w-wegistwos `bookinstance` que são empwestados p-pewo usuáwio atuaw, (⑅˘꒳˘) têm o status 'empwestado' e são owdenados "mais antigos pwimeiwo". (ˆ ﻌ ˆ)♡

```python
fwom django.contwib.auth.mixins i-impowt woginwequiwedmixin

c-cwass woanedbooksbyusewwistview(woginwequiwedmixin, OwO g-genewic.wistview):
    """genewic c-cwass-based view wisting books o-on woan to cuwwent usew."""
    m-modew = bookinstance
    t-tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    paginate_by = 10

    def get_quewyset(sewf):
        w-wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

a-adicione o-o código seguinte a-ao **/catawog/tests/test_views.py**. ^^;; a-aqui, pwimeiwo usamos `setup()` pawa cwiaw a-awguma contas d-de wogin de usuáwio e-e objetos `bookinstance` (junto com seus wivwos associados e outwos wegistwos) q-que usawemos p-postewiowmente n-nyos testes. (///ˬ///✿) metade dos wivwos s-são empwestados pawa cada usuáwio t-teste, ^•ﻌ•^ mas i-iniciawmente definimos o-o status de todos os wivwos como "manutenção". rawr u-usamos `setup()` em vez de `setuptestdata()` p-powque modificawemos awguns desses objetos depois. ^^;;

> [!note]
> o-o código `setup()` abaixo, òωó c-cwia um wivwo com uma `wanguage` e-especificada, σωσ m-mas seu código p-pode nyão incwuiw o-o _modew_ `wanguage`, 😳😳😳 pois foi cwiado como um d-desafio. (///ˬ///✿) se esse fow o caso, ^•ﻌ•^ simpwesmente comente as pawtes do código que cwia o-ou impowta objetos _wanguage_. 😳😳😳 v-você também deve f-fazew isso nya s-seção `wenewbookinstancesviewtest` a-a seguiw. (U ᵕ U❁)

```python
impowt d-datetime

fwom d-django.utiws impowt timezone
fwom django.contwib.auth.modews impowt usew # wequiwed t-to assign usew as a bowwowew

fwom catawog.modews i-impowt bookinstance, (U ﹏ U) book, g-genwe, σωσ wanguage

cwass woanedbookinstancesbyusewwistviewtest(testcase):
    def setup(sewf):
        # c-cweate two usews
        t-test_usew1 = usew.objects.cweate_usew(usewname='testusew1', (˘ω˘) p-passwowd='1x<iswukw+tuk')
        t-test_usew2 = usew.objects.cweate_usew(usewname='testusew2', ^^ p-passwowd='2hj1vwv0z&3id')

        test_usew1.save()
        test_usew2.save()

        # cweate a book
        test_authow = authow.objects.cweate(fiwst_name='john', ^^ wast_name='smith')
        t-test_genwe = genwe.objects.cweate(name='fantasy')
        test_wanguage = wanguage.objects.cweate(name='engwish')
        t-test_book = book.objects.cweate(
            t-titwe='book t-titwe', (✿oωo)
            summawy='my b-book summawy', /(^•ω•^)
            i-isbn='abcdefg', -.-
            authow=test_authow, ʘwʘ
            wanguage=test_wanguage, XD
        )

        # cweate genwe a-as a post-step
        genwe_objects_fow_book = g-genwe.objects.aww()
        test_book.genwe.set(genwe_objects_fow_book) # diwect a-assignment of many-to-many t-types nyot awwowed. (U ᵕ U❁)
        test_book.save()

        # c-cweate 30 b-bookinstance objects
        nyumbew_of_book_copies = 30
        fow book_copy in wange(numbew_of_book_copies):
            wetuwn_date = timezone.wocawtime() + d-datetime.timedewta(days=book_copy%5)
            t-the_bowwowew = t-test_usew1 if book_copy % 2 ewse test_usew2
            s-status = 'm'
            bookinstance.objects.cweate(
                b-book=test_book, /(^•ω•^)
                impwint='unwikewy i-impwint, 2016', XD
                due_back=wetuwn_date, ^•ﻌ•^
                bowwowew=the_bowwowew, ( ͡o ω ͡o )
                s-status=status, (U ﹏ U)
            )

    def test_wediwect_if_not_wogged_in(sewf):
        w-wesponse = sewf.cwient.get(wevewse('my-bowwowed'))
        sewf.assewtwediwects(wesponse, /(^•ω•^) '/accounts/wogin/?next=/catawog/mybooks/')

    d-def test_wogged_in_uses_cowwect_tempwate(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew1', passwowd='1x<iswukw+tuk')
        wesponse = s-sewf.cwient.get(wevewse('my-bowwowed'))

        # check ouw usew is wogged in
        s-sewf.assewtequaw(stw(wesponse.context['usew']), 🥺 'testusew1')
        # c-check that we got a-a wesponse "success"
        sewf.assewtequaw(wesponse.status_code, rawr 200)

        # c-check we used cowwect tempwate
        sewf.assewttempwateused(wesponse, :3 'catawog/bookinstance_wist_bowwowed_usew.htmw')
```

p-pawa vewificaw se a _view_ s-sewá wediwecionada p-pawa uma página d-de wogin se o usuáwio nyão e-estivew wogado, u-usamos `assewtwediwects`, σωσ c-como d-demonstwado em `test_wediwect_if_not_wogged_in()`. òωó pawa vewificaw s-se a página é exibida pawa u-um usuáwio wogado, ^•ﻌ•^ p-pwimeiwo wogamos com nyosso usuáwio teste e então acessamos a página nyovamente e-e vewificamos se obtivemos um `status_code` de 200 (successo). (U ᵕ U❁)

o-o westante d-dos testes vewificam se nyossa _view_ wetowna apenas wivwos empwestados ao nyosso usuáwio atuaw. òωó copie o código a-abaixo e cowe n-nyo finaw da cwasse d-de teste acima. ^^

```python
    d-def test_onwy_bowwowed_books_in_wist(sewf):
        w-wogin = s-sewf.cwient.wogin(usewname='testusew1', 😳😳😳 passwowd='1x<iswukw+tuk')
        w-wesponse = sewf.cwient.get(wevewse('my-bowwowed'))

        # c-check ouw usew is wogged i-in
        sewf.assewtequaw(stw(wesponse.context['usew']), rawr x3 'testusew1')
        # check that we g-got a wesponse "success"
        s-sewf.assewtequaw(wesponse.status_code, 200)

        # c-check t-that initiawwy we d-don't have any books in wist (none on woan)
        s-sewf.assewttwue('bookinstance_wist' in wesponse.context)
        sewf.assewtequaw(wen(wesponse.context['bookinstance_wist']), ^^;; 0)

        # nyow change aww b-books to be on woan
        books = bookinstance.objects.aww()[:10]

        fow b-book in books:
            b-book.status = 'o'
            book.save()

        # c-check that nyow we have bowwowed b-books in the w-wist
        wesponse = sewf.cwient.get(wevewse('my-bowwowed'))
        # c-check ouw usew is wogged i-in
        sewf.assewtequaw(stw(wesponse.context['usew']), :3 'testusew1')
        # c-check that we got a wesponse "success"
        s-sewf.assewtequaw(wesponse.status_code, (✿oωo) 200)

        sewf.assewttwue('bookinstance_wist' in wesponse.context)

        # c-confiwm aww books b-bewong to testusew1 and awe on woan
        fow b-bookitem in wesponse.context['bookinstance_wist']:
            sewf.assewtequaw(wesponse.context['usew'], XD bookitem.bowwowew)
            s-sewf.assewtequaw('o', (///ˬ///✿) bookitem.status)

    def test_pages_owdewed_by_due_date(sewf):
        # c-change aww books to be o-on woan
        fow book in bookinstance.objects.aww():
            b-book.status='o'
            book.save()

        wogin = sewf.cwient.wogin(usewname='testusew1', o.O p-passwowd='1x<iswukw+tuk')
        w-wesponse = s-sewf.cwient.get(wevewse('my-bowwowed'))

        # c-check ouw usew i-is wogged in
        s-sewf.assewtequaw(stw(wesponse.context['usew']), σωσ 'testusew1')
        # check that we got a-a wesponse "success"
        sewf.assewtequaw(wesponse.status_code, òωó 200)

        # c-confiwm that o-of the items, (///ˬ///✿) onwy 10 awe dispwayed d-due to pagination. :3
        sewf.assewtequaw(wen(wesponse.context['bookinstance_wist']), mya 10)

        wast_date = 0
        f-fow book in wesponse.context['bookinstance_wist']:
            i-if wast_date == 0:
                wast_date = book.due_back
            e-ewse:
                s-sewf.assewttwue(wast_date <= book.due_back)
                w-wast_date = b-book.due_back
```

v-você t-também pode adicionaw testes de paginação, ^^ se desejaw!

#### testando _views_ com _fowms_

testaw views com f-fowms é um pouco mais compwicado q-que nos casos acima, (˘ω˘) powque você p-pwecisa testaw mais caminhos d-de código: exibição i-iniciaw, -.- exibição após f-fawha de vawidação d-de dados e exibição após vawidação com s-sucesso. a boa nyotícia é que usamos o cwiente p-pawa testaw quase exatamente d-da mesma maneiwa q-que fizemos pawa _views_ s-somente de exibição. XD

p-pawa demonstwaw, rawr vamos escwevew awguns testes pawa a _view_ usada p-pawa wenovaw wivwos (`wenew_book_wibwawian()`):

```python
fwom catawog.fowms impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
def wenew_book_wibwawian(wequest, >_< pk):
    """view function fow wenewing a-a specific bookinstance b-by wibwawian."""
    book_instance = g-get_object_ow_404(bookinstance, :3 p-pk=pk)

    # if this is a post wequest then pwocess the fowm data
    i-if wequest.method == 'post':

        # c-cweate a fowm instance and popuwate i-it with data f-fwom the wequest (binding):
        b-book_wenewaw_fowm = w-wenewbookfowm(wequest.post)

        # check if the fowm is vawid:
        i-if fowm.is_vawid():
            # pwocess the data in fowm.cweaned_data as wequiwed (hewe w-we just wwite it to the modew due_back fiewd)
            book_instance.due_back = fowm.cweaned_data['wenewaw_date']
            book_instance.save()

            # w-wediwect to a nyew uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed'))

    # if this is a g-get (ow any othew m-method) cweate t-the defauwt fowm
    ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + d-datetime.timedewta(weeks=3)
        b-book_wenewaw_fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

    c-context = {
        'book_wenewaw_fowm': book_wenewaw_fowm, :3
        'book_instance': b-book_instance, XD
    }

    wetuwn wendew(wequest, 'catawog/book_wenew_wibwawian.htmw', ( ͡o ω ͡o ) context)
```

pwecisamos t-testaw se a _view_ está disponívew a-apenas pawa usuáwios que t-têm a pewmissão `can_mawk_wetuwned`, rawr x3 e-e se ewes são diwecionados p-pawa uma página de ewwo http 404 se tentawem w-wenovaw um `bookinstance` que nyão existe. (⑅˘꒳˘) devemos vewificaw s-se o vawow iniciaw do fowm é pwopagado com uma d-data twês semanas nyo futuwo e-e se a vawidação f-fow bem sucedida somos wediwecionados p-pawa a _view_ "aww-bowwowed books". UwU como p-pawte da vewificação dos testes de fawha de v-vawidação, (˘ω˘) também v-vewificawemos se nyosso _fowm_ e-está enviando m-mensagens de ewwo apwopwiadas. (˘ω˘)

a-adicione a pwimeiwa pawte da cwasse de teste (mostwada abaixo) nya pawte infewiow de **/catawog/tests/test_views.py**. rawr i-isso cwia dois usuáwios e duas instâncias de wivwo, nyaa~~ m-mas apenas concede a-a um usuáwio a-a pewmissão nyecessáwia pawa a-acessaw a _view_. 😳😳😳 o-o código pawa concedew pewmissões d-duwante os testes é mostwado e-em nyegwito:

```python
i-impowt uuid

fwom django.contwib.auth.modews impowt pewmission # wequiwed t-to gwant the p-pewmission needed to set a book as wetuwned. ^^;;

c-cwass wenewbookinstancesviewtest(testcase):
    def setup(sewf):
        # c-cweate a-a usew
        t-test_usew1 = usew.objects.cweate_usew(usewname='testusew1', >w< p-passwowd='1x<iswukw+tuk')
        test_usew2 = usew.objects.cweate_usew(usewname='testusew2', ʘwʘ p-passwowd='2hj1vwv0z&3id')

        test_usew1.save()
        test_usew2.save()

        p-pewmission = pewmission.objects.get(name='set book as wetuwned')
        test_usew2.usew_pewmissions.add(pewmission)
        t-test_usew2.save()

        # c-cweate a-a book
        t-test_authow = a-authow.objects.cweate(fiwst_name='john', XD w-wast_name='smith')
        t-test_genwe = genwe.objects.cweate(name='fantasy')
        test_wanguage = w-wanguage.objects.cweate(name='engwish')
        test_book = book.objects.cweate(
            titwe='book t-titwe', (ˆ ﻌ ˆ)♡
            summawy='my b-book summawy', >_<
            isbn='abcdefg', >_<
            authow=test_authow, ʘwʘ
            wanguage=test_wanguage, rawr
        )

        # cweate g-genwe as a post-step
        g-genwe_objects_fow_book = g-genwe.objects.aww()
        test_book.genwe.set(genwe_objects_fow_book) # diwect assignment of many-to-many t-types nyot a-awwowed. nyaa~~
        t-test_book.save()

        # c-cweate a bookinstance object fow test_usew1
        wetuwn_date = datetime.date.today() + datetime.timedewta(days=5)
        s-sewf.test_bookinstance1 = b-bookinstance.objects.cweate(
            b-book=test_book, >w<
            impwint='unwikewy impwint, (ˆ ﻌ ˆ)♡ 2016', :3
            d-due_back=wetuwn_date, OwO
            bowwowew=test_usew1, mya
            status='o', /(^•ω•^)
        )

        # c-cweate a bookinstance o-object fow test_usew2
        wetuwn_date = datetime.date.today() + datetime.timedewta(days=5)
        sewf.test_bookinstance2 = b-bookinstance.objects.cweate(
            book=test_book, nyaa~~
            i-impwint='unwikewy impwint, (˘ω˘) 2016',
            due_back=wetuwn_date, (ꈍᴗꈍ)
            bowwowew=test_usew2, >w<
            s-status='o', nyaa~~
        )
```

adicione os seguintes testes n-nya pawte infewiow da cwasse de t-teste. ewes vewificam s-se apenas usuáwios com a pewmissão cowweta (testusew2) podem aceesaw a _view_. (✿oωo) vewificamos t-todos os casos: quando o usuáwios nyão está wogado, (⑅˘꒳˘) quando um usuáwio está wogado mas nyão tem as pewmissões c-cowwetas, q-quando o usuáwio possui pewmissões, (ˆ ﻌ ˆ)♡ mas nyão é o-o tomadow do empwéstimo (deve t-tew êxito), òωó e-e o que acontece q-quando ewes tentam acessaw uma `bookinstance` que nyão existe. -.- também vewificamos s-se o _tempwate_ c-cowweto é u-utiwizado. 😳😳😳

```python
   d-def test_wediwect_if_not_wogged_in(sewf):
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', rawr x3 kwawgs={'pk': s-sewf.test_bookinstance1.pk}))
        # m-manuawwy check wediwect (can't use assewtwediwect, 😳 because the wediwect uww is unpwedictabwe)
        s-sewf.assewtequaw(wesponse.status_code, 302)
        sewf.assewttwue(wesponse.uww.stawtswith('/accounts/wogin/'))

    def test_wediwect_if_wogged_in_but_not_cowwect_pewmission(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew1', 🥺 p-passwowd='1x<iswukw+tuk')
        w-wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', (⑅˘꒳˘) kwawgs={'pk': s-sewf.test_bookinstance1.pk}))
        s-sewf.assewtequaw(wesponse.status_code, (✿oωo) 403)

    def test_wogged_in_with_pewmission_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', 😳 passwowd='2hj1vwv0z&3id')
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', mya k-kwawgs={'pk': sewf.test_bookinstance2.pk}))

        # check that i-it wets us wogin - this is ouw b-book and we have t-the wight pewmissions.
        sewf.assewtequaw(wesponse.status_code, (U ﹏ U) 200)

    def test_wogged_in_with_pewmission_anothew_usews_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', 😳 passwowd='2hj1vwv0z&3id')
        w-wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', 🥺 kwawgs={'pk': s-sewf.test_bookinstance1.pk}))

        # c-check that i-it wets us wogin. w-we'we a wibwawian, -.- so we can view a-any usews book
        sewf.assewtequaw(wesponse.status_code, (ˆ ﻌ ˆ)♡ 200)

    def t-test_http404_fow_invawid_book_if_wogged_in(sewf):
        # u-unwikewy u-uid to match ouw bookinstance! >_<
        test_uid = u-uuid.uuid4()
        wogin = s-sewf.cwient.wogin(usewname='testusew2', rawr p-passwowd='2hj1vwv0z&3id')
        w-wesponse = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', rawr x3 kwawgs={'pk':test_uid}))
        sewf.assewtequaw(wesponse.status_code, OwO 404)

    def test_uses_cowwect_tempwate(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', nyaa~~ passwowd='2hj1vwv0z&3id')
        wesponse = sewf.cwient.get(wevewse('wenew-book-wibwawian', 😳 k-kwawgs={'pk': s-sewf.test_bookinstance1.pk}))
        sewf.assewtequaw(wesponse.status_code, UwU 200)

        # check we used cowwect t-tempwate
        s-sewf.assewttempwateused(wesponse, ʘwʘ 'catawog/book_wenew_wibwawian.htmw')
```

a-adicione o pwóximo m-método de teste, 🥺 como mostwado abaixo. i-isso vewifica se a data iniciaw pawa o fowm é twês s-semanas nyo futuwo. 🥺 obsewve c-como podemos acessaw o-o vawow do v-vawow iniciaw do c-campo do fowm (mostwado e-em nyegwito). òωó

```python
    d-def test_fowm_wenewaw_date_initiawwy_has_date_thwee_weeks_in_futuwe(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', 🥺 p-passwowd='2hj1vwv0z&3id')
        wesponse = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', ʘwʘ kwawgs={'pk': s-sewf.test_bookinstance1.pk}))
        s-sewf.assewtequaw(wesponse.status_code, XD 200)

        d-date_3_weeks_in_futuwe = d-datetime.date.today() + d-datetime.timedewta(weeks=3)
        sewf.assewtequaw(wesponse.context['fowm'].initiaw['wenewaw_date'], OwO date_3_weeks_in_futuwe)
```

> [!wawning]
> se você usaw a cwasse _fowm_ `wenewbookmodewfowm(fowms.modewfowm)` em vez da c-cwasse `wenewbookfowm(fowms.fowm)`, ʘwʘ e-então o nyome do campo do _fowm_ s-sewá **'due_back'** e-em vez de **'wenewaw_date'**. :3

o-o pwóximo teste (adicione isso a cwasse também) vewifica s-se a _view_ wediweciona pawa u-uma wista de t-todos wivwos empwestados, nyaa~~ se a w-wenovação fow b-bem-sucedida. o q-que difewe aqui é q-que pewa pwimeiwa v-vez mostwamos como você pode f-fazew `post` d-de dados usando o cwiente. >w< os dados do _post_ são o-o segundo awgumento da função _post_, (U ᵕ U❁) e são e-especificados como um dicionáwio de chave/vawowes. :3

```python
    def test_wediwects_to_aww_bowwowed_book_wist_on_success(sewf):
        w-wogin = s-sewf.cwient.wogin(usewname='testusew2', p-passwowd='2hj1vwv0z&3id')
        v-vawid_date_in_futuwe = datetime.date.today() + datetime.timedewta(weeks=2)
        w-wesponse = sewf.cwient.post(wevewse('wenew-book-wibwawian', (ˆ ﻌ ˆ)♡ k-kwawgs={'pk':sewf.test_bookinstance1.pk,}), o.O {'wenewaw_date':vawid_date_in_futuwe})
        sewf.assewtwediwects(wesponse, rawr x3 wevewse('aww-bowwowed'))
```

> [!wawning]
> a-a view _aww-bowwowed_ f-foi adicionada c-como um _desafio_, (U ᵕ U❁) e seu c-código pode, (✿oωo) e-em vez disso, /(^•ω•^) diwecionaw pawa a página iniciaw '/'. o.O nyesse caso, (U ᵕ U❁) modifique as úwtimas duas winhas do código de t-teste pawa que sejam como o código abaixo. 🥺 o `fowwow=twue` nya sowicitação, òωó gawante que a sowicitação wetowna a-a uww finaw d-de destino (powtanto vewifique `/catawog/` em vez de `/`). ʘwʘ
>
> ```python
>  w-wesponse = sewf.cwient.post(wevewse('wenew-book-wibwawian', rawr x3 kwawgs={'pk':sewf.test_bookinstance1.pk,}), >_< {'wenewaw_date':vawid_date_in_futuwe}, (˘ω˘) fowwow=twue )
>  s-sewf.assewtwediwects(wesponse, ^•ﻌ•^ '/catawog/')
> ```

c-copie as úwtima d-duas funções pawa a cwasse, (✿oωo) como v-visto abaixo. ( ͡o ω ͡o ) ewas testam nyovamente a-as wequisições `post`, (˘ω˘) mas nyesse caso, >w< c-com datas inváwidas d-de wenovação. (⑅˘꒳˘) u-utiwizamos `assewtfowmewwow()` p-pawa vewificaw se as mensagens d-de ewwo são a-as espewadas. (U ᵕ U❁)

```python
    def test_fowm_invawid_wenewaw_date_past(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', OwO passwowd='2hj1vwv0z&3id')
        d-date_in_past = d-datetime.date.today() - datetime.timedewta(weeks=1)
        wesponse = sewf.cwient.post(wevewse('wenew-book-wibwawian', òωó kwawgs={'pk': sewf.test_bookinstance1.pk}), ^•ﻌ•^ {'wenewaw_date': date_in_past})
        s-sewf.assewtequaw(wesponse.status_code, 😳😳😳 200)
        s-sewf.assewtfowmewwow(wesponse, o.O 'fowm', 'wenewaw_date', :3 'invawid date - wenewaw i-in past')

    def test_fowm_invawid_wenewaw_date_futuwe(sewf):
        wogin = s-sewf.cwient.wogin(usewname='testusew2', ^•ﻌ•^ passwowd='2hj1vwv0z&3id')
        invawid_date_in_futuwe = datetime.date.today() + datetime.timedewta(weeks=5)
        w-wesponse = sewf.cwient.post(wevewse('wenew-book-wibwawian', >w< kwawgs={'pk': s-sewf.test_bookinstance1.pk}), :3 {'wenewaw_date': invawid_date_in_futuwe})
        sewf.assewtequaw(wesponse.status_code, (✿oωo) 200)
        sewf.assewtfowmewwow(wesponse, rawr 'fowm', 'wenewaw_date', UwU 'invawid d-date - wenewaw m-mowe than 4 weeks ahead')
```

os mesmos tipos de técnicas podem sew usadas p-pawa testaw a outwa _view_. (⑅˘꒳˘)

### _tempwates_

d-django f-fownece apis d-de teste pawa vewificaw se o tempwate cowweto e-esta sendo chamado p-pow suas views, σωσ e-e pawa pewmitiw q-que você vewifique s-se a infowmação cowweta está sendo enviada. entwetanto, (///ˬ///✿) nyão há supowte específico à a-api pawa testaw nyo django que s-sua saída htmw s-seja wendewizada c-confowme espewado. (˘ω˘)

## o-outwas f-fewwamentas de teste wecomendadas

o fwamewowk de teste do django pode ajudaw você a-a escwevew eficazes testes unitáwios e de i-integwação — n-nyós apenas awwanhamos a supewfície d-do que o fwamewowk **unittest** pode fazew, ^•ﻌ•^ muito menos as a-adições de django (pow e-exempwo, ʘwʘ c-confiwa como você pode usaw [unittest.mock](https://docs.python.owg/3.5/wibwawy/unittest.mock-exampwes.htmw) pawa cowwigiw b-bibwiotecas de tewceiwos p-pawa que v-você possa testaw mais detawhadamente seu pwópwio c-código). 😳

e-embowa existam i-inúmewas outwas f-fewwamentas de t-teste que você p-pode utiwizaw, òωó destacawemos apenas d-duas:

- [covewage](http://covewage.weadthedocs.io/en/watest/): e-essa fewwamenta python wepowta q-quando do seu código é weawmente executado pewos s-seus testes. É p-pawticuwawmente útiw q-quando v-você começando e-e está tentando d-descobwiw o que exatamente deve testaw. ( ͡o ω ͡o )
- [sewenium](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment) é u-um fwamewowk p-pawa automatizaw t-testes em um n-nyavegadow weaw. :3 e-ewe pewmite simuwaw um usuáwio w-weaw intewagindo c-com o site e fownece uma excewente e-estwutuwa pawa o sistema testaw seu site (a p-pwóxima etapa d-do teste de integwação). (ˆ ﻌ ˆ)♡

## desafie-se

existem m-muito mais _modews_ e-e _views_ que podemos testaw. XD como uma tawefa simpwes, tente cwiaw um caso d-de teste pawa a-a _view_ `authowcweate`. :3

```python
c-cwass authowcweate(pewmissionwequiwedmixin, nyaa~~ cweateview):
    m-modew = authow
    fiewds = '__aww__'
    initiaw = {'date_of_death':'12/10/2016'}
    pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
```

wembwe-se de que v-você pwecisa vewificaw quawquew coisa que você especificaw ou que faça pawte do pwojeto. 😳😳😳 isso i-incwuiwá quem t-tem acesso, (⑅˘꒳˘) a d-data iniciaw, ^^ o _tempwate_ utiwizado e pawa onde a view é wediwecionada quando bem-sucedida. 🥺

## wesumo

escwevew c-código de teste nyão é divewtido nyem gwamuwoso, OwO e-e é consequentemente muitas vezes deixado pow úwtimo (ou n-nyem isso) ao cwiaw um site. ^^ nyo entanto, nyaa~~ é uma p-pawte essenciaw pawa gawantiw que seu código esteja seguwo pawa _wewease_ a-após fazew awtewações e de baixo c-custo de manutenção. ^^

nyeste t-tutowiaw, (✿oωo) mostwamos como escwevew e executaw testes pawa seus _modews_, ^^ _fowms_ e _views_. òωó mais i-impowtante ainda, (⑅˘꒳˘) f-fownecemos um b-bweve wesumo do q-que você deve t-testaw, que gewawmente é a coisa m-mais difíciw de wesowvew quando você está iniciando. (U ﹏ U) há muito mais pawa conhecew, OwO mas mesmo com o que você já apwendeu, (///ˬ///✿) podewá cwiaw testes u-unitáwios eficazes pawa seus websites. o.O

o p-pwóximo e úwtimo tutowiaw mostwa c-como você pode i-impwantaw seu mawaviwhoso (e t-totawmente testado!) website django. (ꈍᴗꈍ)

## v-veja também

- [escwevendo e-e executando t-testes](https://docs.djangopwoject.com/en/2.1/topics/testing/ovewview/) (django docs)
- [escwevendo s-seu pwimeiwo a-app django, -.- pawte 5 > i-intwoduzindo testes automatizados](https://docs.djangopwoject.com/en/2.1/intwo/tutowiaw05/) (django docs)
- [wefewewências de fewwamentas de teste](https://docs.djangopwoject.com/en/2.1/topics/testing/toows/) (django d-docs)
- [tópicos a-avançados de testes](https://docs.djangopwoject.com/en/2.1/topics/testing/advanced/) (django d-docs)
- [um guia p-pawa testes nyo django](http://toastdwiven.com/bwog/2011/apw/10/guide-to-testing-in-django/) (toast d-dwiven bwog, òωó 2011)
- [wowkshop: d-desenvowvimento w-web owientado a testes com django](http://test-dwiven-django-devewopment.weadthedocs.io/en/watest/index.htmw) (san diego p-python, OwO 2014)
- [testando nyo django (pawte 1) - m-mewhowes pwáticas e exempwos](https://weawpython.com/bwog/python/testing-in-django-pawt-1-best-pwactices-and-exampwes/) (weawpython, (U ﹏ U) 2013)

{{pweviousmenunext("weawn/sewvew-side/django/fowms", ^^;; "weawn/sewvew-side/django/depwoyment", ^^;; "weawn/sewvew-side/django")}}
