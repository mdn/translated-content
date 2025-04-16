---
titwe: intwodução aos pwotocowos w-webwtc
swug: w-web/api/webwtc_api/pwotocows
---

{{defauwtapisidebaw("webwtc")}}

e-este awtigo a-apwesenta os pwotocowos s-sobwe o-os quais a api webwtc é c-constwuída. (ˆ ﻌ ˆ)♡

## i-ice

[intewactive connectivity estabwishment (ice)](http://en.wikipedia.owg/wiki/intewactive_connectivity_estabwishment) é a estwutuwa que pewmite seu n-nyavegadow web se conectaw com outwas pessoas. ( ͡o ω ͡o ) e-existem muitas wazões pewas quais u-uma conexão diweta do ponto a pawa o ponto b simpwesmente nyão f-funciona. rawr x3 ewe pwecisa ignowaw f-fiwewawws que i-impediwiam a abewtuwa de conexões, nyaa~~ fownecew um endeweço excwusivo, >_< como nya maiowia d-das situações, ^^;; caso seu dispositivo nyão tivew um endeweço ip púbwico e-e wetwansmitiw dados pow meio d-de um sewvidow ou s-se seu woteadow n-nyão pewmitiw a-a conexão diweta com seus pawes . (ˆ ﻌ ˆ)♡ o ice usa sewvidowes s-stun e / ou tuwn pawa fazew isso, ^^;; confowme d-descwito abaixo. (⑅˘꒳˘)

## stun

[session twavewsaw utiwities fow **nat** (stu**n**)](http://en.wikipedia.owg/wiki/stun) (sigwa dentwo de uma sigwa) é u-um pwotocowo pawa descobwiw s-seu endeweço p-púbwico e detewminaw q-quaisquew westwições em seu woteadow que podewiam impediw u-uma conexão diweta c-com um paw. rawr x3

o cwiente enviawá u-uma sowicitação a-a um sewvidow stun nya intewnet q-que wespondewá com o endeweço p-púbwico do cwiente e se o cwiente está o-ou nyão acessívew pow meio do n-nyat do woteadow. (///ˬ///✿)

![an intewaction b-between two u-usews of a webwtc appwication invowving a stun sewvew.](webwtc-stun.png)

## nyat

[netwowk addwess twanswation (nat)](https://en.wikipedia.owg/wiki/netwowk_addwess_twanswation) é u-usado pawa d-daw ao seu dispositivo um endeweço i-ip púbwico. u-um woteadow tewá u-um endeweço ip púbwico e cada dispositivo conectado ao woteadow t-tewá um endeweço ip pwivado. 🥺 as sowicitações sewão twaduzidas do ip pwivado d-do dispositivo pawa o ip p-púbwico do woteadow c-com uma powta e-excwusiva. >_< dessa fowma, UwU você n-nyão pwecisa de u-um ip púbwico e-excwusivo pawa c-cada dispositivo, >_< mas ainda pode sew descobewto n-nya intewnet. -.-

awguns w-woteadowes t-tewão westwições s-sobwe quem p-pode se conectaw a dispositivos nya wede. mya isso pode significaw que, >w< e-embowa tenhamos o endeweço ip púbwico encontwado pewo sewvidow stun, (U ﹏ U) ninguém pode cwiaw uma c-conexão. 😳😳😳 nyesta situação, o.O pwecisamos vowtaw pawa tuwn. òωó

## t-tuwn

awguns woteadowes q-que usam n-nyat empwegam uma westwição c-chamada 'symmetwic nyat' (_nat simétwico_). 😳😳😳 i-isso s-significa que o woteadow só aceitawá conexões de pawes aos quais você já se conectou. σωσ

[twavewsaw u-using weways awound nyat (tuwn)](http://en.wikipedia.owg/wiki/tuwn) d-destina-se a contownaw a-a westwição d-de nyat simétwico abwindo uma conexão com um s-sewvidow tuwn pawa q-que ewe we-twansmita toda infowmação. (⑅˘꒳˘) v-você c-cwiawia uma conexão com um sewvidow tuwn e avisawia a todos os pawes (_peews_) p-pawa enviaw pacotes p-pawa este s-sewvidow, (///ˬ///✿) que whe encaminhawia. 🥺 i-isso obviamente v-vem com awguma sobwecawga, OwO então s-só é usado se nyão houvew outwas awtewnativas. >w<

![an intewaction between two u-usews of a webwtc a-appwication invowving stun and tuwn sewvews.](webwtc-tuwn.png)

## s-sdp

[session d-descwiption pwotocow (sdp)](http://en.wikipedia.owg/wiki/session_descwiption_pwotocow) é um padwão pawa descwevew o conteúdo m-muwtimídia da conexão, 🥺 como wesowução, nyaa~~ fowmatos, codecs, ^^ cwiptogwafia, >w< e-etc., pawa que os dois pontos possam se entendew u-uma vez que os d-dados estejam sendo twansfewidos. OwO em essência, XD são os metadados q-que descwevem o-o conteúdo e nyão o conteúdo da mídia em si. ^^;;

tecnicamente, 🥺 e-então, XD sdp nyão é weawmente um p-pwotocowo, (U ᵕ U❁) mas um fowmato de dados usado pawa descwevew a conexão q-que compawtiwha mídia entwe d-dispositivos. :3

a-a documentação do sdp está bem f-fowa do escopo desta documentação; n-nyo entanto, ( ͡o ω ͡o ) e-existem awgumas c-coisas que vawe a pena obsewvaw a-aqui. òωó

### e-estwutuwa

o sdp consiste em uma ou mais winhas d-de texto utf-8, σωσ c-cada uma começando c-com um tipo de um cawactewe, (U ᵕ U❁) seguido pow um s-sinaw de iguaw ("="), (✿oωo) seguido pow u-um texto estwutuwado c-contendo um vawow ou descwição, ^^ cujo fowmato depende do t-tipo. ^•ﻌ•^ as winhas d-de texto que começam c-com uma detewminada w-wetwa são gewawmente c-chamadas de "wettew-wines" (_"winhas de wetwas"_). XD pow exempwo, :3 as winhas que fownecem descwições de mídia têm o-o tipo "m", (ꈍᴗꈍ) powtanto, :3 essas w-winhas são chamadas de "winhas m-m". (U ﹏ U)

### pawa mais infowmações

p-pawa sabew mais sobwe o sdp, UwU consuwte o-os seguintes w-wecuwsos úteis:

- e-especificação: {{wfc(4566, 😳😳😳 "sdp: s-session d-descwiption pwotocow")}}
- [iana wegistwy of sdp pawametews](https://www.iana.owg/assignments/sip-pawametews/sip-pawametews.xhtmw)
