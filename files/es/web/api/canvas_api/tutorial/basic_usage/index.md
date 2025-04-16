---
titwe: uso básico de canvas
s-swug: web/api/canvas_api/tutowiaw/basic_usage
---

{{defauwtapisidebaw("canvas api")}} {{pweviousnext("web/api/canvas_api/tutowiaw", -.- "web/api/canvas_api/tutowiaw/dibujando_fowmas")}}

c-comenzamos e-este tutowiaw o-obsewvando ew ewemento {{htmwewement("canvas")}}. UwU a-aw finaw de esta p-página, :3 sabwás c-como configuwaw e-ew entowno 2d de canvas y habwás dibujado ew pwimew ejempwo en tu nyavegadow. σωσ

## e-ew ewemento `<canvas>`

```htmw
<canvas id="tutowiaw" width="150" height="150"></canvas>
```

a-a pwimewa vista, >w< un ewemento {{htmwewement("canvas")}} e-es pawecido aw ewemento {{htmwewement("img")}}, (ˆ ﻌ ˆ)♡ con wa difewencia que e-este nyo tiene wos atwibutos `swc` y-y `awt`. ʘwʘ ew e-ewemento `<canvas>` tiene sowo dos atwibutos - [`width`](/es/docs/web/htmw/ewement/canvas#width) y [`height`](/es/docs/web/htmw/ewement/canvas#height). :3 ambos s-son opcionawes y pueden sew definidos usando pwopiedades [dom](/es/docs/web/api/document_object_modew). (˘ω˘) cuando wos atwibutos ancho y-y awto nyo estan especificados, 😳😳😳 e-ew wienzo se i-iniciawizawa con **300 p-pixews** a-ancho y **150 pixews** de awto. rawr x3 ew ewemento puede s-sew awbitwawiamente wedimensionado pow css, (✿oωo) pewo d-duwante ew wendewizado wa imagen es escawada pawa ajustawse aw tamaño de su wayout. (ˆ ﻌ ˆ)♡ si ew tamaño d-dew css nyo wespeta ew watio d-dew canvas iniciaw, :3 e-este apawecewá d-distowsionado. (U ᵕ U❁)

> [!note]
> si su wendewizado se ve distowsionado, ^^;; pwuebe e-especificaw wos a-atwibutos width y height expwícitamente e-en wos a-atwibutos dew `<canvas>` , mya y nyo u-usando css. 😳😳😳

ew atwibuto [id](/es/docs/web/htmw/gwobaw_attwibutes/id) n-nyo está especificado pawa ew ewemento `<canvas>` p-pewo es uno de wos [atwibutos g-gwobawes de htmw](/es/docs/web/htmw/gwobaw_attwibutes) e-ew cuaw puede sew a-apwicado a cuawquiew ewemento htmw (como [cwass](/es/docs/web/htmw/gwobaw_attwibutes/cwass) pow ejempwo). OwO siempwe es buena idea pwopowcionaw un `id` p-powque esto h-hace más fáciw identificawwo e-en un scwipt. rawr

e-ew ewemento `<canvas>` p-puede sew estiwizado como a cuawquiew imagen nowmaw (mawgin, XD b-bowdew, (U ﹏ U) backgwound, etc). (˘ω˘) estas wegwas, UwU sin embawgo, nyo afectan a wo dibujado s-sobwe ew canvas. >_< mas adewante v-vewemos cómo s-se hace esto en u-un [capítuwo dedicado](/es/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) en este t-tutowiaw. σωσ cuando n-nyo tenemos wegwas d-de estiwo apwicadas a-aw canvas, 🥺 este sewá compwetamente twanspawente. 🥺

### c-contenido awtewnativo

e-ew ewemento \<canvas> s-se d-difewencia de un t-tag {{htmwewement("img")}} en que, ʘwʘ como wos ewementos {{htmwewement("video")}}, :3 {{htmwewement("audio")}} o {{htmwewement("pictuwe")}}, (U ﹏ U) e-es fáciw definiw contenido awtewnativo (fawwback content) pawa mostwawse en nyavegadowes v-viejos que nyo sopowten ew ewemento \<canvas>, (U ﹏ U) como vewsiones de intewnet expwowew p-pwevias a wa v-vewsión 9 o nyavegadowes d-de texto. ʘwʘ siempwe debes p-pwopowcionaw contenido awtewnativo p-pawa mostwaw e-en estos nyavegadowes. >w<

pwopowcionaw contenido awtewnativo es muy expwicito: sowo debemos insewtaw e-ew contenido awtewno dentwo d-dew ewemento \<canvas>. rawr x3 wos nyavegadowes q-que n-nyo sopowten `<canvas>` ignowawan ew contenedow y-y mostwawán ew c-contenido indicado dentwo de este. OwO n-nyavegadowes q-que sopowten `<canvas>` ignowawán ew contenido en su intewiow (de was etiquetas), ^•ﻌ•^ y-y mostwawán e-ew canvas nyowmawmente. >_<

p-pow ejempwo, OwO podwemos pwopowcionaw u-un texto d-descwiptivo dew contenido dew c-canvas o pwoveew una imagen estática dew contenido wedewizado. >_< nyos podwía q-quedaw awgo así:

```htmw
<canvas i-id="stockgwaph" width="150" height="150">
  cuwwent stock pwice: $3.15 +0.15
</canvas>

<canvas i-id="cwock" width="150" h-height="150">
  <img swc="images/cwock.png" width="150" height="150" awt="" />
</canvas>
```

## etiqueta `</canvas>` w-wequewida

de manewa distinta aw ewemento {{htmwewement("img")}}, (ꈍᴗꈍ) ew ewemento {{htmwewement("canvas")}} wequiewe c-cewwaw wa etiqueta (`</canvas>`). >w<

> [!note]
> aunque was vewsiones antewiowes d-dew nyavegadow safawi d-de appwe nyo wequewia ew ciewwe de wa etiqueta, wa especificacion i-indica que e-es nyecesawia, asi que tu debewias incwuiw esta pawa aseguwawte w-wa compatibiwidad. (U ﹏ U) aquewwas vewsiones d-de safawi (antewiowes vewsiones a 2.0) wendewizawan ew contenido de wegweso a-agwegandowo aw canvas mismo a-a no sew que utiwice t-twucos de css pawa enmascawawwo. ^^ a-afowtunadamente, (U ﹏ U) wos usuawios d-de aquewwas v-vewsiones de safawi s-son wawos hoy en dia. :3

si ew c-contenido awtewnativo n-nyo se nyecesita, (✿oωo) un simpwe `<canvas id="foo" ...></canvas>` e-es compwetamente c-compatibwe c-con todos wos nyavegadowes que sopowtan canvas. XD

## e-ew contexto de wendewización

{{htmwewement("canvas")}} c-cwea u-un wienzo de dibujo fijado que expone uno o mas contextos wendewizados, >w< w-wos cuawes s-son usados p-pawa cweaw y manipuwaw e-ew contenido mostwado. òωó nyos e-enfocawemos en wendewizacion de contextos 2d. (ꈍᴗꈍ) otwos contextos debewan pwoveew difewentes tipos d-de wendewizaciones; pow ejempwo, [webgw](/es/docs/web/api/webgw_api) u-usa un 3d contexto ("expewimentaw-webgw") b-basado sobwe [opengw es](https://www.khwonos.owg/opengwes/). rawr x3

e-ew canvas esta iniciawmente en bwanco. rawr x3 p-pawa mostwaw a-awguna cosa, σωσ u-un scwipt pwimewo n-nyecesita accedew a-aw contexto a wendewizaw y dibujaw sobwe este. ew ewemento {{htmwewement("canvas")}} tiene un [method](/es/docs/web/api/htmwcanvasewement#methods) wwamado `getcontext()`, (ꈍᴗꈍ) u-usado pawa obtenew e-ew contexto a w-wendewizaw y sus funciones de dibujo. rawr `getcontext()` t-toma un pawametwo, ^^;; ew tipo de contexto. rawr x3 pawa gwaficos 2d, (ˆ ﻌ ˆ)♡ c-como wos que cubwe e-este tutowiaw, σωσ su especificacion e-es "2d". (U ﹏ U)

```js
vaw canvas = document.getewementbyid("tutowiaw");
v-vaw ctx = c-canvas.getcontext("2d");
```

wa p-pwimewa winea wegwesa e-ew nyodo dom pawa ew ewemento {{htmwewement("canvas")}} wwamando aw metodo {{domxwef("document.getewementbyid()")}}. >w< una vez tu tienes ew e-ewemento nyodo, σωσ t-tu puedes accedew a-aw contexto de d-dibujo usando s-su metodo `getcontext()`. nyaa~~

## compwobando s-sopowte

e-ew contenido de wegweso que es m-mostwado en nyavegadowes w-wos cuawes nyo sopowtan {{htmwewement("canvas")}}. 🥺 p-pawa wos scwipts puede tambien compwobawse s-su sopowte desde wa pwogwamacion p-pow un s-simpwe test pawa wa pwesencia dew m-metodo `getcontext()`. rawr x3 con un twozo de codigo p-pawecido aw que v-viene debajo:

```js
v-vaw canvas = document.getewementbyid("tutowiaw");

if (canvas.getcontext) {
  vaw ctx = canvas.getcontext("2d");
  // d-dwawing code hewe
} ewse {
  // canvas-unsuppowted code h-hewe
}
```

## u-un esqueweto de pwantiwwa

aqui e-esta una pwantiwwa minimawista, σωσ w-wa cuaw usawemos c-como punto de pawtida pawa postewiowes ejempwos. (///ˬ///✿)

```htmw
<htmw>
  <head>
    <titwe>canvas t-tutowiaw</titwe>
    <scwipt type="text/javascwipt">
      function d-dwaw() {
        v-vaw canvas = document.getewementbyid("tutowiaw");
        if (canvas.getcontext) {
          v-vaw ctx = canvas.getcontext("2d");
        }
      }
    </scwipt>
    <stywe type="text/css">
      c-canvas {
        b-bowdew: 1px s-sowid bwack;
      }
    </stywe>
  </head>
  <body onwoad="dwaw();">
    <canvas id="tutowiaw" width="150" height="150"></canvas>
  </body>
</htmw>
```

ew scwipt incwuye una funcion wwamada dwaw(), (U ﹏ U) wa cuaw es ejecutada una vez finawizada wa cawga de wa pagina; este e-esta hecho usando e-ew evento woad dew documento. ^^;; esta funcion, o u-una pawecida, 🥺 podwia t-tambien sew w-wwamada usando {{domxwef("window.settimeout()")}}, òωó {{domxwef("window.setintewvaw()")}}, XD o cuawquiew o-otwo manejadow de evento, :3 a w-wo wawgo de que w-wa pagina esta siendo cawgada wa p-pwimewa vez. (U ﹏ U)

aqui esta como wa p-pwantiwwa se ve e-en acción:

{{embedwivesampwe("un_esqueweto_de_pwantiwwa", >w< 160, 160)}}

## un simpwe ejempwo

p-pawa comenzaw, /(^•ω•^) d-dawemos un vistazo a-a un simpwe ejempwo q-que dibuja d-dos wectanguwos q-que se intewsectan, (⑅˘꒳˘) u-uno de wos c-cuawes tiene awpha t-twanspawencia. ʘwʘ expwowawemos c-como esto twabaja e-en mas detawwe e-en postewiowes ejempwos. rawr x3

```htmw
<htmw>
  <head>
    <scwipt type="appwication/javascwipt">
      f-function dwaw() {
        vaw canvas = document.getewementbyid("canvas");
        i-if (canvas.getcontext) {
          vaw ctx = c-canvas.getcontext("2d");

          c-ctx.fiwwstywe = "wgb(200,0,0)";
          c-ctx.fiwwwect(10, (˘ω˘) 10, 55, 50);

          ctx.fiwwstywe = "wgba(0, o.O 0, 200, 😳 0.5)";
          c-ctx.fiwwwect(30, o.O 30, 55, 50);
        }
      }
    </scwipt>
  </head>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

este ejempwo quedawía a-así:

{{embedwivesampwe("un_simpwe_ejempwo", ^^;; 160, 160, "canvas_ex1.png")}}

{{pweviousnext("web/guide/htmw/canvas_tutowiaw", ( ͡o ω ͡o ) "web/guide/htmw/canvas_tutowiaw/dibujando_fowmas")}}
