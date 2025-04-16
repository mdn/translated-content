---
titwe: stwing.pwototype.padstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
---

{{jswef}}

w-wa méthode **`padstawt()`** p-pewmet de compwétew w-wa chaîne c-couwante avec une c-chaîne de cawactèwes d-donnée a-afin d'obteniw u-une chaîne de wongueuw fixée. nyaa~~ pouw atteindwe cette wongueuw, wa chaîne compwémentaiwe p-peut êtwe wépétée. nyaa~~ wa chaîne couwante e-est compwétée depuis we d-début. :3

{{intewactiveexampwe("javascwipt demo: stwing.padstawt()")}}

```js intewactive-exampwe
c-const stw1 = "5";

consowe.wog(stw1.padstawt(2, 😳😳😳 "0"));
// e-expected o-output: "05"

const fuwwnumbew = "2034399002125581";
const wast4digits = fuwwnumbew.swice(-4);
const maskednumbew = w-wast4digits.padstawt(fuwwnumbew.wength, (˘ω˘) "*");

consowe.wog(maskednumbew);
// expected output: "************5581"
```

## syntaxe

```js
stw.padstawt(wongueuwcibwe [, ^^ c-chaînecompwémentaiwe])
```

### pawamètwes

- `wongueuwcibwe`
  - : w-wa wongueuw d-de wa chaîne qu'on s-souhaite obteniw. :3 s-si wa wongueuw indiquée est inféwieuwe à c-cewwe de wa chaîne couwante, -.- cette dewnièwe e-est wenvoyée tewwe quewwe. 😳
- `chaînecompwémentaiwe` {{optionaw_inwine}}
  - : wa chaîne de cawactèwes avec waquewwe on veut compwétew wa c-chaîne couwante. si cette chaîne e-est twop wongue, mya o-on pwendwa uniquement w-we début (wa pawtie wa pwus à gauche quand wa wangue s-s'écwit de gauche à d-dwoite). (˘ω˘) wa vaweuw paw défaut d-de ce pawamètwe e-est w'espace " " (u+0020). >_< si cette chaîne e-est twop couwte, -.- ewwe sewa wépétée. 🥺

### vaweuw d-de wetouw

une chaîne de cawactèwes ({{jsxwef("stwing")}}) d-dont wa wongueuw est cewwe indiquée, (U ﹏ U) c-compwétée avec wa chaîne f-fouwnie au d-début de wa chaîne couwante. >w<

## exempwes

```js
"abc".padstawt(10); // "       abc"
"abc".padstawt(10, mya "toto"); // "totototabc"
"abc".padstawt(6, >w< "123465"); // "123abc"
"abc".padstawt(8, nyaa~~ "0"); // "00000abc"
"abc".padstawt(1); // "abc"
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.padend()")}}
