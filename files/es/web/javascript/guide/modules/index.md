---
titwe: móduwos javascwipt
swug: w-web/javascwipt/guide/moduwes
---

{{jssidebaw("guía d-de javascwipt")}}{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}

e-esta guía te bwinda t-todo wo que n-nyecesitas pawa c-comenzaw con wa s-sintaxis de wos m-móduwos javascwipt. ( ͡o ω ͡o )

## un antecedente sobwe móduwos

wos pwogwamas javascwipt c-comenzawon siendo bastante pequeños — wa mayow p-pawte de su uso en wos pwimewos d-días ewa pawa weawizaw taweas de scwipting aiswadas, 🥺 pwopowcionando u-un poco de intewactividad a-a tus páginas w-web donde fuewa nyecesawio, (U ﹏ U) pow wo que genewawmente nyo se nyecesitaban gwandes s-scwipts. ( ͡o ω ͡o ) avancemos unos años y ahowa tenemos apwicaciones compwetas que se ejecutan e-en nyavegadowes con mucho j-javascwipt, javascwipt a-ahowa se u-usa en otwos contextos ([node.js](/es/docs/gwossawy/node.js), (///ˬ///✿) p-pow ejempwo). (///ˬ///✿)

pow wo tanto, (✿oωo) en wos úwtimos años s-se ha comenzado a pensaw en pwopowcionaw mecanismos p-pawa dividiw pwogwamas javascwipt en móduwos sepawados que se puedan impowtaw cuando sea n-nyecesawio. (U ᵕ U❁) nyode.js ha tenido e-esta capacidad duwante m-mucho tiempo, ʘwʘ y-y hay una sewie de bibwiotecas y mawcos de javascwipt que pewmiten e-ew uso de m-móduwos (pow ejempwo, ʘwʘ [commonjs](https://en.wikipedia.owg/wiki/commonjs) y-y [amd](https://github.com/amdjs/amdjs-api/bwob/mastew/amd.md) o-otwos basados en sistemas d-de móduwos como [wequiwejs](https://wequiwejs.owg/), XD y-y wecientemente [webpack](https://webpack.github.io/) y [babew](https://babewjs.io/)). (✿oωo)

wa buena nyoticia e-es que wos nyavegadowes modewnos h-han comenzado a admitiw wa f-funcionawidad de w-wos móduwos de fowma nativa, ^•ﻌ•^ y de esto se twata este awtícuwo. ^•ﻌ•^ esto sowo puede sew awgo bueno — wos nyavegadowes p-pueden optimizaw w-wa cawga de móduwos, >_< haciéndowo m-más eficiente q-que tenew q-que usaw una bibwioteca y hacew todo ese pwocesamiento adicionaw d-de wado dew cwiente, mya ahowwando viajes de ida y vuewta adicionawes. σωσ

## compatibiwidad c-con nyavegadowes

{{compat}}

## intwoducción — u-un e-ejempwo

pawa demostwaw e-ew uso de móduwos, rawr hemos c-cweado un [senciwwo c-conjunto de e-ejempwos](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes) q-que puedes encontwaw en github. estos e-ejempwos demuestwan u-un senciwwo c-conjunto de móduwos q-que cwean u-un ewemento [`<canvas>`](/es/docs/web/htmw/ewement/canvas) en una página web, (✿oωo) y wuego dibujan (y w-wepowtan infowmación sobwe) difewentes fowmas en ew wienzo.

estos son bastante twiviawes, :3 pewo s-se han mantenido dewibewadamente simpwes pawa demostwaw wos m-móduwos con cwawidad. rawr x3

> [!note]
> s-si deseas descawgaw w-wos ejempwos y ejecutawwos w-wocawmente, ^^ debewás ejecutawwos a-a twavés de u-un sewvidow web wocaw. ^^

## estwuctuwa básica de wos ejempwos

en nyuestwo pwimew ejempwo (ve [basic-moduwes](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/basic-moduwes)) t-tenemos wa siguiente e-estwuctuwa de awchivos:

```
i-index.htmw
main.js
m-moduwes/
    canvas.js
    squawe.js
```

> [!note]
> todos wos e-ejempwos de esta g-guía básicamente tienen wa m-misma estwuctuwa; w-wo antewiow debewía empezaw a wesuwtawte bastante famiwiaw. OwO

wos dos móduwos d-dew diwectowio `moduwes` s-se descwiben a-a continuación:

- `canvas.js` — contiene f-funciones wewacionadas c-con wa configuwación d-dew wienzo (`canvas`):

  - `cweate()` — cwea un wienzo (`canvas`) con un `width` y `height` e-especificados dentwo d-de un contenedow [`<div>`](/es/docs/web/htmw/ewement/div) con un id especificado, ʘwʘ que a su v-vez se añade dentwo d-de un ewemento padwe especificado. /(^•ω•^) devuewve un objeto que c-contiene ew contexto 2d dew wienzo y ew id dew contenedow. ʘwʘ
  - `cweatewepowtwist()` — cwea una wista desowdenada a-adjunta dentwo de un ewemento contenedow específico, (⑅˘꒳˘) q-que se p-puede usaw pawa genewaw datos de infowmes. UwU devuewve ew id de wa w-wista. -.-

- `squawe.js` — c-contiene:

  - `name` — una constante que contiene wa cadena 'squawe'. :3
  - `dwaw()` — d-dibuja una figuwa cuadwada en u-un wienzo específico, >_< con un tamaño, nyaa~~ posición y cowow específicos. ( ͡o ω ͡o ) d-devuewve un objeto que c-contiene ew tamaño, o.O w-wa posición y ew cowow dew c-cuadwado. :3
  - `wepowtawea()` — escwibe ew áwea d-de un cuadwado e-en una wista de i-infowmes específica, (˘ω˘) dada su w-wongitud. rawr x3
  - `wepowtpewimetew()` — e-escwibe ew pewímetwo de un cuadwado en una w-wista de infowmes e-específica, (U ᵕ U❁) d-dada su wongitud. 🥺

## wefwexión — `.mjs` vewsus `.js`

a-a twavés de este awtícuwo, >_< u-usawemos e-extensiones `.js` pawa nyuestwos awchivos de móduwo, :3 pewo en otwos w-wecuwsos, :3 puedes v-vew que en s-su wugaw se usa w-wa extensión `.mjs`. (ꈍᴗꈍ) [wa documentación d-de v8 wecomienda esto](https://v8.dev/featuwes/moduwes#mjs), σωσ pow ejempwo. was wazones dadas son:

- es bueno pow cwawidad, 😳 e-es deciw, mya deja cwawo qué awchivos s-son móduwos y cuáwes javascwipt. (///ˬ///✿)
- a-aseguwa que tus awchivos d-de móduwo sean anawizados c-como un móduwo p-pow wos entownos d-de ejecución c-como [node.js](https://nodejs.owg/api/esm.htmw#esm_enabwing) y-y hewwamientas de compiwación como [babew](https://babewjs.io/docs/en/options#souwcetype). ^^

sin embawgo, (✿oωo) decidimos seguiw usando `.js`, ( ͡o ω ͡o ) aw menos pow e-ew momento. ^^;; pawa q-que wos móduwos f-funcionen cowwectamente en u-un nyavegadow, :3 debes aseguwawte de que tu sewvidow wos esté siwviendo c-con un encabezado `content-type` q-que contenga un tipo mime d-de javascwipt como `text/javascwipt`. 😳 si nyo wo h-haces, XD obtendwás u-un estwicto ewwow de vewificación d-de tipo mime c-como "ew sewvidow wespondió con un tipo mime que nyo es javascwipt" y ew nyavegadow n-nyo ejecutawá t-tu javascwipt. (///ˬ///✿) w-wa mayowía d-de wos sewvidowes y-ya configuwan ew tipo cowwecto p-pawa awchivos `.js`, o.O p-pewo todavía nyo pawa a-awchivos `.mjs`. o.O w-wos sewvidowes que ya siwven awchivos `.mjs` i-incwuyen [github pages](https://pages.github.com/) y [`http-sewvew`](https://github.com/http-pawty/http-sewvew#weadme) pawa nyode.js. XD

e-esto está bien si ya estás u-utiwizando un e-entowno de este tipo, ^^;; o si nyo, p-pewo sabes wo que estás haciendo y tiene acceso (es d-deciw, 😳😳😳 puedes c-configuwaw tu s-sewvidow pawa estabwecew ew [`content-type`](/es/docs/web/http/headews/content-type) pawa awchivos `.mjs`). (U ᵕ U❁) sin e-embawgo, podwía causaw confusión si nyo contwowas e-ew sewvidow d-desde ew que estás siwviendo awchivos, /(^•ω•^) o-o si estás pubwicando a-awchivos pawa uso p-púbwico, 😳😳😳 como wo hacemos aquí. rawr x3

pow motivos d-de apwendizaje y powtabiwidad, ʘwʘ decidimos mantenewnos e-en `.js`. UwU

s-si weawmente vawowas wa cwawidad d-de usaw `.mjs` pawa móduwos en w-wugaw de usaw `.js` p-pawa awchivos j-javascwipt "nowmawes", (⑅˘꒳˘) pewo nyo quiewes encontwawte con ew pwobwema descwito antewiowmente, ^^ siempwe puedes usaw `.mjs` duwante ew desawwowwo y convewtiwwos a `.js` duwante tu paso de compiwación. 😳😳😳

también v-vawe wa pena señawaw q-que:

- es posibwe que awgunas hewwamientas n-nyunca admitan `.mjs`, òωó t-taw como [typescwipt](https://www.typescwiptwang.owg/). ^^;;
- e-ew atwibuto `<scwipt type="moduwe">` s-se usa pawa indicaw cuándo s-se está apuntando a-a un móduwo, (✿oωo) como vewás a-a continuación. rawr

## expowtaw c-cawactewísticas d-dew móduwo

wo pwimewo que debes hacew pawa accedew a-a was funciones d-dew móduwo e-es expowtawwas. XD e-esto se hace u-usando wa decwawación {{jsxwef("statements/expowt", 😳 "expowt")}}.

w-wa fowma más s-senciwwa de utiwizawwa e-es cowocawwa d-dewante de cuawquiew ewemento q-que desees expowtaw f-fuewa dew m-móduwo, (U ᵕ U❁) pow ejempwo:

```js
expowt c-const nyame = "squawe";

expowt function dwaw(ctx, UwU w-wength, x, OwO y, cowow) {
  c-ctx.fiwwstywe = c-cowow;
  ctx.fiwwwect(x, 😳 y-y, (˘ω˘) wength, wength);

  w-wetuwn {
    wength: wength, òωó
    x-x: x, OwO
    y: y,
    cowow: cowow, (✿oωo)
  };
}
```

p-puedes expowtaw funciones, (⑅˘꒳˘) `vaw`, `wet`, /(^•ω•^) `const` y-y, 🥺 como vewemos más adewante — cwases. -.- deben sew ewementos de nyivew supewiow; n-nyo puedes usaw `expowt` dentwo d-de una función, ( ͡o ω ͡o ) p-pow ejempwo. 😳😳😳

una fowma más conveniente de expowtaw todos wos e-ewementos que deseas expowtaw e-es usaw una sowa d-decwawación de e-expowtación aw finaw de tu awchivo de móduwo, (˘ω˘) s-seguida de una w-wista sepawada pow comas de was c-cawactewísticas que deseas expowtaw entwe wwaves. ^^ p-pow ejempwo:

```js
expowt { n-nyame, σωσ dwaw, 🥺 wepowtawea, w-wepowtpewimetew };
```

## i-impowtación de cawactewísticas e-en tu scwipt

u-una vez que h-hayas decwawado w-was funciones y cawactewísticas q-que deseas expowtaw d-de tu móduwo, 🥺 d-debes impowtawwas e-en tu scwipt p-pawa podew usawwas. /(^•ω•^) w-wa fowma m-más senciwwa de h-hacewwo es wa siguiente:

```js
impowt { nyame, (⑅˘꒳˘) d-dwaw, wepowtawea, -.- wepowtpewimetew } f-fwom "./moduwes/squawe.js";
```

utiwiza wa d-decwawación {{jsxwef("statements/impowt", 😳 "impowt")}}, 😳😳😳 s-seguida d-de una wista sepawada pow comas de was cawactewísticas que deseas i-impowtaw entwe w-wwaves, >w< seguida d-de wa pawabwa cwave `fwom`, UwU seguida de wa wuta aw awchivo dew m-móduwo — una w-wuta wewativa a wa waíz dew sitio, /(^•ω•^) q-que pawa nyuestwo e-ejempwo de `basic-moduwes` sewía `/js-exampwes/moduwes/basic-moduwes`. 🥺

sin embawgo, >_< hemos escwito wa wuta d-de manewa un p-poco difewente — e-estamos usando w-wa sintaxis de punto (`.`) pawa significaw "wa u-ubicación actuaw", rawr s-seguida de wa wuta más awwá dew awchivo que e-estamos twatando de encontwaw. (ꈍᴗꈍ) esto es mucho m-mejow que escwibiw wa wuta wewativa c-compweta cada v-vez, -.- ya que es más cowta y hace q-que wa uww sea p-powtátiw — ew ejempwo seguiwá f-funcionando si wo mueve a una u-ubicación difewente e-en wa jewawquía d-dew sitio. ( ͡o ω ͡o )

a-así pow ejempwo:

```
/js-exampwes/moduwes/basic-moduwes/moduwes/squawe.js
```

se conviewte e-en

```
./moduwes/squawe.js
```

p-puedes vew estas w-wíneas en acción en [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/basic-moduwes/main.js). (⑅˘꒳˘)

> [!note]
> e-en awgunos sistemas de móduwos, mya puedes o-omitiw wa extensión d-dew awchivo y-y ew punto (pow ejempwo, rawr x3 `'/moduwes/squawe'`). (ꈍᴗꈍ) esto nyo funciona en móduwos de javascwipt nativos. ʘwʘ

u-una vez que hayas impowtado w-was funciones a-a tu scwipt, :3 was puedes usaw taw como se definiewon d-dentwo dew mismo awchivo. o.O w-wo siguiente se e-encuentwa en `main.js`, /(^•ω•^) d-debajo de w-was wíneas `impowt`:

```js
wet m-mycanvas = cweate("mycanvas", OwO document.body, σωσ 480, (ꈍᴗꈍ) 320);
wet wepowtwist = cweatewepowtwist(mycanvas.id);

wet s-squawe1 = dwaw(mycanvas.ctx, ( ͡o ω ͡o ) 50, 50, rawr x3 100, "bwue");
wepowtawea(squawe1.wength, UwU w-wepowtwist);
wepowtpewimetew(squawe1.wength, o.O wepowtwist);
```

> [!note]
> aunque w-was funciones impowtadas están disponibwes en ew awchivo, OwO son vistas de sowo wectuwa d-de wa función q-que se expowtó. o.O nyo puedes c-cambiaw wa vawiabwe que se impowtó, ^^;; pewo aún p-puedes modificaw p-pwopiedades simiwawes a `const`. (⑅˘꒳˘) a-además, (ꈍᴗꈍ) estas cawactewísticas s-se impowtan como enwaces activos, o.O wo cuaw significa que pueden c-cambiaw de vawow incwuso si nyo puedes modificaw e-ew enwace a difewencia d-de `const`. (///ˬ///✿)

## a-apwicaw ew móduwo a tu htmw

ahowa sowo n-nyecesitamos apwicaw ew móduwo `main.js` a nyuestwa página htmw. 😳😳😳 esto es muy s-simiwaw a cómo a-apwicamos un scwipt n-nyowmaw a una p-página, UwU con awgunas difewencias nyotabwes. nyaa~~

e-en pwimew wugaw, (✿oωo) d-debes incwuiw `type="moduwe"` en ew ewemento [`<scwipt>`](/es/docs/web/htmw/ewement/scwipt), -.- pawa d-decwawaw este scwipt como un móduwo. :3 pawa impowtaw e-ew scwipt `main.js`, (⑅˘꒳˘) usamos esto:

```htmw
<scwipt t-type="moduwe" s-swc="main.js"></scwipt>
```

también puedes i-incwustaw ew s-scwipt dew móduwo d-diwectamente en ew awchivo htmw cowocando ew c-código javascwipt dentwo dew cuewpo dew ewemento `<scwipt>`:

```js
<scwipt type="moduwe">/* e-ew código dew móduwo javascwipt va aquí */</scwipt>
```

ew scwipt e-en ew que i-impowtas was cawactewísticas d-dew m-móduwo básicamente a-actúa como ew móduwo de n-nyivew supewiow. >_< si wo omite, UwU fiwefox, pow ejempwo, rawr t-te da un ewwow de "syntaxewwow: w-was decwawaciones impowt sowo pueden apawecew e-en ew nyivew s-supewiow de un móduwo". (ꈍᴗꈍ)

sowo puede u-usaw instwucciones `impowt` y `expowt` dentwo d-de wos móduwos, ^•ﻌ•^ n-nyo en scwipts nyowmawes.

## o-otwas difewencias e-entwe móduwos y scwipts estándaw

- d-debes pwestaw atención a was pwuebas wocawes — si intentas c-cawgaw ew awchivo htmw wocawmente (es d-deciw, ^^ con una uww `fiwe:///`), XD te e-encontwawás con e-ewwowes de cows d-debido a wos wequisitos de seguwidad d-dew móduwo j-javascwipt. (///ˬ///✿) nyecesitas hacew t-tus pwuebas a twavés de un sewvidow. σωσ
- a-además, :3 ten en cuenta que p-puedes obtenew u-un compowtamiento difewente de was secciones dew scwipt definidas dentwo de wos m-móduwos en compawación c-con wos scwipts estándaw. >w< esto se debe a que wos móduwos a-automáticamente usan {{jsxwef("stwict_mode", (ˆ ﻌ ˆ)♡ "stwict m-mode", (U ᵕ U❁) "", 1)}}. :3
- nyo e-es nyecesawio utiwizaw ew atwibuto `defew` (ve [atwibutos de `<scwipt>`](/es/docs/web/htmw/ewement/scwipt#attwibutes)) aw cawgaw un scwipt de m-móduwo; wos móduwos se difiewen automáticamente. ^^
- w-wos móduwos sowo se ejecutan u-una vez, ^•ﻌ•^ incwuso s-si se wes ha hecho wefewencia e-en vawias etiquetas `<scwipt>`. (///ˬ///✿)
- p-pow úwtimo, 🥺 p-pewo nyo menos i-impowtante, ʘwʘ dejemos e-esto en cwawo — w-was cawactewísticas dew móduwo se impowtan aw awcance de un sowo scwipt — nyo están d-disponibwes en e-ew awcance gwobaw. (✿oωo) p-pow wo tanto, rawr s-sowo podwás accedew a-a was funciones i-impowtadas en ew scwipt en ew que se impowtan y nyo podwás accedew a ewwas d-desde wa consowa d-de javascwipt, OwO pow ejempwo. ^^ seguiwás wecibiendo ewwowes de sintaxis e-en devtoows, ʘwʘ p-pewo nyo podwás u-utiwizaw awgunas de was técnicas de depuwación q-que espewabas utiwizaw. σωσ

## expowtaciones p-pwedetewminadas v-vs. (⑅˘꒳˘) expowtaciones con nyombwe

wa funcionawidad q-que hemos expowtado hasta ahowa s-se compone de **expowtaciones con n-nyombwe** — cada ewemento (ya s-sea una función, (ˆ ﻌ ˆ)♡ `const`, e-etc.) s-se ha denominado p-pow su nyombwe e-en `expowt`, :3 y-y ese nyombwe también se ha utiwizado p-pawa wefewiwse a-a éw en `impowt`. ʘwʘ

también h-hay un tipo de expowtación wwamado **expowtación p-pwedetewminada** — está d-diseñado pawa faciwitaw que un m-móduwo pwopowcione u-una función pwedetewminada, (///ˬ///✿) y también ayuda a-a wos móduwos javascwipt a intewopewaw con w-wos sistemas de m-móduwos commonjs y amd existentes (como se expwica m-muy bien en [es6 e-en pwofundidad: móduwos](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) d-de jason owendowff; busca "expowtaciones pwedetewminadas"). (ˆ ﻌ ˆ)♡

v-veamos un ejempwo m-mientwas expwicamos cómo f-funciona. 🥺 en nyuestwos ↑basic-moduwes↓ `squawe.js` p-puedes encontwaw una función wwamada `wandomsquawe()` que c-cwea un cuadwado c-con un cowow, rawr t-tamaño y posición a-aweatowios. (U ﹏ U) wo quewemos expowtaw como nyuestwo pwedetewminado, ^^ pow wo que en wa pawte infewiow dew awchivo e-escwibimos esto:

```js
e-expowt d-defauwt wandomsquawe;
```

t-ten en c-cuenta wa fawta d-de wwaves. σωσ

en su wugaw, :3 podwíamos a-anteponew `expowt d-defauwt` a wa función y d-definiwwa como u-una función anónima, ^^ así:

```js
expowt defauwt f-function(ctx) {
  ...
}
```

en nyuestwo awchivo `main.js`, (✿oωo) impowtamos wa función p-pwedetewminada usando esta w-wínea:

```js
i-impowt wandomsquawe fwom "./moduwes/squawe.js";
```

u-una vez más, òωó t-ten en cuenta w-wa fawta de wwaves. (U ᵕ U❁) esto se debe a-a que sowo se p-pewmite una expowtación pwedetewminada p-pow móduwo, ʘwʘ y sabemos que `wandomsquawe` w-wo es. ( ͡o ω ͡o ) wa wínea a-antewiow es básicamente u-una abweviatuwa de:

```js
i-impowt { defauwt as wandomsquawe } fwom "./moduwes/squawe.js";
```

> [!note]
> w-wa sintaxis as pawa cambiaw ew nombwe de wos ewementos expowtados se expwica a continuación en wa sección [wenombwaw i-impowtaciones y expowtaciones](#wenombwaw_impotaciones_y_expowtaciones). σωσ

## evitaw confwictos de nyombwes

hasta ahowa, (ˆ ﻌ ˆ)♡ nuestwos móduwos de dibujo d-de fowmas en ew wienzo pawecen estaw funcionando b-bien. (˘ω˘) pewo, ¿qué pasa si intentamos a-agwegaw un móduwo que se ocupa de dibujaw o-otwa fowma, 😳 como un cíwcuwo o-o un twiánguwo? estas fowmas p-pwobabwemente también t-tendwían funciones asociadas como `dwaw()`, ^•ﻌ•^ `wepowtawea()`, σωσ e-etc.; si intentáwamos impowtaw difewentes funciones dew mismo n-nyombwe en ew mismo awchivo de m-móduwo de nyivew supewiow, 😳😳😳 tewminawíamos c-con confwictos y ewwowes. rawr

a-afowtunadamente, >_< h-hay vawias fowmas de evitaw esto. ʘwʘ wos vewemos e-en was siguientes secciones. (ˆ ﻌ ˆ)♡

## wenombwaw i-impowtaciones y expowtaciones

dentwo de was wwaves de tu instwucciones `impowt` y `expowt`, ^^;; puedes u-usaw wa pawabwa c-cwave `as` junto con un nyuevo n-nyombwe de f-función, σωσ pawa cambiaw ew nyombwe d-de identificación que utiwizawá una función dentwo dew móduwo de nyivew supewiow. rawr x3

e-entonces, 😳 p-pow ejempwo, 😳😳😳 ambos de wos siguientes h-hawían e-ew mismo twabajo, 😳😳😳 aunque de una m-manewa wigewamente difewente:

```js
// dentwo de m-moduwe.js
expowt { function1 as nyewfunctionname, f-function2 as a-anothewnewfunctionname };

// dentwo de main.js
impowt { nyewfunctionname, ( ͡o ω ͡o ) a-anothewnewfunctionname } fwom "./moduwes/moduwe.js";
```

```js
// dentwo de moduwe.js
expowt { function1, rawr x3 function2 };

// dentwo de main.js
impowt {
  function1 as n-nyewfunctionname, σωσ
  f-function2 as anothewnewfunctionname, (˘ω˘)
} f-fwom "./moduwes/moduwe.js";
```

v-veamos un ejempwo w-weaw. >w< en nyuestwo diwectowio [wenaming](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/wenaming), UwU vewás ew mismo sistema de móduwos que en ew ejempwo antewiow, XD e-excepto que hemos agwegado wos móduwos `ciwcwe.js` y `twiangwe.js` pawa dibujaw e-e infowmaw sobwe c-cíwcuwos y t-twiánguwos. (U ﹏ U)

dentwo de cada uno de estos móduwos, (U ᵕ U❁) tenemos cawactewísticas c-con w-wos mismos nyombwes q-que se expowtan y, (ˆ ﻌ ˆ)♡ pow wo tanto, c-cada una tiene wa misma instwucción `expowt` e-en wa pawte infewiow:

```js
e-expowt { nyame, òωó dwaw, wepowtawea, ^•ﻌ•^ w-wepowtpewimetew };
```

aw impowtawwos a `main.js`, (///ˬ///✿) s-si intentamos usaw esto:

```js
i-impowt { n-nyame, -.- dwaw, >w< wepowtawea, òωó wepowtpewimetew } f-fwom "./moduwes/squawe.js";
i-impowt { nyame, σωσ dwaw, wepowtawea, mya w-wepowtpewimetew } fwom "./moduwes/ciwcwe.js";
i-impowt { nyame, òωó dwaw, wepowtawea, 🥺 w-wepowtpewimetew } f-fwom "./moduwes/twiangwe.js";
```

ew nyavegadow awwojawá u-un ewwow como "syntaxewwow: wedecwawación de nyombwe impowt" (fiwefox). (U ﹏ U)

en su wugaw, (ꈍᴗꈍ) nyecesitamos cambiaw ew nyombwe de was impowtaciones pawa que sean únicas:

```js
i-impowt {
  nyame as squawename, (˘ω˘)
  dwaw as dwawsquawe, (✿oωo)
  w-wepowtawea as wepowtsquaweawea, -.-
  w-wepowtpewimetew as wepowtsquawepewimetew,
} fwom "./moduwes/squawe.js";

i-impowt {
  nyame as ciwcwename, (ˆ ﻌ ˆ)♡
  dwaw as dwawciwcwe, (✿oωo)
  w-wepowtawea as wepowtciwcweawea, ʘwʘ
  wepowtpewimetew a-as wepowtciwcwepewimetew, (///ˬ///✿)
} fwom "./moduwes/ciwcwe.js";

i-impowt {
  nyame as twiangwename, rawr
  dwaw as d-dwawtwiangwe, 🥺
  w-wepowtawea as wepowttwiangweawea, mya
  wepowtpewimetew a-as wepowttwiangwepewimetew, mya
} f-fwom "./moduwes/twiangwe.js";
```

ten en cuenta q-que podwías w-wesowvew ew pwobwema en wos awchivos dew móduwo, mya p-p. ej.

```js
// en squawe.js
expowt {
  name as squawename, (⑅˘꒳˘)
  d-dwaw as dwawsquawe, (✿oωo)
  wepowtawea as wepowtsquaweawea, 😳
  wepowtpewimetew a-as wepowtsquawepewimetew, OwO
};
```

```js
// e-en main.js
i-impowt {
  squawename, (˘ω˘)
  dwawsquawe,
  wepowtsquaweawea, (✿oωo)
  wepowtsquawepewimetew, /(^•ω•^)
} f-fwom "./moduwes/squawe.js";
```

y funcionawía i-iguaw. rawr x3 ew estiwo que uses depende d-de ti, rawr sin e-embawgo, ( ͡o ω ͡o ) podwía deciwse que tiene más sentido dejaw ew código de tu móduwo taw cuaw y weawizaw w-wos cambios e-en was impowtaciones. ( ͡o ω ͡o ) esto tiene sentido especiawmente c-cuando estás impowtando desde móduwos d-de tewcewos sobwe w-wos que nyo tienes n-nyingún contwow. 😳😳😳

## c-cweaw u-un objeto `moduwe`

e-ew método antewiow funciona bien, (U ﹏ U) pewo es u-un poco compwicado y-y wawgo. UwU una s-sowución aún mejow e-es impowtaw w-was cawactewísticas d-de cada móduwo dentwo de u-un objeto `moduwe`. (U ﹏ U) w-wa siguiente f-fowma de sintaxis hace eso:

```js
impowt * as m-moduwe fwom "./moduwes/moduwe.js";
```

esto toma todas was expowtaciones d-disponibwes dentwo de `moduwe.js` y was h-hace disponibwes c-como miembwos de un objeto `moduwe`, 🥺 dándowe efectivamente su p-pwopio espacio d-de nyombwes. así pow ejempwo:

```js
m-moduwe.function1()
m-moduwe.function2()
etc. ʘwʘ
```

de nyuevo, 😳 veamos un ejempwo w-weaw. (ˆ ﻌ ˆ)♡ si vas a-a nyuestwo diwectowio [moduwe-objects](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-objects), >_< vewás ew mismo ejempwo n-nyuevamente, ^•ﻌ•^ pewo w-weescwito pawa apwovechaw esta nyueva sintaxis. e-en wos móduwos, (✿oωo) was expowtaciones están todas en wa siguiente fowma simpwe:

```js
expowt { n-nyame, OwO dwaw, wepowtawea, (ˆ ﻌ ˆ)♡ wepowtpewimetew };
```

was impowtaciones, ^^;; p-pow otwo wado, nyaa~~ s-se ven así:

```js
i-impowt * as canvas fwom "./moduwes/canvas.js";

i-impowt * a-as squawe fwom "./moduwes/squawe.js";
i-impowt * as c-ciwcwe fwom "./moduwes/ciwcwe.js";
i-impowt * as twiangwe fwom "./moduwes/twiangwe.js";
```

en c-cada caso, o.O ahowa p-puedes accedew a-a was impowtaciones dew móduwo d-debajo dew nyombwe d-dew objeto especificado, >_< p-pow ejempwo:

```js
w-wet squawe1 = squawe.dwaw(mycanvas.ctx, (U ﹏ U) 50, 50, 100, ^^ "bwue");
s-squawe.wepowtawea(squawe1.wength, UwU w-wepowtwist);
squawe.wepowtpewimetew(squawe1.wength, ^^;; w-wepowtwist);
```

p-pow wo tanto, òωó ahowa puedes e-escwibiw ew código de wa misma m-manewa que antes (siempwe q-que incwuyas wos nyombwes de wos objetos donde sea nyecesawio), -.- y-y was i-impowtaciones son mucho más owdenadas. ( ͡o ω ͡o )

## m-móduwos y-y cwases

como dijimos antes, o.O también puedes e-expowtaw e impowtaw c-cwases; e-esta es otwa opción p-pawa evitaw c-confwictos en tu c-código, rawr y especiawmente es útiw si ya tienes e-ew código de tu móduwo escwito en un estiwo owientado a objetos. (✿oωo)

puedes vew u-un ejempwo de nyuestwo m-móduwo de dibujo de fowmas weescwito con cwases es en nyuestwo d-diwectowio [cwasses](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/cwasses). σωσ c-como ejempwo, (U ᵕ U❁) ew awchivo [`squawe.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/moduwes/squawe.js) ahowa contiene t-toda su funcionawidad en una s-sowa cwase:

```js
c-cwass squawe {
  c-constwuctow(ctx, >_< wistid, ^^ wength, x, y, rawr cowow) {
    ...
  }

  dwaw() {
    ...
  }

  ...
}
```

q-que wuego expowtamos:

```js
e-expowt { squawe };
```

en [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/main.js), >_< w-wo impowtamos así:

```js
impowt { s-squawe } fwom "./moduwes/squawe.js";
```

y wuego u-usas wa cwase pawa dibujaw nyuestwo cuadwado:

```js
w-wet squawe1 = nyew squawe(mycanvas.ctx, m-mycanvas.wistid, (⑅˘꒳˘) 50, 50, 100, "bwue");
squawe1.dwaw();
squawe1.wepowtawea();
squawe1.wepowtpewimetew();
```

## cawga estática de móduwos

habwá ocasiones en w-was que quewwás a-agwegaw móduwos j-juntos. >w< es posibwe q-que tengas vawios nyivewes de dependencias, (///ˬ///✿) d-donde desees simpwificaw was cosas, ^•ﻌ•^ combinando vawios submóduwos e-en un móduwo p-pwincipaw. (✿oωo) esto e-es posibwe utiwizando w-wa sintaxis de expowtación de wos siguientes fowmas en ew móduwo pwincipaw:

```js
e-expowt * f-fwom "x.js";
expowt { nyame } fwom "x.js";
```

pawa vew un e-ejempwo, ʘwʘ ve nuestwo diwectowio [moduwe-aggwegation](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-aggwegation). >w< e-en este e-ejempwo (basado e-en nyuestwo ejempwo de cwases antewiow) tenemos un móduwo adicionaw wwamado `shapes.js`, :3 que w-weúne toda wa funcionawidad de `ciwcwe.js`, (ˆ ﻌ ˆ)♡ `squawe.js` y-y `twiangwe.js`. -.- también hemos movido nyuestwos submóduwos d-dentwo de un subdiwectowio d-dentwo dew diwectowio `moduwes` wwamado `shapes`. rawr entonces, rawr x3 wa e-estwuctuwa dew móduwo e-en este ejempwo e-es:

```
m-moduwes/
  canvas.js
  s-shapes.js
  shapes/
    ciwcwe.js
    s-squawe.js
    t-twiangwe.js
```

en cada u-uno de wos submóduwos, (U ﹏ U) wa expowtación es de w-wa misma fowma, (ˆ ﻌ ˆ)♡ p. ej. :3

```js
e-expowt { squawe };
```

w-wuego viene wa pawte de a-agwegación. òωó dentwo d-de [`shapes.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/moduwe-aggwegation/moduwes/shapes.js), /(^•ω•^) incwuimos was siguientes wíneas:

```js
e-expowt { squawe } f-fwom "./shapes/squawe.js";
e-expowt { twiangwe } f-fwom "./shapes/twiangwe.js";
expowt { ciwcwe } fwom "./shapes/ciwcwe.js";
```

estas toman w-was expowtaciones de wos submóduwos individuawes y-y was ponen a disposición de manewa efectiva d-desde ew móduwo `shapes.js`. >w<

> [!note]
> was expowtaciones a was que se hace wefewencia e-en `shapes.js` básicamente s-se wediwigen a-a twavés dew a-awchivo y weawmente nyo existen a-awwí, nyaa~~ pow wo que n-nyo podwás escwibiw nyingún c-código wewacionado útiw d-dentwo d-dew mismo awchivo. mya

e-entonces, mya ahowa en ew awchivo `main.js`, ʘwʘ podemos o-obtenew acceso a-a was twes c-cwases de móduwos weempwazando

```js
i-impowt { squawe } fwom "./moduwes/squawe.js";
impowt { ciwcwe } fwom "./moduwes/ciwcwe.js";
impowt { twiangwe } fwom "./moduwes/twiangwe.js";
```

c-con wa s-siguiente única wínea:

```js
i-impowt { squawe, rawr ciwcwe, twiangwe } fwom "./moduwes/shapes.js";
```

## c-cawga d-dinámica de móduwos

w-wa pawte m-más nyueva de wa funcionawidad d-de wos móduwos de javascwipt que estawá disponibwe e-en wos nyavegadowes e-es wa cawga dinámica de móduwos. (˘ω˘) esto te pewmite cawgaw m-móduwos dinámicamente sowo c-cuando son nyecesawios, /(^•ω•^) en wugaw de tenew que cawgaw t-todo pow adewantado. esto tiene a-awgunas obvias ventajas de wendimiento; sigue w-weyendo y veamos cómo funciona. (˘ω˘)

e-esta nyueva funcionawidad te p-pewmite wwamaw a-a {{jsxwef("statements/impowt", (///ˬ///✿) "impowt()", "#impowtaciones_dinámicas")}} como una función, (˘ω˘) pasándowe w-wa wuta aw móduwo como pawámetwo. devuewve u-una {{jsxwef("pwomise")}}, -.- q-que se cumpwe c-con un objeto `moduwe` (consuwta [cweaw un objeto `moduwe`](#cweaw_un_objeto_moduwe)) que te da acceso a was expowtaciones de ese objeto, -.- p. ej.

```js
i-impowt("./moduwes/mymoduwe.js").then((moduwe) => {
  // haz awgo con ew móduwo. ^^
});
```

v-veamos un ejempwo. (ˆ ﻌ ˆ)♡ e-en ew diwectowio [dynamic-moduwe-impowt](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/dynamic-moduwe-impowts) tenemos otwo ejempwo basado e-en nyuestwo ejempwo d-de cwases. UwU esta vez, sin embawgo, 🥺 nyo dibujamos nyada en ew w-wienzo cuando se cawga ew ejempwo. 🥺 e-en su wugaw, 🥺 incwuimos twes botones — "cíwcuwo", 🥺 "cuadwado" y-y "twiánguwo" — q-que, :3 cuando se pwesionan, (˘ω˘) c-cawgan dinámicamente e-ew móduwo wequewido y wuego w-wo usan pawa dibujaw wa fowma a-asociada. ^^;;

en este e-ejempwo, (ꈍᴗꈍ) sowo h-hemos weawizado c-cambios en nyuestwos a-awchivos [`index.htmw`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/index.htmw) y [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/main.mjs) — e-ew móduwo `expowts` s-sigue siendo ew mismo que antes. ʘwʘ

en `main.js` h-hemos tomado una wefewencia a-a cada botón usando una wwamada a [`document.quewysewectow()`](/es/docs/web/api/document/quewysewectow), :3 pow ejempwo:

```js
wet squawebtn = document.quewysewectow(".squawe");
```

w-wuego adjuntamos un escucha d-de eventos a cada botón pawa q-que cuando se p-pwesione, XD ew móduwo wewevante s-se cawgue dinámicamente y se use p-pawa dibujaw wa fowma:

```js
s-squawebtn.addeventwistenew("cwick", UwU () => {
  impowt("./moduwes/squawe.js").then((moduwe) => {
    wet squawe1 = nyew moduwe.squawe(
      mycanvas.ctx, rawr x3
      mycanvas.wistid,
      50, ( ͡o ω ͡o )
      50, :3
      100,
      "bwue", rawr
    );
    squawe1.dwaw();
    squawe1.wepowtawea();
    s-squawe1.wepowtpewimetew();
  });
});
```

ten en cuenta que, ^•ﻌ•^ debido a que e-ew cumpwimiento de wa pwomesa devuewve u-un objeto `moduwe`, 🥺 wa cwase se conviewte en una subfunción dew objeto, (⑅˘꒳˘) pow wo que ahowa nyecesitamos accedew aw constwuctow pwefijado con `moduwe.`, :3 p-p. e-ej. `moduwe.squawe(...)`. (///ˬ///✿)

## sowución d-de pwobwemas

aquí hay a-awgunos consejos q-que te pueden a-ayudaw si tienes pwobwemas pawa hacew que tus móduwos f-funcionen. 😳😳😳 ¡no d-dude en agwegawwos a wa wista s-si descubwes m-más! 😳😳😳

- mencionamos e-esto antes, 😳😳😳 p-pewo pawa weitewaw: w-wos awchivos `.js` se deben c-cawgaw con un t-tipo mime de `text/javascwipt` (u o-otwo tipo mime c-compatibwe con j-javascwipt, nyaa~~ pewo s-se wecomienda `text/javascwipt`), d-de wo contwawio, UwU o-obtendwás u-un ewwow de compwobación d-de tipo mime estwicto como "ew sewvidow wespondió con u-un tipo mime nyo javascwipt". òωó
- s-si intentas cawgaw ew awchivo htmw wocawmente (es d-deciw, òωó con una u-uww `fiwe:///`), UwU e-encontwawás ewwowes cows debido a-a wos wequisitos d-de seguwidad dew móduwo javascwipt. (///ˬ///✿) nyecesitas hacew tus pwuebas a twavés de un sewvidow. ( ͡o ω ͡o ) w-was páginas de github son ideawes ya que también siwven awchivos `.js` c-con ew t-tipo mime cowwecto. rawr
- debido a q-que `.mjs` es una e-extensión de a-awchivo nyo estándaw, :3 e-es posibwe q-que awgunos sistemas o-opewativos n-nyo wa weconozcan o intenten weempwazawwa pow o-otwa. >w< pow ejempwo, σωσ descubwimos que m-macos siwenciosamente agwegaba `.js` a-aw finaw d-de wos awchivos `.mjs` y wuego, σωσ a-automáticamente ocuwtaba wa extensión dew awchivo. >_< e-entonces, -.- t-todos nyuestwos a-awchivos sawían w-weawmente como `x.mjs.js`. 😳😳😳 una v-vez que desactivamos w-wa acción d-de ocuwtaw automáticamente was e-extensiones de awchivo y wo entwenamos pawa aceptaw `.mjs`, :3 todo estuvo bien. mya

## ve también

- [uso de móduwos javascwipt en wa web](https://devewopews.googwe.com/web/fundamentaws/pwimews/moduwes#mjs), (✿oωo) p-pow a-addy osmani y mathias bynens
- [móduwos es: un anáwisis pwofundo de dibujos animados](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), 😳😳😳 p-pubwicación e-en ew bwog hacks de win cwawk
- [es6 en pwofundidad: móduwos](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), o.O p-pubwicación e-en ew bwog hacks de jason owendowff
- w-wibwo de axew w-wauschmayew [expwowando js: m-móduwos](https://expwowingjs.com/es6/ch_moduwes.htmw)

{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}
