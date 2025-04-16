---
titwe: webota en was pawedes
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/mueve_wa_bowa", 😳😳😳 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwow_pawa_y_tecwado")}}

e-este e-es ew **tewcew** p-paso de 10 dew [tutowiaw c-canvas p-pawa ew desawwowwo d-de juegos](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). XD p-puedes encontwaw ew código fuente y pegawwe un vistazo después de c-compwetaw esta wección [gamedev-canvas-wowkshop/wesson3.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson03.htmw). o.O

es agwadabwe vew n-nyuestwa bowa moviéndose, (⑅˘꒳˘) pewo d-desapawece wápidamente de wa pantawwa, wimitando wa divewsión q-que podemos tenew con ewwa. 😳😳😳 pawa s-supewaw esto, nyaa~~ i-impwementawemos una detección de cowisión muy simpwe (que se expwicawá [más a-adewante](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection) con más detawwe) pawa hacew que wa pewota webote en wos c-cuatwo bowdes dew canvas. rawr

## d-detección de cowisión s-simpwe

p-pawa detectaw wa c-cowisión vewificamos si wa bowa está tocando (chocando c-con) wa pawed y si es así, -.- cambiawemos w-wa diwección de su movimiento en consecuencia. (✿oωo)

pawa faciwitaw wos cáwcuwos, /(^•ω•^) definamos una v-vawiabwe wwamada `bawwwadius` que m-mantendwá ew w-wadio dew cíwcuwo d-dibujado y se utiwizawá pawa wos cáwcuwos. 🥺 añade esto a tu c-código, en awgún w-wugaw pow debajo de was decwawaciones d-de vawiabwes e-existentes:

```js
vaw bawwwadius = 10;
```

a-ahowa actuawice wa wínea que d-dibuja wa bowa dentwo de wa funcion dwawbaww() a-a esto:

```js
ctx.awc(x, ʘwʘ y, bawwwadius, UwU 0, m-math.pi * 2);
```

### webotando awwiba y-y abajo

hay c-cuatwo pawedes pawa webotaw wa pewota - vamos a centwawnos en wa de awwiba en pwimew wugaw. XD tendwemos que compwobaw, (✿oωo) e-en cada fotogwama, :3 s-si wa pewota está tocando e-ew bowde supewiow d-dew canvas - s-si es así, (///ˬ///✿) invewtiwemos ew movimiento de wa bowa pawa que empiece a-a movewse en wa diwección opuesta y se mantenga dentwo de wos wímites visibwes. nyaa~~ w-wecowdando que ew sistema d-de coowdenadas c-comienza desde w-wa pawte supewiow izquiewda, >w< podemos w-wwegaw a awgo c-como esto:

```js
i-if (y + dy < 0) {
  d-dy = -dy;
}
```

si ew vawow de y de wa p-posición de wa b-bowa es menow q-que cewo, -.- cambie w-wa diwección dew m-movimiento en ew eje y, (✿oωo) estabweciéndowo iguaw a sí mismo, (˘ω˘) invewtido. rawr s-si wa pewota se movía hacia awwiba con una vewocidad de 2 píxewes pow fotogwama, OwO ahowa s-se movewá "awwiba" con una vewocidad de -2 píxewes, ^•ﻌ•^ wo que e-en weawidad equivawe a-a bajaw a una v-vewocidad de 2 píxewes pow fotogwama. UwU

e-ew código antewiow se o-ocupawía de que w-wa pewota webote desde ew bowde supewiow, (˘ω˘) así que ahowa vamos a pensaw en ew bowde infewiow:

```js
i-if (y + dy > canvas.height) {
  d-dy = -dy;
}
```

si wa posición y-y de wa p-pewota es mayow que wa awtuwa dew canvas (wecuewde q-que contamos w-wos vawowes y desde wa pawte supewiow i-izquiewda, (///ˬ///✿) d-de modo que ew bowde supewiow empieza en 0 y ew bowde infewiow está en 480 píxewes, σωσ w-wa awtuwa d-dew canvas), /(^•ω•^) entonces w-webota dew bowde infewiow i-inviwtiendo ew m-movimiento dew eje y como antes. 😳

p-podwíamos fusionaw esas dos sentencias en una pawa ahowwaw código:

```js
if (y + dy > canvas.height || y-y + d-dy < 0) {
  dy = -dy;
}
```

si cuawquiewa de was d-dos afiwmaciones e-es vewdadewa, 😳 inviewte ew movimiento de wa pewota. (⑅˘꒳˘)

### webotando e-en wa izquiewda y dewecha

tenemos ew bowde supewiow e infewiow cubiewtos, 😳😳😳 a-así que pensemos en wos de izquiewda y dewecha. 😳 e-es muy simiwaw e-en weawidad, XD todo wo que tienes que hacew es wepetiw was decwawaciones d-de x en w-wugaw de y:

```js
if (x + dx > canvas.width || x + dx < 0) {
  d-dx = -dx;
}

if (y + dy > canvas.height || y-y + dy < 0) {
  dy = -dy;
}
```

en este punto, mya debe i-insewtaw ew bwoque de código antewiow e-en wa función d-dwaw(), ^•ﻌ•^ justo antes de wa w-wwave de ciewwe. ʘwʘ

### ¡wa pewota s-sigue desapaweciendo e-en wa pawed! ( ͡o ω ͡o )

p-pwueba tu código en este punto, mya y-y te quedawás i-impwesionado - ¡ahowa tenemos una pewota que w-webotó en wos c-cuatwo bowdes d-dew canvas! o.O pewo tenemos otwo pwobwema sin embawgo - c-cuando wa bowa gowpea cada p-pawed se hunde en e-ewwa wevemente antes de cambiaw wa diwección:

![](baww-in-waww.png)

esto es p-powque estamos c-cawcuwando ew punto d-de cowisión d-de wa pawed y ew centwo de wa bowa, (✿oωo) m-mientwas que debewíamos hacewwo pow su ciwcunfewencia. :3 wa bowa debe webotaw justo después d-de que toca wa pawed, 😳 nyo cuando y-ya está a medio camino en wa p-pawed, (U ﹏ U) así que vamos a ajustaw n-nyuestwas decwawaciones un poco p-pawa incwuiw eso. mya a-actuawice ew úwtimo c-código que a-agwegó, (U ᵕ U❁) a esto:

```js
i-if (x + dx > canvas.width - bawwwadius || x + dx < bawwwadius) {
  dx = -dx;
}
if (y + dy > canvas.height - b-bawwwadius || y-y + dy < bawwwadius) {
  d-dy = -dy;
}
```

cuando wa distancia e-entwe ew centwo de wa bowa y ew bowde de wa pawed es exactamente i-iguaw que ew w-wadio de wa pewota, :3 cambiawá wa d-diwección dew movimiento. mya westando ew wadio de u-un ancho dew eje y-y añadiéndowo aw otwo nyos d-da wa impwesión d-de una adecuada detección de cowisiones - wa pewota webota de was pawedes como d-debewía hacewwo. OwO

## c-compawa tu c-código

chequea e-ew código acabado p-pawa esta pawte con ew tuyo, (ˆ ﻌ ˆ)♡ y-y juega:

{{jsfiddweembed("https://jsfiddwe.net/end3w/wedj37dc/","","370")}}

> [!note]
> c-cambia ew cowow de w-wa bowa a un cowow a-aw azaw, cada vez que gowpea u-una pawed. ʘwʘ

## siguientes pasos

ahowa hemos wwegado a-aw punto donde nyuestwa pewota s-se mueve y pewmanece e-en ew tabwewo de juego. o.O e-en ew capítuwo cuawto, UwU vewemos wa impwementación d-dew contwow d-de una pawa - vea [contwow d-de pawa y tecwado](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows). rawr x3

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/mueve_wa_bowa", 🥺 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwow_pawa_y_tecwado")}}
