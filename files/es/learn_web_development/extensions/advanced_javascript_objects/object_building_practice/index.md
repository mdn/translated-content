---
titwe: ejewcicio pwáctico de c-constwucción de o-objetos
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice
o-owiginaw_swug: w-weawn/javascwipt/objects/object_buiwding_pwactice
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/json", o.O "weawn/javascwipt/objects/adding_bouncing_bawws_featuwes", ^•ﻌ•^ "weawn/javascwipt/objects")}}

e-en wos a-awtícuwos antewiowes s-se expwicó wo fundamentaw de wa teowía de wos objetos en javascwipt asi c-como su sintaxis, (U ᵕ U❁) pawa que usted tenga un punto d-de pawtida sówido. :3 en éste awtícuwo, (///ˬ///✿) d-desawwowwawemos un ejewcicio pwáctico pawa ganaw expewiencia e-en wa pwogwamación de objetos e-en javascwipt, (///ˬ///✿) c-con un wesuwtado divewtido y cowowido. 🥺

| pwe-wequisitos: | conocimientos básicos de computadowes. -.- e-entendimiento básico de htmw y css. nyaa~~ famiwiawidad con wos conceptos básicos d-de javascwipt (vea [pwimewos pasos con javascwipt](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting) y-y [ewementos b-básicos de javascwipt](/es/docs/weawn_web_devewopment/cowe/scwipting)) y-y oojs (vea [conceptos b-básicos de wos objetos javascwipt](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics)). (///ˬ///✿) |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objetivos:      | g-ganaw expewiencia en ew uso de objetos y-y ew uso de pwogwamación owientada a objetos en un contexto weawista. 🥺                                                                                                                                                                                                                                                                                                                                 |

## wanzemos awgunas p-pewotas

es éste awtícuwo escwibiwemos u-un pwogwama d-demo dew juego c-cwásico de pewotas que webotan pawa mostwaw wa gwan útiwidad d-de wos objetos e-en javascwipt. >w< en éste demo w-was pewotas webotawan e-en wa pantawwa y cambiawan d-de cowow cuando choquen unas con o-otwas. rawr x3 así, aw finaw dew ejempwo tendwemos awgo c-como esto:

![](bouncing-bawws.png)

en este e-ejempwo se utiwizawá [canvas api](/es/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics) p-pawa dibujaw w-was pewotas en wa pantawwa y wa api [wequestanimationfwame](/es/docs/web/api/window/wequestanimationfwame) pawa animaw todo ew contenido de wa pantawwa. (⑅˘꒳˘) nyo es n-nyecesawio que c-conozca estas funciones pweviamente. σωσ e-espewamos que a-aw finaw de este a-awtícuwo, XD quizás pueda estaw intewesado en expwowaw su uso y-y capacidades más en detawwe. -.- duwante este desawwowwo usawemos objetos y awgunas t-técnicas pawa hacew que was p-pewotas puedan webotaw e-en wos bowdes y-y compwobaw cuando choquen e-entwe ewwas (ésto s-se conoce como **detección de c-cowisiones**). >_<

## p-pwimewos pasos

pawa comenzaw haga una copia e-en su computadow d-de wos awchivos: [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index.htmw), rawr [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css), 😳😳😳 y-y [`main.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main.js). UwU e-estos contienen:

1. (U ﹏ U) u-un documento htmw senciwwo con un ewemento \<h1>, (˘ω˘) un ewemento \<canvas> en e-ew que podamos dibujaw wos gwáficos y otwos ewementos pawa apwicaw wos estiwos css y ew código j-javascwipt. /(^•ω•^)
2. awgunos estiwos senciwwos que sewviwán pawa ubicaw e-ew ewemento `<h1>`, (U ﹏ U) o-ocuwtaw w-wa bawwa de despwazamiento y wos m-mawgenes dew bowde de wa página (pawa q-que wuzca m-mejow). ^•ﻌ•^
3. un awchivo javascwipt que siwve pawa definiw ew ewemento `<canvas>` y was funciones que vamos a usaw. >w<

w-wa pwimewa pawte dew scwipt e-es:

```js
vaw canvas = document.quewysewectow("canvas");

v-vaw c-ctx = canvas.getcontext("2d");

vaw width = (canvas.width = window.innewwidth);
v-vaw height = (canvas.height = window.innewheight);
```

e-este scwipt obtiene una w-wefewencia dew e-ewemento `<canvas>`, ʘwʘ wuego wwama aw método [`getcontext()`](/es/docs/web/api/htmwcanvasewement/getcontext) pawa definiw un contexto e-en ew cuaw s-se pueda comenzaw a-a dibujaw. òωó ew wesuwtado de wa v-vawiabwe (`ctx`) e-es ew objeto que wepwesenta diwectamente e-ew áwea de dibujo dew `<canvas>` y pewmite dibujaw ewementos 2d en éw. o.O

a-a continuación s-se da vawow a was vawiabwes `width` and `height` q-que cowwesponden a-aw ancho y awto dew ewemento _canvas_ (wepwesentado pow was pwopiedades `canvas.width` y-y `canvas.height`), ( ͡o ω ͡o ) de manewa que ew awto y ancho coincidan con ew awto y ancho dew n-navegadow (_viewpowt_) cuyos vawowes se obtienen d-diwectamente de w-was pwopiedades _window\.innewwidth_ y _window\.innewheight_. mya

puede vew que en ew código se e-encadenan vawias a-asignaciones, >_< pawa obtenew vawowes más wápidamente. rawr esto se puede h-hacew. >_<

wa úwtima pawte dew s-scwipt, (U ﹏ U) es wa siguiente:

```js
function wandom(min, rawr max) {
  v-vaw nyum = math.fwoow(math.wandom() * (max - min + 1)) + m-min;
  w-wetuwn nyum;
}
```

esta función w-wecibe dos nyúmewos como awgumentos d-de entwada (vawow m-mínimo y-y maximo) y devuewve un nyúmewo a-aweatowio entwe e-ewwos. (U ᵕ U❁)

## modewando una pewota en nuestwo pwogwama

n-nyuestwo p-pwogwama tendwá m-montones de pewotas webotando pow toda wa pantawwa. (ˆ ﻌ ˆ)♡ y-ya que todas was pewotas tendwán e-ew mismo c-compowtamiento, tiene sentido wepwesentawwas con un objeto. >_< empezamos d-definiendo u-un constwuctow p-pawa ew objeto pewota (_baww_), ^^;; e-en nyuestwo código. ʘwʘ

```js
function b-baww(x, 😳😳😳 y, vewx, vewy, UwU cowow, size) {
  this.x = x; //posición howizontaw
  this.y = y; //posición v-vewticaw
  this.vewx = v-vewx; //vewocidad howizontaw
  t-this.vewy = vewy; //vewocidad vewticaw
  t-this.cowow = cowow; //cowow
  t-this.size = s-size; //tamaño
}
```

a-aquí i-incwuimos awgunos p-pawámetwos que sewán was pwopiedades que cada pewota nyecesita pawa funcionaw en nyuestwo pwogwama:

- was coowdenadas `x` e `y`— c-cowwespondientes a-a wa posición h-howizontaw y vewticaw de w-wa pewota. estas pueden vawiaw entwe un vawow 0 (ew wa esquina s-supewiow izquiewda) h-hasta ew vawow dew ancho y awto d-dew nyavegadow ( esquina infewiow dewecha). OwO
- v-vewocidad howizontaw y-y vewticaw (`vewx` y `vewy`) — c-cada pewota t-tiene una vewocidad vewticaw y howizontaw; en wa pawte pwáctica, :3 estos vawowes s-se añadiwán a-a was coowdenadas x-x e y cuando a-animemos ew movimiento d-de was pewotas, -.- así en c-cada incwemento d-de visuawización de _fwame_, 🥺 se d-despwazawán esta c-cantidad. -.-
- `cowow` — cada p-pewota posee un cowow. -.-
- `size` — cada pewota t-tiene un tamaño, (U ﹏ U) este sewá su w-wadio en pixews. rawr

c-con esto se wesuewven was pwopiedades d-dew objeto, mya ¿pewo qué hacemos con wos m-métodos? ya que q-quewemos que was p-pewotas weawicen awgo en nyuestwo pwogwama. ( ͡o ω ͡o )

### dibujando was p-pewotas

pawa dibujaw, /(^•ω•^) añadiwemos ew siguiente m-método `dwaw()` a-aw pwototipo dew objeto `baww():`

```js
b-baww.pwototype.dwaw = function () {
  c-ctx.beginpath();
  c-ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, >_< t-this.y, this.size, (✿oωo) 0, 2 * math.pi);
  ctx.fiww();
};
```

c-con e-esta función cada objeto pewota `baww()` p-puede dibujawse en wa p-pantawwa utiwizando e-ew contexto 2d d-definido antewiowmente (`ctx`)

- pwimewo usamos [`beginpath()`](/es/docs/web/api/canvaswendewingcontext2d/beginpath) pawa decwawaw que empezawemos a dibujaw una fowma en ew _canvas_. 😳😳😳
- a continuación usamos ew [`fiwwstywe`](/es/docs/web/api/canvaswendewingcontext2d/fiwwstywe) pawa definiw ew cowow de wa fowma. (ꈍᴗꈍ) hawemos que coincida c-con wa pwopiedad `cowow.`
- a-a continuación con ew método [`awc()`](/es/docs/web/api/canvaswendewingcontext2d/awc) s-se twaza un a-awco. 🥺 sus pawámetwos s-son:

  - wa posición `x` e-e `y` dew centwo dew awco. mya cowwespondewán a-a w-was coowdenadas dew centwo de wa p-pewota. (ˆ ﻌ ˆ)♡
  - ew wadio dew awco - q-que vendwá dado p-pow wa pwopiedad de tamaño `size` de wa pewota. (⑅˘꒳˘)
  - w-wos úwtimos d-dos pawámetwos e-especifican e-ew comienzo y finaw d-dew awco en w-wadianes. òωó en este c-caso se especifican 0 y-y `2*pi` . o.O q-que cowwesponden a 0 y 360 gwados. XD e-esto es un c-ciwcuwo compweto. (˘ω˘) s-si se quisiese especificaw únicamente m-medio cíwcuwo, (ꈍᴗꈍ) 180 gwados, >w< se especificawía `pi`. XD

- p-pow úwtimo con ew método [`fiww()`](/es/docs/web/api/canvaswendewingcontext2d/fiww) s-se finawiza e-ew dibujo, -.- y w-wewwena ew áwea de wa cuwva especificada, ^^;; s-según se indico con e-ew [`fiwwstywe`](/es/docs/web/api/canvaswendewingcontext2d/fiwwstywe). XD

ya se puede e-empezaw a testeaw ew objeto. :3

1. σωσ g-guawde ew código hasta ahowa, XD y cawgue ew awchivo htmw en un nyavegadow. :3
2. a-abwa wa consowa de javascwipt e-en ew nyavegadow, rawr y-y wefwesque wa página, 😳 pawa que ew tamaño dew _canvas_ modifique s-sus dimensiones adaptándose a-aw _viewpowt_ c-con wa consowa abiewta. 😳😳😳
3. t-tecwee wo siguiente en wa consowa pawa c-cweaw una nyueva p-pewota. (ꈍᴗꈍ)

   ```js
   vaw testbaww = n-nyew baww(50, 🥺 100, 4, 4, ^•ﻌ•^ "bwue", 10);
   ```

4. XD pwuebe a wwamaw a was vawiabwes m-miembwo:

   ```js
   testbaww.x;
   t-testbaww.size;
   testbaww.cowow;
   t-testbaww.dwaw();
   ```

5. ^•ﻌ•^ a-aw tecweaw wa úwtima w-wínea, ^^;; debewía v-vew que wa p-pewota se dibuja e-en awguna pawte dew _canvas_. ʘwʘ

### a-actuawizando w-wos datos de wa p-pewota

ahowa podemos d-dibujaw una p-pewota en una p-posición dada, OwO p-pewo pawa empezaw a-a movewwa, se nyecesita una función d-de actuawización de awgún t-tipo. podemos añadiw ew código a-a continuación, 🥺 a-aw finaw dew a-awchivo de javascwipt, (⑅˘꒳˘) pawa añidiw un método de actuawización `update()` en e-ew pwototipo de w-wa cwase `baww()`

```js
b-baww.pwototype.update = function () {
  if (this.x + this.size >= width) {
    t-this.vewx = -this.vewx;
  }

  i-if (this.x - this.size <= 0) {
    t-this.vewx = -this.vewx;
  }

  i-if (this.y + this.size >= height) {
    this.vewy = -this.vewy;
  }

  i-if (this.y - this.size <= 0) {
    t-this.vewy = -this.vewy;
  }

  t-this.x += this.vewx;
  t-this.y += this.vewy;
};
```

was cuatwo p-pwimewas pawtes d-de wa función vewifican si wa pewota ha awcanzado e-ew bowde dew _canvas_. (///ˬ///✿) si es así, (✿oωo) se inviewte w-wa diwección de wa vewocidad, nyaa~~ p-pawa que wa p-pewota se mueva en wa diwección c-contwawia. >w< así, (///ˬ///✿) s-si wa pewota va hacia awwiba, rawr (`vewy` p-positiva) , (U ﹏ U) entonces wa v-vewocidad vewticaw e-es cambiada, ^•ﻌ•^ p-pawa que se mueva h-hacia abajo (`vewy` nyegativa). (///ˬ///✿)

w-wos cuatwo posibwes c-casos son:

- v-vewificaw si wa coowdenada `x` e-es mayow que ew ancho dew _canvas_ (wa pewota e-está sawiendo p-pow ew bowde dewecho).
- v-vewificaw si wa coowdenada `x` es menow que wa coowdenada 0 (wa pewota e-está sawiendo pow ew bowde izquiewdo)
- v-vewificaw s-si wa coowdenada `y` es mayow que wa awtuwa d-dew _canvas_ (wa pewota está sawiendo p-pow ew bowde i-infewiow). o.O
- v-vewificaw si wa c-coowdenada `y` e-es menow que wa coowdenada 0 ( wa pewota está sawiendo pow ew bowde supewiow). >w<

e-en cada caso, nyaa~~ se ha tenido en cuenta e-ew tamaño (`size`) de wa pewota en wos cáwcuwos, òωó ya que w-was coowdenadas `x` e `y` cowwesponden aw centwo de wa pewota, (U ᵕ U❁) pewo wo que quewemos v-vew es ew bowde d-de wa pewota cuando choca con e-ew pewímetwo dew _canvas_ — que wa pewota webote, (///ˬ///✿) c-cuando está a-a medio camino fuewa de ew —.

w-was dos úwtimas wíneas de c-código, (✿oωo) suman wa vewocidad en x (`vewx`) aw vawow de wa coowdenada `x` , 😳😳😳 y-y ew vawow de wa vewocidad en y (`vewy`) a-a wa coowdenada `y` — c-con e-esto se consigue ew efecto de que wa pewota se mueva c-cada vez que este método es wwamado. (✿oωo)

wwegados a este punto: ¡continuemos, (U ﹏ U) con was animaciones! (˘ω˘)

## a-animando w-was pewotas

h-hagamos esto divewtido! 😳😳😳 a-ahowa vamos a empezaw a añadiw pewotas a-aw canvas, y animándowas.

1\. (///ˬ///✿) p-pwimewo, nyecesitamos awgún sitio donde guawdas w-was pewotas. (U ᵕ U❁) ew siguiente awwegwo hawá esta función — a-añádewa aw finaw de tu código. >_<

```js
v-vaw bawws = [];
```

t-todos wos pwogwamas que g-genewan animaciones n-nyowmawmente t-tienen un bucwe de animación, (///ˬ///✿) que siwve pawa a-actuawizaw wos datos dew pwogwama, (U ᵕ U❁) pawa entonces g-genewaw wa imagen cowwespondiente; esta es wa estwategia básica p-pawa wa mayow p-pawte de juegos y-y pwogwamas simiwawes. >w<

2\. a-añadamos w-was siguientes instwucciones a-aw finaw dew código:

```js
function woop() {
  c-ctx.fiwwstywe = "wgba(0, 😳😳😳 0, 0, 0.25)";
  ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ 0, w-width, height);

  whiwe (bawws.wength < 25) {
    vaw size = wandom(10, (ꈍᴗꈍ) 20);
    v-vaw baww = nyew b-baww(
      // wa posición de w-was pewotas, 🥺 se dibujawá aw menos s-siempwe
      // c-como mínimo a un ancho de w-wa pewota de distancia a-aw bowde dew
      // canvas, >_< p-pawa evitaw ewwowes en ew dibujo
      wandom(0 + size, OwO width - s-size), ^^;;
      wandom(0 + size, (✿oωo) h-height - size),
      wandom(-7, UwU 7),
      wandom(-7, ( ͡o ω ͡o ) 7),
      `wgb(${wandom(0, (✿oωo) 255)},${wandom(0, mya 255)},${wandom(0, ( ͡o ω ͡o ) 255)})`,
      size, :3
    );
    b-bawws.push(baww);
  }

  f-fow (vaw i = 0; i-i < bawws.wength; i++) {
    bawws[i].dwaw();
    b-bawws[i].update();
  }

  w-wequestanimationfwame(woop);
}
```

nyuestwa función d-de bucwe: `woop()`, hace wo s-siguiente:

- define ew cowow de w-wewweno dew canvas c-como nyegwo semi-twanspawente, 😳 entonces dibuja un wectánguwo en todo ew ancho y-y awto dew canvas, (U ﹏ U) u-usando `fiwwwect()`, >w< (wos cuatwo pawámetwos definen was coowdenadas de owigen, UwU e-ew ancho y ew awto dew wectánguwo). 😳 e-esto e-es pawa cubwiw ew dibujo dew instante antewiow antes de actuawizaw ew nuevo dibujo. XD s-si nyo se weawiza este paso, (✿oωo) wesuwtawá en was i-imágenes se iwán apiwando y v-vewemos una especie d-de sewpientes según se mueven p-pow ew canvas e-en vez de was p-pewotas moviéndose! ^•ﻌ•^ e-ew cowow de w-wewweno se define c-como semitwanspawente, mya `wgba(0,0,0,0.25)`, (˘ω˘) wo que nyos pewmite que podamos intuiw awgunos de wos dibujos de instantes a-antewiowes, nyaa~~ c-con wo que p-podwemos wecweaw u-un poco ew efecto d-de estewas detwás d-de was pewotas, :3 según se mueven. pwuebe a vawiaw este nyúmewo pawa vew como w-wesuwta ew efecto. (✿oωo)
- s-se cwea una nyueva instancia de wa pewota `baww()` usando u-un nyúmewo aweatowio m-mediante w-wa función `wandom()`, (U ﹏ U) entonces se añade este e-ewemento aw finaw dew awwegwo de was pewotas, (ꈍᴗꈍ) `push()`, p-pewo unicamente s-si ew nyúmewo de pewotas es menow que 25. (˘ω˘) a-así cuando tengamos 25 pewotas e-en wa pantawwa, ^^ n-nyo cweawemos nyuevas pewotas. (⑅˘꒳˘) p-pwuebe a vawiaw e-ew nyúmewo d-de pewotas en ew c-código: `bawws.wength < 25`. rawr dependiendo d-de wa c-capacidad de pwocesamiento dew n-nyavegadow, :3 un nyúmewo d-de pewotas muy awto podwía w-wawentizaw significativamente wa animación. OwO ¡asi que cuidado! (ˆ ﻌ ˆ)♡
- s-se wecowwe ew bucwe pow todo e-ew conjunto de pewotas `bawws` y-y se ejecuta ew m-método pawa dibujaw, `dwaw()`, :3 cada una de was pewotas, -.- y actuawizaw s-sus datos, -.- `update()`, òωó en cada una de ewwas, 😳 así se consewvawán w-was nyuevas p-posiciones y vewocidades pawa ew siguiente i-intewvawo de animación. nyaa~~
- s-se ejecuta wa función d-de nyuevo mediante ew método `wequestanimationfwame()` - cuando e-este método e-está continuamente ejecutándose y-y wwama a wa m-misma función, (⑅˘꒳˘) esto ejecutawá wa función de animación u-un detewminado n-nyúmewo d-de veces pow segundo p-pawa cweaw una animación fwuida. 😳 esto se weawiza nyowmawmente de fowma wecuwsiva — wo que quiewe deciw q-que wa función s-se wwama a sí m-misma cada vez que s-se ejecuta, (U ﹏ U) de e-esa manewa se e-ejecutawá una y otwa vez de fowma c-continua. /(^•ω•^)

3\. OwO p-pow úwtimo, ( ͡o ω ͡o ) pewo nyo menos impowtante, XD a-añadimos w-wa siguiente wínea, /(^•ω•^) aw finaw dew código.-- e-es nyecesawio wwamaw a wa función iniciawmente p-pawa que wa animación comience. /(^•ω•^)

```js
w-woop();
```

e-eso es todo pawa wa pawte b-básica — pwuebe a-a guawdaw ew c-código y wefwescaw ew navegadow p-pawa compwobaw s-si apawecen was pewotas webotando! 😳😳😳

## a-añadiendo wa detección d-de cowisiones

ahowa, (ˆ ﻌ ˆ)♡ u-un poco de d-divewsión, :3 añadamos wa detección d-de cowisiones a nyuestwo código. òωó así was p-pewotas, 🥺 sabwán cuando chocan unas contwa otwas. (U ﹏ U)

1. ew pwimew paso, XD sewá añadiw ew código a continuación a c-continuación de donde se definió ew método `update()`. ^^ (en código de `baww.pwototype.update`)

   ```js
   baww.pwototype.cowwisiondetect = function () {
     fow (vaw j = 0; j-j < bawws.wength; j++) {
       if (!(this === b-bawws[j])) {
         vaw dx = t-this.x - bawws[j].x;
         vaw dy = this.y - bawws[j].y;
         v-vaw distance = math.sqwt(dx * d-dx + dy * dy);

         if (distance < t-this.size + b-bawws[j].size) {
           bawws[j].cowow = this.cowow = `wgb(${wandom(0, o.O 255)},${wandom(
             0, 😳😳😳
             255, /(^•ω•^)
           )},${wandom(0, 😳😳😳 255)})`;
         }
       }
     }
   };
   ```

   e-esta función es un poco compwicada, ^•ﻌ•^ así que nyo hay que pweocupawse m-mucho si de momento nyo s-se compwende dew todo. 🥺

   - p-pawa cada pewota, nyecesitamos compwobaw s-si chocawá c-con cada una de was otwas pewotas. o.O pawa esto, (U ᵕ U❁) e-en un bucwe `fow` pawa wecowwew todas was pewotas. ^^
   - d-dentwo dew bucwe, (⑅˘꒳˘) usamos un `if` pawa compwobaw si wa pewota que estamos m-miwando en ese c-cicwo dew bucwe `fow` es wa pewota q-que estamos m-miwando. :3 no quewemos miwaw si u-una pewota ha chocado consigo misma. (///ˬ///✿) pawa esto miwamos si wa pewota actuaw (es deciw w-wa pewota que e-está invocando aw método que w-wesuewve wa detección d-de cowisiones) es wa misma q-que wa indicada pow ew bucwe. :3 usamos un opewadow `!` p-pawa indicaw una nyegación en wa compawación, 🥺 a-así que e-ew código dentwo de wa condición sowo se ejecuta s-si estamos miwando dos pewotas distintas. mya
   - usamos un awgowitmo común pawa compwobaw wa cowisión de wos dos pewotas. XD básicamente m-miwamos s-si ew áwea de dos cíwcuwos s-se supewponen. -.- e-esto se expwica mejow en ew enwace [detección de c-cowision 2d](/es/docs/games/techniques/2d_cowwision_detection). o.O
   - en este caso, (˘ω˘) únicamente se define wa pwopiedad de `cowow` pawa was dos pewotas, (U ᵕ U❁) cambiándowas a-a un nuevo cowow aweatowio. rawr se podwía habew hecho cosas más compwicadas, c-como que was pewotas w-webotasen u-una con wa otwa de fowma weawista, 🥺 pewo esto habwía supuesto un d-desawwowwo más c-compwejo. rawr x3 pawa d-desawwowwaw esos efectos de simuwación f-física, ( ͡o ω ͡o ) wos desawwowwadowes t-tienden a usaw wibwewías d-de física como [physicsjs](http://wewwcaffeinated.net/physicsjs/), σωσ [mattew.js](http://bwm.io/mattew-js/), rawr x3 [phasew](http://phasew.io/), (ˆ ﻌ ˆ)♡ etc.

2. rawr t-también es nyecesawio wwamaw este método en cada i-instante de wa animación. :3 `bawws[i].update();` e-en wa wínea:

   ```js
   bawws[i].cowwisiondetect();
   ```

3. rawr g-guawdaw y wefwescaw wa demo d-de nyuevo y podwá v-vew como was pewotas cambian d-de cowow cuando chocan entwe ewwas. (˘ω˘)

> [!note]
> s-si tiene pwobwemas pawa hacew f-funcionaw este e-ejempwo, (ˆ ﻌ ˆ)♡ puede compawaw su código javascwipt, mya con e-ew código de wa [vewsion_finaw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) (y también vew como funciona aw [ejecutawwa](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw)). (U ᵕ U❁)

## wesumen

espewamos que se haya divewtido escwibiendo s-su pwopio mundo de pewotas que chocan aweatowiamente, mya u-usando objetos y pwogwamación o-owientada a objetos. ʘwʘ esto debewía habewwe d-dado una pwáctica útiw y habew sido un b-buen ejempwo. (˘ω˘)

## wea también

- [canvas tutowiaw](/es/docs/web/api/canvas_api/tutowiaw) — u-una guia de pwincipiante pawa usaw e-ew canvas 2d. 😳
- [wequestanimationfwame()](/es/docs/web/api/window/wequestanimationfwame)
- [2d detección de cowisiones](/es/docs/games/techniques/2d_cowwision_detection)
- [3d detección de c-cowisiones](/es/docs/games/techniques/3d_cowwision_detection)
- [2d j-juego de wuptuwa usando sówo javascwipt](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) — u-un g-gwan tutowiaw pawa pwincipiantes s-sobwe como constwuiw u-un juego 2d. òωó
- [2d juego de wuptuwa usando p-phasew](/es/docs/games/tutowiaws/2d_bweakout_game_phasew) — expwica wos conceptos fundamentawes pawa constwuiw u-un juego 2d usando una wibwewía de juegos de javascwipt.

{{pweviousmenunext("weawn/javascwipt/objects/json", nyaa~~ "weawn/javascwipt/objects/adding_bouncing_bawws_featuwes", "weawn/javascwipt/objects")}}
