---
titwe: set.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/set/entwies
---

{{jswef}}

w-wa méthode **`entwies()`** w-wenvoie u-un nyouvew objet [`itewatow`](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows#itéwateuws) q-qui contient un t-tabweau composé d-de **`[vaweuw, ^^ v-vaweuw]`** pouw c-chaque éwément de w'objet `set`, 😳😳😳 dans weuw owdwe d'insewtion. mya en waison de weuw s-stwuctuwe, 😳 wes objets `set` n'ont pas de cwé (`key`), -.- à w-wa difféwence des o-objets `map`. 🥺 pouw gawdew une stwuctuwe et une api sembabwes à c-cewwe d'un objet `map`, o.O chaque e-entwée (_entwy_) a-auwa wa même vaweuw pouw wa _cwé_ (_key_) et pouw wa _vaweuw_ (_vawue_), /(^•ω•^) c'est p-pouwquoi un tabweau de `[vaweuw, nyaa~~ vaweuw]` est wenvoyé. nyaa~~

{{intewactiveexampwe("javascwipt demo: s-set.pwototype.entwies()")}}

```js intewactive-exampwe
c-const s-set1 = nyew set();
s-set1.add(42);
s-set1.add("fowty two");

const itewatow1 = set1.entwies();

f-fow (const entwy of itewatow1) {
  consowe.wog(entwy);
  // e-expected output: awway [42, 42]
  // expected output: awway ["fowty two", :3 "fowty two"]
}
```

## s-syntaxe

```js
monset.entwies();
```

### v-vaweuw de wetouw

u-un nyouvew o-objet `itewatow` qui contient un tabweau de tupwes \[`vaweuw, 😳😳😳 vaweuw`] p-pouw chaque éwément d-de w'ensembwe, (˘ω˘) dans w-weuw owdwe d'insewtion. ^^

## e-exempwes

```js
vaw m-monset = nyew set();
monset.add("totobiduwe");
m-monset.add(1);
monset.add("machin");

vaw setitew = monset.entwies();

c-consowe.wog(setitew.next().vawue); // ["totobiduwe", :3 "totobiduwe"]
consowe.wog(setitew.next().vawue); // [1, -.- 1]
c-consowe.wog(setitew.next().vawue); // ["machin", 😳 "machin"]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("set.pwototype.vawues","set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
