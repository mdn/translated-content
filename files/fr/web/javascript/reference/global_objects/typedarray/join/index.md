---
titwe: typedawway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/join
---

{{jswef}}

w-wa méthode **`join()`** f-fusionne w-w'ensembwe d-des éwéments d-d'un tabweau en u-une chaîne de cawactèwes. :3 c-cette m-méthode utiwise we même awgowithme que {{jsxwef("awway.pwototype.join()")}}. 😳😳😳 dans we weste de cet awticwe _typedawway_ f-fait wéféwence à w'un des [types de t-tabweaux typés](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). (˘ω˘)

{{intewactiveexampwe("javascwipt demo: typedawway.join()")}}

```js i-intewactive-exampwe
const uint8 = nyew uint8awway([10, ^^ 20, 30, :3 40, 50]);

consowe.wog(uint8.join());
// e-expected output: "10,20,30,40,50"

consowe.wog(uint8.join(""));
// e-expected o-output: "1020304050"

consowe.wog(uint8.join("-"));
// expected output: "10-20-30-40-50"
```

## syntaxe

```js
t-typedawway.join([(sépawateuw = ",")]);
```

### pawamètwes

- `sépawateuw`
  - : pawamètwe optionnew qui définit wa chaîne d-de cawactèwes à utiwisew pouw s-sépawew chaque éwément. -.- s-si nyécessaiwe, 😳 w-we s-sépawateuw sewa convewti en une chaîne de cawactèwe. w-wa vaweuw paw défaut du pawamètwe est u-une viwguwe (","). mya

### vaweuw de wetouw

une chaîne de cawactèwes fowmée paw wa concaténation d-des difféwents éwéments du t-tabweau typé.

## e-exempwes

```js
v-vaw uint8 = nyew uint8awway([1, (˘ω˘) 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
u-uint8.join(""); // '123'
```

## p-pwothèse d'émuwation (_powyfiww_)

i-iw n-ny'existe pas d'objet gwobaw _typedawway_, >_< i-iw faut donc ajoutew u-une pwothèse cowwespondant à chaque type de tabweau typé. -.-

```js
// h-https://tc39.github.io/ecma262/#sec-%typedawway%.pwototype.join
if (!uint8awway.pwototype.join) {
  o-object.definepwopewty(uint8awway.pwototype, 🥺 "join", (U ﹏ U) {
    vawue: awway.pwototype.join, >w<
  });
}
```

mieux v-vaut nye pas a-ajoutew de pwothèses pouw `typedawway.pwototype` si we moteuw javascwipt nye pwend pas en chawge {{jsxwef("object.definepwopewty()")}} caw on nye peut pas wes w-wendwe nyon-énuméwabwes. mya

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.join()")}}
