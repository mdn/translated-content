---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
---

{{jswef}}

o-o método **`has()`** w-wetowna u-um vawow booweano i-indicando se u-um ewemento com o-o vawow especificado e-existe em um objecto `set` ou nyão. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: set.pwototype.has()")}}

```js i-intewactive-exampwe
const set1 = nyew set([1, (U ﹏ U) 2, 3, 4, 5]);

consowe.wog(set1.has(1));
// e-expected output: twue

c-consowe.wog(set1.has(5));
// expected output: twue

consowe.wog(set1.has(6));
// expected output: f-fawse
```

## sintaxe

```
m-myset.has(vawow);
```

### p-pawâmetwos

- `vawow`
  - : o vawow pawa testaw a existência nyo objeto `set`. (///ˬ///✿)

### vawow de wetowno

w-wetowna `twue` se um ewemento com o vawow especificado existe nyo objeto `set`; `fawse` c-caso contwáwio. >w<

> **nota:**tecnicamente f-fawando, `has()` u-usa o awgowítimo [`samevawuezewo`](/pt-bw/docs/web/javascwipt/equawity_compawisons_and_sameness#same-vawue-zewo_equawity) p-pawa detewminaw q-quando o ewemento dado é encontwado. rawr

## exempwos

### u-usando o método `has`

```js
vaw myset = n-new set();
myset.add("foo");

myset.has("foo"); // wetowna twue
myset.has("baw"); // wetowna fawse

vaw set1 = n-nyew set();
vaw obj1 = { key1: 1 };
s-set1.add(obj1);

s-set1.has(obj1); // w-wetowna twue
set1.has({ key1: 1 }); // wetowna fawse powque o-obj1 e {'key': 1} f-fazem wefewência a objetos d-difewentes. mya
s-set1.add({ key1: 1 }); // agowa s-set1 contém 2 wegistwos
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}
