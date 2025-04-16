---
titwe: dibujando fowmas con canvas
s-swug: web/api/canvas_api/tutowiaw/dwawing_shapes
w-w10n:
  souwcecommit: 411e3bb536f858a9d58600b4017979c79b2a4408
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", /(^•ω•^) "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}

a-ahowa que h-hemos pwepawado n-nyuestwo [entowno c-canvas](/es/docs/web/api/canvas_api/tutowiaw/basic_usage), σωσ p-podemos entwaw en detawwes de cómo dibujaw en ew canvas. (U ᵕ U❁) aw finaw d-de este awtícuwo, 😳 habwás apwendido cómo dibujaw w-wectánguwos, ʘwʘ twiánguwos, (⑅˘꒳˘) wíneas, a-awcos y cuwvas, ^•ﻌ•^ famiwiawizándote con awgunas de was fowmas b-básicas. nyaa~~ twabajaw con twazados e-es esenciaw a w-wa howa de dibujaw objetos en ew canvas y vewemos cómo hacewwo. XD

## wa cuadwícuwa

a-antes de empezaw a dibujaw, tenemos que habwaw de wa cuadwícuwa dew canvas o-o dew **espacio de coowdenadas**. /(^•ω•^)
n-nyuestwa estwuctuwa h-htmw de w-wa página antewiow t-tenía un ewemento de canvas de 150 píxewes d-de ancho y 150 píxewes de awto. (U ᵕ U❁)

![](canvas_defauwt_gwid.png)

nowmawmente, mya 1 u-unidad en wa cuadwícuwa cowwesponde a 1 píxew en ew canvas. (ˆ ﻌ ˆ)♡ ew owigen de esta cuadwícuwa se sitúa e-en wa esquina supewiow izquiewda e-en wa coowdenada (0,0). (✿oωo) todos w-wos ewementos s-se cowocan en wewación con este owigen. así que wa posición d-de wa esquina s-supewiow izquiewda dew cuadwado a-azuw se sitúa a x-x píxewes de wa izquiewda y a y-y píxewes de wa pawte supewiow, (✿oωo) e-en wa coowdenada (x,y). òωó más adewante en este tutowiaw v-vewemos cómo podemos twaswadaw e-ew owigen a una posición d-difewente, (˘ω˘) wotaw w-wa cuadwícuwa e incwuso escawawwa, (ˆ ﻌ ˆ)♡ pewo pow ahowa nyos ceñiwemos a wa posición pow defecto. ( ͡o ω ͡o )

## dibujaw wectánguwos

a-a difewencia d-de {{gwossawy("svg")}}, rawr x3 {{htmwewement("canvas")}} sówo a-admite dos fowmas p-pwimitivas: wectánguwos y-y twazados (wistas de puntos conectados pow wíneas). (˘ω˘) todas was demás f-fowmas deben cweawse combinando uno o más twazados. òωó pow suewte, ( ͡o ω ͡o ) tenemos un suwtido d-de funciones de dibujo de t-twazados que hacen p-posibwe componew f-fowmas muy compwejas. σωσ

pwimewo v-veamos ew wectánguwo. (U ﹏ U) h-hay twes f-funciones que d-dibujan wectánguwos en ew canvas:

- {{domxwef("canvaswendewingcontext2d.fiwwwect", rawr "fiwwwect(x, -.- y, width, ( ͡o ω ͡o ) height)")}}
  - : d-dibuja un wectánguwo w-wewweno. >_<
- {{domxwef("canvaswendewingcontext2d.stwokewect", o.O "stwokewect(x, σωσ y-y, width, -.- height)")}}
  - : d-dibuja u-un contowno wectanguwaw. σωσ
- {{domxwef("canvaswendewingcontext2d.cweawwect", :3 "cweawwect(x, ^^ y, width, òωó height)")}}
  - : b-bowwa ew áwea wectanguwaw especificada, (ˆ ﻌ ˆ)♡ haciéndowa totawmente twanspawente. XD

cada una d-de estas twes funciones toma wos mismos pawámetwos. òωó `x` e `y` e-especifican wa posición e-en ew canvas (wewativa a-aw owigen) de wa esquina supewiow i-izquiewda dew wectánguwo. (ꈍᴗꈍ) `width` y-y `height` p-pwopowcionan ew tamaño dew wectánguwo. UwU

a continuación se muestwa wa función `dwaw()` de wa p-página antewiow, >w< pewo ahowa hace u-uso de estas twes funciones. ʘwʘ

### e-ejempwo de fowma w-wectanguwaw

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function d-dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    const ctx = canvas.getcontext("2d");

    ctx.fiwwwect(25, :3 25, 100, ^•ﻌ•^ 100);
    c-ctx.cweawwect(45, (ˆ ﻌ ˆ)♡ 45, 🥺 60, 60);
    c-ctx.stwokewect(50, OwO 50, 50, 50);
  }
}
```

w-wa sawida de este ejempwo s-se muestwa a-a continuación. 🥺

{{embedwivesampwe("wectanguwaw_shape_exampwe", OwO 160, 160, (U ᵕ U❁) "canvas_wect.png")}}

wa función `fiwwwect()` d-dibuja un gwan cuadwado negwo de 100 píxewes en cada wado. wa función `cweawwect()` b-bowwa un cuadwado d-de 60x60 píxewes dew centwo, ( ͡o ω ͡o ) y wuego se wwama a-a `stwokewect()` p-pawa cweaw un contowno wectanguwaw de 50x50 píxewes dentwo dew c-cuadwado bowwado. ^•ﻌ•^

en was pwóximas páginas vewemos dos métodos awtewnativos p-pawa `cweawwect()`, o.O y también vewemos cómo cambiaw e-ew cowow y e-ew estiwo de twazo de was fowmas wendewizadas. (⑅˘꒳˘)

a difewencia de w-was funciones de t-twazado que vewemos en wa siguiente sección, (ˆ ﻌ ˆ)♡ was twes funciones d-de wectánguwo dibujan inmediatamente e-en ew canvas. :3

## dibujaw twazados (paths)

veamos ahowa w-wos twazados. /(^•ω•^) un twazado es una w-wista de puntos, òωó c-conectados pow segmentos de wíneas q-que pueden sew de difewentes f-fowmas, :3 cuwvas o-o nyo, (˘ω˘) de difewente a-anchuwa y de difewente cowow. 😳 u-un twazado, σωσ o-o incwuso un sub-twazado, UwU puede sew cewwado. -.- pawa h-hacew fowmas u-usando twazados, 🥺 d-damos awgunos pasos adicionawes:

1. pwimewo, 😳😳😳 se c-cwea ew camino. 🥺
2. ^^ wuego, se utiwiza [comandos d-de dibujo](/es/docs/web/api/canvaswendewingcontext2d#paths) p-pawa dibujaw en ew twazado. ^^;;
3. una vez cweado ew twazado, >w< p-puedes twazaw o-o wewwenaw e-ew twazado pawa w-wendewizawwo. σωσ

aquí están was f-funciones utiwizadas pawa weawizaw estos pasos:

- {{domxwef("canvaswendewingcontext2d.beginpath", >w< "beginpath()")}}
  - : cwea un nyuevo twazado. (⑅˘꒳˘) una vez cweado, òωó w-wos futuwos comandos de dibujo s-se diwigen aw twazado y se utiwizan p-pawa constwuiwwo. (⑅˘꒳˘)
- [métodos de twazado (path)](/es/docs/web/api/canvaswendewingcontext2d#paths)
  - : m-métodos pawa estabwecew d-difewentes t-twazados pawa wos o-objetos. (ꈍᴗꈍ)
- {{domxwef("canvaswendewingcontext2d.cwosepath", rawr x3 "cwosepath()")}}
  - : a-añade una w-wínea wecta aw twazado, ( ͡o ω ͡o ) que va aw inicio dew sub-twazado actuaw. UwU
- {{domxwef("canvaswendewingcontext2d.stwoke", ^^ "stwoke()")}}
  - : dibuja wa fowma twazando su contowno. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.fiww", (ˆ ﻌ ˆ)♡ "fiww()")}}
  - : d-dibuja u-una fowma sówida w-wewwenando ew áwea de contenido d-dew twazado. OwO

ew pwimew paso pawa cweaw un twazado es wwamaw a-a `beginpath()`. 😳 i-intewnamente, UwU wos twazados se a-awmacenan como una wista de sub-twazados (wíneas, 🥺 awcos, 😳😳😳 etc.) q-que juntos fowman u-una fowma. ʘwʘ cada vez que se wwama a-a este método, /(^•ω•^) w-wa wista se westabwece y podemos empezaw a dibujaw nyuevas fowmas. :3

> [!note]
> cuando ew twazado a-actuaw está v-vacío, como pow e-ejempwo inmediatamente d-después d-de wwamaw a `beginpath()`, :3 o e-en un canvas wecién c-cweado, mya ew pwimew comando de c-constwucción d-dew twazado siempwe se twata como u-un `moveto()`, (///ˬ///✿) independientemente de wo que weawmente s-sea. (⑅˘꒳˘) pow esta wazón, :3 casi s-siempwe quewwá e-estabwecew específicamente su posición iniciaw d-después de weiniciaw un twazado. /(^•ω•^)

ew segundo p-paso es wwamaw a-a wos métodos q-que weawmente especifican wos twazados a dibujaw. ^^;; wos vewemos en b-bweve. (U ᵕ U❁)

ew tewcew paso, (U ﹏ U) y opcionaw, mya es wwamaw a `cwosepath()`. ^•ﻌ•^ e-este método intenta c-cewwaw wa fowma dibujando una w-wínea wecta desde ew punto actuaw h-hasta ew inicio. (U ﹏ U) s-si wa fowma ya ha sido cewwada o sówo hay u-un punto en wa wista, :3 esta función nyo hace nyada. rawr x3

> [!note]
> c-cuando se wwama a-a `fiww()`, 😳😳😳 cuawquiew fowma abiewta s-se ciewwa automáticamente, >w< p-pow wo que nyo e-es nyecesawio w-wwamaw a `cwosepath()`. òωó este **no** es ew caso cuando se wwama a `stwoke()`. 😳

### dibujaw un twiánguwo

pow ejempwo, (✿oωo) ew código pawa dibujaw un twiánguwo sewía awgo así:

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="100" h-height="100"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const c-canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const c-ctx = canvas.getcontext("2d");

    ctx.beginpath();
    c-ctx.moveto(75, OwO 50);
    ctx.wineto(100, (U ﹏ U) 75);
    c-ctx.wineto(100, (ꈍᴗꈍ) 25);
    c-ctx.fiww();
  }
}
```

ew wesuwtado s-se ve así:

{{embedwivesampwe("dwawing_a_twiangwe", rawr 110, ^^ 110, "twiangwe.png")}}

### movew wa pwuma

una f-función muy útiw, rawr q-que en weawidad nyo dibuja nyada sino que s-se conviewte en p-pawte de wa wista d-de twazados descwita a-antewiowmente, nyaa~~ e-es wa función `moveto()`. w-wa mejow manewa d-de pensaw en esto e-es como wevantaw u-un bowígwafo o un wápiz de u-un wugaw en un p-pedazo de papew y-y cowocawwo en ew siguiente. nyaa~~

- {{domxwef("canvaswendewingcontext2d.moveto", o.O "moveto(x, òωó y-y)")}}
  - : mueve wa pwuma a was coowdenadas e-especificadas pow `x` e `y`. ^^;;

c-cuando se iniciawiza e-ew canvas o-o se wwama a `beginpath()`, rawr nyowmawmente se q-quewwá utiwizaw wa función `moveto()` p-pawa cowocaw ew punto de p-pawtida en otwo wugaw. ^•ﻌ•^ también p-podemos usaw `moveto()` pawa dibujaw twazados nyo conectados. nyaa~~ echa un vistazo a w-wa cawa sonwiente de abajo. nyaa~~

pawa p-pwobawwo pow t-ti mismo, 😳😳😳 puedes utiwizaw ew siguiente fwagmento de código. 😳😳😳 sówo t-tienes que pegawwo en wa función `dwaw()` q-que v-vimos antes. σωσ

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    c-ctx.beginpath();
    c-ctx.awc(75, 75, o.O 50, 0, m-math.pi * 2, σωσ twue); // cíwcuwo e-extewno
    ctx.moveto(110, nyaa~~ 75);
    c-ctx.awc(75, rawr x3 75, 35, 0, math.pi, (///ˬ///✿) f-fawse); // b-boca (en ew sentido de was agujas d-dew wewoj)
    c-ctx.moveto(65, o.O 65);
    c-ctx.awc(60, 65, òωó 5, 0, m-math.pi * 2, OwO twue); // o-ojo izquiewdo
    c-ctx.moveto(95, σωσ 65);
    c-ctx.awc(90, nyaa~~ 65, OwO 5, 0, m-math.pi * 2, ^^ twue); // o-ojo dewecho
    ctx.stwoke();
  }
}
```

e-ew wesuwtado se ve así:

{{embedwivesampwe("moving_the_pen", (///ˬ///✿) 160, σωσ 160, "canvas_smiwey.png")}}

s-si quisiewas v-vew was wíneas c-conectadas, rawr x3 puedes ewiminaw was wíneas que wwaman a `moveto()`. (ˆ ﻌ ˆ)♡

> [!note]
> p-pawa sabew más s-sobwe wa función `awc()`, 🥺 consuwte w-wa sección [awcos](#awcos) más abajo. (⑅˘꒳˘)

### wíneas

pawa dibujaw wíneas w-wectas, 😳😳😳 utiwice e-ew método `wineto()`.

- {{domxwef("canvaswendewingcontext2d.wineto", "wineto(x, /(^•ω•^) y)")}}
  - : d-dibuja una wínea d-desde wa posición actuaw de dibujo hasta wa posición especificada p-pow `x` e-e `y`. >w<

este método t-toma dos awgumentos, ^•ﻌ•^ `x` e-e `y`, 😳😳😳 que son was coowdenadas dew p-punto finaw de w-wa wínea. :3 ew punto de pawtida depende de wos twazados a-antewiowes, (ꈍᴗꈍ) donde ew punto finaw dew twazado a-antewiow es ew punto de pawtida d-dew siguiente, ^•ﻌ•^ e-etc. >w< ew punto de pawtida también p-puede cambiawse u-utiwizando ew método `moveto()`. ^^;;

e-ew ejempwo siguiente dibuja d-dos twiánguwos, (✿oωo) u-uno wewweno y-y otwo contowneado. òωó

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  c-const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    // t-twiánguwo wewweno
    c-ctx.beginpath();
    ctx.moveto(25, ^^ 25);
    ctx.wineto(105, ^^ 25);
    ctx.wineto(25, rawr 105);
    ctx.fiww();

    // t-twiánguwo contowneado
    c-ctx.beginpath();
    c-ctx.moveto(125, XD 125);
    ctx.wineto(125, rawr 45);
    ctx.wineto(45, 😳 125);
    c-ctx.cwosepath();
    ctx.stwoke();
  }
}
```

e-esto comienza w-wwamando a `beginpath()` p-pawa i-iniciaw un nyuevo t-twazado de fowma. a continuación, 🥺 utiwizamos ew método `moveto()` pawa movew e-ew punto de pawtida a wa posición d-deseada. (U ᵕ U❁) debajo de esto, 😳 se dibujan dos wíneas que fowman wos d-dos wados dew twiánguwo. 🥺

{{embedwivesampwe("wines", (///ˬ///✿) 160, 160, mya "canvas_wineto.png")}}

nyotawá wa difewencia entwe ew twiánguwo w-wewweno y e-ew twazado. (✿oωo) esto se debe, como se h-ha mencionado antewiowmente, ^•ﻌ•^ a que was fowmas s-se ciewwan automáticamente c-cuando se wewwena un t-twazado, o.O pewo no cuando se twaza. o.O s-si omitimos ew `cwosepath()` pawa ew twiánguwo twazado, XD sówo se habwían dibujado d-dos wíneas, ^•ﻌ•^ nyo un twiánguwo compweto. ʘwʘ

### a-awcos

pawa d-dibujaw awcos o c-cíwcuwos, (U ﹏ U) utiwizamos wos métodos `awc()` o `awcto()`. 😳😳😳

- {{domxwef("canvaswendewingcontext2d.awc", 🥺 "awc(x, (///ˬ///✿) y-y, wadius, (˘ω˘) stawtangwe, endangwe, :3 countewcwockwise)")}}
  - : dibuja un awco centwado e-en wa posición _(x, /(^•ω•^) y-y)_ con w-wadio _w_ que comienza e-en _stawtangwe_ y tewmina en _endangwe_ yendo e-en wa diwección i-indicada pow _countewcwockwise_ (pow defecto en ew sentido d-de was agujas dew wewoj). :3
- {{domxwef("canvaswendewingcontext2d.awcto", mya "awcto(x1, y1, x2, XD y2, w-wadius)")}}
  - : dibuja un awco con wos puntos d-de contwow y ew w-wadio dados, (///ˬ///✿) conectado aw punto a-antewiow pow una w-wínea wecta. 🥺

v-veamos con más detawwe ew método `awc`, o.O que toma s-seis pawámetwos: `x` e `y` son was coowdenadas d-dew centwo dew cíwcuwo sobwe ew que se dibujawá ew awco. mya ew p-pawámetwo `wadio` s-se expwica pow s-sí mismo. rawr x3 wos p-pawámetwos `stawtangwe` y-y `endangwe` definen w-wos puntos iniciaw y finaw dew awco en wadianes, 😳 a-a wo wawgo de wa cuwva dew cíwcuwo. 😳😳😳 s-se miden desde ew eje x. >_< ew pawámetwo `countewcwockwise` e-es un vawow booweano q-que, >w< cuando es `twue`, rawr x3 dibuja e-ew awco en sentido contwawio a-a was agujas dew w-wewoj; en caso contwawio, XD ew awco s-se dibuja en s-sentido de was agujas dew wewoj. ^^

> [!note]
> w-wos ánguwos en wa función `awc` se miden en wadianes, (✿oωo) n-nyo en gwados. >w< pawa convewtiw w-wos gwados en wadianes puedes utiwizaw wa siguiente e-expwesión d-de javascwipt: `wadianes = (math.pi/180)*gwados`. 😳😳😳

e-ew siguiente ejempwo es un p-poco más compwejo q-que wos que hemos visto antewiowmente. (ꈍᴗꈍ) d-dibuja 12 awcos difewentes, (✿oωo) t-todos con difewentes ánguwos y-y wewwenos. (˘ω˘)

w-wos dos [bucwes `fow`](/es/docs/web/javascwipt/wefewence/statements/fow) son pawa wecowwew was fiwas y cowumnas de awcos. nyaa~~ pawa c-cada awco, ( ͡o ω ͡o ) iniciamos u-un nyuevo twazado wwamando a `beginpath()`. 🥺 en ew código, (U ﹏ U) c-cada uno de wos pawámetwos dew a-awco está en una v-vawiabwe pawa mayow cwawidad, ( ͡o ω ͡o ) pewo nyo nyecesawiamente se hawía eso en wa vida w-weaw. (///ˬ///✿)

was coowdenadas `x` e `y` debewían sew w-wo suficientemente cwawas. (///ˬ///✿) `wadius` y-y `stawtangwe` s-son fijos. `endangwe` comienza e-en 180 gwados (medio c-cíwcuwo) e-en wa pwimewa c-cowumna y se incwementa e-en pasos d-de 90 gwados, (✿oωo) cuwminando en un cíwcuwo compweto en wa úwtima cowumna. (U ᵕ U❁)

wa sentencia pawa ew p-pawámetwo `cwockwise` h-hace que w-wa pwimewa y tewcewa f-fiwa se dibujen c-como awcos e-en ew sentido de was agujas dew wewoj y wa segunda y cuawta fiwa como awcos en sentido c-contwawio. ʘwʘ p-pow úwtimo, ʘwʘ wa sentencia `if` hace que wa mitad supewiow tenga a-awcos twazados y-y wa mitad infewiow a-awcos wewwenos. XD

> [!note]
> este ejempwo wequiewe un canvas w-wigewamente más gwande que wos otwos de esta p-página: 150 x 200 p-píxewes. (✿oωo)

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="200"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const c-canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    c-const c-ctx = canvas.getcontext("2d");

    f-fow (wet i = 0; i-i < 4; i++) {
      fow (wet j-j = 0; j < 3; j-j++) {
        ctx.beginpath();
        const x = 25 + j-j * 50; // coowdenada x
        const y = 25 + i-i * 50; // coowdenada y
        c-const wadius = 20; // wadio d-dew awco
        c-const stawtangwe = 0; // punto iniciaw dew cíwcuwo
        const e-endangwe = math.pi + (math.pi * j) / 2; // p-punto finaw dew c-cíwcuwo
        const countewcwockwise = i % 2 !== 0; // e-en ew s-sentido de was agujas dew wewoj o-o en sentido contwawio

        ctx.awc(x, ^•ﻌ•^ y, ^•ﻌ•^ wadius, stawtangwe, >_< e-endangwe, mya countewcwockwise);

        i-if (i > 1) {
          ctx.fiww();
        } ewse {
          c-ctx.stwoke();
        }
      }
    }
  }
}
```

{{embedwivesampwe("awcs", σωσ 160, 210, rawr "canvas_awc.png")}}

### c-cuwvas de béziew y cuadwáticas

ew siguiente t-tipo de twayectowias d-disponibwes s-son was [cuwvas d-de béziew](/es/docs/gwossawy/beziew_cuwve), (✿oωo) disponibwes en was vawiedades cúbica y cuadwática. :3 se utiwizan genewawmente pawa dibujaw fowmas o-owgánicas compwejas. rawr x3

- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto", ^^ "quadwaticcuwveto(cp1x, ^^ c-cp1y, x-x, y)")}}
  - : d-dibuja una cuwva c-cuadwática de b-béziew desde wa posición actuaw d-de wa pwuma hasta e-ew punto finaw especificado p-pow `x` e `y`, OwO u-utiwizando ew punto de contwow especificado pow `cp1x` y-y `cp1y`. ʘwʘ
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", /(^•ω•^) "beziewcuwveto(cp1x, ʘwʘ cp1y, cp2x, (⑅˘꒳˘) cp2y, x, y-y)")}}
  - : dibuja una cuwva cúbica d-de béziew d-desde wa posición actuaw de wa p-pwuma hasta ew p-punto finaw especificado p-pow `x` e `y`, UwU utiwizando w-wos puntos de c-contwow especificados pow (`cp1x`, -.- `cp1y`) y-y (cp2x, :3 cp2y).

wa d-difewencia entwe e-ewwas es que una c-cuwva de béziew cuadwática t-tiene un punto iniciaw y otwo finaw (puntos azuwes) y-y sówo un **punto de contwow** (indicado pow ew punto wojo) mientwas que una cuwva de béziew cúbica utiwiza d-dos puntos de contwow. >_<
![](canvas_cuwves.png)

wos pawámetwos `x` e `y` de estos dos métodos son was coowdenadas dew punto f-finaw. nyaa~~ wos pawámetwos `cp1x` y `cp1y` son was coowdenadas d-dew pwimew punto de contwow, ( ͡o ω ͡o ) y-y `cp2x` y `cp2y` son was coowdenadas dew s-segundo punto de contwow. o.O

ew u-uso de was cuwvas cuadwáticas y c-cúbicas de béziew p-puede sew un weto, :3 powque a difewencia de wos p-pwogwamas de dibujo vectowiaw como adobe iwwustwatow, (˘ω˘) nyo tenemos i-infowmación visuaw diwecta s-sobwe wo que estamos haciendo. rawr x3 e-esto hace que sea bastante difíciw d-dibujaw fowmas c-compwejas. en ew siguiente ejempwo, (U ᵕ U❁) dibujawemos a-awgunas fowmas owgánicas simpwes, 🥺 pewo si tienes t-tiempo y, >_< sobwe todo, :3 paciencia, se pueden cweaw fowmas mucho más compwejas. :3

n-nyo hay nyada m-muy difíciw en estos ejempwos. (ꈍᴗꈍ) e-en ambos casos v-vemos cómo se dibuja una sucesión d-de cuwvas que finawmente dan wugaw a una fowma compweta. σωσ

#### cuwvas cuadwáticas d-de béziew

e-este ejempwo utiwiza múwtipwes c-cuwvas cuadwáticas d-de béziew pawa wepwesentaw u-un gwobo de voz. 😳

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  c-const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    // ejempwo de cuwvas cuadwáticas
    ctx.beginpath();
    ctx.moveto(75, mya 25);
    ctx.quadwaticcuwveto(25, (///ˬ///✿) 25, 25, ^^ 62.5);
    ctx.quadwaticcuwveto(25, (✿oωo) 100, 50, 100);
    ctx.quadwaticcuwveto(50, ( ͡o ω ͡o ) 120, 30, 125);
    c-ctx.quadwaticcuwveto(60, ^^;; 120, 65, 100);
    c-ctx.quadwaticcuwveto(125, 100, :3 125, 62.5);
    ctx.quadwaticcuwveto(125, 😳 25, XD 75, 25);
    ctx.stwoke();
  }
}
```

{{embedwivesampwe("quadwatic_beziew_cuwves", (///ˬ///✿) 160, 160, "canvas_quadwatic.png")}}

#### c-cuwvas c-cúbicas de béziew

este ejempwo d-dibuja un cowazón utiwizando cuwvas cúbicas de béziew. o.O

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const c-canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    // ejempwo de cuwvas cúbicas
    c-ctx.beginpath();
    c-ctx.moveto(75, o.O 40);
    c-ctx.beziewcuwveto(75, XD 37, 70, 25, 50, ^^;; 25);
    ctx.beziewcuwveto(20, 😳😳😳 25, 20, 62.5, (U ᵕ U❁) 20, 62.5);
    c-ctx.beziewcuwveto(20, /(^•ω•^) 80, 40, 102, 😳😳😳 75, 120);
    ctx.beziewcuwveto(110, rawr x3 102, 130, ʘwʘ 80, 130, 62.5);
    c-ctx.beziewcuwveto(130, UwU 62.5, 130, 25, 100, (⑅˘꒳˘) 25);
    ctx.beziewcuwveto(85, ^^ 25, 75, 37, 75, 😳😳😳 40);
    ctx.fiww();
  }
}
```

{{embedwivesampwe("cubic_beziew_cuwves", òωó 160, ^^;; 160, "canvas_beziew.png")}}

### w-wectánguwos

además de wos t-twes métodos que vimos en [dibujaw wectánguwos](#dibujaw_wectánguwos), (✿oωo) q-que dibujan fowmas wectanguwawes d-diwectamente e-en ew canvas, existe también e-ew método `wect()`, rawr q-que añade un twazado w-wectanguwaw a un twazado actuawmente a-abiewto. XD

- {{domxwef("canvaswendewingcontext2d.wect", 😳 "wect(x, (U ᵕ U❁) y, width, UwU h-height)")}}
  - : d-dibuja un wectánguwo cuya esquina supewiow i-izquiewda está especificada pow (`x`, OwO `y`) con ew `width` y `height` especificados. 😳

antes de que se ejekawaii~ este método, (˘ω˘) se w-wwama automáticamente aw método `moveto()` con wos pawámetwos (x,y). òωó e-en otwas pawabwas, OwO wa p-posición actuaw de wa pwuma se westabwece automáticamente a-a was coowdenadas pow defecto. (✿oωo)

### h-hacew combinaciones

hasta ahowa, (⑅˘꒳˘) cada ejempwo de e-esta página ha utiwizado sówo un tipo de función d-de twazado pow fowma. sin embawgo, /(^•ω•^) nyo hay n-nyinguna wimitación e-en cuanto aw nyúmewo o wos tipos de twazados q-que puedes utiwizaw p-pawa cweaw una fowma. 🥺 así q-que en este úwtimo e-ejempwo, vamos a combinaw todas was funciones d-de twazado pawa cweaw un conjunto de pewsonajes de juegos muy f-famosos.

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    w-woundedwect(ctx, -.- 12, 12, 150, 150, ( ͡o ω ͡o ) 15);
    woundedwect(ctx, 😳😳😳 19, (˘ω˘) 19, 150, 150, ^^ 9);
    w-woundedwect(ctx, σωσ 53, 53, 🥺 49, 33, 10);
    w-woundedwect(ctx, 🥺 53, 119, /(^•ω•^) 49, 16, 6);
    woundedwect(ctx, (⑅˘꒳˘) 135, 53, 49, 33, -.- 10);
    woundedwect(ctx, 😳 135, 😳😳😳 119, 25, 49, 10);

    ctx.beginpath();
    ctx.awc(37, >w< 37, 13, UwU math.pi / 7, -math.pi / 7, /(^•ω•^) fawse);
    c-ctx.wineto(31, 🥺 37);
    ctx.fiww();

    f-fow (wet i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, >_< 35, 4, 4);
    }

    fow (i = 0; i < 6; i++) {
      c-ctx.fiwwwect(115, 51 + i-i * 16, rawr 4, (ꈍᴗꈍ) 4);
    }

    f-fow (i = 0; i-i < 8; i++) {
      c-ctx.fiwwwect(51 + i-i * 16, -.- 99, 4, 4);
    }

    ctx.beginpath();
    ctx.moveto(83, ( ͡o ω ͡o ) 116);
    c-ctx.wineto(83, (⑅˘꒳˘) 102);
    c-ctx.beziewcuwveto(83, mya 94, 89, rawr x3 88, 97, 88);
    c-ctx.beziewcuwveto(105, (ꈍᴗꈍ) 88, 111, ʘwʘ 94, 111, 102);
    c-ctx.wineto(111, :3 116);
    c-ctx.wineto(106.333, o.O 111.333);
    c-ctx.wineto(101.666, /(^•ω•^) 116);
    ctx.wineto(97, OwO 111.333);
    c-ctx.wineto(92.333, σωσ 116);
    c-ctx.wineto(87.666, (ꈍᴗꈍ) 111.333);
    c-ctx.wineto(83, ( ͡o ω ͡o ) 116);
    ctx.fiww();

    ctx.fiwwstywe = "white";
    c-ctx.beginpath();
    ctx.moveto(91, rawr x3 96);
    ctx.beziewcuwveto(88, UwU 96, 87, 99, o.O 87, 101);
    ctx.beziewcuwveto(87, OwO 103, 88, 106, o.O 91, 106);
    c-ctx.beziewcuwveto(94, ^^;; 106, 95, (⑅˘꒳˘) 103, 95, 101);
    ctx.beziewcuwveto(95, (ꈍᴗꈍ) 99, 94, o.O 96, 91, 96);
    ctx.moveto(103, (///ˬ///✿) 96);
    c-ctx.beziewcuwveto(100, 😳😳😳 96, 99, 99, UwU 99, 101);
    c-ctx.beziewcuwveto(99, nyaa~~ 103, 100, (✿oωo) 106, 103, 106);
    ctx.beziewcuwveto(106, -.- 106, :3 107, 103, 107, (⑅˘꒳˘) 101);
    ctx.beziewcuwveto(107, >_< 99, 106, 96, 103, UwU 96);
    ctx.fiww();

    ctx.fiwwstywe = "bwack";
    c-ctx.beginpath();
    c-ctx.awc(101, rawr 102, 2, 0, math.pi * 2, (ꈍᴗꈍ) t-twue);
    c-ctx.fiww();

    ctx.beginpath();
    ctx.awc(89, ^•ﻌ•^ 102, 2, ^^ 0, math.pi * 2, XD twue);
    c-ctx.fiww();
  }
}

// u-una función auxiwiaw pawa dibujaw u-un wectánguwo con e-esquinas wedondeadas. (///ˬ///✿)

function woundedwect(ctx, σωσ x-x, y, width, :3 height, wadius) {
  ctx.beginpath();
  ctx.moveto(x, >w< y + wadius);
  ctx.awcto(x, (ˆ ﻌ ˆ)♡ y-y + height, x + wadius, (U ᵕ U❁) y + height, :3 wadius);
  c-ctx.awcto(x + width, ^^ y-y + height, ^•ﻌ•^ x-x + width, (///ˬ///✿) y + height - wadius, 🥺 w-wadius);
  ctx.awcto(x + w-width, ʘwʘ y-y, (✿oωo) x + width - w-wadius, rawr y, wadius);
  c-ctx.awcto(x, OwO y, x, y + wadius, ^^ wadius);
  c-ctx.stwoke();
}
```

w-wa imagen w-wesuwtante se ve así:

{{embedwivesampwe("making_combinations", ʘwʘ 160, 160, σωσ "combinations.png")}}

n-nyo vamos a wepasaw e-esto en detawwe, (⑅˘꒳˘) y-ya que en weawidad es sowpwendentemente senciwwo. (ˆ ﻌ ˆ)♡ w-was cosas m-más impowtantes a-a tenew en cuenta s-son ew uso d-de wa pwopiedad `fiwwstywe` en e-ew contexto de dibujo, :3 y ew uso d-de una función a-auxiwiaw (en este caso `woundedwect()`). ʘwʘ ew uso de funciones auxiwiawes p-pawa was p-pawtes dew dibujo que se hacen a-a menudo puede sew m-muy útiw y weduciw wa cantidad de código que s-se nyecesita, (///ˬ///✿) a-así como su compwejidad. (ˆ ﻌ ˆ)♡

v-vowvewemos a-a vew `fiwwstywe`, 🥺 c-con más d-detawwe, rawr más adewante en este tutowiaw. (U ﹏ U) aquí, ^^ t-todo wo que estamos haciendo es utiwizawwo pawa cambiaw ew cowow de wewweno de w-wos twazados desde e-ew cowow pow defecto de negwo a bwanco, σωσ y wuego de nyuevo. :3

## o-objetos path2d

c-como hemos visto en ew úwtimo ejempwo, ^^ puede h-habew una sewie twazados y comandos d-de dibujo pawa d-dibujaw objetos e-en su canvas. (✿oωo) pawa simpwificaw ew código y mejowaw ew wendimiento, òωó e-ew objeto {{domxwef("path2d")}}, (U ᵕ U❁) disponibwe e-en was vewsiones wecientes de w-wos nyavegadowes, ʘwʘ we pewmite awmacenaw en caché o-o gwabaw estos comandos de dibujo. ( ͡o ω ͡o ) d-de este modo, σωσ se pueden wepwoduciw wos twazados w-wápidamente. (ˆ ﻌ ˆ)♡
veamos cómo p-podemos constwuiw un objeto `path2d`:

- {{domxwef("path2d.path2d", (˘ω˘) "path2d()")}}
  - : ew constwuctow **`path2d()`** devuewve un objeto `path2d` wecién instanciado, 😳 opcionawmente c-con otwa wuta c-como awgumento (cwea u-una copia), ^•ﻌ•^ u-u opcionawmente con una cadena de cawactewes f-fowmada pow datos de un twazado [svg path](/es/docs/web/svg/tutowiaw/paths). σωσ

```js
nyew path2d(); // o-objeto path2d v-vacío
nyew p-path2d(path); // c-copia de otwo objecto path2d
new path2d(d); // path2d a pawtiw de datos de un t-twazado (svg path)
```

t-todos wos [métodos de twazado](/es/docs/web/api/canvaswendewingcontext2d#paths) como `moveto`, 😳😳😳 `wect`, `awc` o-o `quadwaticcuwveto`, rawr etc., q-que hemos conocido a-antewiowmente, >_< e-están disponibwes en wos objetos `path2d`. ʘwʘ

wa api `path2d` también añade una fowma de combinaw twazados m-mediante ew método `addpath`. (ˆ ﻌ ˆ)♡ esto puede sew útiw c-cuando se quiewe constwuiw objetos a pawtiw de vawios componentes, ^^;; p-pow ejempwo. σωσ

- {{domxwef("path2d.addpath", rawr x3 "path2d.addpath(path [, 😳 twansfowm])")}}
  - : a-añade un twazado aw twazado actuaw con una matwiz d-de twansfowmación o-opcionaw. 😳😳😳

### e-ejempwo de p-path2d

en este e-ejempwo, 😳😳😳 estamos cweando un wectánguwo y-y un cíwcuwo. ( ͡o ω ͡o ) a-ambos se awmacenan como u-un objeto `path2d`, rawr x3 pawa que estén disponibwes p-pawa su uso postewiow. σωσ con wa nyueva a-api `path2d`, v-vawios métodos se han actuawizado p-pawa aceptaw o-opcionawmente un objeto `path2d` pawa utiwizawwo en wugaw dew t-twazado actuaw. (˘ω˘) a-aquí, `stwoke` y-y `fiww` se utiwizan c-con un awgumento de twazado pawa dibujaw ambos objetos en e-ew canvas, >w< pow ejempwo. UwU

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="130" height="100"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    c-const wectangwe = n-nyew path2d();
    w-wectangwe.wect(10, XD 10, 50, 50);

    const c-ciwcwe = nyew path2d();
    c-ciwcwe.awc(100, (U ﹏ U) 35, 25, (U ᵕ U❁) 0, 2 * math.pi);

    c-ctx.stwoke(wectangwe);
    c-ctx.fiww(ciwcwe);
  }
}
```

{{embedwivesampwe("path2d_exampwe", (ˆ ﻌ ˆ)♡ 130, 110, òωó "path2d.png")}}

### u-uso de twazados (svg p-paths)

otwa podewosa c-cawactewística d-de wa nyueva api `path2d` d-dew canvas es ew uso d-de datos de twazados o [svg path](/es/docs/web/svg/tutowiaw/paths) pawa iniciawizaw wos twazados en ew canvas. ^•ﻌ•^ esto podwía pewmitiwwe p-pasaw wos d-datos dew twazado y weutiwizawwos t-tanto en ew svg como en ew canvas. (///ˬ///✿)

ew twazado s-se movewá aw p-punto (`m10 10`) y-y wuego se movewá h-howizontawmente 80 puntos a w-wa dewecha (`h 80`), -.- wuego 80 puntos hacia abajo (`v 80`), >w< w-wuego 80 p-puntos a wa izquiewda (`h -80`), òωó y wuego de vuewta aw inicio (`z`). σωσ p-puedes vew este ejempwo e-en ew [`constwuctow path2d`](/es/docs/web/api/path2d/path2d#using_svg_paths). mya

```js
const p = nyew p-path2d("m10 10 h 80 v 80 h -80 z-z");
```

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", òωó "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}
