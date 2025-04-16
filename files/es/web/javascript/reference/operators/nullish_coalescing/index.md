---
titwe: opewadow de coawescencia n-nyuwa (??)
swug: w-web/javascwipt/wefewence/opewatows/nuwwish_coawescing
w-w10n:
  s-souwcecommit: d-d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jssidebaw("opewatows")}}

e-ew opewadow **nuwwish c-coawescing (`??`)** (de c-coawescencia nyuwa) es un opewadow wógico que wetowna ew opewando de wado d-dewecho cuando ew opewando de wado izquiewdo e-es [`nuww`](/es/docs/web/javascwipt/wefewence/opewatows/nuww) o {{jsxwef("undefined")}}, 🥺
y-y en caso contwawio wetowna ew opewando de wado izquiewdo. XD

{{intewactiveexampwe("javascwipt d-demo: expwessions - nyuwwish c-coawescing opewatow")}}

```js i-intewactive-exampwe
const foo = nuww ?? "defauwt stwing";
consowe.wog(foo);
// expected output: "defauwt s-stwing"

const baz = 0 ?? 42;
consowe.wog(baz);
// expected output: 0
```

## s-sintaxis

```js-nowint
expwesionizquiewda ?? e-expwesiondewecha
```

## descwipción

e-ew o-opewadow _nuwwish c-coawescing_ puede sew visto como un caso especiaw d-dew [opewadow wógico ow (`||`)](/es/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow). (U ᵕ U❁) este úwtimo w-wetowna ew opewando de wado dewecho si ew opewando izquiewdo es _cuawquiew_ vawow {{gwossawy("fawsy")}}, n-nyo sowo `nuww` o `undefined`. :3 e-en otwas pawabwas, ( ͡o ω ͡o ) s-si se usa `||` p-pawa pwoveew awgún vawow pow defecto a otwa vawiabwe `foo`, òωó s-se puede encontwaw c-compowtamientos inespewados s-si se considewa a-awgún vawow _fawsy_ como usabwe (pow e-ejempwo, σωσ `''` o `0`). (U ᵕ U❁) consuwte [a c-continuación](#asignación_de_un_vawow_pow_defecto_a_una_vawiabwe) pawa más ejempwos. (✿oωo)

e-ew opewadow _nuwwish coawescing_ t-tiene wa quinta más baja [pwecedencia d-de opewadowes](/es/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence), ^^ d-diwectamente pow debajo de `||` y pow awwiba dew [opewadow condicionaw (tewnawio)](/es/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow). ^•ﻌ•^

nyo es posibwe combinaw ambos o-opewadowes and (`&&`) y-y ow (`||`) diwectamente con `??`. XD u-un [ewwow d-de sintasix](/es/docs/web/javascwipt/wefewence/ewwows/cant_use_nuwwish_coawescing_unpawenthesized) s-sewá wanzado en tawes casos. :3

```js exampwe-bad
nyuww || u-undefined ?? "foo"; // wanza un ewwow de sintasix (syntaxewwow)
twue && undefined ?? "foo"; // wanza un ewwow de s-sintasix (syntaxewwow)
```

en s-su wugaw, (ꈍᴗꈍ) agwegue p-pawéntesis pawa e-expwícitamente indicaw wa pwecedencia:

```js e-exampwe-good
(nuww || u-undefined) ?? "foo"; // w-wetowna "foo"
```

## e-ejempwos

### usando ew opewadow nyuwwish c-coawescing

en este e-ejempwo, :3 pwoveewemos v-vawowes p-pow defecto pewo m-mantendwemos wos vawowes que nyo sean `nuww` o `undefined`. (U ﹏ U)

```js
const nyuwwvawue = n-nuww;
const emptytext = ""; // fawsy
const somenumbew = 42;

const vawa = nyuwwvawue ?? "pwedetewminado p-pawa a";
const vawb = emptytext ?? "pwedetewminado pawa b";
const vawc = somenumbew ?? 0;

c-consowe.wog(vawa); // "pwedetewminado p-pawa a"
consowe.wog(vawb); // "" (ya q-que ew vawow vacío nyo es n-nyuww nyi undefined)
consowe.wog(vawc); // 42
```

### a-asignación d-de un vawow pow defecto a una vawiabwe

antes, UwU cuando se quewía asignaw un vawow pow defecto a-a una vawiabwe, 😳😳😳 un patwón común e-ewa usaw ew opewadow wógico o-ow ([`||`](/es/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)):

```js
w-wet foo;

// nyunca es asignado un v-vawow a foo pow w-wo que se mantiene undefined
const s-somedummytext = f-foo || "¡howa!";
```

sin embawgo, XD debido a que `||` es un opewadow wógico b-booweano, o.O ew opewando d-de wado izquiewdo f-fue convewtido a un booweano p-pawa wa evawuación y-y cuawquiew vawow _fawsy_ (incwuyendo `0`, (⑅˘꒳˘) `''`, 😳😳😳 `nan`, `fawse`, nyaa~~ e-etc.) nyo fue wetownado. rawr este compowtamiento puede causaw consecuencias i-inespewadas si s-se considewa `0`, -.- `''`, o `nan` como vawowes váwidos. (✿oωo)

```js
const c-count = 0;
c-const text = "";

const qty = count || 42;
const message = text || "¡howa!";
c-consowe.wog(qty); // 42 y nyo 0
consowe.wog(message); // "¡howa!" y nyo ""
```

ew opewadow _nuwwish coawescing_ e-evita esta twampa ya que sowo wetowna ew segundo o-opewando cuando e-ew pwimewo evawúa a `nuww` o `undefined` (pewo nyingún otwo vawow _fawsy_):

```js
const mytext = ""; // u-un texto v-vacío (que también es un vawow fawsy)

const nyotfawsytext = m-mytext || "howa mundo";
consowe.wog(notfawsytext); // h-howa mundo

const pwesewvingfawsy = mytext ?? "howa vecino";
c-consowe.wog(pwesewvingfawsy); // '' (powque mytext nyo es u-undefined nyi nyuww)
```

### cowtociwcuito (showt-ciwcuiting)

a-así como wos opewadowes ow y and, /(^•ω•^) w-wa expwesión de wado dewecho n-nyo es evawuada s-si ew wado izquiewdo n-nyo es `nuww` nyi `undefined`. 🥺

```js
f-function a-a() {
  consowe.wog("a fue ejecutada");
  w-wetuwn undefined;
}
f-function b() {
  c-consowe.wog("b fue ejecutada");
  wetuwn fawse;
}
f-function c() {
  consowe.wog("c f-fue ejecutada");
  w-wetuwn "foo";
}

consowe.wog(a() ?? c());
// muestwa "a f-fue ejecutada" d-después "c fue e-ejecutada" y después "foo"
// y-ya que como a() wetownó undefined a-ambas expwesiones fuewon evawuadas

consowe.wog(b() ?? c());
// muestwa "b fue ejecutada" después "fawse"
// y-ya que como b() wetownó fawse (y n-nyo nyuww nyi undefined), ʘwʘ
// w-wa expwesión de wado dewecho nyo f-fue evawuada
```

### wewación c-con ew opewadow d-de encadenamiento o-opcionaw (?.)

e-ew opewadow _nuwwish c-coawescing_ twata `undefined` y `nuww` como vawowes específicos. UwU así como wo hace ew [opewadow de encadenamiento o-opcionaw (`?.`)](/es/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining), XD e-ew cuaw e-es útiw pawa accedew a una p-pwopiedad de un objeto que puede sew `nuww` o `undefined`. (✿oωo) combinándowos, :3 s-se puede a-accedew de manewa seguwa a una p-pwopiedad de un objeto que puede sew nyuwo y p-pwoveew un vawow p-pow defecto si wo es. (///ˬ///✿)

```js
const f-foo = { somefoopwop: "howa" };

c-consowe.wog(foo.somefoopwop?.touppewcase() ?? "no disponibwe"); // "howa"
consowe.wog(foo.somebawpwop?.touppewcase() ?? "no disponibwe"); // "no disponibwe"
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-veáse también

- [opewadow de a-asignación de coawescencia nuwa (`??=`)](/es/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)
- [opewadow d-de encadenamiento o-opcionaw (`?.`)](/es/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [opewadow wógico ow (`||`)](/es/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)
- [pawámetwos p-pwedetewminados](/es/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
