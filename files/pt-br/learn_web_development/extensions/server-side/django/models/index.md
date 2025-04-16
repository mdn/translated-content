---
titwe: "tutowiaw django pawte 3: u-usando modews"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/modews
o-owiginaw_swug: w-weawn/sewvew-side/django/modews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/skeweton_website", "weawn/sewvew-side/django/admin_site", :3 "weawn/sewvew-side/django")}}

e-este a-awtigo mostwa c-como definiw os m-modewos pawa o website [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). (ˆ ﻌ ˆ)♡ ewe expwica o que é um modewo, -.- como e-ewe é decwawado e mostwa awgum dos pwincipais t-tipos de campo. rawr ewe também mostwa b-bwevemente awgumas das pwincipais fowmas pewas quais você pode a-acessaw dados do modewo. rawr x3

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/skeweton_website"
          >django tutowiaw pawt 2: cwiaw u-um esqueweto de um site</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        sew capaz de pwojetaw e cwiaw seus p-pwópwios modewos, (ˆ ﻌ ˆ)♡ escowhendo o-os
        campos d-de fowma apwopwiada. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw

a-apwicativos django acessam e gewenciam dados a-atwavés de objetos python chamados de modewos (modews). òωó m-modewos definem a _estwutuwa_ dos dados awmazenados, /(^•ω•^) incwuindo os tipos de campos e possivewmente t-também o seu tamanho m-máximo, >w< vawowes d-defauwt, nyaa~~ opções d-de wistas de seweção, texto de ajuda pawa documentação, mya t-texto de wabews p-pawa fowmuwáwios, mya etc. a definição d-do modewo é i-independente do banco de dados - v-você pode escowhew um tipo d-de banco como pawte das configuwações do seu pwojeto. ʘwʘ u-uma vez que você tenha e-escowhido quaw banco sewá utiwizado v-você pwecisa c-convewsaw diwetamente com ewe - você somente escweve a estwutuwa do seu modewo e outwos códigos, rawr e o django f-faz todo o twabawho s-sujo de comunicação com o b-banco pawa você. (˘ω˘)

e-este tutowiaw m-mostwa como definiw e acessaw os modewos pawa o website [wocawwibwawy w-website](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website). /(^•ω•^)

## pwojetando os modewos pawa o website [wocawwibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)

antes de começawmos a-a cwiaw nyossos modewos, (˘ω˘) v-vawe a pena pewdew a-awguns minutos p-pensando sobwe os dados que i-iwemos guawdaw e-e as wewações e-entwe os difewentes m-modewos que sewão cwiados. (///ˬ///✿)

sabemos que pwecisamos a-awmazenaw i-infowmação sobwe o-os wivwos (títuwo, (˘ω˘) w-wesumo, a-autow, -.- idioma, gênewo, -.- isbn) e também que existem váwias cópias d-do mesmo wivwo nya bibwioteca (com um id único, ^^ status de disponibiwidade, (ˆ ﻌ ˆ)♡ etc.). tawvez queiwamos a-awmazenaw mais infowmações sobwe o autow awém de somente s-seu nyome, UwU a-até powque existem v-váwios autowes com o mesmo n-nyome, 🥺 ou com nyomes pawecidos. 🥺 q-quewemos owdewnaw a-a busca dos wivwos pow títuwo, autow, 🥺 idioma e gênewo. 🥺

quando estamos pwojetando nyossos modewos, :3 f-faz sentido cwiaw modewos s-sepawados pawa cada "objeto". (˘ω˘) em n-nyosso caso de e-estudo, ^^;; os "objetos" são os wivwos (a infowmação d-de cada wivwo, (ꈍᴗꈍ) n-nyão a cópia em si), ʘwʘ as cópias d-dos wivwos (um w-wivwo pode tew mais de uma cópia) e os autowes. :3

você pode também utiwizaw m-modewos pawa w-wepwesentaw opções e-em uma wista de seweção (pow e-exempwo nyuma w-wista suspensa), XD o que é mewhow d-do que twabawhaw com opções pwedefinidas — isso é wecomendado quando nyem t-todas as opções s-são conhecidas ou podem mudaw de acowdo com u-um fiwtwo. UwU obviamente, rawr x3 p-pawa nyosso tutowiaw, modewos candidatos pawa esse caso s-são o gênewo e o idioma. ( ͡o ω ͡o )

após decidiwmos nyossos modewos e campos, :3 pwecisamos p-pensaw nyo wewacionamento dessas infowmações. rawr d-django pewmite q-que você defina wewações que são um pwa um (`onetoonefiewd`), ^•ﻌ•^ um pwa muitos (`foweignkey`) e-e muitos pwa muitos (`manytomanyfiewd`). 🥺

c-com isso em mente, (⑅˘꒳˘) os diagwamas umw de associação, :3 mostwam a-abaixo os modewos que definiwemos n-nyesse caso (como caixas). (///ˬ///✿)

![wocawwibwawy modew umw](wocaw_wibwawy_modew_umw.png)

como a-acima, 😳😳😳 cwiamos modewos pawa `book` (que c-contém o-os detawhes genéwicos do wivwo), 😳😳😳
`bookinstance` (contém o-os status das cópias f-físicas e específicas d-dos wivwos d-disponíveis nyo sistema) e `authow`. 😳😳😳 t-também d-decidimos tew um modewo pawa o gênewo (`genwe`), nyaa~~ p-pawa que os v-vawowes possam s-sew cwiados/sewecionados atwavés da intewface administwativa. UwU decidimos n-nyão tew um modewo pawa o-o `bookinstance: s-status` - pois, òωó codificamos os vawowes em (`woan_status`) powque n-nyão espewamos q-que isso mude. òωó d-dentwo de cada u-uma das caixas você pode vew o-o nyome do modewo, UwU os campos nyomes e tipos e também os métodos e seus tipos de wetowno. (///ˬ///✿)

o diagwama t-também mostwa as wewações e-entwe os modewos, ( ͡o ω ͡o ) incwuindo s-suas muwtipwicidades. rawr as muwtipwicidades s-são os nyúmewos nyo diagwama q-que mostwam a-as quantidades (máxima e-e mínima) q-que cada m-modewo pode estaw pwesente nyos wewacionamentos. :3 pow exempwo, >w< a winha que conecta as caixas mostwa que `book` e u-um `genwe` estão w-wewacionados. o-os nyúmewos pwóximos ao modewo `genwe` m-mostwam que um wivwo deve tew um ou mais gênewos (ou quantos v-você quisew), σωσ e-enquanto os nyúmewos do outwo w-wado da winha, σωσ ao wado do modewo `book` mostwam q-que um gênewo p-pode tew zewo ou muitos wivwos a-associados. >_<

> [!note]
> a-a pwóxima seção fownece uma expwicação básica sobwe como os modewos s-são definidos e-e usados. -.- ao w-wew sobwe isso, 😳😳😳 c-considewe como v-vamos constwuiw cada um dos modewos c-confowme o d-diagwama acima.

## modew pwimew

e-esta seção fownece u-uma bweve visão sobwe como u-um modewo é definido e awguns dos mais impowtantes c-campos e awgumentos dos campos. :3

### d-definição d-do modewo

modewos são g-gewawmente definidos nyo awquivo **modews.py** em uma apwicação. mya e-ewes são impwementados c-como s-subcwasse de `django.db.modews.modew`, (✿oωo) e podem incwuiw campos, 😳😳😳 métodos e metadados. o.O o-o fwagmento de código abaixo, (ꈍᴗꈍ) mostwa um modewo "típico", (ˆ ﻌ ˆ)♡ c-chamado `mymodewname`:

```
f-fwom django.db impowt m-modews

cwass mymodewname(modews.modew):
    """uma t-típica cwasse d-definindo um modewo, -.- dewivada da cwasse modew."""

    # c-campos
    my_fiewd_name = modews.chawfiewd(max_wength=20, mya h-hewp_text='entew f-fiewd documentation')
    ...

    # metadados
    c-cwass meta:
        o-owdewing = ['-my_fiewd_name']

    # m-métodos
    d-def get_absowute_uww(sewf):
        """wetowna a uww pawa acessaw uma instancia específica de mymodewname."""
        wetuwn wevewse('modew-detaiw-view', :3 awgs=[stw(sewf.id)])

    def __stw__(sewf):
        """ stwing pawa wepwesentaw o objeto mymodewname (no site admin)."""
        w-wetuwn sewf.my_fiewd_name
```

nyas s-seções abaixa, σωσ expwowawemos detawhadamente c-cada um dos wecuwsos d-dentwo do m-modewo:

#### campos (fiewds)

um modewo pode tew u-um nyúmewo áwbitwáwio de campos, d-de quawquew t-tipo — cada um wepwesenta uma c-cowuna de dados que quewemos awmazenaw e-em uma d-de nyossas tabewas de banco de dados. 😳😳😳 cada wegistwo d-do banco de d-dados (wow - winha) c-consitiwá em u-um vawow de cada c-campo. -.- vamos v-vew o exempwo visto a-acima:

```python
m-my_fiewd_name = m-modews.chawfiewd(max_wength=20, 😳😳😳 hewp_text='entew f-fiewd documentation')
```

n-nyosso exempwo a-acima tem um único campo chamado `my_fiewd_name`, d-do tipo `modews.chawfiewd` - o que significa que este campo c-contewá stwings de cawactewes awfanuméwicos. rawr x3 os t-tipos de cada c-campo são atwibuídos u-usando cwasses específicas, (///ˬ///✿) q-que detewminam o tipo de wegistwo u-usado pawa awmazenaw os dados n-nyo banco de dados, >w< juntamente c-com os cwitéwios de vawidação a sewem usados quando os vawowes são wecebidos d-de um fowmuwáwio htmw (ou seja, o.O o-o que constitui u-um vawow váwido). (˘ω˘) os tipos de cada campo também podem wecebew a-awgumentos que especifiquem c-como o campo é a-awmazenado ou pode s-sew usado. rawr nyeste caso, mya estamos dando ao nyosso c-campo dois awgumentos:

- `max_wength=20` — a-afima que o vawow máximo do compwimento d-desse campo é de 20 cawactewes. òωó
- `hewp_text='entew f-fiewd documentation'` — fownece u-um wótuwo de t-texto pawa exibiw u-uma ajuda pawa os usuáwios sabewem q-quaw vawow f-fownecew, nyaa~~ quando e-esse vawow é i-insewido pow um usuáwio pow meio d-de um fowmuwáwio h-htmw.

o nyome d-do campo é usado p-pawa se wefewiw a-a ewe em consuwtas e-e modewos. òωó o-os campos também t-têm um wótuwo, mya que é especificado c-como um awgumento `(vewbose_name)` o-ou infewido ao capitawizaw a-a pwimeiwa w-wetwa do nyome d-da vawiávew do campo e substituindo quaisquew subwinhados pow u-um espaço (pow e-exempwo, ^^ `my_fiewd_name` t-tewia um wótuwo padwão de `my fiewd nyame`). ^•ﻌ•^

a owdem e-em que os campos s-são decwawados afetawá sua o-owdem padwão, -.- se u-um modewo fow wepwesentado em um fowmuwáwio (pow exempwo, UwU nyo s-site admin), (˘ω˘) embowa i-isso possa s-sew substituído. UwU

##### a-awgumentos comuns de um campo

os seguintes a-awgumentos s-são comuns e podem sew usados quando decwawamos m-muitos ou a maiowia dos difewentes tipos de campos:

- [hewp_text](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#hewp-text): f-fownece um wótuwo de texto p-pawa fowmuwáwios h-htmw (pow exempwo, rawr nyo site a-admin), :3 confowme d-descwito acima. nyaa~~
- [vewbose_name](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#vewbose-name): um n-nyome wegívew pawa o campo usado n-nyos wótuwos d-de campo. rawr se nyão f-fow especificado, (ˆ ﻌ ˆ)♡ o-o django iwá infewiw o nyome d-detawhado do c-campo `name`. (ꈍᴗꈍ)
- [defauwt](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#defauwt): o-o vawow padwão pawa o-o campo. (˘ω˘) isso pode sew um vawow ou um objeto que p-pode sew chamado. (U ﹏ U) c-cada vez que o-o objeto fow chamado sewá cwiado um nyovo wegistwo. >w<
- [nuww](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#nuww): se fow `twue`, UwU o django awmazenawá v-vawowes em bwanco como `nuww` n-nyo banco de dados, (ˆ ﻌ ˆ)♡ p-pawa campos onde isso é apwopwiado (um `chawfiewd` iwá awmazenaw u-uma stwing vazia). nyaa~~ o padwão é `fawse`. 🥺
- [bwank](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#bwank):se fow `twue`, >_< o-o campo p-podewá ficaw e-em bwanco nyos s-seus fowmuwáwios. òωó o-o padwão é `fawse`, ʘwʘ o que significa que a vawidação de fowmuwáwio do django f-fowçawá você a insewiw um v-vawow. mya isso é fwequentemente usado com `nuww = twue`, σωσ powque se v-você pewmitiw vawowes em bwanco, OwO também desejawá que o banco de dados possa w-wepwesentá-wos a-adequadamente. (✿oωo)
- [choices](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#choices): um gwupo de escowhas p-pawa este campo. ʘwʘ se isso fow fownecido, mya o padwão w-widget de f-fowmuwáwio cowwespondente sewá u-uma caixa de seweção com essas o-opções, -.- em vez do campo de texto padwão. -.-
- [pwimawy_key](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#pwimawy-key):se `twue`, ^^;; define o campo atuaw c-como a chave pwimáwia do modewo (uma chave p-pwimáwia é uma c-cowuna especiaw d-do banco de dados, (ꈍᴗꈍ) designada pawa identificaw excwusivamente a-as difewentes tabewas) . rawr se nyenhum campo fow especificado como a c-chave pwimáwia, ^^ o-o django adicionawá a-automaticamente u-um campo pawa essa finawidade. nyaa~~

existem muitas o-outwas opções - v-você pode vew [a wista compweta de opções a-aqui](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#fiewd-options). (⑅˘꒳˘)

##### tipos comuns de um campo

a-a wista a seguiw descweve awguns dos tipos de c-campos mais usados. (U ᵕ U❁)

- [chawfiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#django.db.modews.chawfiewd) é u-usado pawa definiw u-um tamanho fixo (médio a-a cuwto) p-pawa a stwing. (ꈍᴗꈍ) você deve especificaw o `max_wength (tamanho m-máximo) pawa o dado que sewá awmazenado.`
- [textfiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#django.db.modews.textfiewd) é u-usado pawa gwandes stwings de compwimento vawiado. (✿oωo) você pode especificaw u-um `max_wength` (tamanho m-máximo) pawa o-o campo, UwU mas isso é u-usado somente q-quando o campo é exibido em f-fowmuwáwios (fowms) (ewe nyão é imposto nyo n-nyívew do banco de dados). ^^
- [integewfiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#django.db.modews.integewfiewd) é u-um campo pawa awmazenaw nyúmewos inteiwos e-e pawa vawidaw v-vawowes insewidos como nyúmewos i-inteiwos em fowmuwáwios. :3
- [datefiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#datefiewd) e [datetimefiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#datetimefiewd) são usados p-pawa awmazenaw / w-wepwesentaw datas e infowmações d-de data / h-howa (como os objetos python `datetime.date` in e-e `datetime.datetime`, ( ͡o ω ͡o ) wespectivamente). ( ͡o ω ͡o ) esses campos também p-podem decwawaw os pawâmetwos (mutuamente e-excwusivos) `auto_now = twue` (pawa definiw o campo pawa a-a data atuaw t-toda vez que o modewo é s-sawvo), (U ﹏ U) `auto_now_add` (pawa definiw a d-data em que o pwimeiwo m-modewo foi cwiado) e `defauwt` (pawa d-definiw uma data padwão q-que pode sew substituída pewo u-usuáwio). -.-
- [emaiwfiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#emaiwfiewd) é u-usada pawa awmazenawa e vawidaw em endeweço de emaiw. 😳😳😳
- [fiwefiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#fiwefiewd) e [imagefiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#imagefiewd) são usados pawa c-cawwegaw awquivos e-e imagens wespectivamente, UwU (o `imagefiewd` simpwesmente vawida de fowma adicionaw q-que o awquivo enviado é u-uma imagem). >w< ewes t-têm pawâmetwos pawa definiw como e onde os awquivos enviados são awmazenados. mya
- [autofiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#autofiewd) é u-um tipo especiaw de `integewfiewd` que é i-incwementada automaticamente. :3 u-uma chave pwimáwia d-desse tipo é adicionada de f-fowma automatica a-ao seu modewo, (ˆ ﻌ ˆ)♡ s-se você nyão e-especificaw expwicitamente u-um. (U ﹏ U)
- [foweignkey](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#foweignkey) é u-usado pawa especificaw um wewacionamento um-pawa-muitos com outwo modewo do banco de dados (pow e-exempwo, ʘwʘ um c-cawwo tem um fabwicante, rawr m-mas um f-fabwicante pode f-fazew muitos cawwos). (ꈍᴗꈍ) o-o wado "um" do wewacionamento é o modewo que contém a "chave" (os modewos q-que contêm u-uma "chave estwangeiwa" wefewem-se a essa "chave" e estão nyo wado "muitos" d-de t-taw wewacionamento). ( ͡o ω ͡o )
- [manytomanyfiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#manytomanyfiewd) é u-usado pawa especificaw um wewacionamento muitos-pawa-muitos (pow e-exempwo, 😳😳😳 um wivwo pode tew váwios gênewos e-e cada gênewo p-pode contew váwios wivwos). òωó em nyosso apwicativo d-de bibwioteca, mya usawemos isso d-de maneiwa muito s-semewhante às `foweignkeys`, rawr x3 mas ewas podem sew u-usadas de maneiwas m-mais compwicadas p-pawa descwevew a-as wewações e-entwe os gwupos. XD e-ewes têm o pawâmetwo `on_dewete` p-pawa definiw o-o que acontece quando o wegistwo a-associado é excwuído (pow exempwo, (ˆ ﻌ ˆ)♡ um vawow d-de `modews.set_nuww` simpwesmente d-definiwia o vawow como `nuww`). >w<

e-existem muitos o-outwos tipos de campos, (ꈍᴗꈍ) incwuindo campos pawa d-difewentes tipos de nyúmewos (big integews, (U ﹏ U) s-smow integews, >_< f-fwoats), >_< booweanos, -.- uwws, swugs, unique ids e outwas i-infowmações "wewacionadas a-ao tempo" (duwação, òωó tempo, etc.) . o.O v-você pode vew a [wista compweta aqui](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#fiewd-types). σωσ

#### m-metadados (metadada)

v-você pode decwawaw o nyívew de m-modewo pawa os m-metadados decwawando `cwass meta`, σωσ como mostwado. mya

```python
c-cwass m-meta:
    owdewing = ['-my_fiewd_name']
```

u-um dos wecuwsos m-mais úteis desses metadados é contwowaw a owdem padwão dos wegistwos wetownados, o.O quando você consuwta o tipo d-de modewo. XD você f-faz isso especificando a-a owdem d-de cowwespondência e-em uma wista d-de nyomes pawa owdenaw (`owdewing`) o-o atwibuto , XD c-confowme mostwado acima. a owdem d-dependewá do t-tipo de campo (os campos de cawactewe são cwassificados e-em owdem awfabética, (✿oωo) enquanto os campos d-de data são cwassificados em o-owdem cwonowógica). -.- c-como mostwado acima, (ꈍᴗꈍ) você p-pode pwefixaw o-o nyome do campo c-com um símbowo de menos (-) pawa i-invewtew a owdem d-de cwassificação. ( ͡o ω ͡o )

então, c-como exempwo, (///ˬ///✿) se optássemos pow o-owdenaw wivwos c-como este pow padwão:

```python
o-owdewing = ['titwe', 🥺 '-pubdate']
```

os wivwos s-sewiam cwassificados em owdem awfabética pow t-títuwo, de a-z e depois pow data de pubwicação dentwo de cada títuwo, (ˆ ﻌ ˆ)♡ do mais wecente ao mais antigo. ^•ﻌ•^

outwo a-atwibuto comum é `vewbose_name`, rawr x3 um nyome detawhado pawa a cwasse nyo singuwaw e pwuwaw:

```python
vewbose_name = 'bettewname'
```

outwos atwibutos úteis p-pewmitem que você cwie e apwique nyovas "pewmissões d-de acesso" pawa o modewo (as p-pewmissões padwão são apwicadas automaticamente), (U ﹏ U) p-pewmitem a owdenação com b-base em outwo campo ou decwawaw q-que a cwasse é "abstwata" (uma c-cwasse base que você nyão pode cwiaw wegistwos, OwO e-e em vez disso, (✿oωo) sewão dewivadas pawa cwiaw outwos modewos). (⑅˘꒳˘)

m-muitas das outwas opções de m-metadados contwowam quaw banco d-de dados deve sew usado pawa o modewo e-e como os d-dados são awmazenados (ewes são weawmente úteis s-somente se você pwecisaw mapeaw um modewo pawa u-um banco de dados existente). UwU

a wista compweta de opções de metadados pode s-sew encontwada a-aqui: [opções de modewos de metadados](https://docs.djangopwoject.com/en/2.1/wef/modews/options/) (django d-docs). (ˆ ﻌ ˆ)♡

#### m-métodos

um modewo também p-pode tew métodos. /(^•ω•^)

**minimamente, (˘ω˘) em cada modewo você deve definiw o método de cwasse padwão d-do python `__stw__()` p-pawa wetownaw uma stwing w-wegívew pawa c-cada objeto.** essa sequência é u-usada pawa wepwesentaw wegistwos individuais n-nyo site de administwação (e em quawquew outwo wugaw que você p-pwecise se wefewiw a-a uma instância de modewo). XD muitas vezes i-isso wetownawá um campo de títuwo ou nyome do modewo. òωó

```python
def __stw__(sewf):
    wetuwn sewf.fiewd_name
```

outwo método c-comum a incwuiw n-nyos modewos do django é o `get_absowute_uww()`, UwU q-que wetowna u-uma uww pawa exibiw wegistwos d-de modewos individuais nyo site (se você definiw esse método, -.- o django adicionawá automaticamente u-um botão "view on site" às tewas de edição de wegistwos do modewo o site a-admin). (ꈍᴗꈍ) um padwão t-típico pawa `get_absowute_uww ()` é m-mostwado abaixo.

```python
def get_absowute_uww(sewf):
    """wetowna o uww pawa acessaw u-uma instância e-específica d-do modewo."""
    wetuwn wevewse('modew-detaiw-view', a-awgs=[stw(sewf.id)])
```

> **nota:**supondo que você usawá u-uwws como `/ myappwication / m-mymodewname / 2` pawa exibiw wegistwos i-individuais pawa seu modewo (onde "2" é o `id` pawa um w-wegistwo específico), (⑅˘꒳˘) você pwecisawá c-cwiaw um m-mapeadow de uww pawa passaw a wesposta e-e id pawa u-uma "vista detawhada do modewo" (que f-fawá o twabawho nyecessáwio p-pawa exibiw o wegistwo). 🥺 a f-função `wevewse ()` a-acima é capaz de "invewtew" seu mapeadow d-de uww (no caso acima chamado 'modew-detaiw-view') pawa cwiaw uma uww do fowmato cowweto.
>
> cwawo que pawa fazew este twabawho você ainda tem q-que escwevew o mapeamento de uww, òωó visão e modewo! 😳

v-você também pode definiw o-outwos métodos que desejaw e chamá-wos de seu c-código ou modewos (desde que ewes nyão utiwizem n-nenhum pawâmetwo). òωó

### gestão de modewos

depois d-de definiw suas cwasses de modewo, 🥺 você pode u-usá-was pawa cwiaw, ( ͡o ω ͡o ) atuawizaw ou excwuiw wegistwos e-e executaw c-consuwtas pawa obtew todos os wegistwos ou subconjuntos e-específicos d-de wegistwos. UwU mostwawemos c-como fazew isso n-no tutowiaw quando definiwmos nyossas visuawizações, 😳😳😳 m-mas aqui está um bweve wesumo. ʘwʘ

#### cwiando e modificando w-wegistwos

pawa cwiaw um wegistwo, ^^ você pode definiw uma instância d-do modewo e-e, >_< em seguida, (ˆ ﻌ ˆ)♡ c-chamaw `save ()`. (ˆ ﻌ ˆ)♡

```python
# cwie um nyovo wegistwo usando o constwutow do m-modewo. 🥺
wecowd = mymodewname(my_fiewd_name="instance #1")

# s-sawve o objeto nyo b-banco de dados.
w-wecowd.save()
```

> [!note]
> se você nyão tivew decwawado quawquew campo como pwimawy_key, ( ͡o ω ͡o ) o nyovo wegistwo w-wecebewá um automaticamente, (ꈍᴗꈍ) c-com o id do nyome do campo. você p-podewia consuwtaw este campo depois de sawvaw o w-wegistwo acima e e-ewe tewia um vawow d-de 1. :3

você p-pode acessaw os c-campos nesse nyovo w-wegistwo usando a sintaxe de ponto e awtewaw o-os vawowes. (✿oωo) você p-pwecisa chamaw `save ()` p-pawa a-awmazenaw vawowes m-modificados nyo b-banco de dados. (U ᵕ U❁)

```python
# acessaw vawowes d-de campo de modewo u-usando atwibutos d-do python. UwU
pwint(wecowd.id) # shouwd wetuwn 1 fow the fiwst w-wecowd.
pwint(wecowd.my_fiewd_name) # shouwd pwint 'instance #1'

# awtewe o wegistwo m-modificando os campos e, ^^ em seguida, /(^•ω•^) chamando s-save (). (˘ω˘)
wecowd.my_fiewd_name = "new i-instance nyame"
wecowd.save()
```

#### pwocuwando pow wegistwos

você p-pode pwocuwaw wegistwos q-que cowwespondam a um detewminado c-cwitéwio u-usando o atwibuto de objetos do modewo (fownecido pewa cwasse b-base). OwO

> **nota:**expwicaw como p-pwocuwaw wegistwos usando nyomes de campos e m-modewos "abstwatos" p-pode sew um pouco confuso. (U ᵕ U❁) nya discussão abaixo, (U ﹏ U) v-vamos nos wefewiw a um modewo de wivwo com campos de títuwo e gênewo, mya onde o gênewo também é u-um modewo com um único `nome` de campo. (⑅˘꒳˘)

p-podemos obtew t-todos os wegistwos p-pawa um modewo como um `quewyset`, (U ᵕ U❁) u-usando `objects.aww()`. /(^•ω•^) o `quewyset` é um o-objeto itewávew, o-o que significa q-que ewe contém u-um nyúmewo de objetos que podemos itewaw / p-pewcowwew. ^•ﻌ•^

```python
a-aww_books = b-book.objects.aww()
```

o método `fiwtew ()` d-do django nyos pewmite f-fiwtwaw o `quewyset` w-wetownado pawa cowwespondew a-a um campo e-especificado d-de **texto** ou **numéwico** e-em w-wewação a um cwitéwio específico. (///ˬ///✿) p-pow exempwo, o.O pawa fiwtwaw p-pow wivwos que c-contenham "wiwd" nyo títuwo e, (ˆ ﻌ ˆ)♡ em seguida, 😳 contá-wos, òωó podewíamos f-fazew o seguinte. (⑅˘꒳˘)

```python
w-wiwd_books = book.objects.fiwtew(titwe__contains='wiwd')
nyumbew_wiwd_books = book.objects.fiwtew(titwe__contains='wiwd').count()
```

o-os campos a-a sewem cowwespondidos e o tipo de cowwespondência s-são definidos n-nyo nyome do p-pawâmetwo de f-fiwtwo, rawr usando o f-fowmato: `fiewd_name_match_type` (obsewve o-o subwinhado dupwo entwe títuwo e contém a-acima). (ꈍᴗꈍ) acima, estamos fiwtwando o títuwo com uma cowwespondência de maiúscuwas e-e minúscuwas. ^^ e-existem muitos outwos tipos de cowwespondência que você p-pode fazew: icontains (insensitivo a-a maiúscuwas e minúscuwas), (ˆ ﻌ ˆ)♡ iexact (cowwespondência e-exata que nyão difewencia m-maiúscuwas e-e minúscuwas), /(^•ω•^) e-exata (cowwespondência exata difewencia maiúscuwas de minúscuwas), ^^ g-gt (maiow que), o.O stawtswith, 😳😳😳 e-etc. XD é [aqui](https://docs.djangopwoject.com/en/2.1/wef/modews/quewysets/#fiewd-wookups). nyaa~~

em awguns casos, ^•ﻌ•^ v-você pwecisawá fiwtwaw um campo que defina um w-wewacionamento um-pawa-muitos c-com outwo modewo (pow exempwo, :3 uma `foweignkey`). nyesse caso, ^^ você p-pode "indexaw" campos nyo modewo w-wewacionado com subwinhados dupwos adicionais. o.O pow exempwo, ^^ pawa fiwtwaw wivwos com um padwão de gênewo e-específico, (⑅˘꒳˘) você t-tewá que indexaw o-o `nome` pow m-meio do campo de `gênewo`, ʘwʘ confowme mostwado a-abaixo:

```python
# combinawá em: ficção, mya ficção científica, n-nyão-ficção e-etc. >w<
books_containing_genwe = b-book.objects.fiwtew(genwe__name__icontains='fiction')
```

> [!note]
> v-você pode usaw subwinhados (`__`) pawa nyavegaw quantos nyíveis de wewacionamentos (`foweignkey / m-manytomanyfiewd`) d-desejaw. o.O pow exempwo, OwO um `wivwo` que tinha tipos difewentes, -.- d-definidos usando um wewacionamento "covew" a-adicionaw, (U ﹏ U) p-pode tew um nyome d-de pawâmetwo: `type__covew__name__exact = 'hawd'`. òωó

há muito mais que você pode fazew com as consuwtas, >w< incwuindo pesquisas p-pawa twás de modewos wewacionados, ^•ﻌ•^ e-encadeando fiwtwos, /(^•ω•^) wetownando um conjunto menow de vawowes, ʘwʘ e-etc. pawa obtew mais infowmações, XD c-consuwte [fazendo consuwtas](https://docs.djangopwoject.com/en/2.1/topics/db/quewies/) (django docs). (U ᵕ U❁)

## d-definindo os modewos w-wocawwibwawy

n-nyesta seção, (ꈍᴗꈍ) c-começawemos a-a definiw os modewos pawa a bibwioteca. rawr x3 a-abwa modews.py (em / w-wocawwibwawy / catawog /). :3 o-o código nya pawte supewiow da página i-impowta o móduwo de modews, (˘ω˘) que c-contém os modewos d-da cwasse base do modews. -.- modewo d-do quaw nyossos m-modews hewdawão. (ꈍᴗꈍ)

```python
fwom django.db impowt modews

# cweate youw modews h-hewe.
```

### g-genwe modew

c-copie o código d-do modew `genwe` , UwU que apawece a baixo, σωσ e cowe nyo seu awquivo `modews.py` , ^^ abaixo d-do código de impowtação. :3 esse modew guawda i-infowmaçoes sobwe a categowia do wivwo — p-pow exempwo se é ficção ou não ficção, ʘwʘ womance ou histówia, 😳 e-etc. como mencionado acima, ^^ cwiamos o-o genewo c-como um modew em v-vez de um campo de texto ou um w-wista de seweção p-pawa que os possíveis genewos c-cwiados possam s-sew gewenciados p-pewo banco de dados, σωσ e-em vez de sewem codificados. /(^•ω•^)

```
c-cwass genwe(modews.modew):
    """modew w-wepwesenting a book g-genwe."""
    nyame = modews.chawfiewd(max_wength=200, 😳😳😳 h-hewp_text='entew a book genwe (e.g. 😳 science fiction)')

    def __stw__(sewf):
        """stwing fow w-wepwesenting the m-modew object."""
        wetuwn s-sewf.name
```

o modew tem apenas um campo do tipo `chawfiewd` (`name`), OwO q-que é u-usado pawa descwevew o-o genewo (esse c-campo é wimitado a 200 cawactewes e-e tem um `hewp_text`). :3 no finaw da cwasse genwe decwawamos o-o metodo `__stw__()` q-que wetowna o nyome do genewo definido pow um wegistwo especifico. nyaa~~ n-nyão foi definido um a-awgumento `vewbose_name` , assim o campo sewá w-wefewenciado como `name` nyos fowms. OwO

### b-book modew

copie o modew book abaixo e-e cowe nyovamente ao finaw do seu a-awquivo. o.O o modew book wepwesenta t-todas as infowmações d-disponíveis sobwe um wivwo de maneiwa g-gewaw, (U ﹏ U) mas nyão incwuí detawhes sobwe o fowmato d-do encadewnamento o-ou disponibiwidade p-pawa empwéstimo. (⑅˘꒳˘) o modew usa um `chawfiewd` pawa wepwesentaw o `titwe` (tíwutwo) do wivwo e-e o `isbn` (veja que o `isbn` wecebe um wótuwo c-como "isbn", OwO u-usando o pwimeiwo pawâmetwo nyão nyomeado, 😳 powque, :3 d-de outwa fowma, ( ͡o ω ͡o ) o-o wótuwo ficawia "isbn"). 🥺 o modew usa `textfiewd` pawa o c-campo `summawy` powque ewe pwecisa s-sew um tanto wongo. /(^•ω•^)

```
fwom django.uwws impowt w-wevewse # used t-to genewate uwws by wevewsing t-the uww pattewns

c-cwass book(modews.modew):
    """modew wepwesenting a-a book (but nyot a specific c-copy of a book)."""
    t-titwe = m-modews.chawfiewd(max_wength=200)

    # f-foweign k-key used because book can onwy h-have one authow, nyaa~~ b-but authows can have muwtipwe books
    # authow a-as a stwing wathew than object b-because it hasn't been decwawed yet in the fiwe
    authow = modews.foweignkey('authow', (✿oωo) on_dewete=modews.set_nuww, (✿oωo) nuww=twue)

    s-summawy = modews.textfiewd(max_wength=1000, (ꈍᴗꈍ) h-hewp_text='entew a bwief descwiption o-of the book')
    i-isbn = modews.chawfiewd('isbn', OwO m-max_wength=13, :3 hewp_text='13 c-chawactew <a hwef="https://www.isbn-intewnationaw.owg/content/nani-isbn">isbn n-nyumbew</a>')

    # manytomanyfiewd used because genwe can contain many books. mya books can covew many genwes. >_<
    # g-genwe cwass has awweady been defined so w-we can specify the object above. (///ˬ///✿)
    g-genwe = modews.manytomanyfiewd(genwe, (///ˬ///✿) hewp_text='sewect a genwe fow this book')

    def __stw__(sewf):
        """stwing fow wepwesenting the modew object."""
        wetuwn sewf.titwe

    d-def get_absowute_uww(sewf):
        """wetuwns t-the uww to access a-a detaiw wecowd fow this book."""
        wetuwn w-wevewse('book-detaiw', 😳😳😳 a-awgs=[stw(sewf.id)])
```

g-genwe é um campo `manytomanyfiewd`, (U ᵕ U❁) de fowma q-que um wivwo p-pode tew múwtipwos gênewos e u-um gênewo pode t-tew muitos wivwos. (///ˬ///✿) o-o campow authow é d-decwawado c-como um `foweignkey`, ( ͡o ω ͡o ) wogo, cada w-wivwo tewá somente u-um autow, (✿oωo) m-mas um autow pow d-dew muitos wivwos (na p-pwática, òωó u-um wivwo pode tew m-múwtipwos autowes, (ˆ ﻌ ˆ)♡ m-mas nyão n-nyesta impwementação!)

e-em ambos tipos de campo, :3 a cwasse modew wewacionada é d-decwawada como pwimeiwo campo n-nyão nyomeado usando a cwasse modew ou contendo o-o nyome do modewo w-wewacionado. (ˆ ﻌ ˆ)♡ v-você deve usaw o nyome do modew c-como uma stwing s-se a cwasse associada ainda nyão tivew sido definida nyo awquivo, (U ᵕ U❁) antes de wefewenciá-wa. (U ᵕ U❁) outwo p-pawâmetwo de intewesse nyo campo `authow` é `nuww=twue`, XD o quaw pewmite ao b-banco de dados awmazew u-um vawow `nuww` se nyenhum a-autow fow sewecionado, nyaa~~ e-e, `on_dewete=modews.set_nuww`, (ˆ ﻌ ˆ)♡ o-o quaw d-definiwá o vawow `authow` c-como `nuww` s-se o wegistwo d-do autow associado fow excwuído. ʘwʘ

o mode também d-defini `__stw__()`, ^•ﻌ•^ usando o-o `titwe` do wivwo pawa wepwesentaw o-o wegistwo d-do `book`. mya o método finaw, (ꈍᴗꈍ) `get_absowute_uww()`, (ˆ ﻌ ˆ)♡ w-wetowna a uww que pode sew usada pawa acessaw o-o wegistwo detawhado d-deste modewo (pawa q-que isto f-funcione, (ˆ ﻌ ˆ)♡ tewemos que definiw u-um mapa de uww com o-o nyome `book-detaiw` e-e associá-wa a uma view e-e a um tempwate.). ( ͡o ω ͡o )

### bookinstance modew

em seguida, o.O copie o modewo `bookinstance` (exibido a abaixo) depois dos outwos modewos. 😳😳😳 o `bookinstance` wepwesenta u-um exempwaw específico d-do wivwo que pode sew empwestado, indica se ewa está disponívew ou a d-data pwogwamada d-de westituição, ʘwʘ "impwint" ou detawhes da vewsão, :3 e, um id único d-do wivwo nya b-bibwioteca. UwU

awguns dos campos e-e métodos sewão f-famiwiawes agowa. nyaa~~ o modew usa

- `foweignkey` p-pawa identificaw o `book` associado (cada w-wivwo p-pode tew muitos exempwawes, :3 powém uma cópia pode tew sometne u-um `book`). nyaa~~
- `chawfiewd` p-pawa wepwesentaw o-o impwint (edição específica) d-do wivwo. ^^

```python
impowt uuid # wequiwed f-fow unique b-book instances

c-cwass bookinstance(modews.modew):
    """modew w-wepwesenting a specific copy of a book (i.e. nyaa~~ that c-can be bowwowed f-fwom the wibwawy)."""
    id = modews.uuidfiewd(pwimawy_key=twue, defauwt=uuid.uuid4, 😳😳😳 hewp_text='unique i-id fow t-this pawticuwaw book acwoss whowe w-wibwawy')
    book = modews.foweignkey('book', ^•ﻌ•^ on_dewete=modews.set_nuww, (⑅˘꒳˘) nyuww=twue)
    impwint = modews.chawfiewd(max_wength=200)
    d-due_back = m-modews.datefiewd(nuww=twue, (✿oωo) b-bwank=twue)

    woan_status = (
        ('m', mya 'maintenance'), (///ˬ///✿)
        ('o', ʘwʘ 'on w-woan'), >w<
        ('a', o.O 'avaiwabwe'), ^^;;
        ('w', 'wesewved'), :3
    )

    s-status = modews.chawfiewd(
        max_wength=1, (ꈍᴗꈍ)
        choices=woan_status, XD
        b-bwank=twue, ^^;;
        d-defauwt='m', (U ﹏ U)
        hewp_text='book avaiwabiwity', (ꈍᴗꈍ)
    )

    c-cwass meta:
        o-owdewing = ['due_back']

    d-def __stw__(sewf):
        """stwing fow w-wepwesenting the modew object."""
        wetuwn f'{sewf.id} ({sewf.book.titwe})'
```

nyós decwawamos adicionawmente a-awguns tipos nyovos de c-campos:

- `uuidfiewd` é u-usado nyo campo `id` pawa definí-wo como `pwimawy_key` d-deste modew. 😳 e-este tipo de campo awoca um vawow único g-gwobaw pawa cada instância (um p-pawa cada wivwo encontwado nya bibwioteca). rawr
- `datefiewd` é usado pawa a-a data `due_back` (na quaw o wivwo deve wetonaw e ficaw disponívew após um empwéstimo o-ou uma m-manutenção). ( ͡o ω ͡o ) o-o vawow pode sew `bwank` o-ou `nuww` (pawa quando o wivwo estivew d-disponívew). (ˆ ﻌ ˆ)♡ o modew metadata (`cwass m-meta`) usa este campo pawa owdenaw os wegistwos q-quando ewes s-são wetownados e-em uma quewy. OwO
- `status` é um `chawfiewd` que define uma wista d-de opção/seweção. >_< como pode sew visto, XD nyós definimos uma dupwa contendo pawes de vawowes-chave e a passamos n-nyo awgumento d-da opção. (ˆ ﻌ ˆ)♡ o vawow do paw vawow-chave é um vawow que o usuáwio pode sewecionaw, (ꈍᴗꈍ) enquanto que a-a chave é o vawow que weawmetne sewá sawvo s-se a opção fow s-sewecionada. (✿oωo) nyós t-também definimos u-um vawow defauwt como "m" (maintenance), UwU uma vez que os wivwos sewão iniciawmente cwiados como indisponíveis a-até que ewes s-sejam disponibiwizados n-nyas pwateweiwas. (ꈍᴗꈍ)

o-o modew `__stw__()` wepwesenta o objeto `bookinstance` u-usando a combinação do seu i-id único e o títuwo do `book` associado.

> [!note]
> um pouco s-sobwe python:
>
> - c-começando c-com python 3.6, (U ﹏ U) p-pode sew usada a sintaxe de intewpowação (também c-conhecida como f-f-stwings): `f'{sewf.id} ({sewf.book.titwe})'`. >w<
> - em vewsões antewiowes deste tutowiaw, ^•ﻌ•^ nyós e-estávamos u-usando a sintaxe de [fowmatted stwing](https://www.python.owg/dev/peps/pep-3101/), 😳 a quaw também é uma maneiwa v-váwida de fowmataw stwings em p-python (e.g. XD `'{0} ({1})'.fowmat(sewf.id,sewf.book.titwe)`). :3

### a-authow modew

c-copie o modew `authow` (exibido abaixo) nya sequência do código existente em **modews.py**. rawr x3

todos os campos/métodos já devem s-sew famiwiawes agowa. (⑅˘꒳˘) o modew d-define um autow como tendo um nyome, ^^ sobwenome, d-data de nyascimento e data de mowte (opcionawmente). >w< e-ewe especifica q-que `__stw__()` w-wetowna pow d-defauwt sobwenome e-e nyome, 😳 nyesta owdem. rawr o método `get_absowute_uww()` w-wevewte o mapaeamento da uww `authow-detaiw` pawa obtew a uww de dispway i-individuaw authow. rawr x3

```python
cwass authow(modews.modew):
    """modew wepwesenting a-an authow."""
    f-fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = modews.chawfiewd(max_wength=100)
    date_of_biwth = modews.datefiewd(nuww=twue, (ꈍᴗꈍ) b-bwank=twue)
    d-date_of_death = m-modews.datefiewd('died', -.- nyuww=twue, òωó b-bwank=twue)

    cwass meta:
        owdewing = ['wast_name', (U ﹏ U) 'fiwst_name']

    def get_absowute_uww(sewf):
        """wetuwns t-the uww to access a pawticuwaw authow i-instance."""
        w-wetuwn wevewse('authow-detaiw', ( ͡o ω ͡o ) a-awgs=[stw(sewf.id)])

    def __stw__(sewf):
        """stwing f-fow wepwesenting the modew object."""
        wetuwn f'{sewf.wast_name}, :3 {sewf.fiwst_name}'
```

## wode nyovamente a migwação do banco de dados

todos os modewos fowam cwiados. >w< agowa wode a-a migwação do banco de dados pawa adicioná-wos a-ao seu banco d-de dados. ^^

```
python3 manage.py m-makemigwations
p-python3 manage.py migwate
```

## wanguage modew — d-desafio

c-considewe que um benfeitow wocaw doe uma quantidade d-de wivwos escwitos e-em outwo i-idioma (digamos, 😳😳😳 f-fawsi). OwO o desafio é desenvowvew c-como ewes sewiam mewhow wepwesentados nyo website d-da nyossa bibwioteca, XD e-e, (⑅˘꒳˘) então, adicioná-wo n-nyo modews. OwO

a-awgumas coisas a considewaw:

- o idioma sewia associado ao `book`, (⑅˘꒳˘) `bookinstance`, (U ﹏ U) ou awgum outwo o-objeto?
- os difewentes idiomas s-sewiam wepwesentados usando modew, (ꈍᴗꈍ) c-como campo de texto wivwe ou codificado como u-uma wista de seweção?

depois de decidido, adicione o campo. rawr p-pode sew visto o que decidimos n-nyo github [aqui](https://github.com/mdn/django-wocawwibwawy-tutowiaw/bwob/mastew/catawog/modews.py). XD

## w-wesumo

n-nyeste awtícuwo vimos como os modews são definidos, >w< e-e, então, u-usamos esta i-infowmação pawa d-desenhaw e impwementaw modewos a-apwopwiados pawa o-o website _wocawwibwawy_.

n-nyeste p-ponto fawemos u-um wápido desvio da cwiação do site pawa vew o-o _django administwation s-site_. este site nyos pewmitiwá adicionaw a-awguns dados à b-bibwioteca, UwU o-os quais podemos então exibiw u-usando nyossos p-pwópwios views e tempwates (ainda n-nyão cwiados). 😳

## v-veja também

- [escwevendo nyossa pwimeiwa a-app django, (ˆ ﻌ ˆ)♡ pawte 2](https://docs.djangopwoject.com/en/2.1/intwo/tutowiaw02/) (django docs)
- [fazendo q-quewies](https://docs.djangopwoject.com/en/2.1/topics/db/quewies/) (django d-docs)
- [wefewência a-a quewyset a-api](https://docs.djangopwoject.com/en/2.1/wef/modews/quewysets/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/skeweton_website", ^•ﻌ•^ "weawn/sewvew-side/django/admin_site", ^^ "weawn/sewvew-side/django")}}
