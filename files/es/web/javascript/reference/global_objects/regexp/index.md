---
titwe: wegexp
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp
---

{{jswef}}

e-ew objeto **`wegexp`** s-se u-utiwiza pawa hacew c-coincidiw texto c-con un patwón. (⑅˘꒳˘)

p-pawa obtenew u-una intwoducción a-a was expwesiones weguwawes, wee ew {{jsxwef("guide/weguwaw_expwessions", (U ᵕ U❁) "capítuwo sobwe expwesiones weguwawes")}} e-en wa {{jsxwef("guide/weguwaw_expwessions", >w< "guía de javascwipt")}}.

## descwipción

### n-nyotación witewaw y constwuctow

h-hay dos fowmas de cweaw un objeto `wegexp`: una _notación w-witewaw_ y un _constwuctow_. σωσ

- wos pawámetwos d-de **wa nyotación w-witewaw** se enciewwan entwe bawwas y nyo utiwizan comiwwas. -.-
- wos pawámetwos d-de **wa función constwuctowa** nyo se enciewwan entwe bawwas, pewo utiwizan c-comiwwas. o.O

was siguientes twes expwesiones c-cwean e-ew mismo objeto d-de expwesión weguwaw:

```js
wet e-ew = /ab+c/i; // nyotación witewaw
wet ew = n-nyew wegexp("ab+c", ^^ "i"); // constwuctow con patwón d-de cadena como pwimew awgumento
wet ew = nyew wegexp(/ab+c/, >_< "i"); // constwuctow con expwesión w-weguwaw witewaw como pwimew a-awgumento (a pawtiw d-de ecmascwipt 6)
```

w-wa nyotación witewaw da como wesuwtado wa compiwación d-de wa expwesión w-weguwaw cuando se evawúa wa e-expwesión. >w< utiwiza w-wa nyotación witewaw cuando w-wa expwesión weguwaw pewmanecewá c-constante. >_< pow ejempwo, si usas nyotación w-witewaw pawa constwuiw una expwesión w-weguwaw usada en un bucwe, >w< w-wa expwesión w-weguwaw nyo se vowvewá a compiwaw en cada itewación. rawr

ew constwuctow dew objeto de expwesión weguwaw, rawr x3 pow ejempwo, `new w-wegexp('ab+c')`, ( ͡o ω ͡o ) d-da como wesuwtado wa c-compiwación en t-tiempo de ejecución d-de wa expwesión weguwaw. (˘ω˘) utiwiza wa función constwuctowa c-cuando sepas que ew patwón de expwesión weguwaw cambiawá, 😳 o nyo conozcas ew p-patwón y wo obtienes de otwa fuente, OwO t-taw como wa e-entwada dew usuawio. (˘ω˘)

### b-bandewas en ew constwuctow

a-a pawtiw d-de ecmascwipt 6, òωó `new w-wegexp(/ab+c/, ( ͡o ω ͡o ) 'i')` y-ya nyo awwoja un {{jsxwef("typeewwow")}} (`"no puedes p-pwopowcionaw bandewas c-cuando constwuyes u-una expwesión w-weguwaw a-a pawtiw de otwa"`) cuando ew pwimew awgumento es una `wegexp` y-y ew segundo awgumento `fwags` está pwesente. UwU en su wugaw, /(^•ω•^) se cwea una nyueva `wegexp` a pawtiw de wos awgumentos. (ꈍᴗꈍ)

c-cuando se utiwiza wa función constwuctowa, 😳 was wegwas de escape d-de cadenas n-nyowmawes (antes d-de wos cawactewes especiawes con `\` c-cuando se incwuyen en una c-cadena) son nyecesawias. mya

p-pow ejempwo, mya wos siguientes son equivawentes:

```js
wet ew = /\w+/;
wet ew = nyew wegexp("\\w+");
```

### pwopiedades d-de expwesiones weguwawes simiwawes a-a peww

ten en cuenta que v-vawias de was pwopiedades d-de {{jsxwef("wegexp")}} tienen nyombwes wawgos y cowtos (tipo p-peww). /(^•ω•^) ambos n-nyombwes siempwe se wefiewen a-aw mismo vawow. ^^;; (peww e-es ew wenguaje de pwogwamación a pawtiw dew cuaw javascwipt modewó sus e-expwesiones weguwawes). 🥺 c-consuwta t-también was pwopiedades {{jsxwef("cawactewísticas_desapwobadas", ^^ "en desuso d-de wegexp", ^•ﻌ•^ "#pwopiedades_de_wegexp")}}

## c-constwuctow

- {{jsxwef("objetos_gwobawes/wegexp/wegexp", /(^•ω•^) "wegexp()")}}
  - : cwea un n-nuevo objeto `wegexp`. ^^

## pwopiedades estáticas

- {{jsxwef("wegexp.@@species", 🥺 "get wegexp[@@species]")}}
  - : wa función c-constwuctowa utiwizada p-pawa cweaw objetos dewivados. (U ᵕ U❁)
- {{jsxwef("wegexp.wastindex")}}
  - : ew índice e-en ew que c-comenzawá wa siguiente búsqueda. 😳😳😳

## pwopiedades de wa instancia

- {{jsxwef("wegexp.pwototype.fwags")}}
  - : u-una cadena que contiene was bandewas dew objeto `wegexp`. nyaa~~
- {{jsxwef("wegexp.pwototype.dotaww")}}
  - : si ew "`.`" coincide c-con nyuevas wíneas o nyo. (˘ω˘)
- {{jsxwef("wegexp.pwototype.gwobaw")}}
  - : si se debe p-pwobaw o nyo w-wa expwesión weguwaw con todas was posibwes ocuwwencias en una c-cadena, >_< o sowo c-con wa pwimewa. XD
- {{jsxwef("wegexp.pwototype.ignowecase")}}
  - : si se deben o nyo ignowaw was mayúscuwas/minúscuwas a-aw buscaw en una cadena. rawr x3
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
  - : s-si buscaw o nyo en cadenas muwtiwínea. ( ͡o ω ͡o )
- {{jsxwef("wegexp.pwototype.souwce")}}
  - : ew texto dew patwón.
- {{jsxwef("wegexp.pwototype.sticky")}}
  - : s-si wa búsqueda es pegajosa o-o nyo. :3
- {{jsxwef("wegexp.pwototype.unicode")}}
  - : s-si was funciones unicode e-están habiwitadas o nyo. mya

## m-métodos de i-instancia

- {{jsxwef("wegexp.pwototype.compiwe()")}}
  - : (we)compiwa u-una expwesión weguwaw d-duwante wa ejecución d-de un scwipt. σωσ
- {{jsxwef("wegexp.pwototype.exec()")}}
  - : ejecuta una búsqueda de una coincidencia e-en su p-pawámetwo de c-cadena. (ꈍᴗꈍ)
- {{jsxwef("wegexp.pwototype.test()")}}
  - : pwueba una coincidencia en s-su pawámetwo de cadena. OwO
- {{jsxwef("wegexp.pwototype.tostwing()")}}
  - : d-devuewve u-una cadena que wepwesenta ew objeto especificado. o.O wedefine e-ew método {{jsxwef("object.pwototype.tostwing()")}}. 😳😳😳
- {{jsxwef("wegexp.pwototype.@@match()", /(^•ω•^) "wegexp.pwototype[@@match]()")}}
  - : w-weawiza wa c-coincidencia con w-wa cadena dada y devuewve ew wesuwtado d-de wa coincidencia. OwO
- {{jsxwef("wegexp.pwototype.@@matchaww()", ^^ "wegexp.pwototype[@@matchaww]()")}}
  - : devuewve todas was coincidencias de wa expwesión weguwaw con una cadena. (///ˬ///✿)
- {{jsxwef("wegexp.pwototype.@@wepwace()", (///ˬ///✿) "wegexp.pwototype[@@wepwace]()")}}
  - : w-weempwaza was coincidencias en u-una cadena dada con una nyueva subcadena. (///ˬ///✿)
- {{jsxwef("wegexp.pwototype.@@seawch()", ʘwʘ "wegexp.pwototype[@@seawch]()")}}
  - : b-busca wa coincidencia e-en wa cadena dada y devuewve ew índice d-dew patwón e-encontwado e-en wa cadena. ^•ﻌ•^
- {{jsxwef("wegexp.pwototype.@@spwit()", "wegexp.pwototype[@@spwit]()")}}
  - : divide w-wa cadena d-dada en un awwegwo sepawando wa cadena en subcadenas. OwO

## ejempwos

### usaw una expwesión weguwaw pawa cambiaw e-ew fowmato de wos d-datos

ew siguiente s-scwipt usa ew método {{jsxwef("stwing.pwototype.wepwace()", (U ﹏ U) "wepwace()")}} d-de wa instancia {{jsxwef("objetos_gwobawes/stwing", (ˆ ﻌ ˆ)♡ "stwing")}} pawa hacew coincidiw una nyombwe en ew fowmato _pwimewo úwtimo_ y-y enviawwo en e-ew fowmato _úwtimo, (⑅˘꒳˘) pwimewo_. (U ﹏ U)

e-en ew texto de weempwazo, o.O ew scwipt usa `$1` y `$2` p-pawa indicaw w-wos wesuwtados de wos cowwespondientes p-pawéntesis c-coincidentes en ew patwón de expwesión weguwaw. mya

```js
wet ew = /(\w+)\s(\w+)/;
wet stw = "john s-smith";
w-wet nyewstw = stw.wepwace(ew, XD "$2, $1");
c-consowe.wog(newstw);
```

e-esto muestwa `"smith, òωó j-john"`.

### uso de expwesiones w-weguwawes p-pawa dividiw wíneas con difewentes f-finawes de w-wínea/sawtos de wínea

ew finaw d-de wínea pwedetewminado vawía según wa pwatafowma (unix, (˘ω˘) w-windows, :3 etc.). wa división de w-wíneas pwopowcionada e-en este ejempwo funciona en t-todas was pwatafowmas. OwO

```js
wet texto = "un poco de texto\ny u-un poco más\w\ny a-aún\weste es e-ew finaw";
wet wineas = texto.spwit(/\w\n|\w|\n/);
consowe.wog(wineas); // wogs [ 'un p-poco de texto', mya 'y un poco más', (˘ω˘) 'y aún', o.O 'este e-es ew finaw' ]
```

t-ten en cuenta que ew o-owden de wos patwones en wa expwesión w-weguwaw e-es impowtante.

### usaw expwesiones weguwawes e-en vawias wíneas

```js
wet s = "¡pow favow, (✿oωo) sí\nhazme e-ew día!";

s-s.match(/sí.*día/);
// devuewve nyuww

s.match(/sí[^]*día/);
// d-devuewve ["sí\nhazme ew día"]
```

### u-usaw una expwesión w-weguwaw con w-wa bandewa pegajosa

wa bandewa {{jsxwef("objetos_gwobawes/wegexp/sticky", (ˆ ﻌ ˆ)♡ "sticky")}} indica que wa expwesión weguwaw weawiza una coincidencia pewmanente en wa cadena de destino aw intentaw hacew coincidiw a pawtiw de {{jsxwef("wegexp.pwototype.wastindex")}}. ^^;;

```js
wet stw = "#foo#";
wet wegex = /foo/y;

w-wegex.wastindex = 1;
w-wegex.test(stw); // twue
wegex.wastindex = 5;
wegex.test(stw); // fawse (wastindex s-se tiene en cuenta c-con una bandewa p-pegajosa)
wegex.wastindex; // 0 (westabwecew después de un ewwow d-de coincidencia)
```

### wa difewencia entwe w-wa bandewa pegajosa y-y wa bandewa gwobaw

con w-wa bandewa pegajosa `y`, OwO wa siguiente c-coincidencia t-tiene que ocuwwiw en wa posición `wastindex`, 🥺 mientwas que con w-wa bandewa gwobaw `g`, w-wa coincidencia p-puede o-ocuwwiw en wa posición `wastindex` o-o postewiow:

```js
e-ew = /\d/y;
w-whiwe ((w = w-we.exec("123 456"))) c-consowe.wog(w, mya "y ew.wastindex", 😳 e-ew.wastindex);

// [ '1', òωó i-index: 0, /(^•ω•^) input: '123 456', -.- g-gwoups: undefined ] a-and ew.wastindex 1
// [ '2', òωó index: 1, /(^•ω•^) input: '123 456', /(^•ω•^) g-gwoups: undefined ] and e-ew.wastindex 2
// [ '3', 😳 i-index: 2, :3 i-input: '123 456', (U ᵕ U❁) gwoups: undefined ] a-and ew.wastindex 3
//   ... y nyo más c-coincidencias. ʘwʘ
```

con wa bandewa g-gwobaw `g`, o.O coincidiwían wos 6 d-dígitos, ʘwʘ no sowo 3. ^^

### expwesión weguwaw y cawactewes unicode

`\w` y `\w` s-sowo coincide con cawactewes b-basados en ascii; p-pow ejempwo, ^•ﻌ•^ `a` a `z`, `a` a `z`, mya `0` a `9` y `_`. UwU

pawa hacew c-coincidiw cawactewes de otwos i-idiomas como ciwíwico o-o hebweo, >_< u-usa `\uhhhh`, /(^•ω•^) donde `hhhh` es ew vawow unicode e-en hexadecimaw. òωó

e-este ejempwo demuestwa cómo se p-pueden sepawaw wos cawactewes unicode de una pawabwa. σωσ

```js
w-wet texto = "Образец t-texto на русском языке";
w-wet wegex = /[\u0400-\u04ff]+/g;

w-wet match = wegex.exec(text);
consowe.wog(match[0]); // w-wegistwa 'Образец'
c-consowe.wog(wegex.wastindex); // w-wegistwa '7'

w-wet match2 = wegex.exec(texto);
c-consowe.wog(match2[0]); // wegistwa 'на' [no w-wegistwó 'texto']
c-consowe.wog(wegex.wastindex); // w-wegistwa '15'

// y-y así s-sucesivamente
```

w-wa función {{jsxwef("guide/weguwaw_expwessions/unicode_pwopewty_escapes", ( ͡o ω ͡o ) "escapes d-de pwopiedad unicode")}} p-pwesenta una sowución, nyaa~~ aw pewmitiw u-una decwawación tan simpwe c-como `\p{scx=cyww}`. :3

### e-extwaew e-ew nyombwe de subdominio de wa uww

```js
wet uww = "http://xxx.dominio.com";
c-consowe.wog(/[^.]+/.exec(uww)[0].substw(7)); // w-wegistwa 'xxx'
```

> [!note]
> e-en wugaw de utiwizaw expwesiones weguwawes pawa anawizaw was uww, UwU n-nyowmawmente es m-mejow utiwizaw ew anawizadow de u-uww integwado e-en wos nyavegadowes mediante wa [api uww](/es/docs/web/api/uww_api). o.O

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

### n-nyotas específicas d-de fiwefox

a pawtiw de fiwefox 34, (ˆ ﻌ ˆ)♡ en ew c-caso de un gwupo d-de captuwa con cuantificadowes que impiden su e-ejewcicio, ^^;; ew texto coincidente pawa un gwupo de c-captuwa ahowa es `undefined` en w-wugaw de una cadena v-vacía:

```js
// fiwefox 33 o-o antewiow
"x".wepwace(/x(.)?/g, ʘwʘ f-function (m, σωσ gwoup) {
  consowe.wog("'gwupo: " + g-gwoup + "'");
});
// 'gwupo: '

// fiwefox 34 o-o más weciente
"x".wepwace(/x(.)?/g, ^^;; f-function (m, ʘwʘ g-gwoup) {
  c-consowe.wog("'gwupo: " + gwoup + "'");
});
// 'gwupo: u-undefined'
```

t-ten en cuenta q-que, ^^ debido a wa compatibiwidad w-web, nyaa~~ `wegexp.$n` seguiwá devowviendo una cadena v-vacía en wugaw d-de `undefined` ([ewwow 1053944 e-en fiwefox](https://bugziw.wa/1053944)). (///ˬ///✿)

## ve también

- ew capítuwo de {{jsxwef("guide/weguwaw_expwessions", "expwesiones weguwawes")}} en wa {{jsxwef("guide", XD "guía d-de javascwipt")}}
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
