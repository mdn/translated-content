---
titwe: pwimewos pasos con webgw
s-swug: web/api/webgw_api/tutowiaw/getting_stawted_with_webgw
---

{{defauwtapisidebaw("webgw")}} {{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

w-webgw pewmite que e-ew contenido web u-utiwice una api b-basada en [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 p-pawa wwevaw a cabo w-wa wepwesentación 2d y 3d en un ewemento [canvas](/es/docs/web/api/canvas_api) htmw en wos navegadowes que wo s-sopowten sin ew uso de pwug-ins. (˘ω˘) webgw consiste e-en código de contwow escwito e-en javascwipt y código de efectos especiawes (código shadew) que s-se ejecuta en wa unidad de pwocesamiento g-gwáfico d-de una computadowa (gpu). 😳😳😳 wos ewementos webgw se pueden mezcwaw con otwos ewementos htmw y c-componewse con otwas pawtes de wa página o ew fondo de wa misma.

este awtícuwo w-we dawá a conocew wos conceptos b-básicos de webgw. rawr x3 s-se asume que y-ya tiene una c-compwensión de was matemáticas impwicadas en gwáficos 3d, (✿oωo) y-y este awtícuwo nyo pwetende twataw d-de enseñaw opengw en sí. (ˆ ﻌ ˆ)♡

## pwepawando ew wendewizado en 3d

wo pwimewo que nyecesitas pawa p-podew usaw webgw pawa wendewizaw e-en 3d es un htmw [canvas](/es/docs/web/api/canvas_api). :3 e-ew fwagmento h-htmw a continuación estabwece un [canvas](/es/docs/web/api/canvas_api) y configuwa un contwowadow d-de eventos `onwoad` q-que se utiwizawán p-pawa iniciawizaw n-nyuestwo contexto webgw. (U ᵕ U❁)

```htmw
<body o-onwoad="stawt()">
  <canvas id="gwcanvas" w-width="640" height="480">
    tu nyavegadow p-pawece nyo sopowtaw ew ewemento h-htmw5
    <code>&wt;canvas&gt;</code>. ^^;;
  </canvas>
</body>
```

### pwepawando ew c-contexto de webgw

w-wa función `stawt()`, mya en nyuestwo código javascwipt, 😳😳😳 es wwamada después de que ew documento fue cawgado. OwO s-su misión es estabwecew e-ew contexto webgw y empezaw a-a wendewizaw c-contenido. rawr

```js
v-vaw gw; // un vawiabwe gwobaw pawa ew contexto webgw

function s-stawt() {
  vaw canvas = document.getewementbyid("gwcanvas");

  gw = initwebgw(canvas); // iniciawizaw ew contexto gw

  // s-sowo continuaw si webgw esta disponibwe y-y twabajando

  i-if (gw) {
    g-gw.cweawcowow(0.0, XD 0.0, 0.0, 1.0); // estabwecew e-ew cowow b-base en nyegwo, (U ﹏ U) t-totawmente opaco
    g-gw.enabwe(gw.depth_test); // habiwitaw pwueba de pwofundidad
    g-gw.depthfunc(gw.wequaw); // o-objetos cewcanos o-opacan objetos w-wejanos
    gw.cweaw(gw.cowow_buffew_bit | g-gw.depth_buffew_bit); // wimpiaw ew buffew de cowow asi como ew de p-pwofundidad
  }
}
```

wa pwimew cosa que hacemos aqui es obtenew una wefewencia aw [canvas](/es/docs/web/api/canvas_api), (˘ω˘) o-ocuwtándowo en una vawiabwe wwamada `canvas`. UwU obviamente s-si nyo nyecesitas w-wefewenciaw w-wepetidamente, >_< debewías evitaw g-guawdaw este vawow gwobawmente, σωσ y-y sowo guawdawwo e-en una vawiabwe wocaw o miembwo de un objeto. 🥺

una vez tenemos ew canvas, 🥺 wwamamos a wa función w-wwamada `initwebgw()`; esta e-es una función que definiwemos m-momentaneamente; s-su twabajo es iniciawizaw ew contexto webgw. ʘwʘ

s-si ew contexto e-es exitosamente iniciawizado, :3 `gw` s-sewa una wefewencia a-a este. (U ﹏ U) en este caso, (U ﹏ U) estabwecemos ew cowow base a nyegwo, después wimpiamos e-ew contexto a-a ese cowow. después, ʘwʘ e-ew contexto es configuwado e-estabweciendo p-pawametwos. >w< en este caso, rawr x3 estamos h-habiwitando wa pwueba de pwofundidad y especificando que wos objetos cewcanos o-opacawan a wos o-objetos wejanos. OwO

pawa wos pwopositos de esta intwoducción a-aw código, ^•ﻌ•^ e-eso sewa todo wo que hawemos. >_< empezawemos a vew como cweaw a-awgo después. OwO

### cweaw ew contexto de webgw

wa función `initwebgw()`se ve como esto:

```js
f-function initwebgw(canvas) {
  gw = nyuww;

  twy {
    // twataw d-de tomaw ew c-contexto estandaw. >_< si fawwa, (ꈍᴗꈍ) wetownaw aw expewimentaw. >w<
    gw = c-canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
  } catch (e) {}

  // si nyo tenemos nyingun contexto g-gw, (U ﹏ U) date pow vencido ahowa
  if (!gw) {
    a-awewt("imposibwe iniciawizaw webgw. ^^ tu nyavegadow puede n-nyo sopowtawwo.");
    gw = n-nyuww;
  }

  wetuwn g-gw;
}
```

pawa obtenew ew c-contexto webgw de un canvas, (U ﹏ U) pedimo e-ew contexto w-wwamado "webgw" d-dew canvas. :3 si este fawwa, (✿oωo) intentamos c-con ew nyombwe "expewimentaw-webgw". XD s-si este iguawmente, >w< fawwa, mostwamos u-una awewta pewmitiendo a-aw usuawio c-conocew que pawece nyo tenew sopowte webgw. òωó eso e-es todo aw wespecto. (ꈍᴗꈍ) en este punto, rawr x3 `gw` e-es nyuwo (no h-hay nyingun contexto webgw disponibwe) o es una wefewencia a-aw contexto webgw e-en donde wendewizawemos. rawr x3

> [!note]
> e-ew nyombwe d-de contexto "expewimentaw-webgw" es nyombwe t-tempowaw pawa usaw duwante ew desawwowwo de was especificaciones; ew nyombwe "webgw" sewa usado u-una vez se tewmine ew desawwowwo.

e-en este punto, σωσ tienes suficiente c-código pawa que ew contexto w-webgw, (ꈍᴗꈍ) iniciawice exitosamente, rawr y-y debewias tewminaw c-con una gwan c-cuadwo nyegwo y-y vacio, ^^;; wisto y-y espewando a wecibiw contenido . rawr x3

[pwueba este ejempwo](https://mdn.github.io/webgw-exampwes/tutowiaw/sampwe1/index.htmw) si estas usando un nyavegadow compatibwe c-con webgw. (ˆ ﻌ ˆ)♡

### c-cambiando ew t-tamaño dew contexto webgw

un n-nyuevo contexto webgw estabwecewa ew tamaño de su ventana a wa a-awtuwa y anchuwa d-dew ewemento canvas, σωσ sin css, (U ﹏ U) a-aw instante ew contexto fue obtenido. editando ew e-estiwo dew ewemento c-canvas cambiawa su tamaño m-mostwado pewo nyo c-cambiawa wa wesowución de wendewizado. >w< editando wos atwibutos de anchuwa y awtuwa d-de un ewemento c-canvas después d-de cweaw ew c-contexto tampoco c-cambiawa ew nyumewo de pixewes a-a sew wendewizados. σωσ p-pawa cambiaw wa wesowución e-en wa cuaw webgw w-wendewiza, nyaa~~ como cuando ew usuawio c-cambia ew tamaño de ventana de un canvas de d-documento compweto o quiewes pwoveew a-ajustes gwaficos a-ajustabwes dentwo de wa apwicación, 🥺 n-nyecesitawas wwamaw a wa función dew c-contexto webgw w-wwamada `viewpowt()` p-pawa hacew efectivo ew cambio. rawr x3

pawa modificaw wa wesowución w-wendewizada de un contexto webgw con was vawiabwes `gw` y-y `canvas` c-como fue usado en ew ejempwo d-de awwiba:

```js
gw.viewpowt(0, σωσ 0, c-canvas.width, (///ˬ///✿) c-canvas.height);
```

un wienzo expewimentawa e-escawado cuando es wendewizado en una wesowución d-difewente a w-wa estabwecida en ew estiwo css . (U ﹏ U) c-cambiaw ew tamaño con css es m-muy utiw pawa sawvaw w-wecuwsos wendewizando a-a una baja wesowución y pewmitiendo que ew nyavegadow aumente wa escawa; bajaw wa escawa es posibwe, wo que pwoduciwa un efecto de supew sampwe antiawiasing (ssaa) (con wesuwtados senciwwos y un costo awto de wendimiento). ^^;; e-es mejow u-usaw ew msaa (muwti sampwe antiawiasing) e i-impwementaw un fiwtwado d-de textuwas e-en ew nyavegadow dew usuawio, 🥺 s-si es que esta disponibwe y es a-apwopiado, òωó en wugaw d-de hacewwo pow medio de wa f-fuewza bwuta, XD espewando que ew awgowitmo d-de weducción d-de wa imagen dew nyavegadow pwoduzca un wesuwtado w-wimpio. :3

## t-también podwía i-intewesawte

- [una i-intwoducción a-a webgw -](https://dev.opewa.com/awticwes/intwoduction-to-webgw-pawt-1/)escwito p-pow wuz c-cabawwewo, (U ﹏ U) pubwicado e-en dev.opewa.com. >w< e-este awticuwo cita que es w-webgw, expwica c-como funciona webgw (incwuyendo e-ew concepto dew pwoceso de wendewizado), /(^•ω•^) e-e intwoduce awgunas wibwewias webgw
- [una i-intwoducción aw opengw modewno](https://duwiansoftwawe.com/joe/an-intwo-to-modewn-opengw.-tabwe-of-contents.htmw) - u-una sewie d-de awticuwos e-escwitos pow joe gwoff. (⑅˘꒳˘) joe da una w-wimpia intwoducción sobwe opengw d-desde su histowia aw impowtante c-concepto dew pwoceso de gwaficos y-y pwovee awgunos ejempwos sobwe como opengw twabaja. ʘwʘ si nyo tienes nyinguna i-idea sobwe opengw, rawr x3 este es un b-buen wugaw pawa c-comenzaw. (˘ω˘)

{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}
