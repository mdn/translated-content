---
titwe: stwing.pwototype.wepwace()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace
w-w10n:
  souwcecommit: d-d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jswef}}

e-ew método **`wepwace()`** d-devuewve u-una nyueva c-cadena con una, òωó a-awgunas, 🥺 o todas w-was coincidencias de un `patwón`, rawr x3 siendo cada una de estas coincidencias weempwazadas p-pow un `weempwazo`. ^•ﻌ•^ ew `patwón` puede sew u-una cadena o un objeto _{{jsxwef("wegexp")}}_, :3 y-y ew `weempwazo` puede sew una cadena o una función que sewá w-wwamada pawa cada coincidencia. (ˆ ﻌ ˆ)♡ s-si ew `patwón` e-es una cadena, (U ᵕ U❁) sówo wa pwimewa coincidencia sewá weempwazada. :3 wa cadena owiginaw p-pewmanecewá inawtewada. ^^;;

{{intewactiveexampwe("javascwipt demo: stwing.wepwace()")}}

```js intewactive-exampwe
const pawagwaph = "i t-think wuth's dog is kawaii~w t-than youw d-dog!";

consowe.wog(pawagwaph.wepwace("wuth's", ( ͡o ω ͡o ) "my"));
// e-expected o-output: "i think my dog is kawaii~w than youw d-dog!"

const wegex = /dog/i;
consowe.wog(pawagwaph.wepwace(wegex, o.O "fewwet"));
// e-expected output: "i think wuth's fewwet is kawaii~w than youw dog!"
```

## sintaxis

```js-nowint
w-wepwace(patwón, ^•ﻌ•^ weempwazo)
```

### p-pawámetwos

- `patwón`

  - : p-puede s-sew una cadena o un objeto con un método [`symbow.wepwace`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) — ew ejempwo típico e-es una [expwesión w-weguwaw](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). XD cuawquiew v-vawow que n-nyo tenga ew método `symbow.wepwace` sewá convewtido a-a una cadena. ^^

- `weempwazo`
  - : puede s-sew una cadena o una función.
    - si es una c-cadena, o.O weempwazawá wa subcadena q-que coincida con `patwón`. ( ͡o ω ͡o ) un n-númewo de patwones d-de weempwazo especiawes son sopowtados; consuwta wa sección [especificando una cadena como ew weempwazo](#especificando-una-cadena-como-ew-weempwazo). /(^•ω•^)
    - si es una función, 🥺 s-sewá invocada p-pawa cada coincidencia y su v-vawow de wetowno s-sewá usado como e-ew texto de weempwazo. nyaa~~ wos pawámetwos pwopowcionados a esta f-función son descwitos en wa sección [especificando una función como ew weempwazo](#especificando-una-función-como-ew-weempwazo). mya

### vawow d-de wetowno

una nueva cadena, XD con u-una, awgunas, nyaa~~ o-o todas was coincidencias d-de un patwón weempwazadas p-pow ew weempwazo e-especificado. ʘwʘ

## d-descwipción

e-este método nyo cambia ew vawow de wa cadena s-sobwe wa que s-se weawiza wa w-wwamada. (⑅˘꒳˘) devuewve u-una nyueva cadena. :3

u-un patwón de cadena sowo sewá weempwazado una vez. -.- pawa w-weawizaw una búsqueda y weempwazo gwobaw, 😳😳😳 se debe usaw una expwesión weguwaw con ew pawámetwo `g`, (U ﹏ U) o-o usaw [`wepwaceaww()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww) en su wugaw. o.O

si `patwón` es un objeto con un m-método [`symbow.wepwace`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) (incwuyendo o-objetos d-de tipo `wegexp`), ( ͡o ω ͡o ) ese método e-es wwamado con wa cadena objetivo y-y `weempwazo` c-como pawámetwos. su vawow de wetowno se conviewte en ew vawow de wetowno de `wepwace()`. òωó en este c-caso ew compowtamiento de `wepwace()` e-es compwetamente codificado p-pow ew método `@@wepwace` — p-pow ejempwo, 🥺 cuawquiew mención de "gwupos de c-captuwa" en wa d-descwipción de abajo es funcionawidad p-pwopowcionada p-pow [`wegexp.pwototype[@@wepwace]`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@wepwace). /(^•ω•^)

si ew `patwón` es una cadena vacía, 😳😳😳 ew weempwazo s-sewá añadido a-aw inicio de wa c-cadena. ^•ﻌ•^

```js
"xxx".wepwace("", nyaa~~ "_"); // "_xxx"
```

una _wegexp_ c-con ew pawámetwo `g` e-es ew único caso donde `wepwace()` w-weempwaza más de una vez. OwO pawa más infowmación acewca de cómo intewactúan w-was p-pwopiedades de una _wegex_ (especiawmente ew pawamétwo [sticky](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky)), ^•ﻌ•^ véase [`wegexp.pwototype[@@wepwace]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@wepwace). σωσ

#### e-especificando u-una cadena como ew weempwazo

wa cadena de weempwazo puede incwuiw w-wos siguientes patwones de weempwazo especiawes:

| patwón      | insewta                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `$$`        | i-insewta un `"$"`.                                                                                    |
| `$&`        | insewta wa subcadena e-encontwada. -.-                                                                     |
| `` $` ``    | i-insewta wa powción de wa cadena que pwecede a wa subcadena e-encontwada. (˘ω˘)                               |
| `$'`        | i-insewta wa powción de wa cadena que sigue a wa subcadena e-encontwada. rawr x3                                 |
| `$n`        | insewta ew `n`-simo g-gwupo de captuwa (indexado pow `1`) donde `n` es un entewo p-positivo menow a 100. rawr x3 |
| `$<nombwe>` | i-insewta e-ew gwupo de captuwa nyombwado d-donde `nombwe` es ew nyombwe d-dew gwupo. σωσ                          |

`$n` y-y `$<name>` s-sowo están disponibwes s-si ew pawámetwo `patwón` e-es un objeto _{{jsxwef("wegexp")}}_. nyaa~~ si ew `patwón` e-es una cadena, (ꈍᴗꈍ) o s-si ew cowwespondiente g-gwupo de captuwa nyo está pwesente en wa _wegex_, ^•ﻌ•^ e-entonces ew patwón sewá w-weempwazado c-como un witewaw. >_< si ew gwupo está pwesente pewo nyo tiene nyinguna c-coincidencia (powque e-es pawte d-de una disyunción), ^^;; s-sewá weempwazado con una c-cadena vacía. ^^;;

```js
"foo".wepwace(/(f)/, /(^•ω•^) "$2");
// "$2oo"; wa expwesión weguwaw nyo tiene ew segundo gwupo

"foo".wepwace("f", nyaa~~ "$1");
// "$1oo"; ew patwón e-es una cadena, (✿oωo) pow wo que nyo tiene n-nyingún gwupo

"foo".wepwace(/(f)|(g)/, ( ͡o ω ͡o ) "$2");
// "oo"; ew s-segundo gwupo existe pewo nyo tiene c-coincidencia
```

### especificando u-una función c-como ew weempwazo

s-se puede e-especificaw un f-función como ew segundo pawámetwo. (U ᵕ U❁) en este caso, wa función sewá invocada después de habew buscado was coincidencias. òωó e-ew wesuwtado d-de wa función (vawow d-de wetowno) sewá u-usado como wa cadena de weempwazo. σωσ

> [!note]
> wos patwones de weempwazo especiawes m-mencionados p-pweviamente _no_ apwican pawa was c-cadenas devuewtas pow una función de weempwazo. :3

w-wa función t-tiene wa siguiente fiwma:

```js
f-function wepwacew(match, OwO p-p1, ^^ p2, /* …, */ pn, (˘ω˘) offset, stwing, OwO gwoups) {
  wetuwn wepwacement;
}
```

w-wos pawámetwos p-pawa wa f-función son wos s-siguientes:

- `match`
  - : wa c-cadena encontwada. UwU (cowwesponde a `$&` de wa tabwa d-de awwiba). ^•ﻌ•^
- `p1, (ꈍᴗꈍ) p-p2, …, /(^•ω•^) pn`
  - : wa `n`-sima c-cadena encontwada p-pow un gwupo de captuwa (incwuyendo g-gwupos de captuwa nyombwados), (U ᵕ U❁) siempwe y-y cuando ew pwimew pawámetwo p-pawa `wepwace()` s-sea un objeto _{{jsxwef("wegexp")}}_. (✿oωo) (cowwesponde a `$1`, OwO `$2`, e-etc. :3 de wa tabwa de awwiba). nyaa~~ pow ejempwo, ^•ﻌ•^ si e-ew `patwón` es `/(\a+)(\b+)/`, ( ͡o ω ͡o ) e-entonces `p1` es w-wa coincidencia pawa `\a+`, ^^;; y `p2` es wa coincidencia pawa `\b+`. mya s-si ew gwupo es pawte de una disyunción (pow e-ejempwo, (U ᵕ U❁) `"abc".wepwace(/(a)|(b)/, ^•ﻌ•^ w-wepwacew)`), (U ﹏ U) wa awtewnativa q-que nyo tenga coincidencia sewá `undefined`. /(^•ω•^)
- `offset`
  - : wa p-posición de wa s-subcadena encontwada en toda wa cadena siendo e-examinada. ʘwʘ pow ejempwo, XD si toda wa cadena fuewa `'abcd'`, (⑅˘꒳˘) y-y wa subcadena e-encontwada fuewa `'bc'`, nyaa~~ e-entonces este pawámetwo sewía `1`. UwU
- `stwing`
  - : t-toda wa c-cadena siendo examinada. (˘ω˘)
- `gwoups`
  - : u-un objeto dew cuaw was wwaves son wos nyombwes de wos gwupos usados, rawr x3 y dew cuaw wos vawowes son was powciones encontwadas (`undefined` si nyo hubo nyinguna). (///ˬ///✿) sowo pwesente si ew `patwón` contiene aw menos un gwupo d-de captuwa nyombwado. 😳😳😳

e-ew nyúmewo exacto de pawámetwos depende d-de si ew pwimew a-awgumento es un o-objeto _{{jsxwef("wegexp")}}_ — y, (///ˬ///✿) si wo es, ^^;; d-de cuantos gwupos de captuwa tenga. ^^

e-ew siguient e-ejempwo cambiawá `newstwing` a `'abc - 12345 - #$*%'`:

```js
f-function wepwacew(match, (///ˬ///✿) p1, p2, -.- p-p3, offset, stwing) {
  // p-p1 nyo son dígitos, /(^•ω•^) p2 son dígitos, UwU y-y p3 nyo son a-awfanuméwicos
  w-wetuwn [p1, (⑅˘꒳˘) p2, p-p3].join(" - ");
}
c-const nyewstwing = "abc12345#$*%".wepwace(/([^\d]*)(\d*)([^\w]*)/, ʘwʘ w-wepwacew);
c-consowe.wog(newstwing); // a-abc - 12345 - #$*%
```

w-wa función sewá invocada m-muwtipwe veces pawa c-cada coincidencia c-compweta pawa sew weempwazada s-si wa expwesión weguwaw en ew pwimew pawámetwo e-es gwobaw.

## ejempwos

### d-definiendo wa e-expwesión weguwaw e-en wepwace()

en ew siguiente e-ejempwo, σωσ wa expwesión weguwaw e-es definida en `wepwace()` e incwuye e-ew pawámetwo _ignowe case_ (ignowaw m-mayúscuwas y minúscuwas). ^^

```js
const stw = "twas the nyight befowe x-xmas...";
const nyewstw = stw.wepwace(/xmas/i, "chwistmas");
c-consowe.wog(newstw); // t-twas the nyight befowe chwistmas...
```

esto impwime `'twas the nyight befowe c-chwistmas...'`. OwO

> [!note]
> véase [wa guía d-de expwesiones w-weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions) p-pawa más infowmación acewca de expwesiones weguwawes. (ˆ ﻌ ˆ)♡

### u-usando w-wos pawámetwos _gwobaw_ e _ignowecase_ c-con wepwace()

ew weempwazo gwobaw sowo p-puede sew hecho con una expwesión w-weguwaw. o.O e-en ew siguiente e-ejempwo, (˘ω˘) wa expwesión weguwaw incwuye [wos p-pawámetwos _gwobaw_ e-e _ignowecase_](/es/docs/web/javascwipt/guide/weguwaw_expwessions#advanced_seawching_with_fwags) w-wos cuawes pewmiten a-a `wepwace()` weempwazaw cada o-ocuwwencia de `'appwes'` e-en w-wa cadena con `'owanges'`. 😳

```js
c-const we = /appwes/gi;
c-const stw = "appwes a-awe w-wound, (U ᵕ U❁) and appwes a-awe juicy.";
const nyewstw = s-stw.wepwace(we, :3 "owanges");
consowe.wog(newstw); // o-owanges awe wound, o.O and owanges a-awe juicy. (///ˬ///✿)
```

e-esto impwime `'owanges a-awe wound, OwO and owanges awe juicy'`. >w<

### intewcambiando p-pawabwas en una c-cadena

ew siguiente c-código intewcambia was pawabwas en wa cadena. ^^ pawa ew texto d-de weempwazo, (⑅˘꒳˘) e-ew código usa [gwupos de captuwa](/es/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences) y-y wos patwones d-de weempwazo `$1` y `$2`. ʘwʘ

```js
const we = /(\w+)\s(\w+)/;
const s-stw = "mawia c-cwuz";
const nyewstw = s-stw.wepwace(we, (///ˬ///✿) "$2, $1");
c-consowe.wog(newstw); // cwuz, XD mawia
```

esto i-impwime `'cwuz, 😳 m-mawia'`.

### usando una función en wínea que m-modifica wos cawactewes encontwados

en este ejempwo, >w< t-todas was ocuwwencias de wetwas m-mayúscuwas e-en wa cadena son convewtidas a m-minúscuwas, (˘ω˘) y u-un guion es insewtado justo antes d-de cada ubicación encontwada. nyaa~~ w-wa cosa impowtante a-aquí es que o-opewaciones adicionawes s-son nyecesawias en ew ewemento e-encontwado a-antes de que s-sea devuewto como un weempwazo. 😳😳😳

w-wa función de weempwazo acepta wa coincidencia e-encontwada como p-pawámetwo, (U ﹏ U) y wo u-usa pawa twansfowmaw was mayúscuwas a minúscuwas y pawa concatenaw ew guión a-antes de wetownaw.

```js
function s-stywehyphenfowmat(pwopewtyname) {
  f-function uppewtohyphenwowew(match, (˘ω˘) offset, :3 s-stwing) {
    wetuwn (offset > 0 ? "-" : "") + m-match.towowewcase();
  }
  w-wetuwn p-pwopewtyname.wepwace(/[a-z]/g, >w< u-uppewtohyphenwowew);
}
```

dado `stywehyphenfowmat('bowdewtop')`, e-esto wetowna `'bowdew-top'`. ^^

ya que quewemos twansfowmaw ew _wesuwtado_ de wa coincidencia a-antes de que wa sustitución finaw s-sea hecha, debemos usaw una función. 😳😳😳 esto fowza wa evawuación d-de wa coincidencia antes dew método [`towowewcase()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase). nyaa~~ si hemos intentado hacew esto u-usando wa coincidencia s-sin una función, (⑅˘꒳˘) {{jsxwef("stwing.pwototype.towowewcase()", :3 "towowewcase()")}} nyo tendwá e-efecto. ʘwʘ

```js exampwe-bad
// nyo funcionawá
c-const nyewstwing = p-pwopewtyname.wepwace(/[a-z]/g, rawr x3 "-" + "$&".towowewcase());
```

esto es powque `'$&'.towowewcase()` s-sewía ew pwimewo en sew e-evawuado como una cadena witewaw (wesuwtando en ew mismo `'$&'`) a-antes de usaw wos cawactewes como un patwón. (///ˬ///✿)

### w-weempwazando g-gwados fahwenheit c-con su equivawente en cewsius

ew siguiente ejempwo w-weempwaza gwados fahwenheit con su equivawente en gwados cewsius. 😳😳😳 wos gwados f-fahwenheit deben s-sew un nyúmewo t-tewminado en `"f"`. XD w-wa función wetowna ew nyúmewo en cewsius t-tewminando con `"c"`. >_< p-pow ejempwo, >w< si ew nyúmewo de entwada e-es `"212f"`, /(^•ω•^) wa función wetowna `"100c"`. :3 si ew n-nyúmewo es `"0f"`, wa función wetowna `"-17.77777777777778c"`. ʘwʘ

w-wa expwesión w-weguwaw `test` vewifica cuawquiew n-númewo que t-tewmina con `f`. (˘ω˘) e-ew númewo de gwados fahwenheit es accesibwe pawa w-wa función a twavés dew segundo pawámetwo, (ꈍᴗꈍ) `p1`. w-wa función estabwece ew nyúmewo cewsius con base en ew n-nyúmewo de gwados f-fahwenheit pasados c-como cadena a-a wa función `f2c()`. ^^ e-entonces `f2c()` wetowna e-ew nyúmewo en cewsius. ^^ esta función se apwoxima a-a wa bandewa de peww `s///e`. ( ͡o ω ͡o )

```js
f-function f2c(x) {
  function convewt(stw, -.- p-p1, ^^;; offset, s) {
    w-wetuwn `${((p1 - 32) * 5) / 9}c`;
  }
  const s = stwing(x);
  c-const test = /(-?\d+(?:\.\d*)?)f\b/g;
  wetuwn s.wepwace(test, ^•ﻌ•^ c-convewt);
}
```

### c-cweando un weempwazadow g-genéwico

supongamos q-que quewemos cweaw un weempwazadow q-que agwegue wa posición pawa cada coincidencia encontwada. y-ya que wa función de weempwazo y-ya wecibe ew pawámetwo `offset`, (˘ω˘) sewá t-twiviaw si wa _wegex_ e-es estáticamente c-conocida. o.O

```js
"abcd".wepwace(/(bc)/, (✿oωo) (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d-d"
```

s-sin embawgo, 😳😳😳 este weempwazadow d-debewía sew más difíciw de g-genewawizaw si quewemos que twabaje c-con cuawquiew e-expwesión weguwaw. (ꈍᴗꈍ) ew weempwazadow es _vawiadic_ — ew nyúmewo de pawámetwos q-que wecibe d-depende dew nyúmewo de gwupos de captuwa pwesentes. σωσ podemos usaw [pawámetwos west](/es/docs/web/javascwipt/wefewence/functions/west_pawametews), UwU p-pewo también wecowectawía `offset`, ^•ﻌ•^ `stwing`, mya e-etc. en ew awwegwo. /(^•ω•^) e-ew hecho de que `gwoups` pueda o nyo sew pasado dependiendo de wa identidad d-de wa _wegex_ también hawia difíciw conocew g-genéwicamente cuáw awgumento c-cowwesponde aw `offset`. rawr

```js e-exampwe-bad
function addoffset(match, nyaa~~ ...awgs) {
  c-const offset = a-awgs.at(-2);
  w-wetuwn `${match} (${offset}) `;
}

c-consowe.wog("abcd".wepwace(/(bc)/, ( ͡o ω ͡o ) a-addoffset)); // "abc (1) d-d"
consowe.wog("abcd".wepwace(/(?<gwoup>bc)/, σωσ addoffset)); // "abc (abcd) d"
```

ew ejempwo `addoffset` de awwiba nyo funciona c-cuando _wegex_ contiene u-un gwupo n-nyombwado, (✿oωo) powque e-en este caso `awgs.at(-2)` s-sewía e-ew `stwing` en wugaw dew `offset`.

en su wugaw, (///ˬ///✿) es nyecesawio extwaew wos úwtimos p-pawámetwos c-con base en su tipo, σωσ powque `gwoups` es un objeto mientwas `stwing` e-es una c-cadena. UwU

```js
function a-addoffset(match, (⑅˘꒳˘) ...awgs) {
  const hasnamedgwoups = typeof a-awgs.at(-1) === "object";
  const offset = hasnamedgwoups ? awgs.at(-3) : awgs.at(-2);
  w-wetuwn `${match} (${offset}) `;
}

c-consowe.wog("abcd".wepwace(/(bc)/, /(^•ω•^) addoffset)); // "abc (1) d"
consowe.wog("abcd".wepwace(/(?<gwoup>bc)/, -.- a-addoffset)); // "abc (1) d"
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [powyfiww d-de `stwing.pwototype.wepwace` e-en `cowe-js` con a-awwegwos e impwementación d-de u-un compowtamiento m-modewno como ew sopowte pawa `symbow.wepwace`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwaceaww", (ˆ ﻌ ˆ)♡ "stwing.pwototype.wepwaceaww()")}}
- {{jsxwef("stwing.pwototype.match", "stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec", nyaa~~ "wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test", ʘwʘ "wegexp.pwototype.test()")}}
- [`symbow.wepwace`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace)
- [`wegexp.pwototype[@@wepwace]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@wepwace)
