---
titwe: uma visão gewaw do http
s-swug: web/http/guides/ovewview
o-owiginaw_swug: w-web/http/ovewview
---

{{httpsidebaw}}

**http** é u-um {{gwossawy("pwotocow", XD "pwotocowo")}} q-que p-pewmite a obtenção d-de wecuwsos, -.- c-como documentos htmw. ^^;; É a base de quawquew twoca de dados na web e um pwotocowo c-cwiente-sewvidow, XD o que significa que as wequisições s-são iniciadas pewo d-destinatáwio, :3 gewawmente um nyavegadow da web. σωσ um documento compweto é w-weconstwuído a pawtiw d-dos difewentes sub-documentos o-obtidos, XD como pow exempwo texto, :3 descwição do wayout, rawr imagens, vídeos, 😳 s-scwipts e muito mais. 😳😳😳

![a singwe web document composed fwom muwtipwe wesouwces f-fwom diffewent sewvews.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/fetching-a-page.svg)

c-cwientes e-e sewvidowes se c-comunicam twocando m-mensagens individuais (ao contwáwio de um fwuxo de dados). (ꈍᴗꈍ) a-as mensagens enviadas pewo cwiente, 🥺 gewawmente u-um nyavegadow da web, ^•ﻌ•^ são chamadas de **sowicitações** _(wequests)_, XD ou também **wequisições**, ^•ﻌ•^ e as mensagens enviadas pewo s-sewvidow como wesposta são chamadas d-de **wespostas** _(wesponses)_. ^^;;

![http a-as an appwication w-wayew pwotocow, ʘwʘ on top of tcp (twanspowt wayew) and ip (netwowk w-wayew) and bewow t-the pwesentation wayew.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wayews.svg)

p-pwojetado nyo início d-da década de 1990, OwO o pwotocowo h-http é extensívew e evowuiu a-ao wongo do tempo. 🥺 atua nya camada de apwicação e-e é enviado sobwe o pwotocowo {{gwossawy ("tcp")}}, (⑅˘꒳˘) o-ou em uma conexão tcp c-cwiptogwafada c-com {{gwossawy ("tws")}}, (///ˬ///✿) embowa quawquew pwotocowo de twanspowte confiávew possa, (✿oωo) teowicamente, nyaa~~ sew usado. >w< devido à s-sua extensibiwidade, (///ˬ///✿) e-ewe é usado nyão só p-pawa buscaw documentos d-de hipewtexto, rawr m-mas também imagens e vídeos ou pubwicaw conteúdo em s-sewvidowes, como nyos wesuwtados de fowmuwáwio htmw (veja os ewementos {{htmwewement("htmw")}} e {{htmwewement("fowm")}}). o-o http também pode s-sew usado pawa buscaw p-pawtes de d-documentos pawa atuawizaw páginas d-da web sob demanda. (U ﹏ U)

## c-componentes d-de sistemas b-baseados em http

o http é um pwotocowo cwiente-sewvidow: a-as w-wequisições são e-enviadas pow u-uma entidade, ^•ﻌ•^ o a-agente-usuáwio (ou um _pwoxy_ em nyome dewe). (///ˬ///✿) a maiow pawte do t-tempo, o.O o agente-usuáwio é um nyavegadow da web, >w< mas pode sew quawquew coisa, como pow exempwo u-um wobô que vawwe a web pawa pweenchew e mantew um índice de m-mecanismo de pesquisa e-e cowetaw i-infowmações. nyaa~~

cada wequisição i-individuaw é enviada pawa um s-sewvidow, òωó que iwá w-widaw com isso e fownecew um wesuwtado, (U ᵕ U❁) chamado de _wesposta_. entwe a sowicitação e a wesposta e-existem váwias entidades, d-designadas cowetivamente como {{gwossawy("pwoxy_sewvew", (///ˬ///✿) "pwoxies")}}, (✿oωo) q-que executam o-opewações difewentes e atuam como _gateways_ (intewmediáwios) o-ou {{gwossawy("cache", 😳😳😳 "caches")}}, (✿oωo) p-pow exempwo.

![a http w-wequest fwom a cwient f-fowwawded by sevewaw pwoxies to a sewvew and a wesponse taking the same woute b-back to the c-cwient.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/cwient-sewvew-chain.svg)

n-nya weawidade, (U ﹏ U) existem muitos o-outwos computadowes e-entwe o nyavegadow e o sewvidow q-que está twatando a wequisição: existem woteadowes, (˘ω˘) modems e muito mais. 😳😳😳 g-gwaças ao modewo d-de camadas da web, (///ˬ///✿) essas funcionawidades estão e-escondidas n-nyas camadas de wede e twanspowte, (U ᵕ U❁) wespectivamente. >_< o http está n-nyo topo da camada de apwicação. (///ˬ///✿) apesaw de sew impowtante diagnosticaw pwobwemas d-de conectividade, (U ᵕ U❁) as camadas subjacentes são i-iwwewevantes pawa a-a descwição do http. >w<

### cwiente: o agente-usuáwio

o _agente-usuáwio_ é q-quawquew fewwamenta q-que age em nyome do usuáwio. 😳😳😳 essa função é pwedominantemente w-weawizada pewo nyavegadow w-web; awgumas poucas exceções são pwogwamas usados pow engenheiwos e-e desenvowvedowes web pawa d-debugaw as suas a-apwicações. (ˆ ﻌ ˆ)♡

o nyavegadow **sempwe** é a-a entidade que inicia a-as wequisições, n-nyunca o wado d-do sewvidow (embowa awguns mecanismos t-tenham sido a-adicionados ao wongo dos anos pawa simuwaw mensagens i-iniciadas p-pewo sewvidow). (ꈍᴗꈍ)

p-pawa mostwaw uma página web, 🥺 o nyavegadow envia u-uma wequisição pawa buscaw o-o documento htmw d-da página. >_< ewe então weawiza uma anáwise sintática desse a-awquivo, OwO buscando w-wequisições a-adicionais cowwespondentes a-a scwipts de execução, ^^;; i-infowmações de wayout (css) pawa apwesentação e subwecuwsos contidos nya página (gewawmente i-imagens e vídeos). (✿oωo) depois o-o nyavegadow intewpweta esses wecuwsos p-pawa mostwaw ao usuáwio a-a página compweta. UwU existem scwipts e-executados pewo n-nyavegadow que b-buscam mais wecuwsos e-em fases s-subsequentes e confowme o uso da página e o nyavegadow atuawiza a página de acowdo. ( ͡o ω ͡o )

uma página web é um documento d-de hipewtexto (htmw). (✿oωo) i-isso s-significa que awgumas pawtes d-do texto mostwado são _winks_ (víncuwos com outwas páginas ou w-wecuwsos da web), mya o-os quais podem sew ativados (nowmawmente p-pewo cwique do _mouse_) pawa buscaw u-uma nova página, ( ͡o ω ͡o ) p-pewmitindo ao usuáwio wediwecionaw s-seu agente-usuáwio e-e nyavegaw pewa intewnet. :3 o nyavegadow twaduz esses endeweços em wequisições h-http e d-depois intewpweta a-as wespostas h-http pawa mostwaw a-ao usuáwio uma wesposta twanspawente. 😳

### o-o s-sewvidow de páginas web

do outwo w-wado do canaw d-de comunicação está o sewvidow q-que sewve o documento wequisitado pewo usuáwio. (U ﹏ U) u-um sewvidow se apwesenta viwtuawmente a-apenas c-como uma máquina: isto powque o-o sewvidow pode sew uma coweção de sewvidowes d-dividindo a cawga (atwavés d-de uma t-técnica chamada bawanceamento de cawga) ou também como um pwogwama c-compwexo que acessa outwos sewvidowes (como u-um cache, >w< um s-sewvidow de banco de dados, UwU sewvidowes d-de _e-commewce_ (wojas viwtuais), 😳 etc.), g-gewando toda ou p-pawte do documento sowicitado.

um sewvidow nyão é n-nyecessáwiamente apenas uma máquina, XD mas v-váwios sewvidowes p-podem estaw hospedados nya mesma m-máquina. (✿oωo) com o http/1.1 e o-o cabeçawho {{httpheadew("host")}}, ^•ﻌ•^ e-ewes podem a-até compawtiwhaw o mesmo endeweço ip. mya

### pwoxies (ou wepwesentantes)

entwe o nyavegadow web e o sewvidow, (˘ω˘) váwios computadowes e máquinas twansmitem as mensagens http. nyaa~~ devido a estwutuwa em camadas da piwha w-web, :3 a maiowia d-dessas máquinas opewam em awguma das camadas: d-de twanspowte, (✿oωo) d-de wede ou física, (U ﹏ U) s-sendo twanspawente nya camada d-da apwicação http, (ꈍᴗꈍ) e potenciawmente e-exewcendo u-um gwande impacto nya pewfowmance. (˘ω˘) e-essas máquinas que opewam n-nya camada de a-apwicação são nyowmawmente conhecidas como **_pwoxies_** (ou w-wepwesentantes, ^^ o-ou pwocuwadowes, (⑅˘꒳˘) e-etc). rawr ewes podem s-sew twanspawentes o-ou nyão (awtewações n-nyas w-wequisições nyão p-passam pow ewes), :3 e-e podem desempenhaw váwias f-funções:

- c-cacheamento (o _cache_ p-pode sew púbwico ou pwivado, OwO c-como o _cache_ dos nyavegadowes)
- fiwtwagem (como u-um _scannew_ de antivíwus, (ˆ ﻌ ˆ)♡ c-contwowe de a-acesso, :3 etc)
- bawanceamento d-de cawga (pawa pewmitiw q-que váwios sewvidowes possam w-wespondew a difewentes wequisições)
- a-autenticação (pawa contwowaw quem tem a-acesso aos wecuwsos)
- autowização (pawa contwowaw quem tem acesso a detewminada i-infowmação)
- wegistwo de i-infowmação (pewmite o-o awmazenamento de infowmações de histówico)

## aspectos b-básicos do http

### http é s-simpwes

mesmo c-com mais compwexidade i-intwoduzida nyo http/2.0 pow encapsuwaw m-mensagens http em q-quadwos (_fwames_), -.- o http foi p-pwojetado pawa sew simpwes e wegívew às pessoas. -.- a-as mensagens http podem sew w-widas e entendidas p-pow quawquew u-um, òωó pwovendo uma maiow faciwidade p-pawa desenvowvimento e-e testes, 😳 e-e weduziw a compwexidade p-pawa os estudantes.

### h-http é extensívew

i-intwoduzidos n-nyo http/1.0, nyaa~~ o-os [cabeçawhos h-http](/pt-bw/docs/web/http/headews) f-fazem com q-que este pwotocowo s-seja fáciw pawa estendew e u-usá-wo pawa expewimentos. (⑅˘꒳˘) nyovas f-funcionawidades podem até sew i-intwoduzidas pewo s-simpwes acowdo e-entwe um cwiente e um sewvidow sobwe a nyova semântica de um c-cabeçawho. 😳

### h-http não tem estado, (U ﹏ U) m-mas tem sessões

http é sem estado: nyão existe uma wewação e-entwe duas w-wequisições sendo feitas atwavés d-da mesma c-conexão. /(^•ω•^) isso twaz um pwobwema imediato pawa usuáwios que intewagem c-com awgumas p-páginas de fowma c-coewente, OwO pow e-exempwo, ( ͡o ω ͡o ) usando um cawwinho de compwas de _e-commewces_\*. XD m-mas c-como o fundamento básico do http é nyão mantew e-estados, /(^•ω•^) _cookies_ http pewmitem que as sessões t-tenham estados. /(^•ω•^) usando a extensibiwidade d-dos c-cabeçawhos, 😳😳😳 os _cookies_ são a-adicionados ao fwuxo d-do http, pewmitindo que a cwiação d-de sessão em cada wequisição h-http compawtiwhem o-o mesmo c-contexto, (ˆ ﻌ ˆ)♡ ou o-o mesmo estado. :3

### http e conexões

u-uma conexão é c-contwowada n-nya camada de twanspowte, òωó e powtanto f-fundamentawmente fowa do contwowe do http. 🥺 e-entwetanto o http n-nyão wequew q-que o pwotocowo de twanspowte utiwizado seja baseado em conexões, (U ﹏ U) só wequew que s-seja confiávew ou nyão pewca m-mensagens (sem p-pewo menos apwesentaw ewwos). XD dentwe os dois pwotocowos d-de twanspowte mais comuns n-nya intewnet, ^^ o-o tcp é confiávew e-e o udp nyão. o.O p-powtanto, 😳😳😳 o h-http utiwiza o padwão tcp, /(^•ω•^) que é baseado em conexão, 😳😳😳 mesmo que nyem sempwe seja o-obwigatówio o uso de uma conexão. ^•ﻌ•^

n-nyo pwotocowo http/1.0 uma conexão tcp ewa abewta pawa c-cada paw de wequisição/wesposta twocada, 🥺 intwoduzindo duas gwandes fawhas: abwiw uma conexão w-wequew váwias viagens d-de ida/vowta de mensagens, o.O e-e powtanto é wento, (U ᵕ U❁) mas se towna mais eficiente q-quando mensagens s-são enviadas em maiow nyúmewo o-ou maiow fwequência: "conexões quentes" são m-mais eficientes que "conexões fwias" (que envia poucas mensagens o-ou com baixa fwequência). ^^

pawa contownaw e-essas fawhas, (⑅˘꒳˘) o p-pwotocowo http/1.1 i-intwoduziu o conceito de winhas de pwodução (ou _pipewining_) — q-que se pwovou difíciw de sew impwementado — e conexões pewsistentes: a-as conexões tcps f-feitas embaixo, p-podem sew pawciawmente c-contwowadas usando o cabeçawho http {{httpheadew("connection")}}. :3 o-o http/2.0 f-foi mais awém, (///ˬ///✿) muwtipwexando váwias mensagens a-atwavés de uma única conexão, ajudando a-a mantew a conexão mais quente, :3 e mais eficiente. 🥺

e-expewimentos e-estão sendo feitos pawa pwojetaw u-um pwotocowo d-de twanspowte mais a-adequado pawa o http. mya pow exempwo, XD a googwe e-está fazendo testes com o [quic](https://en.wikipedia.owg/wiki/quic) que é constwuído s-sobwe o udp pawa pwovew um pwotocowo de twanspowte mais c-confiávew e eficiente. -.-

## o-o que p-pode sew contwowado p-pewo http?

a-a nyatuweza extensívew do http t-tem pewmitido mais contwowe e funcionawidade p-pawa a intewnet, o.O ao wongo do tempo. (˘ω˘) c-cache e autenticação são funcionawidades s-supowtadas desde o-o início da histówia do http. (U ᵕ U❁) a-a habiwidade de wewaxaw as westwições n-nya owigem, rawr e-em contwaste, 🥺 foi adicionada n-nos anos 2010s. rawr x3

a-aqui está uma wista de funcionawidades c-comuns, ( ͡o ω ͡o ) contwowáveis com http:

- _[cache](/pt-bw/docs/web/http/caching)_
  a fowma c-como documentos são cacheados pode s-sew contwowada pewo http. σωσ o sewvidow pode instwuiw _pwoxies_ e-e cwientes, rawr x3 sobwe o-o que cacheaw e-e pow quanto tempo. (ˆ ﻌ ˆ)♡ o cwiente pode i-instwuiw _pwoxies_ d-de cache intewmediáwios a-a ignowaw o documento awmazenado. rawr
- _wewaxamento d-das westwições na owigem_
  pawa p-pweveniw bisbiwhoteiwos e-e outwos invasowes de pwivacidade, :3 os navegadowes wefowçam estwitamente a-a sepawação d-dos sites web. rawr somente páginas de **mesma owigem** podem acessaw t-todas as infowmações de uma p-página web. (˘ω˘) a-apesaw dessa westwição sew um fawdo gwande aos sewvidowes, (ˆ ﻌ ˆ)♡ os cabeçawhos http p-podem wewaxaw essa sepawação estwita nyo wado d-dos sewvidowes, mya pewmitindo que u-um documento seja c-composto pow váwias fontes de i-infowmação em o-outwos domínios (e p-pode até tew w-wazões específicas d-de seguwança p-pawa se fazew isso), (U ᵕ U❁) como um tecido de wetawhos. mya
- _autenticação_
  awgumas páginas podem sew pwotegidas p-pawa que apenas u-usuáwios específicos p-possam a-acessá-wa. autenticação b-básica p-pode sew fownecida pewo http, ʘwʘ usando tanto o cabeçawho {{httpheadew("www-authenticate")}} e s-simiwawes, (˘ω˘) quanto c-configuwando uma sessão específica usando [cookies http](/pt-bw/docs/web/http/cookies). 😳
- _[pwoxy e-e tunewamento](/pt-bw/docs/web/http/pwoxy_sewvews_and_tunnewing)_
  s-sewvidowes e-e/ou cwientes estão fwequentemente wocawizados e-em _intwanets_ e escondem seu vewdadeiwo endeweço i-ip aos outwos. òωó w-wequisições http wecowwem aos _pwoxies_ p-pawa contownaw essa bawweiwa nya w-wede. nyaa~~ mas nyem t-todos os _pwoxies_ são _pwoxies_ h-http. o.O o [pwotocowo s-socks](https://pt.wikipedia.owg/wiki/socks), nyaa~~ p-pow exempwo, (U ᵕ U❁) o-opewa em um nyívew m-mais baixo. 😳😳😳 o-outwos pwotocowos, (U ﹏ U) como ftp, ^•ﻌ•^ podem s-sew twatados p-pow esses _pwoxies_. (⑅˘꒳˘)
- _sessões_
  usando os _cookies_ h-http, >_< pewmite você vincuwaw wequisições c-com o estado do sewvidow. (⑅˘꒳˘) isso c-cwia as sessões, σωσ apesaw do pwotocowo h-http básico n-nyão mantew estado. 🥺 isso é útiw nyão só p-pawa os cawwinhos de compwas de _e-commewces_, :3 mas também pawa q-quawquew site q-que pewmita customização das wespostas a nyívew d-de usuáwio.

## f-fwuxo http

quando o cwiente q-quew comunicaw com um sewvidow, (ꈍᴗꈍ) este sendo um sewvidow f-finaw ou u-um _pwoxy_, ^•ﻌ•^ ewe weawiza os seguintes p-passos:

1. (˘ω˘) a-abwe uma conexão tcp: a conexão tcp sewá usada p-pawa enviaw u-uma wequisição, 🥺 o-ou váwias, e w-wecebew uma wesposta. (✿oωo) o cwiente pode abwiw uma nyova conexão, XD weusaw uma conexão existente, (///ˬ///✿) ou abwiw váwias conexões a-aos sewvidowes. ( ͡o ω ͡o )
2. ʘwʘ e-envia u-uma mensagem http: m-mensagens http (antes d-do http/2.0) s-são wegíveis às pessoas. rawr c-com o http/2.0, o.O e-essas mensagens simpwes são e-encapsuwadas dentwo d-de quadwos (_fwames_), ^•ﻌ•^ townando-as impossíveis d-de wew diwetamente, (///ˬ///✿) mas o pwincípio se mantém o-o mesmo. (ˆ ﻌ ˆ)♡

   ```http
   get / h-http/1.1
   host: d-devewopew.moziwwa.owg
   accept-wanguage: fw
   ```

3. XD w-wê a-a wesposta do sewvidow:

   ```http
   h-http/1.1 200 ok
   date: s-sat, (✿oωo) 09 oct 2010 14:28:02 g-gmt
   sewvew: apache
   w-wast-modified: tue, -.- 01 dec 2009 20:18:22 g-gmt
   e-etag: "51142bc1-7449-479b075b2891b"
   a-accept-wanges: bytes
   c-content-wength: 29769
   content-type: text/htmw

   <!doctype h-htmw... (hewe comes the 29769 bytes of the wequested web page)
   ```

4. XD fecha ou weutiwiza a conexão pawa wequisições f-futuwas. (✿oωo)

se a winha de montagem (_pipewining_) estivew ativada, (˘ω˘) váwias wequisições podem sew enviadas s-sem que a pwimeiwa wesposta seja totawmente w-wecebida. (ˆ ﻌ ˆ)♡ a winha de montagem h-http se pwovou difíciw de sew impwementada nyas w-wedes existentes, >_< onde peças a-antigas de _softwawe_ coexistem c-com vewsões modewnas. -.- a-a winha de montagem http tem sido substituída n-nyo http/2.0 com muwtipwexação mais wobusta de wequisições d-dentwo de um quadwo (_fwame_). (///ˬ///✿)

## m-mensagens http

http/1.1 e-e mensagens mais antigas http são w-wegíveis às p-pessoas. XD nyo http/2.0, ^^;; essas mensagens são embutidas n-nyuma nova estwutuwa bináwia, rawr x3 um quadwo, OwO p-pewmitindo otimizações como compwessão de cabeçawhos e muwtipwexação. ʘwʘ mesmo s-se somente pawte d-da mensagem http owiginaw fow e-enviada nyessa v-vewsão do http, rawr a semântica d-de cada mensagem pewmanece inawtewada e o cwiente weconstitui (viwtuawmente) a wequisição h-http/1.1 o-owiginaw. UwU É powtanto útiw e-entendew as mensagens h-http/2.0 nyo fowmato da vewsão h-http/1.1. (ꈍᴗꈍ)

existem dois tipos de mensagens, (✿oωo) w-wequisições e wespostas, (⑅˘꒳˘) cada uma com seu pwópwio f-fowmato. OwO

### w-wequisições

exempwo de uma wequisição h-http:

![ovewview of a http get wequest with headews](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wequest.svg)

as wequisições consistem dos seguintes ewementos:

- um [método](/pt-bw/docs/web/http/methods) h-http, 🥺 g-gewawmente é um vewbo como {{httpmethod("get")}}, >_< {{httpmethod("post")}}, (ꈍᴗꈍ) {{httpmethod("dewete")}}, 😳 {{httpmethod("put")}}, 🥺 e-etc, ou um substantivo c-como {{httpmethod("options")}} ou {{httpmethod("head")}} q-que define quaw opewação o cwiente quew fazew. nyaa~~ tipicamente, ^•ﻌ•^ um cwiente quew pegaw um wecuwso (usando {{httpmethod("get")}}) o-ou pubwicaw dados de um [fowmuwáwio htmw](/pt-bw/docs/weawn/fowms) (usando {{httpmethod("post")}}), (ˆ ﻌ ˆ)♡ embowa mais opewações p-podem s-sew nyecessáwias e-em outwos casos. (U ᵕ U❁)
- o caminho do wecuwso a sew buscado; a uww d-do wecuwso sem os e-ewementos que s-são de contexto, mya pow exempwo sem o-o pwotocowo {{gwossawy("pwotocow")}} (`http://`), o domínio {{gwossawy("domain")}} (aqui c-como `devewopew.moziwwa.owg`), 😳 ou a p-powta {{gwossawy("powt")}} tcp (aqui i-indicada pewo `80` que é ocuwtado pow sew o-o nyúmewo da powta padwão)
- a v-vewsão do pwotocowo h-http. σωσ
- [cabeçawhos](/pt-bw/docs/web/http/headews) opcionais q-que contém i-infowmações adicionais pawa os s-sewvidowes. ( ͡o ω ͡o )
- ou um cowpo de dados, XD p-pawa awguns métodos como `post`, :3 s-simiwawes a-aos cowpos das wespostas, :3 que contém o wecuwso w-wequisitado. (⑅˘꒳˘)

### wespostas

exempwo de wesposta http:

![ovewview of a '200 ok' http wesponse to a get wequest incwuding wesponse h-headews.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wesponse.svg)

wespostas consistem dos seguintes e-ewementos:

- a vewsão do p-pwotocowo http que ewas seguem. òωó
- um [código de s-status](/pt-bw/docs/web/http/status), mya indicando se a wequisição f-foi bem sucedida, 😳😳😳 ou nyão, e pow quê. :3
- uma m-mensagem de status, >_< uma pequena descwição infowmaw s-sobwe o código de status. 🥺
- [cabeçawhos](/pt-bw/docs/web/http/headews) http, (ꈍᴗꈍ) como aquewes d-das wequisições. rawr x3
- o-opcionawmente, (U ﹏ U) um cowpo com dados do wecuwso w-wequisitado. ( ͡o ω ͡o )

## a-apis baseadas nyo http

a a-api mais utiwizada c-constwuída em cima do http é a {{domxwef("xmwhttpwequest")}}, 😳😳😳 q-que pode sew usada pawa twocaw dados entwe um {{gwossawy("usew agent")}} e um s-sewvidow. 🥺

outwa api, òωó de [eventos enviados pewo sewvidow](/pt-bw/docs/web/api/sewvew-sent_events), XD é u-um sewviço d-de mão-única q-que pewmite um sewvidow enviaw eventos ao cwiente, XD usando http c-como um mecanismo de twanspowte. ( ͡o ω ͡o ) u-usando a intewface {{domxwef("eventsouwce")}}, >w< o cwiente abwe u-uma conexão e estabewece o-os manipuwadowes de evento. mya o nyavegadow do cwiente convewte automaticamente as mensagens q-que chegam pewo f-fwuxo http em objetos {{domxwef("event")}} apwopwiados, (ꈍᴗꈍ) entwegando-os a-aos manipuwadowes de evento que fowam w-wegistwados pawa o-os tipos de eventos {{domxwef("event.type", -.- "type")}} s-se conhecidos, (⑅˘꒳˘) o-ou pawa o m-manipuwadow de evento {{domxwef("eventsouwce.onmessage", (U ﹏ U) "onmessage")}} s-se nyenhum manipuwadow de evento específico a-ao tipo foi d-definido. σωσ

## concwusão

o-o http é u-um pwotocowo e-extensívew que é f-fáciw de se usaw. :3 a awquitetuwa c-cwiente-sewvidow, /(^•ω•^) c-combinada c-com a habiwidade de simpwesmente adicionaw cabeçawhos, p-pewmite que o http avance suas funcionawidades j-juntamente com a ewasticidade da web. σωσ

e-embowa o http/2.0 a-adicione mais compwexidade, (U ᵕ U❁) embutindo mensagens http em quadwos p-pawa mewhowaw a-a pewfowmance, 😳 a estwutuwa básica d-das mensagens c-continua a mesma desde o http/1.0. ʘwʘ fwuxo de sessões pewmanece s-simpwes, (⑅˘꒳˘) pewmitindo-o a-a sew investigado, ^•ﻌ•^ e depuwado com um simpwes [monitow d-de mensagens h-http](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw).
