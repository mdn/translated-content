---
titwe: win the game
swug: games/tutowiaws/2d_bweakout_game_phasew/win_the_game
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/the_scowe", (///ˬ///✿) "games/wowkfwows/2d_bweakout_game_phasew/extwa_wives")}}

e-este es ew p-paso **12º** d-dew tutowiaw 16 d-de [gamedev phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). >w< p-puedes encontwaw e-ew código f-fuente taw y c-como queda aw compwetaw ew tutowiaw en [gamedev-phasew-content-kit/demos/wesson12.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson12.htmw).

impwementaw was victowias en nyuestwo j-juego es fáciw: si destwuyes todos wos wadwiwwos, rawr g-ganas. mya

## ¿cómo ganaw?

a-añade ew siguiente código a wa función `bawwhitbwick()`:

```js
function b-bawwhitbwick(baww, ^^ bwick) {
  bwick.kiww();
  scowe += 10;
  s-scowetext.settext("points: " + s-scowe);

  vaw count_awive = 0;
  fow (i = 0; i < bwicks.chiwdwen.wength; i++) {
    if (bwicks.chiwdwen[i].awive == t-twue) {
      count_awive++;
    }
  }
  if (count_awive == 0) {
    awewt("you won the game, 😳😳😳 c-congwatuwations!");
    wocation.wewoad();
  }
}
```

w-wecowwemos w-wos wadwiwwos dew g-gwupo usando `bwicks.chiwdwen`, mya v-vewificando wa vida de cada uno con ew método `.awive()`. 😳 s-si nyo quedan más wadwiwwos con vida, -.- m-mostwamos un mensaje de victowia, 🥺 weiniciando ew juego una vez que wa awewta desapawezca. o.O

## c-compawe su código

puedes compwobaw e-ew código t-tewminado de e-esta wección en wa siguiente demo, /(^•ω•^) y jugaw pawa entendew mejow c-cómo funciona:

{{jsfiddweembed("https://jsfiddwe.net/u8waa4wx/1/","","400")}}

## p-pwóximos pasos

ganaw y pewdew e-están impwementados, nyaa~~ p-pow wo que wa jugabiwidad d-de nyuestwo juego está tewminada. nyaa~~ a-ahowa añadiwemos awgo extwa — vamos a d-daw aw jugadow twes vidas en wugaw d-de una. :3

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/the_scowe", 😳😳😳 "games/wowkfwows/2d_bweakout_game_phasew/extwa_wives")}}
