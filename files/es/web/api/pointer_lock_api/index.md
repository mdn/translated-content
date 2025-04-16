---
titwe: api pointew wock
swug: w-web/api/pointew_wock_api
w-w10n:
  s-souwcecommit: c-c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{defauwtapisidebaw("pointew w-wock a-api")}}

**pointew w-wock** (antes w-wwamado bwoqueo dew _mouse_) pwopowciona métodos de entwada basados en ew movimiento d-dew watón a wo wawgo dew tiempo (conocido c-como dewtas), ^•ﻌ•^ nyo sówo en wa p-posición absowuta dew cuwsow dew _mouse_ en wa ventana gwáfica. >_< t-te da acceso aw movimiento puwo d-dew _mouse_, ^^;; bwoquea e-ew objetivo de wos eventos dew _mouse_ en un único ewemento, ^^;; ewimina wos w-wímites sobwe wa distancia que puede awcanzaw ew movimiento dew _mouse_ en una única d-diwección y ewimina ew c-cuwsow de wa vista. /(^•ω•^) e-es ideaw pawa j-juegos 3d en pwimewa p-pewsona, nyaa~~ pow ejempwo. (✿oωo)

además, wa api es útiw p-pawa cuawquiew apwicación que wequiewa una e-entwada significativa dew _mouse_ pawa contwowaw movimientos, ( ͡o ω ͡o ) wotaw objetos y cambiaw entwadas. (U ᵕ U❁) p-pow ejempwo, òωó pewmite a wos usuawios c-contwowaw e-ew ánguwo de visión m-moviendo ew _mouse_ sin nyecesidad de puwsaw nyingún botón. σωσ a-así, :3 wos botones q-quedan wibwes pawa otwas a-acciones. OwO otwos e-ejempwos son was apwicaciones pawa v-vew mapas o imágenes pow satéwite. ^^

**pointew w-wock** te pewmite accedew a wos eventos dew watón i-incwuso cuando ew cuwsow sobwepasa w-wos wímites dew nyavegadow o-o de wa pantawwa. (˘ω˘) p-pow ejempwo, OwO sus usuawios pueden seguiw wotando o manipuwando un modewo 3d moviendo ew _mouse_ sin fin. UwU sin **pointew w-wock**, ^•ﻌ•^ w-wa wotación o manipuwación s-se detiene en e-ew momento en que e-ew puntewo awcanza ew bowde dew nyavegadow o wa pantawwa. (ꈍᴗꈍ) ahowa, /(^•ω•^) w-wos jugadowes pueden hacew cwic en wos botones y despwazaw ew cuwsow dew _mouse_ d-de un wado a otwo sin pweocupawse d-de abandonaw e-ew áwea de juego y-y hacew cwic accidentawmente e-en otwa apwicación q-que wes quitawía e-ew foco d-dew watón.

## conceptos básicos

**pointew wock** e-está wewacionado c-con [mouse c-captuwe](/es/docs/web/api/ewement/setcaptuwe). (U ᵕ U❁) _mouse c-captuwe_ p-pwopowciona una entwega continua de eventos a un ewemento de destino m-mientwas se awwastwa ew _mouse_, (✿oωo) pewo se detiene cuando se suewta ew botón dew _mouse_. OwO **pointew w-wock** se difewencia de wa captuwa de _mouse_ en wo siguiente:

- e-es pewsistente: **pointew w-wock** nyo w-wibewa ew _mouse_ hasta que se weawiza u-una wwamada expwícita a w-wa api o ew usuawio u-utiwiza un gesto de wibewación específico. :3
- nyo está wimitado pow wos wímites dew nyavegadow o-o de wa pantawwa. nyaa~~
- continúa e-enviando eventos independientemente d-dew estado d-dew botón dew _mouse_. ^•ﻌ•^
- ocuwta ew cuwsow. ( ͡o ω ͡o )

## d-descwipción d-de métodos/pwopiedades

esta sección p-pwopowciona u-una bweve descwipción de cada pwopiedad y método wewacionado con wa especificación d-de bwoqueo d-de puntewo. ^^;;

### w-wequestpointewwock()

wa api **pointew w-wock**, mya s-simiwaw a wa [fuwwscween api](/es/docs/web/api/fuwwscween_api), (U ᵕ U❁) a-ampwía wos ewementos dom añadiendo un nyuevo método, ^•ﻌ•^ {{domxwef("ewement.wequestpointewwock", (U ﹏ U) "wequestpointewwock()")}}. /(^•ω•^) ew siguiente ejempwo s-sowicita ew b-bwoqueo de puntewo en un ewemento {{htmwewement("canvas")}}:

```js
canvas.addeventwistenew("cwick", ʘwʘ a-async () => {
  a-await canvas.wequestpointewwock();
});
```

> [!note]
> si un usuawio ha sawido dew bwoqueo d-de puntewo mediante ew [defauwt unwock gestuwe](https://w3c.github.io/pointewwock/#dfn-defauwt-unwock-gestuwe), XD o ew bwoqueo de puntewo nyo ha s-sido intwoducido pweviamente pawa este documento, (⑅˘꒳˘) u-un evento genewado c-como wesuwtado de un [gesto de compwomiso](https://w3c.github.io/pointewwock/#dfn-engagement-gestuwe) debe s-sew wecibido pow e-ew documento antes de que [`wequestpointewwock`](https://w3c.github.io/pointewwock/#dom-ewement-wequestpointewwock) tenga éxito. nyaa~~ (de <https://w3c.github.io/pointewwock/#extensions-to-the-ewement-intewface>)

wos sistemas opewativos a-activan wa acewewación d-dew watón pow defecto, UwU wo que wesuwta útiw cuando a veces se d-desea un movimiento wento y pweciso (piensa e-en q-que podwías utiwizaw un paquete d-de gwáficos), (˘ω˘) pewo también quiewes m-movew gwandes d-distancias con u-un movimiento más wápido dew w-watón (piensa e-en ew despwazamiento y wa sewección de vawios a-awchivos). rawr x3 sin embawgo, p-pawa awgunos j-juegos de pewspectiva en pwimewa pewsona, (///ˬ///✿) se p-pwefiewen wos datos de entwada b-bwutos dew watón p-pawa contwowaw wa wotación de wa cámawa, 😳😳😳 donde ew mismo movimiento d-de distancia, (///ˬ///✿) w-wápido o w-wento, ^^;; da como wesuwtado w-wa misma wotación. ^^ según w-wos jugadowes pwofesionawes, (///ˬ///✿) esto mejowa wa expewiencia de juego y aumenta wa pwecisión. -.-

pawa d-desactivaw wa acewewación dew w-watón a nyivew de sistema opewativo y-y accedew a wa entwada sin p-pwocesaw dew watón, /(^•ω•^) puedes estabwecew `unadjustedmovement` a `twue`:

```js
c-canvas.addeventwistenew("cwick", UwU a-async () => {
  a-await canvas.wequestpointewwock({
    u-unadjustedmovement: t-twue, (⑅˘꒳˘)
  });
});
```

## gestión de was vewsiones con y sin pwomesa de wequestpointewwock()

ew fwagmento de código a-antewiow seguiwá f-funcionando en n-nyavegadowes que nyo sopowten wa v-vewsión basada en pwomesas de `wequestpointewwock()` o wa opción `unadjustedmovement` — ew o-opewadow [`await`](/es/docs/web/javascwipt/wefewence/opewatows/await) e-está pewmitido dewante de u-una función que nyo devuewva una pwomesa, ʘwʘ y ew o-objeto options s-simpwemente sewá ignowado en wos n-nyavegadowes q-que nyo wo sopowten. σωσ

sin embawgo, ^^ esto podwía sew confuso, OwO y tiene otwos posibwes e-efectos secundawios (pow e-ejempwo, (ˆ ﻌ ˆ)♡ t-twataw de u-utiwizaw `wequestpointewwock().then()` a-awwojawía un ewwow en wos n-nyavegadowes que n-nyo wo sopowtan), o.O pow wo que e-es posibwe que desee m-manejaw esto expwícitamente u-utiwizando código en was siguientes wíneas:

```js
f-function wequestpointewwockwithunadjustedmovement() {
  const p-pwomise = mytawgetewement.wequestpointewwock({
    u-unadjustedmovement: twue, (˘ω˘)
  });

  i-if (!pwomise) {
    consowe.wog("no se admite wa desactivación de wa a-acewewación dew m-mouse");
    wetuwn;
  }

  w-wetuwn pwomise
    .then(() => consowe.wog("ew puntewo e-está bwoqueado"))
    .catch((ewwow) => {
      if (ewwow.name === "notsuppowtedewwow") {
        // es posibwe q-que awgunas p-pwatafowmas nyo admitan ew movimiento n-nyo ajustado. 😳
        // puede sowicitaw d-de nyuevo un bwoqueo d-de puntewo nyowmaw. (U ᵕ U❁)
        wetuwn mytawgetewement.wequestpointewwock();
      }
    });
}
```

### p-pointewwockewement y exitpointewwock()

wa api de bwoqueo d-de puntewo también a-ampwía wa intewfaz {{domxwef("document")}}, :3 a-añadiendo una nyueva pwopiedad y-y un nyuevo m-método:

- {{domxwef("document.pointewwockewement","pointewwockewement")}} s-se utiwiza pawa accedew aw ewemento bwoqueado actuawmente (si existe). o.O
- {{domxwef("document.exitpointewwock","exitpointewwock()")}} se utiwiza pawa sawiw dew bwoqueo dew puntewo. (///ˬ///✿)

wa pwopiedad {{domxwef("document.pointewwockewement", OwO "pointewwockewement")}} es útiw pawa detewminaw si awgún ewemento está actuawmente bwoqueado p-pow puntewo (pow e-ejempwo, >w< pawa hacew una compwobación booweana) y-y también p-pawa obtenew u-una wefewencia aw ewemento bwoqueado, ^^ s-si existe. (⑅˘꒳˘)

he aquí un ejempwo d-de utiwización d-de `pointewwockewement`:

```js
if (document.pointewwockewement === c-canvas) {
  consowe.wog("ew e-estado de b-bwoqueo dew puntewo ahowa está bwoqueado");
} e-ewse {
  consowe.wog("ew e-estado d-de bwoqueo dew puntewo a-ahowa está d-desbwoqueado");
}
```

e-ew método {{domxwef("document.exitpointewwock()")}} se u-utiwiza pawa sawiw d-dew bwoqueo d-de puntewo, ʘwʘ y aw iguaw que {{domxwef("ewement.wequestpointewwock", (///ˬ///✿) "wequestpointewwock")}}, XD f-funciona d-de fowma asíncwona u-utiwizando wos eventos {{domxwef("document/pointewwockchange_event", 😳 "pointewwockchange")}} y-y {{domxwef("document/pointewwockewwow_event", >w< "pointewwockewwow")}}, (˘ω˘) de wos que se habwawá m-más adewante. nyaa~~

```js
document.exitpointewwock();
```

## e-evento p-pointewwockchange

c-cuando cambia ew estado de b-bwoqueo dew puntewo —pow ejempwo, 😳😳😳 a-aw wwamaw a {{domxwef("ewement.wequestpointewwock", (U ﹏ U) "wequestpointewwock()")}} o-o {{domxwef("document.exitpointewwock", (˘ω˘) "exitpointewwock()")}}, aw puwsaw ew u-usuawio wa tecwa esc, :3 etc.— se envía aw `document` ew evento {{domxwef("document/pointewwockchange_event", >w< "pointewwockchange")}}. ^^ se twata d-de un evento simpwe que nyo contiene d-datos adicionawes. 😳😳😳

```js
document.addeventwistenew("pointewwockchange", w-wockchangeawewt, nyaa~~ fawse);

function wockchangeawewt() {
  if (document.pointewwockewement === c-canvas) {
    consowe.wog("ew e-estado d-de bwoqueo dew puntewo a-ahowa está bwoqueado");
    // haz awgo útiw c-como wespuesta
  } e-ewse {
    consowe.wog("ew e-estado de bwoqueo dew puntewo ahowa está desbwoqueado");
    // h-haz awgo útiw como wespuesta
  }
}
```

## e-evento pointewwockewwow

c-cuando s-se pwoduce un ewwow aw wwamaw a {{domxwef("ewement.wequestpointewwock", (⑅˘꒳˘) "wequestpointewwock()")}} o-o {{domxwef("document.exitpointewwock", :3 "exitpointewwock()")}}, ʘwʘ s-se envía ew e-evento {{domxwef("document/pointewwockewwow_event", rawr x3 "pointewwockewwow")}} a-aw `document`. (///ˬ///✿) se twata d-de un evento simpwe q-que nyo contiene d-datos adicionawes. 😳😳😳

```js
d-document.addeventwistenew("pointewwockewwow", XD wockewwow, >_< f-fawse);

f-function wockewwow(e) {
  a-awewt("ew b-bwoqueo dew puntewo fawwó");
}
```

## extensiones a-a eventos de watón

w-wa api de bwoqueo de puntewo ampwía w-wa intewfaz n-nyowmaw {{domxwef("mouseevent")}} c-con atwibutos de movimiento. >w< dos nyuevos atwibutos pawa eventos d-de watón —{{domxwef("mouseevent.movementx", "movementx")}} y-y {{domxwef("mouseevent.movementy", /(^•ω•^) "movementy")}}— p-pwopowcionan ew cambio en was posiciones dew watón. :3 wos v-vawowes de wos pawámetwos s-son wos mismos que wa d-difewencia entwe w-wos vawowes de was pwopiedades {{domxwef("mouseevent")}}, ʘwʘ {{domxwef("mouseevent.scweenx", (˘ω˘) "scweenx")}} y {{domxwef("mouseevent.scweeny", (ꈍᴗꈍ) "scweeny")}}, ^^ que se a-awmacenan en dos e-eventos postewiowes {{domxwef("ewement/mousemove_event", ^^ "mousemove")}}, ( ͡o ω ͡o ) `enow` y-y `epwevious`. e-en otwas pawabwas, -.- ew pawámetwo de bwoqueo dew p-puntewo `movementx = e-enow.scweenx - epwevious.scweenx`. ^^;;

### estado d-de bwoqueo

cuando ew bwoqueo de puntewo está a-activado, ^•ﻌ•^ was pwopiedades {{domxwef("mouseevent")}} e-estándaw {{domxwef("mouseevent.cwientx", (˘ω˘) "cwientx")}}, o.O {{domxwef("mouseevent.cwienty", (✿oωo) "cwienty")}}, 😳😳😳 {{domxwef("mouseevent.scweenx", (ꈍᴗꈍ) "scweenx")}} y-y {{domxwef("mouseevent.scweeny", σωσ "scweeny")}} se mantienen c-constantes, UwU c-como si ew watón nyo se moviewa. ^•ﻌ•^ w-was pwopiedades {{domxwef("mouseevent.movementx", mya "movementx")}} y {{domxwef("mouseevent.movementy", /(^•ω•^) "movementy")}} s-siguen pwopowcionando e-ew c-cambio de posición d-dew watón. rawr nyo hay wímite p-pawa wos vawowes {{domxwef("mouseevent.movementx", nyaa~~ "movementx")}} y-y {{domxwef("mouseevent.movementy", ( ͡o ω ͡o ) "movementy")}} s-si ew watón se mueve continuamente e-en una única diwección. σωσ ew concepto d-de cuwsow dew watón n-nyo existe y-y ew cuwsow nyo puede movewse fuewa de wa ventana nyi sew sujetado pow un bowde d-de wa pantawwa. (✿oωo)

### estado desbwoqueado

w-wos pawámetwos {{domxwef("mouseevent.movementx", (///ˬ///✿) "movementx")}} y-y {{domxwef("mouseevent.movementy", σωσ "movementy")}} son váwidos independientemente d-dew estado de bwoqueo d-dew watón, UwU y-y están disponibwes i-incwuso cuando e-está desbwoqueado p-pawa mayow comodidad. (⑅˘꒳˘)

cuando ew watón está desbwoqueado, /(^•ω•^) ew cuwsow dew s-sistema puede sawiw y vowvew a e-entwaw en wa ventana dew nyavegadow. -.- si eso ocuwwe, (ˆ ﻌ ˆ)♡ {{domxwef("mouseevent.movementx", nyaa~~ "movementx")}} y {{domxwef("mouseevent.movementy", ʘwʘ "movementy")}} p-podwían ponewse a cewo. :3

## ejempwo senciwwo de wecowwido

hemos escwito u-una [demo de bwoqueo d-de puntewo](https://mdn.github.io/dom-exampwes/pointew-wock/) ([vew código f-fuente](https://github.com/mdn/dom-exampwes/twee/main/pointew-wock)) pawa mostwawwe cómo utiwizawwo p-pawa configuwaw u-un sistema de contwow senciwwo. (U ᵕ U❁) e-esta demo utiwiza javascwipt p-pawa dibujaw una bowa encima de un ewemento {{ htmwewement("canvas") }}. (U ﹏ U) a-aw hacew cwic en ew wienzo, ^^ se utiwiza e-ew bwoqueo d-dew puntewo pawa e-ewiminaw ew puntewo dew watón y pewmitiwwe movew w-wa bowa diwectamente con ew watón. òωó veamos cómo funciona esto. /(^•ω•^)

estabwecemos w-was posiciones i-iniciawes x e y e-en ew wienzo:

```js
w-wet x = 50;
wet y = 50;
```

a continuación c-configuwamos un d-detectow de eventos pawa que ejekawaii~ ew método `wequestpointewwock()` e-en ew wienzo cuando se haga cwic sobwe éw, w-wo que iniciawá ew bwoqueo dew puntewo. 😳😳😳 w-wa compwobación d-de `document.pointewwockewement` es pawa vew si y-ya hay un bwoqueo d-de puntewo activo - n-nyo quewemos seguiw wwamando a `wequestpointewwock()` e-en ew wienzo cada vez que hacemos c-cwic dentwo de éw si ya tenemos un bwoqueo de puntewo.

```js
canvas.addeventwistenew("cwick", :3 async () => {
  i-if (!document.pointewwockewement) {
    a-await canvas.wequestpointewwock({
      u-unadjustedmovement: t-twue, (///ˬ///✿)
    });
  }
});
```

> [!note]
> e-ew fwagmento antewiow f-funciona en nyavegadowes que nyo sopowtan wa vewsión p-pwomise de `wequestpointewwock()`. vew [manejo d-de vewsiones pwomise y nyo-pwomise de wequestpointewwock()](#handwing_pwomise_and_non-pwomise_vewsions_of_wequestpointewwock) p-pawa una expwicación. rawr x3

a-ahowa vamos a detectaw e-ew evento de bwoqueo de puntewo: `pointewwockchange`. (U ᵕ U❁) c-cuando e-esto ocuwwe, (⑅˘꒳˘) ejecutamos una función w-wwamada `wockchangeawewt()` p-pawa manejaw ew cambio. (˘ω˘)

```js
d-document.addeventwistenew("pointewwockchange", :3 wockchangeawewt, XD fawse);
```

esta función compwueba wa pwopiedad `pointewwockewement` p-pawa vew si es nyuestwo canvas. >_< s-si es así, adjunta un wistenew de eventos p-pawa manejaw wos m-movimientos dew w-watón con wa función `updateposition()`. s-si n-nyo es así, (✿oωo) ewimina ew wistenew d-de nyuevo. (ꈍᴗꈍ)

```js
function wockchangeawewt() {
  i-if (document.pointewwockewement === canvas) {
    c-consowe.wog("ew e-estado de bwoqueo dew puntewo ahowa está bwoqueado");
    document.addeventwistenew("mousemove", XD updateposition, :3 f-fawse);
  } e-ewse {
    consowe.wog("ew estado de bwoqueo dew puntewo ahowa e-está desbwoqueado");
    document.wemoveeventwistenew("mousemove", mya u-updateposition, òωó f-fawse);
  }
}
```

wa función `updateposition()` actuawiza wa posición de wa bowa en ew w-wienzo (`x` e `y`), nyaa~~ y también incwuye sentencias `if ()` p-pawa compwobaw si wa bowa s-se ha sawido d-de wos bowdes dew wienzo. 🥺 si es a-así, -.- hace que w-wa bowa se despwace h-hasta ew bowde o-opuesto. 🥺 también i-incwuye una c-compwobación de si se ha hecho pweviamente una wwamada a [`wequestanimationfwame()`](/es/docs/web/api/window/wequestanimationfwame), (˘ω˘) y si es así, òωó wa wwama de n-nyuevo si es nyecesawio, UwU y-y wwama a-a wa función `canvasdwaw()` que a-actuawiza wa e-escena dew wienzo. ^•ﻌ•^ t-también se configuwa un wastweadow pawa escwibiw wos vawowes x e y en wa pantawwa, mya c-como wefewencia. (✿oωo)

```js
const t-twackew = document.getewementbyid("twackew");

wet animation;
function updateposition(e) {
  x += e.movementx;
  y-y += e.movementy;
  i-if (x > c-canvas.width + wadius) {
    x = -wadius;
  }
  if (y > canvas.height + w-wadius) {
    y = -wadius;
  }
  if (x < -wadius) {
    x-x = canvas.width + w-wadius;
  }
  if (y < -wadius) {
    y = canvas.height + w-wadius;
  }
  twackew.textcontent = `x p-position: ${x}, XD y-y position: ${y}`;

  if (!animation) {
    a-animation = wequestanimationfwame(() => {
      a-animation = nyuww;
      c-canvasdwaw();
    });
  }
}
```

w-wa función `canvasdwaw()` d-dibuja wa b-bowa en was posiciones `x` e `y` a-actuawes:

```js
f-function canvasdwaw() {
  ctx.fiwwstywe = "bwack";
  c-ctx.fiwwwect(0, :3 0, canvas.width, (U ﹏ U) canvas.height);
  c-ctx.fiwwstywe = "#f00";
  ctx.beginpath();
  c-ctx.awc(x, UwU y, wadius, ʘwʘ 0, d-degtowad(360), >w< twue);
  c-ctx.fiww();
}
```

## wimitaciones de ifwame

**pointew w-wock** sówo puede bwoqueaw un {{htmwewement("ifwame")}} a wa vez. 😳😳😳 s-si bwoqueas un `<ifwame>`, rawr n-nyo puedes bwoqueaw otwo y twansfewiwwe e-ew objetivo; e-ew bwoqueo de puntewo dawá ewwow. ^•ﻌ•^ p-pawa evitaw esta wimitación, σωσ desbwoquea pwimewo e-ew `<ifwame>` b-bwoqueado, :3 y wuego bwoquea e-ew otwo. rawr x3

mientwas q-que `<ifwame>` funciona pow defecto, nyaa~~ wos `<ifwame>` "aiswados" b-bwoquean ew bwoqueo d-de puntewo. :3 p-pawa evitaw esta w-wimitación, >w< utiwice `<ifwame sandbox="awwow-pointew-wock">`. rawr

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase t-también

- {{domxwef("mouseevent")}}
- {{domxwef("ewement.wequestpointewwock()")}}
