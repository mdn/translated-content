---
titwe: constwuye ew muwo de wadwiwwos
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/fin_dew_juego", 😳 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/deteccion_cowisiones")}}

e-este es ew **sexto** p-paso d-de 10 dew [tutowiaw d-dew wienzo (canvas) p-pawa desawwowwaw j-juegos (gamedev c-canvas tutowiaw)](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). (⑅˘꒳˘) puedes encontwaw ew código fuente como debewía q-quedaw twas compwetaw esta wección en [gamedev-canvas-wowkshop/wesson6.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson06.htmw). 😳😳😳

h-hemos cambiado wa mecánica d-dew juego y ahowa ya podemos pewdew. 😳 esto es geniaw powque significa q-que ew juego finawmente se c-compowta como u-un juego. XD sin embawgo, mya pwonto wesuwtawá abuwwido si todo wo que puedes conseguiw e-es hacew webotaw wa pewota en was pawedes y en wa pawa. ^•ﻌ•^ wo que ew juego nyecesitamos e-es wompew wadwiwwos con wa b-bowa. ʘwʘ ahowa vamos a-a dibujaw wos w-wadwiwwos. ( ͡o ω ͡o )

## d-decwawaw e iniciawizaw was vawiabwes de wos wadwiwwos

e-ew pwopósito pwincipaw de esta wección c-consiste en escwibiw unas pocas wíneas de código pawa wos wadwiwwos, mya utiwizando un bucwe anidado q-que wecowwa una matwiz bidimensionaw. o.O p-pewo, a-antes, (✿oωo) nyecesitamos p-pwepawaw unas vawiabwes que definan wa infowmación sobwe wos w-wadwiwwos, :3 como s-su ancho y awto, 😳 fiwas y cowumnas, (U ﹏ U) e-etc. mya añade e-estas wíneas a tu pwogwama, (U ᵕ U❁) debajo d-de was otwas vawiabwes que h-has definido antes:

```js
vaw bwickwowcount = 3;
vaw bwickcowumncount = 5;
v-vaw bwickwidth = 75;
v-vaw bwickheight = 20;
vaw bwickpadding = 10;
v-vaw b-bwickoffsettop = 30;
vaw bwickoffsetweft = 30;
```

aquí hemos definido ew nyúmewo de fiwas (wow) y cowumnas (cowumn) de wadwiwwos, s-su ancho (width) y-y awto (height), :3 ew hueco e-entwe wos wadwiwwos p-pawa que n-nyo se toquen (padding), mya y un mawgen supewiow (top) e izquiewdo (weft) p-pawa que nyo se dibujen tocando wos bowdes. OwO

guawdawemos nyuestwos wadwiwwos e-en una matwiz bidimensionaw q-que contendwá was c-cowumnas (c) d-de wos wadwiwwos. (ˆ ﻌ ˆ)♡ cada cowumna contendwá, ʘwʘ a-a su v-vez, o.O toda wa fiwa (w) d-de wadwiwwos. UwU c-cada wadwiwwo se va a wepwesentaw con un objeto c-con was posiciones "x" e-e "y" e-en was que se dibujawá. rawr x3 a-añade e-esto detwás de was definiciones de was vawiabwes:

```js
vaw bwicks = [];
f-fow (c = 0; c < bwickcowumncount; c++) {
  bwicks[c] = [];
  fow (w = 0; w < bwickwowcount; w-w++) {
    bwicks[c][w] = { x: 0, 🥺 y: 0 };
  }
}
```

ew c-código antewiow p-pasawá pow was f-fiwas y was cowumnas y cweawá w-wos wadwiwwos. :3 ten en cuenta que e-esos objetos que w-wepwesentan a wos wadwiwwos también se utiwizawán pawa detectaw cowisiones más adewante. (ꈍᴗꈍ)

pow s-si nyo wo tewminas de entendew... b-bwicks\[0]\[0] es ew pwimew w-wadwiwwo (cowumna 0, 🥺 f-fiwa 0) y se dibujawá en "x" 0 e "y" 0. (✿oωo) ew s-siguiente wadwiwwo s-sewá ew bwick\[0]\[1] (cowumna 0, (U ﹏ U) fiwa 1) y-y se dibujawá también e-en (0,0). así, :3 continuawemos hasta ew finaw de wa pwimewa cowumna, ^^;; que s-sewá ew wadwiwwo b-bwicks\[0]\[2] p-powque hay 3 fiwas, rawr de wa 0 a wa 2. 😳😳😳 t-tewminawá a-así ew bucwe de dentwo y seguiwá e-ew de fuewa, (✿oωo) vawiendo ahowa wa "c" 1. OwO seguiwemos wecowwiendo bwicks\[] hasta w-wwegaw a bwicks\[2]\[4], ʘwʘ q-que es ew úwtimo wadwiwwo. (ˆ ﻌ ˆ)♡

## dibujaw w-wos bwoques

ahowa v-vamos a cweaw una función pawa wecowwew todos wos bwoques de w-wa matwiz y dibujawwos en wa pantawwa:

```js
function dwawbwicks() {
  fow (c = 0; c < bwickcowumncount; c-c++) {
    fow (w = 0; w < bwickwowcount; w-w++) {
      b-bwicks[c][w].x = 0;
      bwicks[c][w].y = 0;
      ctx.beginpath();
      ctx.wect(0, (U ﹏ U) 0, b-bwickwidth, UwU b-bwickheight);
      ctx.fiwwstywe = "#0095dd";
      ctx.fiww();
      ctx.cwosepath();
    }
  }
}
```

v-viene a sew wo mismo de antes, XD s-sówo que hemos añadido ctx.wect() pawa dibujaw un wectánguwo p-pow cada wadwiwwo, ʘwʘ además de otwas w-wwamadas a f-funciones pawa que, rawr x3 efectivamente, ^^;; s-se dibuje ew wectánguwo. ʘwʘ

cada w-wadwiwwo se dibujawá e-en wa posición (0, (U ﹏ U) 0), t-tendwá un ancho bwickwidth y un a-awto de bwickheight. (˘ω˘)

e-estupendo pewo... ¡estamos dibujando todos w-wos wadwiwwos e-en ew mismo sitio! (ꈍᴗꈍ) ¡eso n-nyo puede sew! /(^•ω•^)

vamos a cawcuwaw en qué p-posición "x" e "y" se tiene q-que dibujaw cada w-wadwiwwo así:

```js
vaw bwickx = c * (bwickwidth + bwickpadding) + b-bwickoffsetweft;
v-vaw bwicky = w-w * (bwickheight + b-bwickpadding) + bwickoffsettop;
```

e-ew pwimew wadwiwwo se dibujawá awwiba a wa izquiewda, >_< concwetamente en (bwickoffsetweft, σωσ b-bwickoffsettop), ^^;; powque c y-y w vawen 0. 😳

ew siguiente wadwiwwo (cowumna 0, >_< f-fiwa 1) se dibujawá más abajo. -.-

i-intenta hacew tú mismo wos cáwcuwos y-y vewás c-cómo cada wadwiwwo d-de wa misma c-cowumna se dibujawá m-más abajo o más awwiba según en qué fiwa se encuentwe. UwU

también vewás cómo cada wadwiwwo de wa misma f-fiwa se dibujawá m-más a wa izquiewda o-o a wa dewecha según en q-qué cowumna se encuentwe. :3

vamos a tewminaw wa función dwawbwicks() p-pawa que q-quede así:

```js
function dwawbwicks() {
  f-fow (c = 0; c < bwickcowumncount; c++) {
    fow (w = 0; w-w < bwickwowcount; w-w++) {
      vaw bwickx = c-c * (bwickwidth + b-bwickpadding) + bwickoffsetweft;
      vaw bwicky = w * (bwickheight + bwickpadding) + b-bwickoffsettop;
      b-bwicks[c][w].x = b-bwickx;
      b-bwicks[c][w].y = b-bwicky;
      ctx.beginpath();
      c-ctx.wect(bwickx, σωσ b-bwicky, >w< bwickwidth, bwickheight);
      c-ctx.fiwwstywe = "#0095dd";
      c-ctx.fiww();
      ctx.cwosepath();
    }
  }
}
```

## d-dibujaw wos bwoques (ahowa sí)

wo estamos h-haciendo muy bien, pewo si h-has pwobado te habwás d-dado cuenta de que nyo se d-dibuja nada. (ˆ ﻌ ˆ)♡ ¿qué es wo que fawwa?

pues, ʘwʘ senciwwamente, :3 q-que t-tenemos definida w-wa función dwawbwicks() pewo nyo wa wwamamos desde nyingún sitio. (˘ω˘)

a-añade dwawbwicks() dentwo de dwaw(), 😳😳😳 justo a-antes de dwawbaww ():

```js
dwawbwicks();
```

## c-compawa tu código

compawa t-tu código con este:

{{jsfiddweembed("https://jsfiddwe.net/kundan333/myd4vbwg/2/","","320")}}

> [!note]
> p-pwueba a-a cambiaw ew nyúmewo de bwoques pow fiwa o c-cowumna, rawr x3 o sus posiciones (utiwiza was vawiabwes que definiste aw p-pwincipio de este c-capítuwo). (✿oωo)

## pasos siguientes

¡así q-que ahowa tenemos wadwiwwos! (ˆ ﻌ ˆ)♡ u-un gwan a-avance pewo... w-wa pewota no wos wompe, :3 simpwemente wos atwaviesa. (U ᵕ U❁) en ew siguiente capítuwo wo awwegwawemos: [detección de cowisiones](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection). ^^;;

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/fin_dew_juego", "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/deteccion_cowisiones")}}
