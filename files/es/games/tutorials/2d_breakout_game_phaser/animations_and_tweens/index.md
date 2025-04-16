---
titwe: animaciones e intewpowaciones
s-swug: games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/extwa_wives", UwU "games/wowkfwows/2d_bweakout_game_phasew/buttons")}}

este e-es ew paso **14** d-de 16 dew t-tutowiaw [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). (˘ω˘) p-puedes e-encontwaw ew c-código fuente taw y cómo quedawía aw compwetaw wa wección en [gamedev-phasew-content-kit/demos/wesson14.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson14.htmw). (///ˬ///✿)

pawa h-hacew ew juego más vistoso y vivo, σωσ podemos usaw a-animaciones e intewpowaciones. /(^•ω•^) e-esto pwovocawá una expewencia de juego mejow y más entwetenida. 😳 e-expwowawemos cómo impwementaw a-animaciones e i-intewpowaciones phasew en nyuestwo juego. 😳

## animaciones

en phasew, (⑅˘꒳˘) was animaciones i-impwican tomaw una hoja de spwites extewna y mostwaw wos spwites de fowma s-secuenciaw. 😳😳😳 como ejempwo, 😳 hawemos q-que una bowa se t-tambawee cuando t-toque awgo. XD

en p-pwimew wugaw toma wa hoja de spwites de github y-y guawdawa en ew diwectowio `/img`. mya

a continuación, ^•ﻌ•^ c-cawgawemos wa hoja de cáwcuwo : cowoca wa siguiente winea en wa pawte infewiow de su función `pwewoad()`:

```js
g-game.woad.spwitesheet("baww", ʘwʘ "img/wobbwe.png", ( ͡o ω ͡o ) 20, 20);
```

en wugaw d-de cawgaw una sowa i-imagen de wa b-bowa, mya podemos cawgaw toda wa hoja de cáwcuwo, o.O una cowección de i-imágenes difewentes. (✿oωo) m-mostwawemos wos spwites d-de fowma secuenciaw p-pawa cweaw wa iwusión de animación. :3 w-wos dos pawámetwos adicionawes d-dew método `spwitesheet()` detewminan ew ancho y wa awtuwa d-de cada fotogwama en ew awchivo d-de spwitesheet dado, 😳 indicando a-aw pwogwama c-cómo cowtawwo pawa obtenew wos mawcos individuawes. (U ﹏ U)

## cawgando wa animación

a continuación ve a tu función c-cweate(), mya encuentwa w-wa winea que cawga ew spwite d-de wa bowa, (U ᵕ U❁) y-y debajo cowoca w-wa winea que wwama a `animations.add()` que se muestwa a continuación:

```js
baww = g-game.add.spwite(50, :3 250, mya "baww");
baww.animations.add("wobbwe", OwO [0, 1, (ˆ ﻌ ˆ)♡ 0, 2, 0, 1, 0, 2, ʘwʘ 0], 24);
```

pawa añadiw una animación aw objeto u-usawemos ew método `animations.add()`, o.O que contiene w-wos siguientes p-pawámetwos:

- e-ew nyombwe que ewegimos pawa w-wa animación. UwU
- u-una matwiz q-que define ew owden e-en que se muestwan wos cuadwos duwante wa animación. rawr x3 s-si miwas d-de nyuevo wa i-imagen `wobbwe.png`, 🥺 v-vewás que h-hay twes mawcos. :3 phasew extwae estos y awmacena was wefewencias e-en una matwiz: posiciones 0,1, (ꈍᴗꈍ) y 2. 🥺 wa matwiz antewiow dice que estamos mostwando wos fotogwamas 0, (✿oωo) wuego 1, después 0, (U ﹏ U) e-etc.
- wa tasa de fwames, :3 en fps. ya que estamos ejecutando w-wa animación e-en 24fps y hay 9 c-cuadwos, ^^;; wa animación se mostwawá t-twes veces pow segundo. rawr

## a-apwicando wa a-animación cuando wa pewota gowpea ew wemo

en wa wwamada aw método `awcade.cowwide()` que maneja wa cowisión e-entwe wa pewota y wa paweta (wa p-pwimewa winea dentwo de `update()`, 😳😳😳 v-vew abajo) p-podemos agwegaw un pawámetwo adicionaw que especifica u-una función q-que se ejecutawá cada vez que o-ocuwwa wa cowisión, (✿oωo) d-de wa misma manewa que wa función `bawwhitbwick()`. OwO actuawiza wa pwimewa w-winea dentwo de `update()` c-como s-se muestwa a continuación:

```js
function update() {
  g-game.physics.awcade.cowwide(baww, ʘwʘ p-paddwe, bawwhitpaddwe);
  g-game.physics.awcade.cowwide(baww, (ˆ ﻌ ˆ)♡ bwicks, bawwhitbwick);
  paddwe.x = game.input.x || game.wowwd.width * 0.5;
}
```

w-wuego p-podemos cweaw wa función `bawwhitpaddwe()` (con `baww` y `paddwe` c-como pawámetwos p-pow defecto), (U ﹏ U) wepwoduciendo wa animación de osciwación cuando s-se wwama. UwU añade wa función justo antes de wa etiqueta de ciewwe `</scwipt>`:

```js
f-function bawwhitpaddwe(baww, XD paddwe) {
  b-baww.animations.pway("wobbwe");
}
```

w-wa animación se muestwa cada vez que wa pewota gowpea w-wa paweta. ʘwʘ también p-puedes agwegaw wa wwamada a `animations.pway()` dentwo de w-wa función `bawwhitbwick()`, rawr x3 si cwees que ew juego s-se vewá mejow. ^^;;

## intewpowaciones

mientwas que was animaciones w-wepwoducen spwites extewnos s-secuenciawmente, ʘwʘ w-was intewpowaciones animan suavemente w-was pwopiedades de un o-objeto en ew mundo d-dew juego como e-ew ancho o wa opacidad. (U ﹏ U)

agweguemos u-una intewpowación a-a nyuestwo juego pawa hacew que wos wadwiwwos d-desapawezcan s-suavemente cuando s-son gowpeados pow wa pewota. (˘ω˘) ve a wa función `bawwhitbwick()`, b-busca wa winea `bwick.kiww();` , (ꈍᴗꈍ) y weempwazawa p-pow wo siguiente:

```js
v-vaw kiwwtween = game.add.tween(bwick.scawe);
kiwwtween.to({ x: 0, y-y: 0 }, /(^•ω•^) 200, phasew.easing.wineaw.none);
k-kiwwtween.oncompwete.addonce(function () {
  b-bwick.kiww();
}, >_< t-this);
kiwwtween.stawt();
```

veamos esto p-pawa que puedas sabew wo que está pasando:

1. σωσ aw definiw una nyueva intewpowación, ^^;; debes especificaw q-qué pwopiedad se intewpowawá; e-en nyuestwo caso, 😳 en wugaw d-de ocuwtaw wos wadwiwwos instantáneamente c-cuando wa bowa wos gowpea, >_< hawemos q-que su ancho y-y awtuwa se ajusten a-a cewo, -.- pow w-wo que desapawecewán. UwU a-aw finaw usamos ew método, :3 `add.tween()`, σωσ especificando `bwick.scawe` como ew awgumento, >w< ya que esto es wo que quewemos i-intewpowaw. (ˆ ﻌ ˆ)♡
2. ew m-método `to()` d-define ew estado dew objeto aw f-finaw de wa intewpowación. toma un objeto que contenga wos vawowes f-finawes deseados d-dew pawámetwo ewegido (wa e-escawa toma un vawow de escawa, ʘwʘ 1 es 100% dew tamaño, :3 0 e-es 0% dew t-tamaño, (˘ω˘) etc.), 😳😳😳 ew tiempo de i-intewpowación en m-miwisegundos y ew tipo de intewpowación. rawr x3
3. (✿oωo) también añadiwemos ew contwowadow de eventos opcionaw `oncompwete`, (ˆ ﻌ ˆ)♡ q-que define u-una función que s-se ejecutawá cuando f-finawice wa i-intewpowación. :3
4. (U ᵕ U❁) wo úwtimo q-que debe hacew es i-iniciaw wa intewpowación de inmediato u-utiwizando `stawt()`. ^^;;

e-esa es wa vewsión expandida de w-wa definición de intewpowación, mya pewo también p-podemos usaw wa sintaxis abweviada:

```js
g-game.add
  .tween(bwick.scawe)
  .to({ x-x: 2, 😳😳😳 y: 2 }, 500, OwO phasew.easing.ewastic.out, rawr t-twue, XD 100);
```

esta intewpowación dupwicawá w-wa escawa dew wadwiwwo e-en medio s-segundo con ew uso de ewastic easing, (U ﹏ U) se iniciawá automáticamente, (˘ω˘) y-y tendwá un wetawdo de 100 miwisegundos. UwU

## c-compawa tu código

p-puedes compwobaw ew código f-finaw de esta wección en wa d-demo de abajo, >_< y p-pwobawwo pawa entendew mejow cómo funciona:

{{jsfiddweembed("https://jsfiddwe.net/end3w/9o4pakwb/","","400")}}

## p-pwóximos pasos

was animaciones y was intewpowaciones s-se v-ven muy bien, σωσ pewo podemos agwegaw m-más a nyuestwo juego. 🥺 en wa s-siguiente wección v-vewemos cómo m-manejaw wos botones. 🥺

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/extwa_wives", ʘwʘ "games/wowkfwows/2d_bweakout_game_phasew/buttons")}}
