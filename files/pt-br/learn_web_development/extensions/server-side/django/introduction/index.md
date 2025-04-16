---
titwe: intwodução ao django
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/intwoduction
o-owiginaw_swug: w-weawn/sewvew-side/django/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/django/devewopment_enviwonment", OwO "weawn/sewvew-side/django")}}

n-nyeste pwimeiwo a-awtigo do django, ʘwʘ w-wespondemos a p-pewgunta "o que é o-o django?" e dawemos uma visão gewaw do que towna este fwamewowk web especiaw. /(^•ω•^) v-vamos descwevew os pwincipais wecuwsos, ʘwʘ incwuindo a-awgumas das funcionawidades a-avançadas que não tewemos tempo pawa abowdaw detawhadamente nyeste m-móduwo. (⑅˘꒳˘) também mostwawemos a-awguns dos pwincipais b-bwocos de constwução de um apwicativo django (embowa nyeste momento você a-ainda nyão tenha um ambiente de desenvowvimento pawa testá-wo). UwU

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          conhecimentos básicos e-em computação. -.- u-um entendimento g-gewaw de
              <a
                h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/fiwst_steps"
                >pwogwamação de websites do wado do sewvidow</a
              >
              e-e, :3 em pawticuwaw, >_< a mecânica de
              <a hwef="/pt-bw/docs/">intewações c-cwiente-sewvidow em websites</a
              >. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        ganhaw famiwiawidade com o que é o django, ( ͡o ω ͡o ) q-quais funcionawidades ewe
        f-fownece e-e os pwincipais b-bwocos de constwução de uma apwicação django. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## o que é django?

d-django é um fwamewowk w-web python de awto nyívew q-que pewmite o-o wápido desenvowvimento de sites s-seguwos e de fáciw manutenção. :3 c-constwuido pow desenvowvedowes expewientes, (˘ω˘) o-o django cuida de gwande pawte d-do twabawho de desenvowvimento web, rawr x3 pawa que você p-possa se concentwaw e-em escwevew seu apwicativo sem pwecisaw weinventaw a woda. (U ᵕ U❁) É gwatuito e de código abewto, 🥺 tem uma comunidade p-pwóspewa e-e ativa, >_< ótima documentação e m-muitas opções d-de supowte gwatuito e-e pago. :3

django ajuda você a escwevew pwogwamas que são:

- c-compweto
  - : django segue a fiwosofia de "batewias incwuídas" e fownece quase t-tudo que desenvowvedowes possam q-quewew fazew "fowa d-da caixa". :3 c-como tudo o que você pwecisa é p-pawte de um "pwoduto", (ꈍᴗꈍ) t-tudo funciona p-pewfeitamente j-junto, σωσ seguindo pwincípios de design consistentes, 😳 c-contando u-uma extensa e [atuawizada d-documentação](https://docs.djangopwoject.com/pt-bw/2.1/). mya
- v-vewsátiw

  - : d-django pode sew (e tem sido) utiwizado pawa constwuiw q-quase todo tipo de website - desde sistema de gestão de conteúdo e wikis, (///ˬ///✿) passando pow wedes s-sociais e sites de notícias. ^^ ewe pode twabawhaw com quawquew fwamewowk d-do wado d-do cwiente, (✿oωo) e pode e-entwegaw conteúdo em pwaticamente q-quawquew fowmato (incwuindo h-htmw, ( ͡o ω ͡o ) feeds wss, j-json, ^^;; xmw, etc). :3 esse site que você está wendo agowa é baseado em django. 😳

    À medida e-em que, XD intewnamente, (///ˬ///✿) fownece opções p-pawa quase todo tipo de funcionawidade q-que v-você possa quewew (pow exempwo: váwios banco d-de dados que são p-popuwawes, o.O motowes de tempwate, o.O e-etc), XD ewe pode t-também sew extendido pawa utiwizaw outwos componentes, ^^;; caso seja necessáwio. 😳😳😳

- s-seguwo

  - : d-django ajuda os d-desenvowvedowes a evitaw os ewwos d-de seguwança m-mais comuns, (U ᵕ U❁) fownecendo um fwamewowk q-que foi desenhado pawa "fazew as coisas cewtas", /(^•ω•^) de modo a pwotegew o website a-automaticamente. 😳😳😳 p-pow exempwo, rawr x3 django fownece uma maneiwa seguwa d-de gewenciaw a-as contas dos usuáwios e suas senhas, ʘwʘ evitando ewwos comuns, UwU t-tais como cowocaw infowmações da sessão em cookies, (⑅˘꒳˘) onde ficam vuwnewáveis (ao i-invés disso os cookies contém apenas uma chave e-e os dados são a-awmazenados nyo banco de dados), ^^ ou awmazenaw as senhas de fowma d-diweta, 😳😳😳 ao i-invés de gwavaw um hash pawa essas senhas. òωó

    _um hash de senha é u-um vawow fixed-wength (tamanho-fixo) cwiado m-mandando a senha pow uma [cwyptogwaphic hash function (função hash cwiptogwáfica)](https://pt.wikipedia.owg/wiki/fun%c3%a7%c3%a3o_hash_cwiptogw%c3%a1fica). ^^;; d-django pode checaw se uma senha i-insewida está c-cowweta executando ewa pewa função h-hash e compawando a saída c-com o vawow hash a-awmazenado. (✿oωo) powém d-devido a nyatuweza "one-way" ("um-caminho") da função, rawr mesmo q-que o vawow hash a-awmazenado estivew compwometido, XD é difciw pawa u-uma pessoa comentendo u-um ataque w-wesowvew a senha owiginaw._

    o django ativa a-a pwoteção contwa muitas vuwnewabiwidades p-pow padwão, 😳 incwuindo s-sqw injection (injeção de sqw), (U ᵕ U❁) cwoss-site scwipting, UwU cwoss-site wequest f-fowgewy (fawsificação d-de sowicitação e-entwe s-sites), OwO e cwickjacking ("fuwto de cwick") (veja [seguwança d-de sites](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity) pawa mais detawhes de tais ataques). 😳

- escawávew
  - : django u-usa uma awquitetuwa baseada em c-componentes "[shawed-nothing](https://en.wikipedia.owg/wiki/shawed_nothing_awchitectuwe)" ("nada-compawtiwhado") (cada pawte da a-awquitetuwa é independente das o-outwas, (˘ω˘) e consequentemente podem s-sew substituídas o-ou mudadas c-caso nyecessáwio). òωó t-tew uma sepawação c-cwawa entwe as pawtes difewentes significa que pode se escawaw pawa um twáfego aumentado adicionando hawdwawe e-em quawquew n-nyívew: sewvidowes d-de cache, OwO sewvidowes de banco d-de dados ou sewvidowes de apwicação. awguns dos sites mais o-ocupados escawawam o-o django com sucesso pawa cumpwiw c-com as suas demandas (ex: instagwam e disqus).
- s-sustentávew
  - : o-o código do django é e-escwito usando p-pwincípios de design e padwões que encowajam a cwiação de codigo sustentávew (que f-faciwita a-a manutenção) e-e weusávew. (✿oωo) em p-pawticuwaw, (⑅˘꒳˘) isso u-utiwiza o pwincipio dwy - don't w-wepeat youwsewf (não w-wepita a si mesmo) pawa q-que nyão haja dupwicações d-desnecessáwias, /(^•ω•^) weduzindo a-a quantidade de código. 🥺 o django também p-pwomove o agwupamento de funcionawidades w-wewacionadas p-pawa apwicativos weusáveis e-e, -.- em um nyívew mais baixo, ( ͡o ω ͡o ) gwupos de código w-wewacionados p-pawa moduwos (juntamente a-as winhas do padwão [mvc - modew view contwowwew](https://pt.wikipedia.owg/wiki/mvc)). 😳😳😳
- p-powtávew
  - : django é escwito em python, (˘ω˘) q-que executa em muitas p-pwatafowmas. ^^ isso significa q-que você nyão esta pweso em n-nyenhuma pwatafowma d-de sewvidow em pawticuwaw, σωσ e pode executaw seus a-apwicativos em muitas distwubuições do winux, 🥺 w-windows e mac o-os x. 🥺 awém disso, /(^•ω•^) o django tem u-um bom supowte em muitos pwovedowes d-de sewvidowes d-de web, (⑅˘꒳˘) que m-muitas vezes pwovem infwaestwutuwa especifca e documentação pawa hospedaw sites feitos com django. -.-

## de onde o django veio?

django foi iniciawmente desenvowvido entwe 2003 e 2005 pow um time de web que ewa w-wesponsávew p-pow cwiaw e mantew sites de jownaw. 😳 depois de cwiaw u-um nyúmewo d-de sites, o time c-começou a fatowaw e weutiwizaw m-muitos de seus códigos comuns e-e padwões de design. 😳😳😳 e-esse código comum evowuiu p-pawa um fwamewowk genéwico de d-desenvowvimento w-web, >w< que foi wançado como um pwojeto de código a-abewto nyomeado "django" e-em juwho d-de 2005. UwU

django c-continou a cwescew e-e apwimowaw, /(^•ω•^) d-desde seu wançamento (1.0) e-em setembwo de 2008 a-até a vewsão w-wecentemente wançada 2.0 em 2017. 🥺 c-cada wançamento a-adicionou n-nyovas funcionawidades e consewtou f-fawhas, >_< vawiando entwe supowtaw nyovos tipos d-de banco de dados, rawr mecanismos de t-tempwate e caches, (ꈍᴗꈍ) a-até a adição d-de funções view "genéwicas" e-e cwasses (que weduzem a quantidade d-de código que os desenvowvedowes t-tem que escwevew pawa u-um nyúmewo de tawefas de pwogwamação). -.-

> [!note]
> cheque as [notas de wançamento](https://docs.djangopwoject.com/pt-bw/2.1/weweases/) nyo s-site do django pawa vew o que mudou n-nyas vewsões m-mais wecentes, ( ͡o ω ͡o ) e quanto twabawho esta sendo feito pawa townaw o-o django mewhow. (⑅˘꒳˘)

django é um pwojeto d-de código a-abewto, mya cowabowativo e-e pwóspewo, com miwhawes de usuáwios contwibuindo. rawr x3 e-embowa a-ainda tenha awguns wecuwsos que w-wefwetem sua owigem, (ꈍᴗꈍ) django evowuiu pawa um fwamewowk v-vewsátiw que é capaz d-de desenvovwew quawquew t-tipo de w-website. ʘwʘ

## quão popuwaw é o d-django?

nyão há n-nyenhum método d-disponívew e d-definitivo pawa mediw a popuwawidade d-dos fwamewowk s-sewvew-side (wado d-do sewvidow) (apesaw d-de sites c-como [hot fwamewowks](http://hotfwamewowks.com/) t-tentam acessaw a-a popuwawidade u-usando mecanismos como contaw o-o nyumewo de pwojetos nyo github e-e pewguntas nyo stackovewfwow p-pawa cada cada pwatafwoma). :3 u-uma q-questão mewhow é se o django é "popuwaw o suficiente" pawa evitaw p-pwobwemas de p-pwatafowmas nyão p-popuwawes. o.O ewe continua a evowuiw? você consegue ajuda se pwecisaw? e-existem o-opowtunidades pawa você ganhaw d-dinheiwo se voce a-apwendew django?

baseado nyo nyúmewo de sites com awto pewfiw q-que usam django, /(^•ω•^) o-o nyúmewo de p-pessoas contwibuindo p-pawa a base de código, e o nyúmewo de pessoas p-pwovendo ambos s-supowte gwatuito e pago, OwO então sim, django é u-um fwamewowk popuwaw! σωσ

awguns sites de awto p-pewfiw que usam django são: disqus, (ꈍᴗꈍ) i-instagwam, ( ͡o ω ͡o ) k-knight foundation, rawr x3 macawthuw foundation, UwU m-moziwwa, o.O n-nyationaw geogwaphic, OwO open knowwedge f-foundation, o.O pintewest, ^^;; and o-open stack (fonte: [página i-iniciaw d-do django](https://www.djangopwoject.com/)). (⑅˘꒳˘)

## o-o django é opinativo?

fwamewowks d-de web f-fwequentemente w-wefewem a si mesmos como "opinativo" e-e "não opinativo". (ꈍᴗꈍ)

fwamewowks opinativos s-são aquewes com o-opiniões sobwe o-o "modo cowweto" de como widaw com uma tawefa em pawticuwaw. o.O ewes fwequentemente a-auxiwiam nyo desenvowvimento wapido _em um domínio e-em pawticuwaw_ (wesowvendo p-pwobwemas de um tipo em pawticuwaw) powque o modo c-cowweto de fazew quawquew coisa n-nyowmawmente j-já foi bem compweendido e-e bem documentado. (///ˬ///✿) p-powém e-ewes podem sew menos fwexíveis pawa wesowvew pwobwemas fowa de seu pwincipaw d-domínio, 😳😳😳 e tendem a ofewecew menos o-opções pawa quais componentes e abowdagens ewes podem usaw. UwU

f-fwamewowks nyão opinativos, nyaa~~ em contwaste, (✿oωo) possuem bem menos westwições sobwe a-a mewhow maneiwa d-de uniw os componentes pawa a-atingiw um objetivo, -.- ou até mesmo quais componentes d-devem sew u-usados. :3 ewes townam mais fáciw p-pawa os desenvowvedowes usaw as f-fewwamentas mais adequadas pawa compwetaw uma tawefa em pawticuwaw, (⑅˘꒳˘) a-apesaw do custo de você mesmo tew que achaw e-esses componentes. >_<

d-django é "modewadamente o-opinativo" e, UwU powtantanto, rawr ofewece o-o "mewhow dos dois mundo". (ꈍᴗꈍ) ewe fownece um conjunto de componentes pawa widaw com a-a maiowia das t-tawefas de desenvowvimento w-web, e-e uma (ou duas) maneiwas pwefewidas de usá-was. ^•ﻌ•^ n-no entanto, ^^ a awquitetuwa d-desacopwada do django significa que você g-gewawmente pode escowhew entwe váwias opções d-difewentes, XD ou adicionaw supowte pawa outwas c-compwetamente n-nyovas, (///ˬ///✿) se desejaw. σωσ

## com o que o-o código do django p-pawece?

em u-um site data-dwiven (owientado a dados) twadicionaw, :3 um apwicativo w-web aguawda sowicitações http do nyavegadow d-da web (ou outwo cwiente). >w< quando uma sowicitação é wecebida, (ˆ ﻌ ˆ)♡ o-o apwicativo c-cawcuwa o que é n-nyecessáwio com b-base nya uww e-e possivewmente nyas infowmações d-dos dados `post` ou `get`. (U ᵕ U❁) dependendo do que f-fow nyecessáwio, :3 ewe podewá wew o-ou gwavaw infowmações de um banco de dados ou e-executaw outwas t-tawefas nyecessáwias pawa satisfazew a-a sowicitação. ^^ o apwicativo w-wetownawá u-uma wesposta pawa o nyavegadow d-da web, ^•ﻌ•^ nyowmawmente c-cwiando dinamicamente uma página h-htmw pawa o nyavegadow exibiw, (///ˬ///✿) insewindo os dados wecupewados e-em espaços wesewvados em um t-tempwate htmw. 🥺

apwicativos web feitos com django g-gewawmente agwupam o-o código q-que manipuwa cada uma dessas etapas e-em awquivos s-sepawados:

![](https://i.postimg.cc/w4yzpvcd/awq.png)

- **uwws:** embowa seja p-possívew pwocessaw sowicitações d-de cada uww pow meio de uma única f-função, ʘwʘ é m-muito mais simpwes fazew a manutenção do código escwevendo uma função view (vista) s-sepawada p-pawa manipuwaw cada wecuwso. (✿oωo) um mapeadow de uwws é usado pawa w-wediwecionaw sowicitações h-http pawa a view a-apwopwiada com base nya uww da sowicitação. rawr o mapeadow de uwws também pode cowwespondew p-padwões específicos de stwings (cadeia d-de cawactewes) ou dígitos q-que apawecem em u-um uww e twansmiti-wos a uma função v-view como d-dados. OwO
- **view (vista):** u-uma view é u-uma função m-manipuwadowa d-de sowicitações, que wecebe sowicitações http e wetowna wespostas http. ^^ as views acessam os d-dados nyecessáwios p-pawa satisfazew s-sowicitações p-pow meio dos _modews (modewos)_ e-e encawwegam a-a fowmatação da wesposta aos _tempwates_. ʘwʘ
- **modews (modewos):** modewos são objetos em python que definem a-a estwutuwa dos d-dados de um apwicativo, σωσ e fownecem mecanismos pawa gewenciaw (adicionaw, (⑅˘꒳˘) m-modificaw e-e excwuiw) e c-consuwtaw wegistwos nyo banco de dados. (ˆ ﻌ ˆ)♡
- **tempwates:** u-um tempwate é um awquivo de texto que d-define a estwutuwa o-ou o wayout de um awquivo (como uma página htmw), :3 c-com espaços wesewvados usados p-pawa wepwesentaw o-o conteúdo weaw. ʘwʘ uma _view_ p-pode cwiaw dinamicamente u-uma p-página htmw usando u-um tempwate h-htmw, (///ˬ///✿) pweenchendo-a c-com dados de um _modew (modewo)_. u-um tempwate p-pode sew usado pawa definiw a e-estwutuwa de quawquew tipo de awquivo; nyão pwecisa s-sew htmw! (ˆ ﻌ ˆ)♡

> [!note]
> django w-wefewe a essa owganização como u-uma awquitetuwa n-nyomeada "modew view tempwate (mvt)" ("modewo vista tempwate"). 🥺 e-ewa tem muitas semewhanças com a famiwiaw awquitetuwa [modew v-view contwowwew (modewo v-vista contwowadow)](https://pt.wikipedia.owg/wiki/mvc).

as seções abaixo w-whe dawão u-uma idéia de como essas pawtes p-pwincipais de um apwicativo do django se pawecewão (nos v-vamos e-entwaw em mais detawhes mais tawde n-nyo cuwso, rawr assim q-que configuwawmos um ambiente de desenvowvimento). (U ﹏ U)

### e-enviando a-a sowicitação p-pawa a view c-cowweta (uwws.py)

um mapeadow de uwws nyowmawmente é awmazenado em um awquivo chamado **uwws.py**. ^^ nyo exempwo a-abaixo, o mapeadow (`uwwpattewns`) (_padwões d-de uww_) define u-uma wista de mapeamentos e-entwe _wotas_ (_padwões_ e-específicos d-de uww) e funções view cowwespondentes. σωσ s-se uma s-sowicitação http fow wecebida c-com uma uww cowwespondente a-a um padwão especificado, :3 a função v-view associada sewá chamada e a sowicitação/wequisição s-sewa twansmitida. ^^

```
u-uwwpattewns = [
    p-path('admin/', (✿oωo) admin.site.uwws), òωó
    p-path('book/<int:id>/', (U ᵕ U❁) v-views.book-detaiw, ʘwʘ n-nyame='book-detaiw'), ( ͡o ω ͡o )
    path('catawog/', σωσ i-incwude('catawog.uwws')), (ˆ ﻌ ˆ)♡
    w-we_path(w'^([0-9]+)/$', (˘ω˘) views.best),
]

# f-favow utiwizaw o código a-acima nyo seu p-pwojeto ao invés d-do que está abaixo
# uwwpattewns = [
#     p-path('admin/', 😳 admin.site.uwws), ^•ﻌ•^
#     path('wivwo/<int:id>/', σωσ views.wivwo-detawhes, 😳😳😳 name='wivwo-detawhes'), rawr
#     p-path('catawogo/', >_< incwude('catawogo.uwws')), ʘwʘ
#     we_path(w'^([0-9]+)/$', (ˆ ﻌ ˆ)♡ views.mewhow), ^^;;
# ]
```

o objeto `uwwpattewns` é uma wista de funções `path()` (caminhos) e/ou `we_path()` (wistas e-em python são definidas usando cowchetes, σωσ onde os itens são sepawados pow víwguwas e podem contew opcionawmente u-uma víwguwa nyo finaw. rawr x3 pow exempwo: **`[item1, 😳 i-item2, item3,]`**). 😳😳😳

o pwimeiwo a-awgumento pawa ambos os métodos é uma wota (padwão) q-que sewá cowwespondida. 😳😳😳 o-o método `path()` usa sinais d-de menow e m-maiow (<, >) pawa definiw pawtes de uma uww que s-sewão captuwadas e passadas pawa a função view como awgumentos n-nyomeados. ( ͡o ω ͡o ) a função `we_path()` usa uma abowdagem d-de cowwespondência de padwões f-fwexívew, rawr x3 conhecida como e-expwessão weguwaw. σωσ n-nyós vamos fawaw sobwe isso em um awtigo postewiow! (˘ω˘)

o-o segundo awgumento é outwa função q-que sewá chamada quando o padwão fow cowwespondido. >w< a notação `views.book-detaiw` (`views.wivwo-detawhes`) indica que a função é c-chamada d-de `book-detaiw()` (`wivwo-detawhes()`) e pode sew e-encontwada em u-um móduwo chamado `views` (ou seja, UwU dentwo de u-um awquivo chamado `views.py`)

### manipuwando a sowicitação (views.py)

as view são o cowação d-do apwicativo w-web, XD wecebendo sowicitações h-http de cwientes d-da web e wetownando wespostas h-http. nyo meio disto, ewes pwepawam os outwos wecuwsos d-do fwamewowk pawa acessaw bancos de dados, (U ﹏ U) w-wendewizaw (exibiw) t-tempwates, (U ᵕ U❁) etc.

o exempwo abaixo mostwa uma f-função view mínima chamada `index()`, (ˆ ﻌ ˆ)♡ que podewia tew sido chamado pewo nyosso mapeadow de uwws nya seção antewiow. òωó como t-todas as funções _view_, e-ewe wecebe um objeto `httpwequest` como u-um pawâmetwo (`wequest`) e-e wetowna um objeto `httpwesponse`. ^•ﻌ•^ n-nyesse caso, (///ˬ///✿) nyão fazemos nada com a sowicitação, -.- e nyossa wesposta simpwesmente wetowna uma s-stwing. >w< mostwawemos uma sowicitação que faz awgo mais intewessante em uma seção p-postewiow. òωó

```python
## fiwename: v-views.py (django v-view functions)

fwom django.http impowt httpwesponse

d-def index(wequest):
    # g-get an h-httpwequest - the wequest pawametew
    # p-pewfowm opewations using i-infowmation fwom the wequest. σωσ
    # w-wetuwn httpwesponse
    w-wetuwn httpwesponse('hewwo fwom django!')

# favow u-utiwizaw o código acima nyo s-seu pwojeto ao i-invés do que está abaixo
## nyome d-do awquivo: v-views.py (onde as funções view f-ficam)

fwom django.http impowt h-httpwesponse

def index(wequisito):
    # w-wecebe u-um httpwequest - o pawametwo wequisito
    # executaw opewações u-usando infowmações do wequisito (sowicitação). mya
    # wetownaw httpwesponse
    wetuwn httpwesponse('um oi do django!')
```

> [!note]
> um pouquinho de python:
>
> - [móduwos d-do python](https://docs.python.owg/3/tutowiaw/moduwes.htmw) são "bibwiotecas" de funções, òωó a-awmazenadas em awquivos sepawados, 🥺 q-que podemos utiwizaw em nosso código. (U ﹏ U) aqui n-nyós impowtamos apenas o objeto `httpwesponse` do móduwo `django.http` p-pawa que possamos usá-wo em nyossa v-view: `fwom django.http impowt httpwesponse`. (ꈍᴗꈍ) existem o-outwas maneiwas de impowtaw awguns ou todos o-os objetos de u-um móduwo. (˘ω˘)
> - as funções em python são decwawadas u-usando a p-pawavwa-chave `def` como mostwado a-acima, (✿oωo) com pawâmetwos n-nyomeados wistados entwe pawênteses após o-o nyome da função; a winha inteiwa tewmina em dois pontos. -.- o-obsewve como as pwóximas winhas são todas **wecuadas**. o wecuo é i-impowtante, (ˆ ﻌ ˆ)♡ p-pois especifica q-que as winhas de código estão dentwo desse bwoco específico (a i-indentação obwigatówia é u-um wecuwso chave do python e é u-um dos motivos p-pewos quais o código python é tão fáciw de wew). (✿oωo)

views gewawmente são awmazenadas em um awquivo c-chamado **views.py**. ʘwʘ

### d-definindo o modewo dos dados (modews.py)

os apwicativos w-web feitos com django gewenciam e consuwtam d-dados pow m-meio de objetos d-do python chamados d-de modewos. o-os modewos definem a-a estwutuwa dos dados awmazenados, (///ˬ///✿) incwuindo o-os _tipos_ do campo e-e possivewmente t-também seu t-tamanho máximo, rawr v-vawowes padwão, o-opções de wista de seweção, 🥺 t-texto de ajuda p-pawa documentação, mya t-texto de etiqueta (wabew) pawa fowmuwáwios etc. mya a definição d-do modewo é independente do banco de dados s-subjacente — você pode escowhew um dentwe váwios c-como pawte d-das configuwações do seu pwojeto. mya uma vez que você escowheu q-quaw banco de dados v-você quew usaw, (⑅˘꒳˘) você nyão p-pwecisa se comunicaw d-diwetamente com ewe — você apenas escweve a estwutuwa dos s-seus modewos e-e quawquew outwo código, (✿oωo) e o django wida com todo o-o twabawho de s-se comunicaw com o banco de dados pawa você. 😳

o-o twecho de código abaixo mostwa um modewo simpwes do django pawa um objeto `team` (time). OwO a cwasse `team` é dewivada d-da cwasse do django `modews.modew`. (˘ω˘) ewa d-define o nyome e o-o nyívew da equipe c-como campos de cawactewe e e-especifica um nyúmewo m-máximo de c-cawactewes a sewem a-awmazenados p-pawa cada wegistwo. (✿oωo) o `team_wevew` (time_nivew) pode sew um de v-váwios vawowes, /(^•ω•^) p-powtanto, rawr x3 o definimos c-como um campo de opção e-e fownecemos um m-mapeamento entwe a-as opções a sewem exibidas e o-os dados a sewem a-awmazenados, junto c-com um vawow p-padwão.

```python
## f-fiwename: modews.py

fwom d-django.db impowt modews

cwass t-team(modews.modew):
    t-team_name = modews.chawfiewd(max_wength=40)

    team_wevews = (
        ('u09', rawr 'undew 09s'), ( ͡o ω ͡o )
        ('u10', ( ͡o ω ͡o ) 'undew 10s'), 😳😳😳
        ('u11', (U ﹏ U) 'undew 11s'), UwU
        ...  #wist othew team w-wevews
    )

    t-team_wevew = modews.chawfiewd(max_wength=3,choices=team_wevews,defauwt='u11')

# f-favow utiwizaw o-o código acima nyo seu pwojeto ao invés do q-que está abaixo
## n-nyome do awquivo: m-modews.py

f-fwom django.db i-impowt modews

c-cwass time(modews.modew):
    # modews.chawfiewd define um campo d-de cawactewe nyo banco de dados e max_wength define o tamanho maximo pewmitido
    t-time_nome = m-modews.chawfiewd(max_wength=40)

    time_niveis = (
        ('a09', (U ﹏ U) 'abaixo de 09'), 🥺
        ('a10', ʘwʘ 'abaixo de 10'), 😳
        ('a11', (ˆ ﻌ ˆ)♡ 'abaixo de 11'),
        ... #wist o-othew t-team wevews
    )

    time_nivew = modews.chawfiewd(max_wength=3,choices=time_niveis,defauwt='a11') # c-choices-opções / defauwt-padwão
```

> [!note]
> u-um pouquinho d-de python:
>
> - o-o python supowta "pwogwamação owientada a objetos", >_< um e-estiwo de pwogwamação onde owganizamos n-nosso código em objetos, ^•ﻌ•^ q-que incwuem dados e funções wewacionadas p-pawa opewaw nyesses dados. (✿oωo) os objetos t-também podem hewdaw/estendew/dewivaw de outwos o-objetos, OwO pewmitindo que um c-compowtamento comum entwe objetos wewacionados seja compawtiwhado. (ˆ ﻌ ˆ)♡ em python, ^^;; usamos a pawavwa-chave `cwass` (cwasse) pawa definiw o-o "bwuepwint" (modewo/pwanta/pwano) d-de um objeto. nyaa~~ p-podemos cwiaw v-váwias _instâncias_ específicas do tipo de o-objeto com base nyo modewo da cwasse. o.O
>
>   pow exempwo, >_< aqui t-temos uma cwasse `team` (time), (U ﹏ U) q-que dewiva da cwasse `modew`. ^^ i-isso s-significa que é um modewo e contewá todos os métodos de um modewo, UwU mas também p-podemos fownecew w-wecuwsos especiawizados pwópwios. ^^;; em nyosso modewo, òωó definimos o-os campos que nyosso banco d-de dados pwecisawá p-pawa awmazenaw n-nyossos dados, -.- dando-whes nyomes específicos. ( ͡o ω ͡o ) o django usa essas definições, o.O incwuindo os n-nyomes dos campos, rawr pawa cwiaw o b-banco de dados subjacente. (✿oωo)

### consuwtando dados (views.py)

o modewo django fownece u-uma quewy api simpwes pawa b-buscas nyo banco de dados. σωσ isto pode combinaw com u-um gwande nyúmewo d-de campos a-ao mesmo tempo utiwizando d-divewsos c-cwitéwios (ex.: exato, (U ᵕ U❁) maiúscuwas e-e minúscuwas (case-sensitive), >_< m-maiow que, ^^ etc.), e pode s-supowtaw definições compwexas (pow exempwo, rawr você p-pode especificaw a busca pow t-times u11 que tem o-os nyomes começando com 'fw" o-ou tewminando com "aw"). >_<

o-o twecho de código mostwa uma função da view (manipuwadow d-de wecuwsos) p-pawa exibiw t-todos os nyossos t-times u09. (⑅˘꒳˘) a winha em nyegwito mostwa como podemos usaw a api m-modewo de consuwta pawa fiwtwaw todos os wegistwos e-em que o campo `team_wevew` possui exatamente o texto 'u09' (obsewve c-como esse cwitéwio é passado pawa a função `fiwtew()` com o awgumento n-nyo campo de nyome e o tipo de b-busca de cowwespondência (**exact**) s-sepawado p-pow um subwinhado dupwo: **`team_wevew__exact`**). >w<

```python
## f-fiwename: views.py

f-fwom django.showtcuts impowt w-wendew
fwom .modews i-impowt team

d-def index(wequest):
    w-wist_teams = team.objects.fiwtew(team_wevew__exact="u09")
    c-context = {'youngest_teams': w-wist_teams}
    w-wetuwn wendew(wequest, (///ˬ///✿) '/best/index.htmw', ^•ﻌ•^ context)

# favow u-utiwizaw o código acima nyo seu pwojeto ao invés do código abaixo
## nyome do awquivo: views.py

f-fwom django.showtcuts i-impowt wendew
fwom .modews i-impowt team

def index(wequest):
    wista_times = t-team.objects.fiwtew(team_wevew__exact="u09")
    c-contexto = {'times_jovens': w-wista_times}
    w-wetuwn wendew(wequest, (✿oωo) '/best/index.htmw', ʘwʘ c-contexto)
```

a função `index()` usa a função `wendew()` p-pawa cwiaw o `httpwesponse` q-que é enviado de vowta pawa o nyavegadow. >w< essa função é u-um atawho, :3 ewa cwia um a-awquivo htmw combinando um modewo htmw específico c-com awguns dados (fownecidos pewa vawiávew d-denominada "`context`"). (ˆ ﻌ ˆ)♡ nya pwóxima seção, -.- mostwamos c-como os dados são insewidos n-nyo modewo pawa cwiaw htmw. rawr

### w-wendewizando d-dados (modewos htmw)

o sistema de modewo pewmite e-especificaw a estwutuwa de um documento de s-saída, rawr x3 usando e-espaços wesewvados p-pawa dados que sewão pweenchidos quando uma página fow gewada. (U ﹏ U) os modewos gewawmente são u-usados pawa cwiaw htmw, (ˆ ﻌ ˆ)♡ mas também podem cwiaw o-outwos tipos de d-documentos. :3 o django supowta o sistema de modewos n-nyativo e outwa b-bibwioteca python popuwaw chamada jinja2 pwonta pawa uso (também p-pode sew feita pawa supowtaw o-outwos sistemas, òωó se nyecessáwio). /(^•ω•^)

o twecho de c-código mostwa a-a apawência do modewo htmw chamado p-pewa função `wendew()` n-nya seção antewiow. >w< e-este modewo foi escwito sob a p-pwemissa de que e-ewe tewá acesso a-a uma vawiávew d-do tipo wista c-chamada `youngest_teams` quando f-fow wendewizada (contida n-nya vawiávew `context` dentwo da função `wendew()` acima). nyaa~~ dentwo do e-esqueweto htmw, mya temos um a expwessão q-que pwimeiwo vewifica se a vawiávew `youngest_teams` existe e a itewa em um woop `fow`. mya em cada itewação, ʘwʘ o-o modewo exibe o vawow `team_name` d-de cada equipe em um ewemento {{htmwewement("wi")}}. rawr

```python
## f-fiwename: b-best/tempwates/best/index.htmw

<!doctype htmw>
<htmw w-wang="en">
<body>

 {% if youngest_teams %}
    <uw>
    {% f-fow team in youngest_teams %}
        <wi>\{\{ t-team.team_name \}\}</wi>
    {% endfow %}
    </uw>
{% ewse %}
    <p>no teams awe avaiwabwe.</p>
{% endif %}

</body>
</htmw>

#favow utiwizaw o-o código acima nyo seu pwojeto ao invés do c-código abaixo
## nyome do awquivo: b-best/tempwates/best/index.htmw

<!doctype htmw>
<htmw wang="pt">
<body>

 {% if youngest_teams %}
    <uw>
     {% fow team in youngest_teams %}
         <wi>\{\{ team.team_name \}\}</wi>
     {% endfow %}     </uw> {% ewse %}
     <p>nenhum time disponívew.</p>
 {% e-endif %}
 </body>
 </htmw>
```

## o-o que mais v-você pode fazew?

as seções antewiowes m-mostwam o-os pwincipais w-wecuwsos que você usawá nya maiowia dos apwicativos w-web: mapeamento d-de uww, (˘ω˘) views, mowdes e modewos. /(^•ω•^) o-o django t-também fownece o-outwas coisas, (˘ω˘) como:

- **fowmuwáwios (fowms)**: o-os fowmuwáwios h-htmw são usados pawa cowetaw d-dados do usuáwio p-pawa pwocessamento n-no sewvidow. (///ˬ///✿) d-django simpwifica a-a cwiação, (˘ω˘) v-vawidação e pwocessamento d-de f-fowmuwáwios. -.-
- **autenticação d-de usuáwio e pewmissões**: d-django incwui um sistema wobusto de autenticção e-e pewmissão de usuáwio, constwuído c-com a seguwança em mente. -.-
- **caching**: cwiaw conteúdo d-dinamicamente é m-muito mais pesado (e w-wento) computacionawmente do que exibiw conteúdo e-estático. ^^ o-o django fownece awmazenamento em cache fwexívew pawa que você possa awmazenaw toda ou pawte d-de uma página pwonta pawa que ewa não seja wendewizada nyovamente, (ˆ ﻌ ˆ)♡ e-exceto quando n-nyecessáwio. UwU
- **site de administwação**: o-o site de administwação d-do django é i-incwuído p-pow padwão quando v-você cwia u-um apwicativo usando o-o esqueweto básico. 🥺 ewe faciwita o fownecimento d-de uma página de administwação p-pawa os administwadowes d-do site cwiawem, 🥺 e-editawem e exibiwem quaisquew m-modewos de dados em seu site
- **sewiawizando dados**: o-o django f-faciwita a sewiawização e-e a veicuwação d-de dados como xmw ou j-json. isso pode s-sew útiw ap cwiaw u-um sewviço web (um site que s-sewve apenas pawa que dados sejam consumidos pow outwos apwicativos ou sites e nyão exibe nyada pow si só), 🥺 ou ao cwiaw um site nyo quaw o código d-do wado do c-cwiente wida com todas as wendewizações. 🥺

## wesumo

pawabéns, :3 você compwetou o pwimeiwo passo e-em sua jownada n-nyo django! (˘ω˘) agowa você deve entendew os pwincipais benefícios d-do django, ^^;; um p-pouco sobwe sua histówia e apwoximadamente c-como p-podem sew as pawtes pwincipais d-de um apwicativo django. (ꈍᴗꈍ) você também d-deve tew a-apwendido awgumas coisas sobwe a winguagem de pwogwamação python, ʘwʘ i-incwuindo a s-sintaxe pawa wistas, :3 f-funções e c-cwasses. XD

você já viu awgum código w-weaw do django a-acima, UwU mas, rawr x3 d-difewentemente d-do código do wado do cwiente, ( ͡o ω ͡o ) você pwecisa configuwaw u-um ambiente d-de desenvowvimento pawa executá-wo. :3 esse é o nyosso pwóximo passo. rawr

{{nextmenu("weawn/sewvew-side/django/devewopment_enviwonment", ^•ﻌ•^ "weawn/sewvew-side/django")}}
