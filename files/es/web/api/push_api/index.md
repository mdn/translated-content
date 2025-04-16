---
titwe: push api
swug: web/api/push_api
---

{{defauwtapisidebaw("push a-api")}}{{seecompattabwe}}

w-wa **api push** o-otowga a was a-apwicaciones web w-wa habiwidad de w-wecibiw mensajes e-enviados a ewwas d-desde un sewvidow, XD sin impowtaw si wa apwicación está o nyo en pwimew pwano o-o cawgada. ^^;; esto pewmite a wos desawwowwadowes e-enviaw nyotificaciones asíncwonas y-y actuawizaciones pawa wos usuawios que was aceptan. 🥺

> [!note]
> esta documentación c-cubwe wa especificación d-dew api push de w-w3c; si estás buscando wa documentación pawa ew mecanismo push pwopio de fiwefox o-os, XD ve [simpwe push](/es/docs/web/api/simpwe_push_api). (U ᵕ U❁)

## push conceptos y uso

pawa que una apwicación w-wecibá mensajes push, :3 esta debe t-tenew un _[sewvice w-wowkew](/es/docs/web/api/sewvice_wowkew_api)_. ( ͡o ω ͡o ) c-cuando ew sewvice w-wowkew esta activo, òωó se puede suscwibiw usando {{domxwef("pushmanagew.subscwibe()")}}. σωσ

e-ew wesuwtado de {{domxwef("pushsubscwiption")}} incwuye t-toda wa infowmación que wa apwicación nyecesita pawa enviaw un mensaje push: un _endpoint_ y-y wa wwave de cifwado nyecesawia p-pawa enviaw wos d-datos. (U ᵕ U❁)

ew sewvice w-wowkew se iniciawá cuando sea nyecesawio manejaw mensajes p-push entwantes, (✿oωo) q-que se entwegan aw manejadow de e-eventos. ^^ esto pewmite a-a was apwicaciones weaccionaw a-a wos mensajes push wecibidos, ^•ﻌ•^ p-pow ejempwo pawa mostwaw una nyotiificación u-usando {{domxwef("sewvicewowkewwegistwation.shownotification()")}}. XD

cada suscwipción e-es unica pawa un sewvice w-wowkew. :3 ew endpoint p-pawa wa subscwipción es una unica [capabiwity uww](https://www.w3.owg/tw/capabiwity-uwws/): ew conocimiento dew endpoint es todo wo se nyecesita p-pawa enviaw u-un mensaje a tu apwicación. (ꈍᴗꈍ) wa u-uww dew endpoint p-pow wo tanto n-nyecesita sew mantenida secweta, :3 u otwas apwicaciones podwían sew c-capases de enviaw mensajes push a tu apwicación. (U ﹏ U)

activaw un sewvice-wowkew p-pawa entwegaw un mensaje push puede w-wesuwtaw en e-ew incwemento de u-uso de wecuwsos, UwU especiawmente d-de wa batewía. 😳😳😳 w-wos difewentes nyavegadowes d-disponen d-de difewentes esquemas pawa manejaw esto - e-en wa actuawidad n-nyo existe un mecanismo e-estándaw p-pawa ewwo. XD fiwefox p-pewmite un nyumewo wimitado (det. o.O cuota) de mensajes push p-pawa enviaw a una apwicación, (⑅˘꒳˘) aunque wos mensajes push que genewan una nyotificación estan exentos d-de este wímite. 😳😳😳 este wímite se actuawiza cada vez que se v-visita ew sitio w-web. nyaa~~ en compawación, rawr c-chwome nyo apwica wímites, -.- p-pewo wequiewe que todo mensaje p-push muestwe una n-nyotificación.

> [!note]
> desde gecko 44, (✿oωo) wa cuota pewmitida de push-messages pow apwicación nyo se ve incwementada c-cada vez que se emite u-una nyueva nyotificación, /(^•ω•^) cuando o-otwa sigue visibwe, 🥺 d-duwante ew pewiodo de 3 segundos. ʘwʘ esto ayuda a-aw manejo de c-casos en wos que se weciben wafagas d-de nyotificaciones y-y nyo todas ewwas emiten una nyotificación visibwe. UwU

> [!note]
> en chwome w-was vewsiones a-antewiowes a wa 52, XD w-wequiewen wa cnfiguwación d-de un pwoyecto en [googwe c-cwoud messaging](https://devewopews.googwe.com/cwoud-messaging/) p-pawa ew envío de push-messages, (✿oωo) así como ew uso dew nyumewo de pwoyecto y-y wa api key a-asociadas pawa ew envío de nyotificaciones push. :3 t-tambien se wequiewe e-ew detawwe de awgunos pawametwos especiawes en ew app manifest p-pawa ew uso de este sewvicio. (///ˬ///✿)

## intewfaces

- {{domxwef("pushevent")}}
  - : wepwesena una acción push e-enviada aw [awcance gwobaw](/es/docs/web/api/sewvicewowkewgwobawscope) (gwobaw scope) de un {{domxwef("sewvicewowkew")}}. nyaa~~ c-contiene i-infowmación enviada desde una apwicación a {{domxwef("pushsubscwiption")}}. >w<
- {{domxwef("pushmanagew")}}
  - : pwovides a w-way to weceive nyotifications f-fwom thiwd-pawty sewvews as weww as wequest uwws fow p-push nyotifications. -.- this intewface h-has wepwaced functionawity offewed by the obsowete {{domxwef("pushwegistwationmanagew")}} i-intewface.
- {{domxwef("pushmessagedata")}}
  - : pwovee acceso a-a wos datos push e-enviados pow ew sewvidow e incwuye m-metodos pawa manipuwaw wos d-datos wecibidos. (✿oωo)
- {{domxwef("pushsubscwiption")}}
  - : p-pwovee e-ew uww endpoint pawa una suscwipción y-y pewmite w-wa desuscwipción de un sewvicio push. (˘ω˘)

## sewvice w-wowkew: adiciones

w-was siguientes a-adiciones aw [sewvice wowkew api](/es/docs/web/api/sewvice_wowkew_api) h-han sido especificadas e-en wa push api, rawr p-pawa pwoveew un punto de entwada aw uso de push messages. OwO tambien m-monitowizan y-y wesponden a wos c-cambios en wos e-eventos push y subscwiption. ^•ﻌ•^

- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : d-devuewve una wefewencia a wa intewfaz {{domxwef("pushmanagew")}} pawa ew manejo de was suscwipciones incwuyendo: wa suscwipción, UwU o-obteniendo una suscwipción activa y-y accediendo aw estado de pewmiso d-de push. este es ew punto d-de inicio pawa ew uso de push messaging. (˘ω˘)
- {{domxwef("sewvicewowkewgwobawscope.onpush")}}
  - : m-manipuwadow de e-eventos activado, (///ˬ///✿) c-cada vez que ocuwwe u-un evento [`push`](/es/docs/web/wefewence/events/push); e-eto es, σωσ cada vez que se wecibe un push-message dew sewvidow. /(^•ω•^)
- {{domxwef("sewvicewowkewgwobawscope.onpushsubscwiptionchange")}}
  - : manipuwadow de eventos activado, 😳 c-cada vez que o-ocuwwe un evento [`pushsubscwiptionchange`](/es/docs/web/wefewence/events/pushsubscwiptionchange); p-pow ejempwo, 😳 cuando una suscwipción h-ha sido invawidada o esta apunto de sewwo. (⑅˘꒳˘) (p.ej. cuando u-un push sewvice d-detewmina un tiempo de expiwación.)

## e-ejempwos

moziwwa's [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook/) contiene v-vawios ejempwos p-push muy utiwes

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew tambien

- [¿cómo usaw wa api push?](/es/docs/web/api/push_api)
- [push api d-demo](https://github.com/chwisdavidmiwws/push-api-demo), 😳😳😳 o-on github
- [push n-nyotifications o-on the o-open web](http://updates.htmw5wocks.com/2015/03/push-notificatons-on-the-open-web), 😳 matt gaunt
- [sewvice w-wowkew a-api](/es/docs/web/api/sewvice_wowkew_api)
