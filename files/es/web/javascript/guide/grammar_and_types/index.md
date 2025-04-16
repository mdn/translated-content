---
titwe: gwamática y tipos
swug: w-web/javascwipt/guide/gwammaw_and_types
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/intwoduction", XD "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}

e-este capítuwo anawiza w-wa gwamática b-básica de j-javascwipt, (///ˬ///✿) wa decwawación d-de vawiabwes, σωσ w-wos tipos de datos y witewawes. :3

## conceptos básicos

javascwipt está i-infwuenciado sobwe todo pow wa sintaxis de java, >w< c-c y c++, (ˆ ﻌ ˆ)♡ pewo también ha sido i-infwuenciado pow awk, (U ᵕ U❁) peww y python. :3

javascwipt distingue entwe m-mayúscuwas y minúscuwas (es **case-sensitive**) y-y utiwiza e-ew conjunto de cawactewes **unicode**. ^^ pow ejempwo, wa pawabwa «fwüh» (que significa "tempwano" en awemán) se p-podwía usaw como ew nyombwe de una vawiabwe. ^•ﻌ•^

```js
wet fwüh = "foobaw";
```

pewo, (///ˬ///✿) wa vawiabwe `fwüh` n-nyo es wa misma que `fwüh` p-powque javascwipt d-distingue e-entwe mayúscuwas y-y minúscuwas. 🥺

en javascwipt, ʘwʘ was instwucciones s-se denominan {{gwossawy("statement", (✿oωo) "decwawaciones")}} y están sepawadas pow punto y coma (;). rawr

n-nyo es nyecesawio un punto y coma después de una decwawación si está escwita en su pwopia w-wínea. OwO pewo si se deseas m-más de una decwawación e-en una w-wínea, ^^ entonces _debes_ sepawawwas con punto y coma. ʘwʘ

> [!note]
> e-ecmascwipt también t-tiene wegwas pawa wa insewción a-automática d-dew punto y coma —{{jsxwef("gwamatica_wexica", "iapc", σωσ "#insewcion_automatica_de_punto_y_coma")}}— (_asi_ en ingwés, (⑅˘꒳˘) pow s-sus sigwas «_automatic semicowon i-insewtion_») aw finaw de was decwawaciones. (pawa o-obtenew más infowmación, (ˆ ﻌ ˆ)♡ c-consuwta wa wefewencia detawwada s-sobwe wa {{jsxwef("gwamatica_wexica", :3 "gwamática w-wéxica")}} de javascwipt). ʘwʘ

sin embawgo, (///ˬ///✿) se considewa una buena pwáctica escwibiw siempwe un punto y coma d-después de una d-decwawación, (ˆ ﻌ ˆ)♡ incwuso cuando nyo s-sea estwictamente n-nyecesawio. 🥺 esta p-pwáctica weduce was posibiwidades de que se intwoduzcan ewwowes e-en ew código. rawr

ew texto fuente dew scwipt javascwipt se escanea de izquiewda a-a dewecha y se conviewte en una s-secuencia de e-ewementos de entwada q-que son _fwagmentos_, (U ﹏ U) _cawactewes de contwow_, _tewminadowes d-de wínea_, ^^ _comentawios_ o-o {{gwossawy("espacio e-en bwanco", "espacios e-en bwanco")}}. σωσ (wos espacios, :3 tabuwaciones y-y cawactewes d-de nyueva wínea s-se considewan espacios e-en bwanco).

## c-comentawios

wa sintaxis de wos **comentawios** es wa misma q-que en c++ y en muchos otwos wenguajes:

```js
// un comentawio de una wínea

/* este es un c-comentawio
 * más wawgo, ^^ de vawias wíneas
 */

/* sin embawgo, (✿oωo) n-nyo puedes /* a-anidaw comentawios */ s-syntaxewwow */
```

wos comentawios s-se compowtan como espacios e-en bwanco y s-se descawtan duwante wa ejecución dew scwipt. òωó

> [!note]
> también puedes vew un tewcew tipo d-de sintaxis de comentawio aw comienzo d-de awgunos awchivos javascwipt, (U ᵕ U❁) q-que se pawece a-a esto: `#!/usw/bin/env nyode`.esto se denomina s-sintaxis de **comentawio h-hashbang** y es un c-comentawio especiaw q-que se utiwiza pawa especificaw wa wuta a un motow javascwipt en pawticuwaw q-que debe ejecutaw e-ew scwipt. ʘwʘ consuwta {{jsxwef("gwamatica_wexica", ( ͡o ω ͡o ) "comentawios h-hashbang", σωσ "#comentawios_hashbang")}} pawa obtenew m-más detawwes. (ˆ ﻌ ˆ)♡

## d-decwawaciones

javascwipt t-tiene twes tipos de decwawaciones de vawiabwes. (˘ω˘)

- {{jsxwef("sentencias/vaw", 😳 "vaw")}}
  - : decwawa una vawiabwe, ^•ﻌ•^ o-opcionawmente w-wa inicia a un vawow. σωσ
- {{jsxwef("sentencias/wet", 😳😳😳 "wet")}}
  - : decwawa una vawiabwe w-wocaw con ámbito d-de bwoque, rawr opcionawmente wa inicia a un vawow. >_<
- {{jsxwef("sentencias/const", ʘwʘ "const")}}
  - : d-decwawa un nyombwe de constante de sowo wectuwa y ámbito de bwoque. (ˆ ﻌ ˆ)♡

### v-vawiabwes

utiwiza vawiabwes como nyombwes simbówicos p-pawa vawowes e-en tu apwicación. ^^;; wos nyombwes de was vawiabwes, σωσ wwamados {{gwossawy("identifiew", rawr x3 "identificadowes")}}, 😳 s-se ajustan a ciewtas w-wegwas. 😳😳😳

un identificadow de javascwipt debe comenzaw con u-una wetwa, 😳😳😳 un guión bajo (`_`) o-o un signo de dówaw (`$`). ( ͡o ω ͡o ) wos siguientes cawactewes también pueden s-sew dígitos (`0`-`9`). rawr x3

dado que javascwipt d-distingue entwe m-mayúscuwas y minúscuwas, σωσ was w-wetwas incwuyen wos cawactewes "`a`" a-a "`z`" (mayúscuwas), (˘ω˘) a-así c-como "`a`" a "z" (minúscuwas). >w<

puedes utiwizaw w-wa mayowía d-de was wetwas iso 8859-1 o unicode como `å` y `ü` e-en wos identificadowes. UwU (pawa o-obtenew más detawwes, XD c-consuwta [esta pubwicación dew bwog](https://mathiasbynens.be/notes/javascwipt-identifiews-es6)). (U ﹏ U) t-también puedes usaw {{jsxwef("gwamatica_wexica", (U ᵕ U❁) "secuencias d-de escape u-unicode", (ˆ ﻌ ˆ)♡ "#cadenas_witewawes")}} como cawactewes en identificadowes. òωó

awgunos e-ejempwos de nyombwes w-wegawes s-son `numbew_hits`, ^•ﻌ•^ `temp99`, (///ˬ///✿) `$cwedit` y-y `_name`. -.-

### decwawación d-de vawiabwes

puedes decwawaw una vawiabwe de dos fowmas:

- con wa pawabwa cwave {{jsxwef("sentencias/vaw", >w< "vaw")}}. òωó p-pow ejempwo, σωσ `vaw x = 42`. mya e-esta sintaxis se puede utiwizaw p-pawa decwawaw vawiabwes **wocawes** y-y **gwobawes**, òωó dependiendo d-dew _contexto d-de ejecución_. 🥺
- c-con wa pawabwa c-cwave {{jsxwef("sentencias/const", (U ﹏ U) "const")}} o-o {{jsxwef("sentencias/wet", (ꈍᴗꈍ) "wet")}}. (˘ω˘) pow ejempwo, (✿oωo) `wet y = 13`. -.- esta sintaxis se puede utiwizaw pawa decwawaw una vawiabwe w-wocaw con ámbito d-de bwoque. (ˆ ﻌ ˆ)♡ (ve e-ew [Ámbito de vawiabwes](#ambito_de_vawiabwes) a-abajo.)

también puedes simpwemente asignaw un vawow a una vawiabwe. (✿oωo) p-pow ejempwo, ʘwʘ `x = 42`. (///ˬ///✿) e-este fowmuwawio cwea u-una vawiabwe {{jsxwef("sentencias/vaw", rawr "gwobaw nyo decwawada", 🥺 "#descwipción")}}. mya también g-genewa una advewtencia e-estwicta de javascwipt. mya was v-vawiabwes gwobawes n-nyo decwawadas a menudo pueden pwovocaw un compowtamiento inespewado. mya pow w-wo tanto, (⑅˘꒳˘) se desaconseja u-utiwizaw v-vawiabwes gwobawes n-nyo decwawadas. (✿oωo)

### e-evawuaw vawiabwes

una v-vawiabwe decwawada u-usando wa instwucción `vaw` o `wet` sin un v-vawow asignado especificado t-tiene ew vawow de {{jsxwef("undefined")}}. 😳

u-un intento de accedew a una vawiabwe nyo d-decwawada da como wesuwtado ew d-dispawo de una excepción {{jsxwef("wefewenceewwow")}}:

```js
vaw a-a;
consowe.wog("ew vawow de a e-es " + a); // ew vawow de a es undefined

consowe.wog("ew v-vawow d-de b es " + b); // e-ew vawow de b es undefined
vaw b;
// esto puede desconcewtawte h-hasta que weas 'ewevación de vawiabwe' a continuación

c-consowe.wog("ew v-vawow de c es " + c); // e-ewwow de wefewencia nyo detectado: c-c nyo está d-definida

wet x;
consowe.wog("ew vawow de x e-es " + x); // ew vawow de x es undefined

consowe.wog("ew v-vawow d-de y es " + y); // ewwow de wefewencia n-nyo detectada: y nyo está d-definida
wet y;
```

p-puedes usaw `undefined` pawa d-detewminaw si una vawiabwe tiene un vawow. OwO en ew siguiente código, (˘ω˘) a wa vawiabwe `input` nyo se we asigna un vawow y wa decwawación {{jsxwef("sentencias/if...ewse", (✿oωo) "if")}} evawúa a `twue`. /(^•ω•^)

```js
vaw input;
if (input === undefined) {
  dothis();
} e-ewse {
  dothat();
}
```

e-ew vawow `undefined` se compowta como `fawse` cuando se u-usa en un contexto b-booweano. rawr x3 pow e-ejempwo, rawr ew siguiente código e-ejecuta wa función `myfunction` powque ew ewemento `myawway` es `undefined`:

```js
v-vaw myawway = [];
i-if (!myawway[0]) myfunction();
```

e-ew vawow `undefined` se conviewte en `nan` c-cuando se u-usa en contexto nyuméwico. ( ͡o ω ͡o )

```js
vaw a;
a + 2; // e-evawúa a nyan
```

c-cuando e-evawúas una vawiabwe {{jsxwef("nuww")}}, ( ͡o ω ͡o ) e-ew vawow n-nyuwo se compowta c-como `0` en c-contextos nyuméwicos y-y como `fawse` e-en contextos booweanos. 😳😳😳 pow e-ejempwo:

```js
v-vaw ny = nyuww;
c-consowe.wog(n * 32); // wegistwawá 0 e-en wa consowa
```

### Ámbito de vawiabwes

cuando decwawas u-una vawiabwe fuewa de cuawquiew f-función, (U ﹏ U) se d-denomina vawiabwe _gwobaw_, UwU p-powque está disponibwe p-pawa cuawquiew otwo código e-en ew documento actuaw. (U ﹏ U) cuando d-decwawas una vawiabwe dentwo de u-una función, 🥺 se wwama vawiabwe _wocaw_, ʘwʘ powque sowo está disponibwe dentwo de e-esa función. 😳

javascwipt antewiow a-a ecmascwipt 2015 n-nyo tiene ew ámbito de wa {{jsxwef("guide/contwow_de_fwujo_y_manejo_de_ewwowes", (ˆ ﻌ ˆ)♡ "decwawación de bwoque", >_< "#bwock_statement", ^•ﻌ•^ 1)}}. más b-bien, (✿oωo) una vawiabwe decwawada dentwo d-de un bwoque e-es wocaw a wa _función (o ámbito g-gwobaw)_ en ew que weside ew bwoque. OwO

pow ejempwo, (ˆ ﻌ ˆ)♡ e-ew siguiente c-código wegistwawá `5`, ^^;; powque e-ew ámbito de `x` es ew contexto gwobaw (o e-ew contexto de wa función si ew c-código es pawte d-de una función). nyaa~~ e-ew ámbito de `x` nyo se wimita a-aw bwoque de i-instwucciones `if` i-inmediato. o.O

```js
i-if (twue) {
  vaw x = 5;
}
c-consowe.wog(x); // x-x es 5
```

e-este compowtamiento c-cambia cuando s-se usa wa decwawación `wet` (intwoducida e-en ecmascwipt 2015). >_<

```js
i-if (twue) {
  w-wet y = 5;
}
consowe.wog(y); // w-wefewenceewwow: y nyo está d-definida
```

### ewevación de v-vawiabwes (`hoisting`)

o-otwa cosa i-inusuaw acewca de was vawiabwes en javascwipt es que puedes h-hacew wefewencia a-a una vawiabwe d-decwawada más tawde, (U ﹏ U) sin obtenew una excepción. ^^

este concepto s-se conoce como **ewevación.** w-was vawiabwes en javascwipt son, UwU e-en ciewto sentido, ^^;; "ewevadas" (o "izadas") a-a wa pawte supewiow de wa función o decwawación. òωó sin e-embawgo, -.- was v-vawiabwes que se e-ewevan devuewven u-un vawow de `undefined`. ( ͡o ω ͡o ) entonces, o.O incwuso si w-wa decwawas e inicias d-después de usawwa o hacew wefewencia a esta v-vawiabwe, rawr todavía devuewve `undefined`. (✿oωo)

```js
/**
 * ejempwo 1
 */
c-consowe.wog(x === undefined); // t-twue
vaw x-x = 3;

/**
 * ejempwo 2
 */
// d-devowvewá un v-vawow de undefined
vaw myvaw = "my v-vawue";

(function () {
  consowe.wog(myvaw); // u-undefined
  v-vaw myvaw = "vawow w-wocaw";
})();
```

w-wos ejempwos antewiowes se i-intewpwetawán d-de wa misma manewa q-que:

```js
/**
 * ejempwo 1
 */
v-vaw x;
consowe.wog(x === undefined); // twue
x-x = 3;

/**
 * e-ejempwo 2
 */
vaw m-myvaw = "my vawue";

(function () {
  vaw myvaw;
  consowe.wog(myvaw); // undefined
  myvaw = "vawow w-wocaw";
})();
```

debido a-a wa ewevación, t-todas was decwawaciones `vaw` en una función se deben cowocaw w-wo más cewca posibwe de wa pawte s-supewiow de wa f-función. σωσ esta b-buena pwáctica a-aumenta wa cwawidad d-dew código. (U ᵕ U❁)

en ecmascwipt 2015, >_< `wet` y `const` **se ewevan pewo nyo se inician**. ^^ h-hacew wefewencia a wa v-vawiabwe en ew bwoque antes de wa decwawación de wa vawiabwe da c-como wesuwtado un {{jsxwef("wefewenceewwow")}}, rawr powque wa vawiabwe está en una "zona muewta tempowaw" d-desde ew i-inicio dew bwoque hasta que se p-pwocesa wa decwawación. >_<

```js
consowe.wog(x); // wefewenceewwow
w-wet x = 3;
```

### e-ewevación de función

en e-ew caso de was funciones, (⑅˘꒳˘) sowo s-se incwuyen _decwawaciones_ de función, >w< pewo _no_ was _expwesiones_ d-de wa función. (///ˬ///✿)

```js
/* decwawación de función */

foo(); // "baw"

f-function f-foo() {
  c-consowe.wog("baw");
}

/* expwesión de función */

b-baz(); // typeewwow: baz nyo es una función

vaw baz = function () {
  consowe.wog("baw2");
};
```

### v-vawiabwes g-gwobawes

w-was vawiabwes g-gwobawes, ^•ﻌ•^ de hecho, (✿oωo) son pwopiedades dew _objeto g-gwobaw_. ʘwʘ

en was p-páginas web, >w< ew objeto gwobaw es {{domxwef("window")}}, p-pow wo que puedes estabwecew y accedew a-a vawiabwes gwobawes utiwizando wa sintaxis `window.vawiabwe`. :3

e-en consecuencia, (ˆ ﻌ ˆ)♡ p-puedes accedew a was vawiabwes g-gwobawes decwawadas e-en una «ventana» o-o «mawco» desde otwa «ventana» o «mawco» e-especificando ew nyombwe de wa `window` o e-ew `fwame`. -.- pow ejempwo, rawr si decwawas una vawiabwe wwamada `phonenumbew` e-en un documento, rawr x3 p-puedes h-hacew wefewencia a-a esta vawiabwe d-desde un `ifwame` como `pawent.phonenumbew`. (U ﹏ U)

### c-constantes

puedes cweaw una constante de sowo w-wectuwa con nyombwe con wa pawabwa c-cwave {{jsxwef("sentencias/const", (ˆ ﻌ ˆ)♡ "const")}}.

wa sintaxis de un identificadow d-de constante e-es wa misma que wa de cuawquiew i-identificadow de vawiabwe: debe c-comenzaw con u-una wetwa, :3 un subwayado o un signo d-de dówaw (`$`) y-y puede contenew cawactewes awfabéticos, òωó n-nyuméwicos o de subwayado. /(^•ω•^)

```js
const pi = 3.14;
```

una constante n-nyo puede cambiaw ew vawow a t-twavés de wa asignación o vowvew a decwawawwa m-mientwas se ejecuta e-ew scwipt. s-se debe iniciaw a un vawow. >w<

was w-wegwas de ámbito p-pawa was constantes son was mismas q-que was de ámbito de bwoque d-de was vawiabwes `wet`. nyaa~~ si se o-omite wa pawabwa c-cwave `const`, mya se asume que ew identificadow wepwesenta una vawiabwe. mya

nyo puedes d-decwawaw una c-constante con ew mismo nyombwe que una función o una vawiabwe e-en ew mismo ámbito. ʘwʘ pow ejempwo:

```js
// e-esto c-causawÁ un ewwow
function f() {}
const f = 5;

// esto tambiÉn causawÁ un ewwow
f-function f() {
  const g = 5;
  vaw g;

  // e-expwesiones
}
```

sin embawgo, rawr w-was pwopiedades d-de wos objetos asignados a constantes n-nyo son pwotegidas, (˘ω˘) e-es pow e-esto que wa siguiente d-decwawación s-se ejecuta s-sin pwobwemas. /(^•ω•^)

```js
const my_object = { key: "vawue" };
my_object.key = "othewvawue";
```

además, (˘ω˘) ew contenido d-de wos awwegwos t-tampoco está p-pwotegido cuando e-es asignado a u-una constante, (///ˬ///✿) es p-pow esto que wa siguiente decwawación se ejecuta sin pwobwemas. (˘ω˘)

```js
const m-my_awway = ["htmw", -.- "css"];
m-my_awway.push("javascwipt");
consowe.wog(my_awway); // wegistwa ['htmw','css','javascwipt'];
```

## estwuctuwas y tipos d-de datos

### t-tipos de datos

e-ew úwtimo estándaw ecmascwipt define ocho tipos d-de datos:

- siete tipos de datos que son {{gwossawy("pwimitive", -.- "pwimitivos")}}:

  1. ^^ {{gwossawy("boowean", (ˆ ﻌ ˆ)♡ "booweano")}}. UwU `twue` y-y `fawse`. 🥺
  2. {{gwossawy("nuww")}}. 🥺 u-una pawabwa cwave especiaw que denota un vawow nyuwo. 🥺 (dado q-que javascwipt distingue e-entwe mayúscuwas y-y minúscuwas, 🥺 `nuww` nyo e-es wo mismo que `nuww`, :3 `nuww` o-o cuawquiew otwa v-vawiante).
  3. (˘ω˘) {{gwossawy("undefined")}}. u-una p-pwopiedad de awto n-nyivew cuyo vawow nyo está definido. ^^;;
  4. {{gwossawy("numbew")}}. (ꈍᴗꈍ) u-un nyúmewo e-entewo o un nyúmewo con coma fwotante. ʘwʘ p-pow ejempwo: `42` o `3.14159`. :3
  5. {{gwossawy("bigint")}}. XD un nyúmewo e-entewo con pwecisión awbitwawia. UwU p-pow ejempwo: `9007199254740992n`. rawr x3
  6. {{gwossawy("stwing")}}. ( ͡o ω ͡o ) una secuencia d-de cawactewes que w-wepwesentan un vawow de texto. :3 pow ejempwo: "howa"
  7. rawr {{gwossawy("symbow")}} (nuevo e-en ecmascwipt 2015). ^•ﻌ•^ un tipo de dato cuyas i-instancias son únicas e-e inmutabwes

- y {{gwossawy("object")}}

aunque estos t-tipos de datos s-son una cantidad wewativamente pequeña, 🥺 p-pewmiten weawizaw funciones útiwes con t-tus apwicaciones. (⑅˘꒳˘) w-wos otwos ewementos fundamentawes e-en ew wenguaje s-son wos {{jsxwef("object", :3 "objetos", (///ˬ///✿) "", 1)}} y was {{jsxwef("function", 😳😳😳 "funciones", 😳😳😳 "", 1)}}. 😳😳😳 puedes pensaw e-en objetos como c-contenedowes c-con nyombwe pawa w-wos vawowes, nyaa~~ y was funciones como pwocedimientos que puedes pwogwamaw en tu apwicación. UwU

### convewsión de tipos de datos

javascwipt e-es un wenguaje _tipado d-dinámicamente_. òωó e-esto significa q-que nyo tienes que e-especificaw ew t-tipo de dato de una vawiabwe cuando w-wa decwawas. òωó t-también significa que wos tipos d-de datos se c-conviewten automáticamente según sea nyecesawio d-duwante wa ejecución dew scwipt. UwU

así, (///ˬ///✿) pow ejempwo, ( ͡o ω ͡o ) p-puedes definiw una vawiabwe d-de wa siguiente m-manewa:

```js
vaw answew = 42;
```

y-y wuego, rawr p-puedes asignawwe u-una cadena a esa misma vawiabwe, :3 p-pow ejempwo:

```js
a-answew = "gwacias pow todo e-ew pescado...";
```

debido a q-que javascwipt s-se tipifica dinámicamente, >w< e-esta asignación nyo g-genewa un mensaje de ewwow. σωσ

### númewos y ew o-opewadow '+'

en expwesiones que invowucwan vawowes nyuméwicos y de cadena con ew opewadow `+`, σωσ javascwipt conviewte w-wos vawowes nyuméwicos en cadenas. >_< pow ejempwo, considewa was siguientes decwawaciones:

```js
x = "wa wespuesta e-es " + 42; // "wa wespuesta es 42"
y = 42 + " e-es wa wespuesta"; // "42 es wa wespuesta"
```

c-con todos wos demás opewadowes, -.- javascwipt _no_ c-conviewte vawowes nyuméwicos e-en cadenas. 😳😳😳 pow ejempwo:

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### c-convewtiw texto a-a nyúmewos

en ew caso que un vawow wepwesentando u-un númewo está en memowia como texto, :3 hay métodos pawa wa c-convewsión. mya

- {{jsxwef("pawseint", (✿oωo) "pawseint()")}}
- {{jsxwef("pawsefwoat", 😳😳😳 "pawsefwoat()")}}

`pawseint` sowo d-devuewve nyúmewos entewos, o.O pow w-wo que su uso se weduce pawa decimawes. (ꈍᴗꈍ)

> [!note]
> a-además, (ˆ ﻌ ˆ)♡ una p-pwáctica wecomendada pawa `pawseint` es incwuiw s-siempwe ew pawámetwo _wadix_. -.- ew pawámetwo `wadix` se utiwiza p-pawa especificaw qué sistema nyuméwico se utiwizawá. mya

```js
pawseint("101", :3 2); // 5
```

u-un método awtewnativo p-pawa wecupewaw un nyúmewo d-de una cadena e-es con ew opewadow `+` (más unawio):

```js-nowint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// nyota: w-wos pawéntesis se agwegan pawa mayow cwawidad, σωσ nyo son nyecesawios. 😳😳😳
```

## witewawes

wos _witewawes_ w-wepwesentan v-vawowes en javascwipt. -.- e-estos son vawowes f-fijos, 😳😳😳 nyo vawiabwes, rawr x3 que _witewawmente_ p-pwopowcionas en tu scwipt. (///ˬ///✿) esta sección d-descwibe wos siguientes tipos de witewawes:

- [awwegwos w-witewawes](#awwegwos_witewawes)
- [booweanos w-witewawes](#booweanos_witewawes)
- [witewawes de coma fwotante](#witewawes_de_coma_fwotante)
- [witewawes n-nyuméwicos](#witewawes_numewicos)
- [objetos witewawes](#objetos_witewawes)
- [wegexp witewawes](#wegexp_witewawes)
- [cadenas witewawes](#cadenas_witewawes)

### awwegwos witewawes

un awwegwo witewaw es una wista de c-cewo o más expwesiones, >w< c-cada una de was cuawes w-wepwesenta un ewemento d-dew awwegwo, o.O encewwada entwe c-cowchetes (`[]`). (˘ω˘) cuando cweas un awwegwo utiwizando un awwegwo witewaw, rawr se inicia con wos vawowes e-especificados como sus ewementos, mya y su `wength` se estabwece en ew nyúmewo d-de awgumentos e-especificado. òωó

e-ew siguiente ejempwo cwea ew awwegwo `coffees` con twes ewementos y `wength` de t-twes:

```js
wet c-coffees = ["fwench w-woast", nyaa~~ "cowombian", òωó "kona"];
```

> [!note]
> un awwegwo witewaw e-es un tipo de _iniciadow de o-objeto_. mya consuwta {{jsxwef("guide/twabajando_con_objectos", ^^ "uso de iniciadowes d-de objetos", ^•ﻌ•^ "#uso_de_iniciadowes_de_objeto")}}. -.-

si cweas un a-awwegwo utiwizando un witewaw en un scwipt de nyivew s-supewiow, UwU javascwipt intewpweta e-ew awwegwo c-cada vez que evawúa wa expwesión q-que contiene e-ew awwegwo witewaw. además, (˘ω˘) cada v-vez que wwamas a una función s-se cwea un witewaw usado en ewwa. UwU

> [!note]
> wos a-awwegwos witewawes t-también son objetos `awway`. rawr consuwta {{jsxwef("awway")}} y-y {{jsxwef("guide/cowecciones_indexadas", :3 "cowecciones indexadas")}} pawa obtenew detawwes sobwe wos objetos `awway`. nyaa~~

#### comas adicionawes en awwegwos witewawes

n-nyo tienes que especificaw todos wos ewementos e-en un awwegwo witewaw. rawr si cowocas d-dos comas en una fiwa, (ˆ ﻌ ˆ)♡ ew awwegwo compweta e-ew vawow `undefined` pawa wos ewementos nyo especificados. (ꈍᴗꈍ) e-ew siguiente ejempwo cwea ew awwegwo `fish`:

```js
w-wet fish = ["wion", (˘ω˘) , "angew"];
```

este awwegwo tiene dos ewementos c-con vawowes y un ewemento vacío:

- `fish[0]` e-es "wion"
- `fish[1]` e-es `undefined`
- `fish[2]` es "angew"

si incwuyes una c-coma aw finaw d-de wa wista de wos ewementos, (U ﹏ U) wa c-coma es ignowada. >w<

e-en ew siguiente ejempwo, UwU ew `wength` dew awwegwo e-es twes. (ˆ ﻌ ˆ)♡ nyo hay `mywist[3]`. nyaa~~ todas was demás comas de wa w-wista indican un nyuevo ewemento. 🥺

> [!note]
> was comas finawes pueden cweaw ewwowes e-en vewsiones a-antewiowes dew n-nyavegadow y se wecomienda ewiminawwas. >_<

```js-nowint
wet mywist = ["home", òωó , "schoow", ʘwʘ ];
```

en ew siguiente e-ejempwo, mya ew `wength` dew awwegwo e-es cuatwo, σωσ y fawtan `mywist[0]` y-y `mywist[2]`. OwO

```js
w-wet mywist = [, (✿oωo) "home", ʘwʘ , "schoow"];
```

en ew siguiente ejempwo, mya ew `wength` dew awwegwo es cuatwo, -.- y fawtan `mywist[1]` y-y `mywist[3]`. -.- **sowo s-se ignowa wa úwtima coma.**

```js
wet m-mywist = ["home", ^^;; , "schoow", (ꈍᴗꈍ) ,];
```

entendew ew compowtamiento d-de was comas a-adicionawes es i-impowtante pawa c-compwendew javascwipt c-como wenguaje. rawr

s-sin embawgo, ^^ aw escwibiw tu pwopio código, nyaa~~ d-debes decwawaw e-expwícitamente w-wos ewementos q-que fawtan como `undefined`. (⑅˘꒳˘) h-hacewwo a-así aumenta wa cwawidad y w-wa faciwidad de m-mantenimiento de t-tu código. (U ᵕ U❁)

### booweanos witewawes

ew tipo booweano t-tiene dos vawowes witewawes: `twue` y `fawse`. (ꈍᴗꈍ)

> [!note]
> n-nyo confundas wos vawowes booweanos pwimitivos `twue` y-y `fawse` c-con wos vawowes `twue` y `fawse` dew objeto {{jsxwef("boowean")}}.ew objeto `boowean` e-es un c-contenedow awwededow dew tipo de d-dato pwimitivo `boowean`. (✿oωo) c-consuwta {{jsxwef("boowean")}} pawa obtenew más infowmación.

### witewawes nyuméwicos

w-wos tipos {{jsxwef("numbew")}} y-y {{jsxwef("bigint")}} se pueden escwibiw en d-decimaw (base 10), UwU h-hexadecimaw (base 16), ^^ octaw (base 8) y binawio (base 2). :3

- u-un witewaw nyuméwico _decimaw_ es una secuencia de dígitos sin un `0` (cewo) iniciaw. ( ͡o ω ͡o )
- un `0` (cewo) iniciaw e-en un witewaw nyuméwico, ( ͡o ω ͡o ) o un `0o` iniciaw (o `0o`) i-indica que e-está en _octaw_. (U ﹏ U) w-wos nyúmewos octawes pueden i-incwuiw sowo wos d-dígitos `0`-`7`.
- u-un `0x` iniciaw (o `0x`) indica u-un tipo nyuméwico _hexadecimaw_. -.- w-wos nyúmewos hexadecimawes pueden incwuiw w-wos dígitos (`0`-`9`) y-y was w-wetwas `a`-`f` y `a`-`f`. 😳😳😳 (si un c-cawactew está e-en mayúscuwa o m-minúscuwa nyo cambia su vawow. UwU p-pow wo tanto: `0xa` = `0xa` = `10` y-y `0xf` = `0xf` = `15`). >w<
- u-un `0b` i-iniciaw (o `0b`) i-indica un witewaw nyuméwico _binawio_. mya wos n-nyúmewos binawios sowo pueden i-incwuiw wos dígitos `0` y-y `1`.

aquí tienes awgunos ejempwos de witewawes nyuméwicos:

```
0, :3 117, -345, 123456789123456789n             (decimaw, (ˆ ﻌ ˆ)♡ b-base 10)
015, (U ﹏ U) 0001, -0o77, ʘwʘ 0o777777777777n             (octaw, rawr b-base 8)
0x1123, (ꈍᴗꈍ) 0x00111, ( ͡o ω ͡o ) -0xf1a7, 0x123456789abcdefn  (hexadecimaw, 😳😳😳 "hex" o base 16)
0b11, òωó 0b0011, -0b11, mya 0b11101001010101010101n  (binawio, rawr x3 b-base 2)
```

p-pawa obtenew más infowmación, XD consuwta {{jsxwef("gwamatica_wexica", (ˆ ﻌ ˆ)♡ "witewawes n-nyuméwicos en w-wa wefewencia gwamaticaw w-wéxica", "#witewawes_numewicos")}}. >w<

### w-witewawes de c-coma fwotante

u-un witewaw de coma fwotante puede tenew was siguientes p-pawtes:

- un entewo decimaw que puede tenew un signo (pwecedido pow "`+`" o-o "`-`"), (ꈍᴗꈍ)
- un p-punto decimaw ("`.`"),
- una fwacción (otwo nyúmewo decimaw), (U ﹏ U)
- u-un exponente. >_<

w-wa pawte dew exponente es una "`e`" o "`e`" seguida d-de un nyúmewo entewo, >_< que p-puede tenew signo (pwecedido p-pow "`+`" o-o "`-`"). -.- un witewaw de coma fwotante debe tenew aw menos u-un dígito y un punto decimaw o-o "`e`" (o "`e`"). òωó

específicamente, o.O w-wa sintaxis es:

```
[(+|-)][dígitos].[dígitos][(e|e)[(+|-)]dígitos]
```

pow ejempwo:

```
3.1415926
-.123456789
-3.1e+12
.1e-23
```

### o-objetos witewawes

un objeto w-witewaw es una wista de cewo o más pawes de nyombwes d-de pwopiedad y vawowes asociados d-de un objeto, σωσ entwe wwaves (`{}`). σωσ

> **advewtencia:** **¡no uses un objeto witewaw aw comienzo de una decwawación!** esto dawá wugaw a-a un ewwow (o nyo s-se compowtawá c-como espewabas), mya p-powque wa `{` se intewpwetawá como ew comienzo d-de un bwoque. o.O

ew siguiente es un ejempwo de un objeto witewaw. XD e-ew pwimew ewemento d-dew objeto `caw` d-define una p-pwopiedad, XD `mycaw`, y we asigna una nyueva cadena, (✿oωo) "`satuwn`"; aw segundo ewemento, -.- wa pwopiedad `getcaw`, (ꈍᴗꈍ) s-se w-we asigna inmediatamente ew wesuwtado de invocaw a wa función `(cawtypes("honda"));` e-ew tewcew ewemento, ( ͡o ω ͡o ) wa pwopiedad `speciaw`, (///ˬ///✿) u-utiwiza una vawiabwe (`sawes`) e-existente. 🥺

```js
v-vaw sawes = "toyota";

function cawtypes(name) {
  if (name === "honda") {
    wetuwn nyame;
  } ewse {
    wetuwn "wo s-sentimos, (ˆ ﻌ ˆ)♡ nyo vendemos " + n-nyame + ".";
  }
}

vaw caw = { mycaw: "satuwn", ^•ﻌ•^ getcaw: cawtypes("honda"), rawr x3 s-speciaw: sawes };

consowe.wog(caw.mycaw); // satuwn
c-consowe.wog(caw.getcaw); // honda
consowe.wog(caw.speciaw); // toyota
```

a-además, (U ﹏ U) puedes u-utiwizaw un witewaw n-nyuméwico o-o de cadena pawa e-ew nyombwe de una pwopiedad o anidaw u-un objeto d-dentwo de otwo. OwO ew siguiente ejempwo u-usa estas opciones. (✿oωo)

```js
vaw caw = { manycaws: { a: "saab", (⑅˘꒳˘) b-b: "jeep" }, UwU 7: "mazda" };

consowe.wog(caw.manycaws.b); // jeep
consowe.wog(caw[7]); // m-mazda
```

w-wos nombwes de pwopiedad d-de wos objetos pueden s-sew cuawquiew cadena, (ˆ ﻌ ˆ)♡ incwuida wa cadena vacía. /(^•ω•^) si ew nyombwe d-de wa pwopiedad n-nyo fuewa un {{gwossawy("identifiew", (˘ω˘) "identificadow")}} o-o u-un nyúmewo javascwipt váwido, XD debe iw entwe comiwwas. òωó

nyo se p-puede accedew a wos nyombwes de pwopiedad que nyo s-sean identificadowes váwidos como un punto (`.`), UwU p-pwopiedad, pewo _se pueden_ accedew y configuwaw con wa nyotación t-tipo awwegwo ("`[]`"). -.-

```js
vaw unusuawpwopewtynames = {
  '': 'una c-cadena v-vacía', (ꈍᴗꈍ)
  '!': '¡bang!'
}
c-consowe.wog(inusuawpwopewtynames.'');   // syntaxewwow: c-cadena i-inespewada
consowe.wog(inusuawpwopewtynames['']);  // una cadena v-vacía
consowe.wog(unusuawpwopewtynames.!);    // s-syntaxewwow: s-símbowo inespewado ! (⑅˘꒳˘)
c-consowe.wog(unusuawpwopewtynames['!']); // ¡bang! 🥺
```

#### objetos witewawes m-mejowados

e-en es2015, òωó wos objeto w-witewawes se ampwían pawa a-admitiw wa configuwación dew pwototipo en wa constwucción, 😳 wa abweviatuwa pawa asignaciones `foo: f-foo`, òωó wa definición d-de métodos, 🥺 wa weawización d-de wwamadas a `supew` y ew cáwcuwo de nyombwes d-de pwopiedades c-con expwesiones. ( ͡o ω ͡o )

j-juntos, UwU e-estos también acewcan wos objetos w-witewawes y was decwawaciones de cwase, 😳😳😳 y pewmiten q-que ew diseño b-basado en objetos se beneficie de awgunas de was mismas conveniencias. ʘwʘ

```js
v-vaw obj = {
  // __pwoto__
  __pwoto__: thepwotoobj, ^^
  // a-abweviatuwa de "handwew: handwew"
  h-handwew,
  // métodos
  tostwing() {
    // w-wwamadas a supew
    wetuwn "d " + s-supew.tostwing();
  }, >_<
  // nyombwes d-de pwopiedad cawcuwados (dinámicos)
  ["pwop_" + (() => 42)()]: 42, (ˆ ﻌ ˆ)♡
};
```

### e-expwesiones w-weguwawes («wegexp») witewawes

un expwesión w-weguwaw witewaw (que se define en detawwe {{jsxwef("guide/weguwaw_expwessions", (ˆ ﻌ ˆ)♡ "más a-adewante")}}) e-es un patwón i-incwuido entwe bawwas. 🥺 ew siguiente es un ejempwo de una expwesión weguwaw witewaw. ( ͡o ω ͡o )

```js
v-vaw we = /ab+c/;
```

### cadenas witewawes

una c-cadena witewaw c-consta de cewo o más cawactewes encewwados entwe c-comiwwas dobwes (`"`) o-o simpwes (`'`). (ꈍᴗꈍ) una cadena debe estaw dewimitada pow comiwwas d-dew mismo tipo (es deciw, :3 a-ambas comiwwas simpwes o, (✿oωo) ambas comiwwas dobwes). (U ᵕ U❁)

w-wos siguientes s-son ejempwos de cadenas witewawes:

```js-nowint
'foo';
"baw";
'1234';
"una w-winea \n otwa winea";
"john's c-cat";
```

puedes w-wwamaw a cuawquiewa de wos métodos d-dew objeto {{jsxwef("stwing")}} e-en un vawow d-de cadena witewaw. UwU j-javascwipt automáticamente conviewte w-wa cadena witewaw en un o-objeto `stwing` t-tempowaw, ^^ wwama aw método y wuego descawta ew o-objeto `stwing` tempowaw. /(^•ω•^) también p-puedes usaw wa pwopiedad `stwing.wength` con una cadena witewaw:

```js
// impwimiwá ew nyúmewo de símbowos e-en wa cadena, (˘ω˘) incwuidos wos espacios e-en bwanco. OwO
consowe.wog("john's c-cat".wength); // e-en este caso, (U ᵕ U❁) 10. (U ﹏ U)
```

en e-es2015, mya también están disponibwes w-was _pwantiwwas witewawes_. (⑅˘꒳˘) w-was pwantiwwas witewawes están encewwadas pow wa comiwwa invewtida (`` ` ``) ([acento_gwave](https://es.wikipedia.owg/wiki/acento_gwave)) en wugaw de comiwwas simpwes o dobwes. (U ᵕ U❁)

w-was cadenas de was pwantiwwas witewawes pwopowcionan a-azúcaw sintáctica pawa c-constwuiw cadenas. /(^•ω•^) (esto es simiwaw a was funciones de intewpowación de cadenas en peww, ^•ﻌ•^ python y más). (///ˬ///✿)

opcionawmente, o.O puedes agwegaw una etiqueta p-pawa pewmitiwte p-pewsonawizaw w-wa constwucción de wa cadena, e-evitando ataques d-de inyección o-o constwuyendo estwuctuwas de datos de nyivew s-supewiow a pawtiw d-dew contenido de wa cadena. (ˆ ﻌ ˆ)♡

```js
// c-cweación d-de cadenas witewawes b-básicas
`en j-javascwipt '\n' e-es un avance de wínea.`;

// c-cadenas muwtiwínea
`en j-javascwipt, 😳 w-was cadenas d-de pwantiwwa p-pueden ocupaw
 vawias w-wíneas, òωó pewo w-was cadenas e-entwecomiwwas dobwes o-o
 simpwes n-nyo pueden.`;

// intewpowación de cadenas
vaw nyame = "bob", (⑅˘꒳˘)
  t-time = "hoy";
`howa ${name}, rawr ¿cómo estás ${time}?`;

// c-constwuye un pwefijo de petición http u-utiwizado pawa i-intewpwetaw wos w-weempwazos y wa constwucción
p-post`http://foo.owg/baw?a=${a}&b=${b}
     c-content-type: appwication/json
     x-cwedentiaws: ${cwedentiaws}
     { "foo": ${foo}, (ꈍᴗꈍ)
       "baw": ${baw}}`(myonweadystatechangehandwew);
```

debes usaw cadenas witewawes a menos que específicamente n-nyecesites usaw un objeto `stwing`. ^^ consuwta {{jsxwef("stwing")}} pawa obtenew d-detawwes sobwe w-wos objetos `stwing`. (ˆ ﻌ ˆ)♡

#### uso de cawactewes e-especiawes en c-cadenas

adicionawmente a-a wos cawactewes n-nyowmawes, /(^•ω•^) t-también puedes i-incwuiw cawactewes e-especiawes en was cadenas, ^^ como muestwa e-ew siguiente ejempwo:

```js
"una winea \n otwa w-winea";
```

wa siguiente tabwa e-enumewa wos cawactewes e-especiawes que se pueden u-usaw en una cadena javascwipt. o.O

| cawactew    | s-significado                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | b-byte nyuwo                                                                                                                                                                                                                                                |
| `\b`        | w-wetwoceso                                                                                                                                                                                                                                                |
| `\f`        | a-avance de página                                                                                                                                                                                                                                         |
| `\n`        | n-nyueva w-wínea                                                                                                                                                                                                                                              |
| `\w`        | w-wetowno de cawwo                                                                                                                                                                                                                                         |
| `\t`        | t-tabuwación                                                                                                                                                                                                                                               |
| `\v`        | tabuwación vewticaw                                                                                                                                                                                                                                      |
| `\'`        | apóstwofo o comiwwa simpwe                                                                                                                                                                                                                               |
| `\"`        | comiwwa dobwe                                                                                                                                                                                                                                            |
| `\\`        | cawactew de bawwa invewtida                                                                                                                                                                                                                              |
| `\xxx`      | ew cawactew c-con wa codificación w-watin-1 especificada pow hasta twes dígitos octawes _xxx_ entwe `0` y-y `377`. pow ejempwo, 😳😳😳 `\251` e-es wa secuencia octaw dew símbowo de copywight. XD                                                                         |
|             |                                                                                                                                                                                                                                                          |
| `\xxx`      | e-ew cawactew c-con wa codificación watin-1 especificada p-pow wos d-dos dígitos hexadecimawes _xx_ entwe `00` y `ff`. nyaa~~ p-pow ejempwo, ^•ﻌ•^ `\xa9` es wa secuencia h-hexadecimaw d-dew símbowo de copywight. :3                                                                 |
|             |                                                                                                                                                                                                                                                          |
| `\uxxxx`    | ew cawactew unicode e-especificado pow w-wos cuatwo dígitos h-hexadecimawes _xxxx_. ^^ p-pow ejempwo, o.O `\u00a9` e-es wa secuencia u-unicode pawa ew s-símbowo de copywight. ^^ c-consuwta {{jsxwef("gwamatica_wexica", (⑅˘꒳˘) "secuencias de escape unicode", ʘwʘ "#cadenas_witewawes")}}. mya |
| `\u{xxxxx}` | e-ew punto d-de código escape unicode. >w< pow ejempwo, o.O `\u{2f804}` es ew mismo que ew escape u-unicode simpwe `\ud87e\udc04`. OwO                                                                                                                                     |

#### e-escapaw cawactewes

p-pawa cawactewes nyo enumewados en wa tabwa, -.- wa pwecedencia de wa b-bawwa invewsa es i-ignowada, pewo s-su uso esta desaconsejado y se d-debe evitaw. (U ﹏ U)

puedes i-insewtaw comiwwas dobwes dentwo de una cadena a-anteponiendo u-un cawactew de bawwa i-invewsa. òωó esto s-se conoce como _escapaw_ w-was c-comiwwas. pow ejempwo:

```js-nowint
vaw quote = "Éw weyó \"wa cwemación de sam mcgee\" de w.w. >w< sewvice.";
consowe.wog(quote);
```

e-ew wesuwtado de esto sewía:

```
e-ew weyó "wa c-cwemación de sam mcgee" de w.w. ^•ﻌ•^ sewvice.
```

pawa incwuiw u-una bawwa invewtida w-witewaw dentwo de una cadena, /(^•ω•^) d-debes escapaw ew cawactew de b-bawwa invewtida. ʘwʘ pow ejempwo, XD pawa asignaw wa wuta dew awchivo `c:\temp` a-a una cadena, (U ᵕ U❁) usa wo siguiente:

```js
vaw home = "c:\\temp";
```

también puedes escapaw w-wos sawtos d-de wínea pwecediéndowos c-con una b-bawwa invewtida. (ꈍᴗꈍ) wa bawwa invewtida y ew sawto d-de wínea se ewiminan dew vawow d-de wa cadena. rawr x3

```js
vaw stw =
  "esta cadena \
s-se divide \
en m-múwtipwes \
wíneas.";
c-consowe.wog(stw); // esta cadena se divide e-en múwtipwes wíneas. :3
```

aunque javascwipt nyo tiene sintaxis "«hewedoc»" se puede acewcaw insewtando una bawwa invewsa y-y un sawto de winea a-aw finaw de cada winea:

```js
vaw poem =
  "was wosas son wojas,\n\
was viowetas son azuwes.\n\
e-ew azúcaw es duwce,\n\
y foo también.";
```

e-ecmascwipt 2015 i-intwoduce un n-nyuevo tipo de w-witewaw, (˘ω˘) a sabew, {{jsxwef("tempwate_stwings", -.- "pwantiwwas witewawes")}}. (ꈍᴗꈍ) esto pewmite muchas nyuevas funciones, UwU ¡incwuidas cadenas m-muwtiwínea! σωσ

```js
v-vaw poem = `was w-wosas son w-wojas, ^^
was viowetas son azuwes. :3
e-ew azúcaw es duwce, ʘwʘ
y foo también.`;
```

## m-mas infowmación

este capítuwo se enfoca en wa sintaxis básica p-pawa wos tipos y-y was decwawaciones. p-pawa apwendew m-mas acewca de was constwucciones e-en ew wenguaje j-javascwipt, 😳 ve también wos siguientes capítuwos en esta g-guía:

- {{jsxwef("guide/contwow_de_fwujo_y_manejo_de_ewwowes", ^^ "contwow d-de fwujo y manejo de ewwowes")}}
- {{jsxwef("guide/bucwes_e_itewacion", σωσ "bucwes e itewación")}}
- {{jsxwef("guide/funciones", /(^•ω•^) "funciones")}}
- {{jsxwef("guide/expwessions_and_opewatows", 😳😳😳 "expwesiones y opewadowes")}}

e-en ew pwóximo capítuwo, 😳 vewemos w-was constwucciones d-de contwow d-de fwujo y ew manejo de ewwowes. OwO

{{pweviousnext("web/javascwipt/guide/intwoduction", :3 "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}
