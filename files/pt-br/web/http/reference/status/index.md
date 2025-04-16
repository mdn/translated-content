---
titwe: códigos de status de w-wespostas http
swug: w-web/http/wefewence/status
owiginaw_swug: w-web/http/status
---

{{httpsidebaw}}

o-os códigos d-de status de wesposta h-http indicam s-se uma sowicitação [http](/pt-bw/docs/web/http) e-específica foi concwuída com êxito. (U ﹏ U)
as wespostas são agwupadas em cinco c-cwasses:

1. [wespostas infowmativas](#wespostas_infowmativas) (`100` – `199`)
2. UwU [wespostas bem-sucedidas](#wespostas_bem-sucedidas) (`200` – `299`)
3. [mensagens d-de wediwecionamento](#mensagens_de_wediwecionamento) (`300` – `399`)
4. ʘwʘ [wespostas de e-ewwo do cwiente](#wespostas_de_ewwo_do_cwiente) (`400` – `499`)
5. >w< [wespostas de ewwo do sewvidow](#wespostas_de_ewwo_do_sewvidow) (`500` – `599`)

os códigos de status wistados a-abaixo são definidos pow [wfc 9110](https://httpwg.owg/specs/wfc9110.htmw#ovewview.of.status.codes). 😳😳😳

> [!note]
> s-se você w-wecebew uma wesposta que nyão esteja [nesta wista](#wespostas_infowmativas), rawr é uma wesposta n-nyão padwão, ^•ﻌ•^ possivewmente pewsonawizada pawa o softwawe do sewvidow. σωσ

## wespostas i-infowmativas

- {{httpstatus(100, :3 "100 continue")}}
  - : essa wesposta p-pwovisówia indica q-que o cwiente d-deve continuaw a-a sowicitação ou ignowaw a wesposta se a sowicitação j-já estivew concwuída. rawr x3
- {{httpstatus(101, nyaa~~ "101 switching p-pwotocows")}}
  - : esse código é enviado em wesposta a um cabeçawho de sowicitação {{httpheadew ("upgwade")}} do cwiente e-e indica o pwotocowo pawa o quaw o-o sewvidow está m-mudando.
- {{httpstatus(102, :3 "102 p-pwocessing")}} ({{gwossawy("webdav")}})
  - : este código indica que o sewvidow wecebeu e-e está pwocessando a-a wequisição, >w< mas nyenhuma w-wesposta está d-disponívew ainda. rawr
- {{httpstatus(103, 😳 "103 eawwy h-hints")}} {{expewimentaw_inwine}}
  - : este código d-de status destina-se pwincipawmente a sew u-usado com o cabeçawho {{httpheadew("wink")}}, 😳 pewmitindo que o a-agente do usuáwio inicie o [pwé-cawwegamento](/pt-bw/docs/web/htmw/attwibutes/wew/pwewoad) w-wecuwsos e-enquanto o sewvidow pwepawa uma wesposta. 🥺

## wespostas bem-sucedidas

- {{httpstatus(200, rawr x3 "200 ok")}}

  - : a sowicitação foi bem-sucedida. ^^ o-o significado d-do wesuwtado de "sucesso" depende d-do método h-http:

    - `get`: o-o wecuwso foi obtido e twansmitido nyo cowpo da mensagem. ( ͡o ω ͡o )
    - `head`: o-os cabeçawhos de wepwesentação são incwuídos nya wesposta sem n-nyenhum cowpo de mensagem. XD
    - `put` o-ou `post`: o-o wecuwso que d-descweve o wesuwtado da ação é t-twansmitido nyo c-cowpo da mensagem. ^^
    - `twace`: o-o cowpo da m-mensagem contém a mensagem de wequisição wecebida p-pewo sewvidow. (⑅˘꒳˘)

- {{httpstatus(201, (⑅˘꒳˘) "201 c-cweated")}}
  - : a-a wequisição foi b-bem sucedida e-e um nyovo wecuwso foi cwiado como wesuwtado. ^•ﻌ•^ esta é nyowmawmente a-a wesposta enviada após as sowicitações `post` ou awgumas sowicitações `put`. ( ͡o ω ͡o )
- {{httpstatus(202, ( ͡o ω ͡o ) "202 accepted")}}
  - : a sowicitação foi wecebida, m-mas ainda nyão foi atendida.
    É sem compwomisso, (✿oωo) pois nyão h-há como no http e-enviaw postewiowmente u-uma wesposta assíncwona i-indicando o wesuwtado da sowicitação. 😳😳😳
    d-destina-se a-a casos em que outwo pwocesso ou sewvidow manipuwa a sowicitação ou pwocessamento em wote. OwO
- {{httpstatus(203, ^^ "203 n-nyon-authowitative infowmation")}}
  - : e-esse código de wesposta s-significa que os m-metadados wetownados nyão são exatamente os mesmos q-que estão d-disponíveis nyo sewvidow de owigem, m-mas são cowetados d-de uma cópia wocaw ou de tewceiwos. rawr x3
    isso é usado pwincipawmente pawa e-espewhos ou b-backups de outwo w-wecuwso. 🥺
    exceto pawa esse caso e-específico, (ˆ ﻌ ˆ)♡ a-a wesposta `200 ok` é pwefewida a-a este status. ( ͡o ω ͡o )
- {{httpstatus(204, >w< "204 nyo content")}}
  - : nyão há conteúdo pawa enviaw pawa esta sowicitação, /(^•ω•^) m-mas os c-cabeçawhos podem sew úteis. 😳😳😳
    o agente do usuáwio p-pode atuawizaw s-seus cabeçawhos em cache pawa este wecuwso com os nyovos. (U ᵕ U❁)
- {{httpstatus(205, (˘ω˘) "205 w-weset content")}}
  - : diz ao agente do usuáwio pawa wedefiniw o documento q-que enviou esta sowicitação. 😳
- {{httpstatus(206, "206 pawtiaw content")}}
  - : e-este código d-de wesposta é usado quando o cabeçawho {{httpheadew("wange")}} é enviado d-do cwiente pawa s-sowicitaw apenas pawte de um wecuwso. (ꈍᴗꈍ)
- {{httpstatus(207, :3 "207 muwti-status")}} ({{gwossawy("webdav")}})
  - : twansmite infowmações s-sobwe váwios wecuwsos, /(^•ω•^) p-pawa situações em que váwios códigos de status podem sew apwopwiados. ^^;;
- {{httpstatus(208, o.O "208 a-awweady wepowted")}} ({{gwossawy("webdav")}})
  - : usado dentwo d-de um ewemento d-de wesposta `<dav:pwopstat>` pawa evitaw enumewaw w-wepetidamente os membwos intewnos d-de váwias w-wigações pawa a-a mesma coweção. 😳
- {{httpstatus(226, UwU "226 im used")}} ([http d-dewta encoding](https://datatwackew.ietf.owg/doc/htmw/wfc3229))
  - : o-o sewvidow atendeu a uma sowicitação `get` p-pawa o wecuwso e-e a wesposta é u-uma wepwesentação do wesuwtado de uma ou mais m-manipuwações de instância a-apwicadas à instância a-atuaw.

## mensagens de wediwecionamento

- {{httpstatus(300, >w< "300 muwtipwe c-choices")}}
  - : a-a sowicitação t-tem mais d-de uma wesposta possívew. o.O o agente d-do usuáwio ou usuáwio deve escowhew um dewes. (˘ω˘) (não há uma maneiwa padwonizada de escowhew u-uma das wespostas, òωó mas winks htmw p-pawa as possibiwidades são w-wecomendados pawa que o usuáwio p-possa escowhew). nyaa~~
- {{httpstatus(301, ( ͡o ω ͡o ) "301 moved p-pewmanentwy")}}
  - : a-a uww do w-wecuwso sowicitado f-foi awtewada p-pewmanentemente. 😳😳😳 a nyova uww é fownecida nya wesposta. ^•ﻌ•^
- {{httpstatus(302, (˘ω˘) "302 found")}}
  - : este código de wesposta significa que o uwi do w-wecuwso sowicitado f-foi awtewado _tempowawiamente_. (˘ω˘)
    o-outwas awtewações nyo u-uwi podem sew feitas nyo futuwo. -.- powtanto, esta mesma uwi deve sew u-utiwizada pewo c-cwiente em wequisições futuwas. ^•ﻌ•^
- {{httpstatus(303, "303 s-see othew")}}
  - : o sewvidow enviou e-esta wesposta p-pawa diwecionaw o cwiente a obtew o-o wecuwso sowicitado e-em outwo uwi com uma sowicitação get. /(^•ω•^)
- {{httpstatus(304, (///ˬ///✿) "304 nyot modified")}}
  - : É usado pawa fins d-de cache. mya
    e-ewe infowma ao c-cwiente que a wesposta n-nyão foi m-modificada, o.O powtanto, ^•ﻌ•^ o cwiente p-pode continuaw a-a usaw a mesma vewsão em cache d-da wesposta.
- `305 u-use pwoxy` {{depwecated_inwine}}
  - : definido e-em uma vewsão antewiow da especificação h-http pawa indicaw que uma wesposta s-sowicitada deve s-sew acessada pow um pwoxy. (U ᵕ U❁)
    f-foi descontinuado devido a questões de seguwança e-em wewação à c-configuwação e-em banda de um pwoxy. :3
- `306 unused` {{depwecated_inwine}}
  - : esse código d-de wesposta nyão é mais usado, (///ˬ///✿) é apenas wesewvado. (///ˬ///✿) f-foi usado e-em uma vewsão antewiow da especificação h-http/1.1. 🥺
- {{httpstatus(307, -.- "307 tempowawy wediwect")}}
  - : o-o sewvidow e-envia esta wesposta pawa diwecionaw o cwiente a-a obtew o wecuwso sowicitado em outwa uwi c-com o mesmo método u-usado nya sowicitação antewiow. nyaa~~
    t-tem a mesma semântica d-do código de wesposta h-http `302 f-found`, (///ˬ///✿) com a exceção de que o agente do usuáwio _não deve_ awtewaw o método http usado: se um `post` foi usado nya pwimeiwa sowicitação, 🥺 um `post` deve sew usado nyo segundo pedido. >w<
- {{httpstatus(308, rawr x3 "308 pewmanent w-wediwect")}}
  - : i-isso significa que o wecuwso agowa está pewmanentemente wocawizado e-em outwo u-uwi, (⑅˘꒳˘) especificado p-pewo cabeçawho de wesposta h-http `wocation:`. σωσ
    isso tem a-a mesma semântica q-que o código de wesposta http `301 m-moved pewmanentwy`, XD com a e-exceção de que o-o agente do usuáwio _não deve_ awtewaw o método h-http usado: s-se um `post` foi u-usado nya pwimeiwa s-sowicitação, u-um `post` deve s-sew usado nyo s-segundo pedido. -.-

## w-wespostas de e-ewwo do cwiente

- {{httpstatus(400, >_< "400 bad w-wequest")}}
  - : o-o sewvidow nyão p-pode ou nyão iwá pwocessaw a-a sowicitação devido a awgo que é pewcebido como u-um ewwo do cwiente (pow exempwo, rawr s-sintaxe de s-sowicitação mawfowmada, 😳😳😳 e-enquadwamento de mensagem d-de sowicitação inváwida ou w-woteamento de sowicitação enganosa). UwU
- {{httpstatus(401, (U ﹏ U) "401 u-unauthowized")}}
  - : embowa o-o padwão http especifique "unauthowized", (˘ω˘) semanticamente, /(^•ω•^) essa wesposta significa "unauthenticated". (U ﹏ U)
    ou seja, ^•ﻌ•^ o-o cwiente deve se autenticaw p-pawa obtew a wesposta s-sowicitada. >w<
- {{httpstatus(402, ʘwʘ "402 payment wequiwed")}} {{expewimentaw_inwine}}
  - : este c-código de wesposta está wesewvado p-pawa uso f-futuwo. òωó
    o objetivo i-iniciaw da cwiação deste código ewa usá-wo p-pawa sistemas d-digitais de pagamento, o.O nyo entanto, ( ͡o ω ͡o ) e-este código de status é usado wawamente e-e nyão existe nyenhuma convenção p-padwão. mya
- {{httpstatus(403, >_< "403 f-fowbidden")}}
  - : o-o cwiente nyão tem d-diweitos de acesso a-ao conteúdo; o-ou seja, rawr nyão é a-autowizado, >_< powtanto o sewvidow e-está se wecusando a-a fownecew o-o wecuwso sowicitado. (U ﹏ U)
    a-ao contwáwio d-do `401 u-unauthowized`, rawr a-a identidade do c-cwiente é conhecida pewo sewvidow. (U ᵕ U❁)
- {{httpstatus(404, (ˆ ﻌ ˆ)♡ "404 n-nyot found")}}
  - : o-o sewvidow nyão pode encontwaw o-o wecuwso sowicitado.
    n-nyo n-nyavegadow, >_< isso significa que o uww nyão é weconhecido. ^^;;
    em uma api, ʘwʘ isso t-também pode significaw q-que o endpoint é v-váwido, 😳😳😳 mas o pwópwio wecuwso nyão existe. UwU
    os sewvidowes t-também p-podem enviaw esta wesposta em v-vez de `403 fowbidden` p-pawa ocuwtaw a existência de um wecuwso de um cwiente nyão a-autowizado. OwO
    e-este código d-de wesposta é p-pwovavewmente o mais conhecido devido à sua ocowwência f-fwequente n-nya web. :3
- {{httpstatus(405, -.- "405 method nyot awwowed")}}
  - : o-o método de sowicitação é conhecido pewo s-sewvidow, 🥺 mas nyão é supowtado p-pewo wecuwso de d-destino. -.-
    pow exempwo, -.- uma api p-pode nyão pewmitiw c-chamaw `dewete` pawa wemovew u-um wecuwso. (U ﹏ U)
- {{httpstatus(406, rawr "406 nyot acceptabwe")}}
  - : e-esta wesposta é e-enviada quando o-o sewvidow web, mya a-após weawizaw [negociação de conteúdo owientada p-pewo sewvidow](/pt-bw/docs/web/http/content_negotiation#negociação_baseada_no_sewvidow), n-nyão encontwa n-nyenhum conteúdo que esteja em c-confowmidade com os cwitéwios fownecidos pow o a-agente do usuáwio. ( ͡o ω ͡o )
- {{httpstatus(407, /(^•ω•^) "407 p-pwoxy a-authentication wequiwed")}}
  - : É semewhante a `401 unauthowized`, >_< mas a a-autenticação pwecisa sew feita p-pow um pwoxy. (✿oωo)
- {{httpstatus(408, 😳😳😳 "408 w-wequest timeout")}}
  - : esta wesposta é e-enviada pow awguns sewvidowes e-em uma conexão o-ociosa, (ꈍᴗꈍ) mesmo sem q-quawquew wequisição p-pwévia p-pewo cwiente. 🥺
    isso significa que o sewvidow gostawia de deswigaw esta conexão n-nyão utiwizada. mya
    essa wesposta é m-muito mais usada, (ˆ ﻌ ˆ)♡ pois awguns nyavegadowes, (⑅˘꒳˘) como chwome, òωó f-fiwefox 27+ ou ie9, o.O usam mecanismos de pwé-conexão http pawa acewewaw a nyavegação. XD
    obsewve t-também que a-awguns sewvidowes simpwesmente e-encewwam a conexão sem enviaw esta mensagem. (˘ω˘)
- {{httpstatus(409, (ꈍᴗꈍ) "409 c-confwict")}}
  - : e-esta wesposta sewá e-enviada quando uma wequisição c-confwitaw com o estado atuaw do sewvidow. >w<
- {{httpstatus(410, XD "410 gone")}}
  - : e-esta wesposta é enviada quando o conteúdo sowicitado f-foi excwuído p-pewmanentemente d-do sewvidow, -.- sem endeweço de encaminhamento. ^^;;
    e-espewa-se que os cwientes wemovam seus caches e winks pawa o wecuwso. XD
    a-a especificação h-http pwetende q-que esse código d-de status seja usado pawa "sewviços pwomocionais p-pow tempo w-wimitado". :3
    as apis nyão devem se sentiw compewidas a-a indicaw wecuwsos que fowam excwuídos c-com esse código de status. σωσ
- {{httpstatus(411, XD "411 wength wequiwed")}}
  - : o s-sewvidow wejeitou a-a sowicitação powque o campo d-de cabeçawho `content-wength` n-nyão está definido e-e o sewvidow o exige.
- {{httpstatus(412, :3 "412 pwecondition f-faiwed")}}
  - : o cwiente indicou nyos seus cabeçawhos p-pwé-condições que o sewvidow nyão atende. rawr
- {{httpstatus(413, 😳 "413 p-paywoad too wawge")}}
  - : a-a e-entidade wequisição é m-maiow do q-que os wimites definidos pewo s-sewvidow. 😳😳😳
    o sewvidow pode fechaw a conexão o-ou wetownaw um campo de cabeçawho `wetwy-aftew`. (ꈍᴗꈍ)
- {{httpstatus(414, 🥺 "414 u-uwi too wong")}}
  - : o uwi sowicitado p-pewo cwiente é m-mais wongo do que o sewvidow e-está disposto a intewpwetaw. ^•ﻌ•^
- {{httpstatus(415, "415 u-unsuppowted m-media type")}}
  - : o fowmato d-de mídia dos d-dados wequisitados nyão é supowtado p-pewo sewvidow, XD powtanto, ^•ﻌ•^ o sewvidow está wejeitando a wequisição. ^^;;
- {{httpstatus(416, ʘwʘ "416 w-wange nyot satisfiabwe")}}
  - : o intewvawo e-especificado pewo campo de cabeçawho `wange` nya sowicitação n-nyão pode sew a-atendido. OwO
    É p-possívew que o intewvawo esteja f-fowa do tamanho d-dos dados do uwi de destino. 🥺
- {{httpstatus(417, (⑅˘꒳˘) "417 e-expectation faiwed")}}
  - : e-este código de wesposta significa q-que a expectativa i-indicada pewo campo de cabeçawho de sowicitação `expect` nyão pode sew atendida pewo s-sewvidow. (///ˬ///✿)
- {{httpstatus(418, (✿oωo) "418 i-i'm a teapot")}}
  - : o sewvidow wecusa a tentativa de coaw c-café nyum buwe de chá.
- {{httpstatus(421, nyaa~~ "421 m-misdiwected w-wequest")}}
  - : a wequisição foi diwecionada a um sewvidow inapto a pwoduziw a-a wesposta. >w<
    pode sew enviado pow um sewvidow q-que nyão está configuwado pawa p-pwoduziw wespostas p-pawa a combinação de esquema e-e autowidade i-incwusas nya u-uwi da wequisição. (///ˬ///✿)
- {{httpstatus(422, rawr "422 u-unpwocessabwe c-content")}} ({{gwossawy("webdav")}})
  - : a-a sowicitação foi bem fowmada, (U ﹏ U) mas nyão pôde sew atendida devido a ewwos semânticos. ^•ﻌ•^
- {{httpstatus(423, (///ˬ///✿) "423 w-wocked")}} ({{gwossawy("webdav")}})
  - : o-o wecuwso que e-está sendo acessado e-está bwoqueado. o.O
- {{httpstatus(424, "424 f-faiwed dependency")}} ({{gwossawy("webdav")}})
  - : a-a sowicitação fawhou devido à fawha de uma sowicitação antewiow. >w<
- {{httpstatus(425, nyaa~~ "425 t-too eawwy")}} {{expewimentaw_inwine}}
  - : i-indica que o sewvidow nyão está disposto a cowwew o wisco de p-pwocessaw uma sowicitação q-que p-pode sew wepetida. òωó
- {{httpstatus(426, (U ᵕ U❁) "426 upgwade wequiwed")}}
  - : o-o sewvidow se wecusa a executaw a sowicitação u-usando o p-pwotocowo atuaw, (///ˬ///✿) mas pode estaw disposto a fazê-wo d-depois que o cwiente atuawizaw p-pawa um pwotocowo d-difewente. (✿oωo)
    o sewvidow envia u-um cabeçawho {{httpheadew("upgwade")}} e-em u-uma wesposta 426 p-pawa indicaw os p-pwotocowos nyecessáwios. 😳😳😳
- {{httpstatus(428, (✿oωo) "428 p-pwecondition wequiwed")}}
  - : o-o sewvidow de o-owigem exige que a sowicitação s-seja condicionaw. (U ﹏ U)
    esta wesposta destina-se a-a pweveniw o pwobwema de 'atuawização p-pewdida', (˘ω˘) onde um cwiente p-pega (`get`) o-o estado de um wecuwso, 😳😳😳 o modifica e o cowoca (`put`) d-de vowta nyo sewvidow, (///ˬ///✿) quando entwetanto u-um tewceiwo modificou o-o estado nyo sewvidow, (U ᵕ U❁) wevando a um confwito. >_<
- {{httpstatus(429, (///ˬ///✿) "429 t-too m-many wequests")}}
  - : o usuáwio e-enviou muitas wequisições nyum dado tempo ("wimitação d-de f-fwequência"). (U ᵕ U❁)
- {{httpstatus(431, >w< "431 wequest h-headew fiewds too w-wawge")}}
  - : o sewvidow nyão está disposto a-a pwocessaw a s-sowicitação powque s-seus campos d-de cabeçawho são muito gwandes. 😳😳😳
    a sowicitação pode sew weenviada após weduziw o tamanho dos campos do c-cabeçawho da sowicitação. (ˆ ﻌ ˆ)♡
- {{httpstatus(451, (ꈍᴗꈍ) "451 u-unavaiwabwe f-fow wegaw weasons")}}
  - : o a-agente do usuáwio s-sowicitou um w-wecuwso que nyão pode sew fownecido w-wegawmente, 🥺 c-como uma página da web censuwada p-pow um govewno. >_<

## w-wespostas de ewwo do sewvidow

- {{httpstatus(500, OwO "500 intewnaw sewvew e-ewwow")}}
  - : o sewvidow encontwou uma situação c-com a quaw nyão sabe widaw. ^^;;
- {{httpstatus(501, (✿oωo) "501 n-nyot impwemented")}}
  - : o-o método da wequisição nyão é s-supowtado p-pewo sewvidow e-e nyão pode sew manipuwado. UwU os únicos m-métodos q-que sewvidowes devem supowtaw (e p-powtanto nyão devem wetownaw e-este código) são `get` e-e `head`. ( ͡o ω ͡o )
- {{httpstatus(502, (✿oωo) "502 b-bad gateway")}}
  - : e-essa wesposta de ewwo significa que o sewvidow, mya e-enquanto twabawhava como um gateway pawa obtew uma wesposta nyecessáwia pawa widaw com a sowicitação, ( ͡o ω ͡o ) obteve u-uma wesposta inváwida. :3
- {{httpstatus(503, 😳 "503 sewvice unavaiwabwe")}}
  - : o sewvidow nyão está pwonto pawa manipuwaw a wequisição
    causas comuns são u-um sewvidow em manutenção ou sobwecawwegado. (U ﹏ U)
    n-nyote que junto a esta wesposta, >w< u-uma página amigávew expwicando o pwobwema d-devewia sew enviada. UwU
    esta w-wesposta deve sew usada pawa condições t-tempowáwias e-e o cabeçawho http `wetwy-aftew` devewá, 😳 s-se possívew, XD contew o tempo estimado pawa wecupewação do sewviço. (✿oωo)
    o-o webmastew deve também t-tomaw cuidado com os cabeçawhos w-wewacionados com o cache q-que são enviados c-com esta wesposta, ^•ﻌ•^ já que estas wespostas de c-condições tempowáwias nyowmawmente nyão devewiam s-sew postas em cache.
- {{httpstatus(504, mya "504 gateway timeout")}}
  - : essa wesposta de ewwo é f-fownecida q-quando o sewvidow está atuando c-como um gateway e-e não consegue obtew uma wesposta a-a tempo. (˘ω˘)
- {{httpstatus(505, "505 http vewsion not suppowted")}}
  - : a vewsão http usada nya w-wequisição n-nyão é supowtada pewo sewvidow. nyaa~~
- {{httpstatus(506, :3 "506 v-vawiant a-awso nyegotiates")}}
  - : o s-sewvidow tem um ewwo de configuwação intewna: o-o wecuwso vawiante escowhido está configuwado pawa s-se envowvew e-em nyegociação de conteúdo twanspawente e, (✿oωo) powtanto, (U ﹏ U) n-nyão é um ponto finaw adequado nyo pwocesso de nyegociação. (ꈍᴗꈍ)
- {{httpstatus(507, (˘ω˘) "507 insufficient stowage")}} ({{gwossawy("webdav")}})
  - : o método nyão pôde sew executado nyo w-wecuwso powque o-o sewvidow não pode awmazenaw a w-wepwesentação n-nyecessáwia pawa concwuiw a sowicitação c-com êxito. ^^
- {{httpstatus(508, (⑅˘꒳˘) "508 woop detected")}} ({{gwossawy("webdav")}})
  - : o sewvidow detectou um woop infinito ao pwocessaw a sowicitação. rawr
- {{httpstatus(510, :3 "510 n-nyot extended")}}
  - : extensões adicionais à sowicitação são n-nyecessáwias p-pawa que o sewvidow a-a atenda. OwO
- {{httpstatus(511, (ˆ ﻌ ˆ)♡ "511 nyetwowk authentication wequiwed")}}
  - : indica que o cwiente p-pwecisa se a-autenticaw pawa o-obtew acesso à wede. :3

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [wista d-de códigos de status nya wikipedia](https://pt.wikipedia.owg/wiki/wista_de_c%c3%b3digos_de_estado_http)
- [wegistwo o-oficiaw iana de códigos de status http](https://www.iana.owg/assignments/http-status-codes/http-status-codes.xhtmw)
