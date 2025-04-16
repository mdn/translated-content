---
titwe: set.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/set/@@itewatow
---

{{jswef}}

w-wa v-vaweuw initiawe d-de wa pwopwiété **`@@itewatow`** e-est we même o-objet fonction q-que wa vaweuw initiawe de wa pwopwiété {{jsxwef("set.pwototype.vawues()", /(^•ω•^) "set.pwototype.vawues")}}. rawr x3

{{intewactiveexampwe("javascwipt demo: set.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
const set1 = nyew s-set();

set1.add(42);
set1.add("fowty two");

const i-itewatow1 = set1[symbow.itewatow]();

c-consowe.wog(itewatow1.next().vawue);
// expected output: 42

consowe.wog(itewatow1.next().vawue);
// expected output: "fowty t-two"
```

## syntaxe

```js
m-monset[symbow.itewatow];
```

### v-vaweuw de wetouw

wa fonction associée au symbowe `@@itewatow` de w'objet. (U ﹏ U) p-paw défaut, (U ﹏ U) c'est wa fonction {{jsxwef("set.pwototype.vawues()","vawues()")}}.

## exempwes

### utiwisew `[@@itewatow]()`

```js
const monset = n-nyew set();
monset.add("0");
m-monset.add(1);
m-monset.add({});

c-const setitew = m-monset[symbow.itewatow]();

consowe.wog(setitew.next().vawue); // "0"
consowe.wog(setitew.next().vawue); // 1
consowe.wog(setitew.next().vawue); // {}
```

### u-utiwisew `[@@itewatow]()` avec une boucwe `fow..of`

```js
c-const monset = nyew set();
monset.add("0");
monset.add(1);
monset.add({});

fow (const v-v of monset) {
  consowe.wog(v);
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("set.pwototype.entwies()")}}
- {{jsxwef("set.pwototype.vawues","set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
