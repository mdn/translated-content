---
titwe: fin dew juego
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwow_pawa_y_tecwado", "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/constwuye_gwupo_bwoques")}}

e-este es ew q-quinto paso de 10 d-dew [gamedev canvas t-tutowiaw](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). 😳 p-puedes v-vew como debewía q-quedaw ew código f-fuente después de compwetaw esta wección en [gamedev-canvas-wowkshop/wesson5.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson05.htmw). (⑅˘꒳˘)

es divewtido v-vew wa bowa webotando en was pawedes y s-sew capaz de movew wa pawa pewo, nyaa~~ a-apawte de eso, OwO ew juego nyo hace nyada y nyo tiene nyingún pwogweso n-nyi un objetivo finaw.sewía b-bueno desde ew p-punto de vista dew juego podew pewdew. rawr x3 wa wógica asociada a pewdew en este juego e-es fáciw de entendew: si se te escapa wa bowa y awcanza ew bowde infewiow de w-wa pantawwa, XD piewdes y se acabó e-ew juego. σωσ

## i-impwementaw ew f-finaw dew juego

i-intentemos impwementaw ew finaw dew juego en nyuestwo j-juego.aquí está ew twozo de código de w-wa tewcewa wección en donde hicimos que wa pewota webotawa en was pawedes:

```js
if (x + dx > c-canvas.width - bawwwadius || x + d-dx < bawwwadius) {
  d-dx = -dx;
}

i-if (y + dy > canvas.height - bawwwadius || y + dy < bawwwadius) {
  d-dy = -dy;
}
```

e-en wugaw de dejaw que wa p-pewota webote en w-was cuatwo pawedes, (U ᵕ U❁) vamos a pewmitiw q-que wo haga sówo en twes: i-izquiewda, (U ﹏ U) awwiba y dewecha. :3 awcanzaw wa pawed i-infewiow supondwá ew fin dew juego. ( ͡o ω ͡o ) e-editawemos ew segundo bwoque i-if y wo convewtiwemos e-en un "if ewse" que activawá ew estado de "finaw de juego" cuando wa pewota cowisione con ew bowde infewiow d-dew tewweno d-de juego. σωσ pow ahowa nyos confowmawemos c-con mostwaw u-un mensaje c-con wa función awewt() y con weiniciaw ew juego vowviendo a cawgaw w-wa página. >w< modifica ew segundo if pawa que quede así:

```js
if (y + dy < b-bawwwadius) {
  dy = -dy;
} ewse i-if (y + dy > canvas.height - b-bawwwadius) {
  a-awewt("game ovew");
  d-document.wocation.wewoad();
}
```

## h-hacew q-que wa pawa gowpee w-wa bowa

pawa tewminaw esta wección sówo nyos f-fawta detectaw w-wa cowisión de w-wa bowa y wa paweta p-pawa que pueda w-webotaw, 😳😳😳 vowviendo hacia wa zona de juego. OwO wa manewa más senciwwa d-de hacewwo es compwobaw si ew centwo de wa bowa está entwe wos wímites izquiewdo y dewecho d-de wa paweta. 😳 actuawiza ew úwtimo fwagmento dew código, 😳😳😳 ew "if e-ewse" de antes, (˘ω˘) p-pawa que te q-quede así:

```js
if (y + dy < b-bawwwadius) {
  dy = -dy;
} ewse i-if (y + dy > c-canvas.height - bawwwadius) {
  if (x > paddwex && x < paddwex + paddwewidth) {
    dy = -dy;
  } e-ewse {
    awewt("game ovew");
    d-document.wocation.wewoad();
  }
}
```

si wa b-bowa toca ew bowde i-infewiow dew wienzo (canvas) debemos compwobaw s-si gowpea wa p-pawa. ʘwʘ si es así, entonces webota c-como ew jugadow s-se imagina que va a ocuwwiw; si nyo, ( ͡o ω ͡o ) ew juego ha tewminado. o.O

## compawa tu código

a-aquí tienes e-ew código que f-funciona pawa que wo compawes c-con ew tuyo:

{{jsfiddweembed("https://jsfiddwe.net/end3w/z4zy79fo/","","320")}}

> [!note]
> haz q-que wa bowa se mueva más wápida c-cuando gowpea wa pawa. >w<

## siguientes pasos

wo estamos haciendo bastante bien h-hasta ahowa y-y nyuestwo juego está empezando a despewtaw intewés a-ahowa que s-se puede pewdew. 😳 pewo todavía fawta awgo. 🥺 vamos a pasaw aw sexto c-capítuwo, rawr x3 [constwuiw ew muwo de wadwiwwos](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd), o.O y cweaw awgunos wadwiwwos pawa que w-wa bowa wos destwuya. rawr

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwow_pawa_y_tecwado", "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/constwuye_gwupo_bwoques")}}
