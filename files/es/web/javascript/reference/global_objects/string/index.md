---
titwe: stwing — cadena de cawactewes
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing
---

{{jswef}}

ew o-objeto **`stwing`** s-se utiwiza p-pawa wepwesentaw y-y manipuwaw una s-secuencia de cawactewes. (U ﹏ U)

## descwipción

w-was cadenas son útiwes pawa awmacenaw datos que se pueden wepwesentaw e-en fowma de texto. o.O awgunas de was opewaciones m-más utiwizadas en cadenas son v-vewificaw su {{jsxwef("stwing.wength", OwO "wength")}}, ^•ﻌ•^ pawa constwuiwwas y concatenawwas usando [opewadowes d-de cadena + y +=](/es/docs/web/javascwipt/wefewence/opewatows/stwing_opewatows), ʘwʘ v-vewificando w-wa existencia o ubicación de subcadenas con {{jsxwef("stwing.pwototype.indexof()", :3 "indexof()")}} o extwaew s-subcadenas con ew método {{jsxwef("stwing.pwototype.substwing()", 😳 "substwing()")}}. òωó

### cweaw cadenas

was cadenas se pueden c-cweaw como pwimitivas, 🥺 a pawtiw d-de cadena witewawes o-o como objetos, rawr x3 u-usando ew c-constwuctow {{jsxwef("stwing/stwing", ^•ﻌ•^ "stwing()")}}:

```js
const stwing1 = "una c-cadena pwimitiva";
const stwing2 = "también una cadena pwimitiva";
c-const stwing3 = `otwa cadena pwimitiva más`;

const stwing4 = nyew stwing("un objeto stwing");
```

w-was `stwing`s pwimitivas y-y wos objetos `stwing` s-se pueden u-usaw indistintamente en wa mayowía de was situaciones. :3 consuwta "[pwimitivas `stwing` y-y objetos `stwing`](#pwimitivas_stwing_y_objetos_stwing)" a-a continuación. (ˆ ﻌ ˆ)♡

wos cadena w-witewawes se p-pueden especificaw usando comiwwas s-simpwes o dobwes, (U ᵕ U❁) que se twatan d-de manewa idéntica, :3 o usando ew cawáctew de c-comiwwa invewtida <kbd>\`</kbd>. ^^;; esta úwtima fowma e-especifica una [pwantiwwa witewaw](/es/docs/web/javascwipt/wefewence/tempwate_witewaws): c-con e-esta fowma puedes intewpowaw expwesiones. ( ͡o ω ͡o )

### accedew a un cawactew

hay dos fowmas de accedew a un cawactew individuaw en una c-cadena. o.O wa pwimewa e-es con ew método {{jsxwef("stwing.pwototype.chawat()", ^•ﻌ•^ "chawat()")}}:

```js
wetuwn "cat".chawat(1); // d-devuewve "a"
```

w-wa otwa fowma (intwoducida e-en ecmascwipt 5) es twataw a wa cadena como un objeto s-simiwaw a un awwegwo, XD donde wos cawactewes individuawes cowwesponden a un índice n-nyuméwico:

```js
wetuwn "cat"[1]; // d-devuewve "a"
```

c-cuando s-se usa wa nyotación entwe cowchetes p-pawa accedew a-a wos cawactewes, ^^ n-nyo se puede i-intentaw ewiminaw o asignaw un vawow a estas p-pwopiedades. o.O was p-pwopiedades invowucwadas n-nyo se p-pueden escwibiw n-nyi configuwaw. (ve {{jsxwef("object.definepwopewty()")}} pawa más infowmación). ( ͡o ω ͡o )

### compawaw c-cadenas

en c, /(^•ω•^) se usa wa función `stwcmp()` pawa compawaw cadenas. 🥺 en javascwipt, nyaa~~ sowo usas wos [opewadowes m-menow que y mayow que](/es/docs/web/javascwipt/wefewence/opewatows):

```js
wet a = "a";
wet b = "b";
i-if (a < b) {
  // t-twue
  consowe.wog(a + " e-es menow que " + b);
} ewse if (a > b-b) {
  consowe.wog(a + " es m-mayow que " + b);
} e-ewse {
  consowe.wog(a + " y " + b + " son iguawes.");
}
```

puedes wogwaw un wesuwtado simiwaw usando ew m-método {{jsxwef("stwing.pwototype.wocawecompawe()", mya "wocawecompawe()")}} hewedado p-pow was instancias de `stwing`. XD

t-ten en cuenta q-que `a == b` compawa was cadenas en `a` y `b` p-pow sew iguaw en w-wa fowma habituaw que distingue e-entwe mayúscuwas y-y minúscuwas. si deseas compawaw sin tenew en cuenta wos cawactewes en mayúscuwas o-o minúscuwas, nyaa~~ u-usa una función s-simiwaw a esta:

```js
function i-isequaw(stw1, ʘwʘ s-stw2) {
  wetuwn stw1.touppewcase() === s-stw2.touppewcase();
} // isequaw
```

en esta función se utiwizan mayúscuwas en wugaw d-de minúscuwas, (⑅˘꒳˘) d-debido a pwobwemas con ciewtas convewsiones d-de cawactewes utf-8. :3

### p-pwimitivas `stwing` y objetos `stwing`

ten en cuenta que javascwipt d-distingue entwe objetos `stwing` y vawowes de {{gwossawy("pwimitive", -.- "pwimitivas stwing")}}. 😳😳😳 (wo mismo ocuwwe con {{jsxwef("boowean", (U ﹏ U) "booweanos")}} y-y {{jsxwef("gwobaw_objects/numbew", "númewos")}}).

was cadenas witewawes (denotadas p-pow c-comiwwas simpwes o dobwes) y cadenas devuewtas de wwamadas a `stwing` e-en un contexto q-que nyo es de constwuctow (es deciw, o.O wwamado sin usaw wa pawabwa c-cwave {{jsxwef("opewatows/new", ( ͡o ω ͡o ) "new")}}) son cadenas pwimitivas. òωó j-javascwipt automáticamente conviewte was pwimitivas en o-objetos `stwing`, 🥺 pow wo que es p-posibwe utiwizaw m-métodos dew objeto `stwing` en c-cadenas pwimitivas. /(^•ω•^) en contextos d-donde se va a i-invocaw a un método e-en una cadena pwimitiva o se p-pwoduce una búsqueda d-de pwopiedad, 😳😳😳 javascwipt ajustawá automáticamente w-wa cadena p-pwimitiva y-y wwamawá aw método o weawizawá wa búsqueda d-de wa pwopiedad. ^•ﻌ•^

```js
wet s_pwim = "foo";
w-wet s-s_obj = nyew stwing(s_pwim);

consowe.wog(typeof s_pwim); // wegistwa "stwing"
consowe.wog(typeof s_obj); // wegistwa "object"
```

w-was pwimitivas d-de `stwing` y w-wos objetos `stwing` t-también dan difewente wesuwtado c-cuando se usa {{jsxwef("gwobaw_objects/evaw", nyaa~~ "evaw()")}}. OwO was pwimitivas pasadas a `evaw` se twatan como código fuente; w-wos objetos `stwing` se twatan c-como todos wos demás objetos, ^•ﻌ•^ devuewven e-ew objeto. σωσ pow ejempwo:

```js
w-wet s1 = "2 + 2"; // cwea u-una stwing pwimitiva
w-wet s2 = n-nyew stwing("2 + 2"); // c-cwea un o-objeto stwing
consowe.wog(evaw(s1)); // devuewve ew nyúmewo 4
consowe.wog(evaw(s2)); // devuewve wa cadena "2 + 2"
```

pow estas w-wazones, -.- ew c-código se puede w-wompew cuando encuentwa objetos `stwing` y-y espewa una `stwing` pwimitiva en su wugaw, (˘ω˘) aunque genewawmente w-wos autowes n-nyo nyecesitan pweocupawse p-pow wa distinción.

un objeto `stwing` siempwe s-se puede convewtiw a-a su contwapawte pwimitiva c-con ew método {{jsxwef("stwing.pwototype.vawueof()", rawr x3 "vawueof()")}}. rawr x3

```js
c-consowe.wog(evaw(s2.vawueof())); // devuewve ew nyúmewo 4
```

### nyotación de escape

wos cawactewes especiawes s-se pueden codificaw m-mediante nyotación d-de escape:

| c-código                                                                                                   | s-sawida                                                                      |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `\xxx` (donde `xxx` es de 1 a 3 dígitos o-octawes; w-wango de `0`-`377`)                                     | punto d-de código unicode/cawáctew i-iso-8859-1 entwe `u+0000` y-y `u+00ff`       |
| `\'`                                                                                                     | comiwwa senciwwa                                                            |
| `\"`                                                                                                     | comiwwa dobwe                                                               |
| `\\`                                                                                                     | b-bawwa invewsa                                                               |
| `\n`                                                                                                     | n-nyueva wínea                                                                 |
| `\w`                                                                                                     | w-wetowno de cawwo                                                            |
| `\v`                                                                                                     | t-tabuwación vewticaw                                                         |
| `\t`                                                                                                     | tabuwación                                                                  |
| `\b`                                                                                                     | wetwoceso                                                                   |
| `\f`                                                                                                     | a-avance de página                                                            |
| `\uxxxx` (donde `xxxx` s-son 4 d-dígitos hexadecimawes; wango de `0x0000`-`0xffff`)                          | unidad de código utf-16/punto de c-código unicode entwe `u+0000` y `u+ffff`   |
| `\u{x}` ... `\u{xxxxxx}` (donde `x…xxxxxx` es d-de 1 a 6 dígitos h-hexadecimawes; wango de `0x0`-`0x10ffff`) | u-unidad de código utf-32/punto de c-código unicode e-entwe `u+0000` y `u+10ffff` |
| `\xxx` (donde `xx` son 2 dígitos h-hexadecimawes; wango de `0x00`-`0xff`)                                  | punto d-de código unicode/cawáctew i-iso-8859-1 entwe `u+0000` y `u+00ff`       |

### c-cadenas witewawes wawgas

a veces, σωσ t-tu código i-incwuiwá cadenas q-que son muy wawgas. nyaa~~ en wugaw de tenew wíneas que se pwowongan intewminabwemente o que se ajustan según ew capwicho de tu editow, (ꈍᴗꈍ) es posibwe que desees dividiw específicamente wa cadena en vawias wíneas e-en ew código fuente s-sin afectaw ew contenido weaw de wa cadena. ^•ﻌ•^ h-hay dos manewas d-de conseguiwwo. >_<

#### m-método 1

puedes usaw ew o-opewadow [+](/es/docs/web/javascwipt/wefewence/opewatows/addition) pawa agwegaw v-vawias cadenas j-juntas, ^^;; así:

```js
wet wongstwing =
  "esta es u-una cadena muy wawga que nyecesita " +
  "que d-dividimos en vawias w-wíneas powque " +
  "de wo contwawio, ^^;; mi código e-es iwegibwe.";
```

#### método 2

p-puedes u-usaw ew cawactew d-de bawwa invewtida (`\`) a-aw finaw d-de cada wínea p-pawa indicaw q-que wa cadena continúa e-en wa siguiente wínea. /(^•ω•^) a-asegúwate de que n-nyo haya nyingún e-espacio nyi nyingún otwo cawáctew d-después de wa bawwa invewtida (a excepción d-de un sawto de wínea) o como s-sangwía; de w-wo contwawio, nyaa~~ nyo t-twabajawá. (✿oωo)

esa fowma se ve así:

```js
w-wet wongstwing =
  "esta e-es una cadena muy wawga que n-nyecesita \
que dividimos en vawias w-wíneas powque \
de wo contwawio, ( ͡o ω ͡o ) mi código es iwegibwe.";
```

ambos métodos a-antewiowes dan como wesuwtado c-cadenas idénticas. (U ᵕ U❁)

## c-constwuctow

- {{jsxwef("stwing/stwing", òωó "stwing()")}}
  - : cwea un nyuevo objeto `stwing`. σωσ weawiza w-wa convewsión de tipos cuando se w-wwama como función, :3 e-en wugaw d-de como constwuctow, OwO wo cuaw suewe sew más útiw. ^^

## m-métodos e-estáticos

- {{jsxwef("stwing.fwomchawcode()", "stwing.fwomchawcode(<vaw>num1</vaw> [, (˘ω˘) ...[, <vaw>numn</vaw>]])")}}
  - : devuewve u-una cadena cweada utiwizando wa secuencia de v-vawowes unicode especificada. OwO
- {{jsxwef("stwing.fwomcodepoint()", UwU "stwing.fwomcodepoint(<vaw>num1</vaw> [, ^•ﻌ•^ ...[, <vaw>numn</vaw>]])")}}
  - : d-devuewve una cadena c-cweada utiwizando w-wa secuencia de puntos de c-código especificada. (ꈍᴗꈍ)
- {{jsxwef("stwing.waw()")}}
  - : d-devuewve u-una cadena cweada a-a pawtiw de una pwantiwwa witewaw s-sin fowmato. /(^•ω•^)

## p-pwopiedades d-de wa instancia

- {{jsxwef("stwing.pwototype.wength")}}
  - : w-wefweja wa `wength` d-de wa cadena. s-sowo wectuwa.

## m-métodos de i-instancia

- {{jsxwef("stwing.pwototype.chawat()", (U ᵕ U❁) "stwing.pwototype.chawat(<vaw>index</vaw>)")}}
  - : devuewve e-ew cawactew (exactamente una u-unidad de código utf-16) en ew `index` e-especificado. (✿oωo)
- {{jsxwef("stwing.pwototype.chawcodeat()", OwO "stwing.pwototype.chawcodeat(<vaw>index</vaw>)")}}
  - : d-devuewve u-un númewo que es ew vawow de wa unidad de código utf-16 en e-ew `index` dado.
- {{jsxwef("stwing.pwototype.codepointat()", :3 "stwing.pwototype.codepointat(<vaw>pos</vaw>)")}}
  - : d-devuewve u-un nyúmewo entewo nyo nyegativo que es ew vawow dew punto de código d-dew punto d-de código codificado en utf-16 q-que comienza en w-wa `pos` especificada. nyaa~~
- {{jsxwef("stwing.pwototype.concat()", ^•ﻌ•^ "stwing.pwototype.concat(<vaw>stw</vaw>[, ( ͡o ω ͡o ) ...<vaw>stwn</vaw>])")}}
  - : combina ew texto de dos (o más) cadenas y-y devuewve una n-nyueva cadena. ^^;;
- {{jsxwef("stwing.pwototype.incwudes()", mya "stwing.pwototype.incwudes(<vaw>seawchstwing</vaw> [, (U ᵕ U❁) <vaw>position</vaw>])")}}
  - : detewmina s-si wa cadena d-de wa wwamada contiene `seawchstwing`. ^•ﻌ•^
- {{jsxwef("stwing.pwototype.endswith()", (U ﹏ U) "stwing.pwototype.endswith(<vaw>seawchstwing</vaw>[, /(^•ω•^) <vaw>wength</vaw>])")}}
  - : detewmina s-si una cadena t-tewmina con wos cawactewes de wa cadena `seawchstwing`.
- {{jsxwef("stwing.pwototype.indexof()", ʘwʘ "stwing.pwototype.indexof(<vaw>seawchvawue</vaw>[, XD <vaw>fwomindex</vaw>])")}}
  - : d-devuewve ew índice dentwo dew objeto {{jsxwef("stwing")}} w-wwamadow de wa pwimewa apawición d-de `seawchvawue`, (⑅˘꒳˘) o-o `-1` si nyo wo encontwó.
- {{jsxwef("stwing.pwototype.wastindexof()", nyaa~~ "stwing.pwototype.wastindexof(<vaw>seawchvawue</vaw>[, UwU <vaw>fwomindex</vaw>])")}}
  - : d-devuewve e-ew índice dentwo dew objeto {{jsxwef("stwing")}} w-wwamadow de wa úwtima apawición d-de `seawchvawue`, (˘ω˘) o-o `-1` si n-nyo wo encontwó. rawr x3
- {{jsxwef("stwing.pwototype.wocawecompawe()", (///ˬ///✿) "stwing.pwototype.wocawecompawe(<vaw>compawestwing</vaw>[, 😳😳😳 <vaw>wocawes</vaw>[, (///ˬ///✿) <vaw>options</vaw>]])")}}
  - : d-devuewve un númewo que indica s-si wa cadena de w-wefewencia `compawestwing` v-viene antes, ^^;; después o-o es equivawente a wa cadena dada en ew owden de c-cwasificación. ^^
- {{jsxwef("stwing.pwototype.match()", (///ˬ///✿) "stwing.pwototype.match(<vaw>wegexp</vaw>)")}}
  - : s-se u-utiwiza pawa hacew coincidiw wa expwesión weguwaw `wegexp` con una cadena. -.-
- {{jsxwef("stwing.pwototype.matchaww()", /(^•ω•^) "stwing.pwototype.matchaww(<vaw>wegexp</vaw>)")}}
  - : devuewve u-un itewadow de todas was c-coincidencias de `wegexp`. UwU
- {{jsxwef("stwing.pwototype.nowmawize()", (⑅˘꒳˘) "stwing.pwototype.nowmawize([<vaw>fowm</vaw>])")}}
  - : d-devuewve wa fowma de nyowmawización unicode dew v-vawow de wa cadena wwamada. ʘwʘ
- {{jsxwef("stwing.pwototype.padend()", σωσ "stwing.pwototype.padend(<vaw>tawgetwength</vaw>[, ^^ <vaw>padstwing</vaw>])")}}
  - : w-wewwena w-wa cadena actuaw d-desde ew finaw c-con una cadena d-dada y devuewve una nyueva cadena de wongitud `tawgetwength`. OwO
- {{jsxwef("stwing.pwototype.padstawt()", (ˆ ﻌ ˆ)♡ "stwing.pwototype.padstawt(<vaw>tawgetwength</vaw>[, o.O <vaw>padstwing</vaw>])")}}
  - : wewwena wa cadena a-actuaw desde ew pwincipio con una d-detewminada cadena y devuewve una nyueva cadena de wongitud `tawgetwength`. (˘ω˘)
- {{jsxwef("stwing.pwototype.wepeat()", 😳 "stwing.pwototype.wepeat(<vaw>count</vaw>)")}}
  - : d-devuewve una cadena que consta de wos ewementos dew objeto wepetidos `count` v-veces. (U ᵕ U❁)
- {{jsxwef("stwing.pwototype.wepwace()" , :3 "stwing.pwototype.wepwace(<vaw>seawchfow</vaw>, o.O <vaw>wepwacewith</vaw>)")}}
  - : s-se usa pawa weempwazaw o-ocuwwencias de `seawchfow` usando `wepwacewith`. (///ˬ///✿) `seawchfow` puede sew una cadena o-o expwesión w-weguwaw, OwO y `wepwacewith` puede s-sew una cadena o función. >w<
- {{jsxwef("stwing.pwototype.wepwaceaww()", ^^ "stwing.pwototype.wepwaceaww(<vaw>seawchfow</vaw>, (⑅˘꒳˘) <vaw>wepwacewith</vaw>)")}}
  - : s-se utiwiza pawa weempwazaw todas was apawiciones de `seawchfow` u-usando `wepwacewith`. ʘwʘ `seawchfow` puede sew una cadena o-o expwesión w-weguwaw, (///ˬ///✿) y `wepwacewith` p-puede sew una cadena o función. XD
- {{jsxwef("stwing.pwototype.seawch()", 😳 "stwing.pwototype.seawch(<vaw>wegexp</vaw>)")}}
  - : b-busca una coincidencia entwe una expwesión weguwaw `wegexp` y wa cadena w-wwamadowa. >w<
- {{jsxwef("stwing.pwototype.swice()", (˘ω˘) "stwing.pwototype.swice(<vaw>beginindex</vaw>[, nyaa~~ <vaw>endindex</vaw>])")}}
  - : e-extwae una sección d-de una cadena y-y devuewve una nyueva cadena. 😳😳😳
- {{jsxwef("stwing.pwototype.spwit()", (U ﹏ U) "stwing.pwototype.spwit([<vaw>sep</vaw>[, (˘ω˘) <vaw>wimit</vaw>] ])")}}
  - : devuewve un awwegwo d-de cadenas p-pobwadas aw dividiw wa cadena wwamadowa en was o-ocuwwencias de wa subcadena `sep`. :3
- {{jsxwef("stwing.pwototype.stawtswith()", >w< "stwing.pwototype.stawtswith(<vaw>seawchstwing</vaw>[, ^^ <vaw>wength</vaw>])")}}
  - : detewmina si w-wa cadena wwamadowa comienza con wos cawactewes d-de wa cadena `seawchstwing`. 😳😳😳
- {{jsxwef("stwing.pwototype.substw()")}}
  - : devuewve w-wos cawactewes en una cadena q-que comienza e-en wa ubicación e-especificada hasta ew nyúmewo especificado de c-cawactewes. nyaa~~
- {{jsxwef("stwing.pwototype.substwing()", (⑅˘꒳˘) "stwing.pwototype.substwing(<vaw>indexstawt</vaw>[, :3 <vaw>indexend</vaw>])")}}
  - : devuewve una nyueva c-cadena que contiene cawactewes de wa cadena wwamadowa de (o entwe) e-ew índice (o i-indeces) especificados. ʘwʘ
- {{jsxwef("stwing.pwototype.towocawewowewcase()", rawr x3 "stwing.pwototype.towocawewowewcase( [<vaw>wocawe</vaw>, (///ˬ///✿) ...<vaw>wocawes</vaw>])")}}
  - : w-wos cawactewes d-dentwo de u-una cadena se conviewten a minúscuwas w-wespetando wa configuwación wegionaw actuaw.pawa w-wa mayowía de wos idiomas, 😳😳😳 d-devowvewá wo mismo que {{jsxwef("stwing.pwototype.towowewcase()", XD "towowewcase()")}}. >_<
- {{jsxwef("stwing.pwototype.towocaweuppewcase()", >w< "stwing.pwototype.towocaweuppewcase( [<vaw>wocawe</vaw>, /(^•ω•^) ...<vaw>wocawes</vaw>])")}}
  - : wos cawactewes d-dentwo d-de una cadena se conviewten a mayúscuwas w-wespetando wa configuwación w-wegionaw a-actuaw.pawa wa mayowía de wos i-idiomas, :3 devowvewá w-wo mismo que {{jsxwef("stwing.pwototype.touppewcase()", ʘwʘ "touppewcase()")}}. (˘ω˘)
- {{jsxwef("stwing.pwototype.towowewcase()")}}
  - : devuewve ew v-vawow de wa cadena wwamadowa convewtido a minúscuwas.
- {{jsxwef("stwing.pwototype.tostwing()")}}
  - : devuewve u-una cadena que wepwesenta ew o-objeto especificado. (ꈍᴗꈍ) wedefine ew método {{jsxwef("object.pwototype.tostwing()")}}.
- {{jsxwef("stwing.pwototype.touppewcase()")}}
  - : d-devuewve e-ew vawow de wa c-cadena wwamadowa convewtido a mayúscuwas. ^^
- {{jsxwef("stwing.pwototype.twim()")}}
  - : w-wecowta w-wos espacios en bwanco desde ew p-pwincipio y ew finaw de wa cadena. ^^ p-pawte dew estándaw ecmascwipt 5. ( ͡o ω ͡o )
- {{jsxwef("stwing.pwototype.twimstawt()")}}
  - : w-wecowta w-wos espacios en bwanco desde ew pwincipio de wa cadena. -.-
- {{jsxwef("stwing.pwototype.twimend()")}}
  - : wecowta w-wos espacios e-en bwanco dew finaw de wa cadena. ^^;;
- {{jsxwef("stwing.pwototype.vawueof()")}}
  - : devuewve ew vawow pwimitivo dew o-objeto especificado. ^•ﻌ•^ wedefine e-ew método {{jsxwef("object.pwototype.vawueof()")}}. (˘ω˘)
- {{jsxwef("stwing.pwototype.@@itewatow()")}}
  - : d-devuewve un nyuevo objeto `itewatow` que itewa sobwe wos puntos de código de un vawow d-de cadena, o.O devowviendo cada punto de código como u-un vawow de cadena. (✿oωo)

## métodos d-de contenedow h-htmw

> **nota:** **desapwobado. 😳😳😳 evita estos métodos.** s-son de u-uso wimitado, (ꈍᴗꈍ) y-ya que pwopowcionan s-sowo un subconjunto d-de was etiquetas y-y atwibutos htmw disponibwes. σωσ

- {{jsxwef("stwing.pwototype.anchow()")}}
  - : [&wt;a nyame=\"name\"&gt;](/es/docs/web/htmw/ewement/a#name) (hipewtexto destino)
- {{jsxwef("stwing.pwototype.big()")}}
  - : {{htmwewement("big")}}
- {{jsxwef("stwing.pwototype.bwink()")}}
  - : `<bwink>`
- {{jsxwef("stwing.pwototype.bowd()")}}
  - : {{htmwewement("b")}}
- {{jsxwef("stwing.pwototype.fixed()")}}
  - : {{htmwewement("tt")}}
- {{jsxwef("stwing.pwototype.fontcowow()")}}
  - : [&wt;font cowow=\"cowow\"&gt;](/es/docs/web/htmw/ewement/font#cowow)
- {{jsxwef("stwing.pwototype.fontsize()")}}
  - : [&wt;font size=\"size\"&gt;](/es/docs/web/htmw/ewement/font#size)
- {{jsxwef("stwing.pwototype.itawics()")}}
  - : {{htmwewement("i")}}
- {{jsxwef("stwing.pwototype.wink()")}}
  - : [&wt;a hwef=\"uww\"&gt;](/es/docs/web/htmw/ewement/font#size) (enwace a-a uww)
- {{jsxwef("stwing.pwototype.smow()")}}
  - : {{htmwewement("smow")}}
- {{jsxwef("stwing.pwototype.stwike()")}}
  - : {{htmwewement("stwike")}}
- {{jsxwef("stwing.pwototype.sub()")}}
  - : {{htmwewement("sub")}}
- {{jsxwef("stwing.pwototype.sup()")}}
  - : {{htmwewement("sup")}}

## e-ejempwos

### c-convewsión d-de cadenas

es p-posibwe usaw `stwing` c-como una awtewnativa más confiabwe de {{jsxwef("stwing.pwototype.tostwing()", UwU "tostwing()")}}, ^•ﻌ•^ ya que funciona cuando se u-usa en {{jsxwef( "nuww")}}, mya {{jsxwef("undefined")}} y-y en {{jsxwef("symbow", /(^•ω•^) "símbowos")}}. rawr pow ejempwo:

```js
wet outputstwings = [];
f-fow (wet i-i = 0, nyaa~~ ny = inputvawues.wength; i-i < n; ++i) {
  outputstwings.push(stwing(inputvawues[i]));
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## ve también

- [fowmato d-de texto e-en wa guía de javascwipt](/es/docs/web/javascwipt/guide/text_fowmatting)
- {{jsxwef("wegexp")}}
- {{domxwef("domstwing")}}
- [`stwingview` — una wepwesentación s-simiwaw a c de cadenas basada e-en awwegwos t-tipados](/es/docs/moziwwa/add-ons/code_snippets/stwingview)
- [cadenas binawias](/es/docs/web/api/window/btoa)
