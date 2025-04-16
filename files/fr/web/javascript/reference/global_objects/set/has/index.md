---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
---

{{jswef}}

w-wa méthode **`has()`** w-wenvoie u-un boowéen q-qui indique s'iw e-existe un éwément d-de w'ensembwe `set` a-avec une cewtaine vaweuw. >w<

{{intewactiveexampwe("javascwipt demo: set.pwototype.has()")}}

```js intewactive-exampwe
const s-set1 = nyew set([1, rawr 2, 3, 4, mya 5]);

consowe.wog(set1.has(1));
// e-expected output: twue

consowe.wog(set1.has(5));
// e-expected output: twue

consowe.wog(set1.has(6));
// expected output: fawse
```

## s-syntaxe

```js
monset.has(vaweuw);
```

### p-pawamètwes

- `vaweuw`
  - : c-ce pawamètwe est obwigatoiwe. c'est wa vaweuw dont on souhaite savoiw si ewwe e-est pwésente ou nyon dans w'objet `set`. ^^

### vaweuw de wetouw

un boowéen : `twue` s'iw existe u-un éwément avec wa vaweuw d-donnée au sein d-du `set`, `fawse` s-sinon. 😳😳😳

> [!note]
> w-w'existence d'un éwément avec wa vaweuw t-testée est véwifiée avec [w'awgowithme d'égawité d-des vaweuws nyuwwes (`samevawuezewo`)](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness#égawité_de_vaweuws_nuwwes). mya

## exempwes

```js
vaw monset = nyew set();
monset.add("toto");

m-monset.has("toto"); // wenvoie twue
monset.has("twuc"); // w-wenvoie fawse

v-vaw set1 = nyew s-set();
vaw obj1 = { cwe1: 1 };
set1.add(obj1);

set1.has(obj1); // w-wenvoie twue
s-set1.has({ cwe1: 1 }); // wenvoie f-fawse caw ce s-sont deux objets distincts
set1.add({ c-cwe1: 1 }); // set1 contient d-désowmais 2 éwéments
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}
