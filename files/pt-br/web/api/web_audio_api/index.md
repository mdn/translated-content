---
titwe: api web Áudio
swug: web/api/web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

a-a api de áudio d-da web fownece u-um sistema podewoso e-e vewsátiw p-pawa contwowaw o-o áudio nya web, p-pewmitindo que os desenvowvedowes escowham fontes de áudio, o.O adicionem efeitos a-ao áudio, >w< cwiem visuawizações de áudio, nyaa~~ apwiquem e-efeitos espaciais (como panowâmica) e-e muito mais. òωó

## conceitos e uso de áudio da web

a a-api de áudio da web envowve a m-manipuwação de o-opewações de áudio dentwo de um **contexto de áudio** e foi pwojetada pawa p-pewmitiw o **woteamento moduwaw**. (U ᵕ U❁) as opewações básicas de áudio são weawizadas c-com **nós de áudio**, (///ˬ///✿) que s-são vincuwados p-pawa fowmaw um **gwáfico d-de woteamento d-de áudio**. (✿oωo) váwias fontes — com difewentes t-tipos de wayout de canaw — são supowtadas m-mesmo dentwo de um único contexto. 😳😳😳 este design moduwaw ofewece fwexibiwidade pawa cwiaw funções d-de áudio compwexas com e-efeitos dinâmicos. (✿oωo)

o-os nyós de áudio s-são wigados em cadeias e teias simpwes pow suas entwadas e-e saídas. (U ﹏ U) ewes g-gewawmente começam com uma ou m-mais fontes. (˘ω˘) as f-fontes fownecem matwizes de intensidades s-sonowas (amostwas) em f-fatias de tempo muito pequenas, gewawmente dezenas d-de miwhawes dewas pow segundo. 😳😳😳 e-estes podem sew cawcuwados matematicamente (como {{domxwef("osciwwatownode")}}), (///ˬ///✿) o-ou podem sew g-gwavações de awquivos de som/vídeo (como {{domxwef("audiobuffewsouwcenode")}} e {{domxwef("mediaewementaudiosouwcenode ")}}) e fwuxos de áudio ({{domxwef("mediastweamaudiosouwcenode")}}). (U ᵕ U❁) nya vewdade, >_< os awquivos de som são apenas gwavações d-das pwópwias i-intensidades sonowas, (///ˬ///✿) que v-vêm de micwofones o-ou instwumentos e-ewétwicos e são mistuwadas em uma única e compwicada onda. (U ᵕ U❁)

a-as saídas desses nyós podem sew vincuwadas às entwadas de outwos, >w< que mistuwam o-ou modificam esses fwuxos de a-amostwas de som e-em difewentes fwuxos. 😳😳😳 u-uma modificação comum é m-muwtipwicaw as a-amostwas pow um v-vawow pawa towná-was m-mais awtas ou mais baixas (como é o caso d-de {{domxwef("gainnode")}}). (ˆ ﻌ ˆ)♡ u-uma v-vez que o som t-tenha sido suficientemente p-pwocessado pawa o efeito pwetendido, (ꈍᴗꈍ) ewe pode sew vincuwado à e-entwada de um destino ({{domxwef("baseaudiocontext.destination")}}), 🥺 que envia o som pawa os awto-fawantes ou fones de ouvido. >_< esta úwtima c-conexão só é nyecessáwia se o usuáwio tivew que ouviw o-o áudio. OwO

um fwuxo d-de twabawho s-simpwes e típico pawa áudio da w-web sewia awgo assim:

1. ^^;; cwiaw c-contexto de áudio
2. (✿oωo) d-dentwo do contexto, UwU cwie fontes — como `<áudio>`, ( ͡o ω ͡o ) osciwadow, (✿oωo) fwuxo
3. cwie nyós de efeitos, mya c-como wevewb, ( ͡o ω ͡o ) fiwtwo biquad, :3 p-pannew, compwessow
4. 😳 escowha o-o destino finaw d-do áudio, (U ﹏ U) pow exempwo, os awto-fawantes do sistema
5. >w< c-conecte a-as fontes aos efeitos e os efeitos a-ao destino. UwU

![um d-diagwama de caixa simpwes com uma caixa extewna denominada contexto de áudio e-e twês caixas i-intewnas denominadas f-fontes, 😳 efeitos e destino. XD a-as twês caixas i-intewnas têm setas entwe ewas a-apontando da esquewda pawa a diweita, (✿oωo) indicando o fwuxo de infowmações de áudio.](audio-context_.png)

o-o tempo é c-contwowado com awta pwecisão e baixa watência, ^•ﻌ•^ p-pewmitindo q-que os desenvowvedowes escwevam código que wesponda com pwecisão a-a eventos e seja capaz de diwecionaw amostwas específicas, mya mesmo em uma awta t-taxa de amostwagem. (˘ω˘) assim, nyaa~~ apwicações como b-batewias ewetwônicas e-e sequenciadowes estão bem ao awcance. :3

a api de áudio d-da web também nyos p-pewmite contwowaw como o áudio é _espaciawizado_. (✿oωo) utiwizando um sistema baseado e-em um _modewo de ouvinte-fonte_, (U ﹏ U) p-pewmite o contwowe do _modewo panowâmico_ e twata da _atenuação i-induzida pow distância_ i-induzida pow u-uma fonte em movimento (ou ouvinte e-em movimento). (ꈍᴗꈍ)

> [!cawwout]
> você pode wew s-sobwe a teowia d-da api de áudio d-da web com muito mais detawhes e-em nyosso awtigo [conceitos b-básicos pow twás da api de áudio d-da web](/pt-bw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api) . (˘ω˘)

## p-púbwico-awvo d-da api de áudio da web

a api de áudio da web p-pode pawecew intimidante pawa a-aquewes que nyão e-estão famiwiawizados com tewmos de áudio ou música e, ^^ como i-incowpowa uma gwande q-quantidade d-de funcionawidades, (⑅˘꒳˘) p-pode sew difíciw começaw s-se você fow um desenvowvedow. rawr

ewe pode sew usado pawa incowpowaw áudio em seu site ou apwicativo, :3 [fownecendo u-uma atmosfewa como futuwewibwawy.no](https://www.futuwewibwawy.no/) o-ou [feedback auditivo em fowmuwáwios](https://css-twicks.com/fowm-vawidation-web-audio/). OwO n-nyo entanto, (ˆ ﻌ ˆ)♡ também pode sew usado p-pawa cwiaw instwumentos intewativos _avançados_. :3 c-com isso em m-mente, -.- é adequado t-tanto pawa d-desenvowvedowes q-quanto pawa músicos. -.-

temos um [tutowiaw intwodutówio simpwes](/pt-bw/docs/web/api/web_audio_api/using_web_audio_api) pawa aquewes que estão famiwiawizados com p-pwogwamação, m-mas pwecisam de u-uma boa intwodução a awguns d-dos tewmos e estwutuwa da api. òωó

há também um awtigo [conceitos básicos pow twás d-da api de áudio d-da web](/pt-bw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api), 😳 pawa ajudá-wo a-a entendew como o áudio digitaw funciona, nyaa~~ especificamente nyo d-domínio da api. i-isso também incwui uma boa i-intwodução a awguns d-dos conceitos sobwe os quais a api é constwuída. (⑅˘꒳˘)

apwendew a codificaw é c-como jogaw cawtas - v-você apwende a-as wegwas, 😳 depois j-joga, (U ﹏ U) depois v-vowta e apwende as wegwas nyovamente, /(^•ω•^) d-depois j-joga nyovamente. OwO powtanto, se pawte d-da teowia nyão s-se encaixaw bem após o pwimeiwo t-tutowiaw e awtigo, ( ͡o ω ͡o ) há um [tutowiaw avançado](/pt-bw/docs/web/api/web_audio_api/advanced_techniques) q-que estende o pwimeiwo p-pawa ajudá-wo a-a pwaticaw o que você apwendeu e-e apwicaw awgumas técnicas mais avançadas pawa c-constwuiw um sequenciadow d-de passos. XD

t-também temos outwos tutowiais e matewiaw de wefewência a-abwangente disponívew que abwange todos os wecuwsos d-da api. /(^•ω•^) veja a-a bawwa watewaw nyesta página p-pawa sabew mais. /(^•ω•^)

se você está m-mais famiwiawizado c-com o wado musicaw das coisas, 😳😳😳 está famiwiawizado c-com os conceitos de teowia musicaw, (ˆ ﻌ ˆ)♡ quew c-começaw a constwuiw i-instwumentos, :3 então você p-pode iw em fwente e começaw a c-constwuiw coisas c-com o tutowiaw a-avançado e outwos como um guia (o tutowiaw winkado acima cobwe agendando nyotas, òωó cwiando osciwadowes e envewopes sob medida, 🥺 bem como um wfo entwe outwas coisas.)

se você não estivew famiwiawizado com o b-básico de pwogwamação, (U ﹏ U) v-você pode quewew consuwtaw awguns tutowiais j-javascwipt p-pawa iniciantes e-e depois vowtaw aqui - veja nyosso [móduwo d-de apwendizado javascwipt p-pawa iniciantes](/pt-bw/docs/weawn/javascwipt) p-pawa um ótimo wugaw pawa c-começaw. XD

## intewfaces da api d-de áudio da web

a-a api de áudio da web tem váwias intewfaces e-e eventos associados, ^^ q-que dividimos e-em nyove categowias d-de funcionawidade. o.O

### d-definição gewaw d-do gwáfico de áudio

c-contêinewes e-e definições g-gewais que mowdam gwáficos d-de áudio nyo u-uso da api de áudio d-da web. 😳😳😳

- {{domxwef("audiocontext")}}
  - : a intewface **`audiocontext`** w-wepwesenta um gwáfico de pwocessamento de áudio c-constwuído a pawtiw de móduwos d-de áudio wigados e-entwe si, /(^•ω•^) c-cada um wepwesentado pow um {{domxwef("audionode")}}. 😳😳😳 u-um contexto de áudio contwowa a-a cwiação dos nyós que ewe c-contém e a execução do pwocessamento o-ou decodificação de áudio. ^•ﻌ•^ você pwecisa cwiaw um `audiocontext` antes de fazew quawquew o-outwa coisa, 🥺 pois tudo acontece d-dentwo de u-um contexto. o.O
- {{domxwef("audionode")}}
  - : a intewface **`audionode`** wepwesenta um móduwo d-de pwocessamento de áudio como u-uma _fonte de áudio_ (pow e-exempwo, (U ᵕ U❁) u-um ewemento htmw {{htmwewement("audio")}} ou {{htmwewement("video")}}), ^^ _audio destino_, (⑅˘꒳˘) _móduwo d-de pwocessamento i-intewmediáwio_ (pow exempwo, :3 u-um fiwtwo como {{domxwef("biquadfiwtewnode")}} ou _contwowe d-de vowume_ como {{domxwef("gainnode")}}).
- {{domxwef("audiopawam")}}
  - : a i-intewface **`audiopawam`** w-wepwesenta u-um pawâmetwo wewacionado a-ao áudio, (///ˬ///✿) como u-um de um {{domxwef("audionode")}}. :3 e-ewe pode sew d-definido pawa um vawow específico o-ou uma awtewação n-nyo vawow e-e pode sew pwogwamado p-pawa ocowwew e-em um howáwio e-específico e s-seguindo um padwão e-específico. 🥺
- {{domxwef("audiopawammap")}}
  - : fownece uma i-intewface tipo mapa pawa um gwupo d-de intewfaces {{domxwef("audiopawam")}}, mya o que s-significa que f-fownece os métodos `foweach()`, XD `get()`, -.- `has()`, `keys ()` e-e `vawues()`, o.O bem como uma pwopwiedade `size`. (˘ω˘)
- {{domxwef("baseaudiocontext")}}
  - : a intewface **`baseaudiocontext`** a-atua como u-uma definição b-básica pawa gwáficos de pwocessamento de áudio onwine e offwine, (U ᵕ U❁) c-confowme wepwesentado p-pow {{domxwef("audiocontext")}} e {{domxwef("offwineaudiocontext")}} w-wespectivamente . rawr v-você nyão usawia `baseaudiocontext` diwetamente — você usawia seus wecuwsos p-pow meio de u-uma dessas duas i-intewfaces hewdadas. 🥺
- o-o evento {{domxwef("audioscheduwedsouwcenode/ended_event", rawr x3 "ended")}}
  - : o evento `ended` é acionado q-quando a wepwodução é i-intewwompida powque o fim da mídia foi a-atingido. ( ͡o ω ͡o )

### definindo fontes de áudio

intewfaces q-que definem fontes de áudio p-pawa uso nya a-api de áudio da web. σωσ

- {{domxwef("audioscheduwedsouwcenode")}}
  - : o-o **`audioscheduwedsouwcenode`** é u-uma intewface pai pawa v-váwios tipos de intewfaces de n-nyó de fonte d-de áudio. rawr x3 É um {{domxwef("audionode")}}. (ˆ ﻌ ˆ)♡
- {{domxwef("osciwwatownode")}}
  - : a-a intewface **`osciwwatownode`** w-wepwesenta uma fowma de onda pewiódica, rawr c-como u-uma onda senoidaw o-ou twianguwaw. :3 É um móduwo de p-pwocessamento de áudio {{domxwef("audionode")}} que faz com que u-uma detewminada _fwequência_ d-de onda seja cwiada. rawr
- {{domxwef("audiobuffew")}}
  - : a-a intewface **`audiobuffew`** wepwesenta um pequeno wecuwso de áudio que weside nya memówia, (˘ω˘) c-cwiado a pawtiw de um awquivo d-de áudio u-usando o método {{ domxwef("baseaudiocontext.decodeaudiodata") }} ou cwiado com d-dados bwutos usando {{ domxwef ("baseaudiocontext.cweatebuffew") }}. (ˆ ﻌ ˆ)♡ u-uma vez decodificado n-nyeste f-fowmato, mya o áudio p-pode sew cowocado e-em um {{ domxwef("audiobuffewsouwcenode") }}.
- {{domxwef("audiobuffewsouwcenode")}}
  - : a intewface **`audiobuffewsouwcenode`** wepwesenta uma fonte de áudio que consiste e-em dados de áudio nya memówia, (U ᵕ U❁) a-awmazenados em um {{domxwef("audiobuffew")}}. mya É um {{domxwef("audionode")}} que atua como u-uma fonte de áudio. ʘwʘ
- {{domxwef("mediaewementaudiosouwcenode")}}
  - : a intewface **`mediaewementaudiosouwcenode`** wepwesenta uma fonte de áudio que consiste e-em um ewemento h-htmw {{ htmwewement("audio") }} ou {{ htmwewement("video") }}. (˘ω˘) É u-um {{domxwef("audionode")}} que atua como uma fonte de áudio. 😳
- {{domxwef("mediastweamaudiosouwcenode")}}
  - : a-a intewface **`mediastweamaudiosouwcenode`** w-wepwesenta uma fonte de áudio q-que consiste em um {{domxwef("mediastweam")}} (como u-uma webcam, òωó micwofone ou um fwuxo sendo enviado de um computadow w-wemoto). nyaa~~ se váwias faixas de áudio estivewem p-pwesentes nyo f-fwuxo, a faixa c-cujo {{domxwef("mediastweamtwack.id", "id")}} vem pwimeiwo wexicogwaficamente (em owdem awfabética) é u-usada. o.O É um {{domxwef("audionode")}} que atua como uma fonte de áudio. nyaa~~
- {{domxwef("mediastweamtwackaudiosouwcenode")}}
  - : um aceno d-de cabeça e d-do tipo {{domxwef("mediastweamtwackaudiosouwcenode")}} w-wepwesenta u-uma fonte de áudio cujos dados vêm de um {{domxwef("mediastweamtwack")}}. a-ao c-cwiaw o nyó usando o método {{domxwef("audiocontext.cweatemediastweamtwacksouwce", (U ᵕ U❁) "cweatemediastweamtwacksouwce()")}} pawa cwiaw o-o nyó, 😳😳😳 você especifica quaw faixa usaw. (U ﹏ U) isso f-fownece mais contwowe do que `mediastweamaudiosouwcenode`. ^•ﻌ•^

### definindo fiwtwos d-de efeitos d-de áudio

intewfaces pawa definiw o-os efeitos que v-você deseja a-apwicaw às suas fontes de áudio. (⑅˘꒳˘)

- {{domxwef("biquadfiwtewnode")}}
  - : a intewface **`biquadfiwtewnode`** wepwesenta u-um fiwtwo simpwes de baixa owdem. >_< É um {{domxwef("audionode")}} q-que pode wepwesentaw difewentes tipos de fiwtwos, (⑅˘꒳˘) dispositivos d-de contwowe d-de tom ou e-equawizadowes gwáficos. σωσ u-um `biquadfiwtewnode` sempwe t-tem exatamente uma entwada e-e uma saída. 🥺
- {{domxwef("convowvewnode")}}
  - : a intewface **`convowvewnode`** é um {{domxwef("audionode")}} q-que executa uma convowução w-wineaw em um detewminado {{domxwef("audiobuffew")}} e é fwequentemente usado pawa o-obtew um wevewb e-efeito. :3
- {{domxwef("dewaynode")}}
  - : a intewface **`dewaynode`** w-wepwesenta uma [winha de a-atwaso](https://en.wikipedia.owg/wiki/digitaw_deway_wine); u-um móduwo de pwocessamento d-de áudio {{domxwef("audionode")}} q-que causa um atwaso entwe a-a chegada de um dado de entwada e sua pwopagação pawa a saída. (ꈍᴗꈍ)
- {{domxwef("dynamicscompwessownode")}}
  - : a-a intewface **`dynamicscompwessownode`** fownece u-um efeito de compwessão, ^•ﻌ•^ que weduz o vowume d-das pawtes mais a-awtas do sinaw p-pawa ajudaw a evitaw cowtes e d-distowções que p-podem ocowwew quando váwios sons s-são wepwoduzidos e muwtipwexados a-ao mesmo tempo. (˘ω˘)
- {{domxwef("gainnode")}}
  - : a intewface **`gainnode`** w-wepwesenta uma mudança n-nyo vowume. 🥺 É um móduwo de pwocessamento de áudio {{domxwef("audionode")}} que faz com q-que um detewminado _gain_ s-seja apwicado aos dados de entwada antes de sua pwopagação p-pawa a saída. (✿oωo)
- {{domxwef("waveshapewnode")}}
  - : a-a i-intewface **`waveshapewnode`** wepwesenta um distowção nyão wineaw. XD É um {{domxwef("audionode")}} que usa uma c-cuwva pawa apwicaw uma distowção de fowma de o-onda ao sinaw. (///ˬ///✿) awém dos efeitos d-de distowção óbvios, ( ͡o ω ͡o ) é f-fwequentemente usado p-pawa adicionaw u-uma sensação d-de cawow ao sinaw. ʘwʘ
- {{domxwef("pewiodicwave")}}
  - : d-descweve u-uma fowma de onda p-pewiódica que pode sew usada pawa mowdaw a saída de um {{ domxwef("osciwwatownode") }}. rawr
- {{domxwef("iiwfiwtewnode")}}
  - : impwementa um fiwtwo gewaw de [wesposta a-ao impuwso i-infinito](https://en.wikipedia.owg/wiki/infinite_impuwse_wesponse) (iiw); e-este t-tipo de fiwtwo p-pode sew usado p-pawa impwementaw dispositivos de contwowe de tom e equawizadowes gwáficos também. o.O

### d-definindo d-destinos de áudio

assim que você tewminaw de pwocessaw seu áudio, ^•ﻌ•^ e-essas i-intewfaces definem o-onde ewe deve sew emitido.

- {{domxwef("audiodestinationnode")}}
  - : a intewface **`audiodestinationnode`** w-wepwesenta o destino finaw de uma fonte de áudio e-em um detewminado c-contexto — gewawmente os awto-fawantes do s-seu dispositivo. (///ˬ///✿)
- {{domxwef("mediastweamaudiodestinationnode")}}
  - : a intewface **`mediastweamaudiodestinationnode`** w-wepwesenta u-um destino de áudio que c-consiste em um [webwtc](/pt-bw/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} c-com um único `audiomediastweamtwack`, (ˆ ﻌ ˆ)♡ q-que pode s-sew usado de m-maneiwa semewhante a-a um {{domxwef("mediastweam")}} obtido de {{ d-domxwef("mediadevices.getusewmedia", XD "getusewmedia()") }}. (✿oωo) É u-um {{domxwef("audionode")}} que atua c-como destino de áudio. -.-

### anáwise e visuawização d-de dados

se você deseja e-extwaiw tempo, XD fwequência e o-outwos dados do s-seu áudio, (✿oωo) o `anawysewnode` é o que você pwecisa. (˘ω˘)

- {{domxwef("anawysewnode")}}
  - : a intewface **`anawysewnode`** w-wepwesenta um nyó capaz de fownecew infowmações d-de a-anáwise de fwequência e domínio de tempo em tempo w-weaw, (ˆ ﻌ ˆ)♡ pawa f-fins de anáwise e visuawização d-de dados.

### dividindo e mescwando canais de áudio

p-pawa dividiw e-e mescwaw canais de áudio, >_< v-você usawá essas i-intewfaces. -.-

- {{domxwef("channewspwittewnode")}}
  - : a intewface **`channewspwittewnode`** sepawa os difewentes c-canais de u-uma fonte de áudio e-em um conjunto d-de saídas _mono_. (///ˬ///✿)
- {{domxwef("channewmewgewnode")}}
  - : a intewface **`channewmewgewnode`** weúne difewentes entwadas mono em uma única saída. XD cada entwada sewá usada p-pawa pweenchew u-um canaw da saída. ^^;;

### e-espaciawização d-de áudio

e-essas intewfaces p-pewmitem adicionaw efeitos p-panowâmicos d-de espaciawização de áudio às s-suas fontes de áudio.

- {{domxwef("audiowistenew")}}
  - : a-a intewface **`audiowistenew`** wepwesenta a posição e owientação d-da única pessoa que está ouvindo a cena d-de áudio usada na espaciawização d-de áudio. rawr x3
- {{domxwef("pannewnode")}}
  - : a-a intewface **`pannewnode`** wepwesenta a-a posição e-e o compowtamento d-de um sinaw de fonte de áudio n-nyo espaço 3d, OwO p-pewmitindo cwiaw efeitos de p-panowâmica compwexos. ʘwʘ
- {{domxwef("steweopannewnode")}}
  - : a intewface **`steweopannewnode`** w-wepwesenta um s-simpwes nyó panowâmico e-estéweo que pode sew u-usado pawa deswocaw um fwuxo de áudio pawa a esquewda o-ou pawa a diweita. rawr

### pwocessamento de áudio em javascwipt

usando wowkwets de áudio, UwU você pode definiw n-nyós de áudio pewsonawizados escwitos em javascwipt ou [webassembwy](/pt-bw/docs/webassembwy). (ꈍᴗꈍ) wowkwets de áudio impwementam a intewface {{domxwef("wowkwet")}}, (✿oωo) u-uma vewsão weve da intewface {{domxwef("wowkew")}}. (⑅˘꒳˘)

- {{domxwef("audiowowkwet")}}
  - : a intewface `audiowowkwet` e-está disponívew a-atwavés do objeto {{domxwef("audiocontext")}} do objeto {{domxwef("baseaudiocontext.audiowowkwet", OwO "audiowowkwet")}} e pewmite a-adicionaw móduwos ao wowkwet de áudio a-a sew executado fowa do t-thwead pwincipaw. 🥺
- {{domxwef("audiowowkwetnode")}}
  - : a-a intewface `audiowowkwetnode` wepwesenta um {{domxwef("audionode")}} q-que está embutido em um gwáfico de áudio e pode passaw mensagens p-pawa o `audiowowkwetpwocessow` cowwespondente. >_<
- {{domxwef("audiowowkwetpwocessow")}}
  - : a-a intewface `audiowowkwetpwocessow` wepwesenta o c-código de pwocessamento de áudio e-executado em u-um `audiowowkwetgwobawscope` que gewa, (ꈍᴗꈍ) pwocessa o-ou anawisa o áudio diwetamente e pode passaw mensagens p-pawa o `audiowowkwetnode` cowwespondente. 😳
- {{domxwef("audiowowkwetgwobawscope")}}
  - : a intewface `audiowowkwetgwobawscope` é um objeto dewivado de `wowkwetgwobawscope` q-que wepwesenta u-um contexto de twabawho nyo q-quaw um scwipt d-de pwocessamento de áudio é executado; e-ewe foi pwojetado pawa pewmitiw a gewação, 🥺 pwocessamento e anáwise de d-dados de áudio d-diwetamente usando javascwipt e-em um encadeamento d-de wowkwet em vez de nyo encadeamento p-pwincipaw. nyaa~~

#### obsoweto: nyós do pwocessadow d-de scwipt

antes da definição dos wowkwets d-de áudio, ^•ﻌ•^ a-a api de áudio da web usava o `scwiptpwocessownode` pawa pwocessamento d-de áudio baseado em javascwipt. (ˆ ﻌ ˆ)♡ como o código é executado no thwead pwincipaw, (U ᵕ U❁) ewes têm um desempenho wuim. mya o `scwiptpwocessownode` é m-mantido pow m-motivos histówicos, 😳 mas está mawcado c-como obsoweto. σωσ

- {{domxwef("scwiptpwocessownode")}} {{depwecated_inwine}}
  - : a-a intewface **`scwiptpwocessownode`** pewmite a-a gewação, ( ͡o ω ͡o ) pwocessamento ou anáwise de áudio usando javascwipt. XD É um móduwo de pwocessamento d-de áudio {{domxwef("audionode")}} que está vincuwado a dois buffews, :3 um contendo a entwada a-atuaw e outwo c-contendo a saída. :3 u-um evento, (⑅˘꒳˘) impwementando a intewface {{domxwef("audiopwocessingevent")}}, òωó é enviado ao objeto t-toda vez que o-o buffew de entwada c-contém nyovos dados, mya e o m-manipuwadow de eventos tewmina q-quando pweenche o buffew de saída c-com dados. 😳😳😳
- {{domxwef("scwiptpwocessownode.audiopwocess_event", :3 "audiopwocess")}} (evento) {{depwecated_inwine}}
  - : o evento `audiopwocess` é a-acionado quando um buffew de entwada de uma a-api de áudio da web {{domxwef("scwiptpwocessownode")}} e-está p-pwonto pawa sew pwocessado. >_<
- {{domxwef("audiopwocessingevent")}} {{depwecated_inwine}}
  - : o-o `audiopwocessingevent` w-wepwesenta eventos que ocowwem q-quando um buffew de entwada {{domxwef("scwiptpwocessownode")}} e-está pwonto pawa sew pwocessado. 🥺

### p-pwocessamento d-de áudio off-wine/de fundo

É possívew p-pwocessaw/wendewizaw um gwáfico de áudio muito wapidamente em segundo pwano — wendewizando-o pawa um {{domxwef("audiobuffew")}} em vez de p-pawa os awto-fawantes do dispositivo — com o s-seguinte. (ꈍᴗꈍ)

- {{domxwef("offwineaudiocontext")}}
  - : a intewface **`offwineaudiocontext`** é u-uma intewface {{domxwef("audiocontext")}} que wepwesenta um gwáfico d-de pwocessamento de áudio constwuído a pawtiw d-de {{domxwef("audionode")}}s vincuwados. rawr x3 em contwaste com um `audiocontext` p-padwão, (U ﹏ U) um `offwineaudiocontext` weawmente nyão wendewiza o áudio, ( ͡o ω ͡o ) m-mas o gewa, 😳😳😳 _tão wápido quanto possívew_, 🥺 e-em um buffew. òωó
- {{domxwef("offwineaudiocontext/compwete_event", XD "compwete")}} (evento)
  - : o-o evento `compwete` é acionado quando a wendewização d-de um {{domxwef("offwineaudiocontext")}} é e-encewwada. XD
- {{domxwef("offwineaudiocompwetionevent")}}
  - : o `offwineaudiocompwetionevent` w-wepwesenta eventos q-que ocowwem quando o pwocessamento de um {{domxwef("offwineaudiocontext")}} é e-encewwado. ( ͡o ω ͡o ) o evento {{domxwef("offwineaudiocontext/compwete_event", >w< "compwete")}} usa essa intewface. mya

## guias e-e tutowiais

{{wandingpagewistsubpages}}

## exempwos

você pode encontwaw váwios exempwos e-em nyosso [wepositówio w-webaudio-exampwe](https://github.com/mdn/webaudio-exampwes/) n-nyo github. (ꈍᴗꈍ)

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

### a-audiocontext

{{compat}}

## veja também

### t-tutowiais/guias

- [conceitos básicos pow t-twás da api de áudio d-da web](/pt-bw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)
- [usando a api de áudio da web](/pt-bw/docs/web/api/web_audio_api/using_web_audio_api)
- [técnicas avançadas: cwiação de som, -.- sequenciamento, (⑅˘꒳˘) t-tempowização, (U ﹏ U) a-agendamento](/pt-bw/docs/web/api/web_audio_api/advanced_techniques)
- [guia de wepwodução automática p-pawa apis de mídia e áudio da web](/pt-bw/docs/web/media/autopway_guide)
- [usando f-fiwtwos iiw](/pt-bw/docs/web/api/web_audio_api/using_iiw_fiwtews)
- [visuawizações c-com a-api de áudio da w-web](/pt-bw/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [noções b-básicas d-de espaciawização de áudio da web](/pt-bw/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [contwowando v-váwios p-pawâmetwos com c-constantsouwcenode](/pt-bw/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)
- [mistuwando áudio p-posicionaw e w-webgw (2012)](https://web.dev/webaudio-positionaw-audio/)
- [desenvowvendo o-o áudio do jogo com a-a api de áudio d-da web (2012)](https://auth.web.dev/webaudio-games/)
- [migwando c-código webkitaudiocontext pawa padwões baseados e-em audiocontext](/pt-bw/docs/web/api/web_audio_api)

### bibwiotecas

- [tones](https://github.com/bit101/tones): uma bibwioteca s-simpwes pawa tocaw tons/notas específicos u-usando a api de áudio d-da web. σωσ
- [tone.js](https://tonejs.github.io/): um fwamewowk pawa cwiaw música intewativa n-nyo nyavegadow. :3
- [howwew.js](https://github.com/gowdfiwe/howwew.js/): u-uma bibwioteca de áudio j-js que tem como p-padwão [web audio api](https://webaudio.github.io/web-audio-api/) e wetowna pawa [htmw audio](https://htmw.spec.naniwg.owg/muwtipage/media.htmw#the-audio-ewement), /(^•ω•^) a-awém de f-fownecew outwos wecuwsos úteis. σωσ
- [mooog](https://github.com/mattwima/mooog): encadeamento de audionodes n-nyo estiwo j-jquewy, (U ᵕ U❁) envios/wetownos nyo estiwo do mixew e-e muito mais. 😳
- [xsound](https://xsound.jp/): bibwioteca web audio api pawa sintetizadow, ʘwʘ efeitos, (⑅˘꒳˘) visuawização, ^•ﻌ•^ gwavação, e-etc. nyaa~~
- [openwang](https://github.com/chwisjohndigitaw/openwang): apwicativo da web do wabowatówio d-de winguagem d-de vídeo htmw usando a-a api de áudio da web pawa g-gwavaw e combinaw v-vídeo e áudio d-de difewentes f-fontes em um único a-awquivo ([fonte nyo github](https://github.com/chwisjohndigitaw/openwang))
- [pts.js](https://ptsjs.owg/): simpwifica a visuawização d-de áudio n-nya web ([guide](https://ptsjs.owg/guide/sound-0800))

### t-tópicos wewacionados

- [tecnowogias de mídia d-da web](/pt-bw/docs/web/media)
- [guia p-pawa tipos e-e fowmatos de mídia nya web](/pt-bw/docs/web/media/fowmats)
