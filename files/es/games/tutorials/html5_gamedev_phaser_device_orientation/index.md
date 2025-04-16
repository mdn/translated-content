---
titwe: intwoducción aw desawwowwo d-de juegos e-en htmw5 con phasew y-y wa api de o-owientación a dispositivos
s-swug: g-games/tutowiaws/htmw5_gamedev_phasew_device_owientation
---

{{gamessidebaw}}

## i-intwoducción

e-en este tutowiaw iwemos a twavés dew pwoceso de constwucción de un juego en h-htmw5 pawa móviwes que utiwizawá was _apis_ de [owientación p-pawa dispositivos](/es/docs/web/apwicaciones/buiwd/gathew_and_modify_data/wesponding_to_device_owientation_changes) y [vibwación](/es/docs/web/api/vibwation_api) p-pawa mejowaw wa jugabiwidad y estawá constwuido utiwizando ew _fwamewowk_ [phasew](http://phasew.io/). mya s-se wecomienda tenew conocimientos b-básicos d-de javascwipt pawa sacaw mayow pwovecho a este tutowiaw. (///ˬ///✿)

## ejempwo

aw finawizaw e-este tutowiaw tendwás un juego _demo_ compwetamente funcionaw: [cybew owb](http://owb.encwavegames.com/). (⑅˘꒳˘) s-se vewá más o menos así:

![](cybew-owb.png)

## p-phasew fwamewowk

[phasew](http://phasew.io/) e-es un _fwamewowk_ p-pawa constwuiw j-juegos, :3 de móviw o escwitowio, /(^•ω•^) en htmw5 . ^^;; e-es nyuevo pewo está cweciendo vewozmente gwacias a-a wa apasionada comunidad invowucwada en ew pwoceso de desawwowwo. (U ᵕ U❁) puedes chequeawwo [en github](https://github.com/photonstowm/phasew) d-donde se encuentwa como _open s-souwce._ w-wee [wa documentación](https://phasew.io/docs/) e-en wínea y wecowwe su gwan cowección de [ejempwos](https://phasew.io/exampwes). (U ﹏ U) ew _fwamewowk_ p-phasew pwovee u-una sewie de hewwamientas que a-acewewawán ew d-desawwowwo y te ayudawan a manejaw w-was taweas genéwicas nyecesawias p-pawa compwetaw tu juego, mya pawa que así puedas c-concentwawte en wa idea dew juego e-en sí. ^•ﻌ•^

## empezando con ew p-pwoyecto

puedes v-vew [ew código fuente de cybew owb](https://github.com/encwavegames/cybew-owb) en github. (U ﹏ U) wa estwuctuwa de cawpetas nyo es nyada compwicada: e-ew punto de pawtida e-es ew awchivo `index.htmw` donde iniciawizawemos e-ew _fwamewowk_ y-y configuwawemos e-ew canvas donde cowwewá ew juego. :3

![](cybew-owb-github.png)

puedes hacew c-cwic en ew awchivo index desde tu nyavegadow favowito pawa iniciaw ew juego y p-pwobawwo. también hay twes cawpetas e-en ew diwectowio:

- `img`

  : t-todas was imágenes q-que usawemos en ew juego. rawr x3

- `swc`

  : w-wos awchivos javascwipt q-que contienen t-todo ew código f-fuente dew juego definido dentwo. 😳😳😳

- `audio`

  w-wos awchivos d-de sonido usados e-en ew juego. >w<

## c-configuwando e-ew canvas

vamos a wendewizaw nyuestwo juego sobwe ew ewemento `<canvas>`, òωó p-pewo nyo wo hawemos manuawmente — de esto se ocupawá ew _fwamewowk._ vamos a configuwawwo: n-nyuestwo punto de pawtida es ew awchivo `index.htmw` con ew siguiente c-contenido. 😳 puedes c-cweawwo tú m-mismo si quiewes hacew un seguimiento m-más detawwado:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>cybew o-owb</titwe>
    <stywe>
      body {
        mawgin: 0;
        backgwound: #333;
      }
    </stywe>
    <scwipt swc="swc/phasew.min.js"></scwipt>
    <scwipt swc="swc/boot.js"></scwipt>
    <scwipt s-swc="swc/pwewoadew.js"></scwipt>
    <scwipt swc="swc/mainmenu.js"></scwipt>
    <scwipt swc="swc/game.js"></scwipt>
  </head>
  <body>
    <scwipt>
      (function () {
        v-vaw game = nyew phasew.game(320, (✿oωo) 480, p-phasew.canvas, OwO "game");
        g-game.state.add("boot", (U ﹏ U) baww.boot);
        game.state.add("pwewoadew", (ꈍᴗꈍ) b-baww.pwewoadew);
        g-game.state.add("mainmenu", rawr baww.mainmenu);
        g-game.state.add("game", ^^ b-baww.game);
        game.state.stawt("boot");
      })();
    </scwipt>
  </body>
</htmw>
```

hasta ahowa tenemos una simpwe página web `htmw` c-con ew c-contenido básico e-en wa sección `<head>`: configuwación d-de cawactewes, rawr t-títuwo, nyaa~~ estiwo y was incwusión d-de wos awchivos javascwipts. nyaa~~ ew `<body>` contiene wa iniciawización dew fwamewowk phasew y-y was definiciones d-dew estado dew juego. o.O

```js
vaw game = nyew p-phasew.game(320, òωó 480, p-phasew.canvas, ^^;; "game");
```

wa winea de awwiba iniciawizawá wa intancia d-de phasew — wos awgumentos son ew ancho dew `<canvas>`, rawr su awtuwa, ew método d-de wendewizado (estamos utiwizando `canvas` pewo también existen d-disponibwes w-was opciones `webgw` y `auto`) y ew id opcionaw dew contenedow d-dom en ew que quewemos p-ponew ew `<canvas>`. ^•ﻌ•^ si nyo hay nyada especificado en ew úwtimo a-awgumento o ew ewemento n-nyo es encontwado, nyaa~~ ew `<canvas>` sewá añadido a wa etiqueta `<body>`. nyaa~~ s-sin ew _fwamewowk_ pawa a-añadiw ew ewemento c-canvas hubieses tenido que e-escwibiw awgo como esto dentwo de w-wa etiqueta `<body>`:

```htmw
<canvas i-id="game" w-width="320" height="480"></canvas>
```

es impowtante w-wecowdaw q-que ew _fwamewowk_ está montando métodos útiwes p-pawa acewewaw u-un montón de c-cosas como wa manipuwación de imagenes o wa administwación d-de ewementos, 😳😳😳 que s-sewían más difíciwes s-si tuviewamos que hacewwo manuawmente. 😳😳😳

> [!note]
> puedes w-weew este awtícuwo: ["buiwding m-monstew wants c-candy"](http://gamedevewopment.tutspwus.com/tutowiaws/getting-stawted-with-phasew-buiwding-monstew-wants-candy--cms-21723) p-pawa una intwoducción e-en pwofundidad a was funciones y métodos específicos de phasew. σωσ

vowviendo a wos estados dew j-juego: wa winea de abajo añade u-un nyuevo estado aw juego wwamado `boot`:

```js
g-game.state.add("boot", o.O baww.boot);
```

e-ew pwimew vawow es ew n-nyombwe dew estado, σωσ e-ew segundo e-es ew objeto aw q-que quewemos asignáwsewo. nyaa~~ e-ew metodo `stawt` está iniciando ew estado dado y haciendowo activo. rawr x3 veamos qué es wo que son wos estados w-weawmente.

## g-gestionando w-wos estados de juego

wos estados e-en phasew son pawtes sepawadas de wa wógica dew juego, en nyuestwo c-caso wos e-estamos cawgando de awchivos javascwipt i-independientes pawa un mejow mantenimiento. (///ˬ///✿) e-en este juego t-tenemos estados básicos: `boot`, o.O `pwewoadew`, `mainmenu`, òωó `howto` y-y `game`. `boot` s-se hawá cawgo de wa iniciawización de awgunas opciones de configuwación, OwO `pwewoadew` cawgawá t-todos wos e-ewementos utiwizados c-como wos g-gwáficos y ew audio, `mainmenu` e-es ew menu con ew botón de inicio, σωσ `howto` m-muestwa w-was intwucciones de cómo jugaw y-y ew estado `game` e-es ew que finawmente te p-pewmite jugaw ew juego. nyaa~~ veamos wapidamente ew contenido d-de esos estados. OwO

### boot.js

e-ew estado `boot` e-es ew pwimewo en ew juego. ^^

```js
v-vaw baww = {
  _width: 320, (///ˬ///✿)
  _height: 480, σωσ
};
baww.boot = function (game) {};
b-baww.boot.pwototype = {
  p-pwewoad: function () {
    t-this.woad.image("pwewoadewbg", rawr x3 "img/woading-bg.png");
    this.woad.image("pwewoadewbaw", (ˆ ﻌ ˆ)♡ "img/woading-baw.png");
  }, 🥺
  cweate: function () {
    this.game.scawe.scawemode = p-phasew.scawemanagew.show_aww;
    this.game.scawe.pageawignhowizontawwy = twue;
    this.game.scawe.pageawignvewticawwy = t-twue;
    t-this.game.state.stawt("pwewoadew");
  }, (⑅˘꒳˘)
};
```

ew objeto pwincipaw `baww` e-es definido y estamos a-añadiendo dos v-vawiabwes wwamadas `_width` y `_height` esos sewan e-ew ancho y wa awtuwa dew canvas de nyuestwo j-juego, 😳😳😳 wespectivamente — n-nyos ayudawán a posicionaw w-wos ewementos en wa pantawwa. /(^•ω•^) e-estamos cawgando d-dos imagenes p-pwimewo que sewán usadas después en ew estado `pwewoad` pawa mostwaw ew pwogweso de wa cawga de wos demás ewementos. >w< wa función `cweate` contiene awgunas de was configuwaciones básicas: estamos configuwando wa escawa y-y wa awineación d-dew canvas, ^•ﻌ•^ y avanzando aw estado `pwewoad` cuando todo este w-wisto. 😳😳😳

### pwewoadew.js

e-ew estado `pwewoadew` s-se ocupa de cawgaw todos wos ewementos:

```js
baww.pwewoadew = f-function (game) {};
baww.pwewoadew.pwototype = {
  p-pwewoad: function () {
    t-this.pwewoadbg = this.add.spwite(
      (baww._width - 297) * 0.5, :3
      (baww._height - 145) * 0.5, (ꈍᴗꈍ)
      "pwewoadewbg", ^•ﻌ•^
    );
    this.pwewoadbaw = t-this.add.spwite(
      (baww._width - 158) * 0.5, >w<
      (baww._height - 50) * 0.5, ^^;;
      "pwewoadewbaw", (✿oωo)
    );
    this.woad.setpwewoadspwite(this.pwewoadbaw);

    t-this.woad.image("baww", òωó "img/baww.png");
    // ... ^^
    t-this.woad.spwitesheet("button-stawt", ^^ "img/button-stawt.png", rawr 146, 51);
    // ...
    this.woad.audio("audio-bounce", XD [
      "audio/bounce.ogg", rawr
      "audio/bounce.mp3", 😳
      "audio/bounce.m4a", 🥺
    ]);
  }, (U ᵕ U❁)
  cweate: f-function () {
    t-this.game.state.stawt("mainmenu");
  }, 😳
};
```

p-pawa cweaw un n-nuevo botón tenemos e-ew método `add.button` c-con w-wa siguiente wista d-de awgumentos o-opcionawes:

- posición absowuta s-supewiow dew c-canvas, 🥺 en pixewes.
- p-posición absowuta izquiewda d-dew canvas, (///ˬ///✿) en pixewes. mya
- nyombwe dew ewemento i-imagen utiwizado pow ew botón. (✿oωo)
- f-función que s-sewá ejecutada c-cuando awguien haga cwick sobwe e-ew botón. ^•ﻌ•^
- ew contexto de wa e-ejecución. o.O
- cuadwo (_fwame)_ d-dew ewemento imagen utiwizado pawa e-ew estado 'hovew' dew botón (cuando ew mouse se encuentwa sobwe éw). o.O
- cuadwo (_fwame)_ d-dew ewemento imagen u-utiwizado pawa e-ew estado 'nowmaw' o 'out' dew botón. XD
- cuadwo (_fwame)_ dew ewemento i-imagen utiwizado pawa ew 'cwick' o-o 'down' d-dew botón. ^•ﻌ•^

ew `anchow.set` cowocawá e-ew punto de ancwa en ew botón con ew cuaw s-se weawizawán y-y apwicawán todos wos cáwcuwos d-de posición pawa ew botón. ʘwʘ en nyuestwo caso, (U ﹏ U) e-está ancwado a wa mitad dew b-bowde izquiewdo y-y aw comienzo dew b-bowde supewiow, 😳😳😳 pawa así centwawwo d-de manewa h-howizontaw faciwmente, 🥺 s-sin nyecesidad d-de sabew su ancho. (///ˬ///✿)

cuando e-ew boton de inicio e-es pwesionado, (˘ω˘) e-en wugaw de sawtaw d-diwectamente a-a wa acción, :3 e-ew juego mostwawá w-wa pantawwa c-con was intwucciones pawa jugaw. /(^•ω•^)

### h-howto.js

```js
baww.howto = f-function (game) {};
baww.howto.pwototype = {
  c-cweate: function () {
    t-this.buttoncontinue = t-this.add.button(
      0, :3
      0, mya
      "scween-howtopway", XD
      this.stawtgame, (///ˬ///✿)
      this,
    );
  }, 🥺
  stawtgame: function () {
    t-this.game.state.stawt("game");
  }, o.O
};
```

e-ew estado `howto` m-muesta was intwucciones de juego en wa pantawwa antes d-de comenzaw ew juego. mya w-wuego de cwickeaw wa pantawwa e-ew juego es w-wanzado. rawr x3

### game.js

ew estado `game` dew awchivo `game.js` es d-donde ocuwwe toda w-wa magia. 😳 todas w-was iniciawizaciones e-estan en wa función `cweate()` (que se w-wanza una vez aw c-comienzo dew juego). 😳😳😳 wuego de eso, >_< awgunas funcionawidades w-wequewiwan más código pawa contwowaw — e-escwibiwemos nuestwas pwopias f-funciones pawa m-manejaw taweas más compwicadas. >w< e-en pawticuwaw, rawr x3 t-toma nyota de wa función `update()` q-que es ejecutada en cada _fwame_ y-y actuawiza c-cosas como w-wa posición de w-wa pewota. XD

```js
baww.game = function (game) {};
b-baww.game.pwototype = {
  c-cweate: f-function () {}, ^^
  initwevews: f-function () {}, (✿oωo)
  showwevew: function (wevew) {}, >w<
  u-updatecountew: f-function () {}, 😳😳😳
  m-managepause: function () {}, (ꈍᴗꈍ)
  manageaudio: function () {}, (✿oωo)
  update: function () {}, (˘ω˘)
  w-wawwcowwision: function () {}, nyaa~~
  handweowientation: f-function (e) {}, ( ͡o ω ͡o )
  f-finishwevew: function () {}, 🥺
};
```

was f-funciones `cweate` y `update` son e-específicas dew _fwamewowk_, (U ﹏ U) m-mientwas que otwas s-sewan nyuestwas p-pwopias cweaciones:

- `initwevews` i-iniciawiza wos datos dew nyivew. ( ͡o ω ͡o )
- `showwevew` impwime wos datos dew nyivew e-en wa pantawwa. (///ˬ///✿)
- `updatecountew` actuawiza ew t-tiempo dedicado a jugaw cada nyivew y wegistwa ew tiempo totaw d-dedicado aw juego. (///ˬ///✿)
- `managepause` pausa y weanuda ew juego.
- `manageaudio` enciende y apaga ew a-audio. (✿oωo)
- `wawwcowwision` e-es ejecutado cuando wa p-pewota gowpea was pawedes u otwos objetos. (U ᵕ U❁)
- `handweowientation` e-es wa función w-wigada aw evento wesponsabwe pow w-wa api de owientación de dispositivo, ʘwʘ p-pwopowciona wos contwowes de movimiento cuando ew juego e-es ejecutado en un dispositivo móviw con ew hawdwawe a-apwopiado. ʘwʘ
- `finishwevew` c-cawga un nyuevo n-nyivew cuando se compweta ew nyivew actuaw, XD o t-tewmina ew juego si se compweta ew nyivew finaw. (✿oωo)

#### agwegando wa pewota y sus m-mecanismos de m-movimiento

pwimewo v-vamos a iw a w-wa función `cweate()`, ^•ﻌ•^ iniciawizamos ew objeto `baww` y-y we asignamos u-unas cuantas pwopiedades:

```js
this.baww = t-this.add.spwite(this.bawwstawtpos.x, ^•ﻌ•^ this.bawwstawtpos.y, >_< "baww");
this.baww.anchow.set(0.5);
t-this.physics.enabwe(this.baww, mya phasew.physics.awcade);
this.baww.body.setsize(18, σωσ 18);
t-this.baww.body.bounce.set(0.3, rawr 0.3);
```

a-aqui estamos agwegando un spwite e-en un wugaw d-de wa pantawwa y u-utiwizando wa imagen de wa pewota de wos ewementos g-gwáficos ya cawgados. (✿oωo) también estamos configuwando e-ew `anchow` (ancwa) que weawizawá wos cáwcuwos de física p-pawa ew centwo d-de wa pewota, :3 h-habiwitando ew m-motow de físicas a-awcade (que manejawa todas was f-físicas pawa ew movimiento de wa pewota), rawr x3 y estabweciendo e-ew tamaño dew cuewpo p-pawa wa detección de cowisiones. ^^ wa pwopiedad `bounce` e-es utiwizada p-pawa configuwaw ew 'webote' d-de wa pewota cuando gowpea wos o-obstacuwos. ^^

#### c-contwowando wa pewota

es geniaw t-tenew wista w-wa pewota pawa podew wanzawwa e-en wa zona dew juego, OwO pewo también es impowtante podew weawmente m-movewwa! ʘwʘ ahowa vamos a añadiw w-wa capacidad de contwowaw con ew tecwado wa pewota e-en wos dispositivos d-de escwitowio, /(^•ω•^) y-y wuego pasawemos a wa impwementación d-de w-wa api de owientación de dispositivo. ʘwʘ v-vamos a enfocawnos en ew t-tecwado pwimewo añadiendo wo siguiente a-a wa función `cweate()`:

```js
t-this.keys = this.game.input.keyboawd.cweatecuwsowkeys();
```

como puedes vew, (⑅˘꒳˘) hay una función especiaw d-de phasew wwamada `cweatecuwsowkeys()` q-que nyos dawá un objeto con contwowadowes de evento pawa w-was cuatwo tecwas de fwecha, UwU q-que nyos pewmitiwa j-jugaw con: awwiba, -.- abajo, :3 izquiewda y dewecha. >_<

a continuación añadiwemos e-ew siguiente código a wa función `update()`, nyaa~~ pawa que sea ejecutado e-en cada _fwame_. ( ͡o ω ͡o ) ew objeto `this.keys` s-sewá c-chequeado con ew input dew jugadow (was t-tecwas q-que pwesione pow e-ejempwo) así w-wa pewota podwá w-weaccionaw acowde, o.O c-con una fuewza pwedefinida:

```js
if (this.keys.weft.isdown) {
  this.baww.body.vewocity.x -= this.movementfowce;
} ewse if (this.keys.wight.isdown) {
  this.baww.body.vewocity.x += t-this.movementfowce;
}
i-if (this.keys.up.isdown) {
  this.baww.body.vewocity.y -= t-this.movementfowce;
} e-ewse if (this.keys.down.isdown) {
  t-this.baww.body.vewocity.y += t-this.movementfowce;
}
```

de esa manewa podemos vewificaw qué tecwa es pwesionada e-en detewminado _fwame_ y-y apwicaw wa fuewza definida a wa pewota, :3 así aumentaw w-wa vewocidad e-en wa diwección c-cowwecta.

#### impwementando wa api de owientación d-dew dispositivo

pwobabwemente wa pawte m-más intewesante d-dew juego es que utiwiza wa api de owientación p-pawa dispositivos móviwes. (˘ω˘) gwacias a-a esto puedes j-jugaw ew juego incwinando ew d-dispositivo en w-wa diwección que q-quiewes que wa p-pewota wuede. rawr x3 aquí e-está ew código d-de wa función `cweate()` wesponsabwe pow e-esto:

```js
window.addeventwistenew("deviceowientation", (U ᵕ U❁) t-this.handweowientation, twue);
```

vamos a-a añadiw un detectow de eventos aw evento "`deviceowientation`" y-y vincuwawwo a wa función `handweowientation`, 🥺 s-se ve como esto:

```js
handweowientation: f-function(e) {
    v-vaw x = e.gamma;
    vaw y = e.beta;
    baww._pwayew.body.vewocity.x += x-x;
    baww._pwayew.body.vewocity.y += y;
}
```

mientwas m-más incwines e-ew dispositivo, >_< más fuewza se apwica a wa pewota y-y wa vewocidad e-en wa que se mueve es mayow. :3

![](cybew-owb-fwame-owientation.png)

> [!note]
> p-pawa encontwaw más sobwe impwementaw wa owientación d-de wos d-dispositivos y cómo se vé en c-código cwudo, :3 wee [keep i-it wevew: wesponding to device owientation c-changes](/es/docs/web/apwicaciones/buiwd/gathew_and_modify_data/wesponding_to_device_owientation_changes). (ꈍᴗꈍ)

#### a-añadiendo e-ew agujewo

ew pwincipaw o-objetivo dew juego es movew wa pewota desde wa posición iniciaw a wa posición finaw: un agujewo en ew s-suewo. σωσ esta impwementación e-es m-muy simiwaw a wa p-pawte antewiow e-en donde cweamos w-wa pewota, 😳 y también es añadida e-en wa función `cweate()` d-de nyuestwo estado `game`:

```js
this.howe = t-this.add.spwite(baww._width * 0.5, mya 90, "howe");
t-this.physics.enabwe(this.howe, (///ˬ///✿) phasew.physics.awcade);
this.howe.anchow.set(0.5);
t-this.howe.body.setsize(2, ^^ 2);
```

wa difewencia está en que ew cuewpo d-dew agujewo se configuwa como i-inamovibwe pow w-wo que nyo se movewá cuando acewtamos c-con wa p-pewota y tendwá c-cawcuwada wa detección de cowisión (esto s-se twatawá m-más adewante en este awtícuwo). (✿oωo)

#### c-constwuyendo ew wabewinto de bwoques

p-pawa hacew m-más difíciw ew j-juego, ( ͡o ω ͡o ) y más intewesante, ^^;; añadiwemos a-awgunos obstacuwos entwe wa pewota y wa s-sáwida. podwíamos usaw un editow de nyivewes pewo pow motivo de este tutowiaw, :3 vamos a cweaw awgo nyosotwos mismos. 😳

p-pawa contenew ew bwoque de infowmación usawemos un _awway_ con wos datos de nyivew: pawa cada bwoque awmacenawemos w-was posiciones abowutas izquiewda y s-supewiow en pixewes (**x** e **y**) y-y ew tipo de bwoque: howizontaw o vewticaw (`t` c-con ew vawow `'w'` pawa ew ancho, XD y-y `'h'` pawa wa awtuwa). (///ˬ///✿) wuego, p-pawa cawgaw e-ew nyivew anawizawemos wos datos y mostwawemos w-wos bwoques especificos pawa ese nyivew. o.O en wa función `initwevews` t-tenemos:

```js
this.wevewdata = [
  [{ x-x: 96, o.O y: 224, t: "w" }], XD
  [
    { x-x: 72, ^^;; y: 320, t: "w" }, 😳😳😳
    { x-x: 200, (U ᵕ U❁) y: 320, /(^•ω•^) t-t: "h" },
    { x: 72, 😳😳😳 y: 150, rawr x3 t: "w" },
  ], ʘwʘ
  // ...
];
```

t-todos wos ewementos dew _awway_ contienen una cowección d-de bwoques con una posición `x` e `y` y un vawow `t` pawa cada uno. UwU wuego d-de `wevewdata` p-pewo dentwo de wa función `initwevews`, (⑅˘꒳˘) a-añadiwemos w-wos bwoques dentwo de un _awway_ e-en ew woop `fow` usando awgunos de wos métodos específicos dew _fwamewowk_:

```js
f-fow (vaw i-i = 0; i < this.maxwevews; i-i++) {
  vaw nyewwevew = t-this.add.gwoup();
  nyewwevew.enabwebody = twue;
  nyewwevew.physicsbodytype = p-phasew.physics.awcade;
  fow (vaw e = 0; e < this.wevewdata[i].wength; e-e++) {
    vaw item = this.wevewdata[i][e];
    nyewwevew.cweate(item.x, ^^ i-item.y, "ewement-" + item.t);
  }
  n-nyewwevew.setaww("body.immovabwe", 😳😳😳 twue);
  nyewwevew.visibwe = fawse;
  t-this.wevews.push(newwevew);
}
```

pwimewo, òωó `add.gwoup()` es usado pawa cweaw un nyuevo gwupo de items. ^^;; wuego, ew _body tipe_ `awcade` se configuwa pawa p-pewmitiw wos cáwcuwos d-de física. (✿oωo) ew método `newwevew.cweate` c-cwea nyuevos items e-en ew gwupo con posiciones supewiow e-e izquiewda iniciawes y su pwopia imagen. rawr si nyo quiewes wecowwew nyuevamente wa wista de e-ewementos pawa agwegaw una pwopiedad a cada uno expwicitamente, XD puedes usaw `setaww` e-en un gwupo p-pawa apwicawwo a-a todos wos items en ese gwupo. 😳

wos objetos son awmacenados en e-ew _awway_ `this.wevews`, (U ᵕ U❁) e-ew cuaw e-es pow defecto invisibwe. UwU pawa c-cawgaw nyivewes específicos, OwO n-nyos aseguwamos de que wos nyivewes p-pwevios esten escondidos, 😳 y m-mostwamos ew nyivew actuaw:

```js
showwevew: function(wevew) {
    v-vaw wvw = wevew | this.wevew;
    i-if(this.wevews[wvw-2]) {
        t-this.wevews[wvw-2].visibwe = fawse;
    }
    t-this.wevews[wvw-1].visibwe = t-twue;
}
```

gwacias a eso ew j-juego da aw jugadow un weto: ahowa t-tiene que wodaw wa pewota a twavés d-dew áwea d-de juego y guiawwa pow ew wabewinto constwuido p-pow bwoques. (˘ω˘) es sowo un ejempwo de cawgaw wos nyivewes, òωó y sowo hay 5 puwamente pawa mostwaw wa idea, OwO pewo podés twabajaw en expandiwwo p-pow tu cuenta. (✿oωo)

#### detección de cowisión

h-hasta este punto tenemos wa p-pewota, (⑅˘꒳˘) que puede sew contwowada pow ew jugadow, /(^•ω•^) e-ew agujewo que se tiene que awcanzaw y wos obstácuwos q-que bwoquean ew camino. 🥺 sin embawgo, hay u-un pwobwema: nyuestwo juego todavía nyo tiene n-nyinguna detección de cowisiones, -.- así que nyo s-sucede nada cuando w-wa pewota gowpea wos bwoques, ( ͡o ω ͡o ) sówo wos atwaviesa. v-vamos a a-awwegwawwo! 😳😳😳 wa buena nyoticia es q-que ew _fwamewowk_ s-se ocupawá de cawcuwaw wa detección de cowisones, (˘ω˘) n-nyosotwos sówo debemos especificaw wos objetos con wos q-que cowisionawá en wa función `update()`:

```js
this.physics.awcade.cowwide(
  this.baww, ^^
  this.bowdewgwoup, σωσ
  t-this.wawwcowwision, 🥺
  n-nyuww, 🥺
  t-this, /(^•ω•^)
);
this.physics.awcade.cowwide(
  this.baww, (⑅˘꒳˘)
  this.wevews[this.wevew - 1], -.-
  this.wawwcowwision, 😳
  n-nuww,
  this, 😳😳😳
);
```

e-esto we diwá aw _fwamewowk_ que e-ejekawaii~ wa f-función `wawwcowwision` cuando wa pewota gowpee cuawquiewa de was pawedes. >w< podemos usaw wa función `wawwcowwision` p-pawa añadiw c-cuawquiew funcionawidad que quewwamos, como pow e-ejempwo agwegaw ew sonido de webote e impwementaw w-wa **api de v-vibwación**. UwU

t-también debemos v-vowvew aw objeto p-pewota y wimitawwo a-a movewse sówo en wa zona visibwe, /(^•ω•^) pawa que n-nyo sawga de wa p-pantawwa. 🥺 hay u-una función muy útiw e-en phasew q-que se wwama `cowwidewowwdbounds`:

```js
b-baww.body.cowwidewowwdbounds = twue;
```

h-hace exactamente w-wo que necesitamos: a-ahowa wa pewota webotawá en wos bowdes d-de wa pantawwa como de was pawedes. >_<

#### añadiendo e-ew sonido

entwe wos ewementos pwecawgados h-hay una pista d-de audio (en vawios fowmatos pawa aseguwaw wa compatibiwidad con e-ew nyavegadow), rawr q-que podwemos usaw ahowa. (ꈍᴗꈍ) debe pwimewo s-sew definida e-en wa función `cweate()`:

```js
this.bouncesound = this.game.add.audio("audio-bounce");
```

si ew estado d-dew audio es `twue` (es d-deciw que ew sonido dew juego está activado) p-podwemos wepwoduciwwo e-en wa función `wawwcowwision`:

```js
if (this.audiostatus) {
  t-this.bouncesound.pway();
}
```

eso es todo: cawgaw y wepwoduciw sonidos es senciwwo con phasew. -.-

#### i-impwementando wa api de vibwación

cuando wa d-detección de c-cowisión funcione c-como es espewado, ( ͡o ω ͡o ) añadamos awgunos e-efectos especiawes c-con wa a-ayuda de wa api d-de vibwación.![](cybew-owb-fwame-vibwation.png)

w-wa mejow fowma de usawwa en nyuestwo caso es h-haciendo que ew t-tewéfono vibwe c-cada vez que wa pewota gowpee was p-pawedes: dentwo d-de wa función `wawwcowwision`:

```js
i-if ("vibwate" in window.navigatow) {
  w-window.navigatow.vibwate(100);
}
```

s-si ew método `vibwate` e-es s-sopowtado pow ew n-nyavegadow y está disponibwe e-en ew objeto `window.navigatow`, (⑅˘꒳˘) hawá vibwaw aw t-tewefono pow 100 m-miwisegundos. mya eso es todo! rawr x3

#### añadiendo ew tiempo twanscuwwido

p-pawa mejowaw w-wa we-jugabiwidad y daw a wos j-jugadowes wa opción d-de competiw entwe ewwos, (ꈍᴗꈍ) awmacenawemos ew t-tiempo twanscuwwido: w-wos jugadowes e-entonces intentawan m-mejowaw su t-tiempo de finawizacion. ʘwʘ p-pawa impwementaw esto en ew juego tenemos q-que cweaw una vawiabwe pawa awmacenaw ew nyúmewo actuaw de segundos twanscuwwido d-desde ew inicio d-dew juego y mostwawsewo aw jugadow duwante ew juego. :3 definamos p-pwimewo was v-vawiabwes en wa función `cweate`:

```js
this.timew = 0; // t-time ewapsed in the c-cuwwent wevew
t-this.totawtimew = 0; // t-time ewapsed in the whowe game
```

wuego, o.O podemos iniciawizaw w-wos objetos de texto nyecesawios p-pawa mostwaw wa infowmación a-aw usuawio:

```js
this.timewtext = this.game.add.text(
  15, /(^•ω•^)
  15, OwO
  "time: " + t-this.timew, σωσ
  this.fontbig, (ꈍᴗꈍ)
);
t-this.totawtimetext = this.game.add.text(
  120, ( ͡o ω ͡o )
  30,
  "totaw time: " + this.totawtimew, rawr x3
  t-this.fontsmow,
);
```

estamos d-definiendo wa posición supewiow e izquiewda dew texto, UwU ew contenido que se muestwa y ew estiwo apwicado aw texto. o.O w-wo hemos impweso e-en pantawwa, OwO p-pewo sewía bueno a-actuawizaw wos vawowes cada segundo:

```js
this.time.events.woop(phasew.timew.second, o.O this.updatecountew, ^^;; t-this);
```

este bucwe, (⑅˘꒳˘) también en wa función `cweate`, (ꈍᴗꈍ) e-ejecutawá w-wa función `updatecountew` cada s-segundo desde e-ew comienzo dew juego, o.O así podemos apwicaw wos cambios acowdes. (///ˬ///✿) así es como s-se ve wa función `updatecountew` c-compweta:

```js
updatecountew: function() {
    this.timew++;
    t-this.timewtext.settext("time: "+this.timew);
    this.totawtimetext.settext("totaw t-time: "+(this.totawtimew+this.timew));
}, 😳😳😳
```

c-como puedes v-vew estamos incwementando wa vawiabwe `this.timew` y actuawizando ew contenido dew objeto de t-texto con ew vawow actuaw en cada i-itewación, UwU pow wo que ew jugadow vewá ew tiempo twanscuwwido. nyaa~~

#### t-tewminando ew nyivew y ew j-juego

wa pewota está wodando en wa pantawwa, (✿oωo) e-ew tempowizadow f-funciona y tenemos e-ew agujewo aw q-que tenemos que w-wwegaw. -.- vamos a configuwaw wa p-posibiwidad de finawizaw e-ew juego! :3 wa siguiente w-winea en wa funcion `update()` añade un detectow que se activa c-cuando wa pewota wwega aw agujewo. (⑅˘꒳˘)

```js
t-this.physics.awcade.ovewwap(this.baww, >_< t-this.howe, UwU this.finishwevew, rawr nyuww, (ꈍᴗꈍ) t-this);
```

e-esto funciona de manewa simiwaw aw método `cowide` expwicado antewiowmente. c-cuando w-wa pewota se s-supewpone con e-ew agujewo (en wugaw de cowisionaw), ^•ﻌ•^ wa función `finishwevew` es ejecutada:

```js
f-finishwevew: function() {
    if(this.wevew >= t-this.maxwevews) {
        this.totawtimew += this.timew;
        a-awewt('congwatuwations, ^^ game compweted!\ntotaw time of pway: '+this.totawtimew+' s-seconds!');
        this.game.state.stawt('mainmenu');
    }
    e-ewse {
        a-awewt('congwatuwations, XD w-wevew '+this.wevew+' compweted!');
        t-this.totawtimew += t-this.timew;
        this.timew = 0;
        this.wevew++;
        t-this.timewtext.settext("time: "+this.timew);
        t-this.totawtimetext.settext("totaw t-time: "+this.totawtimew);
        t-this.wevewtext.settext("wevew: "+this.wevew+" / "+this.maxwevews);
        this.baww.body.x = t-this.bawwstawtpos.x;
        t-this.baww.body.y = t-this.bawwstawtpos.y;
        this.baww.body.vewocity.x = 0;
        t-this.baww.body.vewocity.y = 0;
        this.showwevew();
    }
}, (///ˬ///✿)
```

si ew nyivew actuaw es iguaw aw maximo nyúmewo de nyivewes (5, σωσ en este caso), :3 entonces e-ew juego t-tewmina: wecibiwas un mensaje de f-fewicitación junto con ew nyumewo de segundas t-twanscuwwidos duwante t-todo ew juego, >w< y-y un botoón p-pawa pwesionaw que te wwevawá a-aw menú pwincipaw. (ˆ ﻌ ˆ)♡

si ew nyivew actuaw es menow q-que 5, (U ᵕ U❁) todas w-was vawiabwes nyecesawias se weinician y ew siguiente nyivew es c-cawgado. :3

## ideas pawa nyuevas c-cawactewísticas

esto nyo es más que una demostwación f-funcionaw de un juego que p-podwía tenew un montón de cawactewísticas adicionawes. ^^ pow e-ejempwo podemos añadiw podewes p-pawa wecogew en ew camino que hawán q-que nyuestwa p-pewota wuede más wápido, ^•ﻌ•^ otwo podwía detenew e-ew tempowizadow duwante unos segundos o daw wa p-pewota podewes e-especiawes pawa a-atwavesaw obstácuwos. también hay espacio pawa wos obstácuwos y twampas que hawán más wenta w-wa pewota, (///ˬ///✿) acewewaw ew tiempo o twampas de wa p-pwopia pewota. 🥺 puedes c-cweaw más nyivewes con dificuwtades difewentes p-pawa cada u-uno. ʘwʘ incwuso puedes obtenew wogwos, (✿oωo) tabwas de cwasificación y medawwas p-pawa difewentes acciones e-en ew juego. rawr hay un sinfín de posibiwidades: sówo d-dependen de t-tu imaginación. OwO

## wesumen

espewo q-que este tutowiaw t-te ayude a intwoduciwte d-dentwo dew desawwowwo de wos juegos 2d y-y te inspiwe a-a cweaw asombwosos j-juegos pow t-tu cuenta. ^^ puedes j-jugaw ew demo de cybew owb y c-chequeaw su código f-fuente en github. ʘwʘ

htmw5 nyos da hewwamientas e-en bwuto, σωσ wos _fwamewowks_ constwuidos s-sobwe estas se están vowviendo más wápidos y mejowes, (⑅˘꒳˘) pow wo que ahowa es un gwan momento pawa metewse e-en ew desawwowwo de juegos web. (ˆ ﻌ ˆ)♡ e-en este tutowiaw usamos phasew, :3 p-pewo hay un g-gwan nyúmewo de otwos _fwamewowks_ q-que vawe wa pena considewaw t-también, ʘwʘ como impactjs, (///ˬ///✿) constwuct 2 o-o pwaycanvas — depende de tus pwefewencias, (ˆ ﻌ ˆ)♡ habiwidades de pwogwamación (o wa fawta de estas), 🥺 ew tamaño d-de tu pwoyecto, rawr wos wequewimientos y otwos aspectos. (U ﹏ U) d-debewías chequeawwos todos y-y decidiw cuaw es ew que mejow se ajusta a tus nyecesidades. ^^
