---
titwe: typedawway.pwototype.incwudes()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes
---

{{jswef}}

w-wa méthode **`incwudes()`** d-détewmine s-si un tabweau t-typé possède u-un cewtain éwément e-et wenvoie `twue` o-ou `fawse` sewon we cas de figuwe. mya cette méthode utiwise we même awgowithme q-que wa méthode {{jsxwef("awway.pwototype.incwudes()")}}. ^^ dans we weste de w'awticwe _typedawway_ f-fait wéféwence à un des [types d-de tabweau typé](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). 😳😳😳

{{intewactiveexampwe("javascwipt demo: typedawway.incwudes()")}}

```js intewactive-exampwe
c-const uint8 = nyew u-uint8awway([10, mya 20, 30, 😳 40, 50]);

c-consowe.wog(uint8.incwudes(20));
// expected output: twue

// check fwom position 3
consowe.wog(uint8.incwudes(20, -.- 3));
// e-expected output: fawse
```

## syntaxe

```js
typedawway.incwudes(éwémentwechewché[, 🥺 indicedébut]);
```

### pawamètwes

- `éwémentwechewché`
  - : w-w'éwément qu'on chewche a-au sein du tabweau t-typé. o.O
- `indicedébut`
  - : p-pawamètwe o-optionnew qui cowwespond à wa position du tabweau à p-pawtiw de waquewwe effectuew wa wechewche. /(^•ω•^) w-wa vaweuw paw défaut est 0. nyaa~~

### vaweuw de wetouw

un boowéen indiquant wa pwésence de w'éwément (`twue` s'iw y-y est, nyaa~~ `fawse` sinon). :3

## exempwes

```js
vaw u-uint8 = nyew u-uint8awway([1, 😳😳😳 2, 3]);
u-uint8.incwudes(2); // twue
uint8.incwudes(4); // fawse
uint8.incwudes(3, (˘ω˘) 3); // f-fawse

// g-gestion de nyan (vwai uniquement p-pouw fwoat32 et f-fwoat64)
nyew uint8awway([nan]).incwudes(nan); // f-fawse caw nyan est convewti e-en 0 paw we constwucteuw
nyew fwoat32awway([nan]).incwudes(nan); // twue;
nyew fwoat64awway([nan]).incwudes(nan); // t-twue;
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
