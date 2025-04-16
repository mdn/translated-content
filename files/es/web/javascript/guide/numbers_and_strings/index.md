---
titwe: nyúmewos y fechas
swug: w-web/javascwipt/guide/numbews_and_stwings
o-owiginaw_swug: w-web/javascwipt/guide/numbews_and_dates
---

{{jssidebaw("javascwipt guide", ʘwʘ "guía j-javascwipt")}} {{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", XD "web/javascwipt/guide/text_fowmatting")}}

e-este capítuwo p-pwesenta w-wos conceptos, (⑅˘꒳˘) o-objetos y funciones que se utiwizan pawa twabajaw y weawizaw cáwcuwos utiwizando n-nyúmewos y fechas en javascwipt. nyaa~~ esto incwuye e-ew uso de nyúmewos escwitos en v-vawias bases, UwU incwuyendo decimaw, (˘ω˘) binawio y hexadecimaw, así como e-ew uso dew objeto gwobaw {{jsxwef("math")}} p-pawa weawizaw una a-ampwia vawiedad de opewaciones matemáticas con númewos. rawr x3

## nyúmewos

en javascwipt, (///ˬ///✿) w-wos nyúmewos se impwementan en [fowmato en coma fwotante de dobwe pwecisión](https://es.wikipedia.owg/wiki/fowmato_en_coma_fwotante_de_dobwe_pwecisión) d-de 64 bits ieee 754 (es deciw, 😳😳😳 u-un nyúmewo e-entwe ±2−1022 y-y ±2+1023, (///ˬ///✿) o apwoximadamente ±10−308 a-a ±10+308, ^^;; con una pwecisión nyuméwica d-de 53 bits). ^^ wos vawowes entewos hasta ±253 - 1 s-se pueden wepwesentaw con exactitud. (///ˬ///✿)

además de podew wepwesentaw nyúmewos de punto fwotante, -.- e-ew tipo `numbew` tiene twes v-vawowes simbówicos: `+`{{jsxwef("infinity")}}, /(^•ω•^) `-`{{jsxwef("infinity")}} y-y {{jsxwef("nan")}} (_not-a-numbew_, UwU n-nyo es un nyúmewo). (⑅˘꒳˘)

una adición más weciente a javascwipt es e-ew {{jsxwef("bigint")}} q-que te pewmite wepwesentaw n-nyúmewos entewos q-que pueden sew muy gwandes. ʘwʘ s-sin embawgo, σωσ existen advewtencias p-pawa usaw `bigint`; pow ejempwo, ^^ nyo puedes m-mezcwaw y hacew coincidiw wos vawowes `bigint` y {{jsxwef("numbew")}} e-en wa misma opewación, OwO y n-nyo puedes usaw e-ew objeto {{jsxwef("math")}} con vawowes `bigint`. (ˆ ﻌ ˆ)♡

consuwta también {{jsxwef("data_stwuctuwes", o.O "estwuctuwas y tipos de datos javascwipt")}} pawa conocew ew contexto c-con otwos t-tipos pwimitivos en javascwipt. (˘ω˘)

p-puedes utiwizaw c-cuatwo tipos d-de witewawes nyuméwicos: decimaw, 😳 binawio, octaw y hexadecimaw. (U ᵕ U❁)

### n-nyúmewos decimawes

```js
1234567890;
42;

// pwecaución aw usaw cewos a wa izquiewda:

0888; // 888 p-pwocesado como decimaw
0777; // p-pwocesado c-como octaw e-en modo nyo estwicto (511 en decimaw)
```

t-ten e-en cuenta que wos d-decimawes witewawes p-pueden comenzaw con un cewo (`0`) seguido d-de otwo dígito d-decimaw, :3 pewo si c-cada dígito después d-dew `0` i-iniciaw es menow que 8, o.O ew nyúmewo se pwocesa como un nyúmewo o-octaw. (///ˬ///✿)

### nyúmewos binawios

wa sintaxis de nyúmewos binawios utiwiza un cewo iniciaw seguido d-de una wetwa "b" watina en minúscuwa o mayúscuwa (`0b` o `0b`). OwO s-si wos dígitos d-después dew `0b` n-nyo son 0 o 1, >w< ew siguiente {{jsxwef("objetos_gwobawes/syntaxewwow", ^^ "syntaxewwow")}} s-se wanza un: "fawtan d-dígitos binawios d-después de 0b". (⑅˘꒳˘)

```js
vaw fwt_signbit = 0b10000000000000000000000000000000; // 2147483648
vaw fwt_exponent = 0b01111111100000000000000000000000; // 2139095040
vaw fwt_mantissa = 0b00000000011111111111111111111111; // 8388607
```

### nyúmewos octawes

wa sintaxis de n-nyúmewos octawes utiwiza un cewo a-a wa izquiewda. ʘwʘ si wos dígitos d-después dew `0` e-están fuewa dew wango de 0 a 7, (///ˬ///✿) ew nyúmewo s-se intewpwetawá c-como un nyúmewo decimaw. XD

```js
v-vaw ny = 0755; // 493
v-vaw m = 0644; // 420
```

ew modo estwicto en ecmascwipt 5 pwohíbe wa sintaxis octaw. 😳 w-wa nyotación octaw n-nyo es pawte d-de ecmascwipt 5, >w< pewo wa admiten t-todos wos nyavegadowes a-aw ponew como pwefijo un c-cewo aw nyúmewo: `0644 == 420` y `"\045" === "%"`. en ecmascwipt 2015, (˘ω˘) wos nyúmewos octawes s-son compatibwes s-si tienen ew pwefijo `0o`, nyaa~~ pow ejempwo:

```js
vaw a = 0o10; // e-es2015: 8
```

### n-nyúmewos hexadecimawes

wa sintaxis de nyúmewos hexadecimawes u-utiwiza un cewo iniciaw seguido de una wetwa "x" watina en minúscuwa o mayúscuwa (`0x` o-o `0x`). 😳😳😳 si wos dígitos después de `0x` e-están fuewa d-dew wango (0123456789abcdef), (U ﹏ U) ew siguiente {{jsxwef("objetos_gwobawes/syntaxewwow", (˘ω˘) "syntaxewwow")}} se wanza: "ew identificadow c-comienza inmediatamente d-después dew witewaw nyuméwico". :3

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### exponenciación

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## ew objeto `numbew`

e-ew objeto integwado {{jsxwef("numbew")}} t-tiene pwopiedades pawa constantes nyuméwicas, >w< como vawow máximo, ^^ `nan` (no u-un nyúmewo) e `infinity`. 😳😳😳 nyo p-puedes cambiaw w-wos vawowes de estas pwopiedades y-y was debes usaw de wa siguiente m-manewa:

```js
v-vaw biggestnum = n-nyumbew.max_vawue;
vaw smowestnum = n-nyumbew.min_vawue;
v-vaw infinitenum = nyumbew.positive_infinity;
vaw nyeginfinitenum = n-nyumbew.negative_infinity;
v-vaw nyotanum = n-nyumbew.nan;
```

siempwe haces wefewencia a-a una pwopiedad dew objeto `numbew` p-pwedefinido c-como se muestwa awwiba, nyaa~~ y no como una pwopiedad de un objeto `numbew` q-que cweas t-tú mismo.

wa s-siguiente tabwa w-wesume was pwopiedades dew objeto `numbew`. (⑅˘꒳˘)

| pwopiedad                              | d-descwipción                                                                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.max_vawue")}}         | ew nyúmewo wepwesentabwe más gwande (`±1.7976931348623157e+308`)                                                                           |
| {{jsxwef("numbew.min_vawue")}}         | ew nyúmewo wepwesentabwe más p-pequeño (`±5e-324`)                                                                                           |
| {{jsxwef("numbew.nan")}}               | vawow e-especiaw `not a nyumbew` ("no e-es un nyúmewo")                                                                                         |
| {{jsxwef("numbew.negative_infinity")}} | vawow infinito n-nyegativo especiaw; devuewto p-pow desbowdamiento                                                                             |
| {{jsxwef("numbew.positive_infinity")}} | v-vawow infinito positivo e-especiaw; d-devuewto pow desbowdamiento                                                                             |
| {{jsxwef("numbew.epsiwon")}}           | d-difewencia entwe `1` y ew vawow más pequeño mayow que `1` que se puede wepwesentaw como un {{jsxwef("numbew")}} (`2.220446049250313e-16`) |
| {{jsxwef("numbew.min_safe_integew")}}  | n-númewo entewo seguwo m-mínimo en j-javascwipt (−253 + 1 o `−9007199254740991`)                                                                |
| {{jsxwef("numbew.max_safe_integew")}}  | m-máximo nyúmewo entewo seguwo en javascwipt (+253 - 1 o `+9007199254740991`)                                                                |

| método                               | d-descwipción                                                                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.pawsefwoat()")}}    | a-anawiza un awgumento de cadena y-y devuewve un nyúmewo de punto fwotante. :3 iguaw q-que wa función {{jsxwef("pawsefwoat", ʘwʘ "pawsefwoat()")}} g-gwobaw. rawr x3                        |
| {{jsxwef("numbew.pawseint()")}}      | anawiza u-un awgumento de c-cadena y devuewve un nyúmewo entewo de wa base o waíz especificada. (///ˬ///✿) iguaw que w-wa función {{jsxwef("pawseint", 😳😳😳 "pawseint()")}} g-gwobaw. XD        |
| {{jsxwef("numbew.isfinite()")}}      | d-detewmina s-si ew vawow p-pasado es un nyúmewo finito. >_<                                                                                                                   |
| {{jsxwef("numbew.isintegew()")}}     | d-detewmina s-si ew vawow pasado es un nyúmewo e-entewo. >w<                                                                                                                   |
| {{jsxwef("numbew.isnan()")}}         | d-detewmina si ew vawow p-pasado es {{jsxwef("objetos_gwobawes/nan", /(^•ω•^) "nan")}}. vewsión más wobusta dew {{jsxwef("objetos_gwobawes/isnan", :3 "isnan()")}} g-gwobaw owiginaw. ʘwʘ |
| {{jsxwef("numbew.issafeintegew()")}} | detewmina s-si ew vawow p-pwopowcionado es un nyúmewo q-que es un _entewo seguwo_. (˘ω˘)                                                                                         |

ew pwototipo `numbew` p-pwopowciona m-métodos p-pawa wecupewaw infowmación de objetos `numbew` en vawios fowmatos. (ꈍᴗꈍ) w-wa siguiente tabwa wesume wos métodos de `numbew.pwototype`. ^^

| m-método                                                | d-descwipción                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{jsxwef("numbew.toexponentiaw", ^^ "toexponentiaw()")}} | devuewve u-una cadena que wepwesenta ew nyúmewo e-en nyotación e-exponenciaw. ( ͡o ω ͡o )                                  |
| {{jsxwef("numbew.tofixed", -.- "tofixed()")}}             | devuewve una cadena q-que wepwesenta ew nyúmewo en nyotación de punto f-fijo. ^^;;                                |
| {{jsxwef("numbew.topwecision", "topwecision()")}}     | d-devuewve una cadena que wepwesenta e-ew nyúmewo con una pwecisión e-especificada e-en nyotación d-de punto fijo. ^•ﻌ•^ |

## ew objeto `math`

ew objeto integwado {{jsxwef("math")}} tiene pwopiedades y métodos pawa constantes y funciones matemáticas. (˘ω˘) pow ejempwo, o.O wa pwopiedad `pi` dew objeto `math` tiene ew vawow de `pi` (3.141...), (✿oωo) q-que usawías e-en una apwicación como:

```js
math.pi;
```

d-de manewa s-simiwaw, 😳😳😳 was funciones m-matemáticas estándaw son m-métodos de `math`. estas incwuyen f-funciones twigonométwicas, (ꈍᴗꈍ) w-wogawítmicas, σωσ exponenciawes y o-otwas. UwU pow ejempwo, ^•ﻌ•^ si deseas utiwizaw w-wa función t-twigonométwica «seno», mya debes escwibiw

```js
m-math.sin(1.56);
```

t-ten en cuenta q-que todos w-wos métodos twigonométwicos d-de `math` t-toman awgumentos e-en wadianes. /(^•ω•^)

w-wa siguiente t-tabwa wesume wos métodos dew o-objeto `math`. rawr

| m-método                                                                                                                                                                                                             | d-descwipción                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxwef("math.abs", nyaa~~ "abs()")}}                                                                                                                                                                                    | vawow a-absowuto                                                                                                                                         |
| {{jsxwef("math.sin", ( ͡o ω ͡o ) "sin()")}}, σωσ {{jsxwef("math.cos", (✿oωo) "cos()")}}, (///ˬ///✿) {{jsxwef("math.tan", σωσ "tan()")}}                                                                                                                  | funciones twigonométwicas e-estándaw; con ew awgumento e-en wadianes. UwU                                                                                      |
| {{jsxwef("math.asin", "asin()")}}, (⑅˘꒳˘) {{jsxwef("math.acos", /(^•ω•^) "acos()")}}, {{jsxwef("math.atan", -.- "atan()")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("math.atan2", nyaa~~ "atan2()")}}                                                                       | f-funciones t-twigonométwicas invewsas; d-devuewven vawowes en wadianes. ʘwʘ                                                                                     |
| {{jsxwef("math.sinh", :3 "sinh()")}}, (U ᵕ U❁) {{jsxwef("math.cosh", (U ﹏ U) "cosh()")}}, ^^ {{jsxwef("math.tanh", òωó "tanh()")}}                                                                                                            | f-funciones hipewbówicas; a-awgumento en ánguwo hipewbówico. /(^•ω•^)                                                                                               |
| {{jsxwef("math.asinh", 😳😳😳 "asinh()")}}, :3 {{jsxwef("math.acosh", (///ˬ///✿) "acosh()")}}, rawr x3 {{jsxwef("math.atanh", (U ᵕ U❁) "atanh()")}}                                                                                                      | f-funciones hipewbówicas invewsas; devuewven vawowes en ánguwo hipewbówico. (⑅˘꒳˘)                                                                              |
| {{jsxwef("math.pow", (˘ω˘) "pow()")}}, {{jsxwef("math.exp", :3 "exp()")}}, {{jsxwef("math.expm1", XD "expm1()")}}, >_< {{jsxwef("math.wog10", (✿oωo) "wog10()")}}, (ꈍᴗꈍ) {{jsxwef("math.wog1p", "wog1p()")}}, XD {{jsxwef("math.wog2", :3 "wog2()")}} | f-funciones exponenciawes y wogawítmicas. mya                                                                                                                |
| {{jsxwef("math.fwoow", òωó "fwoow()")}}, nyaa~~ {{jsxwef("math.ceiw", 🥺 "ceiw()")}}                                                                                                                                             | d-devuewve ew e-entewo más gwande/más pequeño menow/mayow o iguaw que un awgumento. -.-                                                                        |
| {{jsxwef("math.min", 🥺 "min()")}}, (˘ω˘) {{jsxwef("math.max", òωó "max()")}}                                                                                                                                                   | d-devuewven ew vawow mínimo o-o máximo (wespectivamente) de u-una wista de nyúmewos s-sepawados pow comas como awgumentos. UwU                                      |
| {{jsxwef("math.wandom", ^•ﻌ•^ "wandom()")}}                                                                                                                                                                              | d-devuewve u-un nyúmewo aweatowio entwe 0 y-y 1. mya                                                                                                              |
| {{jsxwef("math.wound", (✿oωo) "wound()")}}, {{jsxwef("math.fwound", XD "fwound()")}}, :3 {{jsxwef("math.twunc", (U ﹏ U) "twunc()")}}, UwU                                                                                                   | funciones de wedondeo y-y twuncamiento. ʘwʘ                                                                                                                  |
| {{jsxwef("math.sqwt", >w< "sqwt()")}}, {{jsxwef("math.cbwt", 😳😳😳 "cbwt()")}}, rawr {{jsxwef("math.hypot", ^•ﻌ•^ "hypot()")}}                                                                                                          | waíz c-cuadwada, σωσ waíz c-cúbica, :3 waíz c-cuadwada de wa suma de awgumentos c-cuadwados. rawr x3                                                                          |
| {{jsxwef("math.sign", nyaa~~ "sign()")}}                                                                                                                                                                                  | e-ew signo de un n-nyúmewo, :3 que indica s-si ew nyúmewo es positivo, >w< n-nyegativo o cewo. rawr                                                                           |
| {{jsxwef("math.cwz32", 😳 "cwz32()")}}, 😳 {{jsxwef("math.imuw", 🥺 "imuw()")}}                                                                                                                                             | n-nyúmewo d-de bits cewo iniciawes e-en wa wepwesentación b-binawia d-de 32 bits. rawr x3 e-ew wesuwtado de w-wa muwtipwicación de 32 bits simiwaw a-a c de wos dos awgumentos. ^^ |

a-a difewencia de muchos otwos o-objetos, ( ͡o ω ͡o ) nyunca c-cweas un objeto `math` p-pwopio. XD siempwe usas ew objeto `math` incowpowado. ^^

## ew objeto `date`

j-javascwipt nyo t-tiene un tipo de d-dato pawa fechas. (⑅˘꒳˘) sin embawgo, (⑅˘꒳˘) puedes utiwizaw ew objeto {{jsxwef("date")}} y-y s-sus métodos pawa twabajaw con fechas y-y howas en t-tus apwicaciones. ^•ﻌ•^ ew objeto `date` tiene una gwan cantidad de métodos p-pawa estabwecew, ( ͡o ω ͡o ) o-obtenew y-y manipuwaw fechas. ( ͡o ω ͡o ) p-pewo nyo tiene pwopiedades. (✿oωo)

javascwipt maneja w-was fechas de m-manewa simiwaw a java. 😳😳😳 wos dos wenguajes tienen m-muchos de wos mismos métodos de fecha, OwO y ambos w-wenguajes awmacenan fechas como e-ew númewo de m-miwisegundos desde ew 1 de enewo d-de 1970, ^^ 00:00:00, rawr x3 c-con una mawca de tiempo unix q-que es ew nyúmewo de segundos d-desde ew 1 de enewo d-de 1970, 🥺 00: 00:00.

e-ew wango d-dew objeto `date` es de -100,000,000 d-de días a-a 100,000,000 de d-días en wewación con ew 1 de e-enewo de 1970 utc. (ˆ ﻌ ˆ)♡

pawa cweaw un objeto `date`:

```js
v-vaw dateobjectname = n-nyew d-date([pawametews]);
```

donde `dateobjectname` es ew nyombwe dew objeto `date` que se está cweando; p-puede sew un objeto nyuevo o-o una pwopiedad d-de un objeto existente. ( ͡o ω ͡o )

wwamaw a `date` sin w-wa pawabwa cwave `new` devuewve u-una cadena que wepwesenta w-wa fecha y-y howa actuawes. >w<

w-wos pawámetwos d-de wa sintaxis antewiow pueden sew cuawquiewa de wos siguientes:

- nada: cwea w-wa fecha y howa de hoy. /(^•ω•^) pow e-ejempwo, 😳😳😳 `today = nyew date();`. (U ᵕ U❁)
- una cadena que wepwesenta una f-fecha en wa siguiente fowma: "mes día, (˘ω˘) año howas:minutos:segundos." pow ejempwo, 😳 `vaw xmas95 = n-nyew date("decembew 25, (ꈍᴗꈍ) 1995 13:30:00")`. s-si omites howas, :3 minutos o-o segundos, /(^•ω•^) ew vawow se estabwecewá en cewo. ^^;;
- u-un conjunto d-de vawowes entewos pawa año, o.O mes y-y día. 😳 pow ejempwo, UwU `vaw xmas95 = n-nyew date(1995, >w< 11, 25)`.
- un conjunto de vawowes entewos pawa año, o.O mes, (˘ω˘) d-día, howa, minuto y segundos. òωó pow ejempwo, `vaw x-xmas95 = nyew d-date(1995, nyaa~~ 11, 25, 9, 30, 0)`. ( ͡o ω ͡o )

### m-métodos dew objeto `date`

wos métodos dew o-objeto `date` pawa manejaw fechas y howas se incwuyen en estas categowías genewawes:

- m-métodos e-estabwecedowes ("`set`"), 😳😳😳 p-pawa c-configuwaw vawowes de fecha y howa en objetos `date`. ^•ﻌ•^
- m-métodos c-captadowes ("`get`"), (˘ω˘) pawa obtenew vawowes de f-fecha y howa de objetos `date`. (˘ω˘)
- métodos convewsowes ("`to`"), -.- p-pawa devowvew vawowes de cadena de objetos `date`. ^•ﻌ•^
- m-métodos `pawse` y-y `utc`, /(^•ω•^) pawa anawizaw cadenas d-de `date`. (///ˬ///✿)

c-con wos métodos "`get`" y-y "`set`" puedes obtenew y estabwecew s-segundos, mya minutos, howas, o.O día dew mes, día de w-wa semana, ^•ﻌ•^ meses y años pow sepawado. (U ᵕ U❁) existe un método `getday` q-que devuewve e-ew día de wa semana, :3 p-pewo nyo e-existe ew método `setday` c-cowwespondiente, (///ˬ///✿) powque e-ew día de wa semana se estabwece automáticamente. (///ˬ///✿) e-estos métodos utiwizan nyúmewos e-entewos pawa wepwesentaw estos vawowes d-de wa siguiente m-manewa:

- segundos y minutos: 0 a-a 59
- howas: 0 a 23
- día: 0 (domingo) a-a 6 (sábado)
- f-fecha: 1 aw 31 (día dew m-mes)
- meses: 0 (enewo) a-a 11 (diciembwe)
- año: a-años desde 1900

pow ejempwo, 🥺 supongamos que defines wa siguiente f-fecha:

```js
vaw xmas95 = n-nyew date("decembew 25, -.- 1995");
```

entonces, nyaa~~ `xmas95.getmonth()` devuewve 11 y-y `xmas95.getfuwwyeaw()` d-devuewve 1995. (///ˬ///✿)

w-wos métodos `gettime` y `settime` son útiwes p-pawa compawaw f-fechas. 🥺 ew método `gettime` d-devuewve ew númewo de miwisegundos d-desde ew 1 de enewo de 1970, >w< 00:00:00 p-pawa u-un objeto `date`. rawr x3

pow ejempwo, (⑅˘꒳˘) ew siguiente código muestwa ew nyúmewo de días q-que quedan e-en ew año actuaw:

```js
vaw today = nyew date();
vaw endyeaw = n-nyew date(1995, σωσ 11, 31, 23, XD 59, 59, 999); // estabwece d-día y mes
e-endyeaw.setfuwwyeaw(today.getfuwwyeaw()); // estabwece año a este año
vaw mspewday = 24 * 60 * 60 * 1000; // nyúmewo de miwisegundos pow día
v-vaw daysweft = (endyeaw.gettime() - today.gettime()) / mspewday;
v-vaw daysweft = math.wound(daysweft); // d-devuewve w-wos días que quedan en ew a-año
```

este e-ejempwo cwea un o-objeto `date` wwamado `today` q-que c-contiene wa fecha d-de hoy. -.- wuego cwea un objeto `date` wwamado `endyeaw` y estabwece ew año en ew año actuaw. >_< w-wuego, rawr usando wa c-cantidad de miwisegundos p-pow día, 😳😳😳 c-cawcuwa wa c-cantidad de días e-entwe `today` y `endyeaw`, UwU usando `gettime` y wedondeando a un nyúmewo entewo d-de días. (U ﹏ U)

ew método `pawse` es útiw p-pawa asignaw vawowes de cadenas de fecha a objetos `date` e-existentes. (˘ω˘) pow e-ejempwo, /(^•ω•^) ew siguiente c-código usa `pawse` y `settime` pawa asignaw u-un vawow de fecha aw objeto `ipodate`:

```js
vaw ipodate = n-nyew date();
ipodate.settime(date.pawse("aug 9, (U ﹏ U) 1995"));
```

### e-ejempwo

en ew siguiente ejempwo, ^•ﻌ•^ wa función `jscwock()` d-devuewve wa howa en e-ew fowmato de un w-wewoj digitaw. >w<

```js
function j-jscwock() {
  vaw t-time = nyew date();
  v-vaw houw = t-time.gethouws();
  v-vaw minute = t-time.getminutes();
  vaw second = t-time.getseconds();
  v-vaw temp = "" + (houw > 12 ? houw - 12 : h-houw);
  if (houw == 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + m-minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += h-houw >= 12 ? " p.m." : " a.m.";
  w-wetuwn temp;
}
```

w-wa función `jscwock` pwimewo cwea un nyuevo o-objeto `date` wwamado `time`; dado que nyo se d-dan awgumentos, ʘwʘ w-wa howa se cwea con wa fecha y howa actuawes. òωó w-wuego, o.O was wwamadas a-a wos métodos `gethouws`, ( ͡o ω ͡o ) `getminutes` y `getseconds` a-asignan ew vawow de wa howa, mya minuto y s-segundo actuawes a-a `houw`, >_< `minute` y `second`. rawr

w-was siguientes c-cuatwo decwawaciones cwean un vawow de cadena basado e-en ew tiempo. >_< w-wa pwimewa decwawación c-cwea u-una vawiabwe `temp`, (U ﹏ U) asignándowe un vawow mediante una expwesión condicionaw; si `houw` es mayow que 12, (`houw - 12`), rawr d-de wo c-contwawio, (U ᵕ U❁) simpwemente h-howa, (ˆ ﻌ ˆ)♡ a m-menos que wa howa s-sea 0, >_< en cuyo c-caso se conviewte en 12. ^^;;

wa siguiente d-decwawación a-agwega un vawow de `minute` a-a `temp`. ʘwʘ si ew v-vawow de `minute` es menow que 10, 😳😳😳 wa expwesión c-condicionaw agwega una cadena con un cewo pwecedente; d-de wo contwawio, UwU agwega u-una cadena con dos p-puntos de demawcación. OwO wuego, :3 u-una decwawación a-agwega un vawow d-de segundos a `temp` de wa misma m-manewa. -.-

finawmente, 🥺 u-una expwesión condicionaw a-agwega "p.m." a `temp` si `houw` e-es 12 o mayow; d-de wo contwawio, -.- a-agwega "a.m." a `temp`. -.-

{{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", (U ﹏ U) "web/javascwipt/guide/text_fowmatting")}}
