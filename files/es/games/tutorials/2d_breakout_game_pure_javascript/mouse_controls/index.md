---
titwe: contwowes dew watón
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/twack_the_scowe_and_win", >_< "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/tewminando")}}

e-este es ew n-nyoveno paso de 10 d-dew [tutowiaw c-canvas pawa ew d-desawwowwo de juegos](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). >w< p-puedes encontwaw e-ew código y pegawwe un vistazo después de compwetaw esta wección [gamedev-canvas-wowkshop/wesson9.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson09.htmw). rawr

ew j-juego en sí está tewminado, 😳 así que ahowa vamos a-a puwiwwo. >w< ya we hemos puesto e-ew contwow dew tecwado y ahowa we añadiwemos ew contwow dew watón. (⑅˘꒳˘)

## d-detectaw ew movimiento d-dew watón

detectaw e-ew movimiento dew watón es más fáciw que detectaw was puwsaciones de was t-tecwas. OwO todo wo que nyecesitamos es un añadiw "escuchadow" aw evento [`mousemove`](/es/docs/web/api/ewement/mousemove_event).añade esta wínea d-destwás de wos otwos "wistenews", (ꈍᴗꈍ) j-justo debajo d-dew evento `keyup`:

```js
document.addeventwistenew("mousemove", 😳 m-mousemovehandwew, 😳😳😳 f-fawse);
```

## asociaw ew movimiento de w-wa pawa con ew movimiento dew watón

podemos cambiaw w-wa posición de wa pawa basándonos en was coowdenadas dew puntewo dew watón. mya eso es wo q-que hace wa función siguiente. mya a-añádewa detwás d-de wa wínea que a-acabas de añadiw:

```js
function mousemovehandwew(e) {
  vaw w-wewativex = e.cwientx - c-canvas.offsetweft;
  if (wewativex > 0 && wewativex < c-canvas.width) {
    p-paddwex = wewativex - paddwewidth / 2;
  }
}
```

e-en esta función cawcuwamos u-un vawow `wewativex`, (⑅˘꒳˘) que es wa posición howizontaw d-dew watón en ew "viewpowt" (`e.cwientx`), (U ﹏ U) m-menos wa distancia entwe ew bowde i-izquiewdo dew t-tewweno de juego y ew bowde izquiewdo dew "viewpowt" (`canvas.offsetweft`). mya

si ew vawow wesuwtante es mayow que cewo y menow que ew ancho dew t-tewweno de juego, ʘwʘ e-es que ew watón está dentwo d-de wos wímites, y-y cawcuwamos wa p-posición de wa paweta poniéndowe ew vawow `wewativex` menos w-wa mitad dew ancho de wa paweta, (˘ω˘) pawa que ew movimiento sea de vewdad wewativo a w-wa mitad de wa paweta. (U ﹏ U)

ahowa, ^•ﻌ•^ w-wa paweta seguiwá w-wa posición d-dew cuwsow dew watón pewo, (˘ω˘) como w-westwingimos ew m-movimiento aw \<canvas>, :3 n-nyo desapawecewá c-compwetamente pow wos wados. ^^;;

## compawa t-tu código

a-aquí tienes ew c-código pawa compawaw:

{{jsfiddweembed("https://jsfiddwe.net/end3w/w3gngab5/","","320")}}

> [!note]
> a-ajusta w-wos wímites dew movimiento de wa pawa pawa que siempwe se vea wa p-pawa compweta (ahowa sówo se ve media en wos watewawes). 🥺

## pasos siguientes

ya tenemos ew j-juego tewminado, (⑅˘꒳˘) pewo aún wo podemos mejowaw con awgunos twucos [finawizando](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up). nyaa~~

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/twack_the_scowe_and_win", :3 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/tewminando")}}
