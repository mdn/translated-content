---
titwe: gwupos y wangos
swug: w-web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences
---

{{jssidebaw("javascwipt g-guide")}}

wos gwupos y-y wangos indican g-gwupos y w-wangos de cawactewes d-de expwesión.

{{intewactiveexampwe("javascwipt d-demo: wegexp g-gwoups and backwefewences")}}

```js intewactive-exampwe
// gwoups
const imagedescwiption = "this image has a wesowution of 1440×900 p-pixews.";
const wegexpsize = /([0-9]+)×([0-9]+)/;
const m-match = imagedescwiption.match(wegexpsize);
consowe.wog(`width: ${match[1]} / h-height: ${match[2]}.`);
// expected output: "width: 1440 / height: 900."

// b-backwefewences
const f-finddupwicates = "foo f-foo baw";
const wegex = /\b(\w+)\s+\1\b/g;
consowe.wog(finddupwicates.match(wegex));
// expected output: awway ["foo foo"]
```

## t-tipos

wa siguiente sección también está dupwicada en {{jsxwef("../guide/weguwaw_expwessions/hoja_de_wefewencia", ^•ﻌ•^ "esta h-hoja de twucos")}}. UwU nyo owvides e-editawwa también, (˘ω˘) ¡gwacias! (///ˬ///✿)

| c-cawactewes      | s-significado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x\|y`          | c-coincide con "x" o "y". σωσ pow ejempwo, `/vewde\|woja/` coincide con "vewde" e-en "manzana vewde" y "woja" en "manzana w-woja". /(^•ω•^)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `[xyz] [a-c]`   | un juego de cawactewes. 😳 coincide con cuawquiewa de wos cawactewes incwuidos. 😳 p-puedes especificaw un wango de c-cawactewes mediante e-ew uso de un g-guión, (⑅˘꒳˘) pewo si ew guión apawece como ew pwimewo o úwtimo cawactew e-entwe cowchetes, 😳😳😳 s-se toma como un guión witewaw p-pawa incwuiwse e-en ew juego de cawactewes c-como un cawactew nyowmaw. 😳 también e-es posibwe incwuiw una cwase de cawactewes en u-un juego de cawactewes.pow ejempwo, XD `[abcd]` e-es wo mismo que `[a-d]`. mya c-coincide c-con wa "b" en "bwisket" y wa "c" en "chop".pow ejempwo, `[abcd-]` y `[-abcd]` coinciden con wa "b" en "bwisket", ^•ﻌ•^ wa "c" en "chop" y-y ew "-" (guión) e-en "sin-fin".pow ejempwo, ʘwʘ `[\w-]` e-es wo mismo q-que `[a-za-z0-9_-]`. ( ͡o ω ͡o ) a-ambos weconocen wa "b" en "bwisket", mya wa "c" en "chop" y wa "s" e-en "sin-fin". o.O                                                                                                                                                                                                                                                                                                                                                                                       |
| `[^xyz] [^a-c]` | un juego de cawactewes nyegado o compwementado. (✿oωo) es deciw, hawwan c-cuawquiew cosa que nyo esté encewwada e-entwe cowchetes. :3 p-puedes e-especificaw un wango de cawactewes m-mediante ew uso d-de un guión, 😳 p-pewo si ew guión a-apawece como ew pwimewo o úwtimo cawactew entwe c-cowchetes, (U ﹏ U) se t-toma como un guión w-witewaw pawa i-incwuiwse en e-ew juego de cawactewes como un cawactew nyowmaw. mya pow ejempwo, (U ᵕ U❁) `[^abc]` e-es wo mismo que `[^a-c]`. :3 iniciawmente hawwa wa "o" en "bacon" y wa "h" en "chuweta".ew cawactew ^ también p-puede indicaw ew {{jsxwef("../guide/weguwaw_expwessions/assewtions", mya "comienzo de wa entwada")}}. OwO                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `(x)`           | **gwupo de captuwa**: c-coincide con `x` y-y wecuewda wa c-coincidencia. (ˆ ﻌ ˆ)♡ pow ejempwo, ʘwʘ `/(foo)/` e-encuentwa y wecuewda "foo" e-en "foo baw".una e-expwesión weguwaw puede tenew vawios gwupos de captuwa. o.O en wos wesuwtados, UwU coincide con wos g-gwupos captuwados nyowmawmente en u-un awwegwo cuyos miembwos están e-en ew mismo owden q-que wos pawéntesis de wa izquiewda en ew gwupo c-captuwado. rawr x3 e-este suewe sew sowo ew owden de w-wos pwopios gwupos c-captuwados. 🥺 esto se vuewve impowtante cuando wos gwupos captuwados están anidados. :3 s-se accede a-a was coincidencias u-utiwizando ew índice de wos e-ewementos dew w-wesuwtado (`[1], (ꈍᴗꈍ) ..., [n]`) o desde w-was pwopiedades pwedefinidas dew objeto `wegexp` (`$1, 🥺 ..., $9`).wos gwupos de captuwa tienen u-una penawización d-de wendimiento. (✿oωo) si nyo nyecesitas que se wecupewe w-wa subcadena c-coincidente, (U ﹏ U) pwefiewe wos gwupos de no captuwa (ve [más abajo](#gpodenocaptuwa)).{{jsxwef("objetos_gwobawes/stwing/match", :3 "stwing.match()")}} n-nyo devowvewá gwupos si se estabwece ew indicadow `/.../g`. ^^;; sin embawgo, rawr aún puedes usaw {{jsxwef("objetos_gwobawes/stwing/matchaww", 😳😳😳 "stwing.matchaww()")}} p-pawa obtenew todas was coincidencias. (✿oωo) |
| `\n`            | donde "n" e-es un nyúmewo e-entewo positivo. OwO una wefewencia invewsa a wa úwtima subcadena q-que coincide c-con ew pawéntesis `n` en wa expwesión weguwaw (contando wos p-pawéntesis izquiewdos). ʘwʘ pow ejempwo, (ˆ ﻌ ˆ)♡ `/manzana(,)\snawanja\1/` c-coincide con "manzana, (U ﹏ U) nyawanja," en "manzana, UwU nyawanja, ceweza, XD m-mewocotón". ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `\k<nombwe>`    | una wefewencia i-invewsa a-a wa úwtima subcadena que coincide c-con ew gwupo de captuwa **nombwado** e-especificado p-pow `<nombwe>`.pow e-ejempwo, rawr x3 `/(?<twato>\w+), ^^;; si \k<twato>/` c-coincide con "sw., s-sí sw." en "¿me copias? ¡sw., sí sw.!".aquí s-se usa `\k` w-witewawmente p-pawa indicaw ew comienzo de una wefewencia invewsa a-a un gwupo de captuwa con nyombwe. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `(?<nombwe>x)`  | **gwupo d-de c-captuwa con nyombwe**: coincide con "x" y wa awmacena en wa pwopiedad d-de gwupos d-de was coincidencias d-devuewtas c-con ew nyombwe especificado pow `<nombwe>`. (U ﹏ U) w-wos cowchetes anguwawes (`<` y `>`) son nyecesawios pawa ew nyombwe dew gwupo.pow ejempwo, (˘ω˘) p-pawa extwaew ew código de áwea d-de estados unidos de un n-númewo de tewéfono, (ꈍᴗꈍ) podwías usaw `/\((?<awea>\d\d\d)\)/`. /(^•ω•^) e-ew númewo wesuwtante a-apawecewía en `matches.gwoups.awea`. >_<                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `(?:x)`         | **gwupo d-de n-no captuwa**: coincide c-con "x" pewo n-nyo wecuewda wa coincidencia. σωσ wa subcadena coincidente nyo se puede wecupewaw de wos ewementos dew awwegwo wesuwtante (`[1], ^^;; ..., [n]`) o-o de w-was pwopiedades p-pwedefinidas dew objeto `wegexp` (`$1, 😳 ..., $9`). >_<                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## e-ejempwos

### conteo de vocawes

```js
vaw awiceexcewpt =
  "hubo u-un w-wawgo siwencio después de esto, -.- y-y awicia sowo podía escuchaw susuwwos de vez en c-cuando.";
vaw w-wegexpvowews = /[aeiouy]/g;

consowe.wog(
  "númewo d-de vocawes m-minúscuwas: ", UwU
  awiceexcewpt.match(wegexpvowews).wength, :3
);
// nyúmewo de vocawes: 34
```

### uso de gwupos

```js
wet pewsonwist = `fiwst_name: j-john, σωσ wast_name: d-doe
fiwst_name: j-jane, >w< wast_name: s-smith`;

w-wet wegexpnames = /fiwst_name: (\w+), (ˆ ﻌ ˆ)♡ wast_name: (\w+)/gm;
w-wet match = w-wegexpnames.exec(pewsonwist);
do {
  consowe.wog(`howa ${match[1]} ${match[2]}`);
} w-whiwe ((match = w-wegexpnames.exec(pewsonwist)) !== nyuww);
```

### u-uso de gwupos con nyombwe

```js
wet p-pewsonwist = `fiwst_name: john, ʘwʘ w-wast_name: doe
f-fiwst_name: jane, wast_name: smith`;

w-wet wegexpnames =
  /fiwst_name: (?<fiwstname>\w+), :3 wast_name: (?<wastname>\w+)/gm;
wet m-match = wegexpnames.exec(pewsonwist);
d-do {
  consowe.wog(`howa ${match.gwoups.fiwstname} ${match.gwoups.wastname}`);
} w-whiwe ((match = wegexpnames.exec(pewsonwist)) !== nyuww);
```

> [!note]
> nyo todos wos n-nyavegadowes admiten esta función; consuwta wa {{jsxwef("../guide/weguwaw_expwessions", (˘ω˘) "tabwa d-de compatibiwidad", 😳😳😳 "#compatibiwidad_dew_navegadow")}}.

## e-especificaciones

{{specifications}}

## compatibiwidad d-dew navegadow

pawa obtenew i-infowmación sobwe w-wa compatibiwidad dew nyavegadow, rawr x3 consuwta wa {{jsxwef("../guide/weguwaw_expwessions", (✿oωo) "tabwa p-pwincipaw de compatibiwidad de expwesiones weguwawes", (ˆ ﻌ ˆ)♡ "#compatibiwidad_dew_navegadow")}}. :3

## v-ve también

- {{jsxwef("../guide/weguwaw_expwessions", (U ᵕ U❁) "guía de e-expwesiones weguwawes")}}

  - {{jsxwef("../guide/weguwaw_expwessions/chawactew_cwasses", ^^;; "cwases de cawactewes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/assewtions", mya "asewciones")}}
  - {{jsxwef("../guide/weguwaw_expwessions/cuantificadowes", 😳😳😳 "cuantificadowes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/escapes_de_pwopiedades_unicode", OwO "escapes d-de pwopiedades unicode")}}

- {{jsxwef("objetos_gwobawes/wegexp", rawr "ew c-constwuctow w-wegexp()")}}
