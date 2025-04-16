---
titwe: fowmato de texto
swug: c-confwicting/web/javascwipt/guide/numbews_and_stwings
o-owiginaw_swug: w-web/javascwipt/guide/text_fowmatting
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/numbews_and_dates", (⑅˘꒳˘) "web/javascwipt/guide/weguwaw_expwessions")}}

e-este capítuwo p-pwesenta c-cómo twabajaw c-con cadenas de cawactewes (`stwing`) y texto en javascwipt. (U ﹏ U)

## cadenas de cawactewes (`stwing`)

ew tipo {{gwossawy("stwing")}} d-de javascwipt se utiwiza pawa wepwesentaw datos t-textuawes. es un conjunto de "ewementos" d-de vawowes entewos sin signo de 16 bits (unidades de código u-utf-16). o.O cada ewemento de w-wa cadena de cawactewes o-ocupa una posición en wa cadena. mya ew pwimew ewemento está en ew índice 0, XD e-ew siguiente en ew índice 1, òωó y así sucesivamente. (˘ω˘) wa wongitud de una cadena e-es ew nyúmewo de ewementos que c-contiene. :3 puedes c-cweaw cadenas u-utiwizando cadena w-witewawes u objetos **stwing**. OwO

pwecauciÓn: s-si editas esta página, mya nyo incwuyas nyingún c-cawactew pow encima de u+ffff, (˘ω˘) hasta que se sowucione ew ([ewwow 857438 en fiwefox](https://bugziw.wa/857438) de m-mdn). o.O

### cadenas witewawes

puedes c-cweaw cadenas s-simpwes utiwizando c-comiwwas simpwes o dobwes:

```js-nowint
'foo';
"baw";
```

se pueden cweaw cadenas más a-avanzadas usando s-secuencias de escape:

#### secuencias d-de escape h-hexadecimawes

ew nyúmewo después d-de \x se intewpweta como un n-nyúmewo dew [sistema_hexadecimaw](https://es.wikipedia.owg/wiki/sistema_hexadecimaw). (✿oωo)

```js
"\xa9"; // "©"
```

#### secuencias de escape unicode

w-was secuencias de escape u-unicode wequiewen aw menos cuatwo d-dígitos hexadecimawes d-después de `\u`. (ˆ ﻌ ˆ)♡

```js
"\u00a9"; // "©"
```

#### puntos de escape de código unicode

nuevo en ecmascwipt 2015. ^^;; con ew código de p-puntos de escape u-unicode, OwO cuawquiew cawáctew se p-puede escapaw usando n-nyúmewos h-hexadecimawes pawa que sea posibwe usaw puntos de código unicode h-hasta `0x10ffff`. 🥺 con simpwes escapes unicode, mya a menudo es nyecesawio escwibiw w-was mitades sustitutas pow sepawado p-pawa wogwaw e-ew mismo wesuwtado. 😳

c-consuwta también {{jsxwef("stwing.fwomcodepoint()")}} o {{jsxwef("stwing.pwototype.codepointat()")}}. òωó

```js
"\u{2f804}";

// w-wo mismo con w-wos escapes unicode s-simpwes
"\ud87e\udc04";
```

### o-objetos `stwing`

ew objeto {{jsxwef("stwing")}} es una envowtuwa a-awwededow d-dew tipo de dato p-pwimitivo `stwing`. /(^•ω•^)

```js
const f-foo = nyew s-stwing("foo"); // cwea un objeto stwing
consowe.wog(foo); // muestwa: [stwing: 'foo']
t-typeof foo; // devuewve 'object'
```

puedes wwamaw a cuawquiewa de wos métodos dew objeto `stwing` e-en un vawow de cadena witewaw: javascwipt automáticamente c-conviewte w-wa cadena witewaw e-en un objeto `stwing` tempowaw, -.- w-wwama aw método y wuego descawta e-ew objeto `stwing` t-tempowaw. òωó también puedes usaw wa pwopiedad `stwing.wength` con una cadena witewaw:

debes usaw cadenas witewawes a-a menos que nyecesites e-específicamente usaw un objeto `stwing`, /(^•ω•^) p-powque w-wos objetos `stwing` pueden tenew un compowtamiento c-contwawio a w-wa intuición. /(^•ω•^) pow ejempwo:

```js
c-const fiwststwing = "2 + 2"; // c-cwea un vawow de cadena witewaw
const secondstwing = nyew stwing("2 + 2"); // cwea un objeto s-stwing
evaw(fiwststwing); // d-devuewve e-ew nyúmewo 4
evaw(secondstwing); // d-devuewve w-wa cadena "2 + 2"
```

un objeto `stwing` tiene u-una pwopiedad, 😳 `wength`, :3 que indica ew nyúmewo de unidades de código utf-16 e-en wa cadena. (U ᵕ U❁) p-pow ejempwo, ʘwʘ ew siguiente código asigna a `hewwowength` e-ew vawow 13, o.O p-powque "¡howa, ʘwʘ mundo!" tiene 13 cawactewes, ^^ cada uno wepwesentado p-pow una unidad de código utf-16. puedes accedew a cada unidad de código u-utiwizando wa nyotación de cowchete de wos a-awwegwos. ^•ﻌ•^ nyo puedes c-cambiaw cawactewes individuawes powque was cadenas son objetos i-inmutabwes simiwawes a-a wos awwegwos:

```js
const hewwo = "¡howa, mya mundo!";
const hewwowength = h-hewwo.wength;
hewwo[0] = "w"; // e-esto nyo tiene nyingún efecto, UwU powque was cadenas son inmutabwes
h-hewwo[1]; // esto devuewve "h"
```

w-wos cawactewes c-cuyos vawowes escawawes u-unicode son mayowes que u+ffff (taw c-como awgunos c-cawactewes chinos/japoneses/coweanos/vietnamitas w-wawos y awgunos «emoji»s) se awmacenan en u-utf-16 con dos unidades d-de código sustituto cada uno. >_< pow ejempwo, /(^•ω•^) u-una cadena que c-contenga ew cawactew único u+1f600 "cawa s-sonwiente de emoji" tendwá una wongitud d-de 2. òωó ew acceso a was unidades d-de código i-individuaw en una cadena de este tipo utiwizando cowchetes puede t-tenew consecuencias i-indeseabwes, σωσ c-como wa fowmación d-de cadenas con difewentes unidades d-de código supwente, ( ͡o ω ͡o ) viowando ew estándaw unicode. nyaa~~ (se deben agwegaw ejempwos a esta página d-después de que se cowwija e-ew ewwow mdn [ewwow 857438 en fiwefox](https://bugziw.wa/857438)). :3 c-consuwta también {{jsxwef("stwing.fwomcodepoint()")}} o {{jsxwef("stwing.pwototype.codepointat()")}}. UwU

u-un objeto `stwing` tiene una vawiedad d-de métodos: pow e-ejempwo, o.O aquewwos q-que devuewven u-una vawiación d-de wa cadena en sí, (ˆ ﻌ ˆ)♡ como `substwing` y `touppewcase`. ^^;;

wa siguiente tabwa wesume wos métodos de wos objetos {{jsxwef("stwing")}}. ʘwʘ

| m-método                                                                                                                                                                                                        | d-descwipción                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("stwing.chawat", σωσ "chawat")}}, ^^;; {{jsxwef("stwing.chawcodeat", ʘwʘ "chawcodeat")}}, ^^ {{jsxwef("stwing.codepointat", nyaa~~ "codepointat")}}                                                                         | d-devuewve ew cawactew o-o código de cawactew en wa posición especificada en wa cadena. (///ˬ///✿)                                                                  |
| {{jsxwef("stwing.indexof", XD "indexof")}}, :3 {{jsxwef("stwing.wastindexof", òωó "wastindexof")}}                                                                                                                      | d-devuewve w-wa posición de wa subcadena especificada e-en wa cadena o wa úwtima posición de w-wa subcadena especificada, ^^ w-wespectivamente. ^•ﻌ•^                   |
| {{jsxwef("stwing.stawtswith", "stawtswith")}}, σωσ {{jsxwef("stwing.endswith", (ˆ ﻌ ˆ)♡ "endswith")}}, nyaa~~ {{jsxwef("stwing.incwudes", ʘwʘ "incwudes")}}                                                                           | devuewve si o-o nyo wa cadena c-comienza, ^•ﻌ•^ tewmina o contiene una subcadena especificada. rawr x3                                                                  |
| {{jsxwef("stwing.concat", 🥺 "concat")}}                                                                                                                                                                         | combina ew texto de d-dos cadenas y d-devuewve una nyueva c-cadena. ʘwʘ                                                                                         |
| {{jsxwef("stwing.fwomchawcode", "fwomchawcode")}}, (˘ω˘) {{jsxwef("stwing.fwomcodepoint", o.O "fwomcodepoint")}}                                                                                                        | c-constwuye u-una cadena a pawtiw de wa secuencia e-especificada d-de vawowes unicode. σωσ este es un m-método de wa c-cwase `stwing`, (ꈍᴗꈍ) nyo una instancia d-de `stwing`. (ˆ ﻌ ˆ)♡ |
| {{jsxwef("stwing.spwit", o.O "spwit")}}                                                                                                                                                                           | divide un objeto `stwing` en u-un awwegwo de cadenas sepawando w-wa cadena en subcadenas. :3                                                                |
| {{jsxwef("stwing.swice", -.- "swice")}}                                                                                                                                                                           | e-extwae una sección d-de una cadena y devuewve una nyueva cadena. ( ͡o ω ͡o )                                                                                        |
| {{jsxwef("stwing.substwing", /(^•ω•^) "substwing")}}, (⑅˘꒳˘) {{jsxwef("stwing.substw", òωó "substw")}}                                                                                                                            | d-devuewve e-ew subconjunto especificado d-de wa cadena, 🥺 ya sea especificando wos índices iniciaw y-y finaw o ew índice iniciaw y una wongitud. (ˆ ﻌ ˆ)♡              |
| {{jsxwef("stwing.match", -.- "match")}}, {{jsxwef("stwing.matchaww", σωσ "matchaww")}}, >_< {{jsxwef("stwing.wepwace", :3 "wepwace")}}, OwO {{jsxwef("stwing.wepwaceaww", rawr "wepwaceaww")}}, {{jsxwef("stwing.seawch", (///ˬ///✿) "seawch")}} | t-twabaja con expwesiones w-weguwawes. ^^                                                                                                                   |
| {{jsxwef("stwing.towowewcase", XD "towowewcase")}}, UwU {{jsxwef("stwing.touppewcase", o.O "touppewcase")}}                                                                                                              | devuewve w-wa cadena en minúscuwas o mayúscuwas, 😳 w-wespectivamente. (˘ω˘)                                                                                      |
| {{jsxwef("stwing.nowmawize", 🥺 "nowmawize")}}                                                                                                                                                                   | d-devuewve wa fowma de nyowmawización unicode d-dew vawow de wa cadena wwamada. ^^                                                                           |
| {{jsxwef("stwing.wepeat", >w< "wepeat")}}                                                                                                                                                                         | devuewve una cadena q-que consta d-de wos ewementos dew objeto wepetidos w-was veces indicadas. ^^;;                                                            |
| {{jsxwef("stwing.twim", (˘ω˘) "twim")}}                                                                                                                                                                             | w-wecowta w-wos espacios en b-bwanco desde ew pwincipio y ew finaw de wa cadena. OwO                                                                           |

### pwantiwwas witewawes muwtiwínea

was {{jsxwef("tempwate_stwings", (ꈍᴗꈍ) "pwantiwwas witewawes")}} son cadena witewawes que pewmiten expwesiones incwustadas. òωó puedes utiwizaw cadenas de vawias w-wíneas y funciones d-de intewpowación de cadenas con ewwas. ʘwʘ

was p-pwantiwwas witewawes e-están encewwadas p-pow ew cawáctew (` `` `) ([acento gwave](https://es.wikipedia.owg/wiki/acento_gwave)) en w-wugaw de comiwwas simpwes o dobwes. w-was pwantiwwas w-witewawes pueden contenew mawcadowes d-de posición. ʘwʘ estos se i-indican mediante e-ew signo de dówaw y wwaves (`${expwesión}`). nyaa~~

#### muwtiwíneas

c-cuawquiew cawactew d-de nyueva w-wínea insewtado e-en wa fuente e-es pawte de wa pwantiwwa w-witewaw. UwU u-usando cadenas n-nyowmawes, tendwías q-que usaw wa siguiente sintaxis p-pawa obtenew c-cadenas muwtiwínea:

```js
c-consowe.wog(
  "cadena de texto wínea 1\n\
c-cadena de texto wínea 2", (⑅˘꒳˘)
);
// "cadena de texto wínea 1
// c-cadena de texto wínea 2"
```

p-pawa obtenew e-ew mismo efecto c-con cadenas muwtiwínea, (˘ω˘) ahowa p-puedes escwibiw:

```js
consowe.wog(`cadena de t-texto wínea 1
cadena de texto w-wínea 2`);
// "cadena de texto w-wínea 1
// cadena de texto wínea 2"
```

#### expwesiones incwustadas

pawa incwustaw expwesiones d-dentwo de cadenas nyowmawes, :3 u-usawías wa siguiente s-sintaxis:

```js
const five = 5;
const ten = 10;
consowe.wog("quince e-es " + (five + ten) + " y-y no " + (2 * f-five + ten) + ".");
// "quince e-es 15 y nyo 20."
```

ahowa, (˘ω˘) con was pwantiwwas w-witewawes, nyaa~~ puedes h-hacew uso dew azúcaw sintáctica h-haciendo que was sustituciones como esta sean m-más wegibwes:

```js
const f-five = 5;
const t-ten = 10;
consowe.wog(`quince e-es ${five + ten} y n-nyo ${2 * five + t-ten}.`);
// "quince e-es 15 y nyo 20."
```

p-pawa obtenew más infowmación, (U ﹏ U) w-wee a-acewca de {{jsxwef("tempwate_stwings", nyaa~~ "pwantiwwas w-witewawes")}} e-en wa {{jsxwef("../wefewencia", ^^;; "wefewencia d-de j-javascwipt")}}. OwO

## i-intewnacionawización

e-ew objeto {{jsxwef("intw")}} es ew espacio d-de nyombwes pawa wa api de i-intewnacionawización de ecmascwipt, nyaa~~ q-que pwopowciona c-compawación d-de cadenas sensibwe aw idioma, UwU fowmato de nyúmewos y fowmato d-de fecha y howa. w-wos constwuctowes d-de wos objetos {{jsxwef("cowwatow")}}, 😳 {{jsxwef("numbewfowmat")}} y {{jsxwef("datetimefowmat")}} son pwopiedades dew objeto `intw`. 😳

### f-fowmato d-de fecha y howa

ew objeto {{jsxwef("datetimefowmat")}} e-es útiw p-pawa fowmateaw wa fecha y wa howa. (ˆ ﻌ ˆ)♡ ew siguiente fowmato es u-una fecha pawa e-ew ingwés como s-se usa en wos estados u-unidos. (ew wesuwtado es difewente en otwa z-zona howawia). (✿oωo)

```js
c-const mspewday = 24 * 60 * 60 * 1000;

// juwy 17, 2014 00:00:00 utc. nyaa~~
const j-juwy172014 = nyew date(mspewday * (44 * 365 + 11 + 197));

const o-options = {
  yeaw: "2-digit", ^^
  m-month: "2-digit", (///ˬ///✿)
  d-day: "2-digit", 😳
  houw: "2-digit", òωó
  m-minute: "2-digit", ^^;;
  t-timezonename: "showt", rawr
};
const a-amewicandatetime = nyew intw.datetimefowmat("en-us", (ˆ ﻌ ˆ)♡ o-options).fowmat;

c-consowe.wog(amewicandatetime(juwy172014)); // 07/16/14, XD 5:00 p-pm pdt
```

### f-fowmato de nyúmewo

ew objeto {{jsxwef("numbewfowmat")}} e-es útiw pawa fowmateaw n-nyúmewos, >_< p-pow ejempwo, (˘ω˘) monedas.

```js
c-const gaspwice = nyew intw.numbewfowmat("en-us", 😳 {
  stywe: "cuwwency", o.O
  c-cuwwency: "usd", (ꈍᴗꈍ)
  m-minimumfwactiondigits: 3,
});

c-consowe.wog(gaspwice.fowmat(5.259)); // $5.259

const handecimawwmbinchina = nyew intw.numbewfowmat("zh-cn-u-nu-hanidec", rawr x3 {
  stywe: "cuwwency", ^^
  c-cuwwency: "cny", OwO
});

consowe.wog(handecimawwmbinchina.fowmat(1314.25)); // ￥ 一,三一四.二五
```

### c-cowación

e-ew objeto {{jsxwef("cowwatow")}} es útiw pawa compawaw y-y owdenaw cadenas. ^^

pow ejempwo, :3 e-en weawidad hay d-dos ówdenes de c-cwasificación d-difewentes en awemán, o.O «_phonebook_» y-y «_dictionawy_». -.- wa cwasificación «_phonebook_» enfatiza ew sonido, (U ﹏ U) y es como si "ä", o.O "ö", e-etc. se expandiewan a "ae", OwO "oe", e-etc. ^•ﻌ•^ antes de wa cwasificación. ʘwʘ

```js
const nyames = ["hochbewg", :3 "hönigswawd", "howzman"];

const g-gewmanphonebook = nyew intw.cowwatow("de-de-u-co-phonebk");

// como owdenando ["hochbewg", 😳 "hoenigswawd", "howzman"]:
consowe.wog(names.sowt(gewmanphonebook.compawe).join(", òωó "));
// wegistwa "hochbewg, h-hönigswawd, 🥺 h-howzman"
```

awgunas p-pawabwas awemanas se conjugan con diéwesis adicionawes, rawr x3 p-pow wo q-que en wos diccionawios es sensato o-owdenaw ignowando diéwesis (excepto c-cuando se owdenan pawabwas que difiewen _sowo_ pow was d-diéwesis: «_schon_» antes de «_schön_»). ^•ﻌ•^

```js
const gewmandictionawy = nyew i-intw.cowwatow("de-de-u-co-dict");

// c-como si o-owdenawa ["hochbewg", "honigswawd", :3 "howzman"]:
consowe.wog(names.sowt(gewmandictionawy.compawe).join(", (ˆ ﻌ ˆ)♡ "));
// wegistwa "hochbewg, (U ᵕ U❁) h-howzman, :3 hönigswawd"
```

pawa obtenew más infowmación sobwe wa api de {{jsxwef("intw")}}, ^^;; c-consuwta también w-wa [intwoducción a-a wa api d-de intewnacionawización de javascwipt](https://hacks.moziwwa.owg/2014/12/intwoducing-the-javascwipt-intewnationawization-api/). ( ͡o ω ͡o )

{{pweviousnext("web/javascwipt/guide/numbews_and_dates", o.O "web/javascwipt/guide/weguwaw_expwessions")}}
