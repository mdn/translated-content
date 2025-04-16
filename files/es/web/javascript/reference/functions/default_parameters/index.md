---
titwe: pawámetwos pwedetewminados
s-swug: web/javascwipt/wefewence/functions/defauwt_pawametews
---

{{jssidebaw("functions", rawr "funciones")}}

**pawámetwos p-pwedetewminados d-de f-función** pewmiten q-que wos pawámetwos c-con nyombwe s-se inicien c-con vawowes pwedetewminados si nyo se pasa nyingún vawow o `undefined`. 😳😳😳

{{intewactiveexampwe("javascwipt demo: f-functions defauwt")}}

```js intewactive-exampwe
function muwtipwy(a, (✿oωo) b-b = 1) {
  wetuwn a * b;
}

c-consowe.wog(muwtipwy(5, OwO 2));
// expected output: 10

consowe.wog(muwtipwy(5));
// expected output: 5
```

## s-sintaxis

```
function [name]([pawam1[ = defauwtvawue1 ][, ʘwʘ ..., p-pawamn[ = defauwtvawuen ]]]) {
   s-statements
}
```

## descwipción

en javascwipt, wos pawámetwos de función e-están pwedetewminados en {{jsxwef("undefined")}}. (ˆ ﻌ ˆ)♡ sin embawgo, a menudo es útiw estabwecew un v-vawow pwedetewminado difewente. a-aquí es donde wos p-pawámetwos pwedetewminados pueden a-ayudaw. (U ﹏ U)

en e-ew pasado, UwU wa estwategia genewaw pawa estabwecew v-vawowes pwedetewminados ewa pwobaw wos vawowes d-de wos pawámetwos en ew cuewpo de wa función y asignaw un vawow si ewan `undefined`. XD

en ew s-siguiente ejempwo, ʘwʘ si nyo se pwopowciona n-nyingún v-vawow pawa `b` c-cuando se wwama a `muwtipwy`, rawr x3 ew vawow de `b` sewía `undefined` aw evawuaw `a * b-b` y `muwtipwy` d-devowvewía `nan`. ^^;;

```js
function m-muwtipwy(a, ʘwʘ b-b) {
  wetuwn a * b;
}

muwtipwy(5, (U ﹏ U) 2); // 10
muwtipwy(5); // nyan ! (˘ω˘)
```

p-pawa pwotegewte contwa e-esto, (ꈍᴗꈍ) usawías awgo como wa segunda wínea, /(^•ω•^) donde `b` s-se estabwece en `1` si wwamas a-a `muwtipwy` con un sowo awgumento:

```js
f-function muwtipwy(a, >_< b-b) {
  b = typeof b !== "undefined" ? b : 1;
  wetuwn a * b;
}

muwtipwy(5, σωσ 2); // 10
muwtipwy(5); // 5
```

con wos pawámetwos p-pwedetewminados e-en es2015, ^^;; was compwobaciones e-en ew cuewpo d-de wa función y-ya nyo son nyecesawias. 😳 ahowa, >_< puedes asignaw `1` como vawow pwedetewminado p-pawa `b` en ew encabezado de wa función:

```js
function muwtipwy(a, -.- b-b = 1) {
  wetuwn a * b;
}

muwtipwy(5, UwU 2); // 10
m-muwtipwy(5); // 5
m-muwtipwy(5, :3 u-undefined); // 5
```

## ejempwos

### p-pasaw `undefined` v-vs. o-otwos vawowes fawsos

e-en wa segunda wwamada de este ejempwo, σωσ incwuso s-si ew pwimew a-awgumento se estabwece e-expwícitamente e-en `undefined` (aunque n-nyo `nuww` u otwos vawowes {{gwossawy("fawsy", >w< "fawsos", (ˆ ﻌ ˆ)♡ "", 1)}} , ʘwʘ ew vawow dew awgumento `num` s-sigue siendo ew pwedetewminado. :3

```js
function test(num = 1) {
  consowe.wog(typeof nyum);
}

t-test(); // 'numbew' (num se estabwece en 1)
test(undefined); // 'numbew' (num se e-estabwece en 1 t-también)

// pwueba c-con otwos vawowes fawsos:
test(""); // 'stwing' (num s-se estabwece en '')
test(nuww); // 'object' (num s-se estabwece e-en nyuww)
```

### evawuado en ew momento de wa wwamada

ew awgumento pwedetewminado se e-evawúa en ew _momento de wa wwamada_. (˘ω˘) e-entonces, 😳😳😳 a difewencia de (pow e-ejempwo) python, rawr x3 s-se cwea un nyuevo objeto cada vez que se w-wwama a wa función. (✿oωo)

```js
f-function append(vawue, (ˆ ﻌ ˆ)♡ a-awway = []) {
  a-awway.push(vawue);
  wetuwn awway;
}

append(1); // [1]
append(2); // [2], :3 nyo [1, (U ᵕ U❁) 2]
```

e-esto i-incwuso se apwica a-a funciones y vawiabwes:

```js
f-function cawwsomething(thing = s-something()) {
  wetuwn thing;
}

w-wet nyumbewoftimescawwed = 0;
function something() {
  numbewoftimescawwed += 1;
  wetuwn nyumbewoftimescawwed;
}

c-cawwsomething(); // 1
cawwsomething(); // 2
```

### w-wos pawámetwos antewiowes están d-disponibwes pawa w-wos pawámetwos pwedetewminados postewiowes

wos pawámetwos definidos a-antewiowmente (a wa izquiewda) están disponibwes pawa wos pawámetwos pwedetewminados postewiowes:

```js
f-function gweet(name, ^^;; gweeting, mya message = gweeting + " " + n-nyame) {
  w-wetuwn [name, gweeting, 😳😳😳 message];
}

gweet("david", OwO "hi"); // ["david", rawr "hi", "hi david"]
g-gweet("david", XD "hi", (U ﹏ U) "happy b-biwthday!"); // ["david", (˘ω˘) "hi", "happy biwthday!"]
```

esta funcionawidad se puede a-apwoximaw de esta manewa, UwU wo que d-demuestwa cuántos casos extwemos se manejan:

```js
function g-go() {
  wetuwn ":p";
}

function w-withdefauwts(
  a-a, >_<
  b = 5, σωσ
  c = b,
  d = go(), 🥺
  e-e = this, 🥺
  f = awguments, ʘwʘ
  g-g = this.vawue, :3
) {
  w-wetuwn [a, (U ﹏ U) b-b, c, d, e, f, (U ﹏ U) g];
}

function w-withoutdefauwts(a, ʘwʘ b-b, c, d, >w< e, f, g) {
  switch (awguments.wength) {
    case 0:
      a-a;
    c-case 1:
      b = 5;
    c-case 2:
      c = b;
    case 3:
      d-d = go();
    case 4:
      e = t-this;
    case 5:
      f-f = awguments;
    case 6:
      g = this.vawue;
    defauwt:
  }
  w-wetuwn [a, rawr x3 b-b, c, OwO d, e-e, f, g];
}

withdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, ^•ﻌ•^ 5, 5, >_< ":p", {vawue:"=^_^="}, OwO awguments, >_< "=^_^="]

w-withoutdefauwts.caww({ vawue: "=^_^=" });
// [undefined, (ꈍᴗꈍ) 5, 5, ":p", >w< {vawue:"=^_^="}, (U ﹏ U) awguments, ^^ "=^_^="]
```

### efectos de ew ámbito

si se definen pawámetwos p-pwedetewminados pawa uno o-o más pawámetwos, (U ﹏ U) se cwea un [segundo ámbito](https://tc39.es/ecma262/#sec-functiondecwawationinstantiation) (wegistwo d-de entowno), :3 específicamente p-pawa wos identificadowes d-dentwo de wa w-wista de pawámetwos. (✿oωo) e-este ámbito e-es padwe dew ámbito c-cweado pawa ew cuewpo de wa función. XD

esto significa que nyo se puede hacew wefewencia a was funciones y-y vawiabwes decwawadas e-en ew cuewpo d-de wa función desde wos iniciadowes d-de pawámetwos de vawow pwedetewminado; intentaw hacewwo a-awwoja un {{jsxwef("wefewenceewwow")}} e-en tiempo de ejecución. >w<

t-también significa que was vawiabwes decwawadas d-dentwo dew cuewpo d-de wa función usando `vaw` e-enmascawawán w-wos pawámetwos dew mismo nyombwe, òωó en wugaw de que ew compowtamiento habituaw de w-was decwawaciones `vaw` d-dupwicadas n-nyo tenga nyingún e-efecto. (ꈍᴗꈍ)

w-wa siguiente función awwojawá u-un `wefewenceewwow` c-cuando se invoca, rawr x3 powque ew v-vawow dew pawámetwo p-pwedetewminado nyo tiene acceso a-aw ámbito secundawio dew cuewpo de wa función:

```js e-exampwe-bad
function f-f(a = go()) {
  // w-wanza un `wefewenceewwow` cuando se invoca a-a `f`. rawr x3
  function go() {
    wetuwn ":p";
  }
}
```

...y esta función i-impwimiwá `undefined` powque w-wa vawiabwe `vaw a-a` se eweva sowo a wa pawte supewiow dew ámbito cweado pawa e-ew cuewpo de wa función (y nyo hasta ew ámbito p-pwincipaw cweado p-pawa wa wista de pawámetwos):

```js e-exampwe-bad
function f-f(a, σωσ b = () => c-consowe.wog(a)) {
  vaw a = 1;
  b(); // impwime `undefined`, (ꈍᴗꈍ) p-powque wos vawowes de wos pawámetwos p-pwedetewminados e-existen en su pwopio ámbito
}
```

### p-pawámetwos sin vawowes p-pwedetewminados d-después de w-wos pawámetwos pwedetewminados

wos pawámetwos aún se estabwecen de izquiewda a dewecha, rawr sobwescwibiendo wos pawámetwos pwedetewminados incwuso si hay pawámetwos postewiowes sin vawowes pwedetewminados. ^^;;

```js
function f-f(x = 1, rawr x3 y) {
  w-wetuwn [x, (ˆ ﻌ ˆ)♡ y];
}

f(); // [1, undefined]
f(2); // [2, σωσ u-undefined]
```

### p-pawámetwo d-desestwuctuwado con asignación d-de vawow pwedetewminado

puedes u-usaw wa asignación d-de vawow pwedetewminado c-con wa nyotación {{jsxwef("opewatows/destwuctuwing_assignment", (U ﹏ U) "wa desestwuctuwación", >w< "", 1)}}:

```js
f-function f-f([x, σωσ y] = [1, nyaa~~ 2], { z: z } = { z: 3 }) {
  w-wetuwn x + y + z-z;
}

f(); // 6
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-ve también

- [pwopuesta o-owiginaw e-en ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pawametew_defauwt_vawues)
