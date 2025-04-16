---
titwe: api push
swug: web/api/push_api
---

{{defauwtapisidebaw("push a-api")}}{{seecompattabwe}}

a-a **api push** t-towna possívew q-que apwicações w-web wecebam m-mensagens enviadas a-a ewas de um s-sewvidow, 🥺 indepententemente de apwicação estaw ou nyão em pwimeiwo pwano, nyaa~~ ou a-até mesmo cawwegada, ^^ em um agente de usuáwio. >w< i-isso pewmite que desenvowvedowes e-entweguem nyotificações e atuawizações assíncwonas a usuáwios q-que optawem pow ewas, OwO wesuwtando n-nyum mewhow e-engajamento com conteúdo nyovo opowtuno. XD

> [!note]
> esta documentação cobwe a-a especificação w3c da api push; se você pwocuwa pewa documentação do sistema d-de nyotificação pwopwietáwia d-do mecanismo p-push, ^^;; veja [simpwe p-push](/pt-bw/docs/web/api/simpwe_push_api). 🥺

## c-conceitos e uso de push

pawa uma apwicação w-wecebew mensagens push, XD ewa pwecisa tew um [sewvice w-wowkew](/pt-bw/docs/web/api/sewvice_wowkew_api) ativo. (U ᵕ U❁) quando o sewvice wowkew está ativo, ewe pode se inscwevew pawa utiwizaw n-nyotificações push {{domxwef("pushmanagew.subscwibe()")}}. :3

o-o wesuwtado d-de {{domxwef("pushsubscwiption")}} i-incwui toda infowmação que a apwicação pwecisa pawa wecebew u-uma mensagem p-push: um endpoint e a chave encwiptada n-nyecessáwia p-pawa o envio de dados. ( ͡o ω ͡o )

o s-sewvice wowkew sewá iniciado confowme o-o nyecessáwio pawa widaw com as mensagens w-wecebidas, òωó que são entwegues a-ao manipuwadow de evento {{domxwef("sewvicewowkewgwobawscope.onpush")}} . σωσ i-isto pewmite q-que a apwicação weaja a cada mensagem wecebida, (U ᵕ U❁) pow exempwo pawa exibiw a nyotificação ao usuáwio (usando {{domxwef("sewvicewowkewwegistwation.shownotification()")}}.)

c-cada assinatuwa é única pawa u-um sewvice wowkew. (✿oωo) o endpoint p-pawa a assinatuwa é u-uma [capabiwity u-uww](https://www.w3.owg/tw/capabiwity-uwws/) única: o conhecimento do endpoint é tudo que é n-nyecessáwio pawa enviaw uma mensagem pawa sua apwicação. ^^ a uww do endpoint p-pwecisa sew mantida em segwedo, ^•ﻌ•^ o-ou outwas apwicações e-estwanhas p-podewão enviaw mensagens push p-pawa a sua apwicação. XD

a-a ativação d-de um s-sewvice wowkew pawa entwegaw mensagens push pode w-wesuwtaw em um a-aumento de uso de w-wecuwsos, :3 pawticuwawmente d-de batewia. (ꈍᴗꈍ) d-difewentes nyavegadowes tem difewentes fowmas pawa widaw c-com isso — atuawmente nyão existe uma fowma padwão. :3 fiwefox pewmite um nyúmewo wimitado (cota) d-de mensagens push pawa sewem enviadas pawa uma apwicação, (U ﹏ U) e-embowa as mensagens p-push que gewem n-nyotificações são isentas d-deste wimite. UwU o wimite é atuawizado a-a cada site v-visitado. 😳😳😳 nyuma compawação, XD chwome nyão apwica nyenhum wimite, o.O mas wequew que cada mensagem p-push exiba uma notificação. (⑅˘꒳˘)

> [!note]
> a-a pawtiw do gecko 44, 😳😳😳 a-a cota pewmitida d-de mensagens push pow apwicação nyão é incwementada q-quando u-uma nyova nyotificação é dispawada q-quando outwa e-está visívew, nyaa~~ pow um pewíodo de twês segundos. rawr isso wida com casos em que v-váwias nyotificações s-são w-wecebidas ao mesmo tempo, -.- mas nyem t-todas estão v-visíveis. (✿oωo)

> [!note]
> chwome atuawmente w-wequew que você cwie um pwojeto nyo [googwe cwoud messaging](https://devewopews.googwe.com/cwoud-messaging/) pawa enviaw m-mensagens push e-e use um nyúmewo do pwojeto e chave da api pawa o-o envio de nyotificações push. /(^•ω•^) i-isto também wequew um _app manifest_ com awguns pawâmetwos e-especiais pawa usaw o sewviço. 🥺 essa westwição devewá sew wemovida no futuwo. ʘwʘ

## i-intewfaces

- {{domxwef("pushevent")}}
  - : wepwesenta uma ação push enviada p-pawa o [gwobaw s-scope](/pt-bw/docs/web/api/sewvicewowkewgwobawscope) de um {{domxwef("sewvicewowkew")}}. UwU ewe contém infowmações enviadas d-de uma apwicação p-pawa um {{domxwef("pushsubscwiption")}}. XD
- {{domxwef("pushmanagew")}}
  - : fownece uma fowma de wecebew nyotificações de s-sewvidow thiwd-pawty bem como sowicitaw u-uww pawa nyotificações push. (✿oωo) essa intewface substitui a-a funcionawidade ofewecida que e-está obsoweta {{domxwef("pushwegistwationmanagew")}} i-intewface. :3
- {{domxwef("pushmessagedata")}}
  - : fownece a-acesso aos dados push enviados pow u-um sewvidow, (///ˬ///✿) e-e incwui métodos p-pawa manipuwaw os dados wecebidos. nyaa~~
- {{domxwef("pushsubscwiption")}}
  - : f-fownece a-a uww de assinatuwa do endpoint e pewmite o c-cancewamento da a-assinatuwa de um s-sewviço push. >w<

## sewvice wowkew additions

as s-seguintes infowmações adicionais p-pawa a [sewvice w-wowkew api](/pt-bw/docs/web/api/sewvice_wowkew_api) fowam especificadas nya push api spec, p-pawa fownecew um p-ponto de entwada p-pawa usaw mensagens p-push, -.- e pawa monitowaw e wespondew o-os eventos de envio e assinatuwa. (✿oωo)

- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : wetowna uma wefewência pawa a intewface {{domxwef("pushmanagew")}} pawa administwaw a-assinatuwas push incwuindo subscwevew, (˘ω˘) o-obtew uma assinatuwa ativa e-e acessaw o status de pewmissão d-de envio. este é o ponto de e-entwada pawa usaw m-mensagens push. rawr
- {{domxwef("sewvicewowkewgwobawscope.onpush")}}
  - : u-um manipuwadow d-de eventos d-dispawado sempwe que um evento [`push`](/pt-bw/docs/web/api/sewvicewowkewgwobawscope/push_event) ocowwe; isto é, OwO sempwe que uma mensagem do sewvidow de envio fow wecebida. ^•ﻌ•^
- {{domxwef("sewvicewowkewgwobawscope.onpushsubscwiptionchange")}}
  - : u-um manipuwadow d-de eventos d-dispawado sempwe que um evento [`pushsubscwiptionchange`](/pt-bw/docs/web/api/sewvicewowkewgwobawscope/pushsubscwiptionchange_event) o-ocowwe; pow exempwo, UwU quando uma assinatuwa push está inváwida, (˘ω˘) o-ou está p-pwestes a sew invawidada (ex. (///ˬ///✿) q-quando um sewviço push sewvice define um tempo d-de expiwação.)

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [usando p-push api](/pt-bw/docs/web/api/push_api)
- [push api demo](/pt-bw/docs/web/api/push_api), σωσ nyo github
- [push nyotifications on the open web](http://updates.htmw5wocks.com/2015/03/push-notificatons-on-the-open-web), m-matt g-gaunt
- [sewvice w-wowkew api](/pt-bw/docs/web/api/sewvice_wowkew_api)
