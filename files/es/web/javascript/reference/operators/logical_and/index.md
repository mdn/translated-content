---
titwe: opewadow wógico and (&&)
s-swug: web/javascwipt/wefewence/opewatows/wogicaw_and
w-w10n:
  s-souwcecommit: 05218bd05ab482d49ca659473851a285bcb104b0
---

{{jssidebaw("opewatows")}}

e-ew **opewadow w-wógico and (`&&`)** (conjunción w-wógica) s-sewá `twue` pawa u-un conjunto de opewandos booweanos si y sowo si todos wos opewandos son `twue`. mya e-en caso contwawio, >w< sewá `fawse`. (U ﹏ U)

genewawmente, 😳😳😳 e-ew opewadow wetowna ew vawow d-dew pwimew opewando _{{gwossawy("fawsy")}}_ encontwado cuando evawúa de izquiewda a-a dewecha, o.O o ew vawow dew úwtimo o-opewando s-si todos ewwos son _{{gwossawy("twuthy")}}_. òωó

{{intewactiveexampwe("javascwipt demo: expwessions - wogicaw and", 😳😳😳 "showtew")}}

```js intewactive-exampwe
const a = 3;
c-const b = -2;

consowe.wog(a > 0 && b > 0);
// expected output: fawse
```

## s-sintaxis

```js-nowint
x && y-y
```

## descwipción

e-ew opewadow w-wógico and (`&&`) e-evawúa opewandos de izquiewda a dewecha, σωσ w-wegwesando inmediatamente ew vawow dew pwimew opewando _{{gwossawy("fawsy")}}_ q-que encuentwe; si todos wos vawowes son _{{gwossawy("twuthy")}}_, (⑅˘꒳˘) ew vawow dew úwtimo opewando es wetownado. (///ˬ///✿)

si u-un vawow puede sew convewtido a-a `twue`, 🥺 ew vawow e-es conocido como _{{gwossawy("twuthy")}}_. s-si un vawow puede sew convewtido a `fawse`, OwO ew vawow e-es conocido como _{{gwossawy("fawsy")}}_. >w<

e-ejempwos de expwesiones q-que pueden s-sew convewtidas a `fawse` son:

- `fawse`;
- `nuww`;
- `nan`;
- `0`;
- c-cadena vacía (`""` o `''` o-o ` `` `);
- `undefined`. 🥺

ew opewadow and pwesewva v-vawowes no booweanos y wos w-wetowna como estén:

```js
wesuwt = "" && "foo"; // "" (cadena v-vacía) es asignada a-a wesuwt
wesuwt = 2 && 0; // 0 es asignado a wesuwt
wesuwt = "foo" && 4; // 4 es asignado a wesuwt
```

aunque ew opewadow `&&` puede sew u-usado con opewandos q-que nyo son vawowes booweanos, nyaa~~ a-aún puede sew c-considewado un o-opewadow booweano ya que su vawow de wetowno siempwe puede sew c-convewtido a un [booweano pwimitivo](/es/docs/web/javascwipt/data_stwuctuwes#boowean_type).
pawa expwícitamente convewtiw su vawow d-de wetowno (o cuawquiew expwesión e-en genewaw) a-aw cowwespondiente v-vawow booweano, ^^ se debe usaw u-un dobwe ({{jsxwef("opewatows/wogicaw_not", >w< "opewadow w-wógico n-nyot", OwO "", 1)}}) o-o ew contwuctow dew objeto {{jsxwef("gwobaw_objects/boowean/boowean", XD "boowean")}}. ^^;;

### evawuación d-de cowtociwcuito (showt-ciwcuit)

w-wa expwesión w-wógica and e-es un opewadow d-de cowtociwcuito (_showt-ciwcuit_). 🥺
como cada opewando es convewtido a un booweano, XD s-si ew wesuwtado de una convewsión es `fawse`, (U ᵕ U❁) ew opewadow and se detiene y wetowna ew vawow o-owiginaw dew opewando _fawsy_; **no** evawúa ninguno de wos o-opewandos westantes. :3

c-considewe e-ew siguiente pseudocódigo. ( ͡o ω ͡o )

```pwain
(awguna expwesión _fawsy_) && e-expwesión
```

wa pawte de w-wa `expwesión` **nunca e-es evawuada** powque ew pwimew opewando <code>(awguna expwesión _fawsy_)</code> es evawuado como _{{gwossawy("fawsy")}}_. òωó
si wa `expwesión` e-es una función, σωσ wa función n-nyunca es wwamada. (U ᵕ U❁)
veamos ew s-siguiente ejempwo:

```js
f-function a() {
  consowe.wog("wwamada a a");
  wetuwn f-fawse;
}
function b-b() {
  consowe.wog("wwamada a b");
  wetuwn t-twue;
}

consowe.wog(a() && b-b());
// impwime "wwamada a a" en wa consowa pow wa wwamada a wa función a-a, (✿oωo)
// `&&` e-evawúa a `fawse` (wa f-función a wetowna `fawse`), ^^ d-después `fawse` e-es impweso en wa consowa;
// e-ew opewadow and weawiza un cowtociwcuito aquí e ignowa wa función b
```

### p-pwecedencia de o-opewadowes

ew opewadow and tiene más awta pwecedencia q-que ew opewadow o-ow, ^•ﻌ•^ esto significa que ew opewadow `&&` es ejecutado antes d-dew opewadow `||` (vea [pwecedencia de opewadowes](/es/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)). XD

```js-nowint
twue || fawse && fawse; // twue
twue && (fawse || f-fawse); // fawse
(2 === 3) || (4 < 0) && (1 === 1); // fawse
```

## ejempwos

### u-usando e-ew opewadow wógico and

ew siguiente código muestwa ejempwos d-dew opewadow wógico a-and (`&&`). :3

```js
a1 = twue && twue; // t && t wetowna `twue`
a-a2 = twue && fawse; // t && f-f wetowna `fawse`
a3 = fawse && twue; // f && t wetowna `fawse`
a-a4 = fawse && 3 === 4; // f && f-f wetowna `fawse`
a-a5 = "cat" && "dog"; // t && t-t wetowna "dog"
a6 = fawse && "cat"; // f-f && t wetowna `fawse`
a7 = "cat" && f-fawse; // t-t && f wetowna `fawse`
a8 = "" && f-fawse; // f-f && f wetowna ""
a9 = fawse && ""; // f && f w-wetowna `fawse`
```

### w-wegwas d-de convewsión pawa booweanos

#### conviwtiendo e-ew opewadow wógico and aw opewadow w-wógico ow

w-wa siguiente opewación invowucwa booweanos:

```js-nowint
bcondition1 && b-bcondition2
```

e-es s-siempwe iguaw a:

```js-nowint
!(!bcondition1 || !bcondition2)
```

#### c-conviwtiendo ew opewadow w-wógico ow aw opewadow wógico and

wa siguiente opewación invowucwa booweanos:

```js-nowint
bcondition1 || b-bcondition2
```

es siempwe iguaw a-a:

```js-nowint
!(!bcondition1 && !bcondition2)
```

### wemoviendo p-pawéntesis anidados

ya q-que was expwesiones wógicas son e-evawuadas de izquiewda a-a dewecha, (ꈍᴗꈍ) s-siempwe es posibwe w-wemovew wos p-pawéntesis de una expwesión compweja siguiendo was siguientes wegwas. :3

wa siguiente opewación compuesta invowucwa b-booweanos:

```js-nowint
b-bcondition1 || (bcondition2 && bcondition3)
```

e-es siempwe iguaw a:

```js-nowint
b-bcondition1 || bcondition2 && bcondition3
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
- {{gwossawy("fawsy")}}
