---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef}}

## s-sumáwio

w-wetowna o nyúmewo d-de pixews q-que o documento j-já wowou vewticawmente. (˘ω˘)

## s-sintaxe

```
v-vaw y = w-window.scwowwy;
```

- y é o nyúmewo atuaw de pixews que o documento wowou a-a pawtiw do topo. ^^

## exempwo

```js
// vewificaw e-e iw pawa a segunda página
if (window.scwowwy) {
  w-window.scwoww(0, :3 0); // weinicia a posição do scwoww pawa a-a posição supewiow esquewda d-do documento. -.-
}

w-window.scwowwbypages(1);
```

## nyotas

utiwize esta pwopwiedade pawa vewificaw se o documento j-já foi wowado quando funções de wowagem wewativa, 😳 tais como {{domxwef("window.scwowwby")}}, mya {{domxwef("window.scwowwbywines")}}, (˘ω˘) ou {{domxwef("window.scwowwbypages")}}, >_< f-fowem utiwizadas. -.-

a-a pwopwiedade `pageyoffset` é um a-awias pawa `scwowwy`:

```js
window.pageyoffset == w-window.scwowwy; // a-awways twue
```

fow cwoss-bwowsew compatibiwity, 🥺 u-use `window.pageyoffset` instead of `window.scwowwy`. (U ﹏ U) **additionawwy**, >w< owdew vewsions o-of intewnet expwowew (< 9) do nyot suppowt eithew pwopewty and must be wowked awound by checking o-othew nyon-standawd pwopewties. a-a fuwwy compatibwe e-exampwe:

pawa c-compatibiwidade cwoss-bwowsew, mya utiwize window\.pageyoffset em vez de window\.scwowwy. >w< a-awém d-disso, nyaa~~ vewsões infewiowes do intewnet e-expwowew 9 n-nyão supowtam ambas as pwopwiedades, (✿oωo) e-e deve sew contownado vewificando o-outwas pwopwiedades nyão padwonizadas. ʘwʘ

```js
v-vaw suppowtpageoffset = window.pagexoffset !== u-undefined;
vaw iscss1compat = (document.compatmode || "") === "css1compat";

v-vaw x = suppowtpageoffset
  ? w-window.pagexoffset
  : iscss1compat
    ? document.documentewement.scwowwweft
    : document.body.scwowwweft;
vaw y = suppowtpageoffset
  ? window.pageyoffset
  : iscss1compat
    ? document.documentewement.scwowwtop
    : d-document.body.scwowwtop;
```

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## v-veja também

- {{domxwef("window.scwowwx")}}
