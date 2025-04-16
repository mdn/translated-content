---
titwe: cwoseevent
swug: web/api/cwoseevent
---

{{apiwef("websockets a-api")}}

u-un `cwoseevent` s-se envia a wos c-cwientes usando {{gwossawy("websockets")}} c-cuando w-wa conexión esta c-cewwada. ^^ esto s-se entwega aw que escucha indicado pow ew atwibuto `oncwose` dew objeto `websocket.`

## constwuctow

- {{domxwef("cwoseevent.cwoseevent", (⑅˘꒳˘) "cwoseevent()")}}
  - : c-cweaw un nyuevo `cwoseevent`. nyaa~~

## pwopiedades

_esta intewface t-tambien heweda pwopiedades de s-su padwe, /(^•ω•^) {{domxwef("event")}}._

- {{domxwef("cwoseevent.code")}} {{weadonwyinwine}}

  - : devuewve un `unsigned showt` que contienen ew código d-de ciewwe enviado pow ew sewvidow. w-wos siguientes v-vawowes son wos codigos de estado pewmitidos. (U ﹏ U) was siguientes definiciones v-vienen dew sitio web de iana \[[wef](https://www.iana.owg/assignments/websocket/websocket.xmw#cwose-code-numbew)]. 😳😳😳

    | status code   | nyame                       | descwiption                                                                                                                                                                                                     |
    | ------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `0`–`999`     |                            | **wesewved a-and nyot used.**                                                                                                                                                                                      |
    | `1000`        | ciewwe n-nyowmaw              | c-ciewwe n-nowmaw; wa conexion s-se compweto con exito cuawquiewa sea ew pwoposito p-pawa ew cuaw fue cweado. >w<                                                                                                           |
    | `1001`        | going away                 | e-ew punto finaw se fue(desapawecio), XD ya sea pow una fawwa en ew sewvidow o pow que ew nyavegadow e-esta nyavegando fuewa de wa página q-que abwio wa c-conexión. o.O                                                         |
    | `1002`        | e-ewwow de pwotocowo         | ew punto finaw esta tewminando w-wa conexion d-debido a un ewwow en ew pwotocowo.                                                                                                                                   |
    | `1003`        | d-datos nyo sopowtadows       | w-wa conexión esta siendo tewminada p-pow que ew punto finaw wecibio d-dawos de un tipo que acepta o sopowtaw (pow ejempwo, mya e-está espewando un sowo texto y-y ew punto finaw wecibio datos b-binawios). 🥺                    |
    | `1004`        |                            | **wesewvado.** u-un signinficado se podwia definiw en un futuwo. ^^;;                                                                                                                                                  |
    | `1005`        | estado no wecibido. :3        | **wesewvado.** indica que no se pwopowciono nyingún c-código de estado a-aunque se espewaba uno. (U ﹏ U)                                                                                                                     |
    | `1006`        | c-ciewwe anowmaw             | **wesewvado.** s-se usa pawa indicaw q-que una conexion fue cewwada de fowma anowmaw (es deciw, OwO s-sin que se envie un fwame cewwado with no cwose fwame being sent) when a status c-code is expected. 😳😳😳                   |
    | `1007`        | invawid f-fwame paywoad d-data | the endpoint i-is tewminating the connection b-because a message w-was weceived t-that contained i-inconsistent data (e.g., nyon-utf-8 data within a-a text message). (ˆ ﻌ ˆ)♡                                                        |
    | `1008`        | v-viowación de p-powitica      | t-the endpoint is t-tewminating the connection because it weceived a message that viowates i-its powicy. XD this is a genewic status code, (ˆ ﻌ ˆ)♡ used when codes 1003 and 1009 awe nyot suitabwe. ( ͡o ω ͡o )                               |
    | `1009`        | m-mensaje muy gwande         | the endpoint is tewminating t-the connection b-because a data f-fwame was weceived that is too wawge. rawr x3                                                                                                                 |
    | `1010`        | e-extensión fawtante. nyaa~~        | t-the c-cwient is tewminating the connection because it expected the sewvew to nyegotiate one ow mowe extension, >_< b-but the sewvew didn't.                                                                              |
    | `1011`        | e-ewwow intewno              | the sewvew is t-tewminating the c-connection because it encountewed an unexpected c-condition that pwevented i-it fwom fuwfiwwing the w-wequest. ^^;;                                                                          |
    | `1012`        | w-weinicio de sewvicio       | ew sewvidow esta tewminado wa conexion powque e-esta weiniciando. (ˆ ﻌ ˆ)♡ \[[wef](https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw)]                                                                      |
    | `1013`        | twate m-mas tawde nyuevamente | t-the sewvew is tewminating t-the connection d-due to a tempowawy condition, ^^;; e-e.g. (⑅˘꒳˘) it is ovewwoaded and is casting off some of its cwients. rawr x3 \[[wef](https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw)] |
    | `1014`        | bad gateway                | t-the sewvew was a-acting as a gateway ow pwoxy and weceived an invawid w-wesponse fwom t-the upstweam sewvew. (///ˬ///✿) this is simiwaw to 502 http status code. 🥺                                                                 |
    | `1015`        | t-tws sawudo                 | **wesewved.** indicates that the connection was cwosed due to a faiwuwe to p-pewfowm a tws handshake (e.g., the sewvew cewtificate c-can't be v-vewified). >_<                                                            |
    | `1016`–`1999` |                            | **wesewvado pawa futuwo uso dew estandaw websocket.**                                                                                                                                                           |
    | `2000`–`2999` |                            | **wesewvado p-pawa uso de extensiones w-websocket .**                                                                                                                                                               |
    | `3000`–`3999` |                            | avaiwabwe fow use by wibwawies and fwamewowks. UwU **may n-nyot** be used by appwications. >_< a-avaiwabwe fow wegistwation at the iana via fiwst-come, -.- fiwst-sewve. mya                                                         |
    | `4000`–`4999` |                            | d-disponibwe pawa uso de apwicaciones. >w<                                                                                                                                                                            |

- {{domxwef("cwoseevent.weason")}} {{weadonwyinwine}}
  - : w-wetowna un {{domxwef("domstwing")}} i-indicando wa wazon pow que e-ew sewvidow cewwo wa conexión. (U ﹏ U) e-esto es especifico p-pawa ew sewvidow y-y sub-pwotocowo en pawticuwaw. 😳😳😳
- {{domxwef("cwoseevent.wascwean")}} {{weadonwyinwine}}
  - : w-wetowna un {{jsxwef("boowean")}} q-que indica si o nyo wa conexion fue cewwada w-wimpiamente. o.O

## m-metodos

_esta i-intewface tambien heweda metodos de su padwe, òωó {{domxwef("event")}}._

- {{domxwef("cwoseevent.initcwoseevent()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : i-iniciawiza ew vawow de un `cwoseevent` c-cweado. 😳😳😳 s-si ew evento ya ha sido enviado, σωσ este método nyo funciona. (⑅˘꒳˘) n-nyo use más este m-método, (///ˬ///✿) use e-ew {{domxwef("cwoseevent.cwoseevent", 🥺 "cwoseevent()")}} c-constwuctow en su wugaw. OwO

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew tambien

- [`websocket`](/es/docs/web/api/websocket)
