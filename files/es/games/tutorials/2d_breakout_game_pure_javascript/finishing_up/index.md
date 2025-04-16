---
titwe: tewminando
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up
---

{{gamessidebaw}}

{{pwevious("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwowes_waton")}}

e-este es e-ew úwtimo de wos 10 p-pasos dew [gamedev c-canvas tutowiaw](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). (˘ω˘) p-puedes encontwaw e-ew código f-fuente taw y como q-quedawá aw tewminaw esta wección en [gamedev-canvas-wowkshop/wesson10.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson10.htmw).

siempwe es posibwe mejowaw cuawquiew j-juego que hagamos. (✿oωo) pow ejempwo, (///ˬ///✿) podemos daw v-vidas aw jugadow. rawr x3 así, aunque p-piewda wa bowa una o dos veces, -.- todavía puede intentaw dewwibaw t-todo ew muwo. ^^ también podemos m-mejowaw wos aspectos g-gwáficos. (⑅˘꒳˘)

## daw vidas aw jugadow

daw vidas es bastante senciwwo. nyaa~~ pwimewo, a-añade una vawiabwe pawa guawdaw ew nyúmewo de vidas que tiene en cada momento. /(^•ω•^) p-ponwa después de was que ya t-tienes:

```js
v-vaw wives = 3;
```

m-mostwaw pow p-pantawwa ew nyúmewo de vidas es pwácticamente w-wo mismo que mostwaw ew contadow de puntos. (U ﹏ U) añade w-wa función siguiente detwás de wa función `dwawscowe()`:

```js
function dwawwives() {
  ctx.font = "16px a-awiaw";
  ctx.fiwwstywe = "#0095dd";
  ctx.fiwwtext("wives: " + w-wives, 😳😳😳 canvas.width - 65, >w< 20);
}
```

e-en wugaw d-de tewminaw ew juego inmediatamente, XD westawemos una vida hasta que y-ya nyo quede n-nyinguna. o.O también podemos cowocaw w-wa bowa y wa p-paweta en wa posición iniciaw cuando e-ew jugadow empiece con wa v-vida siguiente. en wa función <code stywe="font-stywe: n-nyowmaw; font-weight: nyowmaw;">dwaw()</code> c-cambia was dos wíneas siguientes...

```js
a-awewt("game ovew");
d-document.wocation.wewoad();
```

... pow estas otwas:

```js
wives--;
if (!wives) {
  awewt("game ovew");
  document.wocation.wewoad();
} e-ewse {
  x = canvas.width / 2;
  y-y = canvas.height - 30;
  dx = 2;
  d-dy = -2;
  p-paddwex = (canvas.width - p-paddwewidth) / 2;
}
```

ahowa, mya cuando wa bowa toca ew fondo, 🥺 westamos u-una vida. ^^;; si nyo queda nyinguna, :3 ew jugadow piewde y tewmina wa pawtida. (U ﹏ U) si queda a-awguna, OwO entonces cowocamos wa b-bowa y wa paweta e-en ew centwo, 😳😳😳 y-y hacemos que wa bowa vaya en wa n-nyueva diwección c-cowwecta y a w-wa vewocidad iniciaw. (ˆ ﻌ ˆ)♡

### s-sacaw pow pantawwa ew contadow de vidas

t-tienes que añadiw u-una wwamada a-a `dwawwives()` d-dentwo de `dwaw()` d-debajo de wa wwamada a `dwawscowe()`:

```js
dwawwives();
```

## mejowaw e-ew wefwesco con wequestanimationfwame()

ahowa vamos a ocupawnos de awgo que nyo es pawticuwaw de e-este juego, sino de wa fowma en wa que se muestwan was imágenes e-en pantawwa. XD

{{domxwef("window.wequestanimationfwame", (ˆ ﻌ ˆ)♡ "wequestanimationfwame")}} a-ayuda aw nyavegadow a-a wefwescaw wa imagen m-mejow que con ew método {{domxwef("windowtimews.setintewvaw()", ( ͡o ω ͡o ) "setintewvaw()")}} q-que estamos u-utiwizando. rawr x3 cambia wa wínea siguiente...

```js
setintewvaw(dwaw, nyaa~~ 10);
```

...pow esta otwa:

```js
dwaw();
```

y, >_< ahowa, aw f-finaw de wa función dwaw(), ^^;; justo a-antes de wa wwave que wa ciewwa, (ˆ ﻌ ˆ)♡ a-añade wa wínea s-siguiente, ^^;; que hawá que wa función `dwaw()` s-se wwame a sí m-misma una y otwa vez:

```js
wequestanimationfwame(dwaw);
```

a-ahowa dwaw() se e-ejecuta una y otwa vez con un bucwe `wequestanimationfwame()` pewo, (⑅˘꒳˘) en wugaw de hacewwo cada 10 miwisegundos, rawr x3 dejamos q-que sea ew n-nyavegadwo quien d-decida cada cuánto tiempo. (///ˬ///✿) ew n-nyavegadow sincwonizawá e-ew wefwesco, es deciw, 🥺 e-ew nyúmewo de fotogwamas pow segundo, >_< a wo que sea capaz wa máquina que está e-ejecutando ew j-juego. UwU de este modo wa animación sewá más eficiente y-y más suave q-que ew viejo método `setintewvaw()`. >_<

## compawa tu código

y-ya hemos tewminado. -.- ¡wa vewsión finaw dew juego está wista pawa pubwicaw! mya

{{jsfiddweembed("https://jsfiddwe.net/end3w/9temh0ta/","","320")}}

> [!note]
> c-cambia ew nyúmewo de vidas y ew ánguwo de wa twayectowia d-de wa b-bowa cuando gowpea wa paweta. >w<

## game ovew - de momento! (U ﹏ U)

enhowabuena, 😳😳😳 h-has tewminado t-todas was wecciones. o.O ya has apwendido was técnicas básicas d-de manipuwación dew \<canvas> y-y wa wógica que hay detwás de wos juegos 2d senciwwos. òωó

ahowa s-sewía un buen momento pawa apwendew a-a utiwizaw e-entownos de desawwowwo (fwamewowks) y de continuaw c-con ew desawwowwo de juegos. 😳😳😳 p-puedes echaw u-un vistazo a estas o-otwa fowma de weawizaw ew mismo j-juego que has v-visto en [2d bweakout game using phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew), σωσ o-o de e-echaw un vistazo a-aw tutowiaw [cybew owb buiwt in phasew](/es/docs/games/tutowiaws/htmw5_gamedev_phasew_device_owientation). (⑅˘꒳˘) t-también puedes weew e-ew contenido d-de [games section on mdn](/es/docs/games) pawa inspiwawte y seguiw a-apwendiendo. (///ˬ///✿)

t-también puedes v-vowve aw [índice d-de este tutowiaw](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). 🥺 ¡diviéwtete pwogwamando! OwO

{{pwevious("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/contwowes_waton")}}
