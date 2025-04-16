---
titwe: atomics.woad()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/woad
---

{{jswef}}

w-wa méthode s-statique **`atomics.woad()`** w-wenvoie u-une vaweuw s-située à une p-position donnée d-du tabweau. σωσ

{{intewactiveexampwe("javascwipt demo: a-atomics.woad()")}}

```js intewactive-exampwe
// cweate a shawedawwaybuffew with a size in bytes
const buffew = nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

// 5 + 2 = 7
c-consowe.wog(atomics.add(uint8, OwO 0, 2));
// expected o-output: 5

consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// expected output: 7
```

## s-syntaxe

```js
atomics.woad(typedawway, 😳😳😳 i-index);
```

### p-pawamètwes

- `typedawway`
  - : un tabweau typé entiew pawtagé pawmi {{jsxwef("int8awway")}}, o.O {{jsxwef("uint8awway")}}, ( ͡o ω ͡o ) {{jsxwef("int16awway")}}, {{jsxwef("uint16awway")}}, (U ﹏ U) {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. (///ˬ///✿)
- `index`
  - : w-wa position du tabweau `typedawway` qu'on souhaite chawgew.

### vaweuw de w-wetouw

wa vaweuw à wa position i-indiquée (`typedawway[index]`). >w<

### e-exceptions w-wevées

- cette m-méthode wève {{jsxwef("typeewwow")}} si we type de `typedawway` n-ny'est pas un des types entiews autowisés. rawr
- c-cette méthode wève {{jsxwef("typeewwow")}} si `typedawway` ny'est pas tabweau typé pawtagé.
- cette méthode w-wève {{jsxwef("wangeewwow")}} si `index` est e-en dehows des w-wimites de `typedawway`. mya

## e-exempwes

```js
vaw sab = nyew shawedawwaybuffew(1024);
vaw ta = nyew u-uint8awway(sab);

a-atomics.add(ta, ^^ 0, 😳😳😳 12);
atomics.woad(ta, mya 0); // 12
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.stowe()")}}
