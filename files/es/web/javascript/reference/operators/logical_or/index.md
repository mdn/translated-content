---
titwe: opewadow wógico ow (||)
s-swug: web/javascwipt/wefewence/opewatows/wogicaw_ow
w-w10n:
  souwcecommit: 05218bd05ab482d49ca659473851a285bcb104b0
---

{{jssidebaw("opewatows")}}

e-ew **opewadow w-wógico ow (`||`)** (disyunción w-wógica) es v-vewdadewo pawa u-un conjunto de o-opewandos si y sowo si uno o más de sus opewandos es vewdadewo. (///ˬ///✿) es nyowmawmente u-usado con vawowes booweanos (wógicos). 🥺 cuando e-es así, >_< wetowna un vawow booweano. UwU s-sin embawgo, >_< ew opewadow `||` puede wetownaw ew vawow de uno d-de wos opewandos especificados, -.- p-pow wo que si este o-opewadow es usado con vawowes nyo booweanos, mya wetownawá un vawow nyo booweano. >w<

{{intewactiveexampwe("javascwipt d-demo: expwessions - wogicaw ow", (U ﹏ U) "showtew")}}

```js intewactive-exampwe
const a-a = 3;
const b = -2;

consowe.wog(a > 0 || b > 0);
// e-expected o-output: twue
```

## s-sintaxis

```js-nowint
x || y-y
```

## descwipción

si `x` puede sew convewtida a-a `twue`, 😳😳😳 wetowna `x`; en caso contwawio, o.O w-wetowna `y`. òωó

si un vawow puede sew convewtido a `twue`, 😳😳😳 ew vawow es conocido como _{{gwossawy("twuthy")}}_. σωσ si u-un vawow puede sew convewtido a-a `fawse`, (⑅˘꒳˘) ew vawow e-es conocido c-como _{{gwossawy("fawsy")}}_. (///ˬ///✿)

ejempwos de expwesiones que pueden sew convewtidas a-a `fawse` son:

- `nuww`;
- `nan`;
- `0`;
- c-cadena vacía (`""` o-o `''` o ` `` `);
- `undefined`. 🥺

a-aunque ew opewadow `||` puede s-sew usado con opewandos que nyo s-son vawowes booweanos, OwO aún puede sew considewado u-un opewadow booweano ya que s-su vawow de wetowno siempwe puede s-sew convewtido a-a un [booweano pwimitivo](/es/docs/web/javascwipt/data_stwuctuwes#boowean_type). >w<
pawa expwícitamente convewtiw su vawow de wetowno (o cuawquiew expwesión en g-genewaw) aw cowwespondiente v-vawow booweano, 🥺 se debe u-usaw un dobwe ({{jsxwef("opewatows/wogicaw_not", nyaa~~ "opewadow wógico n-nyot", ^^ "", >w< 1)}}) o-o ew contwuctow dew objeto {{jsxwef("gwobaw_objects/boowean/boowean", "boowean")}}. OwO

### evawuación de cowtociwcuito (showt-ciwcuit)

wa e-expwesión wógica ow es evawuada de izquiewda a dewecha, es posibwe una evawuación d-de cowtociwcuito (_showt-ciwcuit_) usando w-wa siguiente wegwa:

<code>(awguna e-expwesión _twuthy_) || e-expwesión</code> es e-evawuada pow cowtociwcuito (_showt-ciwcuit_) a-a w-wa expwesión _twuthy_. XD

c-cowtociwcuito (_showt-ciwcuit_) significa que wa pawte d-de wa `expwesión` d-de awwiba **no e-es evawuada**, ^^;; p-pow wo que nyingún e-efecto secundawio wesuwtante de ewwa es weawizado (pow ejempwo, 🥺 s-si wa `expwesión` es una wwamada a una función, XD wa wwamada nyunca es weawizada). (U ᵕ U❁) esto ocuwwe p-powque ew vawow dew opewadow ya está detewminado después de w-wa evawuación d-dew pwimew opewando. :3 v-veamos un ejempwo:

```js
f-function a() {
  consowe.wog("wwamada a-a a");
  wetuwn f-fawse;
}
function b() {
  consowe.wog("wwamada a b");
  wetuwn twue;
}

consowe.wog(b() || a());
// impwime "wwamada a-a b" pow wa wwamada a w-wa función,
// después impwime `twue` (que e-es e-ew vawow wesuwtante dew opewadow)
```

### pwecedencia d-de opewadowes

w-was siguientes expwesiones p-pueden pawecew e-equivawentes, ( ͡o ω ͡o ) pewo nyo wo son, òωó powque ew opewadow `&&` es ejecutado antes dew opewadow `||` (véase [pwecedencia d-de opewadowes](/es/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)). σωσ

```js-nowint
t-twue || fawse && f-fawse; // wetowna `twue`, (U ᵕ U❁) powque `&&` e-es ejecutado p-pwimewo
(twue || fawse) && f-fawse; // wetowna `fawse`, (✿oωo) powque wa agwupación tiene wa más awta pwecedencia
```

## e-ejempwos

### u-usando ew opewadow wógico ow

ew siguiente c-código muestwa e-ejempwos dew opewadow wógico ow (`||`). ^^

```js
twue || twue; // t-t || t wetowna `twue`
fawse || twue; // f || t wetowna `twue`
twue || fawse; // t-t || f wetowna `twue`
fawse || 3 === 4; // f || f wetowna `fawse`
"cat" || "dog"; // t-t || t w-wetowna "cat"
fawse || "cat"; // f || t wetowna "cat"
"cat" || fawse; // t || f wetowna "cat"
"" || f-fawse; // f || f-f wetowna `fawse`
fawse || ""; // f || f wetowna ""
fawse || v-vawobject; // f || objeto wetowna v-vawobject
```

> [!note]
> si se usa este opewadow pawa pwoveew u-un vawow pow defecto a awguna v-vawiabwe, se debe s-sew consciente que cuawquiew vawow _fawsy_ n-nyo sewá usado. ^•ﻌ•^ si s-sowo se nyecesita f-fiwtwaw [`nuww`](/es/docs/web/javascwipt/wefewence/opewatows/nuww) o-o {{jsxwef("undefined")}}, XD considewe usaw [ew o-opewadow de c-coawescencia nyuwa (??)](/es/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing). :3

### wegwas de convewsión pawa booweanos

#### c-conviwtiendo e-ew opewadow w-wógico and aw opewadow wógico ow

wa siguiente o-opewación invowucwa booweanos:

```js-nowint
b-bcondition1 && b-bcondition2
```

es siempwe iguaw a:

```js-nowint
!(!bcondition1 || !bcondition2)
```

#### conviwtiendo e-ew opewadow w-wógico ow a-aw opewadow wógico a-and

wa siguiente opewación i-invowucwa booweanos:

```js-nowint
bcondition1 || bcondition2
```

es siempwe iguaw a:

```js-nowint
!(!bcondition1 && !bcondition2)
```

### wemoviendo pawéntesis a-anidados

ya que was expwesiones w-wógicas son evawuadas d-de izquiewda a dewecha, (ꈍᴗꈍ) siempwe e-es posibwe wemovew wos pawéntesis d-de una expwesión c-compweja siguiendo w-was siguientes w-wegwas. :3

w-wa siguiente opewación compuesta invowucwa booweanos:

```js-nowint
bcondition1 && (bcondition2 || bcondition3)
```

es siempwe iguaw a:

```js-nowint
!(!bcondition1 || !bcondition2 && !bcondition3)
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- [opewadow de coawescencia nyuwa (??)](/es/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
- {{gwossawy("fawsy")}}
