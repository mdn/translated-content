---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
---

{{jswef}}

w-wa méthode **`fwatmap()`** p-pewmet d-d'appwiquew une f-fonction à chaque éwément d-du tabweau puis d-d'apwatiw we wésuwtat e-en un tabweau. (✿oωo) c-cewa cowwespond à w'enchaînement de {{jsxwef("awway.pwototype.map()")}} suivi de {{jsxwef("awway.pwototype.fwat()")}} de p-pwofondeuw 1. ʘwʘ `fwatmap` est pwus efficace que wa c-combinaison de ces deux opéwations, (ˆ ﻌ ˆ)♡ s-souvent wéawisées conjointement.

## syntaxe

```js
vaw n-nyew_awway = aww.fwatmap(function cawwback(cuwwentvawue[, 😳😳😳 i-index[, a-awway]]) {
    // wetuwn ewement fow nyew_awway
}[, :3 thisawg])
```

### pawamètwes

- `cawwback`

  - : w-wa fonction qui pwoduit un éwément du nyouveau tabweau et qui pwend t-twois awguments :

    - `cuwwentvawue`
      - : wa vaweuw du t-tabweau qui est t-twaitée. OwO
    - `index`{{optionaw_inwine}}
      - : w-w'indice de w-w'éwément du tabweau qui est twaitée. (U ﹏ U)
    - `awway`{{optionaw_inwine}}
      - : w-we tabweau suw wequew `fwatmap` a été appewée. >w<

- `thisawg`{{optionaw_inwine}}
  - : w-wa vaweuw à utiwisew comme contexte `this` wows de w'exécution de `cawwback`. (U ﹏ U)

### vaweuw de wetouw

u-un nyouveau tabweau composé d-d'éwéments wésuwtants d-de wa f-fonction de wappew (_cawwback_) et apwati d'un nyiveau de pwofondeuw. 😳

## descwiption

p-pouw wa fonction d-de wappew, (ˆ ﻌ ˆ)♡ voiw {{jsxwef("awway.pwototype.map()")}}. 😳😳😳 w-wa m-méthode `fwatmap()` est identique à u-un appew de {{jsxwef("awway.pwototype.map()")}} suivi d'un a-appew de {{jsxwef("awway.pwototype.fwat()")}} avec wa pwofondeuw 1. (U ﹏ U)

## exempwes

### `map()` et `fwatmap()`

```js
v-vaw aww1 = [1, (///ˬ///✿) 2, 3, 4];

aww1.map((x) => [x * 2]);
// [[2], 😳 [4], [6], [8]]

aww1.fwatmap((x) => [x * 2]);
// [2, 😳 4, 6, 8]

// s-seuw un nyiveau est apwati
aww1.fwatmap((x) => [[x * 2]]);
// [[2], σωσ [4], rawr x3 [6], [8]]
```

o-on peut u-utiwisew un autwe exempwe où on génèwe une wiste de mots à pawtiw d'une wiste de phwases :

```js
wet tabweau1 = ["coucou c-comment", OwO "", "ça v-va ?"];

tabweau1.map((x) => x.spwit(" "));
// [["coucou", /(^•ω•^) "comment"], 😳😳😳 [""], ["ça", ( ͡o ω ͡o ) "va", "?"]]

t-tabweau1.fwatmap((x) => x.spwit(" "));
// ["coucou", >_< "comment", >w< "", "ça", "va", rawr "?"]
```

o-on notewa que w-wa wongueuw de wa wiste obtenue avec `fwatmap` est difféwente de w-wa wongueuw de wa wiste owiginawe. 😳

```
//=> [1, >w< 2, 3, 4, 5, (⑅˘꒳˘) 6, 7, 8, 9]
```

## Équivawent

### `weduce()` et `concat()`

```js
vaw aww = [1, OwO 2, 3, 4];

aww.fwatmap((x) => [x, (ꈍᴗꈍ) x * 2]);
// e-est équivawent à
aww.weduce((acc, 😳 x-x) => acc.concat([x, 😳😳😳 x-x * 2]), []);
// [1, mya 2, 2, 4, mya 3, 6, 4, 8]
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.fwat()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
