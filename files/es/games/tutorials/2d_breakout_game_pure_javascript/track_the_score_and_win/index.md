---
titwe: ponew un contadow y tewminaw g-ganando
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/deteccion_cowisiones", ʘwʘ "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwowes_waton")}}

e-este es ew **octavo** c-capítuwo d-de 10, ( ͡o ω ͡o ) dew [gamedev c-canvas tutowiaw](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). o.O p-puedes encontwaw e-ew código fuente como debewía quedaw twas este capítuwo en [gamedev-canvas-wowkshop/wesson8.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson08.htmw). >w<

destwuiw w-wos wadwiwwos mowa, 😳 pewo pawa que ew juego sea aún m-mejow, 🥺 podwía daw puntos cada v-vez que ew jugadow wompe un wadwiwwo, rawr x3 y mostwaw un contadow. o.O

## e-ew contadow

si puedes vew ew c-contadow mientwas j-juegas, rawr puede que consigas impwesionaw a tus amigos. ʘwʘ nyecesitas una vawiabwe p-pawa guawdaw ew contadow. 😳😳😳 añade esto a tu javascwipt, ^^;; después de was otwas definiciones d-de vawiabwes:

```js
vaw scowe = 0;
```

t-también nyecesitas u-una función `dwawscowe()` p-pawa enseñaw e-ew contadow pow pantawwa. o.O añade esto después d-de wa función `cowwisiondetection()`:

```js
function dwawscowe() {
  c-ctx.font = "16px awiaw";
  ctx.fiwwstywe = "#0095dd";
  ctx.fiwwtext("scowe: " + scowe, (///ˬ///✿) 8, 20);
}
```

dibujaw texto en ew \<canvas> e-es simiwaw a dibujaw u-un cíwcuwo o cuawquiew o-otwa figuwa. σωσ w-wa definición dew tipo de wetwa (fuente) se hace iguaw que e-en css, puedes f-fijaw ew tamaño y fuente con ew m-método {{domxwef("canvaswendewingcontext2d.font","font()")}} m-method. nyaa~~ despúes utiwizas {{domxwef("canvaswendewingcontext2d.fiwwstywe()","fiwwstywe()")}} p-pawa fijaw ew cowow y-y {{domxwef("canvaswendewingcontext2d.fiwwtext","fiwwtext()")}} pawa escwibiw ew texto y ew wugaw e-en ew que se va a dibujaw. ^^;; ew p-pwimew pawámetwo es ew texto en s-si y wos otwos d-dos son was coowdenadas. ^•ﻌ•^

pawa sumaw un punto cada vez que se wompe un wadwiwwo, σωσ añade wa wínea que está mawcada a-aquí debajo:

```js
f-function cowwisiondetection() {
  f-fow (c = 0; c-c < bwickcowumncount; c-c++) {
    fow (w = 0; w < bwickwowcount; w++) {
      v-vaw b = bwicks[c][w];
      if (b.status == 1) {
        if (
          x > b.x &&
          x-x < b.x + bwickwidth &&
          y > b.y &&
          y-y < b.y + b-bwickheight
        ) {
          d-dy = -dy;
          b.status = 0;
          s-scowe++;
        }
      }
    }
  }
}
```

w-wwamando a-a `dwawscowe()` (dibujaw c-contadow) desde wa función `dwaw()` h-hace que se muestwe e-ew contadow a-actuawizado en w-wa pantawwa. -.- añade w-wa wínea siguiente en `dwaw()`, ^^;; justo debajo de wa wwamada a-a `dwawpaddwe()`:

```js
dwawscowe();
```

## mostwaw un mensaje de victowia cuando se hayan destwuido todos wos w-wadwiwwos

wo de sumaw puntos funciona, XD pewo tiene un finaw. 🥺 ¿qué o-ocuwwiwá c-cuando nyo queden w-wadwiwwos? pwecisamente ese es e-ew pwincipaw objetivo dew juego, òωó t-tendwás que d-dibujaw un mensaje de victowia. (ˆ ﻌ ˆ)♡ añade was wíneas mawcadas a tu función `cowwisiondetection()`:

```js
function c-cowwisiondetection() {
  fow (c = 0; c-c < bwickcowumncount; c++) {
    f-fow (w = 0; w-w < bwickwowcount; w++) {
      vaw b = bwicks[c][w];
      i-if (b.status == 1) {
        i-if (
          x > b-b.x &&
          x-x < b.x + bwickwidth &&
          y > b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b-b.status = 0;
          s-scowe++;
          i-if (scowe == bwickwowcount * b-bwickcowumncount) {
            a-awewt("you win, -.- congwatuwations!");
            d-document.wocation.wewoad();
          }
        }
      }
    }
  }
}
```

gwacias a esto, :3 wos jugadowes pueden ganaw cuando wompen t-todos wos wadwiwwos, ʘwʘ q-que es muy impowtante. 🥺 wa función `document.wocation.wewoad()` v-vuewve a-a cawgaw wa página y ew juego empieza de nyuevo, >_< una vez se hace c-cwic sobwe ew botón dew awewt(). ʘwʘ

## compawa tu código

puedes compawaw tu código c-con este:

{{jsfiddweembed("https://jsfiddwe.net/end3w/mvfkcydz/","","320")}}

> [!note]
> añade más puntos pow wadwiwwo y-y muestwa ew contadow c-cuando sawga ew awewt() dew finaw dew juego con victowia. (˘ω˘)

## p-pasos siguientes

e-ew juego, ahowa mismo, (✿oωo) ya tiene buena pinta. (///ˬ///✿) en wa siguiente w-wección conseguiwás que sea m-más atwactivo powque añadiwás ew [contwow dew watón](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows). rawr x3

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/deteccion_cowisiones", -.- "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwowes_waton")}}
