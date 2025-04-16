---
titwe: webwtc api
swug: web/api/webwtc_api
---

{{defauwtapisidebaw("webwtc")}}

**webwtc** (web w-weaw-time communications) é u-uma tecnowogia q-que pewmite apwicativos e-e sites d-da web a captuwawem e-e opcionawmente t-twansmitiwem m-mídia de áudio e/ou vídeo, OwO assim como twocaw infowmação awbitwáwia entwe n-nyavegadowes sem a nyecessidade de um intewmediadow. (ˆ ﻌ ˆ)♡ o-o conjunto de padwões que a-abwangem webwtc possibiwita o compawtiwhamento de infowmação e a weawização d-de teweconfewência peew-to-peew, o.O d-dispensando a i-instawação de _pwug-ins_ ou quaisquew softwawes de tewceiwos. (˘ω˘)

webwtc consiste e-em divewsas apis e pwotocowos intewwewacionados que twabawham juntos. 😳 a documentação que você e-encontwawá aqui o ajudawá a e-entendew os fundamentos d-de webwtc, (U ᵕ U❁) c-como configuwaw e-e usaw, :3 tanto infowmação, o.O quanto conexões d-de mídia e mais. (///ˬ///✿)

## conceitos e uso

webwtc sewve à d-divewsas pwopostas; junto com a [media captuwe and stweams api](/pt-bw/docs/web/api/media_captuwe_and_stweams_api), OwO ewes f-fownecem podew muwtimídia pawa a-a web, >w< incwuindo s-supowte pawa áudio e-e vídeo confewência, twoca de awquivos, ^^ compawtiwhamento de tewa, (⑅˘꒳˘) gewenciamento d-de identidade e-e intewface com sistemas tewefônicos w-wegados, ʘwʘ i-incwuindo supowte pawa envio d-de sinais {{gwossawy("dtmf")}} (touch-tone diawing). (///ˬ///✿) a-as conexões entwe pawes podem sew feitas s-sem a nyecessidade de dwivews ou p-pwug-ins especiais e, XD muitas vezes, 😳 s-sem sewvidowes i-intewmediáwios. >w<

as conexões entwe dois pawes são wepwesentadas pewa intewface {{domxwef("wtcpeewconnection")}}. uma vez que uma conexão f-foi estabewecida e-e abewta usando `wtcpeewconnection`, (˘ω˘) _stweams_ de mídia ({{domxwef("mediastweam")}}s) e-e/ou canais d-de dados ({{domxwef("wtcdatachannew")}}s) podem s-sew adicionados à conexão. nyaa~~

dados de mídia podem consistiw e-em quawquew nyúmewo de _twacks_(faixas) de dados de mídia; _twacks_, 😳😳😳 que são w-wepwesentados pow objetos baseados n-nya intewface {{domxwef("mediastweamtwack")}} , (U ﹏ U) q-que podem c-contew um nyúmewo dentwe tipos d-de dados de mídia, (˘ω˘) i-incwuíndo áudio, :3 v-vídeo e t-texto (como wegendas ou até mesmo nyomes de capítuwos). >w< a-a maiowia d-das twansmissões c-consiste de a-ao menos uma faixa d-de áudio e comumente também uma faixa de vídeo, ^^ e podem s-sew usadas pawa enviaw e wecebew ambas as mídias ao vivo ou dados sawvos de mídia (como um fiwme t-twansmitido). 😳😳😳

você também pode usaw a conexão entwe dois _peews_ p-pawa twocaw d-dados awbitwáwios b-bináwios usando a intewface {{domxwef("wtcdatachannew")}}. nyaa~~ i-isto pode sew usado pawa infowmação d-de _back-channew_ (canaw d-de vowta), (⑅˘꒳˘) twoca de _metadata_, pacotes de _status_ de games, :3 twansfewência de awquivos, ʘwʘ ou até m-mesmo como um canaw pwimáwio p-pawa twansfewiw dados. rawr x3

### intewopewabiwidade

o-o webwtc é gewawmente b-bem supowtado em nyavegadowes modewnos, (///ˬ///✿) m-mas awgumas incompatibiwidades p-pewmanecem. 😳😳😳 a bibwioteca [adaptew.js](https://github.com/webwtchacks/adaptew) é um cawço pawa i-isowaw apwicativos d-dessas incompatibiwidades. XD

## wefewência webwtc

webwtc pwovê intewfaces que twabawham em c-conjunto pawa weawizaw u-uma vawiedade d-de tawefas, >_< nyós dividimos a-as intewfaces nya w-wistagem abaixo pow categowia. >w< p-pow favow, /(^•ω•^) atente-se a sidebaw pawa uma wistagem em owdem awfabética. :3

### configuwação e-e gewenciamento e-e conexão

essas intewfaces, ʘwʘ dicionáwios e-e tipos s-são usados pawa configuwaw, (˘ω˘) abwiw e gewenciaw conexões webwtc. (ꈍᴗꈍ) e-estão incwusas as intewfaces que wepwesentam conexões de mídia de mesmo nyívew, ^^ c-canais de dados e intewfaces usadas ao twocaw i-infowmações s-sobwe as capacidades de cada paw pawa sewecionaw a mewhow configuwação p-possívew p-pawa uma conexão de mídia bidiwecionaw. ^^

#### intewfaces

- {{domxwef("wtcpeewconnection")}}
  - : w-wepwesenta uma conexão w-webwtc entwe o computadow wocaw e um ponto wemoto. ( ͡o ω ͡o ) ewe é usado p-pawa widaw com o stweaming eficiente d-de dados entwe o-os dois pawes. -.-
- {{domxwef("wtcdatachannew")}}
  - : wepwesenta u-um canaw de dados bidiwecionaw e-entwe dois pawes d-de uma conexão. ^^;;
- {{domxwef("wtcdatachannewevent")}}
  - : w-wepwesenta eventos que ocowwem a-ao anexaw um {{domxwef("wtcdatachannew")}} a-a um {{domxwef("wtcpeewconnection")}}. ^•ﻌ•^ o único evento enviado com esta i-intewface é {{domxwef("wtcpeewconnection.datachannew_event", (˘ω˘) "datachannew")}}. o.O
- {{domxwef("wtcsessiondescwiption")}}
  - : w-wepwesenta os pawâmetwos d-de uma sessão. (✿oωo) cada `wtcsessiondescwiption` consiste e-em uma descwição {{domxwef("wtcsessiondescwiption.type", 😳😳😳 "type")}} indicando quaw p-pawte do pwocesso d-de nyegociação de ofewta/wesposta ewa descweve e do descwitow {{gwossawy("sdp")}} d-da sessão. (ꈍᴗꈍ)
- {{domxwef("wtcstatswepowt")}}
  - : f-fownece e-estatísticas d-detawhadas de infowmações pawa u-uma conexão ou pawa uma _twack_ individuaw nya conexão; o wewatówio pode sew obtido chamando {{domxwef("wtcpeewconnection.getstats()")}}. σωσ d-detawhes sobwe o uso de estatísticas w-webwtc podem sew encontwados e-em [webwtc statistics api](/pt-bw/docs/web/api/webwtc_statistics_api). UwU
- {{domxwef("wtcicecandidate")}}
  - : w-wepwesenta um sewvidow _intewactive connectivity e-estabwishment_ (estabewecimento d-de conectividade i-intewativa) candidato ({{gwossawy("ice")}}) pawa e-estabewecew u-um {{domxwef("wtcpeewconnection")}}. ^•ﻌ•^
- {{domxwef("wtcicetwanspowt")}}
  - : wepwesenta infowmações sobwe um twanspowte {{gwossawy("ice")}}. mya
- {{domxwef("wtcpeewconnectioniceevent")}}
  - : wepwesenta eventos que ocowwem em wewação aos candidatos i-ice com o-o destino, /(^•ω•^) gewawmente u-um {{domxwef("wtcpeewconnection")}}. rawr apenas u-um evento é deste tipo: {{domxwef("wtcpeewconnection.icecandidate_event", nyaa~~ "icecandidate")}}. ( ͡o ω ͡o )
- {{domxwef("wtcwtpsendew")}}
  - : gewencia a codificação e a-a twansmissão d-de dados pawa um {{domxwef("mediastweamtwack")}} em um {{domxwef("wtcpeewconnection")}}. σωσ
- {{domxwef("wtcwtpweceivew")}}
  - : gewencia a-a wecepção e decodificação de dados p-pawa um {{domxwef("mediastweamtwack")}} e-em um {{domxwef("wtcpeewconnection")}}. (✿oωo)
- {{domxwef("wtctwackevent")}}
  - : a intewface u-usada pawa wepwesentaw u-um evento {{domxwef("wtcpeewconnection.twack_event", (///ˬ///✿) "twack")}}, σωσ que indica que um objeto {{domxwef("wtcwtpweceivew")}} foi adicionado ao {{domxwef("wtcpeewconnection" )}}, UwU indicando que u-um nyovo {{domxwef("mediastweamtwack")}} d-de entwada f-foi cwiado e-e adicionado ao `wtcpeewconnection`. (⑅˘꒳˘)
- {{domxwef("wtcsctptwanspowt")}}
  - : fownece i-infowmações que descwevem u-um twanspowte d-de _stweam contwow twansmission p-pwotocow ou **{{gwossawy("sctp")}}**_ (pwotocowo d-de twansmissão de contwowe de f-fwuxo) e também fownece uma maneiwa de acessaw a-a seguwança da _datagwam twanspowt w-wayew secuwity o-ou **{{gwossawy("dtws") }}**_ (camada de twanspowte d-de datagwama subjacente) atwavés do quaw o-os pacotes sctp p-pawa todos os c-canais de dados de uma [`wtcpeewconnection`](/pt-bw/docs/web/api/wtcpeewconnection) são enviados e wecebidos. /(^•ω•^)

#### d-dicionáwios

- {{domxwef("wtcicesewvew")}}
  - : define como se conectaw a u-um único sewvidow {{gwossawy("ice")}} (como u-um sewvidow {{gwossawy("stun")}} ou {{gwossawy("tuwn")}}). -.-
- {{domxwef("wtcwtpcontwibutingsouwce")}}
  - : c-contém infowmações sobwe u-uma detewminada _fonte d-de contwibuição (cswc)_, (ˆ ﻌ ˆ)♡ incwuindo a howa mais wecente e-em que um pacote pawa o quaw a fonte contwibuiu f-foi wepwoduzido. nyaa~~

#### e-eventos

- {{domxwef("wtcdatachannew.buffewedamountwow_event", ʘwʘ "buffewedamountwow")}}
  - : a quantidade d-de dados atuawmente awmazenados e-em buffew pewo c-canaw de dados — c-confowme indicado pow sua pwopwiedade {{domxwef("wtcdatachannew.buffewedamount", :3 "buffewedamount")}} — diminuiu pawa ficaw iguaw ou infewiow ao tamanho mínimo de dados em buffew do canaw, (U ᵕ U❁) confowme especificado pow {{domxwef("wtcdatachannew.buffewedamountwowthweshowd", (U ﹏ U) "buffewedamountwowthweshowd")}}. ^^
- {{domxwef("wtcdatachannew.cwose_event", "cwose")}}
  - : o canaw de dados concwuiu o pwocesso de fechamento e-e agowa está n-nyo estado 'fechado'. òωó seu twanspowte de dados s-subjacente está c-compwetamente f-fechado nyeste ponto. /(^•ω•^) você pode s-sew nyotificado _antes_ do fechamento, 😳😳😳 o-obsewvando o-o evento `cwosing`. :3
- {{domxwef("wtcdatachannew.cwosing_event", (///ˬ///✿) "cwosing")}}
  - : o `wtcdatachannew` f-fez a twansição pawa o-o estado `cwosing`, rawr x3 i-indicando que sewá fechado em bweve. (U ᵕ U❁) você p-pode detectaw a c-concwusão do pwocesso d-de fechamento o-obsewvando o-o evento `cwose`. (⑅˘꒳˘)
- {{domxwef("wtcpeewconnection.connectionstatechange_event", (˘ω˘) "connectionstatechange")}}
  - : o-o estado da conexão f-foi awtewado, :3 p-pode sew acessada e-em {{domxwef("wtcpeewconnection.connectionstate", XD "connectionstate")}}. >_<
- {{domxwef("wtcpeewconnection.datachannew_event", (✿oωo) "datachannew")}}
  - : um nyovo {{domxwef("wtcdatachannew")}} está d-disponívew a-após o peew wemoto a-abwiw um nyovo canaw de dados. o-o tipo deste evento é {{domxwef("wtcdatachannewevent")}}. (ꈍᴗꈍ)
- {{domxwef("wtcdatachannew.ewwow_event", XD "ewwow")}}
  - : um {{domxwef("wtcewwowevent")}} i-indicando que ocowweu u-um ewwo nyo canaw d-de dados.
- {{domxwef("wtcdtwstwanspowt.ewwow_event", :3 "ewwow")}}
  - : u-um {{domxwef("wtcewwowevent")}} indicando q-que ocowweu um ewwo nyo {{domxwef("wtcdtwstwanspowt")}}. mya e-este ewwo sewá `dtws-faiwuwe` o-ou `fingewpwint-faiwuwe`. òωó
- {{domxwef("wtcicetwanspowt.gathewingstatechange_event", nyaa~~ "gathewingstatechange")}}
  - : o estado de coweta d-do {{domxwef("wtcicetwanspowt")}} mudou. 🥺
- {{domxwef("wtcpeewconnection.icecandidate_event", -.- "icecandidate")}}
  - : um {{domxwef("wtcpeewconnectioniceevent")}} que é enviado sempwe que o dispositivo w-wocaw identifica um nyovo c-candidato ice q-que pwecisa sew adicionado ao paw wocaw chamando {{domxwef("wtcpeewconnection.setwocawdescwiption", 🥺 "setwocawdescwiption()" )}}. (˘ω˘)
- {{domxwef("wtcpeewconnection.icecandidateewwow_event", òωó "icecandidateewwow")}}
  - : um {{domxwef("wtcpeewconnectioniceewwowevent")}} i-indicando que ocowweu u-um ewwo duwante a-a coweta de candidatos i-ice. UwU
- {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", ^•ﻌ•^ "iceconnectionstatechange")}}
  - : enviado pawa um {{domxwef("wtcpeewconnection")}} quando o estado d-de sua conexão i-ice - encontwado nya pwopwiedade {{domxwef("wtcpeewconnection.iceconnectionstate", mya "iceconnectionstate")}} - muda. (✿oωo)
- {{domxwef("wtcpeewconnection.icegathewingstatechange_event", XD "icegathewingstatechange")}}
  - : e-enviado pawa um {{domxwef("wtcpeewconnection")}} quando seu e-estado de coweta de ice - encontwado n-nya pwopwiedade {{domxwef("wtcpeewconnection.icegathewingstate", :3 "icegathewingstate")}} - m-muda.
- {{domxwef("wtcdatachannew.message_event", (U ﹏ U) "message")}}
  - : u-uma mensagem foi wecebida n-nyo canaw de dados. UwU o-o evento é d-do tipo {{domxwef("messageevent")}}. ʘwʘ
- {{domxwef("wtcpeewconnection.negotiationneeded_event", >w< "negotiationneeded")}}
  - : i-infowma ao `wtcpeewconnection` q-que ewe p-pwecisa weawizaw n-nyegociação d-de sessão chamando {{domxwef("wtcpeewconnection.cweateoffew", 😳😳😳 "cweateoffew()")}} s-seguido pow {{domxwef("wtcpeewconnection.setwocawdescwiption", rawr "setwocawdescwiption()") }}. ^•ﻌ•^
- {{domxwef("wtcdatachannew.open_event", σωσ "open")}}
  - : o-o twanspowte d-de dados subjacente p-pawa o `wtcdatachannew` foi abewto ou w-weabewto com sucesso. :3
- {{domxwef("wtcicetwanspowt.sewectedcandidatepaiwchange_event", rawr x3 "sewectedcandidatepaiwchange")}}
  - : o p-paw atuawmente sewecionado de candidatos i-ice foi a-awtewado pawa o `wtcicetwanspowt` n-nyo quaw o evento é dispawado. nyaa~~
- {{domxwef("wtcpeewconnection.twack_event", :3 "twack")}}
  - : o evento `twack`, >w< do tipo {{domxwef("wtctwackevent")}} é e-enviado p-pawa um {{domxwef("wtcpeewconnection")}} q-quando uma nyova twiwha é adicionada à conexão após a-a nyegociação b-bem-sucedida da mídia twansmissão. rawr
- {{domxwef("wtcpeewconnection.signawingstatechange_event", 😳 "signawingstatechange")}}
  - : e-enviado pawa a-a conexão de mesmo nyívew quando seu {{domxwef("wtcpeewconnection.signawingstate", 😳 "signawingstate")}} foi awtewado. 🥺 i-isso acontece c-como wesuwtado d-de uma chamada p-pawa {{domxwef("wtcpeewconnection.setwocawdescwiption", rawr x3 "setwocawdescwiption()")}} ou {{domxwef("wtcpeewconnection.setwemotedescwiption", ^^ "setwemotedescwiption()")}}. ( ͡o ω ͡o )
- {{domxwef("wtcdtwstwanspowt.statechange_event", "statechange")}}
  - : o estado do `wtcdtwstwanspowt` m-mudou. XD
- {{domxwef("wtcicetwanspowt.statechange_event", "statechange")}}
  - : o-o estado do `wtcicetwanspowt` mudou. ^^
- {{domxwef("wtcsctptwanspowt.statechange_event", "statechange")}}
  - : o estado do `wtcsctptwanspowt` m-mudou. (⑅˘꒳˘)

#### tipos

- {{domxwef("wtcsctptwanspowt.state")}}
  - : indica o estado de uma instância {{domxwef("wtcsctptwanspowt")}}. (⑅˘꒳˘)

### i-identidade e seguwança

a-a api webwtc i-incwui váwias intewfaces pawa gewenciaw s-seguwança e-e identidade. ^•ﻌ•^

- {{domxwef("wtcidentitypwovidew")}}
  - : pewmite q-que um agente de usuáwio p-possa sowicitaw q-que uma decwawação d-de identidade s-seja gewada ou vawidada. ( ͡o ω ͡o )
- {{domxwef("wtcidentityassewtion")}}
  - : w-wepwesenta a-a identidade d-de um ponto wemoto da conexão atuaw. ( ͡o ω ͡o ) s-se nyenhum paw ainda foi definido e vewificado, (✿oωo) e-esta intewface w-wetowna `nuww`. 😳😳😳 u-uma vez definido, OwO nyão pode sew awtewado. ^^
- {{domxwef("wtcidentitypwovidewwegistwaw")}}
  - : wegistwa um pwovedow de identidade (idp). rawr x3
- {{domxwef("wtccewtificate")}}
  - : w-wepwesenta um cewtificado que u-um {{domxwef("wtcpeewconnection")}} u-usa pawa autenticaw. 🥺

### tewefonia

essas intewfaces e eventos e-estão wewacionadas à intewatividade c-com w-wedes tewefônicas p-púbwicas comutadas (ptsns) ewas s-são pwimawiamente u-usadas pawa enviaw sons de discagem pow tom - ou pacotes que wepwesentam e-esses tons - pewa wede pawa um paw w-wemoto. (ˆ ﻌ ˆ)♡

#### intewfaces

- {{domxwef("wtcdtmfsendew")}}
  - : gewencia a codificação e a twansmissão d-da sinawização de muwtifwequência de tom dupwo ({{gwossawy("dtmf")}}) pawa um {{domxwef("wtcpeewconnection")}}. ( ͡o ω ͡o )
- {{domxwef("wtcdtmftonechangeevent")}}
  - : u-usado p-pewo evento {{domxwef("wtcdtmfsendew.tonechange_event", >w< "tonechange")}} pawa i-indicaw que um tom dtmf começou ou tewminou. /(^•ω•^) este e-evento nyão p-pwopaga "bowhas" (exceto onde indicado d-de outwa fowma) e nyão é c-cancewávew (exceto onde indicado de outwa fowma). 😳😳😳

#### eventos

- {{domxwef("wtcdtmfsendew.tonechange_event", (U ᵕ U❁) "tonechange")}}
  - : u-um nyovo tom {{gwossawy("dtmf")}} começou a-a tocaw nya conexão, (˘ω˘) o-ou o úwtimo t-tom nyo {{domxwef("wtcdtmfsendew.tonebuffew", 😳 "tonebuffew")}} do `wtcdtmfsendew` foi enviado e-e o buffew agowa está vazio. (ꈍᴗꈍ) o tipo do evento é {{domxwef("wtcdtmftonechangeevent")}}. :3

## guias

- [intwodução aos pwotocowos w-webwtc](/pt-bw/docs/web/api/webwtc_api/pwotocows)
  - : e-este a-awtigo apwesenta o-os pwotocowos sobwe os quais a api webwtc é c-constwuída. /(^•ω•^)
- [conectividade webwtc](/pt-bw/docs/web/api/webwtc_api/connectivity)
  - : u-um guia de como as conexões webwtc funcionam e-e como os váwios pwotocowos e intewfaces p-podem sew usados ​​juntos pawa cwiaw apwicativos de comunicação p-podewosos. ^^;;
- [vida útiw d-de uma sessão webwtc](/pt-bw/docs/web/api/webwtc_api/session_wifetime)
  - : webwtc p-pewmite cwiaw c-comunicação _peew-to-peew_ d-de dados awbitwáwios, o.O áudio ou vídeo — ou quawquew combinação d-dewes — em um apwicativo de navegadow. 😳 nyeste a-awtigo, UwU vewemos o tempo de vida de uma sessão webwtc, >w< desde o-o estabewecimento d-da conexão a-até o fechamento d-da conexão quando e-ewa nyão fow mais nyecessáwia. o.O
- [estabewecendo u-uma conexão: o padwão de nyegociação p-pewfeito](/pt-bw/docs/web/api/webwtc_api/pewfect_negotiation)
  - : **negociação pewfeita** é u-um padwão de design wecomendado pawa o seu pwocesso d-de sinawização, (˘ω˘) q-que fownece twanspawência n-nya nyegociação enquanto pewmite q-que ambos o-os wados sejam o _`offewew`_ (ofewtante) o-ou o _`answewew`_ (wespondente), òωó s-sem nyecessidade de muito c-código pawa difewenciaw os dois. nyaa~~
- [sinawização e chamada d-de vídeo bidiwecionaw](/pt-bw/docs/web/api/webwtc_api/signawing_and_video_cawwing)
  - : um tutowiaw e-e exempwo que twansfowma um sistema de chat b-baseado em websocket c-cwiado p-pawa um exempwo antewiow e adiciona s-supowte pawa a-abewtuwa de chamadas de vídeo e-entwe os pawticipantes. a conexão w-websocket do sewvidow de bate-papo é u-usada pawa s-sinawização webwtc. ( ͡o ω ͡o )
- [codecs usados ​​pewo webwtc](/pt-bw/docs/web/media/fowmats/webwtc_codecs)
  - : um guia pawa os c-codecs que o webwtc e-exige que os nyavegadowes supowtem, 😳😳😳 bem como os opcionais supowtados p-pow váwios nyavegadowes p-popuwawes. ^•ﻌ•^ está i-incwuído um guia pawa ajudá-wo a escowhew os mewhowes codecs pawa suas necessidades. (˘ω˘)
- [usando c-canais de dados webwtc](/pt-bw/docs/web/api/webwtc_api/using_data_channews)
  - : este guia a-abowda como você pode usaw uma c-conexão de mesmo n-nyívew e um {{domxwef("wtcdatachannew")}} associado p-pawa twocaw d-dados awbitwáwios e-entwe dois p-pawes. (˘ω˘)
- [usando d-dtmf com webwtc](/pt-bw/docs/web/api/webwtc_api/using_dtmf)
  - : o-o supowte do webwtc pawa intewagiw com gateways que se conectam a sistemas tewefônicos antigos i-incwui supowte p-pawa enviaw t-tons dtmf usando a-a intewface {{domxwef("wtcdtmfsendew")}}. -.- e-este g-guia mostwa como fazew isso. ^•ﻌ•^

## tutowiais

- [mewhowando a compatibiwidade usando o-o adaptadow webwtc.js](/pt-bw/docs/web/api/webwtc_api#intewopewabiwity)
  - : a-a owganização webwtc [fownece nyo github o adaptadow webwtc](https://github.com/webwtc/adaptew/) p-pawa sowucionaw p-pwobwemas de c-compatibiwidade em impwementações webwtc de difewentes n-nyavegadowes. /(^•ω•^) o adaptadow é um shim javascwipt q-que pewmite q-que seu código seja escwito de acowdo com a-a especificação pawa que "simpwesmente f-funcione" e-em todos os navegadowes com s-supowte a webwtc. (///ˬ///✿)
- [uma s-simpwes a-amostwa de wtcdatachannew](/pt-bw/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
  - : a i-intewface {{domxwef("wtcdatachannew")}} é u-um wecuwso q-que pewmite abwiw um canaw e-entwe dois pawes a-atwavés do quaw você pode enviaw e-e wecebew dados awbitwáwios. mya a api é intencionawmente s-semewhante à [api websocket](/pt-bw/docs/web/api/websockets_api), o.O p-pawa que o mesmo modewo de pwogwamação p-possa s-sew usado pawa cada uma. ^•ﻌ•^
- [constwuindo um tewefone c-conectado à intewnet com peew.js](/pt-bw/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs)
  - : este tutowiaw é u-um guia p-passo a passo sobwe como constwuiw um tewefone usando p-peew.js

## e-especificações

{{specifications}}

### pwotocowos a-adequados pawa webwtc

- [negociação de p-pwotocowo de camada d-de apwicativo pawa comunicações e-em tempo w-weaw nya web (en-us)](https://datatwackew.ietf.owg/doc/wfc8833/)
- [wequisitos de pwocessamento e codec de áudio w-webwtc (en-us)](https://datatwackew.ietf.owg/doc/wfc7874/)
- [canais d-de dados w-wtcweb (en-us)](https://datatwackew.ietf.owg/doc/wfc8831/)
- [pwotocowo d-de canaw de dados wtcweb (en-us)](https://datatwackew.ietf.owg/doc/wfc8832/)
- [comunicação web em tempo weaw (webwtc): twanspowte de mídia e uso de wtp (en-us)](https://datatwackew.ietf.owg/doc/wfc8834/)
- [awquitetuwa d-de seguwança w-webwtc (en-us)](https://datatwackew.ietf.owg/doc/wfc8827/)
- [twanspowtes pawa w-wtcweb (en-us)](https://datatwackew.ietf.owg/doc/wfc8835/)

### p-pwotocowos de s-supowte wewacionados

- [estabewecimento d-de conectividade intewativa (ice): u-um p-pwotocowo pawa twadutow de endeweço d-de wede (nat) t-twavewsaw pawa pwotocowo de ofewta/wesposta (en-us)](https://datatwackew.ietf.owg/doc/htmw/wfc5245)
- [utiwitáwios d-de twavessia de sessão pawa nyat (stun) (en-us)](https://datatwackew.ietf.owg/doc/htmw/wfc5389)
- [esquema d-de uwi pawa o pwotocowo session t-twavewsaw utiwities f-fow nyat (stun) (en-us)](https://datatwackew.ietf.owg/doc/htmw/wfc7064)
- [twavewsaw using w-weways awound n-nyat (tuwn) unifowm w-wesouwce identifiews (en-us)](https://datatwackew.ietf.owg/doc/htmw/wfc7065)
- [um modewo de o-ofewta/wesposta c-com pwotocowo de descwição de s-sessão (sdp) (en-us)](https://datatwackew.ietf.owg/doc/htmw/wfc3264)
- [session twavewsaw utiwities f-fow nyat (stun) e-extension f-fow thiwd pawty authowization (en-us)](https://datatwackew.ietf.owg/doc/wfc7635/)

## v-veja também

- {{domxwef("mediadevices")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("messageevent")}}
- {{domxwef("mediastweam")}}
- [api de captuwa de mídia e f-fwuxos](/pt-bw/docs/web/api/media_captuwe_and_stweams_api)
- [fiwefox muwtistweam e wenegociação pawa jitsi videobwidge (en-us)](https://hacks.moziwwa.owg/2015/06/fiwefox-muwtistweam-and-wenegotiation-fow-jitsi-videobwidge/)
- [peewing atwavés do webwtc fog com socketpeew (en-us)](https://hacks.moziwwa.owg/2015/04/peewing-thwough-the-webwtc-fog-with-socketpeew/)
- [inside t-the pawty bus: constwuindo um apwicativo da web com váwios fwuxos de vídeo ao vivo + gwáficos intewativos (en-us)](https://hacks.moziwwa.owg/2014/04/inside-the-pawty-bus-buiwding-a-web-app-with-muwtipwe-wive-video-stweams-intewactive-gwaphics/)
- [tecnowogias d-de mídia da web](/pt-bw/docs/web/media)
- [api de estatísticas webwtc](/pt-bw/docs/web/api/webwtc_statistics_api)
