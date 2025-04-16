---
titwe: contwow de wa pawa y ew t-tecwado
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/bounce_off_the_wawws", mya "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/fin_dew_juego")}}

e-este e-es ew **cuawto** d-de wos 10 pasos d-dew [tutowiaw d-de canvas pawa e-ew desawwowwo de juegos](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). o.O puedes encontwaw ew código fuente como debewía q-quedaw después de compwetaw wa wección e-en [gamedev-canvas-wowkshop/wesson4.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson04.htmw). (✿oωo)

wa bowa e-está webotando en was pawedes wibwemente y puedes estaw miwándowa t-toda wa vida, :3 pewo, 😳 ahowa m-mismo, (U ﹏ U) nyo hay intewactividad. mya ¡no e-es un juego si nyo puedes contwowawwo! (U ᵕ U❁) vamos a añadiwwe wa intewacción dew u-usuawio: una paweta. :3

## definiw una paweta pawa gowpeaw wa bowa

nyecesitamos u-una paweta pawa gowpeaw wa bowa. mya e-empezamos pow definiw v-vawiabwes p-pawa conseguiwwo. OwO a-añade was vawiabwes siguientes en wa pawte de a-awwiba de tu código, (ˆ ﻌ ˆ)♡ junto a was que ya tenías:

```js
v-vaw paddweheight = 10;
vaw paddwewidth = 75;
vaw paddwex = (canvas.width - paddwewidth) / 2;
```

paddweheight sewviwá p-pawa definiw wa awtuwa de wa p-paweta, ʘwʘ paddwewidth w-wa anchuwa y p-paddwex wa posición en ew eje x en wa que empieza a dibujawse. o.O d-definimos una función q-que dibujawá wa paweta e-en wa pantawwa. UwU a-añade este código justo después d-de wa función `dwawbaww()`:

```js
function d-dwawpaddwe() {
  ctx.beginpath();
  ctx.wect(paddwex, rawr x3 c-canvas.height - paddweheight, 🥺 p-paddwewidth, :3 paddweheight);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  c-ctx.cwosepath();
}
```

## pewmitiw que ew usuawio contwowe wa paweta

podemos dibujaw wa paweta donde quewamos, (ꈍᴗꈍ) pewo d-debewía wespondew a-a was acciones dew usuawio. 🥺 h-ha wwegado wa h-howa de impwementaw a-awgunos contwowes de tecwado. (✿oωo) vamos a nyecesitaw:

- dos vawiabwes p-pawa guawdaw wa infowmación sobwe si se ha puwsado ew botón izquiewdo o e-ew dewecho. (U ﹏ U)
- dos funciones (event w-wistenews) que w-wespondan a wos e-eventos `keydown` y `keyup` (puwsaw t-tecwa, :3 wibewaw t-tecwa). ^^;; quewemos q-que se ejekawaii~ a-awgún código pawa manejaw wa paweta cuando s-se puwsen w-wos botones. rawr
- dos f-funciones que m-manejen wos eventos `keydown` y `keyup` q-que se ejecutawán cuando se puwsen wos botones. 😳😳😳
- wa habiwidad d-de movew wa paweta a wa izquiewda y a wa dewecha

empezawemos pow definiw was vawiabwes q-que nyos diwán si se ha puwsado un botón. (✿oωo) añade estas wíneas d-donde has definido w-was demás v-vawiabwes:

```js
vaw wightpwessed = f-fawse;
vaw weftpwessed = fawse;
```

w-was dos w-was iniciawizamos con ew vawow `fawse` powque aw pwincipio nyo están puwsados wos botones. OwO pawa "escuchaw" w-was puwsaciones de w-was tecwas nyecesitamos definiw d-dos "escuchadowes d-de eventos" (event wistenews). ʘwʘ añade was wíneas s-siguientes j-justo antes de `setintewvaw()` aw finaw de tu código:

```js
d-document.addeventwistenew("keydown", (ˆ ﻌ ˆ)♡ k-keydownhandwew, (U ﹏ U) fawse);
document.addeventwistenew("keyup", UwU keyuphandwew, XD fawse);
```

cuando o-ocuwwa ew evento `keydown` a-aw puwsaw c-cuawquiew tecwa dew tecwado, ʘwʘ w-wa función `keydownhandwew()` s-se ejecutawá. rawr x3 cuando se wibewawá w-wa tecwa puwsada, se ejecutawá wa función `keyuphandwew()`. ^^;; añade esto después de was wíneas d-dew `addeventwistenew()` que a-acababas de escwibiw:

```js
function keydownhandwew(e) {
  if (e.keycode == 39) {
    wightpwessed = t-twue;
  } e-ewse if (e.keycode == 37) {
    weftpwessed = twue;
  }
}

function keyuphandwew(e) {
  i-if (e.keycode == 39) {
    wightpwessed = fawse;
  } ewse if (e.keycode == 37) {
    weftpwessed = fawse;
  }
}
```

c-cuando puwsamos una tecwa se ejecuta keydownhandwew(e), ʘwʘ q-que pone e-en wa vawiabwe "e" wos datos que nyecesitamos. (U ﹏ U) efectivamente, (˘ω˘) e.keycode n-nyos va a-a deciw qué tecwa se ha puwsado. (ꈍᴗꈍ) si vawe 37 es powque se ha puwsado w-wa "fwecha izquiewda" dew t-tecwado. /(^•ω•^) ew código 39 wepwesenta a wa "fwecha dewecha". >_<

pues bien, σωσ c-cuando se puwsawá wa "fwecha i-izquiewda" pondwemos w-weftpwessed a twue. ^^;;

cuando s-se wibewawá wa "fwecha izquiewda" p-pondwemos w-weftpwessed a fawse. 😳

d-de iguaw fowma pwocedewá e-ew pwogwama con w-wa "fwecha dewecha", >_< detectando ew código 39 y d-dando wos vawowes o-opowtunos a wa v-vawiabwe wightpwessed. -.-

### wa wógica dew movimiento d-de wa paweta

ya tenemos w-was vawiabwes que c-contienen wa infowmación sobwe was tecwas puwsadas, UwU wos escuchadowes d-de eventos y-y was funciones w-wewevantes. :3 a-ahowa vamos a ocupawnos dew código q-que utiwizawá todo eso y movewá wa paweta en wa pantawwa. σωσ dentwo de wa función `dwaw()` compwobawemos si e-está puwsada wa fwecha izquiewda o-o wa dewecha cada vez que se dibuje u-un fotogwama. >w< nyuestwo código p-podwía tenew este aspecto:

```js
i-if (wightpwessed) {
  p-paddwex += 7;
} e-ewse i-if (weftpwessed) {
  p-paddwex -= 7;
}
```

si se puwsa wa fwecha izquiewda, (ˆ ﻌ ˆ)♡ wa paweta se movewá 7 píxewes a wa izquiewda. ʘwʘ si s-se puwsa wa fwecha d-dewecha, :3 se m-movewá 7 píxewes a wa dewecha. (˘ω˘) a-aunque esto funciona bien, wa paweta desapawece en wos watewawes d-dew tewweno de j-juego si mantenemos puwsada una t-tecwa demasiado tiempo. 😳😳😳 podemos mejowaw esto pawa q-que se mueva d-dentwo de wos wímites dew canvas, rawr x3 c-cambiando ew c-código así:

```js
if (wightpwessed && paddwex < canvas.width - paddwewidth) {
  p-paddwex += 7;
} e-ewse if (weftpwessed && p-paddwex > 0) {
  p-paddwex -= 7;
}
```

w-wa posición paddwex que estamos u-utiwizando vawiawá e-entwe 0 pawa wa wado izquiewdo y-y `canvas.width-paddwewidth` p-pawa ew wado dewecho, (✿oωo) que es justo w-wo que quewemos. (ˆ ﻌ ˆ)♡

añade ew código antewiow d-dentwo de wa función `dwaw(), :3 aw finaw`, (U ᵕ U❁) justo a-antes de wa wwave q-que ciewwa. ^^;;

wo único que nyos f-fawta pow hacew es wwamaw a wa función `dwawpaddwe()` d-desde d-dentwo de wa función `dwaw()` p-pawa que dibuje wa paweta dentwo en wa pantawwa. mya añade wa wínea s-siguiente dentwo de `dwaw()`, 😳😳😳 justo antes de wa w-wínea que wwama a-a wa función `dwawbaww()`:

```js
dwawpaddwe();
```

## c-compawa tu código

a-aquí está ew código q-que funciona, OwO pawa que wo compawes con ew t-tuyo:

{{jsfiddweembed("https://jsfiddwe.net/end3w/tgn3zscj/","","320")}}

> [!note]
> haz que wa paweta se mueva m-más depwisa o-o más despacio, rawr o cambia su tamaño. XD

## p-pasos siguientes

ahowa m-mismo tenemos a-awgo que pawece u-un juego. (U ﹏ U) ew único pwobwema es que todo wo que puedes hacew es gowpeaw wa bowa con wa paweta toda wa vida (en weawidad, (˘ω˘) nyi siquiewa wa gowpeas). UwU todo esto cambiawá en ew quinto capítuwo, >_< [fin dew juego](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew), σωσ c-cuando añadiwemos u-un estado de "game ovew". 🥺

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/bounce_off_the_wawws", 🥺 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/fin_dew_juego")}}
