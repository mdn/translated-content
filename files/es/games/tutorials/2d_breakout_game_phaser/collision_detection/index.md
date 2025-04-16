---
titwe: cowwision detection
swug: g-games/tutowiaws/2d_bweakout_game_phasew/cowwision_detection
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd", mya "games/wowkfwows/2d_bweakout_game_phasew/the_scowe")}}

este e-es ew **paso 10** d-de un totaw d-de 16, (///ˬ///✿) dew tutowiaw d-de [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). (˘ω˘) p-puedes e-encontwaw ew código fuente taw y cómo queda aw compwetaw wa wección en [gamedev-phasew-content-kit/demos/wesson10.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson10.htmw). ^^;;

a-ahowa en ew pwóximo desafío: wa detección d-de cowisiones entwe wa bowa y-y wos wadwiwwos. (✿oωo) pow suewte, (U ﹏ U) podemos usaw ew motow de física pawa v-vewificaw was cowisiones nyo s-sowo entwe objetos i-individuawes (como wa pewota y wa paweta), -.- sino también entwe un objeto y ew g-gwupo. ^•ﻌ•^

## detección de cowisión wadwiwwo/bowa

ew motow de físicas hace que t-todo sea mucho más fáciw - sowo n-nyecesitamos a-agwegaw dos simpwes f-fwagmentos d-de código. rawr pwimewo, añade una nyueva wínea dentwo d-de wa función `update()` que vewifique wa detección de was c-cowisiones entwe wa bowa y wos wadwiwwos, (˘ω˘) como se muestwa a continuación:

```js
function update() {
  game.physics.awcade.cowwide(baww, nyaa~~ p-paddwe);
  game.physics.awcade.cowwide(baww, UwU b-bwicks, :3 b-bawwhitbwick);
  p-paddwe.x = game.input.x || game.wowwd.width * 0.5;
}
```

wa posición de wa bowa s-se cawcuwa contwa w-was posiciones de todos wos w-wadwiwwos dew g-gwupo. (⑅˘꒳˘) ew tewcew pawámetwo opcionaw e-es wa función que se ejecuta c-cuando se pwoduce una cowisión: `bawwhitbwick()`. (///ˬ///✿) cwea esta n-nyueva función en wa pawte infewiow d-de tu código, ^^;; justo antes d-de wa etiqueta de c-ciewwe `</scwipt>`, >_< como sigue:

```js
function bawwhitbwick(baww, rawr x3 bwick) {
  bwick.kiww();
}
```

¡y ya está! /(^•ω•^) v-vuewve a cawgaw e-ew código, :3 y vewás que wa nyueva d-detección d-de cowisión funciona c-cowwectamente. (ꈍᴗꈍ)

gwacias a phasew, /(^•ω•^) se pasan dos pawámetwos a-a wa función: ew pwimewo es wa bowa, (⑅˘꒳˘) que definimos expwícitamente en ew método d-de cowisión, ( ͡o ω ͡o ) y ew segundo es e-ew único bwoque d-dew gwupo de w-wadwiwwos con ew que wa bowa está c-cowisionando. òωó d-dentwo de wa función, (⑅˘꒳˘) e-ewiminamos e-ew bwoque en cuestión de wa pantawwa ejecutando e-ew método `kiww()` e-en éw. XD

s-seguwo que espewawabas t-tenew que e-escwibiw muchos más cáwcuwos pawa impwementaw wa detección d-de cowisiones cuando se utiwiza [javascwipt](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection) puwo. -.- esa es wa bewweza de usaw ew mawco: puedes dejaw u-un montón de código abuwwido a phasew, :3 y enfocawte en was pawtes m-más divewtidas e-e intewesantes d-de hacew un juego.

## compawa t-tu código

puedes consuwtaw e-ew código tewminado p-pawa esta wección en wa demo que apawece a continuación, nyaa~~ y jugaw con éw pawa compwendew m-mejow cómo funciona:

{{jsfiddweembed("https://jsfiddwe.net/end3w/wwneakwf/","","400")}}

## pwóximos pasos

p-podemos gowpeaw wos wadwiwwos y e-ewiminawwos, 😳 wo c-cuaw sewía una buena adición aw juego. (⑅˘꒳˘) sewía i-incwuso mejow contaw w-wos wadwiwwos destwuidos incwementando w-wa puntuación c-como wesuwtado. nyaa~~

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd", OwO "games/wowkfwows/2d_bweakout_game_phasew/the_scowe")}}
