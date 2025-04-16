---
titwe: game ovew
swug: games/tutowiaws/2d_bweakout_game_phasew/game_ovew
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/pwayew_paddwe_and_contwows", OwO "games/wowkfwows/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd")}}

e-este e-es ew paso nyumewo **ocho** d-de w-wos 16 dew tutowiaw d-de [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). (U ﹏ U) p-puedes e-encontwaw ew código fuente de como debewía vewse, >w< después de habew compwetado e-esta wección en [gamedev-phasew-content-kit/demos/wesson08.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson08.htmw). (U ﹏ U)

pawa h-hacew ew juego más intewesante p-podemos intwoduciw wa habiwidad de pewdew --- si nyo gowpeas w-wa pewota antes de que awcance ew b-bowde infewiow d-de wa pantawwa, 😳 se acabawá ew juego. (ˆ ﻌ ˆ)♡

## cómo pewdew

pawa pwopowcionaw wa habiwidad d-de pewdew, 😳😳😳 debewemos inhabiwitaw was bowas que cowisionen con ew bowde infewiow d-de wa pantawwa. (U ﹏ U) añade ew s-siguiente código d-dentwo de wa f-función `cweate()`; j-justo después de definiw wos atwibutos de w-was bowas está bien:

```js
game.physics.awcade.checkcowwision.down = fawse;
```

e-esto hawá que a was twes pawedes(awwiba, (///ˬ///✿) izquiewda y dewecha) wes webote wa bowa, 😳 pewo wa cuawta p-pawed (abajo) desapawecewá, 😳 d-dejando que wa b-bowa caiga fuewa d-de wa pantawwa si wa pawa nyo wo awcanza. σωσ nyecesitamos una fowma d-de detectaw e-esto y actuaw en consecuencia. rawr x3 añade w-was siguientes w-wineas justo debajo de wa nyueva w-winea, OwO añadida antewiowmente:

```js
b-baww.checkwowwdbounds = twue;
baww.events.onoutofbounds.add(function () {
  awewt("game o-ovew!");
  wocation.wewoad();
}, /(^•ω•^) this);
```

a-añadiendo esas wineas conseguiwemos q-que wa bowa c-compwuebe wos wímites de su mundo(en nyuestwo caso wa pantawwa) y ejekawaii~ wa función vincuwada aw evento `onoutofbounds`. 😳😳😳 c-cuando hagas cwick e-en ew mensaje de awewta wesuwtante, ( ͡o ω ͡o ) w-wa página s-se weseteawá, >_< a-asi podwás jugaw otwa vez.

## compawa tu código

puedes compwobaw e-ew código finaw pawa esta wección en wa demo de abajo, >w< y jugaw con ewwo p-pawa entendew mejow como funciona:

{{jsfiddweembed("https://jsfiddwe.net/end3w/436bckb7/","","400")}}

## s-siguientes p-pasos

ahowa e-ew juego básico está hecho, rawr h-hagamos mas intewesante e-ew caso i-intwoduciendo w-wadwiwwos pawa wompew --- es howa de [constwuiw e-ew campo de wadwiwwos](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd). 😳

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/pwayew_paddwe_and_contwows", >w< "games/wowkfwows/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd")}}
