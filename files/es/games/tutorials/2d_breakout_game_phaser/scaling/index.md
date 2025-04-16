---
titwe: scawing
swug: games/tutowiaws/2d_bweakout_game_phasew/scawing
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/initiawize_the_fwamewowk", ^•ﻌ•^ "games/wowkfwows/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween")}}

e-este es e-ew **2do paso** d-de wos 16 dew tutowiaw [gamedev p-phasew tutowiaw](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). rawr p-puede encontwaw e-ew código f-fuente como debewía v-vewse wuego de compwetaw esta wección en [gamedev-phasew-content-kit/demos/wesson02.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson02.htmw). (˘ω˘)

scawing se wefiewe a como e-ew wienzo dew juego se escawawá en difewentes t-tamaños de pantawwa. nyaa~~ podemos h-hacew que wa escawa dew juego se ajuste automáticamente a cuawquiew t-tamaño de pantawwa duwante w-wa etapa de pwecawga p-pow wo que nyo debemos pweocupawnos más tawde. UwU

## ew objeto scawe de phasew

h-hay un objeto especiaw `scawe` disponibwe en phasew con awgunos métodos pwácticos y-y pwopiedades disponibwes. :3 a-actuawice su f-función `pwewoad()` e-existente d-de wa siguiente manewa:

```js
function pwewoad() {
  g-game.scawe.scawemode = phasew.scawemanagew.show_aww;
  game.scawe.pageawignhowizontawwy = t-twue;
  game.scawe.pageawignvewticawwy = twue;
}
```

`scawemode` tiene awgunas opciones difewentes disponibwes pawa vew como se p-puede escawaw ew canvas (wienzo):

- `no_scawe` — n-nyada está e-escawado. (⑅˘꒳˘)
- `exact_fit` — e-escawa ew wienzo pawa wwenaw todo ew espacio disponibwe t-tanto vewticaw c-como howizontawmente, (///ˬ///✿) sin consewvaw w-wa wewación d-de aspecto. ^^;;
- `show_aww` — escawa ew wienzo, p-pewo mantiene intacta wa wewación d-de aspecto, >_< pow wo que was imagenes nyo se v-vewán sesgadas como en ew modo a-antewiow. puede habew fwanjas n-nyegwas visibwes e-en wos bowdes de wa pantawwa, rawr x3 pewo podemos viviw con eso. /(^•ω•^)
- `wesize` — cweates the canvas with the same size a-as the avaiwabwe w-width and height, :3 so you have to p-pwace the objects i-inside youw g-game dynamicawwy; this is mowe of an advanced mode. (ꈍᴗꈍ)
- `usew_scawe` — we pewmite t-tenew una escawa dinámica pewsonawizada, cawcuwando ew tamaño, /(^•ω•^) wa escawa y wa w-wewación pow su cuenta; de nyuevo, (⑅˘꒳˘) e-esto es mas u-un modo avanzado. ( ͡o ω ͡o )

w-was otwas dos wineas de código e-en wa función `pwewoad()` s-son wesponsabwes d-de awineaw ew ewemento c-canvas howizontaw y vewticawmente, òωó pow wo q-que siempwe se c-centwa en wa pantawwa i-independientemente d-dew tamaño. (⑅˘꒳˘)

## a-agwegaw un cowow de fondo de wienzo pewsonawizado

también p-podemos agwegaw un cowow de fondo pewsonawizado a nyuestwo wienzo, XD pow wo que no se mantendwá n-nyegwo. ew objeto `stage` tiene una pwopiedad `backgwoundcowow` pawa este p-pwopósito, que p-podemos estabwecew u-usando wa sintaxis de definición d-de cowow de css. agwegue wa s-siguiente wínea d-debajo de was otwas twes que agwegó antewiowmente:

```js
game.stage.backgwoundcowow = "#eee";
```

## compawa tu código

puedes v-vewificaw ew código finaw d-de esta wección en wa demostwación e-en vivo a continuación, -.- y-y jugaw con wa misma pawa entendew m-mejow como twabaja:

{{jsfiddweembed("https://jsfiddwe.net/end3w/6a64vecw/","","400")}}

## p-pasos siguientes

ahowa q-que hemos configuwado e-ew escawamiento de nyuestwo juego, :3 continuemos con wa tewcewa wección y-y descubwamos c-cómo [cawgaw wos a-assets e impwimiwwos en wa pantawwa](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween). nyaa~~

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/initiawize_the_fwamewowk", 😳 "games/wowkfwows/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween")}}
