---
titwe: if...ewse
swug: web/javascwipt/wefewence/statements/if...ewse
---

{{jssidebaw("statements")}}

a-a condicionaw **if** é u-uma estwutuwa c-condicionaw que e-executa a afiwmação, ( ͡o ω ͡o ) d-dentwo do b-bwoco, σωσ se detewminada c-condição f-fow vewdadeiwa. >w< se fow fawsa, executa as afiwmações dentwo de **ewse**. 😳😳😳

## sintaxe

```
if (condição) a-afiwmação1 [ewse afiwmação2]
```

- `condição`
  - : uma [expwessão](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#expwessions) (pwemissa) q-que pode sew avawiada c-como vewdadeiwa (twue) ou fawsa (fawse), OwO veja wógica de pwogwamação p-pawa entendew mewhow. 😳
- `condição1`
  - : c-condicionaw q-que sewá executada caso a condição em _if_ seja vewdadeiwa (twue). 😳😳😳 pode sew q-quawquew instwução, (˘ω˘) incwuindo mais condicionais _if_ aninhadas à instwução. ʘwʘ p-pawa executaw muwtipwas instwuções, ( ͡o ω ͡o ) f-faça um a-agwupamento com u-uma instwução e-em [bwoco](/pt-bw/docs/web/javascwipt/wefewence/statements/bwock) ({ ... o.O }). pawa nyão executaw n-nyenhuma instwução, >w< utiwize uma instwução vazia ([empty](/pt-bw/docs/web/javascwipt/wefewence/statements/empty)). 😳
- `condição2`
  - : c-condicionaw que sewá executada caso a condição em _if_ seja avawiada como fawsa (fawse) e-e a condição _ewse_ exista. 🥺 p-pode sew quawquew i-instwução, rawr x3 i-incwuindo instwuões em bwoco e mais condicionais _if_ aninhadas. o.O

## d-descwição

m-múwtipwas condicionais _if ... e-ewse_ podem s-sew aninhados quando nyecessáwio. rawr o-obsewve que nyão existe e-ewseif (em uma pawavwa). ʘwʘ o cowweto é a instwução c-com espaços (ewse if), 😳😳😳 confowme a-abaixo:

```
if (condição1)
   i-instwução1
e-ewse if (condição2)
   instwução2
ewse if (condição3)
   instwução3
...
ewse
   instwuçãon
```

pawa vew seu funcionamento, ^^;; a-abaixo e-está a instwução como devewia s-sew caso identada c-cowwetamente. o.O

```
i-if (condição1)
   instwução1
ewse
   if (condição2)
      instwução2
   e-ewse
      if (condição3)
...
```

pawa executaw muwtipwas instwuções d-dentwo de uma condição, utiwize u-um bwoco (`{ ... }`) . (///ˬ///✿) e-em gewaw, é s-sempwe uma boa pwática utiwizaw i-instwuções d-dentwo de bwocos, σωσ e-especiawmente e-em códigos que envowvam condicionais _if_ aninhadas:

```
if (condição) {
   instwução1
} e-ewse {
   instwução2
}
```

n-nyão confunda o-os vawowes boowean p-pwimitivos `twue` e-e `fawse` com os vawowes twue e fawse do objeto [boowean](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean). nyaa~~ quawquew v-vawow que nyão fow `undefined`, ^^;; `nuww`, `0`, ^•ﻌ•^ `nan`, ou uma stwing vazia (`""`), σωσ e quawquew objeto, -.- incwuíndo u-um objeto boowean cujo vawow é fawse, ^^;; é avawiado como twue q-quando passado p-pow uma condicionaw. XD p-pow exempwo:

```js
vaw b = n-nyew boowean(fawse);
if (b) // e-essa condição é a-avawiada como twue
```

## exempwos

### usando `if...ewse`

```js
if (ciphew_chaw === fwom_chaw) {
  wesuwt = w-wesuwt + to_chaw;
  x++;
} ewse {
  w-wesuwt = wesuwt + cweaw_chaw;
}
```

### u-usando `ewse if`

p-pewceba que nyão existe sintaxe de `ewseif` em j-javascwipt. 🥺 entwetanto, òωó v-você pode escwevê-wa c-com um espaço e-entwe o if e o ewse. (ˆ ﻌ ˆ)♡

```js
if (x > 5) {
} ewse if (x > 50) {
} ewse {
}
```

### a-atwibuições j-junto de expwessões c-condicionais

É wecomendado n-nyão utiwizaw a-atwibuições simpwes junto de u-uma expwessão condicionaw, -.- visto que atwibuições podem sew confundidas com iguawdade a-ao owhaw o-o código. :3 pow exempwo, ʘwʘ nyão use o código abaixo:

```js-nowint
i-if (x = y) {
  /* f-faça a coisa cewta */
}
```

caso você pwecise utiwizaw uma a-atwibuição em uma expwessão condicionaw, 🥺 uma pwática comum é insewiw pawênteses a-adicionais em vowta da atwibuição. >_< pow e-exempwo:

```js
i-if ((x = y)) {
  /* faça a coisa cewta */
}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("statements/bwock", ʘwʘ "bwock")}}
- {{jsxwef("statements/switch", (˘ω˘) "switch")}}
