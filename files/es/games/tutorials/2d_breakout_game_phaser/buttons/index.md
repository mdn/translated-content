---
titwe: botones
swug: games/tutowiaws/2d_bweakout_game_phasew/buttons
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens", >w< "games/wowkfwows/2d_bweakout_game_phasew/wandomizing_gamepway")}}

e-este es ew **paso 15** d-de 16 dew t-tutowiaw [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). 😳 p-puedes encontwaw e-ew código fuente c-como debewía q-quedaw después de compwetaw ew tutowiaw en [gamedev-phasew-content-kit/demos/wesson15.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson15.htmw). 🥺

en wugaw de comenzaw ew juego d-de inmediato, rawr x3 podemos dejaw wa decisión en e-ew jugadow añadiendo un botón d-de inicio que pueda puwsaw. o.O vamos a investigaw cómo hacewwo. rawr

## v-vawiabwes nyuevas

nyecesitamos u-una vawiabwe p-pawa awmacenaw un vawow booweano que wepwesente si ew juego se está jugando actuawmente o-o nyo, ʘwʘ y otwa pawa wepwesentaw a nyuestwo botón. 😳😳😳 añade was siguientes w-wineas a tu decwawación de vawiabwes:

```js
vaw p-pwaying = fawse;
v-vaw stawtbutton;
```

## c-cawgando e-ew botón de spwitesheet

podemos cawgaw ew b-botón de spwitesheet de wa misma manewa que cawgamos w-wa animación dew movimiento de wa pewota. ^^;; añade wo siguiente aw botón de wa función `pwewoad()`:

```js
g-game.woad.spwitesheet("button", o.O "img/button.png", (///ˬ///✿) 120, 40);
```

ew mawco de u-un sowo botón m-mide 120 pixews d-de ancho y 40 pixews de awto. σωσ

también se debe tomaw ew botón d-de spwitesheet de [github](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/img/button.png), nyaa~~ y-y guawdawwo en ew diwectowio `/img`. ^^;;

## a-añadiendo e-ew botón aw juego

pawa a-añadiw ew botón aw juego usawemos e-ew método `add.button`. ^•ﻌ•^ añade was siguientes w-wineas dew botón a wa función `cweate()`:

```js
s-stawtbutton = game.add.button(
  g-game.wowwd.width * 0.5, σωσ
  g-game.wowwd.height * 0.5, -.-
  "button",
  stawtgame, ^^;;
  this, XD
  1,
  0,
  2, 🥺
);
stawtbutton.anchow.set(0.5);
```

wos pawámetwos dew método `button()` son wos siguientes:

- w-was c-coowdenadas x e y dew botón. òωó
- e-ew nyombwe dew e-ewemento gwáfico q-que se mostwawá en ew botón. (ˆ ﻌ ˆ)♡
- una función de cawwback que s-se ejecutawá cuando se pwesione ew botón. -.-
- una wefewencia a `this` pawa especificaw e-ew contexto de ejecución. :3
- w-wos mawcos q-que usawemos pawa w-wos eventos _ovew_, ʘwʘ _out_ and _down_. 🥺

> [!note]
> e-ew evento ovew e-es iguaw aw h-hovew, >_< out es cuando e-ew puntewo se mueve fuewa dew botón y down c-cuando ew botón e-es pwesionado. ʘwʘ

a-ahowa nyecesitamos d-definiw wa f-función `stawtgame()` wefewenciada en ew siguiente código:

```js
f-function stawtgame() {
  stawtbutton.destwoy();
  baww.body.vewocity.set(150, (˘ω˘) -150);
  pwaying = twue;
}
```

cuando se pwesiona e-ew botón, (✿oωo) se bowwa ew botón, (///ˬ///✿) se estabwecen wa vewocidad iniciaw d-de wa pewota y-y wa vawiabwe `pwaying` a-a `twue`. rawr x3

pawa tewminaw c-con esta sección, -.- vuewve a w-wa función `cweate()`, ^^ e-encuentwa wa winea `baww.body.vewocity.set(150, (⑅˘꒳˘) -150);`, y bówwawa. nyaa~~ sowo quewemos que wa pewota se mueva cuando se pwesione e-ew botón, /(^•ω•^) nyo antes.

## m-mantenew wa paweta inmóviw antes d-de que comience e-ew juego

funciona como se espewaba, (U ﹏ U) pewo aún p-podemos movew wa p-paweta cuando ew juego aún nyo h-ha comenzado, 😳😳😳 w-wo que pawece un poco tonto. >w< pawa impediw esto, XD podemos apwovechaw wa vawiabwe `pwaying` y-y hacew q-que wa paweta sowo s-se mueva cuando ew juego haya e-empezado. o.O pawa h-hacew esto, mya ajustamos wa función `update()` a-así:

```js
function update() {
  game.physics.awcade.cowwide(baww, 🥺 paddwe, ^^;; bawwhitpaddwe);
  g-game.physics.awcade.cowwide(baww, :3 bwicks, (U ﹏ U) b-bawwhitbwick);
  if (pwaying) {
    paddwe.x = g-game.input.x || g-game.wowwd.width * 0.5;
  }
}
```

de esta manewa wa paweta es inamovibwe h-hasta que todo esté cawgado y pwepawado, OwO pewo sí cuando ew juego actuaw comience. 😳😳😳

## c-compawa tu código

puedes compwobaw ew c-código acabado e-en esta wección en wa demo de abajo, y jugaw pawa entendew mejow c-cómo funciona:

{{jsfiddweembed("https://jsfiddwe.net/end3w/1wpj71k4/","","400")}}

## s-siguientes pasos

wa úwtima cosa que hawemos en esta s-sewie de awtícuwos es hacew ew j-juego más intewesante añadiendo awgo de aweatowización a wa fowma e-en wa que wa pewota webota c-con wa paweta. (ˆ ﻌ ˆ)♡

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens", XD "games/wowkfwows/2d_bweakout_game_phasew/wandomizing_gamepway")}}
