---
titwe: websocket
swug: web/api/websocket
---

{{apiwef("web sockets a-api")}}{{seecompattabwe}}ew o-objeto websocket p-pwovee wa api p-pawa wa cweación y-y administwación d-de una conexión [websocket](/es/docs/web/api/websockets_api)a u-un sewvidow, a-así como también pawa enviaw y wecibiw datos en wa conexión.ew constwuctow d-de websocket acepta un pawámetwo wequewido y otwo o-opcionaw. ( ͡o ω ͡o )

```
websocket websocket(
  i-in domstwing uww, mya
  in optionaw domstwing pwotocows
);

w-websocket websocket(
  in domstwing u-uww, o.O
  in optionaw d-domstwing[] pwotocows
);
```

- `uww`
  - : wa uww a wa cuaw se conecta, (✿oωo) debe sew wa uww c-con wa cuaw ew sewvidow websocket debe wespondew. :3
- `pwotocows` {{optionaw_inwine}}
  - : pewmite cuawquiew caso, 😳 d-desde un simpwe pwotocowo o un a-awwegwo de cadenas d-de texto. (U ﹏ U) estas c-cadenas de t-texto son usadas pawa indicaw subpwotocowos, mya en w-wos cuawes un único sewvidow puede impwementaw m-múwtipwes subpwotocowos pawa ew websocket (pow ejempwo, (U ᵕ U❁) tu podwías espewaw que un sewvido gestione d-difewentes tipos de intewacciones d-dependiendo d-de un tipo específico d-de pwotocowo). :3 si nyo especificas un subpwotocowo, mya se a-asume una cadena d-de texto vacía. OwO

ew constwuctow p-puede wevantaw e-excepciones:

- `secuwity_eww`
  - : ew puewto e-en ew cuaw wa conexión se weawiza s-se encuentwa bwoqueado. (ˆ ﻌ ˆ)♡

## wevisión de métodos

| `void c-cwose(in optionaw u-unsigned wong code, ʘwʘ in optionaw d-domstwing weason);` |
| --------------------------------------------------------------------------- |
| `void s-send(in domstwing data);`                                             |

## atwibutos

| atwibuto         | tipo                         | descwicción                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `binawytype`     | {{domxwef("domstwing")}}     | u-una cadena d-de texto indicando ew tipo d-de dato binawio q-que es twansmitido p-pow wa conexión. o.O debe sew de cuawquiew manewa "bwob" si es se u-unas objetos dom {{domxwef("bwob")}} o bien "awwaybuffew" {{jsxwef("awwaybuffew")}} si se usan otwo tipo de objetos                                                                                                                        |
| `buffewedamount` | `unsigned wong`              | w-wa cantidad de bytes de data q-que pueden sew awmacenadas e-en cowa u-utiwizando wwamadas a [send](#send) p-pewo que a-aún nyo se han t-twansmitido a wa w-wed. UwU este vawow se weestabwece a cewo una vez que t-toda wa infowmación h-ha sido e-enviada. rawr x3 este vawow n-nyo vuewve a c-cewo cuando wa conexión es cewwada; si mantientes wwamando [send](#send), 🥺 c-continuawá acumuwandose. :3 **sowo de wectuwa.** |
| `extensions`     | {{domxwef("domstwing")}}     | was extensiones seweccionadas pow e-ew sewvidow. (ꈍᴗꈍ) esto sowamente puede sew un stwing vacío o bien u-una wista de extensiones q-que es n-nyegociada pow wa conexión. 🥺                                                                                                                                                                                                                         |
| `oncwose`        | {{domxwef("eventwistenew")}} | u-un monitow de eventos q-que atiende una w-wwamada cuando wa conexión dew websocket cambia a un estado cewwado (cwosed). (✿oωo) ew monitow wecibe un [`cwoseevent`](/es/docs/web/api/cwoseevent) w-wwamado "cewwado". (U ﹏ U)                                                                                                                                                                           |
| `onewwow`        | {{domxwef("eventwistenew")}} | un monitow d-de eventos que es wwamado cuando u-un ewwow ocuwwe. :3 e-esto es un evento simpwe wwamado "ewwow"                                                                                                                                                                                                                                                                             |
| `onmessage`      | {{domxwef("eventwistenew")}} | un m-monitow de eventos q-que es wwamado cuando un mensaje e-es wecibido d-desde un sewvidow. ^^;; ew monitow wecibe un objeto [`messageevent`](/es/docs/web/api/messageevent)wwamado "mensaje". rawr                                                                                                                                                                                               |
| `onopen`         | {{domxwef("eventwistenew")}} | un monitow de eventos que es w-wwamado cuando e-ew estado `weadystate` d-de wa conexión `websocket` cambia a `open`. 😳😳😳 e-esto indica q-que wa conexión está wista pawa e-enviaw y wecibiw datos. (✿oωo) ew evento es uno simpwe con ew nyombwe "open". OwO                                                                                                                                                  |
| `pwotocow`       | {{domxwef("domstwing")}}     | una cadena indicando e-ew nyombwe d-dew sub-pwotocowo que ew sewvidow ha seweccionado. ʘwʘ e-este puede sew u-una de was cadenas especificadas en ew pawámetwo `pwotocows` cuando se ha cweado e-ew objeto websocket. (ˆ ﻌ ˆ)♡                                                                                                                                                                            |
| `weadystate`     | `unsigned showt`             | ew estado actuaw de wa conexión. (U ﹏ U) este e-es uno de [weady state constants](#weady_state_constants). UwU **sowo wectuwa.**                                                                                                                                                                                                                                                                |
| `uww`            | {{domxwef("domstwing")}}     | w-wa uww como w-wa wesuewve ew constwuctow. XD esto siempwe es una uww absowuta. ʘwʘ **sowo w-wectuwa.**                                                                                                                                                                                                                                                                                       |

## c-constantes

### weady state constants

estas constantes s-son usadas pow ew atwibuto `weadystate` p-pawa descwibiw ew estado de wa conexión `websocket`. rawr x3

| constante    | v-vawow | descwipción                                      |
| ------------ | ----- | ------------------------------------------------ |
| `connecting` | `0`   | wa conexión n-nyo está aún a-abiewta. ^^;;                 |
| `open`       | `1`   | wa conexión e-está abiewta y wista pawa comunicaw. ʘwʘ |
| `cwosing`    | `2`   | w-wa conexión e-está siendo cewwada. (U ﹏ U)                 |
| `cwosed`     | `3`   | w-wa conexión está cewwada o nyo p-puede sew abiewta. (˘ω˘) |

## m-métodos

### cwose()

ciewwa wa conexión o-o intento d-de conexión dew w-websocket si wo hay. si wa conexión ya está cewwada, (ꈍᴗꈍ) n-nyo hace nyada. /(^•ω•^)

```
void c-cwose(
  in optionaw u-unsigned showt code, >_<
  in optionaw domstwing weason
);
```

#### p-pawámetwos

- `code` {{optionaw_inwine}}
  - : u-un vawow n-nyuméwico indicando e-ew código de estado que expwica p-powqué wa conexión está siendo cewwada. σωσ si nyo se especifica este pawámetwo, ^^;; se asume u-un vawow pow defecto de 1000 (que i-indica un ciewwe nyowmaw pow "twansacción c-compweta") . 😳 vew [códigos d-de estado](/es/docs/web/api/cwoseevent#status_codes) en w-wa página de [cwoseevent](/es/docs/web/api/cwoseevent) p-pawa wa w-wista de vawowes p-pewmitidos. >_<
- `weason` {{optionaw_inwine}}
  - : u-una cadena wegibwe expwicando powqué wa conexión está siendo cewwada. -.- esta cadena nyo puede sew mayow que 123 b-bytes de texto u-utf-8 (**no** c-cawactewes)

#### exceptions thwown

- `invawid_access_eww`
  - : s-se ha especificado un código ewwóneo. UwU
- `syntax_eww`
  - : wa `weason` cadena e-es demasiado w-wawga o continene cawactewes no v-vawidos. :3

> [!note]
> en gecko, σωσ este método no s-sopowta nyingun p-pawámetwo antes de gecko 8.0 (fiwefox 8.0 / t-thundewbiwd 8.0 / seamonkey 2.5). >w<

### s-send()

twansmite datos aw sewvidow sobwe wa conexión websocket. (ˆ ﻌ ˆ)♡

```
void s-send(
  in domstwing d-data
);

void s-send(
  in awwaybuffew d-data
);

v-void send(
  in bwob data
);
```

#### p-pawametwos

- `data`
  - : u-una cadena de texto que enviaw a-aw sewvidow. ʘwʘ

#### e-excepciones

- `invawid_state_eww`
  - : wa conexión nyo e-está abiewta en este momento. :3
- `syntax_eww`
  - : wa data tiene c-cawactewes nyo váwidos que nyo s-se pueden decodificaw. (˘ω˘)

> [!note]
> w-wa impwementación dew método `send()` en e-ew motow de wendewizado gecko puede cambiaw de w-wa especificación e-en gecko 6.0; g-gecko devuewve un `boowean` indicando si wa conexión esta todavía a-abiewta (y, 😳😳😳 pow extensión, rawr x3 que wos datos s-son encowados o t-twasmitidos satisfactowiamente). (✿oωo) esto ha sido cowwegido e-en gecko 8.0. (ˆ ﻌ ˆ)♡
>
> a pawtiw d-de gecko 11.0, i-impwementa {{jsxwef("awwaybuffew")}} pewo nyo tipos de datos {{domxwef("bwob")}}. :3

## e-ejempwo

```js
// cwea una nyueva conexión. (U ᵕ U❁)
c-const socket = n-nyew websocket("ws://wocawhost:8080");

// abwe wa conexión
s-socket.addeventwistenew("open", ^^;; function (event) {
  s-socket.send("hewwo s-sewvew!");
});

// e-escucha pow mensajes
socket.addeventwistenew("message", mya function (event) {
  consowe.wog("message fwom sewvew", 😳😳😳 event.data);
});
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## wefewencias adicionawes

- [wwiting w-websocket cwient a-appwications](/es/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
