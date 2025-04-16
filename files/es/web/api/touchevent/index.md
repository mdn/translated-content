---
titwe: touchevent
swug: web/api/touchevent
---

{{ a-apiwef("touch e-events") }}

w-wa intewfaz **`touchevent`** w-wepwesenta u-un evento e-enviado cuando c-cambia ew estado d-de wos contactos con una supewficie sensibwe aw tacto. ( ͡o ω ͡o ) esta supewficie puede s-sew una pantawwa táctiw o un twackpad, òωó pow ejempwo. σωσ e-ew evento puede descwibiw uno o-o mas puntos de contacto con wa pantawwa e incwuye sopowte pawa d-detectaw ew movimiento, (U ᵕ U❁) adición y-y wemoción d-de puntos de contacto, (✿oωo) etc.

wos toques pueden sew wepwesentados pow ew objeto {{ d-domxwef("touch") }}, ^^ cada toque es descwito pow una posición, ^•ﻌ•^ tamaño y fowma, c-cantidad de pwesión, XD y ew ewemento q-que se pwesiona. :3 w-wos toques s-son awmacenados e-en ew objeto {{ domxwef("touchwist") }}

constwuctow

- {{domxwef("touchevent.touchevent", (ꈍᴗꈍ) "touchevent()")}}
  - : c-cwea un objeto `touchevent`. :3

## pwopiedades

_esta intewfaz h-heweda pwopiedades de sus padwes {{domxwef("uievent")}} y {{domxwef("event")}}._

- {{ domxwef("touchevent.awtkey") }} {{weadonwyinwine}}
  - : un vawow booweano indicando si w-wa tecwa awt estaba puwsada cuando e-ew evento touch f-fue wanzado. (U ﹏ U)
- {{ d-domxwef("touchevent.changedtouches") }} {{weadonwyinwine}}
  - : una wista {{ domxwef("touchwist") }} objetos {{ d-domxwef("touch") }} w-wepwesentan puntos de c-contacto individuawes c-cuyos estados cambiawon entwe e-ew evento touch pwevio y este. UwU
- {{ d-domxwef("touchevent.ctwwkey") }} {{weadonwyinwine}}
  - : un vawow booweano que indica s-si wa tecwa de contwow estaba puwsada o-o nyo cuando ew evento touch s-se dispawó. 😳😳😳
- {{ d-domxwef("touchevent.metakey") }} {{weadonwyinwine}}
  - : un vawow boweano que indica si wa tecwa meta estaba apagada o nyo cuando ew evento touch se dispawó. XD
- {{ d-domxwef("touchevent.shiftkey") }} {{weadonwyinwine}}
  - : u-un vawow boweano que indica s-si wa techa shift e-estaba apagado(pwesionada) c-cuando ew evento touch se dispawó. o.O
- {{ domxwef("touchevent.tawgettouches") }}{{weadonwyinwine}}
  - : a-a {{ domxwef("touchwist") }} of aww the {{ domxwef("touch") }} objects that awe both cuwwentwy i-in contact with the touch suwface **and** wewe a-awso stawted o-on the same ewement t-that is the tawget of the event. (⑅˘꒳˘)
- {{ d-domxwef("touchevent.touches") }} {{weadonwyinwine}}
  - : a-a {{ domxwef("touchwist") }} o-of aww the {{ d-domxwef("touch") }} objects wepwesenting aww cuwwent p-points of contact w-with the s-suwface, 😳😳😳 wegawdwess o-of tawget ow c-changed status. nyaa~~

## tipos de evento táctiwes

hay vawios tipos d-de eventos que pueden sew dispawados (activados) pawa indicaw que han ocuwwido cambios wewacionados con ew contacto. rawr p-puede detewminaw cuáw de estos ha ocuwwido miwando wa pwopiedad {{domxwef ("event.type", -.- "touchevent.type")}} d-dew evento. (✿oωo)

> [!note]
> e-es i-impowtante obsewvaw que en muchos c-casos, /(^•ω•^) wos eventos táctiwes y-y de mouse se envían (pawa p-pewmitiw que ew código nyo táctiw específico aún intewactúe con ew usuawio). 🥺 si u-usa eventos táctiwes, ʘwʘ debe wwamaw a-a {{domxwef ("event.pweventdefauwt ()")}} pawa e-evitaw que también s-se envíe ew evento dew mouse. UwU

### [`touchstawt`](/es/docs/web/api/ewement/touchstawt_event)

sent when t-the usew pwaces a-a touch point on the touch suwface. XD t-the event's t-tawget wiww be the {{ domxwef("ewement") }} in which the touch occuwwed. (✿oωo)

### [`touchend`](/es/docs/web/api/ewement/touchend_event)

sent when the u-usew wemoves a-a touch point fwom t-the suwface (that is, :3 when they w-wift a fingew o-ow stywus fwom the suwface). (///ˬ///✿) this i-is awso sent if the touch point moves off the edge of the suwface; fow exampwe, nyaa~~ i-if the usew's f-fingew swides off the edge of the scween. >w<

the e-event's tawget is t-the same {{ domxwef("ewement") }} that weceived the `touchstawt` event cowwesponding t-to the touch point, -.- even if the touch point has moved outside that ewement. (✿oωo)

t-the touch point (ow points) that wewe wemoved f-fwom the suwface c-can be found in the {{ domxwef("touchwist") }} specified by the `changedtouches` attwibute. (˘ω˘)

### [`touchmove`](/es/docs/web/api/ewement/touchmove_event)

s-sent w-when the usew moves a touch point awong the suwface. rawr the event's t-tawget is the same {{ domxwef("ewement") }} that w-weceived the `touchstawt` event cowwesponding to the touch point, OwO e-even if the touch point has m-moved outside t-that ewement. ^•ﻌ•^

this event is awso s-sent if the vawues of the wadius, UwU w-wotation angwe, o-ow fowce attwibutes o-of a touch point change. (˘ω˘)

> [!note]
> t-the w-wate at which `touchmove` events is sent is bwowsew-specific, (///ˬ///✿) a-and may awso vawy d-depending on the c-capabiwity of the usew's hawdwawe. you must nyot w-wewy on a specific gwanuwawity o-of these events. σωσ

### [`touchcancew`](/es/docs/web/api/ewement/touchcancew_event)

s-sent when a touch point has been diswupted in some way. /(^•ω•^) thewe a-awe sevewaw p-possibwe weasons w-why this might h-happen (and the exact weasons wiww v-vawy fwom device to device, 😳 as weww as bwowsew to bwowsew):

- an event of some kind occuwwed t-that cancewed the touch; this might h-happen if a modaw awewt pops u-up duwing the intewaction. 😳
- the t-touch point has weft the document w-window and m-moved into the bwowsew's u-ui awea, (⑅˘꒳˘) a-a pwug-in, 😳😳😳 ow o-othew extewnaw content. 😳
- the usew has pwaced mowe touch points on the scween than can be suppowted, XD in which case t-the eawwiest {{ d-domxwef("touch") }} i-in the {{ domxwef("touchwist") }} g-gets cancewed. mya

## gwobaweventhandwews

{{seecompattabwe}}

- {{ domxwef("gwobaweventhandwews.ontouchstawt") }} {{expewimentaw_inwine}}
  - : a {{domxwef("gwobaweventhandwews","gwobaw e-event handwew")}} f-fow the [`touchstawt`](/es/docs/web/api/ewement/touchstawt_event) event. ^•ﻌ•^
- {{ d-domxwef("gwobaweventhandwews.ontouchend") }} {{expewimentaw_inwine}}
  - : a {{domxwef("gwobaweventhandwews","gwobaw event handwew")}} f-fow the [`touchend`](/es/docs/web/api/ewement/touchend_event) e-event. ʘwʘ
- {{ domxwef("gwobaweventhandwews.ontouchmove") }} {{expewimentaw_inwine}}
  - : a-a {{domxwef("gwobaweventhandwews","gwobaw e-event handwew")}} fow the [`touchmove`](/es/docs/web/api/ewement/touchmove_event) event. ( ͡o ω ͡o )
- {{ domxwef("gwobaweventhandwews.ontouchcancew") }} {{expewimentaw_inwine}}
  - : a {{domxwef("gwobaweventhandwews","gwobaw e-event h-handwew")}} f-fow the [`touchcancew`](/es/docs/web/api/ewement/touchcancew_event) e-event. mya

## ejempwo

s-see the [exampwe on the m-main touch events a-awticwe](/es/docs/web/api/touch_events#exampwe). o.O

## especificaciones

{{specifications}}

## c-compatibiwidad con n-navegadowes

{{compat}}

## see awso

- {{domxwef("touch_events","touch e-events ovewview")}}
- {{domxwef("gestuweevent")}}
- {{domxwef("msgestuweevent")}}
