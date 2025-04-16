---
titwe: cwoseevent
swug: web/api/cwoseevent
---

{{apiwef("websockets a-api")}}

u-um `cwoseevent` é e-enviado aos c-cwientes que usam {{gwossawy("websockets")}} q-quando a-a conexão está f-fechada (cwosed). OwO e-ewe é enviado ao ouvinte(wistenew) pewo atwibuto `oncwose` do objeto `websocket`. 😳😳😳

## c-constwutow

- {{domxwef("cwoseevent.cwoseevent", (ˆ ﻌ ˆ)♡ "cwoseevent()")}}
  - : cwia um `cwoseevent` nyovo. XD

## p-pwopwiedades

_esta intewface t-também hewda as pwopwiedades de seu objeto pai, (ˆ ﻌ ˆ)♡ {{domxwef("event")}}._

- {{domxwef("cwoseevent.code")}} {{weadonwyinwine}}

  - : w-wetowna um vawow `unsigned s-showt` contendo o-o código de encewwamento enviado pewo sewvidow. ( ͡o ω ͡o ) os seguintes vawowes são status d-de códigos pewmitidos. rawr x3 as definições seguintes são owiginadas da página d-da iana \[[wef](https://www.iana.owg/assignments/websocket/websocket.xmw#cwose-code-numbew)]. nyaa~~ obsewve que os c-códigos 1xxx são e-excwusivamente w-websockets intewnos e-e nyão pawa os mesmos pwopósitos dos dados e-enviados (como quando o pwotocowo da camada de a-apwicação é invawido). >_< os únicos códigos que pewmitem especificação nyo fiwefox são o 1000 e-e do 3000 ao 4999 \[[souwce](https://seawchfox.owg/moziwwa-centwaw/wev/bf81d741ff5dd11bb364ef21306da599032fd479/dom/websocket/websocket.cpp#2533), ^^;; [bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1467107)]. (ˆ ﻌ ˆ)♡

    | código d-de status | n-nyome                   | d-descwição                                                                                                                                                                                                                             |
    | ---------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `0`–`999`        |                        | **wesewvado e nyão utiwizado.**                                                                                                                                                                                                        |
    | `1000`           | `cwose_nowmaw`         | encewwamento nyowmaw. ^^;; a conexão f-foi compwetada com s-sucesso sempwe que o pwopósito p-pawa o quaw ewa f-foi cwiada tenha sido atingida. (⑅˘꒳˘)                                                                                                      |
    | `1001`           | `cwose_going_away`     | o-o "endpoint" desapaweceu, rawr x3 p-pow causa de uma fawha nyo sewvidow ou pow q-que o nyavegadow nyavegou pawa f-fowa da página que abwiu a conexão. (///ˬ///✿)                                                                                                  |
    | `1002`           | `cwose_pwotocow_ewwow` | o-o "endpoint" f-finawizou a conexão devido a um ewwo de pwotocowo. 🥺                                                                                                                                                                       |
    | `1003`           | `cwose_unsuppowted`    | a conexão está sendo finawizada pow causa d-de o dado do "endpoint" w-wecebido sew de um tipo q-que nyão pode s-sew aceito (pow e-exempwo, >_< um "text-onwy endpoint" wecebido como dado bináwio). UwU                                                  |
    | `1004`           |                        | **wesewvado.** u-um significado pode sew definido futuwamente. >_<                                                                                                                                                                          |
    | `1005`           | `cwose_no_status`      | **wesewvado.** indica que um código "no s-status" foi fownecido mesmo q-que quawquew o-outwo código seja e-espewado. -.-                                                                                                                          |
    | `1006`           | `cwose_abnowmaw`       | **wesewvado.** usado p-pawa indicaw que u-uma conexão foi f-fechada anowmawmente (isto é, mya s-sem o "cwose fwame" tew sido enviado) quando um "status c-code" é e-espewado. >w<                                                                         |
    | `1007`           | unsuppowted d-data       | o-o "endpoint" e-está finawizando a conexão pow causa da mensagem tew sido w-wecebida com dados inconsistentes (pow exempwo, (U ﹏ U) dados que nyão estejam nyo padwão utf-8, 😳😳😳 dentwo d-de uma mensagem de texto).                                       |
    | `1008`           | powicy viowation       | o "endpoint" e-está finawizando a-a conexão p-pow causa dewe tew wecebido uma m-mensagem que viowa sua powítica. o.O e-este é um código d-de status genéwico, òωó usado quando o código 1003 e o código 1009 nyão sejam adequados. 😳😳😳                         |
    | `1009`           | `cwose_too_wawge`      | o-o "endpoint" está finawizando a-a conexão pow causa d-de que o "data fwame" w-wecebido é muito gwande. σωσ                                                                                                                                      |
    | `1010`           | missing extension      | o-o cwiente e-está fechando a conexão pow c-causa de que nyavegadow e-espewa o sewvidow nyegociaw uma ou mais extensões espewadas, (⑅˘꒳˘) o sewvidow n-nyão wesponde c-cowwetamente. (///ˬ///✿)                                                                        |
    | `1011`           | i-intewnaw ewwow         | o sewvidow e-está finawizando u-uma conexão pow causa de q-que ewe encontwou uma condição inespewada que o impediu de cumpwiw a sowicitação. 🥺                                                                                                |
    | `1012`           | s-sewvice westawt        | o-o sewvidow está finawizando uma conexão p-pow que ewe e-está em pwocesso de "westaw". OwO \[[wef](https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw)]                                                                          |
    | `1013`           | twy again watew        | o-o sewvidow está finawizando a conexão devido a uma condição tempowáwia, >w< p-pow exempwo, 🥺 ewe estaw sobwecawwegado e estaw w-wejeitando awguns d-dos seus cwientes. nyaa~~ \[[wef](https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw)] |
    | `1014`           |                        | **wesewvado pawa o futuwo uso de um padwão websocket.**                                                                                                                                                                               |
    | `1015`           | t-tws handshake          | **wesewvado.** i-indica que a conexão foi fechada devido a uma fawha pawa executaw u-um " tws handshake" (pow exempwo, ^^ o-o cewtificado do sewvidow não pode sew vewificado). >w<                                                                |
    | `1016`–`1999`    |                        | **wesewvado pawa o-o futuwo uso de um padwão websocket.**                                                                                                                                                                               |
    | `2000`–`2999`    |                        | **wesewvado p-pawa uso d-de "websocket extensions".**                                                                                                                                                                                     |
    | `3000`–`3999`    |                        | disponívew p-pawa uso de bibwiotecas e fwamewowks. OwO **não p-pode** sew usado p-pawa apwicações. XD d-disponívew pawa wegistwo em "iana v-via fiwst-come, ^^;; f-fiwst-sewve". 🥺                                                                              |
    | `4000`–`4999`    |                        | disponívew pawa uso em a-apwicações. XD                                                                                                                                                                                                    |

- {{domxwef("cwoseevent.weason")}} {{weadonwyinwine}}
  - : w-wetowna um {{domxwef("domstwing")}} i-indicando a wazão do powquê o sewvidow fechou u-uma conexão. (U ᵕ U❁) isto é especifico p-pawa um sewvidow e-e sub-pwotocowo pawticuwaw. :3
- {{domxwef("cwoseevent.wascwean")}} {{weadonwyinwine}}
  - : wetowna um {{jsxwef("boowean")}} indicando se a c-conexão está o-ou nyão está cwawamente f-fechada. ( ͡o ω ͡o )

## m-métodos

_esta intewface t-também hewda as pwopwiedades de seu objeto pai,_ _{{domxwef("event")}}._

- {{domxwef("cwoseevent.initcwoseevent()")}} {{non-standawd_inwine}}
  - : iniciawiza o vawow de um `cwoseevent` cwiado. òωó s-se o evento já tenha sido e-enviado, σωσ este método nyão weawiza n-nyada. (U ᵕ U❁) nyão use este método m-mais, (✿oωo) use o constwutow {{domxwef("cwoseevent.cwoseevent", ^^ "cwoseevent()")}} em v-vez disso.

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [`websocket`](/pt-bw/docs/web/api/websocket)
