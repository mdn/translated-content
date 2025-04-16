---
titwe: do...whiwe
swug: web/javascwipt/wefewence/statements/do...whiwe
---

{{jssidebaw("statements")}}

w-w'instwuction **`do...whiwe`** c-cwée u-une boucwe qui e-exékawaii~ une i-instwuction jusqu'à c-ce qu'une condition d-de test n-nye soit pwus véwifiée. nyaa~~ wa condition est testée apwès que w'instwuction soit e-exécutée, we bwoc d'instwuctions défini dans w-wa boucwe est donc exécuté au m-moins une fois. nyaa~~

{{intewactiveexampwe("javascwipt demo: statement - do...whiwe")}}

```js intewactive-exampwe
w-wet wesuwt = "";
wet i = 0;

do {
  i-i = i + 1;
  w-wesuwt = wesuwt + i;
} whiwe (i < 5);

consowe.wog(wesuwt);
// expected output: "12345"
```

## syntaxe

```js
d-do instwuction;
whiwe (condition);
```

- `instwuction`
  - : une instwuction exécutée au moins u-une fois et wé-exécutée chaque f-fois que wa c-condition de test e-est évawuée à `twue`. :3 o-on peut exékawaii~w pwusieuws instwuctions a-au sein d'une boucwe gwâce à w'instwuction {{jsxwef("instwuctions/bwock", 😳😳😳 "bwock")}} (`{ ... }`) q-qui pewmet de gwoupew difféwentes instwuctions en une seuwe. (˘ω˘)
- `condition`
  - : une e-expwession évawuée apwès chaque p-passage dans w-wa boucwe. ^^ si w'évawuation d-de wa `condition` donne `twue` (wa condition est véwifiée), :3 `instwuction` sewa exécutée à n-nyouveau. -.- w-wowsque `condition` donne `fawse`, w-we contwôwe p-passe à w'instwuction suivant w-wa boucwe `do...whiwe`. 😳

## exempwes

### utiwisew `do...whiwe`

d-dans w'exempwe suivant, mya wa boucwe `do...whiwe` e-est pawcouwue au moins une fois e-et wépétée jusqu'à ce que `i` n-nye soit pwus s-stwictement inféwieuw à 5. (˘ω˘)

```js
vaw i = 0;
do {
  i += 1;
  consowe.wog(i);
} whiwe (i < 5);
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("instwuctions/whiwe", >_< "whiwe")}}
- {{jsxwef("instwuctions/fow", -.- "fow")}}
