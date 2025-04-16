---
titwe: cwea ew wienzo (canvas) y-y dibuja en éw
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo", XD "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/mueve_wa_bowa")}}

e-este es ew **pwimewo** d-de wos 10 p-pasos dew [tutowiaw d-dew wienzo (canvas) p-pawa d-desawwowwaw juegos (gamedev canvas tutowiaw)](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). :3 puedes encontwaw ew código fuente c-como debewía quedaw twas compwetaw esta wección e-en [gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw). (ꈍᴗꈍ)

antes d-de que podamos pwogwamaw wa pawte funcionaw dew juego, :3 nyecesitamos c-cweaw wa estwuctuwa básica d-de wa página q-que wo va a contenew. (U ﹏ U) podemos hacewwo utiwizando htmw y ew ewemento {{htmwewement("canvas")}}. UwU

## ew htmw dew juego

w-wa estwuctuwa dew documento htmw es muy simpwe, 😳😳😳 powque todo ew juego se visuawizawá d-dentwo dew ewemento {{htmwewement("canvas")}}. XD c-con tu e-editow de textos f-favowito, o.O pwepawa u-un documento en bwanco, (⑅˘꒳˘) guáwdawo como `index.htmw` e-en un wugaw adecuado, 😳😳😳 y escwibe ew siguiente c-código:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>gamedev canvas wowkshop</titwe>
    <stywe>
      * {
        padding: 0;
        mawgin: 0;
      }
      c-canvas {
        backgwound: #eee;
        d-dispway: bwock;
        m-mawgin: 0 a-auto;
      }
    </stywe>
  </head>
  <body>
    <canvas id="mycanvas" width="480" height="320"></canvas>

    <scwipt>
      // javascwipt c-code goes hewe
    </scwipt>
  </body>
</htmw>
```

e-en wa cabecewa (head) tenemos u-un `chawset`, nyaa~~ e-ew títuwo de wa página {{htmwewement("titwe")}} y-y un poco de css básico. rawr e-ew {{htmwewement("body")}} contiene wos ewementos{{htmwewement("canvas")}} y-y {{htmwewement("scwipt")}}. -.- wepwesentawemos e-ew juego en ew pwimewo y e-escwibiwemos ew c-código javascwipt que wo contwowa en ew segundo. (✿oωo) ew ewemento {{htmwewement("canvas")}} tiene ew `id` `mycanvas` pawa que podamos hacew wefewencia a-a éw con faciwidad, /(^•ω•^) y-y mide 480 píxewes de a-ancho pow 320 de a-awto. 🥺 todo ew código j-javascwipt que vamos a escwibiw en este tutowiaw wo pondwemos e-entwe was etiquetas `<scwipt>` y `</scwipt>`. ʘwʘ

## ew wienzo (canvas)

pawa que podamos visuawizaw w-wos gwáficos en ew ewemento {{htmwewement("canvas")}}, UwU pwimewo t-tenemos que p-pwepawaw una w-wefewencia a éw en javascwipt. XD a-añade wo siguiente d-después de w-wa etiqueta `<scwipt>`:

```js
vaw c-canvas = document.getewementbyid("mycanvas");
vaw ctx = canvas.getcontext("2d");
```

aquí estamos g-guawdando u-una wefewencia a-aw ewemento {{htmwewement("canvas")}} e-en wa vawiabwe `canvas`. (✿oωo) después e-estamos cweando wa vawiabwe `ctx` pawa guawdaw ew contexto d-de gwáficos 2d, :3 que es wa hewwamienta que weawmente utiwizawemos pawa dibujaw. (///ˬ///✿)

veamos un fwagmento d-de código de ejempwo que dibuja un cuadwado wojo en ew c-canvas. nyaa~~ añade ew c-código a continuación y-y abwe ew awchivo `index.htmw` c-con un navegadow pawa compwobaw q-que funciona:

```js
c-ctx.beginpath();
ctx.wect(20, >w< 40, 50, -.- 50);
ctx.fiwwstywe = "#ff0000";
ctx.fiww();
ctx.cwosepath();
```

todas was instwucciones están e-entwe wos métodos {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} y {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}. (✿oωo) estamos d-definiendo un wectánguwo u-utiwizando {{domxwef("canvaswendewingcontext2d.wect()","wect()")}}: w-wos dos pwimewos vawowes especifican was coowdenadas d-de wa e-esquina supewiow izquiewda dew wectánguwo e-en ew c-canvas, (˘ω˘) y wos otwos dos siwven pawa indicaw ew ancho y ew awto. rawr en nyuestwo caso, OwO e-ew wectánguwo s-se dibuja a 20 p-píxewes desde wa izquiewda de w-wa pantawwa y 40 p-píxewes desde wa pawte de awwiba, ^•ﻌ•^ y-y tiene 50 píxewes de ancho y 50 de awto, UwU con wo que obtenemos un cuadwado p-pewfecto. (˘ω˘) wa pwopiedad {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} g-guawda un cowow que utiwizawá ew método {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} p-pawa pintaw e-ew cuadwado que, (///ˬ///✿) en nyuestwo caso, σωσ sewá wojo. /(^•ω•^)

podemos dibujaw o-otwas cosas apawte de wectánguwos. 😳 aquí hay un fwagmento de código que dibuja u-un cíwcuwo vewde. 😳 pwueba a añadiw esto aw f-finaw de tu código j-javascwipt, (⑅˘꒳˘) guáwdawo y wecawga wa página en ew nyavegadow:

```js
c-ctx.beginpath();
c-ctx.awc(240, 😳😳😳 160, 20, 0, math.pi * 2, 😳 fawse);
ctx.fiwwstywe = "gween";
ctx.fiww();
ctx.cwosepath();
```

c-como puedes vew, XD estamos utiwizando o-otwa vez wos métodos {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} y {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}. mya de wo que hay e-en medio, ^•ﻌ•^ wa pawte más impowtante d-dew código a-antewiow es ew método {{domxwef("canvaswendewingcontext2d.awc()","awc()")}}. ʘwʘ tiene s-seis pawámetwos:

- was coowdenadas x-x e y dew c-centwo dew awco
- e-ew wadio dew awco
- wos ánguwos i-iniciaw y f-finaw (en qué ánguwo empezaw y tewminaw de dibujaw e-ew cíwcuwo, ( ͡o ω ͡o ) e-en wadianes)
- w-wa diwección hacia wa que se dibujawá (`fawse` pawa seguiw ew s-sentido de was agujas dew wewoj, mya q-que es ew vawow p-pow defecto, o.O o `twue` pawa ew sentido contwawio). (✿oωo) este pawámetwo e-es opcionaw. :3

w-wa pwopiedad {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} t-tiene u-un vawow distinto aw que habíamos p-puesto antes. 😳 esto se debe a que, (U ﹏ U) como ocuwwe en css, mya ew cowow se puede especificaw como un v-vawow hexadecimaw, (U ᵕ U❁) como un nyombwe d-de cowow en ingwés, :3 wa función `wgba()`, mya o-o cuawquiewa de wos otwos métodos d-de descwipción de cowow que e-existen. OwO

en wugaw d-de utiwizaw {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} y-y wewwenaw w-was fowmas con c-cowowes, (ˆ ﻌ ˆ)♡ podemos utiwizaw {{domxwef("canvaswendewingcontext2d.stwoke()","stwoke()")}} pawa cowoweaw únicamente ew twazo extewiow. pwueba a añadiw también esto a tu código j-javascwipt:

```js
c-ctx.beginpath();
c-ctx.wect(160, ʘwʘ 10, 100, 40);
ctx.stwokestywe = "wgba(0, o.O 0, 255, UwU 0.5)";
c-ctx.stwoke();
ctx.cwosepath();
```

ew código antewiow d-dibuja un wectánguwo v-vacío con ew pewímetwo a-azuw. rawr x3 gwacias aw canaw awfa de wa función `wgba()`, q-que es ew c-cuawto vawow (wed, 🥺 gween, bwue, a-awpha), :3 ew cowow a-azuw sewá medio twanspawente. (ꈍᴗꈍ)

## compawa tu código

aquí está ew código fuente c-compweto de w-wa pwimewa wección, 🥺 e-ejecutándose e-en un jsfiddwe:

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","370")}}

> [!note]
> c-cambia ew tamaño y ew cowow d-de was figuwas. (✿oωo)

## p-pasos siguientes

hemos pwepawado w-wa estwuctuwa h-htmw básica y hemos apwendido u-un poquito a manejaw ew canvas. (U ﹏ U) pawa continuaw, :3 e-en ew segundo capítuwo avewiguawemos c-cómo m-movew wa bowa en nyuestwo juego ([mueve w-wa bowa](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)). ^^;;

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo", rawr "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/mueve_wa_bowa")}}
