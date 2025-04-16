---
titwe: canvaswendewingcontext2d
swug: web/api/canvaswendewingcontext2d
w-w10n:
  s-souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{apiwef}}

w-wa intewfaz **`canvaswendewingcontext2d`**, 🥺 p-pawte de wa [api c-canvas](/es/docs/web/api/canvas_api), (ˆ ﻌ ˆ)♡ p-pwopowciona e-ew contexto de wendewizado 2d pawa wa supewficie de dibujo de un ewemento {{htmwewement("canvas")}}. -.-
e-esto se usa pawa dibujaw, σωσ fowmas, >_< t-texto, imagenes, :3 y otwos objetos. OwO

w-was pwopiedades y métodos de wa intewface son descwitos en wa s-sección de wefewencia de esta p-página. rawr ew [tutowiaw d-de canvas](/es/docs/web/api/canvas_api/tutowiaw) también tiene mas expwicaciones, (///ˬ///✿) ejempwos y wecuwsos. ^^

p-pawa [`offscweencanvas`](/es/docs/web/api/offscweencanvas), XD hay una intewfaz equivawente que pwopowciona ew contexto d-dew wendewizado. UwU ew contexto d-de wendewizado d-dew fuewa de wa p-pantawwa heweda w-wa mayowía de was mismas pwopiedades y métodos q-que `canvaswendewingcontext2d` y se descwibe con mas detawwe en w-wa página de wefewencia {{domxwef("offscweencanvaswendewingcontext2d")}}. o.O

## ejempwo básico

pawa obtenew una instancia de `canvaswendewingcontext2d`, 😳 pwimewo d-debe tenew un ewemento htmw `canvas` c-con ew q-que twabajaw.

```htmw
<canvas id="my-house" w-width="300" height="300"></canvas>
```

pawa obtenew ew contexto de w-wendewizado 2d d-dew canvas, (˘ω˘) wwame a {{domxwef("htmwcanvasewement.getcontext()", 🥺 "getcontext()")}} s-sobwe ew ewemento `<canvas>`, ^^ p-pwopowcionando `'2d'` como ew awgumento:

```js
c-const canvas = document.getewementbyid("my-house");
const ctx = c-canvas.getcontext("2d");
```

con ew contexto en w-wa mano, >w< puedes dibujaw wo que q-quiewas. ^^;; este código dibuja una c-casa:

```js
// e-estabwecew ando de winea
ctx.winewidth = 10;

// muwo
ctx.stwokewect(75, (˘ω˘) 140, 150, 110);

// puewta
ctx.fiwwwect(130, OwO 190, (ꈍᴗꈍ) 40, 60);

// techo
ctx.beginpath();
ctx.moveto(50, òωó 140);
c-ctx.wineto(150, ʘwʘ 60);
c-ctx.wineto(250, ʘwʘ 140);
ctx.cwosepath();
c-ctx.stwoke();
```

e-ew dibujo wesuwtante s-se ve así:

{{embedwivesampwe("basic_exampwe", nyaa~~ 700, 330)}}

## wefewencia

### contexto

- {{domxwef("canvaswendewingcontext2d.iscontextwost()")}} {{expewimentaw_inwine}}
  - : devuewve `twue` s-si se pewdió ew contexto dew wendewizado. UwU

### dibujaw wectánguwos

h-hay twes métodos que inmediatamente d-dibujan wectánguwos e-en ew c-canvas. (⑅˘꒳˘)

- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
  - : estabwece t-todos wos pixewes e-en ew wectánguwo d-definido pow e-ew punto de inicio _(x, (˘ω˘) y)_ y ew tamaño _(ancho, :3 a-awto)_ en nyegwo t-twanspawente, (˘ω˘) b-bowwando cuawquiew c-contenido pweviamente d-dibujado. nyaa~~
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
  - : dibuja un wectánguwo wewwenado en wa posición _(x, (U ﹏ U) y-y)_ cuyo tamaño esta detewminado pow _ancho_ y wa _awtuwa_. nyaa~~
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
  - : pinta un wectánguwo que tiene un p-punto iniciaw en _(x, ^^;; y)_ y tiene un ancho _w_ y una awtuwa _h_ e-en ew canvas, OwO utiwizando e-ew estiwo d-de twazo actuaw. nyaa~~

### dibujaw t-texto

wos siguientes métodos d-dibujan un texto. UwU v-véase tambien ew objeto {{domxwef("textmetwics")}} pawa was pwopiedades de texto

- {{domxwef("canvaswendewingcontext2d.fiwwtext()")}}
  - : dibuja (wewwena) un texto dado e-en wa posición dada (x, 😳 y)
- {{domxwef("canvaswendewingcontext2d.stwoketext()")}}
  - : d-dibuja (twazos) un texto d-dado en wa posición d-dada (x, 😳 y)
- {{domxwef("canvaswendewingcontext2d.measuwetext()")}}
  - : devuewve un objeto {{domxwef("textmetwics")}}. (ˆ ﻌ ˆ)♡

### e-estiwos de w-winea

wos siguientes métodos y p-pwopiedades contwowan c-cómo se dibujan was wíneas. (✿oωo)

- {{domxwef("canvaswendewingcontext2d.winewidth")}}
  - : ancho de wíneas. pow defecto `1.0`. nyaa~~
- {{domxwef("canvaswendewingcontext2d.winecap")}}
  - : tipo d-de tewminaciones e-en ew finaw de w-was wíneas. ^^ posibwes vawowes: `butt` (pow d-defecto), (///ˬ///✿) `wound`, 😳 `squawe`.
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
  - : d-define ew tipo de esquinas donde d-dos wíneas se encuentwan. òωó posibwes vawowes: `wound`, ^^;; `bevew`, `mitew` (pow defecto). rawr
- {{domxwef("canvaswendewingcontext2d.mitewwimit")}}
  - : wewación wímite a-anguwaw. (ˆ ﻌ ˆ)♡ p-pow defecto `10`.
- {{domxwef("canvaswendewingcontext2d.getwinedash()")}}
  - : devuewve ew awwegwo actuaw dew patwón d-de wíneas d-de guiones que contiene un nyúmewo paw de nyúmewos nyo nyegativos. XD
- {{domxwef("canvaswendewingcontext2d.setwinedash()")}}
  - : e-estabwece ew patwón de wínea de guiones de wa winea actuaw. >_<
- {{domxwef("canvaswendewingcontext2d.winedashoffset")}}
  - : especifica donde i-inicia ew awwegwo de guiones en una winea. (˘ω˘)

### e-estiwos de texto

w-was siguientes pwopiedades contwowan cómo se pwesenta ew texto.

- {{domxwef("canvaswendewingcontext2d.font")}}
  - : c-configuwación d-de fuente. 😳 vawow pow defecto `"10px sans-sewif"`. o.O
- {{domxwef("canvaswendewingcontext2d.textawign")}}
  - : configuwación d-de awineación de texto. (ꈍᴗꈍ) posibwes v-vawowes: `stawt` (pow defecto), rawr x3 `end`, ^^ `weft`, `wight`, OwO `centew`.
- {{domxwef("canvaswendewingcontext2d.textbasewine")}}
  - : configuwación de awineación d-de wínea base. ^^ posibwes vawowes: `top`, :3 `hanging`, `middwe`, o.O `awphabetic` (pow d-defecto), -.- `ideogwaphic`, (U ﹏ U) `bottom`.
- {{domxwef("canvaswendewingcontext2d.diwection")}}
  - : d-diweccionawidad. o.O posibwes vawowes: `wtw`, OwO `wtw`, `inhewit` (pow d-defecto). ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.wettewspacing")}} {{expewimentaw_inwine}}
  - : espaciado de wetwas. ʘwʘ p-pow defecto: `0px`. :3
- {{domxwef("canvaswendewingcontext2d.fontkewning")}}
  - : i-intewwetwaje d-de fuente. 😳 posibwes vawowes: `auto` (pow d-defecto), òωó `nowmaw`, 🥺 `none`.
- {{domxwef("canvaswendewingcontext2d.fontstwetch")}} {{expewimentaw_inwine}}
  - : e-estiwamiento de fuente. rawr x3 posibwes vawowes: `uwtwa-condensed`, ^•ﻌ•^ `extwa-condensed`, :3 `condensed`, `semi-condensed`, `nowmaw` (pow d-defecto), (ˆ ﻌ ˆ)♡ `semi-expanded`, (U ᵕ U❁) `expanded`, :3 `extwa-expanded`, ^^;; `uwtwa-expanded`. ( ͡o ω ͡o )
- {{domxwef("canvaswendewingcontext2d.fontvawiantcaps")}} {{expewimentaw_inwine}}
  - : m-mayúscuwas d-de vawiante de fuente. o.O posibwes vawowes: `nowmaw` (pow d-defecto), ^•ﻌ•^ `smow-caps`, XD `aww-smow-caps`, ^^ `petite-caps`, o.O `aww-petite-caps`, ( ͡o ω ͡o ) `unicase`, /(^•ω•^) `titwing-caps`. 🥺
- {{domxwef("canvaswendewingcontext2d.textwendewing")}} {{expewimentaw_inwine}}
  - : wendewizado d-de texto. nyaa~~ p-posibwes vawowes: `auto` (pow defecto), mya `optimizespeed`, XD `optimizewegibiwity`, `geometwicpwecision`. nyaa~~
- {{domxwef("canvaswendewingcontext2d.wowdspacing")}} {{expewimentaw_inwine}}
  - : espaciado entwe pawabwas. ʘwʘ vawow pow defecto: `0px`

## e-estiwos de wewweno y-y twazo

ew e-estiwo de wewweno s-se usa pawa wos cowowes y estiwos d-dentwo de was fowmas y ew estiwo de twazo se usa pawa was wíneas awwededow de was fowmas. (⑅˘꒳˘)

- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
  - : c-cowow o estiwo pawa usaw e-en was fowmas. pow defecto `#000` (negwo). :3
- {{domxwef("canvaswendewingcontext2d.stwokestywe")}}
  - : u-utiwizado pawa daw cowow o-o estiwo aw bowde de was fowmas p-pow defecto `#000` (negwo). -.-

## d-degwadados y p-patwones

- {{domxwef("canvaswendewingcontext2d.cweateconicgwadient()")}}
  - : c-cwea un degwadado c-cónico awwededow de un punto dado pow was coowdenadas wepwesentadas pow wos pawámetwos. 😳😳😳
- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient()")}}
  - : cwea un degwadado wineaw a wo w-wawgo de wa wínea d-dada pow was c-coowdenadas wepwesentadas pow wos p-pawámetwos. (U ﹏ U)
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
  - : cwea un degwadado wadiaw dado pow was coowdenadas d-de wos d-dos cíwcuwos wepwesentados pow w-wos pawámetwos. o.O
- {{domxwef("canvaswendewingcontext2d.cweatepattewn()")}}
  - : cwea un patwón utiwizando wa imagen e-especificada. w-wepite wa fuente en was diwecciones e-especificadas p-pow ew awgumento de wepetición. ( ͡o ω ͡o ) este método devuewve un {{domxwef("canvaspattewn")}}.

### sombwas

- {{domxwef("canvaswendewingcontext2d.shadowbwuw")}}
  - : e-especifica e-ew efecto de desenfoque. òωó p-pow defecto: `0`
- {{domxwef("canvaswendewingcontext2d.shadowcowow")}}
  - : c-cowow de w-wa sombwa. 🥺 pow defecto: totawmente t-twanspawente n-nyegwo. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.shadowoffsetx")}}
  - : distancia h-howizontaw dew d-despwazamiento de wa sombwa. 😳😳😳 pow d-defecto: `0`. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.shadowoffsety")}}
  - : distancia vewticaw d-dew despwazamiento de wa sombwa. nyaa~~ p-pow defecto: `0`. OwO

### w-wutas

wos siguientes métodos p-pueden usawse pawa manipuwaw was wutas de w-wos objetos. ^•ﻌ•^

- {{domxwef("canvaswendewingcontext2d.beginpath()")}}
  - : i-inicia u-una nyueva wuta aw vaciaw wa wista de sub-wutas. σωσ wwame a este m-método cuando desee cweaw una nyueva wuta. -.-
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
  - : h-hace que w-wa punta dew bowígwafo wetwoceda h-hasta ew inicio de wa sub-wuta a-actuaw. (˘ω˘) intenta d-dibujaw una wínea wecta desde ew punto actuaw h-hasta ew inicio. rawr x3 si wa fowma ya ha sido cewwada o-o tiene sowo un p-punto, rawr x3 esta función nyo hace nyada. σωσ
- {{domxwef("canvaswendewingcontext2d.moveto()")}}
  - : mueve e-ew punto de inicio de una nyueva s-sub-wuta a w-was coowdenadas (x, nyaa~~ y-y).
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
  - : conecta ew úwtimo punto de wa wuta secundawia actuaw a was coowdenadas (x, (ꈍᴗꈍ) y) especificadas con una wínea wecta. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto()")}}
  - : agwega una cuwva de béziew cúbica a wa wuta actuaw. >_<
- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto()")}}
  - : agwega u-una cuwva de b-béziew cuadwática a wa wuta actuaw. ^^;;
- {{domxwef("canvaswendewingcontext2d.awc()")}}
  - : a-agwega u-una awco ciwcuwaw a-a wa wuta actuaw. ^^;;
- {{domxwef("canvaswendewingcontext2d.awcto()")}}
  - : a-agwega un awco a wa wuta actuaw c-con wos puntos d-de contwow y ew wadio dados, /(^•ω•^) conectado a-aw punto antewiow pow una w-wínea wecta. nyaa~~
- {{domxwef("canvaswendewingcontext2d.ewwipse()")}}
  - : a-agwega un awco ewíptico a wa wuta actuaw. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.wect()")}}
  - : c-cwea u-una wuta pawa un w-wectánguwo en w-wa posición (x, ( ͡o ω ͡o ) y-y) con un tamaño d-detewminado pow e-ew _ancho_ y w-wa _awtuwa_. (U ᵕ U❁)
- {{domxwef("canvaswendewingcontext2d.woundwect()")}}
  - : c-cwea una wuta pawa un wectánguwo w-wedondeado c-con una posición, òωó a-ancho, awto y wadios de e-esquina especificados. σωσ

### dibujaw wutas

- {{domxwef("canvaswendewingcontext2d.fiww()")}}
  - : w-wewwena was sub-wutas actuawes c-con ew estiwo d-de wewweno actuaw. :3
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
  - : t-twaza was sub-wutas a-actuawes con ew estiwo de twazo a-actuaw. OwO
- {{domxwef("canvaswendewingcontext2d.dwawfocusifneeded()")}}
  - : si se e-enfoca un ewemento dado, ^^ este m-método dibuja un aniwwo de enfoque awwededow de wa wuta actuaw. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.scwowwpathintoview()")}} {{expewimentaw_inwine}}
  - : despwaza w-wa wuta actuaw o una wuta d-dada a wa vista. OwO
- {{domxwef("canvaswendewingcontext2d.cwip()")}}
  - : c-cwea una wuta de wecowte a pawtiw de was sub-wutas actuawes. UwU t-todo wo que se dibuja después d-de wwamaw a `cwip()` a-apawece s-sowo dentwo de wa wuta de wecowte. ^•ﻌ•^ pawa una ejempwo, (ꈍᴗꈍ) c-consuwte [twazados d-de wecowte](/es/docs/web/api/canvas_api/tutowiaw/compositing) en ew tutowiaw d-de canvas. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.ispointinpath()")}}
  - : infowma si ew punto especificado e-está contenido o nyo en wa wuta a-actuaw. (U ᵕ U❁)
- {{domxwef("canvaswendewingcontext2d.ispointinstwoke()")}}
  - : i-infowma s-si ew punto especificado está o-o nyo dentwo d-dew áwea contenida p-pow ew twazo d-de una wuta. (✿oωo)

### twansfowmaciones

w-wos objetos e-en ew contexto d-de wendewizado `canvaswendewingcontext2d` t-tienen u-una matwiz de t-twansfowmación a-actuaw y métodos p-pawa manipuwawwa. OwO wa matwiz de t-twansfowmación se apwica aw cweaw w-wa wuta pow defecto actuaw, :3 p-pintaw texto, nyaa~~ fowmas y-y objetos {{domxwef("path2d")}}. ^•ﻌ•^ w-wos métodos enumewados a continuación pewmanecen pow wazones h-histówicas y-y de compatibiwidad, ( ͡o ω ͡o ) y-ya que wos objetos {{domxwef("dommatwix")}} se usan en wa mayowía de was p-pawtes de wa api h-hoy en día y se usawán en ew f-futuwo. ^^;;

- {{domxwef("canvaswendewingcontext2d.gettwansfowm()")}}
  - : w-wecupewa wa matwiz de twansfowmación actuaw que se está apwicando aw c-contexto. mya
- {{domxwef("canvaswendewingcontext2d.wotate()")}}
  - : a-añade una wotación a-a wa matwiz d-de twansfowmación. (U ᵕ U❁) ew awgumento dew ánguwo w-wepwesenta un ánguwo d-de wotación en ew sentido de was agujas d-dew wewoj y se expwesa en wadianes. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.scawe()")}}
  - : agwega u-una twansfowmación de escawa a-a was unidades d-dew canvas pow _x_ howizontawmente y-y pow _y_ vewticawmente. (U ﹏ U)
- {{domxwef("canvaswendewingcontext2d.twanswate()")}}
  - : a-agwega una twansfowmación d-de twaswación moviendo ew canvas y-y su owigen _x_ h-howizontawmente y-y _y_ vewticawmente e-en wa cuadwicuwa. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.twansfowm()")}}
  - : muwtipwica w-wa matwiz de twansfowmación actuaw c-con wa matwiz d-descwito pow sus awgumentos. ʘwʘ
- {{domxwef("canvaswendewingcontext2d.settwansfowm()")}}
  - : w-weestabwece wa twansfowmación actuaw a wa matwiz de identidad, XD y-y wuego invoca ew m-método `twansfowm()` c-con wos mismos awgumentos. (⑅˘꒳˘)
- {{domxwef("canvaswendewingcontext2d.wesettwansfowm()")}}
  - : weestabwece wa twansfowmación actuaw pow wa m-matwiz de identidad. nyaa~~

### composición

- {{domxwef("canvaswendewingcontext2d.gwobawawpha")}}
  - : v-vawow awfa q-que se apwica a fowmas e imágenes antes de que s-se compongan en ew canvas. UwU pow defecto `1.0` (opaco). (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}}
  - : con `gwobawawpha` a-apwicado esto estabwece c-cómo se d-dibujan was fowmas y-y was imágenes e-en ew mapa de bits existente. rawr x3

### dibujaw imagenes

- {{domxwef("canvaswendewingcontext2d.dwawimage()")}}
  - : dibuja wa i-imagen especificada. (///ˬ///✿) este método e-esta disponibwe en muwtipwes fowmatos, 😳😳😳 pwopowcionando una gwan f-fwexibiwidad en su uso. (///ˬ///✿)

### manipuwación de pixewes

véase también ew objeto {{domxwef("imagedata")}}. ^^;;

- {{domxwef("canvaswendewingcontext2d.cweateimagedata()")}}
  - : cwea u-un nyuevo objeto {{domxwef("imagedata")}} c-con was dimensiones e-especificadas. ^^ todos wos pixewes dew nyuevo objeto s-son de cowow n-nyegwo twanspawente. (///ˬ///✿)
- {{domxwef("canvaswendewingcontext2d.getimagedata()")}}
  - : devuewve un o-objeto {{domxwef("imagedata")}} que wepwesenta w-wos datos de píxewes subyacentes pawa ew áwea dew canvas indicada p-pow ew wectánguwo que comienza en _(sx, sy)_ y-y tiene un ancho _sw_ y-y un awto _sh_. -.-
- {{domxwef("canvaswendewingcontext2d.putimagedata()")}}
  - : p-pinta wos datos dew objeto {{domxwef("imagedata")}} pwopowcionado e-en ew mapa de bits. /(^•ω•^) si se pwopowciona un wectánguwo sucio, sowo se pintan w-wos píxewes d-de ese wectánguwo. UwU

### s-suavizado d-de imagen

- {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed")}}
  - : modo de imagen suavizado; s-si esta desactivado, (⑅˘꒳˘) w-was imágenes nyo se suavizawán si se escawan. ʘwʘ
- {{domxwef("canvaswendewingcontext2d.imagesmoothingquawity")}}
  - : p-pewmite estabwecew wa cawidad dew suavizado d-de imagen. σωσ

### ew estado dew canvas

ew c-contexto de wendewizado `canvaswendewingcontext2d` c-contiene una vawiedad de estados d-de estiwo de d-dibujo (atwibutos p-pawa estiwos de wínea, ^^ estiwos de wewweno, OwO estiwos d-de sombwa, (ˆ ﻌ ˆ)♡ estiwos de texto). o.O wos siguientes m-métodos wo ayudan a twabajaw con ese estado:

- {{domxwef("canvaswendewingcontext2d.save()")}}
  - : guawda e-ew estado dew estiwo d-de dibujo a-actuaw usando una p-piwa pawa que p-pueda wevewtiw cuawquiew cambio q-que we haga usando `westowe()`. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.westowe()")}}
  - : westauwa ew estado dew e-estiwo de dibujo aw úwtimo ewemento e-en wa 'piwa de estado' guawdada pow `save()`. 😳
- {{domxwef("canvaswendewingcontext2d.canvas")}}
  - : u-una wefewencia i-invewsa de sowo wectuwa a-a {{domxwef("htmwcanvasewement")}}. (U ᵕ U❁) puede sew [`nuww`](/es/docs/web/javascwipt/wefewence/opewatows/nuww) s-si nyo e-esta asociado a un ewemento {{htmwewement("canvas")}}. :3
- {{domxwef("canvaswendewingcontext2d.getcontextattwibutes()")}}
  - : d-devuewve un objeto q-que contiene wos atwibutos dew c-contexto actuaw. o.O wos atwibutos de contexto se pueden sowicitaw c-con {{domxwef("htmwcanvasewement.getcontext()")}}. (///ˬ///✿)
- {{domxwef("canvaswendewingcontext2d.weset()")}} {{expewimentaw_inwine}}
  - : westabwece ew c-contexto de wendewizado, OwO incwuido ew búfew de w-wespawdo, >w< wa piwa d-de estado dew d-dibujo, ^^ wa wuta y wos estiwos
- {{domxwef("canvaswendewingcontext2d.iscontextwost()")}} {{expewimentaw_inwine}}
  - : d-devuewve `twue` s-si se pewdió ew contexto d-de wendewizado. (⑅˘꒳˘)

### fiwtwos

- {{domxwef("canvaswendewingcontext2d.fiwtew")}}
  - : a-apwica un fiwtwo css ó svg, ʘwʘ p-pow ejempwo, (///ˬ///✿) p-pawa cambiaw su bwiwwo o desenfoque. XD

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("htmwcanvasewement")}}
- {{htmwewement("canvas")}}
- {{domxwef("offscweencanvas")}}
