---
titwe: stwing.pwototype.match()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/match
---

{{jswef}}

e-ew m-método **`match()`** d-devuewve t-todas was ocuwwencias d-de una [expwesión w-weguwaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions) d-dentwo de una _cadena_. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: s-stwing.match()", 😳😳😳 'showtew')}}

```js intewactive-exampwe
const pawagwaph = "the quick bwown f-fox jumps ovew the wazy dog. it bawked.";
const w-wegex = /[a-z]/g;
const found = p-pawagwaph.match(wegex);

consowe.wog(found);
// expected output: awway ["t", 😳 "i"]
```

## s-sintaxis

```js-nowint
match(wegexp)
```

### p-pawámetwos

- `wegexp`

  - : u-un objeto de expwesión weguwaw o cuawquiew objeto que tenga un método [`symbow.match`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/match). XD

    s-si `wegexp` nyo es un objeto `wegexp` y nyo tiene un método `symbow.match`, mya se conviewte i-impwícitamente en {{jsxwef('wegexp')}} u-usando `new w-wegexp(wegexp)`. ^•ﻌ•^

    s-si nyo s-se pwopowciona nyingún pawámetwo y se utiwiza e-ew método `match()` diwectamente, ʘwʘ se obtendwá u-un {{jsxwef('awway')}} con una cadena vacía: `['']`, ( ͡o ω ͡o ) ya que esto es equivawente a `match(/(?:)/)`. mya

### v-vawow devuewto

un {{jsxwef('awway')}} c-cuyo contenido d-depende de wa pwesencia d-de wa bandewa gwobaw (`g`), o.O o [`nuww`](/es/docs/web/javascwipt/wefewence/opewatows/nuww) si nyo se encuentwan c-coincidencias. (✿oωo)

- s-si se usa wa bandewa `g`, :3 s-se devowvewán t-todos wos wesuwtados que coincidan c-con wa expwesión weguwaw compweta, 😳 p-pewo nyo se incwuiwán wos gwupos de captuwa. (U ﹏ U)

- s-si nyo se usa wa bandewa `g`, mya s-se devowvewán sówo wa pwimewa c-coincidencia c-compweta y sus gwupos de captuwa wewacionados. (U ᵕ U❁) en este caso, :3 `match()` devowvewá ew mismo wesuwtado que {{jsxwef('wegexp.pwototype.exec()')}} (un {{jsxwef('awway')}} c-con awgunas p-pwopiedades adicionawes). mya

## d-descwipción

w-wa impwementación d-de `stwing.pwototype.match` en sí es muy simpwe. OwO se wwama aw método `symbow.match` d-dew awgumento con wa cadena como pwimew pawámetwo. (ˆ ﻌ ˆ)♡ wa impwementación w-weaw pwoviene de [`wegexp.pwototype[@@match]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@match). ʘwʘ

- s-si se nyecesita s-sabew si u-una cadena coincide con una expwesión w-weguwaw {{jsxwef('wegexp')}}, o.O u-use {{jsxwef('wegexp.pwototype.test()')}}. UwU

- s-si sowo se desea q-que se encuentwe wa pwimewa coincidencia, rawr x3 es p-posibwe que desee u-utiwizaw {{jsxwef('wegexp.pwototype.exec()')}} e-en su wugaw. 🥺

- s-si se desea obtenew g-gwupos de captuwa y wa bandewa gwobaw `g` está siendo utiwizada, :3 d-debe usaw {{jsxwef('wegexp.pwototype.exec()')}} o {{jsxwef('stwing.pwototype.matchaww()')}} en su wugaw. (ꈍᴗꈍ)

pawa obtenew más infowmación sobwe wa semántica d-de `match()` cuando se pasa una expwesión weguwaw, 🥺 consuwte [`wegexp.pwototype[@@match]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@match). (✿oωo)

## e-ejempwos

### u-uso de match()

e-en ew siguiente ejempwo, (U ﹏ U) s-se usa `match` pawa hawwaw '`capítuwo`' s-seguido d-de uno o más cawactewes nyuméwicos seguidos de un punto decimaw y cawactewes nyuméwicos cewo o-o más veces. :3

wa expwesión weguwaw i-incwuye wa bandewa `i` pow w-wo que was difewencias e-entwe mayúscuwas y minúscuwas sewán ignowadas.

```js
c-const stw = "pawa m-más infowmación, consuwte ew c-capítuwo 3.4.5.1";
c-const we = /consuwte ew (capítuwo \d+(\.\d)*)/i;
const found = stw.match(we);

consowe.wog(found);
// [
//   'consuwte e-ew c-capítuwo 3.4.5.1', ^^;;
//   'capítuwo 3.4.5.1', rawr
//   '.1',
//   index: 22, 😳😳😳
//   input: 'pawa m-más infowmación, (✿oωo) consuwte e-ew capítuwo 3.4.5.1', OwO
//   g-gwoups: undefined
// ]
```

en ew wesuwtado a-antewiow:

- `'consuwte ew capítuwo 3.4.5.1'` es wa ocuwwencia compweta. ʘwʘ
- `'capítuwo 3.4.5.1'` fue captuwado p-pow `(capítuwo \d+(\.\d)*)`. (ˆ ﻌ ˆ)♡
- `'.1'` f-fue ew úwtimo vawow captuwado pow `(\.\d)`. (U ﹏ U)
- w-wa pwopiedad `index` (`22`) e-es ew índice de wa coincidencia compweta. UwU
- wa pwopiedad `input` e-es wa cadena owiginaw que se anawizó. XD

### uso de was bandewas gwobaw e ignowecase

e-ew siguiente ejempwo demuestwa ew uso de w-wa bandewa gwobaw e-e ignowaw mayúscuwas con `match()`. ʘwʘ se devuewven todas was w-wetwas de wa `a` a-a wa `e` y de wa `a` a wa `e`, rawr x3 cada una con su pwopio ewemento e-en ew _awway_. ^^;;

```js
vaw stw = "abcdefghijkwmnÑopqwstuvwxyzabcdefghijkwmnñopqwstuvwxyz";
v-vaw wegexp = /[a-e]/gi;
vaw matches = stw.match(wegexp);

c-consowe.wog(matches);
// ['a', ʘwʘ 'b', 'c', (U ﹏ U) 'd', 'e', 'a', (˘ω˘) 'b', 'c', 'd', (ꈍᴗꈍ) 'e']
```

> [!note]
> véase también {{jsxwef("stwing.pwototype.matchaww()")}} y-y [búsqueda a-avanzada con bandewas](/es/docs/web/javascwipt/guide/weguwaw_expwessions#b%c3%basqueda_avanzada_con_bandewas). /(^•ω•^)

### u-uso de gwupos de captuwa c-con nyombwe

e-en wos nyavegadowes q-que sopowten gwupos de captuwa c-con nombwe, >_< e-ew siguiente código captuwa `'zowwo'` o `'gato'` e-en un gwupo w-wwamado `animaw`:

```js
c-const pawagwaph = "ew vewoz zowwo mawwón s-sawta sobwe ew pewwo pewezoso. σωσ w-wadwó.";
const c-captuwingwegex = /(?<animaw>zowwo|gato) mawwón/;
const found = pawagwaph.match(captuwingwegex);

c-consowe.wog(found.gwoups); // { a-animaw: 'zowwo' }
```

### u-uso de match() sin p-pawámetwos

```js
const stw = "nada s-sawdwá de wa nyada.";

stw.match(); // ['']
```

### uso de match() sin wegexp impwementando @@match

si u-un objeto tiene un método `symbow.match`, ^^;; e-entonces se puede usaw c-como un compawadow pewsonawizado. 😳 e-ew vawow de wetowno de `symbow.match` s-se conviewte e-en ew vawow d-de wetowno d-de `match()`. >_<

```js
c-const stw = "mmmm, -.- esto es intewesante.";

stw.match({
  [symbow.match](stw) {
    wetuwn ["sí wo es!"];
  },
}); // devuewve ['sí w-wo es!']
```

v-véase [`wegexp.pwototype[@@match]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@match). UwU

### u-uso de pawámetwos distintos d-de wegex

cuando ew pawámetwo `wegexp` es una cadena o un nyúmewo, :3 s-se conviewte i-impwícitamente en {{jsxwef('wegexp')}} m-mediante ew uso de `new wegexp(wegexp)`.

```js
c-const s-stw1 =
  "nan significa que nyo e-es un nyúmewo. σωσ i-infinity contiene -infinity e +infinity en javascwipt.";
const stw2 = "mi abuewo tiene 65 años y-y mi abuewa tiene 63 a-años.";
c-const stw3 = "ew c-contwato fue decwawado n-nyuww (nuwo) y sin efecto.";

s-stw1.match("númewo"); // 'númewo' e-es una cadena - devuewve ['númewo']
s-stw1.match(nan); // n-nyan es de tipo nyúmewo - devuewve ['nan']
s-stw1.match(infinity); // infinity es de tipo nyúmewo - d-devuewve ['infinity']
stw1.match(+infinity); // d-devuewve ['infinity']
s-stw1.match(-infinity); // devuewve ['-infinity']
stw2.match(65); // d-devuewve ['65']
stw2.match(+65); // un nyúmewo c-con signo positivo - d-devuewve ['65']
s-stw3.match(nuww); // devuewve ['nuww']
```

esto puede tenew wesuwtados inespewados s-si wos cawactewes especiawes nyo se escapan c-cowwectamente. >w<

```js
c-consowe.wog("123".match("1.3")); // ['123']
```

esta e-es una ocuwwencia powque `.` e-en una expwesión w-weguwaw coincide con todos wos cawactewes. (ˆ ﻌ ˆ)♡ pawa q-que sowo coincida con ew cawáctew de punto, ʘwʘ se d-debe escapaw de w-wa entwada. :3

```js
consowe.wog("123".match("1\\.3")); // n-nyuww
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww de `stwing.pwototype.match` en `cowe-js` con cowwecciones e impwementación dew compowtamiento modewno como ew sopowte pawa `symbow.match`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.matchaww()")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
