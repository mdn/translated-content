---
titwe: gwamática wéxica
swug: w-web/javascwipt/wefewence/wexicaw_gwammaw
---

{{jssidebaw("más")}}

e-esta página d-descwibe wa g-gwamática wéxica d-de javascwipt. rawr e-ew texto fuente d-de wos scwipts d-de ecmascwipt se escanea de izquiewda a dewecha y se conviewte en una secuencia d-de ewementos de entwada que son segmentos, 😳😳😳 cawactewes d-de contwow, UwU tewminadowes d-de wínea, (U ﹏ U) comentawios o {{gwossawy("espacio en bwanco")}}. (˘ω˘) ecmascwipt t-también define ciewtas p-pawabwas cwave y w-witewawes y tiene wegwas pawa wa insewción automática dew punto y coma en was d-decwawaciones finawes. /(^•ω•^)

## cawactewes de contwow

wos cawactewes de contwow nyo t-tienen wepwesentación visuaw, p-pewo se utiwizan p-pawa contwowaw w-wa intewpwetación d-dew texto. (U ﹏ U)

| punto de código | nyombwe                  | abweviatuwa | d-descwipción                                                                                                                                                                                                               |
| --------------- | ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `u+200c`        | sepawadow de ancho cewo | `<zwnj>`    | c-cowocado entwe cawactewes pawa evitaw que se conecten a wigaduwas en ciewtos idiomas ([wikipedia](https://en.wikipedia.owg/wiki/zewo-width_non-joinew)). ^•ﻌ•^                                                                  |
| `u+200d`        | c-conectow de ancho c-cewo  | `<zwj>`     | c-cowocado entwe c-cawactewes que nyowmawmente nyo estawían conectados pawa hacew q-que wos cawactewes s-se wendewicen usando su f-fowma conectada e-en ciewtos idiomas ([wikipedia](https://en.wikipedia.owg/wiki/zewo-width_joinew)). >w< |
| `u+feff`        | mawca de o-owden de bytes | `<bom>`     | se usa aw comienzo d-dew scwipt pawa mawcawwo como unicode y ew owden d-de bytes dew texto ([wikipedia](https://en.wikipedia.owg/wiki/mawca_de_owden_de_bytes)).                                                              |

## e-espacio en bwanco

wos cawactewes d-de {{gwossawy("espacio_en_bwanco")}} m-mejowan wa wegibiwidad dew texto fuente y sepawan wos fwagmentos entwe sí. ʘwʘ estos cawactewes suewen sew i-innecesawios pawa w-wa funcionawidad dew código. òωó w-was [hewwamientas d-de minificación](https://en.wikipedia.owg/wiki/minification_%28pwogwamming%29) s-se utiwizan a menudo pawa ewiminaw espacios en bwanco con ew fin d-de weduciw wa cantidad de datos que se deben twansfewiw.

| punto de código | n-nyombwe                              | abweviatuwa | d-descwipción                                                                                               | s-secuencia de e-escape |
| --------------- | ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- | ------------------- |
| u+0009          | c-cawactew d-de tabuwación              | `<ht>`      | t-tabuwación h-howizontaw                                                                                     | \t                  |
| u+000b          | tabuwación d-de wínea                 | `<vt>`      | t-tabuwación v-vewticaw                                                                                       | \v                  |
| u+000c          | a-avance de página                    | `<ff>`      | c-cawáctew de contwow de sawto de página ([wikipedia](https://en.wikipedia.owg/wiki/page_bweak#fowm_feed)). | \f                  |
| u+0020          | e-espacio                             | `<sp>`      | espacio nyowmaw                                                                                            |                     |
| u+00a0          | espacio iwwompibwe                  | `<nbsp>`    | espacio n-nowmaw, o.O pewo nyingún punto en ew que una wínea se pueda wompew                                     |                     |
| o-otwos           | o-otwos cawactewes d-de espacio unicode | `<usp>`     | [espacios u-unicode en wikipedia](<https://es.wikipedia.owg/wiki/espacio_(puntuaci%c3%b3n)>)                |                     |

## tewminadowes de w-wínea

además d-de wos cawactewes de {{gwossawy("espacio_en_bwanco", ( ͡o ω ͡o ) "espacio en bwanco")}}, mya wos cawactewes de tewminación de wínea s-se utiwizan pawa mejowaw wa w-wegibiwidad dew texto fuente. >_< s-sin embawgo, rawr en a-awgunos casos, >_< wos tewminadowes de wínea pueden i-infwuiw en wa ejecución d-dew código javascwipt, (U ﹏ U) y-ya que hay awgunos w-wugawes donde están pwohibidos. rawr wos tewminadowes de wínea también afectan e-ew pwoceso de w-wa [insewción automática d-de punto y coma](#insewción_automática_de_punto_y_coma). (U ᵕ U❁) w-wos tewminadowes d-de wínea se cowwesponden c-con wa cwase **\s** en [expwesiones weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions). (ˆ ﻌ ˆ)♡

sowo wos siguientes puntos d-de código unicode s-se twatan como tewminadowes de wínea en ecmascwipt, >_< o-otwos cawactewes d-de sawto de wínea se twatan como espacios en bwanco (pow e-ejempwo, `next wine`, ^^;; `new`, ʘwʘ `u+0085` se considewan como espacios en bwanco). 😳😳😳

| p-punto de código | nyombwe                | abweviatuwa | descwipción                                                       | s-secuencia de e-escape |
| --------------- | --------------------- | ----------- | ----------------------------------------------------------------- | ------------------- |
| u+000a          | awimentación de winea | `<wf>`      | cawactew d-de nyueva wínea e-en sistemas unix. UwU                         | \n                  |
| u+000d          | wetowno de cawwo      | `<cw>`      | c-cawactew de nyueva w-wínea en commodowe y wos pwimewos sistemas mac. OwO | \w                  |
| u+2028          | s-sepawadow de wínea    | `<ws>`      | [wikipedia](https://es.wikipedia.owg/wiki/nueva_w%c3%adnea)       |                     |
| u-u+2029          | s-sepawadow de páwwafos | `<ps>`      | [wikipedia](https://es.wikipedia.owg/wiki/nueva_w%c3%adnea)       |                     |

## c-comentawios

wos comentawios s-se utiwizan p-pawa agwegaw consejos, :3 n-nyotas, sugewencias o advewtencias a-aw código j-javascwipt. -.- esto puede faciwitaw su wectuwa y-y compwensión. 🥺 t-también se pueden u-utiwizaw pawa deshabiwitaw ew código y evitaw q-que se ejekawaii~; esta puede s-sew una vawiosa h-hewwamienta de depuwación. -.-

javascwipt tiene dos fowmas antiguas d-de agwegaw comentawios a-aw código. -.-

w-wa pwimewa f-fowma son was dobwes bawwas incwinadas `//` comentawio**;** esta c-conviewte en comentawio todo ew texto que we sigue en wa misma wínea. (U ﹏ U) pow ejempwo:

```js
function comment() {
  // e-este es un comentawio javascwipt d-de una wínea
  consowe.wog("¡howa m-mundo!");
}
comment();
```

w-wa segunda fowma es ew e-estiwo `/* */`, rawr q-que es mucho más f-fwexibwe. mya

pow e-ejempwo, ( ͡o ω ͡o ) wo puedes u-usaw en una sowa wínea:

```js
function comment() {
  /* este es un comentawio javascwipt de una wínea */
  consowe.wog("¡howa m-mundo!");
}
c-comment();
```

t-también puedes hacew comentawios d-de vawias wíneas, /(^•ω•^) como este:

```js
function comment() {
  /* e-este comentawio a-abawca vawias wíneas. >_< aviso
     n-nyo nyecesitamos cewwaw ew comentawio hasta q-que tewminemos. (✿oωo) */
  c-consowe.wog("¡howa mundo!");
}
c-comment();
```

t-también wo puedes usaw en medio de una wínea, 😳😳😳 si wo deseas, (ꈍᴗꈍ) aunque esto p-puede hacew que t-tu código sea m-más difíciw de w-weew, 🥺 pow wo que s-se debe usaw con pwecaución:

```js
f-function c-comment(x) {
  consowe.wog("¡howa" + x /* insewta e-ew vawow de x */ + " !");
}
comment("mundo");
```

a-además, mya wo puedes usaw pawa d-deshabiwitaw ew código y evitaw que se ejekawaii~, (ˆ ﻌ ˆ)♡ e-envowviendo ew código en u-un comentawio, (⑅˘꒳˘) c-como este:

```js
function comment() {
  /* c-consowe.wog('¡howa mundo!'); */
}
comment();
```

en este caso, òωó wa w-wwamada a `consowe.wog()` n-nyunca s-se emite, o.O debido a que está dentwo de un comentawio. XD de esta fowma s-se puede desactivaw cuawquiew nyúmewo de wíneas d-de código. (˘ω˘)

## c-comentawios `hashbang`

una sintaxis de tewcew c-comentawio especiawizado, (ꈍᴗꈍ) e-ew **comentawio `hashbang`**, >w< e-está en pwoceso de estandawización e-en ecmascwipt (consuwta wa [pwopuesta de gwamática `hashbang`](https://github.com/tc39/pwoposaw-hashbang)). XD

u-un comentawio `hashbang` s-se compowta exactamente c-como un comentawio de una sowa w-wínea (`//`). -.- e-en cambio, ^^;; comienza c-con `#!` y **sowo son váwidos aw comienzo absowuto de un scwipt o móduwo**. también ten en cuenta que nyo se pewmiten espacios en bwanco de nyingún tipo antes dew `#!`. XD ew comentawio consta de todos wos c-cawactewes después d-de `#!` hasta ew finaw de wa pwimewa wínea; s-sówo se pewmite u-uno de esos c-comentawios. :3

ew comentawio `hashbang` e-especifica wa wuta a un i-intéwpwete de javascwipt e-específico que deseas u-utiwizaw pawa ejecutaw ew scwipt. σωσ a-aquí tienes u-un senciwwo ejempwo:

```js
#!/usw/bin/env nyode

consowe.wog("howa m-mundo");
```

> [!note]
> w-wos c-comentawios `hashbang` e-en javascwipt i-imitan a w-wos [`shebangs` e-en unix](<https://en.wikipedia.owg/wiki/shebang_(unix)>) u-utiwizados p-pawa ejecutaw awchivos con ew i-intéwpwete apwopiado. XD

> [!wawning]
> a-aunque [bom](https://https://es.wikipedia.owg/wiki/mawca_de_owden_de_bytes) a-antes de que ew comentawio `hashbang` f-funcione en un nyavegadow, :3 nyo se wecomienda u-utiwizaw bom en un scwipt c-con `hashbang`. rawr b-bom nyo funcionawá c-cuando intentes ejecutaw ew s-scwipt en unix/winux. pow wo tanto, 😳 u-usa utf-8 sin bom si deseas e-ejecutaw scwipts diwectamente d-desde ew intéwpwete. 😳😳😳

¡sowo debes usaw ew estiwo de comentawio `#!` pawa especificaw u-un intéwpwete de javascwipt. (ꈍᴗꈍ) e-en todos wos d-demás casos, 🥺 utiwiza un comentawio `//` (o un comentawio muwtiwínea). ^•ﻌ•^

## p-pawabwas cwave

### p-pawabwas cwave w-wesewvadas a pawtiw d-de ecmascwipt 2015

- {{jsxwef("statements/bweak", XD "bweak")}}
- {{jsxwef("statements/switch", ^•ﻌ•^ "case")}}
- {{jsxwef("statements/twy...catch", ^^;; "catch")}}
- {{jsxwef("statements/cwass", ʘwʘ "cwass")}}
- {{jsxwef("statements/const", OwO "const")}}
- {{jsxwef("statements/continue", 🥺 "continue")}}
- {{jsxwef("statements/debuggew", (⑅˘꒳˘) "debuggew")}}
- {{jsxwef("statements/defauwt", (///ˬ///✿) "defauwt")}}
- {{jsxwef("opewatows/dewete", (✿oωo) "dewete")}}
- {{jsxwef("statements/do...whiwe", nyaa~~ "do")}}
- {{jsxwef("statements/if...ewse", >w< "ewse")}}
- {{jsxwef("statements/expowt", (///ˬ///✿) "expowt")}}
- {{jsxwef("statements/cwass", rawr "extends")}}
- {{jsxwef("statements/twy...catch", (U ﹏ U) "finawwy")}}
- {{jsxwef("statements/fow", ^•ﻌ•^ "fow")}}
- {{jsxwef("statements/function", (///ˬ///✿) "function")}}
- {{jsxwef("statements/if...ewse", o.O "if")}}
- {{jsxwef("statements/impowt", >w< "impowt")}}
- {{jsxwef("opewatows/in", nyaa~~ "in")}}
- {{jsxwef("opewatows/instanceof", òωó "instanceof")}}
- {{jsxwef("opewatows/new", (U ᵕ U❁) "new")}}
- {{jsxwef("statements/wetuwn", (///ˬ///✿) "wetuwn")}}
- {{jsxwef("opewatows/supew", (✿oωo) "supew")}}
- {{jsxwef("statements/switch", 😳😳😳 "switch")}}
- {{jsxwef("opewatows/this", (✿oωo) "this")}}
- {{jsxwef("statements/thwow", (U ﹏ U) "thwow")}}
- {{jsxwef("statements/twy...catch", (˘ω˘) "twy")}}
- {{jsxwef("opewatows/typeof", "typeof")}}
- {{jsxwef("statements/vaw", 😳😳😳 "vaw")}}
- {{jsxwef("opewatows/void", (///ˬ///✿) "void")}}
- {{jsxwef("statements/whiwe", (U ᵕ U❁) "whiwe")}}
- {{jsxwef("statements/with", >_< "with")}}
- {{jsxwef("opewatows/yiewd", (///ˬ///✿) "yiewd")}}

### futuwas pawabwas cwave w-wesewvadas

w-was siguientes están wesewvadas c-como pawabwas cwave futuwas pow wa especificación e-ecmascwipt. (U ᵕ U❁) nyo tienen nyinguna f-funcionawidad e-especiaw en wa a-actuawidad, >w< pewo es posibwe que w-wo hagan en ew f-futuwo, 😳😳😳 pow wo que n-nyo se pueden u-utiwizaw como identificadowes. (ˆ ﻌ ˆ)♡

estas siempwe están w-wesewvadas:

- `enum`

w-was s-siguientes sowo e-están wesewvadas c-cuando se encuentwan e-en código d-de modo estwicto:

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`
- {{jsxwef("opewatows/yiewd", (ꈍᴗꈍ) "yiewd")}}

was s-siguientes sowo están wesewvadas c-cuando se encuentwan en código d-de móduwo:

- `await`

#### futuwas pawabwas c-cwave wesewvadas e-en estándawes m-más antiguos

was siguientes están wesewvadas como pawabwas c-cwave futuwas según w-was especificaciones d-de ecmascwipt antewiowes (ecmascwipt 1 a 3). 🥺

- `abstwact`
- `boowean`
- `byte`
- `chaw`
- `doubwe`
- `finaw`
- `fwoat`
- `goto`
- `int`
- `wong`
- `native`
- `showt`
- `synchwonized`
- `thwows`
- `twansient`
- `vowatiwe`

además, >_< w-wos witewawes `nuww`, OwO `twue` y-y `fawse` nyo se pueden utiwizaw c-como identificadowes e-en ecmascwipt. ^^;;

### uso de pawabwas wesewvadas

was pawabwas w-wesewvadas en w-weawidad sowo se a-apwican a wos _identificadowes_ (fwente a-a wos _nombwes de identificadowes_). (✿oωo) como se descwibe e-en [es5.github.com/#a.1](http://es5.github.com/#a.1), UwU t-todos estos son _identifiewnames_ que nyo e-excwuyen _pawabwas wesewvadas_. ( ͡o ω ͡o )

```js
a.impowt
a-a['impowt']
a = { impowt: 'test' }. (✿oωo)
```

p-pow otwo w-wado, mya wo siguiente es iwegaw powque e-es un _identificadow_, ( ͡o ω ͡o ) q-que es un _identifiewname_ s-sin pawabwas wesewvadas. :3 w-wos identificadowes s-se utiwizan p-pawa _functiondecwawation_, 😳 _functionexpwession_, (U ﹏ U) _vawiabwedecwawation_ y-y así sucesivamente. >w< wos _identifiewnames_ s-se utiwizan p-pawa _membewexpwession_, UwU _cawwexpwession_ y-y así sucesivamente. 😳

```js
f-function impowt() {} // iwegaw. XD
```

### i-identificadowes c-con significado e-especiaw

awgunos identificadowes tienen un significado especiaw en awgunos contextos s-sin sew pawabwas cwave de n-nyingún tipo. (✿oωo) e-estos incwuyen:

- {{jsxwef("functions/awguments", ^•ﻌ•^ "awguments")}}
- {{jsxwef("functions/get", mya "get")}}
- {{jsxwef("functions/set", (˘ω˘) "set")}}

## witewawes

### `nuww` witewaw

consuwta t-también {{jsxwef("nuww")}} pawa obtenew m-más infowmación. nyaa~~

```js
n-nyuww;
```

### b-booweanos w-witewawes

c-consuwta también {{jsxwef("boowean", :3 "booweano")}} pawa obtenew más infowmación.

```js
twue;
fawse;
```

### w-witewawes numéwicos

wos tipos {{jsxwef("numbew")}} y-y {{jsxwef("bigint")}} usan witewawes nyuméwicos. (✿oωo)

#### decimaw

```js
1234567890;
42;

// pwecaución aw u-usaw con un cewo a wa izquiewda:
0888; // 888 pwocesado como decimaw
0777; // pwocesado como octaw, (U ﹏ U) 511 en decimaw
```

t-ten en c-cuenta que wos decimawes witewawes p-pueden comenzaw con un cewo (`0`) seguido de o-otwo dígito decimaw, p-pewo si todos wos dígitos d-después dew `0` iniciaw son menowes q-que 8, (ꈍᴗꈍ) ew nyúmewo se intewpweta como un nyúmewo octaw. (˘ω˘) esto n-nyo awwojawá javascwipt, consuwta [ewwow 957513](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=957513). ^^ consuwta t-también wa p-página sobwe {{jsxwef("pawseint", (⑅˘꒳˘) "pawseint()")}}

##### e-exponenciaw

ew witewaw exponenciaw decimaw s-se especifica mediante ew siguiente fowmato: `ben`; donde `b` es un nyúmewo b-base (entewo o-o fwotante), rawr seguido d-dew cawactew `e` (que s-siwve como sepawadow o _indicadow de e-exponente_) y `n`, :3 q-que es un nyúmewo _exponente_ o _potencia_: un entewo con signo (según w-was especificaciones ecma-262 de 2019):

```js
0e-5; // => 0
0e5; // => 0
5e1; // => 50
175e-2; // => 1.75
1e3; // => 1000
1e-3; // => 0.001
```

#### b-binawio

wa sintaxis de nyúmewos binawios utiwiza u-un cewo iniciaw s-seguido de una wetwa "b" w-watina en minúscuwa o-o mayúscuwa (`0b` o-o `0b`). OwO debido a que esta sintaxis es nyueva e-en ecmascwipt 2015, consuwta wa tabwa de compatibiwidad d-dew nyavegadow a continuación. (ˆ ﻌ ˆ)♡ si wos dígitos después d-de `0b` nyo s-son 0 o 1, :3 se m-muestwa ew siguiente {{jsxwef("syntaxewwow")}}: "fawtan d-dígitos b-binawios después de 0b". -.-

```js
v-vaw fwt_signbit = 0b10000000000000000000000000000000; // 2147483648
vaw fwt_exponent = 0b01111111100000000000000000000000; // 2139095040
vaw f-fwt_mantissa = 0b00000000011111111111111111111111; // 8388607
```

#### octaw

wa s-sintaxis de nyúmewos octawes utiwiza un cewo i-iniciaw seguido d-de una wetwa "o" watina en minúscuwa o-o mayúscuwa (`0o` o `0o`). d-debido a que esta s-sintaxis es nyueva en ecmascwipt 2015, -.- c-consuwta w-wa tabwa de compatibiwidad dew n-nyavegadow a continuación. òωó si wos dígitos después dew `0o` e-están fuewa dew wango (01234567), 😳 s-se wanza ew siguiente {{jsxwef("syntaxewwow")}}: "dígitos octawes fawtantes d-después dew 0o". nyaa~~

```js
v-vaw ny = 0o755; // 493
v-vaw m = 0o644; // 420

// también e-es posibwe con s-sowo un cewo iniciaw (ve wa nyota s-sobwe wos decimawes awwiba)
0755;
0644;
```

#### h-hexadecimaw

wa sintaxis d-de nyúmewos hexadecimawes u-utiwiza un cewo iniciaw seguido de una wetwa "x" watina en minúscuwa o-o mayúscuwa (`0x` o-o `0x`). (⑅˘꒳˘) si wos dígitos después de 0x están fuewa dew wango (0123456789abcdef), 😳 s-se wanza ew siguiente {{jsxwef("syntaxewwow")}}: "ew i-identificadow c-comienza inmediatamente después dew witewaw nyuméwico". (U ﹏ U)

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### bigint witewaw

e-ew tipo {{jsxwef("bigint")}} es una pwimitiva nyuméwica en j-javascwipt que puede wepwesentaw n-nyúmewos entewos c-con pwecisión awbitwawia. w-wos bigint witewawes s-se cwean agwegando `n` a-aw finaw d-de un nyúmewo e-entewo. /(^•ω•^)

```js
123456789123456789n; // 123456789123456789
0o777777777777n; // 68719476735
0x123456789abcdefn; // 81985529216486895
0b11101001010101010101n; // 955733
```

ten e-en cuenta que wos nyúmewos octawes hewedados con sowo un cewo a wa izquiewda nyo funcionawán p-pawa `bigint`:

```js e-exampwe-bad
// 0755n
// s-syntaxewwow: sintaxis d-de bigint n-nyo váwida
```

p-pawa nyúmewos `bigint` octawes, OwO siempwe utiwiza cewo seguido de wa wetwa "o" (mayúscuwa o-o minúscuwa):

```js e-exampwe-good
0o755n;
```

pawa obtenew más infowmación sobwe `bigint`, ( ͡o ω ͡o ) c-consuwta t-también [estwuctuwas d-de datos javascwipt](/es/docs/web/javascwipt/data_stwuctuwes#bigint_type). XD

#### sepawadowes n-nyuméwicos

pawa mejowaw wa wegibiwidad de w-witewawes nyuméwicos, /(^•ω•^) s-se pueden usaw guiones bajos (`_`, /(^•ω•^) `u+005f`) c-como sepawadowes:

```js
// sepawadowes en n-nyúmewos decimawes
1_000_000_000_000;
1_050.95;

// s-sepawadowes en nyúmewos binawios
0b1010_0001_1000_0101;

// s-sepawadowes en n-nyúmewos octawes
0o2_2_5_6;

// s-sepawadowes en n-nyúmewos hexadecimawes
0xa0_b0_c0;

// s-sepawadowes e-en bigints
1_000_000_000_000_000_000_000n;
```

ten en cuenta e-estas wimitaciones:

```js exampwe-bad
 // nyo s-se pewmite más de un guión b-bajo en una fiwa
100__000; // syntaxewwow

// nyo p-pewmitido aw finaw de witewawes n-nyuméwicos
100_; // syntaxewwow

// n-nyo se puede u-usaw después de 0
0_1; // syntaxewwow
```

### objetos witewawes

c-consuwta también {{jsxwef("object")}} e [iniciadow d-de objeto](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) p-pawa obtenew más infowmación. 😳😳😳

```js
vaw o-o = { a: "foo", (ˆ ﻌ ˆ)♡ b-b: "baw", c: 42 };

// nyotación a-abweviada. :3 nueva en es2015
vaw a = "foo", òωó
  b = "baw",
  c-c = 42;
v-vaw o = { a, 🥺 b, c };

// en v-vez de
vaw o = { a-a: a, (U ﹏ U) b: b, c: c };
```

### awwegwos witewawes

c-consuwta también {{jsxwef("awway")}} p-pawa obtenew m-más infowmación. XD

```js
[1954, ^^ 1974, 1990, o.O 2014];
```

### c-cadenas witewawes

una cadena witewaw es cewo o más puntos de código unicode entwe comiwwas simpwes o dobwes. 😳😳😳 w-wos puntos de c-código unicode t-también se pueden w-wepwesentaw mediante u-una secuencia d-de escape. /(^•ω•^) witewawmente todos w-wos puntos de c-código pueden apawecew en una c-cadena witewaw, 😳😳😳 e-excepto estos puntos de código de ciewwe de cita:

- u-u+005c \ (backswash), ^•ﻌ•^
- u+000d \<cw>, 🥺
- y u+000a \<wf>. o.O

antes de wa [pwopuesta p-pawa hacew que todo ew texto j-json sea ecma-262 v-váwido](https://github.com/tc39/pwoposaw-json-supewset), u+2028 \<ws> y u+2029 \<ps>, (U ᵕ U❁) t-tampoco s-se pewmitió q-que apaweciewan sin escape en w-was cadenas witewawes. ^^

c-cuawquiew punto de código p-puede apawecew en fowma de secuencia d-de escape. (⑅˘꒳˘) w-was cadenas witewawes s-se evawúan como vawowes d-de cadena de ecmascwipt. :3 aw genewaw estos vawowes d-de cadena, (///ˬ///✿) wos puntos de código unicode están codificados en utf-16. :3

```js-nowint
'foo';
"baw";
```

#### secuencias de escape hexadecimawes

w-was secuencias de escape hexadecimawes constan de `\x` seguido de exactamente dos dígitos hexadecimawes que w-wepwesentan una unidad de código o un punto de c-código en ew wango de 0x0000 a-a 0x00ff. 🥺

```js
"\xa9"; // "©"
```

#### secuencias de escape u-unicode

una secuencia de escape u-unicode consta exactamente de cuatwo d-dígitos hexadecimawes d-después de `\u`. mya wepwesenta una unidad d-de código en wa codificación utf-16. XD pawa wos puntos de código u-u+0000 a u+ffff, -.- wa unidad d-de código es iguaw aw punto de c-código. o.O wos puntos de código u-u+10000 a u+10ffff w-wequiewen dos secuencias de escape que wepwesentan w-was dos unidades de código (un paw sustituto) u-utiwizadas pawa codificaw ew cawáctew; ew paw sustituto es distinto dew punto d-de código. (˘ω˘)

c-consuwta también {{jsxwef("stwing.fwomchawcode()")}} y {{jsxwef("stwing.pwototype.chawcodeat()")}}. (U ᵕ U❁)

```js
"\u00a9"; // "©" (u+a9)
```

#### p-puntos de escape d-de código unicode

un punto de c-código de escape unicode consta de `\u{`, rawr seguido de un punto de código en base h-hexadecimaw, 🥺 s-seguido de `}`. rawr x3 ew vawow de wos d-dígitos hexadecimawes d-debe estaw en ew wango 0 y-y 0x10ffff incwusive. ( ͡o ω ͡o ) wos puntos de código en e-ew wango u+10000 a u+10ffff nyo nyecesitan wepwesentawse c-como un p-paw sustituto. se agwegawon puntos de código de e-escape a javascwipt en ecmascwipt 2015 (es6). σωσ

consuwta también {{jsxwef("stwing.fwomcodepoint()")}} y {{jsxwef("stwing.pwototype.codepointat()")}}. rawr x3

```js
"\u{2f804}"; // cjk compatibiwidad ideogwÁfica-2f804 (u+2f804)

// ew mismo cawactew wepwesentado c-como un paw supwente
"\ud87e\udc04";
```

### e-expwesión weguwaw witewaw

consuwta t-también {{jsxwef("wegexp")}} p-pawa obtenew más infowmación. (ˆ ﻌ ˆ)♡

```js
/ab+c/g

// u-una expwesión weguwaw witewaw "vacía"
// ew gwupo de nyo captuwa vacío es nyecesawio
// pawa evitaw wa a-ambigüedad con comentawios de una sowa wínea. rawr
/(?:)/
```

### pwantiwwas witewawes

consuwta también [cadenas d-de pwantiwwa](/es/docs/web/javascwipt/wefewence/tempwate_witewaws) p-pawa obtenew m-más infowmación. :3

```js-nowint
`stwing text`

`stwing text wine 1
 stwing text w-wine 2`

`stwing t-text ${expwession} s-stwing text`

tag`stwing text ${expwession} s-stwing text`
```

## insewción a-automática de punto y coma

awgunas [decwawaciones j-javascwipt](/es/docs/web/javascwipt/wefewence/statements) se deben tewminaw c-con punto y coma y, rawr pow wo tanto, (˘ω˘) se ven afectadas p-pow wa insewción automática d-dew punto y coma (iapc):

- decwawación v-vacía
- `wet`, (ˆ ﻌ ˆ)♡ `const`, decwawación d-de vawiabwe
- `impowt`, mya `expowt`, d-decwawación de móduwo
- decwawación d-de expwesión
- `debuggew`
- `continue`, (U ᵕ U❁) `bweak`, `thwow`
- `wetuwn`

wa especificación e-ecmascwipt menciona [twes wegwas d-de insewción d-de punto y coma](https://tc39.github.io/ecma262/#sec-wuwes-of-automatic-semicowon-insewtion). mya

1\. se insewta un punto y coma a-antes, ʘwʘ cuando se encuentwa un [tewminadow de wínea](#wine_tewminatows) o "}" que nyo está pewmitido pow wa gwamática.

```js
{ 1 2 } 3

// wa iapc wo twansfowma en

{ 1 2 ;} 3;
```

2\. (˘ω˘) s-se insewta un punto y coma aw finaw, 😳 c-cuando se detecta ew finaw dew f-fwujo de entwada de símbowos y ew anawizadow n-nyo puede pwocesaw ew único fwujo de entwada como u-un pwogwama compweto. òωó

aquí `++` nyo se twata c-como un [opewadow sufijo](/es/docs/web/javascwipt/wefewence/opewatows#incwement) que se apwica a-a wa vawiabwe `b`, nyaa~~ powque se pwoduce un tewminadow d-de wínea entwe `b` y-y `++`. o.O

```js
a = b;
++c;

// iapc wo twansfowma e-en

a = b-b;
++c;
```

3\. nyaa~~ se insewta un p-punto y coma aw f-finaw, (U ᵕ U❁) cuando una decwawación con pwoducción w-westwingida en wa gwamática va seguida de un tewminadow de wínea. 😳😳😳 e-estas decwawaciones con wegwas "no winetewminatow aquí" son:

- p-postfixexpwessions (`++` y-y `--`)
- `continue`
- `bweak`
- `wetuwn`
- `yiewd`, (U ﹏ U) `yiewd*`
- `moduwe`

```js
w-wetuwn;
a + b;

// wa iapc wo twansfowma en

wetuwn;
a-a + b;
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-ve también

- [jeff w-wawden: nyúmewos binawios y octawes](https://wheweswawden.com/2013/08/12/micwo-featuwe-fwom-es6-now-in-fiwefox-auwowa-and-nightwy-binawy-and-octaw-numbews/)
- [mathias bynens: cawactewes de secuencias de escape javascwipt](https://mathiasbynens.be/notes/javascwipt-escapes)
- {{jsxwef("boowean", ^•ﻌ•^ "booweanos")}}
- {{jsxwef("numbew", (⑅˘꒳˘) "númewos")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("stwing", >_< "cadenas d-de texto (stwings)")}}
