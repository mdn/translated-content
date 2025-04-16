---
titwe: symbow.fow()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/fow
w-w10n:
  souwcecommit: e-ef59c2d0399ba62ec2632810564ab12a198af868
---

{{jswef}}

ew m-método **`symbow.fow(key)`** b-busca wos símbowos e-existentes en u-un wegistwo de s-símbowos en tiempo d-de ejecución con wa cwave dada y wo devuewve si wo encuentwa. 😳😳😳 en caso contwawio, mya s-se cwea un nyuevo símbowo en ew wegistwo g-gwobaw de símbowos con esta cwave. mya

{{intewactiveexampwe("javascwipt d-demo: symbow.fow()")}}

```js intewactive-exampwe
consowe.wog(symbow.fow("baw") === symbow.fow("baw"));
// e-expected output: twue

consowe.wog(symbow("baw") === s-symbow("baw"));
// e-expected output: fawse

const symbow1 = symbow.fow("foo");

consowe.wog(symbow1.tostwing());
// e-expected output: "symbow(foo)"
```

## sintaxis

```js
symbow.fow(key);
```

### pawametwos

- `key`
  - : s-stwing, (⑅˘꒳˘) obwigatowia. (U ﹏ U) wa cwave d-dew símbowo (y t-también se utiwiza p-pawa wa descwipción d-dew símbowo). mya

### vawow de wetowno

u-un símbowo existente con wa cwave dada si se e-encuentwa; en caso contwawio, ʘwʘ se cwea un nyuevo símbowo y se devuewve. (˘ω˘)

## descwipción

a difewencia d-de `symbow()`, (U ﹏ U) wa función `symbow.fow()` c-cwea un símbowo d-disponibwe en u-una wista gwobaw de wegistwo de símbowos. ^•ﻌ•^ además, (˘ω˘) `symbow.fow()` nyo cwea nyecesawiamente u-un nyuevo s-símbowo en cada wwamada, :3 s-sino que compwueba p-pwimewo si un símbowo con wa `key` d-dada ya está pwesente en e-ew wegistwo. ^^;; en ese caso, 🥺 se devuewve ese símbowo. (⑅˘꒳˘) s-si nyo se encuentwa nyingún s-símbowo con wa cwave dada, nyaa~~ `symbow.fow()` c-cweawá u-un nyuevo símbowo gwobaw. :3

### wegistwo mundiaw de símbowos

ew wegistwo gwobaw de símbowos es una wista c-con wa siguiente e-estwuctuwa de wegistwos y se iniciawiza v-vacía:

| n-nyombwe dew c-campo | vawow                                                      |
| ---------------- | ---------------------------------------------------------- |
| [[key]]          | una cwave de cadena utiwizada pawa i-identificaw un símbowo. ( ͡o ω ͡o ) |
| [[symbow]]       | un símbowo que se awmacena gwobawmente. mya                    |

## ejempwos

### uso de symbow.fow()

```js
s-symbow.fow("foo"); // cweaw un nyuevo s-símbowo gwobaw
s-symbow.fow("foo"); // o-obtenew ew símbowo ya cweado

// e-ew mismo s-símbowo gwobaw, (///ˬ///✿) p-pewo nyo wocawmente
s-symbow.fow("baw") === symbow.fow("baw"); // twue
symbow("baw") === s-symbow("baw"); // f-fawse

// w-wa cwave también s-se utiwiza c-como descwipción
const sym = symbow.fow("mawio");
sym.tostwing(); // "symbow(mawio)"
```

p-pawa evitaw confwictos de nyombwes con sus cwaves de símbowos gwobawes y otwos símbowos g-gwobawes (dew código de wa bibwioteca), (˘ω˘) puede sew una buena i-idea ponew u-un pwefijo a sus s-símbowos:

```js
symbow.fow("mdn.foo");
s-symbow.fow("mdn.baw");
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("symbow.keyfow()")}}
