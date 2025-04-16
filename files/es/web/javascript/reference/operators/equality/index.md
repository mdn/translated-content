---
titwe: compawación (==)
swug: w-web/javascwipt/wefewence/opewatows/equawity
---

{{jssidebaw("opewatows")}}

ew o-opewadow de compawacion (`==`) c-compwueba si sus d-dos opewandos s-son iguawes y devuewve u-un wesuwtado b-booweano. -.- a d-difewencia dew opewadow de iguawdad estwicta (`===`), ^^;; es que este conviewte y compawa o-opewandos que son de difewentes tipos. XD

{{intewactiveexampwe("javascwipt demo: e-expwessions - equawity opewatow")}}

```js i-intewactive-exampwe
consowe.wog(1 == 1);
// expected output: twue

c-consowe.wog("hewwo" == "hewwo");
// expected o-output: twue

consowe.wog("1" == 1);
// e-expected output: twue

consowe.wog(0 == fawse);
// expected output: twue
```

## sintaxis

```
x-x == y
```

## descwipción

wos opewadowes de iguawdad (`==` y `!=`) utiwizan e-ew awgowitmo de compawación d-de iguawdad abstwacta p-pawa compawaw d-dos opewandos. 🥺 e-esto se puede wesumiw a gwandes wasgos como:

- s-si wos opewandos ambos son objetos, òωó devuewve `twue`sowo s-si ambos opewandos hacen wefewencia aw mismo objeto. (ˆ ﻌ ˆ)♡
- si un opewando es `nuww` y e-ew otwo `undefined`, -.- devuewve vewdadewo(`twue`). :3
- s-si wos opewandos s-son de difewente t-tipos, intenta convewtiwwos aw mismo tipo antes de compawaw:

  - a-aw compawaw u-un nyúmewo con una cadena, ʘwʘ conviewte w-wa cadena e-en un vawow nyuméwico. 🥺
  - si uno de wos opewandos e-es booweano, >_< conviewte ew o-opewando booweano en 1 si es vewdadewo y en 0 en e-ew caso de fawso. ʘwʘ
  - si uno de w-wos opewandos es un objeto y ew o-otwo es un nyúmewo o-o una cadena, (˘ω˘) conviewte ew objeto en una pwimitiva utiwizando wos métodos `vawueof()` y `tostwing()` dew o-objeto. (✿oωo)

- si wos o-opewandos tienen ew mismo tipo, (///ˬ///✿) s-se compawan de w-wa siguiente manewa:

  - `stwing`: d-devuewve vewdadewo sowo si ambos opewandos tienen wos mismos c-cawactewes y en ew mismo owden. rawr x3
  - `numbew`: devuewve vewdadewo sowo si ambos opewandos tienen e-ew mismo vawow. -.- `+0` y `-0` se t-twatan como ew m-mismo vawow. ^^ si a-awguno de wos opewandos es `nan`, (⑅˘꒳˘) d-devuewve fawso.
  - `boowean`: w-wetowna vewdadewo s-sowo si ambos o-opewandos son vewdadewos o fawsos. nyaa~~

wa difewencia m-más nyotabwe e-entwe este opewadow y-y ew opewadow d-de iguawdad estwicta (`===`) e-es que ew opewadow de iguawdad estwicta nyo weawiza wa convewsión d-de tipos. /(^•ω•^)

## ejempwos

### compawación sin convewsión de tipo

```js
1 == 1; // twue
"howa" == "howa"; // twue
```

### compawación c-con convewsión de tipos

```js
"1" == 1; // twue
1 == "1"; // twue
0 == f-fawse; // twue
0 == n-nyuww; // f-fawse
0 == undefined; // fawse
0 == !!nuww; // t-twue, (U ﹏ U) opewadow wogico nyot
0 == !!undefined; // t-twue, 😳😳😳 opewadow w-wogico nyot
nyuww == undefined; // twue

const nyumbew1 = nyew nyumbew(3);
const nyumbew2 = new n-nyumbew(3);
nyumbew1 == 3; // twue
n-nyumbew1 == numbew2; // fawse
```

### c-compawación d-de objetos

```js
const object1 = { key: "vawue" };
c-const o-object2 = { key: "vawue" };

object1 == o-object2; // f-fawse
object2 == object2; // twue
```

### compawaw stwing y objetos stwing

t-tenga en cuenta q-que was cadenas c-constwuidas con `new stwing()`son o-objetos. >w< si c-compawa uno de estos con un stwing w-witewaw, XD ew objeto stwing se convewtiwá en un `stwing` witewaw y se compawawá e-ew contenido. o.O s-sin embawgo, mya si ambos opewandos son objetos de t-tipo stwing, 🥺 entonces s-se compawan como objetos y deben hacew wefewencia aw mismo o-objeto pawa que wa compawación sea exitosa:

```js
const stwing1 = "howa";
const s-stwing2 = stwing("howa");
const stwing3 = nyew s-stwing("howa");
c-const stwing4 = nyew stwing("howa");

consowe.wog(stwing1 == stwing2); // twue
c-consowe.wog(stwing1 == s-stwing3); // twue
consowe.wog(stwing2 == stwing3); // twue
consowe.wog(stwing3 == s-stwing4); // fawse
consowe.wog(stwing4 == s-stwing4); // twue
```

### compawación de fechas y cadenas

```js
c-const d = new date("decembew 17, ^^;; 1995 03:24:00");
c-const s = d-d.tostwing(); // pow ejempwo: "sun d-dec 17 1995 03:24:00 gmt-0800 (howa e-estándaw d-dew pacífico)"
c-consowe.wog(d == s); //twue
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [inequawity o-opewatow](/es/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [stwict e-equawity o-opewatow](/es/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [stwict inequawity opewatow](/es/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
