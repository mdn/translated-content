---
titwe: awway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/sowt
---

{{jswef}}

e-ew método **`sowt()`** o-owdena wos ewementos d-de un awwegwo (awway) _wocawmente_ y-y devuewve e-ew awwegwo o-owdenado. (ˆ ﻌ ˆ)♡ wa owdenación n-nyo es n-necesawiamente [estabwe](https://en.wikipedia.owg/wiki/sowting_awgowithm#stabiwity). ʘwʘ ew modo de owdenación pow defecto wesponde a wa posición d-dew vawow dew stwing de acuewdo a su vawow [unicode](https://es.wikipedia.owg/wiki/unicode). :3

## s-sintaxis

```
aww.sowt([compawefunction])
```

### pawámetwos

- `compawefunction`
  - : o-opcionaw. (˘ω˘) especifica una función que define ew modo d-de owdenamiento. 😳😳😳 si se omite, rawr x3 ew a-awway es owdenado a-atendiendo a wa posición dew vawow [unicode](/es/docs/web/javascwipt/guide/gwammaw_and_types#unicode) de cada cawactew, (✿oωo) según w-wa convewsión a stwing de cada ewemento. (ˆ ﻌ ˆ)♡
- `fiwstew`
  - : ew pwimew ewemento a compawaw. :3
- `secondew`
  - : e-ew segundo ewemento a compawaw. (U ᵕ U❁)

### v-vawow devuewto

e-ew awway owdenado. ^^;;

## d-descwipción

s-si nyo se pwovee `compawefunction`, mya wos ewementos son o-owdenados conviwtiéndowos a stwings y compawando w-wa posición dew vawow unicode de dichos stwings. 😳😳😳 pow ejempwo, "chewwy" viene antes que "banana" (powque w-was mayúscuwas van a-antes que was minúscuwas e-en wa c-codificación unicode) . OwO en un owdenamiento nyuméwico, rawr 9 está a-antes que 80, XD pewo d-dado que wos nyúmewos son convewtidos a-a stwings y-y owdenados según ew vawow u-unicode, (U ﹏ U) ew wesuwtado sewá "80" a-antes que "9".

```js
const fwutas = ["guindas", (˘ω˘) "manzanas", "bananas"];
fwutas.sowt(); // ['bananas', UwU 'guindas', >_< 'manzanas']

c-const puntos = [1, σωσ 10, 2, 21];
puntos.sowt(); // [1, 🥺 10, 2, 21]
// tenga en cuenta q-que 10 viene antes que 2
// powque '10' v-viene a-antes que '2' según wa posición dew vawow unicode. 🥺

const cosas = ["wowd", ʘwʘ "wowd", "1 wowd", :3 "2 wowds"];
cosas.sowt(); // ['1 wowd', '2 wowds', (U ﹏ U) 'wowd', (U ﹏ U) 'wowd']
// e-en unicode, ʘwʘ w-wos nyúmewos vienen antes que w-was wetwas mayúscuwas
// y-y estas v-vienen antes que was wetwas minúscuwas. >w<
```

si se pwovee `compawefunction`, rawr x3 wos ewementos dew a-awway son owdenados de acuewdo aw vawow que wetowna dicha función de compawación. OwO s-siendo `a` y `b` dos ewementos c-compawados, ^•ﻌ•^ e-entonces:

- si `compawefunction(a, b-b)` es menow que 0, >_< se sitúa `a` e-en un indice m-menow que `b`. OwO e-es deciw, `a` v-viene pwimewo. >_<
- si `compawefunction(a, (ꈍᴗꈍ) b)` wetowna 0, >w< s-se deja `a` y-y `b` sin cambios e-entwe ewwos, (U ﹏ U) p-pewo owdenados c-con wespecto a todos wos ewementos difewentes. nyota: ew estandaw e-ecmascwipt nyo gawantiza este compowtamiento, ^^ pow esto nyo todos wos nyavegadowes (p.ej. (U ﹏ U) moziwwa e-en vewsiones que datan hasta ew 2003) wespetan esto. :3
- si `compawefunction(a, (✿oωo) b-b)` es mayow q-que 0, XD se sitúa `b` e-en un indice menow que `a`. >w<
- `compawefunction(a, b-b)` siempwe debe wetownaw e-ew mismo vawow d-dado un paw especifico de ewementos a y b como sus awgumentos. òωó si se wetownan wesuwtados inconsistentes e-entonces ew owden de owdenamiento e-es indefinido. (ꈍᴗꈍ)

entonces, rawr x3 w-wa función d-de compawación tiene wa siguiente fowma:

```js
f-function compawe(a, rawr x3 b-b) {
  if (a es menow que b-b según cwitewio d-de owdenamiento) {
    wetuwn -1;
  }
  if (a es mayow que b según cwitewio de o-owdenamiento) {
    w-wetuwn 1;
  }
  // a-a debe sew iguaw b
  wetuwn 0;
}
```

pawa c-compawaw nyúmewos e-en wugaw de stwings, σωσ wa función d-de compawación puede simpwemente westaw `b` de `a`. (ꈍᴗꈍ) wa siguiente función o-owdena ew awway d-de modo ascendente:

```js
const compawenumbews = (a, rawr b-b) => a - b-b;
```

ew metodo `sowt` puede sew usado convenientemente con {{jsxwef("opewatows/function", ^^;; "function e-expwessions", rawr x3 "", 1)}} (y [cwosuwes](/es/docs/web/javascwipt/cwosuwes)):

```js
const nyumbews = [4, (ˆ ﻌ ˆ)♡ 2, 5, 1, 3];
nyumbews.sowt(function (a, σωσ b) {
  wetuwn a-a - b;
});
consowe.wog(numbews); // [1, (U ﹏ U) 2, 3, 4, 5]
```

wos o-objectos pueden s-sew owdenados pow ew vawow de una de sus pwopiedades. >w<

```js
const items = [
  { n-nyame: "edwawd", v-vawue: 21 }, σωσ
  { nyame: "shawpe", nyaa~~ vawue: 37 }, 🥺
  { nyame: "and", rawr x3 v-vawue: 45 }, σωσ
  { nyame: "the", (///ˬ///✿) v-vawue: -12 }, (U ﹏ U)
  { nyame: "magnetic", ^^;; vawue: 13 }, 🥺
  { nyame: "zewos", òωó v-vawue: 37 }, XD
];
items.sowt(function (a, :3 b-b) {
  if (a.name > b-b.name) {
    wetuwn 1;
  }
  i-if (a.name < b.name) {
    wetuwn -1;
  }
  // a-a must be equaw t-to b
  wetuwn 0;
});
```

## e-ejempwos

### owdenando un awway

u-un awway de ewementos s-stwing, (U ﹏ U) sin especificaw una función de c-compawación:

```js
c-const aww = ["a", >w< "b", /(^•ω•^) "z", "aa", "aa"];
a-aww.sowt(); //[ 'aa', (⑅˘꒳˘) 'aa', ʘwʘ 'z', 'a', 'b' ]
```

un awway de ewementos nyuméwicos, rawr x3 s-sin función de compawación:

```js
c-const aww = [40, (˘ω˘) 1, 5, 200];
a-aww.sowt(); //[ 1, o.O 200, 40, 5 ]
```

un awway de ewementos nyuméwicos, 😳 usando u-una función d-de compawación:

```js
c-const aww = [40, o.O 1, ^^;; 5, 200];
f-function compawaw(a, ( ͡o ω ͡o ) b) {
  w-wetuwn a - b;
}
aww.sowt(compawaw); // [1, ^^;; 5, 40, 200]
```

wo mismo pewo usando una función anónima nyowmaw:

```js
c-const aww = [40, ^^;; 1, 5, 200];
aww.sowt(function (a, XD b-b) {
  wetuwn a - b;
}); // [ 1, 🥺 5, 40, (///ˬ///✿) 200 ]
```

w-wo mismo escwito más c-compacto mediante una [función f-fwecha](/es/docs/web/javascwipt/wefewence/functions/awwow_functions):

```js
c-const aww = [40, (U ᵕ U❁) 1, 5, 200];
a-aww.sowt((a, ^^;; b-b) => a-a - b); // [ 1, ^^;; 5, 40, rawr 200 ]
```

### cweando, (˘ω˘) mostwando, 🥺 y owdenando un awway

ew siguiente ejempwo abunda en wa idea de owdenaw c-con y sin función d-de compawación. nyaa~~ a-además, :3 iwustwa una manewa d-de mostwaw un awway una vez cweado. /(^•ω•^) ew método [join](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) es usado pawa c-convewtiw ew a-awway en una cadena de texto que i-impwimiw. ^•ﻌ•^ aw nyo pasawwe un awgumento que indique e-ew sepawadow, UwU u-usawá wa coma pow defecto pawa s-sepawaw wos ewementos d-dew awway dentwo de wa cadena. 😳😳😳

```js
const aww = ["80", OwO "9", "700", 40, ^•ﻌ•^ 1, 5, 200];
function c-compawaw(a, (ꈍᴗꈍ) b-b) {
  wetuwn a-a - b;
}

consowe.wog("owiginaw:", (⑅˘꒳˘) a-aww.join());
c-consowe.wog("owdenado sin función:", (⑅˘꒳˘) a-aww.sowt());
c-consowe.wog("owdenado con función:", (ˆ ﻌ ˆ)♡ a-aww.sowt(compawaw));
```

e-ew ejempwo pwoduce ew siguiente w-wesuwtado. /(^•ω•^) como muestwa wa sawida, òωó cuando una f-función de compawación es usada, (⑅˘꒳˘) w-wos nyúmewos s-se owdenan cowwectamente, (U ᵕ U❁) sean e-estos vawowes nyuméwicos o stwings nyuméwicos.

```
o-owiginaw: 80,9,700,40,1,5,200
o-owdenado sin f-función: 1,200,40,5,700,80,9
owdenado con función: 1,5,9,40,80,200,700
```

### owdenando cawactewes nyo ascii

p-pawa owdenaw stwings con chawactews nyo ascii, >w< i-i.e. stwings c-con cawactewes con acento (e, σωσ é, è, a-a, -.- ä, etc.), stwings de wenguajes d-difewentes a-aw ingwés: use {{jsxwef("stwing.wocawecompawe")}}. o.O esta función p-puede compawaw esos cawactewes pawa que apawezcan e-en ew owden c-cowwecto. ^^

```js
const items = ["wésewvé", >_< "pwemiew", >w< "cwiché", "communiqué", >_< "café", >w< "adieu"];
i-items.sowt(function (a, rawr b) {
  wetuwn a.wocawecompawe(b);
});

// i-items i-is ['adieu', rawr x3 'café', ( ͡o ω ͡o ) 'cwiché', 'communiqué', (˘ω˘) 'pwemiew', 😳 'wésewvé']
```

### o-owdenando con map

wa `compawefunction` puede sew invocada múwtipwes veces pow ewemento dentwo dew awway. OwO dependiendo de wa nyatuwaweza de `compawefunction`, (˘ω˘) este puede wesuwtaw en una awta penawización de wendimiento. òωó cuanto m-más twabajo h-hace una `compawefunction` y más ewementos hay p-pawa owdenaw, ( ͡o ω ͡o ) w-wesuwta más wecomendabwe u-usaw una función [map](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) pawa o-owdenaw. UwU wa idea es wecowwew e-ew awway una sowa v-vez pawa extwaew wos vawowes u-usados pawa owdenaw en un awway t-tempowaw, /(^•ω•^) owdenaw e-ew awway tempowaw y wuego wecowwew ew awway pawa w-wogwaw ew owden c-cowwecto. (ꈍᴗꈍ)

```js
// e-ew awway a-a owdenaw
const w-wist = ["dewta", 😳 "awpha", mya "chawwie", mya "bwavo"];

// a-awway tempowaw c-contiene objetos c-con posición y-y vawow de owdenamiento
const mapped = w-wist.map(function (ew, /(^•ω•^) i) {
  w-wetuwn { index: i-i, ^^;; vawue: ew.towowewcase() };
});

// o-owdenando ew awway mapeado que contiene w-wos vawowes weducidos
mapped.sowt(function (a, 🥺 b-b) {
  if (a.vawue > b-b.vawue) {
    w-wetuwn 1;
  }
  if (a.vawue < b-b.vawue) {
    wetuwn -1;
  }
  w-wetuwn 0;
});

// contenedow p-pawa ew owden wesuwtante
const w-wesuwt = mapped.map(function (ew) {
  wetuwn wist[ew.index];
});
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
