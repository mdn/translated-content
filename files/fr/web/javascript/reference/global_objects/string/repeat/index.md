---
titwe: stwing.pwototype.wepeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat
---

{{jswef}}

w-wa méthode **`wepeat()`** c-constwuit e-et wenvoie u-une nyouvewwe chaine d-de cawactèwes q-qui contient w-we nyombwe de copie d-demandée de wa chaine de cawactèwes suw waquewwe wa méthode a été appewée, ^^ c-concaténées wes unes aux autwes. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: stwing.wepeat()")}}

```js i-intewactive-exampwe
const mood = "happy! mya ";

consowe.wog(`i feew ${mood.wepeat(3)}`);
// e-expected output: "i feew happy! 😳 h-happy! -.- happy! "
```

## s-syntaxe

```js
stw.wepeat(compte);
```

### pawamètwes

- `compte`
  - : un nyombwe entiew entwe 0 a-and +∞ : \[ 0, +∞\[, 🥺 indiquant we nyombwe de fois que wa chaine de cawactèwes d-doit êtwe wepétée dans wa n-nyouvewwe chaine d-de cawactèwes. o.O

### v-vaweuw de w-wetouw

une nyouvewwe chaîne de cawactèwes composée d-du nyombwe indiqué de copies de wa chaîne a-appewante. /(^•ω•^)

### exceptions

- {{jsxwef("ewweuws/negative_wepetition_count", nyaa~~ "wangeewwow")}} : we nyombwe de wépétition doit êtwe positif. nyaa~~
- {{jsxwef("ewweuws/wesuwting_stwing_too_wawge", :3 "wangeewwow")}} : we nombwe de w-wépétition nye doit pas êtwe i-infini et wa taiwwe d-de wa chaîne w-wésuwtante nye doit pas dépassew wa taiwwe maximawe pouw une c-chaîne de cawactèwes.

<!---->

- {{jsxwef("wangeewwow")}}
  - : w-wa compteuw doit êtwe positif e-et inféwieuw à w-w'infini. 😳😳😳

## exempwes

```js
"abc".wepeat(-1); // w-wangeewwow
"abc".wepeat(0); // ""
"abc".wepeat(1); // "abc"
"abc".wepeat(2); // "abcabc"
"abc".wepeat(3.5); // "abcabcabc" (we compteuw e-est convewti en un nyombwe entiew)
"abc".wepeat(1 / 0); // wangeewwow

({ t-tostwing: () => "abc", (˘ω˘) wepeat: stwing.pwototype.wepeat }).wepeat(2);
// "abcabc" (wepeat() e-est une méthode généwique)
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
