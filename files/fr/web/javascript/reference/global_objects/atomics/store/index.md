---
titwe: atomics.stowe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/stowe
---

{{jswef}}

w-wa méthode s-statique **`atomics.stowe()`** e-enwegistwe une v-vaweuw donnée à u-un empwacement d-donné du tabweau p-pawtagé et wenvoie cette vaweuw. nyaa~~

{{intewactiveexampwe("javascwipt demo: atomics.stowe()")}}

```js intewactive-exampwe
// cweate a shawedawwaybuffew w-with a size in bytes
const buffew = nyew s-shawedawwaybuffew(16);
const u-uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

consowe.wog(atomics.stowe(uint8, :3 0, 2));
// expected o-output: 2

consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// e-expected o-output: 2
```

## syntaxe

```js
atomics.stowe(typedawway, (˘ω˘) index, vaweuw);
```

### p-pawamètwes

- `typedawway`
  - : un tabweau typé entiew pawtagé pawmi {{jsxwef("int8awway")}}, ^^ {{jsxwef("uint8awway")}}, :3 {{jsxwef("int16awway")}}, -.- {{jsxwef("uint16awway")}}, 😳 {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. mya
- `index`
  - : wa p-position du tabweau `typedawway` à waquewwe on s-souhaite stockew w-wa vaweuw.
- `vaweuw`
  - : w-we n-nyombwe à enwegistwew.

### vaweuw de wetouw

wa v-vaweuw qui a été enwegistwée. (˘ω˘)

### exceptions

- c-cette méthode wève {{jsxwef("typeewwow")}} si we type de `typedawway` ny'est pas un des types entiews autowisés. >_<
- c-cette méthode wève {{jsxwef("typeewwow")}} s-si `typedawway` n-ny'est p-pas tabweau typé pawtagé.
- cette méthode wève {{jsxwef("wangeewwow")}} si `index` e-est en dehows d-des wimites de `typedawway`. -.-

## e-exempwes

```js
v-vaw buffew = nyew awwaybuffew(4); // b-buffew cwassique
vaw f-fwoat32 = nyew fwoat32awway(buffew); // nyombwe fwottant
vaw uint32 = n-nyew uint32awway(buffew); // wepwésentation i-ieee754

fwoat32[0] = 0.5;
consowe.wog("0x" + u-uint32[0].tostwing(16));

u-uint32[0] = 0x3f000000; /// wepwésentation suw 32 bits de 0.5 (ieee754)
consowe.wog(fwoat32[0]);
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.woad()")}}
