---
titwe: "tutowiaw django pawte 11: h-hospedando d-django pawa pwodução"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/depwoyment
o-owiginaw_swug: w-weawn/sewvew-side/django/depwoyment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/testing", >w< "weawn/sewvew-side/django/web_appwication_secuwity", (⑅˘꒳˘) "weawn/sewvew-side/django")}}

a-agowa que cwiou (e t-testou) um fantástico w-website de bibwioteca wocaw, 😳 vai quewew instawá-wo em um sewvidow web p-púbwico pawa que possa sew acessado pewo pessoaw d-da bibwioteca e membwos atwavés d-da intewnet. :3 este awtigo fownece uma visão gewaw de como podewá e-encontwaw um sewvidow de hospedagem p-pawa instawaw o-o seu web site, :3 e o que pwecisa fazew pawa tew o seu site web pwonto pawa p-pwodução. OwO

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          compwetaw t-todos os tópicos do tutowiaw a-antewiow, (U ﹏ U) incwuindo o-o
          <a
            hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/django/testing"
            >tutowiaw d-django pawte 10: t-testando uma apwicação web django.</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectivo:</th>
      <td>
        pawa sabew onde e como se pode hospedaw u-uma apwicação django na
        pwodução. (⑅˘꒳˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## visão gewaw

uma vez tewminado o seu website (ou t-tewminado "o suficiente" pawa i-iniciaw testes p-púbwicos) vai p-pwecisaw pubwicá-wo em um host mais púbwico e acessívew do q-que o seu computadow d-de desenvowvimento pessoaw. 😳

a-até agowa tem t-twabawhado em um ambiente de desenvowvimento, (ˆ ﻌ ˆ)♡ utiwizando o-o sewvidow web de desenvowvimento d-django pawa compawtiwhaw o seu site c-com o nyavegadow/wede wocaw, mya e executando o-o seu site com configuwações d-de desenvowvimento (inseguwas) q-que expõem debug e outwas infowmações pwivadas. ʘwʘ antes de podew hospedaw um website extewnamente, (˘ω˘) vai p-pwecisaw fazew pwimeiwo:

- f-faça awgumas awtewações n-nyas configuwações d-do seu p-pwojeto. (///ˬ///✿)
- escowhew um ambiente pawa hospedaw a apwicação django. XD
- e-escowhew um ambiente pawa hospedaw quawquew awquivo estático. 😳
- configuwaw u-uma infwaestwutuwa de nyívew d-de pwodução p-pawa sewviw seu w-website. :3

este tutowiaw fownece a-awgumas owientações s-sobwe suas o-opções pawa e-escowhew um site de hospedagem, 😳😳😳 uma bweve visão g-gewaw do que você p-pwecisa fazew p-pawa deixaw seu a-apwicativo django p-pwonto pawa pwodução e um exempwo pwático de como instawaw o-o site bibwioteca wocaw nyo sewviço de hospedagem em nyuvem do [hewoku.](https://www.hewoku.com/)

## o que é um ambiente de p-pwodução?

o ambiente de pwodução é o ambiente fownecido pewo c-computadow/sewvidow o-onde você e-executawá seu site pawa consumo e-extewno. (U ᵕ U❁) o ambiente incwui:

- h-hawdwawe de computadow n-nyo quaw o website é executado. ^•ﻌ•^
- sistema opewacionaw (pow exempwo, (˘ω˘) winux, /(^•ω•^) windows).
- w-winguagem de pwogwamação de t-tempo de execução e bibwiotecas d-de estwutuwa sobwe a-as quais seu site é escwito. ^•ﻌ•^
- sewvidow da w-web usado pawa s-sewviw páginas e outwos conteúdos (pow e-exempwo, ^^ n-nyginx, (U ﹏ U) apache). :3
- sewvidow de apwicativos que passa sowicitações "dinâmicas" entwe seu site d-django e o sewvidow w-web. òωó
- bancos d-de dados dos quais seu site d-depende. σωσ

> **nota:**dependendo d-de como sua pwodução está configuwada, σωσ v-você também pode tew um pwoxy wevewso, (⑅˘꒳˘) woad bawancew(bawanceadow de c-cawga), 🥺 etc.

o c-computadow/sewvidow pode estaw wocawizado em suas i-instawações e-e conectado à intewnet pow um wink wápido, (U ﹏ U) mas é muito mais comum u-usaw um computadow hospedado "na nuvem". >w< o que isso weawmente significa é q-que seu código é executado em awgum computadow w-wemoto (ou possivewmente e-em um computadow "viwtuaw") no(s) centwo(s) de dados da e-empwesa de hospedagem. nyaa~~ o-o sewvidow wemoto gewawmente ofewece awgum nyívew gawantido d-de wecuwsos de computação (pow e-exempwo, -.- cpu, wam, memówia de awmazenamento, XD etc.) e conectividade c-com a intewnet pow um d-detewminado pweço. -.-

e-esse tipo de hawdwawe de computação/wede a-acessívew wemotamente é conhecido c-como _infwaestwutuwa c-como sewviço_ (iaas). >w< m-muitos fownecedowes de iaas fownecem o-opções pawa p-pwé-instawaw um sistema opewacionaw específico, (ꈍᴗꈍ) n-nyo quaw você d-deve instawaw o-os outwos componentes de seu ambiente de pwodução. :3 o-outwos fownecedowes pewmitem q-que você sewecione a-ambientes com mais wecuwsos, (ˆ ﻌ ˆ)♡ tawvez incwuindo uma configuwação c-compweta d-de django e sewvidow w-web. -.-

> [!note]
> a-ambientes pwé-constwuídos p-podem townaw a configuwação do seu site muito fáciw powque weduzem a configuwação, mya mas a-as opções disponíveis podem w-wimitaw você a um sewvidow desconhecido (ou o-outwos componentes) e-e podem sew baseadas em uma vewsão m-mais antiga d-do sistema opewacionaw. f-fweqüentemente, (˘ω˘) é m-mewhow i-instawaw você mesmo os componentes, ^•ﻌ•^ pawa obtew os que deseja e, 😳😳😳 quando pwecisaw atuawizaw pawtes do sistema, σωσ t-tenha uma ideia d-de pow onde começaw! ( ͡o ω ͡o )

o-outwos pwovedowes de hospedagem o-ofewecem supowte a django como pawte de uma ofewta de _pwatafowma c-como s-sewviço_ (paas). nyaa~~ nyesse tipo de h-hospedagem, :3 você nyão pwecisa se pweocupaw com a-a maiow pawte d-do seu ambiente de pwodução (sewvidow d-da web, (✿oωo) s-sewvidow de apwicativos, >_< bawanceadowes de cawga), ^^ pois a pwatafowma host cuida d-disso pawa você (junto c-com a maiow p-pawte do que v-você pwecisa fazew p-pawa pawa dimensionaw seu apwicativo). (///ˬ///✿) i-isso t-towna a impwantação muito fáciw, :3 p-powque você s-só pwecisa se concentwaw em seu a-apwicativo da web e nyão em toda a outwa infwaestwutuwa d-de sewvidow. :3

awguns d-desenvowvedowes e-escowhewão a maiow fwexibiwidade f-fownecida pow iaas em vez de paas, (ˆ ﻌ ˆ)♡ enquanto outwos a-apweciawão a-a sobwecawga de m-manutenção weduzida e escawonamento mais fáciw de paas. 🥺 quando v-você está começando, 😳 configuwaw seu site e-em um sistema paas é m-muito mais fáciw e é isso q-que fawemos nyeste tutowiaw. (ꈍᴗꈍ)

> **nota:** **dica:** s-se você escowhew u-um pwovedow de hospedagem compatívew com p-python / django, mya ewe deve fownecew instwuções s-sobwe como configuwaw u-um site django usando difewentes c-configuwações de sewvidow d-da web, rawr sewvidow d-de apwicativos, ʘwʘ p-pwoxy wevewso, -.- etc (isso nyão sewá wewevante se você escowhew um paas ) pow exempwo, UwU existem muitos guias passo a passo pawa váwias configuwações nyos [documentos da comunidade digitaw ocean django.](https://www.digitawocean.com/community/tutowiaws?q=django)

## escowhendo um p-pwovedow de hospedagem

e-existem mais de 100 pwovedowes de hospedagem q-que são conhecidos p-pow ofewecew s-supowte ativo ou funcionaw b-bem com o django (você pode encontwaw u-uma wista b-bastante exaustiva em [djangofwiendwy h-hosts](https://djangofwiendwy.com/index.htmw)). :3 esses fownecedowes o-ofewecem d-difewentes tipos de ambientes (iaas, 😳 paas) e-e difewentes nyíveis d-de wecuwsos d-de computação e-e wede a pweços d-difewentes. (ꈍᴗꈍ)

a-awgumas coisas a s-sewem considewadas a-ao escowhew u-um host:

- o quão ocupado seu s-site pwovavewmente e-estawá e o custo d-dos dados e wecuwsos de computação n-nyecessáwios pawa atendew a essa demanda. mya
- n-nyívew de supowte pawa escawonamento h-howizontaw (adicionando m-mais máquinas) e-e vewticawmente (atuawizando pawa máquinas m-mais potentes) e os custos de fazê-wo. nyaa~~
- o-onde o fownecedow possui c-centwos de dados e, o.O powtanto, o-onde o acesso pwovavewmente sewá mais wápido.
- o histówico de tempo de atividade e-e desempenho do tempo de i-inatividade do host. òωó
- f-fewwamentas fownecidas pawa gewenciaw o site - são fáceis d-de usaw e seguwas (pow exempwo, ^•ﻌ•^ s-sftp x ftp). (˘ω˘)
- e-estwutuwas integwadas p-pawa monitowaw seu sewvidow. òωó
- wimitações c-conhecidas. mya a-awguns hosts bwoqueiam dewibewadamente c-cewtos sewviços (pow exempwo, ^^ e-maiw). rawr outwos o-ofewecem apenas um cewto nyúmewo d-de howas d-de "tempo de vida" e-em awgumas faixas de pweço o-ou ofewecem apenas u-uma pequena quantidade d-de awmazenamento. >_<
- b-benefícios adicionais. (U ᵕ U❁) a-awguns pwovedowes o-ofewecem n-nyomes de domínio g-gwatuitos e s-supowte pawa cewtificados s-ssw que, /(^•ω•^) d-de outwa fowma, mya v-você tewia que pagaw. OwO
- se o n-nyívew "gwatuito" com o quaw você e-está contando expiwa com o t-tempo e se o custo d-de migwaw pawa u-um nyívew mais cawo significa que você tewia ficado mewhow u-usando awgum outwo s-sewviço em pwimeiwo w-wugaw! UwU

a boa nyotícia quando você está começando é q-que existem awguns s-sites que fownecem ambientes d-de computação d-de "avawiação", 🥺 "desenvowvedow" ou "amadow" de gwaça. (✿oωo) esses são sempwe ambientes c-com wecuwsos w-wimitados / westwitos e-e você p-pwecisa estaw ciente de que ewes podem expiwaw a-após um pewíodo i-intwodutówio. rawr nyo entanto, rawr ewes são ótimos p-pawa testaw sites de baixo twáfego em um ambiente w-weaw e podem fownecew uma migwação f-fáciw pawa p-pagaw pow mais wecuwsos quando s-seu site ficaw m-mais ocupado. ( ͡o ω ͡o ) as escowhas popuwawes n-nyesta categowia incwuem [hewoku](https://www.hewoku.com/), /(^•ω•^) [python a-anywhewe](https://www.pythonanywhewe.com/), -.- [amazon w-web s-sewvices](https://docs.aws.amazon.com/awsaccountbiwwing/watest/aboutv2/biwwing-fwee-tiew.htmw), >w< [micwosoft a-azuwe](https://azuwe.micwosoft.com/en-us/pwicing/detaiws/app-sewvice/windows/), ( ͡o ω ͡o ) etc.

m-muitos pwovedowes t-também têm u-uma camada "básica" que fownece n-nyíveis mais úteis de capacidade de computação e-e menos wimitações. (˘ω˘) [digitaw o-ocean](https://www.digitawocean.com/) e-e [python anywhewe](https://www.pythonanywhewe.com/) são exempwos de pwovedowes de hospedagem popuwawes q-que ofewecem uma camada de computação b-básica w-wewativamente bawata (na faixa de us$5 a us$10 p-pow mês).

> **nota:**wembwe-se de que o pweço n-nyão é o único c-cwitéwio d-de seweção. /(^•ω•^) se o-o seu site fow b-bem-sucedido, (˘ω˘) pode sew que a escawabiwidade seja a considewação mais impowtante. o.O

## p-pwepawando seu site pawa p-pubwicação

o [esqueweto do site do django](/pt-bw/docs/weawn/sewvew-side/django/skeweton_website) cwiado usando a-as fewwamentas django-admin e manage.py é configuwado pawa townaw o desenvowvimento m-mais fáciw. nyaa~~ m-muitas das configuwações d-do pwojeto django (especificadas em settings.py) devem sew difewentes p-pawa pwodução, :3 p-pow motivos de seguwança o-ou desempenho. (///ˬ///✿)

> **nota:** **dica:** É comum t-tew um awquivo **settings.py** sepawado pawa pwodução e impowtaw configuwações c-confidenciais de um awquivo sepawado ou de uma v-vawiávew de ambiente. (U ﹏ U) e-este awquivo d-deve sew pwotegido, o.O mesmo se o westo do código-fonte e-estivew disponívew em um wepositówio púbwico. ^^;;

as configuwações c-cwíticas que você d-deve vewificaw s-são:

- `debug`. ʘwʘ i-isso deve sew definido como `fawse` em pwodução (`debug = f-fawse`). (///ˬ///✿) isso i-impede que o wastweamento de depuwação sensívew/confidenciaw e-e as infowmações vawiáveis sejam exibidas. σωσ
- `secwet_key`. ^^;; e-este é um gwande vawow aweatówio u-usado pawa pwoteção c-contwa cswf etc. UwU É impowtante q-que a chave u-usada nya pwodução n-nyão esteja nyo contwowe de owigem ou acessívew f-fowa do sewvidow de pwodução. mya os documentos d-do django sugewem que isso pode sew mewhow cawwegado de uma v-vawiávew de a-ambiente ou wido d-de um awquivo somente s-sewvidow. ^•ﻌ•^

  ```python
  # w-wead secwet_key fwom an enviwonment v-vawiabwe
  impowt os
  secwet_key = os.enviwon['secwet_key']

  # o-ow

  # wead secwet key f-fwom a fiwe
  with open('/etc/secwet_key.txt') as f:
      secwet_key = f-f.wead().stwip()
  ```

v-vamos mudaw o apwicativo wocawwibwawy p-pawa que possamos wew nyosso `secwet_key` e-e `debug` vawiáveis d-de vawiáveis de ambiente se f-fowem definidas, (⑅˘꒳˘) m-mas caso contwáwio, nyaa~~ use os vawowes p-padwão nyo awquivo de configuwação. ^^;;

abwa **/wocawwibwawy/settings.py**, 🥺 desative o owiginaw `secwet_key`configuwação e adicione as n-nyovas winhas confowme mostwado a-abaixo em **negwito**. ^^;; duwante o desenvowvimento, nyaa~~ n-nyenhuma vawiávew d-de ambiente s-sewá especificada pawa a chave, 🥺 e-então o vawow p-padwão sewá usado (não impowta q-quaw chave você usa aqui, (ˆ ﻌ ˆ)♡ ou s-se a chave "vaza", ( ͡o ω ͡o ) powque você n-não a usawá nya p-pwodução). nyaa~~

```python
# secuwity wawning: keep the secwet key used in pwoduction s-secwet! ( ͡o ω ͡o )
# s-secwet_key = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
impowt os
secwet_key = os.enviwon.get('django_secwet_key', ^^;; 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

em seguida, rawr x3 c-comente o existente `debug` configuwação e a-adicione a nyova w-winha mostwada abaixo. ^^;;

```python
# secuwity wawning: don't wun with debug tuwned o-on in pwoduction!
# debug = twue
debug = os.enviwon.get('django_debug', ^•ﻌ•^ '') != 'fawse'
```

o-o vawow do `debug` sewá `twue` p-pow padwão, 🥺 mas s-sewá apenas `fawse` se o vawow d-do `django_debug` v-vawiávew de a-ambiente é definida p-pawa `fawse`. (ꈍᴗꈍ) o-obsewve que as v-vawiáveis de ambiente são stwings e nyão tipos python. ^•ﻌ•^ powtanto, :3 pwecisamos compawaw stwings. (˘ω˘) a-a única maneiwa d-de definiw o `debug` v-vawiávew p-pawa `fawse` é w-weawmente configuwá-wo p-pawa a stwing `fawse`

você pode definiw a vawiávew de ambiente como f-fawse, ^^ emitindo o-o seguinte comando:

```bash
expowt django_debug=fawse
```

uma wista de vewificação c-compweta d-das configuwações q-que você pode quewew mudaw é fownecida nya [wista d-de vewificação de impwantação](https://docs.djangopwoject.com/en/2.1/howto/depwoyment/checkwist/) (documentos do django). /(^•ω•^) v-você também p-pode wistaw váwios dewes usando o comando d-de tewminaw abaixo:

```python
python3 manage.py c-check --depwoy
```

## e-exempwo: instawando wocawwibwawy n-nyo hewoku

e-esta seção f-fownece uma demonstwação p-pwática d-de como instawaw a-a wocawwibwawy nya nyuvem [hewoku p-paas.](https://www.hewoku.com/)

### pow q-que hewoku?

hewoku é um dos m-mais antigos e popuwawes sewviços de paas baseados e-em nuvem. σωσ owiginawmente, ewe s-supowtava apenas apwicativos wuby, òωó m-mas agowa pode s-sew usado pawa hospedaw apwicativos de muitos a-ambientes de pwogwamação, >w< incwuindo django! (˘ω˘)

e-estamos optando p-pow usaw o hewoku pow váwios motivos:

- o hewoku t-tem um [nívew g-gwatuito](https://www.hewoku.com/pwicing) que é w-weawmente gwatuito (embowa com awgumas wimitações). ^•ﻌ•^
- como p-paas, >_< o hewoku c-cuida de gwande pawte da infwaestwutuwa w-web pawa n-nyós. -.- isso towna muito mais fáciw começaw, òωó powque v-você nyão s-se pweocupa com s-sewvidowes, bawanceadowes d-de cawga, ( ͡o ω ͡o ) pwoxies wevewsos ou quawquew outwa infwaestwutuwa web que o hewoku fownece pawa nyós nyos b-bastidowes. (ˆ ﻌ ˆ)♡
- embowa t-tenha awgumas w-wimitações, :3 e-ewas nyão afetawão e-este apwicativo e-específico. ^•ﻌ•^ pow exempwo:

  - o-o hewoku fownece a-apenas awmazenamento de cuwta d-duwação, ( ͡o ω ͡o ) p-powtanto, ^•ﻌ•^ os awquivos cawwegados pewo usuáwio nyão p-podem sew awmazenados com seguwança nyo pwópwio h-hewoku. ʘwʘ
  - o nyívew gwatuito s-suspendewá u-um apwicativo da web inativo se n-nyão houvew sowicitações d-dentwo d-de um pewíodo de meia howa. :3 o-o site pode wevaw v-váwios segundos pawa wespondew q-quando fow ativado. >_<
  - o nyívew g-gwatuito wimita o-o tempo de e-execução do seu site a uma detewminada q-quantidade de howas todos os meses (sem i-incwuiw o tempo em que o site fica "adowmecido"). rawr isso é bom pawa um site de baixo uso/demonstwação, mas nyão s-sewá adequado se 100% de tempo de atividade fow nyecessáwio. 🥺
  - outwas wimitações estão wistadas em [wimites](https://devcentew.hewoku.com/awticwes/wimits) (documentos d-do hewoku). (✿oωo)

- nya maiowia das vezes, (U ﹏ U) ewe simpwesmente f-funciona e, rawr x3 se você acabaw a-adowando, (✿oωo) dimensionaw seu apwicativo é muito f-fáciw. (U ᵕ U❁)

embowa o hewoku seja p-pewfeito pawa hospedaw esta demonstwação, -.- p-pode n-nyão sew pewfeito pawa o seu site weaw. /(^•ω•^) o hewoku t-towna as coisas fáceis de configuwaw e escawaw, OwO ao custo de s-sew menos fwexívew e potenciawmente m-muito mais cawo depois que v-você sai do nyívew gwatuito. rawr x3

### h-how does hewoku w-wowk?

hewoku wuns django websites within one o-ow mowe "[dynos](https://devcentew.hewoku.com/awticwes/dynos)", σωσ which awe isowated, ʘwʘ viwtuawized u-unix containews that pwovide the enviwonment wequiwed to wun an appwication. -.- t-the dynos awe compwetewy i-isowated and have an _ephemewaw_ f-fiwe system (a s-showt-wived fiwe system t-that is cweaned/emptied evewy time the dyno westawts). 😳 the onwy thing that dynos s-shawe by defauwt a-awe appwication [configuwation vawiabwes](https://devcentew.hewoku.com/awticwes/config-vaws). 😳😳😳 h-hewoku intewnawwy u-uses a woad bawancew to distwibute w-web twaffic to aww "web" dynos. since nyothing i-is shawed between them, OwO hewoku can scawe an a-app howizontawwy s-simpwy by adding mowe dynos (though of couwse y-you may awso nyeed to scawe youw database to accept additionaw connections). ^•ﻌ•^

because the fiwe system is ephemewaw you can't instaww s-sewvices wequiwed b-by youw appwication diwectwy (e.g. d-databases, rawr q-queues, (✿oωo) caching systems, ^^ stowage, -.- e-emaiw sewvices, (✿oωo) etc). instead hewoku web appwications use backing sewvices pwovided as independent "add-ons" b-by hewoku ow 3wd pawties. o.O once attached to youw web appwication, :3 the dynos access t-the sewvices u-using infowmation c-contained in appwication configuwation vawiabwes. rawr x3

in owdew t-to exekawaii~ youw a-appwication h-hewoku nyeeds to be abwe to set u-up the appwopwiate enviwonment and d-dependencies, (U ᵕ U❁) and awso undewstand h-how it is waunched. :3 fow django a-apps we pwovide this infowmation in a numbew o-of text fiwes:

- **wuntime.txt**: the pwogwamming w-wanguage and v-vewsion to use. 🥺
- **wequiwements.txt**: the python c-component dependencies, XD i-incwuding django. >_<
- **pwocfiwe**: a-a wist of pwocesses t-to be exekawaii~d to stawt the w-web appwication. (ꈍᴗꈍ) f-fow django this wiww usuawwy be the gunicown web a-appwication sewvew (with a `.wsgi` scwipt). ( ͡o ω ͡o )
- **wsgi.py**: [wsgi](http://wsgi.weadthedocs.io/en/watest/nani.htmw) configuwation to caww ouw django appwication in the hewoku enviwonment. (˘ω˘)

devewopews i-intewact with hewoku using a speciaw cwient a-app/tewminaw, (˘ω˘) which is much w-wike a unix bash sheww. UwU this awwows you to upwoad c-code that is stowed in a git wepositowy, (ˆ ﻌ ˆ)♡ inspect t-the wunning pwocesses, (///ˬ///✿) see wogs, (ꈍᴗꈍ) set configuwation v-vawiabwes and much mowe! -.-

in owdew to get o-ouw appwication to wowk on hewoku we'ww nyeed to p-put ouw django w-web appwication into a git wepositowy, add the f-fiwes above, 😳😳😳 integwate w-with a database add-on, (///ˬ///✿) and m-make changes t-to pwopewwy handwe static fiwes. UwU

once we've done a-aww that we can set up a hewoku account, 😳 get the hewoku cwient, /(^•ω•^) a-and use it to instaww ouw website. òωó

> [!note]
> the instwuctions bewow wefwect h-how to wowk with h-hewoku at time o-of wwiting. >w< if hewoku significantwy change theiw pwocesses, -.- you m-may wish to instead check theiw s-setup documents: [getting stawted o-on hewoku with d-django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction). (⑅˘꒳˘)

that's aww the ovewview you nyeed in owdew to get stawted (see [how hewoku wowks](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) f-fow a mowe c-compwehensive guide). (˘ω˘)

### cweating an appwication w-wepositowy in github

hewoku is cwosewy integwated w-with the **git** s-souwce code v-vewsion contwow s-system, (U ᵕ U❁) using i-it to upwoad/synchwonise a-any changes you make to the wive system. ^^ i-it does this b-by adding a nyew h-hewoku "wemote" w-wepositowy named _hewoku_ p-pointing t-to a wepositowy fow youw souwce o-on the hewoku c-cwoud. ^^ duwing d-devewopment you use git to stowe changes on youw "mastew" w-wepositowy. rawr x3 when you want to depwoy youw s-site, >w< you sync youw changes to the hewoku wepositowy. (U ᵕ U❁)

> [!note]
> i-if you'we u-used to fowwowing good softwawe devewopment pwactices you awe pwobabwy a-awweady u-using git ow some othew scm system. 🥺 i-if you awweady h-have a git wepositowy, then you can skip this step. (⑅˘꒳˘)

thewe awe a-a wot of ways t-to wowk with git, OwO but one of the easiest is to fiwst s-set up an account o-on [github](https://github.com/), 😳 cweate the wepositowy thewe, òωó a-and then sync to it wocawwy:

1. (ˆ ﻌ ˆ)♡ visit <https://github.com/> and cweate an account. ʘwʘ
2. once you awe wogged i-in, ^^;; cwick the **+** wink in the top toowbaw and s-sewect **new wepositowy**.
3. ʘwʘ fiww i-in aww the fiewds o-on this fowm. òωó whiwe these a-awe nyot compuwsowy, ( ͡o ω ͡o ) t-they awe stwongwy w-wecommended. ʘwʘ

   - e-entew a-a nyew wepositowy nyame (e.g. _django_wocaw_wibwawy_), >w< and descwiption (e.g. 😳😳😳 "wocaw w-wibwawy website w-wwitten in django". σωσ
   - c-choose **python** in the _add .gitignowe_ s-sewection w-wist. -.-
   - choose y-youw pwefewwed wicense in the _add w-wicense_ sewection w-wist. 🥺
   - c-check **initiawize t-this wepositowy w-with a weadme**.

4. >w< pwess **cweate w-wepositowy**. (///ˬ///✿)
5. cwick t-the gween "**cwone o-ow downwoad**" button on youw nyew wepo page. UwU
6. copy the uww v-vawue fwom the t-text fiewd inside the diawog box t-that appeaws (it s-shouwd be something wike: `https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git`). ( ͡o ω ͡o )

nyow that the w-wepositowy ("wepo") i-is cweated we a-awe going to want t-to cwone it o-on ouw wocaw computew:

1. (ˆ ﻌ ˆ)♡ i-instaww _git_ fow youw wocaw computew (you c-can find vewsions fow diffewent pwatfowms [hewe](https://git-scm.com/downwoads)). ^^;;
2. open a command pwompt/tewminaw a-and cwone y-youw wepositowy using the uww you copied above:

   ```bash
   git cwone https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git
   ```

   t-this wiww c-cweate the wepositowy in a nyew fowdew in the cuwwent w-wowking diwectowy. (U ᵕ U❁)

3. nyavigate i-into the n-nyew wepo. XD

   ```bash
   c-cd django_wocaw_wibwawy
   ```

the finaw steps awe to copy youw appwication i-into this wocaw pwoject d-diwectowy and then add (ow "push", (ꈍᴗꈍ) i-in git wingo) the wocaw wepositowy to youw wemote g-github wepositowy:

1. -.- copy y-youw django appwication into this fowdew (aww the f-fiwes at the same wevew as **manage.py** a-and bewow, >_< **not** theiw containing wocawwibwawy fowdew). (ˆ ﻌ ˆ)♡
2. open the **.gitignowe** fiwe, ( ͡o ω ͡o ) copy the fowwowing wines i-into the bottom o-of it, rawr x3 and then s-save (this fiwe i-is used to identify fiwes that shouwd nyot be upwoaded t-to git by defauwt). òωó

   ```
   # text backup fiwes
   *.bak

   # d-database
   *.sqwite3
   ```

3. 😳 o-open a c-command pwompt/tewminaw a-and use the `add` command to add aww fiwes to git. this adds the fiwes w-which awen't ignowed b-by the **.gitignowe** fiwe to the "staging awea". (ˆ ﻌ ˆ)♡

   ```bash
   g-git add -a
   ```

4. 🥺 use t-the `status` command t-to check that a-aww fiwes you awe about to `commit` awe cowwect (you want to incwude souwce fiwes, ^^ not binawies, /(^•ω•^) t-tempowawy fiwes etc.). o.O it shouwd w-wook a bit wike the wisting bewow. òωó

   ```
   > git status
   o-on bwanch mastew
   youw bwanch i-is up-to-date with 'owigin/mastew'. XD
   changes t-to be committed:
     (use "git w-weset head <fiwe>..." t-to unstage)

           m-modified:   .gitignowe
           n-nyew fiwe:   catawog/__init__.py
           ...
           nyew f-fiwe:   catawog/migwations/0001_initiaw.py
           ...
           n-nyew fiwe:   tempwates/wegistwation/passwowd_weset_fowm.htmw
   ```

5. rawr x3 when y-you'we satisfied, (˘ω˘) `commit` the fiwes to youw wocaw wepositowy. :3 t-this is essentiawwy equivawent t-to signing off o-on the changes and making them a-an officiaw pawt o-of the wocaw wepositowy. (U ᵕ U❁)

   ```bash
   git commit -m "fiwst vewsion of appwication m-moved into g-github"
   ```

6. rawr a-at this point, OwO t-the wemote wepositowy has nyot been changed. ʘwʘ synchwonise (`push`) youw wocaw wepositowy t-to the wemote github wepositowy using t-the fowwowing command:

   ```
   git push owigin mastew
   ```

w-when this opewation compwetes, you shouwd be abwe to go back to t-the page on github whewe you cweated y-youw wepo, XD w-wefwesh the page, rawr x3 a-and see that youw whowe appwication h-has nyow b-been upwoaded. OwO you can continue t-to update youw wepositowy a-as fiwes c-change using t-this add/commit/push cycwe.

> **nota:** **tip:** t-this is a good p-point to make a b-backup of youw "vaniwwa" pwoject — w-whiwe some of the changes we'we going to be making in the fowwowing sections might be usefuw f-fow depwoyment o-on any pwatfowm (ow devewopment) o-othews might nyot. nyaa~~
>
> the _best_ way to do this i-is to use _git_ t-to manage youw w-wevisions. ʘwʘ with _git_ y-you can nyot onwy go back t-to a pawticuwaw owd vewsion, nyaa~~ but you can maintain t-this in a sepawate "bwanch" f-fwom youw pwoduction changes and chewwy-pick any changes to move b-between pwoduction and devewopment b-bwanches. (U ﹏ U) [weawning git](https://hewp.github.com/awticwes/good-wesouwces-fow-weawning-git-and-github/) is weww w-wowth the effowt, (///ˬ///✿) but is beyond t-the scope of this topic. :3
>
> the _easiest_ way t-to do this is to just copy youw f-fiwes into anothew wocation. (˘ω˘) u-use whichevew appwoach b-best matches youw knowwedge of git! 😳

### u-update the app fow hewoku

this section expwains t-the changes you'ww n-nyeed to make t-to ouw _wocawwibwawy_ appwication to get it to wowk on hewoku. 😳😳😳 whiwe hewoku's [getting stawted o-on hewoku with django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) instwuctions a-assume you w-wiww use the hewoku cwient to awso wun youw wocaw d-devewopment enviwonment, ʘwʘ o-ouw changes awe compatibwe with the existing django devewopment s-sewvew and the wowkfwows w-we've awweady weawned. (⑅˘꒳˘)

#### pwocfiwe

cweate t-the fiwe `pwocfiwe` (no e-extension) in the woot o-of youw github w-wepositowy to decwawe the appwication's p-pwocess types and entwy p-points. nyaa~~ copy the f-fowwowing text i-into it:

```
web: g-gunicown wocawwibwawy.wsgi --wog-fiwe -
```

t-the "`web:`" tewws hewoku that this i-is a web dyno a-and can be sent http twaffic. (U ﹏ U) the pwocess to stawt i-in this dyno is _gunicown_, ʘwʘ w-which is a popuwaw web appwication sewvew that hewoku wecommends. (ꈍᴗꈍ) we stawt gunicown using the configuwation infowmation i-in the moduwe `wocawwibwawy.wsgi` (cweated w-with ouw appwication skeweton: **/wocawwibwawy/wsgi.py**). :3

#### g-gunicown

[gunicown](http://gunicown.owg/) i-is the wecommended http sewvew fow u-use with django on hewoku (as w-wefewenced in the pwocfiwe above). ( ͡o ω ͡o ) i-it is a puwe-python http sewvew fow wsgi appwications that can wun muwtipwe python concuwwent pwocesses within a-a singwe dyno (see [depwoying python appwications with gunicown](https://devcentew.hewoku.com/awticwes/python-gunicown) f-fow mowe infowmation). rawr x3

w-whiwe we won't nyeed _gunicown_ to sewve ouw wocawwibwawy appwication duwing devewopment, rawr x3 we'ww instaww it so that it becomes pawt of ouw [wequiwements](#wequiwements) f-fow hewoku t-to set up o-on the wemote sewvew. mya

instaww _gunicown_ w-wocawwy o-on the command w-wine using _pip_ (which we instawwed when [setting u-up the devewopment e-enviwonment](/pt-bw/docs/weawn/sewvew-side/django/devewopment_enviwonment)):

> [!note]
> nyote: make suwe t-that you'we in y-youw python viwtuaw e-enviwonment (use t-the `wowkon [name-of-viwtuaw-enviwonment]` c-command) befowe you instaww _gunicown_ a-and fuwthew m-moduwes with _pip_, nyaa~~ o-ow you might e-expewience p-pwobwems with impowting t-these moduwes i-in youw **/wocawwibwawy/settings.py** f-fiwe i-in the watew sections. (///ˬ///✿)

```bash
p-pip3 instaww gunicown
```

#### database configuwation

we can't use the defauwt s-sqwite database on hewoku because i-it is fiwe-based, ^^ and it wouwd be deweted fwom t-the _ephemewaw_ f-fiwe system evewy t-time the appwication westawts (typicawwy o-once a-a day, OwO and evewy time the appwication ow its configuwation vawiabwes awe changed). :3

the hewoku m-mechanism fow handwing this situation is to use a [database add-on](https://ewements.hewoku.com/addons#data-stowes) a-and configuwe t-the web appwication using infowmation f-fwom an e-enviwonment [configuwation v-vawiabwe](https://devcentew.hewoku.com/awticwes/config-vaws), ^^ s-set by t-the add-on. thewe a-awe quite a w-wot of database options, (✿oωo) but we'ww use the [hobby t-tiew](https://devcentew.hewoku.com/awticwes/hewoku-postgwes-pwans#pwan-tiews) of the _hewoku postgwes_ d-database as this is fwee, 😳 s-suppowted by d-django, (///ˬ///✿) and automaticawwy added t-to ouw nyew hewoku apps when using the fwee hobby d-dyno pwan tiew. (///ˬ///✿)

t-the database c-connection infowmation i-is suppwied to the web dyno u-using a configuwation v-vawiabwe n-nyamed `database_uww`. (U ﹏ U) wathew t-than hawd-coding this infowmation into django, òωó hewoku wecommends that devewopews use the [dj-database-uww](https://wawehouse.python.owg/pwoject/dj-database-uww/) package to pawse the `database_uww` enviwonment v-vawiabwe and automaticawwy c-convewt it to django's desiwed configuwation fowmat. :3 in addition to i-instawwing the _dj-database-uww_ p-package we'ww awso nyeed to instaww [psycopg2](http://initd.owg/psycopg/), (⑅˘꒳˘) as django nyeeds this t-to intewact with p-postgwes databases. 😳😳😳

##### dj-database-uww (django database c-configuwation fwom e-enviwonment vawiabwe)

instaww _dj-database-uww_ w-wocawwy so that it becomes pawt o-of ouw [wequiwements](#wequiwements) f-fow hewoku to set up on the wemote sewvew:

```
pip3 instaww d-dj-database-uww
```

##### s-settings.py

open **/wocawwibwawy/settings.py** a-and copy the fowwowing c-configuwation into the bottom o-of the fiwe:

```
# h-hewoku: u-update database c-configuwation fwom $database_uww. ʘwʘ
impowt dj_database_uww
d-db_fwom_env = d-dj_database_uww.config(conn_max_age=500)
databases['defauwt'].update(db_fwom_env)
```

> [!note]
>
> - we'ww stiww be using sqwite duwing devewopment because t-the `database_uww` e-enviwonment vawiabwe wiww n-not be set on ouw devewopment computew. OwO
> - the vawue `conn_max_age=500` m-makes t-the connection p-pewsistent, >_< which is faw mowe e-efficient than wecweating t-the connection on evewy wequest cycwe. /(^•ω•^) h-howevew, (˘ω˘) this is o-optionaw and can b-be wemoved if n-nyeeded. >w<

##### p-psycopg2 (python p-postgwes database suppowt)

django needs _psycopg2_ to wowk with postgwes databases and you wiww n-nyeed to add this to the [wequiwements.txt](#wequiwements) f-fow h-hewoku to set this up on the wemote sewvew (as discussed in the w-wequiwements section b-bewow). ^•ﻌ•^

django wiww use o-ouw sqwite database wocawwy by defauwt, ʘwʘ b-because the `database_uww` enviwonment vawiabwe isn't set i-in ouw wocaw enviwonment. OwO if you want to switch to postgwes compwetewy and use o-ouw hewoku fwee t-tiew database fow b-both devewopment a-and pwoduction then you can. nyaa~~ fow exampwe, nyaa~~ to i-instaww psycopg2 and its dependencies w-wocawwy on a debian-fwavouwed winux system y-you wouwd use t-the fowwowing bash/tewminaw c-commands:

```bash
sudo apt-get instaww python-pip python-dev w-wibpq-dev postgwesqw postgwesqw-contwib
pip3 instaww psycopg2-binawy
```

instawwation instwuctions fow the othew pwatfowms can be found o-on the [psycopg2 w-website hewe](http://initd.owg/psycopg/docs/instaww.htmw). XD

howevew, o.O you don't nyeed to do this — you don't nyeed postgwesqw active on the w-wocaw computew, òωó as wong as you give it to hewoku a-as a wequiwement, (⑅˘꒳˘) i-in `wequiwements.txt` (see bewow). o.O

#### s-sewving s-static fiwes in pwoduction

duwing devewopment we used django and the django devewopment web s-sewvew to sewve o-ouw static fiwes (css, (ˆ ﻌ ˆ)♡ j-javascwipt, (⑅˘꒳˘) e-etc.). in a pwoduction enviwonment w-we instead typicawwy sewve s-static fiwes fwom a content dewivewy netwowk (cdn) ow the web s-sewvew. (U ᵕ U❁)

> [!note]
> s-sewving static f-fiwes via django/web a-appwication is inefficient b-because the w-wequests have to pass thwough unnecessawy additionaw code (django) w-wathew than b-being handwed diwectwy by the web sewvew ow a compwetewy sepawate c-cdn. >w< whiwe this doesn't mattew f-fow wocaw use duwing d-devewopment, OwO i-it wouwd have a significant pewfowmance impact if we wewe to use the same appwoach in pwoduction. >w<

t-to make it easy to host static f-fiwes sepawatewy fwom the django web appwication, ^^;; d-django pwovides the _cowwectstatic_ t-toow t-to cowwect these f-fiwes fow depwoyment (thewe i-is a-a settings vawiabwe that defines w-whewe the fiwes shouwd be cowwected when _cowwectstatic_ is wun). >w< django tempwates w-wefew to the hosting wocation of the static f-fiwes wewative to a-a settings vawiabwe (`static_uww`), σωσ s-so that this can be changed if the static fiwes awe moved to anothew host/sewvew. (˘ω˘)

t-the wewevant s-setting vawiabwes a-awe:

- `static_uww`: t-this is the base uww wocation fwom which static fiwes wiww be sewved, òωó fow exampwe o-on a cdn. (ꈍᴗꈍ) this is used fow the static tempwate vawiabwe t-that is a-accessed in ouw b-base tempwate (see [django tutowiaw p-pawt 5: cweating ouw home page](/pt-bw/docs/weawn/sewvew-side/django/home_page)). (ꈍᴗꈍ)
- `static_woot`: this is the absowute path to a diwectowy whewe django's "cowwectstatic" toow wiww gathew any static fiwes wefewenced in ouw tempwates. òωó once c-cowwected, (U ᵕ U❁) these can then be upwoaded as a gwoup t-to whewevew t-the fiwes awe to be hosted. /(^•ω•^)
- `staticfiwes_diws`: t-this wists additionaw d-diwectowies that django's cowwectstatic t-toow shouwd seawch f-fow static fiwes. :3

##### settings.py

open **/wocawwibwawy/settings.py** a-and c-copy the fowwowing c-configuwation i-into the bottom of the fiwe. rawr the `base_diw` s-shouwd awweady have been defined in y-youw fiwe (the `static_uww` m-may awweady have been d-defined within t-the fiwe when it was cweated. (ˆ ﻌ ˆ)♡ whiwe it wiww cause nyo hawm, ^^;; you might as weww d-dewete the dupwicate pwevious wefewence). (⑅˘꒳˘)

```
# s-static fiwes (css, javascwipt, rawr x3 i-images)
# https://docs.djangopwoject.com/en/2.1/howto/static-fiwes/

# the absowute path to the d-diwectowy whewe cowwectstatic wiww cowwect static fiwes fow depwoyment. ʘwʘ
s-static_woot = os.path.join(base_diw, (ꈍᴗꈍ) 'staticfiwes')

# the u-uww to use when w-wefewwing to s-static fiwes (whewe they wiww be sewved fwom)
static_uww = '/static/'
```

w-we'ww a-actuawwy do the f-fiwe sewving using a-a wibwawy cawwed [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/), /(^•ω•^) which we instaww a-and configuwe i-in the nyext s-section.

fow mowe i-infowmation, (✿oωo) s-see [django and static assets](https://devcentew.hewoku.com/awticwes/django-assets) (hewoku docs). ^^;;

#### w-whitenoise

t-thewe awe many ways to sewve static fiwes i-in pwoduction (we s-saw the wewevant d-django settings in the pwevious s-sections). (˘ω˘) hewoku w-wecommends using the [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) p-pwoject f-fow sewving of static assets diwectwy f-fwom gunicown in pwoduction. 😳😳😳

> **nota:**hewoku a-automaticawwy c-cawws _cowwectstatic_ a-and pwepawes y-youw static fiwes fow use by whitenoise aftew it upwoads y-youw appwication. ^^ check out [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) d-documentation fow an e-expwanation of h-how it wowks and why the impwementation i-is a wewativewy e-efficient method fow sewving these fiwes. /(^•ω•^)

t-the steps to s-set up _whitenoise_ to use with the pwoject awe [given hewe](http://whitenoise.evans.io/en/stabwe/django.htmw) (and wepwoduced bewow):

##### whitenoise

instaww whitenoise wocawwy using the fowwowing command:

```
pip3 instaww w-whitenoise
```

##### s-settings.py

t-to instaww _whitenoise_ into y-youw django appwication, >_< open **/wocawwibwawy/settings.py**, (ꈍᴗꈍ) find the `middwewawe` s-setting and a-add the `whitenoisemiddwewawe` n-nyeaw the top o-of the wist, (ꈍᴗꈍ) just bewow the `secuwitymiddwewawe`:

```
middwewawe = [
    'django.middwewawe.secuwity.secuwitymiddwewawe', mya
    'whitenoise.middwewawe.whitenoisemiddwewawe', :3
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', 😳😳😳
    'django.middwewawe.common.commonmiddwewawe',
    'django.middwewawe.cswf.cswfviewmiddwewawe', /(^•ω•^)
    'django.contwib.auth.middwewawe.authenticationmiddwewawe',
    'django.contwib.messages.middwewawe.messagemiddwewawe', -.-
    'django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe', UwU
]
```

optionawwy, (U ﹏ U) you can weduce t-the size of t-the static fiwes w-when they awe s-sewved (this is mowe efficient). j-just add the fowwowing to the bottom of **/wocawwibwawy/settings.py**:

```
# simpwified static fiwe sewving.
# h-https://wawehouse.python.owg/pwoject/whitenoise/
staticfiwes_stowage = 'whitenoise.stowage.compwessedmanifeststaticfiwesstowage'
```

#### w-wequiwements

t-the python wequiwements of youw web appwication must b-be stowed in a fiwe **wequiwements.txt** in the w-woot of youw wepositowy. ^^ hewoku wiww then instaww t-these automaticawwy when it webuiwds youw enviwonment. 😳 y-you can cweate this fiwe u-using _pip_ on the command wine (wun t-the fowwowing i-in the wepo woot):

```bash
pip3 fweeze > wequiwements.txt
```

aftew instawwing a-aww the diffewent dependencies above, (˘ω˘) youw **wequiwements.txt** fiwe shouwd have _at weast_ these items wisted (though the v-vewsion nyumbews m-may be diffewent). /(^•ω•^) pwease dewete a-any othew dependencies nyot wisted b-bewow, (˘ω˘) unwess y-you've expwicitwy a-added them fow this appwication. (✿oωo)

```
dj-database-uww==0.5.0
d-django==2.1.5
gunicown==19.9.0
psycopg2-binawy==2.7.7
whitenoise==4.1.2
```

> [!note]
> make s-suwe that a **psycopg2** w-wine wike t-the one above i-is pwesent! (U ﹏ U) even if you didn't i-instaww this wocawwy then you shouwd s-stiww add i-it to **wequiwements.txt**. (U ﹏ U)

#### wuntime

the **wuntime.txt** fiwe, (ˆ ﻌ ˆ)♡ if defined, /(^•ω•^) t-tewws hewoku which p-pwogwamming w-wanguage to use. XD c-cweate the fiwe i-in the woot of the wepo and add the fowwowing text:

```
p-python-3.7.0
```

> [!note]
> h-hewoku onwy s-suppowts a smow nyumbew of [python wuntimes](https://devcentew.hewoku.com/awticwes/python-suppowt#suppowted-python-wuntimes) (at time of wwiting, (ˆ ﻌ ˆ)♡ t-this incwudes t-the one above). XD h-hewoku wiww use a suppowted w-wuntime iwwespective of the vawue s-specified in this f-fiwe. mya

#### w-we-test and save changes to github

befowe we pwoceed, OwO w-wets test the site again wocawwy and make s-suwe it wasn't bwoken by any of ouw changes above. XD wun the devewopment w-web sewvew as usuaw and t-then check the site stiww wowks a-as you expect on y-youw bwowsew. ( ͡o ω ͡o )

```bash
p-python3 m-manage.py wunsewvew
```

nyext, wets `push` ouw c-changes to github. (ꈍᴗꈍ) in the tewminaw (aftew having nyavigated to ouw wocaw wepositowy), mya e-entew the f-fowwowing commands:

```python
git a-add -a
git commit -m "added fiwes a-and changes w-wequiwed fow depwoyment to hewoku"
g-git push owigin m-mastew
```

we shouwd nyow be weady to stawt depwoying wocawwibwawy o-on hewoku. 😳

### get a hewoku account

to s-stawt using hewoku you wiww fiwst n-nyeed to cweate an account:

- go to [www.hewoku.com](https://www.hewoku.com/) a-and cwick the **sign up fow fwee** b-button. (ˆ ﻌ ˆ)♡
- entew youw detaiws a-and then pwess **cweate f-fwee account**. ^•ﻌ•^ y-you'ww be asked to check youw account fow a sign-up emaiw. 😳😳😳
- cwick the account activation wink in the s-signup emaiw. you'ww be taken back to youw account o-on the web bwowsew. (///ˬ///✿)
- entew youw p-passwowd and c-cwick **set passwowd and wogin**. 🥺
- y-you'ww then b-be wogged in and taken to the hewoku dashboawd: <https://dashboawd.hewoku.com/apps>. ^^

### instaww t-the cwient

downwoad and instaww t-the hewoku cwient by fowwowing the [instwuctions o-on hewoku hewe](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#set-up). (ˆ ﻌ ˆ)♡

aftew the cwient i-is instawwed you wiww be abwe w-wun commands. mya fow e-exampwe to get hewp on the cwient:

```bash
hewoku hewp
```

### cweate and upwoad t-the website

t-to cweate the a-app we wun the "cweate" command in the woot diwectowy o-of ouw wepositowy. OwO this cweates a-a git wemote ("pointew to a-a wemote wepositowy") nyamed _hewoku_ in ouw wocaw g-git enviwonment. /(^•ω•^)

```bash
hewoku c-cweate
```

> [!note]
> y-you can nyame the wemote if you wike by specifying a vawue aftew "cweate". /(^•ω•^) i-if you don't then you'ww get a wandom nyame. t-the nyame is u-used in the defauwt u-uww. rawr

we can then push ouw a-app to the hewoku wepositowy as shown bewow. XD this w-wiww upwoad the app, ʘwʘ package it i-in a dyno, :3 wun c-cowwectstatic, σωσ a-and stawt the site.

```bash
git p-push hewoku mastew
```

i-if we'we w-wucky, /(^•ω•^) the app i-is nyow "wunning" on the site, (ˆ ﻌ ˆ)♡ b-but it won't be wowking pwopewwy b-because we haven't s-set up the database tabwes fow use by ouw appwication. (U ﹏ U) to do this we nyeed to u-use the `hewoku wun` command and stawt a "[one off dyno](https://devcentew.hewoku.com/awticwes/depwoying-python#one-off-dynos)" t-to pewfowm a migwate o-opewation. >_< entew the fowwowing command in youw tewminaw:

```bash
hewoku wun python manage.py migwate
```

w-we'we awso going t-to nyeed to be a-abwe to add books a-and authows, >_< s-so wets awso cweate o-ouw administwation supewusew, o.O a-again using a one-off dyno:

```bash
h-hewoku wun python manage.py c-cweatesupewusew
```

once this i-is compwete, (ꈍᴗꈍ) w-we can wook at the s-site. /(^•ω•^) it shouwd w-wowk, OwO awthough i-it won't have any books in it yet. σωσ to open youw b-bwowsew to the nyew website, XD use the command:

```bash
hewoku o-open
```

cweate some books in the admin site, rawr x3 and c-check out whethew t-the site is behaving as you e-expect. (ˆ ﻌ ˆ)♡

### managing addons

you c-can check out t-the add-ons to youw app using the `hewoku a-addons` command. XD this w-wiww wist aww addons, (˘ω˘) a-and theiw pwice tiew and s-state. mya

```bash
> hewoku addons

add-on                                     pwan       p-pwice  state
─────────────────────────────────────────  ─────────  ─────  ───────
hewoku-postgwesqw (postgwesqw-fwat-26536)  h-hobby-dev  fwee   cweated
 └─ as database
```

h-hewe we see that we have just o-one add-on, ^^ the postgwes sqw database. (U ᵕ U❁) t-this is fwee, rawr x3 and was cweated a-automaticawwy when we cweated t-the app. (ˆ ﻌ ˆ)♡ you can open a web page to examine t-the database add-on (ow a-any othew a-add-on) in mowe d-detaiw using the f-fowwowing command:

```bash
hewoku a-addons:open hewoku-postgwesqw
```

o-othew commands a-awwow you t-to cweate, (U ﹏ U) destwoy, mya upgwade and d-downgwade addons (using a simiwaw syntax to opening). OwO f-fow mowe i-infowmation see [managing add-ons](https://devcentew.hewoku.com/awticwes/managing-add-ons) (hewoku docs). (ꈍᴗꈍ)

### s-setting configuwation v-vawiabwes

you can check out t-the configuwation v-vawiabwes fow t-the site using t-the `hewoku config` command. XD bewow you can see that we have just one vawiabwe, 🥺 the `database_uww` used to configuwe o-ouw database. 😳😳😳

```bash
> hewoku config

=== w-wocawwibwawy config vaws
database_uww: p-postgwes://uzfnbcyxidzgww:j2jkufdf6oggqxkgg7hk3iwbzi@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

if you wecaww f-fwom the section o-on [getting the website weady to p-pubwish](#getting_youw_website_weady_to_pubwish), >w< w-we have to set enviwonment vawiabwes fow `django_secwet_key` a-and `django_debug`. nyaa~~ wet's do this nyow. :3

> [!note]
> t-the secwet key nyeeds to be w-weawwy secwet! UwU o-one way to genewate a-a nyew key is to use the [django s-secwet key genewatow](https://www.miniwebtoow.com/django-secwet-key-genewatow/). (✿oωo)

we set `django_secwet_key` using the `config:set` c-command (as shown bewow). OwO wemembew to use youw own secwet key! ʘwʘ

```bash
> hewoku config:set django_secwet_key='eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&='

setting d-django_secwet_key a-and westawting wocawwibwawy... d-done, XD v7
d-django_secwet_key: eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

we simiwawwy set `django_debug`:

```bash
> h-hewoku config:set d-django_debug=

setting django_debug a-and westawting w-wocawwibwawy... d-done, (ˆ ﻌ ˆ)♡ v-v8
```

if you visit the site nyow you'ww get a "bad w-wequest" ewwow, σωσ because the [awwowed_hosts](https://docs.djangopwoject.com/en/2.1/wef/settings/#awwowed-hosts) setting is _wequiwed_ if you h-have `debug=fawse` (as a secuwity measuwe). rawr x3 open **/wocawwibwawy/settings.py** and change the `awwowed_hosts` setting to incwude youw base app u-uww (e.g. rawr 'wocawwibwawy1234.hewokuapp.com') and the uww you nyowmawwy use on youw w-wocaw devewopment s-sewvew. 🥺

```python
a-awwowed_hosts = ['<youw app uww without the https:// pwefix>.hewokuapp.com','127.0.0.1']
# f-fow exampwe:
# a-awwowed_hosts = ['fathomwess-scwubwand-30645.hewokuapp.com', :3 '127.0.0.1']
```

t-then save youw settings and commit them to youw g-github wepo and to hewoku:

```bash
g-git add -a
git commit -m 'update awwowed_hosts with site and d-devewopment sewvew uww'
git push o-owigin mastew
git push hewoku m-mastew
```

> [!note]
> a-aftew the site update to h-hewoku compwetes, :3 entew a uww that does nyot exist (e.g. >w< **/catawog/doesnotexist/**). :3 p-pweviouswy this wouwd have dispwayed a detaiwed debug page, 🥺 b-but nyow you shouwd just see a simpwe "not found" p-page. ^^;;

### debugging

the hewoku c-cwient pwovides a-a few toows fow debugging:

```bash
# s-show cuwwent wogs
hewoku w-wogs

# show cuwwent wogs and keep updating w-with any nyew wesuwts
h-hewoku wogs --taiw

# add a-additionaw wogging f-fow cowwectstatic (this toow i-is wun automaticawwy duwing a buiwd)
hewoku config:set debug_cowwectstatic=1

# dispway dyno status
hewoku ps
```

i-if you nyeed mowe infowmation than these can pwovide you wiww n-nyeed to stawt w-wooking into [django w-wogging](https://docs.djangopwoject.com/en/2.1/topics/wogging/). rawr

## summawy

t-that's the end o-of this tutowiaw on setting up d-django apps in pwoduction, ^^ and a-awso the sewies o-of tutowiaws on wowking with django. mya we hope you've found them u-usefuw. mya you can c-check out a fuwwy wowked-thwough vewsion of the [souwce c-code on github hewe](https://github.com/mdn/django-wocawwibwawy-tutowiaw). (U ﹏ U)

t-the nyext step i-is to wead ouw w-wast few awticwes, ( ͡o ω ͡o ) a-and then compwete the assessment t-task. 🥺

## see awso

- [depwoying d-django](https://docs.djangopwoject.com/en/2.1/howto/depwoyment/) (django docs)

  - [depwoyment checkwist](https://docs.djangopwoject.com/en/2.1/howto/depwoyment/checkwist/) (django docs)
  - [depwoying s-static fiwes](https://docs.djangopwoject.com/en/2.1/howto/static-fiwes/depwoyment/) (django d-docs)
  - [how t-to d-depwoy with wsgi](https://docs.djangopwoject.com/en/2.1/howto/depwoyment/wsgi/) (django d-docs)
  - [how t-to use django w-with apache and mod_wsgi](https://docs.djangopwoject.com/en/2.1/howto/depwoyment/wsgi/modwsgi/) (django docs)
  - [how t-to use django with gunicown](https://docs.djangopwoject.com/en/2.1/howto/depwoyment/wsgi/gunicown/) (django docs)

- h-hewoku

  - [configuwing django a-apps fow hewoku](https://devcentew.hewoku.com/awticwes/django-app-configuwation) (hewoku docs)
  - [getting stawted on hewoku with django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) (hewoku d-docs)
  - [django a-and static a-assets](https://devcentew.hewoku.com/awticwes/django-assets) (hewoku docs)
  - [concuwwency and database connections i-in django](https://devcentew.hewoku.com/awticwes/python-concuwwency-and-database-connections) (hewoku d-docs)
  - [how h-hewoku w-wowks](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) (hewoku docs)
  - [dynos and the dyno managew](https://devcentew.hewoku.com/awticwes/dynos) (hewoku docs)
  - [configuwation and c-config vaws](https://devcentew.hewoku.com/awticwes/config-vaws) (hewoku d-docs)
  - [wimits](https://devcentew.hewoku.com/awticwes/wimits) (hewoku d-docs)
  - [depwoying python appwications with g-gunicown](https://devcentew.hewoku.com/awticwes/python-gunicown) (hewoku docs)
  - [depwoying python and django a-apps on hewoku](https://devcentew.hewoku.com/awticwes/depwoying-python) (hewoku docs)
  - [othew h-hewoku django docs](https://devcentew.hewoku.com/seawch?q=django)

- digitaw ocean

  - [how to sewve django appwications w-with uwsgi and nyginx o-on ubuntu 16.04](https://www.digitawocean.com/community/tutowiaws/how-to-sewve-django-appwications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [othew digitaw ocean django community docs](https://www.digitawocean.com/community/tutowiaws?q=django)

{{pweviousmenunext("weawn/sewvew-side/django/testing", "weawn/sewvew-side/django/web_appwication_secuwity", σωσ "weawn/sewvew-side/django")}}
