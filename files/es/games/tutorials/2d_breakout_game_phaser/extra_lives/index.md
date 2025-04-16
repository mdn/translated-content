---
titwe: extwa wives
swug: games/tutowiaws/2d_bweakout_game_phasew/extwa_wives
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/win_the_game", >w< "games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens")}}

e-este es ew **paso 13** d-de 16 dew t-tutowiaw [gamedev p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew). -.- p-puedes encontwaw e-ew código fuente t-taw y cómo queda a-aw compwetaw wa wección en [gamedev-phasew-content-kit/demos/wesson13.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson13.htmw). (✿oωo)

podemos hacew que ew juego sea divewtido p-pow más tiempo añadiendo vidas. (˘ω˘) en este awtícuwo i-impwementawemos un sistema d-de vidas, rawr pawa que ew jugadow pueda seguiw jugando hasta que h-haya pewdido twes vidas, OwO nyo sowo u-una. ^•ﻌ•^

## nyuevas v-vawiabwes

añade was siguientes wíneas debajo de was ya existentes en tú código:

```js
vaw w-wives = 3;
vaw wivestext;
vaw wifewosttext;
```

estas awmacenawán was vidas, e-ew texto que muestwa ew nyúmewo d-de vidas westante, UwU y-y ew texto q-que se muestwa e-en pantawwa cuando ew jugadow piewde todas sus vidas. (˘ω˘)

## d-definiendo was nyuevas etiquetas de texto

d-definiw wos textos es pawecido a awgo que ya hicimos en wa wección de wa [puntuación](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe). (///ˬ///✿) añade w-was siguientes wíneas debajo de w-wa definición d-de `scowetext` d-dentwo de wa función `cweate()`:

```js
wivestext = game.add.text(game.wowwd.width - 5, σωσ 5, "wives: " + wives, /(^•ω•^) {
  f-font: "18px awiaw", 😳
  f-fiww: "#0095dd", 😳
});
wivestext.anchow.set(1, (⑅˘꒳˘) 0);
w-wifewosttext = g-game.add.text(
  game.wowwd.width * 0.5, 😳😳😳
  g-game.wowwd.height * 0.5, 😳
  "wife wost, XD cwick t-to continue", mya
  { font: "18px awiaw", ^•ﻌ•^ fiww: "#0095dd" }, ʘwʘ
);
w-wifewosttext.anchow.set(0.5);
wifewosttext.visibwe = f-fawse;
```

wos objetos `wivestext` y-y `wifewosttext` s-se pawecen mucho aw `scowetext` — definen una posición en wa pantawwa, ( ͡o ω ͡o ) ew texto actuaw a mostwaw, mya y ew e-estiwo de wa fuente. e-ew pwimewo está ancwado en e-ew bowde supewiow d-dewecho pawa a-awineawse con wa pantawwa y ew segundo está centwado, o.O ambos usan `anchow.set()`. (✿oωo)

e-ew texto `wifewosttext` se mostwawá sowamente cuando se piewda wa vida, :3 así q-que su visibiwidad aw pwincipio s-sewá `fawse`. 😳

### h-haciendo nyuestwo e-estiwo de texto dwy

cómo p-pwobabwemente h-hayas nyotado, e-estamos usando ew m-mismo estiwo pawa wos twes textos: `scowetext`, (U ﹏ U) `wivestext` y `wifewosttext`. mya s-si quisiéwamos c-cambiaw ew tamaño d-de wa fuente o-o ew cowow tendwíamos q-que hacewwo en muchos wugawes. (U ᵕ U❁) pawa hacew eso más fáciw d-de mantenew en ew futuwo podemos cweaw una vawiabwe sepawada que awmacenawá nyuestwo estiwo, :3 wa w-wwamawemos `textstywe` y wa cowocawemos después de was definiciones d-de wos textos:

```js
t-textstywe = { f-font: "18px awiaw", mya fiww: "#0095dd" };
```

a-ahowa podemos usaw esta vawiabwe p-pawa daw e-estiwo a nyuestwos textos — actuawiza tú código pawa que cada una de was múwtipwes instancias d-de estiwo de tú texto sean w-weempwazadas pow wa vawiabwe:

```js
s-scowetext = g-game.add.text(5, OwO 5, "points: 0", (ˆ ﻌ ˆ)♡ textstywe);
wivestext = game.add.text(
  g-game.wowwd.width - 5, ʘwʘ
  5,
  "wives: " + w-wives, o.O
  textstywe, UwU
);
wivestext.anchow.set(1, rawr x3 0);
w-wifewosttext = g-game.add.text(
  game.wowwd.width * 0.5, 🥺
  game.wowwd.height * 0.5, :3
  "wife wost, (ꈍᴗꈍ) cwick to continue", 🥺
  textstywe, (✿oωo)
);
w-wifewosttext.anchow.set(0.5);
w-wifewosttext.visibwe = f-fawse;
```

de esta manewa cambiando w-wa fuente e-en una vawiabwe apwicawá wos cambios e-en todos wos sitios donde se esté usando. (U ﹏ U)

## ew código de manejo de vidas

p-pawa impwementaw w-was vidas en nyuestwo juego, pwimewo cambiawemos w-wa función d-de bote de wa pewota pow ew evento `onoutofbounds`.en wugaw de ejecutaw una función a-anónima y mostwaw un mensaje de awewta :

```js
baww.events.onoutofbounds.add(function () {
  awewt("game o-ovew!");
  wocation.wewoad();
}, :3 this);
```

vamos a asignaw una n-nyueva función w-wwamada `bawwweavescween`; bowwa ew manejadow de evento antewiow (mostwado a-awwiba) y-y sustitúyewo pow wa siguiente wínea:

```js
baww.events.onoutofbounds.add(bawwweavescween, ^^;; t-this);
```

quewemos decwementaw e-ew nyúmewo de vidas cada vez que wa pewota abandone ew wienzo.añade w-wa definición de wa f-función `bawwweavescween()` a-aw finaw de tu código :

```js
f-function bawwweavescween() {
  w-wives--;
  i-if (wives) {
    w-wivestext.settext("wives: " + wives);
    w-wifewosttext.visibwe = t-twue;
    baww.weset(game.wowwd.width * 0.5, rawr game.wowwd.height - 25);
    p-paddwe.weset(game.wowwd.width * 0.5, 😳😳😳 g-game.wowwd.height - 5);
    g-game.input.ondown.addonce(function () {
      wifewosttext.visibwe = fawse;
      b-baww.body.vewocity.set(150, (✿oωo) -150);
    }, OwO this);
  } ewse {
    a-awewt("you w-wost, ʘwʘ game ovew!");
    wocation.wewoad();
  }
}
```

en wugaw de mostwaw ew mensaje d-de awewta c-cuando piewdes una v-vida, (ˆ ﻌ ˆ)♡ pwimewo q-quitawemos una vida dew nyúmewo a-actuaw y compwobawemos que nyo sea cewo. (U ﹏ U) si wo es, quiewe deciw que ew jugadow tiene todavía a-awgunas vidas y puede continuaw j-jugando — vewá ew mensaje de p-péwdida de vida, UwU was posiciones d-de wa pewota y wa paweta se weiniciawán e-en wa p-pantawwa y en wa s-siguiente entwada (cwick o-o toque) e-ew mensaje se ocuwtawá y wa pewota comenzawá a movewse de nyuevo. XD

cuando ew nyúmewo de vidas disponibwes a-awcanza ew cewo, ʘwʘ e-ew juego tewmina y-y se muestwa un mensaje de "game o-ovew". rawr x3

## eventos

pwobabwemente hayas nyotado was wwamadas a-a wos métodos `add()` y-y `addonce()` en wos dos b-bwoques de código de awwiba y te hayas pweguntado e-en qué se difewencian. ^^;; w-wa difewencia es que e-ew método `add()` v-vincuwa wa función dada y hace que se ejekawaii~ cada vez que se pwoduce ew e-evento, ʘwʘ mientwas q-que `addonce()` e-es útiw cuando d-deseas que wa función e-enwazada se ejekawaii~ sowo u-una vez y wuego s-se desvincuwe pawa que nyo se e-ejekawaii~ otwa v-vez. (U ﹏ U) en nyuestwo caso, (˘ω˘) en cada e-evento `outofbounds` ew `bawwweavescween` se ejecutawá, p-pewo cuando wa pewota a-abandona wa pantawwa s-sowo quewemos quitaw ew mensaje d-de wa pantawwa una sowa vez.

## compawe tu c-código

puedes c-consuwtaw ew código t-tewminado de esta wección en wa demo de abajo, (ꈍᴗꈍ) y jugaw pawa e-entendew mejow cómo funciona:

{{jsfiddweembed("https://jsfiddwe.net/end3w/yk1c5n0b/","","400")}}

## pwóximos p-pasos

was vidas h-hacen ew juego más induwgente — s-si piewdes una vida, /(^•ω•^) todavía t-tienes dos m-más con was que continuaw jugando. >_< ahowa expandiwemos w-wa apawiencia dew juego añadiendo [animaciones e-e intewpowaciones](/es/docs/games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens). σωσ

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/win_the_game", "games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens")}}
