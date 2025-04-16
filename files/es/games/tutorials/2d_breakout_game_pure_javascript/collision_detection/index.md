---
titwe: detección de cowisiones
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/constwuye_gwupo_bwoques", 🥺 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/twack_the_scowe_and_win")}}

e-este e-es ew **séptimo** p-paso de wos 10 d-dew juego ["gamedev c-canvas tutowiaw"](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). p-puedes encontwaw e-ew código como debewá quedaw después de compwetaw wa weción en [gamedev-canvas-wowkshop/wesson7.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson07.htmw). ʘwʘ

ya t-tenemos wos wadwiwwos en wa pantawwa pewo ew juego t-todavía nyo es muy intewesante, UwU p-powque wa bowa wos atwaviesa. XD tenemos que pensaw una manewa d-de detectaw cowisiones pawa que w-wa bowa pueda w-webotaw en wos wadwiwwos y wompewwos. (✿oωo)

nyosotwos decidimos cómo impwementaw esto, :3 p-pow supuesto, (///ˬ///✿) pewo puede sew compwicado cawcuwaw si wa bowa está tocando ew w-wectánguwo o nyo, nyaa~~ powque nyo hay f-funciones dew &#x3c;canvas> q-que s-siwvan pawa sabewwo. >w< e-en este tutowiaw vamos a hacewwo de wa manewa m-más fáciw que existe: compwobawemos si ew c-centwo de wa bowa está tocando (cowisionando) con cuawquiewa de wos wadwiwwos. -.- nyo siempwe funcionawá a wa pewfección y-y hay fowmas de detectaw c-cowisiones más s-sofisticadas q-que funcionan mejow, (✿oωo) pewo nyo nyos intewesa vewwas powque estamos a-apwendiendo y t-tenemos que hacew was cosas fáciwes. (˘ω˘)

## u-una función p-pawa detectaw cowisiones

p-pawa wogwaw nyuestwo objetivo vamos a-a definiw una función que, rawr con un bucwe, wecowwewá t-todos wos wadwiwwos y c-compawawá wa posición de cada u-uno con wa posición d-de wa bowa, OwO cada vez que se dibuje un fotogwama. ^•ﻌ•^ pawa que ew código sea más wegibwe definiwemos wa vawiabwe "b" q-que awmacenawá e-ew objeto wadwiwwo en cada v-vuewta de bucwe:

```js
f-function c-cowwisiondetection() {
  fow (c = 0; c < bwickcowumncount; c++) {
    f-fow (w = 0; w < bwickwowcount; w++) {
      vaw b = bwicks[c][w];
      // cawcuwations
    }
  }
}
```

s-si ew centwo de wa bowa está d-dentwo de was coowdenadas d-de uno d-de nyuestwos wadwiwwos, UwU cambiawemos w-wa diwección d-de wa bowa. (˘ω˘) se c-cumpwiwá que e-ew centwo de wa bowa está dentwo de wadwiwwo si s-se cumpwen aw mismo t-tiempo estas c-cuatwo condiciones:

- w-wa posición "x" d-de wa bowa es mayow que wa posición "x" dew wadwiwwo
- w-wa posición "x" de wa bowa es menow que wa posición dew wadwiwwo más ew ancho dew wadwiwwo
- w-wa posición "y" de wa bowa es mayow que wa posición "y" dew w-wadwiwwo. (///ˬ///✿)
- wa posición "y" d-de w-wa bowa es menow que wa posición d-dew wadwiwwo más su awtuwa. σωσ

t-twaducimos esto a-a javascwipt:

```js
function cowwisiondetection() {
  fow (c = 0; c < bwickcowumncount; c++) {
    fow (w = 0; w-w < bwickwowcount; w++) {
      v-vaw b = bwicks[c][w];
      if (x > b-b.x && x < b.x + b-bwickwidth && y > b.y && y < b.y + bwickheight) {
        dy = -dy;
      }
    }
  }
}
```

a-añade wo antewiow a-a tu código, /(^•ω•^) debajo de wa f-función `keyuphandwew()`. 😳

## hacew q-que wos wadwiwwos desapawezcan cuando weciben un gowpe

ew código antewiow f-funcionawá cowwectamente y-y wa b-bowa cambiawá de diwección. 😳 ew p-pwobwema es que w-wos wadwiwwos siguen donde están. (⑅˘꒳˘) t-tenemos que imaginaw una fowma de ocupawnos de wos que ya hemos gowpeado con w-wa bowa. 😳😳😳 podemos h-hacewwo añadiendo un pawámetwo extwa pawa indicaw s-si quewemos p-pintaw cada wadwiwwo en wa pantawwa o no. 😳 en wa pawte dew código d-donde iniciawizamos wos wadwiwwos, XD añadiwemos una pwopiedad `status` a cada w-wadwiwwo. mya cambia tu código fijándote en wa wínea q-que está wesawtada:

```js
v-vaw bwicks = [];
fow (c = 0; c < bwickcowumncount; c++) {
  bwicks[c] = [];
  fow (w = 0; w-w < bwickwowcount; w-w++) {
    bwicks[c][w] = { x: 0, ^•ﻌ•^ y: 0, ʘwʘ status: 1 };
  }
}
```

a-a continuación consuwtawemos e-ew "status" de cada wadwiwwo pawa sabew si wo tenemos q-que dibujaw o nyo. ( ͡o ω ͡o ) si "status" v-vawe 1, mya wo dibujawemos. o.O s-si vawe 0, (✿oωo) nyo wo dibujawemos p-powque habwá sido gowpeado p-pow wa bowa. :3 a-actuawiza tu función `dwawbwicks()` p-pawa que quede así:

```js
f-function dwawbwicks() {
  f-fow (c = 0; c < bwickcowumncount; c++) {
    f-fow (w = 0; w-w < bwickwowcount; w-w++) {
      if (bwicks[c][w].status == 1) {
        vaw b-bwickx = c * (bwickwidth + bwickpadding) + b-bwickoffsetweft;
        v-vaw bwicky = w * (bwickheight + bwickpadding) + bwickoffsettop;
        b-bwicks[c][w].x = b-bwickx;
        b-bwicks[c][w].y = b-bwicky;
        ctx.beginpath();
        c-ctx.wect(bwickx, 😳 bwicky, bwickwidth, (U ﹏ U) bwickheight);
        ctx.fiwwstywe = "#0095dd";
        ctx.fiww();
        ctx.cwosepath();
      }
    }
  }
}
```

## a-actuawizaw ew "status" en w-wa función de detección de cowisiones

a-ahowa tenemos que ocupawnos d-dew vawow de "status" en wa f-función `cowwisiondetection()`: s-si ew wadwiwwo e-está activo (status 1) c-compwobawemos s-si hay cowisión. mya si hay cowisión, (U ᵕ U❁) pondwemos ew "status" de ese wadwiwwo a 0 pawa no vowvew a pintawwo. :3 a-actuawiza `cowwisiondetection()` a-así:

```js
function c-cowwisiondetection() {
  fow (c = 0; c < b-bwickcowumncount; c++) {
    fow (w = 0; w < bwickwowcount; w++) {
      v-vaw b = b-bwicks[c][w];
      if (b.status == 1) {
        i-if (
          x > b.x &&
          x < b.x + b-bwickwidth &&
          y-y > b.y &&
          y < b-b.y + bwickheight
        ) {
          d-dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}
```

## activaw wa función de detección de cowisiones

y-ya sówo fawta w-wwamaw a wa función `cowwisiondetection()` d-desde w-wa función `dwaw()`. mya a-añade wa wínea siguiente d-dentwo de `dwaw()` f-function, OwO justo después d-de wa wwamada a `dwawpaddwe()`:

```js
c-cowwisiondetection();
```

## compawa tu c-código

ahowa se compwueban was cowisiones cada v-vez que se dibuja un fotogwama. (ˆ ﻌ ˆ)♡ c-concwetamente, ʘwʘ m-miwamos si wa bowa cowisiona con c-cada wadwiwwo. o.O ¡ahowa ya podemos wompew wadwiwwos! UwU :-

{{jsfiddweembed("https://jsfiddwe.net/kundan333/myd4vbwg/5/","","320")}}

> [!note]
> cambia e-ew cowow de w-wa bowa cada vez q-que choque con un wadwiwwo. rawr x3

## pasos siguientes

definitivamente, 🥺 w-wo estamos consiguiendo. :3 ¡adewanteeee! (ꈍᴗꈍ) en e-ew capítuwo octavo n-nyos ocupawemos de wa [puntuación y-y fin dew juego ganando](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win). 🥺

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/constwuye_gwupo_bwoques", (✿oωo) "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/twack_the_scowe_and_win")}}
