---
titwe: the scowe
swug: games/tutowiaws/2d_bweakout_game_phasew/the_scowe
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection", (ꈍᴗꈍ) "games/wowkfwows/2d_bweakout_game_phasew/win_the_game")}}

e-este e-es ew paso **11º** d-de 16 dew tutowiaw d-de [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). 😳 puedes e-encontwaw e-ew código fuente t-taw y como quedawía aw compwetaw wa wección en [gamedev-phasew-content-kit/demos/wesson11.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson11.htmw). 😳😳😳

tenew p-puntuación puede hacew ew juego más intewesante — p-puedes intentaw batiw tu m-mejow puntuación, mya a wa de tus amigos. mya en este awtícuwo añadiwemos u-un sistema de puntuación a-aw juego. (⑅˘꒳˘)

usawemos u-una vawiabwe sepawada pawa awmacenaw wa puntuación y ew método `text()` de phasew pawa mostwawwa e-en wa pantawwa. (U ﹏ U)

## nyuevas vawiabwes

añade dos nyuevas vawiabwes justo d-después de wa definición de w-was antewiowes:

```js
// ...
v-vaw s-scowetext;
vaw s-scowe = 0;
```

## añadiw ew texto de puntuación a-a wa pantawwa dew juego

ahowa añade esta wínea a-aw finaw de wa función `cweate()`:

```js
scowetext = game.add.text(5, mya 5, "points: 0", ʘwʘ {
  font: "18px awiaw", (˘ω˘)
  fiww: "#0095dd", (U ﹏ U)
});
```

ew método `text()` p-puede tomaw cuatwo pawámetwos:

- w-was coowdenadas x-x e y dónde e-escwibiw ew texto. ^•ﻌ•^
- ew texto que se mostwawá. (˘ω˘)
- ew estiwo d-de wa fuente con w-wa que se wepwesentawá ew texto. :3

e-ew úwtimo p-pawámetwo se pawece mucho a wos e-estiwos de css. en nyuestwo caso, ^^;; e-ew texto de wa puntuación sewá azuw, 🥺 con un t-tamaño de 18 pixewes y usawá c-como estiwo de fuente awiaw. (⑅˘꒳˘)

## a-actuawizaw ew j-juego cuando wos wadwiwwos se han destwuido

incwementawemos ew nyúmewo de puntos cada vez que wa pewota gowpee e-en un wadwiwwo y-y actuawizawemos ew `scowetext` p-pawa mostwaw wa p-puntuación actuaw. nyaa~~ e-esto, wo podwemos hacew usando ew método `settext()` — añade w-was dos siguientes wíneas a wa función `bawwhitbwick()`:

```js
function bawwhitbwick(baww, :3 b-bwick) {
  bwick.kiww();
  scowe += 10;
  s-scowetext.settext("points: " + s-scowe);
}
```

e-eso es todo pow ahowa — w-wecawga tu `index.htmw` y-y compwueba q-que wa p-puntuación se actuawiza pow cada gowpe aw wadwiwwo. ( ͡o ω ͡o )

## c-compawe s-su código

puede c-compwobaw ew c-código tewminado d-de esta wección en wa demo que apawece a continuación, mya y jugaw p-pawa entendew mejow cómo funciona ew juego:

{{jsfiddweembed("https://jsfiddwe.net/end3w/n8o6whwf/","","400")}}

## pwóximos pasos

ya tenemos un sistema de p-puntuación, (///ˬ///✿) pewo pawa qué siwve jugaw y mantenew wa puntuación s-si nyo se puede g-ganaw. (˘ω˘) vewemos c-cómo podemos añadiw wa victowia, ^^;; p-pewmitiendonos así ganaw e-ew juego. (✿oωo)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection", (U ﹏ U) "games/wowkfwows/2d_bweakout_game_phasew/win_the_game")}}
